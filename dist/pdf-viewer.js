var ts = Object.defineProperty;
var es = (A, e, L) => e in A ? ts(A, e, { enumerable: !0, configurable: !0, writable: !0, value: L }) : A[e] = L;
var Zt = (A, e, L) => (es(A, typeof e != "symbol" ? e + "" : e, L), L), We = (A, e, L) => {
  if (!e.has(A))
    throw TypeError("Cannot " + L);
};
var t = (A, e, L) => (We(A, e, "read from private field"), L ? L.call(A) : e.get(A)), N = (A, e, L) => {
  if (e.has(A))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(A) : e.set(A, L);
}, it = (A, e, L, n) => (We(A, e, "write to private field"), n ? n.call(A, L) : e.set(A, L), L);
var ae = (A, e, L, n) => ({
  set _(f) {
    it(A, e, f, L);
  },
  get _() {
    return t(A, e, n);
  }
}), X = (A, e, L) => (We(A, e, "access private method"), L);
function getAugmentedNamespace(A) {
  if (A.__esModule)
    return A;
  var e = A.default;
  if (typeof e == "function") {
    var L = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    L.prototype = e.prototype;
  } else
    L = {};
  return Object.defineProperty(L, "__esModule", { value: !0 }), Object.keys(A).forEach(function(n) {
    var f = Object.getOwnPropertyDescriptor(A, n);
    Object.defineProperty(L, n, f.get ? f : {
      enumerable: !0,
      get: function() {
        return A[n];
      }
    });
  }), L;
}
function commonjsRequire(A) {
  throw new Error('Could not dynamically require "' + A + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pdf = { exports: {} };
const __viteBrowserExternal = {}, __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$5 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
(function(module, exports) {
  (function(e, L) {
    module.exports = e.pdfjsLib = L();
  })(globalThis, () => (
    /******/
    (() => {
      var __webpack_modules__ = [
        ,
        /* 1 */
        /***/
        (A, e) => {
          var Gt;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.VerbosityLevel = e.Util = e.UnknownErrorException = e.UnexpectedResponseException = e.TextRenderingMode = e.RenderingIntentFlag = e.PromiseCapability = e.PermissionFlag = e.PasswordResponses = e.PasswordException = e.PageActionEventType = e.OPS = e.MissingPDFException = e.MAX_IMAGE_SIZE_TO_CACHE = e.LINE_FACTOR = e.LINE_DESCENT_FACTOR = e.InvalidPDFException = e.ImageKind = e.IDENTITY_MATRIX = e.FormatError = e.FeatureTest = e.FONT_IDENTITY_MATRIX = e.DocumentActionEventType = e.CMapCompressionType = e.BaseException = e.BASELINE_FACTOR = e.AnnotationType = e.AnnotationReplyType = e.AnnotationMode = e.AnnotationFlag = e.AnnotationFieldFlag = e.AnnotationEditorType = e.AnnotationEditorPrefix = e.AnnotationEditorParamsType = e.AnnotationBorderStyleType = e.AnnotationActionEventType = e.AbortException = void 0, e.assert = j, e.bytesToString = ut, e.createValidAbsoluteUrl = lt, e.getModificationDate = Ot, e.getUuid = $t, e.getVerbosityLevel = K, e.info = Z, e.isArrayBuffer = dt, e.isArrayEqual = xt, e.isNodeJS = void 0, e.normalizeUnicode = Ht, e.objectFromMap = ot, e.objectSize = Et, e.setVerbosityLevel = x, e.shadow = _t, e.string32 = yt, e.stringToBytes = wt, e.stringToPDFString = at, e.stringToUTF8String = J, e.unreachable = v, e.utf8StringToString = rt, e.warn = Q;
          const L = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
          e.isNodeJS = L;
          const n = [1, 0, 0, 1, 0, 0];
          e.IDENTITY_MATRIX = n;
          const f = [1e-3, 0, 0, 1e-3, 0, 0];
          e.FONT_IDENTITY_MATRIX = f;
          const q = 1e7;
          e.MAX_IMAGE_SIZE_TO_CACHE = q;
          const V = 1.35;
          e.LINE_FACTOR = V;
          const I = 0.35;
          e.LINE_DESCENT_FACTOR = I;
          const c = I / V;
          e.BASELINE_FACTOR = c;
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
          const F = "pdfjs_internal_editor_";
          e.AnnotationEditorPrefix = F;
          const M = {
            DISABLE: -1,
            NONE: 0,
            FREETEXT: 3,
            STAMP: 13,
            INK: 15
          };
          e.AnnotationEditorType = M;
          const S = {
            RESIZE: 1,
            CREATE: 2,
            FREETEXT_SIZE: 11,
            FREETEXT_COLOR: 12,
            FREETEXT_OPACITY: 13,
            INK_COLOR: 21,
            INK_THICKNESS: 22,
            INK_OPACITY: 23
          };
          e.AnnotationEditorParamsType = S;
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
          const p = {
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
          e.TextRenderingMode = p;
          const u = {
            GRAYSCALE_1BPP: 1,
            RGB_24BPP: 2,
            RGBA_32BPP: 3
          };
          e.ImageKind = u;
          const y = {
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
          e.AnnotationType = y;
          const b = {
            GROUP: "Group",
            REPLY: "R"
          };
          e.AnnotationReplyType = b;
          const g = {
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
          e.AnnotationFlag = g;
          const w = {
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
          e.AnnotationFieldFlag = w;
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
          const E = {
            WC: "WillClose",
            WS: "WillSave",
            DS: "DidSave",
            WP: "WillPrint",
            DP: "DidPrint"
          };
          e.DocumentActionEventType = E;
          const _ = {
            O: "PageOpen",
            C: "PageClose"
          };
          e.PageActionEventType = _;
          const o = {
            ERRORS: 0,
            WARNINGS: 1,
            INFOS: 5
          };
          e.VerbosityLevel = o;
          const T = {
            NONE: 0,
            BINARY: 1
          };
          e.CMapCompressionType = T;
          const P = {
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
          e.OPS = P;
          const Y = {
            NEED_PASSWORD: 1,
            INCORRECT_PASSWORD: 2
          };
          e.PasswordResponses = Y;
          let tt = o.WARNINGS;
          function x(Ct) {
            Number.isInteger(Ct) && (tt = Ct);
          }
          function K() {
            return tt;
          }
          function Z(Ct) {
            tt >= o.INFOS && console.log(`Info: ${Ct}`);
          }
          function Q(Ct) {
            tt >= o.WARNINGS && console.log(`Warning: ${Ct}`);
          }
          function v(Ct) {
            throw new Error(Ct);
          }
          function j(Ct, m) {
            Ct || v(m);
          }
          function D(Ct) {
            switch (Ct == null ? void 0 : Ct.protocol) {
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
          function lt(Ct, m = null, B = null) {
            if (!Ct)
              return null;
            try {
              if (B && typeof Ct == "string") {
                if (B.addDefaultProtocol && Ct.startsWith("www.")) {
                  const Lt = Ct.match(/\./g);
                  (Lt == null ? void 0 : Lt.length) >= 2 && (Ct = `http://${Ct}`);
                }
                if (B.tryConvertEncoding)
                  try {
                    Ct = J(Ct);
                  } catch {
                  }
              }
              const ht = m ? new URL(Ct, m) : new URL(Ct);
              if (D(ht))
                return ht;
            } catch {
            }
            return null;
          }
          function _t(Ct, m, B, ht = !1) {
            return Object.defineProperty(Ct, m, {
              value: B,
              enumerable: !ht,
              configurable: !0,
              writable: !1
            }), B;
          }
          const k = function() {
            function m(B, ht) {
              this.constructor === m && v("Cannot initialize BaseException."), this.message = B, this.name = ht;
            }
            return m.prototype = new Error(), m.constructor = m, m;
          }();
          e.BaseException = k;
          class a extends k {
            constructor(m, B) {
              super(m, "PasswordException"), this.code = B;
            }
          }
          e.PasswordException = a;
          class l extends k {
            constructor(m, B) {
              super(m, "UnknownErrorException"), this.details = B;
            }
          }
          e.UnknownErrorException = l;
          class R extends k {
            constructor(m) {
              super(m, "InvalidPDFException");
            }
          }
          e.InvalidPDFException = R;
          class $ extends k {
            constructor(m) {
              super(m, "MissingPDFException");
            }
          }
          e.MissingPDFException = $;
          class W extends k {
            constructor(m, B) {
              super(m, "UnexpectedResponseException"), this.status = B;
            }
          }
          e.UnexpectedResponseException = W;
          class nt extends k {
            constructor(m) {
              super(m, "FormatError");
            }
          }
          e.FormatError = nt;
          class st extends k {
            constructor(m) {
              super(m, "AbortException");
            }
          }
          e.AbortException = st;
          function ut(Ct) {
            (typeof Ct != "object" || (Ct == null ? void 0 : Ct.length) === void 0) && v("Invalid argument for bytesToString");
            const m = Ct.length, B = 8192;
            if (m < B)
              return String.fromCharCode.apply(null, Ct);
            const ht = [];
            for (let Lt = 0; Lt < m; Lt += B) {
              const Pt = Math.min(Lt + B, m), pt = Ct.subarray(Lt, Pt);
              ht.push(String.fromCharCode.apply(null, pt));
            }
            return ht.join("");
          }
          function wt(Ct) {
            typeof Ct != "string" && v("Invalid argument for stringToBytes");
            const m = Ct.length, B = new Uint8Array(m);
            for (let ht = 0; ht < m; ++ht)
              B[ht] = Ct.charCodeAt(ht) & 255;
            return B;
          }
          function yt(Ct) {
            return String.fromCharCode(Ct >> 24 & 255, Ct >> 16 & 255, Ct >> 8 & 255, Ct & 255);
          }
          function Et(Ct) {
            return Object.keys(Ct).length;
          }
          function ot(Ct) {
            const m = /* @__PURE__ */ Object.create(null);
            for (const [B, ht] of Ct)
              m[B] = ht;
            return m;
          }
          function At() {
            const Ct = new Uint8Array(4);
            return Ct[0] = 1, new Uint32Array(Ct.buffer, 0, 1)[0] === 1;
          }
          function St() {
            try {
              return new Function(""), !0;
            } catch {
              return !1;
            }
          }
          class Rt {
            static get isLittleEndian() {
              return _t(this, "isLittleEndian", At());
            }
            static get isEvalSupported() {
              return _t(this, "isEvalSupported", St());
            }
            static get isOffscreenCanvasSupported() {
              return _t(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
            }
            static get platform() {
              return typeof navigator > "u" ? _t(this, "platform", {
                isWin: !1,
                isMac: !1
              }) : _t(this, "platform", {
                isWin: navigator.platform.includes("Win"),
                isMac: navigator.platform.includes("Mac")
              });
            }
            static get isCSSRoundSupported() {
              var m, B;
              return _t(this, "isCSSRoundSupported", (B = (m = globalThis.CSS) == null ? void 0 : m.supports) == null ? void 0 : B.call(m, "width: round(1.5px, 1px)"));
            }
          }
          e.FeatureTest = Rt;
          const Bt = [...Array(256).keys()].map((Ct) => Ct.toString(16).padStart(2, "0"));
          class kt {
            static makeHexColor(m, B, ht) {
              return `#${Bt[m]}${Bt[B]}${Bt[ht]}`;
            }
            static scaleMinMax(m, B) {
              let ht;
              m[0] ? (m[0] < 0 && (ht = B[0], B[0] = B[1], B[1] = ht), B[0] *= m[0], B[1] *= m[0], m[3] < 0 && (ht = B[2], B[2] = B[3], B[3] = ht), B[2] *= m[3], B[3] *= m[3]) : (ht = B[0], B[0] = B[2], B[2] = ht, ht = B[1], B[1] = B[3], B[3] = ht, m[1] < 0 && (ht = B[2], B[2] = B[3], B[3] = ht), B[2] *= m[1], B[3] *= m[1], m[2] < 0 && (ht = B[0], B[0] = B[1], B[1] = ht), B[0] *= m[2], B[1] *= m[2]), B[0] += m[4], B[1] += m[4], B[2] += m[5], B[3] += m[5];
            }
            static transform(m, B) {
              return [m[0] * B[0] + m[2] * B[1], m[1] * B[0] + m[3] * B[1], m[0] * B[2] + m[2] * B[3], m[1] * B[2] + m[3] * B[3], m[0] * B[4] + m[2] * B[5] + m[4], m[1] * B[4] + m[3] * B[5] + m[5]];
            }
            static applyTransform(m, B) {
              const ht = m[0] * B[0] + m[1] * B[2] + B[4], Lt = m[0] * B[1] + m[1] * B[3] + B[5];
              return [ht, Lt];
            }
            static applyInverseTransform(m, B) {
              const ht = B[0] * B[3] - B[1] * B[2], Lt = (m[0] * B[3] - m[1] * B[2] + B[2] * B[5] - B[4] * B[3]) / ht, Pt = (-m[0] * B[1] + m[1] * B[0] + B[4] * B[1] - B[5] * B[0]) / ht;
              return [Lt, Pt];
            }
            static getAxialAlignedBoundingBox(m, B) {
              const ht = this.applyTransform(m, B), Lt = this.applyTransform(m.slice(2, 4), B), Pt = this.applyTransform([m[0], m[3]], B), pt = this.applyTransform([m[2], m[1]], B);
              return [Math.min(ht[0], Lt[0], Pt[0], pt[0]), Math.min(ht[1], Lt[1], Pt[1], pt[1]), Math.max(ht[0], Lt[0], Pt[0], pt[0]), Math.max(ht[1], Lt[1], Pt[1], pt[1])];
            }
            static inverseTransform(m) {
              const B = m[0] * m[3] - m[1] * m[2];
              return [m[3] / B, -m[1] / B, -m[2] / B, m[0] / B, (m[2] * m[5] - m[4] * m[3]) / B, (m[4] * m[1] - m[5] * m[0]) / B];
            }
            static singularValueDecompose2dScale(m) {
              const B = [m[0], m[2], m[1], m[3]], ht = m[0] * B[0] + m[1] * B[2], Lt = m[0] * B[1] + m[1] * B[3], Pt = m[2] * B[0] + m[3] * B[2], pt = m[2] * B[1] + m[3] * B[3], vt = (ht + pt) / 2, U = Math.sqrt((ht + pt) ** 2 - 4 * (ht * pt - Pt * Lt)) / 2, gt = vt + U || 1, Ft = vt - U || 1;
              return [Math.sqrt(gt), Math.sqrt(Ft)];
            }
            static normalizeRect(m) {
              const B = m.slice(0);
              return m[0] > m[2] && (B[0] = m[2], B[2] = m[0]), m[1] > m[3] && (B[1] = m[3], B[3] = m[1]), B;
            }
            static intersect(m, B) {
              const ht = Math.max(Math.min(m[0], m[2]), Math.min(B[0], B[2])), Lt = Math.min(Math.max(m[0], m[2]), Math.max(B[0], B[2]));
              if (ht > Lt)
                return null;
              const Pt = Math.max(Math.min(m[1], m[3]), Math.min(B[1], B[3])), pt = Math.min(Math.max(m[1], m[3]), Math.max(B[1], B[3]));
              return Pt > pt ? null : [ht, Pt, Lt, pt];
            }
            static bezierBoundingBox(m, B, ht, Lt, Pt, pt, vt, U) {
              const gt = [], Ft = [[], []];
              let bt, O, C, z, H, et, ft, Mt;
              for (let It = 0; It < 2; ++It) {
                if (It === 0 ? (O = 6 * m - 12 * ht + 6 * Pt, bt = -3 * m + 9 * ht - 9 * Pt + 3 * vt, C = 3 * ht - 3 * m) : (O = 6 * B - 12 * Lt + 6 * pt, bt = -3 * B + 9 * Lt - 9 * pt + 3 * U, C = 3 * Lt - 3 * B), Math.abs(bt) < 1e-12) {
                  if (Math.abs(O) < 1e-12)
                    continue;
                  z = -C / O, 0 < z && z < 1 && gt.push(z);
                  continue;
                }
                ft = O * O - 4 * C * bt, Mt = Math.sqrt(ft), !(ft < 0) && (H = (-O + Mt) / (2 * bt), 0 < H && H < 1 && gt.push(H), et = (-O - Mt) / (2 * bt), 0 < et && et < 1 && gt.push(et));
              }
              let G = gt.length, ct;
              const mt = G;
              for (; G--; )
                z = gt[G], ct = 1 - z, Ft[0][G] = ct * ct * ct * m + 3 * ct * ct * z * ht + 3 * ct * z * z * Pt + z * z * z * vt, Ft[1][G] = ct * ct * ct * B + 3 * ct * ct * z * Lt + 3 * ct * z * z * pt + z * z * z * U;
              return Ft[0][mt] = m, Ft[1][mt] = B, Ft[0][mt + 1] = vt, Ft[1][mt + 1] = U, Ft[0].length = Ft[1].length = mt + 2, [Math.min(...Ft[0]), Math.min(...Ft[1]), Math.max(...Ft[0]), Math.max(...Ft[1])];
            }
          }
          e.Util = kt;
          const Ut = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
          function at(Ct) {
            if (Ct[0] >= "ï") {
              let B;
              if (Ct[0] === "þ" && Ct[1] === "ÿ" ? B = "utf-16be" : Ct[0] === "ÿ" && Ct[1] === "þ" ? B = "utf-16le" : Ct[0] === "ï" && Ct[1] === "»" && Ct[2] === "¿" && (B = "utf-8"), B)
                try {
                  const ht = new TextDecoder(B, {
                    fatal: !0
                  }), Lt = wt(Ct);
                  return ht.decode(Lt);
                } catch (ht) {
                  Q(`stringToPDFString: "${ht}".`);
                }
            }
            const m = [];
            for (let B = 0, ht = Ct.length; B < ht; B++) {
              const Lt = Ut[Ct.charCodeAt(B)];
              m.push(Lt ? String.fromCharCode(Lt) : Ct.charAt(B));
            }
            return m.join("");
          }
          function J(Ct) {
            return decodeURIComponent(escape(Ct));
          }
          function rt(Ct) {
            return unescape(encodeURIComponent(Ct));
          }
          function dt(Ct) {
            return typeof Ct == "object" && (Ct == null ? void 0 : Ct.byteLength) !== void 0;
          }
          function xt(Ct, m) {
            if (Ct.length !== m.length)
              return !1;
            for (let B = 0, ht = Ct.length; B < ht; B++)
              if (Ct[B] !== m[B])
                return !1;
            return !0;
          }
          function Ot(Ct = /* @__PURE__ */ new Date()) {
            return [Ct.getUTCFullYear().toString(), (Ct.getUTCMonth() + 1).toString().padStart(2, "0"), Ct.getUTCDate().toString().padStart(2, "0"), Ct.getUTCHours().toString().padStart(2, "0"), Ct.getUTCMinutes().toString().padStart(2, "0"), Ct.getUTCSeconds().toString().padStart(2, "0")].join("");
          }
          class jt {
            constructor() {
              N(this, Gt, !1);
              this.promise = new Promise((m, B) => {
                this.resolve = (ht) => {
                  it(this, Gt, !0), m(ht);
                }, this.reject = (ht) => {
                  it(this, Gt, !0), B(ht);
                };
              });
            }
            get settled() {
              return t(this, Gt);
            }
          }
          Gt = new WeakMap(), e.PromiseCapability = jt;
          let Wt = null, Nt = null;
          function Ht(Ct) {
            return Wt || (Wt = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Nt = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), Ct.replaceAll(Wt, (m, B, ht) => B ? B.normalize("NFKC") : Nt.get(ht));
          }
          function $t() {
            if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
              return crypto.randomUUID();
            const Ct = new Uint8Array(32);
            if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
              crypto.getRandomValues(Ct);
            else
              for (let m = 0; m < 32; m++)
                Ct[m] = Math.floor(Math.random() * 255);
            return ut(Ct);
          }
        },
        /* 2 */
        /***/
        (__unused_webpack_module, exports, __w_pdfjs_require__) => {
          var A, L, n, f, oe, V, we, c, d, r, F, M, S, h, p, u, Pe, b, g, ze, s, i;
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
          function getDocument(_) {
            if (typeof _ == "string" || _ instanceof URL ? _ = {
              url: _
            } : (0, _util.isArrayBuffer)(_) && (_ = {
              data: _
            }), typeof _ != "object")
              throw new Error("Invalid parameter in getDocument, need parameter object.");
            if (!_.url && !_.data && !_.range)
              throw new Error("Invalid parameter object: need either .data, .range or .url");
            const o = new PDFDocumentLoadingTask(), {
              docId: T
            } = o, P = _.url ? getUrlProp(_.url) : null, Y = _.data ? getDataProp(_.data) : null, tt = _.httpHeaders || null, x = _.withCredentials === !0, K = _.password ?? null, Z = _.range instanceof PDFDataRangeTransport ? _.range : null, Q = Number.isInteger(_.rangeChunkSize) && _.rangeChunkSize > 0 ? _.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
            let v = _.worker instanceof PDFWorker ? _.worker : null;
            const j = _.verbosity, D = typeof _.docBaseUrl == "string" && !(0, _display_utils.isDataScheme)(_.docBaseUrl) ? _.docBaseUrl : null, lt = typeof _.cMapUrl == "string" ? _.cMapUrl : null, _t = _.cMapPacked !== !1, k = _.CMapReaderFactory || DefaultCMapReaderFactory, a = typeof _.standardFontDataUrl == "string" ? _.standardFontDataUrl : null, l = _.StandardFontDataFactory || DefaultStandardFontDataFactory, R = _.stopAtErrors !== !0, $ = Number.isInteger(_.maxImageSize) && _.maxImageSize > -1 ? _.maxImageSize : -1, W = _.isEvalSupported !== !1, nt = typeof _.isOffscreenCanvasSupported == "boolean" ? _.isOffscreenCanvasSupported : !_util.isNodeJS, st = Number.isInteger(_.canvasMaxAreaInBytes) ? _.canvasMaxAreaInBytes : -1, ut = typeof _.disableFontFace == "boolean" ? _.disableFontFace : _util.isNodeJS, wt = _.fontExtraProperties === !0, yt = _.enableXfa === !0, Et = _.ownerDocument || globalThis.document, ot = _.disableRange === !0, At = _.disableStream === !0, St = _.disableAutoFetch === !0, Rt = _.pdfBug === !0, Bt = Z ? Z.length : _.length ?? NaN, kt = typeof _.useSystemFonts == "boolean" ? _.useSystemFonts : !_util.isNodeJS && !ut, Ut = typeof _.useWorkerFetch == "boolean" ? _.useWorkerFetch : k === _display_utils.DOMCMapReaderFactory && l === _display_utils.DOMStandardFontDataFactory && lt && a && (0, _display_utils.isValidFetchUrl)(lt, document.baseURI) && (0, _display_utils.isValidFetchUrl)(a, document.baseURI), at = _.canvasFactory || new DefaultCanvasFactory({
              ownerDocument: Et
            }), J = _.filterFactory || new DefaultFilterFactory({
              docId: T,
              ownerDocument: Et
            }), rt = null;
            (0, _util.setVerbosityLevel)(j);
            const dt = {
              canvasFactory: at,
              filterFactory: J
            };
            if (Ut || (dt.cMapReaderFactory = new k({
              baseUrl: lt,
              isCompressed: _t
            }), dt.standardFontDataFactory = new l({
              baseUrl: a
            })), !v) {
              const jt = {
                verbosity: j,
                port: _worker_options.GlobalWorkerOptions.workerPort
              };
              v = jt.port ? PDFWorker.fromPort(jt) : new PDFWorker(jt), o._worker = v;
            }
            const xt = {
              docId: T,
              apiVersion: "3.10.111",
              data: Y,
              password: K,
              disableAutoFetch: St,
              rangeChunkSize: Q,
              length: Bt,
              docBaseUrl: D,
              enableXfa: yt,
              evaluatorOptions: {
                maxImageSize: $,
                disableFontFace: ut,
                ignoreErrors: R,
                isEvalSupported: W,
                isOffscreenCanvasSupported: nt,
                canvasMaxAreaInBytes: st,
                fontExtraProperties: wt,
                useSystemFonts: kt,
                cMapUrl: Ut ? lt : null,
                standardFontDataUrl: Ut ? a : null
              }
            }, Ot = {
              ignoreErrors: R,
              isEvalSupported: W,
              disableFontFace: ut,
              fontExtraProperties: wt,
              enableXfa: yt,
              ownerDocument: Et,
              disableAutoFetch: St,
              pdfBug: Rt,
              styleElement: rt
            };
            return v.promise.then(function() {
              if (o.destroyed)
                throw new Error("Loading aborted");
              const jt = _fetchDocument(v, xt), Wt = new Promise(function(Nt) {
                let Ht;
                Z ? Ht = new _transport_stream.PDFDataTransportStream({
                  length: Bt,
                  initialData: Z.initialData,
                  progressiveDone: Z.progressiveDone,
                  contentDispositionFilename: Z.contentDispositionFilename,
                  disableRange: ot,
                  disableStream: At
                }, Z) : Y || (Ht = ((Gt) => _util.isNodeJS ? new _displayNode_stream.PDFNodeStream(Gt) : (0, _display_utils.isValidFetchUrl)(Gt.url) ? new _displayFetch_stream.PDFFetchStream(Gt) : new _displayNetwork.PDFNetworkStream(Gt))({
                  url: P,
                  length: Bt,
                  httpHeaders: tt,
                  withCredentials: x,
                  rangeChunkSize: Q,
                  disableRange: ot,
                  disableStream: At
                })), Nt(Ht);
              });
              return Promise.all([jt, Wt]).then(function([Nt, Ht]) {
                if (o.destroyed)
                  throw new Error("Loading aborted");
                const $t = new _message_handler.MessageHandler(T, Nt, v.port), Gt = new WorkerTransport($t, o, Ht, Ot, dt);
                o._transport = Gt, $t.send("Ready", null);
              });
            }).catch(o._capability.reject), o;
          }
          async function _fetchDocument(_, o) {
            if (_.destroyed)
              throw new Error("Worker was destroyed");
            const T = await _.messageHandler.sendWithPromise("GetDocRequest", o, o.data ? [o.data.buffer] : null);
            if (_.destroyed)
              throw new Error("Worker was destroyed");
            return T;
          }
          function getUrlProp(_) {
            if (_ instanceof URL)
              return _.href;
            try {
              return new URL(_, window.location).href;
            } catch {
              if (_util.isNodeJS && typeof _ == "string")
                return _;
            }
            throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
          }
          function getDataProp(_) {
            if (_util.isNodeJS && typeof Buffer < "u" && _ instanceof Buffer)
              throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
            if (_ instanceof Uint8Array && _.byteLength === _.buffer.byteLength)
              return _;
            if (typeof _ == "string")
              return (0, _util.stringToBytes)(_);
            if (typeof _ == "object" && !isNaN(_ == null ? void 0 : _.length) || (0, _util.isArrayBuffer)(_))
              return new Uint8Array(_);
            throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
          }
          const e = class e {
            constructor() {
              this._capability = new _util.PromiseCapability(), this._transport = null, this._worker = null, this.docId = `d${ae(e, A)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
            }
            get promise() {
              return this._capability.promise;
            }
            async destroy() {
              var o, T, P;
              this.destroyed = !0;
              try {
                (o = this._worker) != null && o.port && (this._worker._pendingDestroy = !0), await ((T = this._transport) == null ? void 0 : T.destroy());
              } catch (Y) {
                throw (P = this._worker) != null && P.port && delete this._worker._pendingDestroy, Y;
              }
              this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
            }
          };
          A = new WeakMap(), N(e, A, 0);
          let PDFDocumentLoadingTask = e;
          exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
          class PDFDataRangeTransport {
            constructor(o, T, P = !1, Y = null) {
              this.length = o, this.initialData = T, this.progressiveDone = P, this.contentDispositionFilename = Y, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = new _util.PromiseCapability();
            }
            addRangeListener(o) {
              this._rangeListeners.push(o);
            }
            addProgressListener(o) {
              this._progressListeners.push(o);
            }
            addProgressiveReadListener(o) {
              this._progressiveReadListeners.push(o);
            }
            addProgressiveDoneListener(o) {
              this._progressiveDoneListeners.push(o);
            }
            onDataRange(o, T) {
              for (const P of this._rangeListeners)
                P(o, T);
            }
            onDataProgress(o, T) {
              this._readyCapability.promise.then(() => {
                for (const P of this._progressListeners)
                  P(o, T);
              });
            }
            onDataProgressiveRead(o) {
              this._readyCapability.promise.then(() => {
                for (const T of this._progressiveReadListeners)
                  T(o);
              });
            }
            onDataProgressiveDone() {
              this._readyCapability.promise.then(() => {
                for (const o of this._progressiveDoneListeners)
                  o();
              });
            }
            transportReady() {
              this._readyCapability.resolve();
            }
            requestDataRange(o, T) {
              (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
            }
            abort() {
            }
          }
          exports.PDFDataRangeTransport = PDFDataRangeTransport;
          class PDFDocumentProxy {
            constructor(o, T) {
              this._pdfInfo = o, this._transport = T, Object.defineProperty(this, "getJavaScript", {
                value: () => ((0, _display_utils.deprecated)("`PDFDocumentProxy.getJavaScript`, please use `PDFDocumentProxy.getJSActions` instead."), this.getJSActions().then((P) => {
                  if (!P)
                    return P;
                  const Y = [];
                  for (const tt in P)
                    Y.push(...P[tt]);
                  return Y;
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
            getPage(o) {
              return this._transport.getPage(o);
            }
            getPageIndex(o) {
              return this._transport.getPageIndex(o);
            }
            getDestinations() {
              return this._transport.getDestinations();
            }
            getDestination(o) {
              return this._transport.getDestination(o);
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
            cleanup(o = !1) {
              return this._transport.startCleanup(o || this.isPureXfa);
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
            constructor(o, T, P, Y = !1) {
              N(this, f);
              N(this, V);
              N(this, L, null);
              N(this, n, !1);
              this._pageIndex = o, this._pageInfo = T, this._transport = P, this._stats = Y ? new _display_utils.StatTimer() : null, this._pdfBug = Y, this.commonObjs = P.commonObjs, this.objs = new PDFObjects(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
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
              scale: o,
              rotation: T = this.rotate,
              offsetX: P = 0,
              offsetY: Y = 0,
              dontFlip: tt = !1
            } = {}) {
              return new _display_utils.PageViewport({
                viewBox: this.view,
                scale: o,
                rotation: T,
                offsetX: P,
                offsetY: Y,
                dontFlip: tt
              });
            }
            getAnnotations({
              intent: o = "display"
            } = {}) {
              const T = this._transport.getRenderingIntent(o);
              return this._transport.getAnnotations(this._pageIndex, T.renderingIntent);
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
              var o;
              return ((o = this._transport._htmlForXfa) == null ? void 0 : o.children[this._pageIndex]) || null;
            }
            render({
              canvasContext: o,
              viewport: T,
              intent: P = "display",
              annotationMode: Y = _util.AnnotationMode.ENABLE,
              transform: tt = null,
              background: x = null,
              optionalContentConfigPromise: K = null,
              annotationCanvasMap: Z = null,
              pageColors: Q = null,
              printAnnotationStorage: v = null
            }) {
              var l, R;
              (l = this._stats) == null || l.time("Overall");
              const j = this._transport.getRenderingIntent(P, Y, v);
              it(this, n, !1), X(this, V, we).call(this), K || (K = this._transport.getOptionalContentConfig());
              let D = this._intentStates.get(j.cacheKey);
              D || (D = /* @__PURE__ */ Object.create(null), this._intentStates.set(j.cacheKey, D)), D.streamReaderCancelTimeout && (clearTimeout(D.streamReaderCancelTimeout), D.streamReaderCancelTimeout = null);
              const lt = !!(j.renderingIntent & _util.RenderingIntentFlag.PRINT);
              D.displayReadyCapability || (D.displayReadyCapability = new _util.PromiseCapability(), D.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
              }, (R = this._stats) == null || R.time("Page Request"), this._pumpOperatorList(j));
              const _t = ($) => {
                var W, nt;
                D.renderTasks.delete(k), (this._maybeCleanupAfterRender || lt) && it(this, n, !0), X(this, f, oe).call(this, !lt), $ ? (k.capability.reject($), this._abortOperatorList({
                  intentState: D,
                  reason: $ instanceof Error ? $ : new Error($)
                })) : k.capability.resolve(), (W = this._stats) == null || W.timeEnd("Rendering"), (nt = this._stats) == null || nt.timeEnd("Overall");
              }, k = new InternalRenderTask({
                callback: _t,
                params: {
                  canvasContext: o,
                  viewport: T,
                  transform: tt,
                  background: x
                },
                objs: this.objs,
                commonObjs: this.commonObjs,
                annotationCanvasMap: Z,
                operatorList: D.operatorList,
                pageIndex: this._pageIndex,
                canvasFactory: this._transport.canvasFactory,
                filterFactory: this._transport.filterFactory,
                useRequestAnimationFrame: !lt,
                pdfBug: this._pdfBug,
                pageColors: Q
              });
              (D.renderTasks || (D.renderTasks = /* @__PURE__ */ new Set())).add(k);
              const a = k.task;
              return Promise.all([D.displayReadyCapability.promise, K]).then(([$, W]) => {
                var nt;
                if (this.destroyed) {
                  _t();
                  return;
                }
                (nt = this._stats) == null || nt.time("Rendering"), k.initializeGraphics({
                  transparency: $,
                  optionalContentConfig: W
                }), k.operatorListChanged();
              }).catch(_t), a;
            }
            getOperatorList({
              intent: o = "display",
              annotationMode: T = _util.AnnotationMode.ENABLE,
              printAnnotationStorage: P = null
            } = {}) {
              var Z;
              function Y() {
                x.operatorList.lastChunk && (x.opListReadCapability.resolve(x.operatorList), x.renderTasks.delete(K));
              }
              const tt = this._transport.getRenderingIntent(o, T, P, !0);
              let x = this._intentStates.get(tt.cacheKey);
              x || (x = /* @__PURE__ */ Object.create(null), this._intentStates.set(tt.cacheKey, x));
              let K;
              return x.opListReadCapability || (K = /* @__PURE__ */ Object.create(null), K.operatorListChanged = Y, x.opListReadCapability = new _util.PromiseCapability(), (x.renderTasks || (x.renderTasks = /* @__PURE__ */ new Set())).add(K), x.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
              }, (Z = this._stats) == null || Z.time("Page Request"), this._pumpOperatorList(tt)), x.opListReadCapability.promise;
            }
            streamTextContent({
              includeMarkedContent: o = !1,
              disableNormalization: T = !1
            } = {}) {
              return this._transport.messageHandler.sendWithStream("GetTextContent", {
                pageIndex: this._pageIndex,
                includeMarkedContent: o === !0,
                disableNormalization: T === !0
              }, {
                highWaterMark: 100,
                size(Y) {
                  return Y.items.length;
                }
              });
            }
            getTextContent(o = {}) {
              if (this._transport._htmlForXfa)
                return this.getXfa().then((P) => _xfa_text.XfaText.textContent(P));
              const T = this.streamTextContent(o);
              return new Promise(function(P, Y) {
                function tt() {
                  x.read().then(function({
                    value: Z,
                    done: Q
                  }) {
                    if (Q) {
                      P(K);
                      return;
                    }
                    Object.assign(K.styles, Z.styles), K.items.push(...Z.items), tt();
                  }, Y);
                }
                const x = T.getReader(), K = {
                  items: [],
                  styles: /* @__PURE__ */ Object.create(null)
                };
                tt();
              });
            }
            getStructTree() {
              return this._transport.getStructTree(this._pageIndex);
            }
            _destroy() {
              this.destroyed = !0;
              const o = [];
              for (const T of this._intentStates.values())
                if (this._abortOperatorList({
                  intentState: T,
                  reason: new Error("Page was destroyed."),
                  force: !0
                }), !T.opListReadCapability)
                  for (const P of T.renderTasks)
                    o.push(P.completed), P.cancel();
              return this.objs.clear(), it(this, n, !1), X(this, V, we).call(this), Promise.all(o);
            }
            cleanup(o = !1) {
              it(this, n, !0);
              const T = X(this, f, oe).call(this, !1);
              return o && T && this._stats && (this._stats = new _display_utils.StatTimer()), T;
            }
            _startRenderPage(o, T) {
              var Y, tt;
              const P = this._intentStates.get(T);
              P && ((Y = this._stats) == null || Y.timeEnd("Page Request"), (tt = P.displayReadyCapability) == null || tt.resolve(o));
            }
            _renderPageChunk(o, T) {
              for (let P = 0, Y = o.length; P < Y; P++)
                T.operatorList.fnArray.push(o.fnArray[P]), T.operatorList.argsArray.push(o.argsArray[P]);
              T.operatorList.lastChunk = o.lastChunk, T.operatorList.separateAnnots = o.separateAnnots;
              for (const P of T.renderTasks)
                P.operatorListChanged();
              o.lastChunk && X(this, f, oe).call(this, !0);
            }
            _pumpOperatorList({
              renderingIntent: o,
              cacheKey: T,
              annotationStorageSerializable: P
            }) {
              const {
                map: Y,
                transfers: tt
              } = P, K = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                pageIndex: this._pageIndex,
                intent: o,
                cacheKey: T,
                annotationStorage: Y
              }, tt).getReader(), Z = this._intentStates.get(T);
              Z.streamReader = K;
              const Q = () => {
                K.read().then(({
                  value: v,
                  done: j
                }) => {
                  if (j) {
                    Z.streamReader = null;
                    return;
                  }
                  this._transport.destroyed || (this._renderPageChunk(v, Z), Q());
                }, (v) => {
                  if (Z.streamReader = null, !this._transport.destroyed) {
                    if (Z.operatorList) {
                      Z.operatorList.lastChunk = !0;
                      for (const j of Z.renderTasks)
                        j.operatorListChanged();
                      X(this, f, oe).call(this, !0);
                    }
                    if (Z.displayReadyCapability)
                      Z.displayReadyCapability.reject(v);
                    else if (Z.opListReadCapability)
                      Z.opListReadCapability.reject(v);
                    else
                      throw v;
                  }
                });
              };
              Q();
            }
            _abortOperatorList({
              intentState: o,
              reason: T,
              force: P = !1
            }) {
              if (o.streamReader) {
                if (o.streamReaderCancelTimeout && (clearTimeout(o.streamReaderCancelTimeout), o.streamReaderCancelTimeout = null), !P) {
                  if (o.renderTasks.size > 0)
                    return;
                  if (T instanceof _display_utils.RenderingCancelledException) {
                    let Y = RENDERING_CANCELLED_TIMEOUT;
                    T.extraDelay > 0 && T.extraDelay < 1e3 && (Y += T.extraDelay), o.streamReaderCancelTimeout = setTimeout(() => {
                      o.streamReaderCancelTimeout = null, this._abortOperatorList({
                        intentState: o,
                        reason: T,
                        force: !0
                      });
                    }, Y);
                    return;
                  }
                }
                if (o.streamReader.cancel(new _util.AbortException(T.message)).catch(() => {
                }), o.streamReader = null, !this._transport.destroyed) {
                  for (const [Y, tt] of this._intentStates)
                    if (tt === o) {
                      this._intentStates.delete(Y);
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
          L = new WeakMap(), n = new WeakMap(), f = new WeakSet(), oe = function(o = !1) {
            if (X(this, V, we).call(this), !t(this, n) || this.destroyed)
              return !1;
            if (o)
              return it(this, L, setTimeout(() => {
                it(this, L, null), X(this, f, oe).call(this, !1);
              }, DELAYED_CLEANUP_TIMEOUT)), !1;
            for (const {
              renderTasks: T,
              operatorList: P
            } of this._intentStates.values())
              if (T.size > 0 || !P.lastChunk)
                return !1;
            return this._intentStates.clear(), this.objs.clear(), it(this, n, !1), !0;
          }, V = new WeakSet(), we = function() {
            t(this, L) && (clearTimeout(t(this, L)), it(this, L, null));
          }, exports.PDFPageProxy = PDFPageProxy;
          class LoopbackPort {
            constructor() {
              N(this, c, /* @__PURE__ */ new Set());
              N(this, d, Promise.resolve());
            }
            postMessage(o, T) {
              const P = {
                data: structuredClone(o, T ? {
                  transfer: T
                } : null)
              };
              t(this, d).then(() => {
                for (const Y of t(this, c))
                  Y.call(this, P);
              });
            }
            addEventListener(o, T) {
              t(this, c).add(T);
            }
            removeEventListener(o, T) {
              t(this, c).delete(T);
            }
            terminate() {
              t(this, c).clear();
            }
          }
          c = new WeakMap(), d = new WeakMap(), exports.LoopbackPort = LoopbackPort;
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
              const _ = (r = document == null ? void 0 : document.currentScript) == null ? void 0 : r.src;
              _ && (PDFWorkerUtil.fallbackWorkerSrc = _.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
            }
            PDFWorkerUtil.isSameOrigin = function(_, o) {
              let T;
              try {
                if (T = new URL(_), !T.origin || T.origin === "null")
                  return !1;
              } catch {
                return !1;
              }
              const P = new URL(o, T);
              return T.origin === P.origin;
            }, PDFWorkerUtil.createCDNWrapper = function(_) {
              const o = `importScripts("${_}");`;
              return URL.createObjectURL(new Blob([o]));
            };
          }
          const _PDFWorker = class _PDFWorker {
            constructor({
              name: _ = null,
              port: o = null,
              verbosity: T = (0, _util.getVerbosityLevel)()
            } = {}) {
              var P;
              if (this.name = _, this.destroyed = !1, this.verbosity = T, this._readyCapability = new _util.PromiseCapability(), this._port = null, this._webWorker = null, this._messageHandler = null, o) {
                if ((P = t(_PDFWorker, F)) != null && P.has(o))
                  throw new Error("Cannot use more than one PDFWorker per port.");
                (t(_PDFWorker, F) || it(_PDFWorker, F, /* @__PURE__ */ new WeakMap())).set(o, this), this._initializeFromPort(o);
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
            _initializeFromPort(_) {
              this._port = _, this._messageHandler = new _message_handler.MessageHandler("main", "worker", _), this._messageHandler.on("ready", function() {
              }), this._readyCapability.resolve(), this._messageHandler.send("configure", {
                verbosity: this.verbosity
              });
            }
            _initialize() {
              if (!PDFWorkerUtil.isWorkerDisabled && !_PDFWorker._mainThreadWorkerMessageHandler) {
                let {
                  workerSrc: _
                } = _PDFWorker;
                try {
                  PDFWorkerUtil.isSameOrigin(window.location.href, _) || (_ = PDFWorkerUtil.createCDNWrapper(new URL(_, window.location).href));
                  const o = new Worker(_), T = new _message_handler.MessageHandler("main", "worker", o), P = () => {
                    o.removeEventListener("error", Y), T.destroy(), o.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
                  }, Y = () => {
                    this._webWorker || P();
                  };
                  o.addEventListener("error", Y), T.on("test", (x) => {
                    if (o.removeEventListener("error", Y), this.destroyed) {
                      P();
                      return;
                    }
                    x ? (this._messageHandler = T, this._port = o, this._webWorker = o, this._readyCapability.resolve(), T.send("configure", {
                      verbosity: this.verbosity
                    })) : (this._setupFakeWorker(), T.destroy(), o.terminate());
                  }), T.on("ready", (x) => {
                    if (o.removeEventListener("error", Y), this.destroyed) {
                      P();
                      return;
                    }
                    try {
                      tt();
                    } catch {
                      this._setupFakeWorker();
                    }
                  });
                  const tt = () => {
                    const x = new Uint8Array();
                    T.send("test", x, [x.buffer]);
                  };
                  tt();
                  return;
                } catch {
                  (0, _util.info)("The worker has been disabled.");
                }
              }
              this._setupFakeWorker();
            }
            _setupFakeWorker() {
              PDFWorkerUtil.isWorkerDisabled || ((0, _util.warn)("Setting up fake worker."), PDFWorkerUtil.isWorkerDisabled = !0), _PDFWorker._setupFakeWorkerGlobal.then((_) => {
                if (this.destroyed) {
                  this._readyCapability.reject(new Error("Worker was destroyed"));
                  return;
                }
                const o = new LoopbackPort();
                this._port = o;
                const T = `fake${PDFWorkerUtil.fakeWorkerId++}`, P = new _message_handler.MessageHandler(T + "_worker", T, o);
                _.setup(P, o);
                const Y = new _message_handler.MessageHandler(T, T + "_worker", o);
                this._messageHandler = Y, this._readyCapability.resolve(), Y.send("configure", {
                  verbosity: this.verbosity
                });
              }).catch((_) => {
                this._readyCapability.reject(new Error(`Setting up fake worker failed: "${_.message}".`));
              });
            }
            destroy() {
              var _;
              this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (_ = t(_PDFWorker, F)) == null || _.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
            }
            static fromPort(_) {
              var T;
              if (!(_ != null && _.port))
                throw new Error("PDFWorker.fromPort - invalid method signature.");
              const o = (T = t(this, F)) == null ? void 0 : T.get(_.port);
              if (o) {
                if (o._pendingDestroy)
                  throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
                return o;
              }
              return new _PDFWorker(_);
            }
            static get workerSrc() {
              if (_worker_options.GlobalWorkerOptions.workerSrc)
                return _worker_options.GlobalWorkerOptions.workerSrc;
              if (PDFWorkerUtil.fallbackWorkerSrc !== null)
                return _util.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'), PDFWorkerUtil.fallbackWorkerSrc;
              throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
            }
            static get _mainThreadWorkerMessageHandler() {
              var _;
              try {
                return ((_ = globalThis.pdfjsWorker) == null ? void 0 : _.WorkerMessageHandler) || null;
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
          F = new WeakMap(), N(_PDFWorker, F, void 0);
          let PDFWorker = _PDFWorker;
          exports.PDFWorker = PDFWorker;
          class WorkerTransport {
            constructor(o, T, P, Y, tt) {
              N(this, u);
              N(this, M, /* @__PURE__ */ new Map());
              N(this, S, /* @__PURE__ */ new Map());
              N(this, h, /* @__PURE__ */ new Map());
              N(this, p, null);
              this.messageHandler = o, this.loadingTask = T, this.commonObjs = new PDFObjects(), this.fontLoader = new _font_loader.FontLoader({
                ownerDocument: Y.ownerDocument,
                styleElement: Y.styleElement
              }), this._params = Y, this.canvasFactory = tt.canvasFactory, this.filterFactory = tt.filterFactory, this.cMapReaderFactory = tt.cMapReaderFactory, this.standardFontDataFactory = tt.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = P, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = new _util.PromiseCapability(), this.setupMessageHandler();
            }
            get annotationStorage() {
              return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
            }
            getRenderingIntent(o, T = _util.AnnotationMode.ENABLE, P = null, Y = !1) {
              let tt = _util.RenderingIntentFlag.DISPLAY, x = _annotation_storage.SerializableEmpty;
              switch (o) {
                case "any":
                  tt = _util.RenderingIntentFlag.ANY;
                  break;
                case "display":
                  break;
                case "print":
                  tt = _util.RenderingIntentFlag.PRINT;
                  break;
                default:
                  (0, _util.warn)(`getRenderingIntent - invalid intent: ${o}`);
              }
              switch (T) {
                case _util.AnnotationMode.DISABLE:
                  tt += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                  break;
                case _util.AnnotationMode.ENABLE:
                  break;
                case _util.AnnotationMode.ENABLE_FORMS:
                  tt += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                  break;
                case _util.AnnotationMode.ENABLE_STORAGE:
                  tt += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE, x = (tt & _util.RenderingIntentFlag.PRINT && P instanceof _annotation_storage.PrintAnnotationStorage ? P : this.annotationStorage).serializable;
                  break;
                default:
                  (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${T}`);
              }
              return Y && (tt += _util.RenderingIntentFlag.OPLIST), {
                renderingIntent: tt,
                cacheKey: `${tt}_${x.hash}`,
                annotationStorageSerializable: x
              };
            }
            destroy() {
              var P;
              if (this.destroyCapability)
                return this.destroyCapability.promise;
              this.destroyed = !0, this.destroyCapability = new _util.PromiseCapability(), (P = t(this, p)) == null || P.reject(new Error("Worker was destroyed during onPassword callback"));
              const o = [];
              for (const Y of t(this, S).values())
                o.push(Y._destroy());
              t(this, S).clear(), t(this, h).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
              const T = this.messageHandler.sendWithPromise("Terminate", null);
              return o.push(T), Promise.all(o).then(() => {
                var Y;
                this.commonObjs.clear(), this.fontLoader.clear(), t(this, M).clear(), this.filterFactory.destroy(), (Y = this._networkStream) == null || Y.cancelAllRequests(new _util.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
              }, this.destroyCapability.reject), this.destroyCapability.promise;
            }
            setupMessageHandler() {
              const {
                messageHandler: o,
                loadingTask: T
              } = this;
              o.on("GetReader", (P, Y) => {
                (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (tt) => {
                  this._lastProgress = {
                    loaded: tt.loaded,
                    total: tt.total
                  };
                }, Y.onPull = () => {
                  this._fullReader.read().then(function({
                    value: tt,
                    done: x
                  }) {
                    if (x) {
                      Y.close();
                      return;
                    }
                    (0, _util.assert)(tt instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), Y.enqueue(new Uint8Array(tt), 1, [tt]);
                  }).catch((tt) => {
                    Y.error(tt);
                  });
                }, Y.onCancel = (tt) => {
                  this._fullReader.cancel(tt), Y.ready.catch((x) => {
                    if (!this.destroyed)
                      throw x;
                  });
                };
              }), o.on("ReaderHeadersReady", (P) => {
                const Y = new _util.PromiseCapability(), tt = this._fullReader;
                return tt.headersReady.then(() => {
                  var x;
                  (!tt.isStreamingSupported || !tt.isRangeSupported) && (this._lastProgress && ((x = T.onProgress) == null || x.call(T, this._lastProgress)), tt.onProgress = (K) => {
                    var Z;
                    (Z = T.onProgress) == null || Z.call(T, {
                      loaded: K.loaded,
                      total: K.total
                    });
                  }), Y.resolve({
                    isStreamingSupported: tt.isStreamingSupported,
                    isRangeSupported: tt.isRangeSupported,
                    contentLength: tt.contentLength
                  });
                }, Y.reject), Y.promise;
              }), o.on("GetRangeReader", (P, Y) => {
                (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                const tt = this._networkStream.getRangeReader(P.begin, P.end);
                if (!tt) {
                  Y.close();
                  return;
                }
                Y.onPull = () => {
                  tt.read().then(function({
                    value: x,
                    done: K
                  }) {
                    if (K) {
                      Y.close();
                      return;
                    }
                    (0, _util.assert)(x instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), Y.enqueue(new Uint8Array(x), 1, [x]);
                  }).catch((x) => {
                    Y.error(x);
                  });
                }, Y.onCancel = (x) => {
                  tt.cancel(x), Y.ready.catch((K) => {
                    if (!this.destroyed)
                      throw K;
                  });
                };
              }), o.on("GetDoc", ({
                pdfInfo: P
              }) => {
                this._numPages = P.numPages, this._htmlForXfa = P.htmlForXfa, delete P.htmlForXfa, T._capability.resolve(new PDFDocumentProxy(P, this));
              }), o.on("DocException", function(P) {
                let Y;
                switch (P.name) {
                  case "PasswordException":
                    Y = new _util.PasswordException(P.message, P.code);
                    break;
                  case "InvalidPDFException":
                    Y = new _util.InvalidPDFException(P.message);
                    break;
                  case "MissingPDFException":
                    Y = new _util.MissingPDFException(P.message);
                    break;
                  case "UnexpectedResponseException":
                    Y = new _util.UnexpectedResponseException(P.message, P.status);
                    break;
                  case "UnknownErrorException":
                    Y = new _util.UnknownErrorException(P.message, P.details);
                    break;
                  default:
                    (0, _util.unreachable)("DocException - expected a valid Error.");
                }
                T._capability.reject(Y);
              }), o.on("PasswordRequest", (P) => {
                if (it(this, p, new _util.PromiseCapability()), T.onPassword) {
                  const Y = (tt) => {
                    tt instanceof Error ? t(this, p).reject(tt) : t(this, p).resolve({
                      password: tt
                    });
                  };
                  try {
                    T.onPassword(Y, P.code);
                  } catch (tt) {
                    t(this, p).reject(tt);
                  }
                } else
                  t(this, p).reject(new _util.PasswordException(P.message, P.code));
                return t(this, p).promise;
              }), o.on("DataLoaded", (P) => {
                var Y;
                (Y = T.onProgress) == null || Y.call(T, {
                  loaded: P.length,
                  total: P.length
                }), this.downloadInfoCapability.resolve(P);
              }), o.on("StartRenderPage", (P) => {
                if (this.destroyed)
                  return;
                t(this, S).get(P.pageIndex)._startRenderPage(P.transparency, P.cacheKey);
              }), o.on("commonobj", ([P, Y, tt]) => {
                var x;
                if (!this.destroyed && !this.commonObjs.has(P))
                  switch (Y) {
                    case "Font":
                      const K = this._params;
                      if ("error" in tt) {
                        const v = tt.error;
                        (0, _util.warn)(`Error during font loading: ${v}`), this.commonObjs.resolve(P, v);
                        break;
                      }
                      const Z = K.pdfBug && ((x = globalThis.FontInspector) != null && x.enabled) ? (v, j) => globalThis.FontInspector.fontAdded(v, j) : null, Q = new _font_loader.FontFaceObject(tt, {
                        isEvalSupported: K.isEvalSupported,
                        disableFontFace: K.disableFontFace,
                        ignoreErrors: K.ignoreErrors,
                        inspectFont: Z
                      });
                      this.fontLoader.bind(Q).catch((v) => o.sendWithPromise("FontFallback", {
                        id: P
                      })).finally(() => {
                        !K.fontExtraProperties && Q.data && (Q.data = null), this.commonObjs.resolve(P, Q);
                      });
                      break;
                    case "FontPath":
                    case "Image":
                    case "Pattern":
                      this.commonObjs.resolve(P, tt);
                      break;
                    default:
                      throw new Error(`Got unknown common object type ${Y}`);
                  }
              }), o.on("obj", ([P, Y, tt, x]) => {
                var Z;
                if (this.destroyed)
                  return;
                const K = t(this, S).get(Y);
                if (!K.objs.has(P))
                  switch (tt) {
                    case "Image":
                      if (K.objs.resolve(P, x), x) {
                        let Q;
                        if (x.bitmap) {
                          const {
                            width: v,
                            height: j
                          } = x;
                          Q = v * j * 4;
                        } else
                          Q = ((Z = x.data) == null ? void 0 : Z.length) || 0;
                        Q > _util.MAX_IMAGE_SIZE_TO_CACHE && (K._maybeCleanupAfterRender = !0);
                      }
                      break;
                    case "Pattern":
                      K.objs.resolve(P, x);
                      break;
                    default:
                      throw new Error(`Got unknown object type ${tt}`);
                  }
              }), o.on("DocProgress", (P) => {
                var Y;
                this.destroyed || (Y = T.onProgress) == null || Y.call(T, {
                  loaded: P.loaded,
                  total: P.total
                });
              }), o.on("FetchBuiltInCMap", (P) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(P) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), o.on("FetchStandardFontData", (P) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(P) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
            }
            getData() {
              return this.messageHandler.sendWithPromise("GetData", null);
            }
            saveDocument() {
              var P;
              this.annotationStorage.size <= 0 && (0, _util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
              const {
                map: o,
                transfers: T
              } = this.annotationStorage.serializable;
              return this.messageHandler.sendWithPromise("SaveDocument", {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: o,
                filename: ((P = this._fullReader) == null ? void 0 : P.filename) ?? null
              }, T).finally(() => {
                this.annotationStorage.resetModified();
              });
            }
            getPage(o) {
              if (!Number.isInteger(o) || o <= 0 || o > this._numPages)
                return Promise.reject(new Error("Invalid page request."));
              const T = o - 1, P = t(this, h).get(T);
              if (P)
                return P;
              const Y = this.messageHandler.sendWithPromise("GetPage", {
                pageIndex: T
              }).then((tt) => {
                if (this.destroyed)
                  throw new Error("Transport destroyed");
                const x = new PDFPageProxy(T, tt, this, this._params.pdfBug);
                return t(this, S).set(T, x), x;
              });
              return t(this, h).set(T, Y), Y;
            }
            getPageIndex(o) {
              return typeof o != "object" || o === null || !Number.isInteger(o.num) || o.num < 0 || !Number.isInteger(o.gen) || o.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", {
                num: o.num,
                gen: o.gen
              });
            }
            getAnnotations(o, T) {
              return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: o,
                intent: T
              });
            }
            getFieldObjects() {
              return X(this, u, Pe).call(this, "GetFieldObjects");
            }
            hasJSActions() {
              return X(this, u, Pe).call(this, "HasJSActions");
            }
            getCalculationOrderIds() {
              return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
            }
            getDestinations() {
              return this.messageHandler.sendWithPromise("GetDestinations", null);
            }
            getDestination(o) {
              return typeof o != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
                id: o
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
              return X(this, u, Pe).call(this, "GetDocJSActions");
            }
            getPageJSActions(o) {
              return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex: o
              });
            }
            getStructTree(o) {
              return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex: o
              });
            }
            getOutline() {
              return this.messageHandler.sendWithPromise("GetOutline", null);
            }
            getOptionalContentConfig() {
              return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((o) => new _optional_content_config.OptionalContentConfig(o));
            }
            getPermissions() {
              return this.messageHandler.sendWithPromise("GetPermissions", null);
            }
            getMetadata() {
              const o = "GetMetadata", T = t(this, M).get(o);
              if (T)
                return T;
              const P = this.messageHandler.sendWithPromise(o, null).then((Y) => {
                var tt, x;
                return {
                  info: Y[0],
                  metadata: Y[1] ? new _metadata.Metadata(Y[1]) : null,
                  contentDispositionFilename: ((tt = this._fullReader) == null ? void 0 : tt.filename) ?? null,
                  contentLength: ((x = this._fullReader) == null ? void 0 : x.contentLength) ?? null
                };
              });
              return t(this, M).set(o, P), P;
            }
            getMarkInfo() {
              return this.messageHandler.sendWithPromise("GetMarkInfo", null);
            }
            async startCleanup(o = !1) {
              if (!this.destroyed) {
                await this.messageHandler.sendWithPromise("Cleanup", null);
                for (const T of t(this, S).values())
                  if (!T.cleanup())
                    throw new Error(`startCleanup: Page ${T.pageNumber} is currently rendering.`);
                this.commonObjs.clear(), o || this.fontLoader.clear(), t(this, M).clear(), this.filterFactory.destroy(!0);
              }
            }
            get loadingParams() {
              const {
                disableAutoFetch: o,
                enableXfa: T
              } = this._params;
              return (0, _util.shadow)(this, "loadingParams", {
                disableAutoFetch: o,
                enableXfa: T
              });
            }
          }
          M = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), u = new WeakSet(), Pe = function(o, T = null) {
            const P = t(this, M).get(o);
            if (P)
              return P;
            const Y = this.messageHandler.sendWithPromise(o, T);
            return t(this, M).set(o, Y), Y;
          };
          class PDFObjects {
            constructor() {
              N(this, g);
              N(this, b, /* @__PURE__ */ Object.create(null));
            }
            get(o, T = null) {
              if (T) {
                const Y = X(this, g, ze).call(this, o);
                return Y.capability.promise.then(() => T(Y.data)), null;
              }
              const P = t(this, b)[o];
              if (!(P != null && P.capability.settled))
                throw new Error(`Requesting object that isn't resolved yet ${o}.`);
              return P.data;
            }
            has(o) {
              const T = t(this, b)[o];
              return (T == null ? void 0 : T.capability.settled) || !1;
            }
            resolve(o, T = null) {
              const P = X(this, g, ze).call(this, o);
              P.data = T, P.capability.resolve();
            }
            clear() {
              var o;
              for (const T in t(this, b)) {
                const {
                  data: P
                } = t(this, b)[T];
                (o = P == null ? void 0 : P.bitmap) == null || o.close();
              }
              it(this, b, /* @__PURE__ */ Object.create(null));
            }
          }
          b = new WeakMap(), g = new WeakSet(), ze = function(o) {
            var T;
            return (T = t(this, b))[o] || (T[o] = {
              capability: new _util.PromiseCapability(),
              data: null
            });
          };
          class RenderTask {
            constructor(o) {
              N(this, s, null);
              it(this, s, o), this.onContinue = null;
            }
            get promise() {
              return t(this, s).capability.promise;
            }
            cancel(o = 0) {
              t(this, s).cancel(null, o);
            }
            get separateAnnots() {
              const {
                separateAnnots: o
              } = t(this, s).operatorList;
              if (!o)
                return !1;
              const {
                annotationCanvasMap: T
              } = t(this, s);
              return o.form || o.canvas && (T == null ? void 0 : T.size) > 0;
            }
          }
          s = new WeakMap(), exports.RenderTask = RenderTask;
          const E = class E {
            constructor({
              callback: o,
              params: T,
              objs: P,
              commonObjs: Y,
              annotationCanvasMap: tt,
              operatorList: x,
              pageIndex: K,
              canvasFactory: Z,
              filterFactory: Q,
              useRequestAnimationFrame: v = !1,
              pdfBug: j = !1,
              pageColors: D = null
            }) {
              this.callback = o, this.params = T, this.objs = P, this.commonObjs = Y, this.annotationCanvasMap = tt, this.operatorListIdx = null, this.operatorList = x, this._pageIndex = K, this.canvasFactory = Z, this.filterFactory = Q, this._pdfBug = j, this.pageColors = D, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = v === !0 && typeof window < "u", this.cancelled = !1, this.capability = new _util.PromiseCapability(), this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = T.canvasContext.canvas;
            }
            get completed() {
              return this.capability.promise.catch(function() {
              });
            }
            initializeGraphics({
              transparency: o = !1,
              optionalContentConfig: T
            }) {
              var K, Z;
              if (this.cancelled)
                return;
              if (this._canvas) {
                if (t(E, i).has(this._canvas))
                  throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                t(E, i).add(this._canvas);
              }
              this._pdfBug && ((K = globalThis.StepperManager) != null && K.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
              const {
                canvasContext: P,
                viewport: Y,
                transform: tt,
                background: x
              } = this.params;
              this.gfx = new _canvas.CanvasGraphics(P, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: T
              }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
                transform: tt,
                viewport: Y,
                transparency: o,
                background: x
              }), this.operatorListIdx = 0, this.graphicsReady = !0, (Z = this.graphicsReadyCallback) == null || Z.call(this);
            }
            cancel(o = null, T = 0) {
              var P;
              this.running = !1, this.cancelled = !0, (P = this.gfx) == null || P.endDrawing(), this._canvas && t(E, i).delete(this._canvas), this.callback(o || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, T));
            }
            operatorListChanged() {
              var o;
              if (!this.graphicsReady) {
                this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
                return;
              }
              (o = this.stepper) == null || o.updateOperatorList(this.operatorList), !this.running && this._continue();
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
              this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(this.pageColors), this._canvas && t(E, i).delete(this._canvas), this.callback())));
            }
          };
          i = new WeakMap(), N(E, i, /* @__PURE__ */ new WeakSet());
          let InternalRenderTask = E;
          const version = "3.10.111";
          exports.version = version;
          const build = "e142baecb";
          exports.build = build;
        },
        /* 3 */
        /***/
        (A, e, L) => {
          var d, r, F, zi, S;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.SerializableEmpty = e.PrintAnnotationStorage = e.AnnotationStorage = void 0;
          var n = L(1), f = L(4), q = L(8);
          const V = Object.freeze({
            map: null,
            hash: "",
            transfers: void 0
          });
          e.SerializableEmpty = V;
          class I {
            constructor() {
              N(this, F);
              N(this, d, !1);
              N(this, r, /* @__PURE__ */ new Map());
              this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
            }
            getValue(p, u) {
              const y = t(this, r).get(p);
              return y === void 0 ? u : Object.assign(u, y);
            }
            getRawValue(p) {
              return t(this, r).get(p);
            }
            remove(p) {
              if (t(this, r).delete(p), t(this, r).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
                for (const u of t(this, r).values())
                  if (u instanceof f.AnnotationEditor)
                    return;
                this.onAnnotationEditor(null);
              }
            }
            setValue(p, u) {
              const y = t(this, r).get(p);
              let b = !1;
              if (y !== void 0)
                for (const [g, w] of Object.entries(u))
                  y[g] !== w && (b = !0, y[g] = w);
              else
                b = !0, t(this, r).set(p, u);
              b && X(this, F, zi).call(this), u instanceof f.AnnotationEditor && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(u.constructor._type);
            }
            has(p) {
              return t(this, r).has(p);
            }
            getAll() {
              return t(this, r).size > 0 ? (0, n.objectFromMap)(t(this, r)) : null;
            }
            setAll(p) {
              for (const [u, y] of Object.entries(p))
                this.setValue(u, y);
            }
            get size() {
              return t(this, r).size;
            }
            resetModified() {
              t(this, d) && (it(this, d, !1), typeof this.onResetModified == "function" && this.onResetModified());
            }
            get print() {
              return new c(this);
            }
            get serializable() {
              if (t(this, r).size === 0)
                return V;
              const p = /* @__PURE__ */ new Map(), u = new q.MurmurHash3_64(), y = [], b = /* @__PURE__ */ Object.create(null);
              let g = !1;
              for (const [w, s] of t(this, r)) {
                const i = s instanceof f.AnnotationEditor ? s.serialize(!1, b) : s;
                i && (p.set(w, i), u.update(`${w}:${JSON.stringify(i)}`), g || (g = !!i.bitmap));
              }
              if (g)
                for (const w of p.values())
                  w.bitmap && y.push(w.bitmap);
              return p.size > 0 ? {
                map: p,
                hash: u.hexdigest(),
                transfers: y
              } : V;
            }
          }
          d = new WeakMap(), r = new WeakMap(), F = new WeakSet(), zi = function() {
            t(this, d) || (it(this, d, !0), typeof this.onSetModified == "function" && this.onSetModified());
          }, e.AnnotationStorage = I;
          class c extends I {
            constructor(u) {
              super();
              N(this, S, void 0);
              const {
                map: y,
                hash: b,
                transfers: g
              } = u.serializable, w = structuredClone(y, g ? {
                transfer: g
              } : null);
              it(this, S, {
                map: w,
                hash: b,
                transfers: g
              });
            }
            get print() {
              (0, n.unreachable)("Should not call PrintAnnotationStorage.print");
            }
            get serializable() {
              return t(this, S);
            }
          }
          S = new WeakMap(), e.PrintAnnotationStorage = c;
        },
        /* 4 */
        /***/
        (A, e, L) => {
          var I, c, d, r, F, M, S, h, p, u, Ge, b, $e, w, Xe, i, Gi, _, $i, T, Xi, Y, qi, x, Yi;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.AnnotationEditor = void 0;
          var n = L(5), f = L(1);
          const Z = class Z {
            constructor(v) {
              N(this, u);
              N(this, w);
              N(this, _);
              N(this, T);
              N(this, Y);
              N(this, x);
              N(this, I, !1);
              N(this, c, null);
              N(this, d, this.focusin.bind(this));
              N(this, r, this.focusout.bind(this));
              N(this, F, !1);
              N(this, M, !1);
              N(this, S, !1);
              Zt(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
              Zt(this, "_uiManager", null);
              Zt(this, "_focusEventsAllowed", !0);
              N(this, h, !1);
              N(this, p, Z._zIndex++);
              this.constructor === Z && (0, f.unreachable)("Cannot initialize AnnotationEditor."), this.parent = v.parent, this.id = v.id, this.width = this.height = null, this.pageIndex = v.parent.pageIndex, this.name = v.name, this.div = null, this._uiManager = v.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = v.isCentered;
              const {
                rotation: j,
                rawDims: {
                  pageWidth: D,
                  pageHeight: lt,
                  pageX: _t,
                  pageY: k
                }
              } = this.parent.viewport;
              this.rotation = j, this.pageRotation = (360 + j - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [D, lt], this.pageTranslation = [_t, k];
              const [a, l] = this.parentDimensions;
              this.x = v.x / a, this.y = v.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
            }
            static get _defaultLineColor() {
              return (0, f.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
            }
            static deleteAnnotationElement(v) {
              const j = new V({
                id: v.parent.getNextId(),
                parent: v.parent,
                uiManager: v._uiManager
              });
              j.annotationElementId = v.annotationElementId, j.deleted = !0, j._uiManager.addToAnnotationStorage(j);
            }
            static initialize(v) {
            }
            static updateDefaultParams(v, j) {
            }
            static get defaultPropertiesToUpdate() {
              return [];
            }
            static isHandlingMimeForPasting(v) {
              return !1;
            }
            static paste(v, j) {
              (0, f.unreachable)("Not implemented");
            }
            get propertiesToUpdate() {
              return [];
            }
            get _isDraggable() {
              return t(this, h);
            }
            set _isDraggable(v) {
              var j;
              it(this, h, v), (j = this.div) == null || j.classList.toggle("draggable", v);
            }
            center() {
              const [v, j] = this.pageDimensions;
              switch (this.parentRotation) {
                case 90:
                  this.x -= this.height * j / (v * 2), this.y += this.width * v / (j * 2);
                  break;
                case 180:
                  this.x += this.width / 2, this.y += this.height / 2;
                  break;
                case 270:
                  this.x += this.height * j / (v * 2), this.y -= this.width * v / (j * 2);
                  break;
                default:
                  this.x -= this.width / 2, this.y -= this.height / 2;
                  break;
              }
              this.fixAndSetPosition();
            }
            addCommands(v) {
              this._uiManager.addCommands(v);
            }
            get currentLayer() {
              return this._uiManager.currentLayer;
            }
            setInBackground() {
              this.div.style.zIndex = 0;
            }
            setInForeground() {
              this.div.style.zIndex = t(this, p);
            }
            setParent(v) {
              v !== null && (this.pageIndex = v.pageIndex, this.pageDimensions = v.pageDimensions), this.parent = v;
            }
            focusin(v) {
              this._focusEventsAllowed && (t(this, F) ? it(this, F, !1) : this.parent.setSelected(this));
            }
            focusout(v) {
              var D;
              if (!this._focusEventsAllowed || !this.isAttachedToDOM)
                return;
              const j = v.relatedTarget;
              j != null && j.closest(`#${this.id}`) || (v.preventDefault(), (D = this.parent) != null && D.isMultipleSelection || this.commitOrRemove());
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
            setAt(v, j, D, lt) {
              const [_t, k] = this.parentDimensions;
              [D, lt] = this.screenToPageTranslation(D, lt), this.x = (v + D) / _t, this.y = (j + lt) / k, this.fixAndSetPosition();
            }
            translate(v, j) {
              X(this, u, Ge).call(this, this.parentDimensions, v, j);
            }
            translateInPage(v, j) {
              X(this, u, Ge).call(this, this.pageDimensions, v, j), this.moveInDOM(), this.div.scrollIntoView({
                block: "nearest"
              });
            }
            drag(v, j) {
              const [D, lt] = this.parentDimensions;
              if (this.x += v / D, this.y += j / lt, this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1) {
                const {
                  x: _t,
                  y: k
                } = this.div.getBoundingClientRect();
                this.parent.findNewParent(this, _t, k) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
              }
              this.div.style.left = `${(100 * this.x).toFixed(2)}%`, this.div.style.top = `${(100 * this.y).toFixed(2)}%`, this.div.scrollIntoView({
                block: "nearest"
              });
            }
            fixAndSetPosition() {
              const [v, j] = this.pageDimensions;
              let {
                x: D,
                y: lt,
                width: _t,
                height: k
              } = this;
              switch (_t *= v, k *= j, D *= v, lt *= j, this.rotation) {
                case 0:
                  D = Math.max(0, Math.min(v - _t, D)), lt = Math.max(0, Math.min(j - k, lt));
                  break;
                case 90:
                  D = Math.max(0, Math.min(v - k, D)), lt = Math.min(j, Math.max(_t, lt));
                  break;
                case 180:
                  D = Math.min(v, Math.max(_t, D)), lt = Math.min(j, Math.max(k, lt));
                  break;
                case 270:
                  D = Math.min(v, Math.max(k, D)), lt = Math.max(0, Math.min(j - _t, lt));
                  break;
              }
              this.x = D / v, this.y = lt / j, this.div.style.left = `${(100 * this.x).toFixed(2)}%`, this.div.style.top = `${(100 * this.y).toFixed(2)}%`;
            }
            screenToPageTranslation(v, j) {
              var D;
              return X(D = Z, b, $e).call(D, v, j, this.parentRotation);
            }
            pageTranslationToScreen(v, j) {
              var D;
              return X(D = Z, b, $e).call(D, v, j, 360 - this.parentRotation);
            }
            get parentScale() {
              return this._uiManager.viewParameters.realScale;
            }
            get parentRotation() {
              return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
            }
            get parentDimensions() {
              const {
                parentScale: v,
                pageDimensions: [j, D]
              } = this, lt = j * v, _t = D * v;
              return f.FeatureTest.isCSSRoundSupported ? [Math.round(lt), Math.round(_t)] : [lt, _t];
            }
            setDims(v, j) {
              const [D, lt] = this.parentDimensions;
              this.div.style.width = `${(100 * v / D).toFixed(2)}%`, t(this, I) || (this.div.style.height = `${(100 * j / lt).toFixed(2)}%`);
            }
            fixDims() {
              const {
                style: v
              } = this.div, {
                height: j,
                width: D
              } = v, lt = D.endsWith("%"), _t = !t(this, I) && j.endsWith("%");
              if (lt && _t)
                return;
              const [k, a] = this.parentDimensions;
              lt || (v.width = `${(100 * parseFloat(D) / k).toFixed(2)}%`), !t(this, I) && !_t && (v.height = `${(100 * parseFloat(j) / a).toFixed(2)}%`);
            }
            getInitialTranslation() {
              return [0, 0];
            }
            render() {
              this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.setAttribute("tabIndex", 0), this.setInForeground(), this.div.addEventListener("focusin", t(this, d)), this.div.addEventListener("focusout", t(this, r));
              const [v, j] = this.parentDimensions;
              this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * j / v).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * v / j).toFixed(2)}%`);
              const [D, lt] = this.getInitialTranslation();
              return this.translate(D, lt), (0, n.bindEvents)(this, this.div, ["pointerdown"]), this.div;
            }
            pointerdown(v) {
              const {
                isMac: j
              } = f.FeatureTest.platform;
              if (v.button !== 0 || v.ctrlKey && j) {
                v.preventDefault();
                return;
              }
              it(this, F, !0), X(this, x, Yi).call(this, v);
            }
            moveInDOM() {
              this.parent.moveEditorInDOM(this);
            }
            _setParentAndPosition(v, j, D) {
              v.changeParent(this), this.x = j, this.y = D, this.fixAndSetPosition(), this.moveInDOM();
            }
            getRect(v, j) {
              const D = this.parentScale, [lt, _t] = this.pageDimensions, [k, a] = this.pageTranslation, l = v / D, R = j / D, $ = this.x * lt, W = this.y * _t, nt = this.width * lt, st = this.height * _t;
              switch (this.rotation) {
                case 0:
                  return [$ + l + k, _t - W - R - st + a, $ + l + nt + k, _t - W - R + a];
                case 90:
                  return [$ + R + k, _t - W + l + a, $ + R + st + k, _t - W + l + nt + a];
                case 180:
                  return [$ - l - nt + k, _t - W + R + a, $ - l + k, _t - W + R + st + a];
                case 270:
                  return [$ - R - st + k, _t - W - l - nt + a, $ - R + k, _t - W - l + a];
                default:
                  throw new Error("Invalid rotation");
              }
            }
            getRectInCurrentCoords(v, j) {
              const [D, lt, _t, k] = v, a = _t - D, l = k - lt;
              switch (this.rotation) {
                case 0:
                  return [D, j - k, a, l];
                case 90:
                  return [D, j - lt, l, a];
                case 180:
                  return [_t, j - lt, a, l];
                case 270:
                  return [_t, j - k, l, a];
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
              it(this, S, !0);
            }
            disableEditMode() {
              it(this, S, !1);
            }
            isInEditMode() {
              return t(this, S);
            }
            shouldGetKeyboardEvents() {
              return !1;
            }
            needsToBeRebuilt() {
              return this.div && !this.isAttachedToDOM;
            }
            rebuild() {
              var v, j;
              (v = this.div) == null || v.addEventListener("focusin", t(this, d)), (j = this.div) == null || j.addEventListener("focusout", t(this, r));
            }
            serialize(v = !1, j = null) {
              (0, f.unreachable)("An editor must be serializable");
            }
            static deserialize(v, j, D) {
              const lt = new this.prototype.constructor({
                parent: j,
                id: j.getNextId(),
                uiManager: D
              });
              lt.rotation = v.rotation;
              const [_t, k] = lt.pageDimensions, [a, l, R, $] = lt.getRectInCurrentCoords(v.rect, k);
              return lt.x = a / _t, lt.y = l / k, lt.width = R / _t, lt.height = $ / k, lt;
            }
            remove() {
              this.div.removeEventListener("focusin", t(this, d)), this.div.removeEventListener("focusout", t(this, r)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this);
            }
            get isResizable() {
              return !1;
            }
            makeResizable() {
              this.isResizable && (X(this, _, $i).call(this), t(this, c).classList.remove("hidden"));
            }
            select() {
              var v;
              this.makeResizable(), (v = this.div) == null || v.classList.add("selectedEditor");
            }
            unselect() {
              var v, j, D;
              (v = t(this, c)) == null || v.classList.add("hidden"), (j = this.div) == null || j.classList.remove("selectedEditor"), (D = this.div) != null && D.contains(document.activeElement) && this._uiManager.currentLayer.div.focus();
            }
            updateParams(v, j) {
            }
            disableEditing() {
            }
            enableEditing() {
            }
            enterInEditMode() {
            }
            get contentDiv() {
              return this.div;
            }
            get isEditing() {
              return t(this, M);
            }
            set isEditing(v) {
              it(this, M, v), this.parent && (v ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
            }
            setAspectRatio(v, j) {
              it(this, I, !0);
              const D = v / j, {
                style: lt
              } = this.div;
              lt.aspectRatio = D, lt.height = "auto";
            }
            static get MIN_SIZE() {
              return 16;
            }
          };
          I = new WeakMap(), c = new WeakMap(), d = new WeakMap(), r = new WeakMap(), F = new WeakMap(), M = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), u = new WeakSet(), Ge = function([v, j], D, lt) {
            [D, lt] = this.screenToPageTranslation(D, lt), this.x += D / v, this.y += lt / j, this.fixAndSetPosition();
          }, b = new WeakSet(), $e = function(v, j, D) {
            switch (D) {
              case 90:
                return [j, -v];
              case 180:
                return [-v, -j];
              case 270:
                return [-j, v];
              default:
                return [v, j];
            }
          }, w = new WeakSet(), Xe = function(v) {
            switch (v) {
              case 90: {
                const [j, D] = this.pageDimensions;
                return [0, -j / D, D / j, 0];
              }
              case 180:
                return [-1, 0, 0, -1];
              case 270: {
                const [j, D] = this.pageDimensions;
                return [0, j / D, -D / j, 0];
              }
              default:
                return [1, 0, 0, 1];
            }
          }, i = new WeakSet(), Gi = function(v) {
            v.preventDefault();
          }, _ = new WeakSet(), $i = function() {
            if (t(this, c))
              return;
            it(this, c, document.createElement("div")), t(this, c).classList.add("resizers");
            const v = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
            this._willKeepAspectRatio || v.push("topMiddle", "middleRight", "bottomMiddle", "middleLeft");
            for (const j of v) {
              const D = document.createElement("div");
              t(this, c).append(D), D.classList.add("resizer", j), D.addEventListener("pointerdown", X(this, T, Xi).bind(this, j)), D.addEventListener("contextmenu", X(Z, i, Gi));
            }
            this.div.prepend(t(this, c));
          }, T = new WeakSet(), Xi = function(v, j) {
            j.preventDefault();
            const {
              isMac: D
            } = f.FeatureTest.platform;
            if (j.button !== 0 || j.ctrlKey && D)
              return;
            const lt = X(this, Y, qi).bind(this, v), _t = this._isDraggable;
            this._isDraggable = !1;
            const k = {
              passive: !0,
              capture: !0
            };
            window.addEventListener("pointermove", lt, k);
            const a = this.x, l = this.y, R = this.width, $ = this.height, W = this.parent.div.style.cursor, nt = this.div.style.cursor;
            this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(j.target).cursor;
            const st = () => {
              this._isDraggable = _t, window.removeEventListener("pointerup", st), window.removeEventListener("blur", st), window.removeEventListener("pointermove", lt, k), this.parent.div.style.cursor = W, this.div.style.cursor = nt;
              const ut = this.x, wt = this.y, yt = this.width, Et = this.height;
              ut === a && wt === l && yt === R && Et === $ || this.addCommands({
                cmd: () => {
                  this.width = yt, this.height = Et, this.x = ut, this.y = wt;
                  const [ot, At] = this.parentDimensions;
                  this.setDims(ot * yt, At * Et), this.fixAndSetPosition(), this.moveInDOM();
                },
                undo: () => {
                  this.width = R, this.height = $, this.x = a, this.y = l;
                  const [ot, At] = this.parentDimensions;
                  this.setDims(ot * R, At * $), this.fixAndSetPosition(), this.moveInDOM();
                },
                mustExec: !0
              });
            };
            window.addEventListener("pointerup", st), window.addEventListener("blur", st);
          }, Y = new WeakSet(), qi = function(v, j) {
            const [D, lt] = this.parentDimensions, _t = this.x, k = this.y, a = this.width, l = this.height, R = Z.MIN_SIZE / D, $ = Z.MIN_SIZE / lt, W = (Nt) => Math.round(Nt * 1e4) / 1e4, nt = X(this, w, Xe).call(this, this.rotation), st = (Nt, Ht) => [nt[0] * Nt + nt[2] * Ht, nt[1] * Nt + nt[3] * Ht], ut = X(this, w, Xe).call(this, 360 - this.rotation), wt = (Nt, Ht) => [ut[0] * Nt + ut[2] * Ht, ut[1] * Nt + ut[3] * Ht];
            let yt, Et, ot = !1, At = !1;
            switch (v) {
              case "topLeft":
                ot = !0, yt = (Nt, Ht) => [0, 0], Et = (Nt, Ht) => [Nt, Ht];
                break;
              case "topMiddle":
                yt = (Nt, Ht) => [Nt / 2, 0], Et = (Nt, Ht) => [Nt / 2, Ht];
                break;
              case "topRight":
                ot = !0, yt = (Nt, Ht) => [Nt, 0], Et = (Nt, Ht) => [0, Ht];
                break;
              case "middleRight":
                At = !0, yt = (Nt, Ht) => [Nt, Ht / 2], Et = (Nt, Ht) => [0, Ht / 2];
                break;
              case "bottomRight":
                ot = !0, yt = (Nt, Ht) => [Nt, Ht], Et = (Nt, Ht) => [0, 0];
                break;
              case "bottomMiddle":
                yt = (Nt, Ht) => [Nt / 2, Ht], Et = (Nt, Ht) => [Nt / 2, 0];
                break;
              case "bottomLeft":
                ot = !0, yt = (Nt, Ht) => [0, Ht], Et = (Nt, Ht) => [Nt, 0];
                break;
              case "middleLeft":
                At = !0, yt = (Nt, Ht) => [0, Ht / 2], Et = (Nt, Ht) => [Nt, Ht / 2];
                break;
            }
            const St = yt(a, l), Rt = Et(a, l);
            let Bt = st(...Rt);
            const kt = W(_t + Bt[0]), Ut = W(k + Bt[1]);
            let at = 1, J = 1, [rt, dt] = this.screenToPageTranslation(j.movementX, j.movementY);
            if ([rt, dt] = wt(rt / D, dt / lt), ot) {
              const Nt = Math.hypot(a, l);
              at = J = Math.max(Math.min(Math.hypot(Rt[0] - St[0] - rt, Rt[1] - St[1] - dt) / Nt, 1 / a, 1 / l), R / a, $ / l);
            } else
              At ? at = Math.max(R, Math.min(1, Math.abs(Rt[0] - St[0] - rt))) / a : J = Math.max($, Math.min(1, Math.abs(Rt[1] - St[1] - dt))) / l;
            const xt = W(a * at), Ot = W(l * J);
            Bt = st(...Et(xt, Ot));
            const jt = kt - Bt[0], Wt = Ut - Bt[1];
            this.width = xt, this.height = Ot, this.x = jt, this.y = Wt, this.setDims(D * xt, lt * Ot), this.fixAndSetPosition();
          }, x = new WeakSet(), Yi = function(v) {
            if (!this._isDraggable)
              return;
            const j = this._uiManager.isSelected(this);
            this._uiManager.setUpDragSession();
            let D, lt;
            j && (D = {
              passive: !0,
              capture: !0
            }, lt = (k) => {
              const [a, l] = this.screenToPageTranslation(k.movementX, k.movementY);
              this._uiManager.dragSelectedEditors(a, l);
            }, window.addEventListener("pointermove", lt, D));
            const _t = () => {
              if (window.removeEventListener("pointerup", _t), window.removeEventListener("blur", _t), j && window.removeEventListener("pointermove", lt, D), it(this, F, !1), !this._uiManager.endDragSession()) {
                const {
                  isMac: k
                } = f.FeatureTest.platform;
                v.ctrlKey && !k || v.shiftKey || v.metaKey && k ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
              }
            };
            window.addEventListener("pointerup", _t), window.addEventListener("blur", _t);
          }, N(Z, b), N(Z, i), Zt(Z, "_colorManager", new n.ColorManager()), Zt(Z, "_zIndex", 1);
          let q = Z;
          e.AnnotationEditor = q;
          class V extends q {
            constructor(v) {
              super(v), this.annotationElementId = v.annotationElementId, this.deleted = !0;
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
        (A, e, L) => {
          var S, h, p, u, y, qe, w, s, i, E, _, Ki, P, Y, tt, x, K, Z, Q, v, j, D, lt, _t, k, a, l, R, $, W, nt, st, ut, wt, yt, Et, ot, At, St, Rt, Bt, kt, Ut, at, J, rt, dt, Qi, Ot, Ye, Wt, Ji, Ht, Ke, Gt, Zi, m, tn, ht, ie, Pt, fe, vt, en, gt, nn, bt, Qe, C, pe, H, Je;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.KeyboardManager = e.CommandManager = e.ColorManager = e.AnnotationEditorUIManager = void 0, e.bindEvents = q, e.opacityToHex = V;
          var n = L(1), f = L(6);
          function q(Mt, G, ct) {
            for (const mt of ct)
              G.addEventListener(mt, Mt[mt].bind(Mt));
          }
          function V(Mt) {
            return Math.round(Math.min(255, Math.max(1, 255 * Mt))).toString(16).padStart(2, "0");
          }
          class I {
            constructor() {
              N(this, S, 0);
            }
            getId() {
              return `${n.AnnotationEditorPrefix}${ae(this, S)._++}`;
            }
          }
          S = new WeakMap();
          const g = class g {
            constructor() {
              N(this, y);
              N(this, h, (0, n.getUuid)());
              N(this, p, 0);
              N(this, u, null);
            }
            static get _isSVGFittingCanvas() {
              const G = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', mt = new OffscreenCanvas(1, 3).getContext("2d"), It = new Image();
              It.src = G;
              const Tt = It.decode().then(() => (mt.drawImage(It, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(mt.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
              return (0, n.shadow)(this, "_isSVGFittingCanvas", Tt);
            }
            async getFromFile(G) {
              const {
                lastModified: ct,
                name: mt,
                size: It,
                type: Tt
              } = G;
              return X(this, y, qe).call(this, `${ct}_${mt}_${It}_${Tt}`, G);
            }
            async getFromUrl(G) {
              return X(this, y, qe).call(this, G, G);
            }
            async getFromId(G) {
              t(this, u) || it(this, u, /* @__PURE__ */ new Map());
              const ct = t(this, u).get(G);
              return ct ? ct.bitmap ? (ct.refCounter += 1, ct) : ct.file ? this.getFromFile(ct.file) : this.getFromUrl(ct.url) : null;
            }
            getSvgUrl(G) {
              const ct = t(this, u).get(G);
              return ct != null && ct.isSvg ? ct.svgUrl : null;
            }
            deleteId(G) {
              t(this, u) || it(this, u, /* @__PURE__ */ new Map());
              const ct = t(this, u).get(G);
              ct && (ct.refCounter -= 1, ct.refCounter === 0 && (ct.bitmap = null));
            }
            isValidId(G) {
              return G.startsWith(`image_${t(this, h)}_`);
            }
          };
          h = new WeakMap(), p = new WeakMap(), u = new WeakMap(), y = new WeakSet(), qe = async function(G, ct) {
            t(this, u) || it(this, u, /* @__PURE__ */ new Map());
            let mt = t(this, u).get(G);
            if (mt === null)
              return null;
            if (mt != null && mt.bitmap)
              return mt.refCounter += 1, mt;
            try {
              mt || (mt = {
                bitmap: null,
                id: `image_${t(this, h)}_${ae(this, p)._++}`,
                refCounter: 0,
                isSvg: !1
              });
              let It;
              if (typeof ct == "string") {
                mt.url = ct;
                const Tt = await fetch(ct);
                if (!Tt.ok)
                  throw new Error(Tt.statusText);
                It = await Tt.blob();
              } else
                It = mt.file = ct;
              if (It.type === "image/svg+xml") {
                const Tt = g._isSVGFittingCanvas, Dt = new FileReader(), Vt = new Image(), zt = new Promise((Xt, qt) => {
                  Vt.onload = () => {
                    mt.bitmap = Vt, mt.isSvg = !0, Xt();
                  }, Dt.onload = async () => {
                    const Qt = mt.svgUrl = Dt.result;
                    Vt.src = await Tt ? `${Qt}#svgView(preserveAspectRatio(none))` : Qt;
                  }, Vt.onerror = Dt.onerror = qt;
                });
                Dt.readAsDataURL(It), await zt;
              } else
                mt.bitmap = await createImageBitmap(It);
              mt.refCounter = 1;
            } catch (It) {
              console.error(It), mt = null;
            }
            return t(this, u).set(G, mt), mt && t(this, u).set(mt.id, mt), mt;
          };
          let c = g;
          class d {
            constructor(G = 128) {
              N(this, w, []);
              N(this, s, !1);
              N(this, i, void 0);
              N(this, E, -1);
              it(this, i, G);
            }
            add({
              cmd: G,
              undo: ct,
              mustExec: mt,
              type: It = NaN,
              overwriteIfSameType: Tt = !1,
              keepUndo: Dt = !1
            }) {
              if (mt && G(), t(this, s))
                return;
              const Vt = {
                cmd: G,
                undo: ct,
                type: It
              };
              if (t(this, E) === -1) {
                t(this, w).length > 0 && (t(this, w).length = 0), it(this, E, 0), t(this, w).push(Vt);
                return;
              }
              if (Tt && t(this, w)[t(this, E)].type === It) {
                Dt && (Vt.undo = t(this, w)[t(this, E)].undo), t(this, w)[t(this, E)] = Vt;
                return;
              }
              const zt = t(this, E) + 1;
              zt === t(this, i) ? t(this, w).splice(0, 1) : (it(this, E, zt), zt < t(this, w).length && t(this, w).splice(zt)), t(this, w).push(Vt);
            }
            undo() {
              t(this, E) !== -1 && (it(this, s, !0), t(this, w)[t(this, E)].undo(), it(this, s, !1), it(this, E, t(this, E) - 1));
            }
            redo() {
              t(this, E) < t(this, w).length - 1 && (it(this, E, t(this, E) + 1), it(this, s, !0), t(this, w)[t(this, E)].cmd(), it(this, s, !1));
            }
            hasSomethingToUndo() {
              return t(this, E) !== -1;
            }
            hasSomethingToRedo() {
              return t(this, E) < t(this, w).length - 1;
            }
            destroy() {
              it(this, w, null);
            }
          }
          w = new WeakMap(), s = new WeakMap(), i = new WeakMap(), E = new WeakMap(), e.CommandManager = d;
          class r {
            constructor(G) {
              N(this, _);
              this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
              const {
                isMac: ct
              } = n.FeatureTest.platform;
              for (const [mt, It, Tt = {}] of G)
                for (const Dt of mt) {
                  const Vt = Dt.startsWith("mac+");
                  ct && Vt ? (this.callbacks.set(Dt.slice(4), {
                    callback: It,
                    options: Tt
                  }), this.allKeys.add(Dt.split("+").at(-1))) : !ct && !Vt && (this.callbacks.set(Dt, {
                    callback: It,
                    options: Tt
                  }), this.allKeys.add(Dt.split("+").at(-1)));
                }
            }
            exec(G, ct) {
              if (!this.allKeys.has(ct.key))
                return;
              const mt = this.callbacks.get(X(this, _, Ki).call(this, ct));
              if (!mt)
                return;
              const {
                callback: It,
                options: {
                  bubbles: Tt = !1,
                  args: Dt = [],
                  checker: Vt = null
                }
              } = mt;
              Vt && !Vt(G, ct) || (It.bind(G, ...Dt)(), Tt || (ct.stopPropagation(), ct.preventDefault()));
            }
          }
          _ = new WeakSet(), Ki = function(G) {
            G.altKey && this.buffer.push("alt"), G.ctrlKey && this.buffer.push("ctrl"), G.metaKey && this.buffer.push("meta"), G.shiftKey && this.buffer.push("shift"), this.buffer.push(G.key);
            const ct = this.buffer.join("+");
            return this.buffer.length = 0, ct;
          }, e.KeyboardManager = r;
          const T = class T {
            get _colors() {
              const G = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
              return (0, f.getColorValues)(G), (0, n.shadow)(this, "_colors", G);
            }
            convert(G) {
              const ct = (0, f.getRGB)(G);
              if (!window.matchMedia("(forced-colors: active)").matches)
                return ct;
              for (const [mt, It] of this._colors)
                if (It.every((Tt, Dt) => Tt === ct[Dt]))
                  return T._colorsMapping.get(mt);
              return ct;
            }
            getHexCode(G) {
              const ct = this._colors.get(G);
              return ct ? n.Util.makeHexColor(...ct) : G;
            }
          };
          Zt(T, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
          let F = T;
          e.ColorManager = F;
          const ft = class ft {
            constructor(G, ct, mt, It, Tt) {
              N(this, dt);
              N(this, Ot);
              N(this, Wt);
              N(this, Ht);
              N(this, Gt);
              N(this, m);
              N(this, ht);
              N(this, Pt);
              N(this, vt);
              N(this, gt);
              N(this, bt);
              N(this, C);
              N(this, H);
              N(this, P, null);
              N(this, Y, /* @__PURE__ */ new Map());
              N(this, tt, /* @__PURE__ */ new Map());
              N(this, x, null);
              N(this, K, new d());
              N(this, Z, 0);
              N(this, Q, /* @__PURE__ */ new Set());
              N(this, v, null);
              N(this, j, null);
              N(this, D, /* @__PURE__ */ new Set());
              N(this, lt, null);
              N(this, _t, null);
              N(this, k, new I());
              N(this, a, !1);
              N(this, l, !1);
              N(this, R, null);
              N(this, $, n.AnnotationEditorType.NONE);
              N(this, W, /* @__PURE__ */ new Set());
              N(this, nt, null);
              N(this, st, this.blur.bind(this));
              N(this, ut, this.focus.bind(this));
              N(this, wt, this.copy.bind(this));
              N(this, yt, this.cut.bind(this));
              N(this, Et, this.paste.bind(this));
              N(this, ot, this.keydown.bind(this));
              N(this, At, this.onEditingAction.bind(this));
              N(this, St, this.onPageChanging.bind(this));
              N(this, Rt, this.onScaleChanging.bind(this));
              N(this, Bt, this.onRotationChanging.bind(this));
              N(this, kt, {
                isEditing: !1,
                isEmpty: !0,
                hasSomethingToUndo: !1,
                hasSomethingToRedo: !1,
                hasSelectedEditor: !1
              });
              N(this, Ut, [0, 0]);
              N(this, at, null);
              N(this, J, null);
              N(this, rt, null);
              it(this, J, G), it(this, rt, ct), it(this, lt, mt), t(this, lt)._on("editingaction", t(this, At)), t(this, lt)._on("pagechanging", t(this, St)), t(this, lt)._on("scalechanging", t(this, Rt)), t(this, lt)._on("rotationchanging", t(this, Bt)), it(this, x, It.annotationStorage), it(this, _t, It.filterFactory), it(this, nt, Tt), this.viewParameters = {
                realScale: f.PixelsPerInch.PDF_TO_CSS_UNITS,
                rotation: 0
              };
            }
            static get _keyboardManager() {
              const G = ft.prototype, ct = (Tt) => {
                const {
                  activeElement: Dt
                } = document;
                return Dt && t(Tt, J).contains(Dt) && Tt.hasSomethingToControl();
              }, mt = this.TRANSLATE_SMALL, It = this.TRANSLATE_BIG;
              return (0, n.shadow)(this, "_keyboardManager", new r([[["ctrl+a", "mac+meta+a"], G.selectAll], [["ctrl+z", "mac+meta+z"], G.undo], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], G.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], G.delete], [["Escape", "mac+Escape"], G.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], G.translateSelectedEditors, {
                args: [-mt, 0],
                checker: ct
              }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], G.translateSelectedEditors, {
                args: [-It, 0],
                checker: ct
              }], [["ArrowRight", "mac+ArrowRight"], G.translateSelectedEditors, {
                args: [mt, 0],
                checker: ct
              }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], G.translateSelectedEditors, {
                args: [It, 0],
                checker: ct
              }], [["ArrowUp", "mac+ArrowUp"], G.translateSelectedEditors, {
                args: [0, -mt],
                checker: ct
              }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], G.translateSelectedEditors, {
                args: [0, -It],
                checker: ct
              }], [["ArrowDown", "mac+ArrowDown"], G.translateSelectedEditors, {
                args: [0, mt],
                checker: ct
              }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], G.translateSelectedEditors, {
                args: [0, It],
                checker: ct
              }]]));
            }
            destroy() {
              X(this, Ht, Ke).call(this), X(this, Ot, Ye).call(this), t(this, lt)._off("editingaction", t(this, At)), t(this, lt)._off("pagechanging", t(this, St)), t(this, lt)._off("scalechanging", t(this, Rt)), t(this, lt)._off("rotationchanging", t(this, Bt));
              for (const G of t(this, tt).values())
                G.destroy();
              t(this, tt).clear(), t(this, Y).clear(), t(this, D).clear(), it(this, P, null), t(this, W).clear(), t(this, K).destroy();
            }
            get hcmFilter() {
              return (0, n.shadow)(this, "hcmFilter", t(this, nt) ? t(this, _t).addHCMFilter(t(this, nt).foreground, t(this, nt).background) : "none");
            }
            onPageChanging({
              pageNumber: G
            }) {
              it(this, Z, G - 1);
            }
            focusMainContainer() {
              t(this, J).focus();
            }
            findParent(G, ct) {
              for (const mt of t(this, tt).values()) {
                const {
                  x: It,
                  y: Tt,
                  width: Dt,
                  height: Vt
                } = mt.div.getBoundingClientRect();
                if (G >= It && G <= It + Dt && ct >= Tt && ct <= Tt + Vt)
                  return mt;
              }
              return null;
            }
            disableUserSelect(G = !1) {
              t(this, rt).classList.toggle("noUserSelect", G);
            }
            addShouldRescale(G) {
              t(this, D).add(G);
            }
            removeShouldRescale(G) {
              t(this, D).delete(G);
            }
            onScaleChanging({
              scale: G
            }) {
              this.commitOrRemove(), this.viewParameters.realScale = G * f.PixelsPerInch.PDF_TO_CSS_UNITS;
              for (const ct of t(this, D))
                ct.onScaleChanging();
            }
            onRotationChanging({
              pagesRotation: G
            }) {
              this.commitOrRemove(), this.viewParameters.rotation = G;
            }
            addToAnnotationStorage(G) {
              !G.isEmpty() && t(this, x) && !t(this, x).has(G.id) && t(this, x).setValue(G.id, G);
            }
            blur() {
              if (!this.hasSelection)
                return;
              const {
                activeElement: G
              } = document;
              for (const ct of t(this, W))
                if (ct.div.contains(G)) {
                  it(this, R, [ct, G]), ct._focusEventsAllowed = !1;
                  break;
                }
            }
            focus() {
              if (!t(this, R))
                return;
              const [G, ct] = t(this, R);
              it(this, R, null), ct.addEventListener("focusin", () => {
                G._focusEventsAllowed = !0;
              }, {
                once: !0
              }), ct.focus();
            }
            copy(G) {
              var mt;
              if (G.preventDefault(), (mt = t(this, P)) == null || mt.commitOrRemove(), !this.hasSelection)
                return;
              const ct = [];
              for (const It of t(this, W)) {
                const Tt = It.serialize(!0);
                Tt && ct.push(Tt);
              }
              ct.length !== 0 && G.clipboardData.setData("application/pdfjs", JSON.stringify(ct));
            }
            cut(G) {
              this.copy(G), this.delete();
            }
            paste(G) {
              G.preventDefault();
              const {
                clipboardData: ct
              } = G;
              for (const Tt of ct.items)
                for (const Dt of t(this, j))
                  if (Dt.isHandlingMimeForPasting(Tt.type)) {
                    Dt.paste(Tt, this.currentLayer);
                    return;
                  }
              let mt = ct.getData("application/pdfjs");
              if (!mt)
                return;
              try {
                mt = JSON.parse(mt);
              } catch (Tt) {
                (0, n.warn)(`paste: "${Tt.message}".`);
                return;
              }
              if (!Array.isArray(mt))
                return;
              this.unselectAll();
              const It = this.currentLayer;
              try {
                const Tt = [];
                for (const zt of mt) {
                  const Xt = It.deserialize(zt);
                  if (!Xt)
                    return;
                  Tt.push(Xt);
                }
                const Dt = () => {
                  for (const zt of Tt)
                    X(this, bt, Qe).call(this, zt);
                  X(this, H, Je).call(this, Tt);
                }, Vt = () => {
                  for (const zt of Tt)
                    zt.remove();
                };
                this.addCommands({
                  cmd: Dt,
                  undo: Vt,
                  mustExec: !0
                });
              } catch (Tt) {
                (0, n.warn)(`paste: "${Tt.message}".`);
              }
            }
            keydown(G) {
              var ct;
              (ct = this.getActive()) != null && ct.shouldGetKeyboardEvents() || ft._keyboardManager.exec(this, G);
            }
            onEditingAction(G) {
              ["undo", "redo", "delete", "selectAll"].includes(G.name) && this[G.name]();
            }
            setEditingState(G) {
              G ? (X(this, dt, Qi).call(this), X(this, Wt, Ji).call(this), X(this, Gt, Zi).call(this), X(this, ht, ie).call(this, {
                isEditing: t(this, $) !== n.AnnotationEditorType.NONE,
                isEmpty: X(this, C, pe).call(this),
                hasSomethingToUndo: t(this, K).hasSomethingToUndo(),
                hasSomethingToRedo: t(this, K).hasSomethingToRedo(),
                hasSelectedEditor: !1
              })) : (X(this, Ot, Ye).call(this), X(this, Ht, Ke).call(this), X(this, m, tn).call(this), X(this, ht, ie).call(this, {
                isEditing: !1
              }), this.disableUserSelect(!1));
            }
            registerEditorTypes(G) {
              if (!t(this, j)) {
                it(this, j, G);
                for (const ct of t(this, j))
                  X(this, Pt, fe).call(this, ct.defaultPropertiesToUpdate);
              }
            }
            getId() {
              return t(this, k).getId();
            }
            get currentLayer() {
              return t(this, tt).get(t(this, Z));
            }
            getLayer(G) {
              return t(this, tt).get(G);
            }
            get currentPageIndex() {
              return t(this, Z);
            }
            addLayer(G) {
              t(this, tt).set(G.pageIndex, G), t(this, a) ? G.enable() : G.disable();
            }
            removeLayer(G) {
              t(this, tt).delete(G.pageIndex);
            }
            updateMode(G, ct = null) {
              if (t(this, $) !== G) {
                if (it(this, $, G), G === n.AnnotationEditorType.NONE) {
                  this.setEditingState(!1), X(this, gt, nn).call(this);
                  return;
                }
                this.setEditingState(!0), X(this, vt, en).call(this), this.unselectAll();
                for (const mt of t(this, tt).values())
                  mt.updateMode(G);
                if (ct) {
                  for (const mt of t(this, Y).values())
                    if (mt.annotationElementId === ct) {
                      this.setSelected(mt), mt.enterInEditMode();
                      break;
                    }
                }
              }
            }
            updateToolbar(G) {
              G !== t(this, $) && t(this, lt).dispatch("switchannotationeditormode", {
                source: this,
                mode: G
              });
            }
            updateParams(G, ct) {
              if (t(this, j)) {
                if (G === n.AnnotationEditorParamsType.CREATE) {
                  this.currentLayer.addNewEditor(G);
                  return;
                }
                for (const mt of t(this, W))
                  mt.updateParams(G, ct);
                for (const mt of t(this, j))
                  mt.updateDefaultParams(G, ct);
              }
            }
            enableWaiting(G = !1) {
              if (t(this, l) !== G) {
                it(this, l, G);
                for (const ct of t(this, tt).values())
                  G ? ct.disableClick() : ct.enableClick(), ct.div.classList.toggle("waiting", G);
              }
            }
            getEditors(G) {
              const ct = [];
              for (const mt of t(this, Y).values())
                mt.pageIndex === G && ct.push(mt);
              return ct;
            }
            getEditor(G) {
              return t(this, Y).get(G);
            }
            addEditor(G) {
              t(this, Y).set(G.id, G);
            }
            removeEditor(G) {
              var ct;
              t(this, Y).delete(G.id), this.unselect(G), (!G.annotationElementId || !t(this, Q).has(G.annotationElementId)) && ((ct = t(this, x)) == null || ct.remove(G.id));
            }
            addDeletedAnnotationElement(G) {
              t(this, Q).add(G.annotationElementId), G.deleted = !0;
            }
            isDeletedAnnotationElement(G) {
              return t(this, Q).has(G);
            }
            removeDeletedAnnotationElement(G) {
              t(this, Q).delete(G.annotationElementId), G.deleted = !1;
            }
            setActiveEditor(G) {
              t(this, P) !== G && (it(this, P, G), G && X(this, Pt, fe).call(this, G.propertiesToUpdate));
            }
            toggleSelected(G) {
              if (t(this, W).has(G)) {
                t(this, W).delete(G), G.unselect(), X(this, ht, ie).call(this, {
                  hasSelectedEditor: this.hasSelection
                });
                return;
              }
              t(this, W).add(G), G.select(), X(this, Pt, fe).call(this, G.propertiesToUpdate), X(this, ht, ie).call(this, {
                hasSelectedEditor: !0
              });
            }
            setSelected(G) {
              for (const ct of t(this, W))
                ct !== G && ct.unselect();
              t(this, W).clear(), t(this, W).add(G), G.select(), X(this, Pt, fe).call(this, G.propertiesToUpdate), X(this, ht, ie).call(this, {
                hasSelectedEditor: !0
              });
            }
            isSelected(G) {
              return t(this, W).has(G);
            }
            unselect(G) {
              G.unselect(), t(this, W).delete(G), X(this, ht, ie).call(this, {
                hasSelectedEditor: this.hasSelection
              });
            }
            get hasSelection() {
              return t(this, W).size !== 0;
            }
            undo() {
              t(this, K).undo(), X(this, ht, ie).call(this, {
                hasSomethingToUndo: t(this, K).hasSomethingToUndo(),
                hasSomethingToRedo: !0,
                isEmpty: X(this, C, pe).call(this)
              });
            }
            redo() {
              t(this, K).redo(), X(this, ht, ie).call(this, {
                hasSomethingToUndo: !0,
                hasSomethingToRedo: t(this, K).hasSomethingToRedo(),
                isEmpty: X(this, C, pe).call(this)
              });
            }
            addCommands(G) {
              t(this, K).add(G), X(this, ht, ie).call(this, {
                hasSomethingToUndo: !0,
                hasSomethingToRedo: !1,
                isEmpty: X(this, C, pe).call(this)
              });
            }
            delete() {
              if (this.commitOrRemove(), !this.hasSelection)
                return;
              const G = [...t(this, W)], ct = () => {
                for (const It of G)
                  It.remove();
              }, mt = () => {
                for (const It of G)
                  X(this, bt, Qe).call(this, It);
              };
              this.addCommands({
                cmd: ct,
                undo: mt,
                mustExec: !0
              });
            }
            commitOrRemove() {
              var G;
              (G = t(this, P)) == null || G.commitOrRemove();
            }
            hasSomethingToControl() {
              return t(this, P) || this.hasSelection;
            }
            selectAll() {
              for (const G of t(this, W))
                G.commit();
              X(this, H, Je).call(this, t(this, Y).values());
            }
            unselectAll() {
              if (t(this, P)) {
                t(this, P).commitOrRemove();
                return;
              }
              if (this.hasSelection) {
                for (const G of t(this, W))
                  G.unselect();
                t(this, W).clear(), X(this, ht, ie).call(this, {
                  hasSelectedEditor: !1
                });
              }
            }
            translateSelectedEditors(G, ct, mt = !1) {
              if (mt || this.commitOrRemove(), !this.hasSelection)
                return;
              t(this, Ut)[0] += G, t(this, Ut)[1] += ct;
              const [It, Tt] = t(this, Ut), Dt = [...t(this, W)], Vt = 1e3;
              t(this, at) && clearTimeout(t(this, at)), it(this, at, setTimeout(() => {
                it(this, at, null), t(this, Ut)[0] = t(this, Ut)[1] = 0, this.addCommands({
                  cmd: () => {
                    for (const zt of Dt)
                      t(this, Y).has(zt.id) && zt.translateInPage(It, Tt);
                  },
                  undo: () => {
                    for (const zt of Dt)
                      t(this, Y).has(zt.id) && zt.translateInPage(-It, -Tt);
                  },
                  mustExec: !1
                });
              }, Vt));
              for (const zt of Dt)
                zt.translateInPage(G, ct);
            }
            setUpDragSession() {
              if (this.hasSelection) {
                this.disableUserSelect(!0), it(this, v, /* @__PURE__ */ new Map());
                for (const G of t(this, W))
                  t(this, v).set(G, {
                    savedX: G.x,
                    savedY: G.y,
                    savedPageIndex: G.parent.pageIndex,
                    newX: 0,
                    newY: 0,
                    newPageIndex: -1
                  });
              }
            }
            endDragSession() {
              if (!t(this, v))
                return !1;
              this.disableUserSelect(!1);
              const G = t(this, v);
              it(this, v, null);
              let ct = !1;
              for (const [{
                x: It,
                y: Tt,
                parent: Dt
              }, Vt] of G)
                Vt.newX = It, Vt.newY = Tt, Vt.newPageIndex = Dt.pageIndex, ct || (ct = It !== Vt.savedX || Tt !== Vt.savedY || Dt.pageIndex !== Vt.savedPageIndex);
              if (!ct)
                return !1;
              const mt = (It, Tt, Dt, Vt) => {
                if (t(this, Y).has(It.id)) {
                  const zt = t(this, tt).get(Vt);
                  zt ? It._setParentAndPosition(zt, Tt, Dt) : (It.pageIndex = Vt, It.x = Tt, It.y = Dt);
                }
              };
              return this.addCommands({
                cmd: () => {
                  for (const [It, {
                    newX: Tt,
                    newY: Dt,
                    newPageIndex: Vt
                  }] of G)
                    mt(It, Tt, Dt, Vt);
                },
                undo: () => {
                  for (const [It, {
                    savedX: Tt,
                    savedY: Dt,
                    savedPageIndex: Vt
                  }] of G)
                    mt(It, Tt, Dt, Vt);
                },
                mustExec: !0
              }), !0;
            }
            dragSelectedEditors(G, ct) {
              if (t(this, v))
                for (const mt of t(this, v).keys())
                  mt.drag(G, ct);
            }
            rebuild(G) {
              if (G.parent === null) {
                const ct = this.getLayer(G.pageIndex);
                ct ? (ct.changeParent(G), ct.addOrRebuild(G)) : (this.addEditor(G), this.addToAnnotationStorage(G), G.rebuild());
              } else
                G.parent.addOrRebuild(G);
            }
            isActive(G) {
              return t(this, P) === G;
            }
            getActive() {
              return t(this, P);
            }
            getMode() {
              return t(this, $);
            }
            get imageManager() {
              return (0, n.shadow)(this, "imageManager", new c());
            }
          };
          P = new WeakMap(), Y = new WeakMap(), tt = new WeakMap(), x = new WeakMap(), K = new WeakMap(), Z = new WeakMap(), Q = new WeakMap(), v = new WeakMap(), j = new WeakMap(), D = new WeakMap(), lt = new WeakMap(), _t = new WeakMap(), k = new WeakMap(), a = new WeakMap(), l = new WeakMap(), R = new WeakMap(), $ = new WeakMap(), W = new WeakMap(), nt = new WeakMap(), st = new WeakMap(), ut = new WeakMap(), wt = new WeakMap(), yt = new WeakMap(), Et = new WeakMap(), ot = new WeakMap(), At = new WeakMap(), St = new WeakMap(), Rt = new WeakMap(), Bt = new WeakMap(), kt = new WeakMap(), Ut = new WeakMap(), at = new WeakMap(), J = new WeakMap(), rt = new WeakMap(), dt = new WeakSet(), Qi = function() {
            window.addEventListener("focus", t(this, ut)), window.addEventListener("blur", t(this, st));
          }, Ot = new WeakSet(), Ye = function() {
            window.removeEventListener("focus", t(this, ut)), window.removeEventListener("blur", t(this, st));
          }, Wt = new WeakSet(), Ji = function() {
            window.addEventListener("keydown", t(this, ot), {
              capture: !0
            });
          }, Ht = new WeakSet(), Ke = function() {
            window.removeEventListener("keydown", t(this, ot), {
              capture: !0
            });
          }, Gt = new WeakSet(), Zi = function() {
            document.addEventListener("copy", t(this, wt)), document.addEventListener("cut", t(this, yt)), document.addEventListener("paste", t(this, Et));
          }, m = new WeakSet(), tn = function() {
            document.removeEventListener("copy", t(this, wt)), document.removeEventListener("cut", t(this, yt)), document.removeEventListener("paste", t(this, Et));
          }, ht = new WeakSet(), ie = function(G) {
            Object.entries(G).some(([mt, It]) => t(this, kt)[mt] !== It) && t(this, lt).dispatch("annotationeditorstateschanged", {
              source: this,
              details: Object.assign(t(this, kt), G)
            });
          }, Pt = new WeakSet(), fe = function(G) {
            t(this, lt).dispatch("annotationeditorparamschanged", {
              source: this,
              details: G
            });
          }, vt = new WeakSet(), en = function() {
            if (!t(this, a)) {
              it(this, a, !0);
              for (const G of t(this, tt).values())
                G.enable();
            }
          }, gt = new WeakSet(), nn = function() {
            if (this.unselectAll(), t(this, a)) {
              it(this, a, !1);
              for (const G of t(this, tt).values())
                G.disable();
            }
          }, bt = new WeakSet(), Qe = function(G) {
            const ct = t(this, tt).get(G.pageIndex);
            ct ? ct.addOrRebuild(G) : this.addEditor(G);
          }, C = new WeakSet(), pe = function() {
            if (t(this, Y).size === 0)
              return !0;
            if (t(this, Y).size === 1)
              for (const G of t(this, Y).values())
                return G.isEmpty();
            return !1;
          }, H = new WeakSet(), Je = function(G) {
            t(this, W).clear();
            for (const ct of G)
              ct.isEmpty() || (t(this, W).add(ct), ct.select());
            X(this, ht, ie).call(this, {
              hasSelectedEditor: !0
            });
          }, Zt(ft, "TRANSLATE_SMALL", 1), Zt(ft, "TRANSLATE_BIG", 10);
          let M = ft;
          e.AnnotationEditorUIManager = M;
        },
        /* 6 */
        /***/
        (A, e, L) => {
          var Q, v, j, D, lt, _t, k, a, l, R, $, W, le, st, ce, wt, Ze, Et, Ce, At, Te, Rt, ge, kt, me;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.StatTimer = e.RenderingCancelledException = e.PixelsPerInch = e.PageViewport = e.PDFDateString = e.DOMStandardFontDataFactory = e.DOMSVGFactory = e.DOMFilterFactory = e.DOMCanvasFactory = e.DOMCMapReaderFactory = e.AnnotationPrefix = void 0, e.deprecated = E, e.getColorValues = Y, e.getCurrentTransform = tt, e.getCurrentTransformInverse = x, e.getFilenameFromUrl = b, e.getPdfFilenameFromUrl = g, e.getRGB = P, e.getXfaPageViewport = T, e.isDataScheme = u, e.isPdfFile = y, e.isValidFetchUrl = s, e.loadScript = i, e.setLayerDimensions = K;
          var n = L(7), f = L(1);
          const q = "http://www.w3.org/2000/svg", V = "pdfjs_internal_id_";
          e.AnnotationPrefix = V;
          const Z = class Z {
          };
          Zt(Z, "CSS", 96), Zt(Z, "PDF", 72), Zt(Z, "PDF_TO_CSS_UNITS", Z.CSS / Z.PDF);
          let I = Z;
          e.PixelsPerInch = I;
          class c extends n.BaseFilterFactory {
            constructor({
              docId: rt,
              ownerDocument: dt = globalThis.document
            } = {}) {
              super();
              N(this, W);
              N(this, st);
              N(this, wt);
              N(this, Et);
              N(this, At);
              N(this, Rt);
              N(this, kt);
              N(this, Q, void 0);
              N(this, v, void 0);
              N(this, j, void 0);
              N(this, D, void 0);
              N(this, lt, void 0);
              N(this, _t, void 0);
              N(this, k, void 0);
              N(this, a, void 0);
              N(this, l, void 0);
              N(this, R, void 0);
              N(this, $, 0);
              it(this, j, rt), it(this, D, dt);
            }
            addFilter(rt) {
              if (!rt)
                return "none";
              let dt = t(this, W, le).get(rt);
              if (dt)
                return dt;
              let xt, Ot, jt, Wt;
              if (rt.length === 1) {
                const Gt = rt[0], Ct = new Array(256);
                for (let m = 0; m < 256; m++)
                  Ct[m] = Gt[m] / 255;
                Wt = xt = Ot = jt = Ct.join(",");
              } else {
                const [Gt, Ct, m] = rt, B = new Array(256), ht = new Array(256), Lt = new Array(256);
                for (let Pt = 0; Pt < 256; Pt++)
                  B[Pt] = Gt[Pt] / 255, ht[Pt] = Ct[Pt] / 255, Lt[Pt] = m[Pt] / 255;
                xt = B.join(","), Ot = ht.join(","), jt = Lt.join(","), Wt = `${xt}${Ot}${jt}`;
              }
              if (dt = t(this, W, le).get(Wt), dt)
                return t(this, W, le).set(rt, dt), dt;
              const Nt = `g_${t(this, j)}_transfer_map_${ae(this, $)._++}`, Ht = `url(#${Nt})`;
              t(this, W, le).set(rt, Ht), t(this, W, le).set(Wt, Ht);
              const $t = X(this, Et, Ce).call(this, Nt);
              return X(this, Rt, ge).call(this, xt, Ot, jt, $t), Ht;
            }
            addHCMFilter(rt, dt) {
              var Ct;
              const xt = `${rt}-${dt}`;
              if (t(this, _t) === xt)
                return t(this, k);
              if (it(this, _t, xt), it(this, k, "none"), (Ct = t(this, lt)) == null || Ct.remove(), !rt || !dt)
                return t(this, k);
              const Ot = X(this, kt, me).call(this, rt);
              rt = f.Util.makeHexColor(...Ot);
              const jt = X(this, kt, me).call(this, dt);
              if (dt = f.Util.makeHexColor(...jt), t(this, st, ce).style.color = "", rt === "#000000" && dt === "#ffffff" || rt === dt)
                return t(this, k);
              const Wt = new Array(256);
              for (let m = 0; m <= 255; m++) {
                const B = m / 255;
                Wt[m] = B <= 0.03928 ? B / 12.92 : ((B + 0.055) / 1.055) ** 2.4;
              }
              const Nt = Wt.join(","), Ht = `g_${t(this, j)}_hcm_filter`, $t = it(this, a, X(this, Et, Ce).call(this, Ht));
              X(this, Rt, ge).call(this, Nt, Nt, Nt, $t), X(this, wt, Ze).call(this, $t);
              const Gt = (m, B) => {
                const ht = Ot[m] / 255, Lt = jt[m] / 255, Pt = new Array(B + 1);
                for (let pt = 0; pt <= B; pt++)
                  Pt[pt] = ht + pt / B * (Lt - ht);
                return Pt.join(",");
              };
              return X(this, Rt, ge).call(this, Gt(0, 5), Gt(1, 5), Gt(2, 5), $t), it(this, k, `url(#${Ht})`), t(this, k);
            }
            addHighlightHCMFilter(rt, dt, xt, Ot) {
              var Lt;
              const jt = `${rt}-${dt}-${xt}-${Ot}`;
              if (t(this, l) === jt)
                return t(this, R);
              if (it(this, l, jt), it(this, R, "none"), (Lt = t(this, a)) == null || Lt.remove(), !rt || !dt)
                return t(this, R);
              const [Wt, Nt] = [rt, dt].map(X(this, kt, me).bind(this));
              let Ht = Math.round(0.2126 * Wt[0] + 0.7152 * Wt[1] + 0.0722 * Wt[2]), $t = Math.round(0.2126 * Nt[0] + 0.7152 * Nt[1] + 0.0722 * Nt[2]), [Gt, Ct] = [xt, Ot].map(X(this, kt, me).bind(this));
              $t < Ht && ([Ht, $t, Gt, Ct] = [$t, Ht, Ct, Gt]), t(this, st, ce).style.color = "";
              const m = (Pt, pt, vt) => {
                const U = new Array(256), gt = ($t - Ht) / vt, Ft = Pt / 255, bt = (pt - Pt) / (255 * vt);
                let O = 0;
                for (let C = 0; C <= vt; C++) {
                  const z = Math.round(Ht + C * gt), H = Ft + C * bt;
                  for (let et = O; et <= z; et++)
                    U[et] = H;
                  O = z + 1;
                }
                for (let C = O; C < 256; C++)
                  U[C] = U[O - 1];
                return U.join(",");
              }, B = `g_${t(this, j)}_hcm_highlight_filter`, ht = it(this, a, X(this, Et, Ce).call(this, B));
              return X(this, wt, Ze).call(this, ht), X(this, Rt, ge).call(this, m(Gt[0], Ct[0], 5), m(Gt[1], Ct[1], 5), m(Gt[2], Ct[2], 5), ht), it(this, R, `url(#${B})`), t(this, R);
            }
            destroy(rt = !1) {
              rt && (t(this, k) || t(this, R)) || (t(this, v) && (t(this, v).parentNode.parentNode.remove(), it(this, v, null)), t(this, Q) && (t(this, Q).clear(), it(this, Q, null)), it(this, $, 0));
            }
          }
          Q = new WeakMap(), v = new WeakMap(), j = new WeakMap(), D = new WeakMap(), lt = new WeakMap(), _t = new WeakMap(), k = new WeakMap(), a = new WeakMap(), l = new WeakMap(), R = new WeakMap(), $ = new WeakMap(), W = new WeakSet(), le = function() {
            return t(this, Q) || it(this, Q, /* @__PURE__ */ new Map());
          }, st = new WeakSet(), ce = function() {
            if (!t(this, v)) {
              const rt = t(this, D).createElement("div"), {
                style: dt
              } = rt;
              dt.visibility = "hidden", dt.contain = "strict", dt.width = dt.height = 0, dt.position = "absolute", dt.top = dt.left = 0, dt.zIndex = -1;
              const xt = t(this, D).createElementNS(q, "svg");
              xt.setAttribute("width", 0), xt.setAttribute("height", 0), it(this, v, t(this, D).createElementNS(q, "defs")), rt.append(xt), xt.append(t(this, v)), t(this, D).body.append(rt);
            }
            return t(this, v);
          }, wt = new WeakSet(), Ze = function(rt) {
            const dt = t(this, D).createElementNS(q, "feColorMatrix");
            dt.setAttribute("type", "matrix"), dt.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), rt.append(dt);
          }, Et = new WeakSet(), Ce = function(rt) {
            const dt = t(this, D).createElementNS(q, "filter");
            return dt.setAttribute("color-interpolation-filters", "sRGB"), dt.setAttribute("id", rt), t(this, st, ce).append(dt), dt;
          }, At = new WeakSet(), Te = function(rt, dt, xt) {
            const Ot = t(this, D).createElementNS(q, dt);
            Ot.setAttribute("type", "discrete"), Ot.setAttribute("tableValues", xt), rt.append(Ot);
          }, Rt = new WeakSet(), ge = function(rt, dt, xt, Ot) {
            const jt = t(this, D).createElementNS(q, "feComponentTransfer");
            Ot.append(jt), X(this, At, Te).call(this, jt, "feFuncR", rt), X(this, At, Te).call(this, jt, "feFuncG", dt), X(this, At, Te).call(this, jt, "feFuncB", xt);
          }, kt = new WeakSet(), me = function(rt) {
            return t(this, st, ce).style.color = rt, P(getComputedStyle(t(this, st, ce)).getPropertyValue("color"));
          }, e.DOMFilterFactory = c;
          class d extends n.BaseCanvasFactory {
            constructor({
              ownerDocument: J = globalThis.document
            } = {}) {
              super(), this._document = J;
            }
            _createCanvas(J, rt) {
              const dt = this._document.createElement("canvas");
              return dt.width = J, dt.height = rt, dt;
            }
          }
          e.DOMCanvasFactory = d;
          async function r(at, J = !1) {
            if (s(at, document.baseURI)) {
              const rt = await fetch(at);
              if (!rt.ok)
                throw new Error(rt.statusText);
              return J ? new Uint8Array(await rt.arrayBuffer()) : (0, f.stringToBytes)(await rt.text());
            }
            return new Promise((rt, dt) => {
              const xt = new XMLHttpRequest();
              xt.open("GET", at, !0), J && (xt.responseType = "arraybuffer"), xt.onreadystatechange = () => {
                if (xt.readyState === XMLHttpRequest.DONE) {
                  if (xt.status === 200 || xt.status === 0) {
                    let Ot;
                    if (J && xt.response ? Ot = new Uint8Array(xt.response) : !J && xt.responseText && (Ot = (0, f.stringToBytes)(xt.responseText)), Ot) {
                      rt(Ot);
                      return;
                    }
                  }
                  dt(new Error(xt.statusText));
                }
              }, xt.send(null);
            });
          }
          class F extends n.BaseCMapReaderFactory {
            _fetchData(J, rt) {
              return r(J, this.isCompressed).then((dt) => ({
                cMapData: dt,
                compressionType: rt
              }));
            }
          }
          e.DOMCMapReaderFactory = F;
          class M extends n.BaseStandardFontDataFactory {
            _fetchData(J) {
              return r(J, !0);
            }
          }
          e.DOMStandardFontDataFactory = M;
          class S extends n.BaseSVGFactory {
            _createSVG(J) {
              return document.createElementNS(q, J);
            }
          }
          e.DOMSVGFactory = S;
          class h {
            constructor({
              viewBox: J,
              scale: rt,
              rotation: dt,
              offsetX: xt = 0,
              offsetY: Ot = 0,
              dontFlip: jt = !1
            }) {
              this.viewBox = J, this.scale = rt, this.rotation = dt, this.offsetX = xt, this.offsetY = Ot;
              const Wt = (J[2] + J[0]) / 2, Nt = (J[3] + J[1]) / 2;
              let Ht, $t, Gt, Ct;
              switch (dt %= 360, dt < 0 && (dt += 360), dt) {
                case 180:
                  Ht = -1, $t = 0, Gt = 0, Ct = 1;
                  break;
                case 90:
                  Ht = 0, $t = 1, Gt = 1, Ct = 0;
                  break;
                case 270:
                  Ht = 0, $t = -1, Gt = -1, Ct = 0;
                  break;
                case 0:
                  Ht = 1, $t = 0, Gt = 0, Ct = -1;
                  break;
                default:
                  throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
              }
              jt && (Gt = -Gt, Ct = -Ct);
              let m, B, ht, Lt;
              Ht === 0 ? (m = Math.abs(Nt - J[1]) * rt + xt, B = Math.abs(Wt - J[0]) * rt + Ot, ht = (J[3] - J[1]) * rt, Lt = (J[2] - J[0]) * rt) : (m = Math.abs(Wt - J[0]) * rt + xt, B = Math.abs(Nt - J[1]) * rt + Ot, ht = (J[2] - J[0]) * rt, Lt = (J[3] - J[1]) * rt), this.transform = [Ht * rt, $t * rt, Gt * rt, Ct * rt, m - Ht * rt * Wt - Gt * rt * Nt, B - $t * rt * Wt - Ct * rt * Nt], this.width = ht, this.height = Lt;
            }
            get rawDims() {
              const {
                viewBox: J
              } = this;
              return (0, f.shadow)(this, "rawDims", {
                pageWidth: J[2] - J[0],
                pageHeight: J[3] - J[1],
                pageX: J[0],
                pageY: J[1]
              });
            }
            clone({
              scale: J = this.scale,
              rotation: rt = this.rotation,
              offsetX: dt = this.offsetX,
              offsetY: xt = this.offsetY,
              dontFlip: Ot = !1
            } = {}) {
              return new h({
                viewBox: this.viewBox.slice(),
                scale: J,
                rotation: rt,
                offsetX: dt,
                offsetY: xt,
                dontFlip: Ot
              });
            }
            convertToViewportPoint(J, rt) {
              return f.Util.applyTransform([J, rt], this.transform);
            }
            convertToViewportRectangle(J) {
              const rt = f.Util.applyTransform([J[0], J[1]], this.transform), dt = f.Util.applyTransform([J[2], J[3]], this.transform);
              return [rt[0], rt[1], dt[0], dt[1]];
            }
            convertToPdfPoint(J, rt) {
              return f.Util.applyInverseTransform([J, rt], this.transform);
            }
          }
          e.PageViewport = h;
          class p extends f.BaseException {
            constructor(J, rt = 0) {
              super(J, "RenderingCancelledException"), this.extraDelay = rt;
            }
          }
          e.RenderingCancelledException = p;
          function u(at) {
            const J = at.length;
            let rt = 0;
            for (; rt < J && at[rt].trim() === ""; )
              rt++;
            return at.substring(rt, rt + 5).toLowerCase() === "data:";
          }
          function y(at) {
            return typeof at == "string" && /\.pdf$/i.test(at);
          }
          function b(at, J = !1) {
            return J || ([at] = at.split(/[#?]/, 1)), at.substring(at.lastIndexOf("/") + 1);
          }
          function g(at, J = "document.pdf") {
            if (typeof at != "string")
              return J;
            if (u(at))
              return (0, f.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), J;
            const rt = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, dt = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, xt = rt.exec(at);
            let Ot = dt.exec(xt[1]) || dt.exec(xt[2]) || dt.exec(xt[3]);
            if (Ot && (Ot = Ot[0], Ot.includes("%")))
              try {
                Ot = dt.exec(decodeURIComponent(Ot))[0];
              } catch {
              }
            return Ot || J;
          }
          class w {
            constructor() {
              Zt(this, "started", /* @__PURE__ */ Object.create(null));
              Zt(this, "times", []);
            }
            time(J) {
              J in this.started && (0, f.warn)(`Timer is already running for ${J}`), this.started[J] = Date.now();
            }
            timeEnd(J) {
              J in this.started || (0, f.warn)(`Timer has not been started for ${J}`), this.times.push({
                name: J,
                start: this.started[J],
                end: Date.now()
              }), delete this.started[J];
            }
            toString() {
              const J = [];
              let rt = 0;
              for (const {
                name: dt
              } of this.times)
                rt = Math.max(dt.length, rt);
              for (const {
                name: dt,
                start: xt,
                end: Ot
              } of this.times)
                J.push(`${dt.padEnd(rt)} ${Ot - xt}ms
`);
              return J.join("");
            }
          }
          e.StatTimer = w;
          function s(at, J) {
            try {
              const {
                protocol: rt
              } = J ? new URL(at, J) : new URL(at);
              return rt === "http:" || rt === "https:";
            } catch {
              return !1;
            }
          }
          function i(at, J = !1) {
            return new Promise((rt, dt) => {
              const xt = document.createElement("script");
              xt.src = at, xt.onload = function(Ot) {
                J && xt.remove(), rt(Ot);
              }, xt.onerror = function() {
                dt(new Error(`Cannot load script at: ${xt.src}`));
              }, (document.head || document.documentElement).append(xt);
            });
          }
          function E(at) {
            console.log("Deprecated API usage: " + at);
          }
          let _;
          class o {
            static toDateObject(J) {
              if (!J || typeof J != "string")
                return null;
              _ || (_ = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
              const rt = _.exec(J);
              if (!rt)
                return null;
              const dt = parseInt(rt[1], 10);
              let xt = parseInt(rt[2], 10);
              xt = xt >= 1 && xt <= 12 ? xt - 1 : 0;
              let Ot = parseInt(rt[3], 10);
              Ot = Ot >= 1 && Ot <= 31 ? Ot : 1;
              let jt = parseInt(rt[4], 10);
              jt = jt >= 0 && jt <= 23 ? jt : 0;
              let Wt = parseInt(rt[5], 10);
              Wt = Wt >= 0 && Wt <= 59 ? Wt : 0;
              let Nt = parseInt(rt[6], 10);
              Nt = Nt >= 0 && Nt <= 59 ? Nt : 0;
              const Ht = rt[7] || "Z";
              let $t = parseInt(rt[8], 10);
              $t = $t >= 0 && $t <= 23 ? $t : 0;
              let Gt = parseInt(rt[9], 10) || 0;
              return Gt = Gt >= 0 && Gt <= 59 ? Gt : 0, Ht === "-" ? (jt += $t, Wt += Gt) : Ht === "+" && (jt -= $t, Wt -= Gt), new Date(Date.UTC(dt, xt, Ot, jt, Wt, Nt));
            }
          }
          e.PDFDateString = o;
          function T(at, {
            scale: J = 1,
            rotation: rt = 0
          }) {
            const {
              width: dt,
              height: xt
            } = at.attributes.style, Ot = [0, 0, parseInt(dt), parseInt(xt)];
            return new h({
              viewBox: Ot,
              scale: J,
              rotation: rt
            });
          }
          function P(at) {
            if (at.startsWith("#")) {
              const J = parseInt(at.slice(1), 16);
              return [(J & 16711680) >> 16, (J & 65280) >> 8, J & 255];
            }
            return at.startsWith("rgb(") ? at.slice(4, -1).split(",").map((J) => parseInt(J)) : at.startsWith("rgba(") ? at.slice(5, -1).split(",").map((J) => parseInt(J)).slice(0, 3) : ((0, f.warn)(`Not a valid color format: "${at}"`), [0, 0, 0]);
          }
          function Y(at) {
            const J = document.createElement("span");
            J.style.visibility = "hidden", document.body.append(J);
            for (const rt of at.keys()) {
              J.style.color = rt;
              const dt = window.getComputedStyle(J).color;
              at.set(rt, P(dt));
            }
            J.remove();
          }
          function tt(at) {
            const {
              a: J,
              b: rt,
              c: dt,
              d: xt,
              e: Ot,
              f: jt
            } = at.getTransform();
            return [J, rt, dt, xt, Ot, jt];
          }
          function x(at) {
            const {
              a: J,
              b: rt,
              c: dt,
              d: xt,
              e: Ot,
              f: jt
            } = at.getTransform().invertSelf();
            return [J, rt, dt, xt, Ot, jt];
          }
          function K(at, J, rt = !1, dt = !0) {
            if (J instanceof h) {
              const {
                pageWidth: xt,
                pageHeight: Ot
              } = J.rawDims, {
                style: jt
              } = at, Wt = f.FeatureTest.isCSSRoundSupported, Nt = `var(--scale-factor) * ${xt}px`, Ht = `var(--scale-factor) * ${Ot}px`, $t = Wt ? `round(${Nt}, 1px)` : `calc(${Nt})`, Gt = Wt ? `round(${Ht}, 1px)` : `calc(${Ht})`;
              !rt || J.rotation % 180 === 0 ? (jt.width = $t, jt.height = Gt) : (jt.width = Gt, jt.height = $t);
            }
            dt && at.setAttribute("data-main-rotation", J.rotation);
          }
        },
        /* 7 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.BaseStandardFontDataFactory = e.BaseSVGFactory = e.BaseFilterFactory = e.BaseCanvasFactory = e.BaseCMapReaderFactory = void 0;
          var n = L(1);
          class f {
            constructor() {
              this.constructor === f && (0, n.unreachable)("Cannot initialize BaseFilterFactory.");
            }
            addFilter(r) {
              return "none";
            }
            addHCMFilter(r, F) {
              return "none";
            }
            addHighlightHCMFilter(r, F, M, S) {
              return "none";
            }
            destroy(r = !1) {
            }
          }
          e.BaseFilterFactory = f;
          class q {
            constructor() {
              this.constructor === q && (0, n.unreachable)("Cannot initialize BaseCanvasFactory.");
            }
            create(r, F) {
              if (r <= 0 || F <= 0)
                throw new Error("Invalid canvas size");
              const M = this._createCanvas(r, F);
              return {
                canvas: M,
                context: M.getContext("2d")
              };
            }
            reset(r, F, M) {
              if (!r.canvas)
                throw new Error("Canvas is not specified");
              if (F <= 0 || M <= 0)
                throw new Error("Invalid canvas size");
              r.canvas.width = F, r.canvas.height = M;
            }
            destroy(r) {
              if (!r.canvas)
                throw new Error("Canvas is not specified");
              r.canvas.width = 0, r.canvas.height = 0, r.canvas = null, r.context = null;
            }
            _createCanvas(r, F) {
              (0, n.unreachable)("Abstract method `_createCanvas` called.");
            }
          }
          e.BaseCanvasFactory = q;
          class V {
            constructor({
              baseUrl: r = null,
              isCompressed: F = !0
            }) {
              this.constructor === V && (0, n.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = r, this.isCompressed = F;
            }
            async fetch({
              name: r
            }) {
              if (!this.baseUrl)
                throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
              if (!r)
                throw new Error("CMap name must be specified.");
              const F = this.baseUrl + r + (this.isCompressed ? ".bcmap" : ""), M = this.isCompressed ? n.CMapCompressionType.BINARY : n.CMapCompressionType.NONE;
              return this._fetchData(F, M).catch((S) => {
                throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${F}`);
              });
            }
            _fetchData(r, F) {
              (0, n.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          e.BaseCMapReaderFactory = V;
          class I {
            constructor({
              baseUrl: r = null
            }) {
              this.constructor === I && (0, n.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = r;
            }
            async fetch({
              filename: r
            }) {
              if (!this.baseUrl)
                throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
              if (!r)
                throw new Error("Font filename must be specified.");
              const F = `${this.baseUrl}${r}`;
              return this._fetchData(F).catch((M) => {
                throw new Error(`Unable to load font data at: ${F}`);
              });
            }
            _fetchData(r) {
              (0, n.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          e.BaseStandardFontDataFactory = I;
          class c {
            constructor() {
              this.constructor === c && (0, n.unreachable)("Cannot initialize BaseSVGFactory.");
            }
            create(r, F, M = !1) {
              if (r <= 0 || F <= 0)
                throw new Error("Invalid SVG dimensions");
              const S = this._createSVG("svg:svg");
              return S.setAttribute("version", "1.1"), M || (S.setAttribute("width", `${r}px`), S.setAttribute("height", `${F}px`)), S.setAttribute("preserveAspectRatio", "none"), S.setAttribute("viewBox", `0 0 ${r} ${F}`), S;
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
          e.BaseSVGFactory = c;
        },
        /* 8 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.MurmurHash3_64 = void 0;
          var n = L(1);
          const f = 3285377520, q = 4294901760, V = 65535;
          class I {
            constructor(d) {
              this.h1 = d ? d & 4294967295 : f, this.h2 = d ? d & 4294967295 : f;
            }
            update(d) {
              let r, F;
              if (typeof d == "string") {
                r = new Uint8Array(d.length * 2), F = 0;
                for (let E = 0, _ = d.length; E < _; E++) {
                  const o = d.charCodeAt(E);
                  o <= 255 ? r[F++] = o : (r[F++] = o >>> 8, r[F++] = o & 255);
                }
              } else if ((0, n.isArrayBuffer)(d))
                r = d.slice(), F = r.byteLength;
              else
                throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
              const M = F >> 2, S = F - M * 4, h = new Uint32Array(r.buffer, 0, M);
              let p = 0, u = 0, y = this.h1, b = this.h2;
              const g = 3432918353, w = 461845907, s = g & V, i = w & V;
              for (let E = 0; E < M; E++)
                E & 1 ? (p = h[E], p = p * g & q | p * s & V, p = p << 15 | p >>> 17, p = p * w & q | p * i & V, y ^= p, y = y << 13 | y >>> 19, y = y * 5 + 3864292196) : (u = h[E], u = u * g & q | u * s & V, u = u << 15 | u >>> 17, u = u * w & q | u * i & V, b ^= u, b = b << 13 | b >>> 19, b = b * 5 + 3864292196);
              switch (p = 0, S) {
                case 3:
                  p ^= r[M * 4 + 2] << 16;
                case 2:
                  p ^= r[M * 4 + 1] << 8;
                case 1:
                  p ^= r[M * 4], p = p * g & q | p * s & V, p = p << 15 | p >>> 17, p = p * w & q | p * i & V, M & 1 ? y ^= p : b ^= p;
              }
              this.h1 = y, this.h2 = b;
            }
            hexdigest() {
              let d = this.h1, r = this.h2;
              return d ^= r >>> 1, d = d * 3981806797 & q | d * 36045 & V, r = r * 4283543511 & q | ((r << 16 | d >>> 16) * 2950163797 & q) >>> 16, d ^= r >>> 1, d = d * 444984403 & q | d * 60499 & V, r = r * 3301882366 & q | ((r << 16 | d >>> 16) * 3120437893 & q) >>> 16, d ^= r >>> 1, (d >>> 0).toString(16).padStart(8, "0") + (r >>> 0).toString(16).padStart(8, "0");
            }
          }
          e.MurmurHash3_64 = I;
        },
        /* 9 */
        /***/
        (A, e, L) => {
          var V;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.FontLoader = e.FontFaceObject = void 0;
          var n = L(1);
          class f {
            constructor({
              ownerDocument: c = globalThis.document,
              styleElement: d = null
            }) {
              N(this, V, /* @__PURE__ */ new Set());
              this._document = c, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
            }
            addNativeFontFace(c) {
              this.nativeFontFaces.add(c), this._document.fonts.add(c);
            }
            removeNativeFontFace(c) {
              this.nativeFontFaces.delete(c), this._document.fonts.delete(c);
            }
            insertRule(c) {
              this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
              const d = this.styleElement.sheet;
              d.insertRule(c, d.cssRules.length);
            }
            clear() {
              for (const c of this.nativeFontFaces)
                this._document.fonts.delete(c);
              this.nativeFontFaces.clear(), t(this, V).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
            }
            async loadSystemFont(c) {
              if (!(!c || t(this, V).has(c.loadedName))) {
                if ((0, n.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
                  const {
                    loadedName: d,
                    src: r,
                    style: F
                  } = c, M = new FontFace(d, r, F);
                  this.addNativeFontFace(M);
                  try {
                    await M.load(), t(this, V).add(d);
                  } catch {
                    (0, n.warn)(`Cannot load system font: ${c.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(M);
                  }
                  return;
                }
                (0, n.unreachable)("Not implemented: loadSystemFont without the Font Loading API.");
              }
            }
            async bind(c) {
              if (c.attached || c.missingFile && !c.systemFontInfo)
                return;
              if (c.attached = !0, c.systemFontInfo) {
                await this.loadSystemFont(c.systemFontInfo);
                return;
              }
              if (this.isFontLoadingAPISupported) {
                const r = c.createNativeFontFace();
                if (r) {
                  this.addNativeFontFace(r);
                  try {
                    await r.loaded;
                  } catch (F) {
                    throw (0, n.warn)(`Failed to load font '${r.family}': '${F}'.`), c.disableFontFace = !0, F;
                  }
                }
                return;
              }
              const d = c.createFontFaceRule();
              if (d) {
                if (this.insertRule(d), this.isSyncFontLoadingSupported)
                  return;
                await new Promise((r) => {
                  const F = this._queueLoadingCallback(r);
                  this._prepareFontLoadEvent(c, F);
                });
              }
            }
            get isFontLoadingAPISupported() {
              var d;
              const c = !!((d = this._document) != null && d.fonts);
              return (0, n.shadow)(this, "isFontLoadingAPISupported", c);
            }
            get isSyncFontLoadingSupported() {
              let c = !1;
              return (n.isNodeJS || typeof navigator < "u" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (c = !0), (0, n.shadow)(this, "isSyncFontLoadingSupported", c);
            }
            _queueLoadingCallback(c) {
              function d() {
                for ((0, n.assert)(!F.done, "completeRequest() cannot be called twice."), F.done = !0; r.length > 0 && r[0].done; ) {
                  const M = r.shift();
                  setTimeout(M.callback, 0);
                }
              }
              const {
                loadingRequests: r
              } = this, F = {
                done: !1,
                complete: d,
                callback: c
              };
              return r.push(F), F;
            }
            get _loadTestFont() {
              const c = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
              return (0, n.shadow)(this, "_loadTestFont", c);
            }
            _prepareFontLoadEvent(c, d) {
              function r(P, Y) {
                return P.charCodeAt(Y) << 24 | P.charCodeAt(Y + 1) << 16 | P.charCodeAt(Y + 2) << 8 | P.charCodeAt(Y + 3) & 255;
              }
              function F(P, Y, tt, x) {
                const K = P.substring(0, Y), Z = P.substring(Y + tt);
                return K + x + Z;
              }
              let M, S;
              const h = this._document.createElement("canvas");
              h.width = 1, h.height = 1;
              const p = h.getContext("2d");
              let u = 0;
              function y(P, Y) {
                if (++u > 30) {
                  (0, n.warn)("Load test font never loaded."), Y();
                  return;
                }
                if (p.font = "30px " + P, p.fillText(".", 0, 20), p.getImageData(0, 0, 1, 1).data[3] > 0) {
                  Y();
                  return;
                }
                setTimeout(y.bind(null, P, Y));
              }
              const b = `lt${Date.now()}${this.loadTestFontId++}`;
              let g = this._loadTestFont;
              g = F(g, 976, b.length, b);
              const s = 16, i = 1482184792;
              let E = r(g, s);
              for (M = 0, S = b.length - 3; M < S; M += 4)
                E = E - i + r(b, M) | 0;
              M < b.length && (E = E - i + r(b + "XXX", M) | 0), g = F(g, s, 4, (0, n.string32)(E));
              const _ = `url(data:font/opentype;base64,${btoa(g)});`, o = `@font-face {font-family:"${b}";src:${_}}`;
              this.insertRule(o);
              const T = this._document.createElement("div");
              T.style.visibility = "hidden", T.style.width = T.style.height = "10px", T.style.position = "absolute", T.style.top = T.style.left = "0px";
              for (const P of [c.loadedName, b]) {
                const Y = this._document.createElement("span");
                Y.textContent = "Hi", Y.style.fontFamily = P, T.append(Y);
              }
              this._document.body.append(T), y(b, () => {
                T.remove(), d.complete();
              });
            }
          }
          V = new WeakMap(), e.FontLoader = f;
          class q {
            constructor(c, {
              isEvalSupported: d = !0,
              disableFontFace: r = !1,
              ignoreErrors: F = !1,
              inspectFont: M = null
            }) {
              this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
              for (const S in c)
                this[S] = c[S];
              this.isEvalSupported = d !== !1, this.disableFontFace = r === !0, this.ignoreErrors = F === !0, this._inspectFont = M;
            }
            createNativeFontFace() {
              var d;
              if (!this.data || this.disableFontFace)
                return null;
              let c;
              if (!this.cssFontInfo)
                c = new FontFace(this.loadedName, this.data, {});
              else {
                const r = {
                  weight: this.cssFontInfo.fontWeight
                };
                this.cssFontInfo.italicAngle && (r.style = `oblique ${this.cssFontInfo.italicAngle}deg`), c = new FontFace(this.cssFontInfo.fontFamily, this.data, r);
              }
              return (d = this._inspectFont) == null || d.call(this, this), c;
            }
            createFontFaceRule() {
              var F;
              if (!this.data || this.disableFontFace)
                return null;
              const c = (0, n.bytesToString)(this.data), d = `url(data:${this.mimetype};base64,${btoa(c)});`;
              let r;
              if (!this.cssFontInfo)
                r = `@font-face {font-family:"${this.loadedName}";src:${d}}`;
              else {
                let M = `font-weight: ${this.cssFontInfo.fontWeight};`;
                this.cssFontInfo.italicAngle && (M += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), r = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${M}src:${d}}`;
              }
              return (F = this._inspectFont) == null || F.call(this, this, d), r;
            }
            getPathGenerator(c, d) {
              if (this.compiledGlyphs[d] !== void 0)
                return this.compiledGlyphs[d];
              let r;
              try {
                r = c.get(this.loadedName + "_path_" + d);
              } catch (F) {
                if (!this.ignoreErrors)
                  throw F;
                return (0, n.warn)(`getPathGenerator - ignoring character: "${F}".`), this.compiledGlyphs[d] = function(M, S) {
                };
              }
              if (this.isEvalSupported && n.FeatureTest.isEvalSupported) {
                const F = [];
                for (const M of r) {
                  const S = M.args !== void 0 ? M.args.join(",") : "";
                  F.push("c.", M.cmd, "(", S, `);
`);
                }
                return this.compiledGlyphs[d] = new Function("c", "size", F.join(""));
              }
              return this.compiledGlyphs[d] = function(F, M) {
                for (const S of r)
                  S.cmd === "scale" && (S.args = [M, -M]), F[S.cmd].apply(F, S.args);
              };
            }
          }
          e.FontFaceObject = q;
        },
        /* 10 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.NodeStandardFontDataFactory = e.NodeFilterFactory = e.NodeCanvasFactory = e.NodeCMapReaderFactory = void 0;
          var n = L(7);
          L(1);
          const f = function(d) {
            return new Promise((r, F) => {
              require$$5.readFile(d, (S, h) => {
                if (S || !h) {
                  F(new Error(S));
                  return;
                }
                r(new Uint8Array(h));
              });
            });
          };
          class q extends n.BaseFilterFactory {
          }
          e.NodeFilterFactory = q;
          class V extends n.BaseCanvasFactory {
            _createCanvas(r, F) {
              return require$$5.createCanvas(r, F);
            }
          }
          e.NodeCanvasFactory = V;
          class I extends n.BaseCMapReaderFactory {
            _fetchData(r, F) {
              return f(r).then((M) => ({
                cMapData: M,
                compressionType: F
              }));
            }
          }
          e.NodeCMapReaderFactory = I;
          class c extends n.BaseStandardFontDataFactory {
            _fetchData(r) {
              return f(r);
            }
          }
          e.NodeStandardFontDataFactory = c;
        },
        /* 11 */
        /***/
        (A, e, L) => {
          var v, ti, D, ei;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.CanvasGraphics = void 0;
          var n = L(1), f = L(6), q = L(12), V = L(13);
          const I = 16, c = 100, d = 4096, r = 15, F = 10, M = 1e3, S = 16;
          function h(k, a) {
            if (k._removeMirroring)
              throw new Error("Context is already forwarding operations.");
            k.__originalSave = k.save, k.__originalRestore = k.restore, k.__originalRotate = k.rotate, k.__originalScale = k.scale, k.__originalTranslate = k.translate, k.__originalTransform = k.transform, k.__originalSetTransform = k.setTransform, k.__originalResetTransform = k.resetTransform, k.__originalClip = k.clip, k.__originalMoveTo = k.moveTo, k.__originalLineTo = k.lineTo, k.__originalBezierCurveTo = k.bezierCurveTo, k.__originalRect = k.rect, k.__originalClosePath = k.closePath, k.__originalBeginPath = k.beginPath, k._removeMirroring = () => {
              k.save = k.__originalSave, k.restore = k.__originalRestore, k.rotate = k.__originalRotate, k.scale = k.__originalScale, k.translate = k.__originalTranslate, k.transform = k.__originalTransform, k.setTransform = k.__originalSetTransform, k.resetTransform = k.__originalResetTransform, k.clip = k.__originalClip, k.moveTo = k.__originalMoveTo, k.lineTo = k.__originalLineTo, k.bezierCurveTo = k.__originalBezierCurveTo, k.rect = k.__originalRect, k.closePath = k.__originalClosePath, k.beginPath = k.__originalBeginPath, delete k._removeMirroring;
            }, k.save = function() {
              a.save(), this.__originalSave();
            }, k.restore = function() {
              a.restore(), this.__originalRestore();
            }, k.translate = function(R, $) {
              a.translate(R, $), this.__originalTranslate(R, $);
            }, k.scale = function(R, $) {
              a.scale(R, $), this.__originalScale(R, $);
            }, k.transform = function(R, $, W, nt, st, ut) {
              a.transform(R, $, W, nt, st, ut), this.__originalTransform(R, $, W, nt, st, ut);
            }, k.setTransform = function(R, $, W, nt, st, ut) {
              a.setTransform(R, $, W, nt, st, ut), this.__originalSetTransform(R, $, W, nt, st, ut);
            }, k.resetTransform = function() {
              a.resetTransform(), this.__originalResetTransform();
            }, k.rotate = function(R) {
              a.rotate(R), this.__originalRotate(R);
            }, k.clip = function(R) {
              a.clip(R), this.__originalClip(R);
            }, k.moveTo = function(l, R) {
              a.moveTo(l, R), this.__originalMoveTo(l, R);
            }, k.lineTo = function(l, R) {
              a.lineTo(l, R), this.__originalLineTo(l, R);
            }, k.bezierCurveTo = function(l, R, $, W, nt, st) {
              a.bezierCurveTo(l, R, $, W, nt, st), this.__originalBezierCurveTo(l, R, $, W, nt, st);
            }, k.rect = function(l, R, $, W) {
              a.rect(l, R, $, W), this.__originalRect(l, R, $, W);
            }, k.closePath = function() {
              a.closePath(), this.__originalClosePath();
            }, k.beginPath = function() {
              a.beginPath(), this.__originalBeginPath();
            };
          }
          class p {
            constructor(a) {
              this.canvasFactory = a, this.cache = /* @__PURE__ */ Object.create(null);
            }
            getCanvas(a, l, R) {
              let $;
              return this.cache[a] !== void 0 ? ($ = this.cache[a], this.canvasFactory.reset($, l, R)) : ($ = this.canvasFactory.create(l, R), this.cache[a] = $), $;
            }
            delete(a) {
              delete this.cache[a];
            }
            clear() {
              for (const a in this.cache) {
                const l = this.cache[a];
                this.canvasFactory.destroy(l), delete this.cache[a];
              }
            }
          }
          function u(k, a, l, R, $, W, nt, st, ut, wt) {
            const [yt, Et, ot, At, St, Rt] = (0, f.getCurrentTransform)(k);
            if (Et === 0 && ot === 0) {
              const Ut = nt * yt + St, at = Math.round(Ut), J = st * At + Rt, rt = Math.round(J), dt = (nt + ut) * yt + St, xt = Math.abs(Math.round(dt) - at) || 1, Ot = (st + wt) * At + Rt, jt = Math.abs(Math.round(Ot) - rt) || 1;
              return k.setTransform(Math.sign(yt), 0, 0, Math.sign(At), at, rt), k.drawImage(a, l, R, $, W, 0, 0, xt, jt), k.setTransform(yt, Et, ot, At, St, Rt), [xt, jt];
            }
            if (yt === 0 && At === 0) {
              const Ut = st * ot + St, at = Math.round(Ut), J = nt * Et + Rt, rt = Math.round(J), dt = (st + wt) * ot + St, xt = Math.abs(Math.round(dt) - at) || 1, Ot = (nt + ut) * Et + Rt, jt = Math.abs(Math.round(Ot) - rt) || 1;
              return k.setTransform(0, Math.sign(Et), Math.sign(ot), 0, at, rt), k.drawImage(a, l, R, $, W, 0, 0, jt, xt), k.setTransform(yt, Et, ot, At, St, Rt), [jt, xt];
            }
            k.drawImage(a, l, R, $, W, nt, st, ut, wt);
            const Bt = Math.hypot(yt, Et), kt = Math.hypot(ot, At);
            return [Bt * ut, kt * wt];
          }
          function y(k) {
            const {
              width: a,
              height: l
            } = k;
            if (a > M || l > M)
              return null;
            const R = 1e3, $ = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), W = a + 1;
            let nt = new Uint8Array(W * (l + 1)), st, ut, wt;
            const yt = a + 7 & -8;
            let Et = new Uint8Array(yt * l), ot = 0;
            for (const kt of k.data) {
              let Ut = 128;
              for (; Ut > 0; )
                Et[ot++] = kt & Ut ? 0 : 255, Ut >>= 1;
            }
            let At = 0;
            for (ot = 0, Et[ot] !== 0 && (nt[0] = 1, ++At), ut = 1; ut < a; ut++)
              Et[ot] !== Et[ot + 1] && (nt[ut] = Et[ot] ? 2 : 1, ++At), ot++;
            for (Et[ot] !== 0 && (nt[ut] = 2, ++At), st = 1; st < l; st++) {
              ot = st * yt, wt = st * W, Et[ot - yt] !== Et[ot] && (nt[wt] = Et[ot] ? 1 : 8, ++At);
              let kt = (Et[ot] ? 4 : 0) + (Et[ot - yt] ? 8 : 0);
              for (ut = 1; ut < a; ut++)
                kt = (kt >> 2) + (Et[ot + 1] ? 4 : 0) + (Et[ot - yt + 1] ? 8 : 0), $[kt] && (nt[wt + ut] = $[kt], ++At), ot++;
              if (Et[ot - yt] !== Et[ot] && (nt[wt + ut] = Et[ot] ? 2 : 4, ++At), At > R)
                return null;
            }
            for (ot = yt * (l - 1), wt = st * W, Et[ot] !== 0 && (nt[wt] = 8, ++At), ut = 1; ut < a; ut++)
              Et[ot] !== Et[ot + 1] && (nt[wt + ut] = Et[ot] ? 4 : 8, ++At), ot++;
            if (Et[ot] !== 0 && (nt[wt + ut] = 4, ++At), At > R)
              return null;
            const St = new Int32Array([0, W, -1, 0, -W, 0, 0, 0, 1]), Rt = new Path2D();
            for (st = 0; At && st <= l; st++) {
              let kt = st * W;
              const Ut = kt + a;
              for (; kt < Ut && !nt[kt]; )
                kt++;
              if (kt === Ut)
                continue;
              Rt.moveTo(kt % W, st);
              const at = kt;
              let J = nt[kt];
              do {
                const rt = St[J];
                do
                  kt += rt;
                while (!nt[kt]);
                const dt = nt[kt];
                dt !== 5 && dt !== 10 ? (J = dt, nt[kt] = 0) : (J = dt & 51 * J >> 4, nt[kt] &= J >> 2 | J << 2), Rt.lineTo(kt % W, kt / W | 0), nt[kt] || --At;
              } while (at !== kt);
              --st;
            }
            return Et = null, nt = null, function(kt) {
              kt.save(), kt.scale(1 / a, -1 / l), kt.translate(0, -l), kt.fill(Rt), kt.beginPath(), kt.restore();
            };
          }
          class b {
            constructor(a, l) {
              this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = n.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = n.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = n.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, a, l]);
            }
            clone() {
              const a = Object.create(this);
              return a.clipBox = this.clipBox.slice(), a;
            }
            setCurrentPoint(a, l) {
              this.x = a, this.y = l;
            }
            updatePathMinMax(a, l, R) {
              [l, R] = n.Util.applyTransform([l, R], a), this.minX = Math.min(this.minX, l), this.minY = Math.min(this.minY, R), this.maxX = Math.max(this.maxX, l), this.maxY = Math.max(this.maxY, R);
            }
            updateRectMinMax(a, l) {
              const R = n.Util.applyTransform(l, a), $ = n.Util.applyTransform(l.slice(2), a);
              this.minX = Math.min(this.minX, R[0], $[0]), this.minY = Math.min(this.minY, R[1], $[1]), this.maxX = Math.max(this.maxX, R[0], $[0]), this.maxY = Math.max(this.maxY, R[1], $[1]);
            }
            updateScalingPathMinMax(a, l) {
              n.Util.scaleMinMax(a, l), this.minX = Math.min(this.minX, l[0]), this.maxX = Math.max(this.maxX, l[1]), this.minY = Math.min(this.minY, l[2]), this.maxY = Math.max(this.maxY, l[3]);
            }
            updateCurvePathMinMax(a, l, R, $, W, nt, st, ut, wt, yt) {
              const Et = n.Util.bezierBoundingBox(l, R, $, W, nt, st, ut, wt);
              if (yt) {
                yt[0] = Math.min(yt[0], Et[0], Et[2]), yt[1] = Math.max(yt[1], Et[0], Et[2]), yt[2] = Math.min(yt[2], Et[1], Et[3]), yt[3] = Math.max(yt[3], Et[1], Et[3]);
                return;
              }
              this.updateRectMinMax(a, Et);
            }
            getPathBoundingBox(a = q.PathType.FILL, l = null) {
              const R = [this.minX, this.minY, this.maxX, this.maxY];
              if (a === q.PathType.STROKE) {
                l || (0, n.unreachable)("Stroke bounding box must include transform.");
                const $ = n.Util.singularValueDecompose2dScale(l), W = $[0] * this.lineWidth / 2, nt = $[1] * this.lineWidth / 2;
                R[0] -= W, R[1] -= nt, R[2] += W, R[3] += nt;
              }
              return R;
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
            getClippedPathBoundingBox(a = q.PathType.FILL, l = null) {
              return n.Util.intersect(this.clipBox, this.getPathBoundingBox(a, l));
            }
          }
          function g(k, a) {
            if (typeof ImageData < "u" && a instanceof ImageData) {
              k.putImageData(a, 0, 0);
              return;
            }
            const l = a.height, R = a.width, $ = l % S, W = (l - $) / S, nt = $ === 0 ? W : W + 1, st = k.createImageData(R, S);
            let ut = 0, wt;
            const yt = a.data, Et = st.data;
            let ot, At, St, Rt;
            if (a.kind === n.ImageKind.GRAYSCALE_1BPP) {
              const Bt = yt.byteLength, kt = new Uint32Array(Et.buffer, 0, Et.byteLength >> 2), Ut = kt.length, at = R + 7 >> 3, J = 4294967295, rt = n.FeatureTest.isLittleEndian ? 4278190080 : 255;
              for (ot = 0; ot < nt; ot++) {
                for (St = ot < W ? S : $, wt = 0, At = 0; At < St; At++) {
                  const dt = Bt - ut;
                  let xt = 0;
                  const Ot = dt > at ? R : dt * 8 - 7, jt = Ot & -8;
                  let Wt = 0, Nt = 0;
                  for (; xt < jt; xt += 8)
                    Nt = yt[ut++], kt[wt++] = Nt & 128 ? J : rt, kt[wt++] = Nt & 64 ? J : rt, kt[wt++] = Nt & 32 ? J : rt, kt[wt++] = Nt & 16 ? J : rt, kt[wt++] = Nt & 8 ? J : rt, kt[wt++] = Nt & 4 ? J : rt, kt[wt++] = Nt & 2 ? J : rt, kt[wt++] = Nt & 1 ? J : rt;
                  for (; xt < Ot; xt++)
                    Wt === 0 && (Nt = yt[ut++], Wt = 128), kt[wt++] = Nt & Wt ? J : rt, Wt >>= 1;
                }
                for (; wt < Ut; )
                  kt[wt++] = 0;
                k.putImageData(st, 0, ot * S);
              }
            } else if (a.kind === n.ImageKind.RGBA_32BPP) {
              for (At = 0, Rt = R * S * 4, ot = 0; ot < W; ot++)
                Et.set(yt.subarray(ut, ut + Rt)), ut += Rt, k.putImageData(st, 0, At), At += S;
              ot < nt && (Rt = R * $ * 4, Et.set(yt.subarray(ut, ut + Rt)), k.putImageData(st, 0, At));
            } else if (a.kind === n.ImageKind.RGB_24BPP)
              for (St = S, Rt = R * St, ot = 0; ot < nt; ot++) {
                for (ot >= W && (St = $, Rt = R * St), wt = 0, At = Rt; At--; )
                  Et[wt++] = yt[ut++], Et[wt++] = yt[ut++], Et[wt++] = yt[ut++], Et[wt++] = 255;
                k.putImageData(st, 0, ot * S);
              }
            else
              throw new Error(`bad image kind: ${a.kind}`);
          }
          function w(k, a) {
            if (a.bitmap) {
              k.drawImage(a.bitmap, 0, 0);
              return;
            }
            const l = a.height, R = a.width, $ = l % S, W = (l - $) / S, nt = $ === 0 ? W : W + 1, st = k.createImageData(R, S);
            let ut = 0;
            const wt = a.data, yt = st.data;
            for (let Et = 0; Et < nt; Et++) {
              const ot = Et < W ? S : $;
              ({
                srcPos: ut
              } = (0, V.convertBlackAndWhiteToRGBA)({
                src: wt,
                srcPos: ut,
                dest: yt,
                width: R,
                height: ot,
                nonBlackColor: 0
              })), k.putImageData(st, 0, Et * S);
            }
          }
          function s(k, a) {
            const l = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
            for (const R of l)
              k[R] !== void 0 && (a[R] = k[R]);
            k.setLineDash !== void 0 && (a.setLineDash(k.getLineDash()), a.lineDashOffset = k.lineDashOffset);
          }
          function i(k) {
            if (k.strokeStyle = k.fillStyle = "#000000", k.fillRule = "nonzero", k.globalAlpha = 1, k.lineWidth = 1, k.lineCap = "butt", k.lineJoin = "miter", k.miterLimit = 10, k.globalCompositeOperation = "source-over", k.font = "10px sans-serif", k.setLineDash !== void 0 && (k.setLineDash([]), k.lineDashOffset = 0), !n.isNodeJS) {
              const {
                filter: a
              } = k;
              a !== "none" && a !== "" && (k.filter = "none");
            }
          }
          function E(k, a, l, R) {
            const $ = k.length;
            for (let W = 3; W < $; W += 4) {
              const nt = k[W];
              if (nt === 0)
                k[W - 3] = a, k[W - 2] = l, k[W - 1] = R;
              else if (nt < 255) {
                const st = 255 - nt;
                k[W - 3] = k[W - 3] * nt + a * st >> 8, k[W - 2] = k[W - 2] * nt + l * st >> 8, k[W - 1] = k[W - 1] * nt + R * st >> 8;
              }
            }
          }
          function _(k, a, l) {
            const R = k.length, $ = 1 / 255;
            for (let W = 3; W < R; W += 4) {
              const nt = l ? l[k[W]] : k[W];
              a[W] = a[W] * nt * $ | 0;
            }
          }
          function o(k, a, l) {
            const R = k.length;
            for (let $ = 3; $ < R; $ += 4) {
              const W = k[$ - 3] * 77 + k[$ - 2] * 152 + k[$ - 1] * 28;
              a[$] = l ? a[$] * l[W >> 8] >> 8 : a[$] * W >> 16;
            }
          }
          function T(k, a, l, R, $, W, nt, st, ut, wt, yt) {
            const Et = !!W, ot = Et ? W[0] : 0, At = Et ? W[1] : 0, St = Et ? W[2] : 0, Rt = $ === "Luminosity" ? o : _, kt = Math.min(R, Math.ceil(1048576 / l));
            for (let Ut = 0; Ut < R; Ut += kt) {
              const at = Math.min(kt, R - Ut), J = k.getImageData(st - wt, Ut + (ut - yt), l, at), rt = a.getImageData(st, Ut + ut, l, at);
              Et && E(J.data, ot, At, St), Rt(J.data, rt.data, nt), a.putImageData(rt, st, Ut + ut);
            }
          }
          function P(k, a, l, R) {
            const $ = R[0], W = R[1], nt = R[2] - $, st = R[3] - W;
            nt === 0 || st === 0 || (T(a.context, l, nt, st, a.subtype, a.backdrop, a.transferMap, $, W, a.offsetX, a.offsetY), k.save(), k.globalAlpha = 1, k.globalCompositeOperation = "source-over", k.setTransform(1, 0, 0, 1, 0, 0), k.drawImage(l.canvas, 0, 0), k.restore());
          }
          function Y(k, a) {
            const l = n.Util.singularValueDecompose2dScale(k);
            l[0] = Math.fround(l[0]), l[1] = Math.fround(l[1]);
            const R = Math.fround((globalThis.devicePixelRatio || 1) * f.PixelsPerInch.PDF_TO_CSS_UNITS);
            return a !== void 0 ? a : l[0] <= R || l[1] <= R;
          }
          const tt = ["butt", "round", "square"], x = ["miter", "round", "bevel"], K = {}, Z = {}, _t = class _t {
            constructor(a, l, R, $, W, {
              optionalContentConfig: nt,
              markedContentStack: st = null
            }, ut, wt) {
              N(this, v);
              N(this, D);
              this.ctx = a, this.current = new b(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = l, this.objs = R, this.canvasFactory = $, this.filterFactory = W, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = st || [], this.optionalContentConfig = nt, this.cachedCanvases = new p(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = ut, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = wt, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
            }
            getObject(a, l = null) {
              return typeof a == "string" ? a.startsWith("g_") ? this.commonObjs.get(a) : this.objs.get(a) : l;
            }
            beginDrawing({
              transform: a,
              viewport: l,
              transparency: R = !1,
              background: $ = null
            }) {
              const W = this.ctx.canvas.width, nt = this.ctx.canvas.height, st = this.ctx.fillStyle;
              if (this.ctx.fillStyle = $ || "#ffffff", this.ctx.fillRect(0, 0, W, nt), this.ctx.fillStyle = st, R) {
                const ut = this.cachedCanvases.getCanvas("transparent", W, nt);
                this.compositeCtx = this.ctx, this.transparentCanvas = ut.canvas, this.ctx = ut.context, this.ctx.save(), this.ctx.transform(...(0, f.getCurrentTransform)(this.compositeCtx));
              }
              this.ctx.save(), i(this.ctx), a && (this.ctx.transform(...a), this.outputScaleX = a[0], this.outputScaleY = a[0]), this.ctx.transform(...l.transform), this.viewportScale = l.scale, this.baseTransform = (0, f.getCurrentTransform)(this.ctx);
            }
            executeOperatorList(a, l, R, $) {
              const W = a.argsArray, nt = a.fnArray;
              let st = l || 0;
              const ut = W.length;
              if (ut === st)
                return st;
              const wt = ut - st > F && typeof R == "function", yt = wt ? Date.now() + r : 0;
              let Et = 0;
              const ot = this.commonObjs, At = this.objs;
              let St;
              for (; ; ) {
                if ($ !== void 0 && st === $.nextBreakPoint)
                  return $.breakIt(st, R), st;
                if (St = nt[st], St !== n.OPS.dependency)
                  this[St].apply(this, W[st]);
                else
                  for (const Rt of W[st]) {
                    const Bt = Rt.startsWith("g_") ? ot : At;
                    if (!Bt.has(Rt))
                      return Bt.get(Rt, R), st;
                  }
                if (st++, st === ut)
                  return st;
                if (wt && ++Et > F) {
                  if (Date.now() > yt)
                    return R(), st;
                  Et = 0;
                }
              }
            }
            endDrawing() {
              X(this, v, ti).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
              for (const a of this._cachedBitmapsMap.values()) {
                for (const l of a.values())
                  typeof HTMLCanvasElement < "u" && l instanceof HTMLCanvasElement && (l.width = l.height = 0);
                a.clear();
              }
              this._cachedBitmapsMap.clear(), X(this, D, ei).call(this);
            }
            _scaleImage(a, l) {
              const R = a.width, $ = a.height;
              let W = Math.max(Math.hypot(l[0], l[1]), 1), nt = Math.max(Math.hypot(l[2], l[3]), 1), st = R, ut = $, wt = "prescale1", yt, Et;
              for (; W > 2 && st > 1 || nt > 2 && ut > 1; ) {
                let ot = st, At = ut;
                W > 2 && st > 1 && (ot = st >= 16384 ? Math.floor(st / 2) - 1 || 1 : Math.ceil(st / 2), W /= st / ot), nt > 2 && ut > 1 && (At = ut >= 16384 ? Math.floor(ut / 2) - 1 || 1 : Math.ceil(ut) / 2, nt /= ut / At), yt = this.cachedCanvases.getCanvas(wt, ot, At), Et = yt.context, Et.clearRect(0, 0, ot, At), Et.drawImage(a, 0, 0, st, ut, 0, 0, ot, At), a = yt.canvas, st = ot, ut = At, wt = wt === "prescale1" ? "prescale2" : "prescale1";
              }
              return {
                img: a,
                paintWidth: st,
                paintHeight: ut
              };
            }
            _createMaskCanvas(a) {
              const l = this.ctx, {
                width: R,
                height: $
              } = a, W = this.current.fillColor, nt = this.current.patternFill, st = (0, f.getCurrentTransform)(l);
              let ut, wt, yt, Et;
              if ((a.bitmap || a.data) && a.count > 1) {
                const xt = a.bitmap || a.data.buffer;
                wt = JSON.stringify(nt ? st : [st.slice(0, 4), W]), ut = this._cachedBitmapsMap.get(xt), ut || (ut = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(xt, ut));
                const Ot = ut.get(wt);
                if (Ot && !nt) {
                  const jt = Math.round(Math.min(st[0], st[2]) + st[4]), Wt = Math.round(Math.min(st[1], st[3]) + st[5]);
                  return {
                    canvas: Ot,
                    offsetX: jt,
                    offsetY: Wt
                  };
                }
                yt = Ot;
              }
              yt || (Et = this.cachedCanvases.getCanvas("maskCanvas", R, $), w(Et.context, a));
              let ot = n.Util.transform(st, [1 / R, 0, 0, -1 / $, 0, 0]);
              ot = n.Util.transform(ot, [1, 0, 0, 1, 0, -$]);
              const At = n.Util.applyTransform([0, 0], ot), St = n.Util.applyTransform([R, $], ot), Rt = n.Util.normalizeRect([At[0], At[1], St[0], St[1]]), Bt = Math.round(Rt[2] - Rt[0]) || 1, kt = Math.round(Rt[3] - Rt[1]) || 1, Ut = this.cachedCanvases.getCanvas("fillCanvas", Bt, kt), at = Ut.context, J = Math.min(At[0], St[0]), rt = Math.min(At[1], St[1]);
              at.translate(-J, -rt), at.transform(...ot), yt || (yt = this._scaleImage(Et.canvas, (0, f.getCurrentTransformInverse)(at)), yt = yt.img, ut && nt && ut.set(wt, yt)), at.imageSmoothingEnabled = Y((0, f.getCurrentTransform)(at), a.interpolate), u(at, yt, 0, 0, yt.width, yt.height, 0, 0, R, $), at.globalCompositeOperation = "source-in";
              const dt = n.Util.transform((0, f.getCurrentTransformInverse)(at), [1, 0, 0, 1, -J, -rt]);
              return at.fillStyle = nt ? W.getPattern(l, this, dt, q.PathType.FILL) : W, at.fillRect(0, 0, R, $), ut && !nt && (this.cachedCanvases.delete("fillCanvas"), ut.set(wt, Ut.canvas)), {
                canvas: Ut.canvas,
                offsetX: Math.round(J),
                offsetY: Math.round(rt)
              };
            }
            setLineWidth(a) {
              a !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = a, this.ctx.lineWidth = a;
            }
            setLineCap(a) {
              this.ctx.lineCap = tt[a];
            }
            setLineJoin(a) {
              this.ctx.lineJoin = x[a];
            }
            setMiterLimit(a) {
              this.ctx.miterLimit = a;
            }
            setDash(a, l) {
              const R = this.ctx;
              R.setLineDash !== void 0 && (R.setLineDash(a), R.lineDashOffset = l);
            }
            setRenderingIntent(a) {
            }
            setFlatness(a) {
            }
            setGState(a) {
              for (const [l, R] of a)
                switch (l) {
                  case "LW":
                    this.setLineWidth(R);
                    break;
                  case "LC":
                    this.setLineCap(R);
                    break;
                  case "LJ":
                    this.setLineJoin(R);
                    break;
                  case "ML":
                    this.setMiterLimit(R);
                    break;
                  case "D":
                    this.setDash(R[0], R[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(R);
                    break;
                  case "FL":
                    this.setFlatness(R);
                    break;
                  case "Font":
                    this.setFont(R[0], R[1]);
                    break;
                  case "CA":
                    this.current.strokeAlpha = R;
                    break;
                  case "ca":
                    this.current.fillAlpha = R, this.ctx.globalAlpha = R;
                    break;
                  case "BM":
                    this.ctx.globalCompositeOperation = R;
                    break;
                  case "SMask":
                    this.current.activeSMask = R ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                    break;
                  case "TR":
                    this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(R);
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
              const a = this.ctx.canvas.width, l = this.ctx.canvas.height, R = "smaskGroupAt" + this.groupLevel, $ = this.cachedCanvases.getCanvas(R, a, l);
              this.suspendedCtx = this.ctx, this.ctx = $.context;
              const W = this.ctx;
              W.setTransform(...(0, f.getCurrentTransform)(this.suspendedCtx)), s(this.suspendedCtx, W), h(W, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
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
              const l = this.current.activeSMask, R = this.suspendedCtx;
              P(R, l, this.ctx, a), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
            }
            save() {
              this.inSMaskMode ? (s(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
              const a = this.current;
              this.stateStack.push(a), this.current = a.clone();
            }
            restore() {
              this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), s(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
            }
            transform(a, l, R, $, W, nt) {
              this.ctx.transform(a, l, R, $, W, nt), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
            }
            constructPath(a, l, R) {
              const $ = this.ctx, W = this.current;
              let nt = W.x, st = W.y, ut, wt;
              const yt = (0, f.getCurrentTransform)($), Et = yt[0] === 0 && yt[3] === 0 || yt[1] === 0 && yt[2] === 0, ot = Et ? R.slice(0) : null;
              for (let At = 0, St = 0, Rt = a.length; At < Rt; At++)
                switch (a[At] | 0) {
                  case n.OPS.rectangle:
                    nt = l[St++], st = l[St++];
                    const Bt = l[St++], kt = l[St++], Ut = nt + Bt, at = st + kt;
                    $.moveTo(nt, st), Bt === 0 || kt === 0 ? $.lineTo(Ut, at) : ($.lineTo(Ut, st), $.lineTo(Ut, at), $.lineTo(nt, at)), Et || W.updateRectMinMax(yt, [nt, st, Ut, at]), $.closePath();
                    break;
                  case n.OPS.moveTo:
                    nt = l[St++], st = l[St++], $.moveTo(nt, st), Et || W.updatePathMinMax(yt, nt, st);
                    break;
                  case n.OPS.lineTo:
                    nt = l[St++], st = l[St++], $.lineTo(nt, st), Et || W.updatePathMinMax(yt, nt, st);
                    break;
                  case n.OPS.curveTo:
                    ut = nt, wt = st, nt = l[St + 4], st = l[St + 5], $.bezierCurveTo(l[St], l[St + 1], l[St + 2], l[St + 3], nt, st), W.updateCurvePathMinMax(yt, ut, wt, l[St], l[St + 1], l[St + 2], l[St + 3], nt, st, ot), St += 6;
                    break;
                  case n.OPS.curveTo2:
                    ut = nt, wt = st, $.bezierCurveTo(nt, st, l[St], l[St + 1], l[St + 2], l[St + 3]), W.updateCurvePathMinMax(yt, ut, wt, nt, st, l[St], l[St + 1], l[St + 2], l[St + 3], ot), nt = l[St + 2], st = l[St + 3], St += 4;
                    break;
                  case n.OPS.curveTo3:
                    ut = nt, wt = st, nt = l[St + 2], st = l[St + 3], $.bezierCurveTo(l[St], l[St + 1], nt, st, nt, st), W.updateCurvePathMinMax(yt, ut, wt, l[St], l[St + 1], nt, st, nt, st, ot), St += 4;
                    break;
                  case n.OPS.closePath:
                    $.closePath();
                    break;
                }
              Et && W.updateScalingPathMinMax(yt, ot), W.setCurrentPoint(nt, st);
            }
            closePath() {
              this.ctx.closePath();
            }
            stroke(a = !0) {
              const l = this.ctx, R = this.current.strokeColor;
              l.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof R == "object" && (R != null && R.getPattern) ? (l.save(), l.strokeStyle = R.getPattern(l, this, (0, f.getCurrentTransformInverse)(l), q.PathType.STROKE), this.rescaleAndStroke(!1), l.restore()) : this.rescaleAndStroke(!0)), a && this.consumePath(this.current.getClippedPathBoundingBox()), l.globalAlpha = this.current.fillAlpha;
            }
            closeStroke() {
              this.closePath(), this.stroke();
            }
            fill(a = !0) {
              const l = this.ctx, R = this.current.fillColor, $ = this.current.patternFill;
              let W = !1;
              $ && (l.save(), l.fillStyle = R.getPattern(l, this, (0, f.getCurrentTransformInverse)(l), q.PathType.FILL), W = !0);
              const nt = this.current.getClippedPathBoundingBox();
              this.contentVisible && nt !== null && (this.pendingEOFill ? (l.fill("evenodd"), this.pendingEOFill = !1) : l.fill()), W && l.restore(), a && this.consumePath(nt);
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
              this.pendingClip = K;
            }
            eoClip() {
              this.pendingClip = Z;
            }
            beginText() {
              this.current.textMatrix = n.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
            }
            endText() {
              const a = this.pendingTextPaths, l = this.ctx;
              if (a === void 0) {
                l.beginPath();
                return;
              }
              l.save(), l.beginPath();
              for (const R of a)
                l.setTransform(...R.transform), l.translate(R.x, R.y), R.addToPath(l, R.fontSize);
              l.restore(), l.clip(), l.beginPath(), delete this.pendingTextPaths;
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
            setFont(a, l) {
              var yt;
              const R = this.commonObjs.get(a), $ = this.current;
              if (!R)
                throw new Error(`Can't find font for ${a}`);
              if ($.fontMatrix = R.fontMatrix || n.FONT_IDENTITY_MATRIX, ($.fontMatrix[0] === 0 || $.fontMatrix[3] === 0) && (0, n.warn)("Invalid font matrix for font " + a), l < 0 ? (l = -l, $.fontDirection = -1) : $.fontDirection = 1, this.current.font = R, this.current.fontSize = l, R.isType3Font)
                return;
              const W = R.loadedName || "sans-serif", nt = ((yt = R.systemFontInfo) == null ? void 0 : yt.css) || `"${W}", ${R.fallbackName}`;
              let st = "normal";
              R.black ? st = "900" : R.bold && (st = "bold");
              const ut = R.italic ? "italic" : "normal";
              let wt = l;
              l < I ? wt = I : l > c && (wt = c), this.current.fontSizeScale = l / wt, this.ctx.font = `${ut} ${st} ${wt}px ${nt}`;
            }
            setTextRenderingMode(a) {
              this.current.textRenderingMode = a;
            }
            setTextRise(a) {
              this.current.textRise = a;
            }
            moveText(a, l) {
              this.current.x = this.current.lineX += a, this.current.y = this.current.lineY += l;
            }
            setLeadingMoveText(a, l) {
              this.setLeading(-l), this.moveText(a, l);
            }
            setTextMatrix(a, l, R, $, W, nt) {
              this.current.textMatrix = [a, l, R, $, W, nt], this.current.textMatrixScale = Math.hypot(a, l), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            paintChar(a, l, R, $) {
              const W = this.ctx, nt = this.current, st = nt.font, ut = nt.textRenderingMode, wt = nt.fontSize / nt.fontSizeScale, yt = ut & n.TextRenderingMode.FILL_STROKE_MASK, Et = !!(ut & n.TextRenderingMode.ADD_TO_PATH_FLAG), ot = nt.patternFill && !st.missingFile;
              let At;
              (st.disableFontFace || Et || ot) && (At = st.getPathGenerator(this.commonObjs, a)), st.disableFontFace || ot ? (W.save(), W.translate(l, R), W.beginPath(), At(W, wt), $ && W.setTransform(...$), (yt === n.TextRenderingMode.FILL || yt === n.TextRenderingMode.FILL_STROKE) && W.fill(), (yt === n.TextRenderingMode.STROKE || yt === n.TextRenderingMode.FILL_STROKE) && W.stroke(), W.restore()) : ((yt === n.TextRenderingMode.FILL || yt === n.TextRenderingMode.FILL_STROKE) && W.fillText(a, l, R), (yt === n.TextRenderingMode.STROKE || yt === n.TextRenderingMode.FILL_STROKE) && W.strokeText(a, l, R)), Et && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                transform: (0, f.getCurrentTransform)(W),
                x: l,
                y: R,
                fontSize: wt,
                addToPath: At
              });
            }
            get isFontSubpixelAAEnabled() {
              const {
                context: a
              } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
              a.scale(1.5, 1), a.fillText("I", 0, 10);
              const l = a.getImageData(0, 0, 10, 10).data;
              let R = !1;
              for (let $ = 3; $ < l.length; $ += 4)
                if (l[$] > 0 && l[$] < 255) {
                  R = !0;
                  break;
                }
              return (0, n.shadow)(this, "isFontSubpixelAAEnabled", R);
            }
            showText(a) {
              const l = this.current, R = l.font;
              if (R.isType3Font)
                return this.showType3Text(a);
              const $ = l.fontSize;
              if ($ === 0)
                return;
              const W = this.ctx, nt = l.fontSizeScale, st = l.charSpacing, ut = l.wordSpacing, wt = l.fontDirection, yt = l.textHScale * wt, Et = a.length, ot = R.vertical, At = ot ? 1 : -1, St = R.defaultVMetrics, Rt = $ * l.fontMatrix[0], Bt = l.textRenderingMode === n.TextRenderingMode.FILL && !R.disableFontFace && !l.patternFill;
              W.save(), W.transform(...l.textMatrix), W.translate(l.x, l.y + l.textRise), wt > 0 ? W.scale(yt, -1) : W.scale(yt, 1);
              let kt;
              if (l.patternFill) {
                W.save();
                const dt = l.fillColor.getPattern(W, this, (0, f.getCurrentTransformInverse)(W), q.PathType.FILL);
                kt = (0, f.getCurrentTransform)(W), W.restore(), W.fillStyle = dt;
              }
              let Ut = l.lineWidth;
              const at = l.textMatrixScale;
              if (at === 0 || Ut === 0) {
                const dt = l.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                (dt === n.TextRenderingMode.STROKE || dt === n.TextRenderingMode.FILL_STROKE) && (Ut = this.getSinglePixelWidth());
              } else
                Ut /= at;
              if (nt !== 1 && (W.scale(nt, nt), Ut /= nt), W.lineWidth = Ut, R.isInvalidPDFjsFont) {
                const dt = [];
                let xt = 0;
                for (const Ot of a)
                  dt.push(Ot.unicode), xt += Ot.width;
                W.fillText(dt.join(""), 0, 0), l.x += xt * Rt * yt, W.restore(), this.compose();
                return;
              }
              let J = 0, rt;
              for (rt = 0; rt < Et; ++rt) {
                const dt = a[rt];
                if (typeof dt == "number") {
                  J += At * dt * $ / 1e3;
                  continue;
                }
                let xt = !1;
                const Ot = (dt.isSpace ? ut : 0) + st, jt = dt.fontChar, Wt = dt.accent;
                let Nt, Ht, $t = dt.width;
                if (ot) {
                  const Ct = dt.vmetric || St, m = -(dt.vmetric ? Ct[1] : $t * 0.5) * Rt, B = Ct[2] * Rt;
                  $t = Ct ? -Ct[0] : $t, Nt = m / nt, Ht = (J + B) / nt;
                } else
                  Nt = J / nt, Ht = 0;
                if (R.remeasure && $t > 0) {
                  const Ct = W.measureText(jt).width * 1e3 / $ * nt;
                  if ($t < Ct && this.isFontSubpixelAAEnabled) {
                    const m = $t / Ct;
                    xt = !0, W.save(), W.scale(m, 1), Nt /= m;
                  } else
                    $t !== Ct && (Nt += ($t - Ct) / 2e3 * $ / nt);
                }
                if (this.contentVisible && (dt.isInFont || R.missingFile)) {
                  if (Bt && !Wt)
                    W.fillText(jt, Nt, Ht);
                  else if (this.paintChar(jt, Nt, Ht, kt), Wt) {
                    const Ct = Nt + $ * Wt.offset.x / nt, m = Ht - $ * Wt.offset.y / nt;
                    this.paintChar(Wt.fontChar, Ct, m, kt);
                  }
                }
                const Gt = ot ? $t * Rt - Ot * wt : $t * Rt + Ot * wt;
                J += Gt, xt && W.restore();
              }
              ot ? l.y -= J : l.x += J * yt, W.restore(), this.compose();
            }
            showType3Text(a) {
              const l = this.ctx, R = this.current, $ = R.font, W = R.fontSize, nt = R.fontDirection, st = $.vertical ? 1 : -1, ut = R.charSpacing, wt = R.wordSpacing, yt = R.textHScale * nt, Et = R.fontMatrix || n.FONT_IDENTITY_MATRIX, ot = a.length, At = R.textRenderingMode === n.TextRenderingMode.INVISIBLE;
              let St, Rt, Bt, kt;
              if (!(At || W === 0)) {
                for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, l.save(), l.transform(...R.textMatrix), l.translate(R.x, R.y), l.scale(yt, nt), St = 0; St < ot; ++St) {
                  if (Rt = a[St], typeof Rt == "number") {
                    kt = st * Rt * W / 1e3, this.ctx.translate(kt, 0), R.x += kt * yt;
                    continue;
                  }
                  const Ut = (Rt.isSpace ? wt : 0) + ut, at = $.charProcOperatorList[Rt.operatorListId];
                  if (!at) {
                    (0, n.warn)(`Type3 character "${Rt.operatorListId}" is not available.`);
                    continue;
                  }
                  this.contentVisible && (this.processingType3 = Rt, this.save(), l.scale(W, W), l.transform(...Et), this.executeOperatorList(at), this.restore()), Bt = n.Util.applyTransform([Rt.width, 0], Et)[0] * W + Ut, l.translate(Bt, 0), R.x += Bt * yt;
                }
                l.restore(), this.processingType3 = null;
              }
            }
            setCharWidth(a, l) {
            }
            setCharWidthAndBounds(a, l, R, $, W, nt) {
              this.ctx.rect(R, $, W - R, nt - $), this.ctx.clip(), this.endPath();
            }
            getColorN_Pattern(a) {
              let l;
              if (a[0] === "TilingPattern") {
                const R = a[1], $ = this.baseTransform || (0, f.getCurrentTransform)(this.ctx), W = {
                  createCanvasGraphics: (nt) => new _t(nt, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                    optionalContentConfig: this.optionalContentConfig,
                    markedContentStack: this.markedContentStack
                  })
                };
                l = new q.TilingPattern(a, R, this.ctx, W, $);
              } else
                l = this._getPattern(a[1], a[2]);
              return l;
            }
            setStrokeColorN() {
              this.current.strokeColor = this.getColorN_Pattern(arguments);
            }
            setFillColorN() {
              this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
            }
            setStrokeRGBColor(a, l, R) {
              const $ = n.Util.makeHexColor(a, l, R);
              this.ctx.strokeStyle = $, this.current.strokeColor = $;
            }
            setFillRGBColor(a, l, R) {
              const $ = n.Util.makeHexColor(a, l, R);
              this.ctx.fillStyle = $, this.current.fillColor = $, this.current.patternFill = !1;
            }
            _getPattern(a, l = null) {
              let R;
              return this.cachedPatterns.has(a) ? R = this.cachedPatterns.get(a) : (R = (0, q.getShadingPattern)(this.getObject(a)), this.cachedPatterns.set(a, R)), l && (R.matrix = l), R;
            }
            shadingFill(a) {
              if (!this.contentVisible)
                return;
              const l = this.ctx;
              this.save();
              const R = this._getPattern(a);
              l.fillStyle = R.getPattern(l, this, (0, f.getCurrentTransformInverse)(l), q.PathType.SHADING);
              const $ = (0, f.getCurrentTransformInverse)(l);
              if ($) {
                const {
                  width: W,
                  height: nt
                } = l.canvas, [st, ut, wt, yt] = n.Util.getAxialAlignedBoundingBox([0, 0, W, nt], $);
                this.ctx.fillRect(st, ut, wt - st, yt - ut);
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
            paintFormXObjectBegin(a, l) {
              if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(a) && a.length === 6 && this.transform(...a), this.baseTransform = (0, f.getCurrentTransform)(this.ctx), l)) {
                const R = l[2] - l[0], $ = l[3] - l[1];
                this.ctx.rect(l[0], l[1], R, $), this.current.updateRectMinMax((0, f.getCurrentTransform)(this.ctx), l), this.clip(), this.endPath();
              }
            }
            paintFormXObjectEnd() {
              this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
            }
            beginGroup(a) {
              if (!this.contentVisible)
                return;
              this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
              const l = this.ctx;
              a.isolated || (0, n.info)("TODO: Support non-isolated groups."), a.knockout && (0, n.warn)("Knockout groups not supported.");
              const R = (0, f.getCurrentTransform)(l);
              if (a.matrix && l.transform(...a.matrix), !a.bbox)
                throw new Error("Bounding box is required.");
              let $ = n.Util.getAxialAlignedBoundingBox(a.bbox, (0, f.getCurrentTransform)(l));
              const W = [0, 0, l.canvas.width, l.canvas.height];
              $ = n.Util.intersect($, W) || [0, 0, 0, 0];
              const nt = Math.floor($[0]), st = Math.floor($[1]);
              let ut = Math.max(Math.ceil($[2]) - nt, 1), wt = Math.max(Math.ceil($[3]) - st, 1), yt = 1, Et = 1;
              ut > d && (yt = ut / d, ut = d), wt > d && (Et = wt / d, wt = d), this.current.startNewPathAndClipBox([0, 0, ut, wt]);
              let ot = "groupAt" + this.groupLevel;
              a.smask && (ot += "_smask_" + this.smaskCounter++ % 2);
              const At = this.cachedCanvases.getCanvas(ot, ut, wt), St = At.context;
              St.scale(1 / yt, 1 / Et), St.translate(-nt, -st), St.transform(...R), a.smask ? this.smaskStack.push({
                canvas: At.canvas,
                context: St,
                offsetX: nt,
                offsetY: st,
                scaleX: yt,
                scaleY: Et,
                subtype: a.smask.subtype,
                backdrop: a.smask.backdrop,
                transferMap: a.smask.transferMap || null,
                startTransformInverse: null
              }) : (l.setTransform(1, 0, 0, 1, 0, 0), l.translate(nt, st), l.scale(yt, Et), l.save()), s(l, St), this.ctx = St, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(l), this.groupLevel++;
            }
            endGroup(a) {
              if (!this.contentVisible)
                return;
              this.groupLevel--;
              const l = this.ctx, R = this.groupStack.pop();
              if (this.ctx = R, this.ctx.imageSmoothingEnabled = !1, a.smask)
                this.tempSMask = this.smaskStack.pop(), this.restore();
              else {
                this.ctx.restore();
                const $ = (0, f.getCurrentTransform)(this.ctx);
                this.restore(), this.ctx.save(), this.ctx.setTransform(...$);
                const W = n.Util.getAxialAlignedBoundingBox([0, 0, l.canvas.width, l.canvas.height], $);
                this.ctx.drawImage(l.canvas, 0, 0), this.ctx.restore(), this.compose(W);
              }
            }
            beginAnnotation(a, l, R, $, W) {
              if (X(this, v, ti).call(this), i(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(l) && l.length === 4) {
                const nt = l[2] - l[0], st = l[3] - l[1];
                if (W && this.annotationCanvasMap) {
                  R = R.slice(), R[4] -= l[0], R[5] -= l[1], l = l.slice(), l[0] = l[1] = 0, l[2] = nt, l[3] = st;
                  const [ut, wt] = n.Util.singularValueDecompose2dScale((0, f.getCurrentTransform)(this.ctx)), {
                    viewportScale: yt
                  } = this, Et = Math.ceil(nt * this.outputScaleX * yt), ot = Math.ceil(st * this.outputScaleY * yt);
                  this.annotationCanvas = this.canvasFactory.create(Et, ot);
                  const {
                    canvas: At,
                    context: St
                  } = this.annotationCanvas;
                  this.annotationCanvasMap.set(a, At), this.annotationCanvas.savedCtx = this.ctx, this.ctx = St, this.ctx.save(), this.ctx.setTransform(ut, 0, 0, -wt, 0, st * wt), i(this.ctx);
                } else
                  i(this.ctx), this.ctx.rect(l[0], l[1], nt, st), this.ctx.clip(), this.endPath();
              }
              this.current = new b(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...R), this.transform(...$);
            }
            endAnnotation() {
              this.annotationCanvas && (this.ctx.restore(), X(this, D, ei).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
            }
            paintImageMaskXObject(a) {
              if (!this.contentVisible)
                return;
              const l = a.count;
              a = this.getObject(a.data, a), a.count = l;
              const R = this.ctx, $ = this.processingType3;
              if ($ && ($.compiled === void 0 && ($.compiled = y(a)), $.compiled)) {
                $.compiled(R);
                return;
              }
              const W = this._createMaskCanvas(a), nt = W.canvas;
              R.save(), R.setTransform(1, 0, 0, 1, 0, 0), R.drawImage(nt, W.offsetX, W.offsetY), R.restore(), this.compose();
            }
            paintImageMaskXObjectRepeat(a, l, R = 0, $ = 0, W, nt) {
              if (!this.contentVisible)
                return;
              a = this.getObject(a.data, a);
              const st = this.ctx;
              st.save();
              const ut = (0, f.getCurrentTransform)(st);
              st.transform(l, R, $, W, 0, 0);
              const wt = this._createMaskCanvas(a);
              st.setTransform(1, 0, 0, 1, wt.offsetX - ut[4], wt.offsetY - ut[5]);
              for (let yt = 0, Et = nt.length; yt < Et; yt += 2) {
                const ot = n.Util.transform(ut, [l, R, $, W, nt[yt], nt[yt + 1]]), [At, St] = n.Util.applyTransform([0, 0], ot);
                st.drawImage(wt.canvas, At, St);
              }
              st.restore(), this.compose();
            }
            paintImageMaskXObjectGroup(a) {
              if (!this.contentVisible)
                return;
              const l = this.ctx, R = this.current.fillColor, $ = this.current.patternFill;
              for (const W of a) {
                const {
                  data: nt,
                  width: st,
                  height: ut,
                  transform: wt
                } = W, yt = this.cachedCanvases.getCanvas("maskCanvas", st, ut), Et = yt.context;
                Et.save();
                const ot = this.getObject(nt, W);
                w(Et, ot), Et.globalCompositeOperation = "source-in", Et.fillStyle = $ ? R.getPattern(Et, this, (0, f.getCurrentTransformInverse)(l), q.PathType.FILL) : R, Et.fillRect(0, 0, st, ut), Et.restore(), l.save(), l.transform(...wt), l.scale(1, -1), u(l, yt.canvas, 0, 0, st, ut, 0, -1, 1, 1), l.restore();
              }
              this.compose();
            }
            paintImageXObject(a) {
              if (!this.contentVisible)
                return;
              const l = this.getObject(a);
              if (!l) {
                (0, n.warn)("Dependent image isn't ready yet");
                return;
              }
              this.paintInlineImageXObject(l);
            }
            paintImageXObjectRepeat(a, l, R, $) {
              if (!this.contentVisible)
                return;
              const W = this.getObject(a);
              if (!W) {
                (0, n.warn)("Dependent image isn't ready yet");
                return;
              }
              const nt = W.width, st = W.height, ut = [];
              for (let wt = 0, yt = $.length; wt < yt; wt += 2)
                ut.push({
                  transform: [l, 0, 0, R, $[wt], $[wt + 1]],
                  x: 0,
                  y: 0,
                  w: nt,
                  h: st
                });
              this.paintInlineImageXObjectGroup(W, ut);
            }
            applyTransferMapsToCanvas(a) {
              return this.current.transferMaps !== "none" && (a.filter = this.current.transferMaps, a.drawImage(a.canvas, 0, 0), a.filter = "none"), a.canvas;
            }
            applyTransferMapsToBitmap(a) {
              if (this.current.transferMaps === "none")
                return a.bitmap;
              const {
                bitmap: l,
                width: R,
                height: $
              } = a, W = this.cachedCanvases.getCanvas("inlineImage", R, $), nt = W.context;
              return nt.filter = this.current.transferMaps, nt.drawImage(l, 0, 0), nt.filter = "none", W.canvas;
            }
            paintInlineImageXObject(a) {
              if (!this.contentVisible)
                return;
              const l = a.width, R = a.height, $ = this.ctx;
              if (this.save(), !n.isNodeJS) {
                const {
                  filter: st
                } = $;
                st !== "none" && st !== "" && ($.filter = "none");
              }
              $.scale(1 / l, -1 / R);
              let W;
              if (a.bitmap)
                W = this.applyTransferMapsToBitmap(a);
              else if (typeof HTMLElement == "function" && a instanceof HTMLElement || !a.data)
                W = a;
              else {
                const ut = this.cachedCanvases.getCanvas("inlineImage", l, R).context;
                g(ut, a), W = this.applyTransferMapsToCanvas(ut);
              }
              const nt = this._scaleImage(W, (0, f.getCurrentTransformInverse)($));
              $.imageSmoothingEnabled = Y((0, f.getCurrentTransform)($), a.interpolate), u($, nt.img, 0, 0, nt.paintWidth, nt.paintHeight, 0, -R, l, R), this.compose(), this.restore();
            }
            paintInlineImageXObjectGroup(a, l) {
              if (!this.contentVisible)
                return;
              const R = this.ctx;
              let $;
              if (a.bitmap)
                $ = a.bitmap;
              else {
                const W = a.width, nt = a.height, ut = this.cachedCanvases.getCanvas("inlineImage", W, nt).context;
                g(ut, a), $ = this.applyTransferMapsToCanvas(ut);
              }
              for (const W of l)
                R.save(), R.transform(...W.transform), R.scale(1, -1), u(R, $, W.x, W.y, W.w, W.h, 0, -1, 1, 1), R.restore();
              this.compose();
            }
            paintSolidColorImageMask() {
              this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
            }
            markPoint(a) {
            }
            markPointProps(a, l) {
            }
            beginMarkedContent(a) {
              this.markedContentStack.push({
                visible: !0
              });
            }
            beginMarkedContentProps(a, l) {
              a === "OC" ? this.markedContentStack.push({
                visible: this.optionalContentConfig.isVisible(l)
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
              const l = this.current.isEmptyClip();
              this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(a);
              const R = this.ctx;
              this.pendingClip && (l || (this.pendingClip === Z ? R.clip("evenodd") : R.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), R.beginPath();
            }
            getSinglePixelWidth() {
              if (!this._cachedGetSinglePixelWidth) {
                const a = (0, f.getCurrentTransform)(this.ctx);
                if (a[1] === 0 && a[2] === 0)
                  this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(a[0]), Math.abs(a[3]));
                else {
                  const l = Math.abs(a[0] * a[3] - a[2] * a[1]), R = Math.hypot(a[0], a[2]), $ = Math.hypot(a[1], a[3]);
                  this._cachedGetSinglePixelWidth = Math.max(R, $) / l;
                }
              }
              return this._cachedGetSinglePixelWidth;
            }
            getScaleForStroking() {
              if (this._cachedScaleForStroking[0] === -1) {
                const {
                  lineWidth: a
                } = this.current, {
                  a: l,
                  b: R,
                  c: $,
                  d: W
                } = this.ctx.getTransform();
                let nt, st;
                if (R === 0 && $ === 0) {
                  const ut = Math.abs(l), wt = Math.abs(W);
                  if (ut === wt)
                    if (a === 0)
                      nt = st = 1 / ut;
                    else {
                      const yt = ut * a;
                      nt = st = yt < 1 ? 1 / yt : 1;
                    }
                  else if (a === 0)
                    nt = 1 / ut, st = 1 / wt;
                  else {
                    const yt = ut * a, Et = wt * a;
                    nt = yt < 1 ? 1 / yt : 1, st = Et < 1 ? 1 / Et : 1;
                  }
                } else {
                  const ut = Math.abs(l * W - R * $), wt = Math.hypot(l, R), yt = Math.hypot($, W);
                  if (a === 0)
                    nt = yt / ut, st = wt / ut;
                  else {
                    const Et = a * ut;
                    nt = yt > Et ? yt / Et : 1, st = wt > Et ? wt / Et : 1;
                  }
                }
                this._cachedScaleForStroking[0] = nt, this._cachedScaleForStroking[1] = st;
              }
              return this._cachedScaleForStroking;
            }
            rescaleAndStroke(a) {
              const {
                ctx: l
              } = this, {
                lineWidth: R
              } = this.current, [$, W] = this.getScaleForStroking();
              if (l.lineWidth = R || 1, $ === 1 && W === 1) {
                l.stroke();
                return;
              }
              const nt = l.getLineDash();
              if (a && l.save(), l.scale($, W), nt.length > 0) {
                const st = Math.max($, W);
                l.setLineDash(nt.map((ut) => ut / st)), l.lineDashOffset /= st;
              }
              l.stroke(), a && l.restore();
            }
            isContentVisible() {
              for (let a = this.markedContentStack.length - 1; a >= 0; a--)
                if (!this.markedContentStack[a].visible)
                  return !1;
              return !0;
            }
          };
          v = new WeakSet(), ti = function() {
            for (; this.stateStack.length || this.inSMaskMode; )
              this.restore();
            this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
          }, D = new WeakSet(), ei = function() {
            if (this.pageColors) {
              const a = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
              if (a !== "none") {
                const l = this.ctx.filter;
                this.ctx.filter = a, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = l;
              }
            }
          };
          let Q = _t;
          e.CanvasGraphics = Q;
          for (const k in n.OPS)
            Q.prototype[k] !== void 0 && (Q.prototype[n.OPS[k]] = Q.prototype[k]);
        },
        /* 12 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.TilingPattern = e.PathType = void 0, e.getShadingPattern = S;
          var n = L(1), f = L(6);
          const q = {
            FILL: "Fill",
            STROKE: "Stroke",
            SHADING: "Shading"
          };
          e.PathType = q;
          function V(y, b) {
            if (!b)
              return;
            const g = b[2] - b[0], w = b[3] - b[1], s = new Path2D();
            s.rect(b[0], b[1], g, w), y.clip(s);
          }
          class I {
            constructor() {
              this.constructor === I && (0, n.unreachable)("Cannot initialize BaseShadingPattern.");
            }
            getPattern() {
              (0, n.unreachable)("Abstract method `getPattern` called.");
            }
          }
          class c extends I {
            constructor(b) {
              super(), this._type = b[1], this._bbox = b[2], this._colorStops = b[3], this._p0 = b[4], this._p1 = b[5], this._r0 = b[6], this._r1 = b[7], this.matrix = null;
            }
            _createGradient(b) {
              let g;
              this._type === "axial" ? g = b.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (g = b.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
              for (const w of this._colorStops)
                g.addColorStop(w[0], w[1]);
              return g;
            }
            getPattern(b, g, w, s) {
              let i;
              if (s === q.STROKE || s === q.FILL) {
                const E = g.current.getClippedPathBoundingBox(s, (0, f.getCurrentTransform)(b)) || [0, 0, 0, 0], _ = Math.ceil(E[2] - E[0]) || 1, o = Math.ceil(E[3] - E[1]) || 1, T = g.cachedCanvases.getCanvas("pattern", _, o, !0), P = T.context;
                P.clearRect(0, 0, P.canvas.width, P.canvas.height), P.beginPath(), P.rect(0, 0, P.canvas.width, P.canvas.height), P.translate(-E[0], -E[1]), w = n.Util.transform(w, [1, 0, 0, 1, E[0], E[1]]), P.transform(...g.baseTransform), this.matrix && P.transform(...this.matrix), V(P, this._bbox), P.fillStyle = this._createGradient(P), P.fill(), i = b.createPattern(T.canvas, "no-repeat");
                const Y = new DOMMatrix(w);
                i.setTransform(Y);
              } else
                V(b, this._bbox), i = this._createGradient(b);
              return i;
            }
          }
          function d(y, b, g, w, s, i, E, _) {
            const o = b.coords, T = b.colors, P = y.data, Y = y.width * 4;
            let tt;
            o[g + 1] > o[w + 1] && (tt = g, g = w, w = tt, tt = i, i = E, E = tt), o[w + 1] > o[s + 1] && (tt = w, w = s, s = tt, tt = E, E = _, _ = tt), o[g + 1] > o[w + 1] && (tt = g, g = w, w = tt, tt = i, i = E, E = tt);
            const x = (o[g] + b.offsetX) * b.scaleX, K = (o[g + 1] + b.offsetY) * b.scaleY, Z = (o[w] + b.offsetX) * b.scaleX, Q = (o[w + 1] + b.offsetY) * b.scaleY, v = (o[s] + b.offsetX) * b.scaleX, j = (o[s + 1] + b.offsetY) * b.scaleY;
            if (K >= j)
              return;
            const D = T[i], lt = T[i + 1], _t = T[i + 2], k = T[E], a = T[E + 1], l = T[E + 2], R = T[_], $ = T[_ + 1], W = T[_ + 2], nt = Math.round(K), st = Math.round(j);
            let ut, wt, yt, Et, ot, At, St, Rt;
            for (let Bt = nt; Bt <= st; Bt++) {
              if (Bt < Q) {
                const rt = Bt < K ? 0 : (K - Bt) / (K - Q);
                ut = x - (x - Z) * rt, wt = D - (D - k) * rt, yt = lt - (lt - a) * rt, Et = _t - (_t - l) * rt;
              } else {
                let rt;
                Bt > j ? rt = 1 : Q === j ? rt = 0 : rt = (Q - Bt) / (Q - j), ut = Z - (Z - v) * rt, wt = k - (k - R) * rt, yt = a - (a - $) * rt, Et = l - (l - W) * rt;
              }
              let kt;
              Bt < K ? kt = 0 : Bt > j ? kt = 1 : kt = (K - Bt) / (K - j), ot = x - (x - v) * kt, At = D - (D - R) * kt, St = lt - (lt - $) * kt, Rt = _t - (_t - W) * kt;
              const Ut = Math.round(Math.min(ut, ot)), at = Math.round(Math.max(ut, ot));
              let J = Y * Bt + Ut * 4;
              for (let rt = Ut; rt <= at; rt++)
                kt = (ut - rt) / (ut - ot), kt < 0 ? kt = 0 : kt > 1 && (kt = 1), P[J++] = wt - (wt - At) * kt | 0, P[J++] = yt - (yt - St) * kt | 0, P[J++] = Et - (Et - Rt) * kt | 0, P[J++] = 255;
            }
          }
          function r(y, b, g) {
            const w = b.coords, s = b.colors;
            let i, E;
            switch (b.type) {
              case "lattice":
                const _ = b.verticesPerRow, o = Math.floor(w.length / _) - 1, T = _ - 1;
                for (i = 0; i < o; i++) {
                  let P = i * _;
                  for (let Y = 0; Y < T; Y++, P++)
                    d(y, g, w[P], w[P + 1], w[P + _], s[P], s[P + 1], s[P + _]), d(y, g, w[P + _ + 1], w[P + 1], w[P + _], s[P + _ + 1], s[P + 1], s[P + _]);
                }
                break;
              case "triangles":
                for (i = 0, E = w.length; i < E; i += 3)
                  d(y, g, w[i], w[i + 1], w[i + 2], s[i], s[i + 1], s[i + 2]);
                break;
              default:
                throw new Error("illegal figure");
            }
          }
          class F extends I {
            constructor(b) {
              super(), this._coords = b[2], this._colors = b[3], this._figures = b[4], this._bounds = b[5], this._bbox = b[7], this._background = b[8], this.matrix = null;
            }
            _createMeshCanvas(b, g, w) {
              const _ = Math.floor(this._bounds[0]), o = Math.floor(this._bounds[1]), T = Math.ceil(this._bounds[2]) - _, P = Math.ceil(this._bounds[3]) - o, Y = Math.min(Math.ceil(Math.abs(T * b[0] * 1.1)), 3e3), tt = Math.min(Math.ceil(Math.abs(P * b[1] * 1.1)), 3e3), x = T / Y, K = P / tt, Z = {
                coords: this._coords,
                colors: this._colors,
                offsetX: -_,
                offsetY: -o,
                scaleX: 1 / x,
                scaleY: 1 / K
              }, Q = Y + 2 * 2, v = tt + 2 * 2, j = w.getCanvas("mesh", Q, v, !1), D = j.context, lt = D.createImageData(Y, tt);
              if (g) {
                const k = lt.data;
                for (let a = 0, l = k.length; a < l; a += 4)
                  k[a] = g[0], k[a + 1] = g[1], k[a + 2] = g[2], k[a + 3] = 255;
              }
              for (const k of this._figures)
                r(lt, k, Z);
              return D.putImageData(lt, 2, 2), {
                canvas: j.canvas,
                offsetX: _ - 2 * x,
                offsetY: o - 2 * K,
                scaleX: x,
                scaleY: K
              };
            }
            getPattern(b, g, w, s) {
              V(b, this._bbox);
              let i;
              if (s === q.SHADING)
                i = n.Util.singularValueDecompose2dScale((0, f.getCurrentTransform)(b));
              else if (i = n.Util.singularValueDecompose2dScale(g.baseTransform), this.matrix) {
                const _ = n.Util.singularValueDecompose2dScale(this.matrix);
                i = [i[0] * _[0], i[1] * _[1]];
              }
              const E = this._createMeshCanvas(i, s === q.SHADING ? null : this._background, g.cachedCanvases);
              return s !== q.SHADING && (b.setTransform(...g.baseTransform), this.matrix && b.transform(...this.matrix)), b.translate(E.offsetX, E.offsetY), b.scale(E.scaleX, E.scaleY), b.createPattern(E.canvas, "no-repeat");
            }
          }
          class M extends I {
            getPattern() {
              return "hotpink";
            }
          }
          function S(y) {
            switch (y[0]) {
              case "RadialAxial":
                return new c(y);
              case "Mesh":
                return new F(y);
              case "Dummy":
                return new M();
            }
            throw new Error(`Unknown IR type: ${y[0]}`);
          }
          const h = {
            COLORED: 1,
            UNCOLORED: 2
          }, u = class u {
            constructor(b, g, w, s, i) {
              this.operatorList = b[2], this.matrix = b[3] || [1, 0, 0, 1, 0, 0], this.bbox = b[4], this.xstep = b[5], this.ystep = b[6], this.paintType = b[7], this.tilingType = b[8], this.color = g, this.ctx = w, this.canvasGraphicsFactory = s, this.baseTransform = i;
            }
            createPatternCanvas(b) {
              const g = this.operatorList, w = this.bbox, s = this.xstep, i = this.ystep, E = this.paintType, _ = this.tilingType, o = this.color, T = this.canvasGraphicsFactory;
              (0, n.info)("TilingType: " + _);
              const P = w[0], Y = w[1], tt = w[2], x = w[3], K = n.Util.singularValueDecompose2dScale(this.matrix), Z = n.Util.singularValueDecompose2dScale(this.baseTransform), Q = [K[0] * Z[0], K[1] * Z[1]], v = this.getSizeAndScale(s, this.ctx.canvas.width, Q[0]), j = this.getSizeAndScale(i, this.ctx.canvas.height, Q[1]), D = b.cachedCanvases.getCanvas("pattern", v.size, j.size, !0), lt = D.context, _t = T.createCanvasGraphics(lt);
              _t.groupLevel = b.groupLevel, this.setFillAndStrokeStyleToContext(_t, E, o);
              let k = P, a = Y, l = tt, R = x;
              return P < 0 && (k = 0, l += Math.abs(P)), Y < 0 && (a = 0, R += Math.abs(Y)), lt.translate(-(v.scale * k), -(j.scale * a)), _t.transform(v.scale, 0, 0, j.scale, 0, 0), lt.save(), this.clipBbox(_t, k, a, l, R), _t.baseTransform = (0, f.getCurrentTransform)(_t.ctx), _t.executeOperatorList(g), _t.endDrawing(), {
                canvas: D.canvas,
                scaleX: v.scale,
                scaleY: j.scale,
                offsetX: k,
                offsetY: a
              };
            }
            getSizeAndScale(b, g, w) {
              b = Math.abs(b);
              const s = Math.max(u.MAX_PATTERN_SIZE, g);
              let i = Math.ceil(b * w);
              return i >= s ? i = s : w = i / b, {
                scale: w,
                size: i
              };
            }
            clipBbox(b, g, w, s, i) {
              const E = s - g, _ = i - w;
              b.ctx.rect(g, w, E, _), b.current.updateRectMinMax((0, f.getCurrentTransform)(b.ctx), [g, w, s, i]), b.clip(), b.endPath();
            }
            setFillAndStrokeStyleToContext(b, g, w) {
              const s = b.ctx, i = b.current;
              switch (g) {
                case h.COLORED:
                  const E = this.ctx;
                  s.fillStyle = E.fillStyle, s.strokeStyle = E.strokeStyle, i.fillColor = E.fillStyle, i.strokeColor = E.strokeStyle;
                  break;
                case h.UNCOLORED:
                  const _ = n.Util.makeHexColor(w[0], w[1], w[2]);
                  s.fillStyle = _, s.strokeStyle = _, i.fillColor = _, i.strokeColor = _;
                  break;
                default:
                  throw new n.FormatError(`Unsupported paint type: ${g}`);
              }
            }
            getPattern(b, g, w, s) {
              let i = w;
              s !== q.SHADING && (i = n.Util.transform(i, g.baseTransform), this.matrix && (i = n.Util.transform(i, this.matrix)));
              const E = this.createPatternCanvas(g);
              let _ = new DOMMatrix(i);
              _ = _.translate(E.offsetX, E.offsetY), _ = _.scale(1 / E.scaleX, 1 / E.scaleY);
              const o = b.createPattern(E.canvas, "repeat");
              return o.setTransform(_), o;
            }
          };
          Zt(u, "MAX_PATTERN_SIZE", 3e3);
          let p = u;
          e.TilingPattern = p;
        },
        /* 13 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.convertBlackAndWhiteToRGBA = q, e.convertToRGBA = f, e.grayToRGBA = I;
          var n = L(1);
          function f(c) {
            switch (c.kind) {
              case n.ImageKind.GRAYSCALE_1BPP:
                return q(c);
              case n.ImageKind.RGB_24BPP:
                return V(c);
            }
            return null;
          }
          function q({
            src: c,
            srcPos: d = 0,
            dest: r,
            width: F,
            height: M,
            nonBlackColor: S = 4294967295,
            inverseDecode: h = !1
          }) {
            const p = n.FeatureTest.isLittleEndian ? 4278190080 : 255, [u, y] = h ? [S, p] : [p, S], b = F >> 3, g = F & 7, w = c.length;
            r = new Uint32Array(r.buffer);
            let s = 0;
            for (let i = 0; i < M; i++) {
              for (const _ = d + b; d < _; d++) {
                const o = d < w ? c[d] : 255;
                r[s++] = o & 128 ? y : u, r[s++] = o & 64 ? y : u, r[s++] = o & 32 ? y : u, r[s++] = o & 16 ? y : u, r[s++] = o & 8 ? y : u, r[s++] = o & 4 ? y : u, r[s++] = o & 2 ? y : u, r[s++] = o & 1 ? y : u;
              }
              if (g === 0)
                continue;
              const E = d < w ? c[d++] : 255;
              for (let _ = 0; _ < g; _++)
                r[s++] = E & 1 << 7 - _ ? y : u;
            }
            return {
              srcPos: d,
              destPos: s
            };
          }
          function V({
            src: c,
            srcPos: d = 0,
            dest: r,
            destPos: F = 0,
            width: M,
            height: S
          }) {
            let h = 0;
            const p = c.length >> 2, u = new Uint32Array(c.buffer, d, p);
            if (n.FeatureTest.isLittleEndian) {
              for (; h < p - 2; h += 3, F += 4) {
                const y = u[h], b = u[h + 1], g = u[h + 2];
                r[F] = y | 4278190080, r[F + 1] = y >>> 24 | b << 8 | 4278190080, r[F + 2] = b >>> 16 | g << 16 | 4278190080, r[F + 3] = g >>> 8 | 4278190080;
              }
              for (let y = h * 4, b = c.length; y < b; y += 3)
                r[F++] = c[y] | c[y + 1] << 8 | c[y + 2] << 16 | 4278190080;
            } else {
              for (; h < p - 2; h += 3, F += 4) {
                const y = u[h], b = u[h + 1], g = u[h + 2];
                r[F] = y | 255, r[F + 1] = y << 24 | b >>> 8 | 255, r[F + 2] = b << 16 | g >>> 16 | 255, r[F + 3] = g << 8 | 255;
              }
              for (let y = h * 4, b = c.length; y < b; y += 3)
                r[F++] = c[y] << 24 | c[y + 1] << 16 | c[y + 2] << 8 | 255;
            }
            return {
              srcPos: d,
              destPos: F
            };
          }
          function I(c, d) {
            if (n.FeatureTest.isLittleEndian)
              for (let r = 0, F = c.length; r < F; r++)
                d[r] = c[r] * 65793 | 4278190080;
            else
              for (let r = 0, F = c.length; r < F; r++)
                d[r] = c[r] * 16843008 | 255;
          }
        },
        /* 14 */
        /***/
        (A, e) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.GlobalWorkerOptions = void 0;
          const L = /* @__PURE__ */ Object.create(null);
          e.GlobalWorkerOptions = L, L.workerPort = null, L.workerSrc = "";
        },
        /* 15 */
        /***/
        (A, e, L) => {
          var c, sn, r, rn, M, xe;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.MessageHandler = void 0;
          var n = L(1);
          const f = {
            UNKNOWN: 0,
            DATA: 1,
            ERROR: 2
          }, q = {
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
          function V(h) {
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
          class I {
            constructor(p, u, y) {
              N(this, c);
              N(this, r);
              N(this, M);
              this.sourceName = p, this.targetName = u, this.comObj = y, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (b) => {
                const g = b.data;
                if (g.targetName !== this.sourceName)
                  return;
                if (g.stream) {
                  X(this, r, rn).call(this, g);
                  return;
                }
                if (g.callback) {
                  const s = g.callbackId, i = this.callbackCapabilities[s];
                  if (!i)
                    throw new Error(`Cannot resolve callback ${s}`);
                  if (delete this.callbackCapabilities[s], g.callback === f.DATA)
                    i.resolve(g.data);
                  else if (g.callback === f.ERROR)
                    i.reject(V(g.reason));
                  else
                    throw new Error("Unexpected callback case");
                  return;
                }
                const w = this.actionHandler[g.action];
                if (!w)
                  throw new Error(`Unknown action from worker: ${g.action}`);
                if (g.callbackId) {
                  const s = this.sourceName, i = g.sourceName;
                  new Promise(function(E) {
                    E(w(g.data));
                  }).then(function(E) {
                    y.postMessage({
                      sourceName: s,
                      targetName: i,
                      callback: f.DATA,
                      callbackId: g.callbackId,
                      data: E
                    });
                  }, function(E) {
                    y.postMessage({
                      sourceName: s,
                      targetName: i,
                      callback: f.ERROR,
                      callbackId: g.callbackId,
                      reason: V(E)
                    });
                  });
                  return;
                }
                if (g.streamId) {
                  X(this, c, sn).call(this, g);
                  return;
                }
                w(g.data);
              }, y.addEventListener("message", this._onComObjOnMessage);
            }
            on(p, u) {
              const y = this.actionHandler;
              if (y[p])
                throw new Error(`There is already an actionName called "${p}"`);
              y[p] = u;
            }
            send(p, u, y) {
              this.comObj.postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: p,
                data: u
              }, y);
            }
            sendWithPromise(p, u, y) {
              const b = this.callbackId++, g = new n.PromiseCapability();
              this.callbackCapabilities[b] = g;
              try {
                this.comObj.postMessage({
                  sourceName: this.sourceName,
                  targetName: this.targetName,
                  action: p,
                  callbackId: b,
                  data: u
                }, y);
              } catch (w) {
                g.reject(w);
              }
              return g.promise;
            }
            sendWithStream(p, u, y, b) {
              const g = this.streamId++, w = this.sourceName, s = this.targetName, i = this.comObj;
              return new ReadableStream({
                start: (E) => {
                  const _ = new n.PromiseCapability();
                  return this.streamControllers[g] = {
                    controller: E,
                    startCall: _,
                    pullCall: null,
                    cancelCall: null,
                    isClosed: !1
                  }, i.postMessage({
                    sourceName: w,
                    targetName: s,
                    action: p,
                    streamId: g,
                    data: u,
                    desiredSize: E.desiredSize
                  }, b), _.promise;
                },
                pull: (E) => {
                  const _ = new n.PromiseCapability();
                  return this.streamControllers[g].pullCall = _, i.postMessage({
                    sourceName: w,
                    targetName: s,
                    stream: q.PULL,
                    streamId: g,
                    desiredSize: E.desiredSize
                  }), _.promise;
                },
                cancel: (E) => {
                  (0, n.assert)(E instanceof Error, "cancel must have a valid reason");
                  const _ = new n.PromiseCapability();
                  return this.streamControllers[g].cancelCall = _, this.streamControllers[g].isClosed = !0, i.postMessage({
                    sourceName: w,
                    targetName: s,
                    stream: q.CANCEL,
                    streamId: g,
                    reason: V(E)
                  }), _.promise;
                }
              }, y);
            }
            destroy() {
              this.comObj.removeEventListener("message", this._onComObjOnMessage);
            }
          }
          c = new WeakSet(), sn = function(p) {
            const u = p.streamId, y = this.sourceName, b = p.sourceName, g = this.comObj, w = this, s = this.actionHandler[p.action], i = {
              enqueue(E, _ = 1, o) {
                if (this.isCancelled)
                  return;
                const T = this.desiredSize;
                this.desiredSize -= _, T > 0 && this.desiredSize <= 0 && (this.sinkCapability = new n.PromiseCapability(), this.ready = this.sinkCapability.promise), g.postMessage({
                  sourceName: y,
                  targetName: b,
                  stream: q.ENQUEUE,
                  streamId: u,
                  chunk: E
                }, o);
              },
              close() {
                this.isCancelled || (this.isCancelled = !0, g.postMessage({
                  sourceName: y,
                  targetName: b,
                  stream: q.CLOSE,
                  streamId: u
                }), delete w.streamSinks[u]);
              },
              error(E) {
                (0, n.assert)(E instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, g.postMessage({
                  sourceName: y,
                  targetName: b,
                  stream: q.ERROR,
                  streamId: u,
                  reason: V(E)
                }));
              },
              sinkCapability: new n.PromiseCapability(),
              onPull: null,
              onCancel: null,
              isCancelled: !1,
              desiredSize: p.desiredSize,
              ready: null
            };
            i.sinkCapability.resolve(), i.ready = i.sinkCapability.promise, this.streamSinks[u] = i, new Promise(function(E) {
              E(s(p.data, i));
            }).then(function() {
              g.postMessage({
                sourceName: y,
                targetName: b,
                stream: q.START_COMPLETE,
                streamId: u,
                success: !0
              });
            }, function(E) {
              g.postMessage({
                sourceName: y,
                targetName: b,
                stream: q.START_COMPLETE,
                streamId: u,
                reason: V(E)
              });
            });
          }, r = new WeakSet(), rn = function(p) {
            const u = p.streamId, y = this.sourceName, b = p.sourceName, g = this.comObj, w = this.streamControllers[u], s = this.streamSinks[u];
            switch (p.stream) {
              case q.START_COMPLETE:
                p.success ? w.startCall.resolve() : w.startCall.reject(V(p.reason));
                break;
              case q.PULL_COMPLETE:
                p.success ? w.pullCall.resolve() : w.pullCall.reject(V(p.reason));
                break;
              case q.PULL:
                if (!s) {
                  g.postMessage({
                    sourceName: y,
                    targetName: b,
                    stream: q.PULL_COMPLETE,
                    streamId: u,
                    success: !0
                  });
                  break;
                }
                s.desiredSize <= 0 && p.desiredSize > 0 && s.sinkCapability.resolve(), s.desiredSize = p.desiredSize, new Promise(function(i) {
                  var E;
                  i((E = s.onPull) == null ? void 0 : E.call(s));
                }).then(function() {
                  g.postMessage({
                    sourceName: y,
                    targetName: b,
                    stream: q.PULL_COMPLETE,
                    streamId: u,
                    success: !0
                  });
                }, function(i) {
                  g.postMessage({
                    sourceName: y,
                    targetName: b,
                    stream: q.PULL_COMPLETE,
                    streamId: u,
                    reason: V(i)
                  });
                });
                break;
              case q.ENQUEUE:
                if ((0, n.assert)(w, "enqueue should have stream controller"), w.isClosed)
                  break;
                w.controller.enqueue(p.chunk);
                break;
              case q.CLOSE:
                if ((0, n.assert)(w, "close should have stream controller"), w.isClosed)
                  break;
                w.isClosed = !0, w.controller.close(), X(this, M, xe).call(this, w, u);
                break;
              case q.ERROR:
                (0, n.assert)(w, "error should have stream controller"), w.controller.error(V(p.reason)), X(this, M, xe).call(this, w, u);
                break;
              case q.CANCEL_COMPLETE:
                p.success ? w.cancelCall.resolve() : w.cancelCall.reject(V(p.reason)), X(this, M, xe).call(this, w, u);
                break;
              case q.CANCEL:
                if (!s)
                  break;
                new Promise(function(i) {
                  var E;
                  i((E = s.onCancel) == null ? void 0 : E.call(s, V(p.reason)));
                }).then(function() {
                  g.postMessage({
                    sourceName: y,
                    targetName: b,
                    stream: q.CANCEL_COMPLETE,
                    streamId: u,
                    success: !0
                  });
                }, function(i) {
                  g.postMessage({
                    sourceName: y,
                    targetName: b,
                    stream: q.CANCEL_COMPLETE,
                    streamId: u,
                    reason: V(i)
                  });
                }), s.sinkCapability.reject(V(p.reason)), s.isCancelled = !0, delete this.streamSinks[u];
                break;
              default:
                throw new Error("Unexpected stream case");
            }
          }, M = new WeakSet(), xe = async function(p, u) {
            var y, b, g;
            await Promise.allSettled([(y = p.startCall) == null ? void 0 : y.promise, (b = p.pullCall) == null ? void 0 : b.promise, (g = p.cancelCall) == null ? void 0 : g.promise]), delete this.streamControllers[u];
          }, e.MessageHandler = I;
        },
        /* 16 */
        /***/
        (A, e, L) => {
          var q, V;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.Metadata = void 0;
          var n = L(1);
          class f {
            constructor({
              parsedData: c,
              rawData: d
            }) {
              N(this, q, void 0);
              N(this, V, void 0);
              it(this, q, c), it(this, V, d);
            }
            getRaw() {
              return t(this, V);
            }
            get(c) {
              return t(this, q).get(c) ?? null;
            }
            getAll() {
              return (0, n.objectFromMap)(t(this, q));
            }
            has(c) {
              return t(this, q).has(c);
            }
          }
          q = new WeakMap(), V = new WeakMap(), e.Metadata = f;
        },
        /* 17 */
        /***/
        (A, e, L) => {
          var c, d, r, F, M, S, ii;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.OptionalContentConfig = void 0;
          var n = L(1), f = L(8);
          const q = Symbol("INTERNAL");
          class V {
            constructor(u, y) {
              N(this, c, !0);
              this.name = u, this.intent = y;
            }
            get visible() {
              return t(this, c);
            }
            _setVisible(u, y) {
              u !== q && (0, n.unreachable)("Internal method `_setVisible` called."), it(this, c, y);
            }
          }
          c = new WeakMap();
          class I {
            constructor(u) {
              N(this, S);
              N(this, d, null);
              N(this, r, /* @__PURE__ */ new Map());
              N(this, F, null);
              N(this, M, null);
              if (this.name = null, this.creator = null, u !== null) {
                this.name = u.name, this.creator = u.creator, it(this, M, u.order);
                for (const y of u.groups)
                  t(this, r).set(y.id, new V(y.name, y.intent));
                if (u.baseState === "OFF")
                  for (const y of t(this, r).values())
                    y._setVisible(q, !1);
                for (const y of u.on)
                  t(this, r).get(y)._setVisible(q, !0);
                for (const y of u.off)
                  t(this, r).get(y)._setVisible(q, !1);
                it(this, F, this.getHash());
              }
            }
            isVisible(u) {
              if (t(this, r).size === 0)
                return !0;
              if (!u)
                return (0, n.warn)("Optional content group not defined."), !0;
              if (u.type === "OCG")
                return t(this, r).has(u.id) ? t(this, r).get(u.id).visible : ((0, n.warn)(`Optional content group not found: ${u.id}`), !0);
              if (u.type === "OCMD") {
                if (u.expression)
                  return X(this, S, ii).call(this, u.expression);
                if (!u.policy || u.policy === "AnyOn") {
                  for (const y of u.ids) {
                    if (!t(this, r).has(y))
                      return (0, n.warn)(`Optional content group not found: ${y}`), !0;
                    if (t(this, r).get(y).visible)
                      return !0;
                  }
                  return !1;
                } else if (u.policy === "AllOn") {
                  for (const y of u.ids) {
                    if (!t(this, r).has(y))
                      return (0, n.warn)(`Optional content group not found: ${y}`), !0;
                    if (!t(this, r).get(y).visible)
                      return !1;
                  }
                  return !0;
                } else if (u.policy === "AnyOff") {
                  for (const y of u.ids) {
                    if (!t(this, r).has(y))
                      return (0, n.warn)(`Optional content group not found: ${y}`), !0;
                    if (!t(this, r).get(y).visible)
                      return !0;
                  }
                  return !1;
                } else if (u.policy === "AllOff") {
                  for (const y of u.ids) {
                    if (!t(this, r).has(y))
                      return (0, n.warn)(`Optional content group not found: ${y}`), !0;
                    if (t(this, r).get(y).visible)
                      return !1;
                  }
                  return !0;
                }
                return (0, n.warn)(`Unknown optional content policy ${u.policy}.`), !0;
              }
              return (0, n.warn)(`Unknown group type ${u.type}.`), !0;
            }
            setVisibility(u, y = !0) {
              if (!t(this, r).has(u)) {
                (0, n.warn)(`Optional content group not found: ${u}`);
                return;
              }
              t(this, r).get(u)._setVisible(q, !!y), it(this, d, null);
            }
            get hasInitialVisibility() {
              return t(this, F) === null || this.getHash() === t(this, F);
            }
            getOrder() {
              return t(this, r).size ? t(this, M) ? t(this, M).slice() : [...t(this, r).keys()] : null;
            }
            getGroups() {
              return t(this, r).size > 0 ? (0, n.objectFromMap)(t(this, r)) : null;
            }
            getGroup(u) {
              return t(this, r).get(u) || null;
            }
            getHash() {
              if (t(this, d) !== null)
                return t(this, d);
              const u = new f.MurmurHash3_64();
              for (const [y, b] of t(this, r))
                u.update(`${y}:${b.visible}`);
              return it(this, d, u.hexdigest());
            }
          }
          d = new WeakMap(), r = new WeakMap(), F = new WeakMap(), M = new WeakMap(), S = new WeakSet(), ii = function(u) {
            const y = u.length;
            if (y < 2)
              return !0;
            const b = u[0];
            for (let g = 1; g < y; g++) {
              const w = u[g];
              let s;
              if (Array.isArray(w))
                s = X(this, S, ii).call(this, w);
              else if (t(this, r).has(w))
                s = t(this, r).get(w).visible;
              else
                return (0, n.warn)(`Optional content group not found: ${w}`), !0;
              switch (b) {
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
            return b === "And";
          }, e.OptionalContentConfig = I;
        },
        /* 18 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFDataTransportStream = void 0;
          var n = L(1), f = L(6);
          class q {
            constructor({
              length: d,
              initialData: r,
              progressiveDone: F = !1,
              contentDispositionFilename: M = null,
              disableRange: S = !1,
              disableStream: h = !1
            }, p) {
              if ((0, n.assert)(p, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = F, this._contentDispositionFilename = M, (r == null ? void 0 : r.length) > 0) {
                const u = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
                this._queuedChunks.push(u);
              }
              this._pdfDataRangeTransport = p, this._isStreamingSupported = !h, this._isRangeSupported = !S, this._contentLength = d, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((u, y) => {
                this._onReceiveData({
                  begin: u,
                  chunk: y
                });
              }), this._pdfDataRangeTransport.addProgressListener((u, y) => {
                this._onProgress({
                  loaded: u,
                  total: y
                });
              }), this._pdfDataRangeTransport.addProgressiveReadListener((u) => {
                this._onReceiveData({
                  chunk: u
                });
              }), this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
                this._onProgressiveDone();
              }), this._pdfDataRangeTransport.transportReady();
            }
            _onReceiveData({
              begin: d,
              chunk: r
            }) {
              const F = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
              if (d === void 0)
                this._fullRequestReader ? this._fullRequestReader._enqueue(F) : this._queuedChunks.push(F);
              else {
                const M = this._rangeReaders.some(function(S) {
                  return S._begin !== d ? !1 : (S._enqueue(F), !0);
                });
                (0, n.assert)(M, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
              }
            }
            get _progressiveDataLength() {
              var d;
              return ((d = this._fullRequestReader) == null ? void 0 : d._loaded) ?? 0;
            }
            _onProgress(d) {
              var r, F, M, S;
              d.total === void 0 ? (F = (r = this._rangeReaders[0]) == null ? void 0 : r.onProgress) == null || F.call(r, {
                loaded: d.loaded
              }) : (S = (M = this._fullRequestReader) == null ? void 0 : M.onProgress) == null || S.call(M, {
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
              return this._queuedChunks = null, new V(this, d, this._progressiveDone, this._contentDispositionFilename);
            }
            getRangeReader(d, r) {
              if (r <= this._progressiveDataLength)
                return null;
              const F = new I(this, d, r);
              return this._pdfDataRangeTransport.requestDataRange(d, r), this._rangeReaders.push(F), F;
            }
            cancelAllRequests(d) {
              var r;
              (r = this._fullRequestReader) == null || r.cancel(d);
              for (const F of this._rangeReaders.slice(0))
                F.cancel(d);
              this._pdfDataRangeTransport.abort();
            }
          }
          e.PDFDataTransportStream = q;
          class V {
            constructor(d, r, F = !1, M = null) {
              this._stream = d, this._done = F || !1, this._filename = (0, f.isPdfFile)(M) ? M : null, this._queuedChunks = r || [], this._loaded = 0;
              for (const S of this._queuedChunks)
                this._loaded += S.byteLength;
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
          class I {
            constructor(d, r, F) {
              this._stream = d, this._begin = r, this._end = F, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
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
                  for (const F of this._requests)
                    F.resolve({
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
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFFetchStream = void 0;
          var n = L(1), f = L(20);
          function q(F, M, S) {
            return {
              method: "GET",
              headers: F,
              signal: S.signal,
              mode: "cors",
              credentials: M ? "include" : "same-origin",
              redirect: "follow"
            };
          }
          function V(F) {
            const M = new Headers();
            for (const S in F) {
              const h = F[S];
              h !== void 0 && M.append(S, h);
            }
            return M;
          }
          function I(F) {
            return F instanceof Uint8Array ? F.buffer : F instanceof ArrayBuffer ? F : ((0, n.warn)(`getArrayBuffer - unexpected data format: ${F}`), new Uint8Array(F).buffer);
          }
          class c {
            constructor(M) {
              this.source = M, this.isHttp = /^https?:/i.test(M.url), this.httpHeaders = this.isHttp && M.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              var M;
              return ((M = this._fullRequestReader) == null ? void 0 : M._loaded) ?? 0;
            }
            getFullReader() {
              return (0, n.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new d(this), this._fullRequestReader;
            }
            getRangeReader(M, S) {
              if (S <= this._progressiveDataLength)
                return null;
              const h = new r(this, M, S);
              return this._rangeRequestReaders.push(h), h;
            }
            cancelAllRequests(M) {
              var S;
              (S = this._fullRequestReader) == null || S.cancel(M);
              for (const h of this._rangeRequestReaders.slice(0))
                h.cancel(M);
            }
          }
          e.PDFFetchStream = c;
          class d {
            constructor(M) {
              this._stream = M, this._reader = null, this._loaded = 0, this._filename = null;
              const S = M.source;
              this._withCredentials = S.withCredentials || !1, this._contentLength = S.length, this._headersCapability = new n.PromiseCapability(), this._disableRange = S.disableRange || !1, this._rangeChunkSize = S.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !S.disableStream, this._isRangeSupported = !S.disableRange, this._headers = V(this._stream.httpHeaders);
              const h = S.url;
              fetch(h, q(this._headers, this._withCredentials, this._abortController)).then((p) => {
                if (!(0, f.validateResponseStatus)(p.status))
                  throw (0, f.createResponseStatusError)(p.status, h);
                this._reader = p.body.getReader(), this._headersCapability.resolve();
                const u = (g) => p.headers.get(g), {
                  allowRangeRequests: y,
                  suggestedLength: b
                } = (0, f.validateRangeRequestCapabilities)({
                  getResponseHeader: u,
                  isHttp: this._stream.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = y, this._contentLength = b || this._contentLength, this._filename = (0, f.extractFilenameFromHeader)(u), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new n.AbortException("Streaming is disabled."));
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
                value: M,
                done: S
              } = await this._reader.read();
              return S ? {
                value: M,
                done: S
              } : (this._loaded += M.byteLength, (h = this.onProgress) == null || h.call(this, {
                loaded: this._loaded,
                total: this._contentLength
              }), {
                value: I(M),
                done: !1
              });
            }
            cancel(M) {
              var S;
              (S = this._reader) == null || S.cancel(M), this._abortController.abort();
            }
          }
          class r {
            constructor(M, S, h) {
              this._stream = M, this._reader = null, this._loaded = 0;
              const p = M.source;
              this._withCredentials = p.withCredentials || !1, this._readCapability = new n.PromiseCapability(), this._isStreamingSupported = !p.disableStream, this._abortController = new AbortController(), this._headers = V(this._stream.httpHeaders), this._headers.append("Range", `bytes=${S}-${h - 1}`);
              const u = p.url;
              fetch(u, q(this._headers, this._withCredentials, this._abortController)).then((y) => {
                if (!(0, f.validateResponseStatus)(y.status))
                  throw (0, f.createResponseStatusError)(y.status, u);
                this._readCapability.resolve(), this._reader = y.body.getReader();
              }).catch(this._readCapability.reject), this.onProgress = null;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var h;
              await this._readCapability.promise;
              const {
                value: M,
                done: S
              } = await this._reader.read();
              return S ? {
                value: M,
                done: S
              } : (this._loaded += M.byteLength, (h = this.onProgress) == null || h.call(this, {
                loaded: this._loaded
              }), {
                value: I(M),
                done: !1
              });
            }
            cancel(M) {
              var S;
              (S = this._reader) == null || S.cancel(M), this._abortController.abort();
            }
          }
        },
        /* 20 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.createResponseStatusError = c, e.extractFilenameFromHeader = I, e.validateRangeRequestCapabilities = V, e.validateResponseStatus = d;
          var n = L(1), f = L(21), q = L(6);
          function V({
            getResponseHeader: r,
            isHttp: F,
            rangeChunkSize: M,
            disableRange: S
          }) {
            const h = {
              allowRangeRequests: !1,
              suggestedLength: void 0
            }, p = parseInt(r("Content-Length"), 10);
            return !Number.isInteger(p) || (h.suggestedLength = p, p <= 2 * M) || S || !F || r("Accept-Ranges") !== "bytes" || (r("Content-Encoding") || "identity") !== "identity" || (h.allowRangeRequests = !0), h;
          }
          function I(r) {
            const F = r("Content-Disposition");
            if (F) {
              let M = (0, f.getFilenameFromContentDispositionHeader)(F);
              if (M.includes("%"))
                try {
                  M = decodeURIComponent(M);
                } catch {
                }
              if ((0, q.isPdfFile)(M))
                return M;
            }
            return null;
          }
          function c(r, F) {
            return r === 404 || r === 0 && F.startsWith("file:") ? new n.MissingPDFException('Missing PDF "' + F + '".') : new n.UnexpectedResponseException(`Unexpected server response (${r}) while retrieving PDF "${F}".`, r);
          }
          function d(r) {
            return r === 200 || r === 206;
          }
        },
        /* 21 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.getFilenameFromContentDispositionHeader = f;
          var n = L(1);
          function f(q) {
            let V = !0, I = c("filename\\*", "i").exec(q);
            if (I) {
              I = I[1];
              let p = M(I);
              return p = unescape(p), p = S(p), p = h(p), r(p);
            }
            if (I = F(q), I) {
              const p = h(I);
              return r(p);
            }
            if (I = c("filename", "i").exec(q), I) {
              I = I[1];
              let p = M(I);
              return p = h(p), r(p);
            }
            function c(p, u) {
              return new RegExp("(?:^|;)\\s*" + p + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', u);
            }
            function d(p, u) {
              if (p) {
                if (!/^[\x00-\xFF]+$/.test(u))
                  return u;
                try {
                  const y = new TextDecoder(p, {
                    fatal: !0
                  }), b = (0, n.stringToBytes)(u);
                  u = y.decode(b), V = !1;
                } catch {
                }
              }
              return u;
            }
            function r(p) {
              return V && /[\x80-\xff]/.test(p) && (p = d("utf-8", p), V && (p = d("iso-8859-1", p))), p;
            }
            function F(p) {
              const u = [];
              let y;
              const b = c("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
              for (; (y = b.exec(p)) !== null; ) {
                let [, w, s, i] = y;
                if (w = parseInt(w, 10), w in u) {
                  if (w === 0)
                    break;
                  continue;
                }
                u[w] = [s, i];
              }
              const g = [];
              for (let w = 0; w < u.length && w in u; ++w) {
                let [s, i] = u[w];
                i = M(i), s && (i = unescape(i), w === 0 && (i = S(i))), g.push(i);
              }
              return g.join("");
            }
            function M(p) {
              if (p.startsWith('"')) {
                const u = p.slice(1).split('\\"');
                for (let y = 0; y < u.length; ++y) {
                  const b = u[y].indexOf('"');
                  b !== -1 && (u[y] = u[y].slice(0, b), u.length = y + 1), u[y] = u[y].replaceAll(/\\(.)/g, "$1");
                }
                p = u.join('"');
              }
              return p;
            }
            function S(p) {
              const u = p.indexOf("'");
              if (u === -1)
                return p;
              const y = p.slice(0, u), g = p.slice(u + 1).replace(/^[^']*'/, "");
              return d(y, g);
            }
            function h(p) {
              return !p.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(p) ? p : p.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(u, y, b, g) {
                if (b === "q" || b === "Q")
                  return g = g.replaceAll("_", " "), g = g.replaceAll(/=([0-9a-fA-F]{2})/g, function(w, s) {
                    return String.fromCharCode(parseInt(s, 16));
                  }), d(y, g);
                try {
                  g = atob(g);
                } catch {
                }
                return d(y, g);
              });
            }
            return "";
          }
        },
        /* 22 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFNetworkStream = void 0;
          var n = L(1), f = L(20);
          const q = 200, V = 206;
          function I(M) {
            const S = M.response;
            return typeof S != "string" ? S : (0, n.stringToBytes)(S).buffer;
          }
          class c {
            constructor(S, h = {}) {
              this.url = S, this.isHttp = /^https?:/i.test(S), this.httpHeaders = this.isHttp && h.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = h.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
            }
            requestRange(S, h, p) {
              const u = {
                begin: S,
                end: h
              };
              for (const y in p)
                u[y] = p[y];
              return this.request(u);
            }
            requestFull(S) {
              return this.request(S);
            }
            request(S) {
              const h = new XMLHttpRequest(), p = this.currXhrId++, u = this.pendingRequests[p] = {
                xhr: h
              };
              h.open("GET", this.url), h.withCredentials = this.withCredentials;
              for (const y in this.httpHeaders) {
                const b = this.httpHeaders[y];
                b !== void 0 && h.setRequestHeader(y, b);
              }
              return this.isHttp && "begin" in S && "end" in S ? (h.setRequestHeader("Range", `bytes=${S.begin}-${S.end - 1}`), u.expectedStatus = V) : u.expectedStatus = q, h.responseType = "arraybuffer", S.onError && (h.onerror = function(y) {
                S.onError(h.status);
              }), h.onreadystatechange = this.onStateChange.bind(this, p), h.onprogress = this.onProgress.bind(this, p), u.onHeadersReceived = S.onHeadersReceived, u.onDone = S.onDone, u.onError = S.onError, u.onProgress = S.onProgress, h.send(null), p;
            }
            onProgress(S, h) {
              var u;
              const p = this.pendingRequests[S];
              p && ((u = p.onProgress) == null || u.call(p, h));
            }
            onStateChange(S, h) {
              var w, s, i;
              const p = this.pendingRequests[S];
              if (!p)
                return;
              const u = p.xhr;
              if (u.readyState >= 2 && p.onHeadersReceived && (p.onHeadersReceived(), delete p.onHeadersReceived), u.readyState !== 4 || !(S in this.pendingRequests))
                return;
              if (delete this.pendingRequests[S], u.status === 0 && this.isHttp) {
                (w = p.onError) == null || w.call(p, u.status);
                return;
              }
              const y = u.status || q;
              if (!(y === q && p.expectedStatus === V) && y !== p.expectedStatus) {
                (s = p.onError) == null || s.call(p, u.status);
                return;
              }
              const g = I(u);
              if (y === V) {
                const E = u.getResponseHeader("Content-Range"), _ = /bytes (\d+)-(\d+)\/(\d+)/.exec(E);
                p.onDone({
                  begin: parseInt(_[1], 10),
                  chunk: g
                });
              } else
                g ? p.onDone({
                  begin: 0,
                  chunk: g
                }) : (i = p.onError) == null || i.call(p, u.status);
            }
            getRequestXhr(S) {
              return this.pendingRequests[S].xhr;
            }
            isPendingRequest(S) {
              return S in this.pendingRequests;
            }
            abortRequest(S) {
              const h = this.pendingRequests[S].xhr;
              delete this.pendingRequests[S], h.abort();
            }
          }
          class d {
            constructor(S) {
              this._source = S, this._manager = new c(S.url, {
                httpHeaders: S.httpHeaders,
                withCredentials: S.withCredentials
              }), this._rangeChunkSize = S.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            _onRangeRequestReaderClosed(S) {
              const h = this._rangeRequestReaders.indexOf(S);
              h >= 0 && this._rangeRequestReaders.splice(h, 1);
            }
            getFullReader() {
              return (0, n.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new r(this._manager, this._source), this._fullRequestReader;
            }
            getRangeReader(S, h) {
              const p = new F(this._manager, S, h);
              return p.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(p), p;
            }
            cancelAllRequests(S) {
              var h;
              (h = this._fullRequestReader) == null || h.cancel(S);
              for (const p of this._rangeRequestReaders.slice(0))
                p.cancel(S);
            }
          }
          e.PDFNetworkStream = d;
          class r {
            constructor(S, h) {
              this._manager = S;
              const p = {
                onHeadersReceived: this._onHeadersReceived.bind(this),
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
              };
              this._url = h.url, this._fullRequestId = S.requestFull(p), this._headersReceivedCapability = new n.PromiseCapability(), this._disableRange = h.disableRange || !1, this._contentLength = h.length, this._rangeChunkSize = h.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
            }
            _onHeadersReceived() {
              const S = this._fullRequestId, h = this._manager.getRequestXhr(S), p = (b) => h.getResponseHeader(b), {
                allowRangeRequests: u,
                suggestedLength: y
              } = (0, f.validateRangeRequestCapabilities)({
                getResponseHeader: p,
                isHttp: this._manager.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              });
              u && (this._isRangeSupported = !0), this._contentLength = y || this._contentLength, this._filename = (0, f.extractFilenameFromHeader)(p), this._isRangeSupported && this._manager.abortRequest(S), this._headersReceivedCapability.resolve();
            }
            _onDone(S) {
              if (S && (this._requests.length > 0 ? this._requests.shift().resolve({
                value: S.chunk,
                done: !1
              }) : this._cachedChunks.push(S.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
                for (const h of this._requests)
                  h.resolve({
                    value: void 0,
                    done: !0
                  });
                this._requests.length = 0;
              }
            }
            _onError(S) {
              this._storedError = (0, f.createResponseStatusError)(S, this._url), this._headersReceivedCapability.reject(this._storedError);
              for (const h of this._requests)
                h.reject(this._storedError);
              this._requests.length = 0, this._cachedChunks.length = 0;
            }
            _onProgress(S) {
              var h;
              (h = this.onProgress) == null || h.call(this, {
                loaded: S.loaded,
                total: S.lengthComputable ? S.total : this._contentLength
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
              const S = new n.PromiseCapability();
              return this._requests.push(S), S.promise;
            }
            cancel(S) {
              this._done = !0, this._headersReceivedCapability.reject(S);
              for (const h of this._requests)
                h.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
            }
          }
          class F {
            constructor(S, h, p) {
              this._manager = S;
              const u = {
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
              };
              this._url = S.url, this._requestId = S.requestRange(h, p, u), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
            }
            _close() {
              var S;
              (S = this.onClosed) == null || S.call(this, this);
            }
            _onDone(S) {
              const h = S.chunk;
              this._requests.length > 0 ? this._requests.shift().resolve({
                value: h,
                done: !1
              }) : this._queuedChunk = h, this._done = !0;
              for (const p of this._requests)
                p.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0, this._close();
            }
            _onError(S) {
              this._storedError = (0, f.createResponseStatusError)(S, this._url);
              for (const h of this._requests)
                h.reject(this._storedError);
              this._requests.length = 0, this._queuedChunk = null;
            }
            _onProgress(S) {
              var h;
              this.isStreamingSupported || (h = this.onProgress) == null || h.call(this, {
                loaded: S.loaded
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
              const S = new n.PromiseCapability();
              return this._requests.push(S), S.promise;
            }
            cancel(S) {
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
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFNodeStream = void 0;
          var n = L(1), f = L(20);
          const q = /^file:\/\/\/[a-zA-Z]:\//;
          function V(p) {
            const u = require$$5, y = u.parse(p);
            return y.protocol === "file:" || y.host ? y : /^[a-z]:[/\\]/i.test(p) ? u.parse(`file:///${p}`) : (y.host || (y.protocol = "file:"), y);
          }
          class I {
            constructor(u) {
              this.source = u, this.url = V(u.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && u.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              var u;
              return ((u = this._fullRequestReader) == null ? void 0 : u._loaded) ?? 0;
            }
            getFullReader() {
              return (0, n.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new S(this) : new F(this), this._fullRequestReader;
            }
            getRangeReader(u, y) {
              if (y <= this._progressiveDataLength)
                return null;
              const b = this.isFsUrl ? new h(this, u, y) : new M(this, u, y);
              return this._rangeRequestReaders.push(b), b;
            }
            cancelAllRequests(u) {
              var y;
              (y = this._fullRequestReader) == null || y.cancel(u);
              for (const b of this._rangeRequestReaders.slice(0))
                b.cancel(u);
            }
          }
          e.PDFNodeStream = I;
          class c {
            constructor(u) {
              this._url = u.url, this._done = !1, this._storedError = null, this.onProgress = null;
              const y = u.source;
              this._contentLength = y.length, this._loaded = 0, this._filename = null, this._disableRange = y.disableRange || !1, this._rangeChunkSize = y.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !y.disableStream, this._isRangeSupported = !y.disableRange, this._readableStream = null, this._readCapability = new n.PromiseCapability(), this._headersCapability = new n.PromiseCapability();
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
              var b;
              if (await this._readCapability.promise, this._done)
                return {
                  value: void 0,
                  done: !0
                };
              if (this._storedError)
                throw this._storedError;
              const u = this._readableStream.read();
              return u === null ? (this._readCapability = new n.PromiseCapability(), this.read()) : (this._loaded += u.length, (b = this.onProgress) == null || b.call(this, {
                loaded: this._loaded,
                total: this._contentLength
              }), {
                value: new Uint8Array(u).buffer,
                done: !1
              });
            }
            cancel(u) {
              if (!this._readableStream) {
                this._error(u);
                return;
              }
              this._readableStream.destroy(u);
            }
            _error(u) {
              this._storedError = u, this._readCapability.resolve();
            }
            _setReadableStream(u) {
              this._readableStream = u, u.on("readable", () => {
                this._readCapability.resolve();
              }), u.on("end", () => {
                u.destroy(), this._done = !0, this._readCapability.resolve();
              }), u.on("error", (y) => {
                this._error(y);
              }), !this._isStreamingSupported && this._isRangeSupported && this._error(new n.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          class d {
            constructor(u) {
              this._url = u.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = new n.PromiseCapability();
              const y = u.source;
              this._isStreamingSupported = !y.disableStream;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var b;
              if (await this._readCapability.promise, this._done)
                return {
                  value: void 0,
                  done: !0
                };
              if (this._storedError)
                throw this._storedError;
              const u = this._readableStream.read();
              return u === null ? (this._readCapability = new n.PromiseCapability(), this.read()) : (this._loaded += u.length, (b = this.onProgress) == null || b.call(this, {
                loaded: this._loaded
              }), {
                value: new Uint8Array(u).buffer,
                done: !1
              });
            }
            cancel(u) {
              if (!this._readableStream) {
                this._error(u);
                return;
              }
              this._readableStream.destroy(u);
            }
            _error(u) {
              this._storedError = u, this._readCapability.resolve();
            }
            _setReadableStream(u) {
              this._readableStream = u, u.on("readable", () => {
                this._readCapability.resolve();
              }), u.on("end", () => {
                u.destroy(), this._done = !0, this._readCapability.resolve();
              }), u.on("error", (y) => {
                this._error(y);
              }), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          function r(p, u) {
            return {
              protocol: p.protocol,
              auth: p.auth,
              host: p.hostname,
              port: p.port,
              path: p.path,
              method: "GET",
              headers: u
            };
          }
          class F extends c {
            constructor(u) {
              super(u);
              const y = (b) => {
                if (b.statusCode === 404) {
                  const i = new n.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = i, this._headersCapability.reject(i);
                  return;
                }
                this._headersCapability.resolve(), this._setReadableStream(b);
                const g = (i) => this._readableStream.headers[i.toLowerCase()], {
                  allowRangeRequests: w,
                  suggestedLength: s
                } = (0, f.validateRangeRequestCapabilities)({
                  getResponseHeader: g,
                  isHttp: u.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = w, this._contentLength = s || this._contentLength, this._filename = (0, f.extractFilenameFromHeader)(g);
              };
              if (this._request = null, this._url.protocol === "http:") {
                const b = require$$5;
                this._request = b.request(r(this._url, u.httpHeaders), y);
              } else {
                const b = require$$5;
                this._request = b.request(r(this._url, u.httpHeaders), y);
              }
              this._request.on("error", (b) => {
                this._storedError = b, this._headersCapability.reject(b);
              }), this._request.end();
            }
          }
          class M extends d {
            constructor(u, y, b) {
              super(u), this._httpHeaders = {};
              for (const w in u.httpHeaders) {
                const s = u.httpHeaders[w];
                s !== void 0 && (this._httpHeaders[w] = s);
              }
              this._httpHeaders.Range = `bytes=${y}-${b - 1}`;
              const g = (w) => {
                if (w.statusCode === 404) {
                  const s = new n.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = s;
                  return;
                }
                this._setReadableStream(w);
              };
              if (this._request = null, this._url.protocol === "http:") {
                const w = require$$5;
                this._request = w.request(r(this._url, this._httpHeaders), g);
              } else {
                const w = require$$5;
                this._request = w.request(r(this._url, this._httpHeaders), g);
              }
              this._request.on("error", (w) => {
                this._storedError = w;
              }), this._request.end();
            }
          }
          class S extends c {
            constructor(u) {
              super(u);
              let y = decodeURIComponent(this._url.path);
              q.test(this._url.href) && (y = y.replace(/^\//, ""));
              const b = require$$5;
              b.lstat(y, (g, w) => {
                if (g) {
                  g.code === "ENOENT" && (g = new n.MissingPDFException(`Missing PDF "${y}".`)), this._storedError = g, this._headersCapability.reject(g);
                  return;
                }
                this._contentLength = w.size, this._setReadableStream(b.createReadStream(y)), this._headersCapability.resolve();
              });
            }
          }
          class h extends d {
            constructor(u, y, b) {
              super(u);
              let g = decodeURIComponent(this._url.path);
              q.test(this._url.href) && (g = g.replace(/^\//, ""));
              const w = require$$5;
              this._setReadableStream(w.createReadStream(g, {
                start: y,
                end: b - 1
              }));
            }
          }
        },
        /* 24 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.SVGGraphics = void 0;
          var n = L(6), f = L(1);
          const q = {
            fontStyle: "normal",
            fontWeight: "normal",
            fillColor: "#000000"
          }, V = "http://www.w3.org/XML/1998/namespace", I = "http://www.w3.org/1999/xlink", c = ["butt", "round", "square"], d = ["miter", "round", "bevel"], r = function(w, s = "", i = !1) {
            if (URL.createObjectURL && typeof Blob < "u" && !i)
              return URL.createObjectURL(new Blob([w], {
                type: s
              }));
            const E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            let _ = `data:${s};base64,`;
            for (let o = 0, T = w.length; o < T; o += 3) {
              const P = w[o] & 255, Y = w[o + 1] & 255, tt = w[o + 2] & 255, x = P >> 2, K = (P & 3) << 4 | Y >> 4, Z = o + 1 < T ? (Y & 15) << 2 | tt >> 6 : 64, Q = o + 2 < T ? tt & 63 : 64;
              _ += E[x] + E[K] + E[Z] + E[Q];
            }
            return _;
          }, F = function() {
            const w = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), s = 12, i = new Int32Array(256);
            for (let tt = 0; tt < 256; tt++) {
              let x = tt;
              for (let K = 0; K < 8; K++)
                x = x & 1 ? 3988292384 ^ x >> 1 & 2147483647 : x >> 1 & 2147483647;
              i[tt] = x;
            }
            function E(tt, x, K) {
              let Z = -1;
              for (let Q = x; Q < K; Q++) {
                const v = (Z ^ tt[Q]) & 255, j = i[v];
                Z = Z >>> 8 ^ j;
              }
              return Z ^ -1;
            }
            function _(tt, x, K, Z) {
              let Q = Z;
              const v = x.length;
              K[Q] = v >> 24 & 255, K[Q + 1] = v >> 16 & 255, K[Q + 2] = v >> 8 & 255, K[Q + 3] = v & 255, Q += 4, K[Q] = tt.charCodeAt(0) & 255, K[Q + 1] = tt.charCodeAt(1) & 255, K[Q + 2] = tt.charCodeAt(2) & 255, K[Q + 3] = tt.charCodeAt(3) & 255, Q += 4, K.set(x, Q), Q += x.length;
              const j = E(K, Z + 4, Q);
              K[Q] = j >> 24 & 255, K[Q + 1] = j >> 16 & 255, K[Q + 2] = j >> 8 & 255, K[Q + 3] = j & 255;
            }
            function o(tt, x, K) {
              let Z = 1, Q = 0;
              for (let v = x; v < K; ++v)
                Z = (Z + (tt[v] & 255)) % 65521, Q = (Q + Z) % 65521;
              return Q << 16 | Z;
            }
            function T(tt) {
              if (!f.isNodeJS)
                return P(tt);
              try {
                const x = parseInt(process.versions.node) >= 8 ? tt : Buffer.from(tt), K = require$$5.deflateSync(x, {
                  level: 9
                });
                return K instanceof Uint8Array ? K : new Uint8Array(K);
              } catch (x) {
                (0, f.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + x);
              }
              return P(tt);
            }
            function P(tt) {
              let x = tt.length;
              const K = 65535, Z = Math.ceil(x / K), Q = new Uint8Array(2 + x + Z * 5 + 4);
              let v = 0;
              Q[v++] = 120, Q[v++] = 156;
              let j = 0;
              for (; x > K; )
                Q[v++] = 0, Q[v++] = 255, Q[v++] = 255, Q[v++] = 0, Q[v++] = 0, Q.set(tt.subarray(j, j + K), v), v += K, j += K, x -= K;
              Q[v++] = 1, Q[v++] = x & 255, Q[v++] = x >> 8 & 255, Q[v++] = ~x & 65535 & 255, Q[v++] = (~x & 65535) >> 8 & 255, Q.set(tt.subarray(j), v), v += tt.length - j;
              const D = o(tt, 0, tt.length);
              return Q[v++] = D >> 24 & 255, Q[v++] = D >> 16 & 255, Q[v++] = D >> 8 & 255, Q[v++] = D & 255, Q;
            }
            function Y(tt, x, K, Z) {
              const Q = tt.width, v = tt.height;
              let j, D, lt;
              const _t = tt.data;
              switch (x) {
                case f.ImageKind.GRAYSCALE_1BPP:
                  D = 0, j = 1, lt = Q + 7 >> 3;
                  break;
                case f.ImageKind.RGB_24BPP:
                  D = 2, j = 8, lt = Q * 3;
                  break;
                case f.ImageKind.RGBA_32BPP:
                  D = 6, j = 8, lt = Q * 4;
                  break;
                default:
                  throw new Error("invalid format");
              }
              const k = new Uint8Array((1 + lt) * v);
              let a = 0, l = 0;
              for (let ut = 0; ut < v; ++ut)
                k[a++] = 0, k.set(_t.subarray(l, l + lt), a), l += lt, a += lt;
              if (x === f.ImageKind.GRAYSCALE_1BPP && Z) {
                a = 0;
                for (let ut = 0; ut < v; ut++) {
                  a++;
                  for (let wt = 0; wt < lt; wt++)
                    k[a++] ^= 255;
                }
              }
              const R = new Uint8Array([Q >> 24 & 255, Q >> 16 & 255, Q >> 8 & 255, Q & 255, v >> 24 & 255, v >> 16 & 255, v >> 8 & 255, v & 255, j, D, 0, 0, 0]), $ = T(k), W = w.length + s * 3 + R.length + $.length, nt = new Uint8Array(W);
              let st = 0;
              return nt.set(w, st), st += w.length, _("IHDR", R, nt, st), st += s + R.length, _("IDATA", $, nt, st), st += s + $.length, _("IEND", new Uint8Array(0), nt, st), r(nt, "image/png", K);
            }
            return function(x, K, Z) {
              const Q = x.kind === void 0 ? f.ImageKind.GRAYSCALE_1BPP : x.kind;
              return Y(x, Q, K, Z);
            };
          }();
          class M {
            constructor() {
              this.fontSizeScale = 1, this.fontWeight = q.fontWeight, this.fontSize = 0, this.textMatrix = f.IDENTITY_MATRIX, this.fontMatrix = f.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = f.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = q.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = "";
            }
            clone() {
              return Object.create(this);
            }
            setCurrentPoint(s, i) {
              this.x = s, this.y = i;
            }
          }
          function S(w) {
            let s = [];
            const i = [];
            for (const E of w) {
              if (E.fn === "save") {
                s.push({
                  fnId: 92,
                  fn: "group",
                  items: []
                }), i.push(s), s = s.at(-1).items;
                continue;
              }
              E.fn === "restore" ? s = i.pop() : s.push(E);
            }
            return s;
          }
          function h(w) {
            if (Number.isInteger(w))
              return w.toString();
            const s = w.toFixed(10);
            let i = s.length - 1;
            if (s[i] !== "0")
              return s;
            do
              i--;
            while (s[i] === "0");
            return s.substring(0, s[i] === "." ? i : i + 1);
          }
          function p(w) {
            if (w[4] === 0 && w[5] === 0) {
              if (w[1] === 0 && w[2] === 0)
                return w[0] === 1 && w[3] === 1 ? "" : `scale(${h(w[0])} ${h(w[3])})`;
              if (w[0] === w[3] && w[1] === -w[2]) {
                const s = Math.acos(w[0]) * 180 / Math.PI;
                return `rotate(${h(s)})`;
              }
            } else if (w[0] === 1 && w[1] === 0 && w[2] === 0 && w[3] === 1)
              return `translate(${h(w[4])} ${h(w[5])})`;
            return `matrix(${h(w[0])} ${h(w[1])} ${h(w[2])} ${h(w[3])} ${h(w[4])} ${h(w[5])})`;
          }
          let u = 0, y = 0, b = 0;
          class g {
            constructor(s, i, E = !1) {
              (0, n.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."), this.svgFactory = new n.DOMSVGFactory(), this.current = new M(), this.transformMatrix = f.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = s, this.objs = i, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = /* @__PURE__ */ Object.create(null), this.cssStyle = null, this.forceDataSchema = !!E, this._operatorIdMapping = [];
              for (const _ in f.OPS)
                this._operatorIdMapping[f.OPS[_]] = _;
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
              const i = s.fnArray, E = s.argsArray;
              for (let _ = 0, o = i.length; _ < o; _++)
                if (i[_] === f.OPS.dependency)
                  for (const T of E[_]) {
                    const P = T.startsWith("g_") ? this.commonObjs : this.objs, Y = new Promise((tt) => {
                      P.get(T, tt);
                    });
                    this.current.dependencies.push(Y);
                  }
              return Promise.all(this.current.dependencies);
            }
            transform(s, i, E, _, o, T) {
              const P = [s, i, E, _, o, T];
              this.transformMatrix = f.Util.transform(this.transformMatrix, P), this.tgrp = null;
            }
            getSVG(s, i) {
              this.viewport = i;
              const E = this._initialize(i);
              return this.loadDependencies(s).then(() => (this.transformMatrix = f.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(s)), E));
            }
            convertOpList(s) {
              const i = this._operatorIdMapping, E = s.argsArray, _ = s.fnArray, o = [];
              for (let T = 0, P = _.length; T < P; T++) {
                const Y = _[T];
                o.push({
                  fnId: Y,
                  fn: i[Y],
                  args: E[T]
                });
              }
              return S(o);
            }
            executeOpTree(s) {
              for (const i of s) {
                const E = i.fn, _ = i.fnId, o = i.args;
                switch (_ | 0) {
                  case f.OPS.beginText:
                    this.beginText();
                    break;
                  case f.OPS.dependency:
                    break;
                  case f.OPS.setLeading:
                    this.setLeading(o);
                    break;
                  case f.OPS.setLeadingMoveText:
                    this.setLeadingMoveText(o[0], o[1]);
                    break;
                  case f.OPS.setFont:
                    this.setFont(o);
                    break;
                  case f.OPS.showText:
                    this.showText(o[0]);
                    break;
                  case f.OPS.showSpacedText:
                    this.showText(o[0]);
                    break;
                  case f.OPS.endText:
                    this.endText();
                    break;
                  case f.OPS.moveText:
                    this.moveText(o[0], o[1]);
                    break;
                  case f.OPS.setCharSpacing:
                    this.setCharSpacing(o[0]);
                    break;
                  case f.OPS.setWordSpacing:
                    this.setWordSpacing(o[0]);
                    break;
                  case f.OPS.setHScale:
                    this.setHScale(o[0]);
                    break;
                  case f.OPS.setTextMatrix:
                    this.setTextMatrix(o[0], o[1], o[2], o[3], o[4], o[5]);
                    break;
                  case f.OPS.setTextRise:
                    this.setTextRise(o[0]);
                    break;
                  case f.OPS.setTextRenderingMode:
                    this.setTextRenderingMode(o[0]);
                    break;
                  case f.OPS.setLineWidth:
                    this.setLineWidth(o[0]);
                    break;
                  case f.OPS.setLineJoin:
                    this.setLineJoin(o[0]);
                    break;
                  case f.OPS.setLineCap:
                    this.setLineCap(o[0]);
                    break;
                  case f.OPS.setMiterLimit:
                    this.setMiterLimit(o[0]);
                    break;
                  case f.OPS.setFillRGBColor:
                    this.setFillRGBColor(o[0], o[1], o[2]);
                    break;
                  case f.OPS.setStrokeRGBColor:
                    this.setStrokeRGBColor(o[0], o[1], o[2]);
                    break;
                  case f.OPS.setStrokeColorN:
                    this.setStrokeColorN(o);
                    break;
                  case f.OPS.setFillColorN:
                    this.setFillColorN(o);
                    break;
                  case f.OPS.shadingFill:
                    this.shadingFill(o[0]);
                    break;
                  case f.OPS.setDash:
                    this.setDash(o[0], o[1]);
                    break;
                  case f.OPS.setRenderingIntent:
                    this.setRenderingIntent(o[0]);
                    break;
                  case f.OPS.setFlatness:
                    this.setFlatness(o[0]);
                    break;
                  case f.OPS.setGState:
                    this.setGState(o[0]);
                    break;
                  case f.OPS.fill:
                    this.fill();
                    break;
                  case f.OPS.eoFill:
                    this.eoFill();
                    break;
                  case f.OPS.stroke:
                    this.stroke();
                    break;
                  case f.OPS.fillStroke:
                    this.fillStroke();
                    break;
                  case f.OPS.eoFillStroke:
                    this.eoFillStroke();
                    break;
                  case f.OPS.clip:
                    this.clip("nonzero");
                    break;
                  case f.OPS.eoClip:
                    this.clip("evenodd");
                    break;
                  case f.OPS.paintSolidColorImageMask:
                    this.paintSolidColorImageMask();
                    break;
                  case f.OPS.paintImageXObject:
                    this.paintImageXObject(o[0]);
                    break;
                  case f.OPS.paintInlineImageXObject:
                    this.paintInlineImageXObject(o[0]);
                    break;
                  case f.OPS.paintImageMaskXObject:
                    this.paintImageMaskXObject(o[0]);
                    break;
                  case f.OPS.paintFormXObjectBegin:
                    this.paintFormXObjectBegin(o[0], o[1]);
                    break;
                  case f.OPS.paintFormXObjectEnd:
                    this.paintFormXObjectEnd();
                    break;
                  case f.OPS.closePath:
                    this.closePath();
                    break;
                  case f.OPS.closeStroke:
                    this.closeStroke();
                    break;
                  case f.OPS.closeFillStroke:
                    this.closeFillStroke();
                    break;
                  case f.OPS.closeEOFillStroke:
                    this.closeEOFillStroke();
                    break;
                  case f.OPS.nextLine:
                    this.nextLine();
                    break;
                  case f.OPS.transform:
                    this.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
                    break;
                  case f.OPS.constructPath:
                    this.constructPath(o[0], o[1]);
                    break;
                  case f.OPS.endPath:
                    this.endPath();
                    break;
                  case 92:
                    this.group(i.items);
                    break;
                  default:
                    (0, f.warn)(`Unimplemented operator ${E}`);
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
            setTextMatrix(s, i, E, _, o, T) {
              const P = this.current;
              P.textMatrix = P.lineMatrix = [s, i, E, _, o, T], P.textMatrixScale = Math.hypot(s, i), P.x = P.lineX = 0, P.y = P.lineY = 0, P.xcoords = [], P.ycoords = [], P.tspan = this.svgFactory.createElement("svg:tspan"), P.tspan.setAttributeNS(null, "font-family", P.fontFamily), P.tspan.setAttributeNS(null, "font-size", `${h(P.fontSize)}px`), P.tspan.setAttributeNS(null, "y", h(-P.y)), P.txtElement = this.svgFactory.createElement("svg:text"), P.txtElement.append(P.tspan);
            }
            beginText() {
              const s = this.current;
              s.x = s.lineX = 0, s.y = s.lineY = 0, s.textMatrix = f.IDENTITY_MATRIX, s.lineMatrix = f.IDENTITY_MATRIX, s.textMatrixScale = 1, s.tspan = this.svgFactory.createElement("svg:tspan"), s.txtElement = this.svgFactory.createElement("svg:text"), s.txtgrp = this.svgFactory.createElement("svg:g"), s.xcoords = [], s.ycoords = [];
            }
            moveText(s, i) {
              const E = this.current;
              E.x = E.lineX += s, E.y = E.lineY += i, E.xcoords = [], E.ycoords = [], E.tspan = this.svgFactory.createElement("svg:tspan"), E.tspan.setAttributeNS(null, "font-family", E.fontFamily), E.tspan.setAttributeNS(null, "font-size", `${h(E.fontSize)}px`), E.tspan.setAttributeNS(null, "y", h(-E.y));
            }
            showText(s) {
              const i = this.current, E = i.font, _ = i.fontSize;
              if (_ === 0)
                return;
              const o = i.fontSizeScale, T = i.charSpacing, P = i.wordSpacing, Y = i.fontDirection, tt = i.textHScale * Y, x = E.vertical, K = x ? 1 : -1, Z = E.defaultVMetrics, Q = _ * i.fontMatrix[0];
              let v = 0;
              for (const lt of s) {
                if (lt === null) {
                  v += Y * P;
                  continue;
                } else if (typeof lt == "number") {
                  v += K * lt * _ / 1e3;
                  continue;
                }
                const _t = (lt.isSpace ? P : 0) + T, k = lt.fontChar;
                let a, l, R = lt.width;
                if (x) {
                  let W;
                  const nt = lt.vmetric || Z;
                  W = lt.vmetric ? nt[1] : R * 0.5, W = -W * Q;
                  const st = nt[2] * Q;
                  R = nt ? -nt[0] : R, a = W / o, l = (v + st) / o;
                } else
                  a = v / o, l = 0;
                (lt.isInFont || E.missingFile) && (i.xcoords.push(i.x + a), x && i.ycoords.push(-i.y + l), i.tspan.textContent += k);
                const $ = x ? R * Q - _t * Y : R * Q + _t * Y;
                v += $;
              }
              i.tspan.setAttributeNS(null, "x", i.xcoords.map(h).join(" ")), x ? i.tspan.setAttributeNS(null, "y", i.ycoords.map(h).join(" ")) : i.tspan.setAttributeNS(null, "y", h(-i.y)), x ? i.y -= v : i.x += v * tt, i.tspan.setAttributeNS(null, "font-family", i.fontFamily), i.tspan.setAttributeNS(null, "font-size", `${h(i.fontSize)}px`), i.fontStyle !== q.fontStyle && i.tspan.setAttributeNS(null, "font-style", i.fontStyle), i.fontWeight !== q.fontWeight && i.tspan.setAttributeNS(null, "font-weight", i.fontWeight);
              const j = i.textRenderingMode & f.TextRenderingMode.FILL_STROKE_MASK;
              if (j === f.TextRenderingMode.FILL || j === f.TextRenderingMode.FILL_STROKE ? (i.fillColor !== q.fillColor && i.tspan.setAttributeNS(null, "fill", i.fillColor), i.fillAlpha < 1 && i.tspan.setAttributeNS(null, "fill-opacity", i.fillAlpha)) : i.textRenderingMode === f.TextRenderingMode.ADD_TO_PATH ? i.tspan.setAttributeNS(null, "fill", "transparent") : i.tspan.setAttributeNS(null, "fill", "none"), j === f.TextRenderingMode.STROKE || j === f.TextRenderingMode.FILL_STROKE) {
                const lt = 1 / (i.textMatrixScale || 1);
                this._setStrokeAttributes(i.tspan, lt);
              }
              let D = i.textMatrix;
              i.textRise !== 0 && (D = D.slice(), D[5] += i.textRise), i.txtElement.setAttributeNS(null, "transform", `${p(D)} scale(${h(tt)}, -1)`), i.txtElement.setAttributeNS(V, "xml:space", "preserve"), i.txtElement.append(i.tspan), i.txtgrp.append(i.txtElement), this._ensureTransformGroup().append(i.txtElement);
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
              const i = this.current, E = this.commonObjs.get(s[0]);
              let _ = s[1];
              i.font = E, this.embedFonts && !E.missingFile && !this.embeddedFonts[E.loadedName] && (this.addFontStyle(E), this.embeddedFonts[E.loadedName] = E), i.fontMatrix = E.fontMatrix || f.FONT_IDENTITY_MATRIX;
              let o = "normal";
              E.black ? o = "900" : E.bold && (o = "bold");
              const T = E.italic ? "italic" : "normal";
              _ < 0 ? (_ = -_, i.fontDirection = -1) : i.fontDirection = 1, i.fontSize = _, i.fontFamily = E.loadedName, i.fontWeight = o, i.fontStyle = T, i.tspan = this.svgFactory.createElement("svg:tspan"), i.tspan.setAttributeNS(null, "y", h(-i.y)), i.xcoords = [], i.ycoords = [];
            }
            endText() {
              var i;
              const s = this.current;
              s.textRenderingMode & f.TextRenderingMode.ADD_TO_PATH_FLAG && ((i = s.txtElement) != null && i.hasChildNodes()) && (s.element = s.txtElement, this.clip("nonzero"), this.endPath());
            }
            setLineWidth(s) {
              s > 0 && (this.current.lineWidth = s);
            }
            setLineCap(s) {
              this.current.lineCap = c[s];
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
            setStrokeRGBColor(s, i, E) {
              this.current.strokeColor = f.Util.makeHexColor(s, i, E);
            }
            setFillAlpha(s) {
              this.current.fillAlpha = s;
            }
            setFillRGBColor(s, i, E) {
              this.current.fillColor = f.Util.makeHexColor(s, i, E), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = [];
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
                height: E
              } = this.viewport, _ = f.Util.inverseTransform(this.transformMatrix), [o, T, P, Y] = f.Util.getAxialAlignedBoundingBox([0, 0, i, E], _), tt = this.svgFactory.createElement("svg:rect");
              tt.setAttributeNS(null, "x", o), tt.setAttributeNS(null, "y", T), tt.setAttributeNS(null, "width", P - o), tt.setAttributeNS(null, "height", Y - T), tt.setAttributeNS(null, "fill", this._makeShadingPattern(s)), this.current.fillAlpha < 1 && tt.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().append(tt);
            }
            _makeColorN_Pattern(s) {
              return s[0] === "TilingPattern" ? this._makeTilingPattern(s) : this._makeShadingPattern(s);
            }
            _makeTilingPattern(s) {
              const i = s[1], E = s[2], _ = s[3] || f.IDENTITY_MATRIX, [o, T, P, Y] = s[4], tt = s[5], x = s[6], K = s[7], Z = `shading${b++}`, [Q, v, j, D] = f.Util.normalizeRect([...f.Util.applyTransform([o, T], _), ...f.Util.applyTransform([P, Y], _)]), [lt, _t] = f.Util.singularValueDecompose2dScale(_), k = tt * lt, a = x * _t, l = this.svgFactory.createElement("svg:pattern");
              l.setAttributeNS(null, "id", Z), l.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), l.setAttributeNS(null, "width", k), l.setAttributeNS(null, "height", a), l.setAttributeNS(null, "x", `${Q}`), l.setAttributeNS(null, "y", `${v}`);
              const R = this.svg, $ = this.transformMatrix, W = this.current.fillColor, nt = this.current.strokeColor, st = this.svgFactory.create(j - Q, D - v);
              if (this.svg = st, this.transformMatrix = _, K === 2) {
                const ut = f.Util.makeHexColor(...i);
                this.current.fillColor = ut, this.current.strokeColor = ut;
              }
              return this.executeOpTree(this.convertOpList(E)), this.svg = R, this.transformMatrix = $, this.current.fillColor = W, this.current.strokeColor = nt, l.append(st.childNodes[0]), this.defs.append(l), `url(#${Z})`;
            }
            _makeShadingPattern(s) {
              switch (typeof s == "string" && (s = this.objs.get(s)), s[0]) {
                case "RadialAxial":
                  const i = `shading${b++}`, E = s[3];
                  let _;
                  switch (s[1]) {
                    case "axial":
                      const o = s[4], T = s[5];
                      _ = this.svgFactory.createElement("svg:linearGradient"), _.setAttributeNS(null, "id", i), _.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), _.setAttributeNS(null, "x1", o[0]), _.setAttributeNS(null, "y1", o[1]), _.setAttributeNS(null, "x2", T[0]), _.setAttributeNS(null, "y2", T[1]);
                      break;
                    case "radial":
                      const P = s[4], Y = s[5], tt = s[6], x = s[7];
                      _ = this.svgFactory.createElement("svg:radialGradient"), _.setAttributeNS(null, "id", i), _.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), _.setAttributeNS(null, "cx", Y[0]), _.setAttributeNS(null, "cy", Y[1]), _.setAttributeNS(null, "r", x), _.setAttributeNS(null, "fx", P[0]), _.setAttributeNS(null, "fy", P[1]), _.setAttributeNS(null, "fr", tt);
                      break;
                    default:
                      throw new Error(`Unknown RadialAxial type: ${s[1]}`);
                  }
                  for (const o of E) {
                    const T = this.svgFactory.createElement("svg:stop");
                    T.setAttributeNS(null, "offset", o[0]), T.setAttributeNS(null, "stop-color", o[1]), _.append(T);
                  }
                  return this.defs.append(_), `url(#${i})`;
                case "Mesh":
                  return (0, f.warn)("Unimplemented pattern Mesh"), null;
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
              const E = this.current;
              let _ = E.x, o = E.y, T = [], P = 0;
              for (const Y of s)
                switch (Y | 0) {
                  case f.OPS.rectangle:
                    _ = i[P++], o = i[P++];
                    const tt = i[P++], x = i[P++], K = _ + tt, Z = o + x;
                    T.push("M", h(_), h(o), "L", h(K), h(o), "L", h(K), h(Z), "L", h(_), h(Z), "Z");
                    break;
                  case f.OPS.moveTo:
                    _ = i[P++], o = i[P++], T.push("M", h(_), h(o));
                    break;
                  case f.OPS.lineTo:
                    _ = i[P++], o = i[P++], T.push("L", h(_), h(o));
                    break;
                  case f.OPS.curveTo:
                    _ = i[P + 4], o = i[P + 5], T.push("C", h(i[P]), h(i[P + 1]), h(i[P + 2]), h(i[P + 3]), h(_), h(o)), P += 6;
                    break;
                  case f.OPS.curveTo2:
                    T.push("C", h(_), h(o), h(i[P]), h(i[P + 1]), h(i[P + 2]), h(i[P + 3])), _ = i[P + 2], o = i[P + 3], P += 4;
                    break;
                  case f.OPS.curveTo3:
                    _ = i[P + 2], o = i[P + 3], T.push("C", h(i[P]), h(i[P + 1]), h(_), h(o), h(_), h(o)), P += 4;
                    break;
                  case f.OPS.closePath:
                    T.push("Z");
                    break;
                }
              T = T.join(" "), E.path && s.length > 0 && s[0] !== f.OPS.rectangle && s[0] !== f.OPS.moveTo ? T = E.path.getAttributeNS(null, "d") + T : (E.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().append(E.path)), E.path.setAttributeNS(null, "d", T), E.path.setAttributeNS(null, "fill", "none"), E.element = E.path, E.setCurrentPoint(_, o);
            }
            endPath() {
              const s = this.current;
              if (s.path = null, !this.pendingClip)
                return;
              if (!s.element) {
                this.pendingClip = null;
                return;
              }
              const i = `clippath${u++}`, E = this.svgFactory.createElement("svg:clipPath");
              E.setAttributeNS(null, "id", i), E.setAttributeNS(null, "transform", p(this.transformMatrix));
              const _ = s.element.cloneNode(!0);
              if (this.pendingClip === "evenodd" ? _.setAttributeNS(null, "clip-rule", "evenodd") : _.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, E.append(_), this.defs.append(E), s.activeClipUrl) {
                s.clipGroup = null;
                for (const o of this.extraStack)
                  o.clipGroup = null;
                E.setAttributeNS(null, "clip-path", s.activeClipUrl);
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
              for (const [i, E] of s)
                switch (i) {
                  case "LW":
                    this.setLineWidth(E);
                    break;
                  case "LC":
                    this.setLineCap(E);
                    break;
                  case "LJ":
                    this.setLineJoin(E);
                    break;
                  case "ML":
                    this.setMiterLimit(E);
                    break;
                  case "D":
                    this.setDash(E[0], E[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(E);
                    break;
                  case "FL":
                    this.setFlatness(E);
                    break;
                  case "Font":
                    this.setFont(E);
                    break;
                  case "CA":
                    this.setStrokeAlpha(E);
                    break;
                  case "ca":
                    this.setFillAlpha(E);
                    break;
                  default:
                    (0, f.warn)(`Unimplemented graphic state operator ${i}`);
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
              const E = this.current;
              let _ = E.dashArray;
              i !== 1 && _.length > 0 && (_ = _.map(function(o) {
                return i * o;
              })), s.setAttributeNS(null, "stroke", E.strokeColor), s.setAttributeNS(null, "stroke-opacity", E.strokeAlpha), s.setAttributeNS(null, "stroke-miterlimit", h(E.miterLimit)), s.setAttributeNS(null, "stroke-linecap", E.lineCap), s.setAttributeNS(null, "stroke-linejoin", E.lineJoin), s.setAttributeNS(null, "stroke-width", h(i * E.lineWidth) + "px"), s.setAttributeNS(null, "stroke-dasharray", _.map(h).join(" ")), s.setAttributeNS(null, "stroke-dashoffset", h(i * E.dashPhase) + "px");
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
                (0, f.warn)(`Dependent image with object ID ${s} is not ready yet`);
                return;
              }
              this.paintInlineImageXObject(i);
            }
            paintInlineImageXObject(s, i) {
              const E = s.width, _ = s.height, o = F(s, this.forceDataSchema, !!i), T = this.svgFactory.createElement("svg:rect");
              T.setAttributeNS(null, "x", "0"), T.setAttributeNS(null, "y", "0"), T.setAttributeNS(null, "width", h(E)), T.setAttributeNS(null, "height", h(_)), this.current.element = T, this.clip("nonzero");
              const P = this.svgFactory.createElement("svg:image");
              P.setAttributeNS(I, "xlink:href", o), P.setAttributeNS(null, "x", "0"), P.setAttributeNS(null, "y", h(-_)), P.setAttributeNS(null, "width", h(E) + "px"), P.setAttributeNS(null, "height", h(_) + "px"), P.setAttributeNS(null, "transform", `scale(${h(1 / E)} ${h(-1 / _)})`), i ? i.append(P) : this._ensureTransformGroup().append(P);
            }
            paintImageMaskXObject(s) {
              const i = this.getObject(s.data, s);
              if (i.bitmap) {
                (0, f.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
                return;
              }
              const E = this.current, _ = i.width, o = i.height, T = E.fillColor;
              E.maskId = `mask${y++}`;
              const P = this.svgFactory.createElement("svg:mask");
              P.setAttributeNS(null, "id", E.maskId);
              const Y = this.svgFactory.createElement("svg:rect");
              Y.setAttributeNS(null, "x", "0"), Y.setAttributeNS(null, "y", "0"), Y.setAttributeNS(null, "width", h(_)), Y.setAttributeNS(null, "height", h(o)), Y.setAttributeNS(null, "fill", T), Y.setAttributeNS(null, "mask", `url(#${E.maskId})`), this.defs.append(P), this._ensureTransformGroup().append(Y), this.paintInlineImageXObject(i, P);
            }
            paintFormXObjectBegin(s, i) {
              if (Array.isArray(s) && s.length === 6 && this.transform(s[0], s[1], s[2], s[3], s[4], s[5]), i) {
                const E = i[2] - i[0], _ = i[3] - i[1], o = this.svgFactory.createElement("svg:rect");
                o.setAttributeNS(null, "x", i[0]), o.setAttributeNS(null, "y", i[1]), o.setAttributeNS(null, "width", h(E)), o.setAttributeNS(null, "height", h(_)), this.current.element = o, this.clip("nonzero"), this.endPath();
              }
            }
            paintFormXObjectEnd() {
            }
            _initialize(s) {
              const i = this.svgFactory.create(s.width, s.height), E = this.svgFactory.createElement("svg:defs");
              i.append(E), this.defs = E;
              const _ = this.svgFactory.createElement("svg:g");
              return _.setAttributeNS(null, "transform", p(s.transform)), i.append(_), this.svg = _, i;
            }
            _ensureClipGroup() {
              if (!this.current.clipGroup) {
                const s = this.svgFactory.createElement("svg:g");
                s.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.append(s), this.current.clipGroup = s;
              }
              return this.current.clipGroup;
            }
            _ensureTransformGroup() {
              return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", p(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().append(this.tgrp) : this.svg.append(this.tgrp)), this.tgrp;
            }
          }
          e.SVGGraphics = g;
        },
        /* 25 */
        /***/
        (A, e) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.XfaText = void 0;
          class L {
            static textContent(f) {
              const q = [], V = {
                items: q,
                styles: /* @__PURE__ */ Object.create(null)
              };
              function I(c) {
                var F;
                if (!c)
                  return;
                let d = null;
                const r = c.name;
                if (r === "#text")
                  d = c.value;
                else if (L.shouldBuildText(r))
                  (F = c == null ? void 0 : c.attributes) != null && F.textContent ? d = c.attributes.textContent : c.value && (d = c.value);
                else
                  return;
                if (d !== null && q.push({
                  str: d
                }), !!c.children)
                  for (const M of c.children)
                    I(M);
              }
              return I(f), V;
            }
            static shouldBuildText(f) {
              return !(f === "textarea" || f === "input" || f === "option" || f === "select");
            }
          }
          e.XfaText = L;
        },
        /* 26 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.TextLayerRenderTask = void 0, e.renderTextLayer = p, e.updateTextLayer = u;
          var n = L(1), f = L(6);
          const q = 1e5, V = 30, I = 0.8, c = /* @__PURE__ */ new Map();
          function d(y, b) {
            let g;
            if (b && n.FeatureTest.isOffscreenCanvasSupported)
              g = new OffscreenCanvas(y, y).getContext("2d", {
                alpha: !1
              });
            else {
              const w = document.createElement("canvas");
              w.width = w.height = y, g = w.getContext("2d", {
                alpha: !1
              });
            }
            return g;
          }
          function r(y, b) {
            const g = c.get(y);
            if (g)
              return g;
            const w = d(V, b);
            w.font = `${V}px ${y}`;
            const s = w.measureText("");
            let i = s.fontBoundingBoxAscent, E = Math.abs(s.fontBoundingBoxDescent);
            if (i) {
              const o = i / (i + E);
              return c.set(y, o), w.canvas.width = w.canvas.height = 0, o;
            }
            w.strokeStyle = "red", w.clearRect(0, 0, V, V), w.strokeText("g", 0, 0);
            let _ = w.getImageData(0, 0, V, V).data;
            E = 0;
            for (let o = _.length - 1 - 3; o >= 0; o -= 4)
              if (_[o] > 0) {
                E = Math.ceil(o / 4 / V);
                break;
              }
            w.clearRect(0, 0, V, V), w.strokeText("A", 0, V), _ = w.getImageData(0, 0, V, V).data, i = 0;
            for (let o = 0, T = _.length; o < T; o += 4)
              if (_[o] > 0) {
                i = V - Math.floor(o / 4 / V);
                break;
              }
            if (w.canvas.width = w.canvas.height = 0, i) {
              const o = i / (i + E);
              return c.set(y, o), o;
            }
            return c.set(y, I), I;
          }
          function F(y, b, g) {
            const w = document.createElement("span"), s = {
              angle: 0,
              canvasWidth: 0,
              hasText: b.str !== "",
              hasEOL: b.hasEOL,
              fontSize: 0
            };
            y._textDivs.push(w);
            const i = n.Util.transform(y._transform, b.transform);
            let E = Math.atan2(i[1], i[0]);
            const _ = g[b.fontName];
            _.vertical && (E += Math.PI / 2);
            const o = Math.hypot(i[2], i[3]), T = o * r(_.fontFamily, y._isOffscreenCanvasSupported);
            let P, Y;
            E === 0 ? (P = i[4], Y = i[5] - T) : (P = i[4] + T * Math.sin(E), Y = i[5] - T * Math.cos(E));
            const tt = "calc(var(--scale-factor)*", x = w.style;
            y._container === y._rootContainer ? (x.left = `${(100 * P / y._pageWidth).toFixed(2)}%`, x.top = `${(100 * Y / y._pageHeight).toFixed(2)}%`) : (x.left = `${tt}${P.toFixed(2)}px)`, x.top = `${tt}${Y.toFixed(2)}px)`), x.fontSize = `${tt}${o.toFixed(2)}px)`, x.fontFamily = _.fontFamily, s.fontSize = o, w.setAttribute("role", "presentation"), w.textContent = b.str, w.dir = b.dir, y._fontInspectorEnabled && (w.dataset.fontName = b.fontName), E !== 0 && (s.angle = E * (180 / Math.PI));
            let K = !1;
            if (b.str.length > 1)
              K = !0;
            else if (b.str !== " " && b.transform[0] !== b.transform[3]) {
              const Z = Math.abs(b.transform[0]), Q = Math.abs(b.transform[3]);
              Z !== Q && Math.max(Z, Q) / Math.min(Z, Q) > 1.5 && (K = !0);
            }
            K && (s.canvasWidth = _.vertical ? b.height : b.width), y._textDivProperties.set(w, s), y._isReadableStream && y._layoutText(w);
          }
          function M(y) {
            const {
              div: b,
              scale: g,
              properties: w,
              ctx: s,
              prevFontSize: i,
              prevFontFamily: E
            } = y, {
              style: _
            } = b;
            let o = "";
            if (w.canvasWidth !== 0 && w.hasText) {
              const {
                fontFamily: T
              } = _, {
                canvasWidth: P,
                fontSize: Y
              } = w;
              (i !== Y || E !== T) && (s.font = `${Y * g}px ${T}`, y.prevFontSize = Y, y.prevFontFamily = T);
              const {
                width: tt
              } = s.measureText(b.textContent);
              tt > 0 && (o = `scaleX(${P * g / tt})`);
            }
            w.angle !== 0 && (o = `rotate(${w.angle}deg) ${o}`), o.length > 0 && (_.transform = o);
          }
          function S(y) {
            if (y._canceled)
              return;
            const b = y._textDivs, g = y._capability;
            if (b.length > q) {
              g.resolve();
              return;
            }
            if (!y._isReadableStream)
              for (const s of b)
                y._layoutText(s);
            g.resolve();
          }
          class h {
            constructor({
              textContentSource: b,
              container: g,
              viewport: w,
              textDivs: s,
              textDivProperties: i,
              textContentItemsStr: E,
              isOffscreenCanvasSupported: _
            }) {
              var tt;
              this._textContentSource = b, this._isReadableStream = b instanceof ReadableStream, this._container = this._rootContainer = g, this._textDivs = s || [], this._textContentItemsStr = E || [], this._isOffscreenCanvasSupported = _, this._fontInspectorEnabled = !!((tt = globalThis.FontInspector) != null && tt.enabled), this._reader = null, this._textDivProperties = i || /* @__PURE__ */ new WeakMap(), this._canceled = !1, this._capability = new n.PromiseCapability(), this._layoutTextParams = {
                prevFontSize: null,
                prevFontFamily: null,
                div: null,
                scale: w.scale * (globalThis.devicePixelRatio || 1),
                properties: null,
                ctx: d(0, _)
              };
              const {
                pageWidth: o,
                pageHeight: T,
                pageX: P,
                pageY: Y
              } = w.rawDims;
              this._transform = [1, 0, 0, -1, -P, Y + T], this._pageWidth = o, this._pageHeight = T, (0, f.setLayerDimensions)(g, w), this._capability.promise.finally(() => {
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
            _processItems(b, g) {
              for (const w of b) {
                if (w.str === void 0) {
                  if (w.type === "beginMarkedContentProps" || w.type === "beginMarkedContent") {
                    const s = this._container;
                    this._container = document.createElement("span"), this._container.classList.add("markedContent"), w.id !== null && this._container.setAttribute("id", `${w.id}`), s.append(this._container);
                  } else
                    w.type === "endMarkedContent" && (this._container = this._container.parentNode);
                  continue;
                }
                this._textContentItemsStr.push(w.str), F(this, w, g);
              }
            }
            _layoutText(b) {
              const g = this._layoutTextParams.properties = this._textDivProperties.get(b);
              if (this._layoutTextParams.div = b, M(this._layoutTextParams), g.hasText && this._container.append(b), g.hasEOL) {
                const w = document.createElement("br");
                w.setAttribute("role", "presentation"), this._container.append(w);
              }
            }
            _render() {
              const b = new n.PromiseCapability();
              let g = /* @__PURE__ */ Object.create(null);
              if (this._isReadableStream) {
                const w = () => {
                  this._reader.read().then(({
                    value: s,
                    done: i
                  }) => {
                    if (i) {
                      b.resolve();
                      return;
                    }
                    Object.assign(g, s.styles), this._processItems(s.items, g), w();
                  }, b.reject);
                };
                this._reader = this._textContentSource.getReader(), w();
              } else if (this._textContentSource) {
                const {
                  items: w,
                  styles: s
                } = this._textContentSource;
                this._processItems(w, s), b.resolve();
              } else
                throw new Error('No "textContentSource" parameter specified.');
              b.promise.then(() => {
                g = null, S(this);
              }, this._capability.reject);
            }
          }
          e.TextLayerRenderTask = h;
          function p(y) {
            !y.textContentSource && (y.textContent || y.textContentStream) && ((0, f.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."), y.textContentSource = y.textContent || y.textContentStream);
            const {
              container: b,
              viewport: g
            } = y, w = getComputedStyle(b), s = w.getPropertyValue("visibility"), i = parseFloat(w.getPropertyValue("--scale-factor"));
            s === "visible" && (!i || Math.abs(i - g.scale) > 1e-5) && console.error("The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.");
            const E = new h(y);
            return E._render(), E;
          }
          function u({
            container: y,
            viewport: b,
            textDivs: g,
            textDivProperties: w,
            isOffscreenCanvasSupported: s,
            mustRotate: i = !0,
            mustRescale: E = !0
          }) {
            if (i && (0, f.setLayerDimensions)(y, {
              rotation: b.rotation
            }), E) {
              const _ = d(0, s), T = {
                prevFontSize: null,
                prevFontFamily: null,
                div: null,
                scale: b.scale * (globalThis.devicePixelRatio || 1),
                properties: null,
                ctx: _
              };
              for (const P of g)
                T.properties = w.get(P), T.div = P, M(T);
            }
          }
        },
        /* 27 */
        /***/
        (A, e, L) => {
          var r, F, M, S, h, p, u, y, b, g, w, ni, i, Me, _, si, T, ri;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.AnnotationEditorLayer = void 0;
          var n = L(1), f = L(4), q = L(28), V = L(33), I = L(6), c = L(34);
          const Y = class Y {
            constructor({
              uiManager: x,
              pageIndex: K,
              div: Z,
              accessibilityManager: Q,
              annotationLayer: v,
              viewport: j,
              l10n: D
            }) {
              N(this, w);
              N(this, i);
              N(this, _);
              N(this, T);
              N(this, r, void 0);
              N(this, F, !1);
              N(this, M, null);
              N(this, S, this.pointerup.bind(this));
              N(this, h, this.pointerdown.bind(this));
              N(this, p, /* @__PURE__ */ new Map());
              N(this, u, !1);
              N(this, y, !1);
              N(this, b, !1);
              N(this, g, void 0);
              const lt = [q.FreeTextEditor, V.InkEditor, c.StampEditor];
              if (!Y._initialized) {
                Y._initialized = !0;
                for (const _t of lt)
                  _t.initialize(D);
              }
              x.registerEditorTypes(lt), it(this, g, x), this.pageIndex = K, this.div = Z, it(this, r, Q), it(this, M, v), this.viewport = j, t(this, g).addLayer(this);
            }
            get isEmpty() {
              return t(this, p).size === 0;
            }
            updateToolbar(x) {
              t(this, g).updateToolbar(x);
            }
            updateMode(x = t(this, g).getMode()) {
              X(this, T, ri).call(this), x === n.AnnotationEditorType.INK ? (this.addInkEditorIfNeeded(!1), this.disableClick()) : this.enableClick(), x !== n.AnnotationEditorType.NONE && (this.div.classList.toggle("freeTextEditing", x === n.AnnotationEditorType.FREETEXT), this.div.classList.toggle("inkEditing", x === n.AnnotationEditorType.INK), this.div.classList.toggle("stampEditing", x === n.AnnotationEditorType.STAMP), this.div.hidden = !1);
            }
            addInkEditorIfNeeded(x) {
              if (!x && t(this, g).getMode() !== n.AnnotationEditorType.INK)
                return;
              if (!x) {
                for (const Z of t(this, p).values())
                  if (Z.isEmpty()) {
                    Z.setInBackground();
                    return;
                  }
              }
              X(this, i, Me).call(this, {
                offsetX: 0,
                offsetY: 0
              }, !1).setInBackground();
            }
            setEditingState(x) {
              t(this, g).setEditingState(x);
            }
            addCommands(x) {
              t(this, g).addCommands(x);
            }
            enable() {
              this.div.style.pointerEvents = "auto";
              const x = /* @__PURE__ */ new Set();
              for (const Z of t(this, p).values())
                Z.enableEditing(), Z.annotationElementId && x.add(Z.annotationElementId);
              if (!t(this, M))
                return;
              const K = t(this, M).getEditableAnnotations();
              for (const Z of K) {
                if (Z.hide(), t(this, g).isDeletedAnnotationElement(Z.data.id) || x.has(Z.data.id))
                  continue;
                const Q = this.deserialize(Z);
                Q && (this.addOrRebuild(Q), Q.enableEditing());
              }
            }
            disable() {
              var K;
              it(this, b, !0), this.div.style.pointerEvents = "none";
              const x = /* @__PURE__ */ new Set();
              for (const Z of t(this, p).values()) {
                if (Z.disableEditing(), !Z.annotationElementId || Z.serialize() !== null) {
                  x.add(Z.annotationElementId);
                  continue;
                }
                (K = this.getEditableAnnotation(Z.annotationElementId)) == null || K.show(), Z.remove();
              }
              if (t(this, M)) {
                const Z = t(this, M).getEditableAnnotations();
                for (const Q of Z) {
                  const {
                    id: v
                  } = Q.data;
                  x.has(v) || t(this, g).isDeletedAnnotationElement(v) || Q.show();
                }
              }
              X(this, T, ri).call(this), this.isEmpty && (this.div.hidden = !0), it(this, b, !1);
            }
            getEditableAnnotation(x) {
              var K;
              return ((K = t(this, M)) == null ? void 0 : K.getEditableAnnotation(x)) || null;
            }
            setActiveEditor(x) {
              t(this, g).getActive() !== x && t(this, g).setActiveEditor(x);
            }
            enableClick() {
              this.div.addEventListener("pointerdown", t(this, h)), this.div.addEventListener("pointerup", t(this, S));
            }
            disableClick() {
              this.div.removeEventListener("pointerdown", t(this, h)), this.div.removeEventListener("pointerup", t(this, S));
            }
            attach(x) {
              t(this, p).set(x.id, x);
              const {
                annotationElementId: K
              } = x;
              K && t(this, g).isDeletedAnnotationElement(K) && t(this, g).removeDeletedAnnotationElement(x);
            }
            detach(x) {
              var K;
              t(this, p).delete(x.id), (K = t(this, r)) == null || K.removePointerInTextLayer(x.contentDiv), !t(this, b) && x.annotationElementId && t(this, g).addDeletedAnnotationElement(x);
            }
            remove(x) {
              this.detach(x), t(this, g).removeEditor(x), x.div.contains(document.activeElement) && setTimeout(() => {
                t(this, g).focusMainContainer();
              }, 0), x.div.remove(), x.isAttachedToDOM = !1, t(this, y) || this.addInkEditorIfNeeded(!1);
            }
            changeParent(x) {
              var K;
              x.parent !== this && (x.annotationElementId && (t(this, g).addDeletedAnnotationElement(x.annotationElementId), f.AnnotationEditor.deleteAnnotationElement(x), x.annotationElementId = null), this.attach(x), (K = x.parent) == null || K.detach(x), x.setParent(this), x.div && x.isAttachedToDOM && (x.div.remove(), this.div.append(x.div)));
            }
            add(x) {
              if (this.changeParent(x), t(this, g).addEditor(x), this.attach(x), !x.isAttachedToDOM) {
                const K = x.render();
                this.div.append(K), x.isAttachedToDOM = !0;
              }
              this.moveEditorInDOM(x), x.onceAdded(), t(this, g).addToAnnotationStorage(x);
            }
            moveEditorInDOM(x) {
              var Z;
              if (!x.isAttachedToDOM)
                return;
              const {
                activeElement: K
              } = document;
              x.div.contains(K) && (x._focusEventsAllowed = !1, setTimeout(() => {
                x.div.addEventListener("focusin", () => {
                  x._focusEventsAllowed = !0;
                }, {
                  once: !0
                }), K.focus();
              }, 0)), (Z = t(this, r)) == null || Z.moveElementInDOM(this.div, x.div, x.contentDiv, !0);
            }
            addOrRebuild(x) {
              x.needsToBeRebuilt() ? x.rebuild() : this.add(x);
            }
            addUndoableEditor(x) {
              const K = () => x._uiManager.rebuild(x), Z = () => {
                x.remove();
              };
              this.addCommands({
                cmd: K,
                undo: Z,
                mustExec: !1
              });
            }
            getNextId() {
              return t(this, g).getId();
            }
            pasteEditor(x, K) {
              t(this, g).updateToolbar(x), t(this, g).updateMode(x);
              const {
                offsetX: Z,
                offsetY: Q
              } = X(this, _, si).call(this), v = this.getNextId(), j = X(this, w, ni).call(this, {
                parent: this,
                id: v,
                x: Z,
                y: Q,
                uiManager: t(this, g),
                isCentered: !0,
                ...K
              });
              j && this.add(j);
            }
            deserialize(x) {
              switch (x.annotationType ?? x.annotationEditorType) {
                case n.AnnotationEditorType.FREETEXT:
                  return q.FreeTextEditor.deserialize(x, this, t(this, g));
                case n.AnnotationEditorType.INK:
                  return V.InkEditor.deserialize(x, this, t(this, g));
                case n.AnnotationEditorType.STAMP:
                  return c.StampEditor.deserialize(x, this, t(this, g));
              }
              return null;
            }
            addNewEditor() {
              X(this, i, Me).call(this, X(this, _, si).call(this), !0);
            }
            setSelected(x) {
              t(this, g).setSelected(x);
            }
            toggleSelected(x) {
              t(this, g).toggleSelected(x);
            }
            isSelected(x) {
              return t(this, g).isSelected(x);
            }
            unselect(x) {
              t(this, g).unselect(x);
            }
            pointerup(x) {
              const {
                isMac: K
              } = n.FeatureTest.platform;
              if (!(x.button !== 0 || x.ctrlKey && K) && x.target === this.div && t(this, u)) {
                if (it(this, u, !1), !t(this, F)) {
                  it(this, F, !0);
                  return;
                }
                if (t(this, g).getMode() === n.AnnotationEditorType.STAMP) {
                  t(this, g).unselectAll();
                  return;
                }
                X(this, i, Me).call(this, x, !1);
              }
            }
            pointerdown(x) {
              if (t(this, u)) {
                it(this, u, !1);
                return;
              }
              const {
                isMac: K
              } = n.FeatureTest.platform;
              if (x.button !== 0 || x.ctrlKey && K || x.target !== this.div)
                return;
              it(this, u, !0);
              const Z = t(this, g).getActive();
              it(this, F, !Z || Z.isEmpty());
            }
            findNewParent(x, K, Z) {
              const Q = t(this, g).findParent(K, Z);
              return Q === null || Q === this ? !1 : (Q.changeParent(x), !0);
            }
            destroy() {
              var x, K;
              ((x = t(this, g).getActive()) == null ? void 0 : x.parent) === this && t(this, g).setActiveEditor(null);
              for (const Z of t(this, p).values())
                (K = t(this, r)) == null || K.removePointerInTextLayer(Z.contentDiv), Z.setParent(null), Z.isAttachedToDOM = !1, Z.div.remove();
              this.div = null, t(this, p).clear(), t(this, g).removeLayer(this);
            }
            render({
              viewport: x
            }) {
              this.viewport = x, (0, I.setLayerDimensions)(this.div, x);
              for (const K of t(this, g).getEditors(this.pageIndex))
                this.add(K);
              this.updateMode();
            }
            update({
              viewport: x
            }) {
              t(this, g).commitOrRemove(), this.viewport = x, (0, I.setLayerDimensions)(this.div, {
                rotation: x.rotation
              }), this.updateMode();
            }
            get pageDimensions() {
              const {
                pageWidth: x,
                pageHeight: K
              } = this.viewport.rawDims;
              return [x, K];
            }
          };
          r = new WeakMap(), F = new WeakMap(), M = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), u = new WeakMap(), y = new WeakMap(), b = new WeakMap(), g = new WeakMap(), w = new WeakSet(), ni = function(x) {
            switch (t(this, g).getMode()) {
              case n.AnnotationEditorType.FREETEXT:
                return new q.FreeTextEditor(x);
              case n.AnnotationEditorType.INK:
                return new V.InkEditor(x);
              case n.AnnotationEditorType.STAMP:
                return new c.StampEditor(x);
            }
            return null;
          }, i = new WeakSet(), Me = function(x, K) {
            const Z = this.getNextId(), Q = X(this, w, ni).call(this, {
              parent: this,
              id: Z,
              x: x.offsetX,
              y: x.offsetY,
              uiManager: t(this, g),
              isCentered: K
            });
            return Q && this.add(Q), Q;
          }, _ = new WeakSet(), si = function() {
            const {
              x,
              y: K,
              width: Z,
              height: Q
            } = this.div.getBoundingClientRect(), v = Math.max(0, x), j = Math.max(0, K), D = Math.min(window.innerWidth, x + Z), lt = Math.min(window.innerHeight, K + Q), _t = (v + D) / 2 - x, k = (j + lt) / 2 - K, [a, l] = this.viewport.rotation % 180 === 0 ? [_t, k] : [k, _t];
            return {
              offsetX: a,
              offsetY: l
            };
          }, T = new WeakSet(), ri = function() {
            it(this, y, !0);
            for (const x of t(this, p).values())
              x.isEmpty() && x.remove();
            it(this, y, !1);
          }, Zt(Y, "_initialized", !1);
          let d = Y;
          e.AnnotationEditorLayer = d;
        },
        /* 28 */
        /***/
        (A, e, L) => {
          var c, d, r, F, M, S, h, p, u, y, an, g, on, s, ln, E, _e, o, ai, P, cn, tt, oi;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.FreeTextEditor = void 0;
          var n = L(1), f = L(5), q = L(4), V = L(29);
          const K = class K extends q.AnnotationEditor {
            constructor(v) {
              super({
                ...v,
                name: "freeTextEditor"
              });
              N(this, y);
              N(this, g);
              N(this, s);
              N(this, E);
              N(this, o);
              N(this, P);
              N(this, tt);
              N(this, c, this.editorDivBlur.bind(this));
              N(this, d, this.editorDivFocus.bind(this));
              N(this, r, this.editorDivInput.bind(this));
              N(this, F, this.editorDivKeydown.bind(this));
              N(this, M, void 0);
              N(this, S, "");
              N(this, h, `${this.id}-editor`);
              N(this, p, void 0);
              N(this, u, null);
              it(this, M, v.color || K._defaultColor || q.AnnotationEditor._defaultLineColor), it(this, p, v.fontSize || K._defaultFontSize);
            }
            static get _keyboardManager() {
              const v = K.prototype, j = (_t) => _t.isEmpty(), D = f.AnnotationEditorUIManager.TRANSLATE_SMALL, lt = f.AnnotationEditorUIManager.TRANSLATE_BIG;
              return (0, n.shadow)(this, "_keyboardManager", new f.KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], v.commitOrRemove, {
                bubbles: !0
              }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], v.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], v._translateEmpty, {
                args: [-D, 0],
                checker: j
              }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], v._translateEmpty, {
                args: [-lt, 0],
                checker: j
              }], [["ArrowRight", "mac+ArrowRight"], v._translateEmpty, {
                args: [D, 0],
                checker: j
              }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], v._translateEmpty, {
                args: [lt, 0],
                checker: j
              }], [["ArrowUp", "mac+ArrowUp"], v._translateEmpty, {
                args: [0, -D],
                checker: j
              }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], v._translateEmpty, {
                args: [0, -lt],
                checker: j
              }], [["ArrowDown", "mac+ArrowDown"], v._translateEmpty, {
                args: [0, D],
                checker: j
              }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], v._translateEmpty, {
                args: [0, lt],
                checker: j
              }]]));
            }
            static initialize(v) {
              this._l10nPromise = new Map(["free_text2_default_content", "editor_free_text2_aria_label"].map((D) => [D, v.get(D)]));
              const j = getComputedStyle(document.documentElement);
              this._internalPadding = parseFloat(j.getPropertyValue("--freetext-padding"));
            }
            static updateDefaultParams(v, j) {
              switch (v) {
                case n.AnnotationEditorParamsType.FREETEXT_SIZE:
                  K._defaultFontSize = j;
                  break;
                case n.AnnotationEditorParamsType.FREETEXT_COLOR:
                  K._defaultColor = j;
                  break;
              }
            }
            updateParams(v, j) {
              switch (v) {
                case n.AnnotationEditorParamsType.FREETEXT_SIZE:
                  X(this, y, an).call(this, j);
                  break;
                case n.AnnotationEditorParamsType.FREETEXT_COLOR:
                  X(this, g, on).call(this, j);
                  break;
              }
            }
            static get defaultPropertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.FREETEXT_SIZE, K._defaultFontSize], [n.AnnotationEditorParamsType.FREETEXT_COLOR, K._defaultColor || q.AnnotationEditor._defaultLineColor]];
            }
            get propertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.FREETEXT_SIZE, t(this, p)], [n.AnnotationEditorParamsType.FREETEXT_COLOR, t(this, M)]];
            }
            _translateEmpty(v, j) {
              this._uiManager.translateSelectedEditors(v, j, !0);
            }
            getInitialTranslation() {
              const v = this.parentScale;
              return [-K._internalPadding * v, -(K._internalPadding + t(this, p)) * v];
            }
            rebuild() {
              this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
            }
            enableEditMode() {
              this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(n.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", t(this, F)), this.editorDiv.addEventListener("focus", t(this, d)), this.editorDiv.addEventListener("blur", t(this, c)), this.editorDiv.addEventListener("input", t(this, r)));
            }
            disableEditMode() {
              this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", t(this, h)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", t(this, F)), this.editorDiv.removeEventListener("focus", t(this, d)), this.editorDiv.removeEventListener("blur", t(this, c)), this.editorDiv.removeEventListener("input", t(this, r)), this.div.focus({
                preventScroll: !0
              }), this.isEditing = !1, this.parent.div.classList.add("freeTextEditing"));
            }
            focusin(v) {
              this._focusEventsAllowed && (super.focusin(v), v.target !== this.editorDiv && this.editorDiv.focus());
            }
            onceAdded() {
              var v;
              if (this.width) {
                X(this, tt, oi).call(this);
                return;
              }
              this.enableEditMode(), this.editorDiv.focus(), (v = this._initialOptions) != null && v.isCentered && this.center(), this._initialOptions = null;
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
              const v = t(this, S), j = it(this, S, X(this, s, ln).call(this).trimEnd());
              if (v === j)
                return;
              const D = (lt) => {
                if (it(this, S, lt), !lt) {
                  this.remove();
                  return;
                }
                X(this, o, ai).call(this), this._uiManager.rebuild(this), X(this, E, _e).call(this);
              };
              this.addCommands({
                cmd: () => {
                  D(j);
                },
                undo: () => {
                  D(v);
                },
                mustExec: !1
              }), X(this, E, _e).call(this);
            }
            shouldGetKeyboardEvents() {
              return this.isInEditMode();
            }
            enterInEditMode() {
              this.enableEditMode(), this.editorDiv.focus();
            }
            dblclick(v) {
              this.enterInEditMode();
            }
            keydown(v) {
              v.target === this.div && v.key === "Enter" && (this.enterInEditMode(), v.preventDefault());
            }
            editorDivKeydown(v) {
              K._keyboardManager.exec(this, v);
            }
            editorDivFocus(v) {
              this.isEditing = !0;
            }
            editorDivBlur(v) {
              this.isEditing = !1;
            }
            editorDivInput(v) {
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
              let v, j;
              this.width && (v = this.x, j = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", t(this, h)), this.enableEditing(), K._l10nPromise.get("editor_free_text2_aria_label").then((lt) => {
                var _t;
                return (_t = this.editorDiv) == null ? void 0 : _t.setAttribute("aria-label", lt);
              }), K._l10nPromise.get("free_text2_default_content").then((lt) => {
                var _t;
                return (_t = this.editorDiv) == null ? void 0 : _t.setAttribute("default-content", lt);
              }), this.editorDiv.contentEditable = !0;
              const {
                style: D
              } = this.editorDiv;
              if (D.fontSize = `calc(${t(this, p)}px * var(--scale-factor))`, D.color = t(this, M), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, f.bindEvents)(this, this.div, ["dblclick", "keydown"]), this.width) {
                const [lt, _t] = this.parentDimensions;
                if (this.annotationElementId) {
                  const {
                    position: k
                  } = t(this, u);
                  let [a, l] = this.getInitialTranslation();
                  [a, l] = this.pageTranslationToScreen(a, l);
                  const [R, $] = this.pageDimensions, [W, nt] = this.pageTranslation;
                  let st, ut;
                  switch (this.rotation) {
                    case 0:
                      st = v + (k[0] - W) / R, ut = j + this.height - (k[1] - nt) / $;
                      break;
                    case 90:
                      st = v + (k[0] - W) / R, ut = j - (k[1] - nt) / $, [a, l] = [l, -a];
                      break;
                    case 180:
                      st = v - this.width + (k[0] - W) / R, ut = j - (k[1] - nt) / $, [a, l] = [-a, -l];
                      break;
                    case 270:
                      st = v + (k[0] - W - this.height * $) / R, ut = j + (k[1] - nt - this.width * R) / $, [a, l] = [-l, a];
                      break;
                  }
                  this.setAt(st * lt, ut * _t, a, l);
                } else
                  this.setAt(v * lt, j * _t, this.width * lt, this.height * _t);
                X(this, o, ai).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
              } else
                this._isDraggable = !1, this.editorDiv.contentEditable = !0;
              return this.div;
            }
            get contentDiv() {
              return this.editorDiv;
            }
            static deserialize(v, j, D) {
              let lt = null;
              if (v instanceof V.FreeTextAnnotationElement) {
                const {
                  data: {
                    defaultAppearanceData: {
                      fontSize: k,
                      fontColor: a
                    },
                    rect: l,
                    rotation: R,
                    id: $
                  },
                  textContent: W,
                  textPosition: nt,
                  parent: {
                    page: {
                      pageNumber: st
                    }
                  }
                } = v;
                if (!W || W.length === 0)
                  return null;
                lt = v = {
                  annotationType: n.AnnotationEditorType.FREETEXT,
                  color: Array.from(a),
                  fontSize: k,
                  value: W.join(`
`),
                  position: nt,
                  pageIndex: st - 1,
                  rect: l,
                  rotation: R,
                  id: $,
                  deleted: !1
                };
              }
              const _t = super.deserialize(v, j, D);
              return it(_t, p, v.fontSize), it(_t, M, n.Util.makeHexColor(...v.color)), it(_t, S, v.value), _t.annotationElementId = v.id || null, it(_t, u, lt), _t;
            }
            serialize(v = !1) {
              if (this.isEmpty())
                return null;
              if (this.deleted)
                return {
                  pageIndex: this.pageIndex,
                  id: this.annotationElementId,
                  deleted: !0
                };
              const j = K._internalPadding * this.parentScale, D = this.getRect(j, j), lt = q.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : t(this, M)), _t = {
                annotationType: n.AnnotationEditorType.FREETEXT,
                color: lt,
                fontSize: t(this, p),
                value: t(this, S),
                pageIndex: this.pageIndex,
                rect: D,
                rotation: this.rotation
              };
              return v ? _t : this.annotationElementId && !X(this, P, cn).call(this, _t) ? null : (_t.id = this.annotationElementId, _t);
            }
          };
          c = new WeakMap(), d = new WeakMap(), r = new WeakMap(), F = new WeakMap(), M = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), u = new WeakMap(), y = new WeakSet(), an = function(v) {
            const j = (lt) => {
              this.editorDiv.style.fontSize = `calc(${lt}px * var(--scale-factor))`, this.translate(0, -(lt - t(this, p)) * this.parentScale), it(this, p, lt), X(this, E, _e).call(this);
            }, D = t(this, p);
            this.addCommands({
              cmd: () => {
                j(v);
              },
              undo: () => {
                j(D);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.FREETEXT_SIZE,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, g = new WeakSet(), on = function(v) {
            const j = t(this, M);
            this.addCommands({
              cmd: () => {
                it(this, M, this.editorDiv.style.color = v);
              },
              undo: () => {
                it(this, M, this.editorDiv.style.color = j);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.FREETEXT_COLOR,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, s = new WeakSet(), ln = function() {
            const v = this.editorDiv.getElementsByTagName("div");
            if (v.length === 0)
              return this.editorDiv.innerText;
            const j = [];
            for (const D of v)
              j.push(D.innerText.replace(/\r\n?|\n/, ""));
            return j.join(`
`);
          }, E = new WeakSet(), _e = function() {
            const [v, j] = this.parentDimensions;
            let D;
            if (this.isAttachedToDOM)
              D = this.div.getBoundingClientRect();
            else {
              const {
                currentLayer: lt,
                div: _t
              } = this, k = _t.style.display;
              _t.style.display = "hidden", lt.div.append(this.div), D = _t.getBoundingClientRect(), _t.remove(), _t.style.display = k;
            }
            this.rotation % 180 === this.parentRotation % 180 ? (this.width = D.width / v, this.height = D.height / j) : (this.width = D.height / v, this.height = D.width / j), this.fixAndSetPosition();
          }, o = new WeakSet(), ai = function() {
            if (this.editorDiv.replaceChildren(), !!t(this, S))
              for (const v of t(this, S).split(`
`)) {
                const j = document.createElement("div");
                j.append(v ? document.createTextNode(v) : document.createElement("br")), this.editorDiv.append(j);
              }
          }, P = new WeakSet(), cn = function(v) {
            const {
              value: j,
              fontSize: D,
              color: lt,
              rect: _t,
              pageIndex: k
            } = t(this, u);
            return v.value !== j || v.fontSize !== D || v.rect.some((a, l) => Math.abs(a - _t[l]) >= 1) || v.color.some((a, l) => a !== lt[l]) || v.pageIndex !== k;
          }, tt = new WeakSet(), oi = function(v = !1) {
            if (!this.annotationElementId)
              return;
            if (X(this, E, _e).call(this), !v && (this.width === 0 || this.height === 0)) {
              setTimeout(() => X(this, tt, oi).call(this, !0), 0);
              return;
            }
            const j = K._internalPadding * this.parentScale;
            t(this, u).rect = this.getRect(j, j);
          }, Zt(K, "_freeTextDefaultContent", ""), Zt(K, "_l10nPromise"), Zt(K, "_internalPadding", 0), Zt(K, "_defaultColor", null), Zt(K, "_defaultFontSize", 10), Zt(K, "_type", "freetext");
          let I = K;
          e.FreeTextEditor = I;
        },
        /* 29 */
        /***/
        (A, e, L) => {
          var l, R, re, W, hn, st, ut, wt, yt, Et, ot, At, St, Rt, Bt, kt, Ut, at, J, rt, dt, xt, li, jt, ci, Nt, hi, $t, Gt, Ct, m, B, ht, Lt, Pt, pt, vt, dn, gt, di;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.StampAnnotationElement = e.InkAnnotationElement = e.FreeTextAnnotationElement = e.AnnotationLayer = void 0;
          var n = L(1), f = L(6), q = L(3), V = L(30), I = L(31), c = L(32);
          const d = 1e3, r = 9, F = /* @__PURE__ */ new WeakSet();
          function M(bt) {
            return {
              width: bt[2] - bt[0],
              height: bt[3] - bt[1]
            };
          }
          class S {
            static create(O) {
              switch (O.data.annotationType) {
                case n.AnnotationType.LINK:
                  return new p(O);
                case n.AnnotationType.TEXT:
                  return new u(O);
                case n.AnnotationType.WIDGET:
                  switch (O.data.fieldType) {
                    case "Tx":
                      return new b(O);
                    case "Btn":
                      return O.data.radioButton ? new s(O) : O.data.checkBox ? new w(O) : new i(O);
                    case "Ch":
                      return new E(O);
                    case "Sig":
                      return new g(O);
                  }
                  return new y(O);
                case n.AnnotationType.POPUP:
                  return new _(O);
                case n.AnnotationType.FREETEXT:
                  return new T(O);
                case n.AnnotationType.LINE:
                  return new P(O);
                case n.AnnotationType.SQUARE:
                  return new Y(O);
                case n.AnnotationType.CIRCLE:
                  return new tt(O);
                case n.AnnotationType.POLYLINE:
                  return new x(O);
                case n.AnnotationType.CARET:
                  return new Z(O);
                case n.AnnotationType.INK:
                  return new Q(O);
                case n.AnnotationType.POLYGON:
                  return new K(O);
                case n.AnnotationType.HIGHLIGHT:
                  return new v(O);
                case n.AnnotationType.UNDERLINE:
                  return new j(O);
                case n.AnnotationType.SQUIGGLY:
                  return new D(O);
                case n.AnnotationType.STRIKEOUT:
                  return new lt(O);
                case n.AnnotationType.STAMP:
                  return new _t(O);
                case n.AnnotationType.FILEATTACHMENT:
                  return new k(O);
                default:
                  return new h(O);
              }
            }
          }
          class h {
            constructor(O, {
              isRenderable: C = !1,
              ignoreBorder: z = !1,
              createQuadrilaterals: H = !1
            } = {}) {
              N(this, l, !1);
              this.isRenderable = C, this.data = O.data, this.layer = O.layer, this.linkService = O.linkService, this.downloadManager = O.downloadManager, this.imageResourcesPath = O.imageResourcesPath, this.renderForms = O.renderForms, this.svgFactory = O.svgFactory, this.annotationStorage = O.annotationStorage, this.enableScripting = O.enableScripting, this.hasJSActions = O.hasJSActions, this._fieldObjects = O.fieldObjects, this.parent = O.parent, C && (this.container = this._createContainer(z)), H && this._createQuadrilaterals();
            }
            _createContainer(O) {
              const {
                data: C,
                parent: {
                  page: z,
                  viewport: H
                }
              } = this, et = document.createElement("section");
              et.setAttribute("data-annotation-id", C.id), et.style.zIndex = this.parent.zIndex++, this.data.popupRef && et.setAttribute("aria-haspopup", "dialog"), C.noRotate && et.classList.add("norotate");
              const {
                pageWidth: ft,
                pageHeight: Mt,
                pageX: G,
                pageY: ct
              } = H.rawDims;
              if (!C.rect || this instanceof _) {
                const {
                  rotation: Vt
                } = C;
                return !C.hasOwnCanvas && Vt !== 0 && this.setRotation(Vt, et), et;
              }
              const {
                width: mt,
                height: It
              } = M(C.rect), Tt = n.Util.normalizeRect([C.rect[0], z.view[3] - C.rect[1] + z.view[1], C.rect[2], z.view[3] - C.rect[3] + z.view[1]]);
              if (!O && C.borderStyle.width > 0) {
                et.style.borderWidth = `${C.borderStyle.width}px`;
                const Vt = C.borderStyle.horizontalCornerRadius, zt = C.borderStyle.verticalCornerRadius;
                if (Vt > 0 || zt > 0) {
                  const qt = `calc(${Vt}px * var(--scale-factor)) / calc(${zt}px * var(--scale-factor))`;
                  et.style.borderRadius = qt;
                } else if (this instanceof s) {
                  const qt = `calc(${mt}px * var(--scale-factor)) / calc(${It}px * var(--scale-factor))`;
                  et.style.borderRadius = qt;
                }
                switch (C.borderStyle.style) {
                  case n.AnnotationBorderStyleType.SOLID:
                    et.style.borderStyle = "solid";
                    break;
                  case n.AnnotationBorderStyleType.DASHED:
                    et.style.borderStyle = "dashed";
                    break;
                  case n.AnnotationBorderStyleType.BEVELED:
                    (0, n.warn)("Unimplemented border style: beveled");
                    break;
                  case n.AnnotationBorderStyleType.INSET:
                    (0, n.warn)("Unimplemented border style: inset");
                    break;
                  case n.AnnotationBorderStyleType.UNDERLINE:
                    et.style.borderBottomStyle = "solid";
                    break;
                }
                const Xt = C.borderColor || null;
                Xt ? (it(this, l, !0), et.style.borderColor = n.Util.makeHexColor(Xt[0] | 0, Xt[1] | 0, Xt[2] | 0)) : et.style.borderWidth = 0;
              }
              et.style.left = `${100 * (Tt[0] - G) / ft}%`, et.style.top = `${100 * (Tt[1] - ct) / Mt}%`;
              const {
                rotation: Dt
              } = C;
              return C.hasOwnCanvas || Dt === 0 ? (et.style.width = `${100 * mt / ft}%`, et.style.height = `${100 * It / Mt}%`) : this.setRotation(Dt, et), et;
            }
            setRotation(O, C = this.container) {
              if (!this.data.rect)
                return;
              const {
                pageWidth: z,
                pageHeight: H
              } = this.parent.viewport.rawDims, {
                width: et,
                height: ft
              } = M(this.data.rect);
              let Mt, G;
              O % 180 === 0 ? (Mt = 100 * et / z, G = 100 * ft / H) : (Mt = 100 * ft / z, G = 100 * et / H), C.style.width = `${Mt}%`, C.style.height = `${G}%`, C.setAttribute("data-main-rotation", (360 - O) % 360);
            }
            get _commonActions() {
              const O = (C, z, H) => {
                const et = H.detail[C], ft = et[0], Mt = et.slice(1);
                H.target.style[z] = V.ColorConverters[`${ft}_HTML`](Mt), this.annotationStorage.setValue(this.data.id, {
                  [z]: V.ColorConverters[`${ft}_rgb`](Mt)
                });
              };
              return (0, n.shadow)(this, "_commonActions", {
                display: (C) => {
                  const {
                    display: z
                  } = C.detail, H = z % 2 === 1;
                  this.container.style.visibility = H ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                    noView: H,
                    noPrint: z === 1 || z === 2
                  });
                },
                print: (C) => {
                  this.annotationStorage.setValue(this.data.id, {
                    noPrint: !C.detail.print
                  });
                },
                hidden: (C) => {
                  const {
                    hidden: z
                  } = C.detail;
                  this.container.style.visibility = z ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                    noPrint: z,
                    noView: z
                  });
                },
                focus: (C) => {
                  setTimeout(() => C.target.focus({
                    preventScroll: !1
                  }), 0);
                },
                userName: (C) => {
                  C.target.title = C.detail.userName;
                },
                readonly: (C) => {
                  C.target.disabled = C.detail.readonly;
                },
                required: (C) => {
                  this._setRequired(C.target, C.detail.required);
                },
                bgColor: (C) => {
                  O("bgColor", "backgroundColor", C);
                },
                fillColor: (C) => {
                  O("fillColor", "backgroundColor", C);
                },
                fgColor: (C) => {
                  O("fgColor", "color", C);
                },
                textColor: (C) => {
                  O("textColor", "color", C);
                },
                borderColor: (C) => {
                  O("borderColor", "borderColor", C);
                },
                strokeColor: (C) => {
                  O("strokeColor", "borderColor", C);
                },
                rotation: (C) => {
                  const z = C.detail.rotation;
                  this.setRotation(z), this.annotationStorage.setValue(this.data.id, {
                    rotation: z
                  });
                }
              });
            }
            _dispatchEventFromSandbox(O, C) {
              const z = this._commonActions;
              for (const H of Object.keys(C.detail)) {
                const et = O[H] || z[H];
                et == null || et(C);
              }
            }
            _setDefaultPropertiesFromJS(O) {
              if (!this.enableScripting)
                return;
              const C = this.annotationStorage.getRawValue(this.data.id);
              if (!C)
                return;
              const z = this._commonActions;
              for (const [H, et] of Object.entries(C)) {
                const ft = z[H];
                if (ft) {
                  const Mt = {
                    detail: {
                      [H]: et
                    },
                    target: O
                  };
                  ft(Mt), delete C[H];
                }
              }
            }
            _createQuadrilaterals() {
              if (!this.container)
                return;
              const {
                quadPoints: O
              } = this.data;
              if (!O)
                return;
              const [C, z, H, et] = this.data.rect;
              if (O.length === 1) {
                const [, {
                  x: zt,
                  y: Xt
                }, {
                  x: qt,
                  y: Qt
                }] = O[0];
                if (H === zt && et === Xt && C === qt && z === Qt)
                  return;
              }
              const {
                style: ft
              } = this.container;
              let Mt;
              if (t(this, l)) {
                const {
                  borderColor: zt,
                  borderWidth: Xt
                } = ft;
                ft.borderWidth = 0, Mt = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${zt}" stroke-width="${Xt}">`], this.container.classList.add("hasBorder");
              }
              const G = H - C, ct = et - z, {
                svgFactory: mt
              } = this, It = mt.createElement("svg");
              It.classList.add("quadrilateralsContainer"), It.setAttribute("width", 0), It.setAttribute("height", 0);
              const Tt = mt.createElement("defs");
              It.append(Tt);
              const Dt = mt.createElement("clipPath"), Vt = `clippath_${this.data.id}`;
              Dt.setAttribute("id", Vt), Dt.setAttribute("clipPathUnits", "objectBoundingBox"), Tt.append(Dt);
              for (const [, {
                x: zt,
                y: Xt
              }, {
                x: qt,
                y: Qt
              }] of O) {
                const Yt = mt.createElement("rect"), Kt = (qt - C) / G, te = (et - Xt) / ct, Jt = (zt - qt) / G, ee = (Xt - Qt) / ct;
                Yt.setAttribute("x", Kt), Yt.setAttribute("y", te), Yt.setAttribute("width", Jt), Yt.setAttribute("height", ee), Dt.append(Yt), Mt == null || Mt.push(`<rect vector-effect="non-scaling-stroke" x="${Kt}" y="${te}" width="${Jt}" height="${ee}"/>`);
              }
              t(this, l) && (Mt.push("</g></svg>')"), ft.backgroundImage = Mt.join("")), this.container.append(It), this.container.style.clipPath = `url(#${Vt})`;
            }
            _createPopup() {
              const {
                container: O,
                data: C
              } = this;
              O.setAttribute("aria-haspopup", "dialog");
              const z = new _({
                data: {
                  color: C.color,
                  titleObj: C.titleObj,
                  modificationDate: C.modificationDate,
                  contentsObj: C.contentsObj,
                  richText: C.richText,
                  parentRect: C.rect,
                  borderStyle: 0,
                  id: `popup_${C.id}`,
                  rotation: C.rotation
                },
                parent: this.parent,
                elements: [this]
              });
              this.parent.div.append(z.render());
            }
            render() {
              (0, n.unreachable)("Abstract method `AnnotationElement.render` called");
            }
            _getElementsByName(O, C = null) {
              const z = [];
              if (this._fieldObjects) {
                const H = this._fieldObjects[O];
                if (H)
                  for (const {
                    page: et,
                    id: ft,
                    exportValues: Mt
                  } of H) {
                    if (et === -1 || ft === C)
                      continue;
                    const G = typeof Mt == "string" ? Mt : null, ct = document.querySelector(`[data-element-id="${ft}"]`);
                    if (ct && !F.has(ct)) {
                      (0, n.warn)(`_getElementsByName - element not allowed: ${ft}`);
                      continue;
                    }
                    z.push({
                      id: ft,
                      exportValue: G,
                      domElement: ct
                    });
                  }
                return z;
              }
              for (const H of document.getElementsByName(O)) {
                const {
                  exportValue: et
                } = H, ft = H.getAttribute("data-element-id");
                ft !== C && F.has(H) && z.push({
                  id: ft,
                  exportValue: et,
                  domElement: H
                });
              }
              return z;
            }
            show() {
              var O;
              this.container && (this.container.hidden = !1), (O = this.popup) == null || O.maybeShow();
            }
            hide() {
              var O;
              this.container && (this.container.hidden = !0), (O = this.popup) == null || O.forceHide();
            }
            getElementsToTriggerPopup() {
              return this.container;
            }
            addHighlightArea() {
              const O = this.getElementsToTriggerPopup();
              if (Array.isArray(O))
                for (const C of O)
                  C.classList.add("highlightArea");
              else
                O.classList.add("highlightArea");
            }
            _editOnDoubleClick() {
              const {
                annotationEditorType: O,
                data: {
                  id: C
                }
              } = this;
              this.container.addEventListener("dblclick", () => {
                var z;
                (z = this.linkService.eventBus) == null || z.dispatch("switchannotationeditormode", {
                  source: this,
                  mode: O,
                  editId: C
                });
              });
            }
          }
          l = new WeakMap();
          class p extends h {
            constructor(C, z = null) {
              super(C, {
                isRenderable: !0,
                ignoreBorder: !!(z != null && z.ignoreBorder),
                createQuadrilaterals: !0
              });
              N(this, R);
              N(this, W);
              this.isTooltipOnly = C.data.isTooltipOnly;
            }
            render() {
              const {
                data: C,
                linkService: z
              } = this, H = document.createElement("a");
              H.setAttribute("data-element-id", C.id);
              let et = !1;
              return C.url ? (z.addLinkAttributes(H, C.url, C.newWindow), et = !0) : C.action ? (this._bindNamedAction(H, C.action), et = !0) : C.attachment ? (this._bindAttachment(H, C.attachment), et = !0) : C.setOCGState ? (X(this, W, hn).call(this, H, C.setOCGState), et = !0) : C.dest ? (this._bindLink(H, C.dest), et = !0) : (C.actions && (C.actions.Action || C.actions["Mouse Up"] || C.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(H, C), et = !0), C.resetForm ? (this._bindResetFormAction(H, C.resetForm), et = !0) : this.isTooltipOnly && !et && (this._bindLink(H, ""), et = !0)), this.container.classList.add("linkAnnotation"), et && this.container.append(H), this.container;
            }
            _bindLink(C, z) {
              C.href = this.linkService.getDestinationHash(z), C.onclick = () => (z && this.linkService.goToDestination(z), !1), (z || z === "") && X(this, R, re).call(this);
            }
            _bindNamedAction(C, z) {
              C.href = this.linkService.getAnchorUrl(""), C.onclick = () => (this.linkService.executeNamedAction(z), !1), X(this, R, re).call(this);
            }
            _bindAttachment(C, z) {
              C.href = this.linkService.getAnchorUrl(""), C.onclick = () => {
                var H;
                return (H = this.downloadManager) == null || H.openOrDownloadData(this.container, z.content, z.filename), !1;
              }, X(this, R, re).call(this);
            }
            _bindJSAction(C, z) {
              C.href = this.linkService.getAnchorUrl("");
              const H = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
              for (const et of Object.keys(z.actions)) {
                const ft = H.get(et);
                ft && (C[ft] = () => {
                  var Mt;
                  return (Mt = this.linkService.eventBus) == null || Mt.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: z.id,
                      name: et
                    }
                  }), !1;
                });
              }
              C.onclick || (C.onclick = () => !1), X(this, R, re).call(this);
            }
            _bindResetFormAction(C, z) {
              const H = C.onclick;
              if (H || (C.href = this.linkService.getAnchorUrl("")), X(this, R, re).call(this), !this._fieldObjects) {
                (0, n.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), H || (C.onclick = () => !1);
                return;
              }
              C.onclick = () => {
                var It;
                H == null || H();
                const {
                  fields: et,
                  refs: ft,
                  include: Mt
                } = z, G = [];
                if (et.length !== 0 || ft.length !== 0) {
                  const Tt = new Set(ft);
                  for (const Dt of et) {
                    const Vt = this._fieldObjects[Dt] || [];
                    for (const {
                      id: zt
                    } of Vt)
                      Tt.add(zt);
                  }
                  for (const Dt of Object.values(this._fieldObjects))
                    for (const Vt of Dt)
                      Tt.has(Vt.id) === Mt && G.push(Vt);
                } else
                  for (const Tt of Object.values(this._fieldObjects))
                    G.push(...Tt);
                const ct = this.annotationStorage, mt = [];
                for (const Tt of G) {
                  const {
                    id: Dt
                  } = Tt;
                  switch (mt.push(Dt), Tt.type) {
                    case "text": {
                      const zt = Tt.defaultValue || "";
                      ct.setValue(Dt, {
                        value: zt
                      });
                      break;
                    }
                    case "checkbox":
                    case "radiobutton": {
                      const zt = Tt.defaultValue === Tt.exportValues;
                      ct.setValue(Dt, {
                        value: zt
                      });
                      break;
                    }
                    case "combobox":
                    case "listbox": {
                      const zt = Tt.defaultValue || "";
                      ct.setValue(Dt, {
                        value: zt
                      });
                      break;
                    }
                    default:
                      continue;
                  }
                  const Vt = document.querySelector(`[data-element-id="${Dt}"]`);
                  if (Vt) {
                    if (!F.has(Vt)) {
                      (0, n.warn)(`_bindResetFormAction - element not allowed: ${Dt}`);
                      continue;
                    }
                  } else
                    continue;
                  Vt.dispatchEvent(new Event("resetform"));
                }
                return this.enableScripting && ((It = this.linkService.eventBus) == null || It.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: "app",
                    ids: mt,
                    name: "ResetForm"
                  }
                })), !1;
              };
            }
          }
          R = new WeakSet(), re = function() {
            this.container.setAttribute("data-internal-link", "");
          }, W = new WeakSet(), hn = function(C, z) {
            C.href = this.linkService.getAnchorUrl(""), C.onclick = () => (this.linkService.executeSetOCGState(z), !1), X(this, R, re).call(this);
          };
          class u extends h {
            constructor(O) {
              var z, H, et;
              const C = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: C
              });
            }
            render() {
              this.container.classList.add("textAnnotation");
              const O = document.createElement("img");
              return O.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", O.alt = "[{{type}} Annotation]", O.dataset.l10nId = "text_annotation_type", O.dataset.l10nArgs = JSON.stringify({
                type: this.data.name
              }), this.data.popupRef || this._createPopup(), this.container.append(O), this.container;
            }
          }
          class y extends h {
            render() {
              return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container;
            }
            showElementAndHideCanvas(O) {
              var C;
              this.data.hasOwnCanvas && (((C = O.previousSibling) == null ? void 0 : C.nodeName) === "CANVAS" && (O.previousSibling.hidden = !0), O.hidden = !1);
            }
            _getKeyModifier(O) {
              const {
                isWin: C,
                isMac: z
              } = n.FeatureTest.platform;
              return C && O.ctrlKey || z && O.metaKey;
            }
            _setEventListener(O, C, z, H) {
              C.includes("mouse") ? O.addEventListener(C, (et) => {
                var ft;
                (ft = this.linkService.eventBus) == null || ft.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: this.data.id,
                    name: z,
                    value: H(et),
                    shift: et.shiftKey,
                    modifier: this._getKeyModifier(et)
                  }
                });
              }) : O.addEventListener(C, (et) => {
                var ft;
                (ft = this.linkService.eventBus) == null || ft.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: this.data.id,
                    name: z,
                    value: H(et)
                  }
                });
              });
            }
            _setEventListeners(O, C, z) {
              var H;
              for (const [et, ft] of C)
                (ft === "Action" || (H = this.data.actions) != null && H[ft]) && this._setEventListener(O, et, ft, z);
            }
            _setBackgroundColor(O) {
              const C = this.data.backgroundColor || null;
              O.style.backgroundColor = C === null ? "transparent" : n.Util.makeHexColor(C[0], C[1], C[2]);
            }
            _setTextStyle(O) {
              const C = ["left", "center", "right"], {
                fontColor: z
              } = this.data.defaultAppearanceData, H = this.data.defaultAppearanceData.fontSize || r, et = O.style;
              let ft;
              const Mt = 2, G = (ct) => Math.round(10 * ct) / 10;
              if (this.data.multiLine) {
                const ct = Math.abs(this.data.rect[3] - this.data.rect[1] - Mt), mt = Math.round(ct / (n.LINE_FACTOR * H)) || 1, It = ct / mt;
                ft = Math.min(H, G(It / n.LINE_FACTOR));
              } else {
                const ct = Math.abs(this.data.rect[3] - this.data.rect[1] - Mt);
                ft = Math.min(H, G(ct / n.LINE_FACTOR));
              }
              et.fontSize = `calc(${ft}px * var(--scale-factor))`, et.color = n.Util.makeHexColor(z[0], z[1], z[2]), this.data.textAlignment !== null && (et.textAlign = C[this.data.textAlignment]);
            }
            _setRequired(O, C) {
              C ? O.setAttribute("required", !0) : O.removeAttribute("required"), O.setAttribute("aria-required", C);
            }
          }
          class b extends y {
            constructor(O) {
              const C = O.renderForms || !O.data.hasAppearance && !!O.data.fieldValue;
              super(O, {
                isRenderable: C
              });
            }
            setPropertyOnSiblings(O, C, z, H) {
              const et = this.annotationStorage;
              for (const ft of this._getElementsByName(O.name, O.id))
                ft.domElement && (ft.domElement[C] = z), et.setValue(ft.id, {
                  [H]: z
                });
            }
            render() {
              var H, et;
              const O = this.annotationStorage, C = this.data.id;
              this.container.classList.add("textWidgetAnnotation");
              let z = null;
              if (this.renderForms) {
                const ft = O.getValue(C, {
                  value: this.data.fieldValue
                });
                let Mt = ft.value || "";
                const G = O.getValue(C, {
                  charLimit: this.data.maxLen
                }).charLimit;
                G && Mt.length > G && (Mt = Mt.slice(0, G));
                let ct = ft.formattedValue || ((H = this.data.textContent) == null ? void 0 : H.join(`
`)) || null;
                ct && this.data.comb && (ct = ct.replaceAll(/\s+/g, ""));
                const mt = {
                  userValue: Mt,
                  formattedValue: ct,
                  lastCommittedValue: null,
                  commitKey: 1
                };
                this.data.multiLine ? (z = document.createElement("textarea"), z.textContent = ct ?? Mt, this.data.doNotScroll && (z.style.overflowY = "hidden")) : (z = document.createElement("input"), z.type = "text", z.setAttribute("value", ct ?? Mt), this.data.doNotScroll && (z.style.overflowX = "hidden")), this.data.hasOwnCanvas && (z.hidden = !0), F.add(z), z.setAttribute("data-element-id", C), z.disabled = this.data.readOnly, z.name = this.data.fieldName, z.tabIndex = d, this._setRequired(z, this.data.required), G && (z.maxLength = G), z.addEventListener("input", (Tt) => {
                  O.setValue(C, {
                    value: Tt.target.value
                  }), this.setPropertyOnSiblings(z, "value", Tt.target.value, "value"), mt.formattedValue = null;
                }), z.addEventListener("resetform", (Tt) => {
                  const Dt = this.data.defaultFieldValue ?? "";
                  z.value = mt.userValue = Dt, mt.formattedValue = null;
                });
                let It = (Tt) => {
                  const {
                    formattedValue: Dt
                  } = mt;
                  Dt != null && (Tt.target.value = Dt), Tt.target.scrollLeft = 0;
                };
                if (this.enableScripting && this.hasJSActions) {
                  z.addEventListener("focus", (Dt) => {
                    const {
                      target: Vt
                    } = Dt;
                    mt.userValue && (Vt.value = mt.userValue), mt.lastCommittedValue = Vt.value, mt.commitKey = 1;
                  }), z.addEventListener("updatefromsandbox", (Dt) => {
                    this.showElementAndHideCanvas(Dt.target);
                    const Vt = {
                      value(zt) {
                        mt.userValue = zt.detail.value ?? "", O.setValue(C, {
                          value: mt.userValue.toString()
                        }), zt.target.value = mt.userValue;
                      },
                      formattedValue(zt) {
                        const {
                          formattedValue: Xt
                        } = zt.detail;
                        mt.formattedValue = Xt, Xt != null && zt.target !== document.activeElement && (zt.target.value = Xt), O.setValue(C, {
                          formattedValue: Xt
                        });
                      },
                      selRange(zt) {
                        zt.target.setSelectionRange(...zt.detail.selRange);
                      },
                      charLimit: (zt) => {
                        var Yt;
                        const {
                          charLimit: Xt
                        } = zt.detail, {
                          target: qt
                        } = zt;
                        if (Xt === 0) {
                          qt.removeAttribute("maxLength");
                          return;
                        }
                        qt.setAttribute("maxLength", Xt);
                        let Qt = mt.userValue;
                        !Qt || Qt.length <= Xt || (Qt = Qt.slice(0, Xt), qt.value = mt.userValue = Qt, O.setValue(C, {
                          value: Qt
                        }), (Yt = this.linkService.eventBus) == null || Yt.dispatch("dispatcheventinsandbox", {
                          source: this,
                          detail: {
                            id: C,
                            name: "Keystroke",
                            value: Qt,
                            willCommit: !0,
                            commitKey: 1,
                            selStart: qt.selectionStart,
                            selEnd: qt.selectionEnd
                          }
                        }));
                      }
                    };
                    this._dispatchEventFromSandbox(Vt, Dt);
                  }), z.addEventListener("keydown", (Dt) => {
                    var Xt;
                    mt.commitKey = 1;
                    let Vt = -1;
                    if (Dt.key === "Escape" ? Vt = 0 : Dt.key === "Enter" && !this.data.multiLine ? Vt = 2 : Dt.key === "Tab" && (mt.commitKey = 3), Vt === -1)
                      return;
                    const {
                      value: zt
                    } = Dt.target;
                    mt.lastCommittedValue !== zt && (mt.lastCommittedValue = zt, mt.userValue = zt, (Xt = this.linkService.eventBus) == null || Xt.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: C,
                        name: "Keystroke",
                        value: zt,
                        willCommit: !0,
                        commitKey: Vt,
                        selStart: Dt.target.selectionStart,
                        selEnd: Dt.target.selectionEnd
                      }
                    }));
                  });
                  const Tt = It;
                  It = null, z.addEventListener("blur", (Dt) => {
                    var zt;
                    if (!Dt.relatedTarget)
                      return;
                    const {
                      value: Vt
                    } = Dt.target;
                    mt.userValue = Vt, mt.lastCommittedValue !== Vt && ((zt = this.linkService.eventBus) == null || zt.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: C,
                        name: "Keystroke",
                        value: Vt,
                        willCommit: !0,
                        commitKey: mt.commitKey,
                        selStart: Dt.target.selectionStart,
                        selEnd: Dt.target.selectionEnd
                      }
                    })), Tt(Dt);
                  }), (et = this.data.actions) != null && et.Keystroke && z.addEventListener("beforeinput", (Dt) => {
                    var te;
                    mt.lastCommittedValue = null;
                    const {
                      data: Vt,
                      target: zt
                    } = Dt, {
                      value: Xt,
                      selectionStart: qt,
                      selectionEnd: Qt
                    } = zt;
                    let Yt = qt, Kt = Qt;
                    switch (Dt.inputType) {
                      case "deleteWordBackward": {
                        const Jt = Xt.substring(0, qt).match(/\w*[^\w]*$/);
                        Jt && (Yt -= Jt[0].length);
                        break;
                      }
                      case "deleteWordForward": {
                        const Jt = Xt.substring(qt).match(/^[^\w]*\w*/);
                        Jt && (Kt += Jt[0].length);
                        break;
                      }
                      case "deleteContentBackward":
                        qt === Qt && (Yt -= 1);
                        break;
                      case "deleteContentForward":
                        qt === Qt && (Kt += 1);
                        break;
                    }
                    Dt.preventDefault(), (te = this.linkService.eventBus) == null || te.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: C,
                        name: "Keystroke",
                        value: Xt,
                        change: Vt || "",
                        willCommit: !1,
                        selStart: Yt,
                        selEnd: Kt
                      }
                    });
                  }), this._setEventListeners(z, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (Dt) => Dt.target.value);
                }
                if (It && z.addEventListener("blur", It), this.data.comb) {
                  const Dt = (this.data.rect[2] - this.data.rect[0]) / G;
                  z.classList.add("comb"), z.style.letterSpacing = `calc(${Dt}px * var(--scale-factor) - 1ch)`;
                }
              } else
                z = document.createElement("div"), z.textContent = this.data.fieldValue, z.style.verticalAlign = "middle", z.style.display = "table-cell";
              return this._setTextStyle(z), this._setBackgroundColor(z), this._setDefaultPropertiesFromJS(z), this.container.append(z), this.container;
            }
          }
          class g extends y {
            constructor(O) {
              super(O, {
                isRenderable: !!O.data.hasOwnCanvas
              });
            }
          }
          class w extends y {
            constructor(O) {
              super(O, {
                isRenderable: O.renderForms
              });
            }
            render() {
              const O = this.annotationStorage, C = this.data, z = C.id;
              let H = O.getValue(z, {
                value: C.exportValue === C.fieldValue
              }).value;
              typeof H == "string" && (H = H !== "Off", O.setValue(z, {
                value: H
              })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
              const et = document.createElement("input");
              return F.add(et), et.setAttribute("data-element-id", z), et.disabled = C.readOnly, this._setRequired(et, this.data.required), et.type = "checkbox", et.name = C.fieldName, H && et.setAttribute("checked", !0), et.setAttribute("exportValue", C.exportValue), et.tabIndex = d, et.addEventListener("change", (ft) => {
                const {
                  name: Mt,
                  checked: G
                } = ft.target;
                for (const ct of this._getElementsByName(Mt, z)) {
                  const mt = G && ct.exportValue === C.exportValue;
                  ct.domElement && (ct.domElement.checked = mt), O.setValue(ct.id, {
                    value: mt
                  });
                }
                O.setValue(z, {
                  value: G
                });
              }), et.addEventListener("resetform", (ft) => {
                const Mt = C.defaultFieldValue || "Off";
                ft.target.checked = Mt === C.exportValue;
              }), this.enableScripting && this.hasJSActions && (et.addEventListener("updatefromsandbox", (ft) => {
                const Mt = {
                  value(G) {
                    G.target.checked = G.detail.value !== "Off", O.setValue(z, {
                      value: G.target.checked
                    });
                  }
                };
                this._dispatchEventFromSandbox(Mt, ft);
              }), this._setEventListeners(et, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (ft) => ft.target.checked)), this._setBackgroundColor(et), this._setDefaultPropertiesFromJS(et), this.container.append(et), this.container;
            }
          }
          class s extends y {
            constructor(O) {
              super(O, {
                isRenderable: O.renderForms
              });
            }
            render() {
              this.container.classList.add("buttonWidgetAnnotation", "radioButton");
              const O = this.annotationStorage, C = this.data, z = C.id;
              let H = O.getValue(z, {
                value: C.fieldValue === C.buttonValue
              }).value;
              typeof H == "string" && (H = H !== C.buttonValue, O.setValue(z, {
                value: H
              }));
              const et = document.createElement("input");
              if (F.add(et), et.setAttribute("data-element-id", z), et.disabled = C.readOnly, this._setRequired(et, this.data.required), et.type = "radio", et.name = C.fieldName, H && et.setAttribute("checked", !0), et.tabIndex = d, et.addEventListener("change", (ft) => {
                const {
                  name: Mt,
                  checked: G
                } = ft.target;
                for (const ct of this._getElementsByName(Mt, z))
                  O.setValue(ct.id, {
                    value: !1
                  });
                O.setValue(z, {
                  value: G
                });
              }), et.addEventListener("resetform", (ft) => {
                const Mt = C.defaultFieldValue;
                ft.target.checked = Mt != null && Mt === C.buttonValue;
              }), this.enableScripting && this.hasJSActions) {
                const ft = C.buttonValue;
                et.addEventListener("updatefromsandbox", (Mt) => {
                  const G = {
                    value: (ct) => {
                      const mt = ft === ct.detail.value;
                      for (const It of this._getElementsByName(ct.target.name)) {
                        const Tt = mt && It.id === z;
                        It.domElement && (It.domElement.checked = Tt), O.setValue(It.id, {
                          value: Tt
                        });
                      }
                    }
                  };
                  this._dispatchEventFromSandbox(G, Mt);
                }), this._setEventListeners(et, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (Mt) => Mt.target.checked);
              }
              return this._setBackgroundColor(et), this._setDefaultPropertiesFromJS(et), this.container.append(et), this.container;
            }
          }
          class i extends p {
            constructor(O) {
              super(O, {
                ignoreBorder: O.data.hasAppearance
              });
            }
            render() {
              const O = super.render();
              O.classList.add("buttonWidgetAnnotation", "pushButton"), this.data.alternativeText && (O.title = this.data.alternativeText);
              const C = O.lastChild;
              return this.enableScripting && this.hasJSActions && C && (this._setDefaultPropertiesFromJS(C), C.addEventListener("updatefromsandbox", (z) => {
                this._dispatchEventFromSandbox({}, z);
              })), O;
            }
          }
          class E extends y {
            constructor(O) {
              super(O, {
                isRenderable: O.renderForms
              });
            }
            render() {
              this.container.classList.add("choiceWidgetAnnotation");
              const O = this.annotationStorage, C = this.data.id, z = O.getValue(C, {
                value: this.data.fieldValue
              }), H = document.createElement("select");
              F.add(H), H.setAttribute("data-element-id", C), H.disabled = this.data.readOnly, this._setRequired(H, this.data.required), H.name = this.data.fieldName, H.tabIndex = d;
              let et = this.data.combo && this.data.options.length > 0;
              this.data.combo || (H.size = this.data.options.length, this.data.multiSelect && (H.multiple = !0)), H.addEventListener("resetform", (mt) => {
                const It = this.data.defaultFieldValue;
                for (const Tt of H.options)
                  Tt.selected = Tt.value === It;
              });
              for (const mt of this.data.options) {
                const It = document.createElement("option");
                It.textContent = mt.displayValue, It.value = mt.exportValue, z.value.includes(mt.exportValue) && (It.setAttribute("selected", !0), et = !1), H.append(It);
              }
              let ft = null;
              if (et) {
                const mt = document.createElement("option");
                mt.value = " ", mt.setAttribute("hidden", !0), mt.setAttribute("selected", !0), H.prepend(mt), ft = () => {
                  mt.remove(), H.removeEventListener("input", ft), ft = null;
                }, H.addEventListener("input", ft);
              }
              const Mt = (mt) => {
                const It = mt ? "value" : "textContent", {
                  options: Tt,
                  multiple: Dt
                } = H;
                return Dt ? Array.prototype.filter.call(Tt, (Vt) => Vt.selected).map((Vt) => Vt[It]) : Tt.selectedIndex === -1 ? null : Tt[Tt.selectedIndex][It];
              };
              let G = Mt(!1);
              const ct = (mt) => {
                const It = mt.target.options;
                return Array.prototype.map.call(It, (Tt) => ({
                  displayValue: Tt.textContent,
                  exportValue: Tt.value
                }));
              };
              return this.enableScripting && this.hasJSActions ? (H.addEventListener("updatefromsandbox", (mt) => {
                const It = {
                  value(Tt) {
                    ft == null || ft();
                    const Dt = Tt.detail.value, Vt = new Set(Array.isArray(Dt) ? Dt : [Dt]);
                    for (const zt of H.options)
                      zt.selected = Vt.has(zt.value);
                    O.setValue(C, {
                      value: Mt(!0)
                    }), G = Mt(!1);
                  },
                  multipleSelection(Tt) {
                    H.multiple = !0;
                  },
                  remove(Tt) {
                    const Dt = H.options, Vt = Tt.detail.remove;
                    Dt[Vt].selected = !1, H.remove(Vt), Dt.length > 0 && Array.prototype.findIndex.call(Dt, (Xt) => Xt.selected) === -1 && (Dt[0].selected = !0), O.setValue(C, {
                      value: Mt(!0),
                      items: ct(Tt)
                    }), G = Mt(!1);
                  },
                  clear(Tt) {
                    for (; H.length !== 0; )
                      H.remove(0);
                    O.setValue(C, {
                      value: null,
                      items: []
                    }), G = Mt(!1);
                  },
                  insert(Tt) {
                    const {
                      index: Dt,
                      displayValue: Vt,
                      exportValue: zt
                    } = Tt.detail.insert, Xt = H.children[Dt], qt = document.createElement("option");
                    qt.textContent = Vt, qt.value = zt, Xt ? Xt.before(qt) : H.append(qt), O.setValue(C, {
                      value: Mt(!0),
                      items: ct(Tt)
                    }), G = Mt(!1);
                  },
                  items(Tt) {
                    const {
                      items: Dt
                    } = Tt.detail;
                    for (; H.length !== 0; )
                      H.remove(0);
                    for (const Vt of Dt) {
                      const {
                        displayValue: zt,
                        exportValue: Xt
                      } = Vt, qt = document.createElement("option");
                      qt.textContent = zt, qt.value = Xt, H.append(qt);
                    }
                    H.options.length > 0 && (H.options[0].selected = !0), O.setValue(C, {
                      value: Mt(!0),
                      items: ct(Tt)
                    }), G = Mt(!1);
                  },
                  indices(Tt) {
                    const Dt = new Set(Tt.detail.indices);
                    for (const Vt of Tt.target.options)
                      Vt.selected = Dt.has(Vt.index);
                    O.setValue(C, {
                      value: Mt(!0)
                    }), G = Mt(!1);
                  },
                  editable(Tt) {
                    Tt.target.disabled = !Tt.detail.editable;
                  }
                };
                this._dispatchEventFromSandbox(It, mt);
              }), H.addEventListener("input", (mt) => {
                var Tt;
                const It = Mt(!0);
                O.setValue(C, {
                  value: It
                }), mt.preventDefault(), (Tt = this.linkService.eventBus) == null || Tt.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: C,
                    name: "Keystroke",
                    value: G,
                    changeEx: It,
                    willCommit: !1,
                    commitKey: 1,
                    keyDown: !1
                  }
                });
              }), this._setEventListeners(H, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (mt) => mt.target.value)) : H.addEventListener("input", function(mt) {
                O.setValue(C, {
                  value: Mt(!0)
                });
              }), this.data.combo && this._setTextStyle(H), this._setBackgroundColor(H), this._setDefaultPropertiesFromJS(H), this.container.append(H), this.container;
            }
          }
          class _ extends h {
            constructor(O) {
              var et, ft, Mt;
              const {
                data: C,
                elements: z
              } = O, H = !!((et = C.titleObj) != null && et.str || (ft = C.contentsObj) != null && ft.str || (Mt = C.richText) != null && Mt.str);
              super(O, {
                isRenderable: H
              }), this.elements = z;
            }
            render() {
              this.container.classList.add("popupAnnotation");
              const O = new o({
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
              }), C = [];
              for (const z of this.elements)
                z.popup = O, C.push(z.data.id), z.addHighlightArea();
              return this.container.setAttribute("aria-controls", C.join(",")), this.container;
            }
          }
          class o {
            constructor({
              container: O,
              color: C,
              elements: z,
              titleObj: H,
              modificationDate: et,
              contentsObj: ft,
              richText: Mt,
              parent: G,
              rect: ct,
              parentRect: mt,
              open: It
            }) {
              N(this, xt);
              N(this, jt);
              N(this, Nt);
              N(this, st, null);
              N(this, ut, X(this, Nt, hi).bind(this));
              N(this, wt, X(this, jt, ci).bind(this));
              N(this, yt, X(this, xt, li).bind(this));
              N(this, Et, null);
              N(this, ot, null);
              N(this, At, null);
              N(this, St, null);
              N(this, Rt, null);
              N(this, Bt, null);
              N(this, kt, !1);
              N(this, Ut, null);
              N(this, at, null);
              N(this, J, null);
              N(this, rt, null);
              N(this, dt, !1);
              it(this, ot, O), it(this, rt, H), it(this, At, ft), it(this, J, Mt), it(this, Rt, G), it(this, Et, C), it(this, at, ct), it(this, Bt, mt), it(this, St, z);
              const Tt = f.PDFDateString.toDateObject(et);
              Tt && it(this, st, G.l10n.get("annotation_date_string", {
                date: Tt.toLocaleDateString(),
                time: Tt.toLocaleTimeString()
              })), this.trigger = z.flatMap((Dt) => Dt.getElementsToTriggerPopup());
              for (const Dt of this.trigger)
                Dt.addEventListener("click", t(this, yt)), Dt.addEventListener("mouseenter", t(this, wt)), Dt.addEventListener("mouseleave", t(this, ut));
              t(this, ot).hidden = !0, It && X(this, xt, li).call(this);
            }
            render() {
              if (t(this, Ut))
                return;
              const {
                page: {
                  view: O
                },
                viewport: {
                  rawDims: {
                    pageWidth: C,
                    pageHeight: z,
                    pageX: H,
                    pageY: et
                  }
                }
              } = t(this, Rt), ft = it(this, Ut, document.createElement("div"));
              if (ft.className = "popup", t(this, Et)) {
                const Yt = ft.style.outlineColor = n.Util.makeHexColor(...t(this, Et));
                CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? ft.style.backgroundColor = `color-mix(in srgb, ${Yt} 30%, white)` : ft.style.backgroundColor = n.Util.makeHexColor(...t(this, Et).map((te) => Math.floor(0.7 * (255 - te) + te)));
              }
              const Mt = document.createElement("span");
              Mt.className = "header";
              const G = document.createElement("h1");
              if (Mt.append(G), {
                dir: G.dir,
                str: G.textContent
              } = t(this, rt), ft.append(Mt), t(this, st)) {
                const Yt = document.createElement("span");
                Yt.classList.add("popupDate"), t(this, st).then((Kt) => {
                  Yt.textContent = Kt;
                }), Mt.append(Yt);
              }
              const ct = t(this, At), mt = t(this, J);
              if (mt != null && mt.str && (!(ct != null && ct.str) || ct.str === mt.str))
                c.XfaLayer.render({
                  xfaHtml: mt.html,
                  intent: "richText",
                  div: ft
                }), ft.lastChild.classList.add("richText", "popupContent");
              else {
                const Yt = this._formatContents(ct);
                ft.append(Yt);
              }
              let It = !!t(this, Bt), Tt = It ? t(this, Bt) : t(this, at);
              for (const Yt of t(this, St))
                if (!Tt || n.Util.intersect(Yt.data.rect, Tt) !== null) {
                  Tt = Yt.data.rect, It = !0;
                  break;
                }
              const Dt = n.Util.normalizeRect([Tt[0], O[3] - Tt[1] + O[1], Tt[2], O[3] - Tt[3] + O[1]]), Vt = 5, zt = It ? Tt[2] - Tt[0] + Vt : 0, Xt = Dt[0] + zt, qt = Dt[1], {
                style: Qt
              } = t(this, ot);
              Qt.left = `${100 * (Xt - H) / C}%`, Qt.top = `${100 * (qt - et) / z}%`, t(this, ot).append(ft);
            }
            _formatContents({
              str: O,
              dir: C
            }) {
              const z = document.createElement("p");
              z.classList.add("popupContent"), z.dir = C;
              const H = O.split(/(?:\r\n?|\n)/);
              for (let et = 0, ft = H.length; et < ft; ++et) {
                const Mt = H[et];
                z.append(document.createTextNode(Mt)), et < ft - 1 && z.append(document.createElement("br"));
              }
              return z;
            }
            forceHide() {
              it(this, dt, this.isVisible), t(this, dt) && (t(this, ot).hidden = !0);
            }
            maybeShow() {
              t(this, dt) && (it(this, dt, !1), t(this, ot).hidden = !1);
            }
            get isVisible() {
              return t(this, ot).hidden === !1;
            }
          }
          st = new WeakMap(), ut = new WeakMap(), wt = new WeakMap(), yt = new WeakMap(), Et = new WeakMap(), ot = new WeakMap(), At = new WeakMap(), St = new WeakMap(), Rt = new WeakMap(), Bt = new WeakMap(), kt = new WeakMap(), Ut = new WeakMap(), at = new WeakMap(), J = new WeakMap(), rt = new WeakMap(), dt = new WeakMap(), xt = new WeakSet(), li = function() {
            it(this, kt, !t(this, kt)), t(this, kt) ? (X(this, jt, ci).call(this), t(this, ot).addEventListener("click", t(this, yt))) : (X(this, Nt, hi).call(this), t(this, ot).removeEventListener("click", t(this, yt)));
          }, jt = new WeakSet(), ci = function() {
            t(this, Ut) || this.render(), this.isVisible ? t(this, kt) && t(this, ot).classList.add("focused") : (t(this, ot).hidden = !1, t(this, ot).style.zIndex = parseInt(t(this, ot).style.zIndex) + 1e3);
          }, Nt = new WeakSet(), hi = function() {
            t(this, ot).classList.remove("focused"), !(t(this, kt) || !this.isVisible) && (t(this, ot).hidden = !0, t(this, ot).style.zIndex = parseInt(t(this, ot).style.zIndex) - 1e3);
          };
          class T extends h {
            constructor(O) {
              var z, H, et;
              const C = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: C,
                ignoreBorder: !0
              }), this.textContent = O.data.textContent, this.textPosition = O.data.textPosition, this.annotationEditorType = n.AnnotationEditorType.FREETEXT;
            }
            render() {
              if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
                const O = document.createElement("div");
                O.classList.add("annotationTextContent"), O.setAttribute("role", "comment");
                for (const C of this.textContent) {
                  const z = document.createElement("span");
                  z.textContent = C, O.append(z);
                }
                this.container.append(O);
              }
              return this.data.popupRef || this._createPopup(), this._editOnDoubleClick(), this.container;
            }
          }
          e.FreeTextAnnotationElement = T;
          class P extends h {
            constructor(C) {
              var H, et, ft;
              const z = !!(C.data.popupRef || (H = C.data.titleObj) != null && H.str || (et = C.data.contentsObj) != null && et.str || (ft = C.data.richText) != null && ft.str);
              super(C, {
                isRenderable: z,
                ignoreBorder: !0
              });
              N(this, $t, null);
            }
            render() {
              this.container.classList.add("lineAnnotation");
              const C = this.data, {
                width: z,
                height: H
              } = M(C.rect), et = this.svgFactory.create(z, H, !0), ft = it(this, $t, this.svgFactory.createElement("svg:line"));
              return ft.setAttribute("x1", C.rect[2] - C.lineCoordinates[0]), ft.setAttribute("y1", C.rect[3] - C.lineCoordinates[1]), ft.setAttribute("x2", C.rect[2] - C.lineCoordinates[2]), ft.setAttribute("y2", C.rect[3] - C.lineCoordinates[3]), ft.setAttribute("stroke-width", C.borderStyle.width || 1), ft.setAttribute("stroke", "transparent"), ft.setAttribute("fill", "transparent"), et.append(ft), this.container.append(et), C.popupRef || this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, $t);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          $t = new WeakMap();
          class Y extends h {
            constructor(C) {
              var H, et, ft;
              const z = !!(C.data.popupRef || (H = C.data.titleObj) != null && H.str || (et = C.data.contentsObj) != null && et.str || (ft = C.data.richText) != null && ft.str);
              super(C, {
                isRenderable: z,
                ignoreBorder: !0
              });
              N(this, Gt, null);
            }
            render() {
              this.container.classList.add("squareAnnotation");
              const C = this.data, {
                width: z,
                height: H
              } = M(C.rect), et = this.svgFactory.create(z, H, !0), ft = C.borderStyle.width, Mt = it(this, Gt, this.svgFactory.createElement("svg:rect"));
              return Mt.setAttribute("x", ft / 2), Mt.setAttribute("y", ft / 2), Mt.setAttribute("width", z - ft), Mt.setAttribute("height", H - ft), Mt.setAttribute("stroke-width", ft || 1), Mt.setAttribute("stroke", "transparent"), Mt.setAttribute("fill", "transparent"), et.append(Mt), this.container.append(et), C.popupRef || this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, Gt);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          Gt = new WeakMap();
          class tt extends h {
            constructor(C) {
              var H, et, ft;
              const z = !!(C.data.popupRef || (H = C.data.titleObj) != null && H.str || (et = C.data.contentsObj) != null && et.str || (ft = C.data.richText) != null && ft.str);
              super(C, {
                isRenderable: z,
                ignoreBorder: !0
              });
              N(this, Ct, null);
            }
            render() {
              this.container.classList.add("circleAnnotation");
              const C = this.data, {
                width: z,
                height: H
              } = M(C.rect), et = this.svgFactory.create(z, H, !0), ft = C.borderStyle.width, Mt = it(this, Ct, this.svgFactory.createElement("svg:ellipse"));
              return Mt.setAttribute("cx", z / 2), Mt.setAttribute("cy", H / 2), Mt.setAttribute("rx", z / 2 - ft / 2), Mt.setAttribute("ry", H / 2 - ft / 2), Mt.setAttribute("stroke-width", ft || 1), Mt.setAttribute("stroke", "transparent"), Mt.setAttribute("fill", "transparent"), et.append(Mt), this.container.append(et), C.popupRef || this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, Ct);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          Ct = new WeakMap();
          class x extends h {
            constructor(C) {
              var H, et, ft;
              const z = !!(C.data.popupRef || (H = C.data.titleObj) != null && H.str || (et = C.data.contentsObj) != null && et.str || (ft = C.data.richText) != null && ft.str);
              super(C, {
                isRenderable: z,
                ignoreBorder: !0
              });
              N(this, m, null);
              this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
            }
            render() {
              this.container.classList.add(this.containerClassName);
              const C = this.data, {
                width: z,
                height: H
              } = M(C.rect), et = this.svgFactory.create(z, H, !0);
              let ft = [];
              for (const G of C.vertices) {
                const ct = G.x - C.rect[0], mt = C.rect[3] - G.y;
                ft.push(ct + "," + mt);
              }
              ft = ft.join(" ");
              const Mt = it(this, m, this.svgFactory.createElement(this.svgElementName));
              return Mt.setAttribute("points", ft), Mt.setAttribute("stroke-width", C.borderStyle.width || 1), Mt.setAttribute("stroke", "transparent"), Mt.setAttribute("fill", "transparent"), et.append(Mt), this.container.append(et), C.popupRef || this._createPopup(Mt, C), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, m);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          m = new WeakMap();
          class K extends x {
            constructor(O) {
              super(O), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
            }
          }
          class Z extends h {
            constructor(O) {
              var z, H, et;
              const C = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: C,
                ignoreBorder: !0
              });
            }
            render() {
              return this.container.classList.add("caretAnnotation"), this.data.popupRef || this._createPopup(), this.container;
            }
          }
          class Q extends h {
            constructor(C) {
              var H, et, ft;
              const z = !!(C.data.popupRef || (H = C.data.titleObj) != null && H.str || (et = C.data.contentsObj) != null && et.str || (ft = C.data.richText) != null && ft.str);
              super(C, {
                isRenderable: z,
                ignoreBorder: !0
              });
              N(this, B, []);
              this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = n.AnnotationEditorType.INK;
            }
            render() {
              this.container.classList.add(this.containerClassName);
              const C = this.data, {
                width: z,
                height: H
              } = M(C.rect), et = this.svgFactory.create(z, H, !0);
              for (const ft of C.inkLists) {
                let Mt = [];
                for (const ct of ft) {
                  const mt = ct.x - C.rect[0], It = C.rect[3] - ct.y;
                  Mt.push(`${mt},${It}`);
                }
                Mt = Mt.join(" ");
                const G = this.svgFactory.createElement(this.svgElementName);
                t(this, B).push(G), G.setAttribute("points", Mt), G.setAttribute("stroke-width", C.borderStyle.width || 1), G.setAttribute("stroke", "transparent"), G.setAttribute("fill", "transparent"), C.popupRef || this._createPopup(G, C), et.append(G);
              }
              return this.container.append(et), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, B);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          B = new WeakMap(), e.InkAnnotationElement = Q;
          class v extends h {
            constructor(O) {
              var z, H, et;
              const C = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: C,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return this.data.popupRef || this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
            }
          }
          class j extends h {
            constructor(O) {
              var z, H, et;
              const C = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: C,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return this.data.popupRef || this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
            }
          }
          class D extends h {
            constructor(O) {
              var z, H, et;
              const C = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: C,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return this.data.popupRef || this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
            }
          }
          class lt extends h {
            constructor(O) {
              var z, H, et;
              const C = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: C,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return this.data.popupRef || this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
            }
          }
          class _t extends h {
            constructor(O) {
              var z, H, et;
              const C = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: C,
                ignoreBorder: !0
              });
            }
            render() {
              return this.container.classList.add("stampAnnotation"), this.data.popupRef || this._createPopup(), this.container;
            }
          }
          e.StampAnnotationElement = _t;
          class k extends h {
            constructor(C) {
              var et;
              super(C, {
                isRenderable: !0
              });
              N(this, ht, null);
              const {
                filename: z,
                content: H
              } = this.data.file;
              this.filename = (0, f.getFilenameFromUrl)(z, !0), this.content = H, (et = this.linkService.eventBus) == null || et.dispatch("fileattachmentannotation", {
                source: this,
                filename: z,
                content: H
              });
            }
            render() {
              var H, et;
              this.container.classList.add("fileAttachmentAnnotation");
              const {
                data: C
              } = this;
              let z;
              return C.hasAppearance || C.fillAlpha === 0 ? z = document.createElement("div") : (z = document.createElement("img"), z.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(C.name) ? "paperclip" : "pushpin"}.svg`, C.fillAlpha && C.fillAlpha < 1 && (z.style = `filter: opacity(${Math.round(C.fillAlpha * 100)}%);`)), z.classList.add("popupTriggerArea"), z.addEventListener("dblclick", this._download.bind(this)), it(this, ht, z), !C.popupRef && ((H = C.titleObj) != null && H.str || (et = C.contentsObj) != null && et.str || C.richText) && this._createPopup(), this.container.append(z), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, ht);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
            _download() {
              var C;
              (C = this.downloadManager) == null || C.openOrDownloadData(this.container, this.content, this.filename);
            }
          }
          ht = new WeakMap();
          class a {
            constructor({
              div: O,
              accessibilityManager: C,
              annotationCanvasMap: z,
              l10n: H,
              page: et,
              viewport: ft
            }) {
              N(this, vt);
              N(this, gt);
              N(this, Lt, null);
              N(this, Pt, null);
              N(this, pt, /* @__PURE__ */ new Map());
              this.div = O, it(this, Lt, C), it(this, Pt, z), this.l10n = H, this.page = et, this.viewport = ft, this.zIndex = 0, this.l10n || (this.l10n = I.NullL10n);
            }
            async render(O) {
              const {
                annotations: C
              } = O, z = this.div;
              (0, f.setLayerDimensions)(z, this.viewport);
              const H = /* @__PURE__ */ new Map(), et = {
                data: null,
                layer: z,
                linkService: O.linkService,
                downloadManager: O.downloadManager,
                imageResourcesPath: O.imageResourcesPath || "",
                renderForms: O.renderForms !== !1,
                svgFactory: new f.DOMSVGFactory(),
                annotationStorage: O.annotationStorage || new q.AnnotationStorage(),
                enableScripting: O.enableScripting === !0,
                hasJSActions: O.hasJSActions,
                fieldObjects: O.fieldObjects,
                parent: this,
                elements: null
              };
              for (const ft of C) {
                if (ft.noHTML)
                  continue;
                const Mt = ft.annotationType === n.AnnotationType.POPUP;
                if (Mt) {
                  const mt = H.get(ft.id);
                  if (!mt)
                    continue;
                  et.elements = mt;
                } else {
                  const {
                    width: mt,
                    height: It
                  } = M(ft.rect);
                  if (mt <= 0 || It <= 0)
                    continue;
                }
                et.data = ft;
                const G = S.create(et);
                if (!G.isRenderable)
                  continue;
                if (!Mt && ft.popupRef) {
                  const mt = H.get(ft.popupRef);
                  mt ? mt.push(G) : H.set(ft.popupRef, [G]);
                }
                G.annotationEditorType > 0 && t(this, pt).set(G.data.id, G);
                const ct = G.render();
                ft.hidden && (ct.style.visibility = "hidden"), X(this, vt, dn).call(this, ct, ft.id);
              }
              X(this, gt, di).call(this), await this.l10n.translate(z);
            }
            update({
              viewport: O
            }) {
              const C = this.div;
              this.viewport = O, (0, f.setLayerDimensions)(C, {
                rotation: O.rotation
              }), X(this, gt, di).call(this), C.hidden = !1;
            }
            getEditableAnnotations() {
              return Array.from(t(this, pt).values());
            }
            getEditableAnnotation(O) {
              return t(this, pt).get(O);
            }
          }
          Lt = new WeakMap(), Pt = new WeakMap(), pt = new WeakMap(), vt = new WeakSet(), dn = function(O, C) {
            var H;
            const z = O.firstChild || O;
            z.id = `${f.AnnotationPrefix}${C}`, this.div.append(O), (H = t(this, Lt)) == null || H.moveElementInDOM(this.div, O, z, !1);
          }, gt = new WeakSet(), di = function() {
            if (!t(this, Pt))
              return;
            const O = this.div;
            for (const [C, z] of t(this, Pt)) {
              const H = O.querySelector(`[data-annotation-id="${C}"]`);
              if (!H)
                continue;
              const {
                firstChild: et
              } = H;
              et ? et.nodeName === "CANVAS" ? et.replaceWith(z) : et.before(z) : H.append(z);
            }
            t(this, Pt).clear();
          }, e.AnnotationLayer = a;
        },
        /* 30 */
        /***/
        (A, e) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.ColorConverters = void 0;
          function L(q) {
            return Math.floor(Math.max(0, Math.min(1, q)) * 255).toString(16).padStart(2, "0");
          }
          function n(q) {
            return Math.max(0, Math.min(255, 255 * q));
          }
          class f {
            static CMYK_G([V, I, c, d]) {
              return ["G", 1 - Math.min(1, 0.3 * V + 0.59 * c + 0.11 * I + d)];
            }
            static G_CMYK([V]) {
              return ["CMYK", 0, 0, 0, 1 - V];
            }
            static G_RGB([V]) {
              return ["RGB", V, V, V];
            }
            static G_rgb([V]) {
              return V = n(V), [V, V, V];
            }
            static G_HTML([V]) {
              const I = L(V);
              return `#${I}${I}${I}`;
            }
            static RGB_G([V, I, c]) {
              return ["G", 0.3 * V + 0.59 * I + 0.11 * c];
            }
            static RGB_rgb(V) {
              return V.map(n);
            }
            static RGB_HTML(V) {
              return `#${V.map(L).join("")}`;
            }
            static T_HTML() {
              return "#00000000";
            }
            static T_rgb() {
              return [null];
            }
            static CMYK_RGB([V, I, c, d]) {
              return ["RGB", 1 - Math.min(1, V + d), 1 - Math.min(1, c + d), 1 - Math.min(1, I + d)];
            }
            static CMYK_rgb([V, I, c, d]) {
              return [n(1 - Math.min(1, V + d)), n(1 - Math.min(1, c + d)), n(1 - Math.min(1, I + d))];
            }
            static CMYK_HTML(V) {
              const I = this.CMYK_RGB(V).slice(1);
              return this.RGB_HTML(I);
            }
            static RGB_CMYK([V, I, c]) {
              const d = 1 - V, r = 1 - I, F = 1 - c, M = Math.min(d, r, F);
              return ["CMYK", d, r, F, M];
            }
          }
          e.ColorConverters = f;
        },
        /* 31 */
        /***/
        (A, e) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.NullL10n = void 0, e.getL10nFallback = n;
          const L = {
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
            editor_ink_canvas_aria_label: "User-created image"
          };
          L.print_progress_percent = "{{progress}}%";
          function n(V, I) {
            switch (V) {
              case "find_match_count":
                V = `find_match_count[${I.total === 1 ? "one" : "other"}]`;
                break;
              case "find_match_count_limit":
                V = `find_match_count_limit[${I.limit === 1 ? "one" : "other"}]`;
                break;
            }
            return L[V] || "";
          }
          function f(V, I) {
            return I ? V.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (c, d) => d in I ? I[d] : "{{" + d + "}}") : V;
          }
          const q = {
            async getLanguage() {
              return "en-us";
            },
            async getDirection() {
              return "ltr";
            },
            async get(V, I = null, c = n(V, I)) {
              return f(c, I);
            },
            async translate(V) {
            }
          };
          e.NullL10n = q;
        },
        /* 32 */
        /***/
        (A, e, L) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.XfaLayer = void 0;
          var n = L(25);
          class f {
            static setupStorage(V, I, c, d, r) {
              const F = d.getValue(I, {
                value: null
              });
              switch (c.name) {
                case "textarea":
                  if (F.value !== null && (V.textContent = F.value), r === "print")
                    break;
                  V.addEventListener("input", (M) => {
                    d.setValue(I, {
                      value: M.target.value
                    });
                  });
                  break;
                case "input":
                  if (c.attributes.type === "radio" || c.attributes.type === "checkbox") {
                    if (F.value === c.attributes.xfaOn ? V.setAttribute("checked", !0) : F.value === c.attributes.xfaOff && V.removeAttribute("checked"), r === "print")
                      break;
                    V.addEventListener("change", (M) => {
                      d.setValue(I, {
                        value: M.target.checked ? M.target.getAttribute("xfaOn") : M.target.getAttribute("xfaOff")
                      });
                    });
                  } else {
                    if (F.value !== null && V.setAttribute("value", F.value), r === "print")
                      break;
                    V.addEventListener("input", (M) => {
                      d.setValue(I, {
                        value: M.target.value
                      });
                    });
                  }
                  break;
                case "select":
                  if (F.value !== null) {
                    V.setAttribute("value", F.value);
                    for (const M of c.children)
                      M.attributes.value === F.value ? M.attributes.selected = !0 : M.attributes.hasOwnProperty("selected") && delete M.attributes.selected;
                  }
                  V.addEventListener("input", (M) => {
                    const S = M.target.options, h = S.selectedIndex === -1 ? "" : S[S.selectedIndex].value;
                    d.setValue(I, {
                      value: h
                    });
                  });
                  break;
              }
            }
            static setAttributes({
              html: V,
              element: I,
              storage: c = null,
              intent: d,
              linkService: r
            }) {
              const {
                attributes: F
              } = I, M = V instanceof HTMLAnchorElement;
              F.type === "radio" && (F.name = `${F.name}-${d}`);
              for (const [S, h] of Object.entries(F))
                if (h != null)
                  switch (S) {
                    case "class":
                      h.length && V.setAttribute(S, h.join(" "));
                      break;
                    case "dataId":
                      break;
                    case "id":
                      V.setAttribute("data-element-id", h);
                      break;
                    case "style":
                      Object.assign(V.style, h);
                      break;
                    case "textContent":
                      V.textContent = h;
                      break;
                    default:
                      (!M || S !== "href" && S !== "newWindow") && V.setAttribute(S, h);
                  }
              M && r.addLinkAttributes(V, F.href, F.newWindow), c && F.dataId && this.setupStorage(V, F.dataId, I, c);
            }
            static render(V) {
              var p;
              const I = V.annotationStorage, c = V.linkService, d = V.xfaHtml, r = V.intent || "display", F = document.createElement(d.name);
              d.attributes && this.setAttributes({
                html: F,
                element: d,
                intent: r,
                linkService: c
              });
              const M = [[d, -1, F]], S = V.div;
              if (S.append(F), V.viewport) {
                const u = `matrix(${V.viewport.transform.join(",")})`;
                S.style.transform = u;
              }
              r !== "richText" && S.setAttribute("class", "xfaLayer xfaFont");
              const h = [];
              for (; M.length > 0; ) {
                const [u, y, b] = M.at(-1);
                if (y + 1 === u.children.length) {
                  M.pop();
                  continue;
                }
                const g = u.children[++M.at(-1)[1]];
                if (g === null)
                  continue;
                const {
                  name: w
                } = g;
                if (w === "#text") {
                  const i = document.createTextNode(g.value);
                  h.push(i), b.append(i);
                  continue;
                }
                const s = (p = g == null ? void 0 : g.attributes) != null && p.xmlns ? document.createElementNS(g.attributes.xmlns, w) : document.createElement(w);
                if (b.append(s), g.attributes && this.setAttributes({
                  html: s,
                  element: g,
                  storage: I,
                  intent: r,
                  linkService: c
                }), g.children && g.children.length > 0)
                  M.push([g, -1, s]);
                else if (g.value) {
                  const i = document.createTextNode(g.value);
                  n.XfaText.shouldBuildText(w) && h.push(i), s.append(i);
                }
              }
              for (const u of S.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
                u.setAttribute("readOnly", !0);
              return {
                textDivs: h
              };
            }
            static update(V) {
              const I = `matrix(${V.viewport.transform.join(",")})`;
              V.div.style.transform = I, V.div.hidden = !1;
            }
          }
          e.XfaLayer = f;
        },
        /* 33 */
        /***/
        (A, e, L) => {
          var c, d, r, F, M, S, h, p, u, y, b, g, w, s, i, E, un, o, fn, P, pn, tt, gn, K, ui, Q, mn, j, fi, lt, _n, k, bn, l, vn, $, yn, nt, An, ut, ne, yt, pi, ot, ke, St, Le, Bt, he, Ut, gi, J, Re, dt, Sn, Ot, mi, Wt, En, Ht, wn, Gt, _i, m, Fe, ht, de;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.InkEditor = void 0;
          var n = L(1), f = L(4), q = L(29), V = L(5);
          const Pt = class Pt extends f.AnnotationEditor {
            constructor(U) {
              super({
                ...U,
                name: "inkEditor"
              });
              N(this, E);
              N(this, o);
              N(this, P);
              N(this, tt);
              N(this, K);
              N(this, Q);
              N(this, j);
              N(this, lt);
              N(this, k);
              N(this, l);
              N(this, $);
              N(this, nt);
              N(this, ut);
              N(this, yt);
              N(this, ot);
              N(this, St);
              N(this, Bt);
              N(this, Ut);
              N(this, J);
              N(this, Ht);
              N(this, Gt);
              N(this, m);
              N(this, ht);
              N(this, c, 0);
              N(this, d, 0);
              N(this, r, this.canvasContextMenu.bind(this));
              N(this, F, this.canvasPointermove.bind(this));
              N(this, M, this.canvasPointerleave.bind(this));
              N(this, S, this.canvasPointerup.bind(this));
              N(this, h, this.canvasPointerdown.bind(this));
              N(this, p, new Path2D());
              N(this, u, !1);
              N(this, y, !1);
              N(this, b, !1);
              N(this, g, null);
              N(this, w, 0);
              N(this, s, 0);
              N(this, i, null);
              this.color = U.color || null, this.thickness = U.thickness || null, this.opacity = U.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
            }
            static initialize(U) {
              this._l10nPromise = new Map(["editor_ink_canvas_aria_label", "editor_ink2_aria_label"].map((gt) => [gt, U.get(gt)]));
            }
            static updateDefaultParams(U, gt) {
              switch (U) {
                case n.AnnotationEditorParamsType.INK_THICKNESS:
                  Pt._defaultThickness = gt;
                  break;
                case n.AnnotationEditorParamsType.INK_COLOR:
                  Pt._defaultColor = gt;
                  break;
                case n.AnnotationEditorParamsType.INK_OPACITY:
                  Pt._defaultOpacity = gt / 100;
                  break;
              }
            }
            updateParams(U, gt) {
              switch (U) {
                case n.AnnotationEditorParamsType.INK_THICKNESS:
                  X(this, E, un).call(this, gt);
                  break;
                case n.AnnotationEditorParamsType.INK_COLOR:
                  X(this, o, fn).call(this, gt);
                  break;
                case n.AnnotationEditorParamsType.INK_OPACITY:
                  X(this, P, pn).call(this, gt);
                  break;
              }
            }
            static get defaultPropertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.INK_THICKNESS, Pt._defaultThickness], [n.AnnotationEditorParamsType.INK_COLOR, Pt._defaultColor || f.AnnotationEditor._defaultLineColor], [n.AnnotationEditorParamsType.INK_OPACITY, Math.round(Pt._defaultOpacity * 100)]];
            }
            get propertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || Pt._defaultThickness], [n.AnnotationEditorParamsType.INK_COLOR, this.color || Pt._defaultColor || f.AnnotationEditor._defaultLineColor], [n.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? Pt._defaultOpacity))]];
            }
            rebuild() {
              this.parent && (super.rebuild(), this.div !== null && (this.canvas || (X(this, ot, ke).call(this), X(this, St, Le).call(this)), this.isAttachedToDOM || (this.parent.add(this), X(this, Bt, he).call(this)), X(this, ht, de).call(this)));
            }
            remove() {
              this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, t(this, g).disconnect(), it(this, g, null), super.remove());
            }
            setParent(U) {
              !this.parent && U ? this._uiManager.removeShouldRescale(this) : this.parent && U === null && this._uiManager.addShouldRescale(this), super.setParent(U);
            }
            onScaleChanging() {
              const [U, gt] = this.parentDimensions, Ft = this.width * U, bt = this.height * gt;
              this.setDimensions(Ft, bt);
            }
            enableEditMode() {
              t(this, u) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", t(this, h)));
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
              t(this, u) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), it(this, u, !0), this.div.classList.add("disabled"), X(this, ht, de).call(this, !0), this.makeResizable(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
                preventScroll: !0
              }));
            }
            focusin(U) {
              this._focusEventsAllowed && (super.focusin(U), this.enableEditMode());
            }
            canvasPointerdown(U) {
              U.button !== 0 || !this.isInEditMode() || t(this, u) || (this.setInForeground(), U.preventDefault(), U.type !== "mouse" && this.div.focus(), X(this, Q, mn).call(this, U.offsetX, U.offsetY));
            }
            canvasContextMenu(U) {
              U.preventDefault();
            }
            canvasPointermove(U) {
              U.preventDefault(), X(this, j, fi).call(this, U.offsetX, U.offsetY);
            }
            canvasPointerup(U) {
              U.preventDefault(), X(this, yt, pi).call(this, U);
            }
            canvasPointerleave(U) {
              X(this, yt, pi).call(this, U);
            }
            get isResizable() {
              return !this.isEmpty() && t(this, u);
            }
            render() {
              if (this.div)
                return this.div;
              let U, gt;
              this.width && (U = this.x, gt = this.y), super.render(), Pt._l10nPromise.get("editor_ink2_aria_label").then((z) => {
                var H;
                return (H = this.div) == null ? void 0 : H.setAttribute("aria-label", z);
              });
              const [Ft, bt, O, C] = X(this, tt, gn).call(this);
              if (this.setAt(Ft, bt, 0, 0), this.setDims(O, C), X(this, ot, ke).call(this), this.width) {
                const [z, H] = this.parentDimensions;
                this.setAspectRatio(this.width * z, this.height * H), this.setAt(U * z, gt * H, this.width * z, this.height * H), it(this, b, !0), X(this, Bt, he).call(this), this.setDims(this.width * z, this.height * H), X(this, ut, ne).call(this), this.div.classList.add("disabled");
              } else
                this.div.classList.add("editing"), this.enableEditMode();
              return X(this, St, Le).call(this), this.div;
            }
            setDimensions(U, gt) {
              const Ft = Math.round(U), bt = Math.round(gt);
              if (t(this, w) === Ft && t(this, s) === bt)
                return;
              it(this, w, Ft), it(this, s, bt), this.canvas.style.visibility = "hidden";
              const [O, C] = this.parentDimensions;
              this.width = U / O, this.height = gt / C, this.fixAndSetPosition(), t(this, u) && X(this, Ut, gi).call(this, U, gt), X(this, Bt, he).call(this), X(this, ut, ne).call(this), this.canvas.style.visibility = "visible", this.fixDims();
            }
            static deserialize(U, gt, Ft) {
              var It, Tt, Dt;
              if (U instanceof q.InkAnnotationElement)
                return null;
              const bt = super.deserialize(U, gt, Ft);
              bt.thickness = U.thickness, bt.color = n.Util.makeHexColor(...U.color), bt.opacity = U.opacity;
              const [O, C] = bt.pageDimensions, z = bt.width * O, H = bt.height * C, et = bt.parentScale, ft = U.thickness / 2;
              it(bt, u, !0), it(bt, w, Math.round(z)), it(bt, s, Math.round(H));
              const {
                paths: Mt,
                rect: G,
                rotation: ct
              } = U;
              for (let {
                bezier: Vt
              } of Mt) {
                Vt = X(It = Pt, Wt, En).call(It, Vt, G, ct);
                const zt = [];
                bt.paths.push(zt);
                let Xt = et * (Vt[0] - ft), qt = et * (Vt[1] - ft);
                for (let Yt = 2, Kt = Vt.length; Yt < Kt; Yt += 6) {
                  const te = et * (Vt[Yt] - ft), Jt = et * (Vt[Yt + 1] - ft), ee = et * (Vt[Yt + 2] - ft), Zn = et * (Vt[Yt + 3] - ft), ji = et * (Vt[Yt + 4] - ft), Wi = et * (Vt[Yt + 5] - ft);
                  zt.push([[Xt, qt], [te, Jt], [ee, Zn], [ji, Wi]]), Xt = ji, qt = Wi;
                }
                const Qt = X(this, dt, Sn).call(this, zt);
                bt.bezierPath2D.push(Qt);
              }
              const mt = X(Tt = bt, Gt, _i).call(Tt);
              return it(bt, d, Math.max(f.AnnotationEditor.MIN_SIZE, mt[2] - mt[0])), it(bt, c, Math.max(f.AnnotationEditor.MIN_SIZE, mt[3] - mt[1])), X(Dt = bt, Ut, gi).call(Dt, z, H), bt;
            }
            serialize() {
              if (this.isEmpty())
                return null;
              const U = this.getRect(0, 0), gt = f.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
              return {
                annotationType: n.AnnotationEditorType.INK,
                color: gt,
                thickness: this.thickness,
                opacity: this.opacity,
                paths: X(this, Ht, wn).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, U),
                pageIndex: this.pageIndex,
                rect: U,
                rotation: this.rotation
              };
            }
          };
          c = new WeakMap(), d = new WeakMap(), r = new WeakMap(), F = new WeakMap(), M = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), u = new WeakMap(), y = new WeakMap(), b = new WeakMap(), g = new WeakMap(), w = new WeakMap(), s = new WeakMap(), i = new WeakMap(), E = new WeakSet(), un = function(U) {
            const gt = this.thickness;
            this.addCommands({
              cmd: () => {
                this.thickness = U, X(this, ht, de).call(this);
              },
              undo: () => {
                this.thickness = gt, X(this, ht, de).call(this);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.INK_THICKNESS,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, o = new WeakSet(), fn = function(U) {
            const gt = this.color;
            this.addCommands({
              cmd: () => {
                this.color = U, X(this, ut, ne).call(this);
              },
              undo: () => {
                this.color = gt, X(this, ut, ne).call(this);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.INK_COLOR,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, P = new WeakSet(), pn = function(U) {
            U /= 100;
            const gt = this.opacity;
            this.addCommands({
              cmd: () => {
                this.opacity = U, X(this, ut, ne).call(this);
              },
              undo: () => {
                this.opacity = gt, X(this, ut, ne).call(this);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.INK_OPACITY,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, tt = new WeakSet(), gn = function() {
            const {
              parentRotation: U,
              parentDimensions: [gt, Ft]
            } = this;
            switch (U) {
              case 90:
                return [0, Ft, Ft, gt];
              case 180:
                return [gt, Ft, gt, Ft];
              case 270:
                return [gt, 0, Ft, gt];
              default:
                return [0, 0, gt, Ft];
            }
          }, K = new WeakSet(), ui = function() {
            const {
              ctx: U,
              color: gt,
              opacity: Ft,
              thickness: bt,
              parentScale: O,
              scaleFactor: C
            } = this;
            U.lineWidth = bt * O / C, U.lineCap = "round", U.lineJoin = "round", U.miterLimit = 10, U.strokeStyle = `${gt}${(0, V.opacityToHex)(Ft)}`;
          }, Q = new WeakSet(), mn = function(U, gt) {
            this.canvas.addEventListener("contextmenu", t(this, r)), this.canvas.addEventListener("pointerleave", t(this, M)), this.canvas.addEventListener("pointermove", t(this, F)), this.canvas.addEventListener("pointerup", t(this, S)), this.canvas.removeEventListener("pointerdown", t(this, h)), this.isEditing = !0, t(this, b) || (it(this, b, !0), X(this, Bt, he).call(this), this.thickness || (this.thickness = Pt._defaultThickness), this.color || (this.color = Pt._defaultColor || f.AnnotationEditor._defaultLineColor), this.opacity ?? (this.opacity = Pt._defaultOpacity)), this.currentPath.push([U, gt]), it(this, y, !1), X(this, K, ui).call(this), it(this, i, () => {
              X(this, l, vn).call(this), t(this, i) && window.requestAnimationFrame(t(this, i));
            }), window.requestAnimationFrame(t(this, i));
          }, j = new WeakSet(), fi = function(U, gt) {
            const [Ft, bt] = this.currentPath.at(-1);
            if (this.currentPath.length > 1 && U === Ft && gt === bt)
              return;
            const O = this.currentPath;
            let C = t(this, p);
            if (O.push([U, gt]), it(this, y, !0), O.length <= 2) {
              C.moveTo(...O[0]), C.lineTo(U, gt);
              return;
            }
            O.length === 3 && (it(this, p, C = new Path2D()), C.moveTo(...O[0])), X(this, $, yn).call(this, C, ...O.at(-3), ...O.at(-2), U, gt);
          }, lt = new WeakSet(), _n = function() {
            if (this.currentPath.length === 0)
              return;
            const U = this.currentPath.at(-1);
            t(this, p).lineTo(...U);
          }, k = new WeakSet(), bn = function(U, gt) {
            it(this, i, null), U = Math.min(Math.max(U, 0), this.canvas.width), gt = Math.min(Math.max(gt, 0), this.canvas.height), X(this, j, fi).call(this, U, gt), X(this, lt, _n).call(this);
            let Ft;
            if (this.currentPath.length !== 1)
              Ft = X(this, nt, An).call(this);
            else {
              const H = [U, gt];
              Ft = [[H, H.slice(), H.slice(), H]];
            }
            const bt = t(this, p), O = this.currentPath;
            this.currentPath = [], it(this, p, new Path2D());
            const C = () => {
              this.allRawPaths.push(O), this.paths.push(Ft), this.bezierPath2D.push(bt), this.rebuild();
            }, z = () => {
              this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (X(this, ot, ke).call(this), X(this, St, Le).call(this)), X(this, ht, de).call(this));
            };
            this.addCommands({
              cmd: C,
              undo: z,
              mustExec: !0
            });
          }, l = new WeakSet(), vn = function() {
            if (!t(this, y))
              return;
            it(this, y, !1);
            const U = Math.ceil(this.thickness * this.parentScale), gt = this.currentPath.slice(-3), Ft = gt.map((C) => C[0]), bt = gt.map((C) => C[1]);
            Math.min(...Ft) - U, Math.max(...Ft) + U, Math.min(...bt) - U, Math.max(...bt) + U;
            const {
              ctx: O
            } = this;
            O.save(), O.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (const C of this.bezierPath2D)
              O.stroke(C);
            O.stroke(t(this, p)), O.restore();
          }, $ = new WeakSet(), yn = function(U, gt, Ft, bt, O, C, z) {
            const H = (gt + bt) / 2, et = (Ft + O) / 2, ft = (bt + C) / 2, Mt = (O + z) / 2;
            U.bezierCurveTo(H + 2 * (bt - H) / 3, et + 2 * (O - et) / 3, ft + 2 * (bt - ft) / 3, Mt + 2 * (O - Mt) / 3, ft, Mt);
          }, nt = new WeakSet(), An = function() {
            const U = this.currentPath;
            if (U.length <= 2)
              return [[U[0], U[0], U.at(-1), U.at(-1)]];
            const gt = [];
            let Ft, [bt, O] = U[0];
            for (Ft = 1; Ft < U.length - 2; Ft++) {
              const [G, ct] = U[Ft], [mt, It] = U[Ft + 1], Tt = (G + mt) / 2, Dt = (ct + It) / 2, Vt = [bt + 2 * (G - bt) / 3, O + 2 * (ct - O) / 3], zt = [Tt + 2 * (G - Tt) / 3, Dt + 2 * (ct - Dt) / 3];
              gt.push([[bt, O], Vt, zt, [Tt, Dt]]), [bt, O] = [Tt, Dt];
            }
            const [C, z] = U[Ft], [H, et] = U[Ft + 1], ft = [bt + 2 * (C - bt) / 3, O + 2 * (z - O) / 3], Mt = [H + 2 * (C - H) / 3, et + 2 * (z - et) / 3];
            return gt.push([[bt, O], ft, Mt, [H, et]]), gt;
          }, ut = new WeakSet(), ne = function() {
            if (this.isEmpty()) {
              X(this, J, Re).call(this);
              return;
            }
            X(this, K, ui).call(this);
            const {
              canvas: U,
              ctx: gt
            } = this;
            gt.setTransform(1, 0, 0, 1, 0, 0), gt.clearRect(0, 0, U.width, U.height), X(this, J, Re).call(this);
            for (const Ft of this.bezierPath2D)
              gt.stroke(Ft);
          }, yt = new WeakSet(), pi = function(U) {
            this.canvas.removeEventListener("pointerleave", t(this, M)), this.canvas.removeEventListener("pointermove", t(this, F)), this.canvas.removeEventListener("pointerup", t(this, S)), this.canvas.addEventListener("pointerdown", t(this, h)), setTimeout(() => {
              this.canvas.removeEventListener("contextmenu", t(this, r));
            }, 10), X(this, k, bn).call(this, U.offsetX, U.offsetY), this.addToAnnotationStorage(), this.setInBackground();
          }, ot = new WeakSet(), ke = function() {
            this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", Pt._l10nPromise.get("editor_ink_canvas_aria_label").then((U) => {
              var gt;
              return (gt = this.canvas) == null ? void 0 : gt.setAttribute("aria-label", U);
            }), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
          }, St = new WeakSet(), Le = function() {
            it(this, g, new ResizeObserver((U) => {
              const gt = U[0].contentRect;
              gt.width && gt.height && this.setDimensions(gt.width, gt.height);
            })), t(this, g).observe(this.div);
          }, Bt = new WeakSet(), he = function() {
            if (!t(this, b))
              return;
            const [U, gt] = this.parentDimensions;
            this.canvas.width = Math.ceil(this.width * U), this.canvas.height = Math.ceil(this.height * gt), X(this, J, Re).call(this);
          }, Ut = new WeakSet(), gi = function(U, gt) {
            const Ft = X(this, m, Fe).call(this), bt = (U - Ft) / t(this, d), O = (gt - Ft) / t(this, c);
            this.scaleFactor = Math.min(bt, O);
          }, J = new WeakSet(), Re = function() {
            const U = X(this, m, Fe).call(this) / 2;
            this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + U, this.translationY * this.scaleFactor + U);
          }, dt = new WeakSet(), Sn = function(U) {
            const gt = new Path2D();
            for (let Ft = 0, bt = U.length; Ft < bt; Ft++) {
              const [O, C, z, H] = U[Ft];
              Ft === 0 && gt.moveTo(...O), gt.bezierCurveTo(C[0], C[1], z[0], z[1], H[0], H[1]);
            }
            return gt;
          }, Ot = new WeakSet(), mi = function(U, gt, Ft) {
            const [bt, O, C, z] = gt;
            switch (Ft) {
              case 0:
                for (let H = 0, et = U.length; H < et; H += 2)
                  U[H] += bt, U[H + 1] = z - U[H + 1];
                break;
              case 90:
                for (let H = 0, et = U.length; H < et; H += 2) {
                  const ft = U[H];
                  U[H] = U[H + 1] + bt, U[H + 1] = ft + O;
                }
                break;
              case 180:
                for (let H = 0, et = U.length; H < et; H += 2)
                  U[H] = C - U[H], U[H + 1] += O;
                break;
              case 270:
                for (let H = 0, et = U.length; H < et; H += 2) {
                  const ft = U[H];
                  U[H] = C - U[H + 1], U[H + 1] = z - ft;
                }
                break;
              default:
                throw new Error("Invalid rotation");
            }
            return U;
          }, Wt = new WeakSet(), En = function(U, gt, Ft) {
            const [bt, O, C, z] = gt;
            switch (Ft) {
              case 0:
                for (let H = 0, et = U.length; H < et; H += 2)
                  U[H] -= bt, U[H + 1] = z - U[H + 1];
                break;
              case 90:
                for (let H = 0, et = U.length; H < et; H += 2) {
                  const ft = U[H];
                  U[H] = U[H + 1] - O, U[H + 1] = ft - bt;
                }
                break;
              case 180:
                for (let H = 0, et = U.length; H < et; H += 2)
                  U[H] = C - U[H], U[H + 1] -= O;
                break;
              case 270:
                for (let H = 0, et = U.length; H < et; H += 2) {
                  const ft = U[H];
                  U[H] = z - U[H + 1], U[H + 1] = C - ft;
                }
                break;
              default:
                throw new Error("Invalid rotation");
            }
            return U;
          }, Ht = new WeakSet(), wn = function(U, gt, Ft, bt) {
            var et, ft;
            const O = [], C = this.thickness / 2, z = U * gt + C, H = U * Ft + C;
            for (const Mt of this.paths) {
              const G = [], ct = [];
              for (let mt = 0, It = Mt.length; mt < It; mt++) {
                const [Tt, Dt, Vt, zt] = Mt[mt], Xt = U * Tt[0] + z, qt = U * Tt[1] + H, Qt = U * Dt[0] + z, Yt = U * Dt[1] + H, Kt = U * Vt[0] + z, te = U * Vt[1] + H, Jt = U * zt[0] + z, ee = U * zt[1] + H;
                mt === 0 && (G.push(Xt, qt), ct.push(Xt, qt)), G.push(Qt, Yt, Kt, te, Jt, ee), ct.push(Qt, Yt), mt === It - 1 && ct.push(Jt, ee);
              }
              O.push({
                bezier: X(et = Pt, Ot, mi).call(et, G, bt, this.rotation),
                points: X(ft = Pt, Ot, mi).call(ft, ct, bt, this.rotation)
              });
            }
            return O;
          }, Gt = new WeakSet(), _i = function() {
            let U = 1 / 0, gt = -1 / 0, Ft = 1 / 0, bt = -1 / 0;
            for (const O of this.paths)
              for (const [C, z, H, et] of O) {
                const ft = n.Util.bezierBoundingBox(...C, ...z, ...H, ...et);
                U = Math.min(U, ft[0]), Ft = Math.min(Ft, ft[1]), gt = Math.max(gt, ft[2]), bt = Math.max(bt, ft[3]);
              }
            return [U, Ft, gt, bt];
          }, m = new WeakSet(), Fe = function() {
            return t(this, u) ? Math.ceil(this.thickness * this.parentScale) : 0;
          }, ht = new WeakSet(), de = function(U = !1) {
            if (this.isEmpty())
              return;
            if (!t(this, u)) {
              X(this, ut, ne).call(this);
              return;
            }
            const gt = X(this, Gt, _i).call(this), Ft = X(this, m, Fe).call(this);
            it(this, d, Math.max(f.AnnotationEditor.MIN_SIZE, gt[2] - gt[0])), it(this, c, Math.max(f.AnnotationEditor.MIN_SIZE, gt[3] - gt[1]));
            const bt = Math.ceil(Ft + t(this, d) * this.scaleFactor), O = Math.ceil(Ft + t(this, c) * this.scaleFactor), [C, z] = this.parentDimensions;
            this.width = bt / C, this.height = O / z, this.setAspectRatio(bt, O);
            const H = this.translationX, et = this.translationY;
            this.translationX = -gt[0], this.translationY = -gt[1], X(this, Bt, he).call(this), X(this, ut, ne).call(this), it(this, w, bt), it(this, s, O), this.setDims(bt, O);
            const ft = U ? Ft / this.scaleFactor / 2 : 0;
            this.translate(H - this.translationX - ft, et - this.translationY - ft);
          }, N(Pt, dt), N(Pt, Ot), N(Pt, Wt), Zt(Pt, "_defaultColor", null), Zt(Pt, "_defaultOpacity", 1), Zt(Pt, "_defaultThickness", 1), Zt(Pt, "_l10nPromise"), Zt(Pt, "_type", "ink");
          let I = Pt;
          e.InkEditor = I;
        },
        /* 34 */
        /***/
        (A, e, L) => {
          var c, d, r, F, M, S, h, p, u, y, b, be, w, ve, i, Ie, _, bi, T, Pn, Y, Cn, x, vi, Z, De, v, Tn;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.StampEditor = void 0;
          var n = L(1), f = L(4), q = L(6), V = L(29);
          const D = class D extends f.AnnotationEditor {
            constructor(k) {
              super({
                ...k,
                name: "stampEditor"
              });
              N(this, b);
              N(this, w);
              N(this, i);
              N(this, _);
              N(this, T);
              N(this, Y);
              N(this, x);
              N(this, Z);
              N(this, v);
              N(this, c, null);
              N(this, d, null);
              N(this, r, null);
              N(this, F, null);
              N(this, M, null);
              N(this, S, null);
              N(this, h, null);
              N(this, p, null);
              N(this, u, !1);
              N(this, y, !1);
              it(this, F, k.bitmapUrl), it(this, M, k.bitmapFile);
            }
            static get supportedTypes() {
              const k = ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"];
              return (0, n.shadow)(this, "supportedTypes", k.map((a) => `image/${a}`));
            }
            static get supportedTypesStr() {
              return (0, n.shadow)(this, "supportedTypesStr", this.supportedTypes.join(","));
            }
            static isHandlingMimeForPasting(k) {
              return this.supportedTypes.includes(k);
            }
            static paste(k, a) {
              a.pasteEditor(n.AnnotationEditorType.STAMP, {
                bitmapFile: k.getAsFile()
              });
            }
            remove() {
              var k, a;
              t(this, d) && (it(this, c, null), this._uiManager.imageManager.deleteId(t(this, d)), (k = t(this, S)) == null || k.remove(), it(this, S, null), (a = t(this, h)) == null || a.disconnect(), it(this, h, null)), super.remove();
            }
            rebuild() {
              if (!this.parent) {
                t(this, d) && X(this, i, Ie).call(this);
                return;
              }
              super.rebuild(), this.div !== null && (t(this, d) && X(this, i, Ie).call(this), this.isAttachedToDOM || this.parent.add(this));
            }
            onceAdded() {
              this._isDraggable = !0, this.div.focus();
            }
            isEmpty() {
              return !(t(this, r) || t(this, c) || t(this, F) || t(this, M));
            }
            get isResizable() {
              return !0;
            }
            render() {
              if (this.div)
                return this.div;
              let k, a;
              if (this.width && (k = this.x, a = this.y), super.render(), this.div.hidden = !0, t(this, c) ? X(this, _, bi).call(this) : X(this, i, Ie).call(this), this.width) {
                const [l, R] = this.parentDimensions;
                this.setAt(k * l, a * R, this.width * l, this.height * R);
              }
              return this.div;
            }
            static deserialize(k, a, l) {
              if (k instanceof V.StampAnnotationElement)
                return null;
              const R = super.deserialize(k, a, l), {
                rect: $,
                bitmapUrl: W,
                bitmapId: nt,
                isSvg: st
              } = k;
              nt && l.imageManager.isValidId(nt) ? it(R, d, nt) : it(R, F, W), it(R, u, st);
              const [ut, wt] = R.pageDimensions;
              return R.width = ($[2] - $[0]) / ut, R.height = ($[3] - $[1]) / wt, R;
            }
            serialize(k = !1, a = null) {
              if (this.isEmpty())
                return null;
              const l = {
                annotationType: n.AnnotationEditorType.STAMP,
                bitmapId: t(this, d),
                pageIndex: this.pageIndex,
                rect: this.getRect(0, 0),
                rotation: this.rotation,
                isSvg: t(this, u)
              };
              if (k)
                return l.bitmapUrl = X(this, Z, De).call(this, !0), l;
              if (a === null)
                return l;
              a.stamps || (a.stamps = /* @__PURE__ */ new Map());
              const R = t(this, u) ? (l.rect[2] - l.rect[0]) * (l.rect[3] - l.rect[1]) : null;
              if (!a.stamps.has(t(this, d)))
                a.stamps.set(t(this, d), {
                  area: R,
                  serialized: l
                }), l.bitmap = X(this, Z, De).call(this, !1);
              else if (t(this, u)) {
                const $ = a.stamps.get(t(this, d));
                R > $.area && ($.area = R, $.serialized.bitmap.close(), $.serialized.bitmap = X(this, Z, De).call(this, !1));
              }
              return l;
            }
          };
          c = new WeakMap(), d = new WeakMap(), r = new WeakMap(), F = new WeakMap(), M = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), u = new WeakMap(), y = new WeakMap(), b = new WeakSet(), be = function(k, a = !1) {
            if (!k) {
              this.remove();
              return;
            }
            it(this, c, k.bitmap), a || (it(this, d, k.id), it(this, u, k.isSvg)), X(this, _, bi).call(this);
          }, w = new WeakSet(), ve = function() {
            it(this, r, null), this._uiManager.enableWaiting(!1), t(this, S) && this.div.focus();
          }, i = new WeakSet(), Ie = function() {
            if (t(this, d)) {
              this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(t(this, d)).then((a) => X(this, b, be).call(this, a, !0)).finally(() => X(this, w, ve).call(this));
              return;
            }
            if (t(this, F)) {
              const a = t(this, F);
              it(this, F, null), this._uiManager.enableWaiting(!0), it(this, r, this._uiManager.imageManager.getFromUrl(a).then((l) => X(this, b, be).call(this, l)).finally(() => X(this, w, ve).call(this)));
              return;
            }
            if (t(this, M)) {
              const a = t(this, M);
              it(this, M, null), this._uiManager.enableWaiting(!0), it(this, r, this._uiManager.imageManager.getFromFile(a).then((l) => X(this, b, be).call(this, l)).finally(() => X(this, w, ve).call(this)));
              return;
            }
            const k = document.createElement("input");
            k.type = "file", k.accept = D.supportedTypesStr, it(this, r, new Promise((a) => {
              k.addEventListener("change", async () => {
                if (!k.files || k.files.length === 0)
                  this.remove();
                else {
                  this._uiManager.enableWaiting(!0);
                  const l = await this._uiManager.imageManager.getFromFile(k.files[0]);
                  X(this, b, be).call(this, l);
                }
                a();
              }), k.addEventListener("cancel", () => {
                this.remove(), a();
              });
            }).finally(() => X(this, w, ve).call(this))), k.click();
          }, _ = new WeakSet(), bi = function() {
            const {
              div: k
            } = this;
            let {
              width: a,
              height: l
            } = t(this, c);
            const [R, $] = this.pageDimensions, W = 0.75;
            if (this.width)
              a = this.width * R, l = this.height * $;
            else if (a > W * R || l > W * $) {
              const wt = Math.min(W * R / a, W * $ / l);
              a *= wt, l *= wt;
            }
            const [nt, st] = this.parentDimensions;
            this.setDims(a * nt / R, l * st / $), this._uiManager.enableWaiting(!1);
            const ut = it(this, S, document.createElement("canvas"));
            k.append(ut), k.hidden = !1, X(this, x, vi).call(this, a, l), X(this, v, Tn).call(this), t(this, y) || (this.parent.addUndoableEditor(this), it(this, y, !0));
          }, T = new WeakSet(), Pn = function(k, a) {
            var W;
            const [l, R] = this.parentDimensions;
            this.width = k / l, this.height = a / R, this.setDims(k, a), (W = this._initialOptions) != null && W.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, t(this, p) !== null && clearTimeout(t(this, p)), it(this, p, setTimeout(() => {
              it(this, p, null), X(this, x, vi).call(this, k, a);
            }, 200));
          }, Y = new WeakSet(), Cn = function(k, a) {
            const {
              width: l,
              height: R
            } = t(this, c);
            let $ = l, W = R, nt = t(this, c);
            for (; $ > 2 * k || W > 2 * a; ) {
              const st = $, ut = W;
              $ > 2 * k && ($ = $ >= 16384 ? Math.floor($ / 2) - 1 : Math.ceil($ / 2)), W > 2 * a && (W = W >= 16384 ? Math.floor(W / 2) - 1 : Math.ceil(W / 2));
              const wt = new OffscreenCanvas($, W);
              wt.getContext("2d").drawImage(nt, 0, 0, st, ut, 0, 0, $, W), nt = wt.transferToImageBitmap();
            }
            return nt;
          }, x = new WeakSet(), vi = function(k, a) {
            k = Math.ceil(k), a = Math.ceil(a);
            const l = t(this, S);
            if (!l || l.width === k && l.height === a)
              return;
            l.width = k, l.height = a;
            const R = t(this, u) ? t(this, c) : X(this, Y, Cn).call(this, k, a), $ = l.getContext("2d");
            $.filter = this._uiManager.hcmFilter, $.drawImage(R, 0, 0, R.width, R.height, 0, 0, k, a);
          }, Z = new WeakSet(), De = function(k) {
            if (k) {
              if (t(this, u)) {
                const R = this._uiManager.imageManager.getSvgUrl(t(this, d));
                if (R)
                  return R;
              }
              const a = document.createElement("canvas");
              return {
                width: a.width,
                height: a.height
              } = t(this, c), a.getContext("2d").drawImage(t(this, c), 0, 0), a.toDataURL();
            }
            if (t(this, u)) {
              const [a, l] = this.pageDimensions, R = Math.round(this.width * a * q.PixelsPerInch.PDF_TO_CSS_UNITS), $ = Math.round(this.height * l * q.PixelsPerInch.PDF_TO_CSS_UNITS), W = new OffscreenCanvas(R, $);
              return W.getContext("2d").drawImage(t(this, c), 0, 0, t(this, c).width, t(this, c).height, 0, 0, R, $), W.transferToImageBitmap();
            }
            return structuredClone(t(this, c));
          }, v = new WeakSet(), Tn = function() {
            it(this, h, new ResizeObserver((k) => {
              const a = k[0].contentRect;
              a.width && a.height && X(this, T, Pn).call(this, a.width, a.height);
            })), t(this, h).observe(this.div);
          }, Zt(D, "_type", "stamp");
          let I = D;
          e.StampEditor = I;
        }
        /******/
      ], __webpack_module_cache__ = {};
      function __w_pdfjs_require__(A) {
        var e = __webpack_module_cache__[A];
        if (e !== void 0)
          return e.exports;
        var L = __webpack_module_cache__[A] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return __webpack_modules__[A](L, L.exports, __w_pdfjs_require__), L.exports;
      }
      var __webpack_exports__ = {};
      return (() => {
        var A = __webpack_exports__;
        Object.defineProperty(A, "__esModule", {
          value: !0
        }), Object.defineProperty(A, "AbortException", {
          enumerable: !0,
          get: function() {
            return e.AbortException;
          }
        }), Object.defineProperty(A, "AnnotationEditorLayer", {
          enumerable: !0,
          get: function() {
            return q.AnnotationEditorLayer;
          }
        }), Object.defineProperty(A, "AnnotationEditorParamsType", {
          enumerable: !0,
          get: function() {
            return e.AnnotationEditorParamsType;
          }
        }), Object.defineProperty(A, "AnnotationEditorType", {
          enumerable: !0,
          get: function() {
            return e.AnnotationEditorType;
          }
        }), Object.defineProperty(A, "AnnotationEditorUIManager", {
          enumerable: !0,
          get: function() {
            return V.AnnotationEditorUIManager;
          }
        }), Object.defineProperty(A, "AnnotationLayer", {
          enumerable: !0,
          get: function() {
            return I.AnnotationLayer;
          }
        }), Object.defineProperty(A, "AnnotationMode", {
          enumerable: !0,
          get: function() {
            return e.AnnotationMode;
          }
        }), Object.defineProperty(A, "CMapCompressionType", {
          enumerable: !0,
          get: function() {
            return e.CMapCompressionType;
          }
        }), Object.defineProperty(A, "FeatureTest", {
          enumerable: !0,
          get: function() {
            return e.FeatureTest;
          }
        }), Object.defineProperty(A, "GlobalWorkerOptions", {
          enumerable: !0,
          get: function() {
            return c.GlobalWorkerOptions;
          }
        }), Object.defineProperty(A, "ImageKind", {
          enumerable: !0,
          get: function() {
            return e.ImageKind;
          }
        }), Object.defineProperty(A, "InvalidPDFException", {
          enumerable: !0,
          get: function() {
            return e.InvalidPDFException;
          }
        }), Object.defineProperty(A, "MissingPDFException", {
          enumerable: !0,
          get: function() {
            return e.MissingPDFException;
          }
        }), Object.defineProperty(A, "OPS", {
          enumerable: !0,
          get: function() {
            return e.OPS;
          }
        }), Object.defineProperty(A, "PDFDataRangeTransport", {
          enumerable: !0,
          get: function() {
            return L.PDFDataRangeTransport;
          }
        }), Object.defineProperty(A, "PDFDateString", {
          enumerable: !0,
          get: function() {
            return n.PDFDateString;
          }
        }), Object.defineProperty(A, "PDFWorker", {
          enumerable: !0,
          get: function() {
            return L.PDFWorker;
          }
        }), Object.defineProperty(A, "PasswordResponses", {
          enumerable: !0,
          get: function() {
            return e.PasswordResponses;
          }
        }), Object.defineProperty(A, "PermissionFlag", {
          enumerable: !0,
          get: function() {
            return e.PermissionFlag;
          }
        }), Object.defineProperty(A, "PixelsPerInch", {
          enumerable: !0,
          get: function() {
            return n.PixelsPerInch;
          }
        }), Object.defineProperty(A, "PromiseCapability", {
          enumerable: !0,
          get: function() {
            return e.PromiseCapability;
          }
        }), Object.defineProperty(A, "RenderingCancelledException", {
          enumerable: !0,
          get: function() {
            return n.RenderingCancelledException;
          }
        }), Object.defineProperty(A, "SVGGraphics", {
          enumerable: !0,
          get: function() {
            return L.SVGGraphics;
          }
        }), Object.defineProperty(A, "UnexpectedResponseException", {
          enumerable: !0,
          get: function() {
            return e.UnexpectedResponseException;
          }
        }), Object.defineProperty(A, "Util", {
          enumerable: !0,
          get: function() {
            return e.Util;
          }
        }), Object.defineProperty(A, "VerbosityLevel", {
          enumerable: !0,
          get: function() {
            return e.VerbosityLevel;
          }
        }), Object.defineProperty(A, "XfaLayer", {
          enumerable: !0,
          get: function() {
            return d.XfaLayer;
          }
        }), Object.defineProperty(A, "build", {
          enumerable: !0,
          get: function() {
            return L.build;
          }
        }), Object.defineProperty(A, "createValidAbsoluteUrl", {
          enumerable: !0,
          get: function() {
            return e.createValidAbsoluteUrl;
          }
        }), Object.defineProperty(A, "getDocument", {
          enumerable: !0,
          get: function() {
            return L.getDocument;
          }
        }), Object.defineProperty(A, "getFilenameFromUrl", {
          enumerable: !0,
          get: function() {
            return n.getFilenameFromUrl;
          }
        }), Object.defineProperty(A, "getPdfFilenameFromUrl", {
          enumerable: !0,
          get: function() {
            return n.getPdfFilenameFromUrl;
          }
        }), Object.defineProperty(A, "getXfaPageViewport", {
          enumerable: !0,
          get: function() {
            return n.getXfaPageViewport;
          }
        }), Object.defineProperty(A, "isDataScheme", {
          enumerable: !0,
          get: function() {
            return n.isDataScheme;
          }
        }), Object.defineProperty(A, "isPdfFile", {
          enumerable: !0,
          get: function() {
            return n.isPdfFile;
          }
        }), Object.defineProperty(A, "loadScript", {
          enumerable: !0,
          get: function() {
            return n.loadScript;
          }
        }), Object.defineProperty(A, "normalizeUnicode", {
          enumerable: !0,
          get: function() {
            return e.normalizeUnicode;
          }
        }), Object.defineProperty(A, "renderTextLayer", {
          enumerable: !0,
          get: function() {
            return f.renderTextLayer;
          }
        }), Object.defineProperty(A, "setLayerDimensions", {
          enumerable: !0,
          get: function() {
            return n.setLayerDimensions;
          }
        }), Object.defineProperty(A, "shadow", {
          enumerable: !0,
          get: function() {
            return e.shadow;
          }
        }), Object.defineProperty(A, "updateTextLayer", {
          enumerable: !0,
          get: function() {
            return f.updateTextLayer;
          }
        }), Object.defineProperty(A, "version", {
          enumerable: !0,
          get: function() {
            return L.version;
          }
        });
        var e = __w_pdfjs_require__(1), L = __w_pdfjs_require__(2), n = __w_pdfjs_require__(6), f = __w_pdfjs_require__(26), q = __w_pdfjs_require__(27), V = __w_pdfjs_require__(5), I = __w_pdfjs_require__(29), c = __w_pdfjs_require__(14), d = __w_pdfjs_require__(32);
      })(), __webpack_exports__;
    })()
  ));
})(pdf);
var pdfExports = pdf.exports, pdf_viewer$1 = { exports: {} };
(function(A, e) {
  (function(n, f) {
    A.exports = n.pdfjsViewer = f();
  })(globalThis, () => (
    /******/
    (() => {
      var L = [
        ,
        /* 1 */
        /***/
        (V, I, c) => {
          var Z, Q, v, j, xn, lt, yi, k, Ai, l, Mn, $, kn, nt, Ln, ut, Si, yt, Rn, ot, Fn, St, Oe, Bt, ye, Ut, ue, J, In, dt, Ei, Ot, wi, Wt, Ne, Ht, Dn, Gt, Pi, m, Ci, ht, Ae;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.PDFFindController = I.FindState = void 0;
          var d = c(2), r = c(3), F = c(4);
          const M = {
            FOUND: 0,
            NOT_FOUND: 1,
            WRAPPED: 2,
            PENDING: 3
          };
          I.FindState = M;
          const S = 250, h = -50, p = -400, u = {
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
          }, y = /* @__PURE__ */ new Set([12441, 12442, 2381, 2509, 2637, 2765, 2893, 3021, 3149, 3277, 3387, 3388, 3405, 3530, 3642, 3770, 3972, 4153, 4154, 5908, 5940, 6098, 6752, 6980, 7082, 7083, 7154, 7155, 11647, 43014, 43052, 43204, 43347, 43456, 43766, 44013, 3158, 3953, 3954, 3962, 3963, 3964, 3965, 3968, 3956]);
          let b;
          const g = /\p{M}+/gu, w = /([.*+?^${}()|[\]\\])|(\p{P})|(\s+)|(\p{M})|(\p{L})/gu, s = /([^\p{M}])\p{M}*$/u, i = /^\p{M}*([^\p{M}])/u, E = /[\uAC00-\uD7AF\uFA6C\uFACF-\uFAD1\uFAD5-\uFAD7]+/g, _ = /* @__PURE__ */ new Map(), o = "[\\u1100-\\u1112\\ud7a4-\\ud7af\\ud84a\\ud84c\\ud850\\ud854\\ud857\\ud85f]", T = /* @__PURE__ */ new Map();
          let P = null, Y = null;
          function tt(Pt) {
            const pt = [];
            let vt;
            for (; (vt = E.exec(Pt)) !== null; ) {
              let {
                index: Mt
              } = vt;
              for (const G of vt[0]) {
                let ct = _.get(G);
                ct || (ct = G.normalize("NFD").length, _.set(G, ct)), pt.push([ct, Mt++]);
              }
            }
            let U;
            if (pt.length === 0 && P)
              U = P;
            else if (pt.length > 0 && Y)
              U = Y;
            else {
              const Mt = Object.keys(u).join(""), G = (0, r.getNormalizeWithNFKC)(), It = `([${Mt}])|([${G}])|((?:゙|゚)\\n)|(\\p{M}+(?:-\\n)?)|(\\S-\\n)|((?:\\p{Ideographic}|[぀-ヿ])\\n)|(\\n)`;
              pt.length === 0 ? U = P = new RegExp(It + "|(\\u0000)", "gum") : U = Y = new RegExp(It + `|(${o})`, "gum");
            }
            const gt = [];
            for (; (vt = g.exec(Pt)) !== null; )
              gt.push([vt[0].length, vt.index]);
            let Ft = Pt.normalize("NFD");
            const bt = [[0, 0]];
            let O = 0, C = 0, z = 0, H = 0, et = 0, ft = !1;
            return Ft = Ft.replace(U, (Mt, G, ct, mt, It, Tt, Dt, Vt, zt, Xt) => {
              var qt, Qt, Yt;
              if (Xt -= H, G) {
                const Kt = u[G], te = Kt.length;
                for (let Jt = 1; Jt < te; Jt++)
                  bt.push([Xt - z + Jt, z - Jt]);
                return z -= te - 1, Kt;
              }
              if (ct) {
                let Kt = T.get(ct);
                Kt || (Kt = ct.normalize("NFKC"), T.set(ct, Kt));
                const te = Kt.length;
                for (let Jt = 1; Jt < te; Jt++)
                  bt.push([Xt - z + Jt, z - Jt]);
                return z -= te - 1, Kt;
              }
              if (mt)
                return ft = !0, Xt + et === ((qt = gt[O]) == null ? void 0 : qt[1]) ? ++O : (bt.push([Xt - 1 - z + 1, z - 1]), z -= 1, H += 1), bt.push([Xt - z + 1, z]), H += 1, et += 1, mt.charAt(0);
              if (It) {
                const Kt = It.endsWith(`
`), te = Kt ? It.length - 2 : It.length;
                ft = !0;
                let Jt = te;
                Xt + et === ((Qt = gt[O]) == null ? void 0 : Qt[1]) && (Jt -= gt[O][0], ++O);
                for (let ee = 1; ee <= Jt; ee++)
                  bt.push([Xt - 1 - z + ee, z - ee]);
                return z -= Jt, H += Jt, Kt ? (Xt += te - 1, bt.push([Xt - z + 1, 1 + z]), z += 1, H += 1, et += 1, It.slice(0, te)) : It;
              }
              if (Tt) {
                const Kt = Tt.length - 2;
                return bt.push([Xt - z + Kt, 1 + z]), z += 1, H += 1, et += 1, Tt.slice(0, -2);
              }
              if (Dt) {
                const Kt = Dt.length - 1;
                return bt.push([Xt - z + Kt, z]), H += 1, et += 1, Dt.slice(0, -1);
              }
              if (Vt)
                return bt.push([Xt - z + 1, z - 1]), z -= 1, H += 1, et += 1, " ";
              if (Xt + et === ((Yt = pt[C]) == null ? void 0 : Yt[1])) {
                const Kt = pt[C][0] - 1;
                ++C;
                for (let te = 1; te <= Kt; te++)
                  bt.push([Xt - (z - te), z - te]);
                z -= Kt, H += Kt;
              }
              return zt;
            }), bt.push([Ft.length, z]), [Ft, bt, ft];
          }
          function x(Pt, pt, vt) {
            if (!Pt)
              return [pt, vt];
            const U = pt, gt = pt + vt - 1;
            let Ft = (0, d.binarySearchFirstItem)(Pt, (H) => H[0] >= U);
            Pt[Ft][0] > U && --Ft;
            let bt = (0, d.binarySearchFirstItem)(Pt, (H) => H[0] >= gt, Ft);
            Pt[bt][0] > gt && --bt;
            const O = U + Pt[Ft][1], z = gt + Pt[bt][1] + 1 - O;
            return [O, z];
          }
          class K {
            constructor({
              linkService: pt,
              eventBus: vt,
              updateMatchesCountOnProgress: U = !0
            }) {
              N(this, j);
              N(this, lt);
              N(this, k);
              N(this, l);
              N(this, $);
              N(this, nt);
              N(this, ut);
              N(this, yt);
              N(this, ot);
              N(this, St);
              N(this, Bt);
              N(this, Ut);
              N(this, J);
              N(this, dt);
              N(this, Ot);
              N(this, Wt);
              N(this, Ht);
              N(this, Gt);
              N(this, m);
              N(this, ht);
              N(this, Z, null);
              N(this, Q, !0);
              N(this, v, 0);
              this._linkService = pt, this._eventBus = vt, it(this, Q, U), this.onIsPageVisible = null, X(this, lt, yi).call(this), vt._on("find", X(this, j, xn).bind(this)), vt._on("findbarclose", X(this, Ht, Dn).bind(this));
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
              return t(this, Z);
            }
            setDocument(pt) {
              this._pdfDocument && X(this, lt, yi).call(this), pt && (this._pdfDocument = pt, this._firstPageCapability.resolve());
            }
            scrollMatchIntoView({
              element: pt = null,
              selectedLeft: vt = 0,
              pageIndex: U = -1,
              matchIndex: gt = -1
            }) {
              if (!this._scrollMatches || !pt)
                return;
              if (gt === -1 || gt !== this._selected.matchIdx)
                return;
              if (U === -1 || U !== this._selected.pageIdx)
                return;
              this._scrollMatches = !1;
              const Ft = {
                top: h,
                left: vt + p
              };
              (0, d.scrollIntoView)(pt, Ft, !0);
            }
          }
          Z = new WeakMap(), Q = new WeakMap(), v = new WeakMap(), j = new WeakSet(), xn = function(pt) {
            if (!pt)
              return;
            pt.phraseSearch === !1 && (console.error("The `phraseSearch`-parameter was removed, please provide an Array of strings in the `query`-parameter instead."), typeof pt.query == "string" && (pt.query = pt.query.match(/\S+/g)));
            const vt = this._pdfDocument, {
              type: U
            } = pt;
            (t(this, Z) === null || X(this, l, Mn).call(this, pt)) && (this._dirtyMatch = !0), it(this, Z, pt), U !== "highlightallchange" && X(this, ht, Ae).call(this, M.PENDING), this._firstPageCapability.promise.then(() => {
              if (!this._pdfDocument || vt && this._pdfDocument !== vt)
                return;
              X(this, ot, Fn).call(this);
              const gt = !this._highlightMatches, Ft = !!this._findTimeout;
              this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), U ? this._dirtyMatch ? X(this, Ut, ue).call(this) : U === "again" ? (X(this, Ut, ue).call(this), gt && t(this, Z).highlightAll && X(this, Bt, ye).call(this)) : U === "highlightallchange" ? (Ft ? X(this, Ut, ue).call(this) : this._highlightMatches = !0, X(this, Bt, ye).call(this)) : X(this, Ut, ue).call(this) : this._findTimeout = setTimeout(() => {
                X(this, Ut, ue).call(this), this._findTimeout = null;
              }, S);
            });
          }, lt = new WeakSet(), yi = function() {
            this._highlightMatches = !1, this._scrollMatches = !1, this._pdfDocument = null, this._pageMatches = [], this._pageMatchesLength = [], it(this, v, 0), it(this, Z, null), this._selected = {
              pageIdx: -1,
              matchIdx: -1
            }, this._offset = {
              pageIdx: null,
              matchIdx: null,
              wrapped: !1
            }, this._extractTextPromises = [], this._pageContents = [], this._pageDiffs = [], this._hasDiacritics = [], this._matchesCountTotal = 0, this._pagesToSearch = null, this._pendingFindMatches = /* @__PURE__ */ new Set(), this._resumePageIdx = null, this._dirtyMatch = !1, clearTimeout(this._findTimeout), this._findTimeout = null, this._firstPageCapability = new F.PromiseCapability();
          }, k = new WeakSet(), Ai = function() {
            const {
              query: pt
            } = t(this, Z);
            return typeof pt == "string" ? (pt !== this._rawQuery && (this._rawQuery = pt, [this._normalizedQuery] = tt(pt)), this._normalizedQuery) : (pt || []).filter((vt) => !!vt).map((vt) => tt(vt)[0]);
          }, l = new WeakSet(), Mn = function(pt) {
            var bt;
            const vt = pt.query, U = t(this, Z).query, gt = typeof vt;
            if (gt !== typeof U)
              return !0;
            if (gt === "string") {
              if (vt !== U)
                return !0;
            } else if (JSON.stringify(vt) !== JSON.stringify(U))
              return !0;
            switch (pt.type) {
              case "again":
                const O = this._selected.pageIdx + 1, C = this._linkService;
                return O >= 1 && O <= C.pagesCount && O !== C.page && !(((bt = this.onIsPageVisible) == null ? void 0 : bt.call(this, O)) ?? !0);
              case "highlightallchange":
                return !1;
            }
            return !0;
          }, $ = new WeakSet(), kn = function(pt, vt, U) {
            let gt = pt.slice(0, vt).match(s);
            if (gt) {
              const Ft = pt.charCodeAt(vt), bt = gt[1].charCodeAt(0);
              if ((0, r.getCharacterType)(Ft) === (0, r.getCharacterType)(bt))
                return !1;
            }
            if (gt = pt.slice(vt + U).match(i), gt) {
              const Ft = pt.charCodeAt(vt + U - 1), bt = gt[1].charCodeAt(0);
              if ((0, r.getCharacterType)(Ft) === (0, r.getCharacterType)(bt))
                return !1;
            }
            return !0;
          }, nt = new WeakSet(), Ln = function(pt, vt, U, gt) {
            const Ft = this._pageMatches[U] = [], bt = this._pageMatchesLength[U] = [];
            if (!pt)
              return;
            const O = this._pageDiffs[U];
            let C;
            for (; (C = pt.exec(gt)) !== null; ) {
              if (vt && !X(this, $, kn).call(this, gt, C.index, C[0].length))
                continue;
              const [z, H] = x(O, C.index, C[0].length);
              H && (Ft.push(z), bt.push(H));
            }
          }, ut = new WeakSet(), Si = function(pt, vt) {
            const {
              matchDiacritics: U
            } = t(this, Z);
            let gt = !1;
            pt = pt.replaceAll(w, (bt, O, C, z, H, et) => O ? `[ ]*\\${O}[ ]*` : C ? `[ ]*${C}[ ]*` : z ? "[ ]+" : U ? H || et : H ? y.has(H.charCodeAt(0)) ? H : "" : vt ? (gt = !0, `${et}\\p{M}*`) : et);
            const Ft = "[ ]*";
            return pt.endsWith(Ft) && (pt = pt.slice(0, pt.length - Ft.length)), U && vt && (b || (b = String.fromCharCode(...y)), gt = !0, pt = `${pt}(?=[${b}]|[^\\p{M}]|$)`), [gt, pt];
          }, yt = new WeakSet(), Rn = function(pt) {
            let vt = t(this, k, Ai);
            if (vt.length === 0)
              return;
            const {
              caseSensitive: U,
              entireWord: gt
            } = t(this, Z), Ft = this._pageContents[pt], bt = this._hasDiacritics[pt];
            let O = !1;
            typeof vt == "string" ? [O, vt] = X(this, ut, Si).call(this, vt, bt) : vt = vt.sort().reverse().map((H) => {
              const [et, ft] = X(this, ut, Si).call(this, H, bt);
              return O || (O = et), `(${ft})`;
            }).join("|");
            const C = `g${O ? "u" : ""}${U ? "" : "i"}`;
            vt = vt ? new RegExp(vt, C) : null, X(this, nt, Ln).call(this, vt, gt, pt, Ft), t(this, Z).highlightAll && X(this, St, Oe).call(this, pt), this._resumePageIdx === pt && (this._resumePageIdx = null, X(this, dt, Ei).call(this));
            const z = this._pageMatches[pt].length;
            this._matchesCountTotal += z, t(this, Q) ? z > 0 && X(this, m, Ci).call(this) : ++ae(this, v)._ === this._linkService.pagesCount && X(this, m, Ci).call(this);
          }, ot = new WeakSet(), Fn = function() {
            if (this._extractTextPromises.length > 0)
              return;
            let pt = Promise.resolve();
            const vt = {
              disableNormalization: !0
            };
            for (let U = 0, gt = this._linkService.pagesCount; U < gt; U++) {
              const Ft = new F.PromiseCapability();
              this._extractTextPromises[U] = Ft.promise, pt = pt.then(() => this._pdfDocument.getPage(U + 1).then((bt) => bt.getTextContent(vt)).then((bt) => {
                const O = [];
                for (const C of bt.items)
                  O.push(C.str), C.hasEOL && O.push(`
`);
                [this._pageContents[U], this._pageDiffs[U], this._hasDiacritics[U]] = tt(O.join("")), Ft.resolve();
              }, (bt) => {
                console.error(`Unable to get text content for page ${U + 1}`, bt), this._pageContents[U] = "", this._pageDiffs[U] = null, this._hasDiacritics[U] = !1, Ft.resolve();
              }));
            }
          }, St = new WeakSet(), Oe = function(pt) {
            this._scrollMatches && this._selected.pageIdx === pt && (this._linkService.page = pt + 1), this._eventBus.dispatch("updatetextlayermatches", {
              source: this,
              pageIndex: pt
            });
          }, Bt = new WeakSet(), ye = function() {
            this._eventBus.dispatch("updatetextlayermatches", {
              source: this,
              pageIndex: -1
            });
          }, Ut = new WeakSet(), ue = function() {
            const pt = t(this, Z).findPrevious, vt = this._linkService.page - 1, U = this._linkService.pagesCount;
            if (this._highlightMatches = !0, this._dirtyMatch) {
              this._dirtyMatch = !1, this._selected.pageIdx = this._selected.matchIdx = -1, this._offset.pageIdx = vt, this._offset.matchIdx = null, this._offset.wrapped = !1, this._resumePageIdx = null, this._pageMatches.length = 0, this._pageMatchesLength.length = 0, it(this, v, 0), this._matchesCountTotal = 0, X(this, Bt, ye).call(this);
              for (let bt = 0; bt < U; bt++)
                this._pendingFindMatches.has(bt) || (this._pendingFindMatches.add(bt), this._extractTextPromises[bt].then(() => {
                  this._pendingFindMatches.delete(bt), X(this, yt, Rn).call(this, bt);
                }));
            }
            if (t(this, k, Ai).length === 0) {
              X(this, ht, Ae).call(this, M.FOUND);
              return;
            }
            if (this._resumePageIdx)
              return;
            const Ft = this._offset;
            if (this._pagesToSearch = U, Ft.matchIdx !== null) {
              const bt = this._pageMatches[Ft.pageIdx].length;
              if (!pt && Ft.matchIdx + 1 < bt || pt && Ft.matchIdx > 0) {
                Ft.matchIdx = pt ? Ft.matchIdx - 1 : Ft.matchIdx + 1, X(this, Wt, Ne).call(this, !0);
                return;
              }
              X(this, Ot, wi).call(this, pt);
            }
            X(this, dt, Ei).call(this);
          }, J = new WeakSet(), In = function(pt) {
            const vt = this._offset, U = pt.length, gt = t(this, Z).findPrevious;
            return U ? (vt.matchIdx = gt ? U - 1 : 0, X(this, Wt, Ne).call(this, !0), !0) : (X(this, Ot, wi).call(this, gt), vt.wrapped && (vt.matchIdx = null, this._pagesToSearch < 0) ? (X(this, Wt, Ne).call(this, !1), !0) : !1);
          }, dt = new WeakSet(), Ei = function() {
            this._resumePageIdx !== null && console.error("There can only be one pending page.");
            let pt = null;
            do {
              const vt = this._offset.pageIdx;
              if (pt = this._pageMatches[vt], !pt) {
                this._resumePageIdx = vt;
                break;
              }
            } while (!X(this, J, In).call(this, pt));
          }, Ot = new WeakSet(), wi = function(pt) {
            const vt = this._offset, U = this._linkService.pagesCount;
            vt.pageIdx = pt ? vt.pageIdx - 1 : vt.pageIdx + 1, vt.matchIdx = null, this._pagesToSearch--, (vt.pageIdx >= U || vt.pageIdx < 0) && (vt.pageIdx = pt ? U - 1 : 0, vt.wrapped = !0);
          }, Wt = new WeakSet(), Ne = function(pt = !1) {
            let vt = M.NOT_FOUND;
            const U = this._offset.wrapped;
            if (this._offset.wrapped = !1, pt) {
              const gt = this._selected.pageIdx;
              this._selected.pageIdx = this._offset.pageIdx, this._selected.matchIdx = this._offset.matchIdx, vt = U ? M.WRAPPED : M.FOUND, gt !== -1 && gt !== this._selected.pageIdx && X(this, St, Oe).call(this, gt);
            }
            X(this, ht, Ae).call(this, vt, t(this, Z).findPrevious), this._selected.pageIdx !== -1 && (this._scrollMatches = !0, X(this, St, Oe).call(this, this._selected.pageIdx));
          }, Ht = new WeakSet(), Dn = function(pt) {
            const vt = this._pdfDocument;
            this._firstPageCapability.promise.then(() => {
              !this._pdfDocument || vt && this._pdfDocument !== vt || (this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), this._resumePageIdx && (this._resumePageIdx = null, this._dirtyMatch = !0), X(this, ht, Ae).call(this, M.FOUND), this._highlightMatches = !1, X(this, Bt, ye).call(this));
            });
          }, Gt = new WeakSet(), Pi = function() {
            var Ft;
            const {
              pageIdx: pt,
              matchIdx: vt
            } = this._selected;
            let U = 0, gt = this._matchesCountTotal;
            if (vt !== -1) {
              for (let bt = 0; bt < pt; bt++)
                U += ((Ft = this._pageMatches[bt]) == null ? void 0 : Ft.length) || 0;
              U += vt + 1;
            }
            return (U < 1 || U > gt) && (U = gt = 0), {
              current: U,
              total: gt
            };
          }, m = new WeakSet(), Ci = function() {
            this._eventBus.dispatch("updatefindmatchescount", {
              source: this,
              matchesCount: X(this, Gt, Pi).call(this)
            });
          }, ht = new WeakSet(), Ae = function(pt, vt = !1) {
            var U;
            !t(this, Q) && (t(this, v) !== this._linkService.pagesCount || pt === M.PENDING) || this._eventBus.dispatch("updatefindcontrolstate", {
              source: this,
              state: pt,
              previous: vt,
              matchesCount: X(this, Gt, Pi).call(this),
              rawQuery: ((U = t(this, Z)) == null ? void 0 : U.query) ?? null
            });
          }, I.PDFFindController = K;
        },
        /* 2 */
        /***/
        (V, I) => {
          var St, Rt, Bt, kt, Ut;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.animationStarted = I.VERTICAL_PADDING = I.UNKNOWN_SCALE = I.TextLayerMode = I.SpreadMode = I.SidebarView = I.ScrollMode = I.SCROLLBAR_PADDING = I.RenderingStates = I.ProgressBar = I.PresentationModeState = I.OutputScale = I.MIN_SCALE = I.MAX_SCALE = I.MAX_AUTO_SCALE = I.DEFAULT_SCALE_VALUE = I.DEFAULT_SCALE_DELTA = I.DEFAULT_SCALE = I.CursorTool = I.AutoPrintRegExp = void 0, I.apiPageLayoutToViewerModes = yt, I.apiPageModeToSidebarView = Et, I.approximateFraction = Z, I.backtrackBeforeAllVisibleElements = j, I.binarySearchFirstItem = K, I.docStyle = void 0, I.getActiveOrFocusedElement = wt, I.getPageSizeInches = v, I.getVisibleElements = D, I.isPortraitOrientation = $, I.isValidRotation = a, I.isValidScrollMode = l, I.isValidSpreadMode = R, I.noContextMenuHandler = lt, I.normalizeWheelEventDelta = k, I.normalizeWheelEventDirection = _t, I.parseQueryString = Y, I.removeNullCharacters = x, I.roundToDivide = Q, I.scrollIntoView = T, I.toggleCheckedBtn = ot, I.toggleExpandedBtn = At, I.watchScroll = P;
          const c = "auto";
          I.DEFAULT_SCALE_VALUE = c;
          const d = 1;
          I.DEFAULT_SCALE = d;
          const r = 1.1;
          I.DEFAULT_SCALE_DELTA = r;
          const F = 0.1;
          I.MIN_SCALE = F;
          const M = 10;
          I.MAX_SCALE = M;
          const S = 0;
          I.UNKNOWN_SCALE = S;
          const h = 1.25;
          I.MAX_AUTO_SCALE = h;
          const p = 40;
          I.SCROLLBAR_PADDING = p;
          const u = 5;
          I.VERTICAL_PADDING = u;
          const y = {
            INITIAL: 0,
            RUNNING: 1,
            PAUSED: 2,
            FINISHED: 3
          };
          I.RenderingStates = y;
          const b = {
            UNKNOWN: 0,
            NORMAL: 1,
            CHANGING: 2,
            FULLSCREEN: 3
          };
          I.PresentationModeState = b;
          const g = {
            UNKNOWN: -1,
            NONE: 0,
            THUMBS: 1,
            OUTLINE: 2,
            ATTACHMENTS: 3,
            LAYERS: 4
          };
          I.SidebarView = g;
          const w = {
            DISABLE: 0,
            ENABLE: 1,
            ENABLE_PERMISSIONS: 2
          };
          I.TextLayerMode = w;
          const s = {
            UNKNOWN: -1,
            VERTICAL: 0,
            HORIZONTAL: 1,
            WRAPPED: 2,
            PAGE: 3
          };
          I.ScrollMode = s;
          const i = {
            UNKNOWN: -1,
            NONE: 0,
            ODD: 1,
            EVEN: 2
          };
          I.SpreadMode = i;
          const E = {
            SELECT: 0,
            HAND: 1,
            ZOOM: 2
          };
          I.CursorTool = E;
          const _ = /\bprint\s*\(/;
          I.AutoPrintRegExp = _;
          class o {
            constructor() {
              const J = window.devicePixelRatio || 1;
              this.sx = J, this.sy = J;
            }
            get scaled() {
              return this.sx !== 1 || this.sy !== 1;
            }
          }
          I.OutputScale = o;
          function T(at, J, rt = !1) {
            let dt = at.offsetParent;
            if (!dt) {
              console.error("offsetParent is not set -- cannot scroll");
              return;
            }
            let xt = at.offsetTop + at.clientTop, Ot = at.offsetLeft + at.clientLeft;
            for (; dt.clientHeight === dt.scrollHeight && dt.clientWidth === dt.scrollWidth || rt && (dt.classList.contains("markedContent") || getComputedStyle(dt).overflow === "hidden"); )
              if (xt += dt.offsetTop, Ot += dt.offsetLeft, dt = dt.offsetParent, !dt)
                return;
            J && (J.top !== void 0 && (xt += J.top), J.left !== void 0 && (Ot += J.left, dt.scrollLeft = Ot)), dt.scrollTop = xt;
          }
          function P(at, J) {
            const rt = function(Ot) {
              xt || (xt = window.requestAnimationFrame(function() {
                xt = null;
                const Wt = at.scrollLeft, Nt = dt.lastX;
                Wt !== Nt && (dt.right = Wt > Nt), dt.lastX = Wt;
                const Ht = at.scrollTop, $t = dt.lastY;
                Ht !== $t && (dt.down = Ht > $t), dt.lastY = Ht, J(dt);
              }));
            }, dt = {
              right: !0,
              down: !0,
              lastX: at.scrollLeft,
              lastY: at.scrollTop,
              _eventHandler: rt
            };
            let xt = null;
            return at.addEventListener("scroll", rt, !0), dt;
          }
          function Y(at) {
            const J = /* @__PURE__ */ new Map();
            for (const [rt, dt] of new URLSearchParams(at))
              J.set(rt.toLowerCase(), dt);
            return J;
          }
          const tt = /[\x01-\x1F]/g;
          function x(at, J = !1) {
            return typeof at != "string" ? (console.error("The argument must be a string."), at) : (J && (at = at.replaceAll(tt, " ")), at.replaceAll("\0", ""));
          }
          function K(at, J, rt = 0) {
            let dt = rt, xt = at.length - 1;
            if (xt < 0 || !J(at[xt]))
              return at.length;
            if (J(at[dt]))
              return dt;
            for (; dt < xt; ) {
              const Ot = dt + xt >> 1, jt = at[Ot];
              J(jt) ? xt = Ot : dt = Ot + 1;
            }
            return dt;
          }
          function Z(at) {
            if (Math.floor(at) === at)
              return [at, 1];
            const J = 1 / at, rt = 8;
            if (J > rt)
              return [1, rt];
            if (Math.floor(J) === J)
              return [1, J];
            const dt = at > 1 ? J : at;
            let xt = 0, Ot = 1, jt = 1, Wt = 1;
            for (; ; ) {
              const Ht = xt + jt, $t = Ot + Wt;
              if ($t > rt)
                break;
              dt <= Ht / $t ? (jt = Ht, Wt = $t) : (xt = Ht, Ot = $t);
            }
            let Nt;
            return dt - xt / Ot < jt / Wt - dt ? Nt = dt === at ? [xt, Ot] : [Ot, xt] : Nt = dt === at ? [jt, Wt] : [Wt, jt], Nt;
          }
          function Q(at, J) {
            const rt = at % J;
            return rt === 0 ? at : Math.round(at - rt + J);
          }
          function v({
            view: at,
            userUnit: J,
            rotate: rt
          }) {
            const [dt, xt, Ot, jt] = at, Wt = rt % 180 !== 0, Nt = (Ot - dt) / 72 * J, Ht = (jt - xt) / 72 * J;
            return {
              width: Wt ? Ht : Nt,
              height: Wt ? Nt : Ht
            };
          }
          function j(at, J, rt) {
            if (at < 2)
              return at;
            let dt = J[at].div, xt = dt.offsetTop + dt.clientTop;
            xt >= rt && (dt = J[at - 1].div, xt = dt.offsetTop + dt.clientTop);
            for (let Ot = at - 2; Ot >= 0 && (dt = J[Ot].div, !(dt.offsetTop + dt.clientTop + dt.clientHeight <= xt)); --Ot)
              at = Ot;
            return at;
          }
          function D({
            scrollEl: at,
            views: J,
            sortByVisibility: rt = !1,
            horizontal: dt = !1,
            rtl: xt = !1
          }) {
            const Ot = at.scrollTop, jt = Ot + at.clientHeight, Wt = at.scrollLeft, Nt = Wt + at.clientWidth;
            function Ht(pt) {
              const vt = pt.div;
              return vt.offsetTop + vt.clientTop + vt.clientHeight > Ot;
            }
            function $t(pt) {
              const vt = pt.div, U = vt.offsetLeft + vt.clientLeft, gt = U + vt.clientWidth;
              return xt ? U < Nt : gt > Wt;
            }
            const Gt = [], Ct = /* @__PURE__ */ new Set(), m = J.length;
            let B = K(J, dt ? $t : Ht);
            B > 0 && B < m && !dt && (B = j(B, J, Ot));
            let ht = dt ? Nt : -1;
            for (let pt = B; pt < m; pt++) {
              const vt = J[pt], U = vt.div, gt = U.offsetLeft + U.clientLeft, Ft = U.offsetTop + U.clientTop, bt = U.clientWidth, O = U.clientHeight, C = gt + bt, z = Ft + O;
              if (ht === -1)
                z >= jt && (ht = z);
              else if ((dt ? gt : Ft) > ht)
                break;
              if (z <= Ot || Ft >= jt || C <= Wt || gt >= Nt)
                continue;
              const H = Math.max(0, Ot - Ft) + Math.max(0, z - jt), et = Math.max(0, Wt - gt) + Math.max(0, C - Nt), ft = (O - H) / O, Mt = (bt - et) / bt, G = ft * Mt * 100 | 0;
              Gt.push({
                id: vt.id,
                x: gt,
                y: Ft,
                view: vt,
                percent: G,
                widthPercent: Mt * 100 | 0
              }), Ct.add(vt.id);
            }
            const Lt = Gt[0], Pt = Gt.at(-1);
            return rt && Gt.sort(function(pt, vt) {
              const U = pt.percent - vt.percent;
              return Math.abs(U) > 1e-3 ? -U : pt.id - vt.id;
            }), {
              first: Lt,
              last: Pt,
              views: Gt,
              ids: Ct
            };
          }
          function lt(at) {
            at.preventDefault();
          }
          function _t(at) {
            let J = Math.hypot(at.deltaX, at.deltaY);
            const rt = Math.atan2(at.deltaY, at.deltaX);
            return -0.25 * Math.PI < rt && rt < 0.75 * Math.PI && (J = -J), J;
          }
          function k(at) {
            const J = at.deltaMode;
            let rt = _t(at);
            const dt = 30, xt = 30;
            return J === WheelEvent.DOM_DELTA_PIXEL ? rt /= dt * xt : J === WheelEvent.DOM_DELTA_LINE && (rt /= xt), rt;
          }
          function a(at) {
            return Number.isInteger(at) && at % 90 === 0;
          }
          function l(at) {
            return Number.isInteger(at) && Object.values(s).includes(at) && at !== s.UNKNOWN;
          }
          function R(at) {
            return Number.isInteger(at) && Object.values(i).includes(at) && at !== i.UNKNOWN;
          }
          function $(at) {
            return at.width <= at.height;
          }
          const W = new Promise(function(at) {
            window.requestAnimationFrame(at);
          });
          I.animationStarted = W;
          const nt = document.documentElement.style;
          I.docStyle = nt;
          function st(at, J, rt) {
            return Math.min(Math.max(at, J), rt);
          }
          class ut {
            constructor(J) {
              N(this, St, null);
              N(this, Rt, null);
              N(this, Bt, 0);
              N(this, kt, null);
              N(this, Ut, !0);
              it(this, St, J.classList), it(this, kt, J.style);
            }
            get percent() {
              return t(this, Bt);
            }
            set percent(J) {
              if (it(this, Bt, st(J, 0, 100)), isNaN(J)) {
                t(this, St).add("indeterminate");
                return;
              }
              t(this, St).remove("indeterminate"), t(this, kt).setProperty("--progressBar-percent", `${t(this, Bt)}%`);
            }
            setWidth(J) {
              if (!J)
                return;
              const dt = J.parentNode.offsetWidth - J.offsetWidth;
              dt > 0 && t(this, kt).setProperty("--progressBar-end-offset", `${dt}px`);
            }
            setDisableAutoFetch(J = 5e3) {
              isNaN(t(this, Bt)) || (t(this, Rt) && clearTimeout(t(this, Rt)), this.show(), it(this, Rt, setTimeout(() => {
                it(this, Rt, null), this.hide();
              }, J)));
            }
            hide() {
              t(this, Ut) && (it(this, Ut, !1), t(this, St).add("hidden"));
            }
            show() {
              t(this, Ut) || (it(this, Ut, !0), t(this, St).remove("hidden"));
            }
          }
          St = new WeakMap(), Rt = new WeakMap(), Bt = new WeakMap(), kt = new WeakMap(), Ut = new WeakMap(), I.ProgressBar = ut;
          function wt() {
            let at = document, J = at.activeElement || at.querySelector(":focus");
            for (; J != null && J.shadowRoot; )
              at = J.shadowRoot, J = at.activeElement || at.querySelector(":focus");
            return J;
          }
          function yt(at) {
            let J = s.VERTICAL, rt = i.NONE;
            switch (at) {
              case "SinglePage":
                J = s.PAGE;
                break;
              case "OneColumn":
                break;
              case "TwoPageLeft":
                J = s.PAGE;
              case "TwoColumnLeft":
                rt = i.ODD;
                break;
              case "TwoPageRight":
                J = s.PAGE;
              case "TwoColumnRight":
                rt = i.EVEN;
                break;
            }
            return {
              scrollMode: J,
              spreadMode: rt
            };
          }
          function Et(at) {
            switch (at) {
              case "UseNone":
                return g.NONE;
              case "UseThumbs":
                return g.THUMBS;
              case "UseOutlines":
                return g.OUTLINE;
              case "UseAttachments":
                return g.ATTACHMENTS;
              case "UseOC":
                return g.LAYERS;
            }
            return g.NONE;
          }
          function ot(at, J, rt = null) {
            at.classList.toggle("toggled", J), at.setAttribute("aria-checked", J), rt == null || rt.classList.toggle("hidden", !J);
          }
          function At(at, J, rt = null) {
            at.classList.toggle("toggled", J), at.setAttribute("aria-expanded", J), rt == null || rt.classList.toggle("hidden", !J);
          }
        },
        /* 3 */
        /***/
        (V, I) => {
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.CharacterType = void 0, I.getCharacterType = g, I.getNormalizeWithNFKC = s;
          const c = {
            SPACE: 0,
            ALPHA_LETTER: 1,
            PUNCT: 2,
            HAN_LETTER: 3,
            KATAKANA_LETTER: 4,
            HIRAGANA_LETTER: 5,
            HALFWIDTH_KATAKANA_LETTER: 6,
            THAI_LETTER: 7
          };
          I.CharacterType = c;
          function d(i) {
            return i < 11904;
          }
          function r(i) {
            return (i & 65408) === 0;
          }
          function F(i) {
            return i >= 97 && i <= 122 || i >= 65 && i <= 90;
          }
          function M(i) {
            return i >= 48 && i <= 57;
          }
          function S(i) {
            return i === 32 || i === 9 || i === 13 || i === 10;
          }
          function h(i) {
            return i >= 13312 && i <= 40959 || i >= 63744 && i <= 64255;
          }
          function p(i) {
            return i >= 12448 && i <= 12543;
          }
          function u(i) {
            return i >= 12352 && i <= 12447;
          }
          function y(i) {
            return i >= 65376 && i <= 65439;
          }
          function b(i) {
            return (i & 65408) === 3584;
          }
          function g(i) {
            return d(i) ? r(i) ? S(i) ? c.SPACE : F(i) || M(i) || i === 95 ? c.ALPHA_LETTER : c.PUNCT : b(i) ? c.THAI_LETTER : i === 160 ? c.SPACE : c.ALPHA_LETTER : h(i) ? c.HAN_LETTER : p(i) ? c.KATAKANA_LETTER : u(i) ? c.HIRAGANA_LETTER : y(i) ? c.HALFWIDTH_KATAKANA_LETTER : c.ALPHA_LETTER;
          }
          let w;
          function s() {
            return w || (w = " ¨ª¯²-µ¸-º¼-¾Ĳ-ĳĿ-ŀŉſǄ-ǌǱ-ǳʰ-ʸ˘-˝ˠ-ˤʹͺ;΄-΅·ϐ-ϖϰ-ϲϴ-ϵϹևٵ-ٸक़-य़ড়-ঢ়য়ਲ਼ਸ਼ਖ਼-ਜ਼ਫ਼ଡ଼-ଢ଼ำຳໜ-ໝ༌གྷཌྷདྷབྷཛྷཀྵჼᴬ-ᴮᴰ-ᴺᴼ-ᵍᵏ-ᵪᵸᶛ-ᶿẚ-ẛάέήίόύώΆ᾽-῁ΈΉ῍-῏ΐΊ῝-῟ΰΎ῭-`ΌΏ´-῾ - ‑‗․-… ″-‴‶-‷‼‾⁇-⁉⁗ ⁰-ⁱ⁴-₎ₐ-ₜ₨℀-℃℅-ℇ℉-ℓℕ-№ℙ-ℝ℠-™ℤΩℨK-ℭℯ-ℱℳ-ℹ℻-⅀ⅅ-ⅉ⅐-ⅿ↉∬-∭∯-∰〈-〉①-⓪⨌⩴-⩶⫝̸ⱼ-ⱽⵯ⺟⻳⼀-⿕　〶〸-〺゛-゜ゟヿㄱ-ㆎ㆒-㆟㈀-㈞㈠-㉇㉐-㉾㊀-㏿ꚜ-ꚝꝰꟲ-ꟴꟸ-ꟹꭜ-ꭟꭩ豈-嗀塚晴凞-羽蘒諸逸-都飯-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-זּטּ-לּמּנּ-סּףּ-פּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-﷼︐-︙︰-﹄﹇-﹒﹔-﹦﹨-﹫ﹰ-ﹲﹴﹶ-ﻼ！-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ￠-￦"), w;
          }
        },
        /* 4 */
        /***/
        (V) => {
          V.exports = globalThis.pdfjsLib;
        },
        /* 5 */
        /***/
        (V, I, c) => {
          var p, u, Ti, b, On;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.SimpleLinkService = I.PDFLinkService = I.LinkTarget = void 0;
          var d = c(2);
          const r = "noopener noreferrer nofollow", F = {
            NONE: 0,
            SELF: 1,
            BLANK: 2,
            PARENT: 3,
            TOP: 4
          };
          I.LinkTarget = F;
          function M(s, {
            url: i,
            target: E,
            rel: _,
            enabled: o = !0
          } = {}) {
            if (!i || typeof i != "string")
              throw new Error('A valid "url" parameter must provided.');
            const T = (0, d.removeNullCharacters)(i);
            o ? s.href = s.title = T : (s.href = "", s.title = `Disabled: ${T}`, s.onclick = () => !1);
            let P = "";
            switch (E) {
              case F.NONE:
                break;
              case F.SELF:
                P = "_self";
                break;
              case F.BLANK:
                P = "_blank";
                break;
              case F.PARENT:
                P = "_parent";
                break;
              case F.TOP:
                P = "_top";
                break;
            }
            s.target = P, s.rel = typeof _ == "string" ? _ : r;
          }
          const w = class w {
            constructor({
              eventBus: i,
              externalLinkTarget: E = null,
              externalLinkRel: _ = null,
              ignoreDestinationZoom: o = !1
            } = {}) {
              N(this, u);
              N(this, p, /* @__PURE__ */ new Map());
              this.eventBus = i, this.externalLinkTarget = E, this.externalLinkRel = _, this.externalLinkEnabled = !0, this._ignoreDestinationZoom = o, this.baseUrl = null, this.pdfDocument = null, this.pdfViewer = null, this.pdfHistory = null;
            }
            setDocument(i, E = null) {
              this.baseUrl = E, this.pdfDocument = i, t(this, p).clear();
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
              let E, _;
              if (typeof i == "string" ? (E = i, _ = await this.pdfDocument.getDestination(i)) : (E = null, _ = await i), !Array.isArray(_)) {
                console.error(`PDFLinkService.goToDestination: "${_}" is not a valid destination array, for dest="${i}".`);
                return;
              }
              X(this, u, Ti).call(this, i, E, _);
            }
            goToPage(i) {
              if (!this.pdfDocument)
                return;
              const E = typeof i == "string" && this.pdfViewer.pageLabelToPageNumber(i) || i | 0;
              if (!(Number.isInteger(E) && E > 0 && E <= this.pagesCount)) {
                console.error(`PDFLinkService.goToPage: "${i}" is not a valid page.`);
                return;
              }
              this.pdfHistory && (this.pdfHistory.pushCurrentPosition(), this.pdfHistory.pushPage(E)), this.pdfViewer.scrollPageIntoView({
                pageNumber: E
              });
            }
            addLinkAttributes(i, E, _ = !1) {
              M(i, {
                url: E,
                target: _ ? F.BLANK : this.externalLinkTarget,
                rel: this.externalLinkRel,
                enabled: this.externalLinkEnabled
              });
            }
            getDestinationHash(i) {
              if (typeof i == "string") {
                if (i.length > 0)
                  return this.getAnchorUrl("#" + escape(i));
              } else if (Array.isArray(i)) {
                const E = JSON.stringify(i);
                if (E.length > 0)
                  return this.getAnchorUrl("#" + escape(E));
              }
              return this.getAnchorUrl("");
            }
            getAnchorUrl(i) {
              return this.baseUrl ? this.baseUrl + i : i;
            }
            setHash(i) {
              var o;
              if (!this.pdfDocument)
                return;
              let E, _;
              if (i.includes("=")) {
                const T = (0, d.parseQueryString)(i);
                if (T.has("search")) {
                  const P = T.get("search").replaceAll('"', ""), Y = T.get("phrase") === "true";
                  this.eventBus.dispatch("findfromurlhash", {
                    source: this,
                    query: Y ? P : P.match(/\S+/g)
                  });
                }
                if (T.has("page") && (E = T.get("page") | 0 || 1), T.has("zoom")) {
                  const P = T.get("zoom").split(","), Y = P[0], tt = parseFloat(Y);
                  Y.includes("Fit") ? Y === "Fit" || Y === "FitB" ? _ = [null, {
                    name: Y
                  }] : Y === "FitH" || Y === "FitBH" || Y === "FitV" || Y === "FitBV" ? _ = [null, {
                    name: Y
                  }, P.length > 1 ? P[1] | 0 : null] : Y === "FitR" ? P.length !== 5 ? console.error('PDFLinkService.setHash: Not enough parameters for "FitR".') : _ = [null, {
                    name: Y
                  }, P[1] | 0, P[2] | 0, P[3] | 0, P[4] | 0] : console.error(`PDFLinkService.setHash: "${Y}" is not a valid zoom value.`) : _ = [null, {
                    name: "XYZ"
                  }, P.length > 1 ? P[1] | 0 : null, P.length > 2 ? P[2] | 0 : null, tt ? tt / 100 : Y];
                }
                _ ? this.pdfViewer.scrollPageIntoView({
                  pageNumber: E || this.page,
                  destArray: _,
                  allowNegativeOffset: !0
                }) : E && (this.page = E), T.has("pagemode") && this.eventBus.dispatch("pagemode", {
                  source: this,
                  mode: T.get("pagemode")
                }), T.has("nameddest") && this.goToDestination(T.get("nameddest"));
              } else {
                _ = unescape(i);
                try {
                  _ = JSON.parse(_), Array.isArray(_) || (_ = _.toString());
                } catch {
                }
                if (typeof _ == "string" || X(o = w, b, On).call(o, _)) {
                  this.goToDestination(_);
                  return;
                }
                console.error(`PDFLinkService.setHash: "${unescape(i)}" is not a valid destination.`);
              }
            }
            executeNamedAction(i) {
              var E, _;
              switch (i) {
                case "GoBack":
                  (E = this.pdfHistory) == null || E.back();
                  break;
                case "GoForward":
                  (_ = this.pdfHistory) == null || _.forward();
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
              const E = this.pdfDocument, _ = await this.pdfViewer.optionalContentConfigPromise;
              if (E !== this.pdfDocument)
                return;
              let o;
              for (const T of i.state) {
                switch (T) {
                  case "ON":
                  case "OFF":
                  case "Toggle":
                    o = T;
                    continue;
                }
                switch (o) {
                  case "ON":
                    _.setVisibility(T, !0);
                    break;
                  case "OFF":
                    _.setVisibility(T, !1);
                    break;
                  case "Toggle":
                    const P = _.getGroup(T);
                    P && _.setVisibility(T, !P.visible);
                    break;
                }
              }
              this.pdfViewer.optionalContentConfigPromise = Promise.resolve(_);
            }
            cachePageRef(i, E) {
              if (!E)
                return;
              const _ = E.gen === 0 ? `${E.num}R` : `${E.num}R${E.gen}`;
              t(this, p).set(_, i);
            }
            _cachedPageNumber(i) {
              if (!i)
                return null;
              const E = i.gen === 0 ? `${i.num}R` : `${i.num}R${i.gen}`;
              return t(this, p).get(E) || null;
            }
          };
          p = new WeakMap(), u = new WeakSet(), Ti = function(i, E = null, _) {
            const o = _[0];
            let T;
            if (typeof o == "object" && o !== null) {
              if (T = this._cachedPageNumber(o), !T) {
                this.pdfDocument.getPageIndex(o).then((P) => {
                  this.cachePageRef(P + 1, o), X(this, u, Ti).call(this, i, E, _);
                }).catch(() => {
                  console.error(`PDFLinkService.#goToDestinationHelper: "${o}" is not a valid page reference, for dest="${i}".`);
                });
                return;
              }
            } else if (Number.isInteger(o))
              T = o + 1;
            else {
              console.error(`PDFLinkService.#goToDestinationHelper: "${o}" is not a valid destination reference, for dest="${i}".`);
              return;
            }
            if (!T || T < 1 || T > this.pagesCount) {
              console.error(`PDFLinkService.#goToDestinationHelper: "${T}" is not a valid page number, for dest="${i}".`);
              return;
            }
            this.pdfHistory && (this.pdfHistory.pushCurrentPosition(), this.pdfHistory.push({
              namedDest: E,
              explicitDest: _,
              pageNumber: T
            })), this.pdfViewer.scrollPageIntoView({
              pageNumber: T,
              destArray: _,
              ignoreDestinationZoom: this._ignoreDestinationZoom
            });
          }, b = new WeakSet(), On = function(i) {
            if (!Array.isArray(i))
              return !1;
            const E = i.length;
            if (E < 2)
              return !1;
            const _ = i[0];
            if (!(typeof _ == "object" && Number.isInteger(_.num) && Number.isInteger(_.gen)) && !(Number.isInteger(_) && _ >= 0))
              return !1;
            const o = i[1];
            if (!(typeof o == "object" && typeof o.name == "string"))
              return !1;
            let T = !0;
            switch (o.name) {
              case "XYZ":
                if (E !== 5)
                  return !1;
                break;
              case "Fit":
              case "FitB":
                return E === 2;
              case "FitH":
              case "FitBH":
              case "FitV":
              case "FitBV":
                if (E !== 3)
                  return !1;
                break;
              case "FitR":
                if (E !== 6)
                  return !1;
                T = !1;
                break;
              default:
                return !1;
            }
            for (let P = 2; P < E; P++) {
              const Y = i[P];
              if (!(typeof Y == "number" || T && Y === null))
                return !1;
            }
            return !0;
          }, N(w, b);
          let S = w;
          I.PDFLinkService = S;
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
            addLinkAttributes(i, E, _ = !1) {
              M(i, {
                url: E,
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
            cachePageRef(i, E) {
            }
          }
          I.SimpleLinkService = h;
        },
        /* 6 */
        /***/
        (V, I, c) => {
          var S, h, xi;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.AnnotationLayerBuilder = void 0;
          var d = c(4), r = c(7), F = c(2);
          class M {
            constructor({
              pageDiv: y,
              pdfPage: b,
              linkService: g,
              downloadManager: w,
              annotationStorage: s = null,
              imageResourcesPath: i = "",
              renderForms: E = !0,
              l10n: _ = r.NullL10n,
              enableScripting: o = !1,
              hasJSActionsPromise: T = null,
              fieldObjectsPromise: P = null,
              annotationCanvasMap: Y = null,
              accessibilityManager: tt = null
            }) {
              N(this, h);
              N(this, S, null);
              this.pageDiv = y, this.pdfPage = b, this.linkService = g, this.downloadManager = w, this.imageResourcesPath = i, this.renderForms = E, this.l10n = _, this.annotationStorage = s, this.enableScripting = o, this._hasJSActionsPromise = T || Promise.resolve(!1), this._fieldObjectsPromise = P || Promise.resolve(null), this._annotationCanvasMap = Y, this._accessibilityManager = tt, this.annotationLayer = null, this.div = null, this._cancelled = !1, this._eventBus = g.eventBus;
            }
            async render(y, b = "display") {
              var E;
              if (this.div) {
                if (this._cancelled || !this.annotationLayer)
                  return;
                this.annotationLayer.update({
                  viewport: y.clone({
                    dontFlip: !0
                  })
                });
                return;
              }
              const [g, w, s] = await Promise.all([this.pdfPage.getAnnotations({
                intent: b
              }), this._hasJSActionsPromise, this._fieldObjectsPromise]);
              if (this._cancelled)
                return;
              const i = this.div = document.createElement("div");
              if (i.className = "annotationLayer", this.pageDiv.append(i), g.length === 0) {
                this.hide();
                return;
              }
              this.annotationLayer = new d.AnnotationLayer({
                div: i,
                accessibilityManager: this._accessibilityManager,
                annotationCanvasMap: this._annotationCanvasMap,
                l10n: this.l10n,
                page: this.pdfPage,
                viewport: y.clone({
                  dontFlip: !0
                })
              }), await this.annotationLayer.render({
                annotations: g,
                imageResourcesPath: this.imageResourcesPath,
                renderForms: this.renderForms,
                linkService: this.linkService,
                downloadManager: this.downloadManager,
                annotationStorage: this.annotationStorage,
                enableScripting: this.enableScripting,
                hasJSActions: w,
                fieldObjects: s
              }), this.linkService.isInPresentationMode && X(this, h, xi).call(this, F.PresentationModeState.FULLSCREEN), t(this, S) || (it(this, S, (_) => {
                X(this, h, xi).call(this, _.state);
              }), (E = this._eventBus) == null || E._on("presentationmodechanged", t(this, S)));
            }
            cancel() {
              var y;
              this._cancelled = !0, t(this, S) && ((y = this._eventBus) == null || y._off("presentationmodechanged", t(this, S)), it(this, S, null));
            }
            hide() {
              this.div && (this.div.hidden = !0);
            }
          }
          S = new WeakMap(), h = new WeakSet(), xi = function(y) {
            if (!this.div)
              return;
            let b = !1;
            switch (y) {
              case F.PresentationModeState.FULLSCREEN:
                b = !0;
                break;
              case F.PresentationModeState.NORMAL:
                break;
              default:
                return;
            }
            for (const g of this.div.childNodes)
              g.hasAttribute("data-internal-link") || (g.inert = b);
          }, I.AnnotationLayerBuilder = M;
        },
        /* 7 */
        /***/
        (V, I) => {
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.NullL10n = void 0, I.getL10nFallback = d;
          const c = {
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
            editor_ink_canvas_aria_label: "User-created image"
          };
          c.print_progress_percent = "{{progress}}%";
          function d(M, S) {
            switch (M) {
              case "find_match_count":
                M = `find_match_count[${S.total === 1 ? "one" : "other"}]`;
                break;
              case "find_match_count_limit":
                M = `find_match_count_limit[${S.limit === 1 ? "one" : "other"}]`;
                break;
            }
            return c[M] || "";
          }
          function r(M, S) {
            return S ? M.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (h, p) => p in S ? S[p] : "{{" + p + "}}") : M;
          }
          const F = {
            async getLanguage() {
              return "en-us";
            },
            async getDirection() {
              return "ltr";
            },
            async get(M, S = null, h = d(M, S)) {
              return r(h, S);
            },
            async translate(M) {
            }
          };
          I.NullL10n = F;
        },
        /* 8 */
        /***/
        (V, I, c) => {
          var M;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.DownloadManager = void 0;
          var d = c(4);
          function r(S, h) {
            const p = document.createElement("a");
            if (!p.click)
              throw new Error('DownloadManager: "a.click()" is not supported.');
            p.href = S, p.target = "_parent", "download" in p && (p.download = h), (document.body || document.documentElement).append(p), p.click(), p.remove();
          }
          class F {
            constructor() {
              N(this, M, /* @__PURE__ */ new WeakMap());
            }
            downloadUrl(h, p, u) {
              if (!(0, d.createValidAbsoluteUrl)(h, "http://example.com")) {
                console.error(`downloadUrl - not a valid URL: ${h}`);
                return;
              }
              r(h + "#pdfjs.action=download", p);
            }
            downloadData(h, p, u) {
              const y = URL.createObjectURL(new Blob([h], {
                type: u
              }));
              r(y, p);
            }
            openOrDownloadData(h, p, u) {
              const b = (0, d.isPdfFile)(u) ? "application/pdf" : "";
              return this.downloadData(p, u, b), !1;
            }
            download(h, p, u, y) {
              const b = URL.createObjectURL(h);
              r(b, u);
            }
          }
          M = new WeakMap(), I.DownloadManager = F;
        },
        /* 9 */
        /***/
        (V, I) => {
          var M;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.WaitOnType = I.EventBus = I.AutomationEventBus = void 0, I.waitOnEventOrTimeout = d;
          const c = {
            EVENT: "event",
            TIMEOUT: "timeout"
          };
          I.WaitOnType = c;
          function d({
            target: S,
            name: h,
            delay: p = 0
          }) {
            return new Promise(function(u, y) {
              if (typeof S != "object" || !(h && typeof h == "string") || !(Number.isInteger(p) && p >= 0))
                throw new Error("waitOnEventOrTimeout - invalid parameters.");
              function b(i) {
                S instanceof r ? S._off(h, g) : S.removeEventListener(h, g), s && clearTimeout(s), u(i);
              }
              const g = b.bind(null, c.EVENT);
              S instanceof r ? S._on(h, g) : S.addEventListener(h, g);
              const w = b.bind(null, c.TIMEOUT), s = setTimeout(w, p);
            });
          }
          class r {
            constructor() {
              N(this, M, /* @__PURE__ */ Object.create(null));
            }
            on(h, p, u = null) {
              this._on(h, p, {
                external: !0,
                once: u == null ? void 0 : u.once
              });
            }
            off(h, p, u = null) {
              this._off(h, p, {
                external: !0,
                once: u == null ? void 0 : u.once
              });
            }
            dispatch(h, p) {
              const u = t(this, M)[h];
              if (!u || u.length === 0)
                return;
              let y;
              for (const {
                listener: b,
                external: g,
                once: w
              } of u.slice(0)) {
                if (w && this._off(h, b), g) {
                  (y || (y = [])).push(b);
                  continue;
                }
                b(p);
              }
              if (y) {
                for (const b of y)
                  b(p);
                y = null;
              }
            }
            _on(h, p, u = null) {
              var b;
              ((b = t(this, M))[h] || (b[h] = [])).push({
                listener: p,
                external: (u == null ? void 0 : u.external) === !0,
                once: (u == null ? void 0 : u.once) === !0
              });
            }
            _off(h, p, u = null) {
              const y = t(this, M)[h];
              if (y) {
                for (let b = 0, g = y.length; b < g; b++)
                  if (y[b].listener === p) {
                    y.splice(b, 1);
                    return;
                  }
              }
            }
          }
          M = new WeakMap(), I.EventBus = r;
          class F extends r {
            dispatch(h, p) {
              throw new Error("Not implemented: AutomationEventBus.dispatch");
            }
          }
          I.AutomationEventBus = F;
        },
        /* 10 */
        /***/
        (V, I, c) => {
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.GenericL10n = void 0, c(11);
          var d = c(7);
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
          function F(S) {
            return r[S == null ? void 0 : S.toLowerCase()] || S;
          }
          class M {
            constructor(h) {
              const {
                webL10n: p
              } = document;
              this._lang = h, this._ready = new Promise((u, y) => {
                p.setLanguage(F(h), () => {
                  u(p);
                });
              });
            }
            async getLanguage() {
              return (await this._ready).getLanguage();
            }
            async getDirection() {
              return (await this._ready).getDirection();
            }
            async get(h, p = null, u = (0, d.getL10nFallback)(h, p)) {
              return (await this._ready).get(h, p, u);
            }
            async translate(h) {
              return (await this._ready).translate(h);
            }
          }
          I.GenericL10n = M;
        },
        /* 11 */
        /***/
        () => {
          document.webL10n = function(V, I) {
            var c = {}, d = "", r = "textContent", F = "", M = {}, S = "loading", h = !0;
            function p() {
              return I.querySelectorAll('link[type="application/l10n"]');
            }
            function u() {
              var x = I.querySelector('script[type="application/l10n"]');
              return x ? JSON.parse(x.innerHTML) : null;
            }
            function y(x) {
              return x ? x.querySelectorAll("*[data-l10n-id]") : [];
            }
            function b(x) {
              if (!x)
                return {};
              var K = x.getAttribute("data-l10n-id"), Z = x.getAttribute("data-l10n-args"), Q = {};
              if (Z)
                try {
                  Q = JSON.parse(Z);
                } catch {
                  console.warn("could not parse arguments for #" + K);
                }
              return {
                id: K,
                args: Q
              };
            }
            function g(x, K, Z) {
              K = K || function(j) {
              }, Z = Z || function() {
              };
              var Q = new XMLHttpRequest();
              Q.open("GET", x, h), Q.overrideMimeType && Q.overrideMimeType("text/plain; charset=utf-8"), Q.onreadystatechange = function() {
                Q.readyState == 4 && (Q.status == 200 || Q.status === 0 ? K(Q.responseText) : Z());
              }, Q.onerror = Z, Q.ontimeout = Z;
              try {
                Q.send(null);
              } catch {
                Z();
              }
            }
            function w(x, K, Z, Q) {
              var v = x.replace(/[^\/]*$/, "") || "./";
              function j(lt) {
                return lt.lastIndexOf("\\") < 0 ? lt : lt.replace(/\\\\/g, "\\").replace(/\\n/g, `
`).replace(/\\r/g, "\r").replace(/\\t/g, "	").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\{/g, "{").replace(/\\}/g, "}").replace(/\\"/g, '"').replace(/\\'/g, "'");
              }
              function D(lt, _t) {
                var k = {}, a = /^\s*|\s*$/, l = /^\s*#|^\s*$/, R = /^\s*\[(.*)\]\s*$/, $ = /^\s*@import\s+url\((.*)\)\s*$/i, W = /^([^=\s]*)\s*=\s*(.+)$/;
                function nt(ut, wt, yt) {
                  var Et = ut.replace(a, "").split(/[\r\n]+/), ot = "*", At = K.split("-", 1)[0], St = !1, Rt = "";
                  function Bt() {
                    for (; ; ) {
                      if (!Et.length) {
                        yt();
                        return;
                      }
                      var kt = Et.shift();
                      if (!l.test(kt)) {
                        if (wt) {
                          if (Rt = R.exec(kt), Rt) {
                            ot = Rt[1].toLowerCase(), St = ot !== "*" && ot !== K && ot !== At;
                            continue;
                          } else if (St)
                            continue;
                          if (Rt = $.exec(kt), Rt) {
                            st(v + Rt[1], Bt);
                            return;
                          }
                        }
                        var Ut = kt.match(W);
                        Ut && Ut.length == 3 && (k[Ut[1]] = j(Ut[2]));
                      }
                    }
                  }
                  Bt();
                }
                function st(ut, wt) {
                  g(ut, function(yt) {
                    nt(yt, !1, wt);
                  }, function() {
                    console.warn(ut + " not found."), wt();
                  });
                }
                nt(lt, !0, function() {
                  _t(k);
                });
              }
              g(x, function(lt) {
                d += lt, D(lt, function(_t) {
                  for (var k in _t) {
                    var a, l, R = k.lastIndexOf(".");
                    R > 0 ? (a = k.substring(0, R), l = k.substring(R + 1)) : (a = k, l = r), c[a] || (c[a] = {}), c[a][l] = _t[k];
                  }
                  Z && Z();
                });
              }, Q);
            }
            function s(x, K) {
              x && (x = x.toLowerCase()), K = K || function() {
              }, i(), F = x;
              var Z = p(), Q = Z.length;
              if (Q === 0) {
                var v = u();
                if (v && v.locales && v.default_locale) {
                  if (console.log("using the embedded JSON directory, early way out"), c = v.locales[x], !c) {
                    var j = v.default_locale.toLowerCase();
                    for (var D in v.locales)
                      if (D = D.toLowerCase(), D === x) {
                        c = v.locales[x];
                        break;
                      } else
                        D === j && (c = v.locales[j]);
                  }
                  K();
                } else
                  console.log("no resource to load, early way out");
                S = "complete";
                return;
              }
              var lt = null, _t = 0;
              lt = function() {
                _t++, _t >= Q && (K(), S = "complete");
              };
              function k(R) {
                var $ = R.href;
                this.load = function(W, nt) {
                  w($, W, nt, function() {
                    console.warn($ + " not found."), console.warn('"' + W + '" resource not found'), F = "", nt();
                  });
                };
              }
              for (var a = 0; a < Q; a++) {
                var l = new k(Z[a]);
                l.load(x, lt);
              }
            }
            function i() {
              c = {}, d = "", F = "";
            }
            function E(x) {
              var K = {
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
              function Z(D, lt) {
                return lt.indexOf(D) !== -1;
              }
              function Q(D, lt, _t) {
                return lt <= D && D <= _t;
              }
              var v = {
                0: function(D) {
                  return "other";
                },
                1: function(D) {
                  return Q(D % 100, 3, 10) ? "few" : D === 0 ? "zero" : Q(D % 100, 11, 99) ? "many" : D == 2 ? "two" : D == 1 ? "one" : "other";
                },
                2: function(D) {
                  return D !== 0 && D % 10 === 0 ? "many" : D == 2 ? "two" : D == 1 ? "one" : "other";
                },
                3: function(D) {
                  return D == 1 ? "one" : "other";
                },
                4: function(D) {
                  return Q(D, 0, 1) ? "one" : "other";
                },
                5: function(D) {
                  return Q(D, 0, 2) && D != 2 ? "one" : "other";
                },
                6: function(D) {
                  return D === 0 ? "zero" : D % 10 == 1 && D % 100 != 11 ? "one" : "other";
                },
                7: function(D) {
                  return D == 2 ? "two" : D == 1 ? "one" : "other";
                },
                8: function(D) {
                  return Q(D, 3, 6) ? "few" : Q(D, 7, 10) ? "many" : D == 2 ? "two" : D == 1 ? "one" : "other";
                },
                9: function(D) {
                  return D === 0 || D != 1 && Q(D % 100, 1, 19) ? "few" : D == 1 ? "one" : "other";
                },
                10: function(D) {
                  return Q(D % 10, 2, 9) && !Q(D % 100, 11, 19) ? "few" : D % 10 == 1 && !Q(D % 100, 11, 19) ? "one" : "other";
                },
                11: function(D) {
                  return Q(D % 10, 2, 4) && !Q(D % 100, 12, 14) ? "few" : D % 10 === 0 || Q(D % 10, 5, 9) || Q(D % 100, 11, 14) ? "many" : D % 10 == 1 && D % 100 != 11 ? "one" : "other";
                },
                12: function(D) {
                  return Q(D, 2, 4) ? "few" : D == 1 ? "one" : "other";
                },
                13: function(D) {
                  return Q(D % 10, 2, 4) && !Q(D % 100, 12, 14) ? "few" : D != 1 && Q(D % 10, 0, 1) || Q(D % 10, 5, 9) || Q(D % 100, 12, 14) ? "many" : D == 1 ? "one" : "other";
                },
                14: function(D) {
                  return Q(D % 100, 3, 4) ? "few" : D % 100 == 2 ? "two" : D % 100 == 1 ? "one" : "other";
                },
                15: function(D) {
                  return D === 0 || Q(D % 100, 2, 10) ? "few" : Q(D % 100, 11, 19) ? "many" : D == 1 ? "one" : "other";
                },
                16: function(D) {
                  return D % 10 == 1 && D != 11 ? "one" : "other";
                },
                17: function(D) {
                  return D == 3 ? "few" : D === 0 ? "zero" : D == 6 ? "many" : D == 2 ? "two" : D == 1 ? "one" : "other";
                },
                18: function(D) {
                  return D === 0 ? "zero" : Q(D, 0, 2) && D !== 0 && D != 2 ? "one" : "other";
                },
                19: function(D) {
                  return Q(D, 2, 10) ? "few" : Q(D, 0, 1) ? "one" : "other";
                },
                20: function(D) {
                  return (Q(D % 10, 3, 4) || D % 10 == 9) && !(Q(D % 100, 10, 19) || Q(D % 100, 70, 79) || Q(D % 100, 90, 99)) ? "few" : D % 1e6 === 0 && D !== 0 ? "many" : D % 10 == 2 && !Z(D % 100, [12, 72, 92]) ? "two" : D % 10 == 1 && !Z(D % 100, [11, 71, 91]) ? "one" : "other";
                },
                21: function(D) {
                  return D === 0 ? "zero" : D == 1 ? "one" : "other";
                },
                22: function(D) {
                  return Q(D, 0, 1) || Q(D, 11, 99) ? "one" : "other";
                },
                23: function(D) {
                  return Q(D % 10, 1, 2) || D % 20 === 0 ? "one" : "other";
                },
                24: function(D) {
                  return Q(D, 3, 10) || Q(D, 13, 19) ? "few" : Z(D, [2, 12]) ? "two" : Z(D, [1, 11]) ? "one" : "other";
                }
              }, j = K[x.replace(/-.*$/, "")];
              return j in v ? v[j] : (console.warn("plural form unknown for [" + x + "]"), function() {
                return "other";
              });
            }
            M.plural = function(x, K, Z, Q) {
              var v = parseFloat(K);
              if (isNaN(v) || Q != r)
                return x;
              M._pluralRules || (M._pluralRules = E(F));
              var j = "[" + M._pluralRules(v) + "]";
              return v === 0 && Z + "[zero]" in c ? x = c[Z + "[zero]"][Q] : v == 1 && Z + "[one]" in c ? x = c[Z + "[one]"][Q] : v == 2 && Z + "[two]" in c ? x = c[Z + "[two]"][Q] : Z + j in c ? x = c[Z + j][Q] : Z + "[other]" in c && (x = c[Z + "[other]"][Q]), x;
            };
            function _(x, K, Z) {
              var Q = c[x];
              if (!Q) {
                if (console.warn("#" + x + " is undefined."), !Z)
                  return null;
                Q = Z;
              }
              var v = {};
              for (var j in Q) {
                var D = Q[j];
                D = o(D, K, x, j), D = T(D, K, x), v[j] = D;
              }
              return v;
            }
            function o(x, K, Z, Q) {
              var v = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/, j = v.exec(x);
              if (!j || !j.length)
                return x;
              var D = j[1], lt = j[2], _t;
              if (K && lt in K ? _t = K[lt] : lt in c && (_t = c[lt]), D in M) {
                var k = M[D];
                x = k(x, _t, Z, Q);
              }
              return x;
            }
            function T(x, K, Z) {
              var Q = /\{\{\s*(.+?)\s*\}\}/g;
              return x.replace(Q, function(v, j) {
                return K && j in K ? K[j] : j in c ? c[j] : (console.log("argument {{" + j + "}} for #" + Z + " is undefined."), v);
              });
            }
            function P(x) {
              var K = b(x);
              if (K.id) {
                var Z = _(K.id, K.args);
                if (!Z) {
                  console.warn("#" + K.id + " is undefined.");
                  return;
                }
                if (Z[r]) {
                  if (Y(x) === 0)
                    x[r] = Z[r];
                  else {
                    for (var Q = x.childNodes, v = !1, j = 0, D = Q.length; j < D; j++)
                      Q[j].nodeType === 3 && /\S/.test(Q[j].nodeValue) && (v ? Q[j].nodeValue = "" : (Q[j].nodeValue = Z[r], v = !0));
                    if (!v) {
                      var lt = I.createTextNode(Z[r]);
                      x.prepend(lt);
                    }
                  }
                  delete Z[r];
                }
                for (var _t in Z)
                  x[_t] = Z[_t];
              }
            }
            function Y(x) {
              if (x.children)
                return x.children.length;
              if (typeof x.childElementCount < "u")
                return x.childElementCount;
              for (var K = 0, Z = 0; Z < x.childNodes.length; Z++)
                K += x.nodeType === 1 ? 1 : 0;
              return K;
            }
            function tt(x) {
              x = x || I.documentElement;
              for (var K = y(x), Z = K.length, Q = 0; Q < Z; Q++)
                P(K[Q]);
              P(x);
            }
            return {
              get: function(x, K, Z) {
                var Q = x.lastIndexOf("."), v = r;
                Q > 0 && (v = x.substring(Q + 1), x = x.substring(0, Q));
                var j;
                Z && (j = {}, j[v] = Z);
                var D = _(x, K, j);
                return D && v in D ? D[v] : "{{" + x + "}}";
              },
              getData: function() {
                return c;
              },
              getText: function() {
                return d;
              },
              getLanguage: function() {
                return F;
              },
              setLanguage: function(x, K) {
                s(x, function() {
                  K && K();
                });
              },
              getDirection: function() {
                var x = ["ar", "he", "fa", "ps", "ur"], K = F.split("-", 1)[0];
                return x.indexOf(K) >= 0 ? "rtl" : "ltr";
              },
              translate: tt,
              getReadyState: function() {
                return S;
              },
              ready: function(x) {
                if (x)
                  S == "complete" || S == "interactive" ? V.setTimeout(function() {
                    x();
                  }) : I.addEventListener && I.addEventListener("localized", function K() {
                    I.removeEventListener("localized", K), x();
                  });
                else
                  return;
              }
            };
          }(window, document);
        },
        /* 12 */
        /***/
        (V, I, c) => {
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.PDFHistory = void 0, I.isDestArraysEqual = y, I.isDestHashesEqual = u;
          var d = c(2), r = c(9);
          const F = 1e3, M = 50, S = 1e3;
          function h() {
            return document.location.hash;
          }
          class p {
            constructor({
              linkService: g,
              eventBus: w
            }) {
              this.linkService = g, this.eventBus = w, this._initialized = !1, this._fingerprint = "", this.reset(), this._boundEvents = null, this.eventBus._on("pagesinit", () => {
                this._isPagesLoaded = !1, this.eventBus._on("pagesloaded", (s) => {
                  this._isPagesLoaded = !!s.pagesCount;
                }, {
                  once: !0
                });
              });
            }
            initialize({
              fingerprint: g,
              resetHistory: w = !1,
              updateUrl: s = !1
            }) {
              if (!g || typeof g != "string") {
                console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.');
                return;
              }
              this._initialized && this.reset();
              const i = this._fingerprint !== "" && this._fingerprint !== g;
              this._fingerprint = g, this._updateUrl = s === !0, this._initialized = !0, this._bindEvents();
              const E = window.history.state;
              if (this._popStateInProgress = !1, this._blockHashChange = 0, this._currentHash = h(), this._numPositionUpdates = 0, this._uid = this._maxUid = 0, this._destination = null, this._position = null, !this._isValidState(E, !0) || w) {
                const {
                  hash: o,
                  page: T,
                  rotation: P
                } = this._parseCurrentHash(!0);
                if (!o || i || w) {
                  this._pushOrReplaceState(null, !0);
                  return;
                }
                this._pushOrReplaceState({
                  hash: o,
                  page: T,
                  rotation: P
                }, !0);
                return;
              }
              const _ = E.destination;
              this._updateInternalState(_, E.uid, !0), _.rotation !== void 0 && (this._initialRotation = _.rotation), _.dest ? (this._initialBookmark = JSON.stringify(_.dest), this._destination.page = null) : _.hash ? this._initialBookmark = _.hash : _.page && (this._initialBookmark = `page=${_.page}`);
            }
            reset() {
              this._initialized && (this._pageHide(), this._initialized = !1, this._unbindEvents()), this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._initialBookmark = null, this._initialRotation = null;
            }
            push({
              namedDest: g = null,
              explicitDest: w,
              pageNumber: s
            }) {
              if (!this._initialized)
                return;
              if (g && typeof g != "string") {
                console.error(`PDFHistory.push: "${g}" is not a valid namedDest parameter.`);
                return;
              } else if (Array.isArray(w)) {
                if (!this._isValidPage(s) && (s !== null || this._destination)) {
                  console.error(`PDFHistory.push: "${s}" is not a valid pageNumber parameter.`);
                  return;
                }
              } else {
                console.error(`PDFHistory.push: "${w}" is not a valid explicitDest parameter.`);
                return;
              }
              const i = g || JSON.stringify(w);
              if (!i)
                return;
              let E = !1;
              if (this._destination && (u(this._destination.hash, i) || y(this._destination.dest, w))) {
                if (this._destination.page)
                  return;
                E = !0;
              }
              this._popStateInProgress && !E || (this._pushOrReplaceState({
                dest: w,
                hash: i,
                page: s,
                rotation: this.linkService.rotation
              }, E), this._popStateInProgress || (this._popStateInProgress = !0, Promise.resolve().then(() => {
                this._popStateInProgress = !1;
              })));
            }
            pushPage(g) {
              var w;
              if (this._initialized) {
                if (!this._isValidPage(g)) {
                  console.error(`PDFHistory.pushPage: "${g}" is not a valid page number.`);
                  return;
                }
                ((w = this._destination) == null ? void 0 : w.page) !== g && (this._popStateInProgress || (this._pushOrReplaceState({
                  dest: null,
                  hash: `page=${g}`,
                  page: g,
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
              const g = window.history.state;
              this._isValidState(g) && g.uid > 0 && window.history.back();
            }
            forward() {
              if (!this._initialized || this._popStateInProgress)
                return;
              const g = window.history.state;
              this._isValidState(g) && g.uid < this._maxUid && window.history.forward();
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
            _pushOrReplaceState(g, w = !1) {
              const s = w || !this._destination, i = {
                fingerprint: this._fingerprint,
                uid: s ? this._uid : this._uid + 1,
                destination: g
              };
              this._updateInternalState(g, i.uid);
              let E;
              if (this._updateUrl && (g != null && g.hash)) {
                const _ = document.location.href.split("#")[0];
                _.startsWith("file://") || (E = `${_}#${g.hash}`);
              }
              s ? window.history.replaceState(i, "", E) : window.history.pushState(i, "", E);
            }
            _tryPushCurrentPosition(g = !1) {
              if (!this._position)
                return;
              let w = this._position;
              if (g && (w = Object.assign(/* @__PURE__ */ Object.create(null), this._position), w.temporary = !0), !this._destination) {
                this._pushOrReplaceState(w);
                return;
              }
              if (this._destination.temporary) {
                this._pushOrReplaceState(w, !0);
                return;
              }
              if (this._destination.hash === w.hash || !this._destination.page && this._numPositionUpdates <= M)
                return;
              let s = !1;
              if (this._destination.page >= w.first && this._destination.page <= w.page) {
                if (this._destination.dest !== void 0 || !this._destination.first)
                  return;
                s = !0;
              }
              this._pushOrReplaceState(w, s);
            }
            _isValidPage(g) {
              return Number.isInteger(g) && g > 0 && g <= this.linkService.pagesCount;
            }
            _isValidState(g, w = !1) {
              if (!g)
                return !1;
              if (g.fingerprint !== this._fingerprint)
                if (w) {
                  if (typeof g.fingerprint != "string" || g.fingerprint.length !== this._fingerprint.length)
                    return !1;
                  const [s] = performance.getEntriesByType("navigation");
                  if ((s == null ? void 0 : s.type) !== "reload")
                    return !1;
                } else
                  return !1;
              return !(!Number.isInteger(g.uid) || g.uid < 0 || g.destination === null || typeof g.destination != "object");
            }
            _updateInternalState(g, w, s = !1) {
              this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), s && (g != null && g.temporary) && delete g.temporary, this._destination = g, this._uid = w, this._maxUid = Math.max(this._maxUid, w), this._numPositionUpdates = 0;
            }
            _parseCurrentHash(g = !1) {
              const w = unescape(h()).substring(1), s = (0, d.parseQueryString)(w), i = s.get("nameddest") || "";
              let E = s.get("page") | 0;
              return (!this._isValidPage(E) || g && i.length > 0) && (E = null), {
                hash: w,
                page: E,
                rotation: this.linkService.rotation
              };
            }
            _updateViewarea({
              location: g
            }) {
              this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._position = {
                hash: g.pdfOpenParams.substring(1),
                page: this.linkService.page,
                first: g.pageNumber,
                rotation: g.rotation
              }, !this._popStateInProgress && (this._isPagesLoaded && this._destination && !this._destination.page && this._numPositionUpdates++, this._updateViewareaTimeout = setTimeout(() => {
                this._popStateInProgress || this._tryPushCurrentPosition(!0), this._updateViewareaTimeout = null;
              }, S));
            }
            _popState({
              state: g
            }) {
              const w = h(), s = this._currentHash !== w;
              if (this._currentHash = w, !g) {
                this._uid++;
                const {
                  hash: E,
                  page: _,
                  rotation: o
                } = this._parseCurrentHash();
                this._pushOrReplaceState({
                  hash: E,
                  page: _,
                  rotation: o
                }, !0);
                return;
              }
              if (!this._isValidState(g))
                return;
              this._popStateInProgress = !0, s && (this._blockHashChange++, (0, r.waitOnEventOrTimeout)({
                target: window,
                name: "hashchange",
                delay: F
              }).then(() => {
                this._blockHashChange--;
              }));
              const i = g.destination;
              this._updateInternalState(i, g.uid, !0), (0, d.isValidRotation)(i.rotation) && (this.linkService.rotation = i.rotation), i.dest ? this.linkService.goToDestination(i.dest) : i.hash ? this.linkService.setHash(i.hash) : i.page && (this.linkService.page = i.page), Promise.resolve().then(() => {
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
          I.PDFHistory = p;
          function u(b, g) {
            return typeof b != "string" || typeof g != "string" ? !1 : b === g || (0, d.parseQueryString)(b).get("nameddest") === g;
          }
          function y(b, g) {
            function w(s, i) {
              if (typeof s != typeof i || Array.isArray(s) || Array.isArray(i))
                return !1;
              if (s !== null && typeof s == "object" && i !== null) {
                if (Object.keys(s).length !== Object.keys(i).length)
                  return !1;
                for (const E in s)
                  if (!w(s[E], i[E]))
                    return !1;
                return !0;
              }
              return s === i || Number.isNaN(s) && Number.isNaN(i);
            }
            if (!(Array.isArray(b) && Array.isArray(g)) || b.length !== g.length)
              return !1;
            for (let s = 0, i = b.length; s < i; s++)
              if (!w(b[s], g[s]))
                return !1;
            return !0;
          }
        },
        /* 13 */
        /***/
        (V, I, c) => {
          var _, o, T, P, Y, tt, x, K, Z, Q, v, Be, D, Mi, _t, ki, a, Li, R, Ri, W, Nn, st, Bn, wt, Fi;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.PDFPageView = void 0;
          var d = c(4), r = c(2), F = c(14), M = c(6), S = c(15), h = c(7), p = c(5), u = c(16), y = c(17), b = c(18), g = c(19), w = c(20);
          const s = S.compatibilityParams.maxCanvasPixels || 16777216, i = () => ({
            annotationEditorUIManager: null,
            annotationStorage: null,
            downloadManager: null,
            enableScripting: !1,
            fieldObjectsPromise: null,
            findController: null,
            hasJSActionsPromise: null,
            get linkService() {
              return new p.SimpleLinkService();
            }
          });
          class E {
            constructor(ot) {
              N(this, v);
              N(this, D);
              N(this, _t);
              N(this, a);
              N(this, R);
              N(this, W);
              N(this, st);
              N(this, wt);
              N(this, _, d.AnnotationMode.ENABLE_FORMS);
              N(this, o, !1);
              N(this, T, null);
              N(this, P, null);
              N(this, Y, null);
              N(this, tt, null);
              N(this, x, r.RenderingStates.INITIAL);
              N(this, K, r.TextLayerMode.ENABLE);
              N(this, Z, {
                directDrawing: !0,
                initialOptionalContent: !0,
                regularAnnotations: !0
              });
              N(this, Q, /* @__PURE__ */ new WeakMap());
              var Bt;
              const At = ot.container, St = ot.defaultViewport;
              this.id = ot.id, this.renderingId = "page" + this.id, it(this, T, ot.layerProperties || i), this.pdfPage = null, this.pageLabel = null, this.rotation = 0, this.scale = ot.scale || r.DEFAULT_SCALE, this.viewport = St, this.pdfPageRotate = St.rotation, this._optionalContentConfigPromise = ot.optionalContentConfigPromise || null, it(this, K, ot.textLayerMode ?? r.TextLayerMode.ENABLE), it(this, _, ot.annotationMode ?? d.AnnotationMode.ENABLE_FORMS), this.imageResourcesPath = ot.imageResourcesPath || "", this.isOffscreenCanvasSupported = ot.isOffscreenCanvasSupported ?? !0, this.maxCanvasPixels = ot.maxCanvasPixels ?? s, this.pageColors = ot.pageColors || null, this.eventBus = ot.eventBus, this.renderingQueue = ot.renderingQueue, this.l10n = ot.l10n || h.NullL10n, this.renderTask = null, this.resume = null, this._isStandalone = !((Bt = this.renderingQueue) != null && Bt.hasViewer()), this._container = At, ot.useOnlyCssZoom && (console.error("useOnlyCssZoom was removed, please use `maxCanvasPixels = 0` instead."), this.maxCanvasPixels = 0), this._annotationCanvasMap = null, this.annotationLayer = null, this.annotationEditorLayer = null, this.textLayer = null, this.zoomLayer = null, this.xfaLayer = null, this.structTreeLayer = null;
              const Rt = document.createElement("div");
              if (Rt.className = "page", Rt.setAttribute("data-page-number", this.id), Rt.setAttribute("role", "region"), this.l10n.get("page_landmark", {
                page: this.id
              }).then((kt) => {
                Rt.setAttribute("aria-label", kt);
              }), this.div = Rt, X(this, v, Be).call(this), At == null || At.append(Rt), this._isStandalone) {
                At == null || At.style.setProperty("--scale-factor", this.scale * d.PixelsPerInch.PDF_TO_CSS_UNITS);
                const {
                  optionalContentConfigPromise: kt
                } = ot;
                kt && kt.then((Ut) => {
                  kt === this._optionalContentConfigPromise && (t(this, Z).initialOptionalContent = Ut.hasInitialVisibility);
                });
              }
            }
            get renderingState() {
              return t(this, x);
            }
            set renderingState(ot) {
              if (ot !== t(this, x))
                switch (it(this, x, ot), t(this, P) && (clearTimeout(t(this, P)), it(this, P, null)), ot) {
                  case r.RenderingStates.PAUSED:
                    this.div.classList.remove("loading");
                    break;
                  case r.RenderingStates.RUNNING:
                    this.div.classList.add("loadingIcon"), it(this, P, setTimeout(() => {
                      this.div.classList.add("loading"), it(this, P, null);
                    }, 0));
                    break;
                  case r.RenderingStates.INITIAL:
                  case r.RenderingStates.FINISHED:
                    this.div.classList.remove("loadingIcon", "loading");
                    break;
                }
            }
            setPdfPage(ot) {
              var St, Rt, Bt;
              this._isStandalone && (((St = this.pageColors) == null ? void 0 : St.foreground) === "CanvasText" || ((Rt = this.pageColors) == null ? void 0 : Rt.background) === "Canvas") && ((Bt = this._container) == null || Bt.style.setProperty("--hcm-highligh-filter", ot.filterFactory.addHighlightHCMFilter("CanvasText", "Canvas", "HighlightText", "Highlight"))), this.pdfPage = ot, this.pdfPageRotate = ot.rotate;
              const At = (this.rotation + this.pdfPageRotate) % 360;
              this.viewport = ot.getViewport({
                scale: this.scale * d.PixelsPerInch.PDF_TO_CSS_UNITS,
                rotation: At
              }), X(this, v, Be).call(this), this.reset();
            }
            destroy() {
              var ot;
              this.reset(), (ot = this.pdfPage) == null || ot.cleanup();
            }
            get _textHighlighter() {
              return (0, d.shadow)(this, "_textHighlighter", new b.TextHighlighter({
                pageIndex: this.id - 1,
                eventBus: this.eventBus,
                findController: t(this, T).call(this).findController
              }));
            }
            _resetZoomLayer(ot = !1) {
              if (!this.zoomLayer)
                return;
              const At = this.zoomLayer.firstChild;
              t(this, Q).delete(At), At.width = 0, At.height = 0, ot && this.zoomLayer.remove(), this.zoomLayer = null;
            }
            reset({
              keepZoomLayer: ot = !1,
              keepAnnotationLayer: At = !1,
              keepAnnotationEditorLayer: St = !1,
              keepXfaLayer: Rt = !1,
              keepTextLayer: Bt = !1
            } = {}) {
              var Ot, jt, Wt, Nt, Ht;
              this.cancelRendering({
                keepAnnotationLayer: At,
                keepAnnotationEditorLayer: St,
                keepXfaLayer: Rt,
                keepTextLayer: Bt
              }), this.renderingState = r.RenderingStates.INITIAL;
              const kt = this.div, Ut = kt.childNodes, at = ot && this.zoomLayer || null, J = At && ((Ot = this.annotationLayer) == null ? void 0 : Ot.div) || null, rt = St && ((jt = this.annotationEditorLayer) == null ? void 0 : jt.div) || null, dt = Rt && ((Wt = this.xfaLayer) == null ? void 0 : Wt.div) || null, xt = Bt && ((Nt = this.textLayer) == null ? void 0 : Nt.div) || null;
              for (let $t = Ut.length - 1; $t >= 0; $t--) {
                const Gt = Ut[$t];
                switch (Gt) {
                  case at:
                  case J:
                  case rt:
                  case dt:
                  case xt:
                    continue;
                }
                Gt.remove();
              }
              kt.removeAttribute("data-loaded"), J && this.annotationLayer.hide(), rt && this.annotationEditorLayer.hide(), dt && this.xfaLayer.hide(), xt && this.textLayer.hide(), (Ht = this.structTreeLayer) == null || Ht.hide(), at || (this.canvas && (t(this, Q).delete(this.canvas), this.canvas.width = 0, this.canvas.height = 0, delete this.canvas), this._resetZoomLayer());
            }
            update({
              scale: ot = 0,
              rotation: At = null,
              optionalContentConfigPromise: St = null,
              drawingDelay: Rt = -1
            }) {
              var kt;
              this.scale = ot || this.scale, typeof At == "number" && (this.rotation = At), St instanceof Promise && (this._optionalContentConfigPromise = St, St.then((Ut) => {
                St === this._optionalContentConfigPromise && (t(this, Z).initialOptionalContent = Ut.hasInitialVisibility);
              })), t(this, Z).directDrawing = !0;
              const Bt = (this.rotation + this.pdfPageRotate) % 360;
              if (this.viewport = this.viewport.clone({
                scale: this.scale * d.PixelsPerInch.PDF_TO_CSS_UNITS,
                rotation: Bt
              }), X(this, v, Be).call(this), this._isStandalone && ((kt = this._container) == null || kt.style.setProperty("--scale-factor", this.viewport.scale)), this.canvas) {
                let Ut = !1;
                if (t(this, o)) {
                  if (this.maxCanvasPixels === 0)
                    Ut = !0;
                  else if (this.maxCanvasPixels > 0) {
                    const {
                      width: J,
                      height: rt
                    } = this.viewport, {
                      sx: dt,
                      sy: xt
                    } = this.outputScale;
                    Ut = (Math.floor(J) * dt | 0) * (Math.floor(rt) * xt | 0) > this.maxCanvasPixels;
                  }
                }
                const at = !Ut && Rt >= 0 && Rt < 1e3;
                if (at || Ut) {
                  if (at && this.renderingState !== r.RenderingStates.FINISHED && (this.cancelRendering({
                    keepZoomLayer: !0,
                    keepAnnotationLayer: !0,
                    keepAnnotationEditorLayer: !0,
                    keepXfaLayer: !0,
                    keepTextLayer: !0,
                    cancelExtraDelay: Rt
                  }), this.renderingState = r.RenderingStates.FINISHED, t(this, Z).directDrawing = !1), this.cssTransform({
                    target: this.canvas,
                    redrawAnnotationLayer: !0,
                    redrawAnnotationEditorLayer: !0,
                    redrawXfaLayer: !0,
                    redrawTextLayer: !at,
                    hideTextLayer: at
                  }), at)
                    return;
                  this.eventBus.dispatch("pagerendered", {
                    source: this,
                    pageNumber: this.id,
                    cssTransform: !0,
                    timestamp: performance.now(),
                    error: t(this, tt)
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
              keepAnnotationLayer: ot = !1,
              keepAnnotationEditorLayer: At = !1,
              keepXfaLayer: St = !1,
              keepTextLayer: Rt = !1,
              cancelExtraDelay: Bt = 0
            } = {}) {
              var kt;
              this.renderTask && (this.renderTask.cancel(Bt), this.renderTask = null), this.resume = null, this.textLayer && (!Rt || !this.textLayer.div) && (this.textLayer.cancel(), this.textLayer = null), this.structTreeLayer && !this.textLayer && (this.structTreeLayer = null), this.annotationLayer && (!ot || !this.annotationLayer.div) && (this.annotationLayer.cancel(), this.annotationLayer = null, this._annotationCanvasMap = null), this.annotationEditorLayer && (!At || !this.annotationEditorLayer.div) && (this.annotationEditorLayer.cancel(), this.annotationEditorLayer = null), this.xfaLayer && (!St || !this.xfaLayer.div) && (this.xfaLayer.cancel(), this.xfaLayer = null, (kt = this._textHighlighter) == null || kt.disable());
            }
            cssTransform({
              target: ot,
              redrawAnnotationLayer: At = !1,
              redrawAnnotationEditorLayer: St = !1,
              redrawXfaLayer: Rt = !1,
              redrawTextLayer: Bt = !1,
              hideTextLayer: kt = !1
            }) {
              var at;
              if (!ot.hasAttribute("zooming")) {
                ot.setAttribute("zooming", !0);
                const {
                  style: J
                } = ot;
                J.width = J.height = "";
              }
              const Ut = t(this, Q).get(ot);
              if (this.viewport !== Ut) {
                const J = this.viewport.rotation - Ut.rotation, rt = Math.abs(J);
                let dt = 1, xt = 1;
                if (rt === 90 || rt === 270) {
                  const {
                    width: Ot,
                    height: jt
                  } = this.viewport;
                  dt = jt / Ot, xt = Ot / jt;
                }
                ot.style.transform = `rotate(${J}deg) scale(${dt}, ${xt})`;
              }
              At && this.annotationLayer && X(this, D, Mi).call(this), St && this.annotationEditorLayer && X(this, _t, ki).call(this), Rt && this.xfaLayer && X(this, a, Li).call(this), this.textLayer && (kt ? (this.textLayer.hide(), (at = this.structTreeLayer) == null || at.hide()) : Bt && X(this, R, Ri).call(this));
            }
            get width() {
              return this.viewport.width;
            }
            get height() {
              return this.viewport.height;
            }
            getPagePoint(ot, At) {
              return this.viewport.convertToPdfPoint(ot, At);
            }
            async draw() {
              this.renderingState !== r.RenderingStates.INITIAL && (console.error("Must be in new state before drawing"), this.reset());
              const {
                div: ot,
                l10n: At,
                pageColors: St,
                pdfPage: Rt,
                viewport: Bt
              } = this;
              if (!Rt)
                throw this.renderingState = r.RenderingStates.FINISHED, new Error("pdfPage is not loaded");
              this.renderingState = r.RenderingStates.RUNNING;
              const kt = document.createElement("div");
              if (kt.classList.add("canvasWrapper"), ot.append(kt), !this.textLayer && t(this, K) !== r.TextLayerMode.DISABLE && !Rt.isPureXfa && (this._accessibilityManager || (this._accessibilityManager = new y.TextAccessibilityManager()), this.textLayer = new g.TextLayerBuilder({
                highlighter: this._textHighlighter,
                accessibilityManager: this._accessibilityManager,
                isOffscreenCanvasSupported: this.isOffscreenCanvasSupported,
                enablePermissions: t(this, K) === r.TextLayerMode.ENABLE_PERMISSIONS
              }), ot.append(this.textLayer.div)), !this.annotationLayer && t(this, _) !== d.AnnotationMode.DISABLE) {
                const {
                  annotationStorage: B,
                  downloadManager: ht,
                  enableScripting: Lt,
                  fieldObjectsPromise: Pt,
                  hasJSActionsPromise: pt,
                  linkService: vt
                } = t(this, T).call(this);
                this._annotationCanvasMap || (this._annotationCanvasMap = /* @__PURE__ */ new Map()), this.annotationLayer = new M.AnnotationLayerBuilder({
                  pageDiv: ot,
                  pdfPage: Rt,
                  annotationStorage: B,
                  imageResourcesPath: this.imageResourcesPath,
                  renderForms: t(this, _) === d.AnnotationMode.ENABLE_FORMS,
                  linkService: vt,
                  downloadManager: ht,
                  l10n: At,
                  enableScripting: Lt,
                  hasJSActionsPromise: pt,
                  fieldObjectsPromise: Pt,
                  annotationCanvasMap: this._annotationCanvasMap,
                  accessibilityManager: this._accessibilityManager
                });
              }
              const Ut = (B) => {
                if (xt == null || xt(!1), this.renderingQueue && !this.renderingQueue.isHighestPriority(this)) {
                  this.renderingState = r.RenderingStates.PAUSED, this.resume = () => {
                    this.renderingState = r.RenderingStates.RUNNING, B();
                  };
                  return;
                }
                B();
              }, {
                width: at,
                height: J
              } = Bt, rt = document.createElement("canvas");
              rt.setAttribute("role", "presentation"), rt.hidden = !0;
              const dt = !!(St != null && St.background && (St != null && St.foreground));
              let xt = (B) => {
                (!dt || B) && (rt.hidden = !1, xt = null);
              };
              kt.append(rt), this.canvas = rt;
              const Ot = rt.getContext("2d", {
                alpha: !1
              }), jt = this.outputScale = new r.OutputScale();
              if (this.maxCanvasPixels === 0) {
                const B = 1 / this.scale;
                jt.sx *= B, jt.sy *= B, it(this, o, !0);
              } else if (this.maxCanvasPixels > 0) {
                const B = at * J, ht = Math.sqrt(this.maxCanvasPixels / B);
                jt.sx > ht || jt.sy > ht ? (jt.sx = ht, jt.sy = ht, it(this, o, !0)) : it(this, o, !1);
              }
              const Wt = (0, r.approximateFraction)(jt.sx), Nt = (0, r.approximateFraction)(jt.sy);
              rt.width = (0, r.roundToDivide)(at * jt.sx, Wt[0]), rt.height = (0, r.roundToDivide)(J * jt.sy, Nt[0]);
              const {
                style: Ht
              } = rt;
              Ht.width = (0, r.roundToDivide)(at, Wt[1]) + "px", Ht.height = (0, r.roundToDivide)(J, Nt[1]) + "px", t(this, Q).set(rt, Bt);
              const $t = jt.scaled ? [jt.sx, 0, 0, jt.sy, 0, 0] : null, Gt = {
                canvasContext: Ot,
                transform: $t,
                viewport: Bt,
                annotationMode: t(this, _),
                optionalContentConfigPromise: this._optionalContentConfigPromise,
                annotationCanvasMap: this._annotationCanvasMap,
                pageColors: St
              }, Ct = this.renderTask = this.pdfPage.render(Gt);
              Ct.onContinue = Ut;
              const m = Ct.promise.then(async () => {
                var B;
                if (xt == null || xt(!0), await X(this, wt, Fi).call(this, Ct), X(this, R, Ri).call(this), this.annotationLayer && await X(this, D, Mi).call(this), !this.annotationEditorLayer) {
                  const {
                    annotationEditorUIManager: ht
                  } = t(this, T).call(this);
                  if (!ht)
                    return;
                  this.annotationEditorLayer = new F.AnnotationEditorLayerBuilder({
                    uiManager: ht,
                    pageDiv: ot,
                    pdfPage: Rt,
                    l10n: At,
                    accessibilityManager: this._accessibilityManager,
                    annotationLayer: (B = this.annotationLayer) == null ? void 0 : B.annotationLayer
                  });
                }
                X(this, _t, ki).call(this);
              }, (B) => (B instanceof d.RenderingCancelledException || xt == null || xt(!0), X(this, wt, Fi).call(this, Ct, B)));
              if (Rt.isPureXfa) {
                if (this.xfaLayer)
                  this.xfaLayer.div && ot.append(this.xfaLayer.div);
                else {
                  const {
                    annotationStorage: B,
                    linkService: ht
                  } = t(this, T).call(this);
                  this.xfaLayer = new w.XfaLayerBuilder({
                    pageDiv: ot,
                    pdfPage: Rt,
                    annotationStorage: B,
                    linkService: ht
                  });
                }
                X(this, a, Li).call(this);
              }
              return ot.setAttribute("data-loaded", !0), this.eventBus.dispatch("pagerender", {
                source: this,
                pageNumber: this.id
              }), m;
            }
            setPageLabel(ot) {
              this.pageLabel = typeof ot == "string" ? ot : null, this.pageLabel !== null ? this.div.setAttribute("data-page-label", this.pageLabel) : this.div.removeAttribute("data-page-label");
            }
            get thumbnailCanvas() {
              const {
                directDrawing: ot,
                initialOptionalContent: At,
                regularAnnotations: St
              } = t(this, Z);
              return ot && At && St ? this.canvas : null;
            }
          }
          _ = new WeakMap(), o = new WeakMap(), T = new WeakMap(), P = new WeakMap(), Y = new WeakMap(), tt = new WeakMap(), x = new WeakMap(), K = new WeakMap(), Z = new WeakMap(), Q = new WeakMap(), v = new WeakSet(), Be = function() {
            const {
              viewport: ot
            } = this;
            if (this.pdfPage) {
              if (t(this, Y) === ot.rotation)
                return;
              it(this, Y, ot.rotation);
            }
            (0, d.setLayerDimensions)(this.div, ot, !0, !1);
          }, D = new WeakSet(), Mi = async function() {
            let ot = null;
            try {
              await this.annotationLayer.render(this.viewport, "display");
            } catch (At) {
              console.error(`#renderAnnotationLayer: "${At}".`), ot = At;
            } finally {
              this.eventBus.dispatch("annotationlayerrendered", {
                source: this,
                pageNumber: this.id,
                error: ot
              });
            }
          }, _t = new WeakSet(), ki = async function() {
            let ot = null;
            try {
              await this.annotationEditorLayer.render(this.viewport, "display");
            } catch (At) {
              console.error(`#renderAnnotationEditorLayer: "${At}".`), ot = At;
            } finally {
              this.eventBus.dispatch("annotationeditorlayerrendered", {
                source: this,
                pageNumber: this.id,
                error: ot
              });
            }
          }, a = new WeakSet(), Li = async function() {
            let ot = null;
            try {
              const At = await this.xfaLayer.render(this.viewport, "display");
              At != null && At.textDivs && this._textHighlighter && X(this, st, Bn).call(this, At.textDivs);
            } catch (At) {
              console.error(`#renderXfaLayer: "${At}".`), ot = At;
            } finally {
              this.eventBus.dispatch("xfalayerrendered", {
                source: this,
                pageNumber: this.id,
                error: ot
              });
            }
          }, R = new WeakSet(), Ri = async function() {
            const {
              pdfPage: ot,
              textLayer: At,
              viewport: St
            } = this;
            if (!At)
              return;
            let Rt = null;
            try {
              if (!At.renderingDone) {
                const Bt = ot.streamTextContent({
                  includeMarkedContent: !0,
                  disableNormalization: !0
                });
                At.setTextContentSource(Bt);
              }
              await At.render(St);
            } catch (Bt) {
              if (Bt instanceof d.AbortException)
                return;
              console.error(`#renderTextLayer: "${Bt}".`), Rt = Bt;
            }
            this.eventBus.dispatch("textlayerrendered", {
              source: this,
              pageNumber: this.id,
              numTextDivs: At.numTextDivs,
              error: Rt
            }), X(this, W, Nn).call(this);
          }, W = new WeakSet(), Nn = async function() {
            var St, Rt, Bt;
            if (!this.textLayer)
              return;
            this.structTreeLayer || (this.structTreeLayer = new u.StructTreeLayerBuilder());
            const ot = await (this.structTreeLayer.renderingDone ? null : this.pdfPage.getStructTree()), At = (St = this.structTreeLayer) == null ? void 0 : St.render(ot);
            At && ((Rt = this.canvas) == null || Rt.append(At)), (Bt = this.structTreeLayer) == null || Bt.show();
          }, st = new WeakSet(), Bn = async function(ot) {
            const At = await this.pdfPage.getTextContent(), St = [];
            for (const Rt of At.items)
              St.push(Rt.str);
            this._textHighlighter.setTextMapping(ot, St), this._textHighlighter.enable();
          }, wt = new WeakSet(), Fi = async function(ot, At = null) {
            if (ot === this.renderTask && (this.renderTask = null), At instanceof d.RenderingCancelledException) {
              it(this, tt, null);
              return;
            }
            if (it(this, tt, At), this.renderingState = r.RenderingStates.FINISHED, this._resetZoomLayer(!0), t(this, Z).regularAnnotations = !ot.separateAnnots, this.eventBus.dispatch("pagerendered", {
              source: this,
              pageNumber: this.id,
              cssTransform: !1,
              timestamp: performance.now(),
              error: t(this, tt)
            }), At)
              throw At;
          }, I.PDFPageView = E;
        },
        /* 14 */
        /***/
        (V, I, c) => {
          var M, S;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.AnnotationEditorLayerBuilder = void 0;
          var d = c(4), r = c(7);
          class F {
            constructor(p) {
              N(this, M, null);
              N(this, S, void 0);
              this.pageDiv = p.pageDiv, this.pdfPage = p.pdfPage, this.accessibilityManager = p.accessibilityManager, this.l10n = p.l10n || r.NullL10n, this.annotationEditorLayer = null, this.div = null, this._cancelled = !1, it(this, S, p.uiManager), it(this, M, p.annotationLayer || null);
            }
            async render(p, u = "display") {
              if (u !== "display" || this._cancelled)
                return;
              const y = p.clone({
                dontFlip: !0
              });
              if (this.div) {
                this.annotationEditorLayer.update({
                  viewport: y
                }), this.show();
                return;
              }
              const b = this.div = document.createElement("div");
              b.className = "annotationEditorLayer", b.tabIndex = 0, b.hidden = !0, this.pageDiv.append(b), this.annotationEditorLayer = new d.AnnotationEditorLayer({
                uiManager: t(this, S),
                div: b,
                accessibilityManager: this.accessibilityManager,
                pageIndex: this.pdfPage.pageNumber - 1,
                l10n: this.l10n,
                viewport: y,
                annotationLayer: t(this, M)
              });
              const g = {
                viewport: y,
                div: b,
                annotations: null,
                intent: u
              };
              this.annotationEditorLayer.render(g), this.show();
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
          M = new WeakMap(), S = new WeakMap(), I.AnnotationEditorLayerBuilder = F;
        },
        /* 15 */
        /***/
        (V, I) => {
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.compatibilityParams = I.OptionKind = I.AppOptions = void 0;
          const c = /* @__PURE__ */ Object.create(null);
          I.compatibilityParams = c;
          {
            const S = navigator.userAgent || "", h = navigator.platform || "", p = navigator.maxTouchPoints || 1, u = /Android/.test(S), y = /\b(iPad|iPhone|iPod)(?=;)/.test(S) || h === "MacIntel" && p > 1;
            (function() {
              (y || u) && (c.maxCanvasPixels = 5242880);
            })();
          }
          const d = {
            VIEWER: 2,
            API: 4,
            WORKER: 8,
            PREFERENCE: 128
          };
          I.OptionKind = d;
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
          const F = /* @__PURE__ */ Object.create(null);
          class M {
            constructor() {
              throw new Error("Cannot initialize AppOptions.");
            }
            static get(h) {
              const p = F[h];
              if (p !== void 0)
                return p;
              const u = r[h];
              if (u !== void 0)
                return c[h] ?? u.value;
            }
            static getAll(h = null) {
              const p = /* @__PURE__ */ Object.create(null);
              for (const u in r) {
                const y = r[u];
                if (h) {
                  if (!(h & y.kind))
                    continue;
                  if (h === d.PREFERENCE) {
                    const g = y.value, w = typeof g;
                    if (w === "boolean" || w === "string" || w === "number" && Number.isInteger(g)) {
                      p[u] = g;
                      continue;
                    }
                    throw new Error(`Invalid type for preference: ${u}`);
                  }
                }
                const b = F[u];
                p[u] = b !== void 0 ? b : c[u] ?? y.value;
              }
              return p;
            }
            static set(h, p) {
              F[h] = p;
            }
            static setAll(h) {
              for (const p in h)
                F[p] = h[p];
            }
            static remove(h) {
              delete F[h];
            }
          }
          I.AppOptions = M, M._hasUserOptions = function() {
            return Object.keys(F).length > 0;
          };
        },
        /* 16 */
        /***/
        (V, I) => {
          var F, M, Ii, h, Di;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.StructTreeLayerBuilder = void 0;
          const c = {
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
          }, d = /^H(\d+)$/;
          class r {
            constructor() {
              N(this, M);
              N(this, h);
              N(this, F, void 0);
            }
            get renderingDone() {
              return t(this, F) !== void 0;
            }
            render(y) {
              if (t(this, F) !== void 0)
                return t(this, F);
              const b = X(this, h, Di).call(this, y);
              return b == null || b.classList.add("structTree"), it(this, F, b);
            }
            hide() {
              t(this, F) && !t(this, F).hidden && (t(this, F).hidden = !0);
            }
            show() {
              var y;
              (y = t(this, F)) != null && y.hidden && (t(this, F).hidden = !1);
            }
          }
          F = new WeakMap(), M = new WeakSet(), Ii = function(y, b) {
            y.alt !== void 0 && b.setAttribute("aria-label", y.alt), y.id !== void 0 && b.setAttribute("aria-owns", y.id), y.lang !== void 0 && b.setAttribute("lang", y.lang);
          }, h = new WeakSet(), Di = function(y) {
            if (!y)
              return null;
            const b = document.createElement("span");
            if ("role" in y) {
              const {
                role: g
              } = y, w = g.match(d);
              w ? (b.setAttribute("role", "heading"), b.setAttribute("aria-level", w[1])) : c[g] && b.setAttribute("role", c[g]);
            }
            if (X(this, M, Ii).call(this, y, b), y.children)
              if (y.children.length === 1 && "id" in y.children[0])
                X(this, M, Ii).call(this, y.children[0], b);
              else
                for (const g of y.children)
                  b.append(X(this, h, Di).call(this, g));
            return b;
          }, I.StructTreeLayerBuilder = r;
        },
        /* 17 */
        /***/
        (V, I, c) => {
          var F, M, S, h, p, Ve, y, Oi;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.TextAccessibilityManager = void 0;
          var d = c(2);
          const g = class g {
            constructor() {
              N(this, y);
              N(this, F, !1);
              N(this, M, null);
              N(this, S, /* @__PURE__ */ new Map());
              N(this, h, /* @__PURE__ */ new Map());
            }
            setTextMapping(s) {
              it(this, M, s);
            }
            enable() {
              if (t(this, F))
                throw new Error("TextAccessibilityManager is already enabled.");
              if (!t(this, M))
                throw new Error("Text divs and strings have not been set.");
              if (it(this, F, !0), it(this, M, t(this, M).slice()), t(this, M).sort(X(g, p, Ve)), t(this, S).size > 0) {
                const s = t(this, M);
                for (const [i, E] of t(this, S)) {
                  if (!document.getElementById(i)) {
                    t(this, S).delete(i);
                    continue;
                  }
                  X(this, y, Oi).call(this, i, s[E]);
                }
              }
              for (const [s, i] of t(this, h))
                this.addPointerInTextLayer(s, i);
              t(this, h).clear();
            }
            disable() {
              t(this, F) && (t(this, h).clear(), it(this, M, null), it(this, F, !1));
            }
            removePointerInTextLayer(s) {
              if (!t(this, F)) {
                t(this, h).delete(s);
                return;
              }
              const i = t(this, M);
              if (!i || i.length === 0)
                return;
              const {
                id: E
              } = s, _ = t(this, S).get(E);
              if (_ === void 0)
                return;
              const o = i[_];
              t(this, S).delete(E);
              let T = o.getAttribute("aria-owns");
              T != null && T.includes(E) && (T = T.split(" ").filter((P) => P !== E).join(" "), T ? o.setAttribute("aria-owns", T) : (o.removeAttribute("aria-owns"), o.setAttribute("role", "presentation")));
            }
            addPointerInTextLayer(s, i) {
              const {
                id: E
              } = s;
              if (!E)
                return;
              if (!t(this, F)) {
                t(this, h).set(s, i);
                return;
              }
              i && this.removePointerInTextLayer(s);
              const _ = t(this, M);
              if (!_ || _.length === 0)
                return;
              const o = (0, d.binarySearchFirstItem)(_, (P) => {
                var Y;
                return X(Y = g, p, Ve).call(Y, s, P) < 0;
              }), T = Math.max(0, o - 1);
              X(this, y, Oi).call(this, E, _[T]), t(this, S).set(E, T);
            }
            moveElementInDOM(s, i, E, _) {
              if (this.addPointerInTextLayer(E, _), !s.hasChildNodes()) {
                s.append(i);
                return;
              }
              const o = Array.from(s.childNodes).filter((Y) => Y !== i);
              if (o.length === 0)
                return;
              const T = E || i, P = (0, d.binarySearchFirstItem)(o, (Y) => {
                var tt;
                return X(tt = g, p, Ve).call(tt, T, Y) < 0;
              });
              P === 0 ? o[0].before(i) : o[P - 1].after(i);
            }
          };
          F = new WeakMap(), M = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakSet(), Ve = function(s, i) {
            const E = s.getBoundingClientRect(), _ = i.getBoundingClientRect();
            if (E.width === 0 && E.height === 0)
              return 1;
            if (_.width === 0 && _.height === 0)
              return -1;
            const o = E.y, T = E.y + E.height, P = E.y + E.height / 2, Y = _.y, tt = _.y + _.height, x = _.y + _.height / 2;
            if (P <= Y && x >= T)
              return -1;
            if (x <= o && P >= tt)
              return 1;
            const K = E.x + E.width / 2, Z = _.x + _.width / 2;
            return K - Z;
          }, y = new WeakSet(), Oi = function(s, i) {
            const E = i.getAttribute("aria-owns");
            E != null && E.includes(s) || i.setAttribute("aria-owns", E ? `${E} ${s}` : s), i.removeAttribute("role");
          }, N(g, p);
          let r = g;
          I.TextAccessibilityManager = r;
        },
        /* 18 */
        /***/
        (V, I) => {
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.TextHighlighter = void 0;
          class c {
            constructor({
              findController: r,
              eventBus: F,
              pageIndex: M
            }) {
              this.findController = r, this.matches = [], this.eventBus = F, this.pageIdx = M, this._onUpdateTextLayerMatches = null, this.textDivs = null, this.textContentItemsStr = null, this.enabled = !1;
            }
            setTextMapping(r, F) {
              this.textDivs = r, this.textContentItemsStr = F;
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
            _convertMatches(r, F) {
              if (!r)
                return [];
              const {
                textContentItemsStr: M
              } = this;
              let S = 0, h = 0;
              const p = M.length - 1, u = [];
              for (let y = 0, b = r.length; y < b; y++) {
                let g = r[y];
                for (; S !== p && g >= h + M[S].length; )
                  h += M[S].length, S++;
                S === M.length && console.error("Could not find a matching mapping");
                const w = {
                  begin: {
                    divIdx: S,
                    offset: g - h
                  }
                };
                for (g += F[y]; S !== p && g > h + M[S].length; )
                  h += M[S].length, S++;
                w.end = {
                  divIdx: S,
                  offset: g - h
                }, u.push(w);
              }
              return u;
            }
            _renderMatches(r) {
              if (r.length === 0)
                return;
              const {
                findController: F,
                pageIdx: M
              } = this, {
                textContentItemsStr: S,
                textDivs: h
              } = this, p = M === F.selected.pageIdx, u = F.selected.matchIdx, y = F.state.highlightAll;
              let b = null;
              const g = {
                divIdx: -1,
                offset: void 0
              };
              function w(T, P) {
                const Y = T.divIdx;
                return h[Y].textContent = "", s(Y, 0, T.offset, P);
              }
              function s(T, P, Y, tt) {
                let x = h[T];
                if (x.nodeType === Node.TEXT_NODE) {
                  const Q = document.createElement("span");
                  x.before(Q), Q.append(x), h[T] = Q, x = Q;
                }
                const K = S[T].substring(P, Y), Z = document.createTextNode(K);
                if (tt) {
                  const Q = document.createElement("span");
                  return Q.className = `${tt} appended`, Q.append(Z), x.append(Q), tt.includes("selected") ? Q.offsetLeft : 0;
                }
                return x.append(Z), 0;
              }
              let i = u, E = i + 1;
              if (y)
                i = 0, E = r.length;
              else if (!p)
                return;
              let _ = -1, o = -1;
              for (let T = i; T < E; T++) {
                const P = r[T], Y = P.begin;
                if (Y.divIdx === _ && Y.offset === o)
                  continue;
                _ = Y.divIdx, o = Y.offset;
                const tt = P.end, x = p && T === u, K = x ? " selected" : "";
                let Z = 0;
                if (!b || Y.divIdx !== b.divIdx ? (b !== null && s(b.divIdx, b.offset, g.offset), w(Y)) : s(b.divIdx, b.offset, Y.offset), Y.divIdx === tt.divIdx)
                  Z = s(Y.divIdx, Y.offset, tt.offset, "highlight" + K);
                else {
                  Z = s(Y.divIdx, Y.offset, g.offset, "highlight begin" + K);
                  for (let Q = Y.divIdx + 1, v = tt.divIdx; Q < v; Q++)
                    h[Q].className = "highlight middle" + K;
                  w(tt, "highlight end" + K);
                }
                b = tt, x && F.scrollMatchIntoView({
                  element: h[Y.divIdx],
                  selectedLeft: Z,
                  pageIndex: M,
                  matchIndex: u
                });
              }
              b && s(b.divIdx, b.offset, g.offset);
            }
            _updateMatches(r = !1) {
              if (!this.enabled && !r)
                return;
              const {
                findController: F,
                matches: M,
                pageIdx: S
              } = this, {
                textContentItemsStr: h,
                textDivs: p
              } = this;
              let u = -1;
              for (const g of M) {
                const w = Math.max(u, g.begin.divIdx);
                for (let s = w, i = g.end.divIdx; s <= i; s++) {
                  const E = p[s];
                  E.textContent = h[s], E.className = "";
                }
                u = g.end.divIdx + 1;
              }
              if (!(F != null && F.highlightMatches) || r)
                return;
              const y = F.pageMatches[S] || null, b = F.pageMatchesLength[S] || null;
              this.matches = this._convertMatches(y, b), this._renderMatches(this.matches);
            }
          }
          I.TextHighlighter = c;
        },
        /* 19 */
        /***/
        (V, I, c) => {
          var M, S, h, p, u, Vn, b, Un;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.TextLayerBuilder = void 0;
          var d = c(4), r = c(2);
          class F {
            constructor({
              highlighter: s = null,
              accessibilityManager: i = null,
              isOffscreenCanvasSupported: E = !0,
              enablePermissions: _ = !1
            }) {
              N(this, u);
              N(this, b);
              N(this, M, !1);
              N(this, S, 0);
              N(this, h, 0);
              N(this, p, null);
              this.textContentItemsStr = [], this.renderingDone = !1, this.textDivs = [], this.textDivProperties = /* @__PURE__ */ new WeakMap(), this.textLayerRenderTask = null, this.highlighter = s, this.accessibilityManager = i, this.isOffscreenCanvasSupported = E, it(this, M, _ === !0), this.div = document.createElement("div"), this.div.className = "textLayer", this.hide();
            }
            get numTextDivs() {
              return this.textDivs.length;
            }
            async render(s) {
              var _, o, T;
              if (!t(this, p))
                throw new Error('No "textContentSource" parameter specified.');
              const i = s.scale * (globalThis.devicePixelRatio || 1), {
                rotation: E
              } = s;
              if (this.renderingDone) {
                const P = E !== t(this, S), Y = i !== t(this, h);
                (P || Y) && (this.hide(), (0, d.updateTextLayer)({
                  container: this.div,
                  viewport: s,
                  textDivs: this.textDivs,
                  textDivProperties: this.textDivProperties,
                  isOffscreenCanvasSupported: this.isOffscreenCanvasSupported,
                  mustRescale: Y,
                  mustRotate: P
                }), it(this, h, i), it(this, S, E)), this.show();
                return;
              }
              this.cancel(), (_ = this.highlighter) == null || _.setTextMapping(this.textDivs, this.textContentItemsStr), (o = this.accessibilityManager) == null || o.setTextMapping(this.textDivs), this.textLayerRenderTask = (0, d.renderTextLayer)({
                textContentSource: t(this, p),
                container: this.div,
                viewport: s,
                textDivs: this.textDivs,
                textDivProperties: this.textDivProperties,
                textContentItemsStr: this.textContentItemsStr,
                isOffscreenCanvasSupported: this.isOffscreenCanvasSupported
              }), await this.textLayerRenderTask.promise, X(this, u, Vn).call(this), it(this, h, i), it(this, S, E), this.show(), (T = this.accessibilityManager) == null || T.enable();
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
              this.cancel(), it(this, p, s);
            }
          }
          M = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), u = new WeakSet(), Vn = function() {
            this.renderingDone = !0;
            const s = document.createElement("div");
            s.className = "endOfContent", this.div.append(s), X(this, b, Un).call(this);
          }, b = new WeakSet(), Un = function() {
            const {
              div: s
            } = this;
            s.addEventListener("mousedown", (i) => {
              const E = s.querySelector(".endOfContent");
              if (!E)
                return;
              let _ = i.target !== s;
              if (_ && (_ = getComputedStyle(E).getPropertyValue("-moz-user-select") !== "none"), _) {
                const o = s.getBoundingClientRect(), T = Math.max(0, (i.pageY - o.top) / o.height);
                E.style.top = (T * 100).toFixed(2) + "%";
              }
              E.classList.add("active");
            }), s.addEventListener("mouseup", () => {
              const i = s.querySelector(".endOfContent");
              i && (i.style.top = "", i.classList.remove("active"));
            }), s.addEventListener("copy", (i) => {
              if (!t(this, M)) {
                const E = document.getSelection();
                i.clipboardData.setData("text/plain", (0, r.removeNullCharacters)((0, d.normalizeUnicode)(E.toString())));
              }
              i.preventDefault(), i.stopPropagation();
            });
          }, I.TextLayerBuilder = F;
        },
        /* 20 */
        /***/
        (V, I, c) => {
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.XfaLayerBuilder = void 0;
          var d = c(4);
          class r {
            constructor({
              pageDiv: M,
              pdfPage: S,
              annotationStorage: h = null,
              linkService: p,
              xfaHtml: u = null
            }) {
              this.pageDiv = M, this.pdfPage = S, this.annotationStorage = h, this.linkService = p, this.xfaHtml = u, this.div = null, this._cancelled = !1;
            }
            async render(M, S = "display") {
              if (S === "print") {
                const u = {
                  viewport: M.clone({
                    dontFlip: !0
                  }),
                  div: this.div,
                  xfaHtml: this.xfaHtml,
                  annotationStorage: this.annotationStorage,
                  linkService: this.linkService,
                  intent: S
                }, y = document.createElement("div");
                return this.pageDiv.append(y), u.div = y, d.XfaLayer.render(u);
              }
              const h = await this.pdfPage.getXfa();
              if (this._cancelled || !h)
                return {
                  textDivs: []
                };
              const p = {
                viewport: M.clone({
                  dontFlip: !0
                }),
                div: this.div,
                xfaHtml: h,
                annotationStorage: this.annotationStorage,
                linkService: this.linkService,
                intent: S
              };
              return this.div ? d.XfaLayer.update(p) : (this.div = document.createElement("div"), this.pageDiv.append(this.div), p.div = this.div, d.XfaLayer.render(p));
            }
            cancel() {
              this._cancelled = !0;
            }
            hide() {
              this.div && (this.div.hidden = !0);
            }
          }
          I.XfaLayerBuilder = r;
        },
        /* 21 */
        /***/
        (V, I, c) => {
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.PDFScriptingManager = void 0;
          var d = c(22), r = c(23);
          class F extends r.PDFScriptingManager {
            constructor(S) {
              S.externalServices || window.addEventListener("updatefromsandbox", (h) => {
                S.eventBus.dispatch("updatefromsandbox", {
                  source: window,
                  detail: h.detail
                });
              }), S.externalServices || (S.externalServices = {
                createScripting: ({
                  sandboxBundleSrc: h
                }) => new d.GenericScripting(h)
              }), S.docProperties || (S.docProperties = (h) => (0, d.docProperties)(h)), super(S);
            }
          }
          I.PDFScriptingManager = F;
        },
        /* 22 */
        /***/
        (V, I, c) => {
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.GenericScripting = void 0, I.docProperties = r;
          var d = c(4);
          async function r(M) {
            const S = "", h = S.split("#")[0];
            let {
              info: p,
              metadata: u,
              contentDispositionFilename: y,
              contentLength: b
            } = await M.getMetadata();
            if (!b) {
              const {
                length: g
              } = await M.getDownloadInfo();
              b = g;
            }
            return {
              ...p,
              baseURL: h,
              filesize: b,
              filename: y || (0, d.getPdfFilenameFromUrl)(S),
              metadata: u == null ? void 0 : u.getRaw(),
              authors: u == null ? void 0 : u.get("dc:creator"),
              numPages: M.numPages,
              URL: S
            };
          }
          class F {
            constructor(S) {
              this._ready = (0, d.loadScript)(S, !0).then(() => window.pdfjsSandbox.QuickJSSandbox());
            }
            async createSandbox(S) {
              (await this._ready).create(S);
            }
            async dispatchEventInSandbox(S) {
              const h = await this._ready;
              setTimeout(() => h.dispatchEvent(S), 0);
            }
            async destroySandbox() {
              (await this._ready).nukeSandbox();
            }
          }
          I.GenericScripting = F;
        },
        /* 23 */
        /***/
        (V, I, c) => {
          var M, S, h, p, u, y, b, g, w, s, i, E, Hn, o, Ue, P, Ni, tt, jn, K, Se;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.PDFScriptingManager = void 0;
          var d = c(2), r = c(4);
          class F {
            constructor({
              eventBus: v,
              sandboxBundleSrc: j = null,
              externalServices: D = null,
              docProperties: lt = null
            }) {
              N(this, E);
              N(this, o);
              N(this, P);
              N(this, tt);
              N(this, K);
              N(this, M, null);
              N(this, S, null);
              N(this, h, null);
              N(this, p, null);
              N(this, u, null);
              N(this, y, null);
              N(this, b, null);
              N(this, g, !1);
              N(this, w, null);
              N(this, s, null);
              N(this, i, null);
              it(this, p, v), it(this, w, j), it(this, u, D), it(this, h, lt);
            }
            setViewer(v) {
              it(this, b, v);
            }
            async setDocument(v) {
              var _t;
              if (t(this, y) && await X(this, K, Se).call(this), it(this, y, v), !v)
                return;
              const [j, D, lt] = await Promise.all([v.getFieldObjects(), v.getCalculationOrderIds(), v.getJSActions()]);
              if (!j && !lt) {
                await X(this, K, Se).call(this);
                return;
              }
              if (v === t(this, y)) {
                try {
                  it(this, s, X(this, tt, jn).call(this));
                } catch (k) {
                  console.error(`setDocument: "${k.message}".`), await X(this, K, Se).call(this);
                  return;
                }
                this._internalEvents.set("updatefromsandbox", (k) => {
                  (k == null ? void 0 : k.source) === window && X(this, E, Hn).call(this, k.detail);
                }), this._internalEvents.set("dispatcheventinsandbox", (k) => {
                  var a;
                  (a = t(this, s)) == null || a.dispatchEventInSandbox(k.detail);
                }), this._internalEvents.set("pagechanging", ({
                  pageNumber: k,
                  previous: a
                }) => {
                  k !== a && (X(this, P, Ni).call(this, a), X(this, o, Ue).call(this, k));
                }), this._internalEvents.set("pagerendered", ({
                  pageNumber: k
                }) => {
                  this._pageOpenPending.has(k) && k === t(this, b).currentPageNumber && X(this, o, Ue).call(this, k);
                }), this._internalEvents.set("pagesdestroy", async () => {
                  var k, a;
                  await X(this, P, Ni).call(this, t(this, b).currentPageNumber), await ((k = t(this, s)) == null ? void 0 : k.dispatchEventInSandbox({
                    id: "doc",
                    name: "WillClose"
                  })), (a = t(this, M)) == null || a.resolve();
                });
                for (const [k, a] of this._internalEvents)
                  t(this, p)._on(k, a);
                try {
                  const k = await t(this, h).call(this, v);
                  if (v !== t(this, y))
                    return;
                  await t(this, s).createSandbox({
                    objects: j,
                    calculationOrder: D,
                    appInfo: {
                      platform: navigator.platform,
                      language: navigator.language
                    },
                    docInfo: {
                      ...k,
                      actions: lt
                    }
                  }), t(this, p).dispatch("sandboxcreated", {
                    source: this
                  });
                } catch (k) {
                  console.error(`setDocument: "${k.message}".`), await X(this, K, Se).call(this);
                  return;
                }
                await ((_t = t(this, s)) == null ? void 0 : _t.dispatchEventInSandbox({
                  id: "doc",
                  name: "Open"
                })), await X(this, o, Ue).call(this, t(this, b).currentPageNumber, !0), Promise.resolve().then(() => {
                  v === t(this, y) && it(this, g, !0);
                });
              }
            }
            async dispatchWillSave() {
              var v;
              return (v = t(this, s)) == null ? void 0 : v.dispatchEventInSandbox({
                id: "doc",
                name: "WillSave"
              });
            }
            async dispatchDidSave() {
              var v;
              return (v = t(this, s)) == null ? void 0 : v.dispatchEventInSandbox({
                id: "doc",
                name: "DidSave"
              });
            }
            async dispatchWillPrint() {
              var v;
              if (t(this, s)) {
                await ((v = t(this, i)) == null ? void 0 : v.promise), it(this, i, new r.PromiseCapability());
                try {
                  await t(this, s).dispatchEventInSandbox({
                    id: "doc",
                    name: "WillPrint"
                  });
                } catch (j) {
                  throw t(this, i).resolve(), it(this, i, null), j;
                }
                await t(this, i).promise;
              }
            }
            async dispatchDidPrint() {
              var v;
              return (v = t(this, s)) == null ? void 0 : v.dispatchEventInSandbox({
                id: "doc",
                name: "DidPrint"
              });
            }
            get destroyPromise() {
              var v;
              return ((v = t(this, S)) == null ? void 0 : v.promise) || null;
            }
            get ready() {
              return t(this, g);
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
          M = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), u = new WeakMap(), y = new WeakMap(), b = new WeakMap(), g = new WeakMap(), w = new WeakMap(), s = new WeakMap(), i = new WeakMap(), E = new WeakSet(), Hn = async function(v) {
            var R, $;
            const j = t(this, b), D = j.isInPresentationMode || j.isChangingPresentationMode, {
              id: lt,
              siblings: _t,
              command: k,
              value: a
            } = v;
            if (!lt) {
              switch (k) {
                case "clear":
                  console.clear();
                  break;
                case "error":
                  console.error(a);
                  break;
                case "layout":
                  if (!D) {
                    const W = (0, d.apiPageLayoutToViewerModes)(a);
                    j.spreadMode = W.spreadMode;
                  }
                  break;
                case "page-num":
                  j.currentPageNumber = a + 1;
                  break;
                case "print":
                  await j.pagesPromise, t(this, p).dispatch("print", {
                    source: this
                  });
                  break;
                case "println":
                  console.log(a);
                  break;
                case "zoom":
                  D || (j.currentScaleValue = a);
                  break;
                case "SaveAs":
                  t(this, p).dispatch("download", {
                    source: this
                  });
                  break;
                case "FirstPage":
                  j.currentPageNumber = 1;
                  break;
                case "LastPage":
                  j.currentPageNumber = j.pagesCount;
                  break;
                case "NextPage":
                  j.nextPage();
                  break;
                case "PrevPage":
                  j.previousPage();
                  break;
                case "ZoomViewIn":
                  D || j.increaseScale();
                  break;
                case "ZoomViewOut":
                  D || j.decreaseScale();
                  break;
                case "WillPrintFinished":
                  (R = t(this, i)) == null || R.resolve(), it(this, i, null);
                  break;
              }
              return;
            }
            if (D && v.focus)
              return;
            delete v.id, delete v.siblings;
            const l = _t ? [lt, ..._t] : [lt];
            for (const W of l) {
              const nt = document.querySelector(`[data-element-id="${W}"]`);
              nt ? nt.dispatchEvent(new CustomEvent("updatefromsandbox", {
                detail: v
              })) : ($ = t(this, y)) == null || $.annotationStorage.setValue(W, v);
            }
          }, o = new WeakSet(), Ue = async function(v, j = !1) {
            const D = t(this, y), lt = this._visitedPages;
            if (j && it(this, M, new r.PromiseCapability()), !t(this, M))
              return;
            const _t = t(this, b).getPageView(v - 1);
            if ((_t == null ? void 0 : _t.renderingState) !== d.RenderingStates.FINISHED) {
              this._pageOpenPending.add(v);
              return;
            }
            this._pageOpenPending.delete(v);
            const k = (async () => {
              var l, R;
              const a = await (lt.has(v) ? null : (l = _t.pdfPage) == null ? void 0 : l.getJSActions());
              D === t(this, y) && await ((R = t(this, s)) == null ? void 0 : R.dispatchEventInSandbox({
                id: "page",
                name: "PageOpen",
                pageNumber: v,
                actions: a
              }));
            })();
            lt.set(v, k);
          }, P = new WeakSet(), Ni = async function(v) {
            var _t;
            const j = t(this, y), D = this._visitedPages;
            if (!t(this, M) || this._pageOpenPending.has(v))
              return;
            const lt = D.get(v);
            lt && (D.set(v, null), await lt, j === t(this, y) && await ((_t = t(this, s)) == null ? void 0 : _t.dispatchEventInSandbox({
              id: "page",
              name: "PageClose",
              pageNumber: v
            })));
          }, tt = new WeakSet(), jn = function() {
            if (it(this, S, new r.PromiseCapability()), t(this, s))
              throw new Error("#initScripting: Scripting already exists.");
            return t(this, u).createScripting({
              sandboxBundleSrc: t(this, w)
            });
          }, K = new WeakSet(), Se = async function() {
            var v, j, D;
            if (!t(this, s)) {
              it(this, y, null), (v = t(this, S)) == null || v.resolve();
              return;
            }
            t(this, M) && (await Promise.race([t(this, M).promise, new Promise((lt) => {
              setTimeout(lt, 1e3);
            })]).catch(() => {
            }), it(this, M, null)), it(this, y, null);
            try {
              await t(this, s).destroySandbox();
            } catch {
            }
            (j = t(this, i)) == null || j.reject(new Error("Scripting destroyed.")), it(this, i, null);
            for (const [lt, _t] of this._internalEvents)
              t(this, p)._off(lt, _t);
            this._internalEvents.clear(), this._pageOpenPending.clear(), this._visitedPages.clear(), it(this, s, null), it(this, g, !1), (D = t(this, S)) == null || D.resolve();
          }, I.PDFScriptingManager = F;
        },
        /* 24 */
        /***/
        (V, I, c) => {
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.PDFSinglePageViewer = void 0;
          var d = c(2), r = c(25);
          class F extends r.PDFViewer {
            _resetView() {
              super._resetView(), this._scrollMode = d.ScrollMode.PAGE, this._spreadMode = d.SpreadMode.NONE;
            }
            set scrollMode(S) {
            }
            _updateScrollMode() {
            }
            set spreadMode(S) {
            }
            _updateSpreadMode() {
            }
          }
          I.PDFSinglePageViewer = F;
        },
        /* 25 */
        /***/
        (V, I, c) => {
          var w, s, i, Bi, _, o, T, P, Y, tt, x, K, Z, Q, v, j, D, lt, _t, k, a, Wn, R, zn, W, Gn, st, $n, wt, Ee, Et, He, At, Xn, Rt, Vi, kt, qn, at, se, rt, Ui, xt, Yn, jt, Kn, Nt, Hi, $t, Qn;
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.PagesCountLimit = I.PDFViewer = I.PDFPageViewBuffer = void 0;
          var d = c(4), r = c(2), F = c(7), M = c(13), S = c(26), h = c(5);
          const p = 10, u = {
            FORCE_SCROLL_MODE_PAGE: 15e3,
            FORCE_LAZY_PAGE_INIT: 7500,
            PAUSE_EAGER_PAGE_INIT: 250
          };
          I.PagesCountLimit = u;
          function y(Ct) {
            return Object.values(d.AnnotationEditorType).includes(Ct) && Ct !== d.AnnotationEditorType.DISABLE;
          }
          class b {
            constructor(m) {
              N(this, i);
              N(this, w, /* @__PURE__ */ new Set());
              N(this, s, 0);
              it(this, s, m);
            }
            push(m) {
              const B = t(this, w);
              B.has(m) && B.delete(m), B.add(m), B.size > t(this, s) && X(this, i, Bi).call(this);
            }
            resize(m, B = null) {
              it(this, s, m);
              const ht = t(this, w);
              if (B) {
                const Lt = ht.size;
                let Pt = 1;
                for (const pt of ht)
                  if (B.has(pt.id) && (ht.delete(pt), ht.add(pt)), ++Pt > Lt)
                    break;
              }
              for (; ht.size > t(this, s); )
                X(this, i, Bi).call(this);
            }
            has(m) {
              return t(this, w).has(m);
            }
            [Symbol.iterator]() {
              return t(this, w).keys();
            }
          }
          w = new WeakMap(), s = new WeakMap(), i = new WeakSet(), Bi = function() {
            const m = t(this, w).keys().next().value;
            m == null || m.destroy(), t(this, w).delete(m);
          }, I.PDFPageViewBuffer = b;
          class g {
            constructor(m) {
              N(this, a);
              N(this, R);
              N(this, W);
              N(this, st);
              N(this, wt);
              N(this, Et);
              N(this, At);
              N(this, Rt);
              N(this, kt);
              N(this, at);
              N(this, rt);
              N(this, xt);
              N(this, jt);
              N(this, Nt);
              N(this, $t);
              N(this, _, null);
              N(this, o, d.AnnotationEditorType.NONE);
              N(this, T, null);
              N(this, P, d.AnnotationMode.ENABLE_FORMS);
              N(this, Y, null);
              N(this, tt, null);
              N(this, x, !1);
              N(this, K, !1);
              N(this, Z, null);
              N(this, Q, !1);
              N(this, v, 0);
              N(this, j, new ResizeObserver(X(this, $t, Qn).bind(this)));
              N(this, D, null);
              N(this, lt, null);
              N(this, _t, null);
              N(this, k, r.TextLayerMode.ENABLE);
              var ht, Lt;
              const B = "3.10.111";
              if (d.version !== B)
                throw new Error(`The API version "${d.version}" does not match the Viewer version "${B}".`);
              if (this.container = m.container, this.viewer = m.viewer || m.container.firstElementChild, ((ht = this.container) == null ? void 0 : ht.tagName) !== "DIV" || ((Lt = this.viewer) == null ? void 0 : Lt.tagName) !== "DIV")
                throw new Error("Invalid `container` and/or `viewer` option.");
              if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute")
                throw new Error("The `container` must be absolutely positioned.");
              t(this, j).observe(this.container), this.eventBus = m.eventBus, this.linkService = m.linkService || new h.SimpleLinkService(), this.downloadManager = m.downloadManager || null, this.findController = m.findController || null, this.findController && (this.findController.onIsPageVisible = (Pt) => this._getVisiblePages().ids.has(Pt)), this._scriptingManager = m.scriptingManager || null, it(this, k, m.textLayerMode ?? r.TextLayerMode.ENABLE), it(this, P, m.annotationMode ?? d.AnnotationMode.ENABLE_FORMS), it(this, o, m.annotationEditorMode ?? d.AnnotationEditorType.NONE), this.imageResourcesPath = m.imageResourcesPath || "", this.enablePrintAutoRotate = m.enablePrintAutoRotate || !1, this.removePageBorders = m.removePageBorders || !1, m.useOnlyCssZoom && (console.error("useOnlyCssZoom was removed, please use `maxCanvasPixels = 0` instead."), m.maxCanvasPixels = 0), this.isOffscreenCanvasSupported = m.isOffscreenCanvasSupported ?? !0, this.maxCanvasPixels = m.maxCanvasPixels, this.l10n = m.l10n || F.NullL10n, it(this, x, m.enablePermissions || !1), this.pageColors = m.pageColors || null, this.defaultRenderingQueue = !m.renderingQueue, this.defaultRenderingQueue ? (this.renderingQueue = new S.PDFRenderingQueue(), this.renderingQueue.setViewer(this)) : this.renderingQueue = m.renderingQueue, this.scroll = (0, r.watchScroll)(this.container, this._scrollUpdate.bind(this)), this.presentationModeState = r.PresentationModeState.UNKNOWN, this._onBeforeDraw = this._onAfterDraw = null, this._resetView(), this.removePageBorders && this.viewer.classList.add("removePageBorders"), X(this, Nt, Hi).call(this), this.eventBus._on("thumbnailrendered", ({
                pageNumber: Pt,
                pdfPage: pt
              }) => {
                const vt = this._pages[Pt - 1];
                t(this, _).has(vt) || pt == null || pt.cleanup();
              });
            }
            get pagesCount() {
              return this._pages.length;
            }
            getPageView(m) {
              return this._pages[m];
            }
            getCachedPageViews() {
              return new Set(t(this, _));
            }
            get pageViewsReady() {
              return this._pagesCapability.settled && this._pages.every((m) => m == null ? void 0 : m.pdfPage);
            }
            get renderForms() {
              return t(this, P) === d.AnnotationMode.ENABLE_FORMS;
            }
            get enableScripting() {
              return !!this._scriptingManager;
            }
            get currentPageNumber() {
              return this._currentPageNumber;
            }
            set currentPageNumber(m) {
              if (!Number.isInteger(m))
                throw new Error("Invalid page number.");
              this.pdfDocument && (this._setCurrentPageNumber(m, !0) || console.error(`currentPageNumber: "${m}" is not a valid page.`));
            }
            _setCurrentPageNumber(m, B = !1) {
              var Lt;
              if (this._currentPageNumber === m)
                return B && X(this, rt, Ui).call(this), !0;
              if (!(0 < m && m <= this.pagesCount))
                return !1;
              const ht = this._currentPageNumber;
              return this._currentPageNumber = m, this.eventBus.dispatch("pagechanging", {
                source: this,
                pageNumber: m,
                pageLabel: ((Lt = this._pageLabels) == null ? void 0 : Lt[m - 1]) ?? null,
                previous: ht
              }), B && X(this, rt, Ui).call(this), !0;
            }
            get currentPageLabel() {
              var m;
              return ((m = this._pageLabels) == null ? void 0 : m[this._currentPageNumber - 1]) ?? null;
            }
            set currentPageLabel(m) {
              if (!this.pdfDocument)
                return;
              let B = m | 0;
              if (this._pageLabels) {
                const ht = this._pageLabels.indexOf(m);
                ht >= 0 && (B = ht + 1);
              }
              this._setCurrentPageNumber(B, !0) || console.error(`currentPageLabel: "${m}" is not a valid page.`);
            }
            get currentScale() {
              return this._currentScale !== r.UNKNOWN_SCALE ? this._currentScale : r.DEFAULT_SCALE;
            }
            set currentScale(m) {
              if (isNaN(m))
                throw new Error("Invalid numeric scale.");
              this.pdfDocument && X(this, at, se).call(this, m, {
                noScroll: !1
              });
            }
            get currentScaleValue() {
              return this._currentScaleValue;
            }
            set currentScaleValue(m) {
              this.pdfDocument && X(this, at, se).call(this, m, {
                noScroll: !1
              });
            }
            get pagesRotation() {
              return this._pagesRotation;
            }
            set pagesRotation(m) {
              if (!(0, r.isValidRotation)(m))
                throw new Error("Invalid pages rotation angle.");
              if (!this.pdfDocument || (m %= 360, m < 0 && (m += 360), this._pagesRotation === m))
                return;
              this._pagesRotation = m;
              const B = this._currentPageNumber;
              this.refresh(!0, {
                rotation: m
              }), this._currentScaleValue && X(this, at, se).call(this, this._currentScaleValue, {
                noScroll: !0
              }), this.eventBus.dispatch("rotationchanging", {
                source: this,
                pagesRotation: m,
                pageNumber: B
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
              const m = [], B = [];
              for (let ht = 1, Lt = this.pdfDocument.numPages; ht <= Lt; ++ht) {
                if (t(this, Q))
                  return null;
                B.length = 0;
                const Pt = await this.pdfDocument.getPage(ht), {
                  items: pt
                } = await Pt.getTextContent();
                for (const vt of pt)
                  vt.str && B.push(vt.str), vt.hasEOL && B.push(`
`);
                m.push((0, r.removeNullCharacters)(B.join("")));
              }
              return m.join(`
`);
            }
            setDocument(m) {
              var pt, vt;
              if (this.pdfDocument && (this.eventBus.dispatch("pagesdestroy", {
                source: this
              }), this._cancelRendering(), this._resetView(), (pt = this.findController) == null || pt.setDocument(null), (vt = this._scriptingManager) == null || vt.setDocument(null), t(this, T) && (t(this, T).destroy(), it(this, T, null))), this.pdfDocument = m, !m)
                return;
              const B = m.numPages, ht = m.getPage(1), Lt = m.getOptionalContentConfig(), Pt = t(this, x) ? m.getPermissions() : Promise.resolve();
              if (B > u.FORCE_SCROLL_MODE_PAGE) {
                console.warn("Forcing PAGE-scrolling for performance reasons, given the length of the document.");
                const U = this._scrollMode = r.ScrollMode.PAGE;
                this.eventBus.dispatch("scrollmodechanged", {
                  source: this,
                  mode: U
                });
              }
              this._pagesCapability.promise.then(() => {
                this.eventBus.dispatch("pagesloaded", {
                  source: this,
                  pagesCount: B
                });
              }, () => {
              }), this._onBeforeDraw = (U) => {
                const gt = this._pages[U.pageNumber - 1];
                gt && t(this, _).push(gt);
              }, this.eventBus._on("pagerender", this._onBeforeDraw), this._onAfterDraw = (U) => {
                U.cssTransform || this._onePageRenderedCapability.settled || (this._onePageRenderedCapability.resolve({
                  timestamp: U.timestamp
                }), this.eventBus._off("pagerendered", this._onAfterDraw), this._onAfterDraw = null, t(this, lt) && (document.removeEventListener("visibilitychange", t(this, lt)), it(this, lt, null)));
              }, this.eventBus._on("pagerendered", this._onAfterDraw), Promise.all([ht, Pt]).then(([U, gt]) => {
                var Mt, G;
                if (m !== this.pdfDocument)
                  return;
                this._firstPageCapability.resolve(U), this._optionalContentConfigPromise = Lt;
                const {
                  annotationEditorMode: Ft,
                  annotationMode: bt,
                  textLayerMode: O
                } = X(this, R, zn).call(this, gt);
                if (O !== r.TextLayerMode.DISABLE) {
                  const ct = it(this, Z, document.createElement("div"));
                  ct.id = "hiddenCopyElement", this.viewer.before(ct);
                }
                if (Ft !== d.AnnotationEditorType.DISABLE) {
                  const ct = Ft;
                  m.isPureXfa ? console.warn("Warning: XFA-editing is not implemented.") : y(ct) ? (it(this, T, new d.AnnotationEditorUIManager(this.container, this.viewer, this.eventBus, m, this.pageColors)), ct !== d.AnnotationEditorType.NONE && t(this, T).updateMode(ct)) : console.error(`Invalid AnnotationEditor mode: ${ct}`);
                }
                const C = X(this, a, Wn).bind(this), z = this._scrollMode === r.ScrollMode.PAGE ? null : this.viewer, H = this.currentScale, et = U.getViewport({
                  scale: H * d.PixelsPerInch.PDF_TO_CSS_UNITS
                });
                this.viewer.style.setProperty("--scale-factor", et.scale), (((Mt = this.pageColors) == null ? void 0 : Mt.foreground) === "CanvasText" || ((G = this.pageColors) == null ? void 0 : G.background) === "Canvas") && this.viewer.style.setProperty("--hcm-highligh-filter", m.filterFactory.addHighlightHCMFilter("CanvasText", "Canvas", "HighlightText", "Highlight"));
                for (let ct = 1; ct <= B; ++ct) {
                  const mt = new M.PDFPageView({
                    container: z,
                    eventBus: this.eventBus,
                    id: ct,
                    scale: H,
                    defaultViewport: et.clone(),
                    optionalContentConfigPromise: Lt,
                    renderingQueue: this.renderingQueue,
                    textLayerMode: O,
                    annotationMode: bt,
                    imageResourcesPath: this.imageResourcesPath,
                    isOffscreenCanvasSupported: this.isOffscreenCanvasSupported,
                    maxCanvasPixels: this.maxCanvasPixels,
                    pageColors: this.pageColors,
                    l10n: this.l10n,
                    layerProperties: C
                  });
                  this._pages.push(mt);
                }
                const ft = this._pages[0];
                ft && (ft.setPdfPage(U), this.linkService.cachePageRef(1, U.ref)), this._scrollMode === r.ScrollMode.PAGE ? X(this, wt, Ee).call(this) : this._spreadMode !== r.SpreadMode.NONE && this._updateSpreadMode(), X(this, W, Gn).call(this).then(async () => {
                  var mt, It;
                  if ((mt = this.findController) == null || mt.setDocument(m), (It = this._scriptingManager) == null || It.setDocument(m), t(this, Z) && (it(this, tt, X(this, st, $n).bind(this, O)), document.addEventListener("copy", t(this, tt))), t(this, T) && this.eventBus.dispatch("annotationeditormodechanged", {
                    source: this,
                    mode: t(this, o)
                  }), m.loadingParams.disableAutoFetch || B > u.FORCE_LAZY_PAGE_INIT) {
                    this._pagesCapability.resolve();
                    return;
                  }
                  let ct = B - 1;
                  if (ct <= 0) {
                    this._pagesCapability.resolve();
                    return;
                  }
                  for (let Tt = 2; Tt <= B; ++Tt) {
                    const Dt = m.getPage(Tt).then((Vt) => {
                      const zt = this._pages[Tt - 1];
                      zt.pdfPage || zt.setPdfPage(Vt), this.linkService.cachePageRef(Tt, Vt.ref), --ct === 0 && this._pagesCapability.resolve();
                    }, (Vt) => {
                      console.error(`Unable to get page ${Tt} to initialize viewer`, Vt), --ct === 0 && this._pagesCapability.resolve();
                    });
                    Tt % u.PAUSE_EAGER_PAGE_INIT === 0 && await Dt;
                  }
                }), this.eventBus.dispatch("pagesinit", {
                  source: this
                }), m.getMetadata().then(({
                  info: ct
                }) => {
                  m === this.pdfDocument && ct.Language && (this.viewer.lang = ct.Language);
                }), this.defaultRenderingQueue && this.update();
              }).catch((U) => {
                console.error("Unable to initialize viewer", U), this._pagesCapability.reject(U);
              });
            }
            setPageLabels(m) {
              var B;
              if (this.pdfDocument) {
                m ? Array.isArray(m) && this.pdfDocument.numPages === m.length ? this._pageLabels = m : (this._pageLabels = null, console.error("setPageLabels: Invalid page labels.")) : this._pageLabels = null;
                for (let ht = 0, Lt = this._pages.length; ht < Lt; ht++)
                  this._pages[ht].setPageLabel(((B = this._pageLabels) == null ? void 0 : B[ht]) ?? null);
              }
            }
            _resetView() {
              this._pages = [], this._currentPageNumber = 1, this._currentScale = r.UNKNOWN_SCALE, this._currentScaleValue = null, this._pageLabels = null, it(this, _, new b(p)), this._location = null, this._pagesRotation = 0, this._optionalContentConfigPromise = null, this._firstPageCapability = new d.PromiseCapability(), this._onePageRenderedCapability = new d.PromiseCapability(), this._pagesCapability = new d.PromiseCapability(), this._scrollMode = r.ScrollMode.VERTICAL, this._previousScrollMode = r.ScrollMode.UNKNOWN, this._spreadMode = r.SpreadMode.NONE, it(this, D, {
                previousPageNumber: 1,
                scrollDown: !0,
                pages: []
              }), this._onBeforeDraw && (this.eventBus._off("pagerender", this._onBeforeDraw), this._onBeforeDraw = null), this._onAfterDraw && (this.eventBus._off("pagerendered", this._onAfterDraw), this._onAfterDraw = null), t(this, lt) && (document.removeEventListener("visibilitychange", t(this, lt)), it(this, lt, null)), this.viewer.textContent = "", this._updateScrollMode(), this.viewer.removeAttribute("lang"), t(this, Z) && (document.removeEventListener("copy", t(this, tt)), it(this, tt, null), t(this, Z).remove(), it(this, Z, null));
            }
            _scrollUpdate() {
              this.pagesCount !== 0 && this.update();
            }
            pageLabelToPageNumber(m) {
              if (!this._pageLabels)
                return null;
              const B = this._pageLabels.indexOf(m);
              return B < 0 ? null : B + 1;
            }
            scrollPageIntoView({
              pageNumber: m,
              destArray: B = null,
              allowNegativeOffset: ht = !1,
              ignoreDestinationZoom: Lt = !1
            }) {
              if (!this.pdfDocument)
                return;
              const Pt = Number.isInteger(m) && this._pages[m - 1];
              if (!Pt) {
                console.error(`scrollPageIntoView: "${m}" is not a valid pageNumber parameter.`);
                return;
              }
              if (this.isInPresentationMode || !B) {
                this._setCurrentPageNumber(m, !0);
                return;
              }
              let pt = 0, vt = 0, U = 0, gt = 0, Ft, bt;
              const O = Pt.rotation % 180 !== 0, C = (O ? Pt.height : Pt.width) / Pt.scale / d.PixelsPerInch.PDF_TO_CSS_UNITS, z = (O ? Pt.width : Pt.height) / Pt.scale / d.PixelsPerInch.PDF_TO_CSS_UNITS;
              let H = 0;
              switch (B[1].name) {
                case "XYZ":
                  pt = B[2], vt = B[3], H = B[4], pt = pt !== null ? pt : 0, vt = vt !== null ? vt : z;
                  break;
                case "Fit":
                case "FitB":
                  H = "page-fit";
                  break;
                case "FitH":
                case "FitBH":
                  vt = B[2], H = "page-width", vt === null && this._location ? (pt = this._location.left, vt = this._location.top) : (typeof vt != "number" || vt < 0) && (vt = z);
                  break;
                case "FitV":
                case "FitBV":
                  pt = B[2], U = C, gt = z, H = "page-height";
                  break;
                case "FitR":
                  pt = B[2], vt = B[3], U = B[4] - pt, gt = B[5] - vt;
                  let G = r.SCROLLBAR_PADDING, ct = r.VERTICAL_PADDING;
                  this.removePageBorders && (G = ct = 0), Ft = (this.container.clientWidth - G) / U / d.PixelsPerInch.PDF_TO_CSS_UNITS, bt = (this.container.clientHeight - ct) / gt / d.PixelsPerInch.PDF_TO_CSS_UNITS, H = Math.min(Math.abs(Ft), Math.abs(bt));
                  break;
                default:
                  console.error(`scrollPageIntoView: "${B[1].name}" is not a valid destination type.`);
                  return;
              }
              if (Lt || (H && H !== this._currentScale ? this.currentScaleValue = H : this._currentScale === r.UNKNOWN_SCALE && (this.currentScaleValue = r.DEFAULT_SCALE_VALUE)), H === "page-fit" && !B[4]) {
                X(this, Et, He).call(this, Pt);
                return;
              }
              const et = [Pt.viewport.convertToViewportPoint(pt, vt), Pt.viewport.convertToViewportPoint(pt + U, vt + gt)];
              let ft = Math.min(et[0][0], et[1][0]), Mt = Math.min(et[0][1], et[1][1]);
              ht || (ft = Math.max(ft, 0), Mt = Math.max(Mt, 0)), X(this, Et, He).call(this, Pt, {
                left: ft,
                top: Mt
              });
            }
            _updateLocation(m) {
              const B = this._currentScale, ht = this._currentScaleValue, Lt = parseFloat(ht) === B ? Math.round(B * 1e4) / 100 : ht, Pt = m.id, pt = this._pages[Pt - 1], vt = this.container, U = pt.getPagePoint(vt.scrollLeft - m.x, vt.scrollTop - m.y), gt = Math.round(U[0]), Ft = Math.round(U[1]);
              let bt = `#page=${Pt}`;
              this.isInPresentationMode || (bt += `&zoom=${Lt},${gt},${Ft}`), this._location = {
                pageNumber: Pt,
                scale: Lt,
                top: Ft,
                left: gt,
                rotation: this._pagesRotation,
                pdfOpenParams: bt
              };
            }
            update() {
              const m = this._getVisiblePages(), B = m.views, ht = B.length;
              if (ht === 0)
                return;
              const Lt = Math.max(p, 2 * ht + 1);
              t(this, _).resize(Lt, m.ids), this.renderingQueue.renderHighestPriority(m);
              const Pt = this._spreadMode === r.SpreadMode.NONE && (this._scrollMode === r.ScrollMode.PAGE || this._scrollMode === r.ScrollMode.VERTICAL), pt = this._currentPageNumber;
              let vt = !1;
              for (const U of B) {
                if (U.percent < 100)
                  break;
                if (U.id === pt && Pt) {
                  vt = !0;
                  break;
                }
              }
              this._setCurrentPageNumber(vt ? pt : B[0].id), this._updateLocation(m.first), this.eventBus.dispatch("updateviewarea", {
                source: this,
                location: this._location
              });
            }
            containsElement(m) {
              return this.container.contains(m);
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
              const m = this._scrollMode === r.ScrollMode.PAGE ? t(this, D).pages : this._pages, B = this._scrollMode === r.ScrollMode.HORIZONTAL, ht = B && this._isContainerRtl;
              return (0, r.getVisibleElements)({
                scrollEl: this.container,
                views: m,
                sortByVisibility: !0,
                horizontal: B,
                rtl: ht
              });
            }
            cleanup() {
              for (const m of this._pages)
                m.renderingState !== r.RenderingStates.FINISHED && m.reset();
            }
            _cancelRendering() {
              for (const m of this._pages)
                m.cancelRendering();
            }
            forceRendering(m) {
              const B = m || this._getVisiblePages(), ht = X(this, jt, Kn).call(this, B), Lt = this._spreadMode !== r.SpreadMode.NONE && this._scrollMode !== r.ScrollMode.HORIZONTAL, Pt = this.renderingQueue.getHighestPriority(B, this._pages, ht, Lt);
              return Pt ? (X(this, xt, Yn).call(this, Pt).then(() => {
                this.renderingQueue.renderView(Pt);
              }), !0) : !1;
            }
            get hasEqualPageSizes() {
              const m = this._pages[0];
              for (let B = 1, ht = this._pages.length; B < ht; ++B) {
                const Lt = this._pages[B];
                if (Lt.width !== m.width || Lt.height !== m.height)
                  return !1;
              }
              return !0;
            }
            getPagesOverview() {
              let m;
              return this._pages.map((B) => {
                const ht = B.pdfPage.getViewport({
                  scale: 1
                }), Lt = (0, r.isPortraitOrientation)(ht);
                if (m === void 0)
                  m = Lt;
                else if (this.enablePrintAutoRotate && Lt !== m)
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
            set optionalContentConfigPromise(m) {
              if (!(m instanceof Promise))
                throw new Error(`Invalid optionalContentConfigPromise: ${m}`);
              this.pdfDocument && this._optionalContentConfigPromise && (this._optionalContentConfigPromise = m, this.refresh(!1, {
                optionalContentConfigPromise: m
              }), this.eventBus.dispatch("optionalcontentconfigchanged", {
                source: this,
                promise: m
              }));
            }
            get scrollMode() {
              return this._scrollMode;
            }
            set scrollMode(m) {
              if (this._scrollMode !== m) {
                if (!(0, r.isValidScrollMode)(m))
                  throw new Error(`Invalid scroll mode: ${m}`);
                this.pagesCount > u.FORCE_SCROLL_MODE_PAGE || (this._previousScrollMode = this._scrollMode, this._scrollMode = m, this.eventBus.dispatch("scrollmodechanged", {
                  source: this,
                  mode: m
                }), this._updateScrollMode(this._currentPageNumber));
              }
            }
            _updateScrollMode(m = null) {
              const B = this._scrollMode, ht = this.viewer;
              ht.classList.toggle("scrollHorizontal", B === r.ScrollMode.HORIZONTAL), ht.classList.toggle("scrollWrapped", B === r.ScrollMode.WRAPPED), !(!this.pdfDocument || !m) && (B === r.ScrollMode.PAGE ? X(this, wt, Ee).call(this) : this._previousScrollMode === r.ScrollMode.PAGE && this._updateSpreadMode(), this._currentScaleValue && isNaN(this._currentScaleValue) && X(this, at, se).call(this, this._currentScaleValue, {
                noScroll: !0
              }), this._setCurrentPageNumber(m, !0), this.update());
            }
            get spreadMode() {
              return this._spreadMode;
            }
            set spreadMode(m) {
              if (this._spreadMode !== m) {
                if (!(0, r.isValidSpreadMode)(m))
                  throw new Error(`Invalid spread mode: ${m}`);
                this._spreadMode = m, this.eventBus.dispatch("spreadmodechanged", {
                  source: this,
                  mode: m
                }), this._updateSpreadMode(this._currentPageNumber);
              }
            }
            _updateSpreadMode(m = null) {
              if (!this.pdfDocument)
                return;
              const B = this.viewer, ht = this._pages;
              if (this._scrollMode === r.ScrollMode.PAGE)
                X(this, wt, Ee).call(this);
              else if (B.textContent = "", this._spreadMode === r.SpreadMode.NONE)
                for (const Lt of this._pages)
                  B.append(Lt.div);
              else {
                const Lt = this._spreadMode - 1;
                let Pt = null;
                for (let pt = 0, vt = ht.length; pt < vt; ++pt)
                  Pt === null ? (Pt = document.createElement("div"), Pt.className = "spread", B.append(Pt)) : pt % 2 === Lt && (Pt = Pt.cloneNode(!1), B.append(Pt)), Pt.append(ht[pt].div);
              }
              m && (this._currentScaleValue && isNaN(this._currentScaleValue) && X(this, at, se).call(this, this._currentScaleValue, {
                noScroll: !0
              }), this._setCurrentPageNumber(m, !0), this.update());
            }
            _getPageAdvance(m, B = !1) {
              switch (this._scrollMode) {
                case r.ScrollMode.WRAPPED: {
                  const {
                    views: ht
                  } = this._getVisiblePages(), Lt = /* @__PURE__ */ new Map();
                  for (const {
                    id: Pt,
                    y: pt,
                    percent: vt,
                    widthPercent: U
                  } of ht) {
                    if (vt === 0 || U < 100)
                      continue;
                    let gt = Lt.get(pt);
                    gt || Lt.set(pt, gt || (gt = [])), gt.push(Pt);
                  }
                  for (const Pt of Lt.values()) {
                    const pt = Pt.indexOf(m);
                    if (pt === -1)
                      continue;
                    const vt = Pt.length;
                    if (vt === 1)
                      break;
                    if (B)
                      for (let U = pt - 1, gt = 0; U >= gt; U--) {
                        const Ft = Pt[U], bt = Pt[U + 1] - 1;
                        if (Ft < bt)
                          return m - bt;
                      }
                    else
                      for (let U = pt + 1, gt = vt; U < gt; U++) {
                        const Ft = Pt[U], bt = Pt[U - 1] + 1;
                        if (Ft > bt)
                          return bt - m;
                      }
                    if (B) {
                      const U = Pt[0];
                      if (U < m)
                        return m - U + 1;
                    } else {
                      const U = Pt[vt - 1];
                      if (U > m)
                        return U - m + 1;
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
                  if (B && m % 2 !== ht)
                    break;
                  if (!B && m % 2 === ht)
                    break;
                  const {
                    views: Lt
                  } = this._getVisiblePages(), Pt = B ? m - 1 : m + 1;
                  for (const {
                    id: pt,
                    percent: vt,
                    widthPercent: U
                  } of Lt)
                    if (pt === Pt) {
                      if (vt > 0 && U === 100)
                        return 2;
                      break;
                    }
                  break;
                }
              }
              return 1;
            }
            nextPage() {
              const m = this._currentPageNumber, B = this.pagesCount;
              if (m >= B)
                return !1;
              const ht = this._getPageAdvance(m, !1) || 1;
              return this.currentPageNumber = Math.min(m + ht, B), !0;
            }
            previousPage() {
              const m = this._currentPageNumber;
              if (m <= 1)
                return !1;
              const B = this._getPageAdvance(m, !0) || 1;
              return this.currentPageNumber = Math.max(m - B, 1), !0;
            }
            increaseScale({
              drawingDelay: m,
              scaleFactor: B,
              steps: ht
            } = {}) {
              if (!this.pdfDocument)
                return;
              let Lt = this._currentScale;
              if (B > 1)
                Lt = Math.round(Lt * B * 100) / 100;
              else {
                ht ?? (ht = 1);
                do
                  Lt = Math.ceil((Lt * r.DEFAULT_SCALE_DELTA).toFixed(2) * 10) / 10;
                while (--ht > 0 && Lt < r.MAX_SCALE);
              }
              X(this, at, se).call(this, Math.min(r.MAX_SCALE, Lt), {
                noScroll: !1,
                drawingDelay: m
              });
            }
            decreaseScale({
              drawingDelay: m,
              scaleFactor: B,
              steps: ht
            } = {}) {
              if (!this.pdfDocument)
                return;
              let Lt = this._currentScale;
              if (B > 0 && B < 1)
                Lt = Math.round(Lt * B * 100) / 100;
              else {
                ht ?? (ht = 1);
                do
                  Lt = Math.floor((Lt / r.DEFAULT_SCALE_DELTA).toFixed(2) * 10) / 10;
                while (--ht > 0 && Lt > r.MIN_SCALE);
              }
              X(this, at, se).call(this, Math.max(r.MIN_SCALE, Lt), {
                noScroll: !1,
                drawingDelay: m
              });
            }
            get containerTopLeft() {
              return t(this, Y) || it(this, Y, [this.container.offsetTop, this.container.offsetLeft]);
            }
            get annotationEditorMode() {
              return t(this, T) ? t(this, o) : d.AnnotationEditorType.DISABLE;
            }
            set annotationEditorMode({
              mode: m,
              editId: B = null
            }) {
              if (!t(this, T))
                throw new Error("The AnnotationEditor is not enabled.");
              if (t(this, o) !== m) {
                if (!y(m))
                  throw new Error(`Invalid AnnotationEditor mode: ${m}`);
                this.pdfDocument && (it(this, o, m), this.eventBus.dispatch("annotationeditormodechanged", {
                  source: this,
                  mode: m
                }), t(this, T).updateMode(m, B));
              }
            }
            set annotationEditorParams({
              type: m,
              value: B
            }) {
              if (!t(this, T))
                throw new Error("The AnnotationEditor is not enabled.");
              t(this, T).updateParams(m, B);
            }
            refresh(m = !1, B = /* @__PURE__ */ Object.create(null)) {
              if (this.pdfDocument) {
                for (const ht of this._pages)
                  ht.update(B);
                t(this, _t) !== null && (clearTimeout(t(this, _t)), it(this, _t, null)), m || this.update();
              }
            }
          }
          _ = new WeakMap(), o = new WeakMap(), T = new WeakMap(), P = new WeakMap(), Y = new WeakMap(), tt = new WeakMap(), x = new WeakMap(), K = new WeakMap(), Z = new WeakMap(), Q = new WeakMap(), v = new WeakMap(), j = new WeakMap(), D = new WeakMap(), lt = new WeakMap(), _t = new WeakMap(), k = new WeakMap(), a = new WeakSet(), Wn = function() {
            const m = this;
            return {
              get annotationEditorUIManager() {
                return t(m, T);
              },
              get annotationStorage() {
                var B;
                return (B = m.pdfDocument) == null ? void 0 : B.annotationStorage;
              },
              get downloadManager() {
                return m.downloadManager;
              },
              get enableScripting() {
                return !!m._scriptingManager;
              },
              get fieldObjectsPromise() {
                var B;
                return (B = m.pdfDocument) == null ? void 0 : B.getFieldObjects();
              },
              get findController() {
                return m.findController;
              },
              get hasJSActionsPromise() {
                var B;
                return (B = m.pdfDocument) == null ? void 0 : B.hasJSActions();
              },
              get linkService() {
                return m.linkService;
              }
            };
          }, R = new WeakSet(), zn = function(m) {
            const B = {
              annotationEditorMode: t(this, o),
              annotationMode: t(this, P),
              textLayerMode: t(this, k)
            };
            return m && (!m.includes(d.PermissionFlag.COPY) && t(this, k) === r.TextLayerMode.ENABLE && (B.textLayerMode = r.TextLayerMode.ENABLE_PERMISSIONS), m.includes(d.PermissionFlag.MODIFY_CONTENTS) || (B.annotationEditorMode = d.AnnotationEditorType.DISABLE), !m.includes(d.PermissionFlag.MODIFY_ANNOTATIONS) && !m.includes(d.PermissionFlag.FILL_INTERACTIVE_FORMS) && t(this, P) === d.AnnotationMode.ENABLE_FORMS && (B.annotationMode = d.AnnotationMode.ENABLE)), B;
          }, W = new WeakSet(), Gn = function() {
            if (document.visibilityState === "hidden" || !this.container.offsetParent || this._getVisiblePages().views.length === 0)
              return Promise.resolve();
            const m = new Promise((B) => {
              it(this, lt, () => {
                document.visibilityState === "hidden" && (B(), document.removeEventListener("visibilitychange", t(this, lt)), it(this, lt, null));
              }), document.addEventListener("visibilitychange", t(this, lt));
            });
            return Promise.race([this._onePageRenderedCapability.promise, m]);
          }, st = new WeakSet(), $n = function(m, B) {
            const ht = document.getSelection(), {
              focusNode: Lt,
              anchorNode: Pt
            } = ht;
            if (Pt && Lt && ht.containsNode(t(this, Z))) {
              if (t(this, K) || m === r.TextLayerMode.ENABLE_PERMISSIONS) {
                B.preventDefault(), B.stopPropagation();
                return;
              }
              it(this, K, !0);
              const pt = this.container.style.cursor;
              this.container.style.cursor = "wait";
              const vt = (U) => it(this, Q, U.key === "Escape");
              window.addEventListener("keydown", vt), this.getAllText().then(async (U) => {
                U !== null && await navigator.clipboard.writeText(U);
              }).catch((U) => {
                console.warn(`Something goes wrong when extracting the text: ${U.message}`);
              }).finally(() => {
                it(this, K, !1), it(this, Q, !1), window.removeEventListener("keydown", vt), this.container.style.cursor = pt;
              }), B.preventDefault(), B.stopPropagation();
            }
          }, wt = new WeakSet(), Ee = function() {
            if (this._scrollMode !== r.ScrollMode.PAGE)
              throw new Error("#ensurePageViewVisible: Invalid scrollMode value.");
            const m = this._currentPageNumber, B = t(this, D), ht = this.viewer;
            if (ht.textContent = "", B.pages.length = 0, this._spreadMode === r.SpreadMode.NONE && !this.isInPresentationMode) {
              const Lt = this._pages[m - 1];
              ht.append(Lt.div), B.pages.push(Lt);
            } else {
              const Lt = /* @__PURE__ */ new Set(), Pt = this._spreadMode - 1;
              Pt === -1 ? Lt.add(m - 1) : m % 2 !== Pt ? (Lt.add(m - 1), Lt.add(m)) : (Lt.add(m - 2), Lt.add(m - 1));
              const pt = document.createElement("div");
              if (pt.className = "spread", this.isInPresentationMode) {
                const vt = document.createElement("div");
                vt.className = "dummyPage", pt.append(vt);
              }
              for (const vt of Lt) {
                const U = this._pages[vt];
                U && (pt.append(U.div), B.pages.push(U));
              }
              ht.append(pt);
            }
            B.scrollDown = m >= B.previousPageNumber, B.previousPageNumber = m;
          }, Et = new WeakSet(), He = function(m, B = null) {
            const {
              div: ht,
              id: Lt
            } = m;
            if (this._currentPageNumber !== Lt && this._setCurrentPageNumber(Lt), this._scrollMode === r.ScrollMode.PAGE && (X(this, wt, Ee).call(this), this.update()), !B && !this.isInPresentationMode) {
              const Pt = ht.offsetLeft + ht.clientLeft, pt = Pt + ht.clientWidth, {
                scrollLeft: vt,
                clientWidth: U
              } = this.container;
              (this._scrollMode === r.ScrollMode.HORIZONTAL || Pt < vt || pt > vt + U) && (B = {
                left: 0,
                top: 0
              });
            }
            (0, r.scrollIntoView)(ht, B), !this._currentScaleValue && this._location && (this._location = null);
          }, At = new WeakSet(), Xn = function(m) {
            return m === this._currentScale || Math.abs(m - this._currentScale) < 1e-15;
          }, Rt = new WeakSet(), Vi = function(m, B, {
            noScroll: ht = !1,
            preset: Lt = !1,
            drawingDelay: Pt = -1
          }) {
            if (this._currentScaleValue = B.toString(), X(this, At, Xn).call(this, m)) {
              Lt && this.eventBus.dispatch("scalechanging", {
                source: this,
                scale: m,
                presetValue: B
              });
              return;
            }
            this.viewer.style.setProperty("--scale-factor", m * d.PixelsPerInch.PDF_TO_CSS_UNITS);
            const pt = Pt >= 0 && Pt < 1e3;
            if (this.refresh(!0, {
              scale: m,
              drawingDelay: pt ? Pt : -1
            }), pt && it(this, _t, setTimeout(() => {
              it(this, _t, null), this.refresh();
            }, Pt)), this._currentScale = m, !ht) {
              let vt = this._currentPageNumber, U;
              this._location && !(this.isInPresentationMode || this.isChangingPresentationMode) && (vt = this._location.pageNumber, U = [null, {
                name: "XYZ"
              }, this._location.left, this._location.top, null]), this.scrollPageIntoView({
                pageNumber: vt,
                destArray: U,
                allowNegativeOffset: !0
              });
            }
            this.eventBus.dispatch("scalechanging", {
              source: this,
              scale: m,
              presetValue: Lt ? B : void 0
            }), this.defaultRenderingQueue && this.update();
          }, kt = new WeakSet(), qn = function() {
            return this._spreadMode !== r.SpreadMode.NONE && this._scrollMode !== r.ScrollMode.HORIZONTAL ? 2 : 1;
          }, at = new WeakSet(), se = function(m, B) {
            let ht = parseFloat(m);
            if (ht > 0)
              B.preset = !1, X(this, Rt, Vi).call(this, ht, m, B);
            else {
              const Lt = this._pages[this._currentPageNumber - 1];
              if (!Lt)
                return;
              let Pt = r.SCROLLBAR_PADDING, pt = r.VERTICAL_PADDING;
              this.isInPresentationMode ? (Pt = pt = 4, this._spreadMode !== r.SpreadMode.NONE && (Pt *= 2)) : this.removePageBorders ? Pt = pt = 0 : this._scrollMode === r.ScrollMode.HORIZONTAL && ([Pt, pt] = [pt, Pt]);
              const vt = (this.container.clientWidth - Pt) / Lt.width * Lt.scale / t(this, kt, qn), U = (this.container.clientHeight - pt) / Lt.height * Lt.scale;
              switch (m) {
                case "page-actual":
                  ht = 1;
                  break;
                case "page-width":
                  ht = vt;
                  break;
                case "page-height":
                  ht = U;
                  break;
                case "page-fit":
                  ht = Math.min(vt, U);
                  break;
                case "auto":
                  const gt = (0, r.isPortraitOrientation)(Lt) ? vt : Math.min(U, vt);
                  ht = Math.min(r.MAX_AUTO_SCALE, gt);
                  break;
                default:
                  console.error(`#setScale: "${m}" is an unknown zoom value.`);
                  return;
              }
              B.preset = !0, X(this, Rt, Vi).call(this, ht, m, B);
            }
          }, rt = new WeakSet(), Ui = function() {
            const m = this._pages[this._currentPageNumber - 1];
            this.isInPresentationMode && X(this, at, se).call(this, this._currentScaleValue, {
              noScroll: !0
            }), X(this, Et, He).call(this, m);
          }, xt = new WeakSet(), Yn = async function(m) {
            var B, ht;
            if (m.pdfPage)
              return m.pdfPage;
            try {
              const Lt = await this.pdfDocument.getPage(m.id);
              return m.pdfPage || m.setPdfPage(Lt), (ht = (B = this.linkService)._cachedPageNumber) != null && ht.call(B, Lt.ref) || this.linkService.cachePageRef(m.id, Lt.ref), Lt;
            } catch (Lt) {
              return console.error("Unable to get page for page view", Lt), null;
            }
          }, jt = new WeakSet(), Kn = function(m) {
            var B, ht;
            if (((B = m.first) == null ? void 0 : B.id) === 1)
              return !0;
            if (((ht = m.last) == null ? void 0 : ht.id) === this.pagesCount)
              return !1;
            switch (this._scrollMode) {
              case r.ScrollMode.PAGE:
                return t(this, D).scrollDown;
              case r.ScrollMode.HORIZONTAL:
                return this.scroll.right;
            }
            return this.scroll.down;
          }, Nt = new WeakSet(), Hi = function(m = this.container.clientHeight) {
            m !== t(this, v) && (it(this, v, m), r.docStyle.setProperty("--viewer-container-height", `${m}px`));
          }, $t = new WeakSet(), Qn = function(m) {
            for (const B of m)
              if (B.target === this.container) {
                X(this, Nt, Hi).call(this, Math.floor(B.borderBoxSize[0].blockSize)), it(this, Y, null);
                break;
              }
          }, I.PDFViewer = g;
        },
        /* 26 */
        /***/
        (V, I, c) => {
          Object.defineProperty(I, "__esModule", {
            value: !0
          }), I.PDFRenderingQueue = void 0;
          var d = c(4), r = c(2);
          const F = 3e4;
          class M {
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
              var p;
              this.idleTimeout && (clearTimeout(this.idleTimeout), this.idleTimeout = null), !this.pdfViewer.forceRendering(h) && (this.isThumbnailViewEnabled && ((p = this.pdfThumbnailViewer) != null && p.forceRendering()) || this.printing || this.onIdle && (this.idleTimeout = setTimeout(this.onIdle.bind(this), F)));
            }
            getHighestPriority(h, p, u, y = !1) {
              const b = h.views, g = b.length;
              if (g === 0)
                return null;
              for (let _ = 0; _ < g; _++) {
                const o = b[_].view;
                if (!this.isViewFinished(o))
                  return o;
              }
              const w = h.first.id, s = h.last.id;
              if (s - w + 1 > g) {
                const _ = h.ids;
                for (let o = 1, T = s - w; o < T; o++) {
                  const P = u ? w + o : s - o;
                  if (_.has(P))
                    continue;
                  const Y = p[P - 1];
                  if (!this.isViewFinished(Y))
                    return Y;
                }
              }
              let i = u ? s : w - 2, E = p[i];
              return E && !this.isViewFinished(E) || y && (i += u ? 1 : -1, E = p[i], E && !this.isViewFinished(E)) ? E : null;
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
                  }).catch((p) => {
                    p instanceof d.RenderingCancelledException || console.error(`renderView: "${p}"`);
                  });
                  break;
              }
              return !0;
            }
          }
          I.PDFRenderingQueue = M;
        }
        /******/
      ], n = {};
      function f(V) {
        var I = n[V];
        if (I !== void 0)
          return I.exports;
        var c = n[V] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return L[V](c, c.exports, f), c.exports;
      }
      var q = {};
      return (() => {
        var V = q;
        Object.defineProperty(V, "__esModule", {
          value: !0
        }), Object.defineProperty(V, "AnnotationLayerBuilder", {
          enumerable: !0,
          get: function() {
            return r.AnnotationLayerBuilder;
          }
        }), Object.defineProperty(V, "DownloadManager", {
          enumerable: !0,
          get: function() {
            return F.DownloadManager;
          }
        }), Object.defineProperty(V, "EventBus", {
          enumerable: !0,
          get: function() {
            return M.EventBus;
          }
        }), Object.defineProperty(V, "FindState", {
          enumerable: !0,
          get: function() {
            return I.FindState;
          }
        }), Object.defineProperty(V, "GenericL10n", {
          enumerable: !0,
          get: function() {
            return S.GenericL10n;
          }
        }), Object.defineProperty(V, "LinkTarget", {
          enumerable: !0,
          get: function() {
            return c.LinkTarget;
          }
        }), Object.defineProperty(V, "NullL10n", {
          enumerable: !0,
          get: function() {
            return h.NullL10n;
          }
        }), Object.defineProperty(V, "PDFFindController", {
          enumerable: !0,
          get: function() {
            return I.PDFFindController;
          }
        }), Object.defineProperty(V, "PDFHistory", {
          enumerable: !0,
          get: function() {
            return p.PDFHistory;
          }
        }), Object.defineProperty(V, "PDFLinkService", {
          enumerable: !0,
          get: function() {
            return c.PDFLinkService;
          }
        }), Object.defineProperty(V, "PDFPageView", {
          enumerable: !0,
          get: function() {
            return u.PDFPageView;
          }
        }), Object.defineProperty(V, "PDFScriptingManager", {
          enumerable: !0,
          get: function() {
            return y.PDFScriptingManager;
          }
        }), Object.defineProperty(V, "PDFSinglePageViewer", {
          enumerable: !0,
          get: function() {
            return b.PDFSinglePageViewer;
          }
        }), Object.defineProperty(V, "PDFViewer", {
          enumerable: !0,
          get: function() {
            return g.PDFViewer;
          }
        }), Object.defineProperty(V, "ProgressBar", {
          enumerable: !0,
          get: function() {
            return d.ProgressBar;
          }
        }), Object.defineProperty(V, "RenderingStates", {
          enumerable: !0,
          get: function() {
            return d.RenderingStates;
          }
        }), Object.defineProperty(V, "ScrollMode", {
          enumerable: !0,
          get: function() {
            return d.ScrollMode;
          }
        }), Object.defineProperty(V, "SimpleLinkService", {
          enumerable: !0,
          get: function() {
            return c.SimpleLinkService;
          }
        }), Object.defineProperty(V, "SpreadMode", {
          enumerable: !0,
          get: function() {
            return d.SpreadMode;
          }
        }), Object.defineProperty(V, "StructTreeLayerBuilder", {
          enumerable: !0,
          get: function() {
            return w.StructTreeLayerBuilder;
          }
        }), Object.defineProperty(V, "TextLayerBuilder", {
          enumerable: !0,
          get: function() {
            return s.TextLayerBuilder;
          }
        }), Object.defineProperty(V, "XfaLayerBuilder", {
          enumerable: !0,
          get: function() {
            return i.XfaLayerBuilder;
          }
        }), Object.defineProperty(V, "parseQueryString", {
          enumerable: !0,
          get: function() {
            return d.parseQueryString;
          }
        });
        var I = f(1), c = f(5), d = f(2), r = f(6), F = f(8), M = f(9), S = f(10), h = f(7), p = f(12), u = f(13), y = f(21), b = f(24), g = f(25), w = f(16), s = f(19), i = f(20);
      })(), q;
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
    let L = e.getBoundingClientRect(), n = 10, f = window.innerHeight - L.top - n;
    this.thumbnailContainer.className = "gap-y-2 py-2 px-4 fixed w-44 bg-gray-50 z-10 rounded h-full flex flex-col overflow-y-auto left-2", this.thumbnailContainer.style.height = f + "px", this.thumbnailContainer.style.display = "none", e.prepend(this.thumbnailContainer);
  }
  async _build(e) {
    let L = e.pdfDocument.numPages;
    for (let n = 1; n <= L; n++) {
      let f = await e.pdfDocument.getPage(n), q = await this.generateThumbnail(f);
      q.dataset.id = n.toString(), q.title = "Page " + n, q.classList.add("cursor-pointer", "border"), q.addEventListener("click", () => {
        let V = e.pdfContainer.querySelector(
          `[data-page-number="${n}"]`
        );
        e.bodyContainer.scrollTop = e.bodyContainer.scrollTop + parseFloat(V.getBoundingClientRect().top.toString()) - 100;
      }), this.thumbnailContainer.append(q);
    }
  }
  async generateThumbnail(e) {
    let L = document.createElement("img"), n = await this.renderPage(e);
    return L.src = n.toDataURL(), L;
  }
  async renderPage(e) {
    let L = document.createElement("canvas"), n = L.getContext("2d");
    const f = e.getViewport({ scale: 0.5 });
    L.width = Math.floor(f.width), L.height = Math.floor(f.height), L.style.width = Math.floor(f.width) + "px", L.style.height = Math.floor(f.height) + "px";
    const q = {
      canvasContext: n,
      viewport: f
    };
    return await e.render(q).promise, this._reduceImage(L), L;
  }
  /**
   * @private
   */
  _reduceImage(e) {
    let L = e.width << MAX_NUM_SCALING_STEPS, n = e.height << MAX_NUM_SCALING_STEPS;
    const f = document.createElement("canvas");
    f.width = L, f.height = n;
    const q = f.getContext("2d", { alpha: !1 });
    for (q.save(), q.fillStyle = "rgb(255, 255, 255)", q.fillRect(0, 0, L, n), q.restore(); L > e.width || n > e.height; )
      L >>= 1, n >>= 1;
    for (q.drawImage(
      e,
      0,
      0,
      e.width,
      e.height,
      0,
      0,
      L,
      n
    ); L > 2 * e.width; )
      q.drawImage(
        f,
        0,
        0,
        L,
        n,
        0,
        0,
        L >> 1,
        n >> 1
      ), L >>= 1, n >>= 1;
    return e.getContext("2d").drawImage(
      f,
      0,
      0,
      L,
      n,
      0,
      0,
      e.width,
      e.height
    ), e;
  }
  reset() {
    var e, L;
    this.show = !1, this.hasBuilt = !1, (e = this.thumbnailContainer) == null || e.remove(), (L = this.btn) == null || L.remove();
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
function minMax(A, e, L) {
  return Math.min(Math.max(A, e), L);
}
function stringContains(A, e) {
  return A.indexOf(e) > -1;
}
function applyArguments(A, e) {
  return A.apply(null, e);
}
var is = {
  arr: function(A) {
    return Array.isArray(A);
  },
  obj: function(A) {
    return stringContains(Object.prototype.toString.call(A), "Object");
  },
  pth: function(A) {
    return is.obj(A) && A.hasOwnProperty("totalLength");
  },
  svg: function(A) {
    return A instanceof SVGElement;
  },
  inp: function(A) {
    return A instanceof HTMLInputElement;
  },
  dom: function(A) {
    return A.nodeType || is.svg(A);
  },
  str: function(A) {
    return typeof A == "string";
  },
  fnc: function(A) {
    return typeof A == "function";
  },
  und: function(A) {
    return typeof A > "u";
  },
  nil: function(A) {
    return is.und(A) || A === null;
  },
  hex: function(A) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(A);
  },
  rgb: function(A) {
    return /^rgb/.test(A);
  },
  hsl: function(A) {
    return /^hsl/.test(A);
  },
  col: function(A) {
    return is.hex(A) || is.rgb(A) || is.hsl(A);
  },
  key: function(A) {
    return !defaultInstanceSettings.hasOwnProperty(A) && !defaultTweenSettings.hasOwnProperty(A) && A !== "targets" && A !== "keyframes";
  }
};
function parseEasingParameters(A) {
  var e = /\(([^)]+)\)/.exec(A);
  return e ? e[1].split(",").map(function(L) {
    return parseFloat(L);
  }) : [];
}
function spring(A, e) {
  var L = parseEasingParameters(A), n = minMax(is.und(L[0]) ? 1 : L[0], 0.1, 100), f = minMax(is.und(L[1]) ? 100 : L[1], 0.1, 100), q = minMax(is.und(L[2]) ? 10 : L[2], 0.1, 100), V = minMax(is.und(L[3]) ? 0 : L[3], 0.1, 100), I = Math.sqrt(f / n), c = q / (2 * Math.sqrt(f * n)), d = c < 1 ? I * Math.sqrt(1 - c * c) : 0, r = 1, F = c < 1 ? (c * I + -V) / d : -V + I;
  function M(h) {
    var p = e ? e * h / 1e3 : h;
    return c < 1 ? p = Math.exp(-p * c * I) * (r * Math.cos(d * p) + F * Math.sin(d * p)) : p = (r + F * p) * Math.exp(-p * I), h === 0 || h === 1 ? h : 1 - p;
  }
  function S() {
    var h = cache.springs[A];
    if (h)
      return h;
    for (var p = 1 / 6, u = 0, y = 0; ; )
      if (u += p, M(u) === 1) {
        if (y++, y >= 16)
          break;
      } else
        y = 0;
    var b = u * p * 1e3;
    return cache.springs[A] = b, b;
  }
  return e ? M : S;
}
function steps(A) {
  return A === void 0 && (A = 10), function(e) {
    return Math.ceil(minMax(e, 1e-6, 1) * A) * (1 / A);
  };
}
var bezier = function() {
  var A = 11, e = 1 / (A - 1);
  function L(r, F) {
    return 1 - 3 * F + 3 * r;
  }
  function n(r, F) {
    return 3 * F - 6 * r;
  }
  function f(r) {
    return 3 * r;
  }
  function q(r, F, M) {
    return ((L(F, M) * r + n(F, M)) * r + f(F)) * r;
  }
  function V(r, F, M) {
    return 3 * L(F, M) * r * r + 2 * n(F, M) * r + f(F);
  }
  function I(r, F, M, S, h) {
    var p, u, y = 0;
    do
      u = F + (M - F) / 2, p = q(u, S, h) - r, p > 0 ? M = u : F = u;
    while (Math.abs(p) > 1e-7 && ++y < 10);
    return u;
  }
  function c(r, F, M, S) {
    for (var h = 0; h < 4; ++h) {
      var p = V(F, M, S);
      if (p === 0)
        return F;
      var u = q(F, M, S) - r;
      F -= u / p;
    }
    return F;
  }
  function d(r, F, M, S) {
    if (!(0 <= r && r <= 1 && 0 <= M && M <= 1))
      return;
    var h = new Float32Array(A);
    if (r !== F || M !== S)
      for (var p = 0; p < A; ++p)
        h[p] = q(p * e, r, M);
    function u(y) {
      for (var b = 0, g = 1, w = A - 1; g !== w && h[g] <= y; ++g)
        b += e;
      --g;
      var s = (y - h[g]) / (h[g + 1] - h[g]), i = b + s * e, E = V(i, r, M);
      return E >= 1e-3 ? c(y, i, r, M) : E === 0 ? i : I(y, b, b + e, r, M);
    }
    return function(y) {
      return r === F && M === S || y === 0 || y === 1 ? y : q(u(y), F, S);
    };
  }
  return d;
}(), penner = function() {
  var A = { linear: function() {
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
        for (var f, q = 4; n < ((f = Math.pow(2, --q)) - 1) / 11; )
          ;
        return 1 / Math.pow(4, 3 - q) - 7.5625 * Math.pow((f * 3 - 2) / 22 - n, 2);
      };
    },
    Elastic: function(n, f) {
      n === void 0 && (n = 1), f === void 0 && (f = 0.5);
      var q = minMax(n, 1, 10), V = minMax(f, 0.1, 2);
      return function(I) {
        return I === 0 || I === 1 ? I : -q * Math.pow(2, 10 * (I - 1)) * Math.sin((I - 1 - V / (Math.PI * 2) * Math.asin(1 / q)) * (Math.PI * 2) / V);
      };
    }
  }, L = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
  return L.forEach(function(n, f) {
    e[n] = function() {
      return function(q) {
        return Math.pow(q, f + 2);
      };
    };
  }), Object.keys(e).forEach(function(n) {
    var f = e[n];
    A["easeIn" + n] = f, A["easeOut" + n] = function(q, V) {
      return function(I) {
        return 1 - f(q, V)(1 - I);
      };
    }, A["easeInOut" + n] = function(q, V) {
      return function(I) {
        return I < 0.5 ? f(q, V)(I * 2) / 2 : 1 - f(q, V)(I * -2 + 2) / 2;
      };
    }, A["easeOutIn" + n] = function(q, V) {
      return function(I) {
        return I < 0.5 ? (1 - f(q, V)(1 - I * 2)) / 2 : (f(q, V)(I * 2 - 1) + 1) / 2;
      };
    };
  }), A;
}();
function parseEasings(A, e) {
  if (is.fnc(A))
    return A;
  var L = A.split("(")[0], n = penner[L], f = parseEasingParameters(A);
  switch (L) {
    case "spring":
      return spring(A, e);
    case "cubicBezier":
      return applyArguments(bezier, f);
    case "steps":
      return applyArguments(steps, f);
    default:
      return applyArguments(n, f);
  }
}
function selectString(A) {
  try {
    var e = document.querySelectorAll(A);
    return e;
  } catch {
    return;
  }
}
function filterArray(A, e) {
  for (var L = A.length, n = arguments.length >= 2 ? arguments[1] : void 0, f = [], q = 0; q < L; q++)
    if (q in A) {
      var V = A[q];
      e.call(n, V, q, A) && f.push(V);
    }
  return f;
}
function flattenArray(A) {
  return A.reduce(function(e, L) {
    return e.concat(is.arr(L) ? flattenArray(L) : L);
  }, []);
}
function toArray(A) {
  return is.arr(A) ? A : (is.str(A) && (A = selectString(A) || A), A instanceof NodeList || A instanceof HTMLCollection ? [].slice.call(A) : [A]);
}
function arrayContains(A, e) {
  return A.some(function(L) {
    return L === e;
  });
}
function cloneObject(A) {
  var e = {};
  for (var L in A)
    e[L] = A[L];
  return e;
}
function replaceObjectProps(A, e) {
  var L = cloneObject(A);
  for (var n in A)
    L[n] = e.hasOwnProperty(n) ? e[n] : A[n];
  return L;
}
function mergeObjects(A, e) {
  var L = cloneObject(A);
  for (var n in e)
    L[n] = is.und(A[n]) ? e[n] : A[n];
  return L;
}
function rgbToRgba(A) {
  var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(A);
  return e ? "rgba(" + e[1] + ",1)" : A;
}
function hexToRgba(A) {
  var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, L = A.replace(e, function(I, c, d, r) {
    return c + c + d + d + r + r;
  }), n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(L), f = parseInt(n[1], 16), q = parseInt(n[2], 16), V = parseInt(n[3], 16);
  return "rgba(" + f + "," + q + "," + V + ",1)";
}
function hslToRgba(A) {
  var e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(A) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(A), L = parseInt(e[1], 10) / 360, n = parseInt(e[2], 10) / 100, f = parseInt(e[3], 10) / 100, q = e[4] || 1;
  function V(M, S, h) {
    return h < 0 && (h += 1), h > 1 && (h -= 1), h < 1 / 6 ? M + (S - M) * 6 * h : h < 1 / 2 ? S : h < 2 / 3 ? M + (S - M) * (2 / 3 - h) * 6 : M;
  }
  var I, c, d;
  if (n == 0)
    I = c = d = f;
  else {
    var r = f < 0.5 ? f * (1 + n) : f + n - f * n, F = 2 * f - r;
    I = V(F, r, L + 1 / 3), c = V(F, r, L), d = V(F, r, L - 1 / 3);
  }
  return "rgba(" + I * 255 + "," + c * 255 + "," + d * 255 + "," + q + ")";
}
function colorToRgb(A) {
  if (is.rgb(A))
    return rgbToRgba(A);
  if (is.hex(A))
    return hexToRgba(A);
  if (is.hsl(A))
    return hslToRgba(A);
}
function getUnit(A) {
  var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(A);
  if (e)
    return e[1];
}
function getTransformUnit(A) {
  if (stringContains(A, "translate") || A === "perspective")
    return "px";
  if (stringContains(A, "rotate") || stringContains(A, "skew"))
    return "deg";
}
function getFunctionValue(A, e) {
  return is.fnc(A) ? A(e.target, e.id, e.total) : A;
}
function getAttribute(A, e) {
  return A.getAttribute(e);
}
function convertPxToUnit(A, e, L) {
  var n = getUnit(e);
  if (arrayContains([L, "deg", "rad", "turn"], n))
    return e;
  var f = cache.CSS[e + L];
  if (!is.und(f))
    return f;
  var q = 100, V = document.createElement(A.tagName), I = A.parentNode && A.parentNode !== document ? A.parentNode : document.body;
  I.appendChild(V), V.style.position = "absolute", V.style.width = q + L;
  var c = q / V.offsetWidth;
  I.removeChild(V);
  var d = c * parseFloat(e);
  return cache.CSS[e + L] = d, d;
}
function getCSSValue(A, e, L) {
  if (e in A.style) {
    var n = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), f = A.style[e] || getComputedStyle(A).getPropertyValue(n) || "0";
    return L ? convertPxToUnit(A, f, L) : f;
  }
}
function getAnimationType(A, e) {
  if (is.dom(A) && !is.inp(A) && (!is.nil(getAttribute(A, e)) || is.svg(A) && A[e]))
    return "attribute";
  if (is.dom(A) && arrayContains(validTransforms, e))
    return "transform";
  if (is.dom(A) && e !== "transform" && getCSSValue(A, e))
    return "css";
  if (A[e] != null)
    return "object";
}
function getElementTransforms(A) {
  if (is.dom(A)) {
    for (var e = A.style.transform || "", L = /(\w+)\(([^)]*)\)/g, n = /* @__PURE__ */ new Map(), f; f = L.exec(e); )
      n.set(f[1], f[2]);
    return n;
  }
}
function getTransformValue(A, e, L, n) {
  var f = stringContains(e, "scale") ? 1 : 0 + getTransformUnit(e), q = getElementTransforms(A).get(e) || f;
  return L && (L.transforms.list.set(e, q), L.transforms.last = e), n ? convertPxToUnit(A, q, n) : q;
}
function getOriginalTargetValue(A, e, L, n) {
  switch (getAnimationType(A, e)) {
    case "transform":
      return getTransformValue(A, e, n, L);
    case "css":
      return getCSSValue(A, e, L);
    case "attribute":
      return getAttribute(A, e);
    default:
      return A[e] || 0;
  }
}
function getRelativeValue(A, e) {
  var L = /^(\*=|\+=|-=)/.exec(A);
  if (!L)
    return A;
  var n = getUnit(A) || 0, f = parseFloat(e), q = parseFloat(A.replace(L[0], ""));
  switch (L[0][0]) {
    case "+":
      return f + q + n;
    case "-":
      return f - q + n;
    case "*":
      return f * q + n;
  }
}
function validateValue(A, e) {
  if (is.col(A))
    return colorToRgb(A);
  if (/\s/g.test(A))
    return A;
  var L = getUnit(A), n = L ? A.substr(0, A.length - L.length) : A;
  return e ? n + e : n;
}
function getDistance(A, e) {
  return Math.sqrt(Math.pow(e.x - A.x, 2) + Math.pow(e.y - A.y, 2));
}
function getCircleLength(A) {
  return Math.PI * 2 * getAttribute(A, "r");
}
function getRectLength(A) {
  return getAttribute(A, "width") * 2 + getAttribute(A, "height") * 2;
}
function getLineLength(A) {
  return getDistance(
    { x: getAttribute(A, "x1"), y: getAttribute(A, "y1") },
    { x: getAttribute(A, "x2"), y: getAttribute(A, "y2") }
  );
}
function getPolylineLength(A) {
  for (var e = A.points, L = 0, n, f = 0; f < e.numberOfItems; f++) {
    var q = e.getItem(f);
    f > 0 && (L += getDistance(n, q)), n = q;
  }
  return L;
}
function getPolygonLength(A) {
  var e = A.points;
  return getPolylineLength(A) + getDistance(e.getItem(e.numberOfItems - 1), e.getItem(0));
}
function getTotalLength(A) {
  if (A.getTotalLength)
    return A.getTotalLength();
  switch (A.tagName.toLowerCase()) {
    case "circle":
      return getCircleLength(A);
    case "rect":
      return getRectLength(A);
    case "line":
      return getLineLength(A);
    case "polyline":
      return getPolylineLength(A);
    case "polygon":
      return getPolygonLength(A);
  }
}
function setDashoffset(A) {
  var e = getTotalLength(A);
  return A.setAttribute("stroke-dasharray", e), e;
}
function getParentSvgEl(A) {
  for (var e = A.parentNode; is.svg(e) && is.svg(e.parentNode); )
    e = e.parentNode;
  return e;
}
function getParentSvg(A, e) {
  var L = e || {}, n = L.el || getParentSvgEl(A), f = n.getBoundingClientRect(), q = getAttribute(n, "viewBox"), V = f.width, I = f.height, c = L.viewBox || (q ? q.split(" ") : [0, 0, V, I]);
  return {
    el: n,
    viewBox: c,
    x: c[0] / 1,
    y: c[1] / 1,
    w: V,
    h: I,
    vW: c[2],
    vH: c[3]
  };
}
function getPath(A, e) {
  var L = is.str(A) ? selectString(A)[0] : A, n = e || 100;
  return function(f) {
    return {
      property: f,
      el: L,
      svg: getParentSvg(L),
      totalLength: getTotalLength(L) * (n / 100)
    };
  };
}
function getPathProgress(A, e, L) {
  function n(r) {
    r === void 0 && (r = 0);
    var F = e + r >= 1 ? e + r : 0;
    return A.el.getPointAtLength(F);
  }
  var f = getParentSvg(A.el, A.svg), q = n(), V = n(-1), I = n(1), c = L ? 1 : f.w / f.vW, d = L ? 1 : f.h / f.vH;
  switch (A.property) {
    case "x":
      return (q.x - f.x) * c;
    case "y":
      return (q.y - f.y) * d;
    case "angle":
      return Math.atan2(I.y - V.y, I.x - V.x) * 180 / Math.PI;
  }
}
function decomposeValue(A, e) {
  var L = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, n = validateValue(is.pth(A) ? A.totalLength : A, e) + "";
  return {
    original: n,
    numbers: n.match(L) ? n.match(L).map(Number) : [0],
    strings: is.str(A) || e ? n.split(L) : []
  };
}
function parseTargets(A) {
  var e = A ? flattenArray(is.arr(A) ? A.map(toArray) : toArray(A)) : [];
  return filterArray(e, function(L, n, f) {
    return f.indexOf(L) === n;
  });
}
function getAnimatables(A) {
  var e = parseTargets(A);
  return e.map(function(L, n) {
    return { target: L, id: n, total: e.length, transforms: { list: getElementTransforms(L) } };
  });
}
function normalizePropertyTweens(A, e) {
  var L = cloneObject(e);
  if (/^spring/.test(L.easing) && (L.duration = spring(L.easing)), is.arr(A)) {
    var n = A.length, f = n === 2 && !is.obj(A[0]);
    f ? A = { value: A } : is.fnc(e.duration) || (L.duration = e.duration / n);
  }
  var q = is.arr(A) ? A : [A];
  return q.map(function(V, I) {
    var c = is.obj(V) && !is.pth(V) ? V : { value: V };
    return is.und(c.delay) && (c.delay = I ? 0 : e.delay), is.und(c.endDelay) && (c.endDelay = I === q.length - 1 ? e.endDelay : 0), c;
  }).map(function(V) {
    return mergeObjects(V, L);
  });
}
function flattenKeyframes(A) {
  for (var e = filterArray(flattenArray(A.map(function(q) {
    return Object.keys(q);
  })), function(q) {
    return is.key(q);
  }).reduce(function(q, V) {
    return q.indexOf(V) < 0 && q.push(V), q;
  }, []), L = {}, n = function(q) {
    var V = e[q];
    L[V] = A.map(function(I) {
      var c = {};
      for (var d in I)
        is.key(d) ? d == V && (c.value = I[d]) : c[d] = I[d];
      return c;
    });
  }, f = 0; f < e.length; f++)
    n(f);
  return L;
}
function getProperties(A, e) {
  var L = [], n = e.keyframes;
  n && (e = mergeObjects(flattenKeyframes(n), e));
  for (var f in e)
    is.key(f) && L.push({
      name: f,
      tweens: normalizePropertyTweens(e[f], A)
    });
  return L;
}
function normalizeTweenValues(A, e) {
  var L = {};
  for (var n in A) {
    var f = getFunctionValue(A[n], e);
    is.arr(f) && (f = f.map(function(q) {
      return getFunctionValue(q, e);
    }), f.length === 1 && (f = f[0])), L[n] = f;
  }
  return L.duration = parseFloat(L.duration), L.delay = parseFloat(L.delay), L;
}
function normalizeTweens(A, e) {
  var L;
  return A.tweens.map(function(n) {
    var f = normalizeTweenValues(n, e), q = f.value, V = is.arr(q) ? q[1] : q, I = getUnit(V), c = getOriginalTargetValue(e.target, A.name, I, e), d = L ? L.to.original : c, r = is.arr(q) ? q[0] : d, F = getUnit(r) || getUnit(c), M = I || F;
    return is.und(V) && (V = d), f.from = decomposeValue(r, M), f.to = decomposeValue(getRelativeValue(V, r), M), f.start = L ? L.end : 0, f.end = f.start + f.delay + f.duration + f.endDelay, f.easing = parseEasings(f.easing, f.duration), f.isPath = is.pth(q), f.isPathTargetInsideSVG = f.isPath && is.svg(e.target), f.isColor = is.col(f.from.original), f.isColor && (f.round = 1), L = f, f;
  });
}
var setProgressValue = {
  css: function(A, e, L) {
    return A.style[e] = L;
  },
  attribute: function(A, e, L) {
    return A.setAttribute(e, L);
  },
  object: function(A, e, L) {
    return A[e] = L;
  },
  transform: function(A, e, L, n, f) {
    if (n.list.set(e, L), e === n.last || f) {
      var q = "";
      n.list.forEach(function(V, I) {
        q += I + "(" + V + ") ";
      }), A.style.transform = q;
    }
  }
};
function setTargetsValue(A, e) {
  var L = getAnimatables(A);
  L.forEach(function(n) {
    for (var f in e) {
      var q = getFunctionValue(e[f], n), V = n.target, I = getUnit(q), c = getOriginalTargetValue(V, f, I, n), d = I || getUnit(c), r = getRelativeValue(validateValue(q, d), c), F = getAnimationType(V, f);
      setProgressValue[F](V, f, r, n.transforms, !0);
    }
  });
}
function createAnimation(A, e) {
  var L = getAnimationType(A.target, e.name);
  if (L) {
    var n = normalizeTweens(e, A), f = n[n.length - 1];
    return {
      type: L,
      property: e.name,
      animatable: A,
      tweens: n,
      duration: f.end,
      delay: n[0].delay,
      endDelay: f.endDelay
    };
  }
}
function getAnimations(A, e) {
  return filterArray(flattenArray(A.map(function(L) {
    return e.map(function(n) {
      return createAnimation(L, n);
    });
  })), function(L) {
    return !is.und(L);
  });
}
function getInstanceTimings(A, e) {
  var L = A.length, n = function(q) {
    return q.timelineOffset ? q.timelineOffset : 0;
  }, f = {};
  return f.duration = L ? Math.max.apply(Math, A.map(function(q) {
    return n(q) + q.duration;
  })) : e.duration, f.delay = L ? Math.min.apply(Math, A.map(function(q) {
    return n(q) + q.delay;
  })) : e.delay, f.endDelay = L ? f.duration - Math.max.apply(Math, A.map(function(q) {
    return n(q) + q.duration - q.endDelay;
  })) : e.endDelay, f;
}
var instanceID = 0;
function createNewInstance(A) {
  var e = replaceObjectProps(defaultInstanceSettings, A), L = replaceObjectProps(defaultTweenSettings, A), n = getProperties(L, A), f = getAnimatables(A.targets), q = getAnimations(f, n), V = getInstanceTimings(q, L), I = instanceID;
  return instanceID++, mergeObjects(e, {
    id: I,
    children: [],
    animatables: f,
    animations: q,
    duration: V.duration,
    delay: V.delay,
    endDelay: V.endDelay
  });
}
var activeInstances = [], engine = function() {
  var A;
  function e() {
    !A && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0 && (A = requestAnimationFrame(L));
  }
  function L(f) {
    for (var q = activeInstances.length, V = 0; V < q; ) {
      var I = activeInstances[V];
      I.paused ? (activeInstances.splice(V, 1), q--) : (I.tick(f), V++);
    }
    A = V > 0 ? requestAnimationFrame(L) : void 0;
  }
  function n() {
    anime.suspendWhenDocumentHidden && (isDocumentHidden() ? A = cancelAnimationFrame(A) : (activeInstances.forEach(
      function(f) {
        return f._onDocumentVisibility();
      }
    ), engine()));
  }
  return typeof document < "u" && document.addEventListener("visibilitychange", n), e;
}();
function isDocumentHidden() {
  return !!document && document.hidden;
}
function anime(A) {
  A === void 0 && (A = {});
  var e = 0, L = 0, n = 0, f, q = 0, V = null;
  function I(b) {
    var g = window.Promise && new Promise(function(w) {
      return V = w;
    });
    return b.finished = g, g;
  }
  var c = createNewInstance(A);
  I(c);
  function d() {
    var b = c.direction;
    b !== "alternate" && (c.direction = b !== "normal" ? "normal" : "reverse"), c.reversed = !c.reversed, f.forEach(function(g) {
      return g.reversed = c.reversed;
    });
  }
  function r(b) {
    return c.reversed ? c.duration - b : b;
  }
  function F() {
    e = 0, L = r(c.currentTime) * (1 / anime.speed);
  }
  function M(b, g) {
    g && g.seek(b - g.timelineOffset);
  }
  function S(b) {
    if (c.reversePlayback)
      for (var w = q; w--; )
        M(b, f[w]);
    else
      for (var g = 0; g < q; g++)
        M(b, f[g]);
  }
  function h(b) {
    for (var g = 0, w = c.animations, s = w.length; g < s; ) {
      var i = w[g], E = i.animatable, _ = i.tweens, o = _.length - 1, T = _[o];
      o && (T = filterArray(_, function(R) {
        return b < R.end;
      })[0] || T);
      for (var P = minMax(b - T.start - T.delay, 0, T.duration) / T.duration, Y = isNaN(P) ? 1 : T.easing(P), tt = T.to.strings, x = T.round, K = [], Z = T.to.numbers.length, Q = void 0, v = 0; v < Z; v++) {
        var j = void 0, D = T.to.numbers[v], lt = T.from.numbers[v] || 0;
        T.isPath ? j = getPathProgress(T.value, Y * D, T.isPathTargetInsideSVG) : j = lt + Y * (D - lt), x && (T.isColor && v > 2 || (j = Math.round(j * x) / x)), K.push(j);
      }
      var _t = tt.length;
      if (!_t)
        Q = K[0];
      else {
        Q = tt[0];
        for (var k = 0; k < _t; k++) {
          tt[k];
          var a = tt[k + 1], l = K[k];
          isNaN(l) || (a ? Q += l + a : Q += l + " ");
        }
      }
      setProgressValue[i.type](E.target, i.property, Q, E.transforms), i.currentValue = Q, g++;
    }
  }
  function p(b) {
    c[b] && !c.passThrough && c[b](c);
  }
  function u() {
    c.remaining && c.remaining !== !0 && c.remaining--;
  }
  function y(b) {
    var g = c.duration, w = c.delay, s = g - c.endDelay, i = r(b);
    c.progress = minMax(i / g * 100, 0, 100), c.reversePlayback = i < c.currentTime, f && S(i), !c.began && c.currentTime > 0 && (c.began = !0, p("begin")), !c.loopBegan && c.currentTime > 0 && (c.loopBegan = !0, p("loopBegin")), i <= w && c.currentTime !== 0 && h(0), (i >= s && c.currentTime !== g || !g) && h(g), i > w && i < s ? (c.changeBegan || (c.changeBegan = !0, c.changeCompleted = !1, p("changeBegin")), p("change"), h(i)) : c.changeBegan && (c.changeCompleted = !0, c.changeBegan = !1, p("changeComplete")), c.currentTime = minMax(i, 0, g), c.began && p("update"), b >= g && (L = 0, u(), c.remaining ? (e = n, p("loopComplete"), c.loopBegan = !1, c.direction === "alternate" && d()) : (c.paused = !0, c.completed || (c.completed = !0, p("loopComplete"), p("complete"), !c.passThrough && "Promise" in window && (V(), I(c)))));
  }
  return c.reset = function() {
    var b = c.direction;
    c.passThrough = !1, c.currentTime = 0, c.progress = 0, c.paused = !0, c.began = !1, c.loopBegan = !1, c.changeBegan = !1, c.completed = !1, c.changeCompleted = !1, c.reversePlayback = !1, c.reversed = b === "reverse", c.remaining = c.loop, f = c.children, q = f.length;
    for (var g = q; g--; )
      c.children[g].reset();
    (c.reversed && c.loop !== !0 || b === "alternate" && c.loop === 1) && c.remaining++, h(c.reversed ? c.duration : 0);
  }, c._onDocumentVisibility = F, c.set = function(b, g) {
    return setTargetsValue(b, g), c;
  }, c.tick = function(b) {
    n = b, e || (e = n), y((n + (L - e)) * anime.speed);
  }, c.seek = function(b) {
    y(r(b));
  }, c.pause = function() {
    c.paused = !0, F();
  }, c.play = function() {
    c.paused && (c.completed && c.reset(), c.paused = !1, activeInstances.push(c), F(), engine());
  }, c.reverse = function() {
    d(), c.completed = !c.reversed, F();
  }, c.restart = function() {
    c.reset(), c.play();
  }, c.remove = function(b) {
    var g = parseTargets(b);
    removeTargetsFromInstance(g, c);
  }, c.reset(), c.autoplay && c.play(), c;
}
function removeTargetsFromAnimations(A, e) {
  for (var L = e.length; L--; )
    arrayContains(A, e[L].animatable.target) && e.splice(L, 1);
}
function removeTargetsFromInstance(A, e) {
  var L = e.animations, n = e.children;
  removeTargetsFromAnimations(A, L);
  for (var f = n.length; f--; ) {
    var q = n[f], V = q.animations;
    removeTargetsFromAnimations(A, V), !V.length && !q.children.length && n.splice(f, 1);
  }
  !L.length && !n.length && e.pause();
}
function removeTargetsFromActiveInstances(A) {
  for (var e = parseTargets(A), L = activeInstances.length; L--; ) {
    var n = activeInstances[L];
    removeTargetsFromInstance(e, n);
  }
}
function stagger(A, e) {
  e === void 0 && (e = {});
  var L = e.direction || "normal", n = e.easing ? parseEasings(e.easing) : null, f = e.grid, q = e.axis, V = e.from || 0, I = V === "first", c = V === "center", d = V === "last", r = is.arr(A), F = parseFloat(r ? A[0] : A), M = r ? parseFloat(A[1]) : 0, S = getUnit(r ? A[1] : A) || 0, h = e.start || 0 + (r ? F : 0), p = [], u = 0;
  return function(y, b, g) {
    if (I && (V = 0), c && (V = (g - 1) / 2), d && (V = g - 1), !p.length) {
      for (var w = 0; w < g; w++) {
        if (!f)
          p.push(Math.abs(V - w));
        else {
          var s = c ? (f[0] - 1) / 2 : V % f[0], i = c ? (f[1] - 1) / 2 : Math.floor(V / f[0]), E = w % f[0], _ = Math.floor(w / f[0]), o = s - E, T = i - _, P = Math.sqrt(o * o + T * T);
          q === "x" && (P = -o), q === "y" && (P = -T), p.push(P);
        }
        u = Math.max.apply(Math, p);
      }
      n && (p = p.map(function(tt) {
        return n(tt / u) * u;
      })), L === "reverse" && (p = p.map(function(tt) {
        return q ? tt < 0 ? tt * -1 : -tt : Math.abs(u - tt);
      }));
    }
    var Y = r ? (M - F) / u : F;
    return h + Y * (Math.round(p[b] * 100) / 100) + S;
  };
}
function timeline(A) {
  A === void 0 && (A = {});
  var e = anime(A);
  return e.duration = 0, e.add = function(L, n) {
    var f = activeInstances.indexOf(e), q = e.children;
    f > -1 && activeInstances.splice(f, 1);
    function V(M) {
      M.passThrough = !0;
    }
    for (var I = 0; I < q.length; I++)
      V(q[I]);
    var c = mergeObjects(L, replaceObjectProps(defaultTweenSettings, A));
    c.targets = c.targets || A.targets;
    var d = e.duration;
    c.autoplay = !1, c.direction = e.direction, c.timelineOffset = is.und(n) ? d : getRelativeValue(n, d), V(e), e.seek(c.timelineOffset);
    var r = anime(c);
    V(r), q.push(r);
    var F = getInstanceTimings(q, A);
    return e.delay = F.delay, e.endDelay = F.endDelay, e.duration = F.duration, e.seek(0), e.reset(), e.autoplay && e.play(), e;
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
anime.random = function(A, e) {
  return Math.floor(Math.random() * (e - A + 1)) + A;
};
function onClickOutside(A, e) {
  document.addEventListener("click", (L) => {
    const n = A.getBoundingClientRect(), q = L.target.getBoundingClientRect();
    (q.left < n.left || q.right > n.right || q.top < n.top || q.bottom > n.bottom) && e(L);
  });
}
var je, Jn;
class SearchButton {
  constructor() {
    N(this, je);
    this.show = !1, this.caseSensitive = !1, this.entireWord = !1, this.highlightAll = !1, this.findPrevious = !1, this.matchDiacritics = !1, this.type = "again", this.statusIndicator = null;
  }
  build(e) {
    this.eventBus = e.eventBus, this.pdfFindController = e.pdfFindController, this.btnContainer = document.createElement("div"), this.btnContainer.className = "relative";
    let L = document.createElement("button");
    return L.className = "outline-none border-none hover:bg-gray-100  p-2", L.title = "search in the document", L.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>', this.btnContainer.append(L), L.addEventListener("click", () => {
      setTimeout(() => {
        this.toggleBox();
      }, 300);
    }), this.prepareBox(), this.buildStatusIndicator(), this.buildInput(), this.buildButtons(), this.eventBus.on("updatefindcontrolstate", (n) => {
      switch (console.log(n.source.highlightMatches), n.state) {
        case 0:
          setTimeout(() => {
            if (!n.source.highlightMatches)
              return;
            let f = n.source._matchesCountTotal > 0 && n.matchesCount.current === 0 ? 1 : n.matchesCount.current;
            this.statusIndicator.innerText = `Showing ${f} of ${n.source._matchesCountTotal}`;
            let q = document.querySelector(".highlight.selected.appended");
            e.bodyContainer.scrollTop = e.bodyContainer.scrollTop + parseFloat(q == null ? void 0 : q.getBoundingClientRect().top.toString()) - 100;
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
    this.show = !this.show, this.container.classList.toggle("hidden"), this.show ? (this.container.querySelector("input").focus(), document.addEventListener("keydown", (e) => this.listenEvents(e))) : document.removeEventListener("keydown", (e) => this.listenEvents(e));
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
    let L = document.createElement("input");
    L.className = "focus:outline-none px-2 py-1 border rounded", L.placeholder = "Search...", L.addEventListener("change", (q) => {
      this.query = q.target.value, this.search();
    });
    let n = document.createElement("button");
    n.className = "p-1 rounded border", n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>', n.addEventListener("click", () => {
      this.search("again", !0);
    });
    let f = document.createElement("button");
    f.className = "p-1 rounded border", f.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>', f.addEventListener("click", () => {
      this.search("again");
    }), e.append(L), e.append(n), e.append(f), this.container.append(e);
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
      e.append(X(this, je, Jn).call(this, n.label, n.callback));
    }), this.container.append(e);
  }
  search(e = "", L = !1) {
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
      findPrevious: L,
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
je = new WeakSet(), Jn = function(e, L) {
  let n = document.createElement("button");
  return n.className = "px-2 py-1 rounded border text-sm whitespace-nowrap", n.innerText = e, n.addEventListener("click", (f) => {
    L(f), n.classList.toggle("bg-gray-100");
  }), n;
};
class ZoomButton {
  build(e) {
    return this.pdfViewer = e.pdfViewer, this.container = document.createElement("div"), this.buildButtons(this.container), this.buildDropdown(this.container), e.eventBus.on("scalechanging", (L) => {
      this.currentScaleTracker.innerText = Math.round(L.scale * 100) + "%", this.currentScaleTracker.selected = !0;
    }), this.container;
  }
  onClick(e) {
  }
  buildButtons(e) {
    e.className = "flex items-center gap-x-2 text-gray-600 fill-current";
    let L = document.createElement("button");
    L.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 lucide lucide-zoom-out"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="8" x2="14" y1="11" y2="11"/></svg>', L.addEventListener("click", () => {
      this.pdfViewer.decreaseScale();
    }), e.append(L);
    let n = document.createElement("button");
    n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-zoom-in"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>', n.addEventListener("click", () => {
      this.pdfViewer.increaseScale();
    }), e.append(n);
  }
  buildDropdown(e) {
    let L = document.createElement("select");
    this.currentScaleTracker = document.createElement("option"), this.currentScaleTracker.disabled = !0, L.append(this.currentScaleTracker), ["page-width", " page-actual", "page-height", "page-fit", "auto"].forEach((f) => {
      let q = document.createElement("option");
      q.value = f, q.innerText = f, L.append(q);
    }), L.addEventListener("change", (f) => {
      this.pdfViewer.currentScaleValue = f.target.value;
    }), e.append(L);
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
    return this.btn = document.createElement("button"), this.btn.className = "outline-none border-none hover:bg-gray-100 p-2", this.btn.title = "view properties", this.btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>', e.pdfDocument.getMetadata().then((L) => {
      let n = L.info;
      this.name = pdfExports.getPdfFilenameFromUrl(e.url), this.computeFilesize(L.contentLength), this.computeCreatedDate(n.CreationDate), this.author = n.Creator, this.pdfProducer = n.Producer, this.pdfVersion = n.PDFFormatVersion, this.totalPages = e.pdfDocument.numPages.toString(), this.preparePopover();
    }), this.btn;
  }
  preparePopover() {
    this.popOver = document.createElement("div"), this.popOver.className = "flex-col fixed gap-y-2 p-4 top-1/2 z-[10000] bg-gray-50 border-2 shadow-lg rounded-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2", this.popOver.style.display = "none";
    let e = document.createElement("h1");
    e.className = "font-semibold text-lg border-b py-2", e.innerText = "Document Properties", this.popOver.append(e), Object.getOwnPropertyNames(this).forEach((L) => {
      if (typeof this[L] == "string") {
        let n = document.createElement("div");
        n.className = "flex items-center mt-2";
        let f = document.createElement("span");
        f.className = "w-32", f.innerText = L;
        let q = document.createElement("p");
        q.className = "w-64", q.innerText = this[L], n.append(f), n.append(q), this.popOver.append(n);
      }
    }), document.body.append(this.popOver), onClickOutside(this.popOver, () => {
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
    const L = e.substring(2, e.length - 7), n = L.substring(0, 4), f = L.substring(4, 6) - 1, q = L.substring(6, 8), V = L.substring(8, 10), I = L.substring(10, 12), c = L.substring(12, 14), d = new Date(Date.UTC(n, f, q, V, I, c)), r = e.substring(e.length - 7), F = parseInt(
      r.substring(1, 3),
      10
    ), M = parseInt(
      r.substring(4, 6),
      10
    );
    d.setUTCHours(d.getUTCHours() - F), d.setUTCMinutes(d.getUTCMinutes() - M), this.created = d.toDateString() + " " + d.toTimeString();
  }
  position() {
    return "right";
  }
  toggleVisibility() {
    setTimeout(() => {
      this.isVisible = !this.isVisible, this.popOver.style.display = this.isVisible ? "flex" : "none";
    }, 100);
  }
  reset() {
    var e, L;
    this.isVisible = !1, (e = this.popOver) == null || e.remove(), (L = this.btn) == null || L.remove(), this.size = null, this.name = null, this.author = null, this.created = null, this.pdfProducer = null, this.pdfVersion = null, this.totalPages = null;
  }
}
pdfExports.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfExports.version}/build/pdf.worker`;
class PDFViewer {
  constructor(e) {
    if (this.container = e, this.buttons = [
      new ViewThumbnailsButton(),
      new DownloadButton(),
      new SearchButton(),
      new ZoomButton(),
      new ViewPropertiesButton()
    ], !e)
      throw new Error("Please specify valid container");
    this.buildContainers(), this.initialisePDFService();
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
    this.container.classList.add(
      "w-screen",
      "h-screen",
      "p-2",
      "top-0",
      "left-0",
      "fixed",
      "z-100",
      "flex",
      "bg-[rgba(0,0,0,0.3)]"
    );
    let e = document.createElement("div");
    e.className = "flex flex-col w-full", this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = "w-full grid grid-cols-3 gap-x-2 rounded items-center border shadow-lg p-1 bg-white";
    let L = document.createElement("div");
    L.className = "flex items-center";
    let n = document.createElement("div");
    n.className = "flex justify-center items-center";
    let f = document.createElement("div");
    f.className = "flex justify-end items-center", this.buttonsContainer.append(L), this.buttonsContainer.append(n), this.buttonsContainer.append(f), e.append(this.buttonsContainer), this.bodyContainer = document.createElement("div"), this.bodyContainer.className = "w-full h-full mt-2 relative overflow-y-auto flex justify-center", this.bodyContainer.style.scrollBehavior = "smooth", this.pdfContainer = document.createElement("div"), this.pdfContainer.style.position = "absolute", this.pdfContainer.style.width = "100%";
    let q = document.createElement("div");
    q.id = "viewer", q.className = "pdfViewer", this.pdfContainer.append(q), this.bodyContainer.append(this.pdfContainer), e.append(this.bodyContainer), this.container.append(e);
  }
  buildButtons() {
    this.buttons.forEach((e) => {
      e.reset();
      let L = e.build(this.data);
      if (L) {
        switch (e.position()) {
          case "left":
            this.buttonsContainer.children[0].append(L);
            break;
          case "center":
            this.buttonsContainer.children[1].append(L);
            break;
          case "right":
            this.buttonsContainer.children[2].append(L);
            break;
        }
        L.onclick = () => e.onClick(this.data);
      }
    });
  }
  listenEvents() {
    this.eventBus.on("pagesinit", (e) => {
      this.pdfViewer.currentScaleValue = "auto";
    });
  }
  async init(e, L = {}) {
    let n = `https://unpkg.com/pdfjs-dist@${pdfExports.version}/cmaps/`;
    this.url = e;
    const f = pdfExports.getDocument({
      url: e,
      enableXfa: !0,
      cMapPacked: !0,
      disableAutoFetch: !0,
      disableStream: !0,
      disableFontFace: !1,
      cMapUrl: n
    });
    (async () => (this.pdfDocument = await f.promise, this.pdfViewer.setDocument(this.pdfDocument), this.pdfLinkService.setDocument(this.pdfDocument, null), this.listenEvents(), this.buildButtons()))();
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
