var os = Object.defineProperty;
var ls = (E, e, C) => e in E ? os(E, e, { enumerable: !0, configurable: !0, writable: !0, value: C }) : E[e] = C;
var ee = (E, e, C) => (ls(E, typeof e != "symbol" ? e + "" : e, C), C), Ke = (E, e, C) => {
  if (!e.has(E))
    throw TypeError("Cannot " + C);
};
var t = (E, e, C) => (Ke(E, e, "read from private field"), C ? C.call(E) : e.get(E)), O = (E, e, C) => {
  if (e.has(E))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(E) : e.set(E, C);
}, Q = (E, e, C, n) => (Ke(E, e, "write to private field"), n ? n.call(E, C) : e.set(E, C), C);
var ue = (E, e, C, n) => ({
  set _(g) {
    Q(E, e, g, C);
  },
  get _() {
    return t(E, e, n);
  }
}), W = (E, e, C) => (Ke(E, e, "access private method"), C);
function getAugmentedNamespace(E) {
  if (E.__esModule)
    return E;
  var e = E.default;
  if (typeof e == "function") {
    var C = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    C.prototype = e.prototype;
  } else
    C = {};
  return Object.defineProperty(C, "__esModule", { value: !0 }), Object.keys(E).forEach(function(n) {
    var g = Object.getOwnPropertyDescriptor(E, n);
    Object.defineProperty(C, n, g.get ? g : {
      enumerable: !0,
      get: function() {
        return E[n];
      }
    });
  }), C;
}
function commonjsRequire(E) {
  throw new Error('Could not dynamically require "' + E + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pdf = { exports: {} };
const __viteBrowserExternal = {}, __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$5 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
(function(module, exports) {
  (function(e, C) {
    module.exports = e.pdfjsLib = C();
  })(globalThis, () => (
    /******/
    (() => {
      var __webpack_modules__ = [
        ,
        /* 1 */
        /***/
        (E, e) => {
          var Qt;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.VerbosityLevel = e.Util = e.UnknownErrorException = e.UnexpectedResponseException = e.TextRenderingMode = e.RenderingIntentFlag = e.PromiseCapability = e.PermissionFlag = e.PasswordResponses = e.PasswordException = e.PageActionEventType = e.OPS = e.MissingPDFException = e.MAX_IMAGE_SIZE_TO_CACHE = e.LINE_FACTOR = e.LINE_DESCENT_FACTOR = e.InvalidPDFException = e.ImageKind = e.IDENTITY_MATRIX = e.FormatError = e.FeatureTest = e.FONT_IDENTITY_MATRIX = e.DocumentActionEventType = e.CMapCompressionType = e.BaseException = e.BASELINE_FACTOR = e.AnnotationType = e.AnnotationReplyType = e.AnnotationPrefix = e.AnnotationMode = e.AnnotationFlag = e.AnnotationFieldFlag = e.AnnotationEditorType = e.AnnotationEditorPrefix = e.AnnotationEditorParamsType = e.AnnotationBorderStyleType = e.AnnotationActionEventType = e.AbortException = void 0, e.assert = at, e.bytesToString = nt, e.createValidAbsoluteUrl = wt, e.getModificationDate = kt, e.getUuid = Kt, e.getVerbosityLevel = Y, e.info = tt, e.isArrayBuffer = mt, e.isArrayEqual = Tt, e.isNodeJS = void 0, e.normalizeUnicode = Gt, e.objectFromMap = st, e.objectSize = St, e.setVerbosityLevel = M, e.shadow = Pt, e.string32 = pt, e.stringToBytes = _t, e.stringToPDFString = lt, e.stringToUTF8String = it, e.unreachable = U, e.utf8StringToString = et, e.warn = q;
          const C = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
          e.isNodeJS = C;
          const n = [1, 0, 0, 1, 0, 0];
          e.IDENTITY_MATRIX = n;
          const g = [1e-3, 0, 0, 1e-3, 0, 0];
          e.FONT_IDENTITY_MATRIX = g;
          const G = 1e7;
          e.MAX_IMAGE_SIZE_TO_CACHE = G;
          const B = 1.35;
          e.LINE_FACTOR = B;
          const F = 0.35;
          e.LINE_DESCENT_FACTOR = F;
          const f = F / B;
          e.BASELINE_FACTOR = f;
          const d = {
            ANY: 1,
            DISPLAY: 2,
            PRINT: 4,
            SAVE: 8,
            ANNOTATIONS_FORMS: 16,
            ANNOTATIONS_STORAGE: 32,
            ANNOTATIONS_DISABLE: 64,
            OPLIST: 256
          };
          e.RenderingIntentFlag = d;
          const r = {
            DISABLE: 0,
            ENABLE: 1,
            ENABLE_FORMS: 2,
            ENABLE_STORAGE: 3
          };
          e.AnnotationMode = r;
          const I = "pdfjs_internal_editor_";
          e.AnnotationEditorPrefix = I;
          const k = {
            DISABLE: -1,
            NONE: 0,
            FREETEXT: 3,
            STAMP: 13,
            INK: 15
          };
          e.AnnotationEditorType = k;
          const y = {
            RESIZE: 1,
            CREATE: 2,
            FREETEXT_SIZE: 11,
            FREETEXT_COLOR: 12,
            FREETEXT_OPACITY: 13,
            INK_COLOR: 21,
            INK_THICKNESS: 22,
            INK_OPACITY: 23
          };
          e.AnnotationEditorParamsType = y;
          const h = {
            PRINT: 4,
            MODIFY_CONTENTS: 8,
            COPY: 16,
            MODIFY_ANNOTATIONS: 32,
            FILL_INTERACTIVE_FORMS: 256,
            COPY_FOR_ACCESSIBILITY: 512,
            ASSEMBLE: 1024,
            PRINT_HIGH_QUALITY: 2048
          };
          e.PermissionFlag = h;
          const _ = {
            FILL: 0,
            STROKE: 1,
            FILL_STROKE: 2,
            INVISIBLE: 3,
            FILL_ADD_TO_PATH: 4,
            STROKE_ADD_TO_PATH: 5,
            FILL_STROKE_ADD_TO_PATH: 6,
            ADD_TO_PATH: 7,
            FILL_STROKE_MASK: 3,
            ADD_TO_PATH_FLAG: 4
          };
          e.TextRenderingMode = _;
          const m = {
            GRAYSCALE_1BPP: 1,
            RGB_24BPP: 2,
            RGBA_32BPP: 3
          };
          e.ImageKind = m;
          const P = {
            TEXT: 1,
            LINK: 2,
            FREETEXT: 3,
            LINE: 4,
            SQUARE: 5,
            CIRCLE: 6,
            POLYGON: 7,
            POLYLINE: 8,
            HIGHLIGHT: 9,
            UNDERLINE: 10,
            SQUIGGLY: 11,
            STRIKEOUT: 12,
            STAMP: 13,
            CARET: 14,
            INK: 15,
            POPUP: 16,
            FILEATTACHMENT: 17,
            SOUND: 18,
            MOVIE: 19,
            WIDGET: 20,
            SCREEN: 21,
            PRINTERMARK: 22,
            TRAPNET: 23,
            WATERMARK: 24,
            THREED: 25,
            REDACT: 26
          };
          e.AnnotationType = P;
          const A = {
            GROUP: "Group",
            REPLY: "R"
          };
          e.AnnotationReplyType = A;
          const u = {
            INVISIBLE: 1,
            HIDDEN: 2,
            PRINT: 4,
            NOZOOM: 8,
            NOROTATE: 16,
            NOVIEW: 32,
            READONLY: 64,
            LOCKED: 128,
            TOGGLENOVIEW: 256,
            LOCKEDCONTENTS: 512
          };
          e.AnnotationFlag = u;
          const S = {
            READONLY: 1,
            REQUIRED: 2,
            NOEXPORT: 4,
            MULTILINE: 4096,
            PASSWORD: 8192,
            NOTOGGLETOOFF: 16384,
            RADIO: 32768,
            PUSHBUTTON: 65536,
            COMBO: 131072,
            EDIT: 262144,
            SORT: 524288,
            FILESELECT: 1048576,
            MULTISELECT: 2097152,
            DONOTSPELLCHECK: 4194304,
            DONOTSCROLL: 8388608,
            COMB: 16777216,
            RICHTEXT: 33554432,
            RADIOSINUNISON: 33554432,
            COMMITONSELCHANGE: 67108864
          };
          e.AnnotationFieldFlag = S;
          const s = {
            SOLID: 1,
            DASHED: 2,
            BEVELED: 3,
            INSET: 4,
            UNDERLINE: 5
          };
          e.AnnotationBorderStyleType = s;
          const i = {
            E: "Mouse Enter",
            X: "Mouse Exit",
            D: "Mouse Down",
            U: "Mouse Up",
            Fo: "Focus",
            Bl: "Blur",
            PO: "PageOpen",
            PC: "PageClose",
            PV: "PageVisible",
            PI: "PageInvisible",
            K: "Keystroke",
            F: "Format",
            V: "Validate",
            C: "Calculate"
          };
          e.AnnotationActionEventType = i;
          const w = {
            WC: "WillClose",
            WS: "WillSave",
            DS: "DidSave",
            WP: "WillPrint",
            DP: "DidPrint"
          };
          e.DocumentActionEventType = w;
          const b = {
            O: "PageOpen",
            C: "PageClose"
          };
          e.PageActionEventType = b;
          const c = {
            ERRORS: 0,
            WARNINGS: 1,
            INFOS: 5
          };
          e.VerbosityLevel = c;
          const L = {
            NONE: 0,
            BINARY: 1
          };
          e.CMapCompressionType = L;
          const x = {
            dependency: 1,
            setLineWidth: 2,
            setLineCap: 3,
            setLineJoin: 4,
            setMiterLimit: 5,
            setDash: 6,
            setRenderingIntent: 7,
            setFlatness: 8,
            setGState: 9,
            save: 10,
            restore: 11,
            transform: 12,
            moveTo: 13,
            lineTo: 14,
            curveTo: 15,
            curveTo2: 16,
            curveTo3: 17,
            closePath: 18,
            rectangle: 19,
            stroke: 20,
            closeStroke: 21,
            fill: 22,
            eoFill: 23,
            fillStroke: 24,
            eoFillStroke: 25,
            closeFillStroke: 26,
            closeEOFillStroke: 27,
            endPath: 28,
            clip: 29,
            eoClip: 30,
            beginText: 31,
            endText: 32,
            setCharSpacing: 33,
            setWordSpacing: 34,
            setHScale: 35,
            setLeading: 36,
            setFont: 37,
            setTextRenderingMode: 38,
            setTextRise: 39,
            moveText: 40,
            setLeadingMoveText: 41,
            setTextMatrix: 42,
            nextLine: 43,
            showText: 44,
            showSpacedText: 45,
            nextLineShowText: 46,
            nextLineSetSpacingShowText: 47,
            setCharWidth: 48,
            setCharWidthAndBounds: 49,
            setStrokeColorSpace: 50,
            setFillColorSpace: 51,
            setStrokeColor: 52,
            setStrokeColorN: 53,
            setFillColor: 54,
            setFillColorN: 55,
            setStrokeGray: 56,
            setFillGray: 57,
            setStrokeRGBColor: 58,
            setFillRGBColor: 59,
            setStrokeCMYKColor: 60,
            setFillCMYKColor: 61,
            shadingFill: 62,
            beginInlineImage: 63,
            beginImageData: 64,
            endInlineImage: 65,
            paintXObject: 66,
            markPoint: 67,
            markPointProps: 68,
            beginMarkedContent: 69,
            beginMarkedContentProps: 70,
            endMarkedContent: 71,
            beginCompat: 72,
            endCompat: 73,
            paintFormXObjectBegin: 74,
            paintFormXObjectEnd: 75,
            beginGroup: 76,
            endGroup: 77,
            beginAnnotation: 80,
            endAnnotation: 81,
            paintImageMaskXObject: 83,
            paintImageMaskXObjectGroup: 84,
            paintImageXObject: 85,
            paintInlineImageXObject: 86,
            paintInlineImageXObjectGroup: 87,
            paintImageXObjectRepeat: 88,
            paintImageMaskXObjectRepeat: 89,
            paintSolidColorImageMask: 90,
            constructPath: 91
          };
          e.OPS = x;
          const z = {
            NEED_PASSWORD: 1,
            INCORRECT_PASSWORD: 2
          };
          e.PasswordResponses = z;
          let J = c.WARNINGS;
          function M(At) {
            Number.isInteger(At) && (J = At);
          }
          function Y() {
            return J;
          }
          function tt(At) {
            J >= c.INFOS && console.log(`Info: ${At}`);
          }
          function q(At) {
            J >= c.WARNINGS && console.log(`Warning: ${At}`);
          }
          function U(At) {
            throw new Error(At);
          }
          function at(At, v) {
            At || U(v);
          }
          function $(At) {
            switch (At == null ? void 0 : At.protocol) {
              case "http:":
              case "https:":
              case "ftp:":
              case "mailto:":
              case "tel:":
                return !0;
              default:
                return !1;
            }
          }
          function wt(At, v = null, D = null) {
            if (!At)
              return null;
            try {
              if (D && typeof At == "string") {
                if (D.addDefaultProtocol && At.startsWith("www.")) {
                  const ot = At.match(/\./g);
                  (ot == null ? void 0 : ot.length) >= 2 && (At = `http://${At}`);
                }
                if (D.tryConvertEncoding)
                  try {
                    At = it(At);
                  } catch {
                  }
              }
              const ht = v ? new URL(At, v) : new URL(At);
              if ($(ht))
                return ht;
            } catch {
            }
            return null;
          }
          function Pt(At, v, D, ht = !1) {
            return Object.defineProperty(At, v, {
              value: D,
              enumerable: !ht,
              configurable: !0,
              writable: !1
            }), D;
          }
          const N = function() {
            function v(D, ht) {
              this.constructor === v && U("Cannot initialize BaseException."), this.message = D, this.name = ht;
            }
            return v.prototype = new Error(), v.constructor = v, v;
          }();
          e.BaseException = N;
          class a extends N {
            constructor(v, D) {
              super(v, "PasswordException"), this.code = D;
            }
          }
          e.PasswordException = a;
          class p extends N {
            constructor(v, D) {
              super(v, "UnknownErrorException"), this.details = D;
            }
          }
          e.UnknownErrorException = p;
          class l extends N {
            constructor(v) {
              super(v, "InvalidPDFException");
            }
          }
          e.InvalidPDFException = l;
          class T extends N {
            constructor(v) {
              super(v, "MissingPDFException");
            }
          }
          e.MissingPDFException = T;
          class R extends N {
            constructor(v, D) {
              super(v, "UnexpectedResponseException"), this.status = D;
            }
          }
          e.UnexpectedResponseException = R;
          class H extends N {
            constructor(v) {
              super(v, "FormatError");
            }
          }
          e.FormatError = H;
          class K extends N {
            constructor(v) {
              super(v, "AbortException");
            }
          }
          e.AbortException = K;
          function nt(At) {
            (typeof At != "object" || (At == null ? void 0 : At.length) === void 0) && U("Invalid argument for bytesToString");
            const v = At.length, D = 8192;
            if (v < D)
              return String.fromCharCode.apply(null, At);
            const ht = [];
            for (let ot = 0; ot < v; ot += D) {
              const dt = Math.min(ot + D, v), bt = At.subarray(ot, dt);
              ht.push(String.fromCharCode.apply(null, bt));
            }
            return ht.join("");
          }
          function _t(At) {
            typeof At != "string" && U("Invalid argument for stringToBytes");
            const v = At.length, D = new Uint8Array(v);
            for (let ht = 0; ht < v; ++ht)
              D[ht] = At.charCodeAt(ht) & 255;
            return D;
          }
          function pt(At) {
            return String.fromCharCode(At >> 24 & 255, At >> 16 & 255, At >> 8 & 255, At & 255);
          }
          function St(At) {
            return Object.keys(At).length;
          }
          function st(At) {
            const v = /* @__PURE__ */ Object.create(null);
            for (const [D, ht] of At)
              v[D] = ht;
            return v;
          }
          function vt() {
            const At = new Uint8Array(4);
            return At[0] = 1, new Uint32Array(At.buffer, 0, 1)[0] === 1;
          }
          function gt() {
            try {
              return new Function(""), !0;
            } catch {
              return !1;
            }
          }
          class Lt {
            static get isLittleEndian() {
              return Pt(this, "isLittleEndian", vt());
            }
            static get isEvalSupported() {
              return Pt(this, "isEvalSupported", gt());
            }
            static get isOffscreenCanvasSupported() {
              return Pt(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
            }
            static get platform() {
              return typeof navigator > "u" ? Pt(this, "platform", {
                isWin: !1,
                isMac: !1
              }) : Pt(this, "platform", {
                isWin: navigator.platform.includes("Win"),
                isMac: navigator.platform.includes("Mac")
              });
            }
            static get isCSSRoundSupported() {
              var v, D;
              return Pt(this, "isCSSRoundSupported", (D = (v = globalThis.CSS) == null ? void 0 : v.supports) == null ? void 0 : D.call(v, "width: round(1.5px, 1px)"));
            }
          }
          e.FeatureTest = Lt;
          const It = [...Array(256).keys()].map((At) => At.toString(16).padStart(2, "0"));
          class Mt {
            static makeHexColor(v, D, ht) {
              return `#${It[v]}${It[D]}${It[ht]}`;
            }
            static scaleMinMax(v, D) {
              let ht;
              v[0] ? (v[0] < 0 && (ht = D[0], D[0] = D[1], D[1] = ht), D[0] *= v[0], D[1] *= v[0], v[3] < 0 && (ht = D[2], D[2] = D[3], D[3] = ht), D[2] *= v[3], D[3] *= v[3]) : (ht = D[0], D[0] = D[2], D[2] = ht, ht = D[1], D[1] = D[3], D[3] = ht, v[1] < 0 && (ht = D[2], D[2] = D[3], D[3] = ht), D[2] *= v[1], D[3] *= v[1], v[2] < 0 && (ht = D[0], D[0] = D[1], D[1] = ht), D[0] *= v[2], D[1] *= v[2]), D[0] += v[4], D[1] += v[4], D[2] += v[5], D[3] += v[5];
            }
            static transform(v, D) {
              return [v[0] * D[0] + v[2] * D[1], v[1] * D[0] + v[3] * D[1], v[0] * D[2] + v[2] * D[3], v[1] * D[2] + v[3] * D[3], v[0] * D[4] + v[2] * D[5] + v[4], v[1] * D[4] + v[3] * D[5] + v[5]];
            }
            static applyTransform(v, D) {
              const ht = v[0] * D[0] + v[1] * D[2] + D[4], ot = v[0] * D[1] + v[1] * D[3] + D[5];
              return [ht, ot];
            }
            static applyInverseTransform(v, D) {
              const ht = D[0] * D[3] - D[1] * D[2], ot = (v[0] * D[3] - v[1] * D[2] + D[2] * D[5] - D[4] * D[3]) / ht, dt = (-v[0] * D[1] + v[1] * D[0] + D[4] * D[1] - D[5] * D[0]) / ht;
              return [ot, dt];
            }
            static getAxialAlignedBoundingBox(v, D) {
              const ht = this.applyTransform(v, D), ot = this.applyTransform(v.slice(2, 4), D), dt = this.applyTransform([v[0], v[3]], D), bt = this.applyTransform([v[2], v[1]], D);
              return [Math.min(ht[0], ot[0], dt[0], bt[0]), Math.min(ht[1], ot[1], dt[1], bt[1]), Math.max(ht[0], ot[0], dt[0], bt[0]), Math.max(ht[1], ot[1], dt[1], bt[1])];
            }
            static inverseTransform(v) {
              const D = v[0] * v[3] - v[1] * v[2];
              return [v[3] / D, -v[1] / D, -v[2] / D, v[0] / D, (v[2] * v[5] - v[4] * v[3]) / D, (v[4] * v[1] - v[5] * v[0]) / D];
            }
            static singularValueDecompose2dScale(v) {
              const D = [v[0], v[2], v[1], v[3]], ht = v[0] * D[0] + v[1] * D[2], ot = v[0] * D[1] + v[1] * D[3], dt = v[2] * D[0] + v[3] * D[2], bt = v[2] * D[1] + v[3] * D[3], j = (ht + bt) / 2, ct = Math.sqrt((ht + bt) ** 2 - 4 * (ht * bt - dt * ot)) / 2, xt = j + ct || 1, Et = j - ct || 1;
              return [Math.sqrt(xt), Math.sqrt(Et)];
            }
            static normalizeRect(v) {
              const D = v.slice(0);
              return v[0] > v[2] && (D[0] = v[2], D[2] = v[0]), v[1] > v[3] && (D[1] = v[3], D[3] = v[1]), D;
            }
            static intersect(v, D) {
              const ht = Math.max(Math.min(v[0], v[2]), Math.min(D[0], D[2])), ot = Math.min(Math.max(v[0], v[2]), Math.max(D[0], D[2]));
              if (ht > ot)
                return null;
              const dt = Math.max(Math.min(v[1], v[3]), Math.min(D[1], D[3])), bt = Math.min(Math.max(v[1], v[3]), Math.max(D[1], D[3]));
              return dt > bt ? null : [ht, dt, ot, bt];
            }
            static bezierBoundingBox(v, D, ht, ot, dt, bt, j, ct) {
              const xt = [], Et = [[], []];
              let Ft, Ot, Wt, Ct, qt, Vt, Z, o;
              for (let ft = 0; ft < 2; ++ft) {
                if (ft === 0 ? (Ot = 6 * v - 12 * ht + 6 * dt, Ft = -3 * v + 9 * ht - 9 * dt + 3 * j, Wt = 3 * ht - 3 * v) : (Ot = 6 * D - 12 * ot + 6 * bt, Ft = -3 * D + 9 * ot - 9 * bt + 3 * ct, Wt = 3 * ot - 3 * D), Math.abs(Ft) < 1e-12) {
                  if (Math.abs(Ot) < 1e-12)
                    continue;
                  Ct = -Wt / Ot, 0 < Ct && Ct < 1 && xt.push(Ct);
                  continue;
                }
                Z = Ot * Ot - 4 * Wt * Ft, o = Math.sqrt(Z), !(Z < 0) && (qt = (-Ot + o) / (2 * Ft), 0 < qt && qt < 1 && xt.push(qt), Vt = (-Ot - o) / (2 * Ft), 0 < Vt && Vt < 1 && xt.push(Vt));
              }
              let V = xt.length, X;
              const rt = V;
              for (; V--; )
                Ct = xt[V], X = 1 - Ct, Et[0][V] = X * X * X * v + 3 * X * X * Ct * ht + 3 * X * Ct * Ct * dt + Ct * Ct * Ct * j, Et[1][V] = X * X * X * D + 3 * X * X * Ct * ot + 3 * X * Ct * Ct * bt + Ct * Ct * Ct * ct;
              return Et[0][rt] = v, Et[1][rt] = D, Et[0][rt + 1] = j, Et[1][rt + 1] = ct, Et[0].length = Et[1].length = rt + 2, [Math.min(...Et[0]), Math.min(...Et[1]), Math.max(...Et[0]), Math.max(...Et[1])];
            }
          }
          e.Util = Mt;
          const ut = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
          function lt(At) {
            if (At[0] >= "ï") {
              let D;
              if (At[0] === "þ" && At[1] === "ÿ" ? D = "utf-16be" : At[0] === "ÿ" && At[1] === "þ" ? D = "utf-16le" : At[0] === "ï" && At[1] === "»" && At[2] === "¿" && (D = "utf-8"), D)
                try {
                  const ht = new TextDecoder(D, {
                    fatal: !0
                  }), ot = _t(At);
                  return ht.decode(ot);
                } catch (ht) {
                  q(`stringToPDFString: "${ht}".`);
                }
            }
            const v = [];
            for (let D = 0, ht = At.length; D < ht; D++) {
              const ot = ut[At.charCodeAt(D)];
              v.push(ot ? String.fromCharCode(ot) : At.charAt(D));
            }
            return v.join("");
          }
          function it(At) {
            return decodeURIComponent(escape(At));
          }
          function et(At) {
            return unescape(encodeURIComponent(At));
          }
          function mt(At) {
            return typeof At == "object" && (At == null ? void 0 : At.byteLength) !== void 0;
          }
          function Tt(At, v) {
            if (At.length !== v.length)
              return !1;
            for (let D = 0, ht = At.length; D < ht; D++)
              if (At[D] !== v[D])
                return !1;
            return !0;
          }
          function kt(At = /* @__PURE__ */ new Date()) {
            return [At.getUTCFullYear().toString(), (At.getUTCMonth() + 1).toString().padStart(2, "0"), At.getUTCDate().toString().padStart(2, "0"), At.getUTCHours().toString().padStart(2, "0"), At.getUTCMinutes().toString().padStart(2, "0"), At.getUTCSeconds().toString().padStart(2, "0")].join("");
          }
          class Bt {
            constructor() {
              O(this, Qt, !1);
              this.promise = new Promise((v, D) => {
                this.resolve = (ht) => {
                  Q(this, Qt, !0), v(ht);
                }, this.reject = (ht) => {
                  Q(this, Qt, !0), D(ht);
                };
              });
            }
            get settled() {
              return t(this, Qt);
            }
          }
          Qt = new WeakMap(), e.PromiseCapability = Bt;
          let Ut = null, $t = null;
          function Gt(At) {
            return Ut || (Ut = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, $t = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), At.replaceAll(Ut, (v, D, ht) => D ? D.normalize("NFKC") : $t.get(ht));
          }
          function Kt() {
            if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
              return crypto.randomUUID();
            const At = new Uint8Array(32);
            if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
              crypto.getRandomValues(At);
            else
              for (let v = 0; v < 32; v++)
                At[v] = Math.floor(Math.random() * 255);
            return nt(At);
          }
          const Xt = "pdfjs_internal_id_";
          e.AnnotationPrefix = Xt;
        },
        /* 2 */
        /***/
        (__unused_webpack_module, exports, __w_pdfjs_require__) => {
          var E, C, n, g, de, B, Me, f, d, r, I, k, y, h, _, m, Le, A, u, Ze, s, i;
          Object.defineProperty(exports, "__esModule", {
            value: !0
          }), exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultFilterFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0, Object.defineProperty(exports, "SVGGraphics", {
            enumerable: !0,
            get: function() {
              return _displaySvg.SVGGraphics;
            }
          }), exports.build = void 0, exports.getDocument = getDocument, exports.version = void 0;
          var _util = __w_pdfjs_require__(1), _annotation_storage = __w_pdfjs_require__(3), _display_utils = __w_pdfjs_require__(6), _font_loader = __w_pdfjs_require__(9), _displayNode_utils = __w_pdfjs_require__(10), _canvas = __w_pdfjs_require__(11), _worker_options = __w_pdfjs_require__(14), _message_handler = __w_pdfjs_require__(15), _metadata = __w_pdfjs_require__(16), _optional_content_config = __w_pdfjs_require__(17), _transport_stream = __w_pdfjs_require__(18), _displayFetch_stream = __w_pdfjs_require__(19), _displayNetwork = __w_pdfjs_require__(22), _displayNode_stream = __w_pdfjs_require__(23), _displaySvg = __w_pdfjs_require__(24), _xfa_text = __w_pdfjs_require__(25);
          const DEFAULT_RANGE_CHUNK_SIZE = 65536, RENDERING_CANCELLED_TIMEOUT = 100, DELAYED_CLEANUP_TIMEOUT = 5e3, DefaultCanvasFactory = _util.isNodeJS ? _displayNode_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
          exports.DefaultCanvasFactory = DefaultCanvasFactory;
          const DefaultCMapReaderFactory = _util.isNodeJS ? _displayNode_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
          exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
          const DefaultFilterFactory = _util.isNodeJS ? _displayNode_utils.NodeFilterFactory : _display_utils.DOMFilterFactory;
          exports.DefaultFilterFactory = DefaultFilterFactory;
          const DefaultStandardFontDataFactory = _util.isNodeJS ? _displayNode_utils.NodeStandardFontDataFactory : _display_utils.DOMStandardFontDataFactory;
          exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
          function getDocument(b) {
            if (typeof b == "string" || b instanceof URL ? b = {
              url: b
            } : (0, _util.isArrayBuffer)(b) && (b = {
              data: b
            }), typeof b != "object")
              throw new Error("Invalid parameter in getDocument, need parameter object.");
            if (!b.url && !b.data && !b.range)
              throw new Error("Invalid parameter object: need either .data, .range or .url");
            const c = new PDFDocumentLoadingTask(), {
              docId: L
            } = c, x = b.url ? getUrlProp(b.url) : null, z = b.data ? getDataProp(b.data) : null, J = b.httpHeaders || null, M = b.withCredentials === !0, Y = b.password ?? null, tt = b.range instanceof PDFDataRangeTransport ? b.range : null, q = Number.isInteger(b.rangeChunkSize) && b.rangeChunkSize > 0 ? b.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
            let U = b.worker instanceof PDFWorker ? b.worker : null;
            const at = b.verbosity, $ = typeof b.docBaseUrl == "string" && !(0, _display_utils.isDataScheme)(b.docBaseUrl) ? b.docBaseUrl : null, wt = typeof b.cMapUrl == "string" ? b.cMapUrl : null, Pt = b.cMapPacked !== !1, N = b.CMapReaderFactory || DefaultCMapReaderFactory, a = typeof b.standardFontDataUrl == "string" ? b.standardFontDataUrl : null, p = b.StandardFontDataFactory || DefaultStandardFontDataFactory, l = b.stopAtErrors !== !0, T = Number.isInteger(b.maxImageSize) && b.maxImageSize > -1 ? b.maxImageSize : -1, R = b.isEvalSupported !== !1, H = typeof b.isOffscreenCanvasSupported == "boolean" ? b.isOffscreenCanvasSupported : !_util.isNodeJS, K = Number.isInteger(b.canvasMaxAreaInBytes) ? b.canvasMaxAreaInBytes : -1, nt = typeof b.disableFontFace == "boolean" ? b.disableFontFace : _util.isNodeJS, _t = b.fontExtraProperties === !0, pt = b.enableXfa === !0, St = b.ownerDocument || globalThis.document, st = b.disableRange === !0, vt = b.disableStream === !0, gt = b.disableAutoFetch === !0, Lt = b.pdfBug === !0, It = tt ? tt.length : b.length ?? NaN, Mt = typeof b.useSystemFonts == "boolean" ? b.useSystemFonts : !_util.isNodeJS && !nt, ut = typeof b.useWorkerFetch == "boolean" ? b.useWorkerFetch : N === _display_utils.DOMCMapReaderFactory && p === _display_utils.DOMStandardFontDataFactory && wt && a && (0, _display_utils.isValidFetchUrl)(wt, document.baseURI) && (0, _display_utils.isValidFetchUrl)(a, document.baseURI), lt = b.canvasFactory || new DefaultCanvasFactory({
              ownerDocument: St
            }), it = b.filterFactory || new DefaultFilterFactory({
              docId: L,
              ownerDocument: St
            }), et = null;
            (0, _util.setVerbosityLevel)(at);
            const mt = {
              canvasFactory: lt,
              filterFactory: it
            };
            if (ut || (mt.cMapReaderFactory = new N({
              baseUrl: wt,
              isCompressed: Pt
            }), mt.standardFontDataFactory = new p({
              baseUrl: a
            })), !U) {
              const Bt = {
                verbosity: at,
                port: _worker_options.GlobalWorkerOptions.workerPort
              };
              U = Bt.port ? PDFWorker.fromPort(Bt) : new PDFWorker(Bt), c._worker = U;
            }
            const Tt = {
              docId: L,
              apiVersion: "3.11.174",
              data: z,
              password: Y,
              disableAutoFetch: gt,
              rangeChunkSize: q,
              length: It,
              docBaseUrl: $,
              enableXfa: pt,
              evaluatorOptions: {
                maxImageSize: T,
                disableFontFace: nt,
                ignoreErrors: l,
                isEvalSupported: R,
                isOffscreenCanvasSupported: H,
                canvasMaxAreaInBytes: K,
                fontExtraProperties: _t,
                useSystemFonts: Mt,
                cMapUrl: ut ? wt : null,
                standardFontDataUrl: ut ? a : null
              }
            }, kt = {
              ignoreErrors: l,
              isEvalSupported: R,
              disableFontFace: nt,
              fontExtraProperties: _t,
              enableXfa: pt,
              ownerDocument: St,
              disableAutoFetch: gt,
              pdfBug: Lt,
              styleElement: et
            };
            return U.promise.then(function() {
              if (c.destroyed)
                throw new Error("Loading aborted");
              const Bt = _fetchDocument(U, Tt), Ut = new Promise(function($t) {
                let Gt;
                tt ? Gt = new _transport_stream.PDFDataTransportStream({
                  length: It,
                  initialData: tt.initialData,
                  progressiveDone: tt.progressiveDone,
                  contentDispositionFilename: tt.contentDispositionFilename,
                  disableRange: st,
                  disableStream: vt
                }, tt) : z || (Gt = ((Xt) => _util.isNodeJS ? new _displayNode_stream.PDFNodeStream(Xt) : (0, _display_utils.isValidFetchUrl)(Xt.url) ? new _displayFetch_stream.PDFFetchStream(Xt) : new _displayNetwork.PDFNetworkStream(Xt))({
                  url: x,
                  length: It,
                  httpHeaders: J,
                  withCredentials: M,
                  rangeChunkSize: q,
                  disableRange: st,
                  disableStream: vt
                })), $t(Gt);
              });
              return Promise.all([Bt, Ut]).then(function([$t, Gt]) {
                if (c.destroyed)
                  throw new Error("Loading aborted");
                const Kt = new _message_handler.MessageHandler(L, $t, U.port), Xt = new WorkerTransport(Kt, c, Gt, kt, mt);
                c._transport = Xt, Kt.send("Ready", null);
              });
            }).catch(c._capability.reject), c;
          }
          async function _fetchDocument(b, c) {
            if (b.destroyed)
              throw new Error("Worker was destroyed");
            const L = await b.messageHandler.sendWithPromise("GetDocRequest", c, c.data ? [c.data.buffer] : null);
            if (b.destroyed)
              throw new Error("Worker was destroyed");
            return L;
          }
          function getUrlProp(b) {
            if (b instanceof URL)
              return b.href;
            try {
              return new URL(b, window.location).href;
            } catch {
              if (_util.isNodeJS && typeof b == "string")
                return b;
            }
            throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
          }
          function getDataProp(b) {
            if (_util.isNodeJS && typeof Buffer < "u" && b instanceof Buffer)
              throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
            if (b instanceof Uint8Array && b.byteLength === b.buffer.byteLength)
              return b;
            if (typeof b == "string")
              return (0, _util.stringToBytes)(b);
            if (typeof b == "object" && !isNaN(b == null ? void 0 : b.length) || (0, _util.isArrayBuffer)(b))
              return new Uint8Array(b);
            throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
          }
          const e = class e {
            constructor() {
              this._capability = new _util.PromiseCapability(), this._transport = null, this._worker = null, this.docId = `d${ue(e, E)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
            }
            get promise() {
              return this._capability.promise;
            }
            async destroy() {
              var c, L, x;
              this.destroyed = !0;
              try {
                (c = this._worker) != null && c.port && (this._worker._pendingDestroy = !0), await ((L = this._transport) == null ? void 0 : L.destroy());
              } catch (z) {
                throw (x = this._worker) != null && x.port && delete this._worker._pendingDestroy, z;
              }
              this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
            }
          };
          E = new WeakMap(), O(e, E, 0);
          let PDFDocumentLoadingTask = e;
          exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
          class PDFDataRangeTransport {
            constructor(c, L, x = !1, z = null) {
              this.length = c, this.initialData = L, this.progressiveDone = x, this.contentDispositionFilename = z, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = new _util.PromiseCapability();
            }
            addRangeListener(c) {
              this._rangeListeners.push(c);
            }
            addProgressListener(c) {
              this._progressListeners.push(c);
            }
            addProgressiveReadListener(c) {
              this._progressiveReadListeners.push(c);
            }
            addProgressiveDoneListener(c) {
              this._progressiveDoneListeners.push(c);
            }
            onDataRange(c, L) {
              for (const x of this._rangeListeners)
                x(c, L);
            }
            onDataProgress(c, L) {
              this._readyCapability.promise.then(() => {
                for (const x of this._progressListeners)
                  x(c, L);
              });
            }
            onDataProgressiveRead(c) {
              this._readyCapability.promise.then(() => {
                for (const L of this._progressiveReadListeners)
                  L(c);
              });
            }
            onDataProgressiveDone() {
              this._readyCapability.promise.then(() => {
                for (const c of this._progressiveDoneListeners)
                  c();
              });
            }
            transportReady() {
              this._readyCapability.resolve();
            }
            requestDataRange(c, L) {
              (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
            }
            abort() {
            }
          }
          exports.PDFDataRangeTransport = PDFDataRangeTransport;
          class PDFDocumentProxy {
            constructor(c, L) {
              this._pdfInfo = c, this._transport = L, Object.defineProperty(this, "getJavaScript", {
                value: () => ((0, _display_utils.deprecated)("`PDFDocumentProxy.getJavaScript`, please use `PDFDocumentProxy.getJSActions` instead."), this.getJSActions().then((x) => {
                  if (!x)
                    return x;
                  const z = [];
                  for (const J in x)
                    z.push(...x[J]);
                  return z;
                }))
              });
            }
            get annotationStorage() {
              return this._transport.annotationStorage;
            }
            get filterFactory() {
              return this._transport.filterFactory;
            }
            get numPages() {
              return this._pdfInfo.numPages;
            }
            get fingerprints() {
              return this._pdfInfo.fingerprints;
            }
            get isPureXfa() {
              return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
            }
            get allXfaHtml() {
              return this._transport._htmlForXfa;
            }
            getPage(c) {
              return this._transport.getPage(c);
            }
            getPageIndex(c) {
              return this._transport.getPageIndex(c);
            }
            getDestinations() {
              return this._transport.getDestinations();
            }
            getDestination(c) {
              return this._transport.getDestination(c);
            }
            getPageLabels() {
              return this._transport.getPageLabels();
            }
            getPageLayout() {
              return this._transport.getPageLayout();
            }
            getPageMode() {
              return this._transport.getPageMode();
            }
            getViewerPreferences() {
              return this._transport.getViewerPreferences();
            }
            getOpenAction() {
              return this._transport.getOpenAction();
            }
            getAttachments() {
              return this._transport.getAttachments();
            }
            getJSActions() {
              return this._transport.getDocJSActions();
            }
            getOutline() {
              return this._transport.getOutline();
            }
            getOptionalContentConfig() {
              return this._transport.getOptionalContentConfig();
            }
            getPermissions() {
              return this._transport.getPermissions();
            }
            getMetadata() {
              return this._transport.getMetadata();
            }
            getMarkInfo() {
              return this._transport.getMarkInfo();
            }
            getData() {
              return this._transport.getData();
            }
            saveDocument() {
              return this._transport.saveDocument();
            }
            getDownloadInfo() {
              return this._transport.downloadInfoCapability.promise;
            }
            cleanup(c = !1) {
              return this._transport.startCleanup(c || this.isPureXfa);
            }
            destroy() {
              return this.loadingTask.destroy();
            }
            get loadingParams() {
              return this._transport.loadingParams;
            }
            get loadingTask() {
              return this._transport.loadingTask;
            }
            getFieldObjects() {
              return this._transport.getFieldObjects();
            }
            hasJSActions() {
              return this._transport.hasJSActions();
            }
            getCalculationOrderIds() {
              return this._transport.getCalculationOrderIds();
            }
          }
          exports.PDFDocumentProxy = PDFDocumentProxy;
          class PDFPageProxy {
            constructor(c, L, x, z = !1) {
              O(this, g);
              O(this, B);
              O(this, C, null);
              O(this, n, !1);
              this._pageIndex = c, this._pageInfo = L, this._transport = x, this._stats = z ? new _display_utils.StatTimer() : null, this._pdfBug = z, this.commonObjs = x.commonObjs, this.objs = new PDFObjects(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
            }
            get pageNumber() {
              return this._pageIndex + 1;
            }
            get rotate() {
              return this._pageInfo.rotate;
            }
            get ref() {
              return this._pageInfo.ref;
            }
            get userUnit() {
              return this._pageInfo.userUnit;
            }
            get view() {
              return this._pageInfo.view;
            }
            getViewport({
              scale: c,
              rotation: L = this.rotate,
              offsetX: x = 0,
              offsetY: z = 0,
              dontFlip: J = !1
            } = {}) {
              return new _display_utils.PageViewport({
                viewBox: this.view,
                scale: c,
                rotation: L,
                offsetX: x,
                offsetY: z,
                dontFlip: J
              });
            }
            getAnnotations({
              intent: c = "display"
            } = {}) {
              const L = this._transport.getRenderingIntent(c);
              return this._transport.getAnnotations(this._pageIndex, L.renderingIntent);
            }
            getJSActions() {
              return this._transport.getPageJSActions(this._pageIndex);
            }
            get filterFactory() {
              return this._transport.filterFactory;
            }
            get isPureXfa() {
              return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
            }
            async getXfa() {
              var c;
              return ((c = this._transport._htmlForXfa) == null ? void 0 : c.children[this._pageIndex]) || null;
            }
            render({
              canvasContext: c,
              viewport: L,
              intent: x = "display",
              annotationMode: z = _util.AnnotationMode.ENABLE,
              transform: J = null,
              background: M = null,
              optionalContentConfigPromise: Y = null,
              annotationCanvasMap: tt = null,
              pageColors: q = null,
              printAnnotationStorage: U = null
            }) {
              var p, l;
              (p = this._stats) == null || p.time("Overall");
              const at = this._transport.getRenderingIntent(x, z, U);
              Q(this, n, !1), W(this, B, Me).call(this), Y || (Y = this._transport.getOptionalContentConfig());
              let $ = this._intentStates.get(at.cacheKey);
              $ || ($ = /* @__PURE__ */ Object.create(null), this._intentStates.set(at.cacheKey, $)), $.streamReaderCancelTimeout && (clearTimeout($.streamReaderCancelTimeout), $.streamReaderCancelTimeout = null);
              const wt = !!(at.renderingIntent & _util.RenderingIntentFlag.PRINT);
              $.displayReadyCapability || ($.displayReadyCapability = new _util.PromiseCapability(), $.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
              }, (l = this._stats) == null || l.time("Page Request"), this._pumpOperatorList(at));
              const Pt = (T) => {
                var R, H;
                $.renderTasks.delete(N), (this._maybeCleanupAfterRender || wt) && Q(this, n, !0), W(this, g, de).call(this, !wt), T ? (N.capability.reject(T), this._abortOperatorList({
                  intentState: $,
                  reason: T instanceof Error ? T : new Error(T)
                })) : N.capability.resolve(), (R = this._stats) == null || R.timeEnd("Rendering"), (H = this._stats) == null || H.timeEnd("Overall");
              }, N = new InternalRenderTask({
                callback: Pt,
                params: {
                  canvasContext: c,
                  viewport: L,
                  transform: J,
                  background: M
                },
                objs: this.objs,
                commonObjs: this.commonObjs,
                annotationCanvasMap: tt,
                operatorList: $.operatorList,
                pageIndex: this._pageIndex,
                canvasFactory: this._transport.canvasFactory,
                filterFactory: this._transport.filterFactory,
                useRequestAnimationFrame: !wt,
                pdfBug: this._pdfBug,
                pageColors: q
              });
              ($.renderTasks || ($.renderTasks = /* @__PURE__ */ new Set())).add(N);
              const a = N.task;
              return Promise.all([$.displayReadyCapability.promise, Y]).then(([T, R]) => {
                var H;
                if (this.destroyed) {
                  Pt();
                  return;
                }
                (H = this._stats) == null || H.time("Rendering"), N.initializeGraphics({
                  transparency: T,
                  optionalContentConfig: R
                }), N.operatorListChanged();
              }).catch(Pt), a;
            }
            getOperatorList({
              intent: c = "display",
              annotationMode: L = _util.AnnotationMode.ENABLE,
              printAnnotationStorage: x = null
            } = {}) {
              var tt;
              function z() {
                M.operatorList.lastChunk && (M.opListReadCapability.resolve(M.operatorList), M.renderTasks.delete(Y));
              }
              const J = this._transport.getRenderingIntent(c, L, x, !0);
              let M = this._intentStates.get(J.cacheKey);
              M || (M = /* @__PURE__ */ Object.create(null), this._intentStates.set(J.cacheKey, M));
              let Y;
              return M.opListReadCapability || (Y = /* @__PURE__ */ Object.create(null), Y.operatorListChanged = z, M.opListReadCapability = new _util.PromiseCapability(), (M.renderTasks || (M.renderTasks = /* @__PURE__ */ new Set())).add(Y), M.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
              }, (tt = this._stats) == null || tt.time("Page Request"), this._pumpOperatorList(J)), M.opListReadCapability.promise;
            }
            streamTextContent({
              includeMarkedContent: c = !1,
              disableNormalization: L = !1
            } = {}) {
              return this._transport.messageHandler.sendWithStream("GetTextContent", {
                pageIndex: this._pageIndex,
                includeMarkedContent: c === !0,
                disableNormalization: L === !0
              }, {
                highWaterMark: 100,
                size(z) {
                  return z.items.length;
                }
              });
            }
            getTextContent(c = {}) {
              if (this._transport._htmlForXfa)
                return this.getXfa().then((x) => _xfa_text.XfaText.textContent(x));
              const L = this.streamTextContent(c);
              return new Promise(function(x, z) {
                function J() {
                  M.read().then(function({
                    value: tt,
                    done: q
                  }) {
                    if (q) {
                      x(Y);
                      return;
                    }
                    Object.assign(Y.styles, tt.styles), Y.items.push(...tt.items), J();
                  }, z);
                }
                const M = L.getReader(), Y = {
                  items: [],
                  styles: /* @__PURE__ */ Object.create(null)
                };
                J();
              });
            }
            getStructTree() {
              return this._transport.getStructTree(this._pageIndex);
            }
            _destroy() {
              this.destroyed = !0;
              const c = [];
              for (const L of this._intentStates.values())
                if (this._abortOperatorList({
                  intentState: L,
                  reason: new Error("Page was destroyed."),
                  force: !0
                }), !L.opListReadCapability)
                  for (const x of L.renderTasks)
                    c.push(x.completed), x.cancel();
              return this.objs.clear(), Q(this, n, !1), W(this, B, Me).call(this), Promise.all(c);
            }
            cleanup(c = !1) {
              Q(this, n, !0);
              const L = W(this, g, de).call(this, !1);
              return c && L && this._stats && (this._stats = new _display_utils.StatTimer()), L;
            }
            _startRenderPage(c, L) {
              var z, J;
              const x = this._intentStates.get(L);
              x && ((z = this._stats) == null || z.timeEnd("Page Request"), (J = x.displayReadyCapability) == null || J.resolve(c));
            }
            _renderPageChunk(c, L) {
              for (let x = 0, z = c.length; x < z; x++)
                L.operatorList.fnArray.push(c.fnArray[x]), L.operatorList.argsArray.push(c.argsArray[x]);
              L.operatorList.lastChunk = c.lastChunk, L.operatorList.separateAnnots = c.separateAnnots;
              for (const x of L.renderTasks)
                x.operatorListChanged();
              c.lastChunk && W(this, g, de).call(this, !0);
            }
            _pumpOperatorList({
              renderingIntent: c,
              cacheKey: L,
              annotationStorageSerializable: x
            }) {
              const {
                map: z,
                transfers: J
              } = x, Y = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                pageIndex: this._pageIndex,
                intent: c,
                cacheKey: L,
                annotationStorage: z
              }, J).getReader(), tt = this._intentStates.get(L);
              tt.streamReader = Y;
              const q = () => {
                Y.read().then(({
                  value: U,
                  done: at
                }) => {
                  if (at) {
                    tt.streamReader = null;
                    return;
                  }
                  this._transport.destroyed || (this._renderPageChunk(U, tt), q());
                }, (U) => {
                  if (tt.streamReader = null, !this._transport.destroyed) {
                    if (tt.operatorList) {
                      tt.operatorList.lastChunk = !0;
                      for (const at of tt.renderTasks)
                        at.operatorListChanged();
                      W(this, g, de).call(this, !0);
                    }
                    if (tt.displayReadyCapability)
                      tt.displayReadyCapability.reject(U);
                    else if (tt.opListReadCapability)
                      tt.opListReadCapability.reject(U);
                    else
                      throw U;
                  }
                });
              };
              q();
            }
            _abortOperatorList({
              intentState: c,
              reason: L,
              force: x = !1
            }) {
              if (c.streamReader) {
                if (c.streamReaderCancelTimeout && (clearTimeout(c.streamReaderCancelTimeout), c.streamReaderCancelTimeout = null), !x) {
                  if (c.renderTasks.size > 0)
                    return;
                  if (L instanceof _display_utils.RenderingCancelledException) {
                    let z = RENDERING_CANCELLED_TIMEOUT;
                    L.extraDelay > 0 && L.extraDelay < 1e3 && (z += L.extraDelay), c.streamReaderCancelTimeout = setTimeout(() => {
                      c.streamReaderCancelTimeout = null, this._abortOperatorList({
                        intentState: c,
                        reason: L,
                        force: !0
                      });
                    }, z);
                    return;
                  }
                }
                if (c.streamReader.cancel(new _util.AbortException(L.message)).catch(() => {
                }), c.streamReader = null, !this._transport.destroyed) {
                  for (const [z, J] of this._intentStates)
                    if (J === c) {
                      this._intentStates.delete(z);
                      break;
                    }
                  this.cleanup();
                }
              }
            }
            get stats() {
              return this._stats;
            }
          }
          C = new WeakMap(), n = new WeakMap(), g = new WeakSet(), de = function(c = !1) {
            if (W(this, B, Me).call(this), !t(this, n) || this.destroyed)
              return !1;
            if (c)
              return Q(this, C, setTimeout(() => {
                Q(this, C, null), W(this, g, de).call(this, !1);
              }, DELAYED_CLEANUP_TIMEOUT)), !1;
            for (const {
              renderTasks: L,
              operatorList: x
            } of this._intentStates.values())
              if (L.size > 0 || !x.lastChunk)
                return !1;
            return this._intentStates.clear(), this.objs.clear(), Q(this, n, !1), !0;
          }, B = new WeakSet(), Me = function() {
            t(this, C) && (clearTimeout(t(this, C)), Q(this, C, null));
          }, exports.PDFPageProxy = PDFPageProxy;
          class LoopbackPort {
            constructor() {
              O(this, f, /* @__PURE__ */ new Set());
              O(this, d, Promise.resolve());
            }
            postMessage(c, L) {
              const x = {
                data: structuredClone(c, L ? {
                  transfer: L
                } : null)
              };
              t(this, d).then(() => {
                for (const z of t(this, f))
                  z.call(this, x);
              });
            }
            addEventListener(c, L) {
              t(this, f).add(L);
            }
            removeEventListener(c, L) {
              t(this, f).delete(L);
            }
            terminate() {
              t(this, f).clear();
            }
          }
          f = new WeakMap(), d = new WeakMap(), exports.LoopbackPort = LoopbackPort;
          const PDFWorkerUtil = {
            isWorkerDisabled: !1,
            fallbackWorkerSrc: null,
            fakeWorkerId: 0
          };
          exports.PDFWorkerUtil = PDFWorkerUtil;
          {
            if (_util.isNodeJS && typeof commonjsRequire == "function")
              PDFWorkerUtil.isWorkerDisabled = !0, PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
            else if (typeof document == "object") {
              const b = (r = document == null ? void 0 : document.currentScript) == null ? void 0 : r.src;
              b && (PDFWorkerUtil.fallbackWorkerSrc = b.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
            }
            PDFWorkerUtil.isSameOrigin = function(b, c) {
              let L;
              try {
                if (L = new URL(b), !L.origin || L.origin === "null")
                  return !1;
              } catch {
                return !1;
              }
              const x = new URL(c, L);
              return L.origin === x.origin;
            }, PDFWorkerUtil.createCDNWrapper = function(b) {
              const c = `importScripts("${b}");`;
              return URL.createObjectURL(new Blob([c]));
            };
          }
          const _PDFWorker = class _PDFWorker {
            constructor({
              name: b = null,
              port: c = null,
              verbosity: L = (0, _util.getVerbosityLevel)()
            } = {}) {
              var x;
              if (this.name = b, this.destroyed = !1, this.verbosity = L, this._readyCapability = new _util.PromiseCapability(), this._port = null, this._webWorker = null, this._messageHandler = null, c) {
                if ((x = t(_PDFWorker, I)) != null && x.has(c))
                  throw new Error("Cannot use more than one PDFWorker per port.");
                (t(_PDFWorker, I) || Q(_PDFWorker, I, /* @__PURE__ */ new WeakMap())).set(c, this), this._initializeFromPort(c);
                return;
              }
              this._initialize();
            }
            get promise() {
              return this._readyCapability.promise;
            }
            get port() {
              return this._port;
            }
            get messageHandler() {
              return this._messageHandler;
            }
            _initializeFromPort(b) {
              this._port = b, this._messageHandler = new _message_handler.MessageHandler("main", "worker", b), this._messageHandler.on("ready", function() {
              }), this._readyCapability.resolve(), this._messageHandler.send("configure", {
                verbosity: this.verbosity
              });
            }
            _initialize() {
              if (!PDFWorkerUtil.isWorkerDisabled && !_PDFWorker._mainThreadWorkerMessageHandler) {
                let {
                  workerSrc: b
                } = _PDFWorker;
                try {
                  PDFWorkerUtil.isSameOrigin(window.location.href, b) || (b = PDFWorkerUtil.createCDNWrapper(new URL(b, window.location).href));
                  const c = new Worker(b), L = new _message_handler.MessageHandler("main", "worker", c), x = () => {
                    c.removeEventListener("error", z), L.destroy(), c.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
                  }, z = () => {
                    this._webWorker || x();
                  };
                  c.addEventListener("error", z), L.on("test", (M) => {
                    if (c.removeEventListener("error", z), this.destroyed) {
                      x();
                      return;
                    }
                    M ? (this._messageHandler = L, this._port = c, this._webWorker = c, this._readyCapability.resolve(), L.send("configure", {
                      verbosity: this.verbosity
                    })) : (this._setupFakeWorker(), L.destroy(), c.terminate());
                  }), L.on("ready", (M) => {
                    if (c.removeEventListener("error", z), this.destroyed) {
                      x();
                      return;
                    }
                    try {
                      J();
                    } catch {
                      this._setupFakeWorker();
                    }
                  });
                  const J = () => {
                    const M = new Uint8Array();
                    L.send("test", M, [M.buffer]);
                  };
                  J();
                  return;
                } catch {
                  (0, _util.info)("The worker has been disabled.");
                }
              }
              this._setupFakeWorker();
            }
            _setupFakeWorker() {
              PDFWorkerUtil.isWorkerDisabled || ((0, _util.warn)("Setting up fake worker."), PDFWorkerUtil.isWorkerDisabled = !0), _PDFWorker._setupFakeWorkerGlobal.then((b) => {
                if (this.destroyed) {
                  this._readyCapability.reject(new Error("Worker was destroyed"));
                  return;
                }
                const c = new LoopbackPort();
                this._port = c;
                const L = `fake${PDFWorkerUtil.fakeWorkerId++}`, x = new _message_handler.MessageHandler(L + "_worker", L, c);
                b.setup(x, c);
                const z = new _message_handler.MessageHandler(L, L + "_worker", c);
                this._messageHandler = z, this._readyCapability.resolve(), z.send("configure", {
                  verbosity: this.verbosity
                });
              }).catch((b) => {
                this._readyCapability.reject(new Error(`Setting up fake worker failed: "${b.message}".`));
              });
            }
            destroy() {
              var b;
              this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (b = t(_PDFWorker, I)) == null || b.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
            }
            static fromPort(b) {
              var L;
              if (!(b != null && b.port))
                throw new Error("PDFWorker.fromPort - invalid method signature.");
              const c = (L = t(this, I)) == null ? void 0 : L.get(b.port);
              if (c) {
                if (c._pendingDestroy)
                  throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
                return c;
              }
              return new _PDFWorker(b);
            }
            static get workerSrc() {
              if (_worker_options.GlobalWorkerOptions.workerSrc)
                return _worker_options.GlobalWorkerOptions.workerSrc;
              if (PDFWorkerUtil.fallbackWorkerSrc !== null)
                return _util.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'), PDFWorkerUtil.fallbackWorkerSrc;
              throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
            }
            static get _mainThreadWorkerMessageHandler() {
              var b;
              try {
                return ((b = globalThis.pdfjsWorker) == null ? void 0 : b.WorkerMessageHandler) || null;
              } catch {
                return null;
              }
            }
            static get _setupFakeWorkerGlobal() {
              const loader = async () => {
                const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
                if (mainWorkerMessageHandler)
                  return mainWorkerMessageHandler;
                if (_util.isNodeJS && typeof commonjsRequire == "function") {
                  const worker = eval("require")(this.workerSrc);
                  return worker.WorkerMessageHandler;
                }
                return await (0, _display_utils.loadScript)(this.workerSrc), window.pdfjsWorker.WorkerMessageHandler;
              };
              return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
            }
          };
          I = new WeakMap(), O(_PDFWorker, I, void 0);
          let PDFWorker = _PDFWorker;
          exports.PDFWorker = PDFWorker;
          class WorkerTransport {
            constructor(c, L, x, z, J) {
              O(this, m);
              O(this, k, /* @__PURE__ */ new Map());
              O(this, y, /* @__PURE__ */ new Map());
              O(this, h, /* @__PURE__ */ new Map());
              O(this, _, null);
              this.messageHandler = c, this.loadingTask = L, this.commonObjs = new PDFObjects(), this.fontLoader = new _font_loader.FontLoader({
                ownerDocument: z.ownerDocument,
                styleElement: z.styleElement
              }), this._params = z, this.canvasFactory = J.canvasFactory, this.filterFactory = J.filterFactory, this.cMapReaderFactory = J.cMapReaderFactory, this.standardFontDataFactory = J.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = x, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = new _util.PromiseCapability(), this.setupMessageHandler();
            }
            get annotationStorage() {
              return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
            }
            getRenderingIntent(c, L = _util.AnnotationMode.ENABLE, x = null, z = !1) {
              let J = _util.RenderingIntentFlag.DISPLAY, M = _annotation_storage.SerializableEmpty;
              switch (c) {
                case "any":
                  J = _util.RenderingIntentFlag.ANY;
                  break;
                case "display":
                  break;
                case "print":
                  J = _util.RenderingIntentFlag.PRINT;
                  break;
                default:
                  (0, _util.warn)(`getRenderingIntent - invalid intent: ${c}`);
              }
              switch (L) {
                case _util.AnnotationMode.DISABLE:
                  J += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                  break;
                case _util.AnnotationMode.ENABLE:
                  break;
                case _util.AnnotationMode.ENABLE_FORMS:
                  J += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                  break;
                case _util.AnnotationMode.ENABLE_STORAGE:
                  J += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE, M = (J & _util.RenderingIntentFlag.PRINT && x instanceof _annotation_storage.PrintAnnotationStorage ? x : this.annotationStorage).serializable;
                  break;
                default:
                  (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${L}`);
              }
              return z && (J += _util.RenderingIntentFlag.OPLIST), {
                renderingIntent: J,
                cacheKey: `${J}_${M.hash}`,
                annotationStorageSerializable: M
              };
            }
            destroy() {
              var x;
              if (this.destroyCapability)
                return this.destroyCapability.promise;
              this.destroyed = !0, this.destroyCapability = new _util.PromiseCapability(), (x = t(this, _)) == null || x.reject(new Error("Worker was destroyed during onPassword callback"));
              const c = [];
              for (const z of t(this, y).values())
                c.push(z._destroy());
              t(this, y).clear(), t(this, h).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
              const L = this.messageHandler.sendWithPromise("Terminate", null);
              return c.push(L), Promise.all(c).then(() => {
                var z;
                this.commonObjs.clear(), this.fontLoader.clear(), t(this, k).clear(), this.filterFactory.destroy(), (z = this._networkStream) == null || z.cancelAllRequests(new _util.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
              }, this.destroyCapability.reject), this.destroyCapability.promise;
            }
            setupMessageHandler() {
              const {
                messageHandler: c,
                loadingTask: L
              } = this;
              c.on("GetReader", (x, z) => {
                (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (J) => {
                  this._lastProgress = {
                    loaded: J.loaded,
                    total: J.total
                  };
                }, z.onPull = () => {
                  this._fullReader.read().then(function({
                    value: J,
                    done: M
                  }) {
                    if (M) {
                      z.close();
                      return;
                    }
                    (0, _util.assert)(J instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), z.enqueue(new Uint8Array(J), 1, [J]);
                  }).catch((J) => {
                    z.error(J);
                  });
                }, z.onCancel = (J) => {
                  this._fullReader.cancel(J), z.ready.catch((M) => {
                    if (!this.destroyed)
                      throw M;
                  });
                };
              }), c.on("ReaderHeadersReady", (x) => {
                const z = new _util.PromiseCapability(), J = this._fullReader;
                return J.headersReady.then(() => {
                  var M;
                  (!J.isStreamingSupported || !J.isRangeSupported) && (this._lastProgress && ((M = L.onProgress) == null || M.call(L, this._lastProgress)), J.onProgress = (Y) => {
                    var tt;
                    (tt = L.onProgress) == null || tt.call(L, {
                      loaded: Y.loaded,
                      total: Y.total
                    });
                  }), z.resolve({
                    isStreamingSupported: J.isStreamingSupported,
                    isRangeSupported: J.isRangeSupported,
                    contentLength: J.contentLength
                  });
                }, z.reject), z.promise;
              }), c.on("GetRangeReader", (x, z) => {
                (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                const J = this._networkStream.getRangeReader(x.begin, x.end);
                if (!J) {
                  z.close();
                  return;
                }
                z.onPull = () => {
                  J.read().then(function({
                    value: M,
                    done: Y
                  }) {
                    if (Y) {
                      z.close();
                      return;
                    }
                    (0, _util.assert)(M instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), z.enqueue(new Uint8Array(M), 1, [M]);
                  }).catch((M) => {
                    z.error(M);
                  });
                }, z.onCancel = (M) => {
                  J.cancel(M), z.ready.catch((Y) => {
                    if (!this.destroyed)
                      throw Y;
                  });
                };
              }), c.on("GetDoc", ({
                pdfInfo: x
              }) => {
                this._numPages = x.numPages, this._htmlForXfa = x.htmlForXfa, delete x.htmlForXfa, L._capability.resolve(new PDFDocumentProxy(x, this));
              }), c.on("DocException", function(x) {
                let z;
                switch (x.name) {
                  case "PasswordException":
                    z = new _util.PasswordException(x.message, x.code);
                    break;
                  case "InvalidPDFException":
                    z = new _util.InvalidPDFException(x.message);
                    break;
                  case "MissingPDFException":
                    z = new _util.MissingPDFException(x.message);
                    break;
                  case "UnexpectedResponseException":
                    z = new _util.UnexpectedResponseException(x.message, x.status);
                    break;
                  case "UnknownErrorException":
                    z = new _util.UnknownErrorException(x.message, x.details);
                    break;
                  default:
                    (0, _util.unreachable)("DocException - expected a valid Error.");
                }
                L._capability.reject(z);
              }), c.on("PasswordRequest", (x) => {
                if (Q(this, _, new _util.PromiseCapability()), L.onPassword) {
                  const z = (J) => {
                    J instanceof Error ? t(this, _).reject(J) : t(this, _).resolve({
                      password: J
                    });
                  };
                  try {
                    L.onPassword(z, x.code);
                  } catch (J) {
                    t(this, _).reject(J);
                  }
                } else
                  t(this, _).reject(new _util.PasswordException(x.message, x.code));
                return t(this, _).promise;
              }), c.on("DataLoaded", (x) => {
                var z;
                (z = L.onProgress) == null || z.call(L, {
                  loaded: x.length,
                  total: x.length
                }), this.downloadInfoCapability.resolve(x);
              }), c.on("StartRenderPage", (x) => {
                if (this.destroyed)
                  return;
                t(this, y).get(x.pageIndex)._startRenderPage(x.transparency, x.cacheKey);
              }), c.on("commonobj", ([x, z, J]) => {
                var M;
                if (!this.destroyed && !this.commonObjs.has(x))
                  switch (z) {
                    case "Font":
                      const Y = this._params;
                      if ("error" in J) {
                        const U = J.error;
                        (0, _util.warn)(`Error during font loading: ${U}`), this.commonObjs.resolve(x, U);
                        break;
                      }
                      const tt = Y.pdfBug && ((M = globalThis.FontInspector) != null && M.enabled) ? (U, at) => globalThis.FontInspector.fontAdded(U, at) : null, q = new _font_loader.FontFaceObject(J, {
                        isEvalSupported: Y.isEvalSupported,
                        disableFontFace: Y.disableFontFace,
                        ignoreErrors: Y.ignoreErrors,
                        inspectFont: tt
                      });
                      this.fontLoader.bind(q).catch((U) => c.sendWithPromise("FontFallback", {
                        id: x
                      })).finally(() => {
                        !Y.fontExtraProperties && q.data && (q.data = null), this.commonObjs.resolve(x, q);
                      });
                      break;
                    case "FontPath":
                    case "Image":
                    case "Pattern":
                      this.commonObjs.resolve(x, J);
                      break;
                    default:
                      throw new Error(`Got unknown common object type ${z}`);
                  }
              }), c.on("obj", ([x, z, J, M]) => {
                var tt;
                if (this.destroyed)
                  return;
                const Y = t(this, y).get(z);
                if (!Y.objs.has(x))
                  switch (J) {
                    case "Image":
                      if (Y.objs.resolve(x, M), M) {
                        let q;
                        if (M.bitmap) {
                          const {
                            width: U,
                            height: at
                          } = M;
                          q = U * at * 4;
                        } else
                          q = ((tt = M.data) == null ? void 0 : tt.length) || 0;
                        q > _util.MAX_IMAGE_SIZE_TO_CACHE && (Y._maybeCleanupAfterRender = !0);
                      }
                      break;
                    case "Pattern":
                      Y.objs.resolve(x, M);
                      break;
                    default:
                      throw new Error(`Got unknown object type ${J}`);
                  }
              }), c.on("DocProgress", (x) => {
                var z;
                this.destroyed || (z = L.onProgress) == null || z.call(L, {
                  loaded: x.loaded,
                  total: x.total
                });
              }), c.on("FetchBuiltInCMap", (x) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(x) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), c.on("FetchStandardFontData", (x) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(x) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
            }
            getData() {
              return this.messageHandler.sendWithPromise("GetData", null);
            }
            saveDocument() {
              var x;
              this.annotationStorage.size <= 0 && (0, _util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
              const {
                map: c,
                transfers: L
              } = this.annotationStorage.serializable;
              return this.messageHandler.sendWithPromise("SaveDocument", {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: c,
                filename: ((x = this._fullReader) == null ? void 0 : x.filename) ?? null
              }, L).finally(() => {
                this.annotationStorage.resetModified();
              });
            }
            getPage(c) {
              if (!Number.isInteger(c) || c <= 0 || c > this._numPages)
                return Promise.reject(new Error("Invalid page request."));
              const L = c - 1, x = t(this, h).get(L);
              if (x)
                return x;
              const z = this.messageHandler.sendWithPromise("GetPage", {
                pageIndex: L
              }).then((J) => {
                if (this.destroyed)
                  throw new Error("Transport destroyed");
                const M = new PDFPageProxy(L, J, this, this._params.pdfBug);
                return t(this, y).set(L, M), M;
              });
              return t(this, h).set(L, z), z;
            }
            getPageIndex(c) {
              return typeof c != "object" || c === null || !Number.isInteger(c.num) || c.num < 0 || !Number.isInteger(c.gen) || c.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", {
                num: c.num,
                gen: c.gen
              });
            }
            getAnnotations(c, L) {
              return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: c,
                intent: L
              });
            }
            getFieldObjects() {
              return W(this, m, Le).call(this, "GetFieldObjects");
            }
            hasJSActions() {
              return W(this, m, Le).call(this, "HasJSActions");
            }
            getCalculationOrderIds() {
              return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
            }
            getDestinations() {
              return this.messageHandler.sendWithPromise("GetDestinations", null);
            }
            getDestination(c) {
              return typeof c != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
                id: c
              });
            }
            getPageLabels() {
              return this.messageHandler.sendWithPromise("GetPageLabels", null);
            }
            getPageLayout() {
              return this.messageHandler.sendWithPromise("GetPageLayout", null);
            }
            getPageMode() {
              return this.messageHandler.sendWithPromise("GetPageMode", null);
            }
            getViewerPreferences() {
              return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
            }
            getOpenAction() {
              return this.messageHandler.sendWithPromise("GetOpenAction", null);
            }
            getAttachments() {
              return this.messageHandler.sendWithPromise("GetAttachments", null);
            }
            getDocJSActions() {
              return W(this, m, Le).call(this, "GetDocJSActions");
            }
            getPageJSActions(c) {
              return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex: c
              });
            }
            getStructTree(c) {
              return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex: c
              });
            }
            getOutline() {
              return this.messageHandler.sendWithPromise("GetOutline", null);
            }
            getOptionalContentConfig() {
              return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((c) => new _optional_content_config.OptionalContentConfig(c));
            }
            getPermissions() {
              return this.messageHandler.sendWithPromise("GetPermissions", null);
            }
            getMetadata() {
              const c = "GetMetadata", L = t(this, k).get(c);
              if (L)
                return L;
              const x = this.messageHandler.sendWithPromise(c, null).then((z) => {
                var J, M;
                return {
                  info: z[0],
                  metadata: z[1] ? new _metadata.Metadata(z[1]) : null,
                  contentDispositionFilename: ((J = this._fullReader) == null ? void 0 : J.filename) ?? null,
                  contentLength: ((M = this._fullReader) == null ? void 0 : M.contentLength) ?? null
                };
              });
              return t(this, k).set(c, x), x;
            }
            getMarkInfo() {
              return this.messageHandler.sendWithPromise("GetMarkInfo", null);
            }
            async startCleanup(c = !1) {
              if (!this.destroyed) {
                await this.messageHandler.sendWithPromise("Cleanup", null);
                for (const L of t(this, y).values())
                  if (!L.cleanup())
                    throw new Error(`startCleanup: Page ${L.pageNumber} is currently rendering.`);
                this.commonObjs.clear(), c || this.fontLoader.clear(), t(this, k).clear(), this.filterFactory.destroy(!0);
              }
            }
            get loadingParams() {
              const {
                disableAutoFetch: c,
                enableXfa: L
              } = this._params;
              return (0, _util.shadow)(this, "loadingParams", {
                disableAutoFetch: c,
                enableXfa: L
              });
            }
          }
          k = new WeakMap(), y = new WeakMap(), h = new WeakMap(), _ = new WeakMap(), m = new WeakSet(), Le = function(c, L = null) {
            const x = t(this, k).get(c);
            if (x)
              return x;
            const z = this.messageHandler.sendWithPromise(c, L);
            return t(this, k).set(c, z), z;
          };
          class PDFObjects {
            constructor() {
              O(this, u);
              O(this, A, /* @__PURE__ */ Object.create(null));
            }
            get(c, L = null) {
              if (L) {
                const z = W(this, u, Ze).call(this, c);
                return z.capability.promise.then(() => L(z.data)), null;
              }
              const x = t(this, A)[c];
              if (!(x != null && x.capability.settled))
                throw new Error(`Requesting object that isn't resolved yet ${c}.`);
              return x.data;
            }
            has(c) {
              const L = t(this, A)[c];
              return (L == null ? void 0 : L.capability.settled) || !1;
            }
            resolve(c, L = null) {
              const x = W(this, u, Ze).call(this, c);
              x.data = L, x.capability.resolve();
            }
            clear() {
              var c;
              for (const L in t(this, A)) {
                const {
                  data: x
                } = t(this, A)[L];
                (c = x == null ? void 0 : x.bitmap) == null || c.close();
              }
              Q(this, A, /* @__PURE__ */ Object.create(null));
            }
          }
          A = new WeakMap(), u = new WeakSet(), Ze = function(c) {
            var L;
            return (L = t(this, A))[c] || (L[c] = {
              capability: new _util.PromiseCapability(),
              data: null
            });
          };
          class RenderTask {
            constructor(c) {
              O(this, s, null);
              Q(this, s, c), this.onContinue = null;
            }
            get promise() {
              return t(this, s).capability.promise;
            }
            cancel(c = 0) {
              t(this, s).cancel(null, c);
            }
            get separateAnnots() {
              const {
                separateAnnots: c
              } = t(this, s).operatorList;
              if (!c)
                return !1;
              const {
                annotationCanvasMap: L
              } = t(this, s);
              return c.form || c.canvas && (L == null ? void 0 : L.size) > 0;
            }
          }
          s = new WeakMap(), exports.RenderTask = RenderTask;
          const w = class w {
            constructor({
              callback: c,
              params: L,
              objs: x,
              commonObjs: z,
              annotationCanvasMap: J,
              operatorList: M,
              pageIndex: Y,
              canvasFactory: tt,
              filterFactory: q,
              useRequestAnimationFrame: U = !1,
              pdfBug: at = !1,
              pageColors: $ = null
            }) {
              this.callback = c, this.params = L, this.objs = x, this.commonObjs = z, this.annotationCanvasMap = J, this.operatorListIdx = null, this.operatorList = M, this._pageIndex = Y, this.canvasFactory = tt, this.filterFactory = q, this._pdfBug = at, this.pageColors = $, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = U === !0 && typeof window < "u", this.cancelled = !1, this.capability = new _util.PromiseCapability(), this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = L.canvasContext.canvas;
            }
            get completed() {
              return this.capability.promise.catch(function() {
              });
            }
            initializeGraphics({
              transparency: c = !1,
              optionalContentConfig: L
            }) {
              var Y, tt;
              if (this.cancelled)
                return;
              if (this._canvas) {
                if (t(w, i).has(this._canvas))
                  throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                t(w, i).add(this._canvas);
              }
              this._pdfBug && ((Y = globalThis.StepperManager) != null && Y.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
              const {
                canvasContext: x,
                viewport: z,
                transform: J,
                background: M
              } = this.params;
              this.gfx = new _canvas.CanvasGraphics(x, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: L
              }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
                transform: J,
                viewport: z,
                transparency: c,
                background: M
              }), this.operatorListIdx = 0, this.graphicsReady = !0, (tt = this.graphicsReadyCallback) == null || tt.call(this);
            }
            cancel(c = null, L = 0) {
              var x;
              this.running = !1, this.cancelled = !0, (x = this.gfx) == null || x.endDrawing(), t(w, i).delete(this._canvas), this.callback(c || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, L));
            }
            operatorListChanged() {
              var c;
              if (!this.graphicsReady) {
                this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
                return;
              }
              (c = this.stepper) == null || c.updateOperatorList(this.operatorList), !this.running && this._continue();
            }
            _continue() {
              this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
            }
            _scheduleNext() {
              this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
                this._nextBound().catch(this._cancelBound);
              }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
            }
            async _next() {
              this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), t(w, i).delete(this._canvas), this.callback())));
            }
          };
          i = new WeakMap(), O(w, i, /* @__PURE__ */ new WeakSet());
          let InternalRenderTask = w;
          const version = "3.11.174";
          exports.version = version;
          const build = "ce8716743";
          exports.build = build;
        },
        /* 3 */
        /***/
        (E, e, C) => {
          var d, r, I, tn, y;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.SerializableEmpty = e.PrintAnnotationStorage = e.AnnotationStorage = void 0;
          var n = C(1), g = C(4), G = C(8);
          const B = Object.freeze({
            map: null,
            hash: "",
            transfers: void 0
          });
          e.SerializableEmpty = B;
          class F {
            constructor() {
              O(this, I);
              O(this, d, !1);
              O(this, r, /* @__PURE__ */ new Map());
              this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
            }
            getValue(_, m) {
              const P = t(this, r).get(_);
              return P === void 0 ? m : Object.assign(m, P);
            }
            getRawValue(_) {
              return t(this, r).get(_);
            }
            remove(_) {
              if (t(this, r).delete(_), t(this, r).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
                for (const m of t(this, r).values())
                  if (m instanceof g.AnnotationEditor)
                    return;
                this.onAnnotationEditor(null);
              }
            }
            setValue(_, m) {
              const P = t(this, r).get(_);
              let A = !1;
              if (P !== void 0)
                for (const [u, S] of Object.entries(m))
                  P[u] !== S && (A = !0, P[u] = S);
              else
                A = !0, t(this, r).set(_, m);
              A && W(this, I, tn).call(this), m instanceof g.AnnotationEditor && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(m.constructor._type);
            }
            has(_) {
              return t(this, r).has(_);
            }
            getAll() {
              return t(this, r).size > 0 ? (0, n.objectFromMap)(t(this, r)) : null;
            }
            setAll(_) {
              for (const [m, P] of Object.entries(_))
                this.setValue(m, P);
            }
            get size() {
              return t(this, r).size;
            }
            resetModified() {
              t(this, d) && (Q(this, d, !1), typeof this.onResetModified == "function" && this.onResetModified());
            }
            get print() {
              return new f(this);
            }
            get serializable() {
              if (t(this, r).size === 0)
                return B;
              const _ = /* @__PURE__ */ new Map(), m = new G.MurmurHash3_64(), P = [], A = /* @__PURE__ */ Object.create(null);
              let u = !1;
              for (const [S, s] of t(this, r)) {
                const i = s instanceof g.AnnotationEditor ? s.serialize(!1, A) : s;
                i && (_.set(S, i), m.update(`${S}:${JSON.stringify(i)}`), u || (u = !!i.bitmap));
              }
              if (u)
                for (const S of _.values())
                  S.bitmap && P.push(S.bitmap);
              return _.size > 0 ? {
                map: _,
                hash: m.hexdigest(),
                transfers: P
              } : B;
            }
          }
          d = new WeakMap(), r = new WeakMap(), I = new WeakSet(), tn = function() {
            t(this, d) || (Q(this, d, !0), typeof this.onSetModified == "function" && this.onSetModified());
          }, e.AnnotationStorage = F;
          class f extends F {
            constructor(m) {
              super();
              O(this, y, void 0);
              const {
                map: P,
                hash: A,
                transfers: u
              } = m.serializable, S = structuredClone(P, u ? {
                transfer: u
              } : null);
              Q(this, y, {
                map: S,
                hash: A,
                transfers: u
              });
            }
            get print() {
              (0, n.unreachable)("Should not call PrintAnnotationStorage.print");
            }
            get serializable() {
              return t(this, y);
            }
          }
          y = new WeakMap(), e.PrintAnnotationStorage = f;
        },
        /* 4 */
        /***/
        (E, e, C) => {
          var f, d, r, I, k, y, h, _, m, P, A, u, S, s, i, Qe, b, Je, L, ti, z, ei, M, en, tt, nn, U, sn, $, ii, Pt, rn;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.AnnotationEditor = void 0;
          var n = C(5), g = C(1), G = C(6);
          const a = class a {
            constructor(l) {
              O(this, i);
              O(this, b);
              O(this, z);
              O(this, M);
              O(this, tt);
              O(this, U);
              O(this, $);
              O(this, Pt);
              O(this, f, "");
              O(this, d, !1);
              O(this, r, null);
              O(this, I, null);
              O(this, k, null);
              O(this, y, !1);
              O(this, h, null);
              O(this, _, this.focusin.bind(this));
              O(this, m, this.focusout.bind(this));
              O(this, P, !1);
              O(this, A, !1);
              O(this, u, !1);
              ee(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
              ee(this, "_uiManager", null);
              ee(this, "_focusEventsAllowed", !0);
              ee(this, "_l10nPromise", null);
              O(this, S, !1);
              O(this, s, a._zIndex++);
              this.constructor === a && (0, g.unreachable)("Cannot initialize AnnotationEditor."), this.parent = l.parent, this.id = l.id, this.width = this.height = null, this.pageIndex = l.parent.pageIndex, this.name = l.name, this.div = null, this._uiManager = l.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = l.isCentered, this._structTreeParentId = null;
              const {
                rotation: T,
                rawDims: {
                  pageWidth: R,
                  pageHeight: H,
                  pageX: K,
                  pageY: nt
                }
              } = this.parent.viewport;
              this.rotation = T, this.pageRotation = (360 + T - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [R, H], this.pageTranslation = [K, nt];
              const [_t, pt] = this.parentDimensions;
              this.x = l.x / _t, this.y = l.y / pt, this.isAttachedToDOM = !1, this.deleted = !1;
            }
            get editorType() {
              return Object.getPrototypeOf(this).constructor._type;
            }
            static get _defaultLineColor() {
              return (0, g.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
            }
            static deleteAnnotationElement(l) {
              const T = new F({
                id: l.parent.getNextId(),
                parent: l.parent,
                uiManager: l._uiManager
              });
              T.annotationElementId = l.annotationElementId, T.deleted = !0, T._uiManager.addToAnnotationStorage(T);
            }
            static initialize(l, T = null) {
              if (a._l10nPromise || (a._l10nPromise = new Map(["editor_alt_text_button_label", "editor_alt_text_edit_button_label", "editor_alt_text_decorative_tooltip"].map((H) => [H, l.get(H)]))), T != null && T.strings)
                for (const H of T.strings)
                  a._l10nPromise.set(H, l.get(H));
              if (a._borderLineWidth !== -1)
                return;
              const R = getComputedStyle(document.documentElement);
              a._borderLineWidth = parseFloat(R.getPropertyValue("--outline-width")) || 0;
            }
            static updateDefaultParams(l, T) {
            }
            static get defaultPropertiesToUpdate() {
              return [];
            }
            static isHandlingMimeForPasting(l) {
              return !1;
            }
            static paste(l, T) {
              (0, g.unreachable)("Not implemented");
            }
            get propertiesToUpdate() {
              return [];
            }
            get _isDraggable() {
              return t(this, S);
            }
            set _isDraggable(l) {
              var T;
              Q(this, S, l), (T = this.div) == null || T.classList.toggle("draggable", l);
            }
            center() {
              const [l, T] = this.pageDimensions;
              switch (this.parentRotation) {
                case 90:
                  this.x -= this.height * T / (l * 2), this.y += this.width * l / (T * 2);
                  break;
                case 180:
                  this.x += this.width / 2, this.y += this.height / 2;
                  break;
                case 270:
                  this.x += this.height * T / (l * 2), this.y -= this.width * l / (T * 2);
                  break;
                default:
                  this.x -= this.width / 2, this.y -= this.height / 2;
                  break;
              }
              this.fixAndSetPosition();
            }
            addCommands(l) {
              this._uiManager.addCommands(l);
            }
            get currentLayer() {
              return this._uiManager.currentLayer;
            }
            setInBackground() {
              this.div.style.zIndex = 0;
            }
            setInForeground() {
              this.div.style.zIndex = t(this, s);
            }
            setParent(l) {
              l !== null && (this.pageIndex = l.pageIndex, this.pageDimensions = l.pageDimensions), this.parent = l;
            }
            focusin(l) {
              this._focusEventsAllowed && (t(this, P) ? Q(this, P, !1) : this.parent.setSelected(this));
            }
            focusout(l) {
              var R;
              if (!this._focusEventsAllowed || !this.isAttachedToDOM)
                return;
              const T = l.relatedTarget;
              T != null && T.closest(`#${this.id}`) || (l.preventDefault(), (R = this.parent) != null && R.isMultipleSelection || this.commitOrRemove());
            }
            commitOrRemove() {
              this.isEmpty() ? this.remove() : this.commit();
            }
            commit() {
              this.addToAnnotationStorage();
            }
            addToAnnotationStorage() {
              this._uiManager.addToAnnotationStorage(this);
            }
            setAt(l, T, R, H) {
              const [K, nt] = this.parentDimensions;
              [R, H] = this.screenToPageTranslation(R, H), this.x = (l + R) / K, this.y = (T + H) / nt, this.fixAndSetPosition();
            }
            translate(l, T) {
              W(this, i, Qe).call(this, this.parentDimensions, l, T);
            }
            translateInPage(l, T) {
              W(this, i, Qe).call(this, this.pageDimensions, l, T), this.div.scrollIntoView({
                block: "nearest"
              });
            }
            drag(l, T) {
              const [R, H] = this.parentDimensions;
              if (this.x += l / R, this.y += T / H, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
                const {
                  x: St,
                  y: st
                } = this.div.getBoundingClientRect();
                this.parent.findNewParent(this, St, st) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
              }
              let {
                x: K,
                y: nt
              } = this;
              const [_t, pt] = W(this, b, Je).call(this);
              K += _t, nt += pt, this.div.style.left = `${(100 * K).toFixed(2)}%`, this.div.style.top = `${(100 * nt).toFixed(2)}%`, this.div.scrollIntoView({
                block: "nearest"
              });
            }
            fixAndSetPosition() {
              const [l, T] = this.pageDimensions;
              let {
                x: R,
                y: H,
                width: K,
                height: nt
              } = this;
              switch (K *= l, nt *= T, R *= l, H *= T, this.rotation) {
                case 0:
                  R = Math.max(0, Math.min(l - K, R)), H = Math.max(0, Math.min(T - nt, H));
                  break;
                case 90:
                  R = Math.max(0, Math.min(l - nt, R)), H = Math.min(T, Math.max(K, H));
                  break;
                case 180:
                  R = Math.min(l, Math.max(K, R)), H = Math.min(T, Math.max(nt, H));
                  break;
                case 270:
                  R = Math.min(l, Math.max(nt, R)), H = Math.max(0, Math.min(T - K, H));
                  break;
              }
              this.x = R /= l, this.y = H /= T;
              const [_t, pt] = W(this, b, Je).call(this);
              R += _t, H += pt;
              const {
                style: St
              } = this.div;
              St.left = `${(100 * R).toFixed(2)}%`, St.top = `${(100 * H).toFixed(2)}%`, this.moveInDOM();
            }
            screenToPageTranslation(l, T) {
              var R;
              return W(R = a, L, ti).call(R, l, T, this.parentRotation);
            }
            pageTranslationToScreen(l, T) {
              var R;
              return W(R = a, L, ti).call(R, l, T, 360 - this.parentRotation);
            }
            get parentScale() {
              return this._uiManager.viewParameters.realScale;
            }
            get parentRotation() {
              return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
            }
            get parentDimensions() {
              const {
                parentScale: l,
                pageDimensions: [T, R]
              } = this, H = T * l, K = R * l;
              return g.FeatureTest.isCSSRoundSupported ? [Math.round(H), Math.round(K)] : [H, K];
            }
            setDims(l, T) {
              var K;
              const [R, H] = this.parentDimensions;
              this.div.style.width = `${(100 * l / R).toFixed(2)}%`, t(this, y) || (this.div.style.height = `${(100 * T / H).toFixed(2)}%`), (K = t(this, r)) == null || K.classList.toggle("small", l < a.SMALL_EDITOR_SIZE || T < a.SMALL_EDITOR_SIZE);
            }
            fixDims() {
              const {
                style: l
              } = this.div, {
                height: T,
                width: R
              } = l, H = R.endsWith("%"), K = !t(this, y) && T.endsWith("%");
              if (H && K)
                return;
              const [nt, _t] = this.parentDimensions;
              H || (l.width = `${(100 * parseFloat(R) / nt).toFixed(2)}%`), !t(this, y) && !K && (l.height = `${(100 * parseFloat(T) / _t).toFixed(2)}%`);
            }
            getInitialTranslation() {
              return [0, 0];
            }
            async addAltTextButton() {
              if (t(this, r))
                return;
              const l = Q(this, r, document.createElement("button"));
              l.className = "altText";
              const T = await a._l10nPromise.get("editor_alt_text_button_label");
              l.textContent = T, l.setAttribute("aria-label", T), l.tabIndex = "0", l.addEventListener("contextmenu", G.noContextMenu), l.addEventListener("pointerdown", (R) => R.stopPropagation()), l.addEventListener("click", (R) => {
                R.preventDefault(), this._uiManager.editAltText(this);
              }, {
                capture: !0
              }), l.addEventListener("keydown", (R) => {
                R.target === l && R.key === "Enter" && (R.preventDefault(), this._uiManager.editAltText(this));
              }), W(this, $, ii).call(this), this.div.append(l), a.SMALL_EDITOR_SIZE || (a.SMALL_EDITOR_SIZE = Math.min(128, Math.round(l.getBoundingClientRect().width * 1.4)));
            }
            getClientDimensions() {
              return this.div.getBoundingClientRect();
            }
            get altTextData() {
              return {
                altText: t(this, f),
                decorative: t(this, d)
              };
            }
            set altTextData({
              altText: l,
              decorative: T
            }) {
              t(this, f) === l && t(this, d) === T || (Q(this, f, l), Q(this, d, T), W(this, $, ii).call(this));
            }
            render() {
              this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.setAttribute("tabIndex", 0), this.setInForeground(), this.div.addEventListener("focusin", t(this, _)), this.div.addEventListener("focusout", t(this, m));
              const [l, T] = this.parentDimensions;
              this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * T / l).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * l / T).toFixed(2)}%`);
              const [R, H] = this.getInitialTranslation();
              return this.translate(R, H), (0, n.bindEvents)(this, this.div, ["pointerdown"]), this.div;
            }
            pointerdown(l) {
              const {
                isMac: T
              } = g.FeatureTest.platform;
              if (l.button !== 0 || l.ctrlKey && T) {
                l.preventDefault();
                return;
              }
              Q(this, P, !0), W(this, Pt, rn).call(this, l);
            }
            moveInDOM() {
              var l;
              (l = this.parent) == null || l.moveEditorInDOM(this);
            }
            _setParentAndPosition(l, T, R) {
              l.changeParent(this), this.x = T, this.y = R, this.fixAndSetPosition();
            }
            getRect(l, T) {
              const R = this.parentScale, [H, K] = this.pageDimensions, [nt, _t] = this.pageTranslation, pt = l / R, St = T / R, st = this.x * H, vt = this.y * K, gt = this.width * H, Lt = this.height * K;
              switch (this.rotation) {
                case 0:
                  return [st + pt + nt, K - vt - St - Lt + _t, st + pt + gt + nt, K - vt - St + _t];
                case 90:
                  return [st + St + nt, K - vt + pt + _t, st + St + Lt + nt, K - vt + pt + gt + _t];
                case 180:
                  return [st - pt - gt + nt, K - vt + St + _t, st - pt + nt, K - vt + St + Lt + _t];
                case 270:
                  return [st - St - Lt + nt, K - vt - pt - gt + _t, st - St + nt, K - vt - pt + _t];
                default:
                  throw new Error("Invalid rotation");
              }
            }
            getRectInCurrentCoords(l, T) {
              const [R, H, K, nt] = l, _t = K - R, pt = nt - H;
              switch (this.rotation) {
                case 0:
                  return [R, T - nt, _t, pt];
                case 90:
                  return [R, T - H, pt, _t];
                case 180:
                  return [K, T - H, _t, pt];
                case 270:
                  return [K, T - nt, pt, _t];
                default:
                  throw new Error("Invalid rotation");
              }
            }
            onceAdded() {
            }
            isEmpty() {
              return !1;
            }
            enableEditMode() {
              Q(this, u, !0);
            }
            disableEditMode() {
              Q(this, u, !1);
            }
            isInEditMode() {
              return t(this, u);
            }
            shouldGetKeyboardEvents() {
              return !1;
            }
            needsToBeRebuilt() {
              return this.div && !this.isAttachedToDOM;
            }
            rebuild() {
              var l, T;
              (l = this.div) == null || l.addEventListener("focusin", t(this, _)), (T = this.div) == null || T.addEventListener("focusout", t(this, m));
            }
            serialize(l = !1, T = null) {
              (0, g.unreachable)("An editor must be serializable");
            }
            static deserialize(l, T, R) {
              const H = new this.prototype.constructor({
                parent: T,
                id: T.getNextId(),
                uiManager: R
              });
              H.rotation = l.rotation;
              const [K, nt] = H.pageDimensions, [_t, pt, St, st] = H.getRectInCurrentCoords(l.rect, nt);
              return H.x = _t / K, H.y = pt / nt, H.width = St / K, H.height = st / nt, H;
            }
            remove() {
              var l;
              this.div.removeEventListener("focusin", t(this, _)), this.div.removeEventListener("focusout", t(this, m)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), (l = t(this, r)) == null || l.remove(), Q(this, r, null), Q(this, I, null);
            }
            get isResizable() {
              return !1;
            }
            makeResizable() {
              this.isResizable && (W(this, M, en).call(this), t(this, h).classList.remove("hidden"));
            }
            select() {
              var l;
              this.makeResizable(), (l = this.div) == null || l.classList.add("selectedEditor");
            }
            unselect() {
              var l, T, R;
              (l = t(this, h)) == null || l.classList.add("hidden"), (T = this.div) == null || T.classList.remove("selectedEditor"), (R = this.div) != null && R.contains(document.activeElement) && this._uiManager.currentLayer.div.focus();
            }
            updateParams(l, T) {
            }
            disableEditing() {
              t(this, r) && (t(this, r).hidden = !0);
            }
            enableEditing() {
              t(this, r) && (t(this, r).hidden = !1);
            }
            enterInEditMode() {
            }
            get contentDiv() {
              return this.div;
            }
            get isEditing() {
              return t(this, A);
            }
            set isEditing(l) {
              Q(this, A, l), this.parent && (l ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
            }
            setAspectRatio(l, T) {
              Q(this, y, !0);
              const R = l / T, {
                style: H
              } = this.div;
              H.aspectRatio = R, H.height = "auto";
            }
            static get MIN_SIZE() {
              return 16;
            }
          };
          f = new WeakMap(), d = new WeakMap(), r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), y = new WeakMap(), h = new WeakMap(), _ = new WeakMap(), m = new WeakMap(), P = new WeakMap(), A = new WeakMap(), u = new WeakMap(), S = new WeakMap(), s = new WeakMap(), i = new WeakSet(), Qe = function([l, T], R, H) {
            [R, H] = this.screenToPageTranslation(R, H), this.x += R / l, this.y += H / T, this.fixAndSetPosition();
          }, b = new WeakSet(), Je = function() {
            const [l, T] = this.parentDimensions, {
              _borderLineWidth: R
            } = a, H = R / l, K = R / T;
            switch (this.rotation) {
              case 90:
                return [-H, K];
              case 180:
                return [H, K];
              case 270:
                return [H, -K];
              default:
                return [-H, -K];
            }
          }, L = new WeakSet(), ti = function(l, T, R) {
            switch (R) {
              case 90:
                return [T, -l];
              case 180:
                return [-l, -T];
              case 270:
                return [-T, l];
              default:
                return [l, T];
            }
          }, z = new WeakSet(), ei = function(l) {
            switch (l) {
              case 90: {
                const [T, R] = this.pageDimensions;
                return [0, -T / R, R / T, 0];
              }
              case 180:
                return [-1, 0, 0, -1];
              case 270: {
                const [T, R] = this.pageDimensions;
                return [0, T / R, -R / T, 0];
              }
              default:
                return [1, 0, 0, 1];
            }
          }, M = new WeakSet(), en = function() {
            if (t(this, h))
              return;
            Q(this, h, document.createElement("div")), t(this, h).classList.add("resizers");
            const l = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
            this._willKeepAspectRatio || l.push("topMiddle", "middleRight", "bottomMiddle", "middleLeft");
            for (const T of l) {
              const R = document.createElement("div");
              t(this, h).append(R), R.classList.add("resizer", T), R.addEventListener("pointerdown", W(this, tt, nn).bind(this, T)), R.addEventListener("contextmenu", G.noContextMenu);
            }
            this.div.prepend(t(this, h));
          }, tt = new WeakSet(), nn = function(l, T) {
            T.preventDefault();
            const {
              isMac: R
            } = g.FeatureTest.platform;
            if (T.button !== 0 || T.ctrlKey && R)
              return;
            const H = W(this, U, sn).bind(this, l), K = this._isDraggable;
            this._isDraggable = !1;
            const nt = {
              passive: !0,
              capture: !0
            };
            window.addEventListener("pointermove", H, nt);
            const _t = this.x, pt = this.y, St = this.width, st = this.height, vt = this.parent.div.style.cursor, gt = this.div.style.cursor;
            this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(T.target).cursor;
            const Lt = () => {
              this._isDraggable = K, window.removeEventListener("pointerup", Lt), window.removeEventListener("blur", Lt), window.removeEventListener("pointermove", H, nt), this.parent.div.style.cursor = vt, this.div.style.cursor = gt;
              const It = this.x, Mt = this.y, ut = this.width, lt = this.height;
              It === _t && Mt === pt && ut === St && lt === st || this.addCommands({
                cmd: () => {
                  this.width = ut, this.height = lt, this.x = It, this.y = Mt;
                  const [it, et] = this.parentDimensions;
                  this.setDims(it * ut, et * lt), this.fixAndSetPosition();
                },
                undo: () => {
                  this.width = St, this.height = st, this.x = _t, this.y = pt;
                  const [it, et] = this.parentDimensions;
                  this.setDims(it * St, et * st), this.fixAndSetPosition();
                },
                mustExec: !0
              });
            };
            window.addEventListener("pointerup", Lt), window.addEventListener("blur", Lt);
          }, U = new WeakSet(), sn = function(l, T) {
            const [R, H] = this.parentDimensions, K = this.x, nt = this.y, _t = this.width, pt = this.height, St = a.MIN_SIZE / R, st = a.MIN_SIZE / H, vt = (ht) => Math.round(ht * 1e4) / 1e4, gt = W(this, z, ei).call(this, this.rotation), Lt = (ht, ot) => [gt[0] * ht + gt[2] * ot, gt[1] * ht + gt[3] * ot], It = W(this, z, ei).call(this, 360 - this.rotation), Mt = (ht, ot) => [It[0] * ht + It[2] * ot, It[1] * ht + It[3] * ot];
            let ut, lt, it = !1, et = !1;
            switch (l) {
              case "topLeft":
                it = !0, ut = (ht, ot) => [0, 0], lt = (ht, ot) => [ht, ot];
                break;
              case "topMiddle":
                ut = (ht, ot) => [ht / 2, 0], lt = (ht, ot) => [ht / 2, ot];
                break;
              case "topRight":
                it = !0, ut = (ht, ot) => [ht, 0], lt = (ht, ot) => [0, ot];
                break;
              case "middleRight":
                et = !0, ut = (ht, ot) => [ht, ot / 2], lt = (ht, ot) => [0, ot / 2];
                break;
              case "bottomRight":
                it = !0, ut = (ht, ot) => [ht, ot], lt = (ht, ot) => [0, 0];
                break;
              case "bottomMiddle":
                ut = (ht, ot) => [ht / 2, ot], lt = (ht, ot) => [ht / 2, 0];
                break;
              case "bottomLeft":
                it = !0, ut = (ht, ot) => [0, ot], lt = (ht, ot) => [ht, 0];
                break;
              case "middleLeft":
                et = !0, ut = (ht, ot) => [0, ot / 2], lt = (ht, ot) => [ht, ot / 2];
                break;
            }
            const mt = ut(_t, pt), Tt = lt(_t, pt);
            let kt = Lt(...Tt);
            const Bt = vt(K + kt[0]), Ut = vt(nt + kt[1]);
            let $t = 1, Gt = 1, [Kt, Xt] = this.screenToPageTranslation(T.movementX, T.movementY);
            if ([Kt, Xt] = Mt(Kt / R, Xt / H), it) {
              const ht = Math.hypot(_t, pt);
              $t = Gt = Math.max(Math.min(Math.hypot(Tt[0] - mt[0] - Kt, Tt[1] - mt[1] - Xt) / ht, 1 / _t, 1 / pt), St / _t, st / pt);
            } else
              et ? $t = Math.max(St, Math.min(1, Math.abs(Tt[0] - mt[0] - Kt))) / _t : Gt = Math.max(st, Math.min(1, Math.abs(Tt[1] - mt[1] - Xt))) / pt;
            const Qt = vt(_t * $t), At = vt(pt * Gt);
            kt = Lt(...lt(Qt, At));
            const v = Bt - kt[0], D = Ut - kt[1];
            this.width = Qt, this.height = At, this.x = v, this.y = D, this.setDims(R * Qt, H * At), this.fixAndSetPosition();
          }, $ = new WeakSet(), ii = async function() {
            var R;
            const l = t(this, r);
            if (!l)
              return;
            if (!t(this, f) && !t(this, d)) {
              l.classList.remove("done"), (R = t(this, I)) == null || R.remove();
              return;
            }
            a._l10nPromise.get("editor_alt_text_edit_button_label").then((H) => {
              l.setAttribute("aria-label", H);
            });
            let T = t(this, I);
            if (!T) {
              Q(this, I, T = document.createElement("span")), T.className = "tooltip", T.setAttribute("role", "tooltip");
              const H = T.id = `alt-text-tooltip-${this.id}`;
              l.setAttribute("aria-describedby", H);
              const K = 100;
              l.addEventListener("mouseenter", () => {
                Q(this, k, setTimeout(() => {
                  Q(this, k, null), t(this, I).classList.add("show"), this._uiManager._eventBus.dispatch("reporttelemetry", {
                    source: this,
                    details: {
                      type: "editing",
                      subtype: this.editorType,
                      data: {
                        action: "alt_text_tooltip"
                      }
                    }
                  });
                }, K));
              }), l.addEventListener("mouseleave", () => {
                var nt;
                clearTimeout(t(this, k)), Q(this, k, null), (nt = t(this, I)) == null || nt.classList.remove("show");
              });
            }
            l.classList.add("done"), T.innerText = t(this, d) ? await a._l10nPromise.get("editor_alt_text_decorative_tooltip") : t(this, f), T.parentNode || l.append(T);
          }, Pt = new WeakSet(), rn = function(l) {
            if (!this._isDraggable)
              return;
            const T = this._uiManager.isSelected(this);
            this._uiManager.setUpDragSession();
            let R, H;
            T && (R = {
              passive: !0,
              capture: !0
            }, H = (nt) => {
              const [_t, pt] = this.screenToPageTranslation(nt.movementX, nt.movementY);
              this._uiManager.dragSelectedEditors(_t, pt);
            }, window.addEventListener("pointermove", H, R));
            const K = () => {
              if (window.removeEventListener("pointerup", K), window.removeEventListener("blur", K), T && window.removeEventListener("pointermove", H, R), Q(this, P, !1), !this._uiManager.endDragSession()) {
                const {
                  isMac: nt
                } = g.FeatureTest.platform;
                l.ctrlKey && !nt || l.shiftKey || l.metaKey && nt ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
              }
            };
            window.addEventListener("pointerup", K), window.addEventListener("blur", K);
          }, O(a, L), ee(a, "_borderLineWidth", -1), ee(a, "_colorManager", new n.ColorManager()), ee(a, "_zIndex", 1), ee(a, "SMALL_EDITOR_SIZE", 0);
          let B = a;
          e.AnnotationEditor = B;
          class F extends B {
            constructor(l) {
              super(l), this.annotationElementId = l.annotationElementId, this.deleted = !0;
            }
            serialize() {
              return {
                id: this.annotationElementId,
                deleted: !0,
                pageIndex: this.pageIndex
              };
            }
          }
        },
        /* 5 */
        /***/
        (E, e, C) => {
          var y, h, _, m, P, ni, S, s, i, w, b, an, x, z, J, M, Y, tt, q, U, at, $, wt, Pt, N, a, p, l, T, R, H, K, nt, _t, pt, St, st, vt, gt, Lt, It, Mt, ut, lt, it, et, mt, on, kt, si, Ut, ri, Gt, ke, Xt, ai, At, oi, D, re, ot, be, bt, ln, ct, cn, Et, li, Ot, ve, Ct, ci;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.KeyboardManager = e.CommandManager = e.ColorManager = e.AnnotationEditorUIManager = void 0, e.bindEvents = G, e.opacityToHex = B;
          var n = C(1), g = C(6);
          function G(Z, o, V) {
            for (const X of V)
              o.addEventListener(X, Z[X].bind(Z));
          }
          function B(Z) {
            return Math.round(Math.min(255, Math.max(1, 255 * Z))).toString(16).padStart(2, "0");
          }
          class F {
            constructor() {
              O(this, y, 0);
            }
            getId() {
              return `${n.AnnotationEditorPrefix}${ue(this, y)._++}`;
            }
          }
          y = new WeakMap();
          const u = class u {
            constructor() {
              O(this, P);
              O(this, h, (0, n.getUuid)());
              O(this, _, 0);
              O(this, m, null);
            }
            static get _isSVGFittingCanvas() {
              const o = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', X = new OffscreenCanvas(1, 3).getContext("2d"), rt = new Image();
              rt.src = o;
              const ft = rt.decode().then(() => (X.drawImage(rt, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(X.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
              return (0, n.shadow)(this, "_isSVGFittingCanvas", ft);
            }
            async getFromFile(o) {
              const {
                lastModified: V,
                name: X,
                size: rt,
                type: ft
              } = o;
              return W(this, P, ni).call(this, `${V}_${X}_${rt}_${ft}`, o);
            }
            async getFromUrl(o) {
              return W(this, P, ni).call(this, o, o);
            }
            async getFromId(o) {
              t(this, m) || Q(this, m, /* @__PURE__ */ new Map());
              const V = t(this, m).get(o);
              return V ? V.bitmap ? (V.refCounter += 1, V) : V.file ? this.getFromFile(V.file) : this.getFromUrl(V.url) : null;
            }
            getSvgUrl(o) {
              const V = t(this, m).get(o);
              return V != null && V.isSvg ? V.svgUrl : null;
            }
            deleteId(o) {
              t(this, m) || Q(this, m, /* @__PURE__ */ new Map());
              const V = t(this, m).get(o);
              V && (V.refCounter -= 1, V.refCounter === 0 && (V.bitmap = null));
            }
            isValidId(o) {
              return o.startsWith(`image_${t(this, h)}_`);
            }
          };
          h = new WeakMap(), _ = new WeakMap(), m = new WeakMap(), P = new WeakSet(), ni = async function(o, V) {
            t(this, m) || Q(this, m, /* @__PURE__ */ new Map());
            let X = t(this, m).get(o);
            if (X === null)
              return null;
            if (X != null && X.bitmap)
              return X.refCounter += 1, X;
            try {
              X || (X = {
                bitmap: null,
                id: `image_${t(this, h)}_${ue(this, _)._++}`,
                refCounter: 0,
                isSvg: !1
              });
              let rt;
              if (typeof V == "string") {
                X.url = V;
                const ft = await fetch(V);
                if (!ft.ok)
                  throw new Error(ft.statusText);
                rt = await ft.blob();
              } else
                rt = X.file = V;
              if (rt.type === "image/svg+xml") {
                const ft = u._isSVGFittingCanvas, yt = new FileReader(), Rt = new Image(), Nt = new Promise((Dt, Zt) => {
                  Rt.onload = () => {
                    X.bitmap = Rt, X.isSvg = !0, Dt();
                  }, yt.onload = async () => {
                    const Ht = X.svgUrl = yt.result;
                    Rt.src = await ft ? `${Ht}#svgView(preserveAspectRatio(none))` : Ht;
                  }, Rt.onerror = yt.onerror = Zt;
                });
                yt.readAsDataURL(rt), await Nt;
              } else
                X.bitmap = await createImageBitmap(rt);
              X.refCounter = 1;
            } catch (rt) {
              console.error(rt), X = null;
            }
            return t(this, m).set(o, X), X && t(this, m).set(X.id, X), X;
          };
          let f = u;
          class d {
            constructor(o = 128) {
              O(this, S, []);
              O(this, s, !1);
              O(this, i, void 0);
              O(this, w, -1);
              Q(this, i, o);
            }
            add({
              cmd: o,
              undo: V,
              mustExec: X,
              type: rt = NaN,
              overwriteIfSameType: ft = !1,
              keepUndo: yt = !1
            }) {
              if (X && o(), t(this, s))
                return;
              const Rt = {
                cmd: o,
                undo: V,
                type: rt
              };
              if (t(this, w) === -1) {
                t(this, S).length > 0 && (t(this, S).length = 0), Q(this, w, 0), t(this, S).push(Rt);
                return;
              }
              if (ft && t(this, S)[t(this, w)].type === rt) {
                yt && (Rt.undo = t(this, S)[t(this, w)].undo), t(this, S)[t(this, w)] = Rt;
                return;
              }
              const Nt = t(this, w) + 1;
              Nt === t(this, i) ? t(this, S).splice(0, 1) : (Q(this, w, Nt), Nt < t(this, S).length && t(this, S).splice(Nt)), t(this, S).push(Rt);
            }
            undo() {
              t(this, w) !== -1 && (Q(this, s, !0), t(this, S)[t(this, w)].undo(), Q(this, s, !1), Q(this, w, t(this, w) - 1));
            }
            redo() {
              t(this, w) < t(this, S).length - 1 && (Q(this, w, t(this, w) + 1), Q(this, s, !0), t(this, S)[t(this, w)].cmd(), Q(this, s, !1));
            }
            hasSomethingToUndo() {
              return t(this, w) !== -1;
            }
            hasSomethingToRedo() {
              return t(this, w) < t(this, S).length - 1;
            }
            destroy() {
              Q(this, S, null);
            }
          }
          S = new WeakMap(), s = new WeakMap(), i = new WeakMap(), w = new WeakMap(), e.CommandManager = d;
          class r {
            constructor(o) {
              O(this, b);
              this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
              const {
                isMac: V
              } = n.FeatureTest.platform;
              for (const [X, rt, ft = {}] of o)
                for (const yt of X) {
                  const Rt = yt.startsWith("mac+");
                  V && Rt ? (this.callbacks.set(yt.slice(4), {
                    callback: rt,
                    options: ft
                  }), this.allKeys.add(yt.split("+").at(-1))) : !V && !Rt && (this.callbacks.set(yt, {
                    callback: rt,
                    options: ft
                  }), this.allKeys.add(yt.split("+").at(-1)));
                }
            }
            exec(o, V) {
              if (!this.allKeys.has(V.key))
                return;
              const X = this.callbacks.get(W(this, b, an).call(this, V));
              if (!X)
                return;
              const {
                callback: rt,
                options: {
                  bubbles: ft = !1,
                  args: yt = [],
                  checker: Rt = null
                }
              } = X;
              Rt && !Rt(o, V) || (rt.bind(o, ...yt)(), ft || (V.stopPropagation(), V.preventDefault()));
            }
          }
          b = new WeakSet(), an = function(o) {
            o.altKey && this.buffer.push("alt"), o.ctrlKey && this.buffer.push("ctrl"), o.metaKey && this.buffer.push("meta"), o.shiftKey && this.buffer.push("shift"), this.buffer.push(o.key);
            const V = this.buffer.join("+");
            return this.buffer.length = 0, V;
          }, e.KeyboardManager = r;
          const L = class L {
            get _colors() {
              const o = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
              return (0, g.getColorValues)(o), (0, n.shadow)(this, "_colors", o);
            }
            convert(o) {
              const V = (0, g.getRGB)(o);
              if (!window.matchMedia("(forced-colors: active)").matches)
                return V;
              for (const [X, rt] of this._colors)
                if (rt.every((ft, yt) => ft === V[yt]))
                  return L._colorsMapping.get(X);
              return V;
            }
            getHexCode(o) {
              const V = this._colors.get(o);
              return V ? n.Util.makeHexColor(...V) : o;
            }
          };
          ee(L, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
          let I = L;
          e.ColorManager = I;
          const Vt = class Vt {
            constructor(o, V, X, rt, ft, yt) {
              O(this, mt);
              O(this, kt);
              O(this, Ut);
              O(this, Gt);
              O(this, Xt);
              O(this, At);
              O(this, D);
              O(this, ot);
              O(this, bt);
              O(this, ct);
              O(this, Et);
              O(this, Ot);
              O(this, Ct);
              O(this, x, null);
              O(this, z, /* @__PURE__ */ new Map());
              O(this, J, /* @__PURE__ */ new Map());
              O(this, M, null);
              O(this, Y, null);
              O(this, tt, new d());
              O(this, q, 0);
              O(this, U, /* @__PURE__ */ new Set());
              O(this, at, null);
              O(this, $, null);
              O(this, wt, /* @__PURE__ */ new Set());
              O(this, Pt, null);
              O(this, N, new F());
              O(this, a, !1);
              O(this, p, !1);
              O(this, l, null);
              O(this, T, n.AnnotationEditorType.NONE);
              O(this, R, /* @__PURE__ */ new Set());
              O(this, H, null);
              O(this, K, this.blur.bind(this));
              O(this, nt, this.focus.bind(this));
              O(this, _t, this.copy.bind(this));
              O(this, pt, this.cut.bind(this));
              O(this, St, this.paste.bind(this));
              O(this, st, this.keydown.bind(this));
              O(this, vt, this.onEditingAction.bind(this));
              O(this, gt, this.onPageChanging.bind(this));
              O(this, Lt, this.onScaleChanging.bind(this));
              O(this, It, this.onRotationChanging.bind(this));
              O(this, Mt, {
                isEditing: !1,
                isEmpty: !0,
                hasSomethingToUndo: !1,
                hasSomethingToRedo: !1,
                hasSelectedEditor: !1
              });
              O(this, ut, [0, 0]);
              O(this, lt, null);
              O(this, it, null);
              O(this, et, null);
              Q(this, it, o), Q(this, et, V), Q(this, M, X), this._eventBus = rt, this._eventBus._on("editingaction", t(this, vt)), this._eventBus._on("pagechanging", t(this, gt)), this._eventBus._on("scalechanging", t(this, Lt)), this._eventBus._on("rotationchanging", t(this, It)), Q(this, Y, ft.annotationStorage), Q(this, Pt, ft.filterFactory), Q(this, H, yt), this.viewParameters = {
                realScale: g.PixelsPerInch.PDF_TO_CSS_UNITS,
                rotation: 0
              };
            }
            static get _keyboardManager() {
              const o = Vt.prototype, V = (ft) => {
                const {
                  activeElement: yt
                } = document;
                return yt && t(ft, it).contains(yt) && ft.hasSomethingToControl();
              }, X = this.TRANSLATE_SMALL, rt = this.TRANSLATE_BIG;
              return (0, n.shadow)(this, "_keyboardManager", new r([[["ctrl+a", "mac+meta+a"], o.selectAll], [["ctrl+z", "mac+meta+z"], o.undo], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], o.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], o.delete], [["Escape", "mac+Escape"], o.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], o.translateSelectedEditors, {
                args: [-X, 0],
                checker: V
              }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], o.translateSelectedEditors, {
                args: [-rt, 0],
                checker: V
              }], [["ArrowRight", "mac+ArrowRight"], o.translateSelectedEditors, {
                args: [X, 0],
                checker: V
              }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], o.translateSelectedEditors, {
                args: [rt, 0],
                checker: V
              }], [["ArrowUp", "mac+ArrowUp"], o.translateSelectedEditors, {
                args: [0, -X],
                checker: V
              }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], o.translateSelectedEditors, {
                args: [0, -rt],
                checker: V
              }], [["ArrowDown", "mac+ArrowDown"], o.translateSelectedEditors, {
                args: [0, X],
                checker: V
              }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], o.translateSelectedEditors, {
                args: [0, rt],
                checker: V
              }]]));
            }
            destroy() {
              W(this, Gt, ke).call(this), W(this, kt, si).call(this), this._eventBus._off("editingaction", t(this, vt)), this._eventBus._off("pagechanging", t(this, gt)), this._eventBus._off("scalechanging", t(this, Lt)), this._eventBus._off("rotationchanging", t(this, It));
              for (const o of t(this, J).values())
                o.destroy();
              t(this, J).clear(), t(this, z).clear(), t(this, wt).clear(), Q(this, x, null), t(this, R).clear(), t(this, tt).destroy(), t(this, M).destroy();
            }
            get hcmFilter() {
              return (0, n.shadow)(this, "hcmFilter", t(this, H) ? t(this, Pt).addHCMFilter(t(this, H).foreground, t(this, H).background) : "none");
            }
            get direction() {
              return (0, n.shadow)(this, "direction", getComputedStyle(t(this, it)).direction);
            }
            editAltText(o) {
              var V;
              (V = t(this, M)) == null || V.editAltText(this, o);
            }
            onPageChanging({
              pageNumber: o
            }) {
              Q(this, q, o - 1);
            }
            focusMainContainer() {
              t(this, it).focus();
            }
            findParent(o, V) {
              for (const X of t(this, J).values()) {
                const {
                  x: rt,
                  y: ft,
                  width: yt,
                  height: Rt
                } = X.div.getBoundingClientRect();
                if (o >= rt && o <= rt + yt && V >= ft && V <= ft + Rt)
                  return X;
              }
              return null;
            }
            disableUserSelect(o = !1) {
              t(this, et).classList.toggle("noUserSelect", o);
            }
            addShouldRescale(o) {
              t(this, wt).add(o);
            }
            removeShouldRescale(o) {
              t(this, wt).delete(o);
            }
            onScaleChanging({
              scale: o
            }) {
              this.commitOrRemove(), this.viewParameters.realScale = o * g.PixelsPerInch.PDF_TO_CSS_UNITS;
              for (const V of t(this, wt))
                V.onScaleChanging();
            }
            onRotationChanging({
              pagesRotation: o
            }) {
              this.commitOrRemove(), this.viewParameters.rotation = o;
            }
            addToAnnotationStorage(o) {
              !o.isEmpty() && t(this, Y) && !t(this, Y).has(o.id) && t(this, Y).setValue(o.id, o);
            }
            blur() {
              if (!this.hasSelection)
                return;
              const {
                activeElement: o
              } = document;
              for (const V of t(this, R))
                if (V.div.contains(o)) {
                  Q(this, l, [V, o]), V._focusEventsAllowed = !1;
                  break;
                }
            }
            focus() {
              if (!t(this, l))
                return;
              const [o, V] = t(this, l);
              Q(this, l, null), V.addEventListener("focusin", () => {
                o._focusEventsAllowed = !0;
              }, {
                once: !0
              }), V.focus();
            }
            addEditListeners() {
              W(this, Ut, ri).call(this), W(this, Xt, ai).call(this);
            }
            removeEditListeners() {
              W(this, Gt, ke).call(this), W(this, At, oi).call(this);
            }
            copy(o) {
              var X;
              if (o.preventDefault(), (X = t(this, x)) == null || X.commitOrRemove(), !this.hasSelection)
                return;
              const V = [];
              for (const rt of t(this, R)) {
                const ft = rt.serialize(!0);
                ft && V.push(ft);
              }
              V.length !== 0 && o.clipboardData.setData("application/pdfjs", JSON.stringify(V));
            }
            cut(o) {
              this.copy(o), this.delete();
            }
            paste(o) {
              o.preventDefault();
              const {
                clipboardData: V
              } = o;
              for (const ft of V.items)
                for (const yt of t(this, $))
                  if (yt.isHandlingMimeForPasting(ft.type)) {
                    yt.paste(ft, this.currentLayer);
                    return;
                  }
              let X = V.getData("application/pdfjs");
              if (!X)
                return;
              try {
                X = JSON.parse(X);
              } catch (ft) {
                (0, n.warn)(`paste: "${ft.message}".`);
                return;
              }
              if (!Array.isArray(X))
                return;
              this.unselectAll();
              const rt = this.currentLayer;
              try {
                const ft = [];
                for (const Nt of X) {
                  const Dt = rt.deserialize(Nt);
                  if (!Dt)
                    return;
                  ft.push(Dt);
                }
                const yt = () => {
                  for (const Nt of ft)
                    W(this, Et, li).call(this, Nt);
                  W(this, Ct, ci).call(this, ft);
                }, Rt = () => {
                  for (const Nt of ft)
                    Nt.remove();
                };
                this.addCommands({
                  cmd: yt,
                  undo: Rt,
                  mustExec: !0
                });
              } catch (ft) {
                (0, n.warn)(`paste: "${ft.message}".`);
              }
            }
            keydown(o) {
              var V;
              (V = this.getActive()) != null && V.shouldGetKeyboardEvents() || Vt._keyboardManager.exec(this, o);
            }
            onEditingAction(o) {
              ["undo", "redo", "delete", "selectAll"].includes(o.name) && this[o.name]();
            }
            setEditingState(o) {
              o ? (W(this, mt, on).call(this), W(this, Ut, ri).call(this), W(this, Xt, ai).call(this), W(this, D, re).call(this, {
                isEditing: t(this, T) !== n.AnnotationEditorType.NONE,
                isEmpty: W(this, Ot, ve).call(this),
                hasSomethingToUndo: t(this, tt).hasSomethingToUndo(),
                hasSomethingToRedo: t(this, tt).hasSomethingToRedo(),
                hasSelectedEditor: !1
              })) : (W(this, kt, si).call(this), W(this, Gt, ke).call(this), W(this, At, oi).call(this), W(this, D, re).call(this, {
                isEditing: !1
              }), this.disableUserSelect(!1));
            }
            registerEditorTypes(o) {
              if (!t(this, $)) {
                Q(this, $, o);
                for (const V of t(this, $))
                  W(this, ot, be).call(this, V.defaultPropertiesToUpdate);
              }
            }
            getId() {
              return t(this, N).getId();
            }
            get currentLayer() {
              return t(this, J).get(t(this, q));
            }
            getLayer(o) {
              return t(this, J).get(o);
            }
            get currentPageIndex() {
              return t(this, q);
            }
            addLayer(o) {
              t(this, J).set(o.pageIndex, o), t(this, a) ? o.enable() : o.disable();
            }
            removeLayer(o) {
              t(this, J).delete(o.pageIndex);
            }
            updateMode(o, V = null) {
              if (t(this, T) !== o) {
                if (Q(this, T, o), o === n.AnnotationEditorType.NONE) {
                  this.setEditingState(!1), W(this, ct, cn).call(this);
                  return;
                }
                this.setEditingState(!0), W(this, bt, ln).call(this), this.unselectAll();
                for (const X of t(this, J).values())
                  X.updateMode(o);
                if (V) {
                  for (const X of t(this, z).values())
                    if (X.annotationElementId === V) {
                      this.setSelected(X), X.enterInEditMode();
                      break;
                    }
                }
              }
            }
            updateToolbar(o) {
              o !== t(this, T) && this._eventBus.dispatch("switchannotationeditormode", {
                source: this,
                mode: o
              });
            }
            updateParams(o, V) {
              if (t(this, $)) {
                if (o === n.AnnotationEditorParamsType.CREATE) {
                  this.currentLayer.addNewEditor(o);
                  return;
                }
                for (const X of t(this, R))
                  X.updateParams(o, V);
                for (const X of t(this, $))
                  X.updateDefaultParams(o, V);
              }
            }
            enableWaiting(o = !1) {
              if (t(this, p) !== o) {
                Q(this, p, o);
                for (const V of t(this, J).values())
                  o ? V.disableClick() : V.enableClick(), V.div.classList.toggle("waiting", o);
              }
            }
            getEditors(o) {
              const V = [];
              for (const X of t(this, z).values())
                X.pageIndex === o && V.push(X);
              return V;
            }
            getEditor(o) {
              return t(this, z).get(o);
            }
            addEditor(o) {
              t(this, z).set(o.id, o);
            }
            removeEditor(o) {
              var V;
              t(this, z).delete(o.id), this.unselect(o), (!o.annotationElementId || !t(this, U).has(o.annotationElementId)) && ((V = t(this, Y)) == null || V.remove(o.id));
            }
            addDeletedAnnotationElement(o) {
              t(this, U).add(o.annotationElementId), o.deleted = !0;
            }
            isDeletedAnnotationElement(o) {
              return t(this, U).has(o);
            }
            removeDeletedAnnotationElement(o) {
              t(this, U).delete(o.annotationElementId), o.deleted = !1;
            }
            setActiveEditor(o) {
              t(this, x) !== o && (Q(this, x, o), o && W(this, ot, be).call(this, o.propertiesToUpdate));
            }
            toggleSelected(o) {
              if (t(this, R).has(o)) {
                t(this, R).delete(o), o.unselect(), W(this, D, re).call(this, {
                  hasSelectedEditor: this.hasSelection
                });
                return;
              }
              t(this, R).add(o), o.select(), W(this, ot, be).call(this, o.propertiesToUpdate), W(this, D, re).call(this, {
                hasSelectedEditor: !0
              });
            }
            setSelected(o) {
              for (const V of t(this, R))
                V !== o && V.unselect();
              t(this, R).clear(), t(this, R).add(o), o.select(), W(this, ot, be).call(this, o.propertiesToUpdate), W(this, D, re).call(this, {
                hasSelectedEditor: !0
              });
            }
            isSelected(o) {
              return t(this, R).has(o);
            }
            unselect(o) {
              o.unselect(), t(this, R).delete(o), W(this, D, re).call(this, {
                hasSelectedEditor: this.hasSelection
              });
            }
            get hasSelection() {
              return t(this, R).size !== 0;
            }
            undo() {
              t(this, tt).undo(), W(this, D, re).call(this, {
                hasSomethingToUndo: t(this, tt).hasSomethingToUndo(),
                hasSomethingToRedo: !0,
                isEmpty: W(this, Ot, ve).call(this)
              });
            }
            redo() {
              t(this, tt).redo(), W(this, D, re).call(this, {
                hasSomethingToUndo: !0,
                hasSomethingToRedo: t(this, tt).hasSomethingToRedo(),
                isEmpty: W(this, Ot, ve).call(this)
              });
            }
            addCommands(o) {
              t(this, tt).add(o), W(this, D, re).call(this, {
                hasSomethingToUndo: !0,
                hasSomethingToRedo: !1,
                isEmpty: W(this, Ot, ve).call(this)
              });
            }
            delete() {
              if (this.commitOrRemove(), !this.hasSelection)
                return;
              const o = [...t(this, R)], V = () => {
                for (const rt of o)
                  rt.remove();
              }, X = () => {
                for (const rt of o)
                  W(this, Et, li).call(this, rt);
              };
              this.addCommands({
                cmd: V,
                undo: X,
                mustExec: !0
              });
            }
            commitOrRemove() {
              var o;
              (o = t(this, x)) == null || o.commitOrRemove();
            }
            hasSomethingToControl() {
              return t(this, x) || this.hasSelection;
            }
            selectAll() {
              for (const o of t(this, R))
                o.commit();
              W(this, Ct, ci).call(this, t(this, z).values());
            }
            unselectAll() {
              if (t(this, x)) {
                t(this, x).commitOrRemove();
                return;
              }
              if (this.hasSelection) {
                for (const o of t(this, R))
                  o.unselect();
                t(this, R).clear(), W(this, D, re).call(this, {
                  hasSelectedEditor: !1
                });
              }
            }
            translateSelectedEditors(o, V, X = !1) {
              if (X || this.commitOrRemove(), !this.hasSelection)
                return;
              t(this, ut)[0] += o, t(this, ut)[1] += V;
              const [rt, ft] = t(this, ut), yt = [...t(this, R)], Rt = 1e3;
              t(this, lt) && clearTimeout(t(this, lt)), Q(this, lt, setTimeout(() => {
                Q(this, lt, null), t(this, ut)[0] = t(this, ut)[1] = 0, this.addCommands({
                  cmd: () => {
                    for (const Nt of yt)
                      t(this, z).has(Nt.id) && Nt.translateInPage(rt, ft);
                  },
                  undo: () => {
                    for (const Nt of yt)
                      t(this, z).has(Nt.id) && Nt.translateInPage(-rt, -ft);
                  },
                  mustExec: !1
                });
              }, Rt));
              for (const Nt of yt)
                Nt.translateInPage(o, V);
            }
            setUpDragSession() {
              if (this.hasSelection) {
                this.disableUserSelect(!0), Q(this, at, /* @__PURE__ */ new Map());
                for (const o of t(this, R))
                  t(this, at).set(o, {
                    savedX: o.x,
                    savedY: o.y,
                    savedPageIndex: o.pageIndex,
                    newX: 0,
                    newY: 0,
                    newPageIndex: -1
                  });
              }
            }
            endDragSession() {
              if (!t(this, at))
                return !1;
              this.disableUserSelect(!1);
              const o = t(this, at);
              Q(this, at, null);
              let V = !1;
              for (const [{
                x: rt,
                y: ft,
                pageIndex: yt
              }, Rt] of o)
                Rt.newX = rt, Rt.newY = ft, Rt.newPageIndex = yt, V || (V = rt !== Rt.savedX || ft !== Rt.savedY || yt !== Rt.savedPageIndex);
              if (!V)
                return !1;
              const X = (rt, ft, yt, Rt) => {
                if (t(this, z).has(rt.id)) {
                  const Nt = t(this, J).get(Rt);
                  Nt ? rt._setParentAndPosition(Nt, ft, yt) : (rt.pageIndex = Rt, rt.x = ft, rt.y = yt);
                }
              };
              return this.addCommands({
                cmd: () => {
                  for (const [rt, {
                    newX: ft,
                    newY: yt,
                    newPageIndex: Rt
                  }] of o)
                    X(rt, ft, yt, Rt);
                },
                undo: () => {
                  for (const [rt, {
                    savedX: ft,
                    savedY: yt,
                    savedPageIndex: Rt
                  }] of o)
                    X(rt, ft, yt, Rt);
                },
                mustExec: !0
              }), !0;
            }
            dragSelectedEditors(o, V) {
              if (t(this, at))
                for (const X of t(this, at).keys())
                  X.drag(o, V);
            }
            rebuild(o) {
              if (o.parent === null) {
                const V = this.getLayer(o.pageIndex);
                V ? (V.changeParent(o), V.addOrRebuild(o)) : (this.addEditor(o), this.addToAnnotationStorage(o), o.rebuild());
              } else
                o.parent.addOrRebuild(o);
            }
            isActive(o) {
              return t(this, x) === o;
            }
            getActive() {
              return t(this, x);
            }
            getMode() {
              return t(this, T);
            }
            get imageManager() {
              return (0, n.shadow)(this, "imageManager", new f());
            }
          };
          x = new WeakMap(), z = new WeakMap(), J = new WeakMap(), M = new WeakMap(), Y = new WeakMap(), tt = new WeakMap(), q = new WeakMap(), U = new WeakMap(), at = new WeakMap(), $ = new WeakMap(), wt = new WeakMap(), Pt = new WeakMap(), N = new WeakMap(), a = new WeakMap(), p = new WeakMap(), l = new WeakMap(), T = new WeakMap(), R = new WeakMap(), H = new WeakMap(), K = new WeakMap(), nt = new WeakMap(), _t = new WeakMap(), pt = new WeakMap(), St = new WeakMap(), st = new WeakMap(), vt = new WeakMap(), gt = new WeakMap(), Lt = new WeakMap(), It = new WeakMap(), Mt = new WeakMap(), ut = new WeakMap(), lt = new WeakMap(), it = new WeakMap(), et = new WeakMap(), mt = new WeakSet(), on = function() {
            window.addEventListener("focus", t(this, nt)), window.addEventListener("blur", t(this, K));
          }, kt = new WeakSet(), si = function() {
            window.removeEventListener("focus", t(this, nt)), window.removeEventListener("blur", t(this, K));
          }, Ut = new WeakSet(), ri = function() {
            window.addEventListener("keydown", t(this, st), {
              capture: !0
            });
          }, Gt = new WeakSet(), ke = function() {
            window.removeEventListener("keydown", t(this, st), {
              capture: !0
            });
          }, Xt = new WeakSet(), ai = function() {
            document.addEventListener("copy", t(this, _t)), document.addEventListener("cut", t(this, pt)), document.addEventListener("paste", t(this, St));
          }, At = new WeakSet(), oi = function() {
            document.removeEventListener("copy", t(this, _t)), document.removeEventListener("cut", t(this, pt)), document.removeEventListener("paste", t(this, St));
          }, D = new WeakSet(), re = function(o) {
            Object.entries(o).some(([X, rt]) => t(this, Mt)[X] !== rt) && this._eventBus.dispatch("annotationeditorstateschanged", {
              source: this,
              details: Object.assign(t(this, Mt), o)
            });
          }, ot = new WeakSet(), be = function(o) {
            this._eventBus.dispatch("annotationeditorparamschanged", {
              source: this,
              details: o
            });
          }, bt = new WeakSet(), ln = function() {
            if (!t(this, a)) {
              Q(this, a, !0);
              for (const o of t(this, J).values())
                o.enable();
            }
          }, ct = new WeakSet(), cn = function() {
            if (this.unselectAll(), t(this, a)) {
              Q(this, a, !1);
              for (const o of t(this, J).values())
                o.disable();
            }
          }, Et = new WeakSet(), li = function(o) {
            const V = t(this, J).get(o.pageIndex);
            V ? V.addOrRebuild(o) : this.addEditor(o);
          }, Ot = new WeakSet(), ve = function() {
            if (t(this, z).size === 0)
              return !0;
            if (t(this, z).size === 1)
              for (const o of t(this, z).values())
                return o.isEmpty();
            return !1;
          }, Ct = new WeakSet(), ci = function(o) {
            t(this, R).clear();
            for (const V of o)
              V.isEmpty() || (t(this, R).add(V), V.select());
            W(this, D, re).call(this, {
              hasSelectedEditor: !0
            });
          }, ee(Vt, "TRANSLATE_SMALL", 1), ee(Vt, "TRANSLATE_BIG", 10);
          let k = Vt;
          e.AnnotationEditorUIManager = k;
        },
        /* 6 */
        /***/
        (E, e, C) => {
          var q, U, at, $, wt, Pt, N, a, p, l, T, R, fe, K, pe, _t, hi, St, Re, vt, Ie, Lt, ye, Mt, Ae;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.StatTimer = e.RenderingCancelledException = e.PixelsPerInch = e.PageViewport = e.PDFDateString = e.DOMStandardFontDataFactory = e.DOMSVGFactory = e.DOMFilterFactory = e.DOMCanvasFactory = e.DOMCMapReaderFactory = void 0, e.deprecated = w, e.getColorValues = z, e.getCurrentTransform = J, e.getCurrentTransformInverse = M, e.getFilenameFromUrl = P, e.getPdfFilenameFromUrl = A, e.getRGB = x, e.getXfaPageViewport = L, e.isDataScheme = _, e.isPdfFile = m, e.isValidFetchUrl = S, e.loadScript = i, e.noContextMenu = s, e.setLayerDimensions = Y;
          var n = C(7), g = C(1);
          const G = "http://www.w3.org/2000/svg", tt = class tt {
          };
          ee(tt, "CSS", 96), ee(tt, "PDF", 72), ee(tt, "PDF_TO_CSS_UNITS", tt.CSS / tt.PDF);
          let B = tt;
          e.PixelsPerInch = B;
          class F extends n.BaseFilterFactory {
            constructor({
              docId: et,
              ownerDocument: mt = globalThis.document
            } = {}) {
              super();
              O(this, R);
              O(this, K);
              O(this, _t);
              O(this, St);
              O(this, vt);
              O(this, Lt);
              O(this, Mt);
              O(this, q, void 0);
              O(this, U, void 0);
              O(this, at, void 0);
              O(this, $, void 0);
              O(this, wt, void 0);
              O(this, Pt, void 0);
              O(this, N, void 0);
              O(this, a, void 0);
              O(this, p, void 0);
              O(this, l, void 0);
              O(this, T, 0);
              Q(this, at, et), Q(this, $, mt);
            }
            addFilter(et) {
              if (!et)
                return "none";
              let mt = t(this, R, fe).get(et);
              if (mt)
                return mt;
              let Tt, kt, Bt, Ut;
              if (et.length === 1) {
                const Xt = et[0], Qt = new Array(256);
                for (let At = 0; At < 256; At++)
                  Qt[At] = Xt[At] / 255;
                Ut = Tt = kt = Bt = Qt.join(",");
              } else {
                const [Xt, Qt, At] = et, v = new Array(256), D = new Array(256), ht = new Array(256);
                for (let ot = 0; ot < 256; ot++)
                  v[ot] = Xt[ot] / 255, D[ot] = Qt[ot] / 255, ht[ot] = At[ot] / 255;
                Tt = v.join(","), kt = D.join(","), Bt = ht.join(","), Ut = `${Tt}${kt}${Bt}`;
              }
              if (mt = t(this, R, fe).get(Ut), mt)
                return t(this, R, fe).set(et, mt), mt;
              const $t = `g_${t(this, at)}_transfer_map_${ue(this, T)._++}`, Gt = `url(#${$t})`;
              t(this, R, fe).set(et, Gt), t(this, R, fe).set(Ut, Gt);
              const Kt = W(this, St, Re).call(this, $t);
              return W(this, Lt, ye).call(this, Tt, kt, Bt, Kt), Gt;
            }
            addHCMFilter(et, mt) {
              var Qt;
              const Tt = `${et}-${mt}`;
              if (t(this, Pt) === Tt)
                return t(this, N);
              if (Q(this, Pt, Tt), Q(this, N, "none"), (Qt = t(this, wt)) == null || Qt.remove(), !et || !mt)
                return t(this, N);
              const kt = W(this, Mt, Ae).call(this, et);
              et = g.Util.makeHexColor(...kt);
              const Bt = W(this, Mt, Ae).call(this, mt);
              if (mt = g.Util.makeHexColor(...Bt), t(this, K, pe).style.color = "", et === "#000000" && mt === "#ffffff" || et === mt)
                return t(this, N);
              const Ut = new Array(256);
              for (let At = 0; At <= 255; At++) {
                const v = At / 255;
                Ut[At] = v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
              }
              const $t = Ut.join(","), Gt = `g_${t(this, at)}_hcm_filter`, Kt = Q(this, a, W(this, St, Re).call(this, Gt));
              W(this, Lt, ye).call(this, $t, $t, $t, Kt), W(this, _t, hi).call(this, Kt);
              const Xt = (At, v) => {
                const D = kt[At] / 255, ht = Bt[At] / 255, ot = new Array(v + 1);
                for (let dt = 0; dt <= v; dt++)
                  ot[dt] = D + dt / v * (ht - D);
                return ot.join(",");
              };
              return W(this, Lt, ye).call(this, Xt(0, 5), Xt(1, 5), Xt(2, 5), Kt), Q(this, N, `url(#${Gt})`), t(this, N);
            }
            addHighlightHCMFilter(et, mt, Tt, kt) {
              var ht;
              const Bt = `${et}-${mt}-${Tt}-${kt}`;
              if (t(this, p) === Bt)
                return t(this, l);
              if (Q(this, p, Bt), Q(this, l, "none"), (ht = t(this, a)) == null || ht.remove(), !et || !mt)
                return t(this, l);
              const [Ut, $t] = [et, mt].map(W(this, Mt, Ae).bind(this));
              let Gt = Math.round(0.2126 * Ut[0] + 0.7152 * Ut[1] + 0.0722 * Ut[2]), Kt = Math.round(0.2126 * $t[0] + 0.7152 * $t[1] + 0.0722 * $t[2]), [Xt, Qt] = [Tt, kt].map(W(this, Mt, Ae).bind(this));
              Kt < Gt && ([Gt, Kt, Xt, Qt] = [Kt, Gt, Qt, Xt]), t(this, K, pe).style.color = "";
              const At = (ot, dt, bt) => {
                const j = new Array(256), ct = (Kt - Gt) / bt, xt = ot / 255, Et = (dt - ot) / (255 * bt);
                let Ft = 0;
                for (let Ot = 0; Ot <= bt; Ot++) {
                  const Wt = Math.round(Gt + Ot * ct), Ct = xt + Ot * Et;
                  for (let qt = Ft; qt <= Wt; qt++)
                    j[qt] = Ct;
                  Ft = Wt + 1;
                }
                for (let Ot = Ft; Ot < 256; Ot++)
                  j[Ot] = j[Ft - 1];
                return j.join(",");
              }, v = `g_${t(this, at)}_hcm_highlight_filter`, D = Q(this, a, W(this, St, Re).call(this, v));
              return W(this, _t, hi).call(this, D), W(this, Lt, ye).call(this, At(Xt[0], Qt[0], 5), At(Xt[1], Qt[1], 5), At(Xt[2], Qt[2], 5), D), Q(this, l, `url(#${v})`), t(this, l);
            }
            destroy(et = !1) {
              et && (t(this, N) || t(this, l)) || (t(this, U) && (t(this, U).parentNode.parentNode.remove(), Q(this, U, null)), t(this, q) && (t(this, q).clear(), Q(this, q, null)), Q(this, T, 0));
            }
          }
          q = new WeakMap(), U = new WeakMap(), at = new WeakMap(), $ = new WeakMap(), wt = new WeakMap(), Pt = new WeakMap(), N = new WeakMap(), a = new WeakMap(), p = new WeakMap(), l = new WeakMap(), T = new WeakMap(), R = new WeakSet(), fe = function() {
            return t(this, q) || Q(this, q, /* @__PURE__ */ new Map());
          }, K = new WeakSet(), pe = function() {
            if (!t(this, U)) {
              const et = t(this, $).createElement("div"), {
                style: mt
              } = et;
              mt.visibility = "hidden", mt.contain = "strict", mt.width = mt.height = 0, mt.position = "absolute", mt.top = mt.left = 0, mt.zIndex = -1;
              const Tt = t(this, $).createElementNS(G, "svg");
              Tt.setAttribute("width", 0), Tt.setAttribute("height", 0), Q(this, U, t(this, $).createElementNS(G, "defs")), et.append(Tt), Tt.append(t(this, U)), t(this, $).body.append(et);
            }
            return t(this, U);
          }, _t = new WeakSet(), hi = function(et) {
            const mt = t(this, $).createElementNS(G, "feColorMatrix");
            mt.setAttribute("type", "matrix"), mt.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), et.append(mt);
          }, St = new WeakSet(), Re = function(et) {
            const mt = t(this, $).createElementNS(G, "filter");
            return mt.setAttribute("color-interpolation-filters", "sRGB"), mt.setAttribute("id", et), t(this, K, pe).append(mt), mt;
          }, vt = new WeakSet(), Ie = function(et, mt, Tt) {
            const kt = t(this, $).createElementNS(G, mt);
            kt.setAttribute("type", "discrete"), kt.setAttribute("tableValues", Tt), et.append(kt);
          }, Lt = new WeakSet(), ye = function(et, mt, Tt, kt) {
            const Bt = t(this, $).createElementNS(G, "feComponentTransfer");
            kt.append(Bt), W(this, vt, Ie).call(this, Bt, "feFuncR", et), W(this, vt, Ie).call(this, Bt, "feFuncG", mt), W(this, vt, Ie).call(this, Bt, "feFuncB", Tt);
          }, Mt = new WeakSet(), Ae = function(et) {
            return t(this, K, pe).style.color = et, x(getComputedStyle(t(this, K, pe)).getPropertyValue("color"));
          }, e.DOMFilterFactory = F;
          class f extends n.BaseCanvasFactory {
            constructor({
              ownerDocument: it = globalThis.document
            } = {}) {
              super(), this._document = it;
            }
            _createCanvas(it, et) {
              const mt = this._document.createElement("canvas");
              return mt.width = it, mt.height = et, mt;
            }
          }
          e.DOMCanvasFactory = f;
          async function d(lt, it = !1) {
            if (S(lt, document.baseURI)) {
              const et = await fetch(lt);
              if (!et.ok)
                throw new Error(et.statusText);
              return it ? new Uint8Array(await et.arrayBuffer()) : (0, g.stringToBytes)(await et.text());
            }
            return new Promise((et, mt) => {
              const Tt = new XMLHttpRequest();
              Tt.open("GET", lt, !0), it && (Tt.responseType = "arraybuffer"), Tt.onreadystatechange = () => {
                if (Tt.readyState === XMLHttpRequest.DONE) {
                  if (Tt.status === 200 || Tt.status === 0) {
                    let kt;
                    if (it && Tt.response ? kt = new Uint8Array(Tt.response) : !it && Tt.responseText && (kt = (0, g.stringToBytes)(Tt.responseText)), kt) {
                      et(kt);
                      return;
                    }
                  }
                  mt(new Error(Tt.statusText));
                }
              }, Tt.send(null);
            });
          }
          class r extends n.BaseCMapReaderFactory {
            _fetchData(it, et) {
              return d(it, this.isCompressed).then((mt) => ({
                cMapData: mt,
                compressionType: et
              }));
            }
          }
          e.DOMCMapReaderFactory = r;
          class I extends n.BaseStandardFontDataFactory {
            _fetchData(it) {
              return d(it, !0);
            }
          }
          e.DOMStandardFontDataFactory = I;
          class k extends n.BaseSVGFactory {
            _createSVG(it) {
              return document.createElementNS(G, it);
            }
          }
          e.DOMSVGFactory = k;
          class y {
            constructor({
              viewBox: it,
              scale: et,
              rotation: mt,
              offsetX: Tt = 0,
              offsetY: kt = 0,
              dontFlip: Bt = !1
            }) {
              this.viewBox = it, this.scale = et, this.rotation = mt, this.offsetX = Tt, this.offsetY = kt;
              const Ut = (it[2] + it[0]) / 2, $t = (it[3] + it[1]) / 2;
              let Gt, Kt, Xt, Qt;
              switch (mt %= 360, mt < 0 && (mt += 360), mt) {
                case 180:
                  Gt = -1, Kt = 0, Xt = 0, Qt = 1;
                  break;
                case 90:
                  Gt = 0, Kt = 1, Xt = 1, Qt = 0;
                  break;
                case 270:
                  Gt = 0, Kt = -1, Xt = -1, Qt = 0;
                  break;
                case 0:
                  Gt = 1, Kt = 0, Xt = 0, Qt = -1;
                  break;
                default:
                  throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
              }
              Bt && (Xt = -Xt, Qt = -Qt);
              let At, v, D, ht;
              Gt === 0 ? (At = Math.abs($t - it[1]) * et + Tt, v = Math.abs(Ut - it[0]) * et + kt, D = (it[3] - it[1]) * et, ht = (it[2] - it[0]) * et) : (At = Math.abs(Ut - it[0]) * et + Tt, v = Math.abs($t - it[1]) * et + kt, D = (it[2] - it[0]) * et, ht = (it[3] - it[1]) * et), this.transform = [Gt * et, Kt * et, Xt * et, Qt * et, At - Gt * et * Ut - Xt * et * $t, v - Kt * et * Ut - Qt * et * $t], this.width = D, this.height = ht;
            }
            get rawDims() {
              const {
                viewBox: it
              } = this;
              return (0, g.shadow)(this, "rawDims", {
                pageWidth: it[2] - it[0],
                pageHeight: it[3] - it[1],
                pageX: it[0],
                pageY: it[1]
              });
            }
            clone({
              scale: it = this.scale,
              rotation: et = this.rotation,
              offsetX: mt = this.offsetX,
              offsetY: Tt = this.offsetY,
              dontFlip: kt = !1
            } = {}) {
              return new y({
                viewBox: this.viewBox.slice(),
                scale: it,
                rotation: et,
                offsetX: mt,
                offsetY: Tt,
                dontFlip: kt
              });
            }
            convertToViewportPoint(it, et) {
              return g.Util.applyTransform([it, et], this.transform);
            }
            convertToViewportRectangle(it) {
              const et = g.Util.applyTransform([it[0], it[1]], this.transform), mt = g.Util.applyTransform([it[2], it[3]], this.transform);
              return [et[0], et[1], mt[0], mt[1]];
            }
            convertToPdfPoint(it, et) {
              return g.Util.applyInverseTransform([it, et], this.transform);
            }
          }
          e.PageViewport = y;
          class h extends g.BaseException {
            constructor(it, et = 0) {
              super(it, "RenderingCancelledException"), this.extraDelay = et;
            }
          }
          e.RenderingCancelledException = h;
          function _(lt) {
            const it = lt.length;
            let et = 0;
            for (; et < it && lt[et].trim() === ""; )
              et++;
            return lt.substring(et, et + 5).toLowerCase() === "data:";
          }
          function m(lt) {
            return typeof lt == "string" && /\.pdf$/i.test(lt);
          }
          function P(lt, it = !1) {
            return it || ([lt] = lt.split(/[#?]/, 1)), lt.substring(lt.lastIndexOf("/") + 1);
          }
          function A(lt, it = "document.pdf") {
            if (typeof lt != "string")
              return it;
            if (_(lt))
              return (0, g.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), it;
            const et = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, mt = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, Tt = et.exec(lt);
            let kt = mt.exec(Tt[1]) || mt.exec(Tt[2]) || mt.exec(Tt[3]);
            if (kt && (kt = kt[0], kt.includes("%")))
              try {
                kt = mt.exec(decodeURIComponent(kt))[0];
              } catch {
              }
            return kt || it;
          }
          class u {
            constructor() {
              ee(this, "started", /* @__PURE__ */ Object.create(null));
              ee(this, "times", []);
            }
            time(it) {
              it in this.started && (0, g.warn)(`Timer is already running for ${it}`), this.started[it] = Date.now();
            }
            timeEnd(it) {
              it in this.started || (0, g.warn)(`Timer has not been started for ${it}`), this.times.push({
                name: it,
                start: this.started[it],
                end: Date.now()
              }), delete this.started[it];
            }
            toString() {
              const it = [];
              let et = 0;
              for (const {
                name: mt
              } of this.times)
                et = Math.max(mt.length, et);
              for (const {
                name: mt,
                start: Tt,
                end: kt
              } of this.times)
                it.push(`${mt.padEnd(et)} ${kt - Tt}ms
`);
              return it.join("");
            }
          }
          e.StatTimer = u;
          function S(lt, it) {
            try {
              const {
                protocol: et
              } = it ? new URL(lt, it) : new URL(lt);
              return et === "http:" || et === "https:";
            } catch {
              return !1;
            }
          }
          function s(lt) {
            lt.preventDefault();
          }
          function i(lt, it = !1) {
            return new Promise((et, mt) => {
              const Tt = document.createElement("script");
              Tt.src = lt, Tt.onload = function(kt) {
                it && Tt.remove(), et(kt);
              }, Tt.onerror = function() {
                mt(new Error(`Cannot load script at: ${Tt.src}`));
              }, (document.head || document.documentElement).append(Tt);
            });
          }
          function w(lt) {
            console.log("Deprecated API usage: " + lt);
          }
          let b;
          class c {
            static toDateObject(it) {
              if (!it || typeof it != "string")
                return null;
              b || (b = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
              const et = b.exec(it);
              if (!et)
                return null;
              const mt = parseInt(et[1], 10);
              let Tt = parseInt(et[2], 10);
              Tt = Tt >= 1 && Tt <= 12 ? Tt - 1 : 0;
              let kt = parseInt(et[3], 10);
              kt = kt >= 1 && kt <= 31 ? kt : 1;
              let Bt = parseInt(et[4], 10);
              Bt = Bt >= 0 && Bt <= 23 ? Bt : 0;
              let Ut = parseInt(et[5], 10);
              Ut = Ut >= 0 && Ut <= 59 ? Ut : 0;
              let $t = parseInt(et[6], 10);
              $t = $t >= 0 && $t <= 59 ? $t : 0;
              const Gt = et[7] || "Z";
              let Kt = parseInt(et[8], 10);
              Kt = Kt >= 0 && Kt <= 23 ? Kt : 0;
              let Xt = parseInt(et[9], 10) || 0;
              return Xt = Xt >= 0 && Xt <= 59 ? Xt : 0, Gt === "-" ? (Bt += Kt, Ut += Xt) : Gt === "+" && (Bt -= Kt, Ut -= Xt), new Date(Date.UTC(mt, Tt, kt, Bt, Ut, $t));
            }
          }
          e.PDFDateString = c;
          function L(lt, {
            scale: it = 1,
            rotation: et = 0
          }) {
            const {
              width: mt,
              height: Tt
            } = lt.attributes.style, kt = [0, 0, parseInt(mt), parseInt(Tt)];
            return new y({
              viewBox: kt,
              scale: it,
              rotation: et
            });
          }
          function x(lt) {
            if (lt.startsWith("#")) {
              const it = parseInt(lt.slice(1), 16);
              return [(it & 16711680) >> 16, (it & 65280) >> 8, it & 255];
            }
            return lt.startsWith("rgb(") ? lt.slice(4, -1).split(",").map((it) => parseInt(it)) : lt.startsWith("rgba(") ? lt.slice(5, -1).split(",").map((it) => parseInt(it)).slice(0, 3) : ((0, g.warn)(`Not a valid color format: "${lt}"`), [0, 0, 0]);
          }
          function z(lt) {
            const it = document.createElement("span");
            it.style.visibility = "hidden", document.body.append(it);
            for (const et of lt.keys()) {
              it.style.color = et;
              const mt = window.getComputedStyle(it).color;
              lt.set(et, x(mt));
            }
            it.remove();
          }
          function J(lt) {
            const {
              a: it,
              b: et,
              c: mt,
              d: Tt,
              e: kt,
              f: Bt
            } = lt.getTransform();
            return [it, et, mt, Tt, kt, Bt];
          }
          function M(lt) {
            const {
              a: it,
              b: et,
              c: mt,
              d: Tt,
              e: kt,
              f: Bt
            } = lt.getTransform().invertSelf();
            return [it, et, mt, Tt, kt, Bt];
          }
          function Y(lt, it, et = !1, mt = !0) {
            if (it instanceof y) {
              const {
                pageWidth: Tt,
                pageHeight: kt
              } = it.rawDims, {
                style: Bt
              } = lt, Ut = g.FeatureTest.isCSSRoundSupported, $t = `var(--scale-factor) * ${Tt}px`, Gt = `var(--scale-factor) * ${kt}px`, Kt = Ut ? `round(${$t}, 1px)` : `calc(${$t})`, Xt = Ut ? `round(${Gt}, 1px)` : `calc(${Gt})`;
              !et || it.rotation % 180 === 0 ? (Bt.width = Kt, Bt.height = Xt) : (Bt.width = Xt, Bt.height = Kt);
            }
            mt && lt.setAttribute("data-main-rotation", it.rotation);
          }
        },
        /* 7 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.BaseStandardFontDataFactory = e.BaseSVGFactory = e.BaseFilterFactory = e.BaseCanvasFactory = e.BaseCMapReaderFactory = void 0;
          var n = C(1);
          class g {
            constructor() {
              this.constructor === g && (0, n.unreachable)("Cannot initialize BaseFilterFactory.");
            }
            addFilter(r) {
              return "none";
            }
            addHCMFilter(r, I) {
              return "none";
            }
            addHighlightHCMFilter(r, I, k, y) {
              return "none";
            }
            destroy(r = !1) {
            }
          }
          e.BaseFilterFactory = g;
          class G {
            constructor() {
              this.constructor === G && (0, n.unreachable)("Cannot initialize BaseCanvasFactory.");
            }
            create(r, I) {
              if (r <= 0 || I <= 0)
                throw new Error("Invalid canvas size");
              const k = this._createCanvas(r, I);
              return {
                canvas: k,
                context: k.getContext("2d")
              };
            }
            reset(r, I, k) {
              if (!r.canvas)
                throw new Error("Canvas is not specified");
              if (I <= 0 || k <= 0)
                throw new Error("Invalid canvas size");
              r.canvas.width = I, r.canvas.height = k;
            }
            destroy(r) {
              if (!r.canvas)
                throw new Error("Canvas is not specified");
              r.canvas.width = 0, r.canvas.height = 0, r.canvas = null, r.context = null;
            }
            _createCanvas(r, I) {
              (0, n.unreachable)("Abstract method `_createCanvas` called.");
            }
          }
          e.BaseCanvasFactory = G;
          class B {
            constructor({
              baseUrl: r = null,
              isCompressed: I = !0
            }) {
              this.constructor === B && (0, n.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = r, this.isCompressed = I;
            }
            async fetch({
              name: r
            }) {
              if (!this.baseUrl)
                throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
              if (!r)
                throw new Error("CMap name must be specified.");
              const I = this.baseUrl + r + (this.isCompressed ? ".bcmap" : ""), k = this.isCompressed ? n.CMapCompressionType.BINARY : n.CMapCompressionType.NONE;
              return this._fetchData(I, k).catch((y) => {
                throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${I}`);
              });
            }
            _fetchData(r, I) {
              (0, n.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          e.BaseCMapReaderFactory = B;
          class F {
            constructor({
              baseUrl: r = null
            }) {
              this.constructor === F && (0, n.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = r;
            }
            async fetch({
              filename: r
            }) {
              if (!this.baseUrl)
                throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
              if (!r)
                throw new Error("Font filename must be specified.");
              const I = `${this.baseUrl}${r}`;
              return this._fetchData(I).catch((k) => {
                throw new Error(`Unable to load font data at: ${I}`);
              });
            }
            _fetchData(r) {
              (0, n.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          e.BaseStandardFontDataFactory = F;
          class f {
            constructor() {
              this.constructor === f && (0, n.unreachable)("Cannot initialize BaseSVGFactory.");
            }
            create(r, I, k = !1) {
              if (r <= 0 || I <= 0)
                throw new Error("Invalid SVG dimensions");
              const y = this._createSVG("svg:svg");
              return y.setAttribute("version", "1.1"), k || (y.setAttribute("width", `${r}px`), y.setAttribute("height", `${I}px`)), y.setAttribute("preserveAspectRatio", "none"), y.setAttribute("viewBox", `0 0 ${r} ${I}`), y;
            }
            createElement(r) {
              if (typeof r != "string")
                throw new Error("Invalid SVG element type");
              return this._createSVG(r);
            }
            _createSVG(r) {
              (0, n.unreachable)("Abstract method `_createSVG` called.");
            }
          }
          e.BaseSVGFactory = f;
        },
        /* 8 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.MurmurHash3_64 = void 0;
          var n = C(1);
          const g = 3285377520, G = 4294901760, B = 65535;
          class F {
            constructor(d) {
              this.h1 = d ? d & 4294967295 : g, this.h2 = d ? d & 4294967295 : g;
            }
            update(d) {
              let r, I;
              if (typeof d == "string") {
                r = new Uint8Array(d.length * 2), I = 0;
                for (let w = 0, b = d.length; w < b; w++) {
                  const c = d.charCodeAt(w);
                  c <= 255 ? r[I++] = c : (r[I++] = c >>> 8, r[I++] = c & 255);
                }
              } else if ((0, n.isArrayBuffer)(d))
                r = d.slice(), I = r.byteLength;
              else
                throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
              const k = I >> 2, y = I - k * 4, h = new Uint32Array(r.buffer, 0, k);
              let _ = 0, m = 0, P = this.h1, A = this.h2;
              const u = 3432918353, S = 461845907, s = u & B, i = S & B;
              for (let w = 0; w < k; w++)
                w & 1 ? (_ = h[w], _ = _ * u & G | _ * s & B, _ = _ << 15 | _ >>> 17, _ = _ * S & G | _ * i & B, P ^= _, P = P << 13 | P >>> 19, P = P * 5 + 3864292196) : (m = h[w], m = m * u & G | m * s & B, m = m << 15 | m >>> 17, m = m * S & G | m * i & B, A ^= m, A = A << 13 | A >>> 19, A = A * 5 + 3864292196);
              switch (_ = 0, y) {
                case 3:
                  _ ^= r[k * 4 + 2] << 16;
                case 2:
                  _ ^= r[k * 4 + 1] << 8;
                case 1:
                  _ ^= r[k * 4], _ = _ * u & G | _ * s & B, _ = _ << 15 | _ >>> 17, _ = _ * S & G | _ * i & B, k & 1 ? P ^= _ : A ^= _;
              }
              this.h1 = P, this.h2 = A;
            }
            hexdigest() {
              let d = this.h1, r = this.h2;
              return d ^= r >>> 1, d = d * 3981806797 & G | d * 36045 & B, r = r * 4283543511 & G | ((r << 16 | d >>> 16) * 2950163797 & G) >>> 16, d ^= r >>> 1, d = d * 444984403 & G | d * 60499 & B, r = r * 3301882366 & G | ((r << 16 | d >>> 16) * 3120437893 & G) >>> 16, d ^= r >>> 1, (d >>> 0).toString(16).padStart(8, "0") + (r >>> 0).toString(16).padStart(8, "0");
            }
          }
          e.MurmurHash3_64 = F;
        },
        /* 9 */
        /***/
        (E, e, C) => {
          var B;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.FontLoader = e.FontFaceObject = void 0;
          var n = C(1);
          class g {
            constructor({
              ownerDocument: f = globalThis.document,
              styleElement: d = null
            }) {
              O(this, B, /* @__PURE__ */ new Set());
              this._document = f, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
            }
            addNativeFontFace(f) {
              this.nativeFontFaces.add(f), this._document.fonts.add(f);
            }
            removeNativeFontFace(f) {
              this.nativeFontFaces.delete(f), this._document.fonts.delete(f);
            }
            insertRule(f) {
              this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
              const d = this.styleElement.sheet;
              d.insertRule(f, d.cssRules.length);
            }
            clear() {
              for (const f of this.nativeFontFaces)
                this._document.fonts.delete(f);
              this.nativeFontFaces.clear(), t(this, B).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
            }
            async loadSystemFont(f) {
              if (!(!f || t(this, B).has(f.loadedName))) {
                if ((0, n.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
                  const {
                    loadedName: d,
                    src: r,
                    style: I
                  } = f, k = new FontFace(d, r, I);
                  this.addNativeFontFace(k);
                  try {
                    await k.load(), t(this, B).add(d);
                  } catch {
                    (0, n.warn)(`Cannot load system font: ${f.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(k);
                  }
                  return;
                }
                (0, n.unreachable)("Not implemented: loadSystemFont without the Font Loading API.");
              }
            }
            async bind(f) {
              if (f.attached || f.missingFile && !f.systemFontInfo)
                return;
              if (f.attached = !0, f.systemFontInfo) {
                await this.loadSystemFont(f.systemFontInfo);
                return;
              }
              if (this.isFontLoadingAPISupported) {
                const r = f.createNativeFontFace();
                if (r) {
                  this.addNativeFontFace(r);
                  try {
                    await r.loaded;
                  } catch (I) {
                    throw (0, n.warn)(`Failed to load font '${r.family}': '${I}'.`), f.disableFontFace = !0, I;
                  }
                }
                return;
              }
              const d = f.createFontFaceRule();
              if (d) {
                if (this.insertRule(d), this.isSyncFontLoadingSupported)
                  return;
                await new Promise((r) => {
                  const I = this._queueLoadingCallback(r);
                  this._prepareFontLoadEvent(f, I);
                });
              }
            }
            get isFontLoadingAPISupported() {
              var d;
              const f = !!((d = this._document) != null && d.fonts);
              return (0, n.shadow)(this, "isFontLoadingAPISupported", f);
            }
            get isSyncFontLoadingSupported() {
              let f = !1;
              return (n.isNodeJS || typeof navigator < "u" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (f = !0), (0, n.shadow)(this, "isSyncFontLoadingSupported", f);
            }
            _queueLoadingCallback(f) {
              function d() {
                for ((0, n.assert)(!I.done, "completeRequest() cannot be called twice."), I.done = !0; r.length > 0 && r[0].done; ) {
                  const k = r.shift();
                  setTimeout(k.callback, 0);
                }
              }
              const {
                loadingRequests: r
              } = this, I = {
                done: !1,
                complete: d,
                callback: f
              };
              return r.push(I), I;
            }
            get _loadTestFont() {
              const f = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
              return (0, n.shadow)(this, "_loadTestFont", f);
            }
            _prepareFontLoadEvent(f, d) {
              function r(x, z) {
                return x.charCodeAt(z) << 24 | x.charCodeAt(z + 1) << 16 | x.charCodeAt(z + 2) << 8 | x.charCodeAt(z + 3) & 255;
              }
              function I(x, z, J, M) {
                const Y = x.substring(0, z), tt = x.substring(z + J);
                return Y + M + tt;
              }
              let k, y;
              const h = this._document.createElement("canvas");
              h.width = 1, h.height = 1;
              const _ = h.getContext("2d");
              let m = 0;
              function P(x, z) {
                if (++m > 30) {
                  (0, n.warn)("Load test font never loaded."), z();
                  return;
                }
                if (_.font = "30px " + x, _.fillText(".", 0, 20), _.getImageData(0, 0, 1, 1).data[3] > 0) {
                  z();
                  return;
                }
                setTimeout(P.bind(null, x, z));
              }
              const A = `lt${Date.now()}${this.loadTestFontId++}`;
              let u = this._loadTestFont;
              u = I(u, 976, A.length, A);
              const s = 16, i = 1482184792;
              let w = r(u, s);
              for (k = 0, y = A.length - 3; k < y; k += 4)
                w = w - i + r(A, k) | 0;
              k < A.length && (w = w - i + r(A + "XXX", k) | 0), u = I(u, s, 4, (0, n.string32)(w));
              const b = `url(data:font/opentype;base64,${btoa(u)});`, c = `@font-face {font-family:"${A}";src:${b}}`;
              this.insertRule(c);
              const L = this._document.createElement("div");
              L.style.visibility = "hidden", L.style.width = L.style.height = "10px", L.style.position = "absolute", L.style.top = L.style.left = "0px";
              for (const x of [f.loadedName, A]) {
                const z = this._document.createElement("span");
                z.textContent = "Hi", z.style.fontFamily = x, L.append(z);
              }
              this._document.body.append(L), P(A, () => {
                L.remove(), d.complete();
              });
            }
          }
          B = new WeakMap(), e.FontLoader = g;
          class G {
            constructor(f, {
              isEvalSupported: d = !0,
              disableFontFace: r = !1,
              ignoreErrors: I = !1,
              inspectFont: k = null
            }) {
              this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
              for (const y in f)
                this[y] = f[y];
              this.isEvalSupported = d !== !1, this.disableFontFace = r === !0, this.ignoreErrors = I === !0, this._inspectFont = k;
            }
            createNativeFontFace() {
              var d;
              if (!this.data || this.disableFontFace)
                return null;
              let f;
              if (!this.cssFontInfo)
                f = new FontFace(this.loadedName, this.data, {});
              else {
                const r = {
                  weight: this.cssFontInfo.fontWeight
                };
                this.cssFontInfo.italicAngle && (r.style = `oblique ${this.cssFontInfo.italicAngle}deg`), f = new FontFace(this.cssFontInfo.fontFamily, this.data, r);
              }
              return (d = this._inspectFont) == null || d.call(this, this), f;
            }
            createFontFaceRule() {
              var I;
              if (!this.data || this.disableFontFace)
                return null;
              const f = (0, n.bytesToString)(this.data), d = `url(data:${this.mimetype};base64,${btoa(f)});`;
              let r;
              if (!this.cssFontInfo)
                r = `@font-face {font-family:"${this.loadedName}";src:${d}}`;
              else {
                let k = `font-weight: ${this.cssFontInfo.fontWeight};`;
                this.cssFontInfo.italicAngle && (k += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), r = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${k}src:${d}}`;
              }
              return (I = this._inspectFont) == null || I.call(this, this, d), r;
            }
            getPathGenerator(f, d) {
              if (this.compiledGlyphs[d] !== void 0)
                return this.compiledGlyphs[d];
              let r;
              try {
                r = f.get(this.loadedName + "_path_" + d);
              } catch (I) {
                if (!this.ignoreErrors)
                  throw I;
                return (0, n.warn)(`getPathGenerator - ignoring character: "${I}".`), this.compiledGlyphs[d] = function(k, y) {
                };
              }
              if (this.isEvalSupported && n.FeatureTest.isEvalSupported) {
                const I = [];
                for (const k of r) {
                  const y = k.args !== void 0 ? k.args.join(",") : "";
                  I.push("c.", k.cmd, "(", y, `);
`);
                }
                return this.compiledGlyphs[d] = new Function("c", "size", I.join(""));
              }
              return this.compiledGlyphs[d] = function(I, k) {
                for (const y of r)
                  y.cmd === "scale" && (y.args = [k, -k]), I[y.cmd].apply(I, y.args);
              };
            }
          }
          e.FontFaceObject = G;
        },
        /* 10 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.NodeStandardFontDataFactory = e.NodeFilterFactory = e.NodeCanvasFactory = e.NodeCMapReaderFactory = void 0;
          var n = C(7);
          C(1);
          const g = function(d) {
            return new Promise((r, I) => {
              require$$5.readFile(d, (y, h) => {
                if (y || !h) {
                  I(new Error(y));
                  return;
                }
                r(new Uint8Array(h));
              });
            });
          };
          class G extends n.BaseFilterFactory {
          }
          e.NodeFilterFactory = G;
          class B extends n.BaseCanvasFactory {
            _createCanvas(r, I) {
              return require$$5.createCanvas(r, I);
            }
          }
          e.NodeCanvasFactory = B;
          class F extends n.BaseCMapReaderFactory {
            _fetchData(r, I) {
              return g(r).then((k) => ({
                cMapData: k,
                compressionType: I
              }));
            }
          }
          e.NodeCMapReaderFactory = F;
          class f extends n.BaseStandardFontDataFactory {
            _fetchData(r) {
              return g(r);
            }
          }
          e.NodeStandardFontDataFactory = f;
        },
        /* 11 */
        /***/
        (E, e, C) => {
          var U, ui, $, di;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.CanvasGraphics = void 0;
          var n = C(1), g = C(6), G = C(12), B = C(13);
          const F = 16, f = 100, d = 4096, r = 15, I = 10, k = 1e3, y = 16;
          function h(N, a) {
            if (N._removeMirroring)
              throw new Error("Context is already forwarding operations.");
            N.__originalSave = N.save, N.__originalRestore = N.restore, N.__originalRotate = N.rotate, N.__originalScale = N.scale, N.__originalTranslate = N.translate, N.__originalTransform = N.transform, N.__originalSetTransform = N.setTransform, N.__originalResetTransform = N.resetTransform, N.__originalClip = N.clip, N.__originalMoveTo = N.moveTo, N.__originalLineTo = N.lineTo, N.__originalBezierCurveTo = N.bezierCurveTo, N.__originalRect = N.rect, N.__originalClosePath = N.closePath, N.__originalBeginPath = N.beginPath, N._removeMirroring = () => {
              N.save = N.__originalSave, N.restore = N.__originalRestore, N.rotate = N.__originalRotate, N.scale = N.__originalScale, N.translate = N.__originalTranslate, N.transform = N.__originalTransform, N.setTransform = N.__originalSetTransform, N.resetTransform = N.__originalResetTransform, N.clip = N.__originalClip, N.moveTo = N.__originalMoveTo, N.lineTo = N.__originalLineTo, N.bezierCurveTo = N.__originalBezierCurveTo, N.rect = N.__originalRect, N.closePath = N.__originalClosePath, N.beginPath = N.__originalBeginPath, delete N._removeMirroring;
            }, N.save = function() {
              a.save(), this.__originalSave();
            }, N.restore = function() {
              a.restore(), this.__originalRestore();
            }, N.translate = function(l, T) {
              a.translate(l, T), this.__originalTranslate(l, T);
            }, N.scale = function(l, T) {
              a.scale(l, T), this.__originalScale(l, T);
            }, N.transform = function(l, T, R, H, K, nt) {
              a.transform(l, T, R, H, K, nt), this.__originalTransform(l, T, R, H, K, nt);
            }, N.setTransform = function(l, T, R, H, K, nt) {
              a.setTransform(l, T, R, H, K, nt), this.__originalSetTransform(l, T, R, H, K, nt);
            }, N.resetTransform = function() {
              a.resetTransform(), this.__originalResetTransform();
            }, N.rotate = function(l) {
              a.rotate(l), this.__originalRotate(l);
            }, N.clip = function(l) {
              a.clip(l), this.__originalClip(l);
            }, N.moveTo = function(p, l) {
              a.moveTo(p, l), this.__originalMoveTo(p, l);
            }, N.lineTo = function(p, l) {
              a.lineTo(p, l), this.__originalLineTo(p, l);
            }, N.bezierCurveTo = function(p, l, T, R, H, K) {
              a.bezierCurveTo(p, l, T, R, H, K), this.__originalBezierCurveTo(p, l, T, R, H, K);
            }, N.rect = function(p, l, T, R) {
              a.rect(p, l, T, R), this.__originalRect(p, l, T, R);
            }, N.closePath = function() {
              a.closePath(), this.__originalClosePath();
            }, N.beginPath = function() {
              a.beginPath(), this.__originalBeginPath();
            };
          }
          class _ {
            constructor(a) {
              this.canvasFactory = a, this.cache = /* @__PURE__ */ Object.create(null);
            }
            getCanvas(a, p, l) {
              let T;
              return this.cache[a] !== void 0 ? (T = this.cache[a], this.canvasFactory.reset(T, p, l)) : (T = this.canvasFactory.create(p, l), this.cache[a] = T), T;
            }
            delete(a) {
              delete this.cache[a];
            }
            clear() {
              for (const a in this.cache) {
                const p = this.cache[a];
                this.canvasFactory.destroy(p), delete this.cache[a];
              }
            }
          }
          function m(N, a, p, l, T, R, H, K, nt, _t) {
            const [pt, St, st, vt, gt, Lt] = (0, g.getCurrentTransform)(N);
            if (St === 0 && st === 0) {
              const ut = H * pt + gt, lt = Math.round(ut), it = K * vt + Lt, et = Math.round(it), mt = (H + nt) * pt + gt, Tt = Math.abs(Math.round(mt) - lt) || 1, kt = (K + _t) * vt + Lt, Bt = Math.abs(Math.round(kt) - et) || 1;
              return N.setTransform(Math.sign(pt), 0, 0, Math.sign(vt), lt, et), N.drawImage(a, p, l, T, R, 0, 0, Tt, Bt), N.setTransform(pt, St, st, vt, gt, Lt), [Tt, Bt];
            }
            if (pt === 0 && vt === 0) {
              const ut = K * st + gt, lt = Math.round(ut), it = H * St + Lt, et = Math.round(it), mt = (K + _t) * st + gt, Tt = Math.abs(Math.round(mt) - lt) || 1, kt = (H + nt) * St + Lt, Bt = Math.abs(Math.round(kt) - et) || 1;
              return N.setTransform(0, Math.sign(St), Math.sign(st), 0, lt, et), N.drawImage(a, p, l, T, R, 0, 0, Bt, Tt), N.setTransform(pt, St, st, vt, gt, Lt), [Bt, Tt];
            }
            N.drawImage(a, p, l, T, R, H, K, nt, _t);
            const It = Math.hypot(pt, St), Mt = Math.hypot(st, vt);
            return [It * nt, Mt * _t];
          }
          function P(N) {
            const {
              width: a,
              height: p
            } = N;
            if (a > k || p > k)
              return null;
            const l = 1e3, T = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), R = a + 1;
            let H = new Uint8Array(R * (p + 1)), K, nt, _t;
            const pt = a + 7 & -8;
            let St = new Uint8Array(pt * p), st = 0;
            for (const Mt of N.data) {
              let ut = 128;
              for (; ut > 0; )
                St[st++] = Mt & ut ? 0 : 255, ut >>= 1;
            }
            let vt = 0;
            for (st = 0, St[st] !== 0 && (H[0] = 1, ++vt), nt = 1; nt < a; nt++)
              St[st] !== St[st + 1] && (H[nt] = St[st] ? 2 : 1, ++vt), st++;
            for (St[st] !== 0 && (H[nt] = 2, ++vt), K = 1; K < p; K++) {
              st = K * pt, _t = K * R, St[st - pt] !== St[st] && (H[_t] = St[st] ? 1 : 8, ++vt);
              let Mt = (St[st] ? 4 : 0) + (St[st - pt] ? 8 : 0);
              for (nt = 1; nt < a; nt++)
                Mt = (Mt >> 2) + (St[st + 1] ? 4 : 0) + (St[st - pt + 1] ? 8 : 0), T[Mt] && (H[_t + nt] = T[Mt], ++vt), st++;
              if (St[st - pt] !== St[st] && (H[_t + nt] = St[st] ? 2 : 4, ++vt), vt > l)
                return null;
            }
            for (st = pt * (p - 1), _t = K * R, St[st] !== 0 && (H[_t] = 8, ++vt), nt = 1; nt < a; nt++)
              St[st] !== St[st + 1] && (H[_t + nt] = St[st] ? 4 : 8, ++vt), st++;
            if (St[st] !== 0 && (H[_t + nt] = 4, ++vt), vt > l)
              return null;
            const gt = new Int32Array([0, R, -1, 0, -R, 0, 0, 0, 1]), Lt = new Path2D();
            for (K = 0; vt && K <= p; K++) {
              let Mt = K * R;
              const ut = Mt + a;
              for (; Mt < ut && !H[Mt]; )
                Mt++;
              if (Mt === ut)
                continue;
              Lt.moveTo(Mt % R, K);
              const lt = Mt;
              let it = H[Mt];
              do {
                const et = gt[it];
                do
                  Mt += et;
                while (!H[Mt]);
                const mt = H[Mt];
                mt !== 5 && mt !== 10 ? (it = mt, H[Mt] = 0) : (it = mt & 51 * it >> 4, H[Mt] &= it >> 2 | it << 2), Lt.lineTo(Mt % R, Mt / R | 0), H[Mt] || --vt;
              } while (lt !== Mt);
              --K;
            }
            return St = null, H = null, function(Mt) {
              Mt.save(), Mt.scale(1 / a, -1 / p), Mt.translate(0, -p), Mt.fill(Lt), Mt.beginPath(), Mt.restore();
            };
          }
          class A {
            constructor(a, p) {
              this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = n.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = n.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = n.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, a, p]);
            }
            clone() {
              const a = Object.create(this);
              return a.clipBox = this.clipBox.slice(), a;
            }
            setCurrentPoint(a, p) {
              this.x = a, this.y = p;
            }
            updatePathMinMax(a, p, l) {
              [p, l] = n.Util.applyTransform([p, l], a), this.minX = Math.min(this.minX, p), this.minY = Math.min(this.minY, l), this.maxX = Math.max(this.maxX, p), this.maxY = Math.max(this.maxY, l);
            }
            updateRectMinMax(a, p) {
              const l = n.Util.applyTransform(p, a), T = n.Util.applyTransform(p.slice(2), a);
              this.minX = Math.min(this.minX, l[0], T[0]), this.minY = Math.min(this.minY, l[1], T[1]), this.maxX = Math.max(this.maxX, l[0], T[0]), this.maxY = Math.max(this.maxY, l[1], T[1]);
            }
            updateScalingPathMinMax(a, p) {
              n.Util.scaleMinMax(a, p), this.minX = Math.min(this.minX, p[0]), this.maxX = Math.max(this.maxX, p[1]), this.minY = Math.min(this.minY, p[2]), this.maxY = Math.max(this.maxY, p[3]);
            }
            updateCurvePathMinMax(a, p, l, T, R, H, K, nt, _t, pt) {
              const St = n.Util.bezierBoundingBox(p, l, T, R, H, K, nt, _t);
              if (pt) {
                pt[0] = Math.min(pt[0], St[0], St[2]), pt[1] = Math.max(pt[1], St[0], St[2]), pt[2] = Math.min(pt[2], St[1], St[3]), pt[3] = Math.max(pt[3], St[1], St[3]);
                return;
              }
              this.updateRectMinMax(a, St);
            }
            getPathBoundingBox(a = G.PathType.FILL, p = null) {
              const l = [this.minX, this.minY, this.maxX, this.maxY];
              if (a === G.PathType.STROKE) {
                p || (0, n.unreachable)("Stroke bounding box must include transform.");
                const T = n.Util.singularValueDecompose2dScale(p), R = T[0] * this.lineWidth / 2, H = T[1] * this.lineWidth / 2;
                l[0] -= R, l[1] -= H, l[2] += R, l[3] += H;
              }
              return l;
            }
            updateClipFromPath() {
              const a = n.Util.intersect(this.clipBox, this.getPathBoundingBox());
              this.startNewPathAndClipBox(a || [0, 0, 0, 0]);
            }
            isEmptyClip() {
              return this.minX === 1 / 0;
            }
            startNewPathAndClipBox(a) {
              this.clipBox = a, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
            }
            getClippedPathBoundingBox(a = G.PathType.FILL, p = null) {
              return n.Util.intersect(this.clipBox, this.getPathBoundingBox(a, p));
            }
          }
          function u(N, a) {
            if (typeof ImageData < "u" && a instanceof ImageData) {
              N.putImageData(a, 0, 0);
              return;
            }
            const p = a.height, l = a.width, T = p % y, R = (p - T) / y, H = T === 0 ? R : R + 1, K = N.createImageData(l, y);
            let nt = 0, _t;
            const pt = a.data, St = K.data;
            let st, vt, gt, Lt;
            if (a.kind === n.ImageKind.GRAYSCALE_1BPP) {
              const It = pt.byteLength, Mt = new Uint32Array(St.buffer, 0, St.byteLength >> 2), ut = Mt.length, lt = l + 7 >> 3, it = 4294967295, et = n.FeatureTest.isLittleEndian ? 4278190080 : 255;
              for (st = 0; st < H; st++) {
                for (gt = st < R ? y : T, _t = 0, vt = 0; vt < gt; vt++) {
                  const mt = It - nt;
                  let Tt = 0;
                  const kt = mt > lt ? l : mt * 8 - 7, Bt = kt & -8;
                  let Ut = 0, $t = 0;
                  for (; Tt < Bt; Tt += 8)
                    $t = pt[nt++], Mt[_t++] = $t & 128 ? it : et, Mt[_t++] = $t & 64 ? it : et, Mt[_t++] = $t & 32 ? it : et, Mt[_t++] = $t & 16 ? it : et, Mt[_t++] = $t & 8 ? it : et, Mt[_t++] = $t & 4 ? it : et, Mt[_t++] = $t & 2 ? it : et, Mt[_t++] = $t & 1 ? it : et;
                  for (; Tt < kt; Tt++)
                    Ut === 0 && ($t = pt[nt++], Ut = 128), Mt[_t++] = $t & Ut ? it : et, Ut >>= 1;
                }
                for (; _t < ut; )
                  Mt[_t++] = 0;
                N.putImageData(K, 0, st * y);
              }
            } else if (a.kind === n.ImageKind.RGBA_32BPP) {
              for (vt = 0, Lt = l * y * 4, st = 0; st < R; st++)
                St.set(pt.subarray(nt, nt + Lt)), nt += Lt, N.putImageData(K, 0, vt), vt += y;
              st < H && (Lt = l * T * 4, St.set(pt.subarray(nt, nt + Lt)), N.putImageData(K, 0, vt));
            } else if (a.kind === n.ImageKind.RGB_24BPP)
              for (gt = y, Lt = l * gt, st = 0; st < H; st++) {
                for (st >= R && (gt = T, Lt = l * gt), _t = 0, vt = Lt; vt--; )
                  St[_t++] = pt[nt++], St[_t++] = pt[nt++], St[_t++] = pt[nt++], St[_t++] = 255;
                N.putImageData(K, 0, st * y);
              }
            else
              throw new Error(`bad image kind: ${a.kind}`);
          }
          function S(N, a) {
            if (a.bitmap) {
              N.drawImage(a.bitmap, 0, 0);
              return;
            }
            const p = a.height, l = a.width, T = p % y, R = (p - T) / y, H = T === 0 ? R : R + 1, K = N.createImageData(l, y);
            let nt = 0;
            const _t = a.data, pt = K.data;
            for (let St = 0; St < H; St++) {
              const st = St < R ? y : T;
              ({
                srcPos: nt
              } = (0, B.convertBlackAndWhiteToRGBA)({
                src: _t,
                srcPos: nt,
                dest: pt,
                width: l,
                height: st,
                nonBlackColor: 0
              })), N.putImageData(K, 0, St * y);
            }
          }
          function s(N, a) {
            const p = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
            for (const l of p)
              N[l] !== void 0 && (a[l] = N[l]);
            N.setLineDash !== void 0 && (a.setLineDash(N.getLineDash()), a.lineDashOffset = N.lineDashOffset);
          }
          function i(N) {
            if (N.strokeStyle = N.fillStyle = "#000000", N.fillRule = "nonzero", N.globalAlpha = 1, N.lineWidth = 1, N.lineCap = "butt", N.lineJoin = "miter", N.miterLimit = 10, N.globalCompositeOperation = "source-over", N.font = "10px sans-serif", N.setLineDash !== void 0 && (N.setLineDash([]), N.lineDashOffset = 0), !n.isNodeJS) {
              const {
                filter: a
              } = N;
              a !== "none" && a !== "" && (N.filter = "none");
            }
          }
          function w(N, a, p, l) {
            const T = N.length;
            for (let R = 3; R < T; R += 4) {
              const H = N[R];
              if (H === 0)
                N[R - 3] = a, N[R - 2] = p, N[R - 1] = l;
              else if (H < 255) {
                const K = 255 - H;
                N[R - 3] = N[R - 3] * H + a * K >> 8, N[R - 2] = N[R - 2] * H + p * K >> 8, N[R - 1] = N[R - 1] * H + l * K >> 8;
              }
            }
          }
          function b(N, a, p) {
            const l = N.length, T = 1 / 255;
            for (let R = 3; R < l; R += 4) {
              const H = p ? p[N[R]] : N[R];
              a[R] = a[R] * H * T | 0;
            }
          }
          function c(N, a, p) {
            const l = N.length;
            for (let T = 3; T < l; T += 4) {
              const R = N[T - 3] * 77 + N[T - 2] * 152 + N[T - 1] * 28;
              a[T] = p ? a[T] * p[R >> 8] >> 8 : a[T] * R >> 16;
            }
          }
          function L(N, a, p, l, T, R, H, K, nt, _t, pt) {
            const St = !!R, st = St ? R[0] : 0, vt = St ? R[1] : 0, gt = St ? R[2] : 0, Lt = T === "Luminosity" ? c : b, Mt = Math.min(l, Math.ceil(1048576 / p));
            for (let ut = 0; ut < l; ut += Mt) {
              const lt = Math.min(Mt, l - ut), it = N.getImageData(K - _t, ut + (nt - pt), p, lt), et = a.getImageData(K, ut + nt, p, lt);
              St && w(it.data, st, vt, gt), Lt(it.data, et.data, H), a.putImageData(et, K, ut + nt);
            }
          }
          function x(N, a, p, l) {
            const T = l[0], R = l[1], H = l[2] - T, K = l[3] - R;
            H === 0 || K === 0 || (L(a.context, p, H, K, a.subtype, a.backdrop, a.transferMap, T, R, a.offsetX, a.offsetY), N.save(), N.globalAlpha = 1, N.globalCompositeOperation = "source-over", N.setTransform(1, 0, 0, 1, 0, 0), N.drawImage(p.canvas, 0, 0), N.restore());
          }
          function z(N, a) {
            const p = n.Util.singularValueDecompose2dScale(N);
            p[0] = Math.fround(p[0]), p[1] = Math.fround(p[1]);
            const l = Math.fround((globalThis.devicePixelRatio || 1) * g.PixelsPerInch.PDF_TO_CSS_UNITS);
            return a !== void 0 ? a : p[0] <= l || p[1] <= l;
          }
          const J = ["butt", "round", "square"], M = ["miter", "round", "bevel"], Y = {}, tt = {}, Pt = class Pt {
            constructor(a, p, l, T, R, {
              optionalContentConfig: H,
              markedContentStack: K = null
            }, nt, _t) {
              O(this, U);
              O(this, $);
              this.ctx = a, this.current = new A(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = p, this.objs = l, this.canvasFactory = T, this.filterFactory = R, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = K || [], this.optionalContentConfig = H, this.cachedCanvases = new _(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = nt, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = _t, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
            }
            getObject(a, p = null) {
              return typeof a == "string" ? a.startsWith("g_") ? this.commonObjs.get(a) : this.objs.get(a) : p;
            }
            beginDrawing({
              transform: a,
              viewport: p,
              transparency: l = !1,
              background: T = null
            }) {
              const R = this.ctx.canvas.width, H = this.ctx.canvas.height, K = this.ctx.fillStyle;
              if (this.ctx.fillStyle = T || "#ffffff", this.ctx.fillRect(0, 0, R, H), this.ctx.fillStyle = K, l) {
                const nt = this.cachedCanvases.getCanvas("transparent", R, H);
                this.compositeCtx = this.ctx, this.transparentCanvas = nt.canvas, this.ctx = nt.context, this.ctx.save(), this.ctx.transform(...(0, g.getCurrentTransform)(this.compositeCtx));
              }
              this.ctx.save(), i(this.ctx), a && (this.ctx.transform(...a), this.outputScaleX = a[0], this.outputScaleY = a[0]), this.ctx.transform(...p.transform), this.viewportScale = p.scale, this.baseTransform = (0, g.getCurrentTransform)(this.ctx);
            }
            executeOperatorList(a, p, l, T) {
              const R = a.argsArray, H = a.fnArray;
              let K = p || 0;
              const nt = R.length;
              if (nt === K)
                return K;
              const _t = nt - K > I && typeof l == "function", pt = _t ? Date.now() + r : 0;
              let St = 0;
              const st = this.commonObjs, vt = this.objs;
              let gt;
              for (; ; ) {
                if (T !== void 0 && K === T.nextBreakPoint)
                  return T.breakIt(K, l), K;
                if (gt = H[K], gt !== n.OPS.dependency)
                  this[gt].apply(this, R[K]);
                else
                  for (const Lt of R[K]) {
                    const It = Lt.startsWith("g_") ? st : vt;
                    if (!It.has(Lt))
                      return It.get(Lt, l), K;
                  }
                if (K++, K === nt)
                  return K;
                if (_t && ++St > I) {
                  if (Date.now() > pt)
                    return l(), K;
                  St = 0;
                }
              }
            }
            endDrawing() {
              W(this, U, ui).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
              for (const a of this._cachedBitmapsMap.values()) {
                for (const p of a.values())
                  typeof HTMLCanvasElement < "u" && p instanceof HTMLCanvasElement && (p.width = p.height = 0);
                a.clear();
              }
              this._cachedBitmapsMap.clear(), W(this, $, di).call(this);
            }
            _scaleImage(a, p) {
              const l = a.width, T = a.height;
              let R = Math.max(Math.hypot(p[0], p[1]), 1), H = Math.max(Math.hypot(p[2], p[3]), 1), K = l, nt = T, _t = "prescale1", pt, St;
              for (; R > 2 && K > 1 || H > 2 && nt > 1; ) {
                let st = K, vt = nt;
                R > 2 && K > 1 && (st = K >= 16384 ? Math.floor(K / 2) - 1 || 1 : Math.ceil(K / 2), R /= K / st), H > 2 && nt > 1 && (vt = nt >= 16384 ? Math.floor(nt / 2) - 1 || 1 : Math.ceil(nt) / 2, H /= nt / vt), pt = this.cachedCanvases.getCanvas(_t, st, vt), St = pt.context, St.clearRect(0, 0, st, vt), St.drawImage(a, 0, 0, K, nt, 0, 0, st, vt), a = pt.canvas, K = st, nt = vt, _t = _t === "prescale1" ? "prescale2" : "prescale1";
              }
              return {
                img: a,
                paintWidth: K,
                paintHeight: nt
              };
            }
            _createMaskCanvas(a) {
              const p = this.ctx, {
                width: l,
                height: T
              } = a, R = this.current.fillColor, H = this.current.patternFill, K = (0, g.getCurrentTransform)(p);
              let nt, _t, pt, St;
              if ((a.bitmap || a.data) && a.count > 1) {
                const Tt = a.bitmap || a.data.buffer;
                _t = JSON.stringify(H ? K : [K.slice(0, 4), R]), nt = this._cachedBitmapsMap.get(Tt), nt || (nt = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(Tt, nt));
                const kt = nt.get(_t);
                if (kt && !H) {
                  const Bt = Math.round(Math.min(K[0], K[2]) + K[4]), Ut = Math.round(Math.min(K[1], K[3]) + K[5]);
                  return {
                    canvas: kt,
                    offsetX: Bt,
                    offsetY: Ut
                  };
                }
                pt = kt;
              }
              pt || (St = this.cachedCanvases.getCanvas("maskCanvas", l, T), S(St.context, a));
              let st = n.Util.transform(K, [1 / l, 0, 0, -1 / T, 0, 0]);
              st = n.Util.transform(st, [1, 0, 0, 1, 0, -T]);
              const vt = n.Util.applyTransform([0, 0], st), gt = n.Util.applyTransform([l, T], st), Lt = n.Util.normalizeRect([vt[0], vt[1], gt[0], gt[1]]), It = Math.round(Lt[2] - Lt[0]) || 1, Mt = Math.round(Lt[3] - Lt[1]) || 1, ut = this.cachedCanvases.getCanvas("fillCanvas", It, Mt), lt = ut.context, it = Math.min(vt[0], gt[0]), et = Math.min(vt[1], gt[1]);
              lt.translate(-it, -et), lt.transform(...st), pt || (pt = this._scaleImage(St.canvas, (0, g.getCurrentTransformInverse)(lt)), pt = pt.img, nt && H && nt.set(_t, pt)), lt.imageSmoothingEnabled = z((0, g.getCurrentTransform)(lt), a.interpolate), m(lt, pt, 0, 0, pt.width, pt.height, 0, 0, l, T), lt.globalCompositeOperation = "source-in";
              const mt = n.Util.transform((0, g.getCurrentTransformInverse)(lt), [1, 0, 0, 1, -it, -et]);
              return lt.fillStyle = H ? R.getPattern(p, this, mt, G.PathType.FILL) : R, lt.fillRect(0, 0, l, T), nt && !H && (this.cachedCanvases.delete("fillCanvas"), nt.set(_t, ut.canvas)), {
                canvas: ut.canvas,
                offsetX: Math.round(it),
                offsetY: Math.round(et)
              };
            }
            setLineWidth(a) {
              a !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = a, this.ctx.lineWidth = a;
            }
            setLineCap(a) {
              this.ctx.lineCap = J[a];
            }
            setLineJoin(a) {
              this.ctx.lineJoin = M[a];
            }
            setMiterLimit(a) {
              this.ctx.miterLimit = a;
            }
            setDash(a, p) {
              const l = this.ctx;
              l.setLineDash !== void 0 && (l.setLineDash(a), l.lineDashOffset = p);
            }
            setRenderingIntent(a) {
            }
            setFlatness(a) {
            }
            setGState(a) {
              for (const [p, l] of a)
                switch (p) {
                  case "LW":
                    this.setLineWidth(l);
                    break;
                  case "LC":
                    this.setLineCap(l);
                    break;
                  case "LJ":
                    this.setLineJoin(l);
                    break;
                  case "ML":
                    this.setMiterLimit(l);
                    break;
                  case "D":
                    this.setDash(l[0], l[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(l);
                    break;
                  case "FL":
                    this.setFlatness(l);
                    break;
                  case "Font":
                    this.setFont(l[0], l[1]);
                    break;
                  case "CA":
                    this.current.strokeAlpha = l;
                    break;
                  case "ca":
                    this.current.fillAlpha = l, this.ctx.globalAlpha = l;
                    break;
                  case "BM":
                    this.ctx.globalCompositeOperation = l;
                    break;
                  case "SMask":
                    this.current.activeSMask = l ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                    break;
                  case "TR":
                    this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(l);
                    break;
                }
            }
            get inSMaskMode() {
              return !!this.suspendedCtx;
            }
            checkSMaskState() {
              const a = this.inSMaskMode;
              this.current.activeSMask && !a ? this.beginSMaskMode() : !this.current.activeSMask && a && this.endSMaskMode();
            }
            beginSMaskMode() {
              if (this.inSMaskMode)
                throw new Error("beginSMaskMode called while already in smask mode");
              const a = this.ctx.canvas.width, p = this.ctx.canvas.height, l = "smaskGroupAt" + this.groupLevel, T = this.cachedCanvases.getCanvas(l, a, p);
              this.suspendedCtx = this.ctx, this.ctx = T.context;
              const R = this.ctx;
              R.setTransform(...(0, g.getCurrentTransform)(this.suspendedCtx)), s(this.suspendedCtx, R), h(R, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
            }
            endSMaskMode() {
              if (!this.inSMaskMode)
                throw new Error("endSMaskMode called while not in smask mode");
              this.ctx._removeMirroring(), s(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
            }
            compose(a) {
              if (!this.current.activeSMask)
                return;
              a ? (a[0] = Math.floor(a[0]), a[1] = Math.floor(a[1]), a[2] = Math.ceil(a[2]), a[3] = Math.ceil(a[3])) : a = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
              const p = this.current.activeSMask, l = this.suspendedCtx;
              x(l, p, this.ctx, a), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
            }
            save() {
              this.inSMaskMode ? (s(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
              const a = this.current;
              this.stateStack.push(a), this.current = a.clone();
            }
            restore() {
              this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), s(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
            }
            transform(a, p, l, T, R, H) {
              this.ctx.transform(a, p, l, T, R, H), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
            }
            constructPath(a, p, l) {
              const T = this.ctx, R = this.current;
              let H = R.x, K = R.y, nt, _t;
              const pt = (0, g.getCurrentTransform)(T), St = pt[0] === 0 && pt[3] === 0 || pt[1] === 0 && pt[2] === 0, st = St ? l.slice(0) : null;
              for (let vt = 0, gt = 0, Lt = a.length; vt < Lt; vt++)
                switch (a[vt] | 0) {
                  case n.OPS.rectangle:
                    H = p[gt++], K = p[gt++];
                    const It = p[gt++], Mt = p[gt++], ut = H + It, lt = K + Mt;
                    T.moveTo(H, K), It === 0 || Mt === 0 ? T.lineTo(ut, lt) : (T.lineTo(ut, K), T.lineTo(ut, lt), T.lineTo(H, lt)), St || R.updateRectMinMax(pt, [H, K, ut, lt]), T.closePath();
                    break;
                  case n.OPS.moveTo:
                    H = p[gt++], K = p[gt++], T.moveTo(H, K), St || R.updatePathMinMax(pt, H, K);
                    break;
                  case n.OPS.lineTo:
                    H = p[gt++], K = p[gt++], T.lineTo(H, K), St || R.updatePathMinMax(pt, H, K);
                    break;
                  case n.OPS.curveTo:
                    nt = H, _t = K, H = p[gt + 4], K = p[gt + 5], T.bezierCurveTo(p[gt], p[gt + 1], p[gt + 2], p[gt + 3], H, K), R.updateCurvePathMinMax(pt, nt, _t, p[gt], p[gt + 1], p[gt + 2], p[gt + 3], H, K, st), gt += 6;
                    break;
                  case n.OPS.curveTo2:
                    nt = H, _t = K, T.bezierCurveTo(H, K, p[gt], p[gt + 1], p[gt + 2], p[gt + 3]), R.updateCurvePathMinMax(pt, nt, _t, H, K, p[gt], p[gt + 1], p[gt + 2], p[gt + 3], st), H = p[gt + 2], K = p[gt + 3], gt += 4;
                    break;
                  case n.OPS.curveTo3:
                    nt = H, _t = K, H = p[gt + 2], K = p[gt + 3], T.bezierCurveTo(p[gt], p[gt + 1], H, K, H, K), R.updateCurvePathMinMax(pt, nt, _t, p[gt], p[gt + 1], H, K, H, K, st), gt += 4;
                    break;
                  case n.OPS.closePath:
                    T.closePath();
                    break;
                }
              St && R.updateScalingPathMinMax(pt, st), R.setCurrentPoint(H, K);
            }
            closePath() {
              this.ctx.closePath();
            }
            stroke(a = !0) {
              const p = this.ctx, l = this.current.strokeColor;
              p.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof l == "object" && (l != null && l.getPattern) ? (p.save(), p.strokeStyle = l.getPattern(p, this, (0, g.getCurrentTransformInverse)(p), G.PathType.STROKE), this.rescaleAndStroke(!1), p.restore()) : this.rescaleAndStroke(!0)), a && this.consumePath(this.current.getClippedPathBoundingBox()), p.globalAlpha = this.current.fillAlpha;
            }
            closeStroke() {
              this.closePath(), this.stroke();
            }
            fill(a = !0) {
              const p = this.ctx, l = this.current.fillColor, T = this.current.patternFill;
              let R = !1;
              T && (p.save(), p.fillStyle = l.getPattern(p, this, (0, g.getCurrentTransformInverse)(p), G.PathType.FILL), R = !0);
              const H = this.current.getClippedPathBoundingBox();
              this.contentVisible && H !== null && (this.pendingEOFill ? (p.fill("evenodd"), this.pendingEOFill = !1) : p.fill()), R && p.restore(), a && this.consumePath(H);
            }
            eoFill() {
              this.pendingEOFill = !0, this.fill();
            }
            fillStroke() {
              this.fill(!1), this.stroke(!1), this.consumePath();
            }
            eoFillStroke() {
              this.pendingEOFill = !0, this.fillStroke();
            }
            closeFillStroke() {
              this.closePath(), this.fillStroke();
            }
            closeEOFillStroke() {
              this.pendingEOFill = !0, this.closePath(), this.fillStroke();
            }
            endPath() {
              this.consumePath();
            }
            clip() {
              this.pendingClip = Y;
            }
            eoClip() {
              this.pendingClip = tt;
            }
            beginText() {
              this.current.textMatrix = n.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
            }
            endText() {
              const a = this.pendingTextPaths, p = this.ctx;
              if (a === void 0) {
                p.beginPath();
                return;
              }
              p.save(), p.beginPath();
              for (const l of a)
                p.setTransform(...l.transform), p.translate(l.x, l.y), l.addToPath(p, l.fontSize);
              p.restore(), p.clip(), p.beginPath(), delete this.pendingTextPaths;
            }
            setCharSpacing(a) {
              this.current.charSpacing = a;
            }
            setWordSpacing(a) {
              this.current.wordSpacing = a;
            }
            setHScale(a) {
              this.current.textHScale = a / 100;
            }
            setLeading(a) {
              this.current.leading = -a;
            }
            setFont(a, p) {
              var pt;
              const l = this.commonObjs.get(a), T = this.current;
              if (!l)
                throw new Error(`Can't find font for ${a}`);
              if (T.fontMatrix = l.fontMatrix || n.FONT_IDENTITY_MATRIX, (T.fontMatrix[0] === 0 || T.fontMatrix[3] === 0) && (0, n.warn)("Invalid font matrix for font " + a), p < 0 ? (p = -p, T.fontDirection = -1) : T.fontDirection = 1, this.current.font = l, this.current.fontSize = p, l.isType3Font)
                return;
              const R = l.loadedName || "sans-serif", H = ((pt = l.systemFontInfo) == null ? void 0 : pt.css) || `"${R}", ${l.fallbackName}`;
              let K = "normal";
              l.black ? K = "900" : l.bold && (K = "bold");
              const nt = l.italic ? "italic" : "normal";
              let _t = p;
              p < F ? _t = F : p > f && (_t = f), this.current.fontSizeScale = p / _t, this.ctx.font = `${nt} ${K} ${_t}px ${H}`;
            }
            setTextRenderingMode(a) {
              this.current.textRenderingMode = a;
            }
            setTextRise(a) {
              this.current.textRise = a;
            }
            moveText(a, p) {
              this.current.x = this.current.lineX += a, this.current.y = this.current.lineY += p;
            }
            setLeadingMoveText(a, p) {
              this.setLeading(-p), this.moveText(a, p);
            }
            setTextMatrix(a, p, l, T, R, H) {
              this.current.textMatrix = [a, p, l, T, R, H], this.current.textMatrixScale = Math.hypot(a, p), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            paintChar(a, p, l, T) {
              const R = this.ctx, H = this.current, K = H.font, nt = H.textRenderingMode, _t = H.fontSize / H.fontSizeScale, pt = nt & n.TextRenderingMode.FILL_STROKE_MASK, St = !!(nt & n.TextRenderingMode.ADD_TO_PATH_FLAG), st = H.patternFill && !K.missingFile;
              let vt;
              (K.disableFontFace || St || st) && (vt = K.getPathGenerator(this.commonObjs, a)), K.disableFontFace || st ? (R.save(), R.translate(p, l), R.beginPath(), vt(R, _t), T && R.setTransform(...T), (pt === n.TextRenderingMode.FILL || pt === n.TextRenderingMode.FILL_STROKE) && R.fill(), (pt === n.TextRenderingMode.STROKE || pt === n.TextRenderingMode.FILL_STROKE) && R.stroke(), R.restore()) : ((pt === n.TextRenderingMode.FILL || pt === n.TextRenderingMode.FILL_STROKE) && R.fillText(a, p, l), (pt === n.TextRenderingMode.STROKE || pt === n.TextRenderingMode.FILL_STROKE) && R.strokeText(a, p, l)), St && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                transform: (0, g.getCurrentTransform)(R),
                x: p,
                y: l,
                fontSize: _t,
                addToPath: vt
              });
            }
            get isFontSubpixelAAEnabled() {
              const {
                context: a
              } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
              a.scale(1.5, 1), a.fillText("I", 0, 10);
              const p = a.getImageData(0, 0, 10, 10).data;
              let l = !1;
              for (let T = 3; T < p.length; T += 4)
                if (p[T] > 0 && p[T] < 255) {
                  l = !0;
                  break;
                }
              return (0, n.shadow)(this, "isFontSubpixelAAEnabled", l);
            }
            showText(a) {
              const p = this.current, l = p.font;
              if (l.isType3Font)
                return this.showType3Text(a);
              const T = p.fontSize;
              if (T === 0)
                return;
              const R = this.ctx, H = p.fontSizeScale, K = p.charSpacing, nt = p.wordSpacing, _t = p.fontDirection, pt = p.textHScale * _t, St = a.length, st = l.vertical, vt = st ? 1 : -1, gt = l.defaultVMetrics, Lt = T * p.fontMatrix[0], It = p.textRenderingMode === n.TextRenderingMode.FILL && !l.disableFontFace && !p.patternFill;
              R.save(), R.transform(...p.textMatrix), R.translate(p.x, p.y + p.textRise), _t > 0 ? R.scale(pt, -1) : R.scale(pt, 1);
              let Mt;
              if (p.patternFill) {
                R.save();
                const mt = p.fillColor.getPattern(R, this, (0, g.getCurrentTransformInverse)(R), G.PathType.FILL);
                Mt = (0, g.getCurrentTransform)(R), R.restore(), R.fillStyle = mt;
              }
              let ut = p.lineWidth;
              const lt = p.textMatrixScale;
              if (lt === 0 || ut === 0) {
                const mt = p.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                (mt === n.TextRenderingMode.STROKE || mt === n.TextRenderingMode.FILL_STROKE) && (ut = this.getSinglePixelWidth());
              } else
                ut /= lt;
              if (H !== 1 && (R.scale(H, H), ut /= H), R.lineWidth = ut, l.isInvalidPDFjsFont) {
                const mt = [];
                let Tt = 0;
                for (const kt of a)
                  mt.push(kt.unicode), Tt += kt.width;
                R.fillText(mt.join(""), 0, 0), p.x += Tt * Lt * pt, R.restore(), this.compose();
                return;
              }
              let it = 0, et;
              for (et = 0; et < St; ++et) {
                const mt = a[et];
                if (typeof mt == "number") {
                  it += vt * mt * T / 1e3;
                  continue;
                }
                let Tt = !1;
                const kt = (mt.isSpace ? nt : 0) + K, Bt = mt.fontChar, Ut = mt.accent;
                let $t, Gt, Kt = mt.width;
                if (st) {
                  const Qt = mt.vmetric || gt, At = -(mt.vmetric ? Qt[1] : Kt * 0.5) * Lt, v = Qt[2] * Lt;
                  Kt = Qt ? -Qt[0] : Kt, $t = At / H, Gt = (it + v) / H;
                } else
                  $t = it / H, Gt = 0;
                if (l.remeasure && Kt > 0) {
                  const Qt = R.measureText(Bt).width * 1e3 / T * H;
                  if (Kt < Qt && this.isFontSubpixelAAEnabled) {
                    const At = Kt / Qt;
                    Tt = !0, R.save(), R.scale(At, 1), $t /= At;
                  } else
                    Kt !== Qt && ($t += (Kt - Qt) / 2e3 * T / H);
                }
                if (this.contentVisible && (mt.isInFont || l.missingFile)) {
                  if (It && !Ut)
                    R.fillText(Bt, $t, Gt);
                  else if (this.paintChar(Bt, $t, Gt, Mt), Ut) {
                    const Qt = $t + T * Ut.offset.x / H, At = Gt - T * Ut.offset.y / H;
                    this.paintChar(Ut.fontChar, Qt, At, Mt);
                  }
                }
                const Xt = st ? Kt * Lt - kt * _t : Kt * Lt + kt * _t;
                it += Xt, Tt && R.restore();
              }
              st ? p.y -= it : p.x += it * pt, R.restore(), this.compose();
            }
            showType3Text(a) {
              const p = this.ctx, l = this.current, T = l.font, R = l.fontSize, H = l.fontDirection, K = T.vertical ? 1 : -1, nt = l.charSpacing, _t = l.wordSpacing, pt = l.textHScale * H, St = l.fontMatrix || n.FONT_IDENTITY_MATRIX, st = a.length, vt = l.textRenderingMode === n.TextRenderingMode.INVISIBLE;
              let gt, Lt, It, Mt;
              if (!(vt || R === 0)) {
                for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, p.save(), p.transform(...l.textMatrix), p.translate(l.x, l.y), p.scale(pt, H), gt = 0; gt < st; ++gt) {
                  if (Lt = a[gt], typeof Lt == "number") {
                    Mt = K * Lt * R / 1e3, this.ctx.translate(Mt, 0), l.x += Mt * pt;
                    continue;
                  }
                  const ut = (Lt.isSpace ? _t : 0) + nt, lt = T.charProcOperatorList[Lt.operatorListId];
                  if (!lt) {
                    (0, n.warn)(`Type3 character "${Lt.operatorListId}" is not available.`);
                    continue;
                  }
                  this.contentVisible && (this.processingType3 = Lt, this.save(), p.scale(R, R), p.transform(...St), this.executeOperatorList(lt), this.restore()), It = n.Util.applyTransform([Lt.width, 0], St)[0] * R + ut, p.translate(It, 0), l.x += It * pt;
                }
                p.restore(), this.processingType3 = null;
              }
            }
            setCharWidth(a, p) {
            }
            setCharWidthAndBounds(a, p, l, T, R, H) {
              this.ctx.rect(l, T, R - l, H - T), this.ctx.clip(), this.endPath();
            }
            getColorN_Pattern(a) {
              let p;
              if (a[0] === "TilingPattern") {
                const l = a[1], T = this.baseTransform || (0, g.getCurrentTransform)(this.ctx), R = {
                  createCanvasGraphics: (H) => new Pt(H, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                    optionalContentConfig: this.optionalContentConfig,
                    markedContentStack: this.markedContentStack
                  })
                };
                p = new G.TilingPattern(a, l, this.ctx, R, T);
              } else
                p = this._getPattern(a[1], a[2]);
              return p;
            }
            setStrokeColorN() {
              this.current.strokeColor = this.getColorN_Pattern(arguments);
            }
            setFillColorN() {
              this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
            }
            setStrokeRGBColor(a, p, l) {
              const T = n.Util.makeHexColor(a, p, l);
              this.ctx.strokeStyle = T, this.current.strokeColor = T;
            }
            setFillRGBColor(a, p, l) {
              const T = n.Util.makeHexColor(a, p, l);
              this.ctx.fillStyle = T, this.current.fillColor = T, this.current.patternFill = !1;
            }
            _getPattern(a, p = null) {
              let l;
              return this.cachedPatterns.has(a) ? l = this.cachedPatterns.get(a) : (l = (0, G.getShadingPattern)(this.getObject(a)), this.cachedPatterns.set(a, l)), p && (l.matrix = p), l;
            }
            shadingFill(a) {
              if (!this.contentVisible)
                return;
              const p = this.ctx;
              this.save();
              const l = this._getPattern(a);
              p.fillStyle = l.getPattern(p, this, (0, g.getCurrentTransformInverse)(p), G.PathType.SHADING);
              const T = (0, g.getCurrentTransformInverse)(p);
              if (T) {
                const {
                  width: R,
                  height: H
                } = p.canvas, [K, nt, _t, pt] = n.Util.getAxialAlignedBoundingBox([0, 0, R, H], T);
                this.ctx.fillRect(K, nt, _t - K, pt - nt);
              } else
                this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
              this.compose(this.current.getClippedPathBoundingBox()), this.restore();
            }
            beginInlineImage() {
              (0, n.unreachable)("Should not call beginInlineImage");
            }
            beginImageData() {
              (0, n.unreachable)("Should not call beginImageData");
            }
            paintFormXObjectBegin(a, p) {
              if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(a) && a.length === 6 && this.transform(...a), this.baseTransform = (0, g.getCurrentTransform)(this.ctx), p)) {
                const l = p[2] - p[0], T = p[3] - p[1];
                this.ctx.rect(p[0], p[1], l, T), this.current.updateRectMinMax((0, g.getCurrentTransform)(this.ctx), p), this.clip(), this.endPath();
              }
            }
            paintFormXObjectEnd() {
              this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
            }
            beginGroup(a) {
              if (!this.contentVisible)
                return;
              this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
              const p = this.ctx;
              a.isolated || (0, n.info)("TODO: Support non-isolated groups."), a.knockout && (0, n.warn)("Knockout groups not supported.");
              const l = (0, g.getCurrentTransform)(p);
              if (a.matrix && p.transform(...a.matrix), !a.bbox)
                throw new Error("Bounding box is required.");
              let T = n.Util.getAxialAlignedBoundingBox(a.bbox, (0, g.getCurrentTransform)(p));
              const R = [0, 0, p.canvas.width, p.canvas.height];
              T = n.Util.intersect(T, R) || [0, 0, 0, 0];
              const H = Math.floor(T[0]), K = Math.floor(T[1]);
              let nt = Math.max(Math.ceil(T[2]) - H, 1), _t = Math.max(Math.ceil(T[3]) - K, 1), pt = 1, St = 1;
              nt > d && (pt = nt / d, nt = d), _t > d && (St = _t / d, _t = d), this.current.startNewPathAndClipBox([0, 0, nt, _t]);
              let st = "groupAt" + this.groupLevel;
              a.smask && (st += "_smask_" + this.smaskCounter++ % 2);
              const vt = this.cachedCanvases.getCanvas(st, nt, _t), gt = vt.context;
              gt.scale(1 / pt, 1 / St), gt.translate(-H, -K), gt.transform(...l), a.smask ? this.smaskStack.push({
                canvas: vt.canvas,
                context: gt,
                offsetX: H,
                offsetY: K,
                scaleX: pt,
                scaleY: St,
                subtype: a.smask.subtype,
                backdrop: a.smask.backdrop,
                transferMap: a.smask.transferMap || null,
                startTransformInverse: null
              }) : (p.setTransform(1, 0, 0, 1, 0, 0), p.translate(H, K), p.scale(pt, St), p.save()), s(p, gt), this.ctx = gt, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(p), this.groupLevel++;
            }
            endGroup(a) {
              if (!this.contentVisible)
                return;
              this.groupLevel--;
              const p = this.ctx, l = this.groupStack.pop();
              if (this.ctx = l, this.ctx.imageSmoothingEnabled = !1, a.smask)
                this.tempSMask = this.smaskStack.pop(), this.restore();
              else {
                this.ctx.restore();
                const T = (0, g.getCurrentTransform)(this.ctx);
                this.restore(), this.ctx.save(), this.ctx.setTransform(...T);
                const R = n.Util.getAxialAlignedBoundingBox([0, 0, p.canvas.width, p.canvas.height], T);
                this.ctx.drawImage(p.canvas, 0, 0), this.ctx.restore(), this.compose(R);
              }
            }
            beginAnnotation(a, p, l, T, R) {
              if (W(this, U, ui).call(this), i(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(p) && p.length === 4) {
                const H = p[2] - p[0], K = p[3] - p[1];
                if (R && this.annotationCanvasMap) {
                  l = l.slice(), l[4] -= p[0], l[5] -= p[1], p = p.slice(), p[0] = p[1] = 0, p[2] = H, p[3] = K;
                  const [nt, _t] = n.Util.singularValueDecompose2dScale((0, g.getCurrentTransform)(this.ctx)), {
                    viewportScale: pt
                  } = this, St = Math.ceil(H * this.outputScaleX * pt), st = Math.ceil(K * this.outputScaleY * pt);
                  this.annotationCanvas = this.canvasFactory.create(St, st);
                  const {
                    canvas: vt,
                    context: gt
                  } = this.annotationCanvas;
                  this.annotationCanvasMap.set(a, vt), this.annotationCanvas.savedCtx = this.ctx, this.ctx = gt, this.ctx.save(), this.ctx.setTransform(nt, 0, 0, -_t, 0, K * _t), i(this.ctx);
                } else
                  i(this.ctx), this.ctx.rect(p[0], p[1], H, K), this.ctx.clip(), this.endPath();
              }
              this.current = new A(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...l), this.transform(...T);
            }
            endAnnotation() {
              this.annotationCanvas && (this.ctx.restore(), W(this, $, di).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
            }
            paintImageMaskXObject(a) {
              if (!this.contentVisible)
                return;
              const p = a.count;
              a = this.getObject(a.data, a), a.count = p;
              const l = this.ctx, T = this.processingType3;
              if (T && (T.compiled === void 0 && (T.compiled = P(a)), T.compiled)) {
                T.compiled(l);
                return;
              }
              const R = this._createMaskCanvas(a), H = R.canvas;
              l.save(), l.setTransform(1, 0, 0, 1, 0, 0), l.drawImage(H, R.offsetX, R.offsetY), l.restore(), this.compose();
            }
            paintImageMaskXObjectRepeat(a, p, l = 0, T = 0, R, H) {
              if (!this.contentVisible)
                return;
              a = this.getObject(a.data, a);
              const K = this.ctx;
              K.save();
              const nt = (0, g.getCurrentTransform)(K);
              K.transform(p, l, T, R, 0, 0);
              const _t = this._createMaskCanvas(a);
              K.setTransform(1, 0, 0, 1, _t.offsetX - nt[4], _t.offsetY - nt[5]);
              for (let pt = 0, St = H.length; pt < St; pt += 2) {
                const st = n.Util.transform(nt, [p, l, T, R, H[pt], H[pt + 1]]), [vt, gt] = n.Util.applyTransform([0, 0], st);
                K.drawImage(_t.canvas, vt, gt);
              }
              K.restore(), this.compose();
            }
            paintImageMaskXObjectGroup(a) {
              if (!this.contentVisible)
                return;
              const p = this.ctx, l = this.current.fillColor, T = this.current.patternFill;
              for (const R of a) {
                const {
                  data: H,
                  width: K,
                  height: nt,
                  transform: _t
                } = R, pt = this.cachedCanvases.getCanvas("maskCanvas", K, nt), St = pt.context;
                St.save();
                const st = this.getObject(H, R);
                S(St, st), St.globalCompositeOperation = "source-in", St.fillStyle = T ? l.getPattern(St, this, (0, g.getCurrentTransformInverse)(p), G.PathType.FILL) : l, St.fillRect(0, 0, K, nt), St.restore(), p.save(), p.transform(..._t), p.scale(1, -1), m(p, pt.canvas, 0, 0, K, nt, 0, -1, 1, 1), p.restore();
              }
              this.compose();
            }
            paintImageXObject(a) {
              if (!this.contentVisible)
                return;
              const p = this.getObject(a);
              if (!p) {
                (0, n.warn)("Dependent image isn't ready yet");
                return;
              }
              this.paintInlineImageXObject(p);
            }
            paintImageXObjectRepeat(a, p, l, T) {
              if (!this.contentVisible)
                return;
              const R = this.getObject(a);
              if (!R) {
                (0, n.warn)("Dependent image isn't ready yet");
                return;
              }
              const H = R.width, K = R.height, nt = [];
              for (let _t = 0, pt = T.length; _t < pt; _t += 2)
                nt.push({
                  transform: [p, 0, 0, l, T[_t], T[_t + 1]],
                  x: 0,
                  y: 0,
                  w: H,
                  h: K
                });
              this.paintInlineImageXObjectGroup(R, nt);
            }
            applyTransferMapsToCanvas(a) {
              return this.current.transferMaps !== "none" && (a.filter = this.current.transferMaps, a.drawImage(a.canvas, 0, 0), a.filter = "none"), a.canvas;
            }
            applyTransferMapsToBitmap(a) {
              if (this.current.transferMaps === "none")
                return a.bitmap;
              const {
                bitmap: p,
                width: l,
                height: T
              } = a, R = this.cachedCanvases.getCanvas("inlineImage", l, T), H = R.context;
              return H.filter = this.current.transferMaps, H.drawImage(p, 0, 0), H.filter = "none", R.canvas;
            }
            paintInlineImageXObject(a) {
              if (!this.contentVisible)
                return;
              const p = a.width, l = a.height, T = this.ctx;
              if (this.save(), !n.isNodeJS) {
                const {
                  filter: K
                } = T;
                K !== "none" && K !== "" && (T.filter = "none");
              }
              T.scale(1 / p, -1 / l);
              let R;
              if (a.bitmap)
                R = this.applyTransferMapsToBitmap(a);
              else if (typeof HTMLElement == "function" && a instanceof HTMLElement || !a.data)
                R = a;
              else {
                const nt = this.cachedCanvases.getCanvas("inlineImage", p, l).context;
                u(nt, a), R = this.applyTransferMapsToCanvas(nt);
              }
              const H = this._scaleImage(R, (0, g.getCurrentTransformInverse)(T));
              T.imageSmoothingEnabled = z((0, g.getCurrentTransform)(T), a.interpolate), m(T, H.img, 0, 0, H.paintWidth, H.paintHeight, 0, -l, p, l), this.compose(), this.restore();
            }
            paintInlineImageXObjectGroup(a, p) {
              if (!this.contentVisible)
                return;
              const l = this.ctx;
              let T;
              if (a.bitmap)
                T = a.bitmap;
              else {
                const R = a.width, H = a.height, nt = this.cachedCanvases.getCanvas("inlineImage", R, H).context;
                u(nt, a), T = this.applyTransferMapsToCanvas(nt);
              }
              for (const R of p)
                l.save(), l.transform(...R.transform), l.scale(1, -1), m(l, T, R.x, R.y, R.w, R.h, 0, -1, 1, 1), l.restore();
              this.compose();
            }
            paintSolidColorImageMask() {
              this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
            }
            markPoint(a) {
            }
            markPointProps(a, p) {
            }
            beginMarkedContent(a) {
              this.markedContentStack.push({
                visible: !0
              });
            }
            beginMarkedContentProps(a, p) {
              a === "OC" ? this.markedContentStack.push({
                visible: this.optionalContentConfig.isVisible(p)
              }) : this.markedContentStack.push({
                visible: !0
              }), this.contentVisible = this.isContentVisible();
            }
            endMarkedContent() {
              this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
            }
            beginCompat() {
            }
            endCompat() {
            }
            consumePath(a) {
              const p = this.current.isEmptyClip();
              this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(a);
              const l = this.ctx;
              this.pendingClip && (p || (this.pendingClip === tt ? l.clip("evenodd") : l.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), l.beginPath();
            }
            getSinglePixelWidth() {
              if (!this._cachedGetSinglePixelWidth) {
                const a = (0, g.getCurrentTransform)(this.ctx);
                if (a[1] === 0 && a[2] === 0)
                  this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(a[0]), Math.abs(a[3]));
                else {
                  const p = Math.abs(a[0] * a[3] - a[2] * a[1]), l = Math.hypot(a[0], a[2]), T = Math.hypot(a[1], a[3]);
                  this._cachedGetSinglePixelWidth = Math.max(l, T) / p;
                }
              }
              return this._cachedGetSinglePixelWidth;
            }
            getScaleForStroking() {
              if (this._cachedScaleForStroking[0] === -1) {
                const {
                  lineWidth: a
                } = this.current, {
                  a: p,
                  b: l,
                  c: T,
                  d: R
                } = this.ctx.getTransform();
                let H, K;
                if (l === 0 && T === 0) {
                  const nt = Math.abs(p), _t = Math.abs(R);
                  if (nt === _t)
                    if (a === 0)
                      H = K = 1 / nt;
                    else {
                      const pt = nt * a;
                      H = K = pt < 1 ? 1 / pt : 1;
                    }
                  else if (a === 0)
                    H = 1 / nt, K = 1 / _t;
                  else {
                    const pt = nt * a, St = _t * a;
                    H = pt < 1 ? 1 / pt : 1, K = St < 1 ? 1 / St : 1;
                  }
                } else {
                  const nt = Math.abs(p * R - l * T), _t = Math.hypot(p, l), pt = Math.hypot(T, R);
                  if (a === 0)
                    H = pt / nt, K = _t / nt;
                  else {
                    const St = a * nt;
                    H = pt > St ? pt / St : 1, K = _t > St ? _t / St : 1;
                  }
                }
                this._cachedScaleForStroking[0] = H, this._cachedScaleForStroking[1] = K;
              }
              return this._cachedScaleForStroking;
            }
            rescaleAndStroke(a) {
              const {
                ctx: p
              } = this, {
                lineWidth: l
              } = this.current, [T, R] = this.getScaleForStroking();
              if (p.lineWidth = l || 1, T === 1 && R === 1) {
                p.stroke();
                return;
              }
              const H = p.getLineDash();
              if (a && p.save(), p.scale(T, R), H.length > 0) {
                const K = Math.max(T, R);
                p.setLineDash(H.map((nt) => nt / K)), p.lineDashOffset /= K;
              }
              p.stroke(), a && p.restore();
            }
            isContentVisible() {
              for (let a = this.markedContentStack.length - 1; a >= 0; a--)
                if (!this.markedContentStack[a].visible)
                  return !1;
              return !0;
            }
          };
          U = new WeakSet(), ui = function() {
            for (; this.stateStack.length || this.inSMaskMode; )
              this.restore();
            this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
          }, $ = new WeakSet(), di = function() {
            if (this.pageColors) {
              const a = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
              if (a !== "none") {
                const p = this.ctx.filter;
                this.ctx.filter = a, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = p;
              }
            }
          };
          let q = Pt;
          e.CanvasGraphics = q;
          for (const N in n.OPS)
            q.prototype[N] !== void 0 && (q.prototype[n.OPS[N]] = q.prototype[N]);
        },
        /* 12 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.TilingPattern = e.PathType = void 0, e.getShadingPattern = y;
          var n = C(1), g = C(6);
          const G = {
            FILL: "Fill",
            STROKE: "Stroke",
            SHADING: "Shading"
          };
          e.PathType = G;
          function B(P, A) {
            if (!A)
              return;
            const u = A[2] - A[0], S = A[3] - A[1], s = new Path2D();
            s.rect(A[0], A[1], u, S), P.clip(s);
          }
          class F {
            constructor() {
              this.constructor === F && (0, n.unreachable)("Cannot initialize BaseShadingPattern.");
            }
            getPattern() {
              (0, n.unreachable)("Abstract method `getPattern` called.");
            }
          }
          class f extends F {
            constructor(A) {
              super(), this._type = A[1], this._bbox = A[2], this._colorStops = A[3], this._p0 = A[4], this._p1 = A[5], this._r0 = A[6], this._r1 = A[7], this.matrix = null;
            }
            _createGradient(A) {
              let u;
              this._type === "axial" ? u = A.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (u = A.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
              for (const S of this._colorStops)
                u.addColorStop(S[0], S[1]);
              return u;
            }
            getPattern(A, u, S, s) {
              let i;
              if (s === G.STROKE || s === G.FILL) {
                const w = u.current.getClippedPathBoundingBox(s, (0, g.getCurrentTransform)(A)) || [0, 0, 0, 0], b = Math.ceil(w[2] - w[0]) || 1, c = Math.ceil(w[3] - w[1]) || 1, L = u.cachedCanvases.getCanvas("pattern", b, c, !0), x = L.context;
                x.clearRect(0, 0, x.canvas.width, x.canvas.height), x.beginPath(), x.rect(0, 0, x.canvas.width, x.canvas.height), x.translate(-w[0], -w[1]), S = n.Util.transform(S, [1, 0, 0, 1, w[0], w[1]]), x.transform(...u.baseTransform), this.matrix && x.transform(...this.matrix), B(x, this._bbox), x.fillStyle = this._createGradient(x), x.fill(), i = A.createPattern(L.canvas, "no-repeat");
                const z = new DOMMatrix(S);
                i.setTransform(z);
              } else
                B(A, this._bbox), i = this._createGradient(A);
              return i;
            }
          }
          function d(P, A, u, S, s, i, w, b) {
            const c = A.coords, L = A.colors, x = P.data, z = P.width * 4;
            let J;
            c[u + 1] > c[S + 1] && (J = u, u = S, S = J, J = i, i = w, w = J), c[S + 1] > c[s + 1] && (J = S, S = s, s = J, J = w, w = b, b = J), c[u + 1] > c[S + 1] && (J = u, u = S, S = J, J = i, i = w, w = J);
            const M = (c[u] + A.offsetX) * A.scaleX, Y = (c[u + 1] + A.offsetY) * A.scaleY, tt = (c[S] + A.offsetX) * A.scaleX, q = (c[S + 1] + A.offsetY) * A.scaleY, U = (c[s] + A.offsetX) * A.scaleX, at = (c[s + 1] + A.offsetY) * A.scaleY;
            if (Y >= at)
              return;
            const $ = L[i], wt = L[i + 1], Pt = L[i + 2], N = L[w], a = L[w + 1], p = L[w + 2], l = L[b], T = L[b + 1], R = L[b + 2], H = Math.round(Y), K = Math.round(at);
            let nt, _t, pt, St, st, vt, gt, Lt;
            for (let It = H; It <= K; It++) {
              if (It < q) {
                const et = It < Y ? 0 : (Y - It) / (Y - q);
                nt = M - (M - tt) * et, _t = $ - ($ - N) * et, pt = wt - (wt - a) * et, St = Pt - (Pt - p) * et;
              } else {
                let et;
                It > at ? et = 1 : q === at ? et = 0 : et = (q - It) / (q - at), nt = tt - (tt - U) * et, _t = N - (N - l) * et, pt = a - (a - T) * et, St = p - (p - R) * et;
              }
              let Mt;
              It < Y ? Mt = 0 : It > at ? Mt = 1 : Mt = (Y - It) / (Y - at), st = M - (M - U) * Mt, vt = $ - ($ - l) * Mt, gt = wt - (wt - T) * Mt, Lt = Pt - (Pt - R) * Mt;
              const ut = Math.round(Math.min(nt, st)), lt = Math.round(Math.max(nt, st));
              let it = z * It + ut * 4;
              for (let et = ut; et <= lt; et++)
                Mt = (nt - et) / (nt - st), Mt < 0 ? Mt = 0 : Mt > 1 && (Mt = 1), x[it++] = _t - (_t - vt) * Mt | 0, x[it++] = pt - (pt - gt) * Mt | 0, x[it++] = St - (St - Lt) * Mt | 0, x[it++] = 255;
            }
          }
          function r(P, A, u) {
            const S = A.coords, s = A.colors;
            let i, w;
            switch (A.type) {
              case "lattice":
                const b = A.verticesPerRow, c = Math.floor(S.length / b) - 1, L = b - 1;
                for (i = 0; i < c; i++) {
                  let x = i * b;
                  for (let z = 0; z < L; z++, x++)
                    d(P, u, S[x], S[x + 1], S[x + b], s[x], s[x + 1], s[x + b]), d(P, u, S[x + b + 1], S[x + 1], S[x + b], s[x + b + 1], s[x + 1], s[x + b]);
                }
                break;
              case "triangles":
                for (i = 0, w = S.length; i < w; i += 3)
                  d(P, u, S[i], S[i + 1], S[i + 2], s[i], s[i + 1], s[i + 2]);
                break;
              default:
                throw new Error("illegal figure");
            }
          }
          class I extends F {
            constructor(A) {
              super(), this._coords = A[2], this._colors = A[3], this._figures = A[4], this._bounds = A[5], this._bbox = A[7], this._background = A[8], this.matrix = null;
            }
            _createMeshCanvas(A, u, S) {
              const b = Math.floor(this._bounds[0]), c = Math.floor(this._bounds[1]), L = Math.ceil(this._bounds[2]) - b, x = Math.ceil(this._bounds[3]) - c, z = Math.min(Math.ceil(Math.abs(L * A[0] * 1.1)), 3e3), J = Math.min(Math.ceil(Math.abs(x * A[1] * 1.1)), 3e3), M = L / z, Y = x / J, tt = {
                coords: this._coords,
                colors: this._colors,
                offsetX: -b,
                offsetY: -c,
                scaleX: 1 / M,
                scaleY: 1 / Y
              }, q = z + 2 * 2, U = J + 2 * 2, at = S.getCanvas("mesh", q, U, !1), $ = at.context, wt = $.createImageData(z, J);
              if (u) {
                const N = wt.data;
                for (let a = 0, p = N.length; a < p; a += 4)
                  N[a] = u[0], N[a + 1] = u[1], N[a + 2] = u[2], N[a + 3] = 255;
              }
              for (const N of this._figures)
                r(wt, N, tt);
              return $.putImageData(wt, 2, 2), {
                canvas: at.canvas,
                offsetX: b - 2 * M,
                offsetY: c - 2 * Y,
                scaleX: M,
                scaleY: Y
              };
            }
            getPattern(A, u, S, s) {
              B(A, this._bbox);
              let i;
              if (s === G.SHADING)
                i = n.Util.singularValueDecompose2dScale((0, g.getCurrentTransform)(A));
              else if (i = n.Util.singularValueDecompose2dScale(u.baseTransform), this.matrix) {
                const b = n.Util.singularValueDecompose2dScale(this.matrix);
                i = [i[0] * b[0], i[1] * b[1]];
              }
              const w = this._createMeshCanvas(i, s === G.SHADING ? null : this._background, u.cachedCanvases);
              return s !== G.SHADING && (A.setTransform(...u.baseTransform), this.matrix && A.transform(...this.matrix)), A.translate(w.offsetX, w.offsetY), A.scale(w.scaleX, w.scaleY), A.createPattern(w.canvas, "no-repeat");
            }
          }
          class k extends F {
            getPattern() {
              return "hotpink";
            }
          }
          function y(P) {
            switch (P[0]) {
              case "RadialAxial":
                return new f(P);
              case "Mesh":
                return new I(P);
              case "Dummy":
                return new k();
            }
            throw new Error(`Unknown IR type: ${P[0]}`);
          }
          const h = {
            COLORED: 1,
            UNCOLORED: 2
          }, m = class m {
            constructor(A, u, S, s, i) {
              this.operatorList = A[2], this.matrix = A[3] || [1, 0, 0, 1, 0, 0], this.bbox = A[4], this.xstep = A[5], this.ystep = A[6], this.paintType = A[7], this.tilingType = A[8], this.color = u, this.ctx = S, this.canvasGraphicsFactory = s, this.baseTransform = i;
            }
            createPatternCanvas(A) {
              const u = this.operatorList, S = this.bbox, s = this.xstep, i = this.ystep, w = this.paintType, b = this.tilingType, c = this.color, L = this.canvasGraphicsFactory;
              (0, n.info)("TilingType: " + b);
              const x = S[0], z = S[1], J = S[2], M = S[3], Y = n.Util.singularValueDecompose2dScale(this.matrix), tt = n.Util.singularValueDecompose2dScale(this.baseTransform), q = [Y[0] * tt[0], Y[1] * tt[1]], U = this.getSizeAndScale(s, this.ctx.canvas.width, q[0]), at = this.getSizeAndScale(i, this.ctx.canvas.height, q[1]), $ = A.cachedCanvases.getCanvas("pattern", U.size, at.size, !0), wt = $.context, Pt = L.createCanvasGraphics(wt);
              Pt.groupLevel = A.groupLevel, this.setFillAndStrokeStyleToContext(Pt, w, c);
              let N = x, a = z, p = J, l = M;
              return x < 0 && (N = 0, p += Math.abs(x)), z < 0 && (a = 0, l += Math.abs(z)), wt.translate(-(U.scale * N), -(at.scale * a)), Pt.transform(U.scale, 0, 0, at.scale, 0, 0), wt.save(), this.clipBbox(Pt, N, a, p, l), Pt.baseTransform = (0, g.getCurrentTransform)(Pt.ctx), Pt.executeOperatorList(u), Pt.endDrawing(), {
                canvas: $.canvas,
                scaleX: U.scale,
                scaleY: at.scale,
                offsetX: N,
                offsetY: a
              };
            }
            getSizeAndScale(A, u, S) {
              A = Math.abs(A);
              const s = Math.max(m.MAX_PATTERN_SIZE, u);
              let i = Math.ceil(A * S);
              return i >= s ? i = s : S = i / A, {
                scale: S,
                size: i
              };
            }
            clipBbox(A, u, S, s, i) {
              const w = s - u, b = i - S;
              A.ctx.rect(u, S, w, b), A.current.updateRectMinMax((0, g.getCurrentTransform)(A.ctx), [u, S, s, i]), A.clip(), A.endPath();
            }
            setFillAndStrokeStyleToContext(A, u, S) {
              const s = A.ctx, i = A.current;
              switch (u) {
                case h.COLORED:
                  const w = this.ctx;
                  s.fillStyle = w.fillStyle, s.strokeStyle = w.strokeStyle, i.fillColor = w.fillStyle, i.strokeColor = w.strokeStyle;
                  break;
                case h.UNCOLORED:
                  const b = n.Util.makeHexColor(S[0], S[1], S[2]);
                  s.fillStyle = b, s.strokeStyle = b, i.fillColor = b, i.strokeColor = b;
                  break;
                default:
                  throw new n.FormatError(`Unsupported paint type: ${u}`);
              }
            }
            getPattern(A, u, S, s) {
              let i = S;
              s !== G.SHADING && (i = n.Util.transform(i, u.baseTransform), this.matrix && (i = n.Util.transform(i, this.matrix)));
              const w = this.createPatternCanvas(u);
              let b = new DOMMatrix(i);
              b = b.translate(w.offsetX, w.offsetY), b = b.scale(1 / w.scaleX, 1 / w.scaleY);
              const c = A.createPattern(w.canvas, "repeat");
              return c.setTransform(b), c;
            }
          };
          ee(m, "MAX_PATTERN_SIZE", 3e3);
          let _ = m;
          e.TilingPattern = _;
        },
        /* 13 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.convertBlackAndWhiteToRGBA = G, e.convertToRGBA = g, e.grayToRGBA = F;
          var n = C(1);
          function g(f) {
            switch (f.kind) {
              case n.ImageKind.GRAYSCALE_1BPP:
                return G(f);
              case n.ImageKind.RGB_24BPP:
                return B(f);
            }
            return null;
          }
          function G({
            src: f,
            srcPos: d = 0,
            dest: r,
            width: I,
            height: k,
            nonBlackColor: y = 4294967295,
            inverseDecode: h = !1
          }) {
            const _ = n.FeatureTest.isLittleEndian ? 4278190080 : 255, [m, P] = h ? [y, _] : [_, y], A = I >> 3, u = I & 7, S = f.length;
            r = new Uint32Array(r.buffer);
            let s = 0;
            for (let i = 0; i < k; i++) {
              for (const b = d + A; d < b; d++) {
                const c = d < S ? f[d] : 255;
                r[s++] = c & 128 ? P : m, r[s++] = c & 64 ? P : m, r[s++] = c & 32 ? P : m, r[s++] = c & 16 ? P : m, r[s++] = c & 8 ? P : m, r[s++] = c & 4 ? P : m, r[s++] = c & 2 ? P : m, r[s++] = c & 1 ? P : m;
              }
              if (u === 0)
                continue;
              const w = d < S ? f[d++] : 255;
              for (let b = 0; b < u; b++)
                r[s++] = w & 1 << 7 - b ? P : m;
            }
            return {
              srcPos: d,
              destPos: s
            };
          }
          function B({
            src: f,
            srcPos: d = 0,
            dest: r,
            destPos: I = 0,
            width: k,
            height: y
          }) {
            let h = 0;
            const _ = f.length >> 2, m = new Uint32Array(f.buffer, d, _);
            if (n.FeatureTest.isLittleEndian) {
              for (; h < _ - 2; h += 3, I += 4) {
                const P = m[h], A = m[h + 1], u = m[h + 2];
                r[I] = P | 4278190080, r[I + 1] = P >>> 24 | A << 8 | 4278190080, r[I + 2] = A >>> 16 | u << 16 | 4278190080, r[I + 3] = u >>> 8 | 4278190080;
              }
              for (let P = h * 4, A = f.length; P < A; P += 3)
                r[I++] = f[P] | f[P + 1] << 8 | f[P + 2] << 16 | 4278190080;
            } else {
              for (; h < _ - 2; h += 3, I += 4) {
                const P = m[h], A = m[h + 1], u = m[h + 2];
                r[I] = P | 255, r[I + 1] = P << 24 | A >>> 8 | 255, r[I + 2] = A << 16 | u >>> 16 | 255, r[I + 3] = u << 8 | 255;
              }
              for (let P = h * 4, A = f.length; P < A; P += 3)
                r[I++] = f[P] << 24 | f[P + 1] << 16 | f[P + 2] << 8 | 255;
            }
            return {
              srcPos: d,
              destPos: I
            };
          }
          function F(f, d) {
            if (n.FeatureTest.isLittleEndian)
              for (let r = 0, I = f.length; r < I; r++)
                d[r] = f[r] * 65793 | 4278190080;
            else
              for (let r = 0, I = f.length; r < I; r++)
                d[r] = f[r] * 16843008 | 255;
          }
        },
        /* 14 */
        /***/
        (E, e) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.GlobalWorkerOptions = void 0;
          const C = /* @__PURE__ */ Object.create(null);
          e.GlobalWorkerOptions = C, C.workerPort = null, C.workerSrc = "";
        },
        /* 15 */
        /***/
        (E, e, C) => {
          var f, hn, r, un, k, Fe;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.MessageHandler = void 0;
          var n = C(1);
          const g = {
            UNKNOWN: 0,
            DATA: 1,
            ERROR: 2
          }, G = {
            UNKNOWN: 0,
            CANCEL: 1,
            CANCEL_COMPLETE: 2,
            CLOSE: 3,
            ENQUEUE: 4,
            ERROR: 5,
            PULL: 6,
            PULL_COMPLETE: 7,
            START_COMPLETE: 8
          };
          function B(h) {
            switch (h instanceof Error || typeof h == "object" && h !== null || (0, n.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), h.name) {
              case "AbortException":
                return new n.AbortException(h.message);
              case "MissingPDFException":
                return new n.MissingPDFException(h.message);
              case "PasswordException":
                return new n.PasswordException(h.message, h.code);
              case "UnexpectedResponseException":
                return new n.UnexpectedResponseException(h.message, h.status);
              case "UnknownErrorException":
                return new n.UnknownErrorException(h.message, h.details);
              default:
                return new n.UnknownErrorException(h.message, h.toString());
            }
          }
          class F {
            constructor(_, m, P) {
              O(this, f);
              O(this, r);
              O(this, k);
              this.sourceName = _, this.targetName = m, this.comObj = P, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (A) => {
                const u = A.data;
                if (u.targetName !== this.sourceName)
                  return;
                if (u.stream) {
                  W(this, r, un).call(this, u);
                  return;
                }
                if (u.callback) {
                  const s = u.callbackId, i = this.callbackCapabilities[s];
                  if (!i)
                    throw new Error(`Cannot resolve callback ${s}`);
                  if (delete this.callbackCapabilities[s], u.callback === g.DATA)
                    i.resolve(u.data);
                  else if (u.callback === g.ERROR)
                    i.reject(B(u.reason));
                  else
                    throw new Error("Unexpected callback case");
                  return;
                }
                const S = this.actionHandler[u.action];
                if (!S)
                  throw new Error(`Unknown action from worker: ${u.action}`);
                if (u.callbackId) {
                  const s = this.sourceName, i = u.sourceName;
                  new Promise(function(w) {
                    w(S(u.data));
                  }).then(function(w) {
                    P.postMessage({
                      sourceName: s,
                      targetName: i,
                      callback: g.DATA,
                      callbackId: u.callbackId,
                      data: w
                    });
                  }, function(w) {
                    P.postMessage({
                      sourceName: s,
                      targetName: i,
                      callback: g.ERROR,
                      callbackId: u.callbackId,
                      reason: B(w)
                    });
                  });
                  return;
                }
                if (u.streamId) {
                  W(this, f, hn).call(this, u);
                  return;
                }
                S(u.data);
              }, P.addEventListener("message", this._onComObjOnMessage);
            }
            on(_, m) {
              const P = this.actionHandler;
              if (P[_])
                throw new Error(`There is already an actionName called "${_}"`);
              P[_] = m;
            }
            send(_, m, P) {
              this.comObj.postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: _,
                data: m
              }, P);
            }
            sendWithPromise(_, m, P) {
              const A = this.callbackId++, u = new n.PromiseCapability();
              this.callbackCapabilities[A] = u;
              try {
                this.comObj.postMessage({
                  sourceName: this.sourceName,
                  targetName: this.targetName,
                  action: _,
                  callbackId: A,
                  data: m
                }, P);
              } catch (S) {
                u.reject(S);
              }
              return u.promise;
            }
            sendWithStream(_, m, P, A) {
              const u = this.streamId++, S = this.sourceName, s = this.targetName, i = this.comObj;
              return new ReadableStream({
                start: (w) => {
                  const b = new n.PromiseCapability();
                  return this.streamControllers[u] = {
                    controller: w,
                    startCall: b,
                    pullCall: null,
                    cancelCall: null,
                    isClosed: !1
                  }, i.postMessage({
                    sourceName: S,
                    targetName: s,
                    action: _,
                    streamId: u,
                    data: m,
                    desiredSize: w.desiredSize
                  }, A), b.promise;
                },
                pull: (w) => {
                  const b = new n.PromiseCapability();
                  return this.streamControllers[u].pullCall = b, i.postMessage({
                    sourceName: S,
                    targetName: s,
                    stream: G.PULL,
                    streamId: u,
                    desiredSize: w.desiredSize
                  }), b.promise;
                },
                cancel: (w) => {
                  (0, n.assert)(w instanceof Error, "cancel must have a valid reason");
                  const b = new n.PromiseCapability();
                  return this.streamControllers[u].cancelCall = b, this.streamControllers[u].isClosed = !0, i.postMessage({
                    sourceName: S,
                    targetName: s,
                    stream: G.CANCEL,
                    streamId: u,
                    reason: B(w)
                  }), b.promise;
                }
              }, P);
            }
            destroy() {
              this.comObj.removeEventListener("message", this._onComObjOnMessage);
            }
          }
          f = new WeakSet(), hn = function(_) {
            const m = _.streamId, P = this.sourceName, A = _.sourceName, u = this.comObj, S = this, s = this.actionHandler[_.action], i = {
              enqueue(w, b = 1, c) {
                if (this.isCancelled)
                  return;
                const L = this.desiredSize;
                this.desiredSize -= b, L > 0 && this.desiredSize <= 0 && (this.sinkCapability = new n.PromiseCapability(), this.ready = this.sinkCapability.promise), u.postMessage({
                  sourceName: P,
                  targetName: A,
                  stream: G.ENQUEUE,
                  streamId: m,
                  chunk: w
                }, c);
              },
              close() {
                this.isCancelled || (this.isCancelled = !0, u.postMessage({
                  sourceName: P,
                  targetName: A,
                  stream: G.CLOSE,
                  streamId: m
                }), delete S.streamSinks[m]);
              },
              error(w) {
                (0, n.assert)(w instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, u.postMessage({
                  sourceName: P,
                  targetName: A,
                  stream: G.ERROR,
                  streamId: m,
                  reason: B(w)
                }));
              },
              sinkCapability: new n.PromiseCapability(),
              onPull: null,
              onCancel: null,
              isCancelled: !1,
              desiredSize: _.desiredSize,
              ready: null
            };
            i.sinkCapability.resolve(), i.ready = i.sinkCapability.promise, this.streamSinks[m] = i, new Promise(function(w) {
              w(s(_.data, i));
            }).then(function() {
              u.postMessage({
                sourceName: P,
                targetName: A,
                stream: G.START_COMPLETE,
                streamId: m,
                success: !0
              });
            }, function(w) {
              u.postMessage({
                sourceName: P,
                targetName: A,
                stream: G.START_COMPLETE,
                streamId: m,
                reason: B(w)
              });
            });
          }, r = new WeakSet(), un = function(_) {
            const m = _.streamId, P = this.sourceName, A = _.sourceName, u = this.comObj, S = this.streamControllers[m], s = this.streamSinks[m];
            switch (_.stream) {
              case G.START_COMPLETE:
                _.success ? S.startCall.resolve() : S.startCall.reject(B(_.reason));
                break;
              case G.PULL_COMPLETE:
                _.success ? S.pullCall.resolve() : S.pullCall.reject(B(_.reason));
                break;
              case G.PULL:
                if (!s) {
                  u.postMessage({
                    sourceName: P,
                    targetName: A,
                    stream: G.PULL_COMPLETE,
                    streamId: m,
                    success: !0
                  });
                  break;
                }
                s.desiredSize <= 0 && _.desiredSize > 0 && s.sinkCapability.resolve(), s.desiredSize = _.desiredSize, new Promise(function(i) {
                  var w;
                  i((w = s.onPull) == null ? void 0 : w.call(s));
                }).then(function() {
                  u.postMessage({
                    sourceName: P,
                    targetName: A,
                    stream: G.PULL_COMPLETE,
                    streamId: m,
                    success: !0
                  });
                }, function(i) {
                  u.postMessage({
                    sourceName: P,
                    targetName: A,
                    stream: G.PULL_COMPLETE,
                    streamId: m,
                    reason: B(i)
                  });
                });
                break;
              case G.ENQUEUE:
                if ((0, n.assert)(S, "enqueue should have stream controller"), S.isClosed)
                  break;
                S.controller.enqueue(_.chunk);
                break;
              case G.CLOSE:
                if ((0, n.assert)(S, "close should have stream controller"), S.isClosed)
                  break;
                S.isClosed = !0, S.controller.close(), W(this, k, Fe).call(this, S, m);
                break;
              case G.ERROR:
                (0, n.assert)(S, "error should have stream controller"), S.controller.error(B(_.reason)), W(this, k, Fe).call(this, S, m);
                break;
              case G.CANCEL_COMPLETE:
                _.success ? S.cancelCall.resolve() : S.cancelCall.reject(B(_.reason)), W(this, k, Fe).call(this, S, m);
                break;
              case G.CANCEL:
                if (!s)
                  break;
                new Promise(function(i) {
                  var w;
                  i((w = s.onCancel) == null ? void 0 : w.call(s, B(_.reason)));
                }).then(function() {
                  u.postMessage({
                    sourceName: P,
                    targetName: A,
                    stream: G.CANCEL_COMPLETE,
                    streamId: m,
                    success: !0
                  });
                }, function(i) {
                  u.postMessage({
                    sourceName: P,
                    targetName: A,
                    stream: G.CANCEL_COMPLETE,
                    streamId: m,
                    reason: B(i)
                  });
                }), s.sinkCapability.reject(B(_.reason)), s.isCancelled = !0, delete this.streamSinks[m];
                break;
              default:
                throw new Error("Unexpected stream case");
            }
          }, k = new WeakSet(), Fe = async function(_, m) {
            var P, A, u;
            await Promise.allSettled([(P = _.startCall) == null ? void 0 : P.promise, (A = _.pullCall) == null ? void 0 : A.promise, (u = _.cancelCall) == null ? void 0 : u.promise]), delete this.streamControllers[m];
          }, e.MessageHandler = F;
        },
        /* 16 */
        /***/
        (E, e, C) => {
          var G, B;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.Metadata = void 0;
          var n = C(1);
          class g {
            constructor({
              parsedData: f,
              rawData: d
            }) {
              O(this, G, void 0);
              O(this, B, void 0);
              Q(this, G, f), Q(this, B, d);
            }
            getRaw() {
              return t(this, B);
            }
            get(f) {
              return t(this, G).get(f) ?? null;
            }
            getAll() {
              return (0, n.objectFromMap)(t(this, G));
            }
            has(f) {
              return t(this, G).has(f);
            }
          }
          G = new WeakMap(), B = new WeakMap(), e.Metadata = g;
        },
        /* 17 */
        /***/
        (E, e, C) => {
          var f, d, r, I, k, y, fi;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.OptionalContentConfig = void 0;
          var n = C(1), g = C(8);
          const G = Symbol("INTERNAL");
          class B {
            constructor(m, P) {
              O(this, f, !0);
              this.name = m, this.intent = P;
            }
            get visible() {
              return t(this, f);
            }
            _setVisible(m, P) {
              m !== G && (0, n.unreachable)("Internal method `_setVisible` called."), Q(this, f, P);
            }
          }
          f = new WeakMap();
          class F {
            constructor(m) {
              O(this, y);
              O(this, d, null);
              O(this, r, /* @__PURE__ */ new Map());
              O(this, I, null);
              O(this, k, null);
              if (this.name = null, this.creator = null, m !== null) {
                this.name = m.name, this.creator = m.creator, Q(this, k, m.order);
                for (const P of m.groups)
                  t(this, r).set(P.id, new B(P.name, P.intent));
                if (m.baseState === "OFF")
                  for (const P of t(this, r).values())
                    P._setVisible(G, !1);
                for (const P of m.on)
                  t(this, r).get(P)._setVisible(G, !0);
                for (const P of m.off)
                  t(this, r).get(P)._setVisible(G, !1);
                Q(this, I, this.getHash());
              }
            }
            isVisible(m) {
              if (t(this, r).size === 0)
                return !0;
              if (!m)
                return (0, n.warn)("Optional content group not defined."), !0;
              if (m.type === "OCG")
                return t(this, r).has(m.id) ? t(this, r).get(m.id).visible : ((0, n.warn)(`Optional content group not found: ${m.id}`), !0);
              if (m.type === "OCMD") {
                if (m.expression)
                  return W(this, y, fi).call(this, m.expression);
                if (!m.policy || m.policy === "AnyOn") {
                  for (const P of m.ids) {
                    if (!t(this, r).has(P))
                      return (0, n.warn)(`Optional content group not found: ${P}`), !0;
                    if (t(this, r).get(P).visible)
                      return !0;
                  }
                  return !1;
                } else if (m.policy === "AllOn") {
                  for (const P of m.ids) {
                    if (!t(this, r).has(P))
                      return (0, n.warn)(`Optional content group not found: ${P}`), !0;
                    if (!t(this, r).get(P).visible)
                      return !1;
                  }
                  return !0;
                } else if (m.policy === "AnyOff") {
                  for (const P of m.ids) {
                    if (!t(this, r).has(P))
                      return (0, n.warn)(`Optional content group not found: ${P}`), !0;
                    if (!t(this, r).get(P).visible)
                      return !0;
                  }
                  return !1;
                } else if (m.policy === "AllOff") {
                  for (const P of m.ids) {
                    if (!t(this, r).has(P))
                      return (0, n.warn)(`Optional content group not found: ${P}`), !0;
                    if (t(this, r).get(P).visible)
                      return !1;
                  }
                  return !0;
                }
                return (0, n.warn)(`Unknown optional content policy ${m.policy}.`), !0;
              }
              return (0, n.warn)(`Unknown group type ${m.type}.`), !0;
            }
            setVisibility(m, P = !0) {
              if (!t(this, r).has(m)) {
                (0, n.warn)(`Optional content group not found: ${m}`);
                return;
              }
              t(this, r).get(m)._setVisible(G, !!P), Q(this, d, null);
            }
            get hasInitialVisibility() {
              return t(this, I) === null || this.getHash() === t(this, I);
            }
            getOrder() {
              return t(this, r).size ? t(this, k) ? t(this, k).slice() : [...t(this, r).keys()] : null;
            }
            getGroups() {
              return t(this, r).size > 0 ? (0, n.objectFromMap)(t(this, r)) : null;
            }
            getGroup(m) {
              return t(this, r).get(m) || null;
            }
            getHash() {
              if (t(this, d) !== null)
                return t(this, d);
              const m = new g.MurmurHash3_64();
              for (const [P, A] of t(this, r))
                m.update(`${P}:${A.visible}`);
              return Q(this, d, m.hexdigest());
            }
          }
          d = new WeakMap(), r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), y = new WeakSet(), fi = function(m) {
            const P = m.length;
            if (P < 2)
              return !0;
            const A = m[0];
            for (let u = 1; u < P; u++) {
              const S = m[u];
              let s;
              if (Array.isArray(S))
                s = W(this, y, fi).call(this, S);
              else if (t(this, r).has(S))
                s = t(this, r).get(S).visible;
              else
                return (0, n.warn)(`Optional content group not found: ${S}`), !0;
              switch (A) {
                case "And":
                  if (!s)
                    return !1;
                  break;
                case "Or":
                  if (s)
                    return !0;
                  break;
                case "Not":
                  return !s;
                default:
                  return !0;
              }
            }
            return A === "And";
          }, e.OptionalContentConfig = F;
        },
        /* 18 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFDataTransportStream = void 0;
          var n = C(1), g = C(6);
          class G {
            constructor({
              length: d,
              initialData: r,
              progressiveDone: I = !1,
              contentDispositionFilename: k = null,
              disableRange: y = !1,
              disableStream: h = !1
            }, _) {
              if ((0, n.assert)(_, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = I, this._contentDispositionFilename = k, (r == null ? void 0 : r.length) > 0) {
                const m = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
                this._queuedChunks.push(m);
              }
              this._pdfDataRangeTransport = _, this._isStreamingSupported = !h, this._isRangeSupported = !y, this._contentLength = d, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((m, P) => {
                this._onReceiveData({
                  begin: m,
                  chunk: P
                });
              }), this._pdfDataRangeTransport.addProgressListener((m, P) => {
                this._onProgress({
                  loaded: m,
                  total: P
                });
              }), this._pdfDataRangeTransport.addProgressiveReadListener((m) => {
                this._onReceiveData({
                  chunk: m
                });
              }), this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
                this._onProgressiveDone();
              }), this._pdfDataRangeTransport.transportReady();
            }
            _onReceiveData({
              begin: d,
              chunk: r
            }) {
              const I = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
              if (d === void 0)
                this._fullRequestReader ? this._fullRequestReader._enqueue(I) : this._queuedChunks.push(I);
              else {
                const k = this._rangeReaders.some(function(y) {
                  return y._begin !== d ? !1 : (y._enqueue(I), !0);
                });
                (0, n.assert)(k, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
              }
            }
            get _progressiveDataLength() {
              var d;
              return ((d = this._fullRequestReader) == null ? void 0 : d._loaded) ?? 0;
            }
            _onProgress(d) {
              var r, I, k, y;
              d.total === void 0 ? (I = (r = this._rangeReaders[0]) == null ? void 0 : r.onProgress) == null || I.call(r, {
                loaded: d.loaded
              }) : (y = (k = this._fullRequestReader) == null ? void 0 : k.onProgress) == null || y.call(k, {
                loaded: d.loaded,
                total: d.total
              });
            }
            _onProgressiveDone() {
              var d;
              (d = this._fullRequestReader) == null || d.progressiveDone(), this._progressiveDone = !0;
            }
            _removeRangeReader(d) {
              const r = this._rangeReaders.indexOf(d);
              r >= 0 && this._rangeReaders.splice(r, 1);
            }
            getFullReader() {
              (0, n.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
              const d = this._queuedChunks;
              return this._queuedChunks = null, new B(this, d, this._progressiveDone, this._contentDispositionFilename);
            }
            getRangeReader(d, r) {
              if (r <= this._progressiveDataLength)
                return null;
              const I = new F(this, d, r);
              return this._pdfDataRangeTransport.requestDataRange(d, r), this._rangeReaders.push(I), I;
            }
            cancelAllRequests(d) {
              var r;
              (r = this._fullRequestReader) == null || r.cancel(d);
              for (const I of this._rangeReaders.slice(0))
                I.cancel(d);
              this._pdfDataRangeTransport.abort();
            }
          }
          e.PDFDataTransportStream = G;
          class B {
            constructor(d, r, I = !1, k = null) {
              this._stream = d, this._done = I || !1, this._filename = (0, g.isPdfFile)(k) ? k : null, this._queuedChunks = r || [], this._loaded = 0;
              for (const y of this._queuedChunks)
                this._loaded += y.byteLength;
              this._requests = [], this._headersReady = Promise.resolve(), d._fullRequestReader = this, this.onProgress = null;
            }
            _enqueue(d) {
              this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
                value: d,
                done: !1
              }) : this._queuedChunks.push(d), this._loaded += d.byteLength);
            }
            get headersReady() {
              return this._headersReady;
            }
            get filename() {
              return this._filename;
            }
            get isRangeSupported() {
              return this._stream._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._stream._isStreamingSupported;
            }
            get contentLength() {
              return this._stream._contentLength;
            }
            async read() {
              if (this._queuedChunks.length > 0)
                return {
                  value: this._queuedChunks.shift(),
                  done: !1
                };
              if (this._done)
                return {
                  value: void 0,
                  done: !0
                };
              const d = new n.PromiseCapability();
              return this._requests.push(d), d.promise;
            }
            cancel(d) {
              this._done = !0;
              for (const r of this._requests)
                r.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0;
            }
            progressiveDone() {
              this._done || (this._done = !0);
            }
          }
          class F {
            constructor(d, r, I) {
              this._stream = d, this._begin = r, this._end = I, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
            }
            _enqueue(d) {
              if (!this._done) {
                if (this._requests.length === 0)
                  this._queuedChunk = d;
                else {
                  this._requests.shift().resolve({
                    value: d,
                    done: !1
                  });
                  for (const I of this._requests)
                    I.resolve({
                      value: void 0,
                      done: !0
                    });
                  this._requests.length = 0;
                }
                this._done = !0, this._stream._removeRangeReader(this);
              }
            }
            get isStreamingSupported() {
              return !1;
            }
            async read() {
              if (this._queuedChunk) {
                const r = this._queuedChunk;
                return this._queuedChunk = null, {
                  value: r,
                  done: !1
                };
              }
              if (this._done)
                return {
                  value: void 0,
                  done: !0
                };
              const d = new n.PromiseCapability();
              return this._requests.push(d), d.promise;
            }
            cancel(d) {
              this._done = !0;
              for (const r of this._requests)
                r.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0, this._stream._removeRangeReader(this);
            }
          }
        },
        /* 19 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFFetchStream = void 0;
          var n = C(1), g = C(20);
          function G(I, k, y) {
            return {
              method: "GET",
              headers: I,
              signal: y.signal,
              mode: "cors",
              credentials: k ? "include" : "same-origin",
              redirect: "follow"
            };
          }
          function B(I) {
            const k = new Headers();
            for (const y in I) {
              const h = I[y];
              h !== void 0 && k.append(y, h);
            }
            return k;
          }
          function F(I) {
            return I instanceof Uint8Array ? I.buffer : I instanceof ArrayBuffer ? I : ((0, n.warn)(`getArrayBuffer - unexpected data format: ${I}`), new Uint8Array(I).buffer);
          }
          class f {
            constructor(k) {
              this.source = k, this.isHttp = /^https?:/i.test(k.url), this.httpHeaders = this.isHttp && k.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              var k;
              return ((k = this._fullRequestReader) == null ? void 0 : k._loaded) ?? 0;
            }
            getFullReader() {
              return (0, n.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new d(this), this._fullRequestReader;
            }
            getRangeReader(k, y) {
              if (y <= this._progressiveDataLength)
                return null;
              const h = new r(this, k, y);
              return this._rangeRequestReaders.push(h), h;
            }
            cancelAllRequests(k) {
              var y;
              (y = this._fullRequestReader) == null || y.cancel(k);
              for (const h of this._rangeRequestReaders.slice(0))
                h.cancel(k);
            }
          }
          e.PDFFetchStream = f;
          class d {
            constructor(k) {
              this._stream = k, this._reader = null, this._loaded = 0, this._filename = null;
              const y = k.source;
              this._withCredentials = y.withCredentials || !1, this._contentLength = y.length, this._headersCapability = new n.PromiseCapability(), this._disableRange = y.disableRange || !1, this._rangeChunkSize = y.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !y.disableStream, this._isRangeSupported = !y.disableRange, this._headers = B(this._stream.httpHeaders);
              const h = y.url;
              fetch(h, G(this._headers, this._withCredentials, this._abortController)).then((_) => {
                if (!(0, g.validateResponseStatus)(_.status))
                  throw (0, g.createResponseStatusError)(_.status, h);
                this._reader = _.body.getReader(), this._headersCapability.resolve();
                const m = (u) => _.headers.get(u), {
                  allowRangeRequests: P,
                  suggestedLength: A
                } = (0, g.validateRangeRequestCapabilities)({
                  getResponseHeader: m,
                  isHttp: this._stream.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = P, this._contentLength = A || this._contentLength, this._filename = (0, g.extractFilenameFromHeader)(m), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new n.AbortException("Streaming is disabled."));
              }).catch(this._headersCapability.reject), this.onProgress = null;
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var h;
              await this._headersCapability.promise;
              const {
                value: k,
                done: y
              } = await this._reader.read();
              return y ? {
                value: k,
                done: y
              } : (this._loaded += k.byteLength, (h = this.onProgress) == null || h.call(this, {
                loaded: this._loaded,
                total: this._contentLength
              }), {
                value: F(k),
                done: !1
              });
            }
            cancel(k) {
              var y;
              (y = this._reader) == null || y.cancel(k), this._abortController.abort();
            }
          }
          class r {
            constructor(k, y, h) {
              this._stream = k, this._reader = null, this._loaded = 0;
              const _ = k.source;
              this._withCredentials = _.withCredentials || !1, this._readCapability = new n.PromiseCapability(), this._isStreamingSupported = !_.disableStream, this._abortController = new AbortController(), this._headers = B(this._stream.httpHeaders), this._headers.append("Range", `bytes=${y}-${h - 1}`);
              const m = _.url;
              fetch(m, G(this._headers, this._withCredentials, this._abortController)).then((P) => {
                if (!(0, g.validateResponseStatus)(P.status))
                  throw (0, g.createResponseStatusError)(P.status, m);
                this._readCapability.resolve(), this._reader = P.body.getReader();
              }).catch(this._readCapability.reject), this.onProgress = null;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var h;
              await this._readCapability.promise;
              const {
                value: k,
                done: y
              } = await this._reader.read();
              return y ? {
                value: k,
                done: y
              } : (this._loaded += k.byteLength, (h = this.onProgress) == null || h.call(this, {
                loaded: this._loaded
              }), {
                value: F(k),
                done: !1
              });
            }
            cancel(k) {
              var y;
              (y = this._reader) == null || y.cancel(k), this._abortController.abort();
            }
          }
        },
        /* 20 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.createResponseStatusError = f, e.extractFilenameFromHeader = F, e.validateRangeRequestCapabilities = B, e.validateResponseStatus = d;
          var n = C(1), g = C(21), G = C(6);
          function B({
            getResponseHeader: r,
            isHttp: I,
            rangeChunkSize: k,
            disableRange: y
          }) {
            const h = {
              allowRangeRequests: !1,
              suggestedLength: void 0
            }, _ = parseInt(r("Content-Length"), 10);
            return !Number.isInteger(_) || (h.suggestedLength = _, _ <= 2 * k) || y || !I || r("Accept-Ranges") !== "bytes" || (r("Content-Encoding") || "identity") !== "identity" || (h.allowRangeRequests = !0), h;
          }
          function F(r) {
            const I = r("Content-Disposition");
            if (I) {
              let k = (0, g.getFilenameFromContentDispositionHeader)(I);
              if (k.includes("%"))
                try {
                  k = decodeURIComponent(k);
                } catch {
                }
              if ((0, G.isPdfFile)(k))
                return k;
            }
            return null;
          }
          function f(r, I) {
            return r === 404 || r === 0 && I.startsWith("file:") ? new n.MissingPDFException('Missing PDF "' + I + '".') : new n.UnexpectedResponseException(`Unexpected server response (${r}) while retrieving PDF "${I}".`, r);
          }
          function d(r) {
            return r === 200 || r === 206;
          }
        },
        /* 21 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.getFilenameFromContentDispositionHeader = g;
          var n = C(1);
          function g(G) {
            let B = !0, F = f("filename\\*", "i").exec(G);
            if (F) {
              F = F[1];
              let _ = k(F);
              return _ = unescape(_), _ = y(_), _ = h(_), r(_);
            }
            if (F = I(G), F) {
              const _ = h(F);
              return r(_);
            }
            if (F = f("filename", "i").exec(G), F) {
              F = F[1];
              let _ = k(F);
              return _ = h(_), r(_);
            }
            function f(_, m) {
              return new RegExp("(?:^|;)\\s*" + _ + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', m);
            }
            function d(_, m) {
              if (_) {
                if (!/^[\x00-\xFF]+$/.test(m))
                  return m;
                try {
                  const P = new TextDecoder(_, {
                    fatal: !0
                  }), A = (0, n.stringToBytes)(m);
                  m = P.decode(A), B = !1;
                } catch {
                }
              }
              return m;
            }
            function r(_) {
              return B && /[\x80-\xff]/.test(_) && (_ = d("utf-8", _), B && (_ = d("iso-8859-1", _))), _;
            }
            function I(_) {
              const m = [];
              let P;
              const A = f("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
              for (; (P = A.exec(_)) !== null; ) {
                let [, S, s, i] = P;
                if (S = parseInt(S, 10), S in m) {
                  if (S === 0)
                    break;
                  continue;
                }
                m[S] = [s, i];
              }
              const u = [];
              for (let S = 0; S < m.length && S in m; ++S) {
                let [s, i] = m[S];
                i = k(i), s && (i = unescape(i), S === 0 && (i = y(i))), u.push(i);
              }
              return u.join("");
            }
            function k(_) {
              if (_.startsWith('"')) {
                const m = _.slice(1).split('\\"');
                for (let P = 0; P < m.length; ++P) {
                  const A = m[P].indexOf('"');
                  A !== -1 && (m[P] = m[P].slice(0, A), m.length = P + 1), m[P] = m[P].replaceAll(/\\(.)/g, "$1");
                }
                _ = m.join('"');
              }
              return _;
            }
            function y(_) {
              const m = _.indexOf("'");
              if (m === -1)
                return _;
              const P = _.slice(0, m), u = _.slice(m + 1).replace(/^[^']*'/, "");
              return d(P, u);
            }
            function h(_) {
              return !_.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(_) ? _ : _.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(m, P, A, u) {
                if (A === "q" || A === "Q")
                  return u = u.replaceAll("_", " "), u = u.replaceAll(/=([0-9a-fA-F]{2})/g, function(S, s) {
                    return String.fromCharCode(parseInt(s, 16));
                  }), d(P, u);
                try {
                  u = atob(u);
                } catch {
                }
                return d(P, u);
              });
            }
            return "";
          }
        },
        /* 22 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFNetworkStream = void 0;
          var n = C(1), g = C(20);
          const G = 200, B = 206;
          function F(k) {
            const y = k.response;
            return typeof y != "string" ? y : (0, n.stringToBytes)(y).buffer;
          }
          class f {
            constructor(y, h = {}) {
              this.url = y, this.isHttp = /^https?:/i.test(y), this.httpHeaders = this.isHttp && h.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = h.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
            }
            requestRange(y, h, _) {
              const m = {
                begin: y,
                end: h
              };
              for (const P in _)
                m[P] = _[P];
              return this.request(m);
            }
            requestFull(y) {
              return this.request(y);
            }
            request(y) {
              const h = new XMLHttpRequest(), _ = this.currXhrId++, m = this.pendingRequests[_] = {
                xhr: h
              };
              h.open("GET", this.url), h.withCredentials = this.withCredentials;
              for (const P in this.httpHeaders) {
                const A = this.httpHeaders[P];
                A !== void 0 && h.setRequestHeader(P, A);
              }
              return this.isHttp && "begin" in y && "end" in y ? (h.setRequestHeader("Range", `bytes=${y.begin}-${y.end - 1}`), m.expectedStatus = B) : m.expectedStatus = G, h.responseType = "arraybuffer", y.onError && (h.onerror = function(P) {
                y.onError(h.status);
              }), h.onreadystatechange = this.onStateChange.bind(this, _), h.onprogress = this.onProgress.bind(this, _), m.onHeadersReceived = y.onHeadersReceived, m.onDone = y.onDone, m.onError = y.onError, m.onProgress = y.onProgress, h.send(null), _;
            }
            onProgress(y, h) {
              var m;
              const _ = this.pendingRequests[y];
              _ && ((m = _.onProgress) == null || m.call(_, h));
            }
            onStateChange(y, h) {
              var S, s, i;
              const _ = this.pendingRequests[y];
              if (!_)
                return;
              const m = _.xhr;
              if (m.readyState >= 2 && _.onHeadersReceived && (_.onHeadersReceived(), delete _.onHeadersReceived), m.readyState !== 4 || !(y in this.pendingRequests))
                return;
              if (delete this.pendingRequests[y], m.status === 0 && this.isHttp) {
                (S = _.onError) == null || S.call(_, m.status);
                return;
              }
              const P = m.status || G;
              if (!(P === G && _.expectedStatus === B) && P !== _.expectedStatus) {
                (s = _.onError) == null || s.call(_, m.status);
                return;
              }
              const u = F(m);
              if (P === B) {
                const w = m.getResponseHeader("Content-Range"), b = /bytes (\d+)-(\d+)\/(\d+)/.exec(w);
                _.onDone({
                  begin: parseInt(b[1], 10),
                  chunk: u
                });
              } else
                u ? _.onDone({
                  begin: 0,
                  chunk: u
                }) : (i = _.onError) == null || i.call(_, m.status);
            }
            getRequestXhr(y) {
              return this.pendingRequests[y].xhr;
            }
            isPendingRequest(y) {
              return y in this.pendingRequests;
            }
            abortRequest(y) {
              const h = this.pendingRequests[y].xhr;
              delete this.pendingRequests[y], h.abort();
            }
          }
          class d {
            constructor(y) {
              this._source = y, this._manager = new f(y.url, {
                httpHeaders: y.httpHeaders,
                withCredentials: y.withCredentials
              }), this._rangeChunkSize = y.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            _onRangeRequestReaderClosed(y) {
              const h = this._rangeRequestReaders.indexOf(y);
              h >= 0 && this._rangeRequestReaders.splice(h, 1);
            }
            getFullReader() {
              return (0, n.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new r(this._manager, this._source), this._fullRequestReader;
            }
            getRangeReader(y, h) {
              const _ = new I(this._manager, y, h);
              return _.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(_), _;
            }
            cancelAllRequests(y) {
              var h;
              (h = this._fullRequestReader) == null || h.cancel(y);
              for (const _ of this._rangeRequestReaders.slice(0))
                _.cancel(y);
            }
          }
          e.PDFNetworkStream = d;
          class r {
            constructor(y, h) {
              this._manager = y;
              const _ = {
                onHeadersReceived: this._onHeadersReceived.bind(this),
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
              };
              this._url = h.url, this._fullRequestId = y.requestFull(_), this._headersReceivedCapability = new n.PromiseCapability(), this._disableRange = h.disableRange || !1, this._contentLength = h.length, this._rangeChunkSize = h.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
            }
            _onHeadersReceived() {
              const y = this._fullRequestId, h = this._manager.getRequestXhr(y), _ = (A) => h.getResponseHeader(A), {
                allowRangeRequests: m,
                suggestedLength: P
              } = (0, g.validateRangeRequestCapabilities)({
                getResponseHeader: _,
                isHttp: this._manager.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              });
              m && (this._isRangeSupported = !0), this._contentLength = P || this._contentLength, this._filename = (0, g.extractFilenameFromHeader)(_), this._isRangeSupported && this._manager.abortRequest(y), this._headersReceivedCapability.resolve();
            }
            _onDone(y) {
              if (y && (this._requests.length > 0 ? this._requests.shift().resolve({
                value: y.chunk,
                done: !1
              }) : this._cachedChunks.push(y.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
                for (const h of this._requests)
                  h.resolve({
                    value: void 0,
                    done: !0
                  });
                this._requests.length = 0;
              }
            }
            _onError(y) {
              this._storedError = (0, g.createResponseStatusError)(y, this._url), this._headersReceivedCapability.reject(this._storedError);
              for (const h of this._requests)
                h.reject(this._storedError);
              this._requests.length = 0, this._cachedChunks.length = 0;
            }
            _onProgress(y) {
              var h;
              (h = this.onProgress) == null || h.call(this, {
                loaded: y.loaded,
                total: y.lengthComputable ? y.total : this._contentLength
              });
            }
            get filename() {
              return this._filename;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            get contentLength() {
              return this._contentLength;
            }
            get headersReady() {
              return this._headersReceivedCapability.promise;
            }
            async read() {
              if (this._storedError)
                throw this._storedError;
              if (this._cachedChunks.length > 0)
                return {
                  value: this._cachedChunks.shift(),
                  done: !1
                };
              if (this._done)
                return {
                  value: void 0,
                  done: !0
                };
              const y = new n.PromiseCapability();
              return this._requests.push(y), y.promise;
            }
            cancel(y) {
              this._done = !0, this._headersReceivedCapability.reject(y);
              for (const h of this._requests)
                h.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
            }
          }
          class I {
            constructor(y, h, _) {
              this._manager = y;
              const m = {
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
              };
              this._url = y.url, this._requestId = y.requestRange(h, _, m), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
            }
            _close() {
              var y;
              (y = this.onClosed) == null || y.call(this, this);
            }
            _onDone(y) {
              const h = y.chunk;
              this._requests.length > 0 ? this._requests.shift().resolve({
                value: h,
                done: !1
              }) : this._queuedChunk = h, this._done = !0;
              for (const _ of this._requests)
                _.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0, this._close();
            }
            _onError(y) {
              this._storedError = (0, g.createResponseStatusError)(y, this._url);
              for (const h of this._requests)
                h.reject(this._storedError);
              this._requests.length = 0, this._queuedChunk = null;
            }
            _onProgress(y) {
              var h;
              this.isStreamingSupported || (h = this.onProgress) == null || h.call(this, {
                loaded: y.loaded
              });
            }
            get isStreamingSupported() {
              return !1;
            }
            async read() {
              if (this._storedError)
                throw this._storedError;
              if (this._queuedChunk !== null) {
                const h = this._queuedChunk;
                return this._queuedChunk = null, {
                  value: h,
                  done: !1
                };
              }
              if (this._done)
                return {
                  value: void 0,
                  done: !0
                };
              const y = new n.PromiseCapability();
              return this._requests.push(y), y.promise;
            }
            cancel(y) {
              this._done = !0;
              for (const h of this._requests)
                h.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
            }
          }
        },
        /* 23 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFNodeStream = void 0;
          var n = C(1), g = C(20);
          const G = /^file:\/\/\/[a-zA-Z]:\//;
          function B(_) {
            const m = require$$5, P = m.parse(_);
            return P.protocol === "file:" || P.host ? P : /^[a-z]:[/\\]/i.test(_) ? m.parse(`file:///${_}`) : (P.host || (P.protocol = "file:"), P);
          }
          class F {
            constructor(m) {
              this.source = m, this.url = B(m.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && m.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              var m;
              return ((m = this._fullRequestReader) == null ? void 0 : m._loaded) ?? 0;
            }
            getFullReader() {
              return (0, n.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new y(this) : new I(this), this._fullRequestReader;
            }
            getRangeReader(m, P) {
              if (P <= this._progressiveDataLength)
                return null;
              const A = this.isFsUrl ? new h(this, m, P) : new k(this, m, P);
              return this._rangeRequestReaders.push(A), A;
            }
            cancelAllRequests(m) {
              var P;
              (P = this._fullRequestReader) == null || P.cancel(m);
              for (const A of this._rangeRequestReaders.slice(0))
                A.cancel(m);
            }
          }
          e.PDFNodeStream = F;
          class f {
            constructor(m) {
              this._url = m.url, this._done = !1, this._storedError = null, this.onProgress = null;
              const P = m.source;
              this._contentLength = P.length, this._loaded = 0, this._filename = null, this._disableRange = P.disableRange || !1, this._rangeChunkSize = P.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !P.disableStream, this._isRangeSupported = !P.disableRange, this._readableStream = null, this._readCapability = new n.PromiseCapability(), this._headersCapability = new n.PromiseCapability();
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var A;
              if (await this._readCapability.promise, this._done)
                return {
                  value: void 0,
                  done: !0
                };
              if (this._storedError)
                throw this._storedError;
              const m = this._readableStream.read();
              return m === null ? (this._readCapability = new n.PromiseCapability(), this.read()) : (this._loaded += m.length, (A = this.onProgress) == null || A.call(this, {
                loaded: this._loaded,
                total: this._contentLength
              }), {
                value: new Uint8Array(m).buffer,
                done: !1
              });
            }
            cancel(m) {
              if (!this._readableStream) {
                this._error(m);
                return;
              }
              this._readableStream.destroy(m);
            }
            _error(m) {
              this._storedError = m, this._readCapability.resolve();
            }
            _setReadableStream(m) {
              this._readableStream = m, m.on("readable", () => {
                this._readCapability.resolve();
              }), m.on("end", () => {
                m.destroy(), this._done = !0, this._readCapability.resolve();
              }), m.on("error", (P) => {
                this._error(P);
              }), !this._isStreamingSupported && this._isRangeSupported && this._error(new n.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          class d {
            constructor(m) {
              this._url = m.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = new n.PromiseCapability();
              const P = m.source;
              this._isStreamingSupported = !P.disableStream;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var A;
              if (await this._readCapability.promise, this._done)
                return {
                  value: void 0,
                  done: !0
                };
              if (this._storedError)
                throw this._storedError;
              const m = this._readableStream.read();
              return m === null ? (this._readCapability = new n.PromiseCapability(), this.read()) : (this._loaded += m.length, (A = this.onProgress) == null || A.call(this, {
                loaded: this._loaded
              }), {
                value: new Uint8Array(m).buffer,
                done: !1
              });
            }
            cancel(m) {
              if (!this._readableStream) {
                this._error(m);
                return;
              }
              this._readableStream.destroy(m);
            }
            _error(m) {
              this._storedError = m, this._readCapability.resolve();
            }
            _setReadableStream(m) {
              this._readableStream = m, m.on("readable", () => {
                this._readCapability.resolve();
              }), m.on("end", () => {
                m.destroy(), this._done = !0, this._readCapability.resolve();
              }), m.on("error", (P) => {
                this._error(P);
              }), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          function r(_, m) {
            return {
              protocol: _.protocol,
              auth: _.auth,
              host: _.hostname,
              port: _.port,
              path: _.path,
              method: "GET",
              headers: m
            };
          }
          class I extends f {
            constructor(m) {
              super(m);
              const P = (A) => {
                if (A.statusCode === 404) {
                  const i = new n.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = i, this._headersCapability.reject(i);
                  return;
                }
                this._headersCapability.resolve(), this._setReadableStream(A);
                const u = (i) => this._readableStream.headers[i.toLowerCase()], {
                  allowRangeRequests: S,
                  suggestedLength: s
                } = (0, g.validateRangeRequestCapabilities)({
                  getResponseHeader: u,
                  isHttp: m.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = S, this._contentLength = s || this._contentLength, this._filename = (0, g.extractFilenameFromHeader)(u);
              };
              if (this._request = null, this._url.protocol === "http:") {
                const A = require$$5;
                this._request = A.request(r(this._url, m.httpHeaders), P);
              } else {
                const A = require$$5;
                this._request = A.request(r(this._url, m.httpHeaders), P);
              }
              this._request.on("error", (A) => {
                this._storedError = A, this._headersCapability.reject(A);
              }), this._request.end();
            }
          }
          class k extends d {
            constructor(m, P, A) {
              super(m), this._httpHeaders = {};
              for (const S in m.httpHeaders) {
                const s = m.httpHeaders[S];
                s !== void 0 && (this._httpHeaders[S] = s);
              }
              this._httpHeaders.Range = `bytes=${P}-${A - 1}`;
              const u = (S) => {
                if (S.statusCode === 404) {
                  const s = new n.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = s;
                  return;
                }
                this._setReadableStream(S);
              };
              if (this._request = null, this._url.protocol === "http:") {
                const S = require$$5;
                this._request = S.request(r(this._url, this._httpHeaders), u);
              } else {
                const S = require$$5;
                this._request = S.request(r(this._url, this._httpHeaders), u);
              }
              this._request.on("error", (S) => {
                this._storedError = S;
              }), this._request.end();
            }
          }
          class y extends f {
            constructor(m) {
              super(m);
              let P = decodeURIComponent(this._url.path);
              G.test(this._url.href) && (P = P.replace(/^\//, ""));
              const A = require$$5;
              A.lstat(P, (u, S) => {
                if (u) {
                  u.code === "ENOENT" && (u = new n.MissingPDFException(`Missing PDF "${P}".`)), this._storedError = u, this._headersCapability.reject(u);
                  return;
                }
                this._contentLength = S.size, this._setReadableStream(A.createReadStream(P)), this._headersCapability.resolve();
              });
            }
          }
          class h extends d {
            constructor(m, P, A) {
              super(m);
              let u = decodeURIComponent(this._url.path);
              G.test(this._url.href) && (u = u.replace(/^\//, ""));
              const S = require$$5;
              this._setReadableStream(S.createReadStream(u, {
                start: P,
                end: A - 1
              }));
            }
          }
        },
        /* 24 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.SVGGraphics = void 0;
          var n = C(6), g = C(1);
          const G = {
            fontStyle: "normal",
            fontWeight: "normal",
            fillColor: "#000000"
          }, B = "http://www.w3.org/XML/1998/namespace", F = "http://www.w3.org/1999/xlink", f = ["butt", "round", "square"], d = ["miter", "round", "bevel"], r = function(S, s = "", i = !1) {
            if (URL.createObjectURL && typeof Blob < "u" && !i)
              return URL.createObjectURL(new Blob([S], {
                type: s
              }));
            const w = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            let b = `data:${s};base64,`;
            for (let c = 0, L = S.length; c < L; c += 3) {
              const x = S[c] & 255, z = S[c + 1] & 255, J = S[c + 2] & 255, M = x >> 2, Y = (x & 3) << 4 | z >> 4, tt = c + 1 < L ? (z & 15) << 2 | J >> 6 : 64, q = c + 2 < L ? J & 63 : 64;
              b += w[M] + w[Y] + w[tt] + w[q];
            }
            return b;
          }, I = function() {
            const S = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), s = 12, i = new Int32Array(256);
            for (let J = 0; J < 256; J++) {
              let M = J;
              for (let Y = 0; Y < 8; Y++)
                M = M & 1 ? 3988292384 ^ M >> 1 & 2147483647 : M >> 1 & 2147483647;
              i[J] = M;
            }
            function w(J, M, Y) {
              let tt = -1;
              for (let q = M; q < Y; q++) {
                const U = (tt ^ J[q]) & 255, at = i[U];
                tt = tt >>> 8 ^ at;
              }
              return tt ^ -1;
            }
            function b(J, M, Y, tt) {
              let q = tt;
              const U = M.length;
              Y[q] = U >> 24 & 255, Y[q + 1] = U >> 16 & 255, Y[q + 2] = U >> 8 & 255, Y[q + 3] = U & 255, q += 4, Y[q] = J.charCodeAt(0) & 255, Y[q + 1] = J.charCodeAt(1) & 255, Y[q + 2] = J.charCodeAt(2) & 255, Y[q + 3] = J.charCodeAt(3) & 255, q += 4, Y.set(M, q), q += M.length;
              const at = w(Y, tt + 4, q);
              Y[q] = at >> 24 & 255, Y[q + 1] = at >> 16 & 255, Y[q + 2] = at >> 8 & 255, Y[q + 3] = at & 255;
            }
            function c(J, M, Y) {
              let tt = 1, q = 0;
              for (let U = M; U < Y; ++U)
                tt = (tt + (J[U] & 255)) % 65521, q = (q + tt) % 65521;
              return q << 16 | tt;
            }
            function L(J) {
              if (!g.isNodeJS)
                return x(J);
              try {
                const M = parseInt(process.versions.node) >= 8 ? J : Buffer.from(J), Y = require$$5.deflateSync(M, {
                  level: 9
                });
                return Y instanceof Uint8Array ? Y : new Uint8Array(Y);
              } catch (M) {
                (0, g.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + M);
              }
              return x(J);
            }
            function x(J) {
              let M = J.length;
              const Y = 65535, tt = Math.ceil(M / Y), q = new Uint8Array(2 + M + tt * 5 + 4);
              let U = 0;
              q[U++] = 120, q[U++] = 156;
              let at = 0;
              for (; M > Y; )
                q[U++] = 0, q[U++] = 255, q[U++] = 255, q[U++] = 0, q[U++] = 0, q.set(J.subarray(at, at + Y), U), U += Y, at += Y, M -= Y;
              q[U++] = 1, q[U++] = M & 255, q[U++] = M >> 8 & 255, q[U++] = ~M & 65535 & 255, q[U++] = (~M & 65535) >> 8 & 255, q.set(J.subarray(at), U), U += J.length - at;
              const $ = c(J, 0, J.length);
              return q[U++] = $ >> 24 & 255, q[U++] = $ >> 16 & 255, q[U++] = $ >> 8 & 255, q[U++] = $ & 255, q;
            }
            function z(J, M, Y, tt) {
              const q = J.width, U = J.height;
              let at, $, wt;
              const Pt = J.data;
              switch (M) {
                case g.ImageKind.GRAYSCALE_1BPP:
                  $ = 0, at = 1, wt = q + 7 >> 3;
                  break;
                case g.ImageKind.RGB_24BPP:
                  $ = 2, at = 8, wt = q * 3;
                  break;
                case g.ImageKind.RGBA_32BPP:
                  $ = 6, at = 8, wt = q * 4;
                  break;
                default:
                  throw new Error("invalid format");
              }
              const N = new Uint8Array((1 + wt) * U);
              let a = 0, p = 0;
              for (let nt = 0; nt < U; ++nt)
                N[a++] = 0, N.set(Pt.subarray(p, p + wt), a), p += wt, a += wt;
              if (M === g.ImageKind.GRAYSCALE_1BPP && tt) {
                a = 0;
                for (let nt = 0; nt < U; nt++) {
                  a++;
                  for (let _t = 0; _t < wt; _t++)
                    N[a++] ^= 255;
                }
              }
              const l = new Uint8Array([q >> 24 & 255, q >> 16 & 255, q >> 8 & 255, q & 255, U >> 24 & 255, U >> 16 & 255, U >> 8 & 255, U & 255, at, $, 0, 0, 0]), T = L(N), R = S.length + s * 3 + l.length + T.length, H = new Uint8Array(R);
              let K = 0;
              return H.set(S, K), K += S.length, b("IHDR", l, H, K), K += s + l.length, b("IDATA", T, H, K), K += s + T.length, b("IEND", new Uint8Array(0), H, K), r(H, "image/png", Y);
            }
            return function(M, Y, tt) {
              const q = M.kind === void 0 ? g.ImageKind.GRAYSCALE_1BPP : M.kind;
              return z(M, q, Y, tt);
            };
          }();
          class k {
            constructor() {
              this.fontSizeScale = 1, this.fontWeight = G.fontWeight, this.fontSize = 0, this.textMatrix = g.IDENTITY_MATRIX, this.fontMatrix = g.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = g.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = G.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = "";
            }
            clone() {
              return Object.create(this);
            }
            setCurrentPoint(s, i) {
              this.x = s, this.y = i;
            }
          }
          function y(S) {
            let s = [];
            const i = [];
            for (const w of S) {
              if (w.fn === "save") {
                s.push({
                  fnId: 92,
                  fn: "group",
                  items: []
                }), i.push(s), s = s.at(-1).items;
                continue;
              }
              w.fn === "restore" ? s = i.pop() : s.push(w);
            }
            return s;
          }
          function h(S) {
            if (Number.isInteger(S))
              return S.toString();
            const s = S.toFixed(10);
            let i = s.length - 1;
            if (s[i] !== "0")
              return s;
            do
              i--;
            while (s[i] === "0");
            return s.substring(0, s[i] === "." ? i : i + 1);
          }
          function _(S) {
            if (S[4] === 0 && S[5] === 0) {
              if (S[1] === 0 && S[2] === 0)
                return S[0] === 1 && S[3] === 1 ? "" : `scale(${h(S[0])} ${h(S[3])})`;
              if (S[0] === S[3] && S[1] === -S[2]) {
                const s = Math.acos(S[0]) * 180 / Math.PI;
                return `rotate(${h(s)})`;
              }
            } else if (S[0] === 1 && S[1] === 0 && S[2] === 0 && S[3] === 1)
              return `translate(${h(S[4])} ${h(S[5])})`;
            return `matrix(${h(S[0])} ${h(S[1])} ${h(S[2])} ${h(S[3])} ${h(S[4])} ${h(S[5])})`;
          }
          let m = 0, P = 0, A = 0;
          class u {
            constructor(s, i, w = !1) {
              (0, n.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."), this.svgFactory = new n.DOMSVGFactory(), this.current = new k(), this.transformMatrix = g.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = s, this.objs = i, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = /* @__PURE__ */ Object.create(null), this.cssStyle = null, this.forceDataSchema = !!w, this._operatorIdMapping = [];
              for (const b in g.OPS)
                this._operatorIdMapping[g.OPS[b]] = b;
            }
            getObject(s, i = null) {
              return typeof s == "string" ? s.startsWith("g_") ? this.commonObjs.get(s) : this.objs.get(s) : i;
            }
            save() {
              this.transformStack.push(this.transformMatrix);
              const s = this.current;
              this.extraStack.push(s), this.current = s.clone();
            }
            restore() {
              this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.pendingClip = null, this.tgrp = null;
            }
            group(s) {
              this.save(), this.executeOpTree(s), this.restore();
            }
            loadDependencies(s) {
              const i = s.fnArray, w = s.argsArray;
              for (let b = 0, c = i.length; b < c; b++)
                if (i[b] === g.OPS.dependency)
                  for (const L of w[b]) {
                    const x = L.startsWith("g_") ? this.commonObjs : this.objs, z = new Promise((J) => {
                      x.get(L, J);
                    });
                    this.current.dependencies.push(z);
                  }
              return Promise.all(this.current.dependencies);
            }
            transform(s, i, w, b, c, L) {
              const x = [s, i, w, b, c, L];
              this.transformMatrix = g.Util.transform(this.transformMatrix, x), this.tgrp = null;
            }
            getSVG(s, i) {
              this.viewport = i;
              const w = this._initialize(i);
              return this.loadDependencies(s).then(() => (this.transformMatrix = g.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(s)), w));
            }
            convertOpList(s) {
              const i = this._operatorIdMapping, w = s.argsArray, b = s.fnArray, c = [];
              for (let L = 0, x = b.length; L < x; L++) {
                const z = b[L];
                c.push({
                  fnId: z,
                  fn: i[z],
                  args: w[L]
                });
              }
              return y(c);
            }
            executeOpTree(s) {
              for (const i of s) {
                const w = i.fn, b = i.fnId, c = i.args;
                switch (b | 0) {
                  case g.OPS.beginText:
                    this.beginText();
                    break;
                  case g.OPS.dependency:
                    break;
                  case g.OPS.setLeading:
                    this.setLeading(c);
                    break;
                  case g.OPS.setLeadingMoveText:
                    this.setLeadingMoveText(c[0], c[1]);
                    break;
                  case g.OPS.setFont:
                    this.setFont(c);
                    break;
                  case g.OPS.showText:
                    this.showText(c[0]);
                    break;
                  case g.OPS.showSpacedText:
                    this.showText(c[0]);
                    break;
                  case g.OPS.endText:
                    this.endText();
                    break;
                  case g.OPS.moveText:
                    this.moveText(c[0], c[1]);
                    break;
                  case g.OPS.setCharSpacing:
                    this.setCharSpacing(c[0]);
                    break;
                  case g.OPS.setWordSpacing:
                    this.setWordSpacing(c[0]);
                    break;
                  case g.OPS.setHScale:
                    this.setHScale(c[0]);
                    break;
                  case g.OPS.setTextMatrix:
                    this.setTextMatrix(c[0], c[1], c[2], c[3], c[4], c[5]);
                    break;
                  case g.OPS.setTextRise:
                    this.setTextRise(c[0]);
                    break;
                  case g.OPS.setTextRenderingMode:
                    this.setTextRenderingMode(c[0]);
                    break;
                  case g.OPS.setLineWidth:
                    this.setLineWidth(c[0]);
                    break;
                  case g.OPS.setLineJoin:
                    this.setLineJoin(c[0]);
                    break;
                  case g.OPS.setLineCap:
                    this.setLineCap(c[0]);
                    break;
                  case g.OPS.setMiterLimit:
                    this.setMiterLimit(c[0]);
                    break;
                  case g.OPS.setFillRGBColor:
                    this.setFillRGBColor(c[0], c[1], c[2]);
                    break;
                  case g.OPS.setStrokeRGBColor:
                    this.setStrokeRGBColor(c[0], c[1], c[2]);
                    break;
                  case g.OPS.setStrokeColorN:
                    this.setStrokeColorN(c);
                    break;
                  case g.OPS.setFillColorN:
                    this.setFillColorN(c);
                    break;
                  case g.OPS.shadingFill:
                    this.shadingFill(c[0]);
                    break;
                  case g.OPS.setDash:
                    this.setDash(c[0], c[1]);
                    break;
                  case g.OPS.setRenderingIntent:
                    this.setRenderingIntent(c[0]);
                    break;
                  case g.OPS.setFlatness:
                    this.setFlatness(c[0]);
                    break;
                  case g.OPS.setGState:
                    this.setGState(c[0]);
                    break;
                  case g.OPS.fill:
                    this.fill();
                    break;
                  case g.OPS.eoFill:
                    this.eoFill();
                    break;
                  case g.OPS.stroke:
                    this.stroke();
                    break;
                  case g.OPS.fillStroke:
                    this.fillStroke();
                    break;
                  case g.OPS.eoFillStroke:
                    this.eoFillStroke();
                    break;
                  case g.OPS.clip:
                    this.clip("nonzero");
                    break;
                  case g.OPS.eoClip:
                    this.clip("evenodd");
                    break;
                  case g.OPS.paintSolidColorImageMask:
                    this.paintSolidColorImageMask();
                    break;
                  case g.OPS.paintImageXObject:
                    this.paintImageXObject(c[0]);
                    break;
                  case g.OPS.paintInlineImageXObject:
                    this.paintInlineImageXObject(c[0]);
                    break;
                  case g.OPS.paintImageMaskXObject:
                    this.paintImageMaskXObject(c[0]);
                    break;
                  case g.OPS.paintFormXObjectBegin:
                    this.paintFormXObjectBegin(c[0], c[1]);
                    break;
                  case g.OPS.paintFormXObjectEnd:
                    this.paintFormXObjectEnd();
                    break;
                  case g.OPS.closePath:
                    this.closePath();
                    break;
                  case g.OPS.closeStroke:
                    this.closeStroke();
                    break;
                  case g.OPS.closeFillStroke:
                    this.closeFillStroke();
                    break;
                  case g.OPS.closeEOFillStroke:
                    this.closeEOFillStroke();
                    break;
                  case g.OPS.nextLine:
                    this.nextLine();
                    break;
                  case g.OPS.transform:
                    this.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
                    break;
                  case g.OPS.constructPath:
                    this.constructPath(c[0], c[1]);
                    break;
                  case g.OPS.endPath:
                    this.endPath();
                    break;
                  case 92:
                    this.group(i.items);
                    break;
                  default:
                    (0, g.warn)(`Unimplemented operator ${w}`);
                    break;
                }
              }
            }
            setWordSpacing(s) {
              this.current.wordSpacing = s;
            }
            setCharSpacing(s) {
              this.current.charSpacing = s;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            setTextMatrix(s, i, w, b, c, L) {
              const x = this.current;
              x.textMatrix = x.lineMatrix = [s, i, w, b, c, L], x.textMatrixScale = Math.hypot(s, i), x.x = x.lineX = 0, x.y = x.lineY = 0, x.xcoords = [], x.ycoords = [], x.tspan = this.svgFactory.createElement("svg:tspan"), x.tspan.setAttributeNS(null, "font-family", x.fontFamily), x.tspan.setAttributeNS(null, "font-size", `${h(x.fontSize)}px`), x.tspan.setAttributeNS(null, "y", h(-x.y)), x.txtElement = this.svgFactory.createElement("svg:text"), x.txtElement.append(x.tspan);
            }
            beginText() {
              const s = this.current;
              s.x = s.lineX = 0, s.y = s.lineY = 0, s.textMatrix = g.IDENTITY_MATRIX, s.lineMatrix = g.IDENTITY_MATRIX, s.textMatrixScale = 1, s.tspan = this.svgFactory.createElement("svg:tspan"), s.txtElement = this.svgFactory.createElement("svg:text"), s.txtgrp = this.svgFactory.createElement("svg:g"), s.xcoords = [], s.ycoords = [];
            }
            moveText(s, i) {
              const w = this.current;
              w.x = w.lineX += s, w.y = w.lineY += i, w.xcoords = [], w.ycoords = [], w.tspan = this.svgFactory.createElement("svg:tspan"), w.tspan.setAttributeNS(null, "font-family", w.fontFamily), w.tspan.setAttributeNS(null, "font-size", `${h(w.fontSize)}px`), w.tspan.setAttributeNS(null, "y", h(-w.y));
            }
            showText(s) {
              const i = this.current, w = i.font, b = i.fontSize;
              if (b === 0)
                return;
              const c = i.fontSizeScale, L = i.charSpacing, x = i.wordSpacing, z = i.fontDirection, J = i.textHScale * z, M = w.vertical, Y = M ? 1 : -1, tt = w.defaultVMetrics, q = b * i.fontMatrix[0];
              let U = 0;
              for (const wt of s) {
                if (wt === null) {
                  U += z * x;
                  continue;
                } else if (typeof wt == "number") {
                  U += Y * wt * b / 1e3;
                  continue;
                }
                const Pt = (wt.isSpace ? x : 0) + L, N = wt.fontChar;
                let a, p, l = wt.width;
                if (M) {
                  let R;
                  const H = wt.vmetric || tt;
                  R = wt.vmetric ? H[1] : l * 0.5, R = -R * q;
                  const K = H[2] * q;
                  l = H ? -H[0] : l, a = R / c, p = (U + K) / c;
                } else
                  a = U / c, p = 0;
                (wt.isInFont || w.missingFile) && (i.xcoords.push(i.x + a), M && i.ycoords.push(-i.y + p), i.tspan.textContent += N);
                const T = M ? l * q - Pt * z : l * q + Pt * z;
                U += T;
              }
              i.tspan.setAttributeNS(null, "x", i.xcoords.map(h).join(" ")), M ? i.tspan.setAttributeNS(null, "y", i.ycoords.map(h).join(" ")) : i.tspan.setAttributeNS(null, "y", h(-i.y)), M ? i.y -= U : i.x += U * J, i.tspan.setAttributeNS(null, "font-family", i.fontFamily), i.tspan.setAttributeNS(null, "font-size", `${h(i.fontSize)}px`), i.fontStyle !== G.fontStyle && i.tspan.setAttributeNS(null, "font-style", i.fontStyle), i.fontWeight !== G.fontWeight && i.tspan.setAttributeNS(null, "font-weight", i.fontWeight);
              const at = i.textRenderingMode & g.TextRenderingMode.FILL_STROKE_MASK;
              if (at === g.TextRenderingMode.FILL || at === g.TextRenderingMode.FILL_STROKE ? (i.fillColor !== G.fillColor && i.tspan.setAttributeNS(null, "fill", i.fillColor), i.fillAlpha < 1 && i.tspan.setAttributeNS(null, "fill-opacity", i.fillAlpha)) : i.textRenderingMode === g.TextRenderingMode.ADD_TO_PATH ? i.tspan.setAttributeNS(null, "fill", "transparent") : i.tspan.setAttributeNS(null, "fill", "none"), at === g.TextRenderingMode.STROKE || at === g.TextRenderingMode.FILL_STROKE) {
                const wt = 1 / (i.textMatrixScale || 1);
                this._setStrokeAttributes(i.tspan, wt);
              }
              let $ = i.textMatrix;
              i.textRise !== 0 && ($ = $.slice(), $[5] += i.textRise), i.txtElement.setAttributeNS(null, "transform", `${_($)} scale(${h(J)}, -1)`), i.txtElement.setAttributeNS(B, "xml:space", "preserve"), i.txtElement.append(i.tspan), i.txtgrp.append(i.txtElement), this._ensureTransformGroup().append(i.txtElement);
            }
            setLeadingMoveText(s, i) {
              this.setLeading(-i), this.moveText(s, i);
            }
            addFontStyle(s) {
              if (!s.data)
                throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
              this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.append(this.cssStyle));
              const i = r(s.data, s.mimetype, this.forceDataSchema);
              this.cssStyle.textContent += `@font-face { font-family: "${s.loadedName}"; src: url(${i}); }
`;
            }
            setFont(s) {
              const i = this.current, w = this.commonObjs.get(s[0]);
              let b = s[1];
              i.font = w, this.embedFonts && !w.missingFile && !this.embeddedFonts[w.loadedName] && (this.addFontStyle(w), this.embeddedFonts[w.loadedName] = w), i.fontMatrix = w.fontMatrix || g.FONT_IDENTITY_MATRIX;
              let c = "normal";
              w.black ? c = "900" : w.bold && (c = "bold");
              const L = w.italic ? "italic" : "normal";
              b < 0 ? (b = -b, i.fontDirection = -1) : i.fontDirection = 1, i.fontSize = b, i.fontFamily = w.loadedName, i.fontWeight = c, i.fontStyle = L, i.tspan = this.svgFactory.createElement("svg:tspan"), i.tspan.setAttributeNS(null, "y", h(-i.y)), i.xcoords = [], i.ycoords = [];
            }
            endText() {
              var i;
              const s = this.current;
              s.textRenderingMode & g.TextRenderingMode.ADD_TO_PATH_FLAG && ((i = s.txtElement) != null && i.hasChildNodes()) && (s.element = s.txtElement, this.clip("nonzero"), this.endPath());
            }
            setLineWidth(s) {
              s > 0 && (this.current.lineWidth = s);
            }
            setLineCap(s) {
              this.current.lineCap = f[s];
            }
            setLineJoin(s) {
              this.current.lineJoin = d[s];
            }
            setMiterLimit(s) {
              this.current.miterLimit = s;
            }
            setStrokeAlpha(s) {
              this.current.strokeAlpha = s;
            }
            setStrokeRGBColor(s, i, w) {
              this.current.strokeColor = g.Util.makeHexColor(s, i, w);
            }
            setFillAlpha(s) {
              this.current.fillAlpha = s;
            }
            setFillRGBColor(s, i, w) {
              this.current.fillColor = g.Util.makeHexColor(s, i, w), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = [];
            }
            setStrokeColorN(s) {
              this.current.strokeColor = this._makeColorN_Pattern(s);
            }
            setFillColorN(s) {
              this.current.fillColor = this._makeColorN_Pattern(s);
            }
            shadingFill(s) {
              const {
                width: i,
                height: w
              } = this.viewport, b = g.Util.inverseTransform(this.transformMatrix), [c, L, x, z] = g.Util.getAxialAlignedBoundingBox([0, 0, i, w], b), J = this.svgFactory.createElement("svg:rect");
              J.setAttributeNS(null, "x", c), J.setAttributeNS(null, "y", L), J.setAttributeNS(null, "width", x - c), J.setAttributeNS(null, "height", z - L), J.setAttributeNS(null, "fill", this._makeShadingPattern(s)), this.current.fillAlpha < 1 && J.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().append(J);
            }
            _makeColorN_Pattern(s) {
              return s[0] === "TilingPattern" ? this._makeTilingPattern(s) : this._makeShadingPattern(s);
            }
            _makeTilingPattern(s) {
              const i = s[1], w = s[2], b = s[3] || g.IDENTITY_MATRIX, [c, L, x, z] = s[4], J = s[5], M = s[6], Y = s[7], tt = `shading${A++}`, [q, U, at, $] = g.Util.normalizeRect([...g.Util.applyTransform([c, L], b), ...g.Util.applyTransform([x, z], b)]), [wt, Pt] = g.Util.singularValueDecompose2dScale(b), N = J * wt, a = M * Pt, p = this.svgFactory.createElement("svg:pattern");
              p.setAttributeNS(null, "id", tt), p.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), p.setAttributeNS(null, "width", N), p.setAttributeNS(null, "height", a), p.setAttributeNS(null, "x", `${q}`), p.setAttributeNS(null, "y", `${U}`);
              const l = this.svg, T = this.transformMatrix, R = this.current.fillColor, H = this.current.strokeColor, K = this.svgFactory.create(at - q, $ - U);
              if (this.svg = K, this.transformMatrix = b, Y === 2) {
                const nt = g.Util.makeHexColor(...i);
                this.current.fillColor = nt, this.current.strokeColor = nt;
              }
              return this.executeOpTree(this.convertOpList(w)), this.svg = l, this.transformMatrix = T, this.current.fillColor = R, this.current.strokeColor = H, p.append(K.childNodes[0]), this.defs.append(p), `url(#${tt})`;
            }
            _makeShadingPattern(s) {
              switch (typeof s == "string" && (s = this.objs.get(s)), s[0]) {
                case "RadialAxial":
                  const i = `shading${A++}`, w = s[3];
                  let b;
                  switch (s[1]) {
                    case "axial":
                      const c = s[4], L = s[5];
                      b = this.svgFactory.createElement("svg:linearGradient"), b.setAttributeNS(null, "id", i), b.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), b.setAttributeNS(null, "x1", c[0]), b.setAttributeNS(null, "y1", c[1]), b.setAttributeNS(null, "x2", L[0]), b.setAttributeNS(null, "y2", L[1]);
                      break;
                    case "radial":
                      const x = s[4], z = s[5], J = s[6], M = s[7];
                      b = this.svgFactory.createElement("svg:radialGradient"), b.setAttributeNS(null, "id", i), b.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), b.setAttributeNS(null, "cx", z[0]), b.setAttributeNS(null, "cy", z[1]), b.setAttributeNS(null, "r", M), b.setAttributeNS(null, "fx", x[0]), b.setAttributeNS(null, "fy", x[1]), b.setAttributeNS(null, "fr", J);
                      break;
                    default:
                      throw new Error(`Unknown RadialAxial type: ${s[1]}`);
                  }
                  for (const c of w) {
                    const L = this.svgFactory.createElement("svg:stop");
                    L.setAttributeNS(null, "offset", c[0]), L.setAttributeNS(null, "stop-color", c[1]), b.append(L);
                  }
                  return this.defs.append(b), `url(#${i})`;
                case "Mesh":
                  return (0, g.warn)("Unimplemented pattern Mesh"), null;
                case "Dummy":
                  return "hotpink";
                default:
                  throw new Error(`Unknown IR type: ${s[0]}`);
              }
            }
            setDash(s, i) {
              this.current.dashArray = s, this.current.dashPhase = i;
            }
            constructPath(s, i) {
              const w = this.current;
              let b = w.x, c = w.y, L = [], x = 0;
              for (const z of s)
                switch (z | 0) {
                  case g.OPS.rectangle:
                    b = i[x++], c = i[x++];
                    const J = i[x++], M = i[x++], Y = b + J, tt = c + M;
                    L.push("M", h(b), h(c), "L", h(Y), h(c), "L", h(Y), h(tt), "L", h(b), h(tt), "Z");
                    break;
                  case g.OPS.moveTo:
                    b = i[x++], c = i[x++], L.push("M", h(b), h(c));
                    break;
                  case g.OPS.lineTo:
                    b = i[x++], c = i[x++], L.push("L", h(b), h(c));
                    break;
                  case g.OPS.curveTo:
                    b = i[x + 4], c = i[x + 5], L.push("C", h(i[x]), h(i[x + 1]), h(i[x + 2]), h(i[x + 3]), h(b), h(c)), x += 6;
                    break;
                  case g.OPS.curveTo2:
                    L.push("C", h(b), h(c), h(i[x]), h(i[x + 1]), h(i[x + 2]), h(i[x + 3])), b = i[x + 2], c = i[x + 3], x += 4;
                    break;
                  case g.OPS.curveTo3:
                    b = i[x + 2], c = i[x + 3], L.push("C", h(i[x]), h(i[x + 1]), h(b), h(c), h(b), h(c)), x += 4;
                    break;
                  case g.OPS.closePath:
                    L.push("Z");
                    break;
                }
              L = L.join(" "), w.path && s.length > 0 && s[0] !== g.OPS.rectangle && s[0] !== g.OPS.moveTo ? L = w.path.getAttributeNS(null, "d") + L : (w.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().append(w.path)), w.path.setAttributeNS(null, "d", L), w.path.setAttributeNS(null, "fill", "none"), w.element = w.path, w.setCurrentPoint(b, c);
            }
            endPath() {
              const s = this.current;
              if (s.path = null, !this.pendingClip)
                return;
              if (!s.element) {
                this.pendingClip = null;
                return;
              }
              const i = `clippath${m++}`, w = this.svgFactory.createElement("svg:clipPath");
              w.setAttributeNS(null, "id", i), w.setAttributeNS(null, "transform", _(this.transformMatrix));
              const b = s.element.cloneNode(!0);
              if (this.pendingClip === "evenodd" ? b.setAttributeNS(null, "clip-rule", "evenodd") : b.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, w.append(b), this.defs.append(w), s.activeClipUrl) {
                s.clipGroup = null;
                for (const c of this.extraStack)
                  c.clipGroup = null;
                w.setAttributeNS(null, "clip-path", s.activeClipUrl);
              }
              s.activeClipUrl = `url(#${i})`, this.tgrp = null;
            }
            clip(s) {
              this.pendingClip = s;
            }
            closePath() {
              const s = this.current;
              if (s.path) {
                const i = `${s.path.getAttributeNS(null, "d")}Z`;
                s.path.setAttributeNS(null, "d", i);
              }
            }
            setLeading(s) {
              this.current.leading = -s;
            }
            setTextRise(s) {
              this.current.textRise = s;
            }
            setTextRenderingMode(s) {
              this.current.textRenderingMode = s;
            }
            setHScale(s) {
              this.current.textHScale = s / 100;
            }
            setRenderingIntent(s) {
            }
            setFlatness(s) {
            }
            setGState(s) {
              for (const [i, w] of s)
                switch (i) {
                  case "LW":
                    this.setLineWidth(w);
                    break;
                  case "LC":
                    this.setLineCap(w);
                    break;
                  case "LJ":
                    this.setLineJoin(w);
                    break;
                  case "ML":
                    this.setMiterLimit(w);
                    break;
                  case "D":
                    this.setDash(w[0], w[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(w);
                    break;
                  case "FL":
                    this.setFlatness(w);
                    break;
                  case "Font":
                    this.setFont(w);
                    break;
                  case "CA":
                    this.setStrokeAlpha(w);
                    break;
                  case "ca":
                    this.setFillAlpha(w);
                    break;
                  default:
                    (0, g.warn)(`Unimplemented graphic state operator ${i}`);
                    break;
                }
            }
            fill() {
              const s = this.current;
              s.element && (s.element.setAttributeNS(null, "fill", s.fillColor), s.element.setAttributeNS(null, "fill-opacity", s.fillAlpha), this.endPath());
            }
            stroke() {
              const s = this.current;
              s.element && (this._setStrokeAttributes(s.element), s.element.setAttributeNS(null, "fill", "none"), this.endPath());
            }
            _setStrokeAttributes(s, i = 1) {
              const w = this.current;
              let b = w.dashArray;
              i !== 1 && b.length > 0 && (b = b.map(function(c) {
                return i * c;
              })), s.setAttributeNS(null, "stroke", w.strokeColor), s.setAttributeNS(null, "stroke-opacity", w.strokeAlpha), s.setAttributeNS(null, "stroke-miterlimit", h(w.miterLimit)), s.setAttributeNS(null, "stroke-linecap", w.lineCap), s.setAttributeNS(null, "stroke-linejoin", w.lineJoin), s.setAttributeNS(null, "stroke-width", h(i * w.lineWidth) + "px"), s.setAttributeNS(null, "stroke-dasharray", b.map(h).join(" ")), s.setAttributeNS(null, "stroke-dashoffset", h(i * w.dashPhase) + "px");
            }
            eoFill() {
              var s;
              (s = this.current.element) == null || s.setAttributeNS(null, "fill-rule", "evenodd"), this.fill();
            }
            fillStroke() {
              this.stroke(), this.fill();
            }
            eoFillStroke() {
              var s;
              (s = this.current.element) == null || s.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke();
            }
            closeStroke() {
              this.closePath(), this.stroke();
            }
            closeFillStroke() {
              this.closePath(), this.fillStroke();
            }
            closeEOFillStroke() {
              this.closePath(), this.eoFillStroke();
            }
            paintSolidColorImageMask() {
              const s = this.svgFactory.createElement("svg:rect");
              s.setAttributeNS(null, "x", "0"), s.setAttributeNS(null, "y", "0"), s.setAttributeNS(null, "width", "1px"), s.setAttributeNS(null, "height", "1px"), s.setAttributeNS(null, "fill", this.current.fillColor), this._ensureTransformGroup().append(s);
            }
            paintImageXObject(s) {
              const i = this.getObject(s);
              if (!i) {
                (0, g.warn)(`Dependent image with object ID ${s} is not ready yet`);
                return;
              }
              this.paintInlineImageXObject(i);
            }
            paintInlineImageXObject(s, i) {
              const w = s.width, b = s.height, c = I(s, this.forceDataSchema, !!i), L = this.svgFactory.createElement("svg:rect");
              L.setAttributeNS(null, "x", "0"), L.setAttributeNS(null, "y", "0"), L.setAttributeNS(null, "width", h(w)), L.setAttributeNS(null, "height", h(b)), this.current.element = L, this.clip("nonzero");
              const x = this.svgFactory.createElement("svg:image");
              x.setAttributeNS(F, "xlink:href", c), x.setAttributeNS(null, "x", "0"), x.setAttributeNS(null, "y", h(-b)), x.setAttributeNS(null, "width", h(w) + "px"), x.setAttributeNS(null, "height", h(b) + "px"), x.setAttributeNS(null, "transform", `scale(${h(1 / w)} ${h(-1 / b)})`), i ? i.append(x) : this._ensureTransformGroup().append(x);
            }
            paintImageMaskXObject(s) {
              const i = this.getObject(s.data, s);
              if (i.bitmap) {
                (0, g.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
                return;
              }
              const w = this.current, b = i.width, c = i.height, L = w.fillColor;
              w.maskId = `mask${P++}`;
              const x = this.svgFactory.createElement("svg:mask");
              x.setAttributeNS(null, "id", w.maskId);
              const z = this.svgFactory.createElement("svg:rect");
              z.setAttributeNS(null, "x", "0"), z.setAttributeNS(null, "y", "0"), z.setAttributeNS(null, "width", h(b)), z.setAttributeNS(null, "height", h(c)), z.setAttributeNS(null, "fill", L), z.setAttributeNS(null, "mask", `url(#${w.maskId})`), this.defs.append(x), this._ensureTransformGroup().append(z), this.paintInlineImageXObject(i, x);
            }
            paintFormXObjectBegin(s, i) {
              if (Array.isArray(s) && s.length === 6 && this.transform(s[0], s[1], s[2], s[3], s[4], s[5]), i) {
                const w = i[2] - i[0], b = i[3] - i[1], c = this.svgFactory.createElement("svg:rect");
                c.setAttributeNS(null, "x", i[0]), c.setAttributeNS(null, "y", i[1]), c.setAttributeNS(null, "width", h(w)), c.setAttributeNS(null, "height", h(b)), this.current.element = c, this.clip("nonzero"), this.endPath();
              }
            }
            paintFormXObjectEnd() {
            }
            _initialize(s) {
              const i = this.svgFactory.create(s.width, s.height), w = this.svgFactory.createElement("svg:defs");
              i.append(w), this.defs = w;
              const b = this.svgFactory.createElement("svg:g");
              return b.setAttributeNS(null, "transform", _(s.transform)), i.append(b), this.svg = b, i;
            }
            _ensureClipGroup() {
              if (!this.current.clipGroup) {
                const s = this.svgFactory.createElement("svg:g");
                s.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.append(s), this.current.clipGroup = s;
              }
              return this.current.clipGroup;
            }
            _ensureTransformGroup() {
              return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", _(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().append(this.tgrp) : this.svg.append(this.tgrp)), this.tgrp;
            }
          }
          e.SVGGraphics = u;
        },
        /* 25 */
        /***/
        (E, e) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.XfaText = void 0;
          class C {
            static textContent(g) {
              const G = [], B = {
                items: G,
                styles: /* @__PURE__ */ Object.create(null)
              };
              function F(f) {
                var I;
                if (!f)
                  return;
                let d = null;
                const r = f.name;
                if (r === "#text")
                  d = f.value;
                else if (C.shouldBuildText(r))
                  (I = f == null ? void 0 : f.attributes) != null && I.textContent ? d = f.attributes.textContent : f.value && (d = f.value);
                else
                  return;
                if (d !== null && G.push({
                  str: d
                }), !!f.children)
                  for (const k of f.children)
                    F(k);
              }
              return F(g), B;
            }
            static shouldBuildText(g) {
              return !(g === "textarea" || g === "input" || g === "option" || g === "select");
            }
          }
          e.XfaText = C;
        },
        /* 26 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.TextLayerRenderTask = void 0, e.renderTextLayer = _, e.updateTextLayer = m;
          var n = C(1), g = C(6);
          const G = 1e5, B = 30, F = 0.8, f = /* @__PURE__ */ new Map();
          function d(P, A) {
            let u;
            if (A && n.FeatureTest.isOffscreenCanvasSupported)
              u = new OffscreenCanvas(P, P).getContext("2d", {
                alpha: !1
              });
            else {
              const S = document.createElement("canvas");
              S.width = S.height = P, u = S.getContext("2d", {
                alpha: !1
              });
            }
            return u;
          }
          function r(P, A) {
            const u = f.get(P);
            if (u)
              return u;
            const S = d(B, A);
            S.font = `${B}px ${P}`;
            const s = S.measureText("");
            let i = s.fontBoundingBoxAscent, w = Math.abs(s.fontBoundingBoxDescent);
            if (i) {
              const c = i / (i + w);
              return f.set(P, c), S.canvas.width = S.canvas.height = 0, c;
            }
            S.strokeStyle = "red", S.clearRect(0, 0, B, B), S.strokeText("g", 0, 0);
            let b = S.getImageData(0, 0, B, B).data;
            w = 0;
            for (let c = b.length - 1 - 3; c >= 0; c -= 4)
              if (b[c] > 0) {
                w = Math.ceil(c / 4 / B);
                break;
              }
            S.clearRect(0, 0, B, B), S.strokeText("A", 0, B), b = S.getImageData(0, 0, B, B).data, i = 0;
            for (let c = 0, L = b.length; c < L; c += 4)
              if (b[c] > 0) {
                i = B - Math.floor(c / 4 / B);
                break;
              }
            if (S.canvas.width = S.canvas.height = 0, i) {
              const c = i / (i + w);
              return f.set(P, c), c;
            }
            return f.set(P, F), F;
          }
          function I(P, A, u) {
            const S = document.createElement("span"), s = {
              angle: 0,
              canvasWidth: 0,
              hasText: A.str !== "",
              hasEOL: A.hasEOL,
              fontSize: 0
            };
            P._textDivs.push(S);
            const i = n.Util.transform(P._transform, A.transform);
            let w = Math.atan2(i[1], i[0]);
            const b = u[A.fontName];
            b.vertical && (w += Math.PI / 2);
            const c = Math.hypot(i[2], i[3]), L = c * r(b.fontFamily, P._isOffscreenCanvasSupported);
            let x, z;
            w === 0 ? (x = i[4], z = i[5] - L) : (x = i[4] + L * Math.sin(w), z = i[5] - L * Math.cos(w));
            const J = "calc(var(--scale-factor)*", M = S.style;
            P._container === P._rootContainer ? (M.left = `${(100 * x / P._pageWidth).toFixed(2)}%`, M.top = `${(100 * z / P._pageHeight).toFixed(2)}%`) : (M.left = `${J}${x.toFixed(2)}px)`, M.top = `${J}${z.toFixed(2)}px)`), M.fontSize = `${J}${c.toFixed(2)}px)`, M.fontFamily = b.fontFamily, s.fontSize = c, S.setAttribute("role", "presentation"), S.textContent = A.str, S.dir = A.dir, P._fontInspectorEnabled && (S.dataset.fontName = A.fontName), w !== 0 && (s.angle = w * (180 / Math.PI));
            let Y = !1;
            if (A.str.length > 1)
              Y = !0;
            else if (A.str !== " " && A.transform[0] !== A.transform[3]) {
              const tt = Math.abs(A.transform[0]), q = Math.abs(A.transform[3]);
              tt !== q && Math.max(tt, q) / Math.min(tt, q) > 1.5 && (Y = !0);
            }
            Y && (s.canvasWidth = b.vertical ? A.height : A.width), P._textDivProperties.set(S, s), P._isReadableStream && P._layoutText(S);
          }
          function k(P) {
            const {
              div: A,
              scale: u,
              properties: S,
              ctx: s,
              prevFontSize: i,
              prevFontFamily: w
            } = P, {
              style: b
            } = A;
            let c = "";
            if (S.canvasWidth !== 0 && S.hasText) {
              const {
                fontFamily: L
              } = b, {
                canvasWidth: x,
                fontSize: z
              } = S;
              (i !== z || w !== L) && (s.font = `${z * u}px ${L}`, P.prevFontSize = z, P.prevFontFamily = L);
              const {
                width: J
              } = s.measureText(A.textContent);
              J > 0 && (c = `scaleX(${x * u / J})`);
            }
            S.angle !== 0 && (c = `rotate(${S.angle}deg) ${c}`), c.length > 0 && (b.transform = c);
          }
          function y(P) {
            if (P._canceled)
              return;
            const A = P._textDivs, u = P._capability;
            if (A.length > G) {
              u.resolve();
              return;
            }
            if (!P._isReadableStream)
              for (const s of A)
                P._layoutText(s);
            u.resolve();
          }
          class h {
            constructor({
              textContentSource: A,
              container: u,
              viewport: S,
              textDivs: s,
              textDivProperties: i,
              textContentItemsStr: w,
              isOffscreenCanvasSupported: b
            }) {
              var J;
              this._textContentSource = A, this._isReadableStream = A instanceof ReadableStream, this._container = this._rootContainer = u, this._textDivs = s || [], this._textContentItemsStr = w || [], this._isOffscreenCanvasSupported = b, this._fontInspectorEnabled = !!((J = globalThis.FontInspector) != null && J.enabled), this._reader = null, this._textDivProperties = i || /* @__PURE__ */ new WeakMap(), this._canceled = !1, this._capability = new n.PromiseCapability(), this._layoutTextParams = {
                prevFontSize: null,
                prevFontFamily: null,
                div: null,
                scale: S.scale * (globalThis.devicePixelRatio || 1),
                properties: null,
                ctx: d(0, b)
              };
              const {
                pageWidth: c,
                pageHeight: L,
                pageX: x,
                pageY: z
              } = S.rawDims;
              this._transform = [1, 0, 0, -1, -x, z + L], this._pageWidth = c, this._pageHeight = L, (0, g.setLayerDimensions)(u, S), this._capability.promise.finally(() => {
                this._layoutTextParams = null;
              }).catch(() => {
              });
            }
            get promise() {
              return this._capability.promise;
            }
            cancel() {
              this._canceled = !0, this._reader && (this._reader.cancel(new n.AbortException("TextLayer task cancelled.")).catch(() => {
              }), this._reader = null), this._capability.reject(new n.AbortException("TextLayer task cancelled."));
            }
            _processItems(A, u) {
              for (const S of A) {
                if (S.str === void 0) {
                  if (S.type === "beginMarkedContentProps" || S.type === "beginMarkedContent") {
                    const s = this._container;
                    this._container = document.createElement("span"), this._container.classList.add("markedContent"), S.id !== null && this._container.setAttribute("id", `${S.id}`), s.append(this._container);
                  } else
                    S.type === "endMarkedContent" && (this._container = this._container.parentNode);
                  continue;
                }
                this._textContentItemsStr.push(S.str), I(this, S, u);
              }
            }
            _layoutText(A) {
              const u = this._layoutTextParams.properties = this._textDivProperties.get(A);
              if (this._layoutTextParams.div = A, k(this._layoutTextParams), u.hasText && this._container.append(A), u.hasEOL) {
                const S = document.createElement("br");
                S.setAttribute("role", "presentation"), this._container.append(S);
              }
            }
            _render() {
              const A = new n.PromiseCapability();
              let u = /* @__PURE__ */ Object.create(null);
              if (this._isReadableStream) {
                const S = () => {
                  this._reader.read().then(({
                    value: s,
                    done: i
                  }) => {
                    if (i) {
                      A.resolve();
                      return;
                    }
                    Object.assign(u, s.styles), this._processItems(s.items, u), S();
                  }, A.reject);
                };
                this._reader = this._textContentSource.getReader(), S();
              } else if (this._textContentSource) {
                const {
                  items: S,
                  styles: s
                } = this._textContentSource;
                this._processItems(S, s), A.resolve();
              } else
                throw new Error('No "textContentSource" parameter specified.');
              A.promise.then(() => {
                u = null, y(this);
              }, this._capability.reject);
            }
          }
          e.TextLayerRenderTask = h;
          function _(P) {
            !P.textContentSource && (P.textContent || P.textContentStream) && ((0, g.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."), P.textContentSource = P.textContent || P.textContentStream);
            const {
              container: A,
              viewport: u
            } = P, S = getComputedStyle(A), s = S.getPropertyValue("visibility"), i = parseFloat(S.getPropertyValue("--scale-factor"));
            s === "visible" && (!i || Math.abs(i - u.scale) > 1e-5) && console.error("The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.");
            const w = new h(P);
            return w._render(), w;
          }
          function m({
            container: P,
            viewport: A,
            textDivs: u,
            textDivProperties: S,
            isOffscreenCanvasSupported: s,
            mustRotate: i = !0,
            mustRescale: w = !0
          }) {
            if (i && (0, g.setLayerDimensions)(P, {
              rotation: A.rotation
            }), w) {
              const b = d(0, s), L = {
                prevFontSize: null,
                prevFontFamily: null,
                div: null,
                scale: A.scale * (globalThis.devicePixelRatio || 1),
                properties: null,
                ctx: b
              };
              for (const x of u)
                L.properties = S.get(x), L.div = x, k(L);
            }
          }
        },
        /* 27 */
        /***/
        (E, e, C) => {
          var r, I, k, y, h, _, m, P, A, u, S, pi, i, De, b, gi, L, mi;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.AnnotationEditorLayer = void 0;
          var n = C(1), g = C(4), G = C(28), B = C(33), F = C(6), f = C(34);
          const z = class z {
            constructor({
              uiManager: M,
              pageIndex: Y,
              div: tt,
              accessibilityManager: q,
              annotationLayer: U,
              viewport: at,
              l10n: $
            }) {
              O(this, S);
              O(this, i);
              O(this, b);
              O(this, L);
              O(this, r, void 0);
              O(this, I, !1);
              O(this, k, null);
              O(this, y, this.pointerup.bind(this));
              O(this, h, this.pointerdown.bind(this));
              O(this, _, /* @__PURE__ */ new Map());
              O(this, m, !1);
              O(this, P, !1);
              O(this, A, !1);
              O(this, u, void 0);
              const wt = [G.FreeTextEditor, B.InkEditor, f.StampEditor];
              if (!z._initialized) {
                z._initialized = !0;
                for (const Pt of wt)
                  Pt.initialize($);
              }
              M.registerEditorTypes(wt), Q(this, u, M), this.pageIndex = Y, this.div = tt, Q(this, r, q), Q(this, k, U), this.viewport = at, t(this, u).addLayer(this);
            }
            get isEmpty() {
              return t(this, _).size === 0;
            }
            updateToolbar(M) {
              t(this, u).updateToolbar(M);
            }
            updateMode(M = t(this, u).getMode()) {
              W(this, L, mi).call(this), M === n.AnnotationEditorType.INK ? (this.addInkEditorIfNeeded(!1), this.disableClick()) : this.enableClick(), M !== n.AnnotationEditorType.NONE && (this.div.classList.toggle("freeTextEditing", M === n.AnnotationEditorType.FREETEXT), this.div.classList.toggle("inkEditing", M === n.AnnotationEditorType.INK), this.div.classList.toggle("stampEditing", M === n.AnnotationEditorType.STAMP), this.div.hidden = !1);
            }
            addInkEditorIfNeeded(M) {
              if (!M && t(this, u).getMode() !== n.AnnotationEditorType.INK)
                return;
              if (!M) {
                for (const tt of t(this, _).values())
                  if (tt.isEmpty()) {
                    tt.setInBackground();
                    return;
                  }
              }
              W(this, i, De).call(this, {
                offsetX: 0,
                offsetY: 0
              }, !1).setInBackground();
            }
            setEditingState(M) {
              t(this, u).setEditingState(M);
            }
            addCommands(M) {
              t(this, u).addCommands(M);
            }
            enable() {
              this.div.style.pointerEvents = "auto";
              const M = /* @__PURE__ */ new Set();
              for (const tt of t(this, _).values())
                tt.enableEditing(), tt.annotationElementId && M.add(tt.annotationElementId);
              if (!t(this, k))
                return;
              const Y = t(this, k).getEditableAnnotations();
              for (const tt of Y) {
                if (tt.hide(), t(this, u).isDeletedAnnotationElement(tt.data.id) || M.has(tt.data.id))
                  continue;
                const q = this.deserialize(tt);
                q && (this.addOrRebuild(q), q.enableEditing());
              }
            }
            disable() {
              var Y;
              Q(this, A, !0), this.div.style.pointerEvents = "none";
              const M = /* @__PURE__ */ new Set();
              for (const tt of t(this, _).values()) {
                if (tt.disableEditing(), !tt.annotationElementId || tt.serialize() !== null) {
                  M.add(tt.annotationElementId);
                  continue;
                }
                (Y = this.getEditableAnnotation(tt.annotationElementId)) == null || Y.show(), tt.remove();
              }
              if (t(this, k)) {
                const tt = t(this, k).getEditableAnnotations();
                for (const q of tt) {
                  const {
                    id: U
                  } = q.data;
                  M.has(U) || t(this, u).isDeletedAnnotationElement(U) || q.show();
                }
              }
              W(this, L, mi).call(this), this.isEmpty && (this.div.hidden = !0), Q(this, A, !1);
            }
            getEditableAnnotation(M) {
              var Y;
              return ((Y = t(this, k)) == null ? void 0 : Y.getEditableAnnotation(M)) || null;
            }
            setActiveEditor(M) {
              t(this, u).getActive() !== M && t(this, u).setActiveEditor(M);
            }
            enableClick() {
              this.div.addEventListener("pointerdown", t(this, h)), this.div.addEventListener("pointerup", t(this, y));
            }
            disableClick() {
              this.div.removeEventListener("pointerdown", t(this, h)), this.div.removeEventListener("pointerup", t(this, y));
            }
            attach(M) {
              t(this, _).set(M.id, M);
              const {
                annotationElementId: Y
              } = M;
              Y && t(this, u).isDeletedAnnotationElement(Y) && t(this, u).removeDeletedAnnotationElement(M);
            }
            detach(M) {
              var Y;
              t(this, _).delete(M.id), (Y = t(this, r)) == null || Y.removePointerInTextLayer(M.contentDiv), !t(this, A) && M.annotationElementId && t(this, u).addDeletedAnnotationElement(M);
            }
            remove(M) {
              this.detach(M), t(this, u).removeEditor(M), M.div.contains(document.activeElement) && setTimeout(() => {
                t(this, u).focusMainContainer();
              }, 0), M.div.remove(), M.isAttachedToDOM = !1, t(this, P) || this.addInkEditorIfNeeded(!1);
            }
            changeParent(M) {
              var Y;
              M.parent !== this && (M.annotationElementId && (t(this, u).addDeletedAnnotationElement(M.annotationElementId), g.AnnotationEditor.deleteAnnotationElement(M), M.annotationElementId = null), this.attach(M), (Y = M.parent) == null || Y.detach(M), M.setParent(this), M.div && M.isAttachedToDOM && (M.div.remove(), this.div.append(M.div)));
            }
            add(M) {
              if (this.changeParent(M), t(this, u).addEditor(M), this.attach(M), !M.isAttachedToDOM) {
                const Y = M.render();
                this.div.append(Y), M.isAttachedToDOM = !0;
              }
              M.fixAndSetPosition(), M.onceAdded(), t(this, u).addToAnnotationStorage(M);
            }
            moveEditorInDOM(M) {
              var tt;
              if (!M.isAttachedToDOM)
                return;
              const {
                activeElement: Y
              } = document;
              M.div.contains(Y) && (M._focusEventsAllowed = !1, setTimeout(() => {
                M.div.contains(document.activeElement) ? M._focusEventsAllowed = !0 : (M.div.addEventListener("focusin", () => {
                  M._focusEventsAllowed = !0;
                }, {
                  once: !0
                }), Y.focus());
              }, 0)), M._structTreeParentId = (tt = t(this, r)) == null ? void 0 : tt.moveElementInDOM(this.div, M.div, M.contentDiv, !0);
            }
            addOrRebuild(M) {
              M.needsToBeRebuilt() ? M.rebuild() : this.add(M);
            }
            addUndoableEditor(M) {
              const Y = () => M._uiManager.rebuild(M), tt = () => {
                M.remove();
              };
              this.addCommands({
                cmd: Y,
                undo: tt,
                mustExec: !1
              });
            }
            getNextId() {
              return t(this, u).getId();
            }
            pasteEditor(M, Y) {
              t(this, u).updateToolbar(M), t(this, u).updateMode(M);
              const {
                offsetX: tt,
                offsetY: q
              } = W(this, b, gi).call(this), U = this.getNextId(), at = W(this, S, pi).call(this, {
                parent: this,
                id: U,
                x: tt,
                y: q,
                uiManager: t(this, u),
                isCentered: !0,
                ...Y
              });
              at && this.add(at);
            }
            deserialize(M) {
              switch (M.annotationType ?? M.annotationEditorType) {
                case n.AnnotationEditorType.FREETEXT:
                  return G.FreeTextEditor.deserialize(M, this, t(this, u));
                case n.AnnotationEditorType.INK:
                  return B.InkEditor.deserialize(M, this, t(this, u));
                case n.AnnotationEditorType.STAMP:
                  return f.StampEditor.deserialize(M, this, t(this, u));
              }
              return null;
            }
            addNewEditor() {
              W(this, i, De).call(this, W(this, b, gi).call(this), !0);
            }
            setSelected(M) {
              t(this, u).setSelected(M);
            }
            toggleSelected(M) {
              t(this, u).toggleSelected(M);
            }
            isSelected(M) {
              return t(this, u).isSelected(M);
            }
            unselect(M) {
              t(this, u).unselect(M);
            }
            pointerup(M) {
              const {
                isMac: Y
              } = n.FeatureTest.platform;
              if (!(M.button !== 0 || M.ctrlKey && Y) && M.target === this.div && t(this, m)) {
                if (Q(this, m, !1), !t(this, I)) {
                  Q(this, I, !0);
                  return;
                }
                if (t(this, u).getMode() === n.AnnotationEditorType.STAMP) {
                  t(this, u).unselectAll();
                  return;
                }
                W(this, i, De).call(this, M, !1);
              }
            }
            pointerdown(M) {
              if (t(this, m)) {
                Q(this, m, !1);
                return;
              }
              const {
                isMac: Y
              } = n.FeatureTest.platform;
              if (M.button !== 0 || M.ctrlKey && Y || M.target !== this.div)
                return;
              Q(this, m, !0);
              const tt = t(this, u).getActive();
              Q(this, I, !tt || tt.isEmpty());
            }
            findNewParent(M, Y, tt) {
              const q = t(this, u).findParent(Y, tt);
              return q === null || q === this ? !1 : (q.changeParent(M), !0);
            }
            destroy() {
              var M, Y;
              ((M = t(this, u).getActive()) == null ? void 0 : M.parent) === this && (t(this, u).commitOrRemove(), t(this, u).setActiveEditor(null));
              for (const tt of t(this, _).values())
                (Y = t(this, r)) == null || Y.removePointerInTextLayer(tt.contentDiv), tt.setParent(null), tt.isAttachedToDOM = !1, tt.div.remove();
              this.div = null, t(this, _).clear(), t(this, u).removeLayer(this);
            }
            render({
              viewport: M
            }) {
              this.viewport = M, (0, F.setLayerDimensions)(this.div, M);
              for (const Y of t(this, u).getEditors(this.pageIndex))
                this.add(Y);
              this.updateMode();
            }
            update({
              viewport: M
            }) {
              t(this, u).commitOrRemove(), this.viewport = M, (0, F.setLayerDimensions)(this.div, {
                rotation: M.rotation
              }), this.updateMode();
            }
            get pageDimensions() {
              const {
                pageWidth: M,
                pageHeight: Y
              } = this.viewport.rawDims;
              return [M, Y];
            }
          };
          r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), y = new WeakMap(), h = new WeakMap(), _ = new WeakMap(), m = new WeakMap(), P = new WeakMap(), A = new WeakMap(), u = new WeakMap(), S = new WeakSet(), pi = function(M) {
            switch (t(this, u).getMode()) {
              case n.AnnotationEditorType.FREETEXT:
                return new G.FreeTextEditor(M);
              case n.AnnotationEditorType.INK:
                return new B.InkEditor(M);
              case n.AnnotationEditorType.STAMP:
                return new f.StampEditor(M);
            }
            return null;
          }, i = new WeakSet(), De = function(M, Y) {
            const tt = this.getNextId(), q = W(this, S, pi).call(this, {
              parent: this,
              id: tt,
              x: M.offsetX,
              y: M.offsetY,
              uiManager: t(this, u),
              isCentered: Y
            });
            return q && this.add(q), q;
          }, b = new WeakSet(), gi = function() {
            const {
              x: M,
              y: Y,
              width: tt,
              height: q
            } = this.div.getBoundingClientRect(), U = Math.max(0, M), at = Math.max(0, Y), $ = Math.min(window.innerWidth, M + tt), wt = Math.min(window.innerHeight, Y + q), Pt = (U + $) / 2 - M, N = (at + wt) / 2 - Y, [a, p] = this.viewport.rotation % 180 === 0 ? [Pt, N] : [N, Pt];
            return {
              offsetX: a,
              offsetY: p
            };
          }, L = new WeakSet(), mi = function() {
            Q(this, P, !0);
            for (const M of t(this, _).values())
              M.isEmpty() && M.remove();
            Q(this, P, !1);
          }, ee(z, "_initialized", !1);
          let d = z;
          e.AnnotationEditorLayer = d;
        },
        /* 28 */
        /***/
        (E, e, C) => {
          var f, d, r, I, k, y, h, _, m, P, dn, u, fn, s, pn, w, Se, c, _i, x, gn, J, bi;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.FreeTextEditor = void 0;
          var n = C(1), g = C(5), G = C(4), B = C(29);
          const Y = class Y extends G.AnnotationEditor {
            constructor(U) {
              super({
                ...U,
                name: "freeTextEditor"
              });
              O(this, P);
              O(this, u);
              O(this, s);
              O(this, w);
              O(this, c);
              O(this, x);
              O(this, J);
              O(this, f, this.editorDivBlur.bind(this));
              O(this, d, this.editorDivFocus.bind(this));
              O(this, r, this.editorDivInput.bind(this));
              O(this, I, this.editorDivKeydown.bind(this));
              O(this, k, void 0);
              O(this, y, "");
              O(this, h, `${this.id}-editor`);
              O(this, _, void 0);
              O(this, m, null);
              Q(this, k, U.color || Y._defaultColor || G.AnnotationEditor._defaultLineColor), Q(this, _, U.fontSize || Y._defaultFontSize);
            }
            static get _keyboardManager() {
              const U = Y.prototype, at = (Pt) => Pt.isEmpty(), $ = g.AnnotationEditorUIManager.TRANSLATE_SMALL, wt = g.AnnotationEditorUIManager.TRANSLATE_BIG;
              return (0, n.shadow)(this, "_keyboardManager", new g.KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], U.commitOrRemove, {
                bubbles: !0
              }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], U.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], U._translateEmpty, {
                args: [-$, 0],
                checker: at
              }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], U._translateEmpty, {
                args: [-wt, 0],
                checker: at
              }], [["ArrowRight", "mac+ArrowRight"], U._translateEmpty, {
                args: [$, 0],
                checker: at
              }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], U._translateEmpty, {
                args: [wt, 0],
                checker: at
              }], [["ArrowUp", "mac+ArrowUp"], U._translateEmpty, {
                args: [0, -$],
                checker: at
              }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], U._translateEmpty, {
                args: [0, -wt],
                checker: at
              }], [["ArrowDown", "mac+ArrowDown"], U._translateEmpty, {
                args: [0, $],
                checker: at
              }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], U._translateEmpty, {
                args: [0, wt],
                checker: at
              }]]));
            }
            static initialize(U) {
              G.AnnotationEditor.initialize(U, {
                strings: ["free_text2_default_content", "editor_free_text2_aria_label"]
              });
              const at = getComputedStyle(document.documentElement);
              this._internalPadding = parseFloat(at.getPropertyValue("--freetext-padding"));
            }
            static updateDefaultParams(U, at) {
              switch (U) {
                case n.AnnotationEditorParamsType.FREETEXT_SIZE:
                  Y._defaultFontSize = at;
                  break;
                case n.AnnotationEditorParamsType.FREETEXT_COLOR:
                  Y._defaultColor = at;
                  break;
              }
            }
            updateParams(U, at) {
              switch (U) {
                case n.AnnotationEditorParamsType.FREETEXT_SIZE:
                  W(this, P, dn).call(this, at);
                  break;
                case n.AnnotationEditorParamsType.FREETEXT_COLOR:
                  W(this, u, fn).call(this, at);
                  break;
              }
            }
            static get defaultPropertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.FREETEXT_SIZE, Y._defaultFontSize], [n.AnnotationEditorParamsType.FREETEXT_COLOR, Y._defaultColor || G.AnnotationEditor._defaultLineColor]];
            }
            get propertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.FREETEXT_SIZE, t(this, _)], [n.AnnotationEditorParamsType.FREETEXT_COLOR, t(this, k)]];
            }
            _translateEmpty(U, at) {
              this._uiManager.translateSelectedEditors(U, at, !0);
            }
            getInitialTranslation() {
              const U = this.parentScale;
              return [-Y._internalPadding * U, -(Y._internalPadding + t(this, _)) * U];
            }
            rebuild() {
              this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
            }
            enableEditMode() {
              this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(n.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", t(this, I)), this.editorDiv.addEventListener("focus", t(this, d)), this.editorDiv.addEventListener("blur", t(this, f)), this.editorDiv.addEventListener("input", t(this, r)));
            }
            disableEditMode() {
              this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", t(this, h)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", t(this, I)), this.editorDiv.removeEventListener("focus", t(this, d)), this.editorDiv.removeEventListener("blur", t(this, f)), this.editorDiv.removeEventListener("input", t(this, r)), this.div.focus({
                preventScroll: !0
              }), this.isEditing = !1, this.parent.div.classList.add("freeTextEditing"));
            }
            focusin(U) {
              this._focusEventsAllowed && (super.focusin(U), U.target !== this.editorDiv && this.editorDiv.focus());
            }
            onceAdded() {
              var U;
              if (this.width) {
                W(this, J, bi).call(this);
                return;
              }
              this.enableEditMode(), this.editorDiv.focus(), (U = this._initialOptions) != null && U.isCentered && this.center(), this._initialOptions = null;
            }
            isEmpty() {
              return !this.editorDiv || this.editorDiv.innerText.trim() === "";
            }
            remove() {
              this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freeTextEditing")), super.remove();
            }
            commit() {
              if (!this.isInEditMode())
                return;
              super.commit(), this.disableEditMode();
              const U = t(this, y), at = Q(this, y, W(this, s, pn).call(this).trimEnd());
              if (U === at)
                return;
              const $ = (wt) => {
                if (Q(this, y, wt), !wt) {
                  this.remove();
                  return;
                }
                W(this, c, _i).call(this), this._uiManager.rebuild(this), W(this, w, Se).call(this);
              };
              this.addCommands({
                cmd: () => {
                  $(at);
                },
                undo: () => {
                  $(U);
                },
                mustExec: !1
              }), W(this, w, Se).call(this);
            }
            shouldGetKeyboardEvents() {
              return this.isInEditMode();
            }
            enterInEditMode() {
              this.enableEditMode(), this.editorDiv.focus();
            }
            dblclick(U) {
              this.enterInEditMode();
            }
            keydown(U) {
              U.target === this.div && U.key === "Enter" && (this.enterInEditMode(), U.preventDefault());
            }
            editorDivKeydown(U) {
              Y._keyboardManager.exec(this, U);
            }
            editorDivFocus(U) {
              this.isEditing = !0;
            }
            editorDivBlur(U) {
              this.isEditing = !1;
            }
            editorDivInput(U) {
              this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
            }
            disableEditing() {
              this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
            }
            enableEditing() {
              this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
            }
            render() {
              if (this.div)
                return this.div;
              let U, at;
              this.width && (U = this.x, at = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", t(this, h)), this.enableEditing(), G.AnnotationEditor._l10nPromise.get("editor_free_text2_aria_label").then((wt) => {
                var Pt;
                return (Pt = this.editorDiv) == null ? void 0 : Pt.setAttribute("aria-label", wt);
              }), G.AnnotationEditor._l10nPromise.get("free_text2_default_content").then((wt) => {
                var Pt;
                return (Pt = this.editorDiv) == null ? void 0 : Pt.setAttribute("default-content", wt);
              }), this.editorDiv.contentEditable = !0;
              const {
                style: $
              } = this.editorDiv;
              if ($.fontSize = `calc(${t(this, _)}px * var(--scale-factor))`, $.color = t(this, k), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, g.bindEvents)(this, this.div, ["dblclick", "keydown"]), this.width) {
                const [wt, Pt] = this.parentDimensions;
                if (this.annotationElementId) {
                  const {
                    position: N
                  } = t(this, m);
                  let [a, p] = this.getInitialTranslation();
                  [a, p] = this.pageTranslationToScreen(a, p);
                  const [l, T] = this.pageDimensions, [R, H] = this.pageTranslation;
                  let K, nt;
                  switch (this.rotation) {
                    case 0:
                      K = U + (N[0] - R) / l, nt = at + this.height - (N[1] - H) / T;
                      break;
                    case 90:
                      K = U + (N[0] - R) / l, nt = at - (N[1] - H) / T, [a, p] = [p, -a];
                      break;
                    case 180:
                      K = U - this.width + (N[0] - R) / l, nt = at - (N[1] - H) / T, [a, p] = [-a, -p];
                      break;
                    case 270:
                      K = U + (N[0] - R - this.height * T) / l, nt = at + (N[1] - H - this.width * l) / T, [a, p] = [-p, a];
                      break;
                  }
                  this.setAt(K * wt, nt * Pt, a, p);
                } else
                  this.setAt(U * wt, at * Pt, this.width * wt, this.height * Pt);
                W(this, c, _i).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
              } else
                this._isDraggable = !1, this.editorDiv.contentEditable = !0;
              return this.div;
            }
            get contentDiv() {
              return this.editorDiv;
            }
            static deserialize(U, at, $) {
              let wt = null;
              if (U instanceof B.FreeTextAnnotationElement) {
                const {
                  data: {
                    defaultAppearanceData: {
                      fontSize: N,
                      fontColor: a
                    },
                    rect: p,
                    rotation: l,
                    id: T
                  },
                  textContent: R,
                  textPosition: H,
                  parent: {
                    page: {
                      pageNumber: K
                    }
                  }
                } = U;
                if (!R || R.length === 0)
                  return null;
                wt = U = {
                  annotationType: n.AnnotationEditorType.FREETEXT,
                  color: Array.from(a),
                  fontSize: N,
                  value: R.join(`
`),
                  position: H,
                  pageIndex: K - 1,
                  rect: p,
                  rotation: l,
                  id: T,
                  deleted: !1
                };
              }
              const Pt = super.deserialize(U, at, $);
              return Q(Pt, _, U.fontSize), Q(Pt, k, n.Util.makeHexColor(...U.color)), Q(Pt, y, U.value), Pt.annotationElementId = U.id || null, Q(Pt, m, wt), Pt;
            }
            serialize(U = !1) {
              if (this.isEmpty())
                return null;
              if (this.deleted)
                return {
                  pageIndex: this.pageIndex,
                  id: this.annotationElementId,
                  deleted: !0
                };
              const at = Y._internalPadding * this.parentScale, $ = this.getRect(at, at), wt = G.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : t(this, k)), Pt = {
                annotationType: n.AnnotationEditorType.FREETEXT,
                color: wt,
                fontSize: t(this, _),
                value: t(this, y),
                pageIndex: this.pageIndex,
                rect: $,
                rotation: this.rotation,
                structTreeParentId: this._structTreeParentId
              };
              return U ? Pt : this.annotationElementId && !W(this, x, gn).call(this, Pt) ? null : (Pt.id = this.annotationElementId, Pt);
            }
          };
          f = new WeakMap(), d = new WeakMap(), r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), y = new WeakMap(), h = new WeakMap(), _ = new WeakMap(), m = new WeakMap(), P = new WeakSet(), dn = function(U) {
            const at = (wt) => {
              this.editorDiv.style.fontSize = `calc(${wt}px * var(--scale-factor))`, this.translate(0, -(wt - t(this, _)) * this.parentScale), Q(this, _, wt), W(this, w, Se).call(this);
            }, $ = t(this, _);
            this.addCommands({
              cmd: () => {
                at(U);
              },
              undo: () => {
                at($);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.FREETEXT_SIZE,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, u = new WeakSet(), fn = function(U) {
            const at = t(this, k);
            this.addCommands({
              cmd: () => {
                Q(this, k, this.editorDiv.style.color = U);
              },
              undo: () => {
                Q(this, k, this.editorDiv.style.color = at);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.FREETEXT_COLOR,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, s = new WeakSet(), pn = function() {
            const U = this.editorDiv.getElementsByTagName("div");
            if (U.length === 0)
              return this.editorDiv.innerText;
            const at = [];
            for (const $ of U)
              at.push($.innerText.replace(/\r\n?|\n/, ""));
            return at.join(`
`);
          }, w = new WeakSet(), Se = function() {
            const [U, at] = this.parentDimensions;
            let $;
            if (this.isAttachedToDOM)
              $ = this.div.getBoundingClientRect();
            else {
              const {
                currentLayer: wt,
                div: Pt
              } = this, N = Pt.style.display;
              Pt.style.display = "hidden", wt.div.append(this.div), $ = Pt.getBoundingClientRect(), Pt.remove(), Pt.style.display = N;
            }
            this.rotation % 180 === this.parentRotation % 180 ? (this.width = $.width / U, this.height = $.height / at) : (this.width = $.height / U, this.height = $.width / at), this.fixAndSetPosition();
          }, c = new WeakSet(), _i = function() {
            if (this.editorDiv.replaceChildren(), !!t(this, y))
              for (const U of t(this, y).split(`
`)) {
                const at = document.createElement("div");
                at.append(U ? document.createTextNode(U) : document.createElement("br")), this.editorDiv.append(at);
              }
          }, x = new WeakSet(), gn = function(U) {
            const {
              value: at,
              fontSize: $,
              color: wt,
              rect: Pt,
              pageIndex: N
            } = t(this, m);
            return U.value !== at || U.fontSize !== $ || U.rect.some((a, p) => Math.abs(a - Pt[p]) >= 1) || U.color.some((a, p) => a !== wt[p]) || U.pageIndex !== N;
          }, J = new WeakSet(), bi = function(U = !1) {
            if (!this.annotationElementId)
              return;
            if (W(this, w, Se).call(this), !U && (this.width === 0 || this.height === 0)) {
              setTimeout(() => W(this, J, bi).call(this, !0), 0);
              return;
            }
            const at = Y._internalPadding * this.parentScale;
            t(this, m).rect = this.getRect(at, at);
          }, ee(Y, "_freeTextDefaultContent", ""), ee(Y, "_internalPadding", 0), ee(Y, "_defaultColor", null), ee(Y, "_defaultFontSize", 10), ee(Y, "_type", "freetext");
          let F = Y;
          e.FreeTextEditor = F;
        },
        /* 29 */
        /***/
        (E, e, C) => {
          var p, T, he, H, mn, nt, _t, pt, St, st, vt, gt, Lt, It, Mt, ut, lt, it, et, mt, Tt, kt, Bt, _n, $t, Oe, Kt, vi, Qt, yi, v, D, ht, ot, dt, bt, j, Ai, xt, Et, Ft, Ot, bn, Ct, Si;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.StampAnnotationElement = e.InkAnnotationElement = e.FreeTextAnnotationElement = e.AnnotationLayer = void 0;
          var n = C(1), g = C(6), G = C(3), B = C(30), F = C(31), f = C(32);
          const d = 1e3, r = 9, I = /* @__PURE__ */ new WeakSet();
          function k(Vt) {
            return {
              width: Vt[2] - Vt[0],
              height: Vt[3] - Vt[1]
            };
          }
          class y {
            static create(Z) {
              switch (Z.data.annotationType) {
                case n.AnnotationType.LINK:
                  return new _(Z);
                case n.AnnotationType.TEXT:
                  return new m(Z);
                case n.AnnotationType.WIDGET:
                  switch (Z.data.fieldType) {
                    case "Tx":
                      return new A(Z);
                    case "Btn":
                      return Z.data.radioButton ? new s(Z) : Z.data.checkBox ? new S(Z) : new i(Z);
                    case "Ch":
                      return new w(Z);
                    case "Sig":
                      return new u(Z);
                  }
                  return new P(Z);
                case n.AnnotationType.POPUP:
                  return new b(Z);
                case n.AnnotationType.FREETEXT:
                  return new L(Z);
                case n.AnnotationType.LINE:
                  return new x(Z);
                case n.AnnotationType.SQUARE:
                  return new z(Z);
                case n.AnnotationType.CIRCLE:
                  return new J(Z);
                case n.AnnotationType.POLYLINE:
                  return new M(Z);
                case n.AnnotationType.CARET:
                  return new tt(Z);
                case n.AnnotationType.INK:
                  return new q(Z);
                case n.AnnotationType.POLYGON:
                  return new Y(Z);
                case n.AnnotationType.HIGHLIGHT:
                  return new U(Z);
                case n.AnnotationType.UNDERLINE:
                  return new at(Z);
                case n.AnnotationType.SQUIGGLY:
                  return new $(Z);
                case n.AnnotationType.STRIKEOUT:
                  return new wt(Z);
                case n.AnnotationType.STAMP:
                  return new Pt(Z);
                case n.AnnotationType.FILEATTACHMENT:
                  return new N(Z);
                default:
                  return new h(Z);
              }
            }
          }
          const l = class l {
            constructor(Z, {
              isRenderable: o = !1,
              ignoreBorder: V = !1,
              createQuadrilaterals: X = !1
            } = {}) {
              O(this, p, !1);
              this.isRenderable = o, this.data = Z.data, this.layer = Z.layer, this.linkService = Z.linkService, this.downloadManager = Z.downloadManager, this.imageResourcesPath = Z.imageResourcesPath, this.renderForms = Z.renderForms, this.svgFactory = Z.svgFactory, this.annotationStorage = Z.annotationStorage, this.enableScripting = Z.enableScripting, this.hasJSActions = Z.hasJSActions, this._fieldObjects = Z.fieldObjects, this.parent = Z.parent, o && (this.container = this._createContainer(V)), X && this._createQuadrilaterals();
            }
            static _hasPopupData({
              titleObj: Z,
              contentsObj: o,
              richText: V
            }) {
              return !!(Z != null && Z.str || o != null && o.str || V != null && V.str);
            }
            get hasPopupData() {
              return l._hasPopupData(this.data);
            }
            _createContainer(Z) {
              const {
                data: o,
                parent: {
                  page: V,
                  viewport: X
                }
              } = this, rt = document.createElement("section");
              rt.setAttribute("data-annotation-id", o.id), this instanceof P || (rt.tabIndex = d), rt.style.zIndex = this.parent.zIndex++, this.data.popupRef && rt.setAttribute("aria-haspopup", "dialog"), o.noRotate && rt.classList.add("norotate");
              const {
                pageWidth: ft,
                pageHeight: yt,
                pageX: Rt,
                pageY: Nt
              } = X.rawDims;
              if (!o.rect || this instanceof b) {
                const {
                  rotation: zt
                } = o;
                return !o.hasOwnCanvas && zt !== 0 && this.setRotation(zt, rt), rt;
              }
              const {
                width: Dt,
                height: Zt
              } = k(o.rect), Ht = n.Util.normalizeRect([o.rect[0], V.view[3] - o.rect[1] + V.view[1], o.rect[2], V.view[3] - o.rect[3] + V.view[1]]);
              if (!Z && o.borderStyle.width > 0) {
                rt.style.borderWidth = `${o.borderStyle.width}px`;
                const zt = o.borderStyle.horizontalCornerRadius, Yt = o.borderStyle.verticalCornerRadius;
                if (zt > 0 || Yt > 0) {
                  const te = `calc(${zt}px * var(--scale-factor)) / calc(${Yt}px * var(--scale-factor))`;
                  rt.style.borderRadius = te;
                } else if (this instanceof s) {
                  const te = `calc(${Dt}px * var(--scale-factor)) / calc(${Zt}px * var(--scale-factor))`;
                  rt.style.borderRadius = te;
                }
                switch (o.borderStyle.style) {
                  case n.AnnotationBorderStyleType.SOLID:
                    rt.style.borderStyle = "solid";
                    break;
                  case n.AnnotationBorderStyleType.DASHED:
                    rt.style.borderStyle = "dashed";
                    break;
                  case n.AnnotationBorderStyleType.BEVELED:
                    (0, n.warn)("Unimplemented border style: beveled");
                    break;
                  case n.AnnotationBorderStyleType.INSET:
                    (0, n.warn)("Unimplemented border style: inset");
                    break;
                  case n.AnnotationBorderStyleType.UNDERLINE:
                    rt.style.borderBottomStyle = "solid";
                    break;
                }
                const Jt = o.borderColor || null;
                Jt ? (Q(this, p, !0), rt.style.borderColor = n.Util.makeHexColor(Jt[0] | 0, Jt[1] | 0, Jt[2] | 0)) : rt.style.borderWidth = 0;
              }
              rt.style.left = `${100 * (Ht[0] - Rt) / ft}%`, rt.style.top = `${100 * (Ht[1] - Nt) / yt}%`;
              const {
                rotation: jt
              } = o;
              return o.hasOwnCanvas || jt === 0 ? (rt.style.width = `${100 * Dt / ft}%`, rt.style.height = `${100 * Zt / yt}%`) : this.setRotation(jt, rt), rt;
            }
            setRotation(Z, o = this.container) {
              if (!this.data.rect)
                return;
              const {
                pageWidth: V,
                pageHeight: X
              } = this.parent.viewport.rawDims, {
                width: rt,
                height: ft
              } = k(this.data.rect);
              let yt, Rt;
              Z % 180 === 0 ? (yt = 100 * rt / V, Rt = 100 * ft / X) : (yt = 100 * ft / V, Rt = 100 * rt / X), o.style.width = `${yt}%`, o.style.height = `${Rt}%`, o.setAttribute("data-main-rotation", (360 - Z) % 360);
            }
            get _commonActions() {
              const Z = (o, V, X) => {
                const rt = X.detail[o], ft = rt[0], yt = rt.slice(1);
                X.target.style[V] = B.ColorConverters[`${ft}_HTML`](yt), this.annotationStorage.setValue(this.data.id, {
                  [V]: B.ColorConverters[`${ft}_rgb`](yt)
                });
              };
              return (0, n.shadow)(this, "_commonActions", {
                display: (o) => {
                  const {
                    display: V
                  } = o.detail, X = V % 2 === 1;
                  this.container.style.visibility = X ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                    noView: X,
                    noPrint: V === 1 || V === 2
                  });
                },
                print: (o) => {
                  this.annotationStorage.setValue(this.data.id, {
                    noPrint: !o.detail.print
                  });
                },
                hidden: (o) => {
                  const {
                    hidden: V
                  } = o.detail;
                  this.container.style.visibility = V ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                    noPrint: V,
                    noView: V
                  });
                },
                focus: (o) => {
                  setTimeout(() => o.target.focus({
                    preventScroll: !1
                  }), 0);
                },
                userName: (o) => {
                  o.target.title = o.detail.userName;
                },
                readonly: (o) => {
                  o.target.disabled = o.detail.readonly;
                },
                required: (o) => {
                  this._setRequired(o.target, o.detail.required);
                },
                bgColor: (o) => {
                  Z("bgColor", "backgroundColor", o);
                },
                fillColor: (o) => {
                  Z("fillColor", "backgroundColor", o);
                },
                fgColor: (o) => {
                  Z("fgColor", "color", o);
                },
                textColor: (o) => {
                  Z("textColor", "color", o);
                },
                borderColor: (o) => {
                  Z("borderColor", "borderColor", o);
                },
                strokeColor: (o) => {
                  Z("strokeColor", "borderColor", o);
                },
                rotation: (o) => {
                  const V = o.detail.rotation;
                  this.setRotation(V), this.annotationStorage.setValue(this.data.id, {
                    rotation: V
                  });
                }
              });
            }
            _dispatchEventFromSandbox(Z, o) {
              const V = this._commonActions;
              for (const X of Object.keys(o.detail)) {
                const rt = Z[X] || V[X];
                rt == null || rt(o);
              }
            }
            _setDefaultPropertiesFromJS(Z) {
              if (!this.enableScripting)
                return;
              const o = this.annotationStorage.getRawValue(this.data.id);
              if (!o)
                return;
              const V = this._commonActions;
              for (const [X, rt] of Object.entries(o)) {
                const ft = V[X];
                if (ft) {
                  const yt = {
                    detail: {
                      [X]: rt
                    },
                    target: Z
                  };
                  ft(yt), delete o[X];
                }
              }
            }
            _createQuadrilaterals() {
              if (!this.container)
                return;
              const {
                quadPoints: Z
              } = this.data;
              if (!Z)
                return;
              const [o, V, X, rt] = this.data.rect;
              if (Z.length === 1) {
                const [, {
                  x: Yt,
                  y: Jt
                }, {
                  x: te,
                  y: ne
                }] = Z[0];
                if (X === Yt && rt === Jt && o === te && V === ne)
                  return;
              }
              const {
                style: ft
              } = this.container;
              let yt;
              if (t(this, p)) {
                const {
                  borderColor: Yt,
                  borderWidth: Jt
                } = ft;
                ft.borderWidth = 0, yt = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${Yt}" stroke-width="${Jt}">`], this.container.classList.add("hasBorder");
              }
              const Rt = X - o, Nt = rt - V, {
                svgFactory: Dt
              } = this, Zt = Dt.createElement("svg");
              Zt.classList.add("quadrilateralsContainer"), Zt.setAttribute("width", 0), Zt.setAttribute("height", 0);
              const Ht = Dt.createElement("defs");
              Zt.append(Ht);
              const jt = Dt.createElement("clipPath"), zt = `clippath_${this.data.id}`;
              jt.setAttribute("id", zt), jt.setAttribute("clipPathUnits", "objectBoundingBox"), Ht.append(jt);
              for (const [, {
                x: Yt,
                y: Jt
              }, {
                x: te,
                y: ne
              }] of Z) {
                const ie = Dt.createElement("rect"), se = (te - o) / Rt, le = (rt - Jt) / Nt, ce = (Yt - te) / Rt, Ji = (Jt - ne) / Nt;
                ie.setAttribute("x", se), ie.setAttribute("y", le), ie.setAttribute("width", ce), ie.setAttribute("height", Ji), jt.append(ie), yt == null || yt.push(`<rect vector-effect="non-scaling-stroke" x="${se}" y="${le}" width="${ce}" height="${Ji}"/>`);
              }
              t(this, p) && (yt.push("</g></svg>')"), ft.backgroundImage = yt.join("")), this.container.append(Zt), this.container.style.clipPath = `url(#${zt})`;
            }
            _createPopup() {
              const {
                container: Z,
                data: o
              } = this;
              Z.setAttribute("aria-haspopup", "dialog");
              const V = new b({
                data: {
                  color: o.color,
                  titleObj: o.titleObj,
                  modificationDate: o.modificationDate,
                  contentsObj: o.contentsObj,
                  richText: o.richText,
                  parentRect: o.rect,
                  borderStyle: 0,
                  id: `popup_${o.id}`,
                  rotation: o.rotation
                },
                parent: this.parent,
                elements: [this]
              });
              this.parent.div.append(V.render());
            }
            render() {
              (0, n.unreachable)("Abstract method `AnnotationElement.render` called");
            }
            _getElementsByName(Z, o = null) {
              const V = [];
              if (this._fieldObjects) {
                const X = this._fieldObjects[Z];
                if (X)
                  for (const {
                    page: rt,
                    id: ft,
                    exportValues: yt
                  } of X) {
                    if (rt === -1 || ft === o)
                      continue;
                    const Rt = typeof yt == "string" ? yt : null, Nt = document.querySelector(`[data-element-id="${ft}"]`);
                    if (Nt && !I.has(Nt)) {
                      (0, n.warn)(`_getElementsByName - element not allowed: ${ft}`);
                      continue;
                    }
                    V.push({
                      id: ft,
                      exportValue: Rt,
                      domElement: Nt
                    });
                  }
                return V;
              }
              for (const X of document.getElementsByName(Z)) {
                const {
                  exportValue: rt
                } = X, ft = X.getAttribute("data-element-id");
                ft !== o && I.has(X) && V.push({
                  id: ft,
                  exportValue: rt,
                  domElement: X
                });
              }
              return V;
            }
            show() {
              var Z;
              this.container && (this.container.hidden = !1), (Z = this.popup) == null || Z.maybeShow();
            }
            hide() {
              var Z;
              this.container && (this.container.hidden = !0), (Z = this.popup) == null || Z.forceHide();
            }
            getElementsToTriggerPopup() {
              return this.container;
            }
            addHighlightArea() {
              const Z = this.getElementsToTriggerPopup();
              if (Array.isArray(Z))
                for (const o of Z)
                  o.classList.add("highlightArea");
              else
                Z.classList.add("highlightArea");
            }
            _editOnDoubleClick() {
              const {
                annotationEditorType: Z,
                data: {
                  id: o
                }
              } = this;
              this.container.addEventListener("dblclick", () => {
                var V;
                (V = this.linkService.eventBus) == null || V.dispatch("switchannotationeditormode", {
                  source: this,
                  mode: Z,
                  editId: o
                });
              });
            }
          };
          p = new WeakMap();
          let h = l;
          class _ extends h {
            constructor(o, V = null) {
              super(o, {
                isRenderable: !0,
                ignoreBorder: !!(V != null && V.ignoreBorder),
                createQuadrilaterals: !0
              });
              O(this, T);
              O(this, H);
              this.isTooltipOnly = o.data.isTooltipOnly;
            }
            render() {
              const {
                data: o,
                linkService: V
              } = this, X = document.createElement("a");
              X.setAttribute("data-element-id", o.id);
              let rt = !1;
              return o.url ? (V.addLinkAttributes(X, o.url, o.newWindow), rt = !0) : o.action ? (this._bindNamedAction(X, o.action), rt = !0) : o.attachment ? (this._bindAttachment(X, o.attachment), rt = !0) : o.setOCGState ? (W(this, H, mn).call(this, X, o.setOCGState), rt = !0) : o.dest ? (this._bindLink(X, o.dest), rt = !0) : (o.actions && (o.actions.Action || o.actions["Mouse Up"] || o.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(X, o), rt = !0), o.resetForm ? (this._bindResetFormAction(X, o.resetForm), rt = !0) : this.isTooltipOnly && !rt && (this._bindLink(X, ""), rt = !0)), this.container.classList.add("linkAnnotation"), rt && this.container.append(X), this.container;
            }
            _bindLink(o, V) {
              o.href = this.linkService.getDestinationHash(V), o.onclick = () => (V && this.linkService.goToDestination(V), !1), (V || V === "") && W(this, T, he).call(this);
            }
            _bindNamedAction(o, V) {
              o.href = this.linkService.getAnchorUrl(""), o.onclick = () => (this.linkService.executeNamedAction(V), !1), W(this, T, he).call(this);
            }
            _bindAttachment(o, V) {
              o.href = this.linkService.getAnchorUrl(""), o.onclick = () => {
                var X;
                return (X = this.downloadManager) == null || X.openOrDownloadData(this.container, V.content, V.filename), !1;
              }, W(this, T, he).call(this);
            }
            _bindJSAction(o, V) {
              o.href = this.linkService.getAnchorUrl("");
              const X = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
              for (const rt of Object.keys(V.actions)) {
                const ft = X.get(rt);
                ft && (o[ft] = () => {
                  var yt;
                  return (yt = this.linkService.eventBus) == null || yt.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: V.id,
                      name: rt
                    }
                  }), !1;
                });
              }
              o.onclick || (o.onclick = () => !1), W(this, T, he).call(this);
            }
            _bindResetFormAction(o, V) {
              const X = o.onclick;
              if (X || (o.href = this.linkService.getAnchorUrl("")), W(this, T, he).call(this), !this._fieldObjects) {
                (0, n.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), X || (o.onclick = () => !1);
                return;
              }
              o.onclick = () => {
                var Zt;
                X == null || X();
                const {
                  fields: rt,
                  refs: ft,
                  include: yt
                } = V, Rt = [];
                if (rt.length !== 0 || ft.length !== 0) {
                  const Ht = new Set(ft);
                  for (const jt of rt) {
                    const zt = this._fieldObjects[jt] || [];
                    for (const {
                      id: Yt
                    } of zt)
                      Ht.add(Yt);
                  }
                  for (const jt of Object.values(this._fieldObjects))
                    for (const zt of jt)
                      Ht.has(zt.id) === yt && Rt.push(zt);
                } else
                  for (const Ht of Object.values(this._fieldObjects))
                    Rt.push(...Ht);
                const Nt = this.annotationStorage, Dt = [];
                for (const Ht of Rt) {
                  const {
                    id: jt
                  } = Ht;
                  switch (Dt.push(jt), Ht.type) {
                    case "text": {
                      const Yt = Ht.defaultValue || "";
                      Nt.setValue(jt, {
                        value: Yt
                      });
                      break;
                    }
                    case "checkbox":
                    case "radiobutton": {
                      const Yt = Ht.defaultValue === Ht.exportValues;
                      Nt.setValue(jt, {
                        value: Yt
                      });
                      break;
                    }
                    case "combobox":
                    case "listbox": {
                      const Yt = Ht.defaultValue || "";
                      Nt.setValue(jt, {
                        value: Yt
                      });
                      break;
                    }
                    default:
                      continue;
                  }
                  const zt = document.querySelector(`[data-element-id="${jt}"]`);
                  if (zt) {
                    if (!I.has(zt)) {
                      (0, n.warn)(`_bindResetFormAction - element not allowed: ${jt}`);
                      continue;
                    }
                  } else
                    continue;
                  zt.dispatchEvent(new Event("resetform"));
                }
                return this.enableScripting && ((Zt = this.linkService.eventBus) == null || Zt.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: "app",
                    ids: Dt,
                    name: "ResetForm"
                  }
                })), !1;
              };
            }
          }
          T = new WeakSet(), he = function() {
            this.container.setAttribute("data-internal-link", "");
          }, H = new WeakSet(), mn = function(o, V) {
            o.href = this.linkService.getAnchorUrl(""), o.onclick = () => (this.linkService.executeSetOCGState(V), !1), W(this, T, he).call(this);
          };
          class m extends h {
            constructor(Z) {
              super(Z, {
                isRenderable: !0
              });
            }
            render() {
              this.container.classList.add("textAnnotation");
              const Z = document.createElement("img");
              return Z.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", Z.alt = "[{{type}} Annotation]", Z.dataset.l10nId = "text_annotation_type", Z.dataset.l10nArgs = JSON.stringify({
                type: this.data.name
              }), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(Z), this.container;
            }
          }
          class P extends h {
            render() {
              return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container;
            }
            showElementAndHideCanvas(Z) {
              var o;
              this.data.hasOwnCanvas && (((o = Z.previousSibling) == null ? void 0 : o.nodeName) === "CANVAS" && (Z.previousSibling.hidden = !0), Z.hidden = !1);
            }
            _getKeyModifier(Z) {
              const {
                isWin: o,
                isMac: V
              } = n.FeatureTest.platform;
              return o && Z.ctrlKey || V && Z.metaKey;
            }
            _setEventListener(Z, o, V, X, rt) {
              V.includes("mouse") ? Z.addEventListener(V, (ft) => {
                var yt;
                (yt = this.linkService.eventBus) == null || yt.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: this.data.id,
                    name: X,
                    value: rt(ft),
                    shift: ft.shiftKey,
                    modifier: this._getKeyModifier(ft)
                  }
                });
              }) : Z.addEventListener(V, (ft) => {
                var yt;
                if (V === "blur") {
                  if (!o.focused || !ft.relatedTarget)
                    return;
                  o.focused = !1;
                } else if (V === "focus") {
                  if (o.focused)
                    return;
                  o.focused = !0;
                }
                rt && ((yt = this.linkService.eventBus) == null || yt.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: this.data.id,
                    name: X,
                    value: rt(ft)
                  }
                }));
              });
            }
            _setEventListeners(Z, o, V, X) {
              var rt, ft, yt;
              for (const [Rt, Nt] of V)
                (Nt === "Action" || (rt = this.data.actions) != null && rt[Nt]) && ((Nt === "Focus" || Nt === "Blur") && (o || (o = {
                  focused: !1
                })), this._setEventListener(Z, o, Rt, Nt, X), Nt === "Focus" && !((ft = this.data.actions) != null && ft.Blur) ? this._setEventListener(Z, o, "blur", "Blur", null) : Nt === "Blur" && !((yt = this.data.actions) != null && yt.Focus) && this._setEventListener(Z, o, "focus", "Focus", null));
            }
            _setBackgroundColor(Z) {
              const o = this.data.backgroundColor || null;
              Z.style.backgroundColor = o === null ? "transparent" : n.Util.makeHexColor(o[0], o[1], o[2]);
            }
            _setTextStyle(Z) {
              const o = ["left", "center", "right"], {
                fontColor: V
              } = this.data.defaultAppearanceData, X = this.data.defaultAppearanceData.fontSize || r, rt = Z.style;
              let ft;
              const yt = 2, Rt = (Nt) => Math.round(10 * Nt) / 10;
              if (this.data.multiLine) {
                const Nt = Math.abs(this.data.rect[3] - this.data.rect[1] - yt), Dt = Math.round(Nt / (n.LINE_FACTOR * X)) || 1, Zt = Nt / Dt;
                ft = Math.min(X, Rt(Zt / n.LINE_FACTOR));
              } else {
                const Nt = Math.abs(this.data.rect[3] - this.data.rect[1] - yt);
                ft = Math.min(X, Rt(Nt / n.LINE_FACTOR));
              }
              rt.fontSize = `calc(${ft}px * var(--scale-factor))`, rt.color = n.Util.makeHexColor(V[0], V[1], V[2]), this.data.textAlignment !== null && (rt.textAlign = o[this.data.textAlignment]);
            }
            _setRequired(Z, o) {
              o ? Z.setAttribute("required", !0) : Z.removeAttribute("required"), Z.setAttribute("aria-required", o);
            }
          }
          class A extends P {
            constructor(Z) {
              const o = Z.renderForms || !Z.data.hasAppearance && !!Z.data.fieldValue;
              super(Z, {
                isRenderable: o
              });
            }
            setPropertyOnSiblings(Z, o, V, X) {
              const rt = this.annotationStorage;
              for (const ft of this._getElementsByName(Z.name, Z.id))
                ft.domElement && (ft.domElement[o] = V), rt.setValue(ft.id, {
                  [X]: V
                });
            }
            render() {
              var X, rt;
              const Z = this.annotationStorage, o = this.data.id;
              this.container.classList.add("textWidgetAnnotation");
              let V = null;
              if (this.renderForms) {
                const ft = Z.getValue(o, {
                  value: this.data.fieldValue
                });
                let yt = ft.value || "";
                const Rt = Z.getValue(o, {
                  charLimit: this.data.maxLen
                }).charLimit;
                Rt && yt.length > Rt && (yt = yt.slice(0, Rt));
                let Nt = ft.formattedValue || ((X = this.data.textContent) == null ? void 0 : X.join(`
`)) || null;
                Nt && this.data.comb && (Nt = Nt.replaceAll(/\s+/g, ""));
                const Dt = {
                  userValue: yt,
                  formattedValue: Nt,
                  lastCommittedValue: null,
                  commitKey: 1,
                  focused: !1
                };
                this.data.multiLine ? (V = document.createElement("textarea"), V.textContent = Nt ?? yt, this.data.doNotScroll && (V.style.overflowY = "hidden")) : (V = document.createElement("input"), V.type = "text", V.setAttribute("value", Nt ?? yt), this.data.doNotScroll && (V.style.overflowX = "hidden")), this.data.hasOwnCanvas && (V.hidden = !0), I.add(V), V.setAttribute("data-element-id", o), V.disabled = this.data.readOnly, V.name = this.data.fieldName, V.tabIndex = d, this._setRequired(V, this.data.required), Rt && (V.maxLength = Rt), V.addEventListener("input", (Ht) => {
                  Z.setValue(o, {
                    value: Ht.target.value
                  }), this.setPropertyOnSiblings(V, "value", Ht.target.value, "value"), Dt.formattedValue = null;
                }), V.addEventListener("resetform", (Ht) => {
                  const jt = this.data.defaultFieldValue ?? "";
                  V.value = Dt.userValue = jt, Dt.formattedValue = null;
                });
                let Zt = (Ht) => {
                  const {
                    formattedValue: jt
                  } = Dt;
                  jt != null && (Ht.target.value = jt), Ht.target.scrollLeft = 0;
                };
                if (this.enableScripting && this.hasJSActions) {
                  V.addEventListener("focus", (jt) => {
                    if (Dt.focused)
                      return;
                    const {
                      target: zt
                    } = jt;
                    Dt.userValue && (zt.value = Dt.userValue), Dt.lastCommittedValue = zt.value, Dt.commitKey = 1, Dt.focused = !0;
                  }), V.addEventListener("updatefromsandbox", (jt) => {
                    this.showElementAndHideCanvas(jt.target);
                    const zt = {
                      value(Yt) {
                        Dt.userValue = Yt.detail.value ?? "", Z.setValue(o, {
                          value: Dt.userValue.toString()
                        }), Yt.target.value = Dt.userValue;
                      },
                      formattedValue(Yt) {
                        const {
                          formattedValue: Jt
                        } = Yt.detail;
                        Dt.formattedValue = Jt, Jt != null && Yt.target !== document.activeElement && (Yt.target.value = Jt), Z.setValue(o, {
                          formattedValue: Jt
                        });
                      },
                      selRange(Yt) {
                        Yt.target.setSelectionRange(...Yt.detail.selRange);
                      },
                      charLimit: (Yt) => {
                        var ie;
                        const {
                          charLimit: Jt
                        } = Yt.detail, {
                          target: te
                        } = Yt;
                        if (Jt === 0) {
                          te.removeAttribute("maxLength");
                          return;
                        }
                        te.setAttribute("maxLength", Jt);
                        let ne = Dt.userValue;
                        !ne || ne.length <= Jt || (ne = ne.slice(0, Jt), te.value = Dt.userValue = ne, Z.setValue(o, {
                          value: ne
                        }), (ie = this.linkService.eventBus) == null || ie.dispatch("dispatcheventinsandbox", {
                          source: this,
                          detail: {
                            id: o,
                            name: "Keystroke",
                            value: ne,
                            willCommit: !0,
                            commitKey: 1,
                            selStart: te.selectionStart,
                            selEnd: te.selectionEnd
                          }
                        }));
                      }
                    };
                    this._dispatchEventFromSandbox(zt, jt);
                  }), V.addEventListener("keydown", (jt) => {
                    var Jt;
                    Dt.commitKey = 1;
                    let zt = -1;
                    if (jt.key === "Escape" ? zt = 0 : jt.key === "Enter" && !this.data.multiLine ? zt = 2 : jt.key === "Tab" && (Dt.commitKey = 3), zt === -1)
                      return;
                    const {
                      value: Yt
                    } = jt.target;
                    Dt.lastCommittedValue !== Yt && (Dt.lastCommittedValue = Yt, Dt.userValue = Yt, (Jt = this.linkService.eventBus) == null || Jt.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: o,
                        name: "Keystroke",
                        value: Yt,
                        willCommit: !0,
                        commitKey: zt,
                        selStart: jt.target.selectionStart,
                        selEnd: jt.target.selectionEnd
                      }
                    }));
                  });
                  const Ht = Zt;
                  Zt = null, V.addEventListener("blur", (jt) => {
                    var Yt;
                    if (!Dt.focused || !jt.relatedTarget)
                      return;
                    Dt.focused = !1;
                    const {
                      value: zt
                    } = jt.target;
                    Dt.userValue = zt, Dt.lastCommittedValue !== zt && ((Yt = this.linkService.eventBus) == null || Yt.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: o,
                        name: "Keystroke",
                        value: zt,
                        willCommit: !0,
                        commitKey: Dt.commitKey,
                        selStart: jt.target.selectionStart,
                        selEnd: jt.target.selectionEnd
                      }
                    })), Ht(jt);
                  }), (rt = this.data.actions) != null && rt.Keystroke && V.addEventListener("beforeinput", (jt) => {
                    var le;
                    Dt.lastCommittedValue = null;
                    const {
                      data: zt,
                      target: Yt
                    } = jt, {
                      value: Jt,
                      selectionStart: te,
                      selectionEnd: ne
                    } = Yt;
                    let ie = te, se = ne;
                    switch (jt.inputType) {
                      case "deleteWordBackward": {
                        const ce = Jt.substring(0, te).match(/\w*[^\w]*$/);
                        ce && (ie -= ce[0].length);
                        break;
                      }
                      case "deleteWordForward": {
                        const ce = Jt.substring(te).match(/^[^\w]*\w*/);
                        ce && (se += ce[0].length);
                        break;
                      }
                      case "deleteContentBackward":
                        te === ne && (ie -= 1);
                        break;
                      case "deleteContentForward":
                        te === ne && (se += 1);
                        break;
                    }
                    jt.preventDefault(), (le = this.linkService.eventBus) == null || le.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: o,
                        name: "Keystroke",
                        value: Jt,
                        change: zt || "",
                        willCommit: !1,
                        selStart: ie,
                        selEnd: se
                      }
                    });
                  }), this._setEventListeners(V, Dt, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (jt) => jt.target.value);
                }
                if (Zt && V.addEventListener("blur", Zt), this.data.comb) {
                  const jt = (this.data.rect[2] - this.data.rect[0]) / Rt;
                  V.classList.add("comb"), V.style.letterSpacing = `calc(${jt}px * var(--scale-factor) - 1ch)`;
                }
              } else
                V = document.createElement("div"), V.textContent = this.data.fieldValue, V.style.verticalAlign = "middle", V.style.display = "table-cell";
              return this._setTextStyle(V), this._setBackgroundColor(V), this._setDefaultPropertiesFromJS(V), this.container.append(V), this.container;
            }
          }
          class u extends P {
            constructor(Z) {
              super(Z, {
                isRenderable: !!Z.data.hasOwnCanvas
              });
            }
          }
          class S extends P {
            constructor(Z) {
              super(Z, {
                isRenderable: Z.renderForms
              });
            }
            render() {
              const Z = this.annotationStorage, o = this.data, V = o.id;
              let X = Z.getValue(V, {
                value: o.exportValue === o.fieldValue
              }).value;
              typeof X == "string" && (X = X !== "Off", Z.setValue(V, {
                value: X
              })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
              const rt = document.createElement("input");
              return I.add(rt), rt.setAttribute("data-element-id", V), rt.disabled = o.readOnly, this._setRequired(rt, this.data.required), rt.type = "checkbox", rt.name = o.fieldName, X && rt.setAttribute("checked", !0), rt.setAttribute("exportValue", o.exportValue), rt.tabIndex = d, rt.addEventListener("change", (ft) => {
                const {
                  name: yt,
                  checked: Rt
                } = ft.target;
                for (const Nt of this._getElementsByName(yt, V)) {
                  const Dt = Rt && Nt.exportValue === o.exportValue;
                  Nt.domElement && (Nt.domElement.checked = Dt), Z.setValue(Nt.id, {
                    value: Dt
                  });
                }
                Z.setValue(V, {
                  value: Rt
                });
              }), rt.addEventListener("resetform", (ft) => {
                const yt = o.defaultFieldValue || "Off";
                ft.target.checked = yt === o.exportValue;
              }), this.enableScripting && this.hasJSActions && (rt.addEventListener("updatefromsandbox", (ft) => {
                const yt = {
                  value(Rt) {
                    Rt.target.checked = Rt.detail.value !== "Off", Z.setValue(V, {
                      value: Rt.target.checked
                    });
                  }
                };
                this._dispatchEventFromSandbox(yt, ft);
              }), this._setEventListeners(rt, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (ft) => ft.target.checked)), this._setBackgroundColor(rt), this._setDefaultPropertiesFromJS(rt), this.container.append(rt), this.container;
            }
          }
          class s extends P {
            constructor(Z) {
              super(Z, {
                isRenderable: Z.renderForms
              });
            }
            render() {
              this.container.classList.add("buttonWidgetAnnotation", "radioButton");
              const Z = this.annotationStorage, o = this.data, V = o.id;
              let X = Z.getValue(V, {
                value: o.fieldValue === o.buttonValue
              }).value;
              typeof X == "string" && (X = X !== o.buttonValue, Z.setValue(V, {
                value: X
              }));
              const rt = document.createElement("input");
              if (I.add(rt), rt.setAttribute("data-element-id", V), rt.disabled = o.readOnly, this._setRequired(rt, this.data.required), rt.type = "radio", rt.name = o.fieldName, X && rt.setAttribute("checked", !0), rt.tabIndex = d, rt.addEventListener("change", (ft) => {
                const {
                  name: yt,
                  checked: Rt
                } = ft.target;
                for (const Nt of this._getElementsByName(yt, V))
                  Z.setValue(Nt.id, {
                    value: !1
                  });
                Z.setValue(V, {
                  value: Rt
                });
              }), rt.addEventListener("resetform", (ft) => {
                const yt = o.defaultFieldValue;
                ft.target.checked = yt != null && yt === o.buttonValue;
              }), this.enableScripting && this.hasJSActions) {
                const ft = o.buttonValue;
                rt.addEventListener("updatefromsandbox", (yt) => {
                  const Rt = {
                    value: (Nt) => {
                      const Dt = ft === Nt.detail.value;
                      for (const Zt of this._getElementsByName(Nt.target.name)) {
                        const Ht = Dt && Zt.id === V;
                        Zt.domElement && (Zt.domElement.checked = Ht), Z.setValue(Zt.id, {
                          value: Ht
                        });
                      }
                    }
                  };
                  this._dispatchEventFromSandbox(Rt, yt);
                }), this._setEventListeners(rt, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (yt) => yt.target.checked);
              }
              return this._setBackgroundColor(rt), this._setDefaultPropertiesFromJS(rt), this.container.append(rt), this.container;
            }
          }
          class i extends _ {
            constructor(Z) {
              super(Z, {
                ignoreBorder: Z.data.hasAppearance
              });
            }
            render() {
              const Z = super.render();
              Z.classList.add("buttonWidgetAnnotation", "pushButton"), this.data.alternativeText && (Z.title = this.data.alternativeText);
              const o = Z.lastChild;
              return this.enableScripting && this.hasJSActions && o && (this._setDefaultPropertiesFromJS(o), o.addEventListener("updatefromsandbox", (V) => {
                this._dispatchEventFromSandbox({}, V);
              })), Z;
            }
          }
          class w extends P {
            constructor(Z) {
              super(Z, {
                isRenderable: Z.renderForms
              });
            }
            render() {
              this.container.classList.add("choiceWidgetAnnotation");
              const Z = this.annotationStorage, o = this.data.id, V = Z.getValue(o, {
                value: this.data.fieldValue
              }), X = document.createElement("select");
              I.add(X), X.setAttribute("data-element-id", o), X.disabled = this.data.readOnly, this._setRequired(X, this.data.required), X.name = this.data.fieldName, X.tabIndex = d;
              let rt = this.data.combo && this.data.options.length > 0;
              this.data.combo || (X.size = this.data.options.length, this.data.multiSelect && (X.multiple = !0)), X.addEventListener("resetform", (Dt) => {
                const Zt = this.data.defaultFieldValue;
                for (const Ht of X.options)
                  Ht.selected = Ht.value === Zt;
              });
              for (const Dt of this.data.options) {
                const Zt = document.createElement("option");
                Zt.textContent = Dt.displayValue, Zt.value = Dt.exportValue, V.value.includes(Dt.exportValue) && (Zt.setAttribute("selected", !0), rt = !1), X.append(Zt);
              }
              let ft = null;
              if (rt) {
                const Dt = document.createElement("option");
                Dt.value = " ", Dt.setAttribute("hidden", !0), Dt.setAttribute("selected", !0), X.prepend(Dt), ft = () => {
                  Dt.remove(), X.removeEventListener("input", ft), ft = null;
                }, X.addEventListener("input", ft);
              }
              const yt = (Dt) => {
                const Zt = Dt ? "value" : "textContent", {
                  options: Ht,
                  multiple: jt
                } = X;
                return jt ? Array.prototype.filter.call(Ht, (zt) => zt.selected).map((zt) => zt[Zt]) : Ht.selectedIndex === -1 ? null : Ht[Ht.selectedIndex][Zt];
              };
              let Rt = yt(!1);
              const Nt = (Dt) => {
                const Zt = Dt.target.options;
                return Array.prototype.map.call(Zt, (Ht) => ({
                  displayValue: Ht.textContent,
                  exportValue: Ht.value
                }));
              };
              return this.enableScripting && this.hasJSActions ? (X.addEventListener("updatefromsandbox", (Dt) => {
                const Zt = {
                  value(Ht) {
                    ft == null || ft();
                    const jt = Ht.detail.value, zt = new Set(Array.isArray(jt) ? jt : [jt]);
                    for (const Yt of X.options)
                      Yt.selected = zt.has(Yt.value);
                    Z.setValue(o, {
                      value: yt(!0)
                    }), Rt = yt(!1);
                  },
                  multipleSelection(Ht) {
                    X.multiple = !0;
                  },
                  remove(Ht) {
                    const jt = X.options, zt = Ht.detail.remove;
                    jt[zt].selected = !1, X.remove(zt), jt.length > 0 && Array.prototype.findIndex.call(jt, (Jt) => Jt.selected) === -1 && (jt[0].selected = !0), Z.setValue(o, {
                      value: yt(!0),
                      items: Nt(Ht)
                    }), Rt = yt(!1);
                  },
                  clear(Ht) {
                    for (; X.length !== 0; )
                      X.remove(0);
                    Z.setValue(o, {
                      value: null,
                      items: []
                    }), Rt = yt(!1);
                  },
                  insert(Ht) {
                    const {
                      index: jt,
                      displayValue: zt,
                      exportValue: Yt
                    } = Ht.detail.insert, Jt = X.children[jt], te = document.createElement("option");
                    te.textContent = zt, te.value = Yt, Jt ? Jt.before(te) : X.append(te), Z.setValue(o, {
                      value: yt(!0),
                      items: Nt(Ht)
                    }), Rt = yt(!1);
                  },
                  items(Ht) {
                    const {
                      items: jt
                    } = Ht.detail;
                    for (; X.length !== 0; )
                      X.remove(0);
                    for (const zt of jt) {
                      const {
                        displayValue: Yt,
                        exportValue: Jt
                      } = zt, te = document.createElement("option");
                      te.textContent = Yt, te.value = Jt, X.append(te);
                    }
                    X.options.length > 0 && (X.options[0].selected = !0), Z.setValue(o, {
                      value: yt(!0),
                      items: Nt(Ht)
                    }), Rt = yt(!1);
                  },
                  indices(Ht) {
                    const jt = new Set(Ht.detail.indices);
                    for (const zt of Ht.target.options)
                      zt.selected = jt.has(zt.index);
                    Z.setValue(o, {
                      value: yt(!0)
                    }), Rt = yt(!1);
                  },
                  editable(Ht) {
                    Ht.target.disabled = !Ht.detail.editable;
                  }
                };
                this._dispatchEventFromSandbox(Zt, Dt);
              }), X.addEventListener("input", (Dt) => {
                var Ht;
                const Zt = yt(!0);
                Z.setValue(o, {
                  value: Zt
                }), Dt.preventDefault(), (Ht = this.linkService.eventBus) == null || Ht.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: o,
                    name: "Keystroke",
                    value: Rt,
                    changeEx: Zt,
                    willCommit: !1,
                    commitKey: 1,
                    keyDown: !1
                  }
                });
              }), this._setEventListeners(X, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (Dt) => Dt.target.value)) : X.addEventListener("input", function(Dt) {
                Z.setValue(o, {
                  value: yt(!0)
                });
              }), this.data.combo && this._setTextStyle(X), this._setBackgroundColor(X), this._setDefaultPropertiesFromJS(X), this.container.append(X), this.container;
            }
          }
          class b extends h {
            constructor(Z) {
              const {
                data: o,
                elements: V
              } = Z;
              super(Z, {
                isRenderable: h._hasPopupData(o)
              }), this.elements = V;
            }
            render() {
              this.container.classList.add("popupAnnotation");
              const Z = new c({
                container: this.container,
                color: this.data.color,
                titleObj: this.data.titleObj,
                modificationDate: this.data.modificationDate,
                contentsObj: this.data.contentsObj,
                richText: this.data.richText,
                rect: this.data.rect,
                parentRect: this.data.parentRect || null,
                parent: this.parent,
                elements: this.elements,
                open: this.data.open
              }), o = [];
              for (const V of this.elements)
                V.popup = Z, o.push(V.data.id), V.addHighlightArea();
              return this.container.setAttribute("aria-controls", o.map((V) => `${n.AnnotationPrefix}${V}`).join(",")), this.container;
            }
          }
          class c {
            constructor({
              container: Z,
              color: o,
              elements: V,
              titleObj: X,
              modificationDate: rt,
              contentsObj: ft,
              richText: yt,
              parent: Rt,
              rect: Nt,
              parentRect: Dt,
              open: Zt
            }) {
              O(this, Bt);
              O(this, $t);
              O(this, Kt);
              O(this, Qt);
              O(this, nt, null);
              O(this, _t, W(this, Bt, _n).bind(this));
              O(this, pt, W(this, Qt, yi).bind(this));
              O(this, St, W(this, Kt, vi).bind(this));
              O(this, st, W(this, $t, Oe).bind(this));
              O(this, vt, null);
              O(this, gt, null);
              O(this, Lt, null);
              O(this, It, null);
              O(this, Mt, null);
              O(this, ut, null);
              O(this, lt, !1);
              O(this, it, null);
              O(this, et, null);
              O(this, mt, null);
              O(this, Tt, null);
              O(this, kt, !1);
              var jt;
              Q(this, gt, Z), Q(this, Tt, X), Q(this, Lt, ft), Q(this, mt, yt), Q(this, Mt, Rt), Q(this, vt, o), Q(this, et, Nt), Q(this, ut, Dt), Q(this, It, V);
              const Ht = g.PDFDateString.toDateObject(rt);
              Ht && Q(this, nt, Rt.l10n.get("annotation_date_string", {
                date: Ht.toLocaleDateString(),
                time: Ht.toLocaleTimeString()
              })), this.trigger = V.flatMap((zt) => zt.getElementsToTriggerPopup());
              for (const zt of this.trigger)
                zt.addEventListener("click", t(this, st)), zt.addEventListener("mouseenter", t(this, St)), zt.addEventListener("mouseleave", t(this, pt)), zt.classList.add("popupTriggerArea");
              for (const zt of V)
                (jt = zt.container) == null || jt.addEventListener("keydown", t(this, _t));
              t(this, gt).hidden = !0, Zt && W(this, $t, Oe).call(this);
            }
            render() {
              if (t(this, it))
                return;
              const {
                page: {
                  view: Z
                },
                viewport: {
                  rawDims: {
                    pageWidth: o,
                    pageHeight: V,
                    pageX: X,
                    pageY: rt
                  }
                }
              } = t(this, Mt), ft = Q(this, it, document.createElement("div"));
              if (ft.className = "popup", t(this, vt)) {
                const ie = ft.style.outlineColor = n.Util.makeHexColor(...t(this, vt));
                CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? ft.style.backgroundColor = `color-mix(in srgb, ${ie} 30%, white)` : ft.style.backgroundColor = n.Util.makeHexColor(...t(this, vt).map((le) => Math.floor(0.7 * (255 - le) + le)));
              }
              const yt = document.createElement("span");
              yt.className = "header";
              const Rt = document.createElement("h1");
              if (yt.append(Rt), {
                dir: Rt.dir,
                str: Rt.textContent
              } = t(this, Tt), ft.append(yt), t(this, nt)) {
                const ie = document.createElement("span");
                ie.classList.add("popupDate"), t(this, nt).then((se) => {
                  ie.textContent = se;
                }), yt.append(ie);
              }
              const Nt = t(this, Lt), Dt = t(this, mt);
              if (Dt != null && Dt.str && (!(Nt != null && Nt.str) || Nt.str === Dt.str))
                f.XfaLayer.render({
                  xfaHtml: Dt.html,
                  intent: "richText",
                  div: ft
                }), ft.lastChild.classList.add("richText", "popupContent");
              else {
                const ie = this._formatContents(Nt);
                ft.append(ie);
              }
              let Zt = !!t(this, ut), Ht = Zt ? t(this, ut) : t(this, et);
              for (const ie of t(this, It))
                if (!Ht || n.Util.intersect(ie.data.rect, Ht) !== null) {
                  Ht = ie.data.rect, Zt = !0;
                  break;
                }
              const jt = n.Util.normalizeRect([Ht[0], Z[3] - Ht[1] + Z[1], Ht[2], Z[3] - Ht[3] + Z[1]]), zt = 5, Yt = Zt ? Ht[2] - Ht[0] + zt : 0, Jt = jt[0] + Yt, te = jt[1], {
                style: ne
              } = t(this, gt);
              ne.left = `${100 * (Jt - X) / o}%`, ne.top = `${100 * (te - rt) / V}%`, t(this, gt).append(ft);
            }
            _formatContents({
              str: Z,
              dir: o
            }) {
              const V = document.createElement("p");
              V.classList.add("popupContent"), V.dir = o;
              const X = Z.split(/(?:\r\n?|\n)/);
              for (let rt = 0, ft = X.length; rt < ft; ++rt) {
                const yt = X[rt];
                V.append(document.createTextNode(yt)), rt < ft - 1 && V.append(document.createElement("br"));
              }
              return V;
            }
            forceHide() {
              Q(this, kt, this.isVisible), t(this, kt) && (t(this, gt).hidden = !0);
            }
            maybeShow() {
              t(this, kt) && (Q(this, kt, !1), t(this, gt).hidden = !1);
            }
            get isVisible() {
              return t(this, gt).hidden === !1;
            }
          }
          nt = new WeakMap(), _t = new WeakMap(), pt = new WeakMap(), St = new WeakMap(), st = new WeakMap(), vt = new WeakMap(), gt = new WeakMap(), Lt = new WeakMap(), It = new WeakMap(), Mt = new WeakMap(), ut = new WeakMap(), lt = new WeakMap(), it = new WeakMap(), et = new WeakMap(), mt = new WeakMap(), Tt = new WeakMap(), kt = new WeakMap(), Bt = new WeakSet(), _n = function(Z) {
            Z.altKey || Z.shiftKey || Z.ctrlKey || Z.metaKey || (Z.key === "Enter" || Z.key === "Escape" && t(this, lt)) && W(this, $t, Oe).call(this);
          }, $t = new WeakSet(), Oe = function() {
            Q(this, lt, !t(this, lt)), t(this, lt) ? (W(this, Kt, vi).call(this), t(this, gt).addEventListener("click", t(this, st)), t(this, gt).addEventListener("keydown", t(this, _t))) : (W(this, Qt, yi).call(this), t(this, gt).removeEventListener("click", t(this, st)), t(this, gt).removeEventListener("keydown", t(this, _t)));
          }, Kt = new WeakSet(), vi = function() {
            t(this, it) || this.render(), this.isVisible ? t(this, lt) && t(this, gt).classList.add("focused") : (t(this, gt).hidden = !1, t(this, gt).style.zIndex = parseInt(t(this, gt).style.zIndex) + 1e3);
          }, Qt = new WeakSet(), yi = function() {
            t(this, gt).classList.remove("focused"), !(t(this, lt) || !this.isVisible) && (t(this, gt).hidden = !0, t(this, gt).style.zIndex = parseInt(t(this, gt).style.zIndex) - 1e3);
          };
          class L extends h {
            constructor(Z) {
              super(Z, {
                isRenderable: !0,
                ignoreBorder: !0
              }), this.textContent = Z.data.textContent, this.textPosition = Z.data.textPosition, this.annotationEditorType = n.AnnotationEditorType.FREETEXT;
            }
            render() {
              if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
                const Z = document.createElement("div");
                Z.classList.add("annotationTextContent"), Z.setAttribute("role", "comment");
                for (const o of this.textContent) {
                  const V = document.createElement("span");
                  V.textContent = o, Z.append(V);
                }
                this.container.append(Z);
              }
              return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
            }
          }
          e.FreeTextAnnotationElement = L;
          class x extends h {
            constructor(o) {
              super(o, {
                isRenderable: !0,
                ignoreBorder: !0
              });
              O(this, v, null);
            }
            render() {
              this.container.classList.add("lineAnnotation");
              const o = this.data, {
                width: V,
                height: X
              } = k(o.rect), rt = this.svgFactory.create(V, X, !0), ft = Q(this, v, this.svgFactory.createElement("svg:line"));
              return ft.setAttribute("x1", o.rect[2] - o.lineCoordinates[0]), ft.setAttribute("y1", o.rect[3] - o.lineCoordinates[1]), ft.setAttribute("x2", o.rect[2] - o.lineCoordinates[2]), ft.setAttribute("y2", o.rect[3] - o.lineCoordinates[3]), ft.setAttribute("stroke-width", o.borderStyle.width || 1), ft.setAttribute("stroke", "transparent"), ft.setAttribute("fill", "transparent"), rt.append(ft), this.container.append(rt), !o.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, v);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          v = new WeakMap();
          class z extends h {
            constructor(o) {
              super(o, {
                isRenderable: !0,
                ignoreBorder: !0
              });
              O(this, D, null);
            }
            render() {
              this.container.classList.add("squareAnnotation");
              const o = this.data, {
                width: V,
                height: X
              } = k(o.rect), rt = this.svgFactory.create(V, X, !0), ft = o.borderStyle.width, yt = Q(this, D, this.svgFactory.createElement("svg:rect"));
              return yt.setAttribute("x", ft / 2), yt.setAttribute("y", ft / 2), yt.setAttribute("width", V - ft), yt.setAttribute("height", X - ft), yt.setAttribute("stroke-width", ft || 1), yt.setAttribute("stroke", "transparent"), yt.setAttribute("fill", "transparent"), rt.append(yt), this.container.append(rt), !o.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, D);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          D = new WeakMap();
          class J extends h {
            constructor(o) {
              super(o, {
                isRenderable: !0,
                ignoreBorder: !0
              });
              O(this, ht, null);
            }
            render() {
              this.container.classList.add("circleAnnotation");
              const o = this.data, {
                width: V,
                height: X
              } = k(o.rect), rt = this.svgFactory.create(V, X, !0), ft = o.borderStyle.width, yt = Q(this, ht, this.svgFactory.createElement("svg:ellipse"));
              return yt.setAttribute("cx", V / 2), yt.setAttribute("cy", X / 2), yt.setAttribute("rx", V / 2 - ft / 2), yt.setAttribute("ry", X / 2 - ft / 2), yt.setAttribute("stroke-width", ft || 1), yt.setAttribute("stroke", "transparent"), yt.setAttribute("fill", "transparent"), rt.append(yt), this.container.append(rt), !o.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, ht);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          ht = new WeakMap();
          class M extends h {
            constructor(o) {
              super(o, {
                isRenderable: !0,
                ignoreBorder: !0
              });
              O(this, ot, null);
              this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
            }
            render() {
              this.container.classList.add(this.containerClassName);
              const o = this.data, {
                width: V,
                height: X
              } = k(o.rect), rt = this.svgFactory.create(V, X, !0);
              let ft = [];
              for (const Rt of o.vertices) {
                const Nt = Rt.x - o.rect[0], Dt = o.rect[3] - Rt.y;
                ft.push(Nt + "," + Dt);
              }
              ft = ft.join(" ");
              const yt = Q(this, ot, this.svgFactory.createElement(this.svgElementName));
              return yt.setAttribute("points", ft), yt.setAttribute("stroke-width", o.borderStyle.width || 1), yt.setAttribute("stroke", "transparent"), yt.setAttribute("fill", "transparent"), rt.append(yt), this.container.append(rt), !o.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, ot);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          ot = new WeakMap();
          class Y extends M {
            constructor(Z) {
              super(Z), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
            }
          }
          class tt extends h {
            constructor(Z) {
              super(Z, {
                isRenderable: !0,
                ignoreBorder: !0
              });
            }
            render() {
              return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
          }
          class q extends h {
            constructor(o) {
              super(o, {
                isRenderable: !0,
                ignoreBorder: !0
              });
              O(this, dt, []);
              this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = n.AnnotationEditorType.INK;
            }
            render() {
              this.container.classList.add(this.containerClassName);
              const o = this.data, {
                width: V,
                height: X
              } = k(o.rect), rt = this.svgFactory.create(V, X, !0);
              for (const ft of o.inkLists) {
                let yt = [];
                for (const Nt of ft) {
                  const Dt = Nt.x - o.rect[0], Zt = o.rect[3] - Nt.y;
                  yt.push(`${Dt},${Zt}`);
                }
                yt = yt.join(" ");
                const Rt = this.svgFactory.createElement(this.svgElementName);
                t(this, dt).push(Rt), Rt.setAttribute("points", yt), Rt.setAttribute("stroke-width", o.borderStyle.width || 1), Rt.setAttribute("stroke", "transparent"), Rt.setAttribute("fill", "transparent"), !o.popupRef && this.hasPopupData && this._createPopup(), rt.append(Rt);
              }
              return this.container.append(rt), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, dt);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          dt = new WeakMap(), e.InkAnnotationElement = q;
          class U extends h {
            constructor(Z) {
              super(Z, {
                isRenderable: !0,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
            }
          }
          class at extends h {
            constructor(Z) {
              super(Z, {
                isRenderable: !0,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
            }
          }
          class $ extends h {
            constructor(Z) {
              super(Z, {
                isRenderable: !0,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
            }
          }
          class wt extends h {
            constructor(Z) {
              super(Z, {
                isRenderable: !0,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
            }
          }
          class Pt extends h {
            constructor(Z) {
              super(Z, {
                isRenderable: !0,
                ignoreBorder: !0
              });
            }
            render() {
              return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
          }
          e.StampAnnotationElement = Pt;
          class N extends h {
            constructor(o) {
              var rt;
              super(o, {
                isRenderable: !0
              });
              O(this, j);
              O(this, bt, null);
              const {
                filename: V,
                content: X
              } = this.data.file;
              this.filename = (0, g.getFilenameFromUrl)(V, !0), this.content = X, (rt = this.linkService.eventBus) == null || rt.dispatch("fileattachmentannotation", {
                source: this,
                filename: V,
                content: X
              });
            }
            render() {
              this.container.classList.add("fileAttachmentAnnotation");
              const {
                container: o,
                data: V
              } = this;
              let X;
              V.hasAppearance || V.fillAlpha === 0 ? X = document.createElement("div") : (X = document.createElement("img"), X.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(V.name) ? "paperclip" : "pushpin"}.svg`, V.fillAlpha && V.fillAlpha < 1 && (X.style = `filter: opacity(${Math.round(V.fillAlpha * 100)}%);`)), X.addEventListener("dblclick", W(this, j, Ai).bind(this)), Q(this, bt, X);
              const {
                isMac: rt
              } = n.FeatureTest.platform;
              return o.addEventListener("keydown", (ft) => {
                ft.key === "Enter" && (rt ? ft.metaKey : ft.ctrlKey) && W(this, j, Ai).call(this);
              }), !V.popupRef && this.hasPopupData ? this._createPopup() : X.classList.add("popupTriggerArea"), o.append(X), o;
            }
            getElementsToTriggerPopup() {
              return t(this, bt);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          bt = new WeakMap(), j = new WeakSet(), Ai = function() {
            var o;
            (o = this.downloadManager) == null || o.openOrDownloadData(this.container, this.content, this.filename);
          };
          class a {
            constructor({
              div: Z,
              accessibilityManager: o,
              annotationCanvasMap: V,
              l10n: X,
              page: rt,
              viewport: ft
            }) {
              O(this, Ot);
              O(this, Ct);
              O(this, xt, null);
              O(this, Et, null);
              O(this, Ft, /* @__PURE__ */ new Map());
              this.div = Z, Q(this, xt, o), Q(this, Et, V), this.l10n = X, this.page = rt, this.viewport = ft, this.zIndex = 0, this.l10n || (this.l10n = F.NullL10n);
            }
            async render(Z) {
              const {
                annotations: o
              } = Z, V = this.div;
              (0, g.setLayerDimensions)(V, this.viewport);
              const X = /* @__PURE__ */ new Map(), rt = {
                data: null,
                layer: V,
                linkService: Z.linkService,
                downloadManager: Z.downloadManager,
                imageResourcesPath: Z.imageResourcesPath || "",
                renderForms: Z.renderForms !== !1,
                svgFactory: new g.DOMSVGFactory(),
                annotationStorage: Z.annotationStorage || new G.AnnotationStorage(),
                enableScripting: Z.enableScripting === !0,
                hasJSActions: Z.hasJSActions,
                fieldObjects: Z.fieldObjects,
                parent: this,
                elements: null
              };
              for (const ft of o) {
                if (ft.noHTML)
                  continue;
                const yt = ft.annotationType === n.AnnotationType.POPUP;
                if (yt) {
                  const Dt = X.get(ft.id);
                  if (!Dt)
                    continue;
                  rt.elements = Dt;
                } else {
                  const {
                    width: Dt,
                    height: Zt
                  } = k(ft.rect);
                  if (Dt <= 0 || Zt <= 0)
                    continue;
                }
                rt.data = ft;
                const Rt = y.create(rt);
                if (!Rt.isRenderable)
                  continue;
                if (!yt && ft.popupRef) {
                  const Dt = X.get(ft.popupRef);
                  Dt ? Dt.push(Rt) : X.set(ft.popupRef, [Rt]);
                }
                Rt.annotationEditorType > 0 && t(this, Ft).set(Rt.data.id, Rt);
                const Nt = Rt.render();
                ft.hidden && (Nt.style.visibility = "hidden"), W(this, Ot, bn).call(this, Nt, ft.id);
              }
              W(this, Ct, Si).call(this), await this.l10n.translate(V);
            }
            update({
              viewport: Z
            }) {
              const o = this.div;
              this.viewport = Z, (0, g.setLayerDimensions)(o, {
                rotation: Z.rotation
              }), W(this, Ct, Si).call(this), o.hidden = !1;
            }
            getEditableAnnotations() {
              return Array.from(t(this, Ft).values());
            }
            getEditableAnnotation(Z) {
              return t(this, Ft).get(Z);
            }
          }
          xt = new WeakMap(), Et = new WeakMap(), Ft = new WeakMap(), Ot = new WeakSet(), bn = function(Z, o) {
            var X;
            const V = Z.firstChild || Z;
            V.id = `${n.AnnotationPrefix}${o}`, this.div.append(Z), (X = t(this, xt)) == null || X.moveElementInDOM(this.div, Z, V, !1);
          }, Ct = new WeakSet(), Si = function() {
            if (!t(this, Et))
              return;
            const Z = this.div;
            for (const [o, V] of t(this, Et)) {
              const X = Z.querySelector(`[data-annotation-id="${o}"]`);
              if (!X)
                continue;
              const {
                firstChild: rt
              } = X;
              rt ? rt.nodeName === "CANVAS" ? rt.replaceWith(V) : rt.before(V) : X.append(V);
            }
            t(this, Et).clear();
          }, e.AnnotationLayer = a;
        },
        /* 30 */
        /***/
        (E, e) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.ColorConverters = void 0;
          function C(G) {
            return Math.floor(Math.max(0, Math.min(1, G)) * 255).toString(16).padStart(2, "0");
          }
          function n(G) {
            return Math.max(0, Math.min(255, 255 * G));
          }
          class g {
            static CMYK_G([B, F, f, d]) {
              return ["G", 1 - Math.min(1, 0.3 * B + 0.59 * f + 0.11 * F + d)];
            }
            static G_CMYK([B]) {
              return ["CMYK", 0, 0, 0, 1 - B];
            }
            static G_RGB([B]) {
              return ["RGB", B, B, B];
            }
            static G_rgb([B]) {
              return B = n(B), [B, B, B];
            }
            static G_HTML([B]) {
              const F = C(B);
              return `#${F}${F}${F}`;
            }
            static RGB_G([B, F, f]) {
              return ["G", 0.3 * B + 0.59 * F + 0.11 * f];
            }
            static RGB_rgb(B) {
              return B.map(n);
            }
            static RGB_HTML(B) {
              return `#${B.map(C).join("")}`;
            }
            static T_HTML() {
              return "#00000000";
            }
            static T_rgb() {
              return [null];
            }
            static CMYK_RGB([B, F, f, d]) {
              return ["RGB", 1 - Math.min(1, B + d), 1 - Math.min(1, f + d), 1 - Math.min(1, F + d)];
            }
            static CMYK_rgb([B, F, f, d]) {
              return [n(1 - Math.min(1, B + d)), n(1 - Math.min(1, f + d)), n(1 - Math.min(1, F + d))];
            }
            static CMYK_HTML(B) {
              const F = this.CMYK_RGB(B).slice(1);
              return this.RGB_HTML(F);
            }
            static RGB_CMYK([B, F, f]) {
              const d = 1 - B, r = 1 - F, I = 1 - f, k = Math.min(d, r, I);
              return ["CMYK", d, r, I, k];
            }
          }
          e.ColorConverters = g;
        },
        /* 31 */
        /***/
        (E, e) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.NullL10n = void 0, e.getL10nFallback = n;
          const C = {
            of_pages: "of {{pagesCount}}",
            page_of_pages: "({{pageNumber}} of {{pagesCount}})",
            document_properties_kb: "{{size_kb}} KB ({{size_b}} bytes)",
            document_properties_mb: "{{size_mb}} MB ({{size_b}} bytes)",
            document_properties_date_string: "{{date}}, {{time}}",
            document_properties_page_size_unit_inches: "in",
            document_properties_page_size_unit_millimeters: "mm",
            document_properties_page_size_orientation_portrait: "portrait",
            document_properties_page_size_orientation_landscape: "landscape",
            document_properties_page_size_name_a3: "A3",
            document_properties_page_size_name_a4: "A4",
            document_properties_page_size_name_letter: "Letter",
            document_properties_page_size_name_legal: "Legal",
            document_properties_page_size_dimension_string: "{{width}} × {{height}} {{unit}} ({{orientation}})",
            document_properties_page_size_dimension_name_string: "{{width}} × {{height}} {{unit}} ({{name}}, {{orientation}})",
            document_properties_linearized_yes: "Yes",
            document_properties_linearized_no: "No",
            additional_layers: "Additional Layers",
            page_landmark: "Page {{page}}",
            thumb_page_title: "Page {{page}}",
            thumb_page_canvas: "Thumbnail of Page {{page}}",
            find_reached_top: "Reached top of document, continued from bottom",
            find_reached_bottom: "Reached end of document, continued from top",
            "find_match_count[one]": "{{current}} of {{total}} match",
            "find_match_count[other]": "{{current}} of {{total}} matches",
            "find_match_count_limit[one]": "More than {{limit}} match",
            "find_match_count_limit[other]": "More than {{limit}} matches",
            find_not_found: "Phrase not found",
            page_scale_width: "Page Width",
            page_scale_fit: "Page Fit",
            page_scale_auto: "Automatic Zoom",
            page_scale_actual: "Actual Size",
            page_scale_percent: "{{scale}}%",
            loading_error: "An error occurred while loading the PDF.",
            invalid_file_error: "Invalid or corrupted PDF file.",
            missing_file_error: "Missing PDF file.",
            unexpected_response_error: "Unexpected server response.",
            rendering_error: "An error occurred while rendering the page.",
            annotation_date_string: "{{date}}, {{time}}",
            printing_not_supported: "Warning: Printing is not fully supported by this browser.",
            printing_not_ready: "Warning: The PDF is not fully loaded for printing.",
            web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts.",
            free_text2_default_content: "Start typing…",
            editor_free_text2_aria_label: "Text Editor",
            editor_ink2_aria_label: "Draw Editor",
            editor_ink_canvas_aria_label: "User-created image",
            editor_alt_text_button_label: "Alt text",
            editor_alt_text_edit_button_label: "Edit alt text",
            editor_alt_text_decorative_tooltip: "Marked as decorative"
          };
          C.print_progress_percent = "{{progress}}%";
          function n(B, F) {
            switch (B) {
              case "find_match_count":
                B = `find_match_count[${F.total === 1 ? "one" : "other"}]`;
                break;
              case "find_match_count_limit":
                B = `find_match_count_limit[${F.limit === 1 ? "one" : "other"}]`;
                break;
            }
            return C[B] || "";
          }
          function g(B, F) {
            return F ? B.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (f, d) => d in F ? F[d] : "{{" + d + "}}") : B;
          }
          const G = {
            async getLanguage() {
              return "en-us";
            },
            async getDirection() {
              return "ltr";
            },
            async get(B, F = null, f = n(B, F)) {
              return g(f, F);
            },
            async translate(B) {
            }
          };
          e.NullL10n = G;
        },
        /* 32 */
        /***/
        (E, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.XfaLayer = void 0;
          var n = C(25);
          class g {
            static setupStorage(B, F, f, d, r) {
              const I = d.getValue(F, {
                value: null
              });
              switch (f.name) {
                case "textarea":
                  if (I.value !== null && (B.textContent = I.value), r === "print")
                    break;
                  B.addEventListener("input", (k) => {
                    d.setValue(F, {
                      value: k.target.value
                    });
                  });
                  break;
                case "input":
                  if (f.attributes.type === "radio" || f.attributes.type === "checkbox") {
                    if (I.value === f.attributes.xfaOn ? B.setAttribute("checked", !0) : I.value === f.attributes.xfaOff && B.removeAttribute("checked"), r === "print")
                      break;
                    B.addEventListener("change", (k) => {
                      d.setValue(F, {
                        value: k.target.checked ? k.target.getAttribute("xfaOn") : k.target.getAttribute("xfaOff")
                      });
                    });
                  } else {
                    if (I.value !== null && B.setAttribute("value", I.value), r === "print")
                      break;
                    B.addEventListener("input", (k) => {
                      d.setValue(F, {
                        value: k.target.value
                      });
                    });
                  }
                  break;
                case "select":
                  if (I.value !== null) {
                    B.setAttribute("value", I.value);
                    for (const k of f.children)
                      k.attributes.value === I.value ? k.attributes.selected = !0 : k.attributes.hasOwnProperty("selected") && delete k.attributes.selected;
                  }
                  B.addEventListener("input", (k) => {
                    const y = k.target.options, h = y.selectedIndex === -1 ? "" : y[y.selectedIndex].value;
                    d.setValue(F, {
                      value: h
                    });
                  });
                  break;
              }
            }
            static setAttributes({
              html: B,
              element: F,
              storage: f = null,
              intent: d,
              linkService: r
            }) {
              const {
                attributes: I
              } = F, k = B instanceof HTMLAnchorElement;
              I.type === "radio" && (I.name = `${I.name}-${d}`);
              for (const [y, h] of Object.entries(I))
                if (h != null)
                  switch (y) {
                    case "class":
                      h.length && B.setAttribute(y, h.join(" "));
                      break;
                    case "dataId":
                      break;
                    case "id":
                      B.setAttribute("data-element-id", h);
                      break;
                    case "style":
                      Object.assign(B.style, h);
                      break;
                    case "textContent":
                      B.textContent = h;
                      break;
                    default:
                      (!k || y !== "href" && y !== "newWindow") && B.setAttribute(y, h);
                  }
              k && r.addLinkAttributes(B, I.href, I.newWindow), f && I.dataId && this.setupStorage(B, I.dataId, F, f);
            }
            static render(B) {
              var _;
              const F = B.annotationStorage, f = B.linkService, d = B.xfaHtml, r = B.intent || "display", I = document.createElement(d.name);
              d.attributes && this.setAttributes({
                html: I,
                element: d,
                intent: r,
                linkService: f
              });
              const k = [[d, -1, I]], y = B.div;
              if (y.append(I), B.viewport) {
                const m = `matrix(${B.viewport.transform.join(",")})`;
                y.style.transform = m;
              }
              r !== "richText" && y.setAttribute("class", "xfaLayer xfaFont");
              const h = [];
              for (; k.length > 0; ) {
                const [m, P, A] = k.at(-1);
                if (P + 1 === m.children.length) {
                  k.pop();
                  continue;
                }
                const u = m.children[++k.at(-1)[1]];
                if (u === null)
                  continue;
                const {
                  name: S
                } = u;
                if (S === "#text") {
                  const i = document.createTextNode(u.value);
                  h.push(i), A.append(i);
                  continue;
                }
                const s = (_ = u == null ? void 0 : u.attributes) != null && _.xmlns ? document.createElementNS(u.attributes.xmlns, S) : document.createElement(S);
                if (A.append(s), u.attributes && this.setAttributes({
                  html: s,
                  element: u,
                  storage: F,
                  intent: r,
                  linkService: f
                }), u.children && u.children.length > 0)
                  k.push([u, -1, s]);
                else if (u.value) {
                  const i = document.createTextNode(u.value);
                  n.XfaText.shouldBuildText(S) && h.push(i), s.append(i);
                }
              }
              for (const m of y.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
                m.setAttribute("readOnly", !0);
              return {
                textDivs: h
              };
            }
            static update(B) {
              const F = `matrix(${B.viewport.transform.join(",")})`;
              B.div.style.transform = F, B.div.hidden = !1;
            }
          }
          e.XfaLayer = g;
        },
        /* 33 */
        /***/
        (E, e, C) => {
          var d, r, I, k, y, h, _, m, P, A, u, S, s, i, w, vn, c, yn, x, An, J, Sn, Y, Ei, q, En, at, wi, wt, wn, N, Pn, p, Cn, T, Tn, H, xn, nt, ae, pt, Pi, st, Ne, gt, Be, It, ge, ut, Ci, it, Ve, mt, Mn, kt, Ti, Ut, Ln, Gt, kn, Xt, xi, At, Ue, D, me;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.InkEditor = void 0;
          var n = C(1), g = C(4), G = C(29), B = C(6), F = C(5);
          const ot = class ot extends g.AnnotationEditor {
            constructor(j) {
              super({
                ...j,
                name: "inkEditor"
              });
              O(this, w);
              O(this, c);
              O(this, x);
              O(this, J);
              O(this, Y);
              O(this, q);
              O(this, at);
              O(this, wt);
              O(this, N);
              O(this, p);
              O(this, T);
              O(this, H);
              O(this, nt);
              O(this, pt);
              O(this, st);
              O(this, gt);
              O(this, It);
              O(this, ut);
              O(this, it);
              O(this, Gt);
              O(this, Xt);
              O(this, At);
              O(this, D);
              O(this, d, 0);
              O(this, r, 0);
              O(this, I, this.canvasPointermove.bind(this));
              O(this, k, this.canvasPointerleave.bind(this));
              O(this, y, this.canvasPointerup.bind(this));
              O(this, h, this.canvasPointerdown.bind(this));
              O(this, _, new Path2D());
              O(this, m, !1);
              O(this, P, !1);
              O(this, A, !1);
              O(this, u, null);
              O(this, S, 0);
              O(this, s, 0);
              O(this, i, null);
              this.color = j.color || null, this.thickness = j.thickness || null, this.opacity = j.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
            }
            static initialize(j) {
              g.AnnotationEditor.initialize(j, {
                strings: ["editor_ink_canvas_aria_label", "editor_ink2_aria_label"]
              });
            }
            static updateDefaultParams(j, ct) {
              switch (j) {
                case n.AnnotationEditorParamsType.INK_THICKNESS:
                  ot._defaultThickness = ct;
                  break;
                case n.AnnotationEditorParamsType.INK_COLOR:
                  ot._defaultColor = ct;
                  break;
                case n.AnnotationEditorParamsType.INK_OPACITY:
                  ot._defaultOpacity = ct / 100;
                  break;
              }
            }
            updateParams(j, ct) {
              switch (j) {
                case n.AnnotationEditorParamsType.INK_THICKNESS:
                  W(this, w, vn).call(this, ct);
                  break;
                case n.AnnotationEditorParamsType.INK_COLOR:
                  W(this, c, yn).call(this, ct);
                  break;
                case n.AnnotationEditorParamsType.INK_OPACITY:
                  W(this, x, An).call(this, ct);
                  break;
              }
            }
            static get defaultPropertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.INK_THICKNESS, ot._defaultThickness], [n.AnnotationEditorParamsType.INK_COLOR, ot._defaultColor || g.AnnotationEditor._defaultLineColor], [n.AnnotationEditorParamsType.INK_OPACITY, Math.round(ot._defaultOpacity * 100)]];
            }
            get propertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || ot._defaultThickness], [n.AnnotationEditorParamsType.INK_COLOR, this.color || ot._defaultColor || g.AnnotationEditor._defaultLineColor], [n.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? ot._defaultOpacity))]];
            }
            rebuild() {
              this.parent && (super.rebuild(), this.div !== null && (this.canvas || (W(this, st, Ne).call(this), W(this, gt, Be).call(this)), this.isAttachedToDOM || (this.parent.add(this), W(this, It, ge).call(this)), W(this, D, me).call(this)));
            }
            remove() {
              this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, t(this, u).disconnect(), Q(this, u, null), super.remove());
            }
            setParent(j) {
              !this.parent && j ? this._uiManager.removeShouldRescale(this) : this.parent && j === null && this._uiManager.addShouldRescale(this), super.setParent(j);
            }
            onScaleChanging() {
              const [j, ct] = this.parentDimensions, xt = this.width * j, Et = this.height * ct;
              this.setDimensions(xt, Et);
            }
            enableEditMode() {
              t(this, m) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", t(this, h)));
            }
            disableEditMode() {
              !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", t(this, h)));
            }
            onceAdded() {
              this._isDraggable = !this.isEmpty();
            }
            isEmpty() {
              return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
            }
            commit() {
              t(this, m) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), Q(this, m, !0), this.div.classList.add("disabled"), W(this, D, me).call(this, !0), this.makeResizable(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
                preventScroll: !0
              }));
            }
            focusin(j) {
              this._focusEventsAllowed && (super.focusin(j), this.enableEditMode());
            }
            canvasPointerdown(j) {
              j.button !== 0 || !this.isInEditMode() || t(this, m) || (this.setInForeground(), j.preventDefault(), j.type !== "mouse" && this.div.focus(), W(this, q, En).call(this, j.offsetX, j.offsetY));
            }
            canvasPointermove(j) {
              j.preventDefault(), W(this, at, wi).call(this, j.offsetX, j.offsetY);
            }
            canvasPointerup(j) {
              j.preventDefault(), W(this, pt, Pi).call(this, j);
            }
            canvasPointerleave(j) {
              W(this, pt, Pi).call(this, j);
            }
            get isResizable() {
              return !this.isEmpty() && t(this, m);
            }
            render() {
              if (this.div)
                return this.div;
              let j, ct;
              this.width && (j = this.x, ct = this.y), super.render(), g.AnnotationEditor._l10nPromise.get("editor_ink2_aria_label").then((Wt) => {
                var Ct;
                return (Ct = this.div) == null ? void 0 : Ct.setAttribute("aria-label", Wt);
              });
              const [xt, Et, Ft, Ot] = W(this, J, Sn).call(this);
              if (this.setAt(xt, Et, 0, 0), this.setDims(Ft, Ot), W(this, st, Ne).call(this), this.width) {
                const [Wt, Ct] = this.parentDimensions;
                this.setAspectRatio(this.width * Wt, this.height * Ct), this.setAt(j * Wt, ct * Ct, this.width * Wt, this.height * Ct), Q(this, A, !0), W(this, It, ge).call(this), this.setDims(this.width * Wt, this.height * Ct), W(this, nt, ae).call(this), this.div.classList.add("disabled");
              } else
                this.div.classList.add("editing"), this.enableEditMode();
              return W(this, gt, Be).call(this), this.div;
            }
            setDimensions(j, ct) {
              const xt = Math.round(j), Et = Math.round(ct);
              if (t(this, S) === xt && t(this, s) === Et)
                return;
              Q(this, S, xt), Q(this, s, Et), this.canvas.style.visibility = "hidden";
              const [Ft, Ot] = this.parentDimensions;
              this.width = j / Ft, this.height = ct / Ot, this.fixAndSetPosition(), t(this, m) && W(this, ut, Ci).call(this, j, ct), W(this, It, ge).call(this), W(this, nt, ae).call(this), this.canvas.style.visibility = "visible", this.fixDims();
            }
            static deserialize(j, ct, xt) {
              var rt, ft, yt;
              if (j instanceof G.InkAnnotationElement)
                return null;
              const Et = super.deserialize(j, ct, xt);
              Et.thickness = j.thickness, Et.color = n.Util.makeHexColor(...j.color), Et.opacity = j.opacity;
              const [Ft, Ot] = Et.pageDimensions, Wt = Et.width * Ft, Ct = Et.height * Ot, qt = Et.parentScale, Vt = j.thickness / 2;
              Q(Et, m, !0), Q(Et, S, Math.round(Wt)), Q(Et, s, Math.round(Ct));
              const {
                paths: Z,
                rect: o,
                rotation: V
              } = j;
              for (let {
                bezier: Rt
              } of Z) {
                Rt = W(rt = ot, Ut, Ln).call(rt, Rt, o, V);
                const Nt = [];
                Et.paths.push(Nt);
                let Dt = qt * (Rt[0] - Vt), Zt = qt * (Rt[1] - Vt);
                for (let jt = 2, zt = Rt.length; jt < zt; jt += 6) {
                  const Yt = qt * (Rt[jt] - Vt), Jt = qt * (Rt[jt + 1] - Vt), te = qt * (Rt[jt + 2] - Vt), ne = qt * (Rt[jt + 3] - Vt), ie = qt * (Rt[jt + 4] - Vt), se = qt * (Rt[jt + 5] - Vt);
                  Nt.push([[Dt, Zt], [Yt, Jt], [te, ne], [ie, se]]), Dt = ie, Zt = se;
                }
                const Ht = W(this, mt, Mn).call(this, Nt);
                Et.bezierPath2D.push(Ht);
              }
              const X = W(ft = Et, Xt, xi).call(ft);
              return Q(Et, r, Math.max(g.AnnotationEditor.MIN_SIZE, X[2] - X[0])), Q(Et, d, Math.max(g.AnnotationEditor.MIN_SIZE, X[3] - X[1])), W(yt = Et, ut, Ci).call(yt, Wt, Ct), Et;
            }
            serialize() {
              if (this.isEmpty())
                return null;
              const j = this.getRect(0, 0), ct = g.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
              return {
                annotationType: n.AnnotationEditorType.INK,
                color: ct,
                thickness: this.thickness,
                opacity: this.opacity,
                paths: W(this, Gt, kn).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, j),
                pageIndex: this.pageIndex,
                rect: j,
                rotation: this.rotation,
                structTreeParentId: this._structTreeParentId
              };
            }
          };
          d = new WeakMap(), r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), y = new WeakMap(), h = new WeakMap(), _ = new WeakMap(), m = new WeakMap(), P = new WeakMap(), A = new WeakMap(), u = new WeakMap(), S = new WeakMap(), s = new WeakMap(), i = new WeakMap(), w = new WeakSet(), vn = function(j) {
            const ct = this.thickness;
            this.addCommands({
              cmd: () => {
                this.thickness = j, W(this, D, me).call(this);
              },
              undo: () => {
                this.thickness = ct, W(this, D, me).call(this);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.INK_THICKNESS,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, c = new WeakSet(), yn = function(j) {
            const ct = this.color;
            this.addCommands({
              cmd: () => {
                this.color = j, W(this, nt, ae).call(this);
              },
              undo: () => {
                this.color = ct, W(this, nt, ae).call(this);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.INK_COLOR,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, x = new WeakSet(), An = function(j) {
            j /= 100;
            const ct = this.opacity;
            this.addCommands({
              cmd: () => {
                this.opacity = j, W(this, nt, ae).call(this);
              },
              undo: () => {
                this.opacity = ct, W(this, nt, ae).call(this);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.INK_OPACITY,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, J = new WeakSet(), Sn = function() {
            const {
              parentRotation: j,
              parentDimensions: [ct, xt]
            } = this;
            switch (j) {
              case 90:
                return [0, xt, xt, ct];
              case 180:
                return [ct, xt, ct, xt];
              case 270:
                return [ct, 0, xt, ct];
              default:
                return [0, 0, ct, xt];
            }
          }, Y = new WeakSet(), Ei = function() {
            const {
              ctx: j,
              color: ct,
              opacity: xt,
              thickness: Et,
              parentScale: Ft,
              scaleFactor: Ot
            } = this;
            j.lineWidth = Et * Ft / Ot, j.lineCap = "round", j.lineJoin = "round", j.miterLimit = 10, j.strokeStyle = `${ct}${(0, F.opacityToHex)(xt)}`;
          }, q = new WeakSet(), En = function(j, ct) {
            this.canvas.addEventListener("contextmenu", B.noContextMenu), this.canvas.addEventListener("pointerleave", t(this, k)), this.canvas.addEventListener("pointermove", t(this, I)), this.canvas.addEventListener("pointerup", t(this, y)), this.canvas.removeEventListener("pointerdown", t(this, h)), this.isEditing = !0, t(this, A) || (Q(this, A, !0), W(this, It, ge).call(this), this.thickness || (this.thickness = ot._defaultThickness), this.color || (this.color = ot._defaultColor || g.AnnotationEditor._defaultLineColor), this.opacity ?? (this.opacity = ot._defaultOpacity)), this.currentPath.push([j, ct]), Q(this, P, !1), W(this, Y, Ei).call(this), Q(this, i, () => {
              W(this, p, Cn).call(this), t(this, i) && window.requestAnimationFrame(t(this, i));
            }), window.requestAnimationFrame(t(this, i));
          }, at = new WeakSet(), wi = function(j, ct) {
            const [xt, Et] = this.currentPath.at(-1);
            if (this.currentPath.length > 1 && j === xt && ct === Et)
              return;
            const Ft = this.currentPath;
            let Ot = t(this, _);
            if (Ft.push([j, ct]), Q(this, P, !0), Ft.length <= 2) {
              Ot.moveTo(...Ft[0]), Ot.lineTo(j, ct);
              return;
            }
            Ft.length === 3 && (Q(this, _, Ot = new Path2D()), Ot.moveTo(...Ft[0])), W(this, T, Tn).call(this, Ot, ...Ft.at(-3), ...Ft.at(-2), j, ct);
          }, wt = new WeakSet(), wn = function() {
            if (this.currentPath.length === 0)
              return;
            const j = this.currentPath.at(-1);
            t(this, _).lineTo(...j);
          }, N = new WeakSet(), Pn = function(j, ct) {
            Q(this, i, null), j = Math.min(Math.max(j, 0), this.canvas.width), ct = Math.min(Math.max(ct, 0), this.canvas.height), W(this, at, wi).call(this, j, ct), W(this, wt, wn).call(this);
            let xt;
            if (this.currentPath.length !== 1)
              xt = W(this, H, xn).call(this);
            else {
              const Ct = [j, ct];
              xt = [[Ct, Ct.slice(), Ct.slice(), Ct]];
            }
            const Et = t(this, _), Ft = this.currentPath;
            this.currentPath = [], Q(this, _, new Path2D());
            const Ot = () => {
              this.allRawPaths.push(Ft), this.paths.push(xt), this.bezierPath2D.push(Et), this.rebuild();
            }, Wt = () => {
              this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (W(this, st, Ne).call(this), W(this, gt, Be).call(this)), W(this, D, me).call(this));
            };
            this.addCommands({
              cmd: Ot,
              undo: Wt,
              mustExec: !0
            });
          }, p = new WeakSet(), Cn = function() {
            if (!t(this, P))
              return;
            Q(this, P, !1);
            const j = Math.ceil(this.thickness * this.parentScale), ct = this.currentPath.slice(-3), xt = ct.map((Ot) => Ot[0]), Et = ct.map((Ot) => Ot[1]);
            Math.min(...xt) - j, Math.max(...xt) + j, Math.min(...Et) - j, Math.max(...Et) + j;
            const {
              ctx: Ft
            } = this;
            Ft.save(), Ft.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (const Ot of this.bezierPath2D)
              Ft.stroke(Ot);
            Ft.stroke(t(this, _)), Ft.restore();
          }, T = new WeakSet(), Tn = function(j, ct, xt, Et, Ft, Ot, Wt) {
            const Ct = (ct + Et) / 2, qt = (xt + Ft) / 2, Vt = (Et + Ot) / 2, Z = (Ft + Wt) / 2;
            j.bezierCurveTo(Ct + 2 * (Et - Ct) / 3, qt + 2 * (Ft - qt) / 3, Vt + 2 * (Et - Vt) / 3, Z + 2 * (Ft - Z) / 3, Vt, Z);
          }, H = new WeakSet(), xn = function() {
            const j = this.currentPath;
            if (j.length <= 2)
              return [[j[0], j[0], j.at(-1), j.at(-1)]];
            const ct = [];
            let xt, [Et, Ft] = j[0];
            for (xt = 1; xt < j.length - 2; xt++) {
              const [o, V] = j[xt], [X, rt] = j[xt + 1], ft = (o + X) / 2, yt = (V + rt) / 2, Rt = [Et + 2 * (o - Et) / 3, Ft + 2 * (V - Ft) / 3], Nt = [ft + 2 * (o - ft) / 3, yt + 2 * (V - yt) / 3];
              ct.push([[Et, Ft], Rt, Nt, [ft, yt]]), [Et, Ft] = [ft, yt];
            }
            const [Ot, Wt] = j[xt], [Ct, qt] = j[xt + 1], Vt = [Et + 2 * (Ot - Et) / 3, Ft + 2 * (Wt - Ft) / 3], Z = [Ct + 2 * (Ot - Ct) / 3, qt + 2 * (Wt - qt) / 3];
            return ct.push([[Et, Ft], Vt, Z, [Ct, qt]]), ct;
          }, nt = new WeakSet(), ae = function() {
            if (this.isEmpty()) {
              W(this, it, Ve).call(this);
              return;
            }
            W(this, Y, Ei).call(this);
            const {
              canvas: j,
              ctx: ct
            } = this;
            ct.setTransform(1, 0, 0, 1, 0, 0), ct.clearRect(0, 0, j.width, j.height), W(this, it, Ve).call(this);
            for (const xt of this.bezierPath2D)
              ct.stroke(xt);
          }, pt = new WeakSet(), Pi = function(j) {
            this.canvas.removeEventListener("pointerleave", t(this, k)), this.canvas.removeEventListener("pointermove", t(this, I)), this.canvas.removeEventListener("pointerup", t(this, y)), this.canvas.addEventListener("pointerdown", t(this, h)), setTimeout(() => {
              this.canvas.removeEventListener("contextmenu", B.noContextMenu);
            }, 10), W(this, N, Pn).call(this, j.offsetX, j.offsetY), this.addToAnnotationStorage(), this.setInBackground();
          }, st = new WeakSet(), Ne = function() {
            this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", g.AnnotationEditor._l10nPromise.get("editor_ink_canvas_aria_label").then((j) => {
              var ct;
              return (ct = this.canvas) == null ? void 0 : ct.setAttribute("aria-label", j);
            }), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
          }, gt = new WeakSet(), Be = function() {
            Q(this, u, new ResizeObserver((j) => {
              const ct = j[0].contentRect;
              ct.width && ct.height && this.setDimensions(ct.width, ct.height);
            })), t(this, u).observe(this.div);
          }, It = new WeakSet(), ge = function() {
            if (!t(this, A))
              return;
            const [j, ct] = this.parentDimensions;
            this.canvas.width = Math.ceil(this.width * j), this.canvas.height = Math.ceil(this.height * ct), W(this, it, Ve).call(this);
          }, ut = new WeakSet(), Ci = function(j, ct) {
            const xt = W(this, At, Ue).call(this), Et = (j - xt) / t(this, r), Ft = (ct - xt) / t(this, d);
            this.scaleFactor = Math.min(Et, Ft);
          }, it = new WeakSet(), Ve = function() {
            const j = W(this, At, Ue).call(this) / 2;
            this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + j, this.translationY * this.scaleFactor + j);
          }, mt = new WeakSet(), Mn = function(j) {
            const ct = new Path2D();
            for (let xt = 0, Et = j.length; xt < Et; xt++) {
              const [Ft, Ot, Wt, Ct] = j[xt];
              xt === 0 && ct.moveTo(...Ft), ct.bezierCurveTo(Ot[0], Ot[1], Wt[0], Wt[1], Ct[0], Ct[1]);
            }
            return ct;
          }, kt = new WeakSet(), Ti = function(j, ct, xt) {
            const [Et, Ft, Ot, Wt] = ct;
            switch (xt) {
              case 0:
                for (let Ct = 0, qt = j.length; Ct < qt; Ct += 2)
                  j[Ct] += Et, j[Ct + 1] = Wt - j[Ct + 1];
                break;
              case 90:
                for (let Ct = 0, qt = j.length; Ct < qt; Ct += 2) {
                  const Vt = j[Ct];
                  j[Ct] = j[Ct + 1] + Et, j[Ct + 1] = Vt + Ft;
                }
                break;
              case 180:
                for (let Ct = 0, qt = j.length; Ct < qt; Ct += 2)
                  j[Ct] = Ot - j[Ct], j[Ct + 1] += Ft;
                break;
              case 270:
                for (let Ct = 0, qt = j.length; Ct < qt; Ct += 2) {
                  const Vt = j[Ct];
                  j[Ct] = Ot - j[Ct + 1], j[Ct + 1] = Wt - Vt;
                }
                break;
              default:
                throw new Error("Invalid rotation");
            }
            return j;
          }, Ut = new WeakSet(), Ln = function(j, ct, xt) {
            const [Et, Ft, Ot, Wt] = ct;
            switch (xt) {
              case 0:
                for (let Ct = 0, qt = j.length; Ct < qt; Ct += 2)
                  j[Ct] -= Et, j[Ct + 1] = Wt - j[Ct + 1];
                break;
              case 90:
                for (let Ct = 0, qt = j.length; Ct < qt; Ct += 2) {
                  const Vt = j[Ct];
                  j[Ct] = j[Ct + 1] - Ft, j[Ct + 1] = Vt - Et;
                }
                break;
              case 180:
                for (let Ct = 0, qt = j.length; Ct < qt; Ct += 2)
                  j[Ct] = Ot - j[Ct], j[Ct + 1] -= Ft;
                break;
              case 270:
                for (let Ct = 0, qt = j.length; Ct < qt; Ct += 2) {
                  const Vt = j[Ct];
                  j[Ct] = Wt - j[Ct + 1], j[Ct + 1] = Ot - Vt;
                }
                break;
              default:
                throw new Error("Invalid rotation");
            }
            return j;
          }, Gt = new WeakSet(), kn = function(j, ct, xt, Et) {
            var qt, Vt;
            const Ft = [], Ot = this.thickness / 2, Wt = j * ct + Ot, Ct = j * xt + Ot;
            for (const Z of this.paths) {
              const o = [], V = [];
              for (let X = 0, rt = Z.length; X < rt; X++) {
                const [ft, yt, Rt, Nt] = Z[X], Dt = j * ft[0] + Wt, Zt = j * ft[1] + Ct, Ht = j * yt[0] + Wt, jt = j * yt[1] + Ct, zt = j * Rt[0] + Wt, Yt = j * Rt[1] + Ct, Jt = j * Nt[0] + Wt, te = j * Nt[1] + Ct;
                X === 0 && (o.push(Dt, Zt), V.push(Dt, Zt)), o.push(Ht, jt, zt, Yt, Jt, te), V.push(Ht, jt), X === rt - 1 && V.push(Jt, te);
              }
              Ft.push({
                bezier: W(qt = ot, kt, Ti).call(qt, o, Et, this.rotation),
                points: W(Vt = ot, kt, Ti).call(Vt, V, Et, this.rotation)
              });
            }
            return Ft;
          }, Xt = new WeakSet(), xi = function() {
            let j = 1 / 0, ct = -1 / 0, xt = 1 / 0, Et = -1 / 0;
            for (const Ft of this.paths)
              for (const [Ot, Wt, Ct, qt] of Ft) {
                const Vt = n.Util.bezierBoundingBox(...Ot, ...Wt, ...Ct, ...qt);
                j = Math.min(j, Vt[0]), xt = Math.min(xt, Vt[1]), ct = Math.max(ct, Vt[2]), Et = Math.max(Et, Vt[3]);
              }
            return [j, xt, ct, Et];
          }, At = new WeakSet(), Ue = function() {
            return t(this, m) ? Math.ceil(this.thickness * this.parentScale) : 0;
          }, D = new WeakSet(), me = function(j = !1) {
            if (this.isEmpty())
              return;
            if (!t(this, m)) {
              W(this, nt, ae).call(this);
              return;
            }
            const ct = W(this, Xt, xi).call(this), xt = W(this, At, Ue).call(this);
            Q(this, r, Math.max(g.AnnotationEditor.MIN_SIZE, ct[2] - ct[0])), Q(this, d, Math.max(g.AnnotationEditor.MIN_SIZE, ct[3] - ct[1]));
            const Et = Math.ceil(xt + t(this, r) * this.scaleFactor), Ft = Math.ceil(xt + t(this, d) * this.scaleFactor), [Ot, Wt] = this.parentDimensions;
            this.width = Et / Ot, this.height = Ft / Wt, this.setAspectRatio(Et, Ft);
            const Ct = this.translationX, qt = this.translationY;
            this.translationX = -ct[0], this.translationY = -ct[1], W(this, It, ge).call(this), W(this, nt, ae).call(this), Q(this, S, Et), Q(this, s, Ft), this.setDims(Et, Ft);
            const Vt = j ? xt / this.scaleFactor / 2 : 0;
            this.translate(Ct - this.translationX - Vt, qt - this.translationY - Vt);
          }, O(ot, mt), O(ot, kt), O(ot, Ut), ee(ot, "_defaultColor", null), ee(ot, "_defaultOpacity", 1), ee(ot, "_defaultThickness", 1), ee(ot, "_type", "ink");
          let f = ot;
          e.InkEditor = f;
        },
        /* 34 */
        /***/
        (E, e, C) => {
          var f, d, r, I, k, y, h, _, m, P, A, Ee, S, we, i, He, b, Mi, L, Rn, z, In, M, Li, tt, je, U, Fn;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.StampEditor = void 0;
          var n = C(1), g = C(4), G = C(6), B = C(29);
          const $ = class $ extends g.AnnotationEditor {
            constructor(N) {
              super({
                ...N,
                name: "stampEditor"
              });
              O(this, A);
              O(this, S);
              O(this, i);
              O(this, b);
              O(this, L);
              O(this, z);
              O(this, M);
              O(this, tt);
              O(this, U);
              O(this, f, null);
              O(this, d, null);
              O(this, r, null);
              O(this, I, null);
              O(this, k, null);
              O(this, y, null);
              O(this, h, null);
              O(this, _, null);
              O(this, m, !1);
              O(this, P, !1);
              Q(this, I, N.bitmapUrl), Q(this, k, N.bitmapFile);
            }
            static initialize(N) {
              g.AnnotationEditor.initialize(N);
            }
            static get supportedTypes() {
              const N = ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"];
              return (0, n.shadow)(this, "supportedTypes", N.map((a) => `image/${a}`));
            }
            static get supportedTypesStr() {
              return (0, n.shadow)(this, "supportedTypesStr", this.supportedTypes.join(","));
            }
            static isHandlingMimeForPasting(N) {
              return this.supportedTypes.includes(N);
            }
            static paste(N, a) {
              a.pasteEditor(n.AnnotationEditorType.STAMP, {
                bitmapFile: N.getAsFile()
              });
            }
            remove() {
              var N, a;
              t(this, d) && (Q(this, f, null), this._uiManager.imageManager.deleteId(t(this, d)), (N = t(this, y)) == null || N.remove(), Q(this, y, null), (a = t(this, h)) == null || a.disconnect(), Q(this, h, null)), super.remove();
            }
            rebuild() {
              if (!this.parent) {
                t(this, d) && W(this, i, He).call(this);
                return;
              }
              super.rebuild(), this.div !== null && (t(this, d) && W(this, i, He).call(this), this.isAttachedToDOM || this.parent.add(this));
            }
            onceAdded() {
              this._isDraggable = !0, this.div.focus();
            }
            isEmpty() {
              return !(t(this, r) || t(this, f) || t(this, I) || t(this, k));
            }
            get isResizable() {
              return !0;
            }
            render() {
              if (this.div)
                return this.div;
              let N, a;
              if (this.width && (N = this.x, a = this.y), super.render(), this.div.hidden = !0, t(this, f) ? W(this, b, Mi).call(this) : W(this, i, He).call(this), this.width) {
                const [p, l] = this.parentDimensions;
                this.setAt(N * p, a * l, this.width * p, this.height * l);
              }
              return this.div;
            }
            static deserialize(N, a, p) {
              if (N instanceof B.StampAnnotationElement)
                return null;
              const l = super.deserialize(N, a, p), {
                rect: T,
                bitmapUrl: R,
                bitmapId: H,
                isSvg: K,
                accessibilityData: nt
              } = N;
              H && p.imageManager.isValidId(H) ? Q(l, d, H) : Q(l, I, R), Q(l, m, K);
              const [_t, pt] = l.pageDimensions;
              return l.width = (T[2] - T[0]) / _t, l.height = (T[3] - T[1]) / pt, nt && (l.altTextData = nt), l;
            }
            serialize(N = !1, a = null) {
              if (this.isEmpty())
                return null;
              const p = {
                annotationType: n.AnnotationEditorType.STAMP,
                bitmapId: t(this, d),
                pageIndex: this.pageIndex,
                rect: this.getRect(0, 0),
                rotation: this.rotation,
                isSvg: t(this, m),
                structTreeParentId: this._structTreeParentId
              };
              if (N)
                return p.bitmapUrl = W(this, tt, je).call(this, !0), p.accessibilityData = this.altTextData, p;
              const {
                decorative: l,
                altText: T
              } = this.altTextData;
              if (!l && T && (p.accessibilityData = {
                type: "Figure",
                alt: T
              }), a === null)
                return p;
              a.stamps || (a.stamps = /* @__PURE__ */ new Map());
              const R = t(this, m) ? (p.rect[2] - p.rect[0]) * (p.rect[3] - p.rect[1]) : null;
              if (!a.stamps.has(t(this, d)))
                a.stamps.set(t(this, d), {
                  area: R,
                  serialized: p
                }), p.bitmap = W(this, tt, je).call(this, !1);
              else if (t(this, m)) {
                const H = a.stamps.get(t(this, d));
                R > H.area && (H.area = R, H.serialized.bitmap.close(), H.serialized.bitmap = W(this, tt, je).call(this, !1));
              }
              return p;
            }
          };
          f = new WeakMap(), d = new WeakMap(), r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), y = new WeakMap(), h = new WeakMap(), _ = new WeakMap(), m = new WeakMap(), P = new WeakMap(), A = new WeakSet(), Ee = function(N, a = !1) {
            if (!N) {
              this.remove();
              return;
            }
            Q(this, f, N.bitmap), a || (Q(this, d, N.id), Q(this, m, N.isSvg)), W(this, b, Mi).call(this);
          }, S = new WeakSet(), we = function() {
            Q(this, r, null), this._uiManager.enableWaiting(!1), t(this, y) && this.div.focus();
          }, i = new WeakSet(), He = function() {
            if (t(this, d)) {
              this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(t(this, d)).then((a) => W(this, A, Ee).call(this, a, !0)).finally(() => W(this, S, we).call(this));
              return;
            }
            if (t(this, I)) {
              const a = t(this, I);
              Q(this, I, null), this._uiManager.enableWaiting(!0), Q(this, r, this._uiManager.imageManager.getFromUrl(a).then((p) => W(this, A, Ee).call(this, p)).finally(() => W(this, S, we).call(this)));
              return;
            }
            if (t(this, k)) {
              const a = t(this, k);
              Q(this, k, null), this._uiManager.enableWaiting(!0), Q(this, r, this._uiManager.imageManager.getFromFile(a).then((p) => W(this, A, Ee).call(this, p)).finally(() => W(this, S, we).call(this)));
              return;
            }
            const N = document.createElement("input");
            N.type = "file", N.accept = $.supportedTypesStr, Q(this, r, new Promise((a) => {
              N.addEventListener("change", async () => {
                if (!N.files || N.files.length === 0)
                  this.remove();
                else {
                  this._uiManager.enableWaiting(!0);
                  const p = await this._uiManager.imageManager.getFromFile(N.files[0]);
                  W(this, A, Ee).call(this, p);
                }
                a();
              }), N.addEventListener("cancel", () => {
                this.remove(), a();
              });
            }).finally(() => W(this, S, we).call(this))), N.click();
          }, b = new WeakSet(), Mi = function() {
            const {
              div: N
            } = this;
            let {
              width: a,
              height: p
            } = t(this, f);
            const [l, T] = this.pageDimensions, R = 0.75;
            if (this.width)
              a = this.width * l, p = this.height * T;
            else if (a > R * l || p > R * T) {
              const _t = Math.min(R * l / a, R * T / p);
              a *= _t, p *= _t;
            }
            const [H, K] = this.parentDimensions;
            this.setDims(a * H / l, p * K / T), this._uiManager.enableWaiting(!1);
            const nt = Q(this, y, document.createElement("canvas"));
            N.append(nt), N.hidden = !1, W(this, M, Li).call(this, a, p), W(this, U, Fn).call(this), t(this, P) || (this.parent.addUndoableEditor(this), Q(this, P, !0)), this._uiManager._eventBus.dispatch("reporttelemetry", {
              source: this,
              details: {
                type: "editing",
                subtype: this.editorType,
                data: {
                  action: "inserted_image"
                }
              }
            }), this.addAltTextButton();
          }, L = new WeakSet(), Rn = function(N, a) {
            var R;
            const [p, l] = this.parentDimensions;
            this.width = N / p, this.height = a / l, this.setDims(N, a), (R = this._initialOptions) != null && R.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, t(this, _) !== null && clearTimeout(t(this, _)), Q(this, _, setTimeout(() => {
              Q(this, _, null), W(this, M, Li).call(this, N, a);
            }, 200));
          }, z = new WeakSet(), In = function(N, a) {
            const {
              width: p,
              height: l
            } = t(this, f);
            let T = p, R = l, H = t(this, f);
            for (; T > 2 * N || R > 2 * a; ) {
              const K = T, nt = R;
              T > 2 * N && (T = T >= 16384 ? Math.floor(T / 2) - 1 : Math.ceil(T / 2)), R > 2 * a && (R = R >= 16384 ? Math.floor(R / 2) - 1 : Math.ceil(R / 2));
              const _t = new OffscreenCanvas(T, R);
              _t.getContext("2d").drawImage(H, 0, 0, K, nt, 0, 0, T, R), H = _t.transferToImageBitmap();
            }
            return H;
          }, M = new WeakSet(), Li = function(N, a) {
            N = Math.ceil(N), a = Math.ceil(a);
            const p = t(this, y);
            if (!p || p.width === N && p.height === a)
              return;
            p.width = N, p.height = a;
            const l = t(this, m) ? t(this, f) : W(this, z, In).call(this, N, a), T = p.getContext("2d");
            T.filter = this._uiManager.hcmFilter, T.drawImage(l, 0, 0, l.width, l.height, 0, 0, N, a);
          }, tt = new WeakSet(), je = function(N) {
            if (N) {
              if (t(this, m)) {
                const l = this._uiManager.imageManager.getSvgUrl(t(this, d));
                if (l)
                  return l;
              }
              const a = document.createElement("canvas");
              return {
                width: a.width,
                height: a.height
              } = t(this, f), a.getContext("2d").drawImage(t(this, f), 0, 0), a.toDataURL();
            }
            if (t(this, m)) {
              const [a, p] = this.pageDimensions, l = Math.round(this.width * a * G.PixelsPerInch.PDF_TO_CSS_UNITS), T = Math.round(this.height * p * G.PixelsPerInch.PDF_TO_CSS_UNITS), R = new OffscreenCanvas(l, T);
              return R.getContext("2d").drawImage(t(this, f), 0, 0, t(this, f).width, t(this, f).height, 0, 0, l, T), R.transferToImageBitmap();
            }
            return structuredClone(t(this, f));
          }, U = new WeakSet(), Fn = function() {
            Q(this, h, new ResizeObserver((N) => {
              const a = N[0].contentRect;
              a.width && a.height && W(this, L, Rn).call(this, a.width, a.height);
            })), t(this, h).observe(this.div);
          }, ee($, "_type", "stamp");
          let F = $;
          e.StampEditor = F;
        }
        /******/
      ], __webpack_module_cache__ = {};
      function __w_pdfjs_require__(E) {
        var e = __webpack_module_cache__[E];
        if (e !== void 0)
          return e.exports;
        var C = __webpack_module_cache__[E] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return __webpack_modules__[E](C, C.exports, __w_pdfjs_require__), C.exports;
      }
      var __webpack_exports__ = {};
      return (() => {
        var E = __webpack_exports__;
        Object.defineProperty(E, "__esModule", {
          value: !0
        }), Object.defineProperty(E, "AbortException", {
          enumerable: !0,
          get: function() {
            return e.AbortException;
          }
        }), Object.defineProperty(E, "AnnotationEditorLayer", {
          enumerable: !0,
          get: function() {
            return G.AnnotationEditorLayer;
          }
        }), Object.defineProperty(E, "AnnotationEditorParamsType", {
          enumerable: !0,
          get: function() {
            return e.AnnotationEditorParamsType;
          }
        }), Object.defineProperty(E, "AnnotationEditorType", {
          enumerable: !0,
          get: function() {
            return e.AnnotationEditorType;
          }
        }), Object.defineProperty(E, "AnnotationEditorUIManager", {
          enumerable: !0,
          get: function() {
            return B.AnnotationEditorUIManager;
          }
        }), Object.defineProperty(E, "AnnotationLayer", {
          enumerable: !0,
          get: function() {
            return F.AnnotationLayer;
          }
        }), Object.defineProperty(E, "AnnotationMode", {
          enumerable: !0,
          get: function() {
            return e.AnnotationMode;
          }
        }), Object.defineProperty(E, "CMapCompressionType", {
          enumerable: !0,
          get: function() {
            return e.CMapCompressionType;
          }
        }), Object.defineProperty(E, "DOMSVGFactory", {
          enumerable: !0,
          get: function() {
            return n.DOMSVGFactory;
          }
        }), Object.defineProperty(E, "FeatureTest", {
          enumerable: !0,
          get: function() {
            return e.FeatureTest;
          }
        }), Object.defineProperty(E, "GlobalWorkerOptions", {
          enumerable: !0,
          get: function() {
            return f.GlobalWorkerOptions;
          }
        }), Object.defineProperty(E, "ImageKind", {
          enumerable: !0,
          get: function() {
            return e.ImageKind;
          }
        }), Object.defineProperty(E, "InvalidPDFException", {
          enumerable: !0,
          get: function() {
            return e.InvalidPDFException;
          }
        }), Object.defineProperty(E, "MissingPDFException", {
          enumerable: !0,
          get: function() {
            return e.MissingPDFException;
          }
        }), Object.defineProperty(E, "OPS", {
          enumerable: !0,
          get: function() {
            return e.OPS;
          }
        }), Object.defineProperty(E, "PDFDataRangeTransport", {
          enumerable: !0,
          get: function() {
            return C.PDFDataRangeTransport;
          }
        }), Object.defineProperty(E, "PDFDateString", {
          enumerable: !0,
          get: function() {
            return n.PDFDateString;
          }
        }), Object.defineProperty(E, "PDFWorker", {
          enumerable: !0,
          get: function() {
            return C.PDFWorker;
          }
        }), Object.defineProperty(E, "PasswordResponses", {
          enumerable: !0,
          get: function() {
            return e.PasswordResponses;
          }
        }), Object.defineProperty(E, "PermissionFlag", {
          enumerable: !0,
          get: function() {
            return e.PermissionFlag;
          }
        }), Object.defineProperty(E, "PixelsPerInch", {
          enumerable: !0,
          get: function() {
            return n.PixelsPerInch;
          }
        }), Object.defineProperty(E, "PromiseCapability", {
          enumerable: !0,
          get: function() {
            return e.PromiseCapability;
          }
        }), Object.defineProperty(E, "RenderingCancelledException", {
          enumerable: !0,
          get: function() {
            return n.RenderingCancelledException;
          }
        }), Object.defineProperty(E, "SVGGraphics", {
          enumerable: !0,
          get: function() {
            return C.SVGGraphics;
          }
        }), Object.defineProperty(E, "UnexpectedResponseException", {
          enumerable: !0,
          get: function() {
            return e.UnexpectedResponseException;
          }
        }), Object.defineProperty(E, "Util", {
          enumerable: !0,
          get: function() {
            return e.Util;
          }
        }), Object.defineProperty(E, "VerbosityLevel", {
          enumerable: !0,
          get: function() {
            return e.VerbosityLevel;
          }
        }), Object.defineProperty(E, "XfaLayer", {
          enumerable: !0,
          get: function() {
            return d.XfaLayer;
          }
        }), Object.defineProperty(E, "build", {
          enumerable: !0,
          get: function() {
            return C.build;
          }
        }), Object.defineProperty(E, "createValidAbsoluteUrl", {
          enumerable: !0,
          get: function() {
            return e.createValidAbsoluteUrl;
          }
        }), Object.defineProperty(E, "getDocument", {
          enumerable: !0,
          get: function() {
            return C.getDocument;
          }
        }), Object.defineProperty(E, "getFilenameFromUrl", {
          enumerable: !0,
          get: function() {
            return n.getFilenameFromUrl;
          }
        }), Object.defineProperty(E, "getPdfFilenameFromUrl", {
          enumerable: !0,
          get: function() {
            return n.getPdfFilenameFromUrl;
          }
        }), Object.defineProperty(E, "getXfaPageViewport", {
          enumerable: !0,
          get: function() {
            return n.getXfaPageViewport;
          }
        }), Object.defineProperty(E, "isDataScheme", {
          enumerable: !0,
          get: function() {
            return n.isDataScheme;
          }
        }), Object.defineProperty(E, "isPdfFile", {
          enumerable: !0,
          get: function() {
            return n.isPdfFile;
          }
        }), Object.defineProperty(E, "loadScript", {
          enumerable: !0,
          get: function() {
            return n.loadScript;
          }
        }), Object.defineProperty(E, "noContextMenu", {
          enumerable: !0,
          get: function() {
            return n.noContextMenu;
          }
        }), Object.defineProperty(E, "normalizeUnicode", {
          enumerable: !0,
          get: function() {
            return e.normalizeUnicode;
          }
        }), Object.defineProperty(E, "renderTextLayer", {
          enumerable: !0,
          get: function() {
            return g.renderTextLayer;
          }
        }), Object.defineProperty(E, "setLayerDimensions", {
          enumerable: !0,
          get: function() {
            return n.setLayerDimensions;
          }
        }), Object.defineProperty(E, "shadow", {
          enumerable: !0,
          get: function() {
            return e.shadow;
          }
        }), Object.defineProperty(E, "updateTextLayer", {
          enumerable: !0,
          get: function() {
            return g.updateTextLayer;
          }
        }), Object.defineProperty(E, "version", {
          enumerable: !0,
          get: function() {
            return C.version;
          }
        });
        var e = __w_pdfjs_require__(1), C = __w_pdfjs_require__(2), n = __w_pdfjs_require__(6), g = __w_pdfjs_require__(26), G = __w_pdfjs_require__(27), B = __w_pdfjs_require__(5), F = __w_pdfjs_require__(29), f = __w_pdfjs_require__(14), d = __w_pdfjs_require__(32);
      })(), __webpack_exports__;
    })()
  ));
})(pdf);
var pdfExports = pdf.exports, pdf_viewer$1 = { exports: {} };
(function(E, e) {
  (function(n, g) {
    E.exports = n.pdfjsViewer = g();
  })(globalThis, () => (
    /******/
    (() => {
      var C = [
        ,
        /* 1 */
        /***/
        (B, F, f) => {
          var tt, q, U, at, Dn, wt, ki, N, Ri, p, On, T, Nn, H, Bn, nt, Ii, pt, Vn, st, Un, gt, We, It, Pe, ut, _e, it, Hn, mt, Fi, kt, Di, Ut, ze, Gt, jn, Xt, Oi, At, Ni, D, Ce;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFFindController = F.FindState = void 0;
          var d = f(2), r = f(3), I = f(4);
          const k = {
            FOUND: 0,
            NOT_FOUND: 1,
            WRAPPED: 2,
            PENDING: 3
          };
          F.FindState = k;
          const y = 250, h = -50, _ = -400, m = {
            "‐": "-",
            "‘": "'",
            "’": "'",
            "‚": "'",
            "‛": "'",
            "“": '"',
            "”": '"',
            "„": '"',
            "‟": '"',
            "¼": "1/4",
            "½": "1/2",
            "¾": "3/4"
          }, P = /* @__PURE__ */ new Set([12441, 12442, 2381, 2509, 2637, 2765, 2893, 3021, 3149, 3277, 3387, 3388, 3405, 3530, 3642, 3770, 3972, 4153, 4154, 5908, 5940, 6098, 6752, 6980, 7082, 7083, 7154, 7155, 11647, 43014, 43052, 43204, 43347, 43456, 43766, 44013, 3158, 3953, 3954, 3962, 3963, 3964, 3965, 3968, 3956]);
          let A;
          const u = /\p{M}+/gu, S = /([.*+?^${}()|[\]\\])|(\p{P})|(\s+)|(\p{M})|(\p{L})/gu, s = /([^\p{M}])\p{M}*$/u, i = /^\p{M}*([^\p{M}])/u, w = /[\uAC00-\uD7AF\uFA6C\uFACF-\uFAD1\uFAD5-\uFAD7]+/g, b = /* @__PURE__ */ new Map(), c = "[\\u1100-\\u1112\\ud7a4-\\ud7af\\ud84a\\ud84c\\ud850\\ud854\\ud857\\ud85f]", L = /* @__PURE__ */ new Map();
          let x = null, z = null;
          function J(ot) {
            const dt = [];
            let bt;
            for (; (bt = w.exec(ot)) !== null; ) {
              let {
                index: Z
              } = bt;
              for (const o of bt[0]) {
                let V = b.get(o);
                V || (V = o.normalize("NFD").length, b.set(o, V)), dt.push([V, Z++]);
              }
            }
            let j;
            if (dt.length === 0 && x)
              j = x;
            else if (dt.length > 0 && z)
              j = z;
            else {
              const Z = Object.keys(m).join(""), o = (0, r.getNormalizeWithNFKC)(), rt = `([${Z}])|([${o}])|((?:゙|゚)\\n)|(\\p{M}+(?:-\\n)?)|(\\S-\\n)|((?:\\p{Ideographic}|[぀-ヿ])\\n)|(\\n)`;
              dt.length === 0 ? j = x = new RegExp(rt + "|(\\u0000)", "gum") : j = z = new RegExp(rt + `|(${c})`, "gum");
            }
            const ct = [];
            for (; (bt = u.exec(ot)) !== null; )
              ct.push([bt[0].length, bt.index]);
            let xt = ot.normalize("NFD");
            const Et = [[0, 0]];
            let Ft = 0, Ot = 0, Wt = 0, Ct = 0, qt = 0, Vt = !1;
            return xt = xt.replace(j, (Z, o, V, X, rt, ft, yt, Rt, Nt, Dt) => {
              var Zt, Ht, jt;
              if (Dt -= Ct, o) {
                const zt = m[o], Yt = zt.length;
                for (let Jt = 1; Jt < Yt; Jt++)
                  Et.push([Dt - Wt + Jt, Wt - Jt]);
                return Wt -= Yt - 1, zt;
              }
              if (V) {
                let zt = L.get(V);
                zt || (zt = V.normalize("NFKC"), L.set(V, zt));
                const Yt = zt.length;
                for (let Jt = 1; Jt < Yt; Jt++)
                  Et.push([Dt - Wt + Jt, Wt - Jt]);
                return Wt -= Yt - 1, zt;
              }
              if (X)
                return Vt = !0, Dt + qt === ((Zt = ct[Ft]) == null ? void 0 : Zt[1]) ? ++Ft : (Et.push([Dt - 1 - Wt + 1, Wt - 1]), Wt -= 1, Ct += 1), Et.push([Dt - Wt + 1, Wt]), Ct += 1, qt += 1, X.charAt(0);
              if (rt) {
                const zt = rt.endsWith(`
`), Yt = zt ? rt.length - 2 : rt.length;
                Vt = !0;
                let Jt = Yt;
                Dt + qt === ((Ht = ct[Ft]) == null ? void 0 : Ht[1]) && (Jt -= ct[Ft][0], ++Ft);
                for (let te = 1; te <= Jt; te++)
                  Et.push([Dt - 1 - Wt + te, Wt - te]);
                return Wt -= Jt, Ct += Jt, zt ? (Dt += Yt - 1, Et.push([Dt - Wt + 1, 1 + Wt]), Wt += 1, Ct += 1, qt += 1, rt.slice(0, Yt)) : rt;
              }
              if (ft) {
                const zt = ft.length - 2;
                return Et.push([Dt - Wt + zt, 1 + Wt]), Wt += 1, Ct += 1, qt += 1, ft.slice(0, -2);
              }
              if (yt) {
                const zt = yt.length - 1;
                return Et.push([Dt - Wt + zt, Wt]), Ct += 1, qt += 1, yt.slice(0, -1);
              }
              if (Rt)
                return Et.push([Dt - Wt + 1, Wt - 1]), Wt -= 1, Ct += 1, qt += 1, " ";
              if (Dt + qt === ((jt = dt[Ot]) == null ? void 0 : jt[1])) {
                const zt = dt[Ot][0] - 1;
                ++Ot;
                for (let Yt = 1; Yt <= zt; Yt++)
                  Et.push([Dt - (Wt - Yt), Wt - Yt]);
                Wt -= zt, Ct += zt;
              }
              return Nt;
            }), Et.push([xt.length, Wt]), [xt, Et, Vt];
          }
          function M(ot, dt, bt) {
            if (!ot)
              return [dt, bt];
            const j = dt, ct = dt + bt - 1;
            let xt = (0, d.binarySearchFirstItem)(ot, (Ct) => Ct[0] >= j);
            ot[xt][0] > j && --xt;
            let Et = (0, d.binarySearchFirstItem)(ot, (Ct) => Ct[0] >= ct, xt);
            ot[Et][0] > ct && --Et;
            const Ft = j + ot[xt][1], Wt = ct + ot[Et][1] + 1 - Ft;
            return [Ft, Wt];
          }
          class Y {
            constructor({
              linkService: dt,
              eventBus: bt,
              updateMatchesCountOnProgress: j = !0
            }) {
              O(this, at);
              O(this, wt);
              O(this, N);
              O(this, p);
              O(this, T);
              O(this, H);
              O(this, nt);
              O(this, pt);
              O(this, st);
              O(this, gt);
              O(this, It);
              O(this, ut);
              O(this, it);
              O(this, mt);
              O(this, kt);
              O(this, Ut);
              O(this, Gt);
              O(this, Xt);
              O(this, At);
              O(this, D);
              O(this, tt, null);
              O(this, q, !0);
              O(this, U, 0);
              this._linkService = dt, this._eventBus = bt, Q(this, q, j), this.onIsPageVisible = null, W(this, wt, ki).call(this), bt._on("find", W(this, at, Dn).bind(this)), bt._on("findbarclose", W(this, Gt, jn).bind(this));
            }
            get highlightMatches() {
              return this._highlightMatches;
            }
            get pageMatches() {
              return this._pageMatches;
            }
            get pageMatchesLength() {
              return this._pageMatchesLength;
            }
            get selected() {
              return this._selected;
            }
            get state() {
              return t(this, tt);
            }
            setDocument(dt) {
              this._pdfDocument && W(this, wt, ki).call(this), dt && (this._pdfDocument = dt, this._firstPageCapability.resolve());
            }
            scrollMatchIntoView({
              element: dt = null,
              selectedLeft: bt = 0,
              pageIndex: j = -1,
              matchIndex: ct = -1
            }) {
              if (!this._scrollMatches || !dt)
                return;
              if (ct === -1 || ct !== this._selected.matchIdx)
                return;
              if (j === -1 || j !== this._selected.pageIdx)
                return;
              this._scrollMatches = !1;
              const xt = {
                top: h,
                left: bt + _
              };
              (0, d.scrollIntoView)(dt, xt, !0);
            }
          }
          tt = new WeakMap(), q = new WeakMap(), U = new WeakMap(), at = new WeakSet(), Dn = function(dt) {
            if (!dt)
              return;
            dt.phraseSearch === !1 && (console.error("The `phraseSearch`-parameter was removed, please provide an Array of strings in the `query`-parameter instead."), typeof dt.query == "string" && (dt.query = dt.query.match(/\S+/g)));
            const bt = this._pdfDocument, {
              type: j
            } = dt;
            (t(this, tt) === null || W(this, p, On).call(this, dt)) && (this._dirtyMatch = !0), Q(this, tt, dt), j !== "highlightallchange" && W(this, D, Ce).call(this, k.PENDING), this._firstPageCapability.promise.then(() => {
              if (!this._pdfDocument || bt && this._pdfDocument !== bt)
                return;
              W(this, st, Un).call(this);
              const ct = !this._highlightMatches, xt = !!this._findTimeout;
              this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), j ? this._dirtyMatch ? W(this, ut, _e).call(this) : j === "again" ? (W(this, ut, _e).call(this), ct && t(this, tt).highlightAll && W(this, It, Pe).call(this)) : j === "highlightallchange" ? (xt ? W(this, ut, _e).call(this) : this._highlightMatches = !0, W(this, It, Pe).call(this)) : W(this, ut, _e).call(this) : this._findTimeout = setTimeout(() => {
                W(this, ut, _e).call(this), this._findTimeout = null;
              }, y);
            });
          }, wt = new WeakSet(), ki = function() {
            this._highlightMatches = !1, this._scrollMatches = !1, this._pdfDocument = null, this._pageMatches = [], this._pageMatchesLength = [], Q(this, U, 0), Q(this, tt, null), this._selected = {
              pageIdx: -1,
              matchIdx: -1
            }, this._offset = {
              pageIdx: null,
              matchIdx: null,
              wrapped: !1
            }, this._extractTextPromises = [], this._pageContents = [], this._pageDiffs = [], this._hasDiacritics = [], this._matchesCountTotal = 0, this._pagesToSearch = null, this._pendingFindMatches = /* @__PURE__ */ new Set(), this._resumePageIdx = null, this._dirtyMatch = !1, clearTimeout(this._findTimeout), this._findTimeout = null, this._firstPageCapability = new I.PromiseCapability();
          }, N = new WeakSet(), Ri = function() {
            const {
              query: dt
            } = t(this, tt);
            return typeof dt == "string" ? (dt !== this._rawQuery && (this._rawQuery = dt, [this._normalizedQuery] = J(dt)), this._normalizedQuery) : (dt || []).filter((bt) => !!bt).map((bt) => J(bt)[0]);
          }, p = new WeakSet(), On = function(dt) {
            var Et;
            const bt = dt.query, j = t(this, tt).query, ct = typeof bt;
            if (ct !== typeof j)
              return !0;
            if (ct === "string") {
              if (bt !== j)
                return !0;
            } else if (JSON.stringify(bt) !== JSON.stringify(j))
              return !0;
            switch (dt.type) {
              case "again":
                const Ft = this._selected.pageIdx + 1, Ot = this._linkService;
                return Ft >= 1 && Ft <= Ot.pagesCount && Ft !== Ot.page && !(((Et = this.onIsPageVisible) == null ? void 0 : Et.call(this, Ft)) ?? !0);
              case "highlightallchange":
                return !1;
            }
            return !0;
          }, T = new WeakSet(), Nn = function(dt, bt, j) {
            let ct = dt.slice(0, bt).match(s);
            if (ct) {
              const xt = dt.charCodeAt(bt), Et = ct[1].charCodeAt(0);
              if ((0, r.getCharacterType)(xt) === (0, r.getCharacterType)(Et))
                return !1;
            }
            if (ct = dt.slice(bt + j).match(i), ct) {
              const xt = dt.charCodeAt(bt + j - 1), Et = ct[1].charCodeAt(0);
              if ((0, r.getCharacterType)(xt) === (0, r.getCharacterType)(Et))
                return !1;
            }
            return !0;
          }, H = new WeakSet(), Bn = function(dt, bt, j, ct) {
            const xt = this._pageMatches[j] = [], Et = this._pageMatchesLength[j] = [];
            if (!dt)
              return;
            const Ft = this._pageDiffs[j];
            let Ot;
            for (; (Ot = dt.exec(ct)) !== null; ) {
              if (bt && !W(this, T, Nn).call(this, ct, Ot.index, Ot[0].length))
                continue;
              const [Wt, Ct] = M(Ft, Ot.index, Ot[0].length);
              Ct && (xt.push(Wt), Et.push(Ct));
            }
          }, nt = new WeakSet(), Ii = function(dt, bt) {
            const {
              matchDiacritics: j
            } = t(this, tt);
            let ct = !1;
            dt = dt.replaceAll(S, (Et, Ft, Ot, Wt, Ct, qt) => Ft ? `[ ]*\\${Ft}[ ]*` : Ot ? `[ ]*${Ot}[ ]*` : Wt ? "[ ]+" : j ? Ct || qt : Ct ? P.has(Ct.charCodeAt(0)) ? Ct : "" : bt ? (ct = !0, `${qt}\\p{M}*`) : qt);
            const xt = "[ ]*";
            return dt.endsWith(xt) && (dt = dt.slice(0, dt.length - xt.length)), j && bt && (A || (A = String.fromCharCode(...P)), ct = !0, dt = `${dt}(?=[${A}]|[^\\p{M}]|$)`), [ct, dt];
          }, pt = new WeakSet(), Vn = function(dt) {
            let bt = t(this, N, Ri);
            if (bt.length === 0)
              return;
            const {
              caseSensitive: j,
              entireWord: ct
            } = t(this, tt), xt = this._pageContents[dt], Et = this._hasDiacritics[dt];
            let Ft = !1;
            typeof bt == "string" ? [Ft, bt] = W(this, nt, Ii).call(this, bt, Et) : bt = bt.sort().reverse().map((Ct) => {
              const [qt, Vt] = W(this, nt, Ii).call(this, Ct, Et);
              return Ft || (Ft = qt), `(${Vt})`;
            }).join("|");
            const Ot = `g${Ft ? "u" : ""}${j ? "" : "i"}`;
            bt = bt ? new RegExp(bt, Ot) : null, W(this, H, Bn).call(this, bt, ct, dt, xt), t(this, tt).highlightAll && W(this, gt, We).call(this, dt), this._resumePageIdx === dt && (this._resumePageIdx = null, W(this, mt, Fi).call(this));
            const Wt = this._pageMatches[dt].length;
            this._matchesCountTotal += Wt, t(this, q) ? Wt > 0 && W(this, At, Ni).call(this) : ++ue(this, U)._ === this._linkService.pagesCount && W(this, At, Ni).call(this);
          }, st = new WeakSet(), Un = function() {
            if (this._extractTextPromises.length > 0)
              return;
            let dt = Promise.resolve();
            const bt = {
              disableNormalization: !0
            };
            for (let j = 0, ct = this._linkService.pagesCount; j < ct; j++) {
              const xt = new I.PromiseCapability();
              this._extractTextPromises[j] = xt.promise, dt = dt.then(() => this._pdfDocument.getPage(j + 1).then((Et) => Et.getTextContent(bt)).then((Et) => {
                const Ft = [];
                for (const Ot of Et.items)
                  Ft.push(Ot.str), Ot.hasEOL && Ft.push(`
`);
                [this._pageContents[j], this._pageDiffs[j], this._hasDiacritics[j]] = J(Ft.join("")), xt.resolve();
              }, (Et) => {
                console.error(`Unable to get text content for page ${j + 1}`, Et), this._pageContents[j] = "", this._pageDiffs[j] = null, this._hasDiacritics[j] = !1, xt.resolve();
              }));
            }
          }, gt = new WeakSet(), We = function(dt) {
            this._scrollMatches && this._selected.pageIdx === dt && (this._linkService.page = dt + 1), this._eventBus.dispatch("updatetextlayermatches", {
              source: this,
              pageIndex: dt
            });
          }, It = new WeakSet(), Pe = function() {
            this._eventBus.dispatch("updatetextlayermatches", {
              source: this,
              pageIndex: -1
            });
          }, ut = new WeakSet(), _e = function() {
            const dt = t(this, tt).findPrevious, bt = this._linkService.page - 1, j = this._linkService.pagesCount;
            if (this._highlightMatches = !0, this._dirtyMatch) {
              this._dirtyMatch = !1, this._selected.pageIdx = this._selected.matchIdx = -1, this._offset.pageIdx = bt, this._offset.matchIdx = null, this._offset.wrapped = !1, this._resumePageIdx = null, this._pageMatches.length = 0, this._pageMatchesLength.length = 0, Q(this, U, 0), this._matchesCountTotal = 0, W(this, It, Pe).call(this);
              for (let Et = 0; Et < j; Et++)
                this._pendingFindMatches.has(Et) || (this._pendingFindMatches.add(Et), this._extractTextPromises[Et].then(() => {
                  this._pendingFindMatches.delete(Et), W(this, pt, Vn).call(this, Et);
                }));
            }
            if (t(this, N, Ri).length === 0) {
              W(this, D, Ce).call(this, k.FOUND);
              return;
            }
            if (this._resumePageIdx)
              return;
            const xt = this._offset;
            if (this._pagesToSearch = j, xt.matchIdx !== null) {
              const Et = this._pageMatches[xt.pageIdx].length;
              if (!dt && xt.matchIdx + 1 < Et || dt && xt.matchIdx > 0) {
                xt.matchIdx = dt ? xt.matchIdx - 1 : xt.matchIdx + 1, W(this, Ut, ze).call(this, !0);
                return;
              }
              W(this, kt, Di).call(this, dt);
            }
            W(this, mt, Fi).call(this);
          }, it = new WeakSet(), Hn = function(dt) {
            const bt = this._offset, j = dt.length, ct = t(this, tt).findPrevious;
            return j ? (bt.matchIdx = ct ? j - 1 : 0, W(this, Ut, ze).call(this, !0), !0) : (W(this, kt, Di).call(this, ct), bt.wrapped && (bt.matchIdx = null, this._pagesToSearch < 0) ? (W(this, Ut, ze).call(this, !1), !0) : !1);
          }, mt = new WeakSet(), Fi = function() {
            this._resumePageIdx !== null && console.error("There can only be one pending page.");
            let dt = null;
            do {
              const bt = this._offset.pageIdx;
              if (dt = this._pageMatches[bt], !dt) {
                this._resumePageIdx = bt;
                break;
              }
            } while (!W(this, it, Hn).call(this, dt));
          }, kt = new WeakSet(), Di = function(dt) {
            const bt = this._offset, j = this._linkService.pagesCount;
            bt.pageIdx = dt ? bt.pageIdx - 1 : bt.pageIdx + 1, bt.matchIdx = null, this._pagesToSearch--, (bt.pageIdx >= j || bt.pageIdx < 0) && (bt.pageIdx = dt ? j - 1 : 0, bt.wrapped = !0);
          }, Ut = new WeakSet(), ze = function(dt = !1) {
            let bt = k.NOT_FOUND;
            const j = this._offset.wrapped;
            if (this._offset.wrapped = !1, dt) {
              const ct = this._selected.pageIdx;
              this._selected.pageIdx = this._offset.pageIdx, this._selected.matchIdx = this._offset.matchIdx, bt = j ? k.WRAPPED : k.FOUND, ct !== -1 && ct !== this._selected.pageIdx && W(this, gt, We).call(this, ct);
            }
            W(this, D, Ce).call(this, bt, t(this, tt).findPrevious), this._selected.pageIdx !== -1 && (this._scrollMatches = !0, W(this, gt, We).call(this, this._selected.pageIdx));
          }, Gt = new WeakSet(), jn = function(dt) {
            const bt = this._pdfDocument;
            this._firstPageCapability.promise.then(() => {
              !this._pdfDocument || bt && this._pdfDocument !== bt || (this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), this._resumePageIdx && (this._resumePageIdx = null, this._dirtyMatch = !0), W(this, D, Ce).call(this, k.FOUND), this._highlightMatches = !1, W(this, It, Pe).call(this));
            });
          }, Xt = new WeakSet(), Oi = function() {
            var xt;
            const {
              pageIdx: dt,
              matchIdx: bt
            } = this._selected;
            let j = 0, ct = this._matchesCountTotal;
            if (bt !== -1) {
              for (let Et = 0; Et < dt; Et++)
                j += ((xt = this._pageMatches[Et]) == null ? void 0 : xt.length) || 0;
              j += bt + 1;
            }
            return (j < 1 || j > ct) && (j = ct = 0), {
              current: j,
              total: ct
            };
          }, At = new WeakSet(), Ni = function() {
            this._eventBus.dispatch("updatefindmatchescount", {
              source: this,
              matchesCount: W(this, Xt, Oi).call(this)
            });
          }, D = new WeakSet(), Ce = function(dt, bt = !1) {
            var j;
            !t(this, q) && (t(this, U) !== this._linkService.pagesCount || dt === k.PENDING) || this._eventBus.dispatch("updatefindcontrolstate", {
              source: this,
              state: dt,
              previous: bt,
              matchesCount: W(this, Xt, Oi).call(this),
              rawQuery: ((j = t(this, tt)) == null ? void 0 : j.query) ?? null
            });
          }, F.PDFFindController = Y;
        },
        /* 2 */
        /***/
        (B, F) => {
          var vt, gt, Lt, It, Mt;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.animationStarted = F.VERTICAL_PADDING = F.UNKNOWN_SCALE = F.TextLayerMode = F.SpreadMode = F.SidebarView = F.ScrollMode = F.SCROLLBAR_PADDING = F.RenderingStates = F.ProgressBar = F.PresentationModeState = F.OutputScale = F.MIN_SCALE = F.MAX_SCALE = F.MAX_AUTO_SCALE = F.DEFAULT_SCALE_VALUE = F.DEFAULT_SCALE_DELTA = F.DEFAULT_SCALE = F.CursorTool = F.AutoPrintRegExp = void 0, F.apiPageLayoutToViewerModes = _t, F.apiPageModeToSidebarView = pt, F.approximateFraction = tt, F.backtrackBeforeAllVisibleElements = at, F.binarySearchFirstItem = Y, F.docStyle = void 0, F.getActiveOrFocusedElement = nt, F.getPageSizeInches = U, F.getVisibleElements = $, F.isPortraitOrientation = l, F.isValidRotation = N, F.isValidScrollMode = a, F.isValidSpreadMode = p, F.normalizeWheelEventDelta = Pt, F.normalizeWheelEventDirection = wt, F.parseQueryString = z, F.removeNullCharacters = M, F.roundToDivide = q, F.scrollIntoView = L, F.toggleCheckedBtn = St, F.toggleExpandedBtn = st, F.watchScroll = x;
          const f = "auto";
          F.DEFAULT_SCALE_VALUE = f;
          const d = 1;
          F.DEFAULT_SCALE = d;
          const r = 1.1;
          F.DEFAULT_SCALE_DELTA = r;
          const I = 0.1;
          F.MIN_SCALE = I;
          const k = 10;
          F.MAX_SCALE = k;
          const y = 0;
          F.UNKNOWN_SCALE = y;
          const h = 1.25;
          F.MAX_AUTO_SCALE = h;
          const _ = 40;
          F.SCROLLBAR_PADDING = _;
          const m = 5;
          F.VERTICAL_PADDING = m;
          const P = {
            INITIAL: 0,
            RUNNING: 1,
            PAUSED: 2,
            FINISHED: 3
          };
          F.RenderingStates = P;
          const A = {
            UNKNOWN: 0,
            NORMAL: 1,
            CHANGING: 2,
            FULLSCREEN: 3
          };
          F.PresentationModeState = A;
          const u = {
            UNKNOWN: -1,
            NONE: 0,
            THUMBS: 1,
            OUTLINE: 2,
            ATTACHMENTS: 3,
            LAYERS: 4
          };
          F.SidebarView = u;
          const S = {
            DISABLE: 0,
            ENABLE: 1,
            ENABLE_PERMISSIONS: 2
          };
          F.TextLayerMode = S;
          const s = {
            UNKNOWN: -1,
            VERTICAL: 0,
            HORIZONTAL: 1,
            WRAPPED: 2,
            PAGE: 3
          };
          F.ScrollMode = s;
          const i = {
            UNKNOWN: -1,
            NONE: 0,
            ODD: 1,
            EVEN: 2
          };
          F.SpreadMode = i;
          const w = {
            SELECT: 0,
            HAND: 1,
            ZOOM: 2
          };
          F.CursorTool = w;
          const b = /\bprint\s*\(/;
          F.AutoPrintRegExp = b;
          class c {
            constructor() {
              const lt = window.devicePixelRatio || 1;
              this.sx = lt, this.sy = lt;
            }
            get scaled() {
              return this.sx !== 1 || this.sy !== 1;
            }
          }
          F.OutputScale = c;
          function L(ut, lt, it = !1) {
            let et = ut.offsetParent;
            if (!et) {
              console.error("offsetParent is not set -- cannot scroll");
              return;
            }
            let mt = ut.offsetTop + ut.clientTop, Tt = ut.offsetLeft + ut.clientLeft;
            for (; et.clientHeight === et.scrollHeight && et.clientWidth === et.scrollWidth || it && (et.classList.contains("markedContent") || getComputedStyle(et).overflow === "hidden"); )
              if (mt += et.offsetTop, Tt += et.offsetLeft, et = et.offsetParent, !et)
                return;
            lt && (lt.top !== void 0 && (mt += lt.top), lt.left !== void 0 && (Tt += lt.left, et.scrollLeft = Tt)), et.scrollTop = mt;
          }
          function x(ut, lt) {
            const it = function(Tt) {
              mt || (mt = window.requestAnimationFrame(function() {
                mt = null;
                const Bt = ut.scrollLeft, Ut = et.lastX;
                Bt !== Ut && (et.right = Bt > Ut), et.lastX = Bt;
                const $t = ut.scrollTop, Gt = et.lastY;
                $t !== Gt && (et.down = $t > Gt), et.lastY = $t, lt(et);
              }));
            }, et = {
              right: !0,
              down: !0,
              lastX: ut.scrollLeft,
              lastY: ut.scrollTop,
              _eventHandler: it
            };
            let mt = null;
            return ut.addEventListener("scroll", it, !0), et;
          }
          function z(ut) {
            const lt = /* @__PURE__ */ new Map();
            for (const [it, et] of new URLSearchParams(ut))
              lt.set(it.toLowerCase(), et);
            return lt;
          }
          const J = /[\x01-\x1F]/g;
          function M(ut, lt = !1) {
            return typeof ut != "string" ? (console.error("The argument must be a string."), ut) : (lt && (ut = ut.replaceAll(J, " ")), ut.replaceAll("\0", ""));
          }
          function Y(ut, lt, it = 0) {
            let et = it, mt = ut.length - 1;
            if (mt < 0 || !lt(ut[mt]))
              return ut.length;
            if (lt(ut[et]))
              return et;
            for (; et < mt; ) {
              const Tt = et + mt >> 1, kt = ut[Tt];
              lt(kt) ? mt = Tt : et = Tt + 1;
            }
            return et;
          }
          function tt(ut) {
            if (Math.floor(ut) === ut)
              return [ut, 1];
            const lt = 1 / ut, it = 8;
            if (lt > it)
              return [1, it];
            if (Math.floor(lt) === lt)
              return [1, lt];
            const et = ut > 1 ? lt : ut;
            let mt = 0, Tt = 1, kt = 1, Bt = 1;
            for (; ; ) {
              const $t = mt + kt, Gt = Tt + Bt;
              if (Gt > it)
                break;
              et <= $t / Gt ? (kt = $t, Bt = Gt) : (mt = $t, Tt = Gt);
            }
            let Ut;
            return et - mt / Tt < kt / Bt - et ? Ut = et === ut ? [mt, Tt] : [Tt, mt] : Ut = et === ut ? [kt, Bt] : [Bt, kt], Ut;
          }
          function q(ut, lt) {
            const it = ut % lt;
            return it === 0 ? ut : Math.round(ut - it + lt);
          }
          function U({
            view: ut,
            userUnit: lt,
            rotate: it
          }) {
            const [et, mt, Tt, kt] = ut, Bt = it % 180 !== 0, Ut = (Tt - et) / 72 * lt, $t = (kt - mt) / 72 * lt;
            return {
              width: Bt ? $t : Ut,
              height: Bt ? Ut : $t
            };
          }
          function at(ut, lt, it) {
            if (ut < 2)
              return ut;
            let et = lt[ut].div, mt = et.offsetTop + et.clientTop;
            mt >= it && (et = lt[ut - 1].div, mt = et.offsetTop + et.clientTop);
            for (let Tt = ut - 2; Tt >= 0 && (et = lt[Tt].div, !(et.offsetTop + et.clientTop + et.clientHeight <= mt)); --Tt)
              ut = Tt;
            return ut;
          }
          function $({
            scrollEl: ut,
            views: lt,
            sortByVisibility: it = !1,
            horizontal: et = !1,
            rtl: mt = !1
          }) {
            const Tt = ut.scrollTop, kt = Tt + ut.clientHeight, Bt = ut.scrollLeft, Ut = Bt + ut.clientWidth;
            function $t(ot) {
              const dt = ot.div;
              return dt.offsetTop + dt.clientTop + dt.clientHeight > Tt;
            }
            function Gt(ot) {
              const dt = ot.div, bt = dt.offsetLeft + dt.clientLeft, j = bt + dt.clientWidth;
              return mt ? bt < Ut : j > Bt;
            }
            const Kt = [], Xt = /* @__PURE__ */ new Set(), Qt = lt.length;
            let At = Y(lt, et ? Gt : $t);
            At > 0 && At < Qt && !et && (At = at(At, lt, Tt));
            let v = et ? Ut : -1;
            for (let ot = At; ot < Qt; ot++) {
              const dt = lt[ot], bt = dt.div, j = bt.offsetLeft + bt.clientLeft, ct = bt.offsetTop + bt.clientTop, xt = bt.clientWidth, Et = bt.clientHeight, Ft = j + xt, Ot = ct + Et;
              if (v === -1)
                Ot >= kt && (v = Ot);
              else if ((et ? j : ct) > v)
                break;
              if (Ot <= Tt || ct >= kt || Ft <= Bt || j >= Ut)
                continue;
              const Wt = Math.max(0, Tt - ct) + Math.max(0, Ot - kt), Ct = Math.max(0, Bt - j) + Math.max(0, Ft - Ut), qt = (Et - Wt) / Et, Vt = (xt - Ct) / xt, Z = qt * Vt * 100 | 0;
              Kt.push({
                id: dt.id,
                x: j,
                y: ct,
                view: dt,
                percent: Z,
                widthPercent: Vt * 100 | 0
              }), Xt.add(dt.id);
            }
            const D = Kt[0], ht = Kt.at(-1);
            return it && Kt.sort(function(ot, dt) {
              const bt = ot.percent - dt.percent;
              return Math.abs(bt) > 1e-3 ? -bt : ot.id - dt.id;
            }), {
              first: D,
              last: ht,
              views: Kt,
              ids: Xt
            };
          }
          function wt(ut) {
            let lt = Math.hypot(ut.deltaX, ut.deltaY);
            const it = Math.atan2(ut.deltaY, ut.deltaX);
            return -0.25 * Math.PI < it && it < 0.75 * Math.PI && (lt = -lt), lt;
          }
          function Pt(ut) {
            const lt = ut.deltaMode;
            let it = wt(ut);
            const et = 30, mt = 30;
            return lt === WheelEvent.DOM_DELTA_PIXEL ? it /= et * mt : lt === WheelEvent.DOM_DELTA_LINE && (it /= mt), it;
          }
          function N(ut) {
            return Number.isInteger(ut) && ut % 90 === 0;
          }
          function a(ut) {
            return Number.isInteger(ut) && Object.values(s).includes(ut) && ut !== s.UNKNOWN;
          }
          function p(ut) {
            return Number.isInteger(ut) && Object.values(i).includes(ut) && ut !== i.UNKNOWN;
          }
          function l(ut) {
            return ut.width <= ut.height;
          }
          const T = new Promise(function(ut) {
            window.requestAnimationFrame(ut);
          });
          F.animationStarted = T;
          const R = document.documentElement.style;
          F.docStyle = R;
          function H(ut, lt, it) {
            return Math.min(Math.max(ut, lt), it);
          }
          class K {
            constructor(lt) {
              O(this, vt, null);
              O(this, gt, null);
              O(this, Lt, 0);
              O(this, It, null);
              O(this, Mt, !0);
              Q(this, vt, lt.classList), Q(this, It, lt.style);
            }
            get percent() {
              return t(this, Lt);
            }
            set percent(lt) {
              if (Q(this, Lt, H(lt, 0, 100)), isNaN(lt)) {
                t(this, vt).add("indeterminate");
                return;
              }
              t(this, vt).remove("indeterminate"), t(this, It).setProperty("--progressBar-percent", `${t(this, Lt)}%`);
            }
            setWidth(lt) {
              if (!lt)
                return;
              const et = lt.parentNode.offsetWidth - lt.offsetWidth;
              et > 0 && t(this, It).setProperty("--progressBar-end-offset", `${et}px`);
            }
            setDisableAutoFetch(lt = 5e3) {
              isNaN(t(this, Lt)) || (t(this, gt) && clearTimeout(t(this, gt)), this.show(), Q(this, gt, setTimeout(() => {
                Q(this, gt, null), this.hide();
              }, lt)));
            }
            hide() {
              t(this, Mt) && (Q(this, Mt, !1), t(this, vt).add("hidden"));
            }
            show() {
              t(this, Mt) || (Q(this, Mt, !0), t(this, vt).remove("hidden"));
            }
          }
          vt = new WeakMap(), gt = new WeakMap(), Lt = new WeakMap(), It = new WeakMap(), Mt = new WeakMap(), F.ProgressBar = K;
          function nt() {
            let ut = document, lt = ut.activeElement || ut.querySelector(":focus");
            for (; lt != null && lt.shadowRoot; )
              ut = lt.shadowRoot, lt = ut.activeElement || ut.querySelector(":focus");
            return lt;
          }
          function _t(ut) {
            let lt = s.VERTICAL, it = i.NONE;
            switch (ut) {
              case "SinglePage":
                lt = s.PAGE;
                break;
              case "OneColumn":
                break;
              case "TwoPageLeft":
                lt = s.PAGE;
              case "TwoColumnLeft":
                it = i.ODD;
                break;
              case "TwoPageRight":
                lt = s.PAGE;
              case "TwoColumnRight":
                it = i.EVEN;
                break;
            }
            return {
              scrollMode: lt,
              spreadMode: it
            };
          }
          function pt(ut) {
            switch (ut) {
              case "UseNone":
                return u.NONE;
              case "UseThumbs":
                return u.THUMBS;
              case "UseOutlines":
                return u.OUTLINE;
              case "UseAttachments":
                return u.ATTACHMENTS;
              case "UseOC":
                return u.LAYERS;
            }
            return u.NONE;
          }
          function St(ut, lt, it = null) {
            ut.classList.toggle("toggled", lt), ut.setAttribute("aria-checked", lt), it == null || it.classList.toggle("hidden", !lt);
          }
          function st(ut, lt, it = null) {
            ut.classList.toggle("toggled", lt), ut.setAttribute("aria-expanded", lt), it == null || it.classList.toggle("hidden", !lt);
          }
        },
        /* 3 */
        /***/
        (B, F) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.CharacterType = void 0, F.getCharacterType = u, F.getNormalizeWithNFKC = s;
          const f = {
            SPACE: 0,
            ALPHA_LETTER: 1,
            PUNCT: 2,
            HAN_LETTER: 3,
            KATAKANA_LETTER: 4,
            HIRAGANA_LETTER: 5,
            HALFWIDTH_KATAKANA_LETTER: 6,
            THAI_LETTER: 7
          };
          F.CharacterType = f;
          function d(i) {
            return i < 11904;
          }
          function r(i) {
            return (i & 65408) === 0;
          }
          function I(i) {
            return i >= 97 && i <= 122 || i >= 65 && i <= 90;
          }
          function k(i) {
            return i >= 48 && i <= 57;
          }
          function y(i) {
            return i === 32 || i === 9 || i === 13 || i === 10;
          }
          function h(i) {
            return i >= 13312 && i <= 40959 || i >= 63744 && i <= 64255;
          }
          function _(i) {
            return i >= 12448 && i <= 12543;
          }
          function m(i) {
            return i >= 12352 && i <= 12447;
          }
          function P(i) {
            return i >= 65376 && i <= 65439;
          }
          function A(i) {
            return (i & 65408) === 3584;
          }
          function u(i) {
            return d(i) ? r(i) ? y(i) ? f.SPACE : I(i) || k(i) || i === 95 ? f.ALPHA_LETTER : f.PUNCT : A(i) ? f.THAI_LETTER : i === 160 ? f.SPACE : f.ALPHA_LETTER : h(i) ? f.HAN_LETTER : _(i) ? f.KATAKANA_LETTER : m(i) ? f.HIRAGANA_LETTER : P(i) ? f.HALFWIDTH_KATAKANA_LETTER : f.ALPHA_LETTER;
          }
          let S;
          function s() {
            return S || (S = " ¨ª¯²-µ¸-º¼-¾Ĳ-ĳĿ-ŀŉſǄ-ǌǱ-ǳʰ-ʸ˘-˝ˠ-ˤʹͺ;΄-΅·ϐ-ϖϰ-ϲϴ-ϵϹևٵ-ٸक़-य़ড়-ঢ়য়ਲ਼ਸ਼ਖ਼-ਜ਼ਫ਼ଡ଼-ଢ଼ำຳໜ-ໝ༌གྷཌྷདྷབྷཛྷཀྵჼᴬ-ᴮᴰ-ᴺᴼ-ᵍᵏ-ᵪᵸᶛ-ᶿẚ-ẛάέήίόύώΆ᾽-῁ΈΉ῍-῏ΐΊ῝-῟ΰΎ῭-`ΌΏ´-῾ - ‑‗․-… ″-‴‶-‷‼‾⁇-⁉⁗ ⁰-ⁱ⁴-₎ₐ-ₜ₨℀-℃℅-ℇ℉-ℓℕ-№ℙ-ℝ℠-™ℤΩℨK-ℭℯ-ℱℳ-ℹ℻-⅀ⅅ-ⅉ⅐-ⅿ↉∬-∭∯-∰〈-〉①-⓪⨌⩴-⩶⫝̸ⱼ-ⱽⵯ⺟⻳⼀-⿕　〶〸-〺゛-゜ゟヿㄱ-ㆎ㆒-㆟㈀-㈞㈠-㉇㉐-㉾㊀-㏿ꚜ-ꚝꝰꟲ-ꟴꟸ-ꟹꭜ-ꭟꭩ豈-嗀塚晴凞-羽蘒諸逸-都飯-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷼︐-︙︰-﹄﹇-﹒﹔-﹦﹨-﹫ﹰ-ﹲﹴﹶ-ﻼ！-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ￠-￦"), S;
          }
        },
        /* 4 */
        /***/
        (B) => {
          B.exports = globalThis.pdfjsLib;
        },
        /* 5 */
        /***/
        (B, F, f) => {
          var _, m, Bi, A, Wn;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.SimpleLinkService = F.PDFLinkService = F.LinkTarget = void 0;
          var d = f(2);
          const r = "noopener noreferrer nofollow", I = {
            NONE: 0,
            SELF: 1,
            BLANK: 2,
            PARENT: 3,
            TOP: 4
          };
          F.LinkTarget = I;
          function k(s, {
            url: i,
            target: w,
            rel: b,
            enabled: c = !0
          } = {}) {
            if (!i || typeof i != "string")
              throw new Error('A valid "url" parameter must provided.');
            c ? s.href = s.title = i : (s.href = "", s.title = `Disabled: ${i}`, s.onclick = () => !1);
            let L = "";
            switch (w) {
              case I.NONE:
                break;
              case I.SELF:
                L = "_self";
                break;
              case I.BLANK:
                L = "_blank";
                break;
              case I.PARENT:
                L = "_parent";
                break;
              case I.TOP:
                L = "_top";
                break;
            }
            s.target = L, s.rel = typeof b == "string" ? b : r;
          }
          const S = class S {
            constructor({
              eventBus: i,
              externalLinkTarget: w = null,
              externalLinkRel: b = null,
              ignoreDestinationZoom: c = !1
            } = {}) {
              O(this, m);
              O(this, _, /* @__PURE__ */ new Map());
              this.eventBus = i, this.externalLinkTarget = w, this.externalLinkRel = b, this.externalLinkEnabled = !0, this._ignoreDestinationZoom = c, this.baseUrl = null, this.pdfDocument = null, this.pdfViewer = null, this.pdfHistory = null;
            }
            setDocument(i, w = null) {
              this.baseUrl = w, this.pdfDocument = i, t(this, _).clear();
            }
            setViewer(i) {
              this.pdfViewer = i;
            }
            setHistory(i) {
              this.pdfHistory = i;
            }
            get pagesCount() {
              return this.pdfDocument ? this.pdfDocument.numPages : 0;
            }
            get page() {
              return this.pdfViewer.currentPageNumber;
            }
            set page(i) {
              this.pdfViewer.currentPageNumber = i;
            }
            get rotation() {
              return this.pdfViewer.pagesRotation;
            }
            set rotation(i) {
              this.pdfViewer.pagesRotation = i;
            }
            get isInPresentationMode() {
              return this.pdfViewer.isInPresentationMode;
            }
            async goToDestination(i) {
              if (!this.pdfDocument)
                return;
              let w, b;
              if (typeof i == "string" ? (w = i, b = await this.pdfDocument.getDestination(i)) : (w = null, b = await i), !Array.isArray(b)) {
                console.error(`PDFLinkService.goToDestination: "${b}" is not a valid destination array, for dest="${i}".`);
                return;
              }
              W(this, m, Bi).call(this, i, w, b);
            }
            goToPage(i) {
              if (!this.pdfDocument)
                return;
              const w = typeof i == "string" && this.pdfViewer.pageLabelToPageNumber(i) || i | 0;
              if (!(Number.isInteger(w) && w > 0 && w <= this.pagesCount)) {
                console.error(`PDFLinkService.goToPage: "${i}" is not a valid page.`);
                return;
              }
              this.pdfHistory && (this.pdfHistory.pushCurrentPosition(), this.pdfHistory.pushPage(w)), this.pdfViewer.scrollPageIntoView({
                pageNumber: w
              });
            }
            addLinkAttributes(i, w, b = !1) {
              k(i, {
                url: w,
                target: b ? I.BLANK : this.externalLinkTarget,
                rel: this.externalLinkRel,
                enabled: this.externalLinkEnabled
              });
            }
            getDestinationHash(i) {
              if (typeof i == "string") {
                if (i.length > 0)
                  return this.getAnchorUrl("#" + escape(i));
              } else if (Array.isArray(i)) {
                const w = JSON.stringify(i);
                if (w.length > 0)
                  return this.getAnchorUrl("#" + escape(w));
              }
              return this.getAnchorUrl("");
            }
            getAnchorUrl(i) {
              return this.baseUrl ? this.baseUrl + i : i;
            }
            setHash(i) {
              var c;
              if (!this.pdfDocument)
                return;
              let w, b;
              if (i.includes("=")) {
                const L = (0, d.parseQueryString)(i);
                if (L.has("search")) {
                  const x = L.get("search").replaceAll('"', ""), z = L.get("phrase") === "true";
                  this.eventBus.dispatch("findfromurlhash", {
                    source: this,
                    query: z ? x : x.match(/\S+/g)
                  });
                }
                if (L.has("page") && (w = L.get("page") | 0 || 1), L.has("zoom")) {
                  const x = L.get("zoom").split(","), z = x[0], J = parseFloat(z);
                  z.includes("Fit") ? z === "Fit" || z === "FitB" ? b = [null, {
                    name: z
                  }] : z === "FitH" || z === "FitBH" || z === "FitV" || z === "FitBV" ? b = [null, {
                    name: z
                  }, x.length > 1 ? x[1] | 0 : null] : z === "FitR" ? x.length !== 5 ? console.error('PDFLinkService.setHash: Not enough parameters for "FitR".') : b = [null, {
                    name: z
                  }, x[1] | 0, x[2] | 0, x[3] | 0, x[4] | 0] : console.error(`PDFLinkService.setHash: "${z}" is not a valid zoom value.`) : b = [null, {
                    name: "XYZ"
                  }, x.length > 1 ? x[1] | 0 : null, x.length > 2 ? x[2] | 0 : null, J ? J / 100 : z];
                }
                b ? this.pdfViewer.scrollPageIntoView({
                  pageNumber: w || this.page,
                  destArray: b,
                  allowNegativeOffset: !0
                }) : w && (this.page = w), L.has("pagemode") && this.eventBus.dispatch("pagemode", {
                  source: this,
                  mode: L.get("pagemode")
                }), L.has("nameddest") && this.goToDestination(L.get("nameddest"));
              } else {
                b = unescape(i);
                try {
                  b = JSON.parse(b), Array.isArray(b) || (b = b.toString());
                } catch {
                }
                if (typeof b == "string" || W(c = S, A, Wn).call(c, b)) {
                  this.goToDestination(b);
                  return;
                }
                console.error(`PDFLinkService.setHash: "${unescape(i)}" is not a valid destination.`);
              }
            }
            executeNamedAction(i) {
              var w, b;
              switch (i) {
                case "GoBack":
                  (w = this.pdfHistory) == null || w.back();
                  break;
                case "GoForward":
                  (b = this.pdfHistory) == null || b.forward();
                  break;
                case "NextPage":
                  this.pdfViewer.nextPage();
                  break;
                case "PrevPage":
                  this.pdfViewer.previousPage();
                  break;
                case "LastPage":
                  this.page = this.pagesCount;
                  break;
                case "FirstPage":
                  this.page = 1;
                  break;
              }
              this.eventBus.dispatch("namedaction", {
                source: this,
                action: i
              });
            }
            async executeSetOCGState(i) {
              const w = this.pdfDocument, b = await this.pdfViewer.optionalContentConfigPromise;
              if (w !== this.pdfDocument)
                return;
              let c;
              for (const L of i.state) {
                switch (L) {
                  case "ON":
                  case "OFF":
                  case "Toggle":
                    c = L;
                    continue;
                }
                switch (c) {
                  case "ON":
                    b.setVisibility(L, !0);
                    break;
                  case "OFF":
                    b.setVisibility(L, !1);
                    break;
                  case "Toggle":
                    const x = b.getGroup(L);
                    x && b.setVisibility(L, !x.visible);
                    break;
                }
              }
              this.pdfViewer.optionalContentConfigPromise = Promise.resolve(b);
            }
            cachePageRef(i, w) {
              if (!w)
                return;
              const b = w.gen === 0 ? `${w.num}R` : `${w.num}R${w.gen}`;
              t(this, _).set(b, i);
            }
            _cachedPageNumber(i) {
              if (!i)
                return null;
              const w = i.gen === 0 ? `${i.num}R` : `${i.num}R${i.gen}`;
              return t(this, _).get(w) || null;
            }
          };
          _ = new WeakMap(), m = new WeakSet(), Bi = function(i, w = null, b) {
            const c = b[0];
            let L;
            if (typeof c == "object" && c !== null) {
              if (L = this._cachedPageNumber(c), !L) {
                this.pdfDocument.getPageIndex(c).then((x) => {
                  this.cachePageRef(x + 1, c), W(this, m, Bi).call(this, i, w, b);
                }).catch(() => {
                  console.error(`PDFLinkService.#goToDestinationHelper: "${c}" is not a valid page reference, for dest="${i}".`);
                });
                return;
              }
            } else if (Number.isInteger(c))
              L = c + 1;
            else {
              console.error(`PDFLinkService.#goToDestinationHelper: "${c}" is not a valid destination reference, for dest="${i}".`);
              return;
            }
            if (!L || L < 1 || L > this.pagesCount) {
              console.error(`PDFLinkService.#goToDestinationHelper: "${L}" is not a valid page number, for dest="${i}".`);
              return;
            }
            this.pdfHistory && (this.pdfHistory.pushCurrentPosition(), this.pdfHistory.push({
              namedDest: w,
              explicitDest: b,
              pageNumber: L
            })), this.pdfViewer.scrollPageIntoView({
              pageNumber: L,
              destArray: b,
              ignoreDestinationZoom: this._ignoreDestinationZoom
            });
          }, A = new WeakSet(), Wn = function(i) {
            if (!Array.isArray(i))
              return !1;
            const w = i.length;
            if (w < 2)
              return !1;
            const b = i[0];
            if (!(typeof b == "object" && Number.isInteger(b.num) && Number.isInteger(b.gen)) && !(Number.isInteger(b) && b >= 0))
              return !1;
            const c = i[1];
            if (!(typeof c == "object" && typeof c.name == "string"))
              return !1;
            let L = !0;
            switch (c.name) {
              case "XYZ":
                if (w !== 5)
                  return !1;
                break;
              case "Fit":
              case "FitB":
                return w === 2;
              case "FitH":
              case "FitBH":
              case "FitV":
              case "FitBV":
                if (w !== 3)
                  return !1;
                break;
              case "FitR":
                if (w !== 6)
                  return !1;
                L = !1;
                break;
              default:
                return !1;
            }
            for (let x = 2; x < w; x++) {
              const z = i[x];
              if (!(typeof z == "number" || L && z === null))
                return !1;
            }
            return !0;
          }, O(S, A);
          let y = S;
          F.PDFLinkService = y;
          class h {
            constructor() {
              this.externalLinkEnabled = !0;
            }
            get pagesCount() {
              return 0;
            }
            get page() {
              return 0;
            }
            set page(i) {
            }
            get rotation() {
              return 0;
            }
            set rotation(i) {
            }
            get isInPresentationMode() {
              return !1;
            }
            async goToDestination(i) {
            }
            goToPage(i) {
            }
            addLinkAttributes(i, w, b = !1) {
              k(i, {
                url: w,
                enabled: this.externalLinkEnabled
              });
            }
            getDestinationHash(i) {
              return "#";
            }
            getAnchorUrl(i) {
              return "#";
            }
            setHash(i) {
            }
            executeNamedAction(i) {
            }
            executeSetOCGState(i) {
            }
            cachePageRef(i, w) {
            }
          }
          F.SimpleLinkService = h;
        },
        /* 6 */
        /***/
        (B, F, f) => {
          var y, h, Vi;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.AnnotationLayerBuilder = void 0;
          var d = f(4), r = f(7), I = f(2);
          class k {
            constructor({
              pageDiv: P,
              pdfPage: A,
              linkService: u,
              downloadManager: S,
              annotationStorage: s = null,
              imageResourcesPath: i = "",
              renderForms: w = !0,
              l10n: b = r.NullL10n,
              enableScripting: c = !1,
              hasJSActionsPromise: L = null,
              fieldObjectsPromise: x = null,
              annotationCanvasMap: z = null,
              accessibilityManager: J = null
            }) {
              O(this, h);
              O(this, y, null);
              this.pageDiv = P, this.pdfPage = A, this.linkService = u, this.downloadManager = S, this.imageResourcesPath = i, this.renderForms = w, this.l10n = b, this.annotationStorage = s, this.enableScripting = c, this._hasJSActionsPromise = L || Promise.resolve(!1), this._fieldObjectsPromise = x || Promise.resolve(null), this._annotationCanvasMap = z, this._accessibilityManager = J, this.annotationLayer = null, this.div = null, this._cancelled = !1, this._eventBus = u.eventBus;
            }
            async render(P, A = "display") {
              var w;
              if (this.div) {
                if (this._cancelled || !this.annotationLayer)
                  return;
                this.annotationLayer.update({
                  viewport: P.clone({
                    dontFlip: !0
                  })
                });
                return;
              }
              const [u, S, s] = await Promise.all([this.pdfPage.getAnnotations({
                intent: A
              }), this._hasJSActionsPromise, this._fieldObjectsPromise]);
              if (this._cancelled)
                return;
              const i = this.div = document.createElement("div");
              if (i.className = "annotationLayer", this.pageDiv.append(i), u.length === 0) {
                this.hide();
                return;
              }
              this.annotationLayer = new d.AnnotationLayer({
                div: i,
                accessibilityManager: this._accessibilityManager,
                annotationCanvasMap: this._annotationCanvasMap,
                l10n: this.l10n,
                page: this.pdfPage,
                viewport: P.clone({
                  dontFlip: !0
                })
              }), await this.annotationLayer.render({
                annotations: u,
                imageResourcesPath: this.imageResourcesPath,
                renderForms: this.renderForms,
                linkService: this.linkService,
                downloadManager: this.downloadManager,
                annotationStorage: this.annotationStorage,
                enableScripting: this.enableScripting,
                hasJSActions: S,
                fieldObjects: s
              }), this.linkService.isInPresentationMode && W(this, h, Vi).call(this, I.PresentationModeState.FULLSCREEN), t(this, y) || (Q(this, y, (b) => {
                W(this, h, Vi).call(this, b.state);
              }), (w = this._eventBus) == null || w._on("presentationmodechanged", t(this, y)));
            }
            cancel() {
              var P;
              this._cancelled = !0, t(this, y) && ((P = this._eventBus) == null || P._off("presentationmodechanged", t(this, y)), Q(this, y, null));
            }
            hide() {
              this.div && (this.div.hidden = !0);
            }
          }
          y = new WeakMap(), h = new WeakSet(), Vi = function(P) {
            if (!this.div)
              return;
            let A = !1;
            switch (P) {
              case I.PresentationModeState.FULLSCREEN:
                A = !0;
                break;
              case I.PresentationModeState.NORMAL:
                break;
              default:
                return;
            }
            for (const u of this.div.childNodes)
              u.hasAttribute("data-internal-link") || (u.inert = A);
          }, F.AnnotationLayerBuilder = k;
        },
        /* 7 */
        /***/
        (B, F) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.NullL10n = void 0, F.getL10nFallback = d;
          const f = {
            of_pages: "of {{pagesCount}}",
            page_of_pages: "({{pageNumber}} of {{pagesCount}})",
            document_properties_kb: "{{size_kb}} KB ({{size_b}} bytes)",
            document_properties_mb: "{{size_mb}} MB ({{size_b}} bytes)",
            document_properties_date_string: "{{date}}, {{time}}",
            document_properties_page_size_unit_inches: "in",
            document_properties_page_size_unit_millimeters: "mm",
            document_properties_page_size_orientation_portrait: "portrait",
            document_properties_page_size_orientation_landscape: "landscape",
            document_properties_page_size_name_a3: "A3",
            document_properties_page_size_name_a4: "A4",
            document_properties_page_size_name_letter: "Letter",
            document_properties_page_size_name_legal: "Legal",
            document_properties_page_size_dimension_string: "{{width}} × {{height}} {{unit}} ({{orientation}})",
            document_properties_page_size_dimension_name_string: "{{width}} × {{height}} {{unit}} ({{name}}, {{orientation}})",
            document_properties_linearized_yes: "Yes",
            document_properties_linearized_no: "No",
            additional_layers: "Additional Layers",
            page_landmark: "Page {{page}}",
            thumb_page_title: "Page {{page}}",
            thumb_page_canvas: "Thumbnail of Page {{page}}",
            find_reached_top: "Reached top of document, continued from bottom",
            find_reached_bottom: "Reached end of document, continued from top",
            "find_match_count[one]": "{{current}} of {{total}} match",
            "find_match_count[other]": "{{current}} of {{total}} matches",
            "find_match_count_limit[one]": "More than {{limit}} match",
            "find_match_count_limit[other]": "More than {{limit}} matches",
            find_not_found: "Phrase not found",
            page_scale_width: "Page Width",
            page_scale_fit: "Page Fit",
            page_scale_auto: "Automatic Zoom",
            page_scale_actual: "Actual Size",
            page_scale_percent: "{{scale}}%",
            loading_error: "An error occurred while loading the PDF.",
            invalid_file_error: "Invalid or corrupted PDF file.",
            missing_file_error: "Missing PDF file.",
            unexpected_response_error: "Unexpected server response.",
            rendering_error: "An error occurred while rendering the page.",
            annotation_date_string: "{{date}}, {{time}}",
            printing_not_supported: "Warning: Printing is not fully supported by this browser.",
            printing_not_ready: "Warning: The PDF is not fully loaded for printing.",
            web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts.",
            free_text2_default_content: "Start typing…",
            editor_free_text2_aria_label: "Text Editor",
            editor_ink2_aria_label: "Draw Editor",
            editor_ink_canvas_aria_label: "User-created image",
            editor_alt_text_button_label: "Alt text",
            editor_alt_text_edit_button_label: "Edit alt text",
            editor_alt_text_decorative_tooltip: "Marked as decorative"
          };
          f.print_progress_percent = "{{progress}}%";
          function d(k, y) {
            switch (k) {
              case "find_match_count":
                k = `find_match_count[${y.total === 1 ? "one" : "other"}]`;
                break;
              case "find_match_count_limit":
                k = `find_match_count_limit[${y.limit === 1 ? "one" : "other"}]`;
                break;
            }
            return f[k] || "";
          }
          function r(k, y) {
            return y ? k.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (h, _) => _ in y ? y[_] : "{{" + _ + "}}") : k;
          }
          const I = {
            async getLanguage() {
              return "en-us";
            },
            async getDirection() {
              return "ltr";
            },
            async get(k, y = null, h = d(k, y)) {
              return r(h, y);
            },
            async translate(k) {
            }
          };
          F.NullL10n = I;
        },
        /* 8 */
        /***/
        (B, F, f) => {
          var k;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.DownloadManager = void 0;
          var d = f(4);
          function r(y, h) {
            const _ = document.createElement("a");
            if (!_.click)
              throw new Error('DownloadManager: "a.click()" is not supported.');
            _.href = y, _.target = "_parent", "download" in _ && (_.download = h), (document.body || document.documentElement).append(_), _.click(), _.remove();
          }
          class I {
            constructor() {
              O(this, k, /* @__PURE__ */ new WeakMap());
            }
            downloadUrl(h, _, m) {
              if (!(0, d.createValidAbsoluteUrl)(h, "http://example.com")) {
                console.error(`downloadUrl - not a valid URL: ${h}`);
                return;
              }
              r(h + "#pdfjs.action=download", _);
            }
            downloadData(h, _, m) {
              const P = URL.createObjectURL(new Blob([h], {
                type: m
              }));
              r(P, _);
            }
            openOrDownloadData(h, _, m) {
              const A = (0, d.isPdfFile)(m) ? "application/pdf" : "";
              return this.downloadData(_, m, A), !1;
            }
            download(h, _, m, P) {
              const A = URL.createObjectURL(h);
              r(A, m);
            }
          }
          k = new WeakMap(), F.DownloadManager = I;
        },
        /* 9 */
        /***/
        (B, F) => {
          var k;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.WaitOnType = F.EventBus = F.AutomationEventBus = void 0, F.waitOnEventOrTimeout = d;
          const f = {
            EVENT: "event",
            TIMEOUT: "timeout"
          };
          F.WaitOnType = f;
          function d({
            target: y,
            name: h,
            delay: _ = 0
          }) {
            return new Promise(function(m, P) {
              if (typeof y != "object" || !(h && typeof h == "string") || !(Number.isInteger(_) && _ >= 0))
                throw new Error("waitOnEventOrTimeout - invalid parameters.");
              function A(i) {
                y instanceof r ? y._off(h, u) : y.removeEventListener(h, u), s && clearTimeout(s), m(i);
              }
              const u = A.bind(null, f.EVENT);
              y instanceof r ? y._on(h, u) : y.addEventListener(h, u);
              const S = A.bind(null, f.TIMEOUT), s = setTimeout(S, _);
            });
          }
          class r {
            constructor() {
              O(this, k, /* @__PURE__ */ Object.create(null));
            }
            on(h, _, m = null) {
              this._on(h, _, {
                external: !0,
                once: m == null ? void 0 : m.once
              });
            }
            off(h, _, m = null) {
              this._off(h, _, {
                external: !0,
                once: m == null ? void 0 : m.once
              });
            }
            dispatch(h, _) {
              const m = t(this, k)[h];
              if (!m || m.length === 0)
                return;
              let P;
              for (const {
                listener: A,
                external: u,
                once: S
              } of m.slice(0)) {
                if (S && this._off(h, A), u) {
                  (P || (P = [])).push(A);
                  continue;
                }
                A(_);
              }
              if (P) {
                for (const A of P)
                  A(_);
                P = null;
              }
            }
            _on(h, _, m = null) {
              var A;
              ((A = t(this, k))[h] || (A[h] = [])).push({
                listener: _,
                external: (m == null ? void 0 : m.external) === !0,
                once: (m == null ? void 0 : m.once) === !0
              });
            }
            _off(h, _, m = null) {
              const P = t(this, k)[h];
              if (P) {
                for (let A = 0, u = P.length; A < u; A++)
                  if (P[A].listener === _) {
                    P.splice(A, 1);
                    return;
                  }
              }
            }
          }
          k = new WeakMap(), F.EventBus = r;
          class I extends r {
            dispatch(h, _) {
              throw new Error("Not implemented: AutomationEventBus.dispatch");
            }
          }
          F.AutomationEventBus = I;
        },
        /* 10 */
        /***/
        (B, F, f) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.GenericL10n = void 0, f(11);
          var d = f(7);
          const r = {
            en: "en-US",
            es: "es-ES",
            fy: "fy-NL",
            ga: "ga-IE",
            gu: "gu-IN",
            hi: "hi-IN",
            hy: "hy-AM",
            nb: "nb-NO",
            ne: "ne-NP",
            nn: "nn-NO",
            pa: "pa-IN",
            pt: "pt-PT",
            sv: "sv-SE",
            zh: "zh-CN"
          };
          function I(y) {
            return r[y == null ? void 0 : y.toLowerCase()] || y;
          }
          class k {
            constructor(h) {
              const {
                webL10n: _
              } = document;
              this._lang = h, this._ready = new Promise((m, P) => {
                _.setLanguage(I(h), () => {
                  m(_);
                });
              });
            }
            async getLanguage() {
              return (await this._ready).getLanguage();
            }
            async getDirection() {
              return (await this._ready).getDirection();
            }
            async get(h, _ = null, m = (0, d.getL10nFallback)(h, _)) {
              return (await this._ready).get(h, _, m);
            }
            async translate(h) {
              return (await this._ready).translate(h);
            }
          }
          F.GenericL10n = k;
        },
        /* 11 */
        /***/
        () => {
          document.webL10n = function(B, F) {
            var f = {}, d = "", r = "textContent", I = "", k = {}, y = "loading", h = !0;
            function _() {
              return F.querySelectorAll('link[type="application/l10n"]');
            }
            function m() {
              var M = F.querySelector('script[type="application/l10n"]');
              return M ? JSON.parse(M.innerHTML) : null;
            }
            function P(M) {
              return M ? M.querySelectorAll("*[data-l10n-id]") : [];
            }
            function A(M) {
              if (!M)
                return {};
              var Y = M.getAttribute("data-l10n-id"), tt = M.getAttribute("data-l10n-args"), q = {};
              if (tt)
                try {
                  q = JSON.parse(tt);
                } catch {
                  console.warn("could not parse arguments for #" + Y);
                }
              return {
                id: Y,
                args: q
              };
            }
            function u(M, Y, tt) {
              Y = Y || function(at) {
              }, tt = tt || function() {
              };
              var q = new XMLHttpRequest();
              q.open("GET", M, h), q.overrideMimeType && q.overrideMimeType("text/plain; charset=utf-8"), q.onreadystatechange = function() {
                q.readyState == 4 && (q.status == 200 || q.status === 0 ? Y(q.responseText) : tt());
              }, q.onerror = tt, q.ontimeout = tt;
              try {
                q.send(null);
              } catch {
                tt();
              }
            }
            function S(M, Y, tt, q) {
              var U = M.replace(/[^\/]*$/, "") || "./";
              function at(wt) {
                return wt.lastIndexOf("\\") < 0 ? wt : wt.replace(/\\\\/g, "\\").replace(/\\n/g, `
`).replace(/\\r/g, "\r").replace(/\\t/g, "	").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\{/g, "{").replace(/\\}/g, "}").replace(/\\"/g, '"').replace(/\\'/g, "'");
              }
              function $(wt, Pt) {
                var N = {}, a = /^\s*|\s*$/, p = /^\s*#|^\s*$/, l = /^\s*\[(.*)\]\s*$/, T = /^\s*@import\s+url\((.*)\)\s*$/i, R = /^([^=\s]*)\s*=\s*(.+)$/;
                function H(nt, _t, pt) {
                  var St = nt.replace(a, "").split(/[\r\n]+/), st = "*", vt = Y.split("-", 1)[0], gt = !1, Lt = "";
                  function It() {
                    for (; ; ) {
                      if (!St.length) {
                        pt();
                        return;
                      }
                      var Mt = St.shift();
                      if (!p.test(Mt)) {
                        if (_t) {
                          if (Lt = l.exec(Mt), Lt) {
                            st = Lt[1].toLowerCase(), gt = st !== "*" && st !== Y && st !== vt;
                            continue;
                          } else if (gt)
                            continue;
                          if (Lt = T.exec(Mt), Lt) {
                            K(U + Lt[1], It);
                            return;
                          }
                        }
                        var ut = Mt.match(R);
                        ut && ut.length == 3 && (N[ut[1]] = at(ut[2]));
                      }
                    }
                  }
                  It();
                }
                function K(nt, _t) {
                  u(nt, function(pt) {
                    H(pt, !1, _t);
                  }, function() {
                    console.warn(nt + " not found."), _t();
                  });
                }
                H(wt, !0, function() {
                  Pt(N);
                });
              }
              u(M, function(wt) {
                d += wt, $(wt, function(Pt) {
                  for (var N in Pt) {
                    var a, p, l = N.lastIndexOf(".");
                    l > 0 ? (a = N.substring(0, l), p = N.substring(l + 1)) : (a = N, p = r), f[a] || (f[a] = {}), f[a][p] = Pt[N];
                  }
                  tt && tt();
                });
              }, q);
            }
            function s(M, Y) {
              M && (M = M.toLowerCase()), Y = Y || function() {
              }, i(), I = M;
              var tt = _(), q = tt.length;
              if (q === 0) {
                var U = m();
                if (U && U.locales && U.default_locale) {
                  if (console.log("using the embedded JSON directory, early way out"), f = U.locales[M], !f) {
                    var at = U.default_locale.toLowerCase();
                    for (var $ in U.locales)
                      if ($ = $.toLowerCase(), $ === M) {
                        f = U.locales[M];
                        break;
                      } else
                        $ === at && (f = U.locales[at]);
                  }
                  Y();
                } else
                  console.log("no resource to load, early way out");
                y = "complete";
                return;
              }
              var wt = null, Pt = 0;
              wt = function() {
                Pt++, Pt >= q && (Y(), y = "complete");
              };
              function N(l) {
                var T = l.href;
                this.load = function(R, H) {
                  S(T, R, H, function() {
                    console.warn(T + " not found."), console.warn('"' + R + '" resource not found'), I = "", H();
                  });
                };
              }
              for (var a = 0; a < q; a++) {
                var p = new N(tt[a]);
                p.load(M, wt);
              }
            }
            function i() {
              f = {}, d = "", I = "";
            }
            function w(M) {
              var Y = {
                af: 3,
                ak: 4,
                am: 4,
                ar: 1,
                asa: 3,
                az: 0,
                be: 11,
                bem: 3,
                bez: 3,
                bg: 3,
                bh: 4,
                bm: 0,
                bn: 3,
                bo: 0,
                br: 20,
                brx: 3,
                bs: 11,
                ca: 3,
                cgg: 3,
                chr: 3,
                cs: 12,
                cy: 17,
                da: 3,
                de: 3,
                dv: 3,
                dz: 0,
                ee: 3,
                el: 3,
                en: 3,
                eo: 3,
                es: 3,
                et: 3,
                eu: 3,
                fa: 0,
                ff: 5,
                fi: 3,
                fil: 4,
                fo: 3,
                fr: 5,
                fur: 3,
                fy: 3,
                ga: 8,
                gd: 24,
                gl: 3,
                gsw: 3,
                gu: 3,
                guw: 4,
                gv: 23,
                ha: 3,
                haw: 3,
                he: 2,
                hi: 4,
                hr: 11,
                hu: 0,
                id: 0,
                ig: 0,
                ii: 0,
                is: 3,
                it: 3,
                iu: 7,
                ja: 0,
                jmc: 3,
                jv: 0,
                ka: 0,
                kab: 5,
                kaj: 3,
                kcg: 3,
                kde: 0,
                kea: 0,
                kk: 3,
                kl: 3,
                km: 0,
                kn: 0,
                ko: 0,
                ksb: 3,
                ksh: 21,
                ku: 3,
                kw: 7,
                lag: 18,
                lb: 3,
                lg: 3,
                ln: 4,
                lo: 0,
                lt: 10,
                lv: 6,
                mas: 3,
                mg: 4,
                mk: 16,
                ml: 3,
                mn: 3,
                mo: 9,
                mr: 3,
                ms: 0,
                mt: 15,
                my: 0,
                nah: 3,
                naq: 7,
                nb: 3,
                nd: 3,
                ne: 3,
                nl: 3,
                nn: 3,
                no: 3,
                nr: 3,
                nso: 4,
                ny: 3,
                nyn: 3,
                om: 3,
                or: 3,
                pa: 3,
                pap: 3,
                pl: 13,
                ps: 3,
                pt: 3,
                rm: 3,
                ro: 9,
                rof: 3,
                ru: 11,
                rwk: 3,
                sah: 0,
                saq: 3,
                se: 7,
                seh: 3,
                ses: 0,
                sg: 0,
                sh: 11,
                shi: 19,
                sk: 12,
                sl: 14,
                sma: 7,
                smi: 7,
                smj: 7,
                smn: 7,
                sms: 7,
                sn: 3,
                so: 3,
                sq: 3,
                sr: 11,
                ss: 3,
                ssy: 3,
                st: 3,
                sv: 3,
                sw: 3,
                syr: 3,
                ta: 3,
                te: 3,
                teo: 3,
                th: 0,
                ti: 4,
                tig: 3,
                tk: 3,
                tl: 4,
                tn: 3,
                to: 0,
                tr: 0,
                ts: 3,
                tzm: 22,
                uk: 11,
                ur: 3,
                ve: 3,
                vi: 0,
                vun: 3,
                wa: 4,
                wae: 3,
                wo: 0,
                xh: 3,
                xog: 3,
                yo: 0,
                zh: 0,
                zu: 3
              };
              function tt($, wt) {
                return wt.indexOf($) !== -1;
              }
              function q($, wt, Pt) {
                return wt <= $ && $ <= Pt;
              }
              var U = {
                0: function($) {
                  return "other";
                },
                1: function($) {
                  return q($ % 100, 3, 10) ? "few" : $ === 0 ? "zero" : q($ % 100, 11, 99) ? "many" : $ == 2 ? "two" : $ == 1 ? "one" : "other";
                },
                2: function($) {
                  return $ !== 0 && $ % 10 === 0 ? "many" : $ == 2 ? "two" : $ == 1 ? "one" : "other";
                },
                3: function($) {
                  return $ == 1 ? "one" : "other";
                },
                4: function($) {
                  return q($, 0, 1) ? "one" : "other";
                },
                5: function($) {
                  return q($, 0, 2) && $ != 2 ? "one" : "other";
                },
                6: function($) {
                  return $ === 0 ? "zero" : $ % 10 == 1 && $ % 100 != 11 ? "one" : "other";
                },
                7: function($) {
                  return $ == 2 ? "two" : $ == 1 ? "one" : "other";
                },
                8: function($) {
                  return q($, 3, 6) ? "few" : q($, 7, 10) ? "many" : $ == 2 ? "two" : $ == 1 ? "one" : "other";
                },
                9: function($) {
                  return $ === 0 || $ != 1 && q($ % 100, 1, 19) ? "few" : $ == 1 ? "one" : "other";
                },
                10: function($) {
                  return q($ % 10, 2, 9) && !q($ % 100, 11, 19) ? "few" : $ % 10 == 1 && !q($ % 100, 11, 19) ? "one" : "other";
                },
                11: function($) {
                  return q($ % 10, 2, 4) && !q($ % 100, 12, 14) ? "few" : $ % 10 === 0 || q($ % 10, 5, 9) || q($ % 100, 11, 14) ? "many" : $ % 10 == 1 && $ % 100 != 11 ? "one" : "other";
                },
                12: function($) {
                  return q($, 2, 4) ? "few" : $ == 1 ? "one" : "other";
                },
                13: function($) {
                  return q($ % 10, 2, 4) && !q($ % 100, 12, 14) ? "few" : $ != 1 && q($ % 10, 0, 1) || q($ % 10, 5, 9) || q($ % 100, 12, 14) ? "many" : $ == 1 ? "one" : "other";
                },
                14: function($) {
                  return q($ % 100, 3, 4) ? "few" : $ % 100 == 2 ? "two" : $ % 100 == 1 ? "one" : "other";
                },
                15: function($) {
                  return $ === 0 || q($ % 100, 2, 10) ? "few" : q($ % 100, 11, 19) ? "many" : $ == 1 ? "one" : "other";
                },
                16: function($) {
                  return $ % 10 == 1 && $ != 11 ? "one" : "other";
                },
                17: function($) {
                  return $ == 3 ? "few" : $ === 0 ? "zero" : $ == 6 ? "many" : $ == 2 ? "two" : $ == 1 ? "one" : "other";
                },
                18: function($) {
                  return $ === 0 ? "zero" : q($, 0, 2) && $ !== 0 && $ != 2 ? "one" : "other";
                },
                19: function($) {
                  return q($, 2, 10) ? "few" : q($, 0, 1) ? "one" : "other";
                },
                20: function($) {
                  return (q($ % 10, 3, 4) || $ % 10 == 9) && !(q($ % 100, 10, 19) || q($ % 100, 70, 79) || q($ % 100, 90, 99)) ? "few" : $ % 1e6 === 0 && $ !== 0 ? "many" : $ % 10 == 2 && !tt($ % 100, [12, 72, 92]) ? "two" : $ % 10 == 1 && !tt($ % 100, [11, 71, 91]) ? "one" : "other";
                },
                21: function($) {
                  return $ === 0 ? "zero" : $ == 1 ? "one" : "other";
                },
                22: function($) {
                  return q($, 0, 1) || q($, 11, 99) ? "one" : "other";
                },
                23: function($) {
                  return q($ % 10, 1, 2) || $ % 20 === 0 ? "one" : "other";
                },
                24: function($) {
                  return q($, 3, 10) || q($, 13, 19) ? "few" : tt($, [2, 12]) ? "two" : tt($, [1, 11]) ? "one" : "other";
                }
              }, at = Y[M.replace(/-.*$/, "")];
              return at in U ? U[at] : (console.warn("plural form unknown for [" + M + "]"), function() {
                return "other";
              });
            }
            k.plural = function(M, Y, tt, q) {
              var U = parseFloat(Y);
              if (isNaN(U) || q != r)
                return M;
              k._pluralRules || (k._pluralRules = w(I));
              var at = "[" + k._pluralRules(U) + "]";
              return U === 0 && tt + "[zero]" in f ? M = f[tt + "[zero]"][q] : U == 1 && tt + "[one]" in f ? M = f[tt + "[one]"][q] : U == 2 && tt + "[two]" in f ? M = f[tt + "[two]"][q] : tt + at in f ? M = f[tt + at][q] : tt + "[other]" in f && (M = f[tt + "[other]"][q]), M;
            };
            function b(M, Y, tt) {
              var q = f[M];
              if (!q) {
                if (console.warn("#" + M + " is undefined."), !tt)
                  return null;
                q = tt;
              }
              var U = {};
              for (var at in q) {
                var $ = q[at];
                $ = c($, Y, M, at), $ = L($, Y, M), U[at] = $;
              }
              return U;
            }
            function c(M, Y, tt, q) {
              var U = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/, at = U.exec(M);
              if (!at || !at.length)
                return M;
              var $ = at[1], wt = at[2], Pt;
              if (Y && wt in Y ? Pt = Y[wt] : wt in f && (Pt = f[wt]), $ in k) {
                var N = k[$];
                M = N(M, Pt, tt, q);
              }
              return M;
            }
            function L(M, Y, tt) {
              var q = /\{\{\s*(.+?)\s*\}\}/g;
              return M.replace(q, function(U, at) {
                return Y && at in Y ? Y[at] : at in f ? f[at] : (console.log("argument {{" + at + "}} for #" + tt + " is undefined."), U);
              });
            }
            function x(M) {
              var Y = A(M);
              if (Y.id) {
                var tt = b(Y.id, Y.args);
                if (!tt) {
                  console.warn("#" + Y.id + " is undefined.");
                  return;
                }
                if (tt[r]) {
                  if (z(M) === 0)
                    M[r] = tt[r];
                  else {
                    for (var q = M.childNodes, U = !1, at = 0, $ = q.length; at < $; at++)
                      q[at].nodeType === 3 && /\S/.test(q[at].nodeValue) && (U ? q[at].nodeValue = "" : (q[at].nodeValue = tt[r], U = !0));
                    if (!U) {
                      var wt = F.createTextNode(tt[r]);
                      M.prepend(wt);
                    }
                  }
                  delete tt[r];
                }
                for (var Pt in tt)
                  M[Pt] = tt[Pt];
              }
            }
            function z(M) {
              if (M.children)
                return M.children.length;
              if (typeof M.childElementCount < "u")
                return M.childElementCount;
              for (var Y = 0, tt = 0; tt < M.childNodes.length; tt++)
                Y += M.nodeType === 1 ? 1 : 0;
              return Y;
            }
            function J(M) {
              M = M || F.documentElement;
              for (var Y = P(M), tt = Y.length, q = 0; q < tt; q++)
                x(Y[q]);
              x(M);
            }
            return {
              get: function(M, Y, tt) {
                var q = M.lastIndexOf("."), U = r;
                q > 0 && (U = M.substring(q + 1), M = M.substring(0, q));
                var at;
                tt && (at = {}, at[U] = tt);
                var $ = b(M, Y, at);
                return $ && U in $ ? $[U] : "{{" + M + "}}";
              },
              getData: function() {
                return f;
              },
              getText: function() {
                return d;
              },
              getLanguage: function() {
                return I;
              },
              setLanguage: function(M, Y) {
                s(M, function() {
                  Y && Y();
                });
              },
              getDirection: function() {
                var M = ["ar", "he", "fa", "ps", "ur"], Y = I.split("-", 1)[0];
                return M.indexOf(Y) >= 0 ? "rtl" : "ltr";
              },
              translate: J,
              getReadyState: function() {
                return y;
              },
              ready: function(M) {
                if (M)
                  y == "complete" || y == "interactive" ? B.setTimeout(function() {
                    M();
                  }) : F.addEventListener && F.addEventListener("localized", function Y() {
                    F.removeEventListener("localized", Y), M();
                  });
                else
                  return;
              }
            };
          }(window, document);
        },
        /* 12 */
        /***/
        (B, F, f) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFHistory = void 0, F.isDestArraysEqual = P, F.isDestHashesEqual = m;
          var d = f(2), r = f(9);
          const I = 1e3, k = 50, y = 1e3;
          function h() {
            return document.location.hash;
          }
          class _ {
            constructor({
              linkService: u,
              eventBus: S
            }) {
              this.linkService = u, this.eventBus = S, this._initialized = !1, this._fingerprint = "", this.reset(), this._boundEvents = null, this.eventBus._on("pagesinit", () => {
                this._isPagesLoaded = !1, this.eventBus._on("pagesloaded", (s) => {
                  this._isPagesLoaded = !!s.pagesCount;
                }, {
                  once: !0
                });
              });
            }
            initialize({
              fingerprint: u,
              resetHistory: S = !1,
              updateUrl: s = !1
            }) {
              if (!u || typeof u != "string") {
                console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.');
                return;
              }
              this._initialized && this.reset();
              const i = this._fingerprint !== "" && this._fingerprint !== u;
              this._fingerprint = u, this._updateUrl = s === !0, this._initialized = !0, this._bindEvents();
              const w = window.history.state;
              if (this._popStateInProgress = !1, this._blockHashChange = 0, this._currentHash = h(), this._numPositionUpdates = 0, this._uid = this._maxUid = 0, this._destination = null, this._position = null, !this._isValidState(w, !0) || S) {
                const {
                  hash: c,
                  page: L,
                  rotation: x
                } = this._parseCurrentHash(!0);
                if (!c || i || S) {
                  this._pushOrReplaceState(null, !0);
                  return;
                }
                this._pushOrReplaceState({
                  hash: c,
                  page: L,
                  rotation: x
                }, !0);
                return;
              }
              const b = w.destination;
              this._updateInternalState(b, w.uid, !0), b.rotation !== void 0 && (this._initialRotation = b.rotation), b.dest ? (this._initialBookmark = JSON.stringify(b.dest), this._destination.page = null) : b.hash ? this._initialBookmark = b.hash : b.page && (this._initialBookmark = `page=${b.page}`);
            }
            reset() {
              this._initialized && (this._pageHide(), this._initialized = !1, this._unbindEvents()), this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._initialBookmark = null, this._initialRotation = null;
            }
            push({
              namedDest: u = null,
              explicitDest: S,
              pageNumber: s
            }) {
              if (!this._initialized)
                return;
              if (u && typeof u != "string") {
                console.error(`PDFHistory.push: "${u}" is not a valid namedDest parameter.`);
                return;
              } else if (Array.isArray(S)) {
                if (!this._isValidPage(s) && (s !== null || this._destination)) {
                  console.error(`PDFHistory.push: "${s}" is not a valid pageNumber parameter.`);
                  return;
                }
              } else {
                console.error(`PDFHistory.push: "${S}" is not a valid explicitDest parameter.`);
                return;
              }
              const i = u || JSON.stringify(S);
              if (!i)
                return;
              let w = !1;
              if (this._destination && (m(this._destination.hash, i) || P(this._destination.dest, S))) {
                if (this._destination.page)
                  return;
                w = !0;
              }
              this._popStateInProgress && !w || (this._pushOrReplaceState({
                dest: S,
                hash: i,
                page: s,
                rotation: this.linkService.rotation
              }, w), this._popStateInProgress || (this._popStateInProgress = !0, Promise.resolve().then(() => {
                this._popStateInProgress = !1;
              })));
            }
            pushPage(u) {
              var S;
              if (this._initialized) {
                if (!this._isValidPage(u)) {
                  console.error(`PDFHistory.pushPage: "${u}" is not a valid page number.`);
                  return;
                }
                ((S = this._destination) == null ? void 0 : S.page) !== u && (this._popStateInProgress || (this._pushOrReplaceState({
                  dest: null,
                  hash: `page=${u}`,
                  page: u,
                  rotation: this.linkService.rotation
                }), this._popStateInProgress || (this._popStateInProgress = !0, Promise.resolve().then(() => {
                  this._popStateInProgress = !1;
                }))));
              }
            }
            pushCurrentPosition() {
              !this._initialized || this._popStateInProgress || this._tryPushCurrentPosition();
            }
            back() {
              if (!this._initialized || this._popStateInProgress)
                return;
              const u = window.history.state;
              this._isValidState(u) && u.uid > 0 && window.history.back();
            }
            forward() {
              if (!this._initialized || this._popStateInProgress)
                return;
              const u = window.history.state;
              this._isValidState(u) && u.uid < this._maxUid && window.history.forward();
            }
            get popStateInProgress() {
              return this._initialized && (this._popStateInProgress || this._blockHashChange > 0);
            }
            get initialBookmark() {
              return this._initialized ? this._initialBookmark : null;
            }
            get initialRotation() {
              return this._initialized ? this._initialRotation : null;
            }
            _pushOrReplaceState(u, S = !1) {
              const s = S || !this._destination, i = {
                fingerprint: this._fingerprint,
                uid: s ? this._uid : this._uid + 1,
                destination: u
              };
              this._updateInternalState(u, i.uid);
              let w;
              if (this._updateUrl && (u != null && u.hash)) {
                const b = document.location.href.split("#")[0];
                b.startsWith("file://") || (w = `${b}#${u.hash}`);
              }
              s ? window.history.replaceState(i, "", w) : window.history.pushState(i, "", w);
            }
            _tryPushCurrentPosition(u = !1) {
              if (!this._position)
                return;
              let S = this._position;
              if (u && (S = Object.assign(/* @__PURE__ */ Object.create(null), this._position), S.temporary = !0), !this._destination) {
                this._pushOrReplaceState(S);
                return;
              }
              if (this._destination.temporary) {
                this._pushOrReplaceState(S, !0);
                return;
              }
              if (this._destination.hash === S.hash || !this._destination.page && this._numPositionUpdates <= k)
                return;
              let s = !1;
              if (this._destination.page >= S.first && this._destination.page <= S.page) {
                if (this._destination.dest !== void 0 || !this._destination.first)
                  return;
                s = !0;
              }
              this._pushOrReplaceState(S, s);
            }
            _isValidPage(u) {
              return Number.isInteger(u) && u > 0 && u <= this.linkService.pagesCount;
            }
            _isValidState(u, S = !1) {
              if (!u)
                return !1;
              if (u.fingerprint !== this._fingerprint)
                if (S) {
                  if (typeof u.fingerprint != "string" || u.fingerprint.length !== this._fingerprint.length)
                    return !1;
                  const [s] = performance.getEntriesByType("navigation");
                  if ((s == null ? void 0 : s.type) !== "reload")
                    return !1;
                } else
                  return !1;
              return !(!Number.isInteger(u.uid) || u.uid < 0 || u.destination === null || typeof u.destination != "object");
            }
            _updateInternalState(u, S, s = !1) {
              this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), s && (u != null && u.temporary) && delete u.temporary, this._destination = u, this._uid = S, this._maxUid = Math.max(this._maxUid, S), this._numPositionUpdates = 0;
            }
            _parseCurrentHash(u = !1) {
              const S = unescape(h()).substring(1), s = (0, d.parseQueryString)(S), i = s.get("nameddest") || "";
              let w = s.get("page") | 0;
              return (!this._isValidPage(w) || u && i.length > 0) && (w = null), {
                hash: S,
                page: w,
                rotation: this.linkService.rotation
              };
            }
            _updateViewarea({
              location: u
            }) {
              this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._position = {
                hash: u.pdfOpenParams.substring(1),
                page: this.linkService.page,
                first: u.pageNumber,
                rotation: u.rotation
              }, !this._popStateInProgress && (this._isPagesLoaded && this._destination && !this._destination.page && this._numPositionUpdates++, this._updateViewareaTimeout = setTimeout(() => {
                this._popStateInProgress || this._tryPushCurrentPosition(!0), this._updateViewareaTimeout = null;
              }, y));
            }
            _popState({
              state: u
            }) {
              const S = h(), s = this._currentHash !== S;
              if (this._currentHash = S, !u) {
                this._uid++;
                const {
                  hash: w,
                  page: b,
                  rotation: c
                } = this._parseCurrentHash();
                this._pushOrReplaceState({
                  hash: w,
                  page: b,
                  rotation: c
                }, !0);
                return;
              }
              if (!this._isValidState(u))
                return;
              this._popStateInProgress = !0, s && (this._blockHashChange++, (0, r.waitOnEventOrTimeout)({
                target: window,
                name: "hashchange",
                delay: I
              }).then(() => {
                this._blockHashChange--;
              }));
              const i = u.destination;
              this._updateInternalState(i, u.uid, !0), (0, d.isValidRotation)(i.rotation) && (this.linkService.rotation = i.rotation), i.dest ? this.linkService.goToDestination(i.dest) : i.hash ? this.linkService.setHash(i.hash) : i.page && (this.linkService.page = i.page), Promise.resolve().then(() => {
                this._popStateInProgress = !1;
              });
            }
            _pageHide() {
              (!this._destination || this._destination.temporary) && this._tryPushCurrentPosition();
            }
            _bindEvents() {
              this._boundEvents || (this._boundEvents = {
                updateViewarea: this._updateViewarea.bind(this),
                popState: this._popState.bind(this),
                pageHide: this._pageHide.bind(this)
              }, this.eventBus._on("updateviewarea", this._boundEvents.updateViewarea), window.addEventListener("popstate", this._boundEvents.popState), window.addEventListener("pagehide", this._boundEvents.pageHide));
            }
            _unbindEvents() {
              this._boundEvents && (this.eventBus._off("updateviewarea", this._boundEvents.updateViewarea), window.removeEventListener("popstate", this._boundEvents.popState), window.removeEventListener("pagehide", this._boundEvents.pageHide), this._boundEvents = null);
            }
          }
          F.PDFHistory = _;
          function m(A, u) {
            return typeof A != "string" || typeof u != "string" ? !1 : A === u || (0, d.parseQueryString)(A).get("nameddest") === u;
          }
          function P(A, u) {
            function S(s, i) {
              if (typeof s != typeof i || Array.isArray(s) || Array.isArray(i))
                return !1;
              if (s !== null && typeof s == "object" && i !== null) {
                if (Object.keys(s).length !== Object.keys(i).length)
                  return !1;
                for (const w in s)
                  if (!S(s[w], i[w]))
                    return !1;
                return !0;
              }
              return s === i || Number.isNaN(s) && Number.isNaN(i);
            }
            if (!(Array.isArray(A) && Array.isArray(u)) || A.length !== u.length)
              return !1;
            for (let s = 0, i = A.length; s < i; s++)
              if (!S(A[s], u[s]))
                return !1;
            return !0;
          }
        },
        /* 13 */
        /***/
        (B, F, f) => {
          var b, c, L, x, z, J, M, Y, tt, q, U, Ge, $, Ui, Pt, Hi, a, ji, l, Wi, R, zn, K, Gn, _t, zi;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFPageView = void 0;
          var d = f(4), r = f(2), I = f(14), k = f(6), y = f(15), h = f(7), _ = f(5), m = f(16), P = f(17), A = f(18), u = f(19), S = f(20);
          const s = y.compatibilityParams.maxCanvasPixels || 16777216, i = () => ({
            annotationEditorUIManager: null,
            annotationStorage: null,
            downloadManager: null,
            enableScripting: !1,
            fieldObjectsPromise: null,
            findController: null,
            hasJSActionsPromise: null,
            get linkService() {
              return new _.SimpleLinkService();
            }
          });
          class w {
            constructor(st) {
              O(this, U);
              O(this, $);
              O(this, Pt);
              O(this, a);
              O(this, l);
              O(this, R);
              O(this, K);
              O(this, _t);
              O(this, b, d.AnnotationMode.ENABLE_FORMS);
              O(this, c, !1);
              O(this, L, null);
              O(this, x, null);
              O(this, z, null);
              O(this, J, null);
              O(this, M, r.RenderingStates.INITIAL);
              O(this, Y, r.TextLayerMode.ENABLE);
              O(this, tt, {
                directDrawing: !0,
                initialOptionalContent: !0,
                regularAnnotations: !0
              });
              O(this, q, /* @__PURE__ */ new WeakMap());
              var It;
              const vt = st.container, gt = st.defaultViewport;
              this.id = st.id, this.renderingId = "page" + this.id, Q(this, L, st.layerProperties || i), this.pdfPage = null, this.pageLabel = null, this.rotation = 0, this.scale = st.scale || r.DEFAULT_SCALE, this.viewport = gt, this.pdfPageRotate = gt.rotation, this._optionalContentConfigPromise = st.optionalContentConfigPromise || null, Q(this, Y, st.textLayerMode ?? r.TextLayerMode.ENABLE), Q(this, b, st.annotationMode ?? d.AnnotationMode.ENABLE_FORMS), this.imageResourcesPath = st.imageResourcesPath || "", this.isOffscreenCanvasSupported = st.isOffscreenCanvasSupported ?? !0, this.maxCanvasPixels = st.maxCanvasPixels ?? s, this.pageColors = st.pageColors || null, this.eventBus = st.eventBus, this.renderingQueue = st.renderingQueue, this.l10n = st.l10n || h.NullL10n, this.renderTask = null, this.resume = null, this._isStandalone = !((It = this.renderingQueue) != null && It.hasViewer()), this._container = vt, st.useOnlyCssZoom && (console.error("useOnlyCssZoom was removed, please use `maxCanvasPixels = 0` instead."), this.maxCanvasPixels = 0), this._annotationCanvasMap = null, this.annotationLayer = null, this.annotationEditorLayer = null, this.textLayer = null, this.zoomLayer = null, this.xfaLayer = null, this.structTreeLayer = null;
              const Lt = document.createElement("div");
              if (Lt.className = "page", Lt.setAttribute("data-page-number", this.id), Lt.setAttribute("role", "region"), this.l10n.get("page_landmark", {
                page: this.id
              }).then((Mt) => {
                Lt.setAttribute("aria-label", Mt);
              }), this.div = Lt, W(this, U, Ge).call(this), vt == null || vt.append(Lt), this._isStandalone) {
                vt == null || vt.style.setProperty("--scale-factor", this.scale * d.PixelsPerInch.PDF_TO_CSS_UNITS);
                const {
                  optionalContentConfigPromise: Mt
                } = st;
                Mt && Mt.then((ut) => {
                  Mt === this._optionalContentConfigPromise && (t(this, tt).initialOptionalContent = ut.hasInitialVisibility);
                });
              }
            }
            get renderingState() {
              return t(this, M);
            }
            set renderingState(st) {
              if (st !== t(this, M))
                switch (Q(this, M, st), t(this, x) && (clearTimeout(t(this, x)), Q(this, x, null)), st) {
                  case r.RenderingStates.PAUSED:
                    this.div.classList.remove("loading");
                    break;
                  case r.RenderingStates.RUNNING:
                    this.div.classList.add("loadingIcon"), Q(this, x, setTimeout(() => {
                      this.div.classList.add("loading"), Q(this, x, null);
                    }, 0));
                    break;
                  case r.RenderingStates.INITIAL:
                  case r.RenderingStates.FINISHED:
                    this.div.classList.remove("loadingIcon", "loading");
                    break;
                }
            }
            setPdfPage(st) {
              var gt, Lt, It;
              this._isStandalone && (((gt = this.pageColors) == null ? void 0 : gt.foreground) === "CanvasText" || ((Lt = this.pageColors) == null ? void 0 : Lt.background) === "Canvas") && ((It = this._container) == null || It.style.setProperty("--hcm-highligh-filter", st.filterFactory.addHighlightHCMFilter("CanvasText", "Canvas", "HighlightText", "Highlight"))), this.pdfPage = st, this.pdfPageRotate = st.rotate;
              const vt = (this.rotation + this.pdfPageRotate) % 360;
              this.viewport = st.getViewport({
                scale: this.scale * d.PixelsPerInch.PDF_TO_CSS_UNITS,
                rotation: vt
              }), W(this, U, Ge).call(this), this.reset();
            }
            destroy() {
              var st;
              this.reset(), (st = this.pdfPage) == null || st.cleanup();
            }
            get _textHighlighter() {
              return (0, d.shadow)(this, "_textHighlighter", new A.TextHighlighter({
                pageIndex: this.id - 1,
                eventBus: this.eventBus,
                findController: t(this, L).call(this).findController
              }));
            }
            _resetZoomLayer(st = !1) {
              if (!this.zoomLayer)
                return;
              const vt = this.zoomLayer.firstChild;
              t(this, q).delete(vt), vt.width = 0, vt.height = 0, st && this.zoomLayer.remove(), this.zoomLayer = null;
            }
            reset({
              keepZoomLayer: st = !1,
              keepAnnotationLayer: vt = !1,
              keepAnnotationEditorLayer: gt = !1,
              keepXfaLayer: Lt = !1,
              keepTextLayer: It = !1
            } = {}) {
              var kt, Bt, Ut, $t, Gt;
              this.cancelRendering({
                keepAnnotationLayer: vt,
                keepAnnotationEditorLayer: gt,
                keepXfaLayer: Lt,
                keepTextLayer: It
              }), this.renderingState = r.RenderingStates.INITIAL;
              const Mt = this.div, ut = Mt.childNodes, lt = st && this.zoomLayer || null, it = vt && ((kt = this.annotationLayer) == null ? void 0 : kt.div) || null, et = gt && ((Bt = this.annotationEditorLayer) == null ? void 0 : Bt.div) || null, mt = Lt && ((Ut = this.xfaLayer) == null ? void 0 : Ut.div) || null, Tt = It && (($t = this.textLayer) == null ? void 0 : $t.div) || null;
              for (let Kt = ut.length - 1; Kt >= 0; Kt--) {
                const Xt = ut[Kt];
                switch (Xt) {
                  case lt:
                  case it:
                  case et:
                  case mt:
                  case Tt:
                    continue;
                }
                Xt.remove();
              }
              Mt.removeAttribute("data-loaded"), it && this.annotationLayer.hide(), et && this.annotationEditorLayer.hide(), mt && this.xfaLayer.hide(), Tt && this.textLayer.hide(), (Gt = this.structTreeLayer) == null || Gt.hide(), lt || (this.canvas && (t(this, q).delete(this.canvas), this.canvas.width = 0, this.canvas.height = 0, delete this.canvas), this._resetZoomLayer());
            }
            update({
              scale: st = 0,
              rotation: vt = null,
              optionalContentConfigPromise: gt = null,
              drawingDelay: Lt = -1
            }) {
              var Mt;
              this.scale = st || this.scale, typeof vt == "number" && (this.rotation = vt), gt instanceof Promise && (this._optionalContentConfigPromise = gt, gt.then((ut) => {
                gt === this._optionalContentConfigPromise && (t(this, tt).initialOptionalContent = ut.hasInitialVisibility);
              })), t(this, tt).directDrawing = !0;
              const It = (this.rotation + this.pdfPageRotate) % 360;
              if (this.viewport = this.viewport.clone({
                scale: this.scale * d.PixelsPerInch.PDF_TO_CSS_UNITS,
                rotation: It
              }), W(this, U, Ge).call(this), this._isStandalone && ((Mt = this._container) == null || Mt.style.setProperty("--scale-factor", this.viewport.scale)), this.canvas) {
                let ut = !1;
                if (t(this, c)) {
                  if (this.maxCanvasPixels === 0)
                    ut = !0;
                  else if (this.maxCanvasPixels > 0) {
                    const {
                      width: it,
                      height: et
                    } = this.viewport, {
                      sx: mt,
                      sy: Tt
                    } = this.outputScale;
                    ut = (Math.floor(it) * mt | 0) * (Math.floor(et) * Tt | 0) > this.maxCanvasPixels;
                  }
                }
                const lt = !ut && Lt >= 0 && Lt < 1e3;
                if (lt || ut) {
                  if (lt && this.renderingState !== r.RenderingStates.FINISHED && (this.cancelRendering({
                    keepZoomLayer: !0,
                    keepAnnotationLayer: !0,
                    keepAnnotationEditorLayer: !0,
                    keepXfaLayer: !0,
                    keepTextLayer: !0,
                    cancelExtraDelay: Lt
                  }), this.renderingState = r.RenderingStates.FINISHED, t(this, tt).directDrawing = !1), this.cssTransform({
                    target: this.canvas,
                    redrawAnnotationLayer: !0,
                    redrawAnnotationEditorLayer: !0,
                    redrawXfaLayer: !0,
                    redrawTextLayer: !lt,
                    hideTextLayer: lt
                  }), lt)
                    return;
                  this.eventBus.dispatch("pagerendered", {
                    source: this,
                    pageNumber: this.id,
                    cssTransform: !0,
                    timestamp: performance.now(),
                    error: t(this, J)
                  });
                  return;
                }
                !this.zoomLayer && !this.canvas.hidden && (this.zoomLayer = this.canvas.parentNode, this.zoomLayer.style.position = "absolute");
              }
              this.zoomLayer && this.cssTransform({
                target: this.zoomLayer.firstChild
              }), this.reset({
                keepZoomLayer: !0,
                keepAnnotationLayer: !0,
                keepAnnotationEditorLayer: !0,
                keepXfaLayer: !0,
                keepTextLayer: !0
              });
            }
            cancelRendering({
              keepAnnotationLayer: st = !1,
              keepAnnotationEditorLayer: vt = !1,
              keepXfaLayer: gt = !1,
              keepTextLayer: Lt = !1,
              cancelExtraDelay: It = 0
            } = {}) {
              var Mt;
              this.renderTask && (this.renderTask.cancel(It), this.renderTask = null), this.resume = null, this.textLayer && (!Lt || !this.textLayer.div) && (this.textLayer.cancel(), this.textLayer = null), this.structTreeLayer && !this.textLayer && (this.structTreeLayer = null), this.annotationLayer && (!st || !this.annotationLayer.div) && (this.annotationLayer.cancel(), this.annotationLayer = null, this._annotationCanvasMap = null), this.annotationEditorLayer && (!vt || !this.annotationEditorLayer.div) && (this.annotationEditorLayer.cancel(), this.annotationEditorLayer = null), this.xfaLayer && (!gt || !this.xfaLayer.div) && (this.xfaLayer.cancel(), this.xfaLayer = null, (Mt = this._textHighlighter) == null || Mt.disable());
            }
            cssTransform({
              target: st,
              redrawAnnotationLayer: vt = !1,
              redrawAnnotationEditorLayer: gt = !1,
              redrawXfaLayer: Lt = !1,
              redrawTextLayer: It = !1,
              hideTextLayer: Mt = !1
            }) {
              var lt;
              if (!st.hasAttribute("zooming")) {
                st.setAttribute("zooming", !0);
                const {
                  style: it
                } = st;
                it.width = it.height = "";
              }
              const ut = t(this, q).get(st);
              if (this.viewport !== ut) {
                const it = this.viewport.rotation - ut.rotation, et = Math.abs(it);
                let mt = 1, Tt = 1;
                if (et === 90 || et === 270) {
                  const {
                    width: kt,
                    height: Bt
                  } = this.viewport;
                  mt = Bt / kt, Tt = kt / Bt;
                }
                st.style.transform = `rotate(${it}deg) scale(${mt}, ${Tt})`;
              }
              vt && this.annotationLayer && W(this, $, Ui).call(this), gt && this.annotationEditorLayer && W(this, Pt, Hi).call(this), Lt && this.xfaLayer && W(this, a, ji).call(this), this.textLayer && (Mt ? (this.textLayer.hide(), (lt = this.structTreeLayer) == null || lt.hide()) : It && W(this, l, Wi).call(this));
            }
            get width() {
              return this.viewport.width;
            }
            get height() {
              return this.viewport.height;
            }
            getPagePoint(st, vt) {
              return this.viewport.convertToPdfPoint(st, vt);
            }
            async draw() {
              this.renderingState !== r.RenderingStates.INITIAL && (console.error("Must be in new state before drawing"), this.reset());
              const {
                div: st,
                l10n: vt,
                pageColors: gt,
                pdfPage: Lt,
                viewport: It
              } = this;
              if (!Lt)
                throw this.renderingState = r.RenderingStates.FINISHED, new Error("pdfPage is not loaded");
              this.renderingState = r.RenderingStates.RUNNING;
              const Mt = document.createElement("div");
              if (Mt.classList.add("canvasWrapper"), st.append(Mt), !this.textLayer && t(this, Y) !== r.TextLayerMode.DISABLE && !Lt.isPureXfa && (this._accessibilityManager || (this._accessibilityManager = new P.TextAccessibilityManager()), this.textLayer = new u.TextLayerBuilder({
                highlighter: this._textHighlighter,
                accessibilityManager: this._accessibilityManager,
                isOffscreenCanvasSupported: this.isOffscreenCanvasSupported,
                enablePermissions: t(this, Y) === r.TextLayerMode.ENABLE_PERMISSIONS
              }), st.append(this.textLayer.div)), !this.annotationLayer && t(this, b) !== d.AnnotationMode.DISABLE) {
                const {
                  annotationStorage: v,
                  downloadManager: D,
                  enableScripting: ht,
                  fieldObjectsPromise: ot,
                  hasJSActionsPromise: dt,
                  linkService: bt
                } = t(this, L).call(this);
                this._annotationCanvasMap || (this._annotationCanvasMap = /* @__PURE__ */ new Map()), this.annotationLayer = new k.AnnotationLayerBuilder({
                  pageDiv: st,
                  pdfPage: Lt,
                  annotationStorage: v,
                  imageResourcesPath: this.imageResourcesPath,
                  renderForms: t(this, b) === d.AnnotationMode.ENABLE_FORMS,
                  linkService: bt,
                  downloadManager: D,
                  l10n: vt,
                  enableScripting: ht,
                  hasJSActionsPromise: dt,
                  fieldObjectsPromise: ot,
                  annotationCanvasMap: this._annotationCanvasMap,
                  accessibilityManager: this._accessibilityManager
                });
              }
              const ut = (v) => {
                if (Tt == null || Tt(!1), this.renderingQueue && !this.renderingQueue.isHighestPriority(this)) {
                  this.renderingState = r.RenderingStates.PAUSED, this.resume = () => {
                    this.renderingState = r.RenderingStates.RUNNING, v();
                  };
                  return;
                }
                v();
              }, {
                width: lt,
                height: it
              } = It, et = document.createElement("canvas");
              et.setAttribute("role", "presentation"), et.hidden = !0;
              const mt = !!(gt != null && gt.background && (gt != null && gt.foreground));
              let Tt = (v) => {
                (!mt || v) && (et.hidden = !1, Tt = null);
              };
              Mt.append(et), this.canvas = et;
              const kt = et.getContext("2d", {
                alpha: !1
              }), Bt = this.outputScale = new r.OutputScale();
              if (this.maxCanvasPixels === 0) {
                const v = 1 / this.scale;
                Bt.sx *= v, Bt.sy *= v, Q(this, c, !0);
              } else if (this.maxCanvasPixels > 0) {
                const v = lt * it, D = Math.sqrt(this.maxCanvasPixels / v);
                Bt.sx > D || Bt.sy > D ? (Bt.sx = D, Bt.sy = D, Q(this, c, !0)) : Q(this, c, !1);
              }
              const Ut = (0, r.approximateFraction)(Bt.sx), $t = (0, r.approximateFraction)(Bt.sy);
              et.width = (0, r.roundToDivide)(lt * Bt.sx, Ut[0]), et.height = (0, r.roundToDivide)(it * Bt.sy, $t[0]);
              const {
                style: Gt
              } = et;
              Gt.width = (0, r.roundToDivide)(lt, Ut[1]) + "px", Gt.height = (0, r.roundToDivide)(it, $t[1]) + "px", t(this, q).set(et, It);
              const Kt = Bt.scaled ? [Bt.sx, 0, 0, Bt.sy, 0, 0] : null, Xt = {
                canvasContext: kt,
                transform: Kt,
                viewport: It,
                annotationMode: t(this, b),
                optionalContentConfigPromise: this._optionalContentConfigPromise,
                annotationCanvasMap: this._annotationCanvasMap,
                pageColors: gt
              }, Qt = this.renderTask = this.pdfPage.render(Xt);
              Qt.onContinue = ut;
              const At = Qt.promise.then(async () => {
                var v;
                if (Tt == null || Tt(!0), await W(this, _t, zi).call(this, Qt), W(this, l, Wi).call(this), this.annotationLayer && await W(this, $, Ui).call(this), !this.annotationEditorLayer) {
                  const {
                    annotationEditorUIManager: D
                  } = t(this, L).call(this);
                  if (!D)
                    return;
                  this.annotationEditorLayer = new I.AnnotationEditorLayerBuilder({
                    uiManager: D,
                    pageDiv: st,
                    pdfPage: Lt,
                    l10n: vt,
                    accessibilityManager: this._accessibilityManager,
                    annotationLayer: (v = this.annotationLayer) == null ? void 0 : v.annotationLayer
                  });
                }
                W(this, Pt, Hi).call(this);
              }, (v) => (v instanceof d.RenderingCancelledException || Tt == null || Tt(!0), W(this, _t, zi).call(this, Qt, v)));
              if (Lt.isPureXfa) {
                if (this.xfaLayer)
                  this.xfaLayer.div && st.append(this.xfaLayer.div);
                else {
                  const {
                    annotationStorage: v,
                    linkService: D
                  } = t(this, L).call(this);
                  this.xfaLayer = new S.XfaLayerBuilder({
                    pageDiv: st,
                    pdfPage: Lt,
                    annotationStorage: v,
                    linkService: D
                  });
                }
                W(this, a, ji).call(this);
              }
              return st.setAttribute("data-loaded", !0), this.eventBus.dispatch("pagerender", {
                source: this,
                pageNumber: this.id
              }), At;
            }
            setPageLabel(st) {
              this.pageLabel = typeof st == "string" ? st : null, this.pageLabel !== null ? this.div.setAttribute("data-page-label", this.pageLabel) : this.div.removeAttribute("data-page-label");
            }
            get thumbnailCanvas() {
              const {
                directDrawing: st,
                initialOptionalContent: vt,
                regularAnnotations: gt
              } = t(this, tt);
              return st && vt && gt ? this.canvas : null;
            }
          }
          b = new WeakMap(), c = new WeakMap(), L = new WeakMap(), x = new WeakMap(), z = new WeakMap(), J = new WeakMap(), M = new WeakMap(), Y = new WeakMap(), tt = new WeakMap(), q = new WeakMap(), U = new WeakSet(), Ge = function() {
            const {
              viewport: st
            } = this;
            if (this.pdfPage) {
              if (t(this, z) === st.rotation)
                return;
              Q(this, z, st.rotation);
            }
            (0, d.setLayerDimensions)(this.div, st, !0, !1);
          }, $ = new WeakSet(), Ui = async function() {
            let st = null;
            try {
              await this.annotationLayer.render(this.viewport, "display");
            } catch (vt) {
              console.error(`#renderAnnotationLayer: "${vt}".`), st = vt;
            } finally {
              this.eventBus.dispatch("annotationlayerrendered", {
                source: this,
                pageNumber: this.id,
                error: st
              });
            }
          }, Pt = new WeakSet(), Hi = async function() {
            let st = null;
            try {
              await this.annotationEditorLayer.render(this.viewport, "display");
            } catch (vt) {
              console.error(`#renderAnnotationEditorLayer: "${vt}".`), st = vt;
            } finally {
              this.eventBus.dispatch("annotationeditorlayerrendered", {
                source: this,
                pageNumber: this.id,
                error: st
              });
            }
          }, a = new WeakSet(), ji = async function() {
            let st = null;
            try {
              const vt = await this.xfaLayer.render(this.viewport, "display");
              vt != null && vt.textDivs && this._textHighlighter && W(this, K, Gn).call(this, vt.textDivs);
            } catch (vt) {
              console.error(`#renderXfaLayer: "${vt}".`), st = vt;
            } finally {
              this.eventBus.dispatch("xfalayerrendered", {
                source: this,
                pageNumber: this.id,
                error: st
              });
            }
          }, l = new WeakSet(), Wi = async function() {
            const {
              pdfPage: st,
              textLayer: vt,
              viewport: gt
            } = this;
            if (!vt)
              return;
            let Lt = null;
            try {
              if (!vt.renderingDone) {
                const It = st.streamTextContent({
                  includeMarkedContent: !0,
                  disableNormalization: !0
                });
                vt.setTextContentSource(It);
              }
              await vt.render(gt);
            } catch (It) {
              if (It instanceof d.AbortException)
                return;
              console.error(`#renderTextLayer: "${It}".`), Lt = It;
            }
            this.eventBus.dispatch("textlayerrendered", {
              source: this,
              pageNumber: this.id,
              numTextDivs: vt.numTextDivs,
              error: Lt
            }), W(this, R, zn).call(this);
          }, R = new WeakSet(), zn = async function() {
            var gt, Lt, It;
            if (!this.textLayer)
              return;
            this.structTreeLayer || (this.structTreeLayer = new m.StructTreeLayerBuilder());
            const st = await (this.structTreeLayer.renderingDone ? null : this.pdfPage.getStructTree()), vt = (gt = this.structTreeLayer) == null ? void 0 : gt.render(st);
            vt && ((Lt = this.canvas) == null || Lt.append(vt)), (It = this.structTreeLayer) == null || It.show();
          }, K = new WeakSet(), Gn = async function(st) {
            const vt = await this.pdfPage.getTextContent(), gt = [];
            for (const Lt of vt.items)
              gt.push(Lt.str);
            this._textHighlighter.setTextMapping(st, gt), this._textHighlighter.enable();
          }, _t = new WeakSet(), zi = async function(st, vt = null) {
            if (st === this.renderTask && (this.renderTask = null), vt instanceof d.RenderingCancelledException) {
              Q(this, J, null);
              return;
            }
            if (Q(this, J, vt), this.renderingState = r.RenderingStates.FINISHED, this._resetZoomLayer(!0), t(this, tt).regularAnnotations = !st.separateAnnots, this.eventBus.dispatch("pagerendered", {
              source: this,
              pageNumber: this.id,
              cssTransform: !1,
              timestamp: performance.now(),
              error: t(this, J)
            }), vt)
              throw vt;
          }, F.PDFPageView = w;
        },
        /* 14 */
        /***/
        (B, F, f) => {
          var k, y;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.AnnotationEditorLayerBuilder = void 0;
          var d = f(4), r = f(7);
          class I {
            constructor(_) {
              O(this, k, null);
              O(this, y, void 0);
              this.pageDiv = _.pageDiv, this.pdfPage = _.pdfPage, this.accessibilityManager = _.accessibilityManager, this.l10n = _.l10n || r.NullL10n, this.annotationEditorLayer = null, this.div = null, this._cancelled = !1, Q(this, y, _.uiManager), Q(this, k, _.annotationLayer || null);
            }
            async render(_, m = "display") {
              if (m !== "display" || this._cancelled)
                return;
              const P = _.clone({
                dontFlip: !0
              });
              if (this.div) {
                this.annotationEditorLayer.update({
                  viewport: P
                }), this.show();
                return;
              }
              const A = this.div = document.createElement("div");
              A.className = "annotationEditorLayer", A.tabIndex = 0, A.hidden = !0, A.dir = t(this, y).direction, this.pageDiv.append(A), this.annotationEditorLayer = new d.AnnotationEditorLayer({
                uiManager: t(this, y),
                div: A,
                accessibilityManager: this.accessibilityManager,
                pageIndex: this.pdfPage.pageNumber - 1,
                l10n: this.l10n,
                viewport: P,
                annotationLayer: t(this, k)
              });
              const u = {
                viewport: P,
                div: A,
                annotations: null,
                intent: m
              };
              this.annotationEditorLayer.render(u), this.show();
            }
            cancel() {
              this._cancelled = !0, this.div && (this.pageDiv = null, this.annotationEditorLayer.destroy(), this.div.remove());
            }
            hide() {
              this.div && (this.div.hidden = !0);
            }
            show() {
              !this.div || this.annotationEditorLayer.isEmpty || (this.div.hidden = !1);
            }
          }
          k = new WeakMap(), y = new WeakMap(), F.AnnotationEditorLayerBuilder = I;
        },
        /* 15 */
        /***/
        (B, F) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.compatibilityParams = F.OptionKind = F.AppOptions = void 0;
          const f = /* @__PURE__ */ Object.create(null);
          F.compatibilityParams = f;
          {
            const y = navigator.userAgent || "", h = navigator.platform || "", _ = navigator.maxTouchPoints || 1, m = /Android/.test(y), P = /\b(iPad|iPhone|iPod)(?=;)/.test(y) || h === "MacIntel" && _ > 1;
            (function() {
              (P || m) && (f.maxCanvasPixels = 5242880);
            })();
          }
          const d = {
            VIEWER: 2,
            API: 4,
            WORKER: 8,
            PREFERENCE: 128
          };
          F.OptionKind = d;
          const r = {
            annotationEditorMode: {
              value: 0,
              kind: d.VIEWER + d.PREFERENCE
            },
            annotationMode: {
              value: 2,
              kind: d.VIEWER + d.PREFERENCE
            },
            cursorToolOnLoad: {
              value: 0,
              kind: d.VIEWER + d.PREFERENCE
            },
            defaultZoomDelay: {
              value: 400,
              kind: d.VIEWER + d.PREFERENCE
            },
            defaultZoomValue: {
              value: "",
              kind: d.VIEWER + d.PREFERENCE
            },
            disableHistory: {
              value: !1,
              kind: d.VIEWER
            },
            disablePageLabels: {
              value: !1,
              kind: d.VIEWER + d.PREFERENCE
            },
            enablePermissions: {
              value: !1,
              kind: d.VIEWER + d.PREFERENCE
            },
            enablePrintAutoRotate: {
              value: !0,
              kind: d.VIEWER + d.PREFERENCE
            },
            enableScripting: {
              value: !0,
              kind: d.VIEWER + d.PREFERENCE
            },
            enableStampEditor: {
              value: !0,
              kind: d.VIEWER + d.PREFERENCE
            },
            externalLinkRel: {
              value: "noopener noreferrer nofollow",
              kind: d.VIEWER
            },
            externalLinkTarget: {
              value: 0,
              kind: d.VIEWER + d.PREFERENCE
            },
            historyUpdateUrl: {
              value: !1,
              kind: d.VIEWER + d.PREFERENCE
            },
            ignoreDestinationZoom: {
              value: !1,
              kind: d.VIEWER + d.PREFERENCE
            },
            imageResourcesPath: {
              value: "./images/",
              kind: d.VIEWER
            },
            maxCanvasPixels: {
              value: 16777216,
              kind: d.VIEWER
            },
            forcePageColors: {
              value: !1,
              kind: d.VIEWER + d.PREFERENCE
            },
            pageColorsBackground: {
              value: "Canvas",
              kind: d.VIEWER + d.PREFERENCE
            },
            pageColorsForeground: {
              value: "CanvasText",
              kind: d.VIEWER + d.PREFERENCE
            },
            pdfBugEnabled: {
              value: !1,
              kind: d.VIEWER + d.PREFERENCE
            },
            printResolution: {
              value: 150,
              kind: d.VIEWER
            },
            sidebarViewOnLoad: {
              value: -1,
              kind: d.VIEWER + d.PREFERENCE
            },
            scrollModeOnLoad: {
              value: -1,
              kind: d.VIEWER + d.PREFERENCE
            },
            spreadModeOnLoad: {
              value: -1,
              kind: d.VIEWER + d.PREFERENCE
            },
            textLayerMode: {
              value: 1,
              kind: d.VIEWER + d.PREFERENCE
            },
            viewerCssTheme: {
              value: 0,
              kind: d.VIEWER + d.PREFERENCE
            },
            viewOnLoad: {
              value: 0,
              kind: d.VIEWER + d.PREFERENCE
            },
            cMapPacked: {
              value: !0,
              kind: d.API
            },
            cMapUrl: {
              value: "../web/cmaps/",
              kind: d.API
            },
            disableAutoFetch: {
              value: !1,
              kind: d.API + d.PREFERENCE
            },
            disableFontFace: {
              value: !1,
              kind: d.API + d.PREFERENCE
            },
            disableRange: {
              value: !1,
              kind: d.API + d.PREFERENCE
            },
            disableStream: {
              value: !1,
              kind: d.API + d.PREFERENCE
            },
            docBaseUrl: {
              value: "",
              kind: d.API
            },
            enableXfa: {
              value: !0,
              kind: d.API + d.PREFERENCE
            },
            fontExtraProperties: {
              value: !1,
              kind: d.API
            },
            isEvalSupported: {
              value: !0,
              kind: d.API
            },
            isOffscreenCanvasSupported: {
              value: !0,
              kind: d.API
            },
            maxImageSize: {
              value: -1,
              kind: d.API
            },
            pdfBug: {
              value: !1,
              kind: d.API
            },
            standardFontDataUrl: {
              value: "../web/standard_fonts/",
              kind: d.API
            },
            verbosity: {
              value: 1,
              kind: d.API
            },
            workerPort: {
              value: null,
              kind: d.WORKER
            },
            workerSrc: {
              value: "../build/pdf.worker.js",
              kind: d.WORKER
            }
          };
          r.defaultUrl = {
            value: "compressed.tracemonkey-pldi-09.pdf",
            kind: d.VIEWER
          }, r.disablePreferences = {
            value: !1,
            kind: d.VIEWER
          }, r.locale = {
            value: navigator.language || "en-US",
            kind: d.VIEWER
          }, r.sandboxBundleSrc = {
            value: "../build/pdf.sandbox.js",
            kind: d.VIEWER
          };
          const I = /* @__PURE__ */ Object.create(null);
          class k {
            constructor() {
              throw new Error("Cannot initialize AppOptions.");
            }
            static get(h) {
              const _ = I[h];
              if (_ !== void 0)
                return _;
              const m = r[h];
              if (m !== void 0)
                return f[h] ?? m.value;
            }
            static getAll(h = null) {
              const _ = /* @__PURE__ */ Object.create(null);
              for (const m in r) {
                const P = r[m];
                if (h) {
                  if (!(h & P.kind))
                    continue;
                  if (h === d.PREFERENCE) {
                    const u = P.value, S = typeof u;
                    if (S === "boolean" || S === "string" || S === "number" && Number.isInteger(u)) {
                      _[m] = u;
                      continue;
                    }
                    throw new Error(`Invalid type for preference: ${m}`);
                  }
                }
                const A = I[m];
                _[m] = A !== void 0 ? A : f[m] ?? P.value;
              }
              return _;
            }
            static set(h, _) {
              I[h] = _;
            }
            static setAll(h) {
              for (const _ in h)
                I[_] = h[_];
            }
            static remove(h) {
              delete I[h];
            }
          }
          F.AppOptions = k, k._hasUserOptions = function() {
            return Object.keys(I).length > 0;
          };
        },
        /* 16 */
        /***/
        (B, F, f) => {
          var y, h, Gi, m, $i;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.StructTreeLayerBuilder = void 0;
          var d = f(2);
          const r = {
            Document: null,
            DocumentFragment: null,
            Part: "group",
            Sect: "group",
            Div: "group",
            Aside: "note",
            NonStruct: "none",
            P: null,
            H: "heading",
            Title: null,
            FENote: "note",
            Sub: "group",
            Lbl: null,
            Span: null,
            Em: null,
            Strong: null,
            Link: "link",
            Annot: "note",
            Form: "form",
            Ruby: null,
            RB: null,
            RT: null,
            RP: null,
            Warichu: null,
            WT: null,
            WP: null,
            L: "list",
            LI: "listitem",
            LBody: null,
            Table: "table",
            TR: "row",
            TH: "columnheader",
            TD: "cell",
            THead: "columnheader",
            TBody: null,
            TFoot: null,
            Caption: null,
            Figure: "figure",
            Formula: null,
            Artifact: null
          }, I = /^H(\d+)$/;
          class k {
            constructor() {
              O(this, h);
              O(this, m);
              O(this, y, void 0);
            }
            get renderingDone() {
              return t(this, y) !== void 0;
            }
            render(u) {
              if (t(this, y) !== void 0)
                return t(this, y);
              const S = W(this, m, $i).call(this, u);
              return S == null || S.classList.add("structTree"), Q(this, y, S);
            }
            hide() {
              t(this, y) && !t(this, y).hidden && (t(this, y).hidden = !0);
            }
            show() {
              var u;
              (u = t(this, y)) != null && u.hidden && (t(this, y).hidden = !1);
            }
          }
          y = new WeakMap(), h = new WeakSet(), Gi = function(u, S) {
            const {
              alt: s,
              id: i,
              lang: w
            } = u;
            s !== void 0 && S.setAttribute("aria-label", (0, d.removeNullCharacters)(s)), i !== void 0 && S.setAttribute("aria-owns", i), w !== void 0 && S.setAttribute("lang", (0, d.removeNullCharacters)(w, !0));
          }, m = new WeakSet(), $i = function(u) {
            if (!u)
              return null;
            const S = document.createElement("span");
            if ("role" in u) {
              const {
                role: s
              } = u, i = s.match(I);
              i ? (S.setAttribute("role", "heading"), S.setAttribute("aria-level", i[1])) : r[s] && S.setAttribute("role", r[s]);
            }
            if (W(this, h, Gi).call(this, u, S), u.children)
              if (u.children.length === 1 && "id" in u.children[0])
                W(this, h, Gi).call(this, u.children[0], S);
              else
                for (const s of u.children)
                  S.append(W(this, m, $i).call(this, s));
            return S;
          }, F.StructTreeLayerBuilder = k;
        },
        /* 17 */
        /***/
        (B, F, f) => {
          var I, k, y, h, _, $e, P, Xi;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.TextAccessibilityManager = void 0;
          var d = f(2);
          const u = class u {
            constructor() {
              O(this, P);
              O(this, I, !1);
              O(this, k, null);
              O(this, y, /* @__PURE__ */ new Map());
              O(this, h, /* @__PURE__ */ new Map());
            }
            setTextMapping(s) {
              Q(this, k, s);
            }
            enable() {
              if (t(this, I))
                throw new Error("TextAccessibilityManager is already enabled.");
              if (!t(this, k))
                throw new Error("Text divs and strings have not been set.");
              if (Q(this, I, !0), Q(this, k, t(this, k).slice()), t(this, k).sort(W(u, _, $e)), t(this, y).size > 0) {
                const s = t(this, k);
                for (const [i, w] of t(this, y)) {
                  if (!document.getElementById(i)) {
                    t(this, y).delete(i);
                    continue;
                  }
                  W(this, P, Xi).call(this, i, s[w]);
                }
              }
              for (const [s, i] of t(this, h))
                this.addPointerInTextLayer(s, i);
              t(this, h).clear();
            }
            disable() {
              t(this, I) && (t(this, h).clear(), Q(this, k, null), Q(this, I, !1));
            }
            removePointerInTextLayer(s) {
              if (!t(this, I)) {
                t(this, h).delete(s);
                return;
              }
              const i = t(this, k);
              if (!i || i.length === 0)
                return;
              const {
                id: w
              } = s, b = t(this, y).get(w);
              if (b === void 0)
                return;
              const c = i[b];
              t(this, y).delete(w);
              let L = c.getAttribute("aria-owns");
              L != null && L.includes(w) && (L = L.split(" ").filter((x) => x !== w).join(" "), L ? c.setAttribute("aria-owns", L) : (c.removeAttribute("aria-owns"), c.setAttribute("role", "presentation")));
            }
            addPointerInTextLayer(s, i) {
              const {
                id: w
              } = s;
              if (!w)
                return null;
              if (!t(this, I))
                return t(this, h).set(s, i), null;
              i && this.removePointerInTextLayer(s);
              const b = t(this, k);
              if (!b || b.length === 0)
                return null;
              const c = (0, d.binarySearchFirstItem)(b, (J) => {
                var M;
                return W(M = u, _, $e).call(M, s, J) < 0;
              }), L = Math.max(0, c - 1), x = b[L];
              W(this, P, Xi).call(this, w, x), t(this, y).set(w, L);
              const z = x.parentNode;
              return z != null && z.classList.contains("markedContent") ? z.id : null;
            }
            moveElementInDOM(s, i, w, b) {
              const c = this.addPointerInTextLayer(w, b);
              if (!s.hasChildNodes())
                return s.append(i), c;
              const L = Array.from(s.childNodes).filter((J) => J !== i);
              if (L.length === 0)
                return c;
              const x = w || i, z = (0, d.binarySearchFirstItem)(L, (J) => {
                var M;
                return W(M = u, _, $e).call(M, x, J) < 0;
              });
              return z === 0 ? L[0].before(i) : L[z - 1].after(i), c;
            }
          };
          I = new WeakMap(), k = new WeakMap(), y = new WeakMap(), h = new WeakMap(), _ = new WeakSet(), $e = function(s, i) {
            const w = s.getBoundingClientRect(), b = i.getBoundingClientRect();
            if (w.width === 0 && w.height === 0)
              return 1;
            if (b.width === 0 && b.height === 0)
              return -1;
            const c = w.y, L = w.y + w.height, x = w.y + w.height / 2, z = b.y, J = b.y + b.height, M = b.y + b.height / 2;
            if (x <= z && M >= L)
              return -1;
            if (M <= c && x >= J)
              return 1;
            const Y = w.x + w.width / 2, tt = b.x + b.width / 2;
            return Y - tt;
          }, P = new WeakSet(), Xi = function(s, i) {
            const w = i.getAttribute("aria-owns");
            w != null && w.includes(s) || i.setAttribute("aria-owns", w ? `${w} ${s}` : s), i.removeAttribute("role");
          }, O(u, _);
          let r = u;
          F.TextAccessibilityManager = r;
        },
        /* 18 */
        /***/
        (B, F) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.TextHighlighter = void 0;
          class f {
            constructor({
              findController: r,
              eventBus: I,
              pageIndex: k
            }) {
              this.findController = r, this.matches = [], this.eventBus = I, this.pageIdx = k, this._onUpdateTextLayerMatches = null, this.textDivs = null, this.textContentItemsStr = null, this.enabled = !1;
            }
            setTextMapping(r, I) {
              this.textDivs = r, this.textContentItemsStr = I;
            }
            enable() {
              if (!this.textDivs || !this.textContentItemsStr)
                throw new Error("Text divs and strings have not been set.");
              if (this.enabled)
                throw new Error("TextHighlighter is already enabled.");
              this.enabled = !0, this._onUpdateTextLayerMatches || (this._onUpdateTextLayerMatches = (r) => {
                (r.pageIndex === this.pageIdx || r.pageIndex === -1) && this._updateMatches();
              }, this.eventBus._on("updatetextlayermatches", this._onUpdateTextLayerMatches)), this._updateMatches();
            }
            disable() {
              this.enabled && (this.enabled = !1, this._onUpdateTextLayerMatches && (this.eventBus._off("updatetextlayermatches", this._onUpdateTextLayerMatches), this._onUpdateTextLayerMatches = null), this._updateMatches(!0));
            }
            _convertMatches(r, I) {
              if (!r)
                return [];
              const {
                textContentItemsStr: k
              } = this;
              let y = 0, h = 0;
              const _ = k.length - 1, m = [];
              for (let P = 0, A = r.length; P < A; P++) {
                let u = r[P];
                for (; y !== _ && u >= h + k[y].length; )
                  h += k[y].length, y++;
                y === k.length && console.error("Could not find a matching mapping");
                const S = {
                  begin: {
                    divIdx: y,
                    offset: u - h
                  }
                };
                for (u += I[P]; y !== _ && u > h + k[y].length; )
                  h += k[y].length, y++;
                S.end = {
                  divIdx: y,
                  offset: u - h
                }, m.push(S);
              }
              return m;
            }
            _renderMatches(r) {
              if (r.length === 0)
                return;
              const {
                findController: I,
                pageIdx: k
              } = this, {
                textContentItemsStr: y,
                textDivs: h
              } = this, _ = k === I.selected.pageIdx, m = I.selected.matchIdx, P = I.state.highlightAll;
              let A = null;
              const u = {
                divIdx: -1,
                offset: void 0
              };
              function S(L, x) {
                const z = L.divIdx;
                return h[z].textContent = "", s(z, 0, L.offset, x);
              }
              function s(L, x, z, J) {
                let M = h[L];
                if (M.nodeType === Node.TEXT_NODE) {
                  const q = document.createElement("span");
                  M.before(q), q.append(M), h[L] = q, M = q;
                }
                const Y = y[L].substring(x, z), tt = document.createTextNode(Y);
                if (J) {
                  const q = document.createElement("span");
                  return q.className = `${J} appended`, q.append(tt), M.append(q), J.includes("selected") ? q.offsetLeft : 0;
                }
                return M.append(tt), 0;
              }
              let i = m, w = i + 1;
              if (P)
                i = 0, w = r.length;
              else if (!_)
                return;
              let b = -1, c = -1;
              for (let L = i; L < w; L++) {
                const x = r[L], z = x.begin;
                if (z.divIdx === b && z.offset === c)
                  continue;
                b = z.divIdx, c = z.offset;
                const J = x.end, M = _ && L === m, Y = M ? " selected" : "";
                let tt = 0;
                if (!A || z.divIdx !== A.divIdx ? (A !== null && s(A.divIdx, A.offset, u.offset), S(z)) : s(A.divIdx, A.offset, z.offset), z.divIdx === J.divIdx)
                  tt = s(z.divIdx, z.offset, J.offset, "highlight" + Y);
                else {
                  tt = s(z.divIdx, z.offset, u.offset, "highlight begin" + Y);
                  for (let q = z.divIdx + 1, U = J.divIdx; q < U; q++)
                    h[q].className = "highlight middle" + Y;
                  S(J, "highlight end" + Y);
                }
                A = J, M && I.scrollMatchIntoView({
                  element: h[z.divIdx],
                  selectedLeft: tt,
                  pageIndex: k,
                  matchIndex: m
                });
              }
              A && s(A.divIdx, A.offset, u.offset);
            }
            _updateMatches(r = !1) {
              if (!this.enabled && !r)
                return;
              const {
                findController: I,
                matches: k,
                pageIdx: y
              } = this, {
                textContentItemsStr: h,
                textDivs: _
              } = this;
              let m = -1;
              for (const u of k) {
                const S = Math.max(m, u.begin.divIdx);
                for (let s = S, i = u.end.divIdx; s <= i; s++) {
                  const w = _[s];
                  w.textContent = h[s], w.className = "";
                }
                m = u.end.divIdx + 1;
              }
              if (!(I != null && I.highlightMatches) || r)
                return;
              const P = I.pageMatches[y] || null, A = I.pageMatchesLength[y] || null;
              this.matches = this._convertMatches(P, A), this._renderMatches(this.matches);
            }
          }
          F.TextHighlighter = f;
        },
        /* 19 */
        /***/
        (B, F, f) => {
          var k, y, h, _, m, $n, A, Xn;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.TextLayerBuilder = void 0;
          var d = f(4), r = f(2);
          class I {
            constructor({
              highlighter: s = null,
              accessibilityManager: i = null,
              isOffscreenCanvasSupported: w = !0,
              enablePermissions: b = !1
            }) {
              O(this, m);
              O(this, A);
              O(this, k, !1);
              O(this, y, 0);
              O(this, h, 0);
              O(this, _, null);
              this.textContentItemsStr = [], this.renderingDone = !1, this.textDivs = [], this.textDivProperties = /* @__PURE__ */ new WeakMap(), this.textLayerRenderTask = null, this.highlighter = s, this.accessibilityManager = i, this.isOffscreenCanvasSupported = w, Q(this, k, b === !0), this.div = document.createElement("div"), this.div.className = "textLayer", this.hide();
            }
            get numTextDivs() {
              return this.textDivs.length;
            }
            async render(s) {
              var b, c, L;
              if (!t(this, _))
                throw new Error('No "textContentSource" parameter specified.');
              const i = s.scale * (globalThis.devicePixelRatio || 1), {
                rotation: w
              } = s;
              if (this.renderingDone) {
                const x = w !== t(this, y), z = i !== t(this, h);
                (x || z) && (this.hide(), (0, d.updateTextLayer)({
                  container: this.div,
                  viewport: s,
                  textDivs: this.textDivs,
                  textDivProperties: this.textDivProperties,
                  isOffscreenCanvasSupported: this.isOffscreenCanvasSupported,
                  mustRescale: z,
                  mustRotate: x
                }), Q(this, h, i), Q(this, y, w)), this.show();
                return;
              }
              this.cancel(), (b = this.highlighter) == null || b.setTextMapping(this.textDivs, this.textContentItemsStr), (c = this.accessibilityManager) == null || c.setTextMapping(this.textDivs), this.textLayerRenderTask = (0, d.renderTextLayer)({
                textContentSource: t(this, _),
                container: this.div,
                viewport: s,
                textDivs: this.textDivs,
                textDivProperties: this.textDivProperties,
                textContentItemsStr: this.textContentItemsStr,
                isOffscreenCanvasSupported: this.isOffscreenCanvasSupported
              }), await this.textLayerRenderTask.promise, W(this, m, $n).call(this), Q(this, h, i), Q(this, y, w), this.show(), (L = this.accessibilityManager) == null || L.enable();
            }
            hide() {
              var s;
              this.div.hidden || ((s = this.highlighter) == null || s.disable(), this.div.hidden = !0);
            }
            show() {
              var s;
              this.div.hidden && this.renderingDone && (this.div.hidden = !1, (s = this.highlighter) == null || s.enable());
            }
            cancel() {
              var s, i;
              this.textLayerRenderTask && (this.textLayerRenderTask.cancel(), this.textLayerRenderTask = null), (s = this.highlighter) == null || s.disable(), (i = this.accessibilityManager) == null || i.disable(), this.textContentItemsStr.length = 0, this.textDivs.length = 0, this.textDivProperties = /* @__PURE__ */ new WeakMap();
            }
            setTextContentSource(s) {
              this.cancel(), Q(this, _, s);
            }
          }
          k = new WeakMap(), y = new WeakMap(), h = new WeakMap(), _ = new WeakMap(), m = new WeakSet(), $n = function() {
            this.renderingDone = !0;
            const s = document.createElement("div");
            s.className = "endOfContent", this.div.append(s), W(this, A, Xn).call(this);
          }, A = new WeakSet(), Xn = function() {
            const {
              div: s
            } = this;
            s.addEventListener("mousedown", (i) => {
              const w = s.querySelector(".endOfContent");
              if (!w)
                return;
              let b = i.target !== s;
              if (b && (b = getComputedStyle(w).getPropertyValue("-moz-user-select") !== "none"), b) {
                const c = s.getBoundingClientRect(), L = Math.max(0, (i.pageY - c.top) / c.height);
                w.style.top = (L * 100).toFixed(2) + "%";
              }
              w.classList.add("active");
            }), s.addEventListener("mouseup", () => {
              const i = s.querySelector(".endOfContent");
              i && (i.style.top = "", i.classList.remove("active"));
            }), s.addEventListener("copy", (i) => {
              if (!t(this, k)) {
                const w = document.getSelection();
                i.clipboardData.setData("text/plain", (0, r.removeNullCharacters)((0, d.normalizeUnicode)(w.toString())));
              }
              i.preventDefault(), i.stopPropagation();
            });
          }, F.TextLayerBuilder = I;
        },
        /* 20 */
        /***/
        (B, F, f) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.XfaLayerBuilder = void 0;
          var d = f(4);
          class r {
            constructor({
              pageDiv: k,
              pdfPage: y,
              annotationStorage: h = null,
              linkService: _,
              xfaHtml: m = null
            }) {
              this.pageDiv = k, this.pdfPage = y, this.annotationStorage = h, this.linkService = _, this.xfaHtml = m, this.div = null, this._cancelled = !1;
            }
            async render(k, y = "display") {
              if (y === "print") {
                const m = {
                  viewport: k.clone({
                    dontFlip: !0
                  }),
                  div: this.div,
                  xfaHtml: this.xfaHtml,
                  annotationStorage: this.annotationStorage,
                  linkService: this.linkService,
                  intent: y
                }, P = document.createElement("div");
                return this.pageDiv.append(P), m.div = P, d.XfaLayer.render(m);
              }
              const h = await this.pdfPage.getXfa();
              if (this._cancelled || !h)
                return {
                  textDivs: []
                };
              const _ = {
                viewport: k.clone({
                  dontFlip: !0
                }),
                div: this.div,
                xfaHtml: h,
                annotationStorage: this.annotationStorage,
                linkService: this.linkService,
                intent: y
              };
              return this.div ? d.XfaLayer.update(_) : (this.div = document.createElement("div"), this.pageDiv.append(this.div), _.div = this.div, d.XfaLayer.render(_));
            }
            cancel() {
              this._cancelled = !0;
            }
            hide() {
              this.div && (this.div.hidden = !0);
            }
          }
          F.XfaLayerBuilder = r;
        },
        /* 21 */
        /***/
        (B, F, f) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFScriptingManager = void 0;
          var d = f(22), r = f(23);
          class I extends r.PDFScriptingManager {
            constructor(y) {
              y.externalServices || window.addEventListener("updatefromsandbox", (h) => {
                y.eventBus.dispatch("updatefromsandbox", {
                  source: window,
                  detail: h.detail
                });
              }), y.externalServices || (y.externalServices = {
                createScripting: ({
                  sandboxBundleSrc: h
                }) => new d.GenericScripting(h)
              }), y.docProperties || (y.docProperties = (h) => (0, d.docProperties)(h)), super(y);
            }
          }
          F.PDFScriptingManager = I;
        },
        /* 22 */
        /***/
        (B, F, f) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.GenericScripting = void 0, F.docProperties = r;
          var d = f(4);
          async function r(k) {
            const y = "", h = y.split("#")[0];
            let {
              info: _,
              metadata: m,
              contentDispositionFilename: P,
              contentLength: A
            } = await k.getMetadata();
            if (!A) {
              const {
                length: u
              } = await k.getDownloadInfo();
              A = u;
            }
            return {
              ..._,
              baseURL: h,
              filesize: A,
              filename: P || (0, d.getPdfFilenameFromUrl)(y),
              metadata: m == null ? void 0 : m.getRaw(),
              authors: m == null ? void 0 : m.get("dc:creator"),
              numPages: k.numPages,
              URL: y
            };
          }
          class I {
            constructor(y) {
              this._ready = (0, d.loadScript)(y, !0).then(() => window.pdfjsSandbox.QuickJSSandbox());
            }
            async createSandbox(y) {
              (await this._ready).create(y);
            }
            async dispatchEventInSandbox(y) {
              const h = await this._ready;
              setTimeout(() => h.dispatchEvent(y), 0);
            }
            async destroySandbox() {
              (await this._ready).nukeSandbox();
            }
          }
          F.GenericScripting = I;
        },
        /* 23 */
        /***/
        (B, F, f) => {
          var k, y, h, _, m, P, A, u, S, s, i, w, qn, c, Xe, x, qi, J, Yn, Y, Te;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFScriptingManager = void 0;
          var d = f(2), r = f(4);
          class I {
            constructor({
              eventBus: U,
              sandboxBundleSrc: at = null,
              externalServices: $ = null,
              docProperties: wt = null
            }) {
              O(this, w);
              O(this, c);
              O(this, x);
              O(this, J);
              O(this, Y);
              O(this, k, null);
              O(this, y, null);
              O(this, h, null);
              O(this, _, null);
              O(this, m, null);
              O(this, P, null);
              O(this, A, null);
              O(this, u, !1);
              O(this, S, null);
              O(this, s, null);
              O(this, i, null);
              Q(this, _, U), Q(this, S, at), Q(this, m, $), Q(this, h, wt);
            }
            setViewer(U) {
              Q(this, A, U);
            }
            async setDocument(U) {
              var Pt;
              if (t(this, P) && await W(this, Y, Te).call(this), Q(this, P, U), !U)
                return;
              const [at, $, wt] = await Promise.all([U.getFieldObjects(), U.getCalculationOrderIds(), U.getJSActions()]);
              if (!at && !wt) {
                await W(this, Y, Te).call(this);
                return;
              }
              if (U === t(this, P)) {
                try {
                  Q(this, s, W(this, J, Yn).call(this));
                } catch (N) {
                  console.error(`setDocument: "${N.message}".`), await W(this, Y, Te).call(this);
                  return;
                }
                this._internalEvents.set("updatefromsandbox", (N) => {
                  (N == null ? void 0 : N.source) === window && W(this, w, qn).call(this, N.detail);
                }), this._internalEvents.set("dispatcheventinsandbox", (N) => {
                  var a;
                  (a = t(this, s)) == null || a.dispatchEventInSandbox(N.detail);
                }), this._internalEvents.set("pagechanging", ({
                  pageNumber: N,
                  previous: a
                }) => {
                  N !== a && (W(this, x, qi).call(this, a), W(this, c, Xe).call(this, N));
                }), this._internalEvents.set("pagerendered", ({
                  pageNumber: N
                }) => {
                  this._pageOpenPending.has(N) && N === t(this, A).currentPageNumber && W(this, c, Xe).call(this, N);
                }), this._internalEvents.set("pagesdestroy", async () => {
                  var N, a;
                  await W(this, x, qi).call(this, t(this, A).currentPageNumber), await ((N = t(this, s)) == null ? void 0 : N.dispatchEventInSandbox({
                    id: "doc",
                    name: "WillClose"
                  })), (a = t(this, k)) == null || a.resolve();
                });
                for (const [N, a] of this._internalEvents)
                  t(this, _)._on(N, a);
                try {
                  const N = await t(this, h).call(this, U);
                  if (U !== t(this, P))
                    return;
                  await t(this, s).createSandbox({
                    objects: at,
                    calculationOrder: $,
                    appInfo: {
                      platform: navigator.platform,
                      language: navigator.language
                    },
                    docInfo: {
                      ...N,
                      actions: wt
                    }
                  }), t(this, _).dispatch("sandboxcreated", {
                    source: this
                  });
                } catch (N) {
                  console.error(`setDocument: "${N.message}".`), await W(this, Y, Te).call(this);
                  return;
                }
                await ((Pt = t(this, s)) == null ? void 0 : Pt.dispatchEventInSandbox({
                  id: "doc",
                  name: "Open"
                })), await W(this, c, Xe).call(this, t(this, A).currentPageNumber, !0), Promise.resolve().then(() => {
                  U === t(this, P) && Q(this, u, !0);
                });
              }
            }
            async dispatchWillSave() {
              var U;
              return (U = t(this, s)) == null ? void 0 : U.dispatchEventInSandbox({
                id: "doc",
                name: "WillSave"
              });
            }
            async dispatchDidSave() {
              var U;
              return (U = t(this, s)) == null ? void 0 : U.dispatchEventInSandbox({
                id: "doc",
                name: "DidSave"
              });
            }
            async dispatchWillPrint() {
              var U;
              if (t(this, s)) {
                await ((U = t(this, i)) == null ? void 0 : U.promise), Q(this, i, new r.PromiseCapability());
                try {
                  await t(this, s).dispatchEventInSandbox({
                    id: "doc",
                    name: "WillPrint"
                  });
                } catch (at) {
                  throw t(this, i).resolve(), Q(this, i, null), at;
                }
                await t(this, i).promise;
              }
            }
            async dispatchDidPrint() {
              var U;
              return (U = t(this, s)) == null ? void 0 : U.dispatchEventInSandbox({
                id: "doc",
                name: "DidPrint"
              });
            }
            get destroyPromise() {
              var U;
              return ((U = t(this, y)) == null ? void 0 : U.promise) || null;
            }
            get ready() {
              return t(this, u);
            }
            get _internalEvents() {
              return (0, r.shadow)(this, "_internalEvents", /* @__PURE__ */ new Map());
            }
            get _pageOpenPending() {
              return (0, r.shadow)(this, "_pageOpenPending", /* @__PURE__ */ new Set());
            }
            get _visitedPages() {
              return (0, r.shadow)(this, "_visitedPages", /* @__PURE__ */ new Map());
            }
          }
          k = new WeakMap(), y = new WeakMap(), h = new WeakMap(), _ = new WeakMap(), m = new WeakMap(), P = new WeakMap(), A = new WeakMap(), u = new WeakMap(), S = new WeakMap(), s = new WeakMap(), i = new WeakMap(), w = new WeakSet(), qn = async function(U) {
            var l, T;
            const at = t(this, A), $ = at.isInPresentationMode || at.isChangingPresentationMode, {
              id: wt,
              siblings: Pt,
              command: N,
              value: a
            } = U;
            if (!wt) {
              switch (N) {
                case "clear":
                  console.clear();
                  break;
                case "error":
                  console.error(a);
                  break;
                case "layout":
                  if (!$) {
                    const R = (0, d.apiPageLayoutToViewerModes)(a);
                    at.spreadMode = R.spreadMode;
                  }
                  break;
                case "page-num":
                  at.currentPageNumber = a + 1;
                  break;
                case "print":
                  await at.pagesPromise, t(this, _).dispatch("print", {
                    source: this
                  });
                  break;
                case "println":
                  console.log(a);
                  break;
                case "zoom":
                  $ || (at.currentScaleValue = a);
                  break;
                case "SaveAs":
                  t(this, _).dispatch("download", {
                    source: this
                  });
                  break;
                case "FirstPage":
                  at.currentPageNumber = 1;
                  break;
                case "LastPage":
                  at.currentPageNumber = at.pagesCount;
                  break;
                case "NextPage":
                  at.nextPage();
                  break;
                case "PrevPage":
                  at.previousPage();
                  break;
                case "ZoomViewIn":
                  $ || at.increaseScale();
                  break;
                case "ZoomViewOut":
                  $ || at.decreaseScale();
                  break;
                case "WillPrintFinished":
                  (l = t(this, i)) == null || l.resolve(), Q(this, i, null);
                  break;
              }
              return;
            }
            if ($ && U.focus)
              return;
            delete U.id, delete U.siblings;
            const p = Pt ? [wt, ...Pt] : [wt];
            for (const R of p) {
              const H = document.querySelector(`[data-element-id="${R}"]`);
              H ? H.dispatchEvent(new CustomEvent("updatefromsandbox", {
                detail: U
              })) : (T = t(this, P)) == null || T.annotationStorage.setValue(R, U);
            }
          }, c = new WeakSet(), Xe = async function(U, at = !1) {
            const $ = t(this, P), wt = this._visitedPages;
            if (at && Q(this, k, new r.PromiseCapability()), !t(this, k))
              return;
            const Pt = t(this, A).getPageView(U - 1);
            if ((Pt == null ? void 0 : Pt.renderingState) !== d.RenderingStates.FINISHED) {
              this._pageOpenPending.add(U);
              return;
            }
            this._pageOpenPending.delete(U);
            const N = (async () => {
              var p, l;
              const a = await (wt.has(U) ? null : (p = Pt.pdfPage) == null ? void 0 : p.getJSActions());
              $ === t(this, P) && await ((l = t(this, s)) == null ? void 0 : l.dispatchEventInSandbox({
                id: "page",
                name: "PageOpen",
                pageNumber: U,
                actions: a
              }));
            })();
            wt.set(U, N);
          }, x = new WeakSet(), qi = async function(U) {
            var Pt;
            const at = t(this, P), $ = this._visitedPages;
            if (!t(this, k) || this._pageOpenPending.has(U))
              return;
            const wt = $.get(U);
            wt && ($.set(U, null), await wt, at === t(this, P) && await ((Pt = t(this, s)) == null ? void 0 : Pt.dispatchEventInSandbox({
              id: "page",
              name: "PageClose",
              pageNumber: U
            })));
          }, J = new WeakSet(), Yn = function() {
            if (Q(this, y, new r.PromiseCapability()), t(this, s))
              throw new Error("#initScripting: Scripting already exists.");
            return t(this, m).createScripting({
              sandboxBundleSrc: t(this, S)
            });
          }, Y = new WeakSet(), Te = async function() {
            var U, at, $;
            if (!t(this, s)) {
              Q(this, P, null), (U = t(this, y)) == null || U.resolve();
              return;
            }
            t(this, k) && (await Promise.race([t(this, k).promise, new Promise((wt) => {
              setTimeout(wt, 1e3);
            })]).catch(() => {
            }), Q(this, k, null)), Q(this, P, null);
            try {
              await t(this, s).destroySandbox();
            } catch {
            }
            (at = t(this, i)) == null || at.reject(new Error("Scripting destroyed.")), Q(this, i, null);
            for (const [wt, Pt] of this._internalEvents)
              t(this, _)._off(wt, Pt);
            this._internalEvents.clear(), this._pageOpenPending.clear(), this._visitedPages.clear(), Q(this, s, null), Q(this, u, !1), ($ = t(this, y)) == null || $.resolve();
          }, F.PDFScriptingManager = I;
        },
        /* 24 */
        /***/
        (B, F, f) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFSinglePageViewer = void 0;
          var d = f(2), r = f(25);
          class I extends r.PDFViewer {
            _resetView() {
              super._resetView(), this._scrollMode = d.ScrollMode.PAGE, this._spreadMode = d.SpreadMode.NONE;
            }
            set scrollMode(y) {
            }
            _updateScrollMode() {
            }
            set spreadMode(y) {
            }
            _updateSpreadMode() {
            }
          }
          F.PDFSinglePageViewer = I;
        },
        /* 25 */
        /***/
        (B, F, f) => {
          var S, s, i, Yi, b, c, L, x, z, J, M, Y, tt, q, U, at, $, wt, Pt, N, a, p, Kn, T, Zn, H, Qn, nt, Jn, pt, xe, st, qe, gt, ts, It, Ki, ut, es, it, oe, mt, Zi, kt, ns, Ut, ss, Gt, Qi, Xt, rs;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PagesCountLimit = F.PDFViewer = F.PDFPageViewBuffer = void 0;
          var d = f(4), r = f(2), I = f(7), k = f(13), y = f(26), h = f(5);
          const _ = 10, m = {
            FORCE_SCROLL_MODE_PAGE: 15e3,
            FORCE_LAZY_PAGE_INIT: 7500,
            PAUSE_EAGER_PAGE_INIT: 250
          };
          F.PagesCountLimit = m;
          function P(At) {
            return Object.values(d.AnnotationEditorType).includes(At) && At !== d.AnnotationEditorType.DISABLE;
          }
          class A {
            constructor(v) {
              O(this, i);
              O(this, S, /* @__PURE__ */ new Set());
              O(this, s, 0);
              Q(this, s, v);
            }
            push(v) {
              const D = t(this, S);
              D.has(v) && D.delete(v), D.add(v), D.size > t(this, s) && W(this, i, Yi).call(this);
            }
            resize(v, D = null) {
              Q(this, s, v);
              const ht = t(this, S);
              if (D) {
                const ot = ht.size;
                let dt = 1;
                for (const bt of ht)
                  if (D.has(bt.id) && (ht.delete(bt), ht.add(bt)), ++dt > ot)
                    break;
              }
              for (; ht.size > t(this, s); )
                W(this, i, Yi).call(this);
            }
            has(v) {
              return t(this, S).has(v);
            }
            [Symbol.iterator]() {
              return t(this, S).keys();
            }
          }
          S = new WeakMap(), s = new WeakMap(), i = new WeakSet(), Yi = function() {
            const v = t(this, S).keys().next().value;
            v == null || v.destroy(), t(this, S).delete(v);
          }, F.PDFPageViewBuffer = A;
          class u {
            constructor(v) {
              O(this, p);
              O(this, T);
              O(this, H);
              O(this, nt);
              O(this, pt);
              O(this, st);
              O(this, gt);
              O(this, It);
              O(this, ut);
              O(this, it);
              O(this, mt);
              O(this, kt);
              O(this, Ut);
              O(this, Gt);
              O(this, Xt);
              O(this, b, null);
              O(this, c, null);
              O(this, L, d.AnnotationEditorType.NONE);
              O(this, x, null);
              O(this, z, d.AnnotationMode.ENABLE_FORMS);
              O(this, J, null);
              O(this, M, null);
              O(this, Y, !1);
              O(this, tt, !1);
              O(this, q, null);
              O(this, U, !1);
              O(this, at, 0);
              O(this, $, new ResizeObserver(W(this, Xt, rs).bind(this)));
              O(this, wt, null);
              O(this, Pt, null);
              O(this, N, null);
              O(this, a, r.TextLayerMode.ENABLE);
              var ht, ot;
              const D = "3.11.174";
              if (d.version !== D)
                throw new Error(`The API version "${d.version}" does not match the Viewer version "${D}".`);
              if (this.container = v.container, this.viewer = v.viewer || v.container.firstElementChild, ((ht = this.container) == null ? void 0 : ht.tagName) !== "DIV" || ((ot = this.viewer) == null ? void 0 : ot.tagName) !== "DIV")
                throw new Error("Invalid `container` and/or `viewer` option.");
              if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute")
                throw new Error("The `container` must be absolutely positioned.");
              t(this, $).observe(this.container), this.eventBus = v.eventBus, this.linkService = v.linkService || new h.SimpleLinkService(), this.downloadManager = v.downloadManager || null, this.findController = v.findController || null, Q(this, c, v.altTextManager || null), this.findController && (this.findController.onIsPageVisible = (dt) => this._getVisiblePages().ids.has(dt)), this._scriptingManager = v.scriptingManager || null, Q(this, a, v.textLayerMode ?? r.TextLayerMode.ENABLE), Q(this, z, v.annotationMode ?? d.AnnotationMode.ENABLE_FORMS), Q(this, L, v.annotationEditorMode ?? d.AnnotationEditorType.NONE), this.imageResourcesPath = v.imageResourcesPath || "", this.enablePrintAutoRotate = v.enablePrintAutoRotate || !1, this.removePageBorders = v.removePageBorders || !1, v.useOnlyCssZoom && (console.error("useOnlyCssZoom was removed, please use `maxCanvasPixels = 0` instead."), v.maxCanvasPixels = 0), this.isOffscreenCanvasSupported = v.isOffscreenCanvasSupported ?? !0, this.maxCanvasPixels = v.maxCanvasPixels, this.l10n = v.l10n || I.NullL10n, Q(this, Y, v.enablePermissions || !1), this.pageColors = v.pageColors || null, this.defaultRenderingQueue = !v.renderingQueue, this.defaultRenderingQueue ? (this.renderingQueue = new y.PDFRenderingQueue(), this.renderingQueue.setViewer(this)) : this.renderingQueue = v.renderingQueue, this.scroll = (0, r.watchScroll)(this.container, this._scrollUpdate.bind(this)), this.presentationModeState = r.PresentationModeState.UNKNOWN, this._onBeforeDraw = this._onAfterDraw = null, this._resetView(), this.removePageBorders && this.viewer.classList.add("removePageBorders"), W(this, Gt, Qi).call(this), this.eventBus._on("thumbnailrendered", ({
                pageNumber: dt,
                pdfPage: bt
              }) => {
                const j = this._pages[dt - 1];
                t(this, b).has(j) || bt == null || bt.cleanup();
              });
            }
            get pagesCount() {
              return this._pages.length;
            }
            getPageView(v) {
              return this._pages[v];
            }
            getCachedPageViews() {
              return new Set(t(this, b));
            }
            get pageViewsReady() {
              return this._pagesCapability.settled && this._pages.every((v) => v == null ? void 0 : v.pdfPage);
            }
            get renderForms() {
              return t(this, z) === d.AnnotationMode.ENABLE_FORMS;
            }
            get enableScripting() {
              return !!this._scriptingManager;
            }
            get currentPageNumber() {
              return this._currentPageNumber;
            }
            set currentPageNumber(v) {
              if (!Number.isInteger(v))
                throw new Error("Invalid page number.");
              this.pdfDocument && (this._setCurrentPageNumber(v, !0) || console.error(`currentPageNumber: "${v}" is not a valid page.`));
            }
            _setCurrentPageNumber(v, D = !1) {
              var ot;
              if (this._currentPageNumber === v)
                return D && W(this, mt, Zi).call(this), !0;
              if (!(0 < v && v <= this.pagesCount))
                return !1;
              const ht = this._currentPageNumber;
              return this._currentPageNumber = v, this.eventBus.dispatch("pagechanging", {
                source: this,
                pageNumber: v,
                pageLabel: ((ot = this._pageLabels) == null ? void 0 : ot[v - 1]) ?? null,
                previous: ht
              }), D && W(this, mt, Zi).call(this), !0;
            }
            get currentPageLabel() {
              var v;
              return ((v = this._pageLabels) == null ? void 0 : v[this._currentPageNumber - 1]) ?? null;
            }
            set currentPageLabel(v) {
              if (!this.pdfDocument)
                return;
              let D = v | 0;
              if (this._pageLabels) {
                const ht = this._pageLabels.indexOf(v);
                ht >= 0 && (D = ht + 1);
              }
              this._setCurrentPageNumber(D, !0) || console.error(`currentPageLabel: "${v}" is not a valid page.`);
            }
            get currentScale() {
              return this._currentScale !== r.UNKNOWN_SCALE ? this._currentScale : r.DEFAULT_SCALE;
            }
            set currentScale(v) {
              if (isNaN(v))
                throw new Error("Invalid numeric scale.");
              this.pdfDocument && W(this, it, oe).call(this, v, {
                noScroll: !1
              });
            }
            get currentScaleValue() {
              return this._currentScaleValue;
            }
            set currentScaleValue(v) {
              this.pdfDocument && W(this, it, oe).call(this, v, {
                noScroll: !1
              });
            }
            get pagesRotation() {
              return this._pagesRotation;
            }
            set pagesRotation(v) {
              if (!(0, r.isValidRotation)(v))
                throw new Error("Invalid pages rotation angle.");
              if (!this.pdfDocument || (v %= 360, v < 0 && (v += 360), this._pagesRotation === v))
                return;
              this._pagesRotation = v;
              const D = this._currentPageNumber;
              this.refresh(!0, {
                rotation: v
              }), this._currentScaleValue && W(this, it, oe).call(this, this._currentScaleValue, {
                noScroll: !0
              }), this.eventBus.dispatch("rotationchanging", {
                source: this,
                pagesRotation: v,
                pageNumber: D
              }), this.defaultRenderingQueue && this.update();
            }
            get firstPagePromise() {
              return this.pdfDocument ? this._firstPageCapability.promise : null;
            }
            get onePageRendered() {
              return this.pdfDocument ? this._onePageRenderedCapability.promise : null;
            }
            get pagesPromise() {
              return this.pdfDocument ? this._pagesCapability.promise : null;
            }
            async getAllText() {
              const v = [], D = [];
              for (let ht = 1, ot = this.pdfDocument.numPages; ht <= ot; ++ht) {
                if (t(this, U))
                  return null;
                D.length = 0;
                const dt = await this.pdfDocument.getPage(ht), {
                  items: bt
                } = await dt.getTextContent();
                for (const j of bt)
                  j.str && D.push(j.str), j.hasEOL && D.push(`
`);
                v.push((0, r.removeNullCharacters)(D.join("")));
              }
              return v.join(`
`);
            }
            setDocument(v) {
              var bt, j;
              if (this.pdfDocument && (this.eventBus.dispatch("pagesdestroy", {
                source: this
              }), this._cancelRendering(), this._resetView(), (bt = this.findController) == null || bt.setDocument(null), (j = this._scriptingManager) == null || j.setDocument(null), t(this, x) && (t(this, x).destroy(), Q(this, x, null))), this.pdfDocument = v, !v)
                return;
              const D = v.numPages, ht = v.getPage(1), ot = v.getOptionalContentConfig(), dt = t(this, Y) ? v.getPermissions() : Promise.resolve();
              if (D > m.FORCE_SCROLL_MODE_PAGE) {
                console.warn("Forcing PAGE-scrolling for performance reasons, given the length of the document.");
                const ct = this._scrollMode = r.ScrollMode.PAGE;
                this.eventBus.dispatch("scrollmodechanged", {
                  source: this,
                  mode: ct
                });
              }
              this._pagesCapability.promise.then(() => {
                this.eventBus.dispatch("pagesloaded", {
                  source: this,
                  pagesCount: D
                });
              }, () => {
              }), this._onBeforeDraw = (ct) => {
                const xt = this._pages[ct.pageNumber - 1];
                xt && t(this, b).push(xt);
              }, this.eventBus._on("pagerender", this._onBeforeDraw), this._onAfterDraw = (ct) => {
                ct.cssTransform || this._onePageRenderedCapability.settled || (this._onePageRenderedCapability.resolve({
                  timestamp: ct.timestamp
                }), this.eventBus._off("pagerendered", this._onAfterDraw), this._onAfterDraw = null, t(this, Pt) && (document.removeEventListener("visibilitychange", t(this, Pt)), Q(this, Pt, null)));
              }, this.eventBus._on("pagerendered", this._onAfterDraw), Promise.all([ht, dt]).then(([ct, xt]) => {
                var o, V;
                if (v !== this.pdfDocument)
                  return;
                this._firstPageCapability.resolve(ct), this._optionalContentConfigPromise = ot;
                const {
                  annotationEditorMode: Et,
                  annotationMode: Ft,
                  textLayerMode: Ot
                } = W(this, T, Zn).call(this, xt);
                if (Ot !== r.TextLayerMode.DISABLE) {
                  const X = Q(this, q, document.createElement("div"));
                  X.id = "hiddenCopyElement", this.viewer.before(X);
                }
                if (Et !== d.AnnotationEditorType.DISABLE) {
                  const X = Et;
                  v.isPureXfa ? console.warn("Warning: XFA-editing is not implemented.") : P(X) ? (Q(this, x, new d.AnnotationEditorUIManager(this.container, this.viewer, t(this, c), this.eventBus, v, this.pageColors)), X !== d.AnnotationEditorType.NONE && t(this, x).updateMode(X)) : console.error(`Invalid AnnotationEditor mode: ${X}`);
                }
                const Wt = W(this, p, Kn).bind(this), Ct = this._scrollMode === r.ScrollMode.PAGE ? null : this.viewer, qt = this.currentScale, Vt = ct.getViewport({
                  scale: qt * d.PixelsPerInch.PDF_TO_CSS_UNITS
                });
                this.viewer.style.setProperty("--scale-factor", Vt.scale), (((o = this.pageColors) == null ? void 0 : o.foreground) === "CanvasText" || ((V = this.pageColors) == null ? void 0 : V.background) === "Canvas") && this.viewer.style.setProperty("--hcm-highligh-filter", v.filterFactory.addHighlightHCMFilter("CanvasText", "Canvas", "HighlightText", "Highlight"));
                for (let X = 1; X <= D; ++X) {
                  const rt = new k.PDFPageView({
                    container: Ct,
                    eventBus: this.eventBus,
                    id: X,
                    scale: qt,
                    defaultViewport: Vt.clone(),
                    optionalContentConfigPromise: ot,
                    renderingQueue: this.renderingQueue,
                    textLayerMode: Ot,
                    annotationMode: Ft,
                    imageResourcesPath: this.imageResourcesPath,
                    isOffscreenCanvasSupported: this.isOffscreenCanvasSupported,
                    maxCanvasPixels: this.maxCanvasPixels,
                    pageColors: this.pageColors,
                    l10n: this.l10n,
                    layerProperties: Wt
                  });
                  this._pages.push(rt);
                }
                const Z = this._pages[0];
                Z && (Z.setPdfPage(ct), this.linkService.cachePageRef(1, ct.ref)), this._scrollMode === r.ScrollMode.PAGE ? W(this, pt, xe).call(this) : this._spreadMode !== r.SpreadMode.NONE && this._updateSpreadMode(), W(this, H, Qn).call(this).then(async () => {
                  var rt, ft;
                  if ((rt = this.findController) == null || rt.setDocument(v), (ft = this._scriptingManager) == null || ft.setDocument(v), t(this, q) && (Q(this, M, W(this, nt, Jn).bind(this, Ot)), document.addEventListener("copy", t(this, M))), t(this, x) && this.eventBus.dispatch("annotationeditormodechanged", {
                    source: this,
                    mode: t(this, L)
                  }), v.loadingParams.disableAutoFetch || D > m.FORCE_LAZY_PAGE_INIT) {
                    this._pagesCapability.resolve();
                    return;
                  }
                  let X = D - 1;
                  if (X <= 0) {
                    this._pagesCapability.resolve();
                    return;
                  }
                  for (let yt = 2; yt <= D; ++yt) {
                    const Rt = v.getPage(yt).then((Nt) => {
                      const Dt = this._pages[yt - 1];
                      Dt.pdfPage || Dt.setPdfPage(Nt), this.linkService.cachePageRef(yt, Nt.ref), --X === 0 && this._pagesCapability.resolve();
                    }, (Nt) => {
                      console.error(`Unable to get page ${yt} to initialize viewer`, Nt), --X === 0 && this._pagesCapability.resolve();
                    });
                    yt % m.PAUSE_EAGER_PAGE_INIT === 0 && await Rt;
                  }
                }), this.eventBus.dispatch("pagesinit", {
                  source: this
                }), v.getMetadata().then(({
                  info: X
                }) => {
                  v === this.pdfDocument && X.Language && (this.viewer.lang = X.Language);
                }), this.defaultRenderingQueue && this.update();
              }).catch((ct) => {
                console.error("Unable to initialize viewer", ct), this._pagesCapability.reject(ct);
              });
            }
            setPageLabels(v) {
              var D;
              if (this.pdfDocument) {
                v ? Array.isArray(v) && this.pdfDocument.numPages === v.length ? this._pageLabels = v : (this._pageLabels = null, console.error("setPageLabels: Invalid page labels.")) : this._pageLabels = null;
                for (let ht = 0, ot = this._pages.length; ht < ot; ht++)
                  this._pages[ht].setPageLabel(((D = this._pageLabels) == null ? void 0 : D[ht]) ?? null);
              }
            }
            _resetView() {
              this._pages = [], this._currentPageNumber = 1, this._currentScale = r.UNKNOWN_SCALE, this._currentScaleValue = null, this._pageLabels = null, Q(this, b, new A(_)), this._location = null, this._pagesRotation = 0, this._optionalContentConfigPromise = null, this._firstPageCapability = new d.PromiseCapability(), this._onePageRenderedCapability = new d.PromiseCapability(), this._pagesCapability = new d.PromiseCapability(), this._scrollMode = r.ScrollMode.VERTICAL, this._previousScrollMode = r.ScrollMode.UNKNOWN, this._spreadMode = r.SpreadMode.NONE, Q(this, wt, {
                previousPageNumber: 1,
                scrollDown: !0,
                pages: []
              }), this._onBeforeDraw && (this.eventBus._off("pagerender", this._onBeforeDraw), this._onBeforeDraw = null), this._onAfterDraw && (this.eventBus._off("pagerendered", this._onAfterDraw), this._onAfterDraw = null), t(this, Pt) && (document.removeEventListener("visibilitychange", t(this, Pt)), Q(this, Pt, null)), this.viewer.textContent = "", this._updateScrollMode(), this.viewer.removeAttribute("lang"), t(this, q) && (document.removeEventListener("copy", t(this, M)), Q(this, M, null), t(this, q).remove(), Q(this, q, null));
            }
            _scrollUpdate() {
              this.pagesCount !== 0 && this.update();
            }
            pageLabelToPageNumber(v) {
              if (!this._pageLabels)
                return null;
              const D = this._pageLabels.indexOf(v);
              return D < 0 ? null : D + 1;
            }
            scrollPageIntoView({
              pageNumber: v,
              destArray: D = null,
              allowNegativeOffset: ht = !1,
              ignoreDestinationZoom: ot = !1
            }) {
              if (!this.pdfDocument)
                return;
              const dt = Number.isInteger(v) && this._pages[v - 1];
              if (!dt) {
                console.error(`scrollPageIntoView: "${v}" is not a valid pageNumber parameter.`);
                return;
              }
              if (this.isInPresentationMode || !D) {
                this._setCurrentPageNumber(v, !0);
                return;
              }
              let bt = 0, j = 0, ct = 0, xt = 0, Et, Ft;
              const Ot = dt.rotation % 180 !== 0, Wt = (Ot ? dt.height : dt.width) / dt.scale / d.PixelsPerInch.PDF_TO_CSS_UNITS, Ct = (Ot ? dt.width : dt.height) / dt.scale / d.PixelsPerInch.PDF_TO_CSS_UNITS;
              let qt = 0;
              switch (D[1].name) {
                case "XYZ":
                  bt = D[2], j = D[3], qt = D[4], bt = bt !== null ? bt : 0, j = j !== null ? j : Ct;
                  break;
                case "Fit":
                case "FitB":
                  qt = "page-fit";
                  break;
                case "FitH":
                case "FitBH":
                  j = D[2], qt = "page-width", j === null && this._location ? (bt = this._location.left, j = this._location.top) : (typeof j != "number" || j < 0) && (j = Ct);
                  break;
                case "FitV":
                case "FitBV":
                  bt = D[2], ct = Wt, xt = Ct, qt = "page-height";
                  break;
                case "FitR":
                  bt = D[2], j = D[3], ct = D[4] - bt, xt = D[5] - j;
                  let V = r.SCROLLBAR_PADDING, X = r.VERTICAL_PADDING;
                  this.removePageBorders && (V = X = 0), Et = (this.container.clientWidth - V) / ct / d.PixelsPerInch.PDF_TO_CSS_UNITS, Ft = (this.container.clientHeight - X) / xt / d.PixelsPerInch.PDF_TO_CSS_UNITS, qt = Math.min(Math.abs(Et), Math.abs(Ft));
                  break;
                default:
                  console.error(`scrollPageIntoView: "${D[1].name}" is not a valid destination type.`);
                  return;
              }
              if (ot || (qt && qt !== this._currentScale ? this.currentScaleValue = qt : this._currentScale === r.UNKNOWN_SCALE && (this.currentScaleValue = r.DEFAULT_SCALE_VALUE)), qt === "page-fit" && !D[4]) {
                W(this, st, qe).call(this, dt);
                return;
              }
              const Vt = [dt.viewport.convertToViewportPoint(bt, j), dt.viewport.convertToViewportPoint(bt + ct, j + xt)];
              let Z = Math.min(Vt[0][0], Vt[1][0]), o = Math.min(Vt[0][1], Vt[1][1]);
              ht || (Z = Math.max(Z, 0), o = Math.max(o, 0)), W(this, st, qe).call(this, dt, {
                left: Z,
                top: o
              });
            }
            _updateLocation(v) {
              const D = this._currentScale, ht = this._currentScaleValue, ot = parseFloat(ht) === D ? Math.round(D * 1e4) / 100 : ht, dt = v.id, bt = this._pages[dt - 1], j = this.container, ct = bt.getPagePoint(j.scrollLeft - v.x, j.scrollTop - v.y), xt = Math.round(ct[0]), Et = Math.round(ct[1]);
              let Ft = `#page=${dt}`;
              this.isInPresentationMode || (Ft += `&zoom=${ot},${xt},${Et}`), this._location = {
                pageNumber: dt,
                scale: ot,
                top: Et,
                left: xt,
                rotation: this._pagesRotation,
                pdfOpenParams: Ft
              };
            }
            update() {
              const v = this._getVisiblePages(), D = v.views, ht = D.length;
              if (ht === 0)
                return;
              const ot = Math.max(_, 2 * ht + 1);
              t(this, b).resize(ot, v.ids), this.renderingQueue.renderHighestPriority(v);
              const dt = this._spreadMode === r.SpreadMode.NONE && (this._scrollMode === r.ScrollMode.PAGE || this._scrollMode === r.ScrollMode.VERTICAL), bt = this._currentPageNumber;
              let j = !1;
              for (const ct of D) {
                if (ct.percent < 100)
                  break;
                if (ct.id === bt && dt) {
                  j = !0;
                  break;
                }
              }
              this._setCurrentPageNumber(j ? bt : D[0].id), this._updateLocation(v.first), this.eventBus.dispatch("updateviewarea", {
                source: this,
                location: this._location
              });
            }
            containsElement(v) {
              return this.container.contains(v);
            }
            focus() {
              this.container.focus();
            }
            get _isContainerRtl() {
              return getComputedStyle(this.container).direction === "rtl";
            }
            get isInPresentationMode() {
              return this.presentationModeState === r.PresentationModeState.FULLSCREEN;
            }
            get isChangingPresentationMode() {
              return this.presentationModeState === r.PresentationModeState.CHANGING;
            }
            get isHorizontalScrollbarEnabled() {
              return this.isInPresentationMode ? !1 : this.container.scrollWidth > this.container.clientWidth;
            }
            get isVerticalScrollbarEnabled() {
              return this.isInPresentationMode ? !1 : this.container.scrollHeight > this.container.clientHeight;
            }
            _getVisiblePages() {
              const v = this._scrollMode === r.ScrollMode.PAGE ? t(this, wt).pages : this._pages, D = this._scrollMode === r.ScrollMode.HORIZONTAL, ht = D && this._isContainerRtl;
              return (0, r.getVisibleElements)({
                scrollEl: this.container,
                views: v,
                sortByVisibility: !0,
                horizontal: D,
                rtl: ht
              });
            }
            cleanup() {
              for (const v of this._pages)
                v.renderingState !== r.RenderingStates.FINISHED && v.reset();
            }
            _cancelRendering() {
              for (const v of this._pages)
                v.cancelRendering();
            }
            forceRendering(v) {
              const D = v || this._getVisiblePages(), ht = W(this, Ut, ss).call(this, D), ot = this._spreadMode !== r.SpreadMode.NONE && this._scrollMode !== r.ScrollMode.HORIZONTAL, dt = this.renderingQueue.getHighestPriority(D, this._pages, ht, ot);
              return dt ? (W(this, kt, ns).call(this, dt).then(() => {
                this.renderingQueue.renderView(dt);
              }), !0) : !1;
            }
            get hasEqualPageSizes() {
              const v = this._pages[0];
              for (let D = 1, ht = this._pages.length; D < ht; ++D) {
                const ot = this._pages[D];
                if (ot.width !== v.width || ot.height !== v.height)
                  return !1;
              }
              return !0;
            }
            getPagesOverview() {
              let v;
              return this._pages.map((D) => {
                const ht = D.pdfPage.getViewport({
                  scale: 1
                }), ot = (0, r.isPortraitOrientation)(ht);
                if (v === void 0)
                  v = ot;
                else if (this.enablePrintAutoRotate && ot !== v)
                  return {
                    width: ht.height,
                    height: ht.width,
                    rotation: (ht.rotation - 90) % 360
                  };
                return {
                  width: ht.width,
                  height: ht.height,
                  rotation: ht.rotation
                };
              });
            }
            get optionalContentConfigPromise() {
              return this.pdfDocument ? this._optionalContentConfigPromise ? this._optionalContentConfigPromise : (console.error("optionalContentConfigPromise: Not initialized yet."), this.pdfDocument.getOptionalContentConfig()) : Promise.resolve(null);
            }
            set optionalContentConfigPromise(v) {
              if (!(v instanceof Promise))
                throw new Error(`Invalid optionalContentConfigPromise: ${v}`);
              this.pdfDocument && this._optionalContentConfigPromise && (this._optionalContentConfigPromise = v, this.refresh(!1, {
                optionalContentConfigPromise: v
              }), this.eventBus.dispatch("optionalcontentconfigchanged", {
                source: this,
                promise: v
              }));
            }
            get scrollMode() {
              return this._scrollMode;
            }
            set scrollMode(v) {
              if (this._scrollMode !== v) {
                if (!(0, r.isValidScrollMode)(v))
                  throw new Error(`Invalid scroll mode: ${v}`);
                this.pagesCount > m.FORCE_SCROLL_MODE_PAGE || (this._previousScrollMode = this._scrollMode, this._scrollMode = v, this.eventBus.dispatch("scrollmodechanged", {
                  source: this,
                  mode: v
                }), this._updateScrollMode(this._currentPageNumber));
              }
            }
            _updateScrollMode(v = null) {
              const D = this._scrollMode, ht = this.viewer;
              ht.classList.toggle("scrollHorizontal", D === r.ScrollMode.HORIZONTAL), ht.classList.toggle("scrollWrapped", D === r.ScrollMode.WRAPPED), !(!this.pdfDocument || !v) && (D === r.ScrollMode.PAGE ? W(this, pt, xe).call(this) : this._previousScrollMode === r.ScrollMode.PAGE && this._updateSpreadMode(), this._currentScaleValue && isNaN(this._currentScaleValue) && W(this, it, oe).call(this, this._currentScaleValue, {
                noScroll: !0
              }), this._setCurrentPageNumber(v, !0), this.update());
            }
            get spreadMode() {
              return this._spreadMode;
            }
            set spreadMode(v) {
              if (this._spreadMode !== v) {
                if (!(0, r.isValidSpreadMode)(v))
                  throw new Error(`Invalid spread mode: ${v}`);
                this._spreadMode = v, this.eventBus.dispatch("spreadmodechanged", {
                  source: this,
                  mode: v
                }), this._updateSpreadMode(this._currentPageNumber);
              }
            }
            _updateSpreadMode(v = null) {
              if (!this.pdfDocument)
                return;
              const D = this.viewer, ht = this._pages;
              if (this._scrollMode === r.ScrollMode.PAGE)
                W(this, pt, xe).call(this);
              else if (D.textContent = "", this._spreadMode === r.SpreadMode.NONE)
                for (const ot of this._pages)
                  D.append(ot.div);
              else {
                const ot = this._spreadMode - 1;
                let dt = null;
                for (let bt = 0, j = ht.length; bt < j; ++bt)
                  dt === null ? (dt = document.createElement("div"), dt.className = "spread", D.append(dt)) : bt % 2 === ot && (dt = dt.cloneNode(!1), D.append(dt)), dt.append(ht[bt].div);
              }
              v && (this._currentScaleValue && isNaN(this._currentScaleValue) && W(this, it, oe).call(this, this._currentScaleValue, {
                noScroll: !0
              }), this._setCurrentPageNumber(v, !0), this.update());
            }
            _getPageAdvance(v, D = !1) {
              switch (this._scrollMode) {
                case r.ScrollMode.WRAPPED: {
                  const {
                    views: ht
                  } = this._getVisiblePages(), ot = /* @__PURE__ */ new Map();
                  for (const {
                    id: dt,
                    y: bt,
                    percent: j,
                    widthPercent: ct
                  } of ht) {
                    if (j === 0 || ct < 100)
                      continue;
                    let xt = ot.get(bt);
                    xt || ot.set(bt, xt || (xt = [])), xt.push(dt);
                  }
                  for (const dt of ot.values()) {
                    const bt = dt.indexOf(v);
                    if (bt === -1)
                      continue;
                    const j = dt.length;
                    if (j === 1)
                      break;
                    if (D)
                      for (let ct = bt - 1, xt = 0; ct >= xt; ct--) {
                        const Et = dt[ct], Ft = dt[ct + 1] - 1;
                        if (Et < Ft)
                          return v - Ft;
                      }
                    else
                      for (let ct = bt + 1, xt = j; ct < xt; ct++) {
                        const Et = dt[ct], Ft = dt[ct - 1] + 1;
                        if (Et > Ft)
                          return Ft - v;
                      }
                    if (D) {
                      const ct = dt[0];
                      if (ct < v)
                        return v - ct + 1;
                    } else {
                      const ct = dt[j - 1];
                      if (ct > v)
                        return ct - v + 1;
                    }
                    break;
                  }
                  break;
                }
                case r.ScrollMode.HORIZONTAL:
                  break;
                case r.ScrollMode.PAGE:
                case r.ScrollMode.VERTICAL: {
                  if (this._spreadMode === r.SpreadMode.NONE)
                    break;
                  const ht = this._spreadMode - 1;
                  if (D && v % 2 !== ht)
                    break;
                  if (!D && v % 2 === ht)
                    break;
                  const {
                    views: ot
                  } = this._getVisiblePages(), dt = D ? v - 1 : v + 1;
                  for (const {
                    id: bt,
                    percent: j,
                    widthPercent: ct
                  } of ot)
                    if (bt === dt) {
                      if (j > 0 && ct === 100)
                        return 2;
                      break;
                    }
                  break;
                }
              }
              return 1;
            }
            nextPage() {
              const v = this._currentPageNumber, D = this.pagesCount;
              if (v >= D)
                return !1;
              const ht = this._getPageAdvance(v, !1) || 1;
              return this.currentPageNumber = Math.min(v + ht, D), !0;
            }
            previousPage() {
              const v = this._currentPageNumber;
              if (v <= 1)
                return !1;
              const D = this._getPageAdvance(v, !0) || 1;
              return this.currentPageNumber = Math.max(v - D, 1), !0;
            }
            increaseScale({
              drawingDelay: v,
              scaleFactor: D,
              steps: ht
            } = {}) {
              if (!this.pdfDocument)
                return;
              let ot = this._currentScale;
              if (D > 1)
                ot = Math.round(ot * D * 100) / 100;
              else {
                ht ?? (ht = 1);
                do
                  ot = Math.ceil((ot * r.DEFAULT_SCALE_DELTA).toFixed(2) * 10) / 10;
                while (--ht > 0 && ot < r.MAX_SCALE);
              }
              W(this, it, oe).call(this, Math.min(r.MAX_SCALE, ot), {
                noScroll: !1,
                drawingDelay: v
              });
            }
            decreaseScale({
              drawingDelay: v,
              scaleFactor: D,
              steps: ht
            } = {}) {
              if (!this.pdfDocument)
                return;
              let ot = this._currentScale;
              if (D > 0 && D < 1)
                ot = Math.round(ot * D * 100) / 100;
              else {
                ht ?? (ht = 1);
                do
                  ot = Math.floor((ot / r.DEFAULT_SCALE_DELTA).toFixed(2) * 10) / 10;
                while (--ht > 0 && ot > r.MIN_SCALE);
              }
              W(this, it, oe).call(this, Math.max(r.MIN_SCALE, ot), {
                noScroll: !1,
                drawingDelay: v
              });
            }
            get containerTopLeft() {
              return t(this, J) || Q(this, J, [this.container.offsetTop, this.container.offsetLeft]);
            }
            get annotationEditorMode() {
              return t(this, x) ? t(this, L) : d.AnnotationEditorType.DISABLE;
            }
            set annotationEditorMode({
              mode: v,
              editId: D = null
            }) {
              if (!t(this, x))
                throw new Error("The AnnotationEditor is not enabled.");
              if (t(this, L) !== v) {
                if (!P(v))
                  throw new Error(`Invalid AnnotationEditor mode: ${v}`);
                this.pdfDocument && (Q(this, L, v), this.eventBus.dispatch("annotationeditormodechanged", {
                  source: this,
                  mode: v
                }), t(this, x).updateMode(v, D));
              }
            }
            set annotationEditorParams({
              type: v,
              value: D
            }) {
              if (!t(this, x))
                throw new Error("The AnnotationEditor is not enabled.");
              t(this, x).updateParams(v, D);
            }
            refresh(v = !1, D = /* @__PURE__ */ Object.create(null)) {
              if (this.pdfDocument) {
                for (const ht of this._pages)
                  ht.update(D);
                t(this, N) !== null && (clearTimeout(t(this, N)), Q(this, N, null)), v || this.update();
              }
            }
          }
          b = new WeakMap(), c = new WeakMap(), L = new WeakMap(), x = new WeakMap(), z = new WeakMap(), J = new WeakMap(), M = new WeakMap(), Y = new WeakMap(), tt = new WeakMap(), q = new WeakMap(), U = new WeakMap(), at = new WeakMap(), $ = new WeakMap(), wt = new WeakMap(), Pt = new WeakMap(), N = new WeakMap(), a = new WeakMap(), p = new WeakSet(), Kn = function() {
            const v = this;
            return {
              get annotationEditorUIManager() {
                return t(v, x);
              },
              get annotationStorage() {
                var D;
                return (D = v.pdfDocument) == null ? void 0 : D.annotationStorage;
              },
              get downloadManager() {
                return v.downloadManager;
              },
              get enableScripting() {
                return !!v._scriptingManager;
              },
              get fieldObjectsPromise() {
                var D;
                return (D = v.pdfDocument) == null ? void 0 : D.getFieldObjects();
              },
              get findController() {
                return v.findController;
              },
              get hasJSActionsPromise() {
                var D;
                return (D = v.pdfDocument) == null ? void 0 : D.hasJSActions();
              },
              get linkService() {
                return v.linkService;
              }
            };
          }, T = new WeakSet(), Zn = function(v) {
            const D = {
              annotationEditorMode: t(this, L),
              annotationMode: t(this, z),
              textLayerMode: t(this, a)
            };
            return v && (!v.includes(d.PermissionFlag.COPY) && t(this, a) === r.TextLayerMode.ENABLE && (D.textLayerMode = r.TextLayerMode.ENABLE_PERMISSIONS), v.includes(d.PermissionFlag.MODIFY_CONTENTS) || (D.annotationEditorMode = d.AnnotationEditorType.DISABLE), !v.includes(d.PermissionFlag.MODIFY_ANNOTATIONS) && !v.includes(d.PermissionFlag.FILL_INTERACTIVE_FORMS) && t(this, z) === d.AnnotationMode.ENABLE_FORMS && (D.annotationMode = d.AnnotationMode.ENABLE)), D;
          }, H = new WeakSet(), Qn = function() {
            if (document.visibilityState === "hidden" || !this.container.offsetParent || this._getVisiblePages().views.length === 0)
              return Promise.resolve();
            const v = new Promise((D) => {
              Q(this, Pt, () => {
                document.visibilityState === "hidden" && (D(), document.removeEventListener("visibilitychange", t(this, Pt)), Q(this, Pt, null));
              }), document.addEventListener("visibilitychange", t(this, Pt));
            });
            return Promise.race([this._onePageRenderedCapability.promise, v]);
          }, nt = new WeakSet(), Jn = function(v, D) {
            const ht = document.getSelection(), {
              focusNode: ot,
              anchorNode: dt
            } = ht;
            if (dt && ot && ht.containsNode(t(this, q))) {
              if (t(this, tt) || v === r.TextLayerMode.ENABLE_PERMISSIONS) {
                D.preventDefault(), D.stopPropagation();
                return;
              }
              Q(this, tt, !0);
              const bt = this.container.style.cursor;
              this.container.style.cursor = "wait";
              const j = (ct) => Q(this, U, ct.key === "Escape");
              window.addEventListener("keydown", j), this.getAllText().then(async (ct) => {
                ct !== null && await navigator.clipboard.writeText(ct);
              }).catch((ct) => {
                console.warn(`Something goes wrong when extracting the text: ${ct.message}`);
              }).finally(() => {
                Q(this, tt, !1), Q(this, U, !1), window.removeEventListener("keydown", j), this.container.style.cursor = bt;
              }), D.preventDefault(), D.stopPropagation();
            }
          }, pt = new WeakSet(), xe = function() {
            if (this._scrollMode !== r.ScrollMode.PAGE)
              throw new Error("#ensurePageViewVisible: Invalid scrollMode value.");
            const v = this._currentPageNumber, D = t(this, wt), ht = this.viewer;
            if (ht.textContent = "", D.pages.length = 0, this._spreadMode === r.SpreadMode.NONE && !this.isInPresentationMode) {
              const ot = this._pages[v - 1];
              ht.append(ot.div), D.pages.push(ot);
            } else {
              const ot = /* @__PURE__ */ new Set(), dt = this._spreadMode - 1;
              dt === -1 ? ot.add(v - 1) : v % 2 !== dt ? (ot.add(v - 1), ot.add(v)) : (ot.add(v - 2), ot.add(v - 1));
              const bt = document.createElement("div");
              if (bt.className = "spread", this.isInPresentationMode) {
                const j = document.createElement("div");
                j.className = "dummyPage", bt.append(j);
              }
              for (const j of ot) {
                const ct = this._pages[j];
                ct && (bt.append(ct.div), D.pages.push(ct));
              }
              ht.append(bt);
            }
            D.scrollDown = v >= D.previousPageNumber, D.previousPageNumber = v;
          }, st = new WeakSet(), qe = function(v, D = null) {
            const {
              div: ht,
              id: ot
            } = v;
            if (this._currentPageNumber !== ot && this._setCurrentPageNumber(ot), this._scrollMode === r.ScrollMode.PAGE && (W(this, pt, xe).call(this), this.update()), !D && !this.isInPresentationMode) {
              const dt = ht.offsetLeft + ht.clientLeft, bt = dt + ht.clientWidth, {
                scrollLeft: j,
                clientWidth: ct
              } = this.container;
              (this._scrollMode === r.ScrollMode.HORIZONTAL || dt < j || bt > j + ct) && (D = {
                left: 0,
                top: 0
              });
            }
            (0, r.scrollIntoView)(ht, D), !this._currentScaleValue && this._location && (this._location = null);
          }, gt = new WeakSet(), ts = function(v) {
            return v === this._currentScale || Math.abs(v - this._currentScale) < 1e-15;
          }, It = new WeakSet(), Ki = function(v, D, {
            noScroll: ht = !1,
            preset: ot = !1,
            drawingDelay: dt = -1
          }) {
            if (this._currentScaleValue = D.toString(), W(this, gt, ts).call(this, v)) {
              ot && this.eventBus.dispatch("scalechanging", {
                source: this,
                scale: v,
                presetValue: D
              });
              return;
            }
            this.viewer.style.setProperty("--scale-factor", v * d.PixelsPerInch.PDF_TO_CSS_UNITS);
            const bt = dt >= 0 && dt < 1e3;
            if (this.refresh(!0, {
              scale: v,
              drawingDelay: bt ? dt : -1
            }), bt && Q(this, N, setTimeout(() => {
              Q(this, N, null), this.refresh();
            }, dt)), this._currentScale = v, !ht) {
              let j = this._currentPageNumber, ct;
              this._location && !(this.isInPresentationMode || this.isChangingPresentationMode) && (j = this._location.pageNumber, ct = [null, {
                name: "XYZ"
              }, this._location.left, this._location.top, null]), this.scrollPageIntoView({
                pageNumber: j,
                destArray: ct,
                allowNegativeOffset: !0
              });
            }
            this.eventBus.dispatch("scalechanging", {
              source: this,
              scale: v,
              presetValue: ot ? D : void 0
            }), this.defaultRenderingQueue && this.update();
          }, ut = new WeakSet(), es = function() {
            return this._spreadMode !== r.SpreadMode.NONE && this._scrollMode !== r.ScrollMode.HORIZONTAL ? 2 : 1;
          }, it = new WeakSet(), oe = function(v, D) {
            let ht = parseFloat(v);
            if (ht > 0)
              D.preset = !1, W(this, It, Ki).call(this, ht, v, D);
            else {
              const ot = this._pages[this._currentPageNumber - 1];
              if (!ot)
                return;
              let dt = r.SCROLLBAR_PADDING, bt = r.VERTICAL_PADDING;
              this.isInPresentationMode ? (dt = bt = 4, this._spreadMode !== r.SpreadMode.NONE && (dt *= 2)) : this.removePageBorders ? dt = bt = 0 : this._scrollMode === r.ScrollMode.HORIZONTAL && ([dt, bt] = [bt, dt]);
              const j = (this.container.clientWidth - dt) / ot.width * ot.scale / t(this, ut, es), ct = (this.container.clientHeight - bt) / ot.height * ot.scale;
              switch (v) {
                case "page-actual":
                  ht = 1;
                  break;
                case "page-width":
                  ht = j;
                  break;
                case "page-height":
                  ht = ct;
                  break;
                case "page-fit":
                  ht = Math.min(j, ct);
                  break;
                case "auto":
                  const xt = (0, r.isPortraitOrientation)(ot) ? j : Math.min(ct, j);
                  ht = Math.min(r.MAX_AUTO_SCALE, xt);
                  break;
                default:
                  console.error(`#setScale: "${v}" is an unknown zoom value.`);
                  return;
              }
              D.preset = !0, W(this, It, Ki).call(this, ht, v, D);
            }
          }, mt = new WeakSet(), Zi = function() {
            const v = this._pages[this._currentPageNumber - 1];
            this.isInPresentationMode && W(this, it, oe).call(this, this._currentScaleValue, {
              noScroll: !0
            }), W(this, st, qe).call(this, v);
          }, kt = new WeakSet(), ns = async function(v) {
            var D, ht;
            if (v.pdfPage)
              return v.pdfPage;
            try {
              const ot = await this.pdfDocument.getPage(v.id);
              return v.pdfPage || v.setPdfPage(ot), (ht = (D = this.linkService)._cachedPageNumber) != null && ht.call(D, ot.ref) || this.linkService.cachePageRef(v.id, ot.ref), ot;
            } catch (ot) {
              return console.error("Unable to get page for page view", ot), null;
            }
          }, Ut = new WeakSet(), ss = function(v) {
            var D, ht;
            if (((D = v.first) == null ? void 0 : D.id) === 1)
              return !0;
            if (((ht = v.last) == null ? void 0 : ht.id) === this.pagesCount)
              return !1;
            switch (this._scrollMode) {
              case r.ScrollMode.PAGE:
                return t(this, wt).scrollDown;
              case r.ScrollMode.HORIZONTAL:
                return this.scroll.right;
            }
            return this.scroll.down;
          }, Gt = new WeakSet(), Qi = function(v = this.container.clientHeight) {
            v !== t(this, at) && (Q(this, at, v), r.docStyle.setProperty("--viewer-container-height", `${v}px`));
          }, Xt = new WeakSet(), rs = function(v) {
            for (const D of v)
              if (D.target === this.container) {
                W(this, Gt, Qi).call(this, Math.floor(D.borderBoxSize[0].blockSize)), Q(this, J, null);
                break;
              }
          }, F.PDFViewer = u;
        },
        /* 26 */
        /***/
        (B, F, f) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFRenderingQueue = void 0;
          var d = f(4), r = f(2);
          const I = 3e4;
          class k {
            constructor() {
              this.pdfViewer = null, this.pdfThumbnailViewer = null, this.onIdle = null, this.highestPriorityPage = null, this.idleTimeout = null, this.printing = !1, this.isThumbnailViewEnabled = !1, Object.defineProperty(this, "hasViewer", {
                value: () => !!this.pdfViewer
              });
            }
            setViewer(h) {
              this.pdfViewer = h;
            }
            setThumbnailViewer(h) {
              this.pdfThumbnailViewer = h;
            }
            isHighestPriority(h) {
              return this.highestPriorityPage === h.renderingId;
            }
            renderHighestPriority(h) {
              var _;
              this.idleTimeout && (clearTimeout(this.idleTimeout), this.idleTimeout = null), !this.pdfViewer.forceRendering(h) && (this.isThumbnailViewEnabled && ((_ = this.pdfThumbnailViewer) != null && _.forceRendering()) || this.printing || this.onIdle && (this.idleTimeout = setTimeout(this.onIdle.bind(this), I)));
            }
            getHighestPriority(h, _, m, P = !1) {
              const A = h.views, u = A.length;
              if (u === 0)
                return null;
              for (let b = 0; b < u; b++) {
                const c = A[b].view;
                if (!this.isViewFinished(c))
                  return c;
              }
              const S = h.first.id, s = h.last.id;
              if (s - S + 1 > u) {
                const b = h.ids;
                for (let c = 1, L = s - S; c < L; c++) {
                  const x = m ? S + c : s - c;
                  if (b.has(x))
                    continue;
                  const z = _[x - 1];
                  if (!this.isViewFinished(z))
                    return z;
                }
              }
              let i = m ? s : S - 2, w = _[i];
              return w && !this.isViewFinished(w) || P && (i += m ? 1 : -1, w = _[i], w && !this.isViewFinished(w)) ? w : null;
            }
            isViewFinished(h) {
              return h.renderingState === r.RenderingStates.FINISHED;
            }
            renderView(h) {
              switch (h.renderingState) {
                case r.RenderingStates.FINISHED:
                  return !1;
                case r.RenderingStates.PAUSED:
                  this.highestPriorityPage = h.renderingId, h.resume();
                  break;
                case r.RenderingStates.RUNNING:
                  this.highestPriorityPage = h.renderingId;
                  break;
                case r.RenderingStates.INITIAL:
                  this.highestPriorityPage = h.renderingId, h.draw().finally(() => {
                    this.renderHighestPriority();
                  }).catch((_) => {
                    _ instanceof d.RenderingCancelledException || console.error(`renderView: "${_}"`);
                  });
                  break;
              }
              return !0;
            }
          }
          F.PDFRenderingQueue = k;
        }
        /******/
      ], n = {};
      function g(B) {
        var F = n[B];
        if (F !== void 0)
          return F.exports;
        var f = n[B] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return C[B](f, f.exports, g), f.exports;
      }
      var G = {};
      return (() => {
        var B = G;
        Object.defineProperty(B, "__esModule", {
          value: !0
        }), Object.defineProperty(B, "AnnotationLayerBuilder", {
          enumerable: !0,
          get: function() {
            return r.AnnotationLayerBuilder;
          }
        }), Object.defineProperty(B, "DownloadManager", {
          enumerable: !0,
          get: function() {
            return I.DownloadManager;
          }
        }), Object.defineProperty(B, "EventBus", {
          enumerable: !0,
          get: function() {
            return k.EventBus;
          }
        }), Object.defineProperty(B, "FindState", {
          enumerable: !0,
          get: function() {
            return F.FindState;
          }
        }), Object.defineProperty(B, "GenericL10n", {
          enumerable: !0,
          get: function() {
            return y.GenericL10n;
          }
        }), Object.defineProperty(B, "LinkTarget", {
          enumerable: !0,
          get: function() {
            return f.LinkTarget;
          }
        }), Object.defineProperty(B, "NullL10n", {
          enumerable: !0,
          get: function() {
            return h.NullL10n;
          }
        }), Object.defineProperty(B, "PDFFindController", {
          enumerable: !0,
          get: function() {
            return F.PDFFindController;
          }
        }), Object.defineProperty(B, "PDFHistory", {
          enumerable: !0,
          get: function() {
            return _.PDFHistory;
          }
        }), Object.defineProperty(B, "PDFLinkService", {
          enumerable: !0,
          get: function() {
            return f.PDFLinkService;
          }
        }), Object.defineProperty(B, "PDFPageView", {
          enumerable: !0,
          get: function() {
            return m.PDFPageView;
          }
        }), Object.defineProperty(B, "PDFScriptingManager", {
          enumerable: !0,
          get: function() {
            return P.PDFScriptingManager;
          }
        }), Object.defineProperty(B, "PDFSinglePageViewer", {
          enumerable: !0,
          get: function() {
            return A.PDFSinglePageViewer;
          }
        }), Object.defineProperty(B, "PDFViewer", {
          enumerable: !0,
          get: function() {
            return u.PDFViewer;
          }
        }), Object.defineProperty(B, "ProgressBar", {
          enumerable: !0,
          get: function() {
            return d.ProgressBar;
          }
        }), Object.defineProperty(B, "RenderingStates", {
          enumerable: !0,
          get: function() {
            return d.RenderingStates;
          }
        }), Object.defineProperty(B, "ScrollMode", {
          enumerable: !0,
          get: function() {
            return d.ScrollMode;
          }
        }), Object.defineProperty(B, "SimpleLinkService", {
          enumerable: !0,
          get: function() {
            return f.SimpleLinkService;
          }
        }), Object.defineProperty(B, "SpreadMode", {
          enumerable: !0,
          get: function() {
            return d.SpreadMode;
          }
        }), Object.defineProperty(B, "StructTreeLayerBuilder", {
          enumerable: !0,
          get: function() {
            return S.StructTreeLayerBuilder;
          }
        }), Object.defineProperty(B, "TextLayerBuilder", {
          enumerable: !0,
          get: function() {
            return s.TextLayerBuilder;
          }
        }), Object.defineProperty(B, "XfaLayerBuilder", {
          enumerable: !0,
          get: function() {
            return i.XfaLayerBuilder;
          }
        }), Object.defineProperty(B, "parseQueryString", {
          enumerable: !0,
          get: function() {
            return d.parseQueryString;
          }
        });
        var F = g(1), f = g(5), d = g(2), r = g(6), I = g(8), k = g(9), y = g(10), h = g(7), _ = g(12), m = g(13), P = g(21), A = g(24), u = g(25), S = g(16), s = g(19), i = g(20);
      })(), G;
    })()
  ));
})(pdf_viewer$1);
var pdf_viewerExports = pdf_viewer$1.exports;
const pdf_viewer = "", MAX_NUM_SCALING_STEPS = 3;
class ViewThumbnailsButton {
  constructor() {
    this.show = !1, this.hasBuilt = !1;
  }
  build(e) {
    return this.btn = document.createElement("button"), this.btn.className = "outline-none border-none hover:bg-gray-100 p-2 text-gray-400", this.btn.title = "view thumbnails", this.btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-layout-list"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M14 4h7"/><path d="M14 9h7"/><path d="M14 15h7"/><path d="M14 20h7"/></svg>', this.btn;
  }
  async onClick(e) {
    this.hasBuilt || (this.prepareContainer(e.bodyContainer), await this._build(e), this.hasBuilt = !0), this.toggleShow();
  }
  toggleShow() {
    this.show = !this.show, this.thumbnailContainer.style.display = this.show ? "flex" : "none", this.btn.classList.toggle("text-gray-400");
  }
  position() {
    return "left";
  }
  prepareContainer(e) {
    e.style.position = "relative", e.style.display = "flex", this.thumbnailContainer = document.createElement("div");
    let C = e.getBoundingClientRect(), n = 10, g = window.innerHeight - C.top - n;
    this.thumbnailContainer.className = "gap-y-2 py-2 px-4 fixed w-44 bg-gray-50 z-10 rounded h-full flex flex-col overflow-y-auto left-2", this.thumbnailContainer.style.height = g + "px", this.thumbnailContainer.style.display = "none", e.prepend(this.thumbnailContainer);
  }
  async _build(e) {
    let C = e.pdfDocument.numPages;
    for (let n = 1; n <= C; n++) {
      let g = await e.pdfDocument.getPage(n), G = await this.generateThumbnail(g);
      G.dataset.id = n.toString(), G.title = "Page " + n, G.classList.add("cursor-pointer", "border"), G.addEventListener("click", () => {
        let B = e.pdfContainer.querySelector(
          `[data-page-number="${n}"]`
        );
        e.bodyContainer.scrollTop = e.bodyContainer.scrollTop + parseFloat(B.getBoundingClientRect().top.toString()) - e.buttonsContainer.getBoundingClientRect().height;
      }), this.thumbnailContainer.append(G);
    }
  }
  async generateThumbnail(e) {
    let C = document.createElement("img"), n = await this.renderPage(e);
    return C.src = n.toDataURL(), C;
  }
  async renderPage(e) {
    let C = document.createElement("canvas"), n = C.getContext("2d");
    const g = e.getViewport({ scale: 0.5 });
    C.width = Math.floor(g.width), C.height = Math.floor(g.height), C.style.width = Math.floor(g.width) + "px", C.style.height = Math.floor(g.height) + "px";
    const G = {
      canvasContext: n,
      viewport: g
    };
    return await e.render(G).promise, this._reduceImage(C), C;
  }
  /**
   * @private
   */
  _reduceImage(e) {
    let C = e.width << MAX_NUM_SCALING_STEPS, n = e.height << MAX_NUM_SCALING_STEPS;
    const g = document.createElement("canvas");
    g.width = C, g.height = n;
    const G = g.getContext("2d", { alpha: !1 });
    for (G.save(), G.fillStyle = "rgb(255, 255, 255)", G.fillRect(0, 0, C, n), G.restore(); C > e.width || n > e.height; )
      C >>= 1, n >>= 1;
    for (G.drawImage(
      e,
      0,
      0,
      e.width,
      e.height,
      0,
      0,
      C,
      n
    ); C > 2 * e.width; )
      G.drawImage(
        g,
        0,
        0,
        C,
        n,
        0,
        0,
        C >> 1,
        n >> 1
      ), C >>= 1, n >>= 1;
    return e.getContext("2d").drawImage(
      g,
      0,
      0,
      C,
      n,
      0,
      0,
      e.width,
      e.height
    ), e;
  }
  reset() {
    var e, C;
    this.show = !1, this.hasBuilt = !1, (e = this.thumbnailContainer) == null || e.remove(), (C = this.btn) == null || C.remove();
  }
}
class DownloadButton {
  build(e) {
    return this.btn = document.createElement("button"), this.btn.className = "outline-none border-none hover:bg-gray-100 p-2", this.btn.title = "download file", this.btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>', this.btn;
  }
  onClick(e) {
    new pdf_viewerExports.DownloadManager().downloadUrl(e.url, "", "");
  }
  position() {
    return "right";
  }
  reset() {
    var e;
    (e = this.btn) == null || e.remove();
  }
}
var defaultInstanceSettings = {
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
}, defaultTweenSettings = {
  duration: 1e3,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
}, validTransforms = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"], cache = {
  CSS: {},
  springs: {}
};
function minMax(E, e, C) {
  return Math.min(Math.max(E, e), C);
}
function stringContains(E, e) {
  return E.indexOf(e) > -1;
}
function applyArguments(E, e) {
  return E.apply(null, e);
}
var is = {
  arr: function(E) {
    return Array.isArray(E);
  },
  obj: function(E) {
    return stringContains(Object.prototype.toString.call(E), "Object");
  },
  pth: function(E) {
    return is.obj(E) && E.hasOwnProperty("totalLength");
  },
  svg: function(E) {
    return E instanceof SVGElement;
  },
  inp: function(E) {
    return E instanceof HTMLInputElement;
  },
  dom: function(E) {
    return E.nodeType || is.svg(E);
  },
  str: function(E) {
    return typeof E == "string";
  },
  fnc: function(E) {
    return typeof E == "function";
  },
  und: function(E) {
    return typeof E > "u";
  },
  nil: function(E) {
    return is.und(E) || E === null;
  },
  hex: function(E) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(E);
  },
  rgb: function(E) {
    return /^rgb/.test(E);
  },
  hsl: function(E) {
    return /^hsl/.test(E);
  },
  col: function(E) {
    return is.hex(E) || is.rgb(E) || is.hsl(E);
  },
  key: function(E) {
    return !defaultInstanceSettings.hasOwnProperty(E) && !defaultTweenSettings.hasOwnProperty(E) && E !== "targets" && E !== "keyframes";
  }
};
function parseEasingParameters(E) {
  var e = /\(([^)]+)\)/.exec(E);
  return e ? e[1].split(",").map(function(C) {
    return parseFloat(C);
  }) : [];
}
function spring(E, e) {
  var C = parseEasingParameters(E), n = minMax(is.und(C[0]) ? 1 : C[0], 0.1, 100), g = minMax(is.und(C[1]) ? 100 : C[1], 0.1, 100), G = minMax(is.und(C[2]) ? 10 : C[2], 0.1, 100), B = minMax(is.und(C[3]) ? 0 : C[3], 0.1, 100), F = Math.sqrt(g / n), f = G / (2 * Math.sqrt(g * n)), d = f < 1 ? F * Math.sqrt(1 - f * f) : 0, r = 1, I = f < 1 ? (f * F + -B) / d : -B + F;
  function k(h) {
    var _ = e ? e * h / 1e3 : h;
    return f < 1 ? _ = Math.exp(-_ * f * F) * (r * Math.cos(d * _) + I * Math.sin(d * _)) : _ = (r + I * _) * Math.exp(-_ * F), h === 0 || h === 1 ? h : 1 - _;
  }
  function y() {
    var h = cache.springs[E];
    if (h)
      return h;
    for (var _ = 1 / 6, m = 0, P = 0; ; )
      if (m += _, k(m) === 1) {
        if (P++, P >= 16)
          break;
      } else
        P = 0;
    var A = m * _ * 1e3;
    return cache.springs[E] = A, A;
  }
  return e ? k : y;
}
function steps(E) {
  return E === void 0 && (E = 10), function(e) {
    return Math.ceil(minMax(e, 1e-6, 1) * E) * (1 / E);
  };
}
var bezier = function() {
  var E = 11, e = 1 / (E - 1);
  function C(r, I) {
    return 1 - 3 * I + 3 * r;
  }
  function n(r, I) {
    return 3 * I - 6 * r;
  }
  function g(r) {
    return 3 * r;
  }
  function G(r, I, k) {
    return ((C(I, k) * r + n(I, k)) * r + g(I)) * r;
  }
  function B(r, I, k) {
    return 3 * C(I, k) * r * r + 2 * n(I, k) * r + g(I);
  }
  function F(r, I, k, y, h) {
    var _, m, P = 0;
    do
      m = I + (k - I) / 2, _ = G(m, y, h) - r, _ > 0 ? k = m : I = m;
    while (Math.abs(_) > 1e-7 && ++P < 10);
    return m;
  }
  function f(r, I, k, y) {
    for (var h = 0; h < 4; ++h) {
      var _ = B(I, k, y);
      if (_ === 0)
        return I;
      var m = G(I, k, y) - r;
      I -= m / _;
    }
    return I;
  }
  function d(r, I, k, y) {
    if (!(0 <= r && r <= 1 && 0 <= k && k <= 1))
      return;
    var h = new Float32Array(E);
    if (r !== I || k !== y)
      for (var _ = 0; _ < E; ++_)
        h[_] = G(_ * e, r, k);
    function m(P) {
      for (var A = 0, u = 1, S = E - 1; u !== S && h[u] <= P; ++u)
        A += e;
      --u;
      var s = (P - h[u]) / (h[u + 1] - h[u]), i = A + s * e, w = B(i, r, k);
      return w >= 1e-3 ? f(P, i, r, k) : w === 0 ? i : F(P, A, A + e, r, k);
    }
    return function(P) {
      return r === I && k === y || P === 0 || P === 1 ? P : G(m(P), I, y);
    };
  }
  return d;
}(), penner = function() {
  var E = { linear: function() {
    return function(n) {
      return n;
    };
  } }, e = {
    Sine: function() {
      return function(n) {
        return 1 - Math.cos(n * Math.PI / 2);
      };
    },
    Circ: function() {
      return function(n) {
        return 1 - Math.sqrt(1 - n * n);
      };
    },
    Back: function() {
      return function(n) {
        return n * n * (3 * n - 2);
      };
    },
    Bounce: function() {
      return function(n) {
        for (var g, G = 4; n < ((g = Math.pow(2, --G)) - 1) / 11; )
          ;
        return 1 / Math.pow(4, 3 - G) - 7.5625 * Math.pow((g * 3 - 2) / 22 - n, 2);
      };
    },
    Elastic: function(n, g) {
      n === void 0 && (n = 1), g === void 0 && (g = 0.5);
      var G = minMax(n, 1, 10), B = minMax(g, 0.1, 2);
      return function(F) {
        return F === 0 || F === 1 ? F : -G * Math.pow(2, 10 * (F - 1)) * Math.sin((F - 1 - B / (Math.PI * 2) * Math.asin(1 / G)) * (Math.PI * 2) / B);
      };
    }
  }, C = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
  return C.forEach(function(n, g) {
    e[n] = function() {
      return function(G) {
        return Math.pow(G, g + 2);
      };
    };
  }), Object.keys(e).forEach(function(n) {
    var g = e[n];
    E["easeIn" + n] = g, E["easeOut" + n] = function(G, B) {
      return function(F) {
        return 1 - g(G, B)(1 - F);
      };
    }, E["easeInOut" + n] = function(G, B) {
      return function(F) {
        return F < 0.5 ? g(G, B)(F * 2) / 2 : 1 - g(G, B)(F * -2 + 2) / 2;
      };
    }, E["easeOutIn" + n] = function(G, B) {
      return function(F) {
        return F < 0.5 ? (1 - g(G, B)(1 - F * 2)) / 2 : (g(G, B)(F * 2 - 1) + 1) / 2;
      };
    };
  }), E;
}();
function parseEasings(E, e) {
  if (is.fnc(E))
    return E;
  var C = E.split("(")[0], n = penner[C], g = parseEasingParameters(E);
  switch (C) {
    case "spring":
      return spring(E, e);
    case "cubicBezier":
      return applyArguments(bezier, g);
    case "steps":
      return applyArguments(steps, g);
    default:
      return applyArguments(n, g);
  }
}
function selectString(E) {
  try {
    var e = document.querySelectorAll(E);
    return e;
  } catch {
    return;
  }
}
function filterArray(E, e) {
  for (var C = E.length, n = arguments.length >= 2 ? arguments[1] : void 0, g = [], G = 0; G < C; G++)
    if (G in E) {
      var B = E[G];
      e.call(n, B, G, E) && g.push(B);
    }
  return g;
}
function flattenArray(E) {
  return E.reduce(function(e, C) {
    return e.concat(is.arr(C) ? flattenArray(C) : C);
  }, []);
}
function toArray(E) {
  return is.arr(E) ? E : (is.str(E) && (E = selectString(E) || E), E instanceof NodeList || E instanceof HTMLCollection ? [].slice.call(E) : [E]);
}
function arrayContains(E, e) {
  return E.some(function(C) {
    return C === e;
  });
}
function cloneObject(E) {
  var e = {};
  for (var C in E)
    e[C] = E[C];
  return e;
}
function replaceObjectProps(E, e) {
  var C = cloneObject(E);
  for (var n in E)
    C[n] = e.hasOwnProperty(n) ? e[n] : E[n];
  return C;
}
function mergeObjects(E, e) {
  var C = cloneObject(E);
  for (var n in e)
    C[n] = is.und(E[n]) ? e[n] : E[n];
  return C;
}
function rgbToRgba(E) {
  var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(E);
  return e ? "rgba(" + e[1] + ",1)" : E;
}
function hexToRgba(E) {
  var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, C = E.replace(e, function(F, f, d, r) {
    return f + f + d + d + r + r;
  }), n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(C), g = parseInt(n[1], 16), G = parseInt(n[2], 16), B = parseInt(n[3], 16);
  return "rgba(" + g + "," + G + "," + B + ",1)";
}
function hslToRgba(E) {
  var e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(E) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(E), C = parseInt(e[1], 10) / 360, n = parseInt(e[2], 10) / 100, g = parseInt(e[3], 10) / 100, G = e[4] || 1;
  function B(k, y, h) {
    return h < 0 && (h += 1), h > 1 && (h -= 1), h < 1 / 6 ? k + (y - k) * 6 * h : h < 1 / 2 ? y : h < 2 / 3 ? k + (y - k) * (2 / 3 - h) * 6 : k;
  }
  var F, f, d;
  if (n == 0)
    F = f = d = g;
  else {
    var r = g < 0.5 ? g * (1 + n) : g + n - g * n, I = 2 * g - r;
    F = B(I, r, C + 1 / 3), f = B(I, r, C), d = B(I, r, C - 1 / 3);
  }
  return "rgba(" + F * 255 + "," + f * 255 + "," + d * 255 + "," + G + ")";
}
function colorToRgb(E) {
  if (is.rgb(E))
    return rgbToRgba(E);
  if (is.hex(E))
    return hexToRgba(E);
  if (is.hsl(E))
    return hslToRgba(E);
}
function getUnit(E) {
  var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(E);
  if (e)
    return e[1];
}
function getTransformUnit(E) {
  if (stringContains(E, "translate") || E === "perspective")
    return "px";
  if (stringContains(E, "rotate") || stringContains(E, "skew"))
    return "deg";
}
function getFunctionValue(E, e) {
  return is.fnc(E) ? E(e.target, e.id, e.total) : E;
}
function getAttribute(E, e) {
  return E.getAttribute(e);
}
function convertPxToUnit(E, e, C) {
  var n = getUnit(e);
  if (arrayContains([C, "deg", "rad", "turn"], n))
    return e;
  var g = cache.CSS[e + C];
  if (!is.und(g))
    return g;
  var G = 100, B = document.createElement(E.tagName), F = E.parentNode && E.parentNode !== document ? E.parentNode : document.body;
  F.appendChild(B), B.style.position = "absolute", B.style.width = G + C;
  var f = G / B.offsetWidth;
  F.removeChild(B);
  var d = f * parseFloat(e);
  return cache.CSS[e + C] = d, d;
}
function getCSSValue(E, e, C) {
  if (e in E.style) {
    var n = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), g = E.style[e] || getComputedStyle(E).getPropertyValue(n) || "0";
    return C ? convertPxToUnit(E, g, C) : g;
  }
}
function getAnimationType(E, e) {
  if (is.dom(E) && !is.inp(E) && (!is.nil(getAttribute(E, e)) || is.svg(E) && E[e]))
    return "attribute";
  if (is.dom(E) && arrayContains(validTransforms, e))
    return "transform";
  if (is.dom(E) && e !== "transform" && getCSSValue(E, e))
    return "css";
  if (E[e] != null)
    return "object";
}
function getElementTransforms(E) {
  if (is.dom(E)) {
    for (var e = E.style.transform || "", C = /(\w+)\(([^)]*)\)/g, n = /* @__PURE__ */ new Map(), g; g = C.exec(e); )
      n.set(g[1], g[2]);
    return n;
  }
}
function getTransformValue(E, e, C, n) {
  var g = stringContains(e, "scale") ? 1 : 0 + getTransformUnit(e), G = getElementTransforms(E).get(e) || g;
  return C && (C.transforms.list.set(e, G), C.transforms.last = e), n ? convertPxToUnit(E, G, n) : G;
}
function getOriginalTargetValue(E, e, C, n) {
  switch (getAnimationType(E, e)) {
    case "transform":
      return getTransformValue(E, e, n, C);
    case "css":
      return getCSSValue(E, e, C);
    case "attribute":
      return getAttribute(E, e);
    default:
      return E[e] || 0;
  }
}
function getRelativeValue(E, e) {
  var C = /^(\*=|\+=|-=)/.exec(E);
  if (!C)
    return E;
  var n = getUnit(E) || 0, g = parseFloat(e), G = parseFloat(E.replace(C[0], ""));
  switch (C[0][0]) {
    case "+":
      return g + G + n;
    case "-":
      return g - G + n;
    case "*":
      return g * G + n;
  }
}
function validateValue(E, e) {
  if (is.col(E))
    return colorToRgb(E);
  if (/\s/g.test(E))
    return E;
  var C = getUnit(E), n = C ? E.substr(0, E.length - C.length) : E;
  return e ? n + e : n;
}
function getDistance(E, e) {
  return Math.sqrt(Math.pow(e.x - E.x, 2) + Math.pow(e.y - E.y, 2));
}
function getCircleLength(E) {
  return Math.PI * 2 * getAttribute(E, "r");
}
function getRectLength(E) {
  return getAttribute(E, "width") * 2 + getAttribute(E, "height") * 2;
}
function getLineLength(E) {
  return getDistance(
    { x: getAttribute(E, "x1"), y: getAttribute(E, "y1") },
    { x: getAttribute(E, "x2"), y: getAttribute(E, "y2") }
  );
}
function getPolylineLength(E) {
  for (var e = E.points, C = 0, n, g = 0; g < e.numberOfItems; g++) {
    var G = e.getItem(g);
    g > 0 && (C += getDistance(n, G)), n = G;
  }
  return C;
}
function getPolygonLength(E) {
  var e = E.points;
  return getPolylineLength(E) + getDistance(e.getItem(e.numberOfItems - 1), e.getItem(0));
}
function getTotalLength(E) {
  if (E.getTotalLength)
    return E.getTotalLength();
  switch (E.tagName.toLowerCase()) {
    case "circle":
      return getCircleLength(E);
    case "rect":
      return getRectLength(E);
    case "line":
      return getLineLength(E);
    case "polyline":
      return getPolylineLength(E);
    case "polygon":
      return getPolygonLength(E);
  }
}
function setDashoffset(E) {
  var e = getTotalLength(E);
  return E.setAttribute("stroke-dasharray", e), e;
}
function getParentSvgEl(E) {
  for (var e = E.parentNode; is.svg(e) && is.svg(e.parentNode); )
    e = e.parentNode;
  return e;
}
function getParentSvg(E, e) {
  var C = e || {}, n = C.el || getParentSvgEl(E), g = n.getBoundingClientRect(), G = getAttribute(n, "viewBox"), B = g.width, F = g.height, f = C.viewBox || (G ? G.split(" ") : [0, 0, B, F]);
  return {
    el: n,
    viewBox: f,
    x: f[0] / 1,
    y: f[1] / 1,
    w: B,
    h: F,
    vW: f[2],
    vH: f[3]
  };
}
function getPath(E, e) {
  var C = is.str(E) ? selectString(E)[0] : E, n = e || 100;
  return function(g) {
    return {
      property: g,
      el: C,
      svg: getParentSvg(C),
      totalLength: getTotalLength(C) * (n / 100)
    };
  };
}
function getPathProgress(E, e, C) {
  function n(r) {
    r === void 0 && (r = 0);
    var I = e + r >= 1 ? e + r : 0;
    return E.el.getPointAtLength(I);
  }
  var g = getParentSvg(E.el, E.svg), G = n(), B = n(-1), F = n(1), f = C ? 1 : g.w / g.vW, d = C ? 1 : g.h / g.vH;
  switch (E.property) {
    case "x":
      return (G.x - g.x) * f;
    case "y":
      return (G.y - g.y) * d;
    case "angle":
      return Math.atan2(F.y - B.y, F.x - B.x) * 180 / Math.PI;
  }
}
function decomposeValue(E, e) {
  var C = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, n = validateValue(is.pth(E) ? E.totalLength : E, e) + "";
  return {
    original: n,
    numbers: n.match(C) ? n.match(C).map(Number) : [0],
    strings: is.str(E) || e ? n.split(C) : []
  };
}
function parseTargets(E) {
  var e = E ? flattenArray(is.arr(E) ? E.map(toArray) : toArray(E)) : [];
  return filterArray(e, function(C, n, g) {
    return g.indexOf(C) === n;
  });
}
function getAnimatables(E) {
  var e = parseTargets(E);
  return e.map(function(C, n) {
    return { target: C, id: n, total: e.length, transforms: { list: getElementTransforms(C) } };
  });
}
function normalizePropertyTweens(E, e) {
  var C = cloneObject(e);
  if (/^spring/.test(C.easing) && (C.duration = spring(C.easing)), is.arr(E)) {
    var n = E.length, g = n === 2 && !is.obj(E[0]);
    g ? E = { value: E } : is.fnc(e.duration) || (C.duration = e.duration / n);
  }
  var G = is.arr(E) ? E : [E];
  return G.map(function(B, F) {
    var f = is.obj(B) && !is.pth(B) ? B : { value: B };
    return is.und(f.delay) && (f.delay = F ? 0 : e.delay), is.und(f.endDelay) && (f.endDelay = F === G.length - 1 ? e.endDelay : 0), f;
  }).map(function(B) {
    return mergeObjects(B, C);
  });
}
function flattenKeyframes(E) {
  for (var e = filterArray(flattenArray(E.map(function(G) {
    return Object.keys(G);
  })), function(G) {
    return is.key(G);
  }).reduce(function(G, B) {
    return G.indexOf(B) < 0 && G.push(B), G;
  }, []), C = {}, n = function(G) {
    var B = e[G];
    C[B] = E.map(function(F) {
      var f = {};
      for (var d in F)
        is.key(d) ? d == B && (f.value = F[d]) : f[d] = F[d];
      return f;
    });
  }, g = 0; g < e.length; g++)
    n(g);
  return C;
}
function getProperties(E, e) {
  var C = [], n = e.keyframes;
  n && (e = mergeObjects(flattenKeyframes(n), e));
  for (var g in e)
    is.key(g) && C.push({
      name: g,
      tweens: normalizePropertyTweens(e[g], E)
    });
  return C;
}
function normalizeTweenValues(E, e) {
  var C = {};
  for (var n in E) {
    var g = getFunctionValue(E[n], e);
    is.arr(g) && (g = g.map(function(G) {
      return getFunctionValue(G, e);
    }), g.length === 1 && (g = g[0])), C[n] = g;
  }
  return C.duration = parseFloat(C.duration), C.delay = parseFloat(C.delay), C;
}
function normalizeTweens(E, e) {
  var C;
  return E.tweens.map(function(n) {
    var g = normalizeTweenValues(n, e), G = g.value, B = is.arr(G) ? G[1] : G, F = getUnit(B), f = getOriginalTargetValue(e.target, E.name, F, e), d = C ? C.to.original : f, r = is.arr(G) ? G[0] : d, I = getUnit(r) || getUnit(f), k = F || I;
    return is.und(B) && (B = d), g.from = decomposeValue(r, k), g.to = decomposeValue(getRelativeValue(B, r), k), g.start = C ? C.end : 0, g.end = g.start + g.delay + g.duration + g.endDelay, g.easing = parseEasings(g.easing, g.duration), g.isPath = is.pth(G), g.isPathTargetInsideSVG = g.isPath && is.svg(e.target), g.isColor = is.col(g.from.original), g.isColor && (g.round = 1), C = g, g;
  });
}
var setProgressValue = {
  css: function(E, e, C) {
    return E.style[e] = C;
  },
  attribute: function(E, e, C) {
    return E.setAttribute(e, C);
  },
  object: function(E, e, C) {
    return E[e] = C;
  },
  transform: function(E, e, C, n, g) {
    if (n.list.set(e, C), e === n.last || g) {
      var G = "";
      n.list.forEach(function(B, F) {
        G += F + "(" + B + ") ";
      }), E.style.transform = G;
    }
  }
};
function setTargetsValue(E, e) {
  var C = getAnimatables(E);
  C.forEach(function(n) {
    for (var g in e) {
      var G = getFunctionValue(e[g], n), B = n.target, F = getUnit(G), f = getOriginalTargetValue(B, g, F, n), d = F || getUnit(f), r = getRelativeValue(validateValue(G, d), f), I = getAnimationType(B, g);
      setProgressValue[I](B, g, r, n.transforms, !0);
    }
  });
}
function createAnimation(E, e) {
  var C = getAnimationType(E.target, e.name);
  if (C) {
    var n = normalizeTweens(e, E), g = n[n.length - 1];
    return {
      type: C,
      property: e.name,
      animatable: E,
      tweens: n,
      duration: g.end,
      delay: n[0].delay,
      endDelay: g.endDelay
    };
  }
}
function getAnimations(E, e) {
  return filterArray(flattenArray(E.map(function(C) {
    return e.map(function(n) {
      return createAnimation(C, n);
    });
  })), function(C) {
    return !is.und(C);
  });
}
function getInstanceTimings(E, e) {
  var C = E.length, n = function(G) {
    return G.timelineOffset ? G.timelineOffset : 0;
  }, g = {};
  return g.duration = C ? Math.max.apply(Math, E.map(function(G) {
    return n(G) + G.duration;
  })) : e.duration, g.delay = C ? Math.min.apply(Math, E.map(function(G) {
    return n(G) + G.delay;
  })) : e.delay, g.endDelay = C ? g.duration - Math.max.apply(Math, E.map(function(G) {
    return n(G) + G.duration - G.endDelay;
  })) : e.endDelay, g;
}
var instanceID = 0;
function createNewInstance(E) {
  var e = replaceObjectProps(defaultInstanceSettings, E), C = replaceObjectProps(defaultTweenSettings, E), n = getProperties(C, E), g = getAnimatables(E.targets), G = getAnimations(g, n), B = getInstanceTimings(G, C), F = instanceID;
  return instanceID++, mergeObjects(e, {
    id: F,
    children: [],
    animatables: g,
    animations: G,
    duration: B.duration,
    delay: B.delay,
    endDelay: B.endDelay
  });
}
var activeInstances = [], engine = function() {
  var E;
  function e() {
    !E && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0 && (E = requestAnimationFrame(C));
  }
  function C(g) {
    for (var G = activeInstances.length, B = 0; B < G; ) {
      var F = activeInstances[B];
      F.paused ? (activeInstances.splice(B, 1), G--) : (F.tick(g), B++);
    }
    E = B > 0 ? requestAnimationFrame(C) : void 0;
  }
  function n() {
    anime.suspendWhenDocumentHidden && (isDocumentHidden() ? E = cancelAnimationFrame(E) : (activeInstances.forEach(
      function(g) {
        return g._onDocumentVisibility();
      }
    ), engine()));
  }
  return typeof document < "u" && document.addEventListener("visibilitychange", n), e;
}();
function isDocumentHidden() {
  return !!document && document.hidden;
}
function anime(E) {
  E === void 0 && (E = {});
  var e = 0, C = 0, n = 0, g, G = 0, B = null;
  function F(A) {
    var u = window.Promise && new Promise(function(S) {
      return B = S;
    });
    return A.finished = u, u;
  }
  var f = createNewInstance(E);
  F(f);
  function d() {
    var A = f.direction;
    A !== "alternate" && (f.direction = A !== "normal" ? "normal" : "reverse"), f.reversed = !f.reversed, g.forEach(function(u) {
      return u.reversed = f.reversed;
    });
  }
  function r(A) {
    return f.reversed ? f.duration - A : A;
  }
  function I() {
    e = 0, C = r(f.currentTime) * (1 / anime.speed);
  }
  function k(A, u) {
    u && u.seek(A - u.timelineOffset);
  }
  function y(A) {
    if (f.reversePlayback)
      for (var S = G; S--; )
        k(A, g[S]);
    else
      for (var u = 0; u < G; u++)
        k(A, g[u]);
  }
  function h(A) {
    for (var u = 0, S = f.animations, s = S.length; u < s; ) {
      var i = S[u], w = i.animatable, b = i.tweens, c = b.length - 1, L = b[c];
      c && (L = filterArray(b, function(l) {
        return A < l.end;
      })[0] || L);
      for (var x = minMax(A - L.start - L.delay, 0, L.duration) / L.duration, z = isNaN(x) ? 1 : L.easing(x), J = L.to.strings, M = L.round, Y = [], tt = L.to.numbers.length, q = void 0, U = 0; U < tt; U++) {
        var at = void 0, $ = L.to.numbers[U], wt = L.from.numbers[U] || 0;
        L.isPath ? at = getPathProgress(L.value, z * $, L.isPathTargetInsideSVG) : at = wt + z * ($ - wt), M && (L.isColor && U > 2 || (at = Math.round(at * M) / M)), Y.push(at);
      }
      var Pt = J.length;
      if (!Pt)
        q = Y[0];
      else {
        q = J[0];
        for (var N = 0; N < Pt; N++) {
          J[N];
          var a = J[N + 1], p = Y[N];
          isNaN(p) || (a ? q += p + a : q += p + " ");
        }
      }
      setProgressValue[i.type](w.target, i.property, q, w.transforms), i.currentValue = q, u++;
    }
  }
  function _(A) {
    f[A] && !f.passThrough && f[A](f);
  }
  function m() {
    f.remaining && f.remaining !== !0 && f.remaining--;
  }
  function P(A) {
    var u = f.duration, S = f.delay, s = u - f.endDelay, i = r(A);
    f.progress = minMax(i / u * 100, 0, 100), f.reversePlayback = i < f.currentTime, g && y(i), !f.began && f.currentTime > 0 && (f.began = !0, _("begin")), !f.loopBegan && f.currentTime > 0 && (f.loopBegan = !0, _("loopBegin")), i <= S && f.currentTime !== 0 && h(0), (i >= s && f.currentTime !== u || !u) && h(u), i > S && i < s ? (f.changeBegan || (f.changeBegan = !0, f.changeCompleted = !1, _("changeBegin")), _("change"), h(i)) : f.changeBegan && (f.changeCompleted = !0, f.changeBegan = !1, _("changeComplete")), f.currentTime = minMax(i, 0, u), f.began && _("update"), A >= u && (C = 0, m(), f.remaining ? (e = n, _("loopComplete"), f.loopBegan = !1, f.direction === "alternate" && d()) : (f.paused = !0, f.completed || (f.completed = !0, _("loopComplete"), _("complete"), !f.passThrough && "Promise" in window && (B(), F(f)))));
  }
  return f.reset = function() {
    var A = f.direction;
    f.passThrough = !1, f.currentTime = 0, f.progress = 0, f.paused = !0, f.began = !1, f.loopBegan = !1, f.changeBegan = !1, f.completed = !1, f.changeCompleted = !1, f.reversePlayback = !1, f.reversed = A === "reverse", f.remaining = f.loop, g = f.children, G = g.length;
    for (var u = G; u--; )
      f.children[u].reset();
    (f.reversed && f.loop !== !0 || A === "alternate" && f.loop === 1) && f.remaining++, h(f.reversed ? f.duration : 0);
  }, f._onDocumentVisibility = I, f.set = function(A, u) {
    return setTargetsValue(A, u), f;
  }, f.tick = function(A) {
    n = A, e || (e = n), P((n + (C - e)) * anime.speed);
  }, f.seek = function(A) {
    P(r(A));
  }, f.pause = function() {
    f.paused = !0, I();
  }, f.play = function() {
    f.paused && (f.completed && f.reset(), f.paused = !1, activeInstances.push(f), I(), engine());
  }, f.reverse = function() {
    d(), f.completed = !f.reversed, I();
  }, f.restart = function() {
    f.reset(), f.play();
  }, f.remove = function(A) {
    var u = parseTargets(A);
    removeTargetsFromInstance(u, f);
  }, f.reset(), f.autoplay && f.play(), f;
}
function removeTargetsFromAnimations(E, e) {
  for (var C = e.length; C--; )
    arrayContains(E, e[C].animatable.target) && e.splice(C, 1);
}
function removeTargetsFromInstance(E, e) {
  var C = e.animations, n = e.children;
  removeTargetsFromAnimations(E, C);
  for (var g = n.length; g--; ) {
    var G = n[g], B = G.animations;
    removeTargetsFromAnimations(E, B), !B.length && !G.children.length && n.splice(g, 1);
  }
  !C.length && !n.length && e.pause();
}
function removeTargetsFromActiveInstances(E) {
  for (var e = parseTargets(E), C = activeInstances.length; C--; ) {
    var n = activeInstances[C];
    removeTargetsFromInstance(e, n);
  }
}
function stagger(E, e) {
  e === void 0 && (e = {});
  var C = e.direction || "normal", n = e.easing ? parseEasings(e.easing) : null, g = e.grid, G = e.axis, B = e.from || 0, F = B === "first", f = B === "center", d = B === "last", r = is.arr(E), I = parseFloat(r ? E[0] : E), k = r ? parseFloat(E[1]) : 0, y = getUnit(r ? E[1] : E) || 0, h = e.start || 0 + (r ? I : 0), _ = [], m = 0;
  return function(P, A, u) {
    if (F && (B = 0), f && (B = (u - 1) / 2), d && (B = u - 1), !_.length) {
      for (var S = 0; S < u; S++) {
        if (!g)
          _.push(Math.abs(B - S));
        else {
          var s = f ? (g[0] - 1) / 2 : B % g[0], i = f ? (g[1] - 1) / 2 : Math.floor(B / g[0]), w = S % g[0], b = Math.floor(S / g[0]), c = s - w, L = i - b, x = Math.sqrt(c * c + L * L);
          G === "x" && (x = -c), G === "y" && (x = -L), _.push(x);
        }
        m = Math.max.apply(Math, _);
      }
      n && (_ = _.map(function(J) {
        return n(J / m) * m;
      })), C === "reverse" && (_ = _.map(function(J) {
        return G ? J < 0 ? J * -1 : -J : Math.abs(m - J);
      }));
    }
    var z = r ? (k - I) / m : I;
    return h + z * (Math.round(_[A] * 100) / 100) + y;
  };
}
function timeline(E) {
  E === void 0 && (E = {});
  var e = anime(E);
  return e.duration = 0, e.add = function(C, n) {
    var g = activeInstances.indexOf(e), G = e.children;
    g > -1 && activeInstances.splice(g, 1);
    function B(k) {
      k.passThrough = !0;
    }
    for (var F = 0; F < G.length; F++)
      B(G[F]);
    var f = mergeObjects(C, replaceObjectProps(defaultTweenSettings, E));
    f.targets = f.targets || E.targets;
    var d = e.duration;
    f.autoplay = !1, f.direction = e.direction, f.timelineOffset = is.und(n) ? d : getRelativeValue(n, d), B(e), e.seek(f.timelineOffset);
    var r = anime(f);
    B(r), G.push(r);
    var I = getInstanceTimings(G, E);
    return e.delay = I.delay, e.endDelay = I.endDelay, e.duration = I.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e;
  }, e;
}
anime.version = "3.2.1";
anime.speed = 1;
anime.suspendWhenDocumentHidden = !0;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function(E, e) {
  return Math.floor(Math.random() * (e - E + 1)) + E;
};
function onClickOutside(E, e) {
  document.addEventListener("click", (C) => {
    const n = E.getBoundingClientRect(), G = C.target.getBoundingClientRect();
    (G.left < n.left || G.right > n.right || G.top < n.top || G.bottom > n.bottom) && e(C);
  });
}
var Ye, as;
class SearchButton {
  constructor() {
    O(this, Ye);
    this.show = !1, this.caseSensitive = !1, this.entireWord = !1, this.highlightAll = !1, this.findPrevious = !1, this.matchDiacritics = !1, this.type = "again", this.statusIndicator = null;
  }
  build(e) {
    this.eventBus = e.eventBus, this.pdfFindController = e.pdfFindController, this.btnContainer = document.createElement("div"), this.btnContainer.className = "relative";
    let C = document.createElement("button");
    return C.className = "outline-none border-none hover:bg-gray-100  p-2", C.title = "search in the document", C.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', this.btnContainer.append(C), C.addEventListener("click", () => {
      setTimeout(() => {
        this.toggleBox();
      }, 300);
    }), this.prepareBox(), this.buildStatusIndicator(), this.buildInput(), this.buildButtons(), this.eventBus.on("updatefindcontrolstate", (n) => {
      switch (console.log(n.source.highlightMatches), n.state) {
        case 0:
          setTimeout(() => {
            if (!n.source.highlightMatches)
              return;
            let g = n.source._matchesCountTotal > 0 && n.matchesCount.current === 0 ? 1 : n.matchesCount.current;
            this.statusIndicator.innerText = `Showing ${g} of ${n.source._matchesCountTotal}`;
            let G = document.querySelector(".highlight.selected.appended");
            const { top: B, height: F } = e.buttonsContainer.getBoundingClientRect();
            e.bodyContainer.scrollTop = e.bodyContainer.scrollTop + parseFloat(
              (G == null ? void 0 : G.getBoundingClientRect().top.toString()) ?? "0"
            ) - F - B - 20;
          }, 100);
          break;
        case 1:
          this.statusIndicator.innerText = "Not found";
          break;
        case 3:
          this.statusIndicator.innerText = "Searching..";
          break;
      }
    }), this.btnContainer;
  }
  toggleBox() {
    var e;
    this.show = !this.show, this.container.classList.toggle("hidden"), this.show ? ((e = this.container.querySelector("input")) == null || e.focus(), document.addEventListener("keydown", (C) => this.listenEvents(C))) : document.removeEventListener("keydown", (C) => this.listenEvents(C));
  }
  listenEvents(e) {
    switch (e.code) {
      case "Enter":
        this.search("again");
        break;
      case "Escape":
        this.toggleBox();
        break;
    }
  }
  prepareBox() {
    this.container = document.createElement("div"), this.container.className = "absolute z-[1000] hidden gap-y-1 left-0 mt-2 p-2 border bg-white shadow rounded flex flex-col", this.btnContainer.append(this.container), onClickOutside(this.container, () => {
      this.show && (this.toggleBox(), this.eventBus.dispatch("findbarclose", {
        source: this
      }), this.statusIndicator.innerText = "", this.container.querySelector("input").value = "", this.container.querySelectorAll("button").forEach((e) => {
        e.classList.contains("bg-gray-100") && e.classList.remove("bg-gray-100");
      }), this.resetValues());
    });
  }
  buildStatusIndicator() {
    this.statusIndicator = document.createElement("span"), this.statusIndicator.className = "text-sm text-gray-500", this.container.append(this.statusIndicator);
  }
  buildInput() {
    let e = document.createElement("div");
    e.className = "flex gap-x-1";
    let C = document.createElement("input");
    C.className = "focus:outline-none px-2 py-1 border rounded", C.placeholder = "Search...", C.addEventListener("change", (G) => {
      this.query = G.target.value, this.search();
    });
    let n = document.createElement("button");
    n.className = "p-1 rounded border", n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>', n.addEventListener("click", () => {
      this.search("again", !0);
    });
    let g = document.createElement("button");
    g.className = "p-1 rounded border", g.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>', g.addEventListener("click", () => {
      this.search("again");
    }), e.append(C), e.append(n), e.append(g), this.container.append(e);
  }
  buildButtons() {
    let e = document.createElement("div");
    e.className = "flex flex-wrap gap-2", [
      {
        label: "Case Sensitive",
        callback: (n) => {
          this.caseSensitive = !this.caseSensitive, this.search();
        }
      },
      {
        label: "Entire Word",
        callback: (n) => {
          this.entireWord = !this.entireWord;
        }
      },
      {
        label: "Highlight All",
        callback: (n) => {
          this.highlightAll = !this.highlightAll, this.search();
        }
      },
      {
        label: "Match Diacritics",
        callback: (n) => {
          this.matchDiacritics = !this.matchDiacritics, this.search();
        }
      }
    ].forEach((n) => {
      e.append(W(this, Ye, as).call(this, n.label, n.callback));
    }), this.container.append(e);
  }
  search(e = "", C = !1) {
    if (this.query.trim().length === 0) {
      this.statusIndicator.innerText = "Please specify search text";
      return;
    }
    this.eventBus.dispatch("find", {
      source: this,
      type: e,
      query: this.query,
      caseSensitive: this.caseSensitive,
      entireWord: this.entireWord,
      highlightAll: this.highlightAll,
      findPrevious: C,
      matchDiacritics: this.matchDiacritics
    });
  }
  onClick(e) {
  }
  position() {
    return "left";
  }
  resetValues() {
    this.query = "", this.caseSensitive = !1, this.entireWord = !1, this.highlightAll = !1, this.matchDiacritics = !1;
  }
  reset() {
    var e;
    (e = this.btnContainer) == null || e.remove(), this.btnContainer = null, this.eventBus = null, this.pdfFindController = null, this.resetValues();
  }
}
Ye = new WeakSet(), as = function(e, C) {
  let n = document.createElement("button");
  return n.className = "px-2 py-1 rounded border text-sm whitespace-nowrap", n.innerText = e, n.addEventListener("click", (g) => {
    C(g), n.classList.toggle("bg-gray-100");
  }), n;
};
class ZoomButton {
  build(e) {
    return this.pdfViewer = e.pdfViewer, this.container = document.createElement("div"), this.buildButtons(this.container), this.buildDropdown(this.container), e.eventBus.on("scalechanging", (C) => {
      this.currentScaleTracker.innerText = Math.round(C.scale * 100) + "%", this.currentScaleTracker.selected = !0;
    }), this.container;
  }
  onClick(e) {
  }
  buildButtons(e) {
    e.className = "flex items-center gap-x-2 text-gray-600 fill-current";
    let C = document.createElement("button");
    C.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 lucide lucide-zoom-out"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/></svg>', C.addEventListener("click", () => {
      this.pdfViewer.decreaseScale();
    }), e.append(C);
    let n = document.createElement("button");
    n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-zoom-in"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>', n.addEventListener("click", () => {
      this.pdfViewer.increaseScale();
    }), e.append(n);
  }
  buildDropdown(e) {
    let C = document.createElement("select");
    this.currentScaleTracker = document.createElement("option"), this.currentScaleTracker.disabled = !0, C.append(this.currentScaleTracker), ["page-width", " page-actual", "page-height", "page-fit", "auto"].forEach((g) => {
      let G = document.createElement("option");
      G.value = g, G.innerText = g, C.append(G);
    }), C.addEventListener("change", (g) => {
      this.pdfViewer.currentScaleValue = g.target.value;
    }), e.append(C);
  }
  position() {
    return "center";
  }
  reset() {
    var e;
    this.pdfViewer = null, (e = this.container) == null || e.remove();
  }
}
class ViewPropertiesButton {
  constructor() {
    this.isVisible = !1;
  }
  build(e) {
    return this.btn = document.createElement("button"), this.btn.className = "outline-none border-none hover:bg-gray-100 p-2", this.btn.title = "view properties", this.btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>', e.pdfDocument.getMetadata().then((C) => {
      let n = C.info;
      this.name = pdfExports.getPdfFilenameFromUrl(e.url), this.computeFilesize(C.contentLength), this.computeCreatedDate(n.CreationDate), this.author = n.Creator, this.pdfProducer = n.Producer, this.pdfVersion = n.PDFFormatVersion, this.totalPages = e.pdfDocument.numPages.toString(), this.preparePopover();
    }), this.btn;
  }
  preparePopover() {
    this.popOverContainer = document.createElement("div"), this.popOverContainer.className = "fixed flex z-[10000] items-center justify-center w-screen h-screen bg-[rgba(0,0,0,0.3)] top-0 left-0";
    const e = document.createElement("div");
    e.className = "flex-col fixed gap-y-2 p-4 top-1/2 bg-gray-50 border-2 shadow-lg rounded-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2", this.popOverContainer.style.display = "none", this.popOverContainer.appendChild(e);
    let C = document.createElement("h1");
    C.className = "font-semibold text-lg border-b py-2", C.innerText = "Document Properties", e.append(C), Object.getOwnPropertyNames(this).forEach((n) => {
      if (typeof this[n] == "string") {
        let g = document.createElement("div");
        g.className = "flex items-center mt-2";
        let G = document.createElement("span");
        G.className = "w-32", G.innerText = n;
        let B = document.createElement("p");
        B.className = "w-64", B.innerText = this[n], g.append(G), g.append(B), e.append(g);
      }
    }), document.body.append(this.popOverContainer), onClickOutside(e, () => {
      this.isVisible && this.toggleVisibility();
    });
  }
  onClick(e) {
    this.toggleVisibility();
  }
  computeFilesize(e) {
    e < 1e6 ? this.size = e / 1e3 + "kb" : this.size = e / 1e6 + "mb";
  }
  computeCreatedDate(e) {
    const C = e.substring(2, e.length - 7), n = C.substring(0, 4), g = C.substring(4, 6) - 1, G = C.substring(6, 8), B = C.substring(8, 10), F = C.substring(10, 12), f = C.substring(12, 14), d = new Date(Date.UTC(n, g, G, B, F, f)), r = e.substring(e.length - 7), I = parseInt(
      r.substring(1, 3),
      10
    ), k = parseInt(
      r.substring(4, 6),
      10
    );
    d.setUTCHours(d.getUTCHours() - I), d.setUTCMinutes(d.getUTCMinutes() - k), this.created = d.toDateString() + " " + d.toTimeString();
  }
  position() {
    return "right";
  }
  toggleVisibility() {
    setTimeout(() => {
      this.isVisible = !this.isVisible, this.popOverContainer.style.display = this.isVisible ? "flex" : "none";
    }, 100);
  }
  reset() {
    var e, C;
    this.isVisible = !1, (e = this.popOverContainer) == null || e.remove(), (C = this.btn) == null || C.remove(), this.size = null, this.name = null, this.author = null, this.created = null, this.pdfProducer = null, this.pdfVersion = null, this.totalPages = null;
  }
}
class ContainerBuilder {
  buildPDFContainer() {
    let e = document.createElement("div");
    e.style.position = "absolute", e.style.width = "100%";
    let C = document.createElement("div");
    return C.id = "viewer", C.className = "pdfViewer", e.append(C), e;
  }
  buildButtonsContainer() {
    let e = document.createElement("div");
    e.className = "w-full grid grid-cols-3 gap-x-2 rounded items-center border shadow-lg p-1 bg-white";
    let C = document.createElement("div");
    C.className = "flex items-center";
    let n = document.createElement("div");
    n.className = "flex justify-center items-center";
    let g = document.createElement("div");
    return g.className = "flex justify-end items-center", e.append(C), e.append(n), e.append(g), e;
  }
  buildLoadingContainer() {
    let e = document.createElement("div");
    e.className = "w-full h-full flex items-center justify-center", e.style.display = "none";
    let C = document.createElement("div");
    return C.className = "w-64 h-48 flex items-center justify-center rounded bg-white shadow", C.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-gray-600 animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>', e.appendChild(C), e;
  }
  buildBodyContainer() {
    let e = document.createElement("div");
    return e.className = "w-full h-full mt-2 relative overflow-y-auto flex justify-center", e.style.scrollBehavior = "smooth", e;
  }
}
pdfExports.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfExports.version}/build/pdf.worker`;
class PDFViewer {
  constructor(e, C = {
    fullscreen: !0,
    overlay: !0,
    disableClickoutside: !1
  }) {
    if (this.container = e, this.buttons = [
      new ViewThumbnailsButton(),
      new DownloadButton(),
      new SearchButton(),
      new ZoomButton(),
      new ViewPropertiesButton()
    ], this.states = {
      visibility: !0,
      disableClickoutside: !1,
      fullscreen: !0,
      overlay: !0
    }, !e)
      throw new Error("Please specify valid container");
    this.containerBuilder = new ContainerBuilder(), Object.keys(C).forEach((n) => {
      this.states.hasOwnProperty(n) && (this.states[n] = C[n]);
    }), this.buildContainers(), this.initialisePDFService();
  }
  addButton(e) {
    return this.buttons.push(e), this;
  }
  setButtons(e) {
    return this.buttons = e, this;
  }
  get data() {
    return {
      pdfDocument: this.pdfDocument,
      buttonsContainer: this.buttonsContainer,
      pdfContainer: this.pdfContainer,
      bodyContainer: this.bodyContainer,
      mainContainer: this.container,
      eventBus: this.eventBus,
      pdfLinkService: this.pdfLinkService,
      pdfFindController: this.pdfFindController,
      pdfScriptingManager: this.pdfScriptingManager,
      pdfViewer: this.pdfViewer,
      url: this.url
    };
  }
  toggleVisibility() {
    this.states.visibility = !this.states.visibility, this.container.style.display = this.states.visibility ? "" : "none";
  }
  initialisePDFService() {
    this.eventBus = new pdf_viewerExports.EventBus(), this.pdfLinkService = new pdf_viewerExports.PDFLinkService({
      eventBus: this.eventBus
    }), this.pdfScriptingManager = new pdf_viewerExports.PDFScriptingManager({
      eventBus: this.eventBus,
      sandboxBundleSrc: `https://unpkg.com/pdfjs-dist@${pdfExports.version}/build/pdf.sandbox`
    }), this.pdfFindController = new pdf_viewerExports.PDFFindController({
      eventBus: this.eventBus,
      linkService: this.pdfLinkService
    }), this.pdfViewer = new pdf_viewerExports.PDFViewer({
      container: this.pdfContainer,
      eventBus: this.eventBus,
      linkService: this.pdfLinkService,
      findController: this.pdfFindController,
      scriptingManager: this.pdfScriptingManager
    }), this.pdfViewer.l10n.getLanguage = async () => "my", this.pdfLinkService.setViewer(this.pdfViewer), this.pdfScriptingManager.setViewer(this.pdfViewer);
  }
  buildContainers() {
    this.container.classList.add("p-2", "flex"), this.states.fullscreen && this.container.classList.add(
      "w-screen",
      "h-screen",
      "top-0",
      "left-0",
      "fixed",
      "z-100"
    ), this.states.overlay && this.container.classList.add("bg-[rgba(0,0,0,0.3)]");
    let e = document.createElement("div");
    e.className = "flex flex-col w-full", this.buttonsContainer = this.containerBuilder.buildButtonsContainer(), e.append(this.buttonsContainer), this.bodyContainer = this.containerBuilder.buildBodyContainer(), this.pdfContainer = this.containerBuilder.buildPDFContainer(), this.loadingContainer = this.containerBuilder.buildLoadingContainer(), this.container.appendChild(this.loadingContainer), this.bodyContainer.append(this.pdfContainer), e.append(this.bodyContainer), this.container.append(e), this.textLayerDiv = document.createElement("div"), this.textLayerDiv.classList.add("textLayer"), this.bodyContainer.appendChild(this.textLayerDiv);
  }
  buildButtons() {
    this.buttons.forEach((e) => {
      e.reset();
      let C = e.build(this.data);
      if (C) {
        switch (e.position()) {
          case "left":
            this.buttonsContainer.children[0].append(C);
            break;
          case "center":
            this.buttonsContainer.children[1].append(C);
            break;
          case "right":
            this.buttonsContainer.children[2].append(C);
            break;
        }
        C.onclick = () => e.onClick(this.data);
      }
    });
  }
  listenEvents() {
    this.eventBus.on("pagesinit", (e) => {
      this.pdfViewer.currentScaleValue = "auto";
    }), this.states.disableClickoutside || this.pdfContainer.addEventListener("click", (e) => {
      if (!this.states.visibility)
        return;
      let { screenX: C, screenY: n } = e, g = this.pdfContainer.querySelector(".pdfViewer .page").getBoundingClientRect();
      C >= g.left && C <= g.right || this.toggleVisibility();
    });
  }
  async init(e, C = {}) {
    this.states.visibility || this.toggleVisibility();
    let n = `https://unpkg.com/pdfjs-dist@${pdfExports.version}/cmaps/`;
    this.url = e;
    let g = {
      url: e,
      enableXfa: !0,
      cMapPacked: !0,
      disableAutoFetch: !0,
      // disableStream: true,
      disableStream: !1,
      disableFontFace: !1,
      cMapUrl: n
    };
    Object.keys(C).forEach((B) => {
      g.hasOwnProperty(B) && (g[B] = C[B]);
    }), this.loadingContainer.style.display = "flex", this.buttonsContainer.parentElement.style.display = "none";
    const G = pdfExports.getDocument(g);
    (async () => (this.pdfDocument = await G.promise, this.pdfViewer.setDocument(this.pdfDocument), this.pdfLinkService.setDocument(this.pdfDocument, null), C.initialPageIndex && setTimeout(() => {
      this.viewPage(C.initialPageIndex);
    }, 300), this.loadingContainer.style.display = "none", this.buttonsContainer.parentElement.style.display = "flex", this.listenEvents(), this.buildButtons()))();
  }
  viewPage(e) {
    let C = this.pdfContainer.querySelector(
      `[data-page-number="${e}"]`
    );
    if (!C)
      throw new Error("Page has not yet loaded or invalid");
    this.bodyContainer.scrollTop = this.bodyContainer.scrollTop + parseFloat(C.getBoundingClientRect().top.toString()) - this.buttonsContainer.getBoundingClientRect().height;
  }
}
const app = "";
export {
  DownloadButton,
  PDFViewer,
  SearchButton,
  ViewPropertiesButton,
  ViewThumbnailsButton,
  ZoomButton
};
