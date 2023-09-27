var ts = Object.defineProperty;
var es = (A, e, C) => e in A ? ts(A, e, { enumerable: !0, configurable: !0, writable: !0, value: C }) : A[e] = C;
var Zt = (A, e, C) => (es(A, typeof e != "symbol" ? e + "" : e, C), C), We = (A, e, C) => {
  if (!e.has(A))
    throw TypeError("Cannot " + C);
};
var t = (A, e, C) => (We(A, e, "read from private field"), C ? C.call(A) : e.get(A)), N = (A, e, C) => {
  if (e.has(A))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(A) : e.set(A, C);
}, it = (A, e, C, n) => (We(A, e, "write to private field"), n ? n.call(A, C) : e.set(A, C), C);
var ae = (A, e, C, n) => ({
  set _(u) {
    it(A, e, u, C);
  },
  get _() {
    return t(A, e, n);
  }
}), q = (A, e, C) => (We(A, e, "access private method"), C);
function getAugmentedNamespace(A) {
  if (A.__esModule)
    return A;
  var e = A.default;
  if (typeof e == "function") {
    var C = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    C.prototype = e.prototype;
  } else
    C = {};
  return Object.defineProperty(C, "__esModule", { value: !0 }), Object.keys(A).forEach(function(n) {
    var u = Object.getOwnPropertyDescriptor(A, n);
    Object.defineProperty(C, n, u.get ? u : {
      enumerable: !0,
      get: function() {
        return A[n];
      }
    });
  }), C;
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
  (function(e, C) {
    module.exports = e.pdfjsLib = C();
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
          }), e.VerbosityLevel = e.Util = e.UnknownErrorException = e.UnexpectedResponseException = e.TextRenderingMode = e.RenderingIntentFlag = e.PromiseCapability = e.PermissionFlag = e.PasswordResponses = e.PasswordException = e.PageActionEventType = e.OPS = e.MissingPDFException = e.MAX_IMAGE_SIZE_TO_CACHE = e.LINE_FACTOR = e.LINE_DESCENT_FACTOR = e.InvalidPDFException = e.ImageKind = e.IDENTITY_MATRIX = e.FormatError = e.FeatureTest = e.FONT_IDENTITY_MATRIX = e.DocumentActionEventType = e.CMapCompressionType = e.BaseException = e.BASELINE_FACTOR = e.AnnotationType = e.AnnotationReplyType = e.AnnotationMode = e.AnnotationFlag = e.AnnotationFieldFlag = e.AnnotationEditorType = e.AnnotationEditorPrefix = e.AnnotationEditorParamsType = e.AnnotationBorderStyleType = e.AnnotationActionEventType = e.AbortException = void 0, e.assert = j, e.bytesToString = ut, e.createValidAbsoluteUrl = lt, e.getModificationDate = Ot, e.getUuid = $t, e.getVerbosityLevel = K, e.info = Z, e.isArrayBuffer = dt, e.isArrayEqual = xt, e.isNodeJS = void 0, e.normalizeUnicode = Ht, e.objectFromMap = ot, e.objectSize = Et, e.setVerbosityLevel = M, e.shadow = _t, e.string32 = yt, e.stringToBytes = wt, e.stringToPDFString = at, e.stringToUTF8String = J, e.unreachable = v, e.utf8StringToString = rt, e.warn = Q;
          const C = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
          e.isNodeJS = C;
          const n = [1, 0, 0, 1, 0, 0];
          e.IDENTITY_MATRIX = n;
          const u = [1e-3, 0, 0, 1e-3, 0, 0];
          e.FONT_IDENTITY_MATRIX = u;
          const $ = 1e7;
          e.MAX_IMAGE_SIZE_TO_CACHE = $;
          const V = 1.35;
          e.LINE_FACTOR = V;
          const F = 0.35;
          e.LINE_DESCENT_FACTOR = F;
          const c = F / V;
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
          const f = {
            GRAYSCALE_1BPP: 1,
            RGB_24BPP: 2,
            RGBA_32BPP: 3
          };
          e.ImageKind = f;
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
          const x = {
            NONE: 0,
            BINARY: 1
          };
          e.CMapCompressionType = x;
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
          function M(Ct) {
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
          const L = function() {
            function m(B, ht) {
              this.constructor === m && v("Cannot initialize BaseException."), this.message = B, this.name = ht;
            }
            return m.prototype = new Error(), m.constructor = m, m;
          }();
          e.BaseException = L;
          class a extends L {
            constructor(m, B) {
              super(m, "PasswordException"), this.code = B;
            }
          }
          e.PasswordException = a;
          class l extends L {
            constructor(m, B) {
              super(m, "UnknownErrorException"), this.details = B;
            }
          }
          e.UnknownErrorException = l;
          class R extends L {
            constructor(m) {
              super(m, "InvalidPDFException");
            }
          }
          e.InvalidPDFException = R;
          class X extends L {
            constructor(m) {
              super(m, "MissingPDFException");
            }
          }
          e.MissingPDFException = X;
          class W extends L {
            constructor(m, B) {
              super(m, "UnexpectedResponseException"), this.status = B;
            }
          }
          e.UnexpectedResponseException = W;
          class nt extends L {
            constructor(m) {
              super(m, "FormatError");
            }
          }
          e.FormatError = nt;
          class st extends L {
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
              const B = [m[0], m[2], m[1], m[3]], ht = m[0] * B[0] + m[1] * B[2], Lt = m[0] * B[1] + m[1] * B[3], Pt = m[2] * B[0] + m[3] * B[2], pt = m[2] * B[1] + m[3] * B[3], vt = (ht + pt) / 2, U = Math.sqrt((ht + pt) ** 2 - 4 * (ht * pt - Pt * Lt)) / 2, gt = vt + U || 1, It = vt - U || 1;
              return [Math.sqrt(gt), Math.sqrt(It)];
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
              const gt = [], It = [[], []];
              let bt, O, T, z, H, et, ft, Mt;
              for (let Ft = 0; Ft < 2; ++Ft) {
                if (Ft === 0 ? (O = 6 * m - 12 * ht + 6 * Pt, bt = -3 * m + 9 * ht - 9 * Pt + 3 * vt, T = 3 * ht - 3 * m) : (O = 6 * B - 12 * Lt + 6 * pt, bt = -3 * B + 9 * Lt - 9 * pt + 3 * U, T = 3 * Lt - 3 * B), Math.abs(bt) < 1e-12) {
                  if (Math.abs(O) < 1e-12)
                    continue;
                  z = -T / O, 0 < z && z < 1 && gt.push(z);
                  continue;
                }
                ft = O * O - 4 * T * bt, Mt = Math.sqrt(ft), !(ft < 0) && (H = (-O + Mt) / (2 * bt), 0 < H && H < 1 && gt.push(H), et = (-O - Mt) / (2 * bt), 0 < et && et < 1 && gt.push(et));
              }
              let G = gt.length, ct;
              const mt = G;
              for (; G--; )
                z = gt[G], ct = 1 - z, It[0][G] = ct * ct * ct * m + 3 * ct * ct * z * ht + 3 * ct * z * z * Pt + z * z * z * vt, It[1][G] = ct * ct * ct * B + 3 * ct * ct * z * Lt + 3 * ct * z * z * pt + z * z * z * U;
              return It[0][mt] = m, It[1][mt] = B, It[0][mt + 1] = vt, It[1][mt + 1] = U, It[0].length = It[1].length = mt + 2, [Math.min(...It[0]), Math.min(...It[1]), Math.max(...It[0]), Math.max(...It[1])];
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
          var A, C, n, u, oe, V, we, c, d, r, I, k, S, h, p, f, Pe, b, g, ze, s, i;
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
              docId: x
            } = o, P = _.url ? getUrlProp(_.url) : null, Y = _.data ? getDataProp(_.data) : null, tt = _.httpHeaders || null, M = _.withCredentials === !0, K = _.password ?? null, Z = _.range instanceof PDFDataRangeTransport ? _.range : null, Q = Number.isInteger(_.rangeChunkSize) && _.rangeChunkSize > 0 ? _.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
            let v = _.worker instanceof PDFWorker ? _.worker : null;
            const j = _.verbosity, D = typeof _.docBaseUrl == "string" && !(0, _display_utils.isDataScheme)(_.docBaseUrl) ? _.docBaseUrl : null, lt = typeof _.cMapUrl == "string" ? _.cMapUrl : null, _t = _.cMapPacked !== !1, L = _.CMapReaderFactory || DefaultCMapReaderFactory, a = typeof _.standardFontDataUrl == "string" ? _.standardFontDataUrl : null, l = _.StandardFontDataFactory || DefaultStandardFontDataFactory, R = _.stopAtErrors !== !0, X = Number.isInteger(_.maxImageSize) && _.maxImageSize > -1 ? _.maxImageSize : -1, W = _.isEvalSupported !== !1, nt = typeof _.isOffscreenCanvasSupported == "boolean" ? _.isOffscreenCanvasSupported : !_util.isNodeJS, st = Number.isInteger(_.canvasMaxAreaInBytes) ? _.canvasMaxAreaInBytes : -1, ut = typeof _.disableFontFace == "boolean" ? _.disableFontFace : _util.isNodeJS, wt = _.fontExtraProperties === !0, yt = _.enableXfa === !0, Et = _.ownerDocument || globalThis.document, ot = _.disableRange === !0, At = _.disableStream === !0, St = _.disableAutoFetch === !0, Rt = _.pdfBug === !0, Bt = Z ? Z.length : _.length ?? NaN, kt = typeof _.useSystemFonts == "boolean" ? _.useSystemFonts : !_util.isNodeJS && !ut, Ut = typeof _.useWorkerFetch == "boolean" ? _.useWorkerFetch : L === _display_utils.DOMCMapReaderFactory && l === _display_utils.DOMStandardFontDataFactory && lt && a && (0, _display_utils.isValidFetchUrl)(lt, document.baseURI) && (0, _display_utils.isValidFetchUrl)(a, document.baseURI), at = _.canvasFactory || new DefaultCanvasFactory({
              ownerDocument: Et
            }), J = _.filterFactory || new DefaultFilterFactory({
              docId: x,
              ownerDocument: Et
            }), rt = null;
            (0, _util.setVerbosityLevel)(j);
            const dt = {
              canvasFactory: at,
              filterFactory: J
            };
            if (Ut || (dt.cMapReaderFactory = new L({
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
              docId: x,
              apiVersion: "3.10.111",
              data: Y,
              password: K,
              disableAutoFetch: St,
              rangeChunkSize: Q,
              length: Bt,
              docBaseUrl: D,
              enableXfa: yt,
              evaluatorOptions: {
                maxImageSize: X,
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
                  withCredentials: M,
                  rangeChunkSize: Q,
                  disableRange: ot,
                  disableStream: At
                })), Nt(Ht);
              });
              return Promise.all([jt, Wt]).then(function([Nt, Ht]) {
                if (o.destroyed)
                  throw new Error("Loading aborted");
                const $t = new _message_handler.MessageHandler(x, Nt, v.port), Gt = new WorkerTransport($t, o, Ht, Ot, dt);
                o._transport = Gt, $t.send("Ready", null);
              });
            }).catch(o._capability.reject), o;
          }
          async function _fetchDocument(_, o) {
            if (_.destroyed)
              throw new Error("Worker was destroyed");
            const x = await _.messageHandler.sendWithPromise("GetDocRequest", o, o.data ? [o.data.buffer] : null);
            if (_.destroyed)
              throw new Error("Worker was destroyed");
            return x;
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
              var o, x, P;
              this.destroyed = !0;
              try {
                (o = this._worker) != null && o.port && (this._worker._pendingDestroy = !0), await ((x = this._transport) == null ? void 0 : x.destroy());
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
            constructor(o, x, P = !1, Y = null) {
              this.length = o, this.initialData = x, this.progressiveDone = P, this.contentDispositionFilename = Y, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = new _util.PromiseCapability();
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
            onDataRange(o, x) {
              for (const P of this._rangeListeners)
                P(o, x);
            }
            onDataProgress(o, x) {
              this._readyCapability.promise.then(() => {
                for (const P of this._progressListeners)
                  P(o, x);
              });
            }
            onDataProgressiveRead(o) {
              this._readyCapability.promise.then(() => {
                for (const x of this._progressiveReadListeners)
                  x(o);
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
            requestDataRange(o, x) {
              (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
            }
            abort() {
            }
          }
          exports.PDFDataRangeTransport = PDFDataRangeTransport;
          class PDFDocumentProxy {
            constructor(o, x) {
              this._pdfInfo = o, this._transport = x, Object.defineProperty(this, "getJavaScript", {
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
            constructor(o, x, P, Y = !1) {
              N(this, u);
              N(this, V);
              N(this, C, null);
              N(this, n, !1);
              this._pageIndex = o, this._pageInfo = x, this._transport = P, this._stats = Y ? new _display_utils.StatTimer() : null, this._pdfBug = Y, this.commonObjs = P.commonObjs, this.objs = new PDFObjects(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
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
              rotation: x = this.rotate,
              offsetX: P = 0,
              offsetY: Y = 0,
              dontFlip: tt = !1
            } = {}) {
              return new _display_utils.PageViewport({
                viewBox: this.view,
                scale: o,
                rotation: x,
                offsetX: P,
                offsetY: Y,
                dontFlip: tt
              });
            }
            getAnnotations({
              intent: o = "display"
            } = {}) {
              const x = this._transport.getRenderingIntent(o);
              return this._transport.getAnnotations(this._pageIndex, x.renderingIntent);
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
              viewport: x,
              intent: P = "display",
              annotationMode: Y = _util.AnnotationMode.ENABLE,
              transform: tt = null,
              background: M = null,
              optionalContentConfigPromise: K = null,
              annotationCanvasMap: Z = null,
              pageColors: Q = null,
              printAnnotationStorage: v = null
            }) {
              var l, R;
              (l = this._stats) == null || l.time("Overall");
              const j = this._transport.getRenderingIntent(P, Y, v);
              it(this, n, !1), q(this, V, we).call(this), K || (K = this._transport.getOptionalContentConfig());
              let D = this._intentStates.get(j.cacheKey);
              D || (D = /* @__PURE__ */ Object.create(null), this._intentStates.set(j.cacheKey, D)), D.streamReaderCancelTimeout && (clearTimeout(D.streamReaderCancelTimeout), D.streamReaderCancelTimeout = null);
              const lt = !!(j.renderingIntent & _util.RenderingIntentFlag.PRINT);
              D.displayReadyCapability || (D.displayReadyCapability = new _util.PromiseCapability(), D.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
              }, (R = this._stats) == null || R.time("Page Request"), this._pumpOperatorList(j));
              const _t = (X) => {
                var W, nt;
                D.renderTasks.delete(L), (this._maybeCleanupAfterRender || lt) && it(this, n, !0), q(this, u, oe).call(this, !lt), X ? (L.capability.reject(X), this._abortOperatorList({
                  intentState: D,
                  reason: X instanceof Error ? X : new Error(X)
                })) : L.capability.resolve(), (W = this._stats) == null || W.timeEnd("Rendering"), (nt = this._stats) == null || nt.timeEnd("Overall");
              }, L = new InternalRenderTask({
                callback: _t,
                params: {
                  canvasContext: o,
                  viewport: x,
                  transform: tt,
                  background: M
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
              (D.renderTasks || (D.renderTasks = /* @__PURE__ */ new Set())).add(L);
              const a = L.task;
              return Promise.all([D.displayReadyCapability.promise, K]).then(([X, W]) => {
                var nt;
                if (this.destroyed) {
                  _t();
                  return;
                }
                (nt = this._stats) == null || nt.time("Rendering"), L.initializeGraphics({
                  transparency: X,
                  optionalContentConfig: W
                }), L.operatorListChanged();
              }).catch(_t), a;
            }
            getOperatorList({
              intent: o = "display",
              annotationMode: x = _util.AnnotationMode.ENABLE,
              printAnnotationStorage: P = null
            } = {}) {
              var Z;
              function Y() {
                M.operatorList.lastChunk && (M.opListReadCapability.resolve(M.operatorList), M.renderTasks.delete(K));
              }
              const tt = this._transport.getRenderingIntent(o, x, P, !0);
              let M = this._intentStates.get(tt.cacheKey);
              M || (M = /* @__PURE__ */ Object.create(null), this._intentStates.set(tt.cacheKey, M));
              let K;
              return M.opListReadCapability || (K = /* @__PURE__ */ Object.create(null), K.operatorListChanged = Y, M.opListReadCapability = new _util.PromiseCapability(), (M.renderTasks || (M.renderTasks = /* @__PURE__ */ new Set())).add(K), M.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
              }, (Z = this._stats) == null || Z.time("Page Request"), this._pumpOperatorList(tt)), M.opListReadCapability.promise;
            }
            streamTextContent({
              includeMarkedContent: o = !1,
              disableNormalization: x = !1
            } = {}) {
              return this._transport.messageHandler.sendWithStream("GetTextContent", {
                pageIndex: this._pageIndex,
                includeMarkedContent: o === !0,
                disableNormalization: x === !0
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
              const x = this.streamTextContent(o);
              return new Promise(function(P, Y) {
                function tt() {
                  M.read().then(function({
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
                const M = x.getReader(), K = {
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
              for (const x of this._intentStates.values())
                if (this._abortOperatorList({
                  intentState: x,
                  reason: new Error("Page was destroyed."),
                  force: !0
                }), !x.opListReadCapability)
                  for (const P of x.renderTasks)
                    o.push(P.completed), P.cancel();
              return this.objs.clear(), it(this, n, !1), q(this, V, we).call(this), Promise.all(o);
            }
            cleanup(o = !1) {
              it(this, n, !0);
              const x = q(this, u, oe).call(this, !1);
              return o && x && this._stats && (this._stats = new _display_utils.StatTimer()), x;
            }
            _startRenderPage(o, x) {
              var Y, tt;
              const P = this._intentStates.get(x);
              P && ((Y = this._stats) == null || Y.timeEnd("Page Request"), (tt = P.displayReadyCapability) == null || tt.resolve(o));
            }
            _renderPageChunk(o, x) {
              for (let P = 0, Y = o.length; P < Y; P++)
                x.operatorList.fnArray.push(o.fnArray[P]), x.operatorList.argsArray.push(o.argsArray[P]);
              x.operatorList.lastChunk = o.lastChunk, x.operatorList.separateAnnots = o.separateAnnots;
              for (const P of x.renderTasks)
                P.operatorListChanged();
              o.lastChunk && q(this, u, oe).call(this, !0);
            }
            _pumpOperatorList({
              renderingIntent: o,
              cacheKey: x,
              annotationStorageSerializable: P
            }) {
              const {
                map: Y,
                transfers: tt
              } = P, K = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                pageIndex: this._pageIndex,
                intent: o,
                cacheKey: x,
                annotationStorage: Y
              }, tt).getReader(), Z = this._intentStates.get(x);
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
                      q(this, u, oe).call(this, !0);
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
              reason: x,
              force: P = !1
            }) {
              if (o.streamReader) {
                if (o.streamReaderCancelTimeout && (clearTimeout(o.streamReaderCancelTimeout), o.streamReaderCancelTimeout = null), !P) {
                  if (o.renderTasks.size > 0)
                    return;
                  if (x instanceof _display_utils.RenderingCancelledException) {
                    let Y = RENDERING_CANCELLED_TIMEOUT;
                    x.extraDelay > 0 && x.extraDelay < 1e3 && (Y += x.extraDelay), o.streamReaderCancelTimeout = setTimeout(() => {
                      o.streamReaderCancelTimeout = null, this._abortOperatorList({
                        intentState: o,
                        reason: x,
                        force: !0
                      });
                    }, Y);
                    return;
                  }
                }
                if (o.streamReader.cancel(new _util.AbortException(x.message)).catch(() => {
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
          C = new WeakMap(), n = new WeakMap(), u = new WeakSet(), oe = function(o = !1) {
            if (q(this, V, we).call(this), !t(this, n) || this.destroyed)
              return !1;
            if (o)
              return it(this, C, setTimeout(() => {
                it(this, C, null), q(this, u, oe).call(this, !1);
              }, DELAYED_CLEANUP_TIMEOUT)), !1;
            for (const {
              renderTasks: x,
              operatorList: P
            } of this._intentStates.values())
              if (x.size > 0 || !P.lastChunk)
                return !1;
            return this._intentStates.clear(), this.objs.clear(), it(this, n, !1), !0;
          }, V = new WeakSet(), we = function() {
            t(this, C) && (clearTimeout(t(this, C)), it(this, C, null));
          }, exports.PDFPageProxy = PDFPageProxy;
          class LoopbackPort {
            constructor() {
              N(this, c, /* @__PURE__ */ new Set());
              N(this, d, Promise.resolve());
            }
            postMessage(o, x) {
              const P = {
                data: structuredClone(o, x ? {
                  transfer: x
                } : null)
              };
              t(this, d).then(() => {
                for (const Y of t(this, c))
                  Y.call(this, P);
              });
            }
            addEventListener(o, x) {
              t(this, c).add(x);
            }
            removeEventListener(o, x) {
              t(this, c).delete(x);
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
              let x;
              try {
                if (x = new URL(_), !x.origin || x.origin === "null")
                  return !1;
              } catch {
                return !1;
              }
              const P = new URL(o, x);
              return x.origin === P.origin;
            }, PDFWorkerUtil.createCDNWrapper = function(_) {
              const o = `importScripts("${_}");`;
              return URL.createObjectURL(new Blob([o]));
            };
          }
          const _PDFWorker = class _PDFWorker {
            constructor({
              name: _ = null,
              port: o = null,
              verbosity: x = (0, _util.getVerbosityLevel)()
            } = {}) {
              var P;
              if (this.name = _, this.destroyed = !1, this.verbosity = x, this._readyCapability = new _util.PromiseCapability(), this._port = null, this._webWorker = null, this._messageHandler = null, o) {
                if ((P = t(_PDFWorker, I)) != null && P.has(o))
                  throw new Error("Cannot use more than one PDFWorker per port.");
                (t(_PDFWorker, I) || it(_PDFWorker, I, /* @__PURE__ */ new WeakMap())).set(o, this), this._initializeFromPort(o);
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
                  const o = new Worker(_), x = new _message_handler.MessageHandler("main", "worker", o), P = () => {
                    o.removeEventListener("error", Y), x.destroy(), o.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
                  }, Y = () => {
                    this._webWorker || P();
                  };
                  o.addEventListener("error", Y), x.on("test", (M) => {
                    if (o.removeEventListener("error", Y), this.destroyed) {
                      P();
                      return;
                    }
                    M ? (this._messageHandler = x, this._port = o, this._webWorker = o, this._readyCapability.resolve(), x.send("configure", {
                      verbosity: this.verbosity
                    })) : (this._setupFakeWorker(), x.destroy(), o.terminate());
                  }), x.on("ready", (M) => {
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
                    const M = new Uint8Array();
                    x.send("test", M, [M.buffer]);
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
                const x = `fake${PDFWorkerUtil.fakeWorkerId++}`, P = new _message_handler.MessageHandler(x + "_worker", x, o);
                _.setup(P, o);
                const Y = new _message_handler.MessageHandler(x, x + "_worker", o);
                this._messageHandler = Y, this._readyCapability.resolve(), Y.send("configure", {
                  verbosity: this.verbosity
                });
              }).catch((_) => {
                this._readyCapability.reject(new Error(`Setting up fake worker failed: "${_.message}".`));
              });
            }
            destroy() {
              var _;
              this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (_ = t(_PDFWorker, I)) == null || _.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
            }
            static fromPort(_) {
              var x;
              if (!(_ != null && _.port))
                throw new Error("PDFWorker.fromPort - invalid method signature.");
              const o = (x = t(this, I)) == null ? void 0 : x.get(_.port);
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
          I = new WeakMap(), N(_PDFWorker, I, void 0);
          let PDFWorker = _PDFWorker;
          exports.PDFWorker = PDFWorker;
          class WorkerTransport {
            constructor(o, x, P, Y, tt) {
              N(this, f);
              N(this, k, /* @__PURE__ */ new Map());
              N(this, S, /* @__PURE__ */ new Map());
              N(this, h, /* @__PURE__ */ new Map());
              N(this, p, null);
              this.messageHandler = o, this.loadingTask = x, this.commonObjs = new PDFObjects(), this.fontLoader = new _font_loader.FontLoader({
                ownerDocument: Y.ownerDocument,
                styleElement: Y.styleElement
              }), this._params = Y, this.canvasFactory = tt.canvasFactory, this.filterFactory = tt.filterFactory, this.cMapReaderFactory = tt.cMapReaderFactory, this.standardFontDataFactory = tt.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = P, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = new _util.PromiseCapability(), this.setupMessageHandler();
            }
            get annotationStorage() {
              return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
            }
            getRenderingIntent(o, x = _util.AnnotationMode.ENABLE, P = null, Y = !1) {
              let tt = _util.RenderingIntentFlag.DISPLAY, M = _annotation_storage.SerializableEmpty;
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
              switch (x) {
                case _util.AnnotationMode.DISABLE:
                  tt += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                  break;
                case _util.AnnotationMode.ENABLE:
                  break;
                case _util.AnnotationMode.ENABLE_FORMS:
                  tt += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                  break;
                case _util.AnnotationMode.ENABLE_STORAGE:
                  tt += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE, M = (tt & _util.RenderingIntentFlag.PRINT && P instanceof _annotation_storage.PrintAnnotationStorage ? P : this.annotationStorage).serializable;
                  break;
                default:
                  (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${x}`);
              }
              return Y && (tt += _util.RenderingIntentFlag.OPLIST), {
                renderingIntent: tt,
                cacheKey: `${tt}_${M.hash}`,
                annotationStorageSerializable: M
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
              const x = this.messageHandler.sendWithPromise("Terminate", null);
              return o.push(x), Promise.all(o).then(() => {
                var Y;
                this.commonObjs.clear(), this.fontLoader.clear(), t(this, k).clear(), this.filterFactory.destroy(), (Y = this._networkStream) == null || Y.cancelAllRequests(new _util.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
              }, this.destroyCapability.reject), this.destroyCapability.promise;
            }
            setupMessageHandler() {
              const {
                messageHandler: o,
                loadingTask: x
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
                    done: M
                  }) {
                    if (M) {
                      Y.close();
                      return;
                    }
                    (0, _util.assert)(tt instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), Y.enqueue(new Uint8Array(tt), 1, [tt]);
                  }).catch((tt) => {
                    Y.error(tt);
                  });
                }, Y.onCancel = (tt) => {
                  this._fullReader.cancel(tt), Y.ready.catch((M) => {
                    if (!this.destroyed)
                      throw M;
                  });
                };
              }), o.on("ReaderHeadersReady", (P) => {
                const Y = new _util.PromiseCapability(), tt = this._fullReader;
                return tt.headersReady.then(() => {
                  var M;
                  (!tt.isStreamingSupported || !tt.isRangeSupported) && (this._lastProgress && ((M = x.onProgress) == null || M.call(x, this._lastProgress)), tt.onProgress = (K) => {
                    var Z;
                    (Z = x.onProgress) == null || Z.call(x, {
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
                    value: M,
                    done: K
                  }) {
                    if (K) {
                      Y.close();
                      return;
                    }
                    (0, _util.assert)(M instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), Y.enqueue(new Uint8Array(M), 1, [M]);
                  }).catch((M) => {
                    Y.error(M);
                  });
                }, Y.onCancel = (M) => {
                  tt.cancel(M), Y.ready.catch((K) => {
                    if (!this.destroyed)
                      throw K;
                  });
                };
              }), o.on("GetDoc", ({
                pdfInfo: P
              }) => {
                this._numPages = P.numPages, this._htmlForXfa = P.htmlForXfa, delete P.htmlForXfa, x._capability.resolve(new PDFDocumentProxy(P, this));
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
                x._capability.reject(Y);
              }), o.on("PasswordRequest", (P) => {
                if (it(this, p, new _util.PromiseCapability()), x.onPassword) {
                  const Y = (tt) => {
                    tt instanceof Error ? t(this, p).reject(tt) : t(this, p).resolve({
                      password: tt
                    });
                  };
                  try {
                    x.onPassword(Y, P.code);
                  } catch (tt) {
                    t(this, p).reject(tt);
                  }
                } else
                  t(this, p).reject(new _util.PasswordException(P.message, P.code));
                return t(this, p).promise;
              }), o.on("DataLoaded", (P) => {
                var Y;
                (Y = x.onProgress) == null || Y.call(x, {
                  loaded: P.length,
                  total: P.length
                }), this.downloadInfoCapability.resolve(P);
              }), o.on("StartRenderPage", (P) => {
                if (this.destroyed)
                  return;
                t(this, S).get(P.pageIndex)._startRenderPage(P.transparency, P.cacheKey);
              }), o.on("commonobj", ([P, Y, tt]) => {
                var M;
                if (!this.destroyed && !this.commonObjs.has(P))
                  switch (Y) {
                    case "Font":
                      const K = this._params;
                      if ("error" in tt) {
                        const v = tt.error;
                        (0, _util.warn)(`Error during font loading: ${v}`), this.commonObjs.resolve(P, v);
                        break;
                      }
                      const Z = K.pdfBug && ((M = globalThis.FontInspector) != null && M.enabled) ? (v, j) => globalThis.FontInspector.fontAdded(v, j) : null, Q = new _font_loader.FontFaceObject(tt, {
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
              }), o.on("obj", ([P, Y, tt, M]) => {
                var Z;
                if (this.destroyed)
                  return;
                const K = t(this, S).get(Y);
                if (!K.objs.has(P))
                  switch (tt) {
                    case "Image":
                      if (K.objs.resolve(P, M), M) {
                        let Q;
                        if (M.bitmap) {
                          const {
                            width: v,
                            height: j
                          } = M;
                          Q = v * j * 4;
                        } else
                          Q = ((Z = M.data) == null ? void 0 : Z.length) || 0;
                        Q > _util.MAX_IMAGE_SIZE_TO_CACHE && (K._maybeCleanupAfterRender = !0);
                      }
                      break;
                    case "Pattern":
                      K.objs.resolve(P, M);
                      break;
                    default:
                      throw new Error(`Got unknown object type ${tt}`);
                  }
              }), o.on("DocProgress", (P) => {
                var Y;
                this.destroyed || (Y = x.onProgress) == null || Y.call(x, {
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
                transfers: x
              } = this.annotationStorage.serializable;
              return this.messageHandler.sendWithPromise("SaveDocument", {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: o,
                filename: ((P = this._fullReader) == null ? void 0 : P.filename) ?? null
              }, x).finally(() => {
                this.annotationStorage.resetModified();
              });
            }
            getPage(o) {
              if (!Number.isInteger(o) || o <= 0 || o > this._numPages)
                return Promise.reject(new Error("Invalid page request."));
              const x = o - 1, P = t(this, h).get(x);
              if (P)
                return P;
              const Y = this.messageHandler.sendWithPromise("GetPage", {
                pageIndex: x
              }).then((tt) => {
                if (this.destroyed)
                  throw new Error("Transport destroyed");
                const M = new PDFPageProxy(x, tt, this, this._params.pdfBug);
                return t(this, S).set(x, M), M;
              });
              return t(this, h).set(x, Y), Y;
            }
            getPageIndex(o) {
              return typeof o != "object" || o === null || !Number.isInteger(o.num) || o.num < 0 || !Number.isInteger(o.gen) || o.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", {
                num: o.num,
                gen: o.gen
              });
            }
            getAnnotations(o, x) {
              return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: o,
                intent: x
              });
            }
            getFieldObjects() {
              return q(this, f, Pe).call(this, "GetFieldObjects");
            }
            hasJSActions() {
              return q(this, f, Pe).call(this, "HasJSActions");
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
              return q(this, f, Pe).call(this, "GetDocJSActions");
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
              const o = "GetMetadata", x = t(this, k).get(o);
              if (x)
                return x;
              const P = this.messageHandler.sendWithPromise(o, null).then((Y) => {
                var tt, M;
                return {
                  info: Y[0],
                  metadata: Y[1] ? new _metadata.Metadata(Y[1]) : null,
                  contentDispositionFilename: ((tt = this._fullReader) == null ? void 0 : tt.filename) ?? null,
                  contentLength: ((M = this._fullReader) == null ? void 0 : M.contentLength) ?? null
                };
              });
              return t(this, k).set(o, P), P;
            }
            getMarkInfo() {
              return this.messageHandler.sendWithPromise("GetMarkInfo", null);
            }
            async startCleanup(o = !1) {
              if (!this.destroyed) {
                await this.messageHandler.sendWithPromise("Cleanup", null);
                for (const x of t(this, S).values())
                  if (!x.cleanup())
                    throw new Error(`startCleanup: Page ${x.pageNumber} is currently rendering.`);
                this.commonObjs.clear(), o || this.fontLoader.clear(), t(this, k).clear(), this.filterFactory.destroy(!0);
              }
            }
            get loadingParams() {
              const {
                disableAutoFetch: o,
                enableXfa: x
              } = this._params;
              return (0, _util.shadow)(this, "loadingParams", {
                disableAutoFetch: o,
                enableXfa: x
              });
            }
          }
          k = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), f = new WeakSet(), Pe = function(o, x = null) {
            const P = t(this, k).get(o);
            if (P)
              return P;
            const Y = this.messageHandler.sendWithPromise(o, x);
            return t(this, k).set(o, Y), Y;
          };
          class PDFObjects {
            constructor() {
              N(this, g);
              N(this, b, /* @__PURE__ */ Object.create(null));
            }
            get(o, x = null) {
              if (x) {
                const Y = q(this, g, ze).call(this, o);
                return Y.capability.promise.then(() => x(Y.data)), null;
              }
              const P = t(this, b)[o];
              if (!(P != null && P.capability.settled))
                throw new Error(`Requesting object that isn't resolved yet ${o}.`);
              return P.data;
            }
            has(o) {
              const x = t(this, b)[o];
              return (x == null ? void 0 : x.capability.settled) || !1;
            }
            resolve(o, x = null) {
              const P = q(this, g, ze).call(this, o);
              P.data = x, P.capability.resolve();
            }
            clear() {
              var o;
              for (const x in t(this, b)) {
                const {
                  data: P
                } = t(this, b)[x];
                (o = P == null ? void 0 : P.bitmap) == null || o.close();
              }
              it(this, b, /* @__PURE__ */ Object.create(null));
            }
          }
          b = new WeakMap(), g = new WeakSet(), ze = function(o) {
            var x;
            return (x = t(this, b))[o] || (x[o] = {
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
                annotationCanvasMap: x
              } = t(this, s);
              return o.form || o.canvas && (x == null ? void 0 : x.size) > 0;
            }
          }
          s = new WeakMap(), exports.RenderTask = RenderTask;
          const E = class E {
            constructor({
              callback: o,
              params: x,
              objs: P,
              commonObjs: Y,
              annotationCanvasMap: tt,
              operatorList: M,
              pageIndex: K,
              canvasFactory: Z,
              filterFactory: Q,
              useRequestAnimationFrame: v = !1,
              pdfBug: j = !1,
              pageColors: D = null
            }) {
              this.callback = o, this.params = x, this.objs = P, this.commonObjs = Y, this.annotationCanvasMap = tt, this.operatorListIdx = null, this.operatorList = M, this._pageIndex = K, this.canvasFactory = Z, this.filterFactory = Q, this._pdfBug = j, this.pageColors = D, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = v === !0 && typeof window < "u", this.cancelled = !1, this.capability = new _util.PromiseCapability(), this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = x.canvasContext.canvas;
            }
            get completed() {
              return this.capability.promise.catch(function() {
              });
            }
            initializeGraphics({
              transparency: o = !1,
              optionalContentConfig: x
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
                background: M
              } = this.params;
              this.gfx = new _canvas.CanvasGraphics(P, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: x
              }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
                transform: tt,
                viewport: Y,
                transparency: o,
                background: M
              }), this.operatorListIdx = 0, this.graphicsReady = !0, (Z = this.graphicsReadyCallback) == null || Z.call(this);
            }
            cancel(o = null, x = 0) {
              var P;
              this.running = !1, this.cancelled = !0, (P = this.gfx) == null || P.endDrawing(), this._canvas && t(E, i).delete(this._canvas), this.callback(o || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, x));
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
        (A, e, C) => {
          var d, r, I, zi, S;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.SerializableEmpty = e.PrintAnnotationStorage = e.AnnotationStorage = void 0;
          var n = C(1), u = C(4), $ = C(8);
          const V = Object.freeze({
            map: null,
            hash: "",
            transfers: void 0
          });
          e.SerializableEmpty = V;
          class F {
            constructor() {
              N(this, I);
              N(this, d, !1);
              N(this, r, /* @__PURE__ */ new Map());
              this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
            }
            getValue(p, f) {
              const y = t(this, r).get(p);
              return y === void 0 ? f : Object.assign(f, y);
            }
            getRawValue(p) {
              return t(this, r).get(p);
            }
            remove(p) {
              if (t(this, r).delete(p), t(this, r).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
                for (const f of t(this, r).values())
                  if (f instanceof u.AnnotationEditor)
                    return;
                this.onAnnotationEditor(null);
              }
            }
            setValue(p, f) {
              const y = t(this, r).get(p);
              let b = !1;
              if (y !== void 0)
                for (const [g, w] of Object.entries(f))
                  y[g] !== w && (b = !0, y[g] = w);
              else
                b = !0, t(this, r).set(p, f);
              b && q(this, I, zi).call(this), f instanceof u.AnnotationEditor && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(f.constructor._type);
            }
            has(p) {
              return t(this, r).has(p);
            }
            getAll() {
              return t(this, r).size > 0 ? (0, n.objectFromMap)(t(this, r)) : null;
            }
            setAll(p) {
              for (const [f, y] of Object.entries(p))
                this.setValue(f, y);
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
              const p = /* @__PURE__ */ new Map(), f = new $.MurmurHash3_64(), y = [], b = /* @__PURE__ */ Object.create(null);
              let g = !1;
              for (const [w, s] of t(this, r)) {
                const i = s instanceof u.AnnotationEditor ? s.serialize(!1, b) : s;
                i && (p.set(w, i), f.update(`${w}:${JSON.stringify(i)}`), g || (g = !!i.bitmap));
              }
              if (g)
                for (const w of p.values())
                  w.bitmap && y.push(w.bitmap);
              return p.size > 0 ? {
                map: p,
                hash: f.hexdigest(),
                transfers: y
              } : V;
            }
          }
          d = new WeakMap(), r = new WeakMap(), I = new WeakSet(), zi = function() {
            t(this, d) || (it(this, d, !0), typeof this.onSetModified == "function" && this.onSetModified());
          }, e.AnnotationStorage = F;
          class c extends F {
            constructor(f) {
              super();
              N(this, S, void 0);
              const {
                map: y,
                hash: b,
                transfers: g
              } = f.serializable, w = structuredClone(y, g ? {
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
        (A, e, C) => {
          var F, c, d, r, I, k, S, h, p, f, Ge, b, $e, w, Xe, i, Gi, _, $i, x, Xi, Y, qi, M, Yi;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.AnnotationEditor = void 0;
          var n = C(5), u = C(1);
          const Z = class Z {
            constructor(v) {
              N(this, f);
              N(this, w);
              N(this, _);
              N(this, x);
              N(this, Y);
              N(this, M);
              N(this, F, !1);
              N(this, c, null);
              N(this, d, this.focusin.bind(this));
              N(this, r, this.focusout.bind(this));
              N(this, I, !1);
              N(this, k, !1);
              N(this, S, !1);
              Zt(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
              Zt(this, "_uiManager", null);
              Zt(this, "_focusEventsAllowed", !0);
              N(this, h, !1);
              N(this, p, Z._zIndex++);
              this.constructor === Z && (0, u.unreachable)("Cannot initialize AnnotationEditor."), this.parent = v.parent, this.id = v.id, this.width = this.height = null, this.pageIndex = v.parent.pageIndex, this.name = v.name, this.div = null, this._uiManager = v.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = v.isCentered;
              const {
                rotation: j,
                rawDims: {
                  pageWidth: D,
                  pageHeight: lt,
                  pageX: _t,
                  pageY: L
                }
              } = this.parent.viewport;
              this.rotation = j, this.pageRotation = (360 + j - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [D, lt], this.pageTranslation = [_t, L];
              const [a, l] = this.parentDimensions;
              this.x = v.x / a, this.y = v.y / l, this.isAttachedToDOM = !1, this.deleted = !1;
            }
            static get _defaultLineColor() {
              return (0, u.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
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
              (0, u.unreachable)("Not implemented");
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
              this._focusEventsAllowed && (t(this, I) ? it(this, I, !1) : this.parent.setSelected(this));
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
              const [_t, L] = this.parentDimensions;
              [D, lt] = this.screenToPageTranslation(D, lt), this.x = (v + D) / _t, this.y = (j + lt) / L, this.fixAndSetPosition();
            }
            translate(v, j) {
              q(this, f, Ge).call(this, this.parentDimensions, v, j);
            }
            translateInPage(v, j) {
              q(this, f, Ge).call(this, this.pageDimensions, v, j), this.moveInDOM(), this.div.scrollIntoView({
                block: "nearest"
              });
            }
            drag(v, j) {
              const [D, lt] = this.parentDimensions;
              if (this.x += v / D, this.y += j / lt, this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1) {
                const {
                  x: _t,
                  y: L
                } = this.div.getBoundingClientRect();
                this.parent.findNewParent(this, _t, L) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
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
                height: L
              } = this;
              switch (_t *= v, L *= j, D *= v, lt *= j, this.rotation) {
                case 0:
                  D = Math.max(0, Math.min(v - _t, D)), lt = Math.max(0, Math.min(j - L, lt));
                  break;
                case 90:
                  D = Math.max(0, Math.min(v - L, D)), lt = Math.min(j, Math.max(_t, lt));
                  break;
                case 180:
                  D = Math.min(v, Math.max(_t, D)), lt = Math.min(j, Math.max(L, lt));
                  break;
                case 270:
                  D = Math.min(v, Math.max(L, D)), lt = Math.max(0, Math.min(j - _t, lt));
                  break;
              }
              this.x = D / v, this.y = lt / j, this.div.style.left = `${(100 * this.x).toFixed(2)}%`, this.div.style.top = `${(100 * this.y).toFixed(2)}%`;
            }
            screenToPageTranslation(v, j) {
              var D;
              return q(D = Z, b, $e).call(D, v, j, this.parentRotation);
            }
            pageTranslationToScreen(v, j) {
              var D;
              return q(D = Z, b, $e).call(D, v, j, 360 - this.parentRotation);
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
              return u.FeatureTest.isCSSRoundSupported ? [Math.round(lt), Math.round(_t)] : [lt, _t];
            }
            setDims(v, j) {
              const [D, lt] = this.parentDimensions;
              this.div.style.width = `${(100 * v / D).toFixed(2)}%`, t(this, F) || (this.div.style.height = `${(100 * j / lt).toFixed(2)}%`);
            }
            fixDims() {
              const {
                style: v
              } = this.div, {
                height: j,
                width: D
              } = v, lt = D.endsWith("%"), _t = !t(this, F) && j.endsWith("%");
              if (lt && _t)
                return;
              const [L, a] = this.parentDimensions;
              lt || (v.width = `${(100 * parseFloat(D) / L).toFixed(2)}%`), !t(this, F) && !_t && (v.height = `${(100 * parseFloat(j) / a).toFixed(2)}%`);
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
              } = u.FeatureTest.platform;
              if (v.button !== 0 || v.ctrlKey && j) {
                v.preventDefault();
                return;
              }
              it(this, I, !0), q(this, M, Yi).call(this, v);
            }
            moveInDOM() {
              this.parent.moveEditorInDOM(this);
            }
            _setParentAndPosition(v, j, D) {
              v.changeParent(this), this.x = j, this.y = D, this.fixAndSetPosition(), this.moveInDOM();
            }
            getRect(v, j) {
              const D = this.parentScale, [lt, _t] = this.pageDimensions, [L, a] = this.pageTranslation, l = v / D, R = j / D, X = this.x * lt, W = this.y * _t, nt = this.width * lt, st = this.height * _t;
              switch (this.rotation) {
                case 0:
                  return [X + l + L, _t - W - R - st + a, X + l + nt + L, _t - W - R + a];
                case 90:
                  return [X + R + L, _t - W + l + a, X + R + st + L, _t - W + l + nt + a];
                case 180:
                  return [X - l - nt + L, _t - W + R + a, X - l + L, _t - W + R + st + a];
                case 270:
                  return [X - R - st + L, _t - W - l - nt + a, X - R + L, _t - W - l + a];
                default:
                  throw new Error("Invalid rotation");
              }
            }
            getRectInCurrentCoords(v, j) {
              const [D, lt, _t, L] = v, a = _t - D, l = L - lt;
              switch (this.rotation) {
                case 0:
                  return [D, j - L, a, l];
                case 90:
                  return [D, j - lt, l, a];
                case 180:
                  return [_t, j - lt, a, l];
                case 270:
                  return [_t, j - L, l, a];
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
              (0, u.unreachable)("An editor must be serializable");
            }
            static deserialize(v, j, D) {
              const lt = new this.prototype.constructor({
                parent: j,
                id: j.getNextId(),
                uiManager: D
              });
              lt.rotation = v.rotation;
              const [_t, L] = lt.pageDimensions, [a, l, R, X] = lt.getRectInCurrentCoords(v.rect, L);
              return lt.x = a / _t, lt.y = l / L, lt.width = R / _t, lt.height = X / L, lt;
            }
            remove() {
              this.div.removeEventListener("focusin", t(this, d)), this.div.removeEventListener("focusout", t(this, r)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this);
            }
            get isResizable() {
              return !1;
            }
            makeResizable() {
              this.isResizable && (q(this, _, $i).call(this), t(this, c).classList.remove("hidden"));
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
              return t(this, k);
            }
            set isEditing(v) {
              it(this, k, v), this.parent && (v ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
            }
            setAspectRatio(v, j) {
              it(this, F, !0);
              const D = v / j, {
                style: lt
              } = this.div;
              lt.aspectRatio = D, lt.height = "auto";
            }
            static get MIN_SIZE() {
              return 16;
            }
          };
          F = new WeakMap(), c = new WeakMap(), d = new WeakMap(), r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), f = new WeakSet(), Ge = function([v, j], D, lt) {
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
              t(this, c).append(D), D.classList.add("resizer", j), D.addEventListener("pointerdown", q(this, x, Xi).bind(this, j)), D.addEventListener("contextmenu", q(Z, i, Gi));
            }
            this.div.prepend(t(this, c));
          }, x = new WeakSet(), Xi = function(v, j) {
            j.preventDefault();
            const {
              isMac: D
            } = u.FeatureTest.platform;
            if (j.button !== 0 || j.ctrlKey && D)
              return;
            const lt = q(this, Y, qi).bind(this, v), _t = this._isDraggable;
            this._isDraggable = !1;
            const L = {
              passive: !0,
              capture: !0
            };
            window.addEventListener("pointermove", lt, L);
            const a = this.x, l = this.y, R = this.width, X = this.height, W = this.parent.div.style.cursor, nt = this.div.style.cursor;
            this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(j.target).cursor;
            const st = () => {
              this._isDraggable = _t, window.removeEventListener("pointerup", st), window.removeEventListener("blur", st), window.removeEventListener("pointermove", lt, L), this.parent.div.style.cursor = W, this.div.style.cursor = nt;
              const ut = this.x, wt = this.y, yt = this.width, Et = this.height;
              ut === a && wt === l && yt === R && Et === X || this.addCommands({
                cmd: () => {
                  this.width = yt, this.height = Et, this.x = ut, this.y = wt;
                  const [ot, At] = this.parentDimensions;
                  this.setDims(ot * yt, At * Et), this.fixAndSetPosition(), this.moveInDOM();
                },
                undo: () => {
                  this.width = R, this.height = X, this.x = a, this.y = l;
                  const [ot, At] = this.parentDimensions;
                  this.setDims(ot * R, At * X), this.fixAndSetPosition(), this.moveInDOM();
                },
                mustExec: !0
              });
            };
            window.addEventListener("pointerup", st), window.addEventListener("blur", st);
          }, Y = new WeakSet(), qi = function(v, j) {
            const [D, lt] = this.parentDimensions, _t = this.x, L = this.y, a = this.width, l = this.height, R = Z.MIN_SIZE / D, X = Z.MIN_SIZE / lt, W = (Nt) => Math.round(Nt * 1e4) / 1e4, nt = q(this, w, Xe).call(this, this.rotation), st = (Nt, Ht) => [nt[0] * Nt + nt[2] * Ht, nt[1] * Nt + nt[3] * Ht], ut = q(this, w, Xe).call(this, 360 - this.rotation), wt = (Nt, Ht) => [ut[0] * Nt + ut[2] * Ht, ut[1] * Nt + ut[3] * Ht];
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
            const kt = W(_t + Bt[0]), Ut = W(L + Bt[1]);
            let at = 1, J = 1, [rt, dt] = this.screenToPageTranslation(j.movementX, j.movementY);
            if ([rt, dt] = wt(rt / D, dt / lt), ot) {
              const Nt = Math.hypot(a, l);
              at = J = Math.max(Math.min(Math.hypot(Rt[0] - St[0] - rt, Rt[1] - St[1] - dt) / Nt, 1 / a, 1 / l), R / a, X / l);
            } else
              At ? at = Math.max(R, Math.min(1, Math.abs(Rt[0] - St[0] - rt))) / a : J = Math.max(X, Math.min(1, Math.abs(Rt[1] - St[1] - dt))) / l;
            const xt = W(a * at), Ot = W(l * J);
            Bt = st(...Et(xt, Ot));
            const jt = kt - Bt[0], Wt = Ut - Bt[1];
            this.width = xt, this.height = Ot, this.x = jt, this.y = Wt, this.setDims(D * xt, lt * Ot), this.fixAndSetPosition();
          }, M = new WeakSet(), Yi = function(v) {
            if (!this._isDraggable)
              return;
            const j = this._uiManager.isSelected(this);
            this._uiManager.setUpDragSession();
            let D, lt;
            j && (D = {
              passive: !0,
              capture: !0
            }, lt = (L) => {
              const [a, l] = this.screenToPageTranslation(L.movementX, L.movementY);
              this._uiManager.dragSelectedEditors(a, l);
            }, window.addEventListener("pointermove", lt, D));
            const _t = () => {
              if (window.removeEventListener("pointerup", _t), window.removeEventListener("blur", _t), j && window.removeEventListener("pointermove", lt, D), it(this, I, !1), !this._uiManager.endDragSession()) {
                const {
                  isMac: L
                } = u.FeatureTest.platform;
                v.ctrlKey && !L || v.shiftKey || v.metaKey && L ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
              }
            };
            window.addEventListener("pointerup", _t), window.addEventListener("blur", _t);
          }, N(Z, b), N(Z, i), Zt(Z, "_colorManager", new n.ColorManager()), Zt(Z, "_zIndex", 1);
          let $ = Z;
          e.AnnotationEditor = $;
          class V extends $ {
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
        (A, e, C) => {
          var S, h, p, f, y, qe, w, s, i, E, _, Ki, P, Y, tt, M, K, Z, Q, v, j, D, lt, _t, L, a, l, R, X, W, nt, st, ut, wt, yt, Et, ot, At, St, Rt, Bt, kt, Ut, at, J, rt, dt, Qi, Ot, Ye, Wt, Ji, Ht, Ke, Gt, Zi, m, tn, ht, ie, Pt, fe, vt, en, gt, nn, bt, Qe, T, pe, H, Je;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.KeyboardManager = e.CommandManager = e.ColorManager = e.AnnotationEditorUIManager = void 0, e.bindEvents = $, e.opacityToHex = V;
          var n = C(1), u = C(6);
          function $(Mt, G, ct) {
            for (const mt of ct)
              G.addEventListener(mt, Mt[mt].bind(Mt));
          }
          function V(Mt) {
            return Math.round(Math.min(255, Math.max(1, 255 * Mt))).toString(16).padStart(2, "0");
          }
          class F {
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
              N(this, f, null);
            }
            static get _isSVGFittingCanvas() {
              const G = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', mt = new OffscreenCanvas(1, 3).getContext("2d"), Ft = new Image();
              Ft.src = G;
              const Tt = Ft.decode().then(() => (mt.drawImage(Ft, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(mt.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
              return (0, n.shadow)(this, "_isSVGFittingCanvas", Tt);
            }
            async getFromFile(G) {
              const {
                lastModified: ct,
                name: mt,
                size: Ft,
                type: Tt
              } = G;
              return q(this, y, qe).call(this, `${ct}_${mt}_${Ft}_${Tt}`, G);
            }
            async getFromUrl(G) {
              return q(this, y, qe).call(this, G, G);
            }
            async getFromId(G) {
              t(this, f) || it(this, f, /* @__PURE__ */ new Map());
              const ct = t(this, f).get(G);
              return ct ? ct.bitmap ? (ct.refCounter += 1, ct) : ct.file ? this.getFromFile(ct.file) : this.getFromUrl(ct.url) : null;
            }
            getSvgUrl(G) {
              const ct = t(this, f).get(G);
              return ct != null && ct.isSvg ? ct.svgUrl : null;
            }
            deleteId(G) {
              t(this, f) || it(this, f, /* @__PURE__ */ new Map());
              const ct = t(this, f).get(G);
              ct && (ct.refCounter -= 1, ct.refCounter === 0 && (ct.bitmap = null));
            }
            isValidId(G) {
              return G.startsWith(`image_${t(this, h)}_`);
            }
          };
          h = new WeakMap(), p = new WeakMap(), f = new WeakMap(), y = new WeakSet(), qe = async function(G, ct) {
            t(this, f) || it(this, f, /* @__PURE__ */ new Map());
            let mt = t(this, f).get(G);
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
              let Ft;
              if (typeof ct == "string") {
                mt.url = ct;
                const Tt = await fetch(ct);
                if (!Tt.ok)
                  throw new Error(Tt.statusText);
                Ft = await Tt.blob();
              } else
                Ft = mt.file = ct;
              if (Ft.type === "image/svg+xml") {
                const Tt = g._isSVGFittingCanvas, Dt = new FileReader(), Vt = new Image(), zt = new Promise((Xt, qt) => {
                  Vt.onload = () => {
                    mt.bitmap = Vt, mt.isSvg = !0, Xt();
                  }, Dt.onload = async () => {
                    const Qt = mt.svgUrl = Dt.result;
                    Vt.src = await Tt ? `${Qt}#svgView(preserveAspectRatio(none))` : Qt;
                  }, Vt.onerror = Dt.onerror = qt;
                });
                Dt.readAsDataURL(Ft), await zt;
              } else
                mt.bitmap = await createImageBitmap(Ft);
              mt.refCounter = 1;
            } catch (Ft) {
              console.error(Ft), mt = null;
            }
            return t(this, f).set(G, mt), mt && t(this, f).set(mt.id, mt), mt;
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
              type: Ft = NaN,
              overwriteIfSameType: Tt = !1,
              keepUndo: Dt = !1
            }) {
              if (mt && G(), t(this, s))
                return;
              const Vt = {
                cmd: G,
                undo: ct,
                type: Ft
              };
              if (t(this, E) === -1) {
                t(this, w).length > 0 && (t(this, w).length = 0), it(this, E, 0), t(this, w).push(Vt);
                return;
              }
              if (Tt && t(this, w)[t(this, E)].type === Ft) {
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
              for (const [mt, Ft, Tt = {}] of G)
                for (const Dt of mt) {
                  const Vt = Dt.startsWith("mac+");
                  ct && Vt ? (this.callbacks.set(Dt.slice(4), {
                    callback: Ft,
                    options: Tt
                  }), this.allKeys.add(Dt.split("+").at(-1))) : !ct && !Vt && (this.callbacks.set(Dt, {
                    callback: Ft,
                    options: Tt
                  }), this.allKeys.add(Dt.split("+").at(-1)));
                }
            }
            exec(G, ct) {
              if (!this.allKeys.has(ct.key))
                return;
              const mt = this.callbacks.get(q(this, _, Ki).call(this, ct));
              if (!mt)
                return;
              const {
                callback: Ft,
                options: {
                  bubbles: Tt = !1,
                  args: Dt = [],
                  checker: Vt = null
                }
              } = mt;
              Vt && !Vt(G, ct) || (Ft.bind(G, ...Dt)(), Tt || (ct.stopPropagation(), ct.preventDefault()));
            }
          }
          _ = new WeakSet(), Ki = function(G) {
            G.altKey && this.buffer.push("alt"), G.ctrlKey && this.buffer.push("ctrl"), G.metaKey && this.buffer.push("meta"), G.shiftKey && this.buffer.push("shift"), this.buffer.push(G.key);
            const ct = this.buffer.join("+");
            return this.buffer.length = 0, ct;
          }, e.KeyboardManager = r;
          const x = class x {
            get _colors() {
              const G = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
              return (0, u.getColorValues)(G), (0, n.shadow)(this, "_colors", G);
            }
            convert(G) {
              const ct = (0, u.getRGB)(G);
              if (!window.matchMedia("(forced-colors: active)").matches)
                return ct;
              for (const [mt, Ft] of this._colors)
                if (Ft.every((Tt, Dt) => Tt === ct[Dt]))
                  return x._colorsMapping.get(mt);
              return ct;
            }
            getHexCode(G) {
              const ct = this._colors.get(G);
              return ct ? n.Util.makeHexColor(...ct) : G;
            }
          };
          Zt(x, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
          let I = x;
          e.ColorManager = I;
          const ft = class ft {
            constructor(G, ct, mt, Ft, Tt) {
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
              N(this, T);
              N(this, H);
              N(this, P, null);
              N(this, Y, /* @__PURE__ */ new Map());
              N(this, tt, /* @__PURE__ */ new Map());
              N(this, M, null);
              N(this, K, new d());
              N(this, Z, 0);
              N(this, Q, /* @__PURE__ */ new Set());
              N(this, v, null);
              N(this, j, null);
              N(this, D, /* @__PURE__ */ new Set());
              N(this, lt, null);
              N(this, _t, null);
              N(this, L, new F());
              N(this, a, !1);
              N(this, l, !1);
              N(this, R, null);
              N(this, X, n.AnnotationEditorType.NONE);
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
              it(this, J, G), it(this, rt, ct), it(this, lt, mt), t(this, lt)._on("editingaction", t(this, At)), t(this, lt)._on("pagechanging", t(this, St)), t(this, lt)._on("scalechanging", t(this, Rt)), t(this, lt)._on("rotationchanging", t(this, Bt)), it(this, M, Ft.annotationStorage), it(this, _t, Ft.filterFactory), it(this, nt, Tt), this.viewParameters = {
                realScale: u.PixelsPerInch.PDF_TO_CSS_UNITS,
                rotation: 0
              };
            }
            static get _keyboardManager() {
              const G = ft.prototype, ct = (Tt) => {
                const {
                  activeElement: Dt
                } = document;
                return Dt && t(Tt, J).contains(Dt) && Tt.hasSomethingToControl();
              }, mt = this.TRANSLATE_SMALL, Ft = this.TRANSLATE_BIG;
              return (0, n.shadow)(this, "_keyboardManager", new r([[["ctrl+a", "mac+meta+a"], G.selectAll], [["ctrl+z", "mac+meta+z"], G.undo], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], G.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], G.delete], [["Escape", "mac+Escape"], G.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], G.translateSelectedEditors, {
                args: [-mt, 0],
                checker: ct
              }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], G.translateSelectedEditors, {
                args: [-Ft, 0],
                checker: ct
              }], [["ArrowRight", "mac+ArrowRight"], G.translateSelectedEditors, {
                args: [mt, 0],
                checker: ct
              }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], G.translateSelectedEditors, {
                args: [Ft, 0],
                checker: ct
              }], [["ArrowUp", "mac+ArrowUp"], G.translateSelectedEditors, {
                args: [0, -mt],
                checker: ct
              }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], G.translateSelectedEditors, {
                args: [0, -Ft],
                checker: ct
              }], [["ArrowDown", "mac+ArrowDown"], G.translateSelectedEditors, {
                args: [0, mt],
                checker: ct
              }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], G.translateSelectedEditors, {
                args: [0, Ft],
                checker: ct
              }]]));
            }
            destroy() {
              q(this, Ht, Ke).call(this), q(this, Ot, Ye).call(this), t(this, lt)._off("editingaction", t(this, At)), t(this, lt)._off("pagechanging", t(this, St)), t(this, lt)._off("scalechanging", t(this, Rt)), t(this, lt)._off("rotationchanging", t(this, Bt));
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
                  x: Ft,
                  y: Tt,
                  width: Dt,
                  height: Vt
                } = mt.div.getBoundingClientRect();
                if (G >= Ft && G <= Ft + Dt && ct >= Tt && ct <= Tt + Vt)
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
              this.commitOrRemove(), this.viewParameters.realScale = G * u.PixelsPerInch.PDF_TO_CSS_UNITS;
              for (const ct of t(this, D))
                ct.onScaleChanging();
            }
            onRotationChanging({
              pagesRotation: G
            }) {
              this.commitOrRemove(), this.viewParameters.rotation = G;
            }
            addToAnnotationStorage(G) {
              !G.isEmpty() && t(this, M) && !t(this, M).has(G.id) && t(this, M).setValue(G.id, G);
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
              for (const Ft of t(this, W)) {
                const Tt = Ft.serialize(!0);
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
              const Ft = this.currentLayer;
              try {
                const Tt = [];
                for (const zt of mt) {
                  const Xt = Ft.deserialize(zt);
                  if (!Xt)
                    return;
                  Tt.push(Xt);
                }
                const Dt = () => {
                  for (const zt of Tt)
                    q(this, bt, Qe).call(this, zt);
                  q(this, H, Je).call(this, Tt);
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
              G ? (q(this, dt, Qi).call(this), q(this, Wt, Ji).call(this), q(this, Gt, Zi).call(this), q(this, ht, ie).call(this, {
                isEditing: t(this, X) !== n.AnnotationEditorType.NONE,
                isEmpty: q(this, T, pe).call(this),
                hasSomethingToUndo: t(this, K).hasSomethingToUndo(),
                hasSomethingToRedo: t(this, K).hasSomethingToRedo(),
                hasSelectedEditor: !1
              })) : (q(this, Ot, Ye).call(this), q(this, Ht, Ke).call(this), q(this, m, tn).call(this), q(this, ht, ie).call(this, {
                isEditing: !1
              }), this.disableUserSelect(!1));
            }
            registerEditorTypes(G) {
              if (!t(this, j)) {
                it(this, j, G);
                for (const ct of t(this, j))
                  q(this, Pt, fe).call(this, ct.defaultPropertiesToUpdate);
              }
            }
            getId() {
              return t(this, L).getId();
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
              if (t(this, X) !== G) {
                if (it(this, X, G), G === n.AnnotationEditorType.NONE) {
                  this.setEditingState(!1), q(this, gt, nn).call(this);
                  return;
                }
                this.setEditingState(!0), q(this, vt, en).call(this), this.unselectAll();
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
              G !== t(this, X) && t(this, lt).dispatch("switchannotationeditormode", {
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
              t(this, Y).delete(G.id), this.unselect(G), (!G.annotationElementId || !t(this, Q).has(G.annotationElementId)) && ((ct = t(this, M)) == null || ct.remove(G.id));
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
              t(this, P) !== G && (it(this, P, G), G && q(this, Pt, fe).call(this, G.propertiesToUpdate));
            }
            toggleSelected(G) {
              if (t(this, W).has(G)) {
                t(this, W).delete(G), G.unselect(), q(this, ht, ie).call(this, {
                  hasSelectedEditor: this.hasSelection
                });
                return;
              }
              t(this, W).add(G), G.select(), q(this, Pt, fe).call(this, G.propertiesToUpdate), q(this, ht, ie).call(this, {
                hasSelectedEditor: !0
              });
            }
            setSelected(G) {
              for (const ct of t(this, W))
                ct !== G && ct.unselect();
              t(this, W).clear(), t(this, W).add(G), G.select(), q(this, Pt, fe).call(this, G.propertiesToUpdate), q(this, ht, ie).call(this, {
                hasSelectedEditor: !0
              });
            }
            isSelected(G) {
              return t(this, W).has(G);
            }
            unselect(G) {
              G.unselect(), t(this, W).delete(G), q(this, ht, ie).call(this, {
                hasSelectedEditor: this.hasSelection
              });
            }
            get hasSelection() {
              return t(this, W).size !== 0;
            }
            undo() {
              t(this, K).undo(), q(this, ht, ie).call(this, {
                hasSomethingToUndo: t(this, K).hasSomethingToUndo(),
                hasSomethingToRedo: !0,
                isEmpty: q(this, T, pe).call(this)
              });
            }
            redo() {
              t(this, K).redo(), q(this, ht, ie).call(this, {
                hasSomethingToUndo: !0,
                hasSomethingToRedo: t(this, K).hasSomethingToRedo(),
                isEmpty: q(this, T, pe).call(this)
              });
            }
            addCommands(G) {
              t(this, K).add(G), q(this, ht, ie).call(this, {
                hasSomethingToUndo: !0,
                hasSomethingToRedo: !1,
                isEmpty: q(this, T, pe).call(this)
              });
            }
            delete() {
              if (this.commitOrRemove(), !this.hasSelection)
                return;
              const G = [...t(this, W)], ct = () => {
                for (const Ft of G)
                  Ft.remove();
              }, mt = () => {
                for (const Ft of G)
                  q(this, bt, Qe).call(this, Ft);
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
              q(this, H, Je).call(this, t(this, Y).values());
            }
            unselectAll() {
              if (t(this, P)) {
                t(this, P).commitOrRemove();
                return;
              }
              if (this.hasSelection) {
                for (const G of t(this, W))
                  G.unselect();
                t(this, W).clear(), q(this, ht, ie).call(this, {
                  hasSelectedEditor: !1
                });
              }
            }
            translateSelectedEditors(G, ct, mt = !1) {
              if (mt || this.commitOrRemove(), !this.hasSelection)
                return;
              t(this, Ut)[0] += G, t(this, Ut)[1] += ct;
              const [Ft, Tt] = t(this, Ut), Dt = [...t(this, W)], Vt = 1e3;
              t(this, at) && clearTimeout(t(this, at)), it(this, at, setTimeout(() => {
                it(this, at, null), t(this, Ut)[0] = t(this, Ut)[1] = 0, this.addCommands({
                  cmd: () => {
                    for (const zt of Dt)
                      t(this, Y).has(zt.id) && zt.translateInPage(Ft, Tt);
                  },
                  undo: () => {
                    for (const zt of Dt)
                      t(this, Y).has(zt.id) && zt.translateInPage(-Ft, -Tt);
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
                x: Ft,
                y: Tt,
                parent: Dt
              }, Vt] of G)
                Vt.newX = Ft, Vt.newY = Tt, Vt.newPageIndex = Dt.pageIndex, ct || (ct = Ft !== Vt.savedX || Tt !== Vt.savedY || Dt.pageIndex !== Vt.savedPageIndex);
              if (!ct)
                return !1;
              const mt = (Ft, Tt, Dt, Vt) => {
                if (t(this, Y).has(Ft.id)) {
                  const zt = t(this, tt).get(Vt);
                  zt ? Ft._setParentAndPosition(zt, Tt, Dt) : (Ft.pageIndex = Vt, Ft.x = Tt, Ft.y = Dt);
                }
              };
              return this.addCommands({
                cmd: () => {
                  for (const [Ft, {
                    newX: Tt,
                    newY: Dt,
                    newPageIndex: Vt
                  }] of G)
                    mt(Ft, Tt, Dt, Vt);
                },
                undo: () => {
                  for (const [Ft, {
                    savedX: Tt,
                    savedY: Dt,
                    savedPageIndex: Vt
                  }] of G)
                    mt(Ft, Tt, Dt, Vt);
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
              return t(this, X);
            }
            get imageManager() {
              return (0, n.shadow)(this, "imageManager", new c());
            }
          };
          P = new WeakMap(), Y = new WeakMap(), tt = new WeakMap(), M = new WeakMap(), K = new WeakMap(), Z = new WeakMap(), Q = new WeakMap(), v = new WeakMap(), j = new WeakMap(), D = new WeakMap(), lt = new WeakMap(), _t = new WeakMap(), L = new WeakMap(), a = new WeakMap(), l = new WeakMap(), R = new WeakMap(), X = new WeakMap(), W = new WeakMap(), nt = new WeakMap(), st = new WeakMap(), ut = new WeakMap(), wt = new WeakMap(), yt = new WeakMap(), Et = new WeakMap(), ot = new WeakMap(), At = new WeakMap(), St = new WeakMap(), Rt = new WeakMap(), Bt = new WeakMap(), kt = new WeakMap(), Ut = new WeakMap(), at = new WeakMap(), J = new WeakMap(), rt = new WeakMap(), dt = new WeakSet(), Qi = function() {
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
            Object.entries(G).some(([mt, Ft]) => t(this, kt)[mt] !== Ft) && t(this, lt).dispatch("annotationeditorstateschanged", {
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
          }, T = new WeakSet(), pe = function() {
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
            q(this, ht, ie).call(this, {
              hasSelectedEditor: !0
            });
          }, Zt(ft, "TRANSLATE_SMALL", 1), Zt(ft, "TRANSLATE_BIG", 10);
          let k = ft;
          e.AnnotationEditorUIManager = k;
        },
        /* 6 */
        /***/
        (A, e, C) => {
          var Q, v, j, D, lt, _t, L, a, l, R, X, W, le, st, ce, wt, Ze, Et, Ce, At, Te, Rt, ge, kt, me;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.StatTimer = e.RenderingCancelledException = e.PixelsPerInch = e.PageViewport = e.PDFDateString = e.DOMStandardFontDataFactory = e.DOMSVGFactory = e.DOMFilterFactory = e.DOMCanvasFactory = e.DOMCMapReaderFactory = e.AnnotationPrefix = void 0, e.deprecated = E, e.getColorValues = Y, e.getCurrentTransform = tt, e.getCurrentTransformInverse = M, e.getFilenameFromUrl = b, e.getPdfFilenameFromUrl = g, e.getRGB = P, e.getXfaPageViewport = x, e.isDataScheme = f, e.isPdfFile = y, e.isValidFetchUrl = s, e.loadScript = i, e.setLayerDimensions = K;
          var n = C(7), u = C(1);
          const $ = "http://www.w3.org/2000/svg", V = "pdfjs_internal_id_";
          e.AnnotationPrefix = V;
          const Z = class Z {
          };
          Zt(Z, "CSS", 96), Zt(Z, "PDF", 72), Zt(Z, "PDF_TO_CSS_UNITS", Z.CSS / Z.PDF);
          let F = Z;
          e.PixelsPerInch = F;
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
              N(this, L, void 0);
              N(this, a, void 0);
              N(this, l, void 0);
              N(this, R, void 0);
              N(this, X, 0);
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
              const Nt = `g_${t(this, j)}_transfer_map_${ae(this, X)._++}`, Ht = `url(#${Nt})`;
              t(this, W, le).set(rt, Ht), t(this, W, le).set(Wt, Ht);
              const $t = q(this, Et, Ce).call(this, Nt);
              return q(this, Rt, ge).call(this, xt, Ot, jt, $t), Ht;
            }
            addHCMFilter(rt, dt) {
              var Ct;
              const xt = `${rt}-${dt}`;
              if (t(this, _t) === xt)
                return t(this, L);
              if (it(this, _t, xt), it(this, L, "none"), (Ct = t(this, lt)) == null || Ct.remove(), !rt || !dt)
                return t(this, L);
              const Ot = q(this, kt, me).call(this, rt);
              rt = u.Util.makeHexColor(...Ot);
              const jt = q(this, kt, me).call(this, dt);
              if (dt = u.Util.makeHexColor(...jt), t(this, st, ce).style.color = "", rt === "#000000" && dt === "#ffffff" || rt === dt)
                return t(this, L);
              const Wt = new Array(256);
              for (let m = 0; m <= 255; m++) {
                const B = m / 255;
                Wt[m] = B <= 0.03928 ? B / 12.92 : ((B + 0.055) / 1.055) ** 2.4;
              }
              const Nt = Wt.join(","), Ht = `g_${t(this, j)}_hcm_filter`, $t = it(this, a, q(this, Et, Ce).call(this, Ht));
              q(this, Rt, ge).call(this, Nt, Nt, Nt, $t), q(this, wt, Ze).call(this, $t);
              const Gt = (m, B) => {
                const ht = Ot[m] / 255, Lt = jt[m] / 255, Pt = new Array(B + 1);
                for (let pt = 0; pt <= B; pt++)
                  Pt[pt] = ht + pt / B * (Lt - ht);
                return Pt.join(",");
              };
              return q(this, Rt, ge).call(this, Gt(0, 5), Gt(1, 5), Gt(2, 5), $t), it(this, L, `url(#${Ht})`), t(this, L);
            }
            addHighlightHCMFilter(rt, dt, xt, Ot) {
              var Lt;
              const jt = `${rt}-${dt}-${xt}-${Ot}`;
              if (t(this, l) === jt)
                return t(this, R);
              if (it(this, l, jt), it(this, R, "none"), (Lt = t(this, a)) == null || Lt.remove(), !rt || !dt)
                return t(this, R);
              const [Wt, Nt] = [rt, dt].map(q(this, kt, me).bind(this));
              let Ht = Math.round(0.2126 * Wt[0] + 0.7152 * Wt[1] + 0.0722 * Wt[2]), $t = Math.round(0.2126 * Nt[0] + 0.7152 * Nt[1] + 0.0722 * Nt[2]), [Gt, Ct] = [xt, Ot].map(q(this, kt, me).bind(this));
              $t < Ht && ([Ht, $t, Gt, Ct] = [$t, Ht, Ct, Gt]), t(this, st, ce).style.color = "";
              const m = (Pt, pt, vt) => {
                const U = new Array(256), gt = ($t - Ht) / vt, It = Pt / 255, bt = (pt - Pt) / (255 * vt);
                let O = 0;
                for (let T = 0; T <= vt; T++) {
                  const z = Math.round(Ht + T * gt), H = It + T * bt;
                  for (let et = O; et <= z; et++)
                    U[et] = H;
                  O = z + 1;
                }
                for (let T = O; T < 256; T++)
                  U[T] = U[O - 1];
                return U.join(",");
              }, B = `g_${t(this, j)}_hcm_highlight_filter`, ht = it(this, a, q(this, Et, Ce).call(this, B));
              return q(this, wt, Ze).call(this, ht), q(this, Rt, ge).call(this, m(Gt[0], Ct[0], 5), m(Gt[1], Ct[1], 5), m(Gt[2], Ct[2], 5), ht), it(this, R, `url(#${B})`), t(this, R);
            }
            destroy(rt = !1) {
              rt && (t(this, L) || t(this, R)) || (t(this, v) && (t(this, v).parentNode.parentNode.remove(), it(this, v, null)), t(this, Q) && (t(this, Q).clear(), it(this, Q, null)), it(this, X, 0));
            }
          }
          Q = new WeakMap(), v = new WeakMap(), j = new WeakMap(), D = new WeakMap(), lt = new WeakMap(), _t = new WeakMap(), L = new WeakMap(), a = new WeakMap(), l = new WeakMap(), R = new WeakMap(), X = new WeakMap(), W = new WeakSet(), le = function() {
            return t(this, Q) || it(this, Q, /* @__PURE__ */ new Map());
          }, st = new WeakSet(), ce = function() {
            if (!t(this, v)) {
              const rt = t(this, D).createElement("div"), {
                style: dt
              } = rt;
              dt.visibility = "hidden", dt.contain = "strict", dt.width = dt.height = 0, dt.position = "absolute", dt.top = dt.left = 0, dt.zIndex = -1;
              const xt = t(this, D).createElementNS($, "svg");
              xt.setAttribute("width", 0), xt.setAttribute("height", 0), it(this, v, t(this, D).createElementNS($, "defs")), rt.append(xt), xt.append(t(this, v)), t(this, D).body.append(rt);
            }
            return t(this, v);
          }, wt = new WeakSet(), Ze = function(rt) {
            const dt = t(this, D).createElementNS($, "feColorMatrix");
            dt.setAttribute("type", "matrix"), dt.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), rt.append(dt);
          }, Et = new WeakSet(), Ce = function(rt) {
            const dt = t(this, D).createElementNS($, "filter");
            return dt.setAttribute("color-interpolation-filters", "sRGB"), dt.setAttribute("id", rt), t(this, st, ce).append(dt), dt;
          }, At = new WeakSet(), Te = function(rt, dt, xt) {
            const Ot = t(this, D).createElementNS($, dt);
            Ot.setAttribute("type", "discrete"), Ot.setAttribute("tableValues", xt), rt.append(Ot);
          }, Rt = new WeakSet(), ge = function(rt, dt, xt, Ot) {
            const jt = t(this, D).createElementNS($, "feComponentTransfer");
            Ot.append(jt), q(this, At, Te).call(this, jt, "feFuncR", rt), q(this, At, Te).call(this, jt, "feFuncG", dt), q(this, At, Te).call(this, jt, "feFuncB", xt);
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
              return J ? new Uint8Array(await rt.arrayBuffer()) : (0, u.stringToBytes)(await rt.text());
            }
            return new Promise((rt, dt) => {
              const xt = new XMLHttpRequest();
              xt.open("GET", at, !0), J && (xt.responseType = "arraybuffer"), xt.onreadystatechange = () => {
                if (xt.readyState === XMLHttpRequest.DONE) {
                  if (xt.status === 200 || xt.status === 0) {
                    let Ot;
                    if (J && xt.response ? Ot = new Uint8Array(xt.response) : !J && xt.responseText && (Ot = (0, u.stringToBytes)(xt.responseText)), Ot) {
                      rt(Ot);
                      return;
                    }
                  }
                  dt(new Error(xt.statusText));
                }
              }, xt.send(null);
            });
          }
          class I extends n.BaseCMapReaderFactory {
            _fetchData(J, rt) {
              return r(J, this.isCompressed).then((dt) => ({
                cMapData: dt,
                compressionType: rt
              }));
            }
          }
          e.DOMCMapReaderFactory = I;
          class k extends n.BaseStandardFontDataFactory {
            _fetchData(J) {
              return r(J, !0);
            }
          }
          e.DOMStandardFontDataFactory = k;
          class S extends n.BaseSVGFactory {
            _createSVG(J) {
              return document.createElementNS($, J);
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
              return (0, u.shadow)(this, "rawDims", {
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
              return u.Util.applyTransform([J, rt], this.transform);
            }
            convertToViewportRectangle(J) {
              const rt = u.Util.applyTransform([J[0], J[1]], this.transform), dt = u.Util.applyTransform([J[2], J[3]], this.transform);
              return [rt[0], rt[1], dt[0], dt[1]];
            }
            convertToPdfPoint(J, rt) {
              return u.Util.applyInverseTransform([J, rt], this.transform);
            }
          }
          e.PageViewport = h;
          class p extends u.BaseException {
            constructor(J, rt = 0) {
              super(J, "RenderingCancelledException"), this.extraDelay = rt;
            }
          }
          e.RenderingCancelledException = p;
          function f(at) {
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
            if (f(at))
              return (0, u.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), J;
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
              J in this.started && (0, u.warn)(`Timer is already running for ${J}`), this.started[J] = Date.now();
            }
            timeEnd(J) {
              J in this.started || (0, u.warn)(`Timer has not been started for ${J}`), this.times.push({
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
          function x(at, {
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
            return at.startsWith("rgb(") ? at.slice(4, -1).split(",").map((J) => parseInt(J)) : at.startsWith("rgba(") ? at.slice(5, -1).split(",").map((J) => parseInt(J)).slice(0, 3) : ((0, u.warn)(`Not a valid color format: "${at}"`), [0, 0, 0]);
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
          function M(at) {
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
              } = at, Wt = u.FeatureTest.isCSSRoundSupported, Nt = `var(--scale-factor) * ${xt}px`, Ht = `var(--scale-factor) * ${Ot}px`, $t = Wt ? `round(${Nt}, 1px)` : `calc(${Nt})`, Gt = Wt ? `round(${Ht}, 1px)` : `calc(${Ht})`;
              !rt || J.rotation % 180 === 0 ? (jt.width = $t, jt.height = Gt) : (jt.width = Gt, jt.height = $t);
            }
            dt && at.setAttribute("data-main-rotation", J.rotation);
          }
        },
        /* 7 */
        /***/
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.BaseStandardFontDataFactory = e.BaseSVGFactory = e.BaseFilterFactory = e.BaseCanvasFactory = e.BaseCMapReaderFactory = void 0;
          var n = C(1);
          class u {
            constructor() {
              this.constructor === u && (0, n.unreachable)("Cannot initialize BaseFilterFactory.");
            }
            addFilter(r) {
              return "none";
            }
            addHCMFilter(r, I) {
              return "none";
            }
            addHighlightHCMFilter(r, I, k, S) {
              return "none";
            }
            destroy(r = !1) {
            }
          }
          e.BaseFilterFactory = u;
          class $ {
            constructor() {
              this.constructor === $ && (0, n.unreachable)("Cannot initialize BaseCanvasFactory.");
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
          e.BaseCanvasFactory = $;
          class V {
            constructor({
              baseUrl: r = null,
              isCompressed: I = !0
            }) {
              this.constructor === V && (0, n.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = r, this.isCompressed = I;
            }
            async fetch({
              name: r
            }) {
              if (!this.baseUrl)
                throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
              if (!r)
                throw new Error("CMap name must be specified.");
              const I = this.baseUrl + r + (this.isCompressed ? ".bcmap" : ""), k = this.isCompressed ? n.CMapCompressionType.BINARY : n.CMapCompressionType.NONE;
              return this._fetchData(I, k).catch((S) => {
                throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${I}`);
              });
            }
            _fetchData(r, I) {
              (0, n.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          e.BaseCMapReaderFactory = V;
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
          class c {
            constructor() {
              this.constructor === c && (0, n.unreachable)("Cannot initialize BaseSVGFactory.");
            }
            create(r, I, k = !1) {
              if (r <= 0 || I <= 0)
                throw new Error("Invalid SVG dimensions");
              const S = this._createSVG("svg:svg");
              return S.setAttribute("version", "1.1"), k || (S.setAttribute("width", `${r}px`), S.setAttribute("height", `${I}px`)), S.setAttribute("preserveAspectRatio", "none"), S.setAttribute("viewBox", `0 0 ${r} ${I}`), S;
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
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.MurmurHash3_64 = void 0;
          var n = C(1);
          const u = 3285377520, $ = 4294901760, V = 65535;
          class F {
            constructor(d) {
              this.h1 = d ? d & 4294967295 : u, this.h2 = d ? d & 4294967295 : u;
            }
            update(d) {
              let r, I;
              if (typeof d == "string") {
                r = new Uint8Array(d.length * 2), I = 0;
                for (let E = 0, _ = d.length; E < _; E++) {
                  const o = d.charCodeAt(E);
                  o <= 255 ? r[I++] = o : (r[I++] = o >>> 8, r[I++] = o & 255);
                }
              } else if ((0, n.isArrayBuffer)(d))
                r = d.slice(), I = r.byteLength;
              else
                throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
              const k = I >> 2, S = I - k * 4, h = new Uint32Array(r.buffer, 0, k);
              let p = 0, f = 0, y = this.h1, b = this.h2;
              const g = 3432918353, w = 461845907, s = g & V, i = w & V;
              for (let E = 0; E < k; E++)
                E & 1 ? (p = h[E], p = p * g & $ | p * s & V, p = p << 15 | p >>> 17, p = p * w & $ | p * i & V, y ^= p, y = y << 13 | y >>> 19, y = y * 5 + 3864292196) : (f = h[E], f = f * g & $ | f * s & V, f = f << 15 | f >>> 17, f = f * w & $ | f * i & V, b ^= f, b = b << 13 | b >>> 19, b = b * 5 + 3864292196);
              switch (p = 0, S) {
                case 3:
                  p ^= r[k * 4 + 2] << 16;
                case 2:
                  p ^= r[k * 4 + 1] << 8;
                case 1:
                  p ^= r[k * 4], p = p * g & $ | p * s & V, p = p << 15 | p >>> 17, p = p * w & $ | p * i & V, k & 1 ? y ^= p : b ^= p;
              }
              this.h1 = y, this.h2 = b;
            }
            hexdigest() {
              let d = this.h1, r = this.h2;
              return d ^= r >>> 1, d = d * 3981806797 & $ | d * 36045 & V, r = r * 4283543511 & $ | ((r << 16 | d >>> 16) * 2950163797 & $) >>> 16, d ^= r >>> 1, d = d * 444984403 & $ | d * 60499 & V, r = r * 3301882366 & $ | ((r << 16 | d >>> 16) * 3120437893 & $) >>> 16, d ^= r >>> 1, (d >>> 0).toString(16).padStart(8, "0") + (r >>> 0).toString(16).padStart(8, "0");
            }
          }
          e.MurmurHash3_64 = F;
        },
        /* 9 */
        /***/
        (A, e, C) => {
          var V;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.FontLoader = e.FontFaceObject = void 0;
          var n = C(1);
          class u {
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
                    style: I
                  } = c, k = new FontFace(d, r, I);
                  this.addNativeFontFace(k);
                  try {
                    await k.load(), t(this, V).add(d);
                  } catch {
                    (0, n.warn)(`Cannot load system font: ${c.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(k);
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
                  } catch (I) {
                    throw (0, n.warn)(`Failed to load font '${r.family}': '${I}'.`), c.disableFontFace = !0, I;
                  }
                }
                return;
              }
              const d = c.createFontFaceRule();
              if (d) {
                if (this.insertRule(d), this.isSyncFontLoadingSupported)
                  return;
                await new Promise((r) => {
                  const I = this._queueLoadingCallback(r);
                  this._prepareFontLoadEvent(c, I);
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
                callback: c
              };
              return r.push(I), I;
            }
            get _loadTestFont() {
              const c = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
              return (0, n.shadow)(this, "_loadTestFont", c);
            }
            _prepareFontLoadEvent(c, d) {
              function r(P, Y) {
                return P.charCodeAt(Y) << 24 | P.charCodeAt(Y + 1) << 16 | P.charCodeAt(Y + 2) << 8 | P.charCodeAt(Y + 3) & 255;
              }
              function I(P, Y, tt, M) {
                const K = P.substring(0, Y), Z = P.substring(Y + tt);
                return K + M + Z;
              }
              let k, S;
              const h = this._document.createElement("canvas");
              h.width = 1, h.height = 1;
              const p = h.getContext("2d");
              let f = 0;
              function y(P, Y) {
                if (++f > 30) {
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
              g = I(g, 976, b.length, b);
              const s = 16, i = 1482184792;
              let E = r(g, s);
              for (k = 0, S = b.length - 3; k < S; k += 4)
                E = E - i + r(b, k) | 0;
              k < b.length && (E = E - i + r(b + "XXX", k) | 0), g = I(g, s, 4, (0, n.string32)(E));
              const _ = `url(data:font/opentype;base64,${btoa(g)});`, o = `@font-face {font-family:"${b}";src:${_}}`;
              this.insertRule(o);
              const x = this._document.createElement("div");
              x.style.visibility = "hidden", x.style.width = x.style.height = "10px", x.style.position = "absolute", x.style.top = x.style.left = "0px";
              for (const P of [c.loadedName, b]) {
                const Y = this._document.createElement("span");
                Y.textContent = "Hi", Y.style.fontFamily = P, x.append(Y);
              }
              this._document.body.append(x), y(b, () => {
                x.remove(), d.complete();
              });
            }
          }
          V = new WeakMap(), e.FontLoader = u;
          class $ {
            constructor(c, {
              isEvalSupported: d = !0,
              disableFontFace: r = !1,
              ignoreErrors: I = !1,
              inspectFont: k = null
            }) {
              this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
              for (const S in c)
                this[S] = c[S];
              this.isEvalSupported = d !== !1, this.disableFontFace = r === !0, this.ignoreErrors = I === !0, this._inspectFont = k;
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
              var I;
              if (!this.data || this.disableFontFace)
                return null;
              const c = (0, n.bytesToString)(this.data), d = `url(data:${this.mimetype};base64,${btoa(c)});`;
              let r;
              if (!this.cssFontInfo)
                r = `@font-face {font-family:"${this.loadedName}";src:${d}}`;
              else {
                let k = `font-weight: ${this.cssFontInfo.fontWeight};`;
                this.cssFontInfo.italicAngle && (k += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), r = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${k}src:${d}}`;
              }
              return (I = this._inspectFont) == null || I.call(this, this, d), r;
            }
            getPathGenerator(c, d) {
              if (this.compiledGlyphs[d] !== void 0)
                return this.compiledGlyphs[d];
              let r;
              try {
                r = c.get(this.loadedName + "_path_" + d);
              } catch (I) {
                if (!this.ignoreErrors)
                  throw I;
                return (0, n.warn)(`getPathGenerator - ignoring character: "${I}".`), this.compiledGlyphs[d] = function(k, S) {
                };
              }
              if (this.isEvalSupported && n.FeatureTest.isEvalSupported) {
                const I = [];
                for (const k of r) {
                  const S = k.args !== void 0 ? k.args.join(",") : "";
                  I.push("c.", k.cmd, "(", S, `);
`);
                }
                return this.compiledGlyphs[d] = new Function("c", "size", I.join(""));
              }
              return this.compiledGlyphs[d] = function(I, k) {
                for (const S of r)
                  S.cmd === "scale" && (S.args = [k, -k]), I[S.cmd].apply(I, S.args);
              };
            }
          }
          e.FontFaceObject = $;
        },
        /* 10 */
        /***/
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.NodeStandardFontDataFactory = e.NodeFilterFactory = e.NodeCanvasFactory = e.NodeCMapReaderFactory = void 0;
          var n = C(7);
          C(1);
          const u = function(d) {
            return new Promise((r, I) => {
              require$$5.readFile(d, (S, h) => {
                if (S || !h) {
                  I(new Error(S));
                  return;
                }
                r(new Uint8Array(h));
              });
            });
          };
          class $ extends n.BaseFilterFactory {
          }
          e.NodeFilterFactory = $;
          class V extends n.BaseCanvasFactory {
            _createCanvas(r, I) {
              return require$$5.createCanvas(r, I);
            }
          }
          e.NodeCanvasFactory = V;
          class F extends n.BaseCMapReaderFactory {
            _fetchData(r, I) {
              return u(r).then((k) => ({
                cMapData: k,
                compressionType: I
              }));
            }
          }
          e.NodeCMapReaderFactory = F;
          class c extends n.BaseStandardFontDataFactory {
            _fetchData(r) {
              return u(r);
            }
          }
          e.NodeStandardFontDataFactory = c;
        },
        /* 11 */
        /***/
        (A, e, C) => {
          var v, ti, D, ei;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.CanvasGraphics = void 0;
          var n = C(1), u = C(6), $ = C(12), V = C(13);
          const F = 16, c = 100, d = 4096, r = 15, I = 10, k = 1e3, S = 16;
          function h(L, a) {
            if (L._removeMirroring)
              throw new Error("Context is already forwarding operations.");
            L.__originalSave = L.save, L.__originalRestore = L.restore, L.__originalRotate = L.rotate, L.__originalScale = L.scale, L.__originalTranslate = L.translate, L.__originalTransform = L.transform, L.__originalSetTransform = L.setTransform, L.__originalResetTransform = L.resetTransform, L.__originalClip = L.clip, L.__originalMoveTo = L.moveTo, L.__originalLineTo = L.lineTo, L.__originalBezierCurveTo = L.bezierCurveTo, L.__originalRect = L.rect, L.__originalClosePath = L.closePath, L.__originalBeginPath = L.beginPath, L._removeMirroring = () => {
              L.save = L.__originalSave, L.restore = L.__originalRestore, L.rotate = L.__originalRotate, L.scale = L.__originalScale, L.translate = L.__originalTranslate, L.transform = L.__originalTransform, L.setTransform = L.__originalSetTransform, L.resetTransform = L.__originalResetTransform, L.clip = L.__originalClip, L.moveTo = L.__originalMoveTo, L.lineTo = L.__originalLineTo, L.bezierCurveTo = L.__originalBezierCurveTo, L.rect = L.__originalRect, L.closePath = L.__originalClosePath, L.beginPath = L.__originalBeginPath, delete L._removeMirroring;
            }, L.save = function() {
              a.save(), this.__originalSave();
            }, L.restore = function() {
              a.restore(), this.__originalRestore();
            }, L.translate = function(R, X) {
              a.translate(R, X), this.__originalTranslate(R, X);
            }, L.scale = function(R, X) {
              a.scale(R, X), this.__originalScale(R, X);
            }, L.transform = function(R, X, W, nt, st, ut) {
              a.transform(R, X, W, nt, st, ut), this.__originalTransform(R, X, W, nt, st, ut);
            }, L.setTransform = function(R, X, W, nt, st, ut) {
              a.setTransform(R, X, W, nt, st, ut), this.__originalSetTransform(R, X, W, nt, st, ut);
            }, L.resetTransform = function() {
              a.resetTransform(), this.__originalResetTransform();
            }, L.rotate = function(R) {
              a.rotate(R), this.__originalRotate(R);
            }, L.clip = function(R) {
              a.clip(R), this.__originalClip(R);
            }, L.moveTo = function(l, R) {
              a.moveTo(l, R), this.__originalMoveTo(l, R);
            }, L.lineTo = function(l, R) {
              a.lineTo(l, R), this.__originalLineTo(l, R);
            }, L.bezierCurveTo = function(l, R, X, W, nt, st) {
              a.bezierCurveTo(l, R, X, W, nt, st), this.__originalBezierCurveTo(l, R, X, W, nt, st);
            }, L.rect = function(l, R, X, W) {
              a.rect(l, R, X, W), this.__originalRect(l, R, X, W);
            }, L.closePath = function() {
              a.closePath(), this.__originalClosePath();
            }, L.beginPath = function() {
              a.beginPath(), this.__originalBeginPath();
            };
          }
          class p {
            constructor(a) {
              this.canvasFactory = a, this.cache = /* @__PURE__ */ Object.create(null);
            }
            getCanvas(a, l, R) {
              let X;
              return this.cache[a] !== void 0 ? (X = this.cache[a], this.canvasFactory.reset(X, l, R)) : (X = this.canvasFactory.create(l, R), this.cache[a] = X), X;
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
          function f(L, a, l, R, X, W, nt, st, ut, wt) {
            const [yt, Et, ot, At, St, Rt] = (0, u.getCurrentTransform)(L);
            if (Et === 0 && ot === 0) {
              const Ut = nt * yt + St, at = Math.round(Ut), J = st * At + Rt, rt = Math.round(J), dt = (nt + ut) * yt + St, xt = Math.abs(Math.round(dt) - at) || 1, Ot = (st + wt) * At + Rt, jt = Math.abs(Math.round(Ot) - rt) || 1;
              return L.setTransform(Math.sign(yt), 0, 0, Math.sign(At), at, rt), L.drawImage(a, l, R, X, W, 0, 0, xt, jt), L.setTransform(yt, Et, ot, At, St, Rt), [xt, jt];
            }
            if (yt === 0 && At === 0) {
              const Ut = st * ot + St, at = Math.round(Ut), J = nt * Et + Rt, rt = Math.round(J), dt = (st + wt) * ot + St, xt = Math.abs(Math.round(dt) - at) || 1, Ot = (nt + ut) * Et + Rt, jt = Math.abs(Math.round(Ot) - rt) || 1;
              return L.setTransform(0, Math.sign(Et), Math.sign(ot), 0, at, rt), L.drawImage(a, l, R, X, W, 0, 0, jt, xt), L.setTransform(yt, Et, ot, At, St, Rt), [jt, xt];
            }
            L.drawImage(a, l, R, X, W, nt, st, ut, wt);
            const Bt = Math.hypot(yt, Et), kt = Math.hypot(ot, At);
            return [Bt * ut, kt * wt];
          }
          function y(L) {
            const {
              width: a,
              height: l
            } = L;
            if (a > k || l > k)
              return null;
            const R = 1e3, X = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), W = a + 1;
            let nt = new Uint8Array(W * (l + 1)), st, ut, wt;
            const yt = a + 7 & -8;
            let Et = new Uint8Array(yt * l), ot = 0;
            for (const kt of L.data) {
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
                kt = (kt >> 2) + (Et[ot + 1] ? 4 : 0) + (Et[ot - yt + 1] ? 8 : 0), X[kt] && (nt[wt + ut] = X[kt], ++At), ot++;
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
              const R = n.Util.applyTransform(l, a), X = n.Util.applyTransform(l.slice(2), a);
              this.minX = Math.min(this.minX, R[0], X[0]), this.minY = Math.min(this.minY, R[1], X[1]), this.maxX = Math.max(this.maxX, R[0], X[0]), this.maxY = Math.max(this.maxY, R[1], X[1]);
            }
            updateScalingPathMinMax(a, l) {
              n.Util.scaleMinMax(a, l), this.minX = Math.min(this.minX, l[0]), this.maxX = Math.max(this.maxX, l[1]), this.minY = Math.min(this.minY, l[2]), this.maxY = Math.max(this.maxY, l[3]);
            }
            updateCurvePathMinMax(a, l, R, X, W, nt, st, ut, wt, yt) {
              const Et = n.Util.bezierBoundingBox(l, R, X, W, nt, st, ut, wt);
              if (yt) {
                yt[0] = Math.min(yt[0], Et[0], Et[2]), yt[1] = Math.max(yt[1], Et[0], Et[2]), yt[2] = Math.min(yt[2], Et[1], Et[3]), yt[3] = Math.max(yt[3], Et[1], Et[3]);
                return;
              }
              this.updateRectMinMax(a, Et);
            }
            getPathBoundingBox(a = $.PathType.FILL, l = null) {
              const R = [this.minX, this.minY, this.maxX, this.maxY];
              if (a === $.PathType.STROKE) {
                l || (0, n.unreachable)("Stroke bounding box must include transform.");
                const X = n.Util.singularValueDecompose2dScale(l), W = X[0] * this.lineWidth / 2, nt = X[1] * this.lineWidth / 2;
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
            getClippedPathBoundingBox(a = $.PathType.FILL, l = null) {
              return n.Util.intersect(this.clipBox, this.getPathBoundingBox(a, l));
            }
          }
          function g(L, a) {
            if (typeof ImageData < "u" && a instanceof ImageData) {
              L.putImageData(a, 0, 0);
              return;
            }
            const l = a.height, R = a.width, X = l % S, W = (l - X) / S, nt = X === 0 ? W : W + 1, st = L.createImageData(R, S);
            let ut = 0, wt;
            const yt = a.data, Et = st.data;
            let ot, At, St, Rt;
            if (a.kind === n.ImageKind.GRAYSCALE_1BPP) {
              const Bt = yt.byteLength, kt = new Uint32Array(Et.buffer, 0, Et.byteLength >> 2), Ut = kt.length, at = R + 7 >> 3, J = 4294967295, rt = n.FeatureTest.isLittleEndian ? 4278190080 : 255;
              for (ot = 0; ot < nt; ot++) {
                for (St = ot < W ? S : X, wt = 0, At = 0; At < St; At++) {
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
                L.putImageData(st, 0, ot * S);
              }
            } else if (a.kind === n.ImageKind.RGBA_32BPP) {
              for (At = 0, Rt = R * S * 4, ot = 0; ot < W; ot++)
                Et.set(yt.subarray(ut, ut + Rt)), ut += Rt, L.putImageData(st, 0, At), At += S;
              ot < nt && (Rt = R * X * 4, Et.set(yt.subarray(ut, ut + Rt)), L.putImageData(st, 0, At));
            } else if (a.kind === n.ImageKind.RGB_24BPP)
              for (St = S, Rt = R * St, ot = 0; ot < nt; ot++) {
                for (ot >= W && (St = X, Rt = R * St), wt = 0, At = Rt; At--; )
                  Et[wt++] = yt[ut++], Et[wt++] = yt[ut++], Et[wt++] = yt[ut++], Et[wt++] = 255;
                L.putImageData(st, 0, ot * S);
              }
            else
              throw new Error(`bad image kind: ${a.kind}`);
          }
          function w(L, a) {
            if (a.bitmap) {
              L.drawImage(a.bitmap, 0, 0);
              return;
            }
            const l = a.height, R = a.width, X = l % S, W = (l - X) / S, nt = X === 0 ? W : W + 1, st = L.createImageData(R, S);
            let ut = 0;
            const wt = a.data, yt = st.data;
            for (let Et = 0; Et < nt; Et++) {
              const ot = Et < W ? S : X;
              ({
                srcPos: ut
              } = (0, V.convertBlackAndWhiteToRGBA)({
                src: wt,
                srcPos: ut,
                dest: yt,
                width: R,
                height: ot,
                nonBlackColor: 0
              })), L.putImageData(st, 0, Et * S);
            }
          }
          function s(L, a) {
            const l = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
            for (const R of l)
              L[R] !== void 0 && (a[R] = L[R]);
            L.setLineDash !== void 0 && (a.setLineDash(L.getLineDash()), a.lineDashOffset = L.lineDashOffset);
          }
          function i(L) {
            if (L.strokeStyle = L.fillStyle = "#000000", L.fillRule = "nonzero", L.globalAlpha = 1, L.lineWidth = 1, L.lineCap = "butt", L.lineJoin = "miter", L.miterLimit = 10, L.globalCompositeOperation = "source-over", L.font = "10px sans-serif", L.setLineDash !== void 0 && (L.setLineDash([]), L.lineDashOffset = 0), !n.isNodeJS) {
              const {
                filter: a
              } = L;
              a !== "none" && a !== "" && (L.filter = "none");
            }
          }
          function E(L, a, l, R) {
            const X = L.length;
            for (let W = 3; W < X; W += 4) {
              const nt = L[W];
              if (nt === 0)
                L[W - 3] = a, L[W - 2] = l, L[W - 1] = R;
              else if (nt < 255) {
                const st = 255 - nt;
                L[W - 3] = L[W - 3] * nt + a * st >> 8, L[W - 2] = L[W - 2] * nt + l * st >> 8, L[W - 1] = L[W - 1] * nt + R * st >> 8;
              }
            }
          }
          function _(L, a, l) {
            const R = L.length, X = 1 / 255;
            for (let W = 3; W < R; W += 4) {
              const nt = l ? l[L[W]] : L[W];
              a[W] = a[W] * nt * X | 0;
            }
          }
          function o(L, a, l) {
            const R = L.length;
            for (let X = 3; X < R; X += 4) {
              const W = L[X - 3] * 77 + L[X - 2] * 152 + L[X - 1] * 28;
              a[X] = l ? a[X] * l[W >> 8] >> 8 : a[X] * W >> 16;
            }
          }
          function x(L, a, l, R, X, W, nt, st, ut, wt, yt) {
            const Et = !!W, ot = Et ? W[0] : 0, At = Et ? W[1] : 0, St = Et ? W[2] : 0, Rt = X === "Luminosity" ? o : _, kt = Math.min(R, Math.ceil(1048576 / l));
            for (let Ut = 0; Ut < R; Ut += kt) {
              const at = Math.min(kt, R - Ut), J = L.getImageData(st - wt, Ut + (ut - yt), l, at), rt = a.getImageData(st, Ut + ut, l, at);
              Et && E(J.data, ot, At, St), Rt(J.data, rt.data, nt), a.putImageData(rt, st, Ut + ut);
            }
          }
          function P(L, a, l, R) {
            const X = R[0], W = R[1], nt = R[2] - X, st = R[3] - W;
            nt === 0 || st === 0 || (x(a.context, l, nt, st, a.subtype, a.backdrop, a.transferMap, X, W, a.offsetX, a.offsetY), L.save(), L.globalAlpha = 1, L.globalCompositeOperation = "source-over", L.setTransform(1, 0, 0, 1, 0, 0), L.drawImage(l.canvas, 0, 0), L.restore());
          }
          function Y(L, a) {
            const l = n.Util.singularValueDecompose2dScale(L);
            l[0] = Math.fround(l[0]), l[1] = Math.fround(l[1]);
            const R = Math.fround((globalThis.devicePixelRatio || 1) * u.PixelsPerInch.PDF_TO_CSS_UNITS);
            return a !== void 0 ? a : l[0] <= R || l[1] <= R;
          }
          const tt = ["butt", "round", "square"], M = ["miter", "round", "bevel"], K = {}, Z = {}, _t = class _t {
            constructor(a, l, R, X, W, {
              optionalContentConfig: nt,
              markedContentStack: st = null
            }, ut, wt) {
              N(this, v);
              N(this, D);
              this.ctx = a, this.current = new b(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = l, this.objs = R, this.canvasFactory = X, this.filterFactory = W, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = st || [], this.optionalContentConfig = nt, this.cachedCanvases = new p(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = ut, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = wt, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
            }
            getObject(a, l = null) {
              return typeof a == "string" ? a.startsWith("g_") ? this.commonObjs.get(a) : this.objs.get(a) : l;
            }
            beginDrawing({
              transform: a,
              viewport: l,
              transparency: R = !1,
              background: X = null
            }) {
              const W = this.ctx.canvas.width, nt = this.ctx.canvas.height, st = this.ctx.fillStyle;
              if (this.ctx.fillStyle = X || "#ffffff", this.ctx.fillRect(0, 0, W, nt), this.ctx.fillStyle = st, R) {
                const ut = this.cachedCanvases.getCanvas("transparent", W, nt);
                this.compositeCtx = this.ctx, this.transparentCanvas = ut.canvas, this.ctx = ut.context, this.ctx.save(), this.ctx.transform(...(0, u.getCurrentTransform)(this.compositeCtx));
              }
              this.ctx.save(), i(this.ctx), a && (this.ctx.transform(...a), this.outputScaleX = a[0], this.outputScaleY = a[0]), this.ctx.transform(...l.transform), this.viewportScale = l.scale, this.baseTransform = (0, u.getCurrentTransform)(this.ctx);
            }
            executeOperatorList(a, l, R, X) {
              const W = a.argsArray, nt = a.fnArray;
              let st = l || 0;
              const ut = W.length;
              if (ut === st)
                return st;
              const wt = ut - st > I && typeof R == "function", yt = wt ? Date.now() + r : 0;
              let Et = 0;
              const ot = this.commonObjs, At = this.objs;
              let St;
              for (; ; ) {
                if (X !== void 0 && st === X.nextBreakPoint)
                  return X.breakIt(st, R), st;
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
                if (wt && ++Et > I) {
                  if (Date.now() > yt)
                    return R(), st;
                  Et = 0;
                }
              }
            }
            endDrawing() {
              q(this, v, ti).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
              for (const a of this._cachedBitmapsMap.values()) {
                for (const l of a.values())
                  typeof HTMLCanvasElement < "u" && l instanceof HTMLCanvasElement && (l.width = l.height = 0);
                a.clear();
              }
              this._cachedBitmapsMap.clear(), q(this, D, ei).call(this);
            }
            _scaleImage(a, l) {
              const R = a.width, X = a.height;
              let W = Math.max(Math.hypot(l[0], l[1]), 1), nt = Math.max(Math.hypot(l[2], l[3]), 1), st = R, ut = X, wt = "prescale1", yt, Et;
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
                height: X
              } = a, W = this.current.fillColor, nt = this.current.patternFill, st = (0, u.getCurrentTransform)(l);
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
              yt || (Et = this.cachedCanvases.getCanvas("maskCanvas", R, X), w(Et.context, a));
              let ot = n.Util.transform(st, [1 / R, 0, 0, -1 / X, 0, 0]);
              ot = n.Util.transform(ot, [1, 0, 0, 1, 0, -X]);
              const At = n.Util.applyTransform([0, 0], ot), St = n.Util.applyTransform([R, X], ot), Rt = n.Util.normalizeRect([At[0], At[1], St[0], St[1]]), Bt = Math.round(Rt[2] - Rt[0]) || 1, kt = Math.round(Rt[3] - Rt[1]) || 1, Ut = this.cachedCanvases.getCanvas("fillCanvas", Bt, kt), at = Ut.context, J = Math.min(At[0], St[0]), rt = Math.min(At[1], St[1]);
              at.translate(-J, -rt), at.transform(...ot), yt || (yt = this._scaleImage(Et.canvas, (0, u.getCurrentTransformInverse)(at)), yt = yt.img, ut && nt && ut.set(wt, yt)), at.imageSmoothingEnabled = Y((0, u.getCurrentTransform)(at), a.interpolate), f(at, yt, 0, 0, yt.width, yt.height, 0, 0, R, X), at.globalCompositeOperation = "source-in";
              const dt = n.Util.transform((0, u.getCurrentTransformInverse)(at), [1, 0, 0, 1, -J, -rt]);
              return at.fillStyle = nt ? W.getPattern(l, this, dt, $.PathType.FILL) : W, at.fillRect(0, 0, R, X), ut && !nt && (this.cachedCanvases.delete("fillCanvas"), ut.set(wt, Ut.canvas)), {
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
              this.ctx.lineJoin = M[a];
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
              const a = this.ctx.canvas.width, l = this.ctx.canvas.height, R = "smaskGroupAt" + this.groupLevel, X = this.cachedCanvases.getCanvas(R, a, l);
              this.suspendedCtx = this.ctx, this.ctx = X.context;
              const W = this.ctx;
              W.setTransform(...(0, u.getCurrentTransform)(this.suspendedCtx)), s(this.suspendedCtx, W), h(W, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
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
            transform(a, l, R, X, W, nt) {
              this.ctx.transform(a, l, R, X, W, nt), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
            }
            constructPath(a, l, R) {
              const X = this.ctx, W = this.current;
              let nt = W.x, st = W.y, ut, wt;
              const yt = (0, u.getCurrentTransform)(X), Et = yt[0] === 0 && yt[3] === 0 || yt[1] === 0 && yt[2] === 0, ot = Et ? R.slice(0) : null;
              for (let At = 0, St = 0, Rt = a.length; At < Rt; At++)
                switch (a[At] | 0) {
                  case n.OPS.rectangle:
                    nt = l[St++], st = l[St++];
                    const Bt = l[St++], kt = l[St++], Ut = nt + Bt, at = st + kt;
                    X.moveTo(nt, st), Bt === 0 || kt === 0 ? X.lineTo(Ut, at) : (X.lineTo(Ut, st), X.lineTo(Ut, at), X.lineTo(nt, at)), Et || W.updateRectMinMax(yt, [nt, st, Ut, at]), X.closePath();
                    break;
                  case n.OPS.moveTo:
                    nt = l[St++], st = l[St++], X.moveTo(nt, st), Et || W.updatePathMinMax(yt, nt, st);
                    break;
                  case n.OPS.lineTo:
                    nt = l[St++], st = l[St++], X.lineTo(nt, st), Et || W.updatePathMinMax(yt, nt, st);
                    break;
                  case n.OPS.curveTo:
                    ut = nt, wt = st, nt = l[St + 4], st = l[St + 5], X.bezierCurveTo(l[St], l[St + 1], l[St + 2], l[St + 3], nt, st), W.updateCurvePathMinMax(yt, ut, wt, l[St], l[St + 1], l[St + 2], l[St + 3], nt, st, ot), St += 6;
                    break;
                  case n.OPS.curveTo2:
                    ut = nt, wt = st, X.bezierCurveTo(nt, st, l[St], l[St + 1], l[St + 2], l[St + 3]), W.updateCurvePathMinMax(yt, ut, wt, nt, st, l[St], l[St + 1], l[St + 2], l[St + 3], ot), nt = l[St + 2], st = l[St + 3], St += 4;
                    break;
                  case n.OPS.curveTo3:
                    ut = nt, wt = st, nt = l[St + 2], st = l[St + 3], X.bezierCurveTo(l[St], l[St + 1], nt, st, nt, st), W.updateCurvePathMinMax(yt, ut, wt, l[St], l[St + 1], nt, st, nt, st, ot), St += 4;
                    break;
                  case n.OPS.closePath:
                    X.closePath();
                    break;
                }
              Et && W.updateScalingPathMinMax(yt, ot), W.setCurrentPoint(nt, st);
            }
            closePath() {
              this.ctx.closePath();
            }
            stroke(a = !0) {
              const l = this.ctx, R = this.current.strokeColor;
              l.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof R == "object" && (R != null && R.getPattern) ? (l.save(), l.strokeStyle = R.getPattern(l, this, (0, u.getCurrentTransformInverse)(l), $.PathType.STROKE), this.rescaleAndStroke(!1), l.restore()) : this.rescaleAndStroke(!0)), a && this.consumePath(this.current.getClippedPathBoundingBox()), l.globalAlpha = this.current.fillAlpha;
            }
            closeStroke() {
              this.closePath(), this.stroke();
            }
            fill(a = !0) {
              const l = this.ctx, R = this.current.fillColor, X = this.current.patternFill;
              let W = !1;
              X && (l.save(), l.fillStyle = R.getPattern(l, this, (0, u.getCurrentTransformInverse)(l), $.PathType.FILL), W = !0);
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
              const R = this.commonObjs.get(a), X = this.current;
              if (!R)
                throw new Error(`Can't find font for ${a}`);
              if (X.fontMatrix = R.fontMatrix || n.FONT_IDENTITY_MATRIX, (X.fontMatrix[0] === 0 || X.fontMatrix[3] === 0) && (0, n.warn)("Invalid font matrix for font " + a), l < 0 ? (l = -l, X.fontDirection = -1) : X.fontDirection = 1, this.current.font = R, this.current.fontSize = l, R.isType3Font)
                return;
              const W = R.loadedName || "sans-serif", nt = ((yt = R.systemFontInfo) == null ? void 0 : yt.css) || `"${W}", ${R.fallbackName}`;
              let st = "normal";
              R.black ? st = "900" : R.bold && (st = "bold");
              const ut = R.italic ? "italic" : "normal";
              let wt = l;
              l < F ? wt = F : l > c && (wt = c), this.current.fontSizeScale = l / wt, this.ctx.font = `${ut} ${st} ${wt}px ${nt}`;
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
            setTextMatrix(a, l, R, X, W, nt) {
              this.current.textMatrix = [a, l, R, X, W, nt], this.current.textMatrixScale = Math.hypot(a, l), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            paintChar(a, l, R, X) {
              const W = this.ctx, nt = this.current, st = nt.font, ut = nt.textRenderingMode, wt = nt.fontSize / nt.fontSizeScale, yt = ut & n.TextRenderingMode.FILL_STROKE_MASK, Et = !!(ut & n.TextRenderingMode.ADD_TO_PATH_FLAG), ot = nt.patternFill && !st.missingFile;
              let At;
              (st.disableFontFace || Et || ot) && (At = st.getPathGenerator(this.commonObjs, a)), st.disableFontFace || ot ? (W.save(), W.translate(l, R), W.beginPath(), At(W, wt), X && W.setTransform(...X), (yt === n.TextRenderingMode.FILL || yt === n.TextRenderingMode.FILL_STROKE) && W.fill(), (yt === n.TextRenderingMode.STROKE || yt === n.TextRenderingMode.FILL_STROKE) && W.stroke(), W.restore()) : ((yt === n.TextRenderingMode.FILL || yt === n.TextRenderingMode.FILL_STROKE) && W.fillText(a, l, R), (yt === n.TextRenderingMode.STROKE || yt === n.TextRenderingMode.FILL_STROKE) && W.strokeText(a, l, R)), Et && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                transform: (0, u.getCurrentTransform)(W),
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
              for (let X = 3; X < l.length; X += 4)
                if (l[X] > 0 && l[X] < 255) {
                  R = !0;
                  break;
                }
              return (0, n.shadow)(this, "isFontSubpixelAAEnabled", R);
            }
            showText(a) {
              const l = this.current, R = l.font;
              if (R.isType3Font)
                return this.showType3Text(a);
              const X = l.fontSize;
              if (X === 0)
                return;
              const W = this.ctx, nt = l.fontSizeScale, st = l.charSpacing, ut = l.wordSpacing, wt = l.fontDirection, yt = l.textHScale * wt, Et = a.length, ot = R.vertical, At = ot ? 1 : -1, St = R.defaultVMetrics, Rt = X * l.fontMatrix[0], Bt = l.textRenderingMode === n.TextRenderingMode.FILL && !R.disableFontFace && !l.patternFill;
              W.save(), W.transform(...l.textMatrix), W.translate(l.x, l.y + l.textRise), wt > 0 ? W.scale(yt, -1) : W.scale(yt, 1);
              let kt;
              if (l.patternFill) {
                W.save();
                const dt = l.fillColor.getPattern(W, this, (0, u.getCurrentTransformInverse)(W), $.PathType.FILL);
                kt = (0, u.getCurrentTransform)(W), W.restore(), W.fillStyle = dt;
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
                  J += At * dt * X / 1e3;
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
                  const Ct = W.measureText(jt).width * 1e3 / X * nt;
                  if ($t < Ct && this.isFontSubpixelAAEnabled) {
                    const m = $t / Ct;
                    xt = !0, W.save(), W.scale(m, 1), Nt /= m;
                  } else
                    $t !== Ct && (Nt += ($t - Ct) / 2e3 * X / nt);
                }
                if (this.contentVisible && (dt.isInFont || R.missingFile)) {
                  if (Bt && !Wt)
                    W.fillText(jt, Nt, Ht);
                  else if (this.paintChar(jt, Nt, Ht, kt), Wt) {
                    const Ct = Nt + X * Wt.offset.x / nt, m = Ht - X * Wt.offset.y / nt;
                    this.paintChar(Wt.fontChar, Ct, m, kt);
                  }
                }
                const Gt = ot ? $t * Rt - Ot * wt : $t * Rt + Ot * wt;
                J += Gt, xt && W.restore();
              }
              ot ? l.y -= J : l.x += J * yt, W.restore(), this.compose();
            }
            showType3Text(a) {
              const l = this.ctx, R = this.current, X = R.font, W = R.fontSize, nt = R.fontDirection, st = X.vertical ? 1 : -1, ut = R.charSpacing, wt = R.wordSpacing, yt = R.textHScale * nt, Et = R.fontMatrix || n.FONT_IDENTITY_MATRIX, ot = a.length, At = R.textRenderingMode === n.TextRenderingMode.INVISIBLE;
              let St, Rt, Bt, kt;
              if (!(At || W === 0)) {
                for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, l.save(), l.transform(...R.textMatrix), l.translate(R.x, R.y), l.scale(yt, nt), St = 0; St < ot; ++St) {
                  if (Rt = a[St], typeof Rt == "number") {
                    kt = st * Rt * W / 1e3, this.ctx.translate(kt, 0), R.x += kt * yt;
                    continue;
                  }
                  const Ut = (Rt.isSpace ? wt : 0) + ut, at = X.charProcOperatorList[Rt.operatorListId];
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
            setCharWidthAndBounds(a, l, R, X, W, nt) {
              this.ctx.rect(R, X, W - R, nt - X), this.ctx.clip(), this.endPath();
            }
            getColorN_Pattern(a) {
              let l;
              if (a[0] === "TilingPattern") {
                const R = a[1], X = this.baseTransform || (0, u.getCurrentTransform)(this.ctx), W = {
                  createCanvasGraphics: (nt) => new _t(nt, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                    optionalContentConfig: this.optionalContentConfig,
                    markedContentStack: this.markedContentStack
                  })
                };
                l = new $.TilingPattern(a, R, this.ctx, W, X);
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
              const X = n.Util.makeHexColor(a, l, R);
              this.ctx.strokeStyle = X, this.current.strokeColor = X;
            }
            setFillRGBColor(a, l, R) {
              const X = n.Util.makeHexColor(a, l, R);
              this.ctx.fillStyle = X, this.current.fillColor = X, this.current.patternFill = !1;
            }
            _getPattern(a, l = null) {
              let R;
              return this.cachedPatterns.has(a) ? R = this.cachedPatterns.get(a) : (R = (0, $.getShadingPattern)(this.getObject(a)), this.cachedPatterns.set(a, R)), l && (R.matrix = l), R;
            }
            shadingFill(a) {
              if (!this.contentVisible)
                return;
              const l = this.ctx;
              this.save();
              const R = this._getPattern(a);
              l.fillStyle = R.getPattern(l, this, (0, u.getCurrentTransformInverse)(l), $.PathType.SHADING);
              const X = (0, u.getCurrentTransformInverse)(l);
              if (X) {
                const {
                  width: W,
                  height: nt
                } = l.canvas, [st, ut, wt, yt] = n.Util.getAxialAlignedBoundingBox([0, 0, W, nt], X);
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
              if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(a) && a.length === 6 && this.transform(...a), this.baseTransform = (0, u.getCurrentTransform)(this.ctx), l)) {
                const R = l[2] - l[0], X = l[3] - l[1];
                this.ctx.rect(l[0], l[1], R, X), this.current.updateRectMinMax((0, u.getCurrentTransform)(this.ctx), l), this.clip(), this.endPath();
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
              const R = (0, u.getCurrentTransform)(l);
              if (a.matrix && l.transform(...a.matrix), !a.bbox)
                throw new Error("Bounding box is required.");
              let X = n.Util.getAxialAlignedBoundingBox(a.bbox, (0, u.getCurrentTransform)(l));
              const W = [0, 0, l.canvas.width, l.canvas.height];
              X = n.Util.intersect(X, W) || [0, 0, 0, 0];
              const nt = Math.floor(X[0]), st = Math.floor(X[1]);
              let ut = Math.max(Math.ceil(X[2]) - nt, 1), wt = Math.max(Math.ceil(X[3]) - st, 1), yt = 1, Et = 1;
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
                const X = (0, u.getCurrentTransform)(this.ctx);
                this.restore(), this.ctx.save(), this.ctx.setTransform(...X);
                const W = n.Util.getAxialAlignedBoundingBox([0, 0, l.canvas.width, l.canvas.height], X);
                this.ctx.drawImage(l.canvas, 0, 0), this.ctx.restore(), this.compose(W);
              }
            }
            beginAnnotation(a, l, R, X, W) {
              if (q(this, v, ti).call(this), i(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(l) && l.length === 4) {
                const nt = l[2] - l[0], st = l[3] - l[1];
                if (W && this.annotationCanvasMap) {
                  R = R.slice(), R[4] -= l[0], R[5] -= l[1], l = l.slice(), l[0] = l[1] = 0, l[2] = nt, l[3] = st;
                  const [ut, wt] = n.Util.singularValueDecompose2dScale((0, u.getCurrentTransform)(this.ctx)), {
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
              this.current = new b(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...R), this.transform(...X);
            }
            endAnnotation() {
              this.annotationCanvas && (this.ctx.restore(), q(this, D, ei).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
            }
            paintImageMaskXObject(a) {
              if (!this.contentVisible)
                return;
              const l = a.count;
              a = this.getObject(a.data, a), a.count = l;
              const R = this.ctx, X = this.processingType3;
              if (X && (X.compiled === void 0 && (X.compiled = y(a)), X.compiled)) {
                X.compiled(R);
                return;
              }
              const W = this._createMaskCanvas(a), nt = W.canvas;
              R.save(), R.setTransform(1, 0, 0, 1, 0, 0), R.drawImage(nt, W.offsetX, W.offsetY), R.restore(), this.compose();
            }
            paintImageMaskXObjectRepeat(a, l, R = 0, X = 0, W, nt) {
              if (!this.contentVisible)
                return;
              a = this.getObject(a.data, a);
              const st = this.ctx;
              st.save();
              const ut = (0, u.getCurrentTransform)(st);
              st.transform(l, R, X, W, 0, 0);
              const wt = this._createMaskCanvas(a);
              st.setTransform(1, 0, 0, 1, wt.offsetX - ut[4], wt.offsetY - ut[5]);
              for (let yt = 0, Et = nt.length; yt < Et; yt += 2) {
                const ot = n.Util.transform(ut, [l, R, X, W, nt[yt], nt[yt + 1]]), [At, St] = n.Util.applyTransform([0, 0], ot);
                st.drawImage(wt.canvas, At, St);
              }
              st.restore(), this.compose();
            }
            paintImageMaskXObjectGroup(a) {
              if (!this.contentVisible)
                return;
              const l = this.ctx, R = this.current.fillColor, X = this.current.patternFill;
              for (const W of a) {
                const {
                  data: nt,
                  width: st,
                  height: ut,
                  transform: wt
                } = W, yt = this.cachedCanvases.getCanvas("maskCanvas", st, ut), Et = yt.context;
                Et.save();
                const ot = this.getObject(nt, W);
                w(Et, ot), Et.globalCompositeOperation = "source-in", Et.fillStyle = X ? R.getPattern(Et, this, (0, u.getCurrentTransformInverse)(l), $.PathType.FILL) : R, Et.fillRect(0, 0, st, ut), Et.restore(), l.save(), l.transform(...wt), l.scale(1, -1), f(l, yt.canvas, 0, 0, st, ut, 0, -1, 1, 1), l.restore();
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
            paintImageXObjectRepeat(a, l, R, X) {
              if (!this.contentVisible)
                return;
              const W = this.getObject(a);
              if (!W) {
                (0, n.warn)("Dependent image isn't ready yet");
                return;
              }
              const nt = W.width, st = W.height, ut = [];
              for (let wt = 0, yt = X.length; wt < yt; wt += 2)
                ut.push({
                  transform: [l, 0, 0, R, X[wt], X[wt + 1]],
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
                height: X
              } = a, W = this.cachedCanvases.getCanvas("inlineImage", R, X), nt = W.context;
              return nt.filter = this.current.transferMaps, nt.drawImage(l, 0, 0), nt.filter = "none", W.canvas;
            }
            paintInlineImageXObject(a) {
              if (!this.contentVisible)
                return;
              const l = a.width, R = a.height, X = this.ctx;
              if (this.save(), !n.isNodeJS) {
                const {
                  filter: st
                } = X;
                st !== "none" && st !== "" && (X.filter = "none");
              }
              X.scale(1 / l, -1 / R);
              let W;
              if (a.bitmap)
                W = this.applyTransferMapsToBitmap(a);
              else if (typeof HTMLElement == "function" && a instanceof HTMLElement || !a.data)
                W = a;
              else {
                const ut = this.cachedCanvases.getCanvas("inlineImage", l, R).context;
                g(ut, a), W = this.applyTransferMapsToCanvas(ut);
              }
              const nt = this._scaleImage(W, (0, u.getCurrentTransformInverse)(X));
              X.imageSmoothingEnabled = Y((0, u.getCurrentTransform)(X), a.interpolate), f(X, nt.img, 0, 0, nt.paintWidth, nt.paintHeight, 0, -R, l, R), this.compose(), this.restore();
            }
            paintInlineImageXObjectGroup(a, l) {
              if (!this.contentVisible)
                return;
              const R = this.ctx;
              let X;
              if (a.bitmap)
                X = a.bitmap;
              else {
                const W = a.width, nt = a.height, ut = this.cachedCanvases.getCanvas("inlineImage", W, nt).context;
                g(ut, a), X = this.applyTransferMapsToCanvas(ut);
              }
              for (const W of l)
                R.save(), R.transform(...W.transform), R.scale(1, -1), f(R, X, W.x, W.y, W.w, W.h, 0, -1, 1, 1), R.restore();
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
                const a = (0, u.getCurrentTransform)(this.ctx);
                if (a[1] === 0 && a[2] === 0)
                  this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(a[0]), Math.abs(a[3]));
                else {
                  const l = Math.abs(a[0] * a[3] - a[2] * a[1]), R = Math.hypot(a[0], a[2]), X = Math.hypot(a[1], a[3]);
                  this._cachedGetSinglePixelWidth = Math.max(R, X) / l;
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
                  c: X,
                  d: W
                } = this.ctx.getTransform();
                let nt, st;
                if (R === 0 && X === 0) {
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
                  const ut = Math.abs(l * W - R * X), wt = Math.hypot(l, R), yt = Math.hypot(X, W);
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
              } = this.current, [X, W] = this.getScaleForStroking();
              if (l.lineWidth = R || 1, X === 1 && W === 1) {
                l.stroke();
                return;
              }
              const nt = l.getLineDash();
              if (a && l.save(), l.scale(X, W), nt.length > 0) {
                const st = Math.max(X, W);
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
          for (const L in n.OPS)
            Q.prototype[L] !== void 0 && (Q.prototype[n.OPS[L]] = Q.prototype[L]);
        },
        /* 12 */
        /***/
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.TilingPattern = e.PathType = void 0, e.getShadingPattern = S;
          var n = C(1), u = C(6);
          const $ = {
            FILL: "Fill",
            STROKE: "Stroke",
            SHADING: "Shading"
          };
          e.PathType = $;
          function V(y, b) {
            if (!b)
              return;
            const g = b[2] - b[0], w = b[3] - b[1], s = new Path2D();
            s.rect(b[0], b[1], g, w), y.clip(s);
          }
          class F {
            constructor() {
              this.constructor === F && (0, n.unreachable)("Cannot initialize BaseShadingPattern.");
            }
            getPattern() {
              (0, n.unreachable)("Abstract method `getPattern` called.");
            }
          }
          class c extends F {
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
              if (s === $.STROKE || s === $.FILL) {
                const E = g.current.getClippedPathBoundingBox(s, (0, u.getCurrentTransform)(b)) || [0, 0, 0, 0], _ = Math.ceil(E[2] - E[0]) || 1, o = Math.ceil(E[3] - E[1]) || 1, x = g.cachedCanvases.getCanvas("pattern", _, o, !0), P = x.context;
                P.clearRect(0, 0, P.canvas.width, P.canvas.height), P.beginPath(), P.rect(0, 0, P.canvas.width, P.canvas.height), P.translate(-E[0], -E[1]), w = n.Util.transform(w, [1, 0, 0, 1, E[0], E[1]]), P.transform(...g.baseTransform), this.matrix && P.transform(...this.matrix), V(P, this._bbox), P.fillStyle = this._createGradient(P), P.fill(), i = b.createPattern(x.canvas, "no-repeat");
                const Y = new DOMMatrix(w);
                i.setTransform(Y);
              } else
                V(b, this._bbox), i = this._createGradient(b);
              return i;
            }
          }
          function d(y, b, g, w, s, i, E, _) {
            const o = b.coords, x = b.colors, P = y.data, Y = y.width * 4;
            let tt;
            o[g + 1] > o[w + 1] && (tt = g, g = w, w = tt, tt = i, i = E, E = tt), o[w + 1] > o[s + 1] && (tt = w, w = s, s = tt, tt = E, E = _, _ = tt), o[g + 1] > o[w + 1] && (tt = g, g = w, w = tt, tt = i, i = E, E = tt);
            const M = (o[g] + b.offsetX) * b.scaleX, K = (o[g + 1] + b.offsetY) * b.scaleY, Z = (o[w] + b.offsetX) * b.scaleX, Q = (o[w + 1] + b.offsetY) * b.scaleY, v = (o[s] + b.offsetX) * b.scaleX, j = (o[s + 1] + b.offsetY) * b.scaleY;
            if (K >= j)
              return;
            const D = x[i], lt = x[i + 1], _t = x[i + 2], L = x[E], a = x[E + 1], l = x[E + 2], R = x[_], X = x[_ + 1], W = x[_ + 2], nt = Math.round(K), st = Math.round(j);
            let ut, wt, yt, Et, ot, At, St, Rt;
            for (let Bt = nt; Bt <= st; Bt++) {
              if (Bt < Q) {
                const rt = Bt < K ? 0 : (K - Bt) / (K - Q);
                ut = M - (M - Z) * rt, wt = D - (D - L) * rt, yt = lt - (lt - a) * rt, Et = _t - (_t - l) * rt;
              } else {
                let rt;
                Bt > j ? rt = 1 : Q === j ? rt = 0 : rt = (Q - Bt) / (Q - j), ut = Z - (Z - v) * rt, wt = L - (L - R) * rt, yt = a - (a - X) * rt, Et = l - (l - W) * rt;
              }
              let kt;
              Bt < K ? kt = 0 : Bt > j ? kt = 1 : kt = (K - Bt) / (K - j), ot = M - (M - v) * kt, At = D - (D - R) * kt, St = lt - (lt - X) * kt, Rt = _t - (_t - W) * kt;
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
                const _ = b.verticesPerRow, o = Math.floor(w.length / _) - 1, x = _ - 1;
                for (i = 0; i < o; i++) {
                  let P = i * _;
                  for (let Y = 0; Y < x; Y++, P++)
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
          class I extends F {
            constructor(b) {
              super(), this._coords = b[2], this._colors = b[3], this._figures = b[4], this._bounds = b[5], this._bbox = b[7], this._background = b[8], this.matrix = null;
            }
            _createMeshCanvas(b, g, w) {
              const _ = Math.floor(this._bounds[0]), o = Math.floor(this._bounds[1]), x = Math.ceil(this._bounds[2]) - _, P = Math.ceil(this._bounds[3]) - o, Y = Math.min(Math.ceil(Math.abs(x * b[0] * 1.1)), 3e3), tt = Math.min(Math.ceil(Math.abs(P * b[1] * 1.1)), 3e3), M = x / Y, K = P / tt, Z = {
                coords: this._coords,
                colors: this._colors,
                offsetX: -_,
                offsetY: -o,
                scaleX: 1 / M,
                scaleY: 1 / K
              }, Q = Y + 2 * 2, v = tt + 2 * 2, j = w.getCanvas("mesh", Q, v, !1), D = j.context, lt = D.createImageData(Y, tt);
              if (g) {
                const L = lt.data;
                for (let a = 0, l = L.length; a < l; a += 4)
                  L[a] = g[0], L[a + 1] = g[1], L[a + 2] = g[2], L[a + 3] = 255;
              }
              for (const L of this._figures)
                r(lt, L, Z);
              return D.putImageData(lt, 2, 2), {
                canvas: j.canvas,
                offsetX: _ - 2 * M,
                offsetY: o - 2 * K,
                scaleX: M,
                scaleY: K
              };
            }
            getPattern(b, g, w, s) {
              V(b, this._bbox);
              let i;
              if (s === $.SHADING)
                i = n.Util.singularValueDecompose2dScale((0, u.getCurrentTransform)(b));
              else if (i = n.Util.singularValueDecompose2dScale(g.baseTransform), this.matrix) {
                const _ = n.Util.singularValueDecompose2dScale(this.matrix);
                i = [i[0] * _[0], i[1] * _[1]];
              }
              const E = this._createMeshCanvas(i, s === $.SHADING ? null : this._background, g.cachedCanvases);
              return s !== $.SHADING && (b.setTransform(...g.baseTransform), this.matrix && b.transform(...this.matrix)), b.translate(E.offsetX, E.offsetY), b.scale(E.scaleX, E.scaleY), b.createPattern(E.canvas, "no-repeat");
            }
          }
          class k extends F {
            getPattern() {
              return "hotpink";
            }
          }
          function S(y) {
            switch (y[0]) {
              case "RadialAxial":
                return new c(y);
              case "Mesh":
                return new I(y);
              case "Dummy":
                return new k();
            }
            throw new Error(`Unknown IR type: ${y[0]}`);
          }
          const h = {
            COLORED: 1,
            UNCOLORED: 2
          }, f = class f {
            constructor(b, g, w, s, i) {
              this.operatorList = b[2], this.matrix = b[3] || [1, 0, 0, 1, 0, 0], this.bbox = b[4], this.xstep = b[5], this.ystep = b[6], this.paintType = b[7], this.tilingType = b[8], this.color = g, this.ctx = w, this.canvasGraphicsFactory = s, this.baseTransform = i;
            }
            createPatternCanvas(b) {
              const g = this.operatorList, w = this.bbox, s = this.xstep, i = this.ystep, E = this.paintType, _ = this.tilingType, o = this.color, x = this.canvasGraphicsFactory;
              (0, n.info)("TilingType: " + _);
              const P = w[0], Y = w[1], tt = w[2], M = w[3], K = n.Util.singularValueDecompose2dScale(this.matrix), Z = n.Util.singularValueDecompose2dScale(this.baseTransform), Q = [K[0] * Z[0], K[1] * Z[1]], v = this.getSizeAndScale(s, this.ctx.canvas.width, Q[0]), j = this.getSizeAndScale(i, this.ctx.canvas.height, Q[1]), D = b.cachedCanvases.getCanvas("pattern", v.size, j.size, !0), lt = D.context, _t = x.createCanvasGraphics(lt);
              _t.groupLevel = b.groupLevel, this.setFillAndStrokeStyleToContext(_t, E, o);
              let L = P, a = Y, l = tt, R = M;
              return P < 0 && (L = 0, l += Math.abs(P)), Y < 0 && (a = 0, R += Math.abs(Y)), lt.translate(-(v.scale * L), -(j.scale * a)), _t.transform(v.scale, 0, 0, j.scale, 0, 0), lt.save(), this.clipBbox(_t, L, a, l, R), _t.baseTransform = (0, u.getCurrentTransform)(_t.ctx), _t.executeOperatorList(g), _t.endDrawing(), {
                canvas: D.canvas,
                scaleX: v.scale,
                scaleY: j.scale,
                offsetX: L,
                offsetY: a
              };
            }
            getSizeAndScale(b, g, w) {
              b = Math.abs(b);
              const s = Math.max(f.MAX_PATTERN_SIZE, g);
              let i = Math.ceil(b * w);
              return i >= s ? i = s : w = i / b, {
                scale: w,
                size: i
              };
            }
            clipBbox(b, g, w, s, i) {
              const E = s - g, _ = i - w;
              b.ctx.rect(g, w, E, _), b.current.updateRectMinMax((0, u.getCurrentTransform)(b.ctx), [g, w, s, i]), b.clip(), b.endPath();
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
              s !== $.SHADING && (i = n.Util.transform(i, g.baseTransform), this.matrix && (i = n.Util.transform(i, this.matrix)));
              const E = this.createPatternCanvas(g);
              let _ = new DOMMatrix(i);
              _ = _.translate(E.offsetX, E.offsetY), _ = _.scale(1 / E.scaleX, 1 / E.scaleY);
              const o = b.createPattern(E.canvas, "repeat");
              return o.setTransform(_), o;
            }
          };
          Zt(f, "MAX_PATTERN_SIZE", 3e3);
          let p = f;
          e.TilingPattern = p;
        },
        /* 13 */
        /***/
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.convertBlackAndWhiteToRGBA = $, e.convertToRGBA = u, e.grayToRGBA = F;
          var n = C(1);
          function u(c) {
            switch (c.kind) {
              case n.ImageKind.GRAYSCALE_1BPP:
                return $(c);
              case n.ImageKind.RGB_24BPP:
                return V(c);
            }
            return null;
          }
          function $({
            src: c,
            srcPos: d = 0,
            dest: r,
            width: I,
            height: k,
            nonBlackColor: S = 4294967295,
            inverseDecode: h = !1
          }) {
            const p = n.FeatureTest.isLittleEndian ? 4278190080 : 255, [f, y] = h ? [S, p] : [p, S], b = I >> 3, g = I & 7, w = c.length;
            r = new Uint32Array(r.buffer);
            let s = 0;
            for (let i = 0; i < k; i++) {
              for (const _ = d + b; d < _; d++) {
                const o = d < w ? c[d] : 255;
                r[s++] = o & 128 ? y : f, r[s++] = o & 64 ? y : f, r[s++] = o & 32 ? y : f, r[s++] = o & 16 ? y : f, r[s++] = o & 8 ? y : f, r[s++] = o & 4 ? y : f, r[s++] = o & 2 ? y : f, r[s++] = o & 1 ? y : f;
              }
              if (g === 0)
                continue;
              const E = d < w ? c[d++] : 255;
              for (let _ = 0; _ < g; _++)
                r[s++] = E & 1 << 7 - _ ? y : f;
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
            destPos: I = 0,
            width: k,
            height: S
          }) {
            let h = 0;
            const p = c.length >> 2, f = new Uint32Array(c.buffer, d, p);
            if (n.FeatureTest.isLittleEndian) {
              for (; h < p - 2; h += 3, I += 4) {
                const y = f[h], b = f[h + 1], g = f[h + 2];
                r[I] = y | 4278190080, r[I + 1] = y >>> 24 | b << 8 | 4278190080, r[I + 2] = b >>> 16 | g << 16 | 4278190080, r[I + 3] = g >>> 8 | 4278190080;
              }
              for (let y = h * 4, b = c.length; y < b; y += 3)
                r[I++] = c[y] | c[y + 1] << 8 | c[y + 2] << 16 | 4278190080;
            } else {
              for (; h < p - 2; h += 3, I += 4) {
                const y = f[h], b = f[h + 1], g = f[h + 2];
                r[I] = y | 255, r[I + 1] = y << 24 | b >>> 8 | 255, r[I + 2] = b << 16 | g >>> 16 | 255, r[I + 3] = g << 8 | 255;
              }
              for (let y = h * 4, b = c.length; y < b; y += 3)
                r[I++] = c[y] << 24 | c[y + 1] << 16 | c[y + 2] << 8 | 255;
            }
            return {
              srcPos: d,
              destPos: I
            };
          }
          function F(c, d) {
            if (n.FeatureTest.isLittleEndian)
              for (let r = 0, I = c.length; r < I; r++)
                d[r] = c[r] * 65793 | 4278190080;
            else
              for (let r = 0, I = c.length; r < I; r++)
                d[r] = c[r] * 16843008 | 255;
          }
        },
        /* 14 */
        /***/
        (A, e) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.GlobalWorkerOptions = void 0;
          const C = /* @__PURE__ */ Object.create(null);
          e.GlobalWorkerOptions = C, C.workerPort = null, C.workerSrc = "";
        },
        /* 15 */
        /***/
        (A, e, C) => {
          var c, sn, r, rn, k, xe;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.MessageHandler = void 0;
          var n = C(1);
          const u = {
            UNKNOWN: 0,
            DATA: 1,
            ERROR: 2
          }, $ = {
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
          class F {
            constructor(p, f, y) {
              N(this, c);
              N(this, r);
              N(this, k);
              this.sourceName = p, this.targetName = f, this.comObj = y, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (b) => {
                const g = b.data;
                if (g.targetName !== this.sourceName)
                  return;
                if (g.stream) {
                  q(this, r, rn).call(this, g);
                  return;
                }
                if (g.callback) {
                  const s = g.callbackId, i = this.callbackCapabilities[s];
                  if (!i)
                    throw new Error(`Cannot resolve callback ${s}`);
                  if (delete this.callbackCapabilities[s], g.callback === u.DATA)
                    i.resolve(g.data);
                  else if (g.callback === u.ERROR)
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
                      callback: u.DATA,
                      callbackId: g.callbackId,
                      data: E
                    });
                  }, function(E) {
                    y.postMessage({
                      sourceName: s,
                      targetName: i,
                      callback: u.ERROR,
                      callbackId: g.callbackId,
                      reason: V(E)
                    });
                  });
                  return;
                }
                if (g.streamId) {
                  q(this, c, sn).call(this, g);
                  return;
                }
                w(g.data);
              }, y.addEventListener("message", this._onComObjOnMessage);
            }
            on(p, f) {
              const y = this.actionHandler;
              if (y[p])
                throw new Error(`There is already an actionName called "${p}"`);
              y[p] = f;
            }
            send(p, f, y) {
              this.comObj.postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: p,
                data: f
              }, y);
            }
            sendWithPromise(p, f, y) {
              const b = this.callbackId++, g = new n.PromiseCapability();
              this.callbackCapabilities[b] = g;
              try {
                this.comObj.postMessage({
                  sourceName: this.sourceName,
                  targetName: this.targetName,
                  action: p,
                  callbackId: b,
                  data: f
                }, y);
              } catch (w) {
                g.reject(w);
              }
              return g.promise;
            }
            sendWithStream(p, f, y, b) {
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
                    data: f,
                    desiredSize: E.desiredSize
                  }, b), _.promise;
                },
                pull: (E) => {
                  const _ = new n.PromiseCapability();
                  return this.streamControllers[g].pullCall = _, i.postMessage({
                    sourceName: w,
                    targetName: s,
                    stream: $.PULL,
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
                    stream: $.CANCEL,
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
            const f = p.streamId, y = this.sourceName, b = p.sourceName, g = this.comObj, w = this, s = this.actionHandler[p.action], i = {
              enqueue(E, _ = 1, o) {
                if (this.isCancelled)
                  return;
                const x = this.desiredSize;
                this.desiredSize -= _, x > 0 && this.desiredSize <= 0 && (this.sinkCapability = new n.PromiseCapability(), this.ready = this.sinkCapability.promise), g.postMessage({
                  sourceName: y,
                  targetName: b,
                  stream: $.ENQUEUE,
                  streamId: f,
                  chunk: E
                }, o);
              },
              close() {
                this.isCancelled || (this.isCancelled = !0, g.postMessage({
                  sourceName: y,
                  targetName: b,
                  stream: $.CLOSE,
                  streamId: f
                }), delete w.streamSinks[f]);
              },
              error(E) {
                (0, n.assert)(E instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, g.postMessage({
                  sourceName: y,
                  targetName: b,
                  stream: $.ERROR,
                  streamId: f,
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
            i.sinkCapability.resolve(), i.ready = i.sinkCapability.promise, this.streamSinks[f] = i, new Promise(function(E) {
              E(s(p.data, i));
            }).then(function() {
              g.postMessage({
                sourceName: y,
                targetName: b,
                stream: $.START_COMPLETE,
                streamId: f,
                success: !0
              });
            }, function(E) {
              g.postMessage({
                sourceName: y,
                targetName: b,
                stream: $.START_COMPLETE,
                streamId: f,
                reason: V(E)
              });
            });
          }, r = new WeakSet(), rn = function(p) {
            const f = p.streamId, y = this.sourceName, b = p.sourceName, g = this.comObj, w = this.streamControllers[f], s = this.streamSinks[f];
            switch (p.stream) {
              case $.START_COMPLETE:
                p.success ? w.startCall.resolve() : w.startCall.reject(V(p.reason));
                break;
              case $.PULL_COMPLETE:
                p.success ? w.pullCall.resolve() : w.pullCall.reject(V(p.reason));
                break;
              case $.PULL:
                if (!s) {
                  g.postMessage({
                    sourceName: y,
                    targetName: b,
                    stream: $.PULL_COMPLETE,
                    streamId: f,
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
                    stream: $.PULL_COMPLETE,
                    streamId: f,
                    success: !0
                  });
                }, function(i) {
                  g.postMessage({
                    sourceName: y,
                    targetName: b,
                    stream: $.PULL_COMPLETE,
                    streamId: f,
                    reason: V(i)
                  });
                });
                break;
              case $.ENQUEUE:
                if ((0, n.assert)(w, "enqueue should have stream controller"), w.isClosed)
                  break;
                w.controller.enqueue(p.chunk);
                break;
              case $.CLOSE:
                if ((0, n.assert)(w, "close should have stream controller"), w.isClosed)
                  break;
                w.isClosed = !0, w.controller.close(), q(this, k, xe).call(this, w, f);
                break;
              case $.ERROR:
                (0, n.assert)(w, "error should have stream controller"), w.controller.error(V(p.reason)), q(this, k, xe).call(this, w, f);
                break;
              case $.CANCEL_COMPLETE:
                p.success ? w.cancelCall.resolve() : w.cancelCall.reject(V(p.reason)), q(this, k, xe).call(this, w, f);
                break;
              case $.CANCEL:
                if (!s)
                  break;
                new Promise(function(i) {
                  var E;
                  i((E = s.onCancel) == null ? void 0 : E.call(s, V(p.reason)));
                }).then(function() {
                  g.postMessage({
                    sourceName: y,
                    targetName: b,
                    stream: $.CANCEL_COMPLETE,
                    streamId: f,
                    success: !0
                  });
                }, function(i) {
                  g.postMessage({
                    sourceName: y,
                    targetName: b,
                    stream: $.CANCEL_COMPLETE,
                    streamId: f,
                    reason: V(i)
                  });
                }), s.sinkCapability.reject(V(p.reason)), s.isCancelled = !0, delete this.streamSinks[f];
                break;
              default:
                throw new Error("Unexpected stream case");
            }
          }, k = new WeakSet(), xe = async function(p, f) {
            var y, b, g;
            await Promise.allSettled([(y = p.startCall) == null ? void 0 : y.promise, (b = p.pullCall) == null ? void 0 : b.promise, (g = p.cancelCall) == null ? void 0 : g.promise]), delete this.streamControllers[f];
          }, e.MessageHandler = F;
        },
        /* 16 */
        /***/
        (A, e, C) => {
          var $, V;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.Metadata = void 0;
          var n = C(1);
          class u {
            constructor({
              parsedData: c,
              rawData: d
            }) {
              N(this, $, void 0);
              N(this, V, void 0);
              it(this, $, c), it(this, V, d);
            }
            getRaw() {
              return t(this, V);
            }
            get(c) {
              return t(this, $).get(c) ?? null;
            }
            getAll() {
              return (0, n.objectFromMap)(t(this, $));
            }
            has(c) {
              return t(this, $).has(c);
            }
          }
          $ = new WeakMap(), V = new WeakMap(), e.Metadata = u;
        },
        /* 17 */
        /***/
        (A, e, C) => {
          var c, d, r, I, k, S, ii;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.OptionalContentConfig = void 0;
          var n = C(1), u = C(8);
          const $ = Symbol("INTERNAL");
          class V {
            constructor(f, y) {
              N(this, c, !0);
              this.name = f, this.intent = y;
            }
            get visible() {
              return t(this, c);
            }
            _setVisible(f, y) {
              f !== $ && (0, n.unreachable)("Internal method `_setVisible` called."), it(this, c, y);
            }
          }
          c = new WeakMap();
          class F {
            constructor(f) {
              N(this, S);
              N(this, d, null);
              N(this, r, /* @__PURE__ */ new Map());
              N(this, I, null);
              N(this, k, null);
              if (this.name = null, this.creator = null, f !== null) {
                this.name = f.name, this.creator = f.creator, it(this, k, f.order);
                for (const y of f.groups)
                  t(this, r).set(y.id, new V(y.name, y.intent));
                if (f.baseState === "OFF")
                  for (const y of t(this, r).values())
                    y._setVisible($, !1);
                for (const y of f.on)
                  t(this, r).get(y)._setVisible($, !0);
                for (const y of f.off)
                  t(this, r).get(y)._setVisible($, !1);
                it(this, I, this.getHash());
              }
            }
            isVisible(f) {
              if (t(this, r).size === 0)
                return !0;
              if (!f)
                return (0, n.warn)("Optional content group not defined."), !0;
              if (f.type === "OCG")
                return t(this, r).has(f.id) ? t(this, r).get(f.id).visible : ((0, n.warn)(`Optional content group not found: ${f.id}`), !0);
              if (f.type === "OCMD") {
                if (f.expression)
                  return q(this, S, ii).call(this, f.expression);
                if (!f.policy || f.policy === "AnyOn") {
                  for (const y of f.ids) {
                    if (!t(this, r).has(y))
                      return (0, n.warn)(`Optional content group not found: ${y}`), !0;
                    if (t(this, r).get(y).visible)
                      return !0;
                  }
                  return !1;
                } else if (f.policy === "AllOn") {
                  for (const y of f.ids) {
                    if (!t(this, r).has(y))
                      return (0, n.warn)(`Optional content group not found: ${y}`), !0;
                    if (!t(this, r).get(y).visible)
                      return !1;
                  }
                  return !0;
                } else if (f.policy === "AnyOff") {
                  for (const y of f.ids) {
                    if (!t(this, r).has(y))
                      return (0, n.warn)(`Optional content group not found: ${y}`), !0;
                    if (!t(this, r).get(y).visible)
                      return !0;
                  }
                  return !1;
                } else if (f.policy === "AllOff") {
                  for (const y of f.ids) {
                    if (!t(this, r).has(y))
                      return (0, n.warn)(`Optional content group not found: ${y}`), !0;
                    if (t(this, r).get(y).visible)
                      return !1;
                  }
                  return !0;
                }
                return (0, n.warn)(`Unknown optional content policy ${f.policy}.`), !0;
              }
              return (0, n.warn)(`Unknown group type ${f.type}.`), !0;
            }
            setVisibility(f, y = !0) {
              if (!t(this, r).has(f)) {
                (0, n.warn)(`Optional content group not found: ${f}`);
                return;
              }
              t(this, r).get(f)._setVisible($, !!y), it(this, d, null);
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
            getGroup(f) {
              return t(this, r).get(f) || null;
            }
            getHash() {
              if (t(this, d) !== null)
                return t(this, d);
              const f = new u.MurmurHash3_64();
              for (const [y, b] of t(this, r))
                f.update(`${y}:${b.visible}`);
              return it(this, d, f.hexdigest());
            }
          }
          d = new WeakMap(), r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), S = new WeakSet(), ii = function(f) {
            const y = f.length;
            if (y < 2)
              return !0;
            const b = f[0];
            for (let g = 1; g < y; g++) {
              const w = f[g];
              let s;
              if (Array.isArray(w))
                s = q(this, S, ii).call(this, w);
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
          }, e.OptionalContentConfig = F;
        },
        /* 18 */
        /***/
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFDataTransportStream = void 0;
          var n = C(1), u = C(6);
          class $ {
            constructor({
              length: d,
              initialData: r,
              progressiveDone: I = !1,
              contentDispositionFilename: k = null,
              disableRange: S = !1,
              disableStream: h = !1
            }, p) {
              if ((0, n.assert)(p, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = I, this._contentDispositionFilename = k, (r == null ? void 0 : r.length) > 0) {
                const f = r instanceof Uint8Array && r.byteLength === r.buffer.byteLength ? r.buffer : new Uint8Array(r).buffer;
                this._queuedChunks.push(f);
              }
              this._pdfDataRangeTransport = p, this._isStreamingSupported = !h, this._isRangeSupported = !S, this._contentLength = d, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((f, y) => {
                this._onReceiveData({
                  begin: f,
                  chunk: y
                });
              }), this._pdfDataRangeTransport.addProgressListener((f, y) => {
                this._onProgress({
                  loaded: f,
                  total: y
                });
              }), this._pdfDataRangeTransport.addProgressiveReadListener((f) => {
                this._onReceiveData({
                  chunk: f
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
                const k = this._rangeReaders.some(function(S) {
                  return S._begin !== d ? !1 : (S._enqueue(I), !0);
                });
                (0, n.assert)(k, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
              }
            }
            get _progressiveDataLength() {
              var d;
              return ((d = this._fullRequestReader) == null ? void 0 : d._loaded) ?? 0;
            }
            _onProgress(d) {
              var r, I, k, S;
              d.total === void 0 ? (I = (r = this._rangeReaders[0]) == null ? void 0 : r.onProgress) == null || I.call(r, {
                loaded: d.loaded
              }) : (S = (k = this._fullRequestReader) == null ? void 0 : k.onProgress) == null || S.call(k, {
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
          e.PDFDataTransportStream = $;
          class V {
            constructor(d, r, I = !1, k = null) {
              this._stream = d, this._done = I || !1, this._filename = (0, u.isPdfFile)(k) ? k : null, this._queuedChunks = r || [], this._loaded = 0;
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
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFFetchStream = void 0;
          var n = C(1), u = C(20);
          function $(I, k, S) {
            return {
              method: "GET",
              headers: I,
              signal: S.signal,
              mode: "cors",
              credentials: k ? "include" : "same-origin",
              redirect: "follow"
            };
          }
          function V(I) {
            const k = new Headers();
            for (const S in I) {
              const h = I[S];
              h !== void 0 && k.append(S, h);
            }
            return k;
          }
          function F(I) {
            return I instanceof Uint8Array ? I.buffer : I instanceof ArrayBuffer ? I : ((0, n.warn)(`getArrayBuffer - unexpected data format: ${I}`), new Uint8Array(I).buffer);
          }
          class c {
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
            getRangeReader(k, S) {
              if (S <= this._progressiveDataLength)
                return null;
              const h = new r(this, k, S);
              return this._rangeRequestReaders.push(h), h;
            }
            cancelAllRequests(k) {
              var S;
              (S = this._fullRequestReader) == null || S.cancel(k);
              for (const h of this._rangeRequestReaders.slice(0))
                h.cancel(k);
            }
          }
          e.PDFFetchStream = c;
          class d {
            constructor(k) {
              this._stream = k, this._reader = null, this._loaded = 0, this._filename = null;
              const S = k.source;
              this._withCredentials = S.withCredentials || !1, this._contentLength = S.length, this._headersCapability = new n.PromiseCapability(), this._disableRange = S.disableRange || !1, this._rangeChunkSize = S.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !S.disableStream, this._isRangeSupported = !S.disableRange, this._headers = V(this._stream.httpHeaders);
              const h = S.url;
              fetch(h, $(this._headers, this._withCredentials, this._abortController)).then((p) => {
                if (!(0, u.validateResponseStatus)(p.status))
                  throw (0, u.createResponseStatusError)(p.status, h);
                this._reader = p.body.getReader(), this._headersCapability.resolve();
                const f = (g) => p.headers.get(g), {
                  allowRangeRequests: y,
                  suggestedLength: b
                } = (0, u.validateRangeRequestCapabilities)({
                  getResponseHeader: f,
                  isHttp: this._stream.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = y, this._contentLength = b || this._contentLength, this._filename = (0, u.extractFilenameFromHeader)(f), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new n.AbortException("Streaming is disabled."));
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
                done: S
              } = await this._reader.read();
              return S ? {
                value: k,
                done: S
              } : (this._loaded += k.byteLength, (h = this.onProgress) == null || h.call(this, {
                loaded: this._loaded,
                total: this._contentLength
              }), {
                value: F(k),
                done: !1
              });
            }
            cancel(k) {
              var S;
              (S = this._reader) == null || S.cancel(k), this._abortController.abort();
            }
          }
          class r {
            constructor(k, S, h) {
              this._stream = k, this._reader = null, this._loaded = 0;
              const p = k.source;
              this._withCredentials = p.withCredentials || !1, this._readCapability = new n.PromiseCapability(), this._isStreamingSupported = !p.disableStream, this._abortController = new AbortController(), this._headers = V(this._stream.httpHeaders), this._headers.append("Range", `bytes=${S}-${h - 1}`);
              const f = p.url;
              fetch(f, $(this._headers, this._withCredentials, this._abortController)).then((y) => {
                if (!(0, u.validateResponseStatus)(y.status))
                  throw (0, u.createResponseStatusError)(y.status, f);
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
                value: k,
                done: S
              } = await this._reader.read();
              return S ? {
                value: k,
                done: S
              } : (this._loaded += k.byteLength, (h = this.onProgress) == null || h.call(this, {
                loaded: this._loaded
              }), {
                value: F(k),
                done: !1
              });
            }
            cancel(k) {
              var S;
              (S = this._reader) == null || S.cancel(k), this._abortController.abort();
            }
          }
        },
        /* 20 */
        /***/
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.createResponseStatusError = c, e.extractFilenameFromHeader = F, e.validateRangeRequestCapabilities = V, e.validateResponseStatus = d;
          var n = C(1), u = C(21), $ = C(6);
          function V({
            getResponseHeader: r,
            isHttp: I,
            rangeChunkSize: k,
            disableRange: S
          }) {
            const h = {
              allowRangeRequests: !1,
              suggestedLength: void 0
            }, p = parseInt(r("Content-Length"), 10);
            return !Number.isInteger(p) || (h.suggestedLength = p, p <= 2 * k) || S || !I || r("Accept-Ranges") !== "bytes" || (r("Content-Encoding") || "identity") !== "identity" || (h.allowRangeRequests = !0), h;
          }
          function F(r) {
            const I = r("Content-Disposition");
            if (I) {
              let k = (0, u.getFilenameFromContentDispositionHeader)(I);
              if (k.includes("%"))
                try {
                  k = decodeURIComponent(k);
                } catch {
                }
              if ((0, $.isPdfFile)(k))
                return k;
            }
            return null;
          }
          function c(r, I) {
            return r === 404 || r === 0 && I.startsWith("file:") ? new n.MissingPDFException('Missing PDF "' + I + '".') : new n.UnexpectedResponseException(`Unexpected server response (${r}) while retrieving PDF "${I}".`, r);
          }
          function d(r) {
            return r === 200 || r === 206;
          }
        },
        /* 21 */
        /***/
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.getFilenameFromContentDispositionHeader = u;
          var n = C(1);
          function u($) {
            let V = !0, F = c("filename\\*", "i").exec($);
            if (F) {
              F = F[1];
              let p = k(F);
              return p = unescape(p), p = S(p), p = h(p), r(p);
            }
            if (F = I($), F) {
              const p = h(F);
              return r(p);
            }
            if (F = c("filename", "i").exec($), F) {
              F = F[1];
              let p = k(F);
              return p = h(p), r(p);
            }
            function c(p, f) {
              return new RegExp("(?:^|;)\\s*" + p + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', f);
            }
            function d(p, f) {
              if (p) {
                if (!/^[\x00-\xFF]+$/.test(f))
                  return f;
                try {
                  const y = new TextDecoder(p, {
                    fatal: !0
                  }), b = (0, n.stringToBytes)(f);
                  f = y.decode(b), V = !1;
                } catch {
                }
              }
              return f;
            }
            function r(p) {
              return V && /[\x80-\xff]/.test(p) && (p = d("utf-8", p), V && (p = d("iso-8859-1", p))), p;
            }
            function I(p) {
              const f = [];
              let y;
              const b = c("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
              for (; (y = b.exec(p)) !== null; ) {
                let [, w, s, i] = y;
                if (w = parseInt(w, 10), w in f) {
                  if (w === 0)
                    break;
                  continue;
                }
                f[w] = [s, i];
              }
              const g = [];
              for (let w = 0; w < f.length && w in f; ++w) {
                let [s, i] = f[w];
                i = k(i), s && (i = unescape(i), w === 0 && (i = S(i))), g.push(i);
              }
              return g.join("");
            }
            function k(p) {
              if (p.startsWith('"')) {
                const f = p.slice(1).split('\\"');
                for (let y = 0; y < f.length; ++y) {
                  const b = f[y].indexOf('"');
                  b !== -1 && (f[y] = f[y].slice(0, b), f.length = y + 1), f[y] = f[y].replaceAll(/\\(.)/g, "$1");
                }
                p = f.join('"');
              }
              return p;
            }
            function S(p) {
              const f = p.indexOf("'");
              if (f === -1)
                return p;
              const y = p.slice(0, f), g = p.slice(f + 1).replace(/^[^']*'/, "");
              return d(y, g);
            }
            function h(p) {
              return !p.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(p) ? p : p.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(f, y, b, g) {
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
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFNetworkStream = void 0;
          var n = C(1), u = C(20);
          const $ = 200, V = 206;
          function F(k) {
            const S = k.response;
            return typeof S != "string" ? S : (0, n.stringToBytes)(S).buffer;
          }
          class c {
            constructor(S, h = {}) {
              this.url = S, this.isHttp = /^https?:/i.test(S), this.httpHeaders = this.isHttp && h.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = h.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
            }
            requestRange(S, h, p) {
              const f = {
                begin: S,
                end: h
              };
              for (const y in p)
                f[y] = p[y];
              return this.request(f);
            }
            requestFull(S) {
              return this.request(S);
            }
            request(S) {
              const h = new XMLHttpRequest(), p = this.currXhrId++, f = this.pendingRequests[p] = {
                xhr: h
              };
              h.open("GET", this.url), h.withCredentials = this.withCredentials;
              for (const y in this.httpHeaders) {
                const b = this.httpHeaders[y];
                b !== void 0 && h.setRequestHeader(y, b);
              }
              return this.isHttp && "begin" in S && "end" in S ? (h.setRequestHeader("Range", `bytes=${S.begin}-${S.end - 1}`), f.expectedStatus = V) : f.expectedStatus = $, h.responseType = "arraybuffer", S.onError && (h.onerror = function(y) {
                S.onError(h.status);
              }), h.onreadystatechange = this.onStateChange.bind(this, p), h.onprogress = this.onProgress.bind(this, p), f.onHeadersReceived = S.onHeadersReceived, f.onDone = S.onDone, f.onError = S.onError, f.onProgress = S.onProgress, h.send(null), p;
            }
            onProgress(S, h) {
              var f;
              const p = this.pendingRequests[S];
              p && ((f = p.onProgress) == null || f.call(p, h));
            }
            onStateChange(S, h) {
              var w, s, i;
              const p = this.pendingRequests[S];
              if (!p)
                return;
              const f = p.xhr;
              if (f.readyState >= 2 && p.onHeadersReceived && (p.onHeadersReceived(), delete p.onHeadersReceived), f.readyState !== 4 || !(S in this.pendingRequests))
                return;
              if (delete this.pendingRequests[S], f.status === 0 && this.isHttp) {
                (w = p.onError) == null || w.call(p, f.status);
                return;
              }
              const y = f.status || $;
              if (!(y === $ && p.expectedStatus === V) && y !== p.expectedStatus) {
                (s = p.onError) == null || s.call(p, f.status);
                return;
              }
              const g = F(f);
              if (y === V) {
                const E = f.getResponseHeader("Content-Range"), _ = /bytes (\d+)-(\d+)\/(\d+)/.exec(E);
                p.onDone({
                  begin: parseInt(_[1], 10),
                  chunk: g
                });
              } else
                g ? p.onDone({
                  begin: 0,
                  chunk: g
                }) : (i = p.onError) == null || i.call(p, f.status);
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
              const p = new I(this._manager, S, h);
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
                allowRangeRequests: f,
                suggestedLength: y
              } = (0, u.validateRangeRequestCapabilities)({
                getResponseHeader: p,
                isHttp: this._manager.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              });
              f && (this._isRangeSupported = !0), this._contentLength = y || this._contentLength, this._filename = (0, u.extractFilenameFromHeader)(p), this._isRangeSupported && this._manager.abortRequest(S), this._headersReceivedCapability.resolve();
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
              this._storedError = (0, u.createResponseStatusError)(S, this._url), this._headersReceivedCapability.reject(this._storedError);
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
          class I {
            constructor(S, h, p) {
              this._manager = S;
              const f = {
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
              };
              this._url = S.url, this._requestId = S.requestRange(h, p, f), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
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
              this._storedError = (0, u.createResponseStatusError)(S, this._url);
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
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.PDFNodeStream = void 0;
          var n = C(1), u = C(20);
          const $ = /^file:\/\/\/[a-zA-Z]:\//;
          function V(p) {
            const f = require$$5, y = f.parse(p);
            return y.protocol === "file:" || y.host ? y : /^[a-z]:[/\\]/i.test(p) ? f.parse(`file:///${p}`) : (y.host || (y.protocol = "file:"), y);
          }
          class F {
            constructor(f) {
              this.source = f, this.url = V(f.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && f.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              var f;
              return ((f = this._fullRequestReader) == null ? void 0 : f._loaded) ?? 0;
            }
            getFullReader() {
              return (0, n.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new S(this) : new I(this), this._fullRequestReader;
            }
            getRangeReader(f, y) {
              if (y <= this._progressiveDataLength)
                return null;
              const b = this.isFsUrl ? new h(this, f, y) : new k(this, f, y);
              return this._rangeRequestReaders.push(b), b;
            }
            cancelAllRequests(f) {
              var y;
              (y = this._fullRequestReader) == null || y.cancel(f);
              for (const b of this._rangeRequestReaders.slice(0))
                b.cancel(f);
            }
          }
          e.PDFNodeStream = F;
          class c {
            constructor(f) {
              this._url = f.url, this._done = !1, this._storedError = null, this.onProgress = null;
              const y = f.source;
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
              const f = this._readableStream.read();
              return f === null ? (this._readCapability = new n.PromiseCapability(), this.read()) : (this._loaded += f.length, (b = this.onProgress) == null || b.call(this, {
                loaded: this._loaded,
                total: this._contentLength
              }), {
                value: new Uint8Array(f).buffer,
                done: !1
              });
            }
            cancel(f) {
              if (!this._readableStream) {
                this._error(f);
                return;
              }
              this._readableStream.destroy(f);
            }
            _error(f) {
              this._storedError = f, this._readCapability.resolve();
            }
            _setReadableStream(f) {
              this._readableStream = f, f.on("readable", () => {
                this._readCapability.resolve();
              }), f.on("end", () => {
                f.destroy(), this._done = !0, this._readCapability.resolve();
              }), f.on("error", (y) => {
                this._error(y);
              }), !this._isStreamingSupported && this._isRangeSupported && this._error(new n.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          class d {
            constructor(f) {
              this._url = f.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = new n.PromiseCapability();
              const y = f.source;
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
              const f = this._readableStream.read();
              return f === null ? (this._readCapability = new n.PromiseCapability(), this.read()) : (this._loaded += f.length, (b = this.onProgress) == null || b.call(this, {
                loaded: this._loaded
              }), {
                value: new Uint8Array(f).buffer,
                done: !1
              });
            }
            cancel(f) {
              if (!this._readableStream) {
                this._error(f);
                return;
              }
              this._readableStream.destroy(f);
            }
            _error(f) {
              this._storedError = f, this._readCapability.resolve();
            }
            _setReadableStream(f) {
              this._readableStream = f, f.on("readable", () => {
                this._readCapability.resolve();
              }), f.on("end", () => {
                f.destroy(), this._done = !0, this._readCapability.resolve();
              }), f.on("error", (y) => {
                this._error(y);
              }), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          function r(p, f) {
            return {
              protocol: p.protocol,
              auth: p.auth,
              host: p.hostname,
              port: p.port,
              path: p.path,
              method: "GET",
              headers: f
            };
          }
          class I extends c {
            constructor(f) {
              super(f);
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
                } = (0, u.validateRangeRequestCapabilities)({
                  getResponseHeader: g,
                  isHttp: f.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = w, this._contentLength = s || this._contentLength, this._filename = (0, u.extractFilenameFromHeader)(g);
              };
              if (this._request = null, this._url.protocol === "http:") {
                const b = require$$5;
                this._request = b.request(r(this._url, f.httpHeaders), y);
              } else {
                const b = require$$5;
                this._request = b.request(r(this._url, f.httpHeaders), y);
              }
              this._request.on("error", (b) => {
                this._storedError = b, this._headersCapability.reject(b);
              }), this._request.end();
            }
          }
          class k extends d {
            constructor(f, y, b) {
              super(f), this._httpHeaders = {};
              for (const w in f.httpHeaders) {
                const s = f.httpHeaders[w];
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
            constructor(f) {
              super(f);
              let y = decodeURIComponent(this._url.path);
              $.test(this._url.href) && (y = y.replace(/^\//, ""));
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
            constructor(f, y, b) {
              super(f);
              let g = decodeURIComponent(this._url.path);
              $.test(this._url.href) && (g = g.replace(/^\//, ""));
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
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.SVGGraphics = void 0;
          var n = C(6), u = C(1);
          const $ = {
            fontStyle: "normal",
            fontWeight: "normal",
            fillColor: "#000000"
          }, V = "http://www.w3.org/XML/1998/namespace", F = "http://www.w3.org/1999/xlink", c = ["butt", "round", "square"], d = ["miter", "round", "bevel"], r = function(w, s = "", i = !1) {
            if (URL.createObjectURL && typeof Blob < "u" && !i)
              return URL.createObjectURL(new Blob([w], {
                type: s
              }));
            const E = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            let _ = `data:${s};base64,`;
            for (let o = 0, x = w.length; o < x; o += 3) {
              const P = w[o] & 255, Y = w[o + 1] & 255, tt = w[o + 2] & 255, M = P >> 2, K = (P & 3) << 4 | Y >> 4, Z = o + 1 < x ? (Y & 15) << 2 | tt >> 6 : 64, Q = o + 2 < x ? tt & 63 : 64;
              _ += E[M] + E[K] + E[Z] + E[Q];
            }
            return _;
          }, I = function() {
            const w = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), s = 12, i = new Int32Array(256);
            for (let tt = 0; tt < 256; tt++) {
              let M = tt;
              for (let K = 0; K < 8; K++)
                M = M & 1 ? 3988292384 ^ M >> 1 & 2147483647 : M >> 1 & 2147483647;
              i[tt] = M;
            }
            function E(tt, M, K) {
              let Z = -1;
              for (let Q = M; Q < K; Q++) {
                const v = (Z ^ tt[Q]) & 255, j = i[v];
                Z = Z >>> 8 ^ j;
              }
              return Z ^ -1;
            }
            function _(tt, M, K, Z) {
              let Q = Z;
              const v = M.length;
              K[Q] = v >> 24 & 255, K[Q + 1] = v >> 16 & 255, K[Q + 2] = v >> 8 & 255, K[Q + 3] = v & 255, Q += 4, K[Q] = tt.charCodeAt(0) & 255, K[Q + 1] = tt.charCodeAt(1) & 255, K[Q + 2] = tt.charCodeAt(2) & 255, K[Q + 3] = tt.charCodeAt(3) & 255, Q += 4, K.set(M, Q), Q += M.length;
              const j = E(K, Z + 4, Q);
              K[Q] = j >> 24 & 255, K[Q + 1] = j >> 16 & 255, K[Q + 2] = j >> 8 & 255, K[Q + 3] = j & 255;
            }
            function o(tt, M, K) {
              let Z = 1, Q = 0;
              for (let v = M; v < K; ++v)
                Z = (Z + (tt[v] & 255)) % 65521, Q = (Q + Z) % 65521;
              return Q << 16 | Z;
            }
            function x(tt) {
              if (!u.isNodeJS)
                return P(tt);
              try {
                const M = parseInt(process.versions.node) >= 8 ? tt : Buffer.from(tt), K = require$$5.deflateSync(M, {
                  level: 9
                });
                return K instanceof Uint8Array ? K : new Uint8Array(K);
              } catch (M) {
                (0, u.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + M);
              }
              return P(tt);
            }
            function P(tt) {
              let M = tt.length;
              const K = 65535, Z = Math.ceil(M / K), Q = new Uint8Array(2 + M + Z * 5 + 4);
              let v = 0;
              Q[v++] = 120, Q[v++] = 156;
              let j = 0;
              for (; M > K; )
                Q[v++] = 0, Q[v++] = 255, Q[v++] = 255, Q[v++] = 0, Q[v++] = 0, Q.set(tt.subarray(j, j + K), v), v += K, j += K, M -= K;
              Q[v++] = 1, Q[v++] = M & 255, Q[v++] = M >> 8 & 255, Q[v++] = ~M & 65535 & 255, Q[v++] = (~M & 65535) >> 8 & 255, Q.set(tt.subarray(j), v), v += tt.length - j;
              const D = o(tt, 0, tt.length);
              return Q[v++] = D >> 24 & 255, Q[v++] = D >> 16 & 255, Q[v++] = D >> 8 & 255, Q[v++] = D & 255, Q;
            }
            function Y(tt, M, K, Z) {
              const Q = tt.width, v = tt.height;
              let j, D, lt;
              const _t = tt.data;
              switch (M) {
                case u.ImageKind.GRAYSCALE_1BPP:
                  D = 0, j = 1, lt = Q + 7 >> 3;
                  break;
                case u.ImageKind.RGB_24BPP:
                  D = 2, j = 8, lt = Q * 3;
                  break;
                case u.ImageKind.RGBA_32BPP:
                  D = 6, j = 8, lt = Q * 4;
                  break;
                default:
                  throw new Error("invalid format");
              }
              const L = new Uint8Array((1 + lt) * v);
              let a = 0, l = 0;
              for (let ut = 0; ut < v; ++ut)
                L[a++] = 0, L.set(_t.subarray(l, l + lt), a), l += lt, a += lt;
              if (M === u.ImageKind.GRAYSCALE_1BPP && Z) {
                a = 0;
                for (let ut = 0; ut < v; ut++) {
                  a++;
                  for (let wt = 0; wt < lt; wt++)
                    L[a++] ^= 255;
                }
              }
              const R = new Uint8Array([Q >> 24 & 255, Q >> 16 & 255, Q >> 8 & 255, Q & 255, v >> 24 & 255, v >> 16 & 255, v >> 8 & 255, v & 255, j, D, 0, 0, 0]), X = x(L), W = w.length + s * 3 + R.length + X.length, nt = new Uint8Array(W);
              let st = 0;
              return nt.set(w, st), st += w.length, _("IHDR", R, nt, st), st += s + R.length, _("IDATA", X, nt, st), st += s + X.length, _("IEND", new Uint8Array(0), nt, st), r(nt, "image/png", K);
            }
            return function(M, K, Z) {
              const Q = M.kind === void 0 ? u.ImageKind.GRAYSCALE_1BPP : M.kind;
              return Y(M, Q, K, Z);
            };
          }();
          class k {
            constructor() {
              this.fontSizeScale = 1, this.fontWeight = $.fontWeight, this.fontSize = 0, this.textMatrix = u.IDENTITY_MATRIX, this.fontMatrix = u.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = u.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = $.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = "";
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
          let f = 0, y = 0, b = 0;
          class g {
            constructor(s, i, E = !1) {
              (0, n.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."), this.svgFactory = new n.DOMSVGFactory(), this.current = new k(), this.transformMatrix = u.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = s, this.objs = i, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = /* @__PURE__ */ Object.create(null), this.cssStyle = null, this.forceDataSchema = !!E, this._operatorIdMapping = [];
              for (const _ in u.OPS)
                this._operatorIdMapping[u.OPS[_]] = _;
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
                if (i[_] === u.OPS.dependency)
                  for (const x of E[_]) {
                    const P = x.startsWith("g_") ? this.commonObjs : this.objs, Y = new Promise((tt) => {
                      P.get(x, tt);
                    });
                    this.current.dependencies.push(Y);
                  }
              return Promise.all(this.current.dependencies);
            }
            transform(s, i, E, _, o, x) {
              const P = [s, i, E, _, o, x];
              this.transformMatrix = u.Util.transform(this.transformMatrix, P), this.tgrp = null;
            }
            getSVG(s, i) {
              this.viewport = i;
              const E = this._initialize(i);
              return this.loadDependencies(s).then(() => (this.transformMatrix = u.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(s)), E));
            }
            convertOpList(s) {
              const i = this._operatorIdMapping, E = s.argsArray, _ = s.fnArray, o = [];
              for (let x = 0, P = _.length; x < P; x++) {
                const Y = _[x];
                o.push({
                  fnId: Y,
                  fn: i[Y],
                  args: E[x]
                });
              }
              return S(o);
            }
            executeOpTree(s) {
              for (const i of s) {
                const E = i.fn, _ = i.fnId, o = i.args;
                switch (_ | 0) {
                  case u.OPS.beginText:
                    this.beginText();
                    break;
                  case u.OPS.dependency:
                    break;
                  case u.OPS.setLeading:
                    this.setLeading(o);
                    break;
                  case u.OPS.setLeadingMoveText:
                    this.setLeadingMoveText(o[0], o[1]);
                    break;
                  case u.OPS.setFont:
                    this.setFont(o);
                    break;
                  case u.OPS.showText:
                    this.showText(o[0]);
                    break;
                  case u.OPS.showSpacedText:
                    this.showText(o[0]);
                    break;
                  case u.OPS.endText:
                    this.endText();
                    break;
                  case u.OPS.moveText:
                    this.moveText(o[0], o[1]);
                    break;
                  case u.OPS.setCharSpacing:
                    this.setCharSpacing(o[0]);
                    break;
                  case u.OPS.setWordSpacing:
                    this.setWordSpacing(o[0]);
                    break;
                  case u.OPS.setHScale:
                    this.setHScale(o[0]);
                    break;
                  case u.OPS.setTextMatrix:
                    this.setTextMatrix(o[0], o[1], o[2], o[3], o[4], o[5]);
                    break;
                  case u.OPS.setTextRise:
                    this.setTextRise(o[0]);
                    break;
                  case u.OPS.setTextRenderingMode:
                    this.setTextRenderingMode(o[0]);
                    break;
                  case u.OPS.setLineWidth:
                    this.setLineWidth(o[0]);
                    break;
                  case u.OPS.setLineJoin:
                    this.setLineJoin(o[0]);
                    break;
                  case u.OPS.setLineCap:
                    this.setLineCap(o[0]);
                    break;
                  case u.OPS.setMiterLimit:
                    this.setMiterLimit(o[0]);
                    break;
                  case u.OPS.setFillRGBColor:
                    this.setFillRGBColor(o[0], o[1], o[2]);
                    break;
                  case u.OPS.setStrokeRGBColor:
                    this.setStrokeRGBColor(o[0], o[1], o[2]);
                    break;
                  case u.OPS.setStrokeColorN:
                    this.setStrokeColorN(o);
                    break;
                  case u.OPS.setFillColorN:
                    this.setFillColorN(o);
                    break;
                  case u.OPS.shadingFill:
                    this.shadingFill(o[0]);
                    break;
                  case u.OPS.setDash:
                    this.setDash(o[0], o[1]);
                    break;
                  case u.OPS.setRenderingIntent:
                    this.setRenderingIntent(o[0]);
                    break;
                  case u.OPS.setFlatness:
                    this.setFlatness(o[0]);
                    break;
                  case u.OPS.setGState:
                    this.setGState(o[0]);
                    break;
                  case u.OPS.fill:
                    this.fill();
                    break;
                  case u.OPS.eoFill:
                    this.eoFill();
                    break;
                  case u.OPS.stroke:
                    this.stroke();
                    break;
                  case u.OPS.fillStroke:
                    this.fillStroke();
                    break;
                  case u.OPS.eoFillStroke:
                    this.eoFillStroke();
                    break;
                  case u.OPS.clip:
                    this.clip("nonzero");
                    break;
                  case u.OPS.eoClip:
                    this.clip("evenodd");
                    break;
                  case u.OPS.paintSolidColorImageMask:
                    this.paintSolidColorImageMask();
                    break;
                  case u.OPS.paintImageXObject:
                    this.paintImageXObject(o[0]);
                    break;
                  case u.OPS.paintInlineImageXObject:
                    this.paintInlineImageXObject(o[0]);
                    break;
                  case u.OPS.paintImageMaskXObject:
                    this.paintImageMaskXObject(o[0]);
                    break;
                  case u.OPS.paintFormXObjectBegin:
                    this.paintFormXObjectBegin(o[0], o[1]);
                    break;
                  case u.OPS.paintFormXObjectEnd:
                    this.paintFormXObjectEnd();
                    break;
                  case u.OPS.closePath:
                    this.closePath();
                    break;
                  case u.OPS.closeStroke:
                    this.closeStroke();
                    break;
                  case u.OPS.closeFillStroke:
                    this.closeFillStroke();
                    break;
                  case u.OPS.closeEOFillStroke:
                    this.closeEOFillStroke();
                    break;
                  case u.OPS.nextLine:
                    this.nextLine();
                    break;
                  case u.OPS.transform:
                    this.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
                    break;
                  case u.OPS.constructPath:
                    this.constructPath(o[0], o[1]);
                    break;
                  case u.OPS.endPath:
                    this.endPath();
                    break;
                  case 92:
                    this.group(i.items);
                    break;
                  default:
                    (0, u.warn)(`Unimplemented operator ${E}`);
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
            setTextMatrix(s, i, E, _, o, x) {
              const P = this.current;
              P.textMatrix = P.lineMatrix = [s, i, E, _, o, x], P.textMatrixScale = Math.hypot(s, i), P.x = P.lineX = 0, P.y = P.lineY = 0, P.xcoords = [], P.ycoords = [], P.tspan = this.svgFactory.createElement("svg:tspan"), P.tspan.setAttributeNS(null, "font-family", P.fontFamily), P.tspan.setAttributeNS(null, "font-size", `${h(P.fontSize)}px`), P.tspan.setAttributeNS(null, "y", h(-P.y)), P.txtElement = this.svgFactory.createElement("svg:text"), P.txtElement.append(P.tspan);
            }
            beginText() {
              const s = this.current;
              s.x = s.lineX = 0, s.y = s.lineY = 0, s.textMatrix = u.IDENTITY_MATRIX, s.lineMatrix = u.IDENTITY_MATRIX, s.textMatrixScale = 1, s.tspan = this.svgFactory.createElement("svg:tspan"), s.txtElement = this.svgFactory.createElement("svg:text"), s.txtgrp = this.svgFactory.createElement("svg:g"), s.xcoords = [], s.ycoords = [];
            }
            moveText(s, i) {
              const E = this.current;
              E.x = E.lineX += s, E.y = E.lineY += i, E.xcoords = [], E.ycoords = [], E.tspan = this.svgFactory.createElement("svg:tspan"), E.tspan.setAttributeNS(null, "font-family", E.fontFamily), E.tspan.setAttributeNS(null, "font-size", `${h(E.fontSize)}px`), E.tspan.setAttributeNS(null, "y", h(-E.y));
            }
            showText(s) {
              const i = this.current, E = i.font, _ = i.fontSize;
              if (_ === 0)
                return;
              const o = i.fontSizeScale, x = i.charSpacing, P = i.wordSpacing, Y = i.fontDirection, tt = i.textHScale * Y, M = E.vertical, K = M ? 1 : -1, Z = E.defaultVMetrics, Q = _ * i.fontMatrix[0];
              let v = 0;
              for (const lt of s) {
                if (lt === null) {
                  v += Y * P;
                  continue;
                } else if (typeof lt == "number") {
                  v += K * lt * _ / 1e3;
                  continue;
                }
                const _t = (lt.isSpace ? P : 0) + x, L = lt.fontChar;
                let a, l, R = lt.width;
                if (M) {
                  let W;
                  const nt = lt.vmetric || Z;
                  W = lt.vmetric ? nt[1] : R * 0.5, W = -W * Q;
                  const st = nt[2] * Q;
                  R = nt ? -nt[0] : R, a = W / o, l = (v + st) / o;
                } else
                  a = v / o, l = 0;
                (lt.isInFont || E.missingFile) && (i.xcoords.push(i.x + a), M && i.ycoords.push(-i.y + l), i.tspan.textContent += L);
                const X = M ? R * Q - _t * Y : R * Q + _t * Y;
                v += X;
              }
              i.tspan.setAttributeNS(null, "x", i.xcoords.map(h).join(" ")), M ? i.tspan.setAttributeNS(null, "y", i.ycoords.map(h).join(" ")) : i.tspan.setAttributeNS(null, "y", h(-i.y)), M ? i.y -= v : i.x += v * tt, i.tspan.setAttributeNS(null, "font-family", i.fontFamily), i.tspan.setAttributeNS(null, "font-size", `${h(i.fontSize)}px`), i.fontStyle !== $.fontStyle && i.tspan.setAttributeNS(null, "font-style", i.fontStyle), i.fontWeight !== $.fontWeight && i.tspan.setAttributeNS(null, "font-weight", i.fontWeight);
              const j = i.textRenderingMode & u.TextRenderingMode.FILL_STROKE_MASK;
              if (j === u.TextRenderingMode.FILL || j === u.TextRenderingMode.FILL_STROKE ? (i.fillColor !== $.fillColor && i.tspan.setAttributeNS(null, "fill", i.fillColor), i.fillAlpha < 1 && i.tspan.setAttributeNS(null, "fill-opacity", i.fillAlpha)) : i.textRenderingMode === u.TextRenderingMode.ADD_TO_PATH ? i.tspan.setAttributeNS(null, "fill", "transparent") : i.tspan.setAttributeNS(null, "fill", "none"), j === u.TextRenderingMode.STROKE || j === u.TextRenderingMode.FILL_STROKE) {
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
              i.font = E, this.embedFonts && !E.missingFile && !this.embeddedFonts[E.loadedName] && (this.addFontStyle(E), this.embeddedFonts[E.loadedName] = E), i.fontMatrix = E.fontMatrix || u.FONT_IDENTITY_MATRIX;
              let o = "normal";
              E.black ? o = "900" : E.bold && (o = "bold");
              const x = E.italic ? "italic" : "normal";
              _ < 0 ? (_ = -_, i.fontDirection = -1) : i.fontDirection = 1, i.fontSize = _, i.fontFamily = E.loadedName, i.fontWeight = o, i.fontStyle = x, i.tspan = this.svgFactory.createElement("svg:tspan"), i.tspan.setAttributeNS(null, "y", h(-i.y)), i.xcoords = [], i.ycoords = [];
            }
            endText() {
              var i;
              const s = this.current;
              s.textRenderingMode & u.TextRenderingMode.ADD_TO_PATH_FLAG && ((i = s.txtElement) != null && i.hasChildNodes()) && (s.element = s.txtElement, this.clip("nonzero"), this.endPath());
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
              this.current.strokeColor = u.Util.makeHexColor(s, i, E);
            }
            setFillAlpha(s) {
              this.current.fillAlpha = s;
            }
            setFillRGBColor(s, i, E) {
              this.current.fillColor = u.Util.makeHexColor(s, i, E), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = [];
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
              } = this.viewport, _ = u.Util.inverseTransform(this.transformMatrix), [o, x, P, Y] = u.Util.getAxialAlignedBoundingBox([0, 0, i, E], _), tt = this.svgFactory.createElement("svg:rect");
              tt.setAttributeNS(null, "x", o), tt.setAttributeNS(null, "y", x), tt.setAttributeNS(null, "width", P - o), tt.setAttributeNS(null, "height", Y - x), tt.setAttributeNS(null, "fill", this._makeShadingPattern(s)), this.current.fillAlpha < 1 && tt.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().append(tt);
            }
            _makeColorN_Pattern(s) {
              return s[0] === "TilingPattern" ? this._makeTilingPattern(s) : this._makeShadingPattern(s);
            }
            _makeTilingPattern(s) {
              const i = s[1], E = s[2], _ = s[3] || u.IDENTITY_MATRIX, [o, x, P, Y] = s[4], tt = s[5], M = s[6], K = s[7], Z = `shading${b++}`, [Q, v, j, D] = u.Util.normalizeRect([...u.Util.applyTransform([o, x], _), ...u.Util.applyTransform([P, Y], _)]), [lt, _t] = u.Util.singularValueDecompose2dScale(_), L = tt * lt, a = M * _t, l = this.svgFactory.createElement("svg:pattern");
              l.setAttributeNS(null, "id", Z), l.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), l.setAttributeNS(null, "width", L), l.setAttributeNS(null, "height", a), l.setAttributeNS(null, "x", `${Q}`), l.setAttributeNS(null, "y", `${v}`);
              const R = this.svg, X = this.transformMatrix, W = this.current.fillColor, nt = this.current.strokeColor, st = this.svgFactory.create(j - Q, D - v);
              if (this.svg = st, this.transformMatrix = _, K === 2) {
                const ut = u.Util.makeHexColor(...i);
                this.current.fillColor = ut, this.current.strokeColor = ut;
              }
              return this.executeOpTree(this.convertOpList(E)), this.svg = R, this.transformMatrix = X, this.current.fillColor = W, this.current.strokeColor = nt, l.append(st.childNodes[0]), this.defs.append(l), `url(#${Z})`;
            }
            _makeShadingPattern(s) {
              switch (typeof s == "string" && (s = this.objs.get(s)), s[0]) {
                case "RadialAxial":
                  const i = `shading${b++}`, E = s[3];
                  let _;
                  switch (s[1]) {
                    case "axial":
                      const o = s[4], x = s[5];
                      _ = this.svgFactory.createElement("svg:linearGradient"), _.setAttributeNS(null, "id", i), _.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), _.setAttributeNS(null, "x1", o[0]), _.setAttributeNS(null, "y1", o[1]), _.setAttributeNS(null, "x2", x[0]), _.setAttributeNS(null, "y2", x[1]);
                      break;
                    case "radial":
                      const P = s[4], Y = s[5], tt = s[6], M = s[7];
                      _ = this.svgFactory.createElement("svg:radialGradient"), _.setAttributeNS(null, "id", i), _.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), _.setAttributeNS(null, "cx", Y[0]), _.setAttributeNS(null, "cy", Y[1]), _.setAttributeNS(null, "r", M), _.setAttributeNS(null, "fx", P[0]), _.setAttributeNS(null, "fy", P[1]), _.setAttributeNS(null, "fr", tt);
                      break;
                    default:
                      throw new Error(`Unknown RadialAxial type: ${s[1]}`);
                  }
                  for (const o of E) {
                    const x = this.svgFactory.createElement("svg:stop");
                    x.setAttributeNS(null, "offset", o[0]), x.setAttributeNS(null, "stop-color", o[1]), _.append(x);
                  }
                  return this.defs.append(_), `url(#${i})`;
                case "Mesh":
                  return (0, u.warn)("Unimplemented pattern Mesh"), null;
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
              let _ = E.x, o = E.y, x = [], P = 0;
              for (const Y of s)
                switch (Y | 0) {
                  case u.OPS.rectangle:
                    _ = i[P++], o = i[P++];
                    const tt = i[P++], M = i[P++], K = _ + tt, Z = o + M;
                    x.push("M", h(_), h(o), "L", h(K), h(o), "L", h(K), h(Z), "L", h(_), h(Z), "Z");
                    break;
                  case u.OPS.moveTo:
                    _ = i[P++], o = i[P++], x.push("M", h(_), h(o));
                    break;
                  case u.OPS.lineTo:
                    _ = i[P++], o = i[P++], x.push("L", h(_), h(o));
                    break;
                  case u.OPS.curveTo:
                    _ = i[P + 4], o = i[P + 5], x.push("C", h(i[P]), h(i[P + 1]), h(i[P + 2]), h(i[P + 3]), h(_), h(o)), P += 6;
                    break;
                  case u.OPS.curveTo2:
                    x.push("C", h(_), h(o), h(i[P]), h(i[P + 1]), h(i[P + 2]), h(i[P + 3])), _ = i[P + 2], o = i[P + 3], P += 4;
                    break;
                  case u.OPS.curveTo3:
                    _ = i[P + 2], o = i[P + 3], x.push("C", h(i[P]), h(i[P + 1]), h(_), h(o), h(_), h(o)), P += 4;
                    break;
                  case u.OPS.closePath:
                    x.push("Z");
                    break;
                }
              x = x.join(" "), E.path && s.length > 0 && s[0] !== u.OPS.rectangle && s[0] !== u.OPS.moveTo ? x = E.path.getAttributeNS(null, "d") + x : (E.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().append(E.path)), E.path.setAttributeNS(null, "d", x), E.path.setAttributeNS(null, "fill", "none"), E.element = E.path, E.setCurrentPoint(_, o);
            }
            endPath() {
              const s = this.current;
              if (s.path = null, !this.pendingClip)
                return;
              if (!s.element) {
                this.pendingClip = null;
                return;
              }
              const i = `clippath${f++}`, E = this.svgFactory.createElement("svg:clipPath");
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
                    (0, u.warn)(`Unimplemented graphic state operator ${i}`);
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
                (0, u.warn)(`Dependent image with object ID ${s} is not ready yet`);
                return;
              }
              this.paintInlineImageXObject(i);
            }
            paintInlineImageXObject(s, i) {
              const E = s.width, _ = s.height, o = I(s, this.forceDataSchema, !!i), x = this.svgFactory.createElement("svg:rect");
              x.setAttributeNS(null, "x", "0"), x.setAttributeNS(null, "y", "0"), x.setAttributeNS(null, "width", h(E)), x.setAttributeNS(null, "height", h(_)), this.current.element = x, this.clip("nonzero");
              const P = this.svgFactory.createElement("svg:image");
              P.setAttributeNS(F, "xlink:href", o), P.setAttributeNS(null, "x", "0"), P.setAttributeNS(null, "y", h(-_)), P.setAttributeNS(null, "width", h(E) + "px"), P.setAttributeNS(null, "height", h(_) + "px"), P.setAttributeNS(null, "transform", `scale(${h(1 / E)} ${h(-1 / _)})`), i ? i.append(P) : this._ensureTransformGroup().append(P);
            }
            paintImageMaskXObject(s) {
              const i = this.getObject(s.data, s);
              if (i.bitmap) {
                (0, u.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
                return;
              }
              const E = this.current, _ = i.width, o = i.height, x = E.fillColor;
              E.maskId = `mask${y++}`;
              const P = this.svgFactory.createElement("svg:mask");
              P.setAttributeNS(null, "id", E.maskId);
              const Y = this.svgFactory.createElement("svg:rect");
              Y.setAttributeNS(null, "x", "0"), Y.setAttributeNS(null, "y", "0"), Y.setAttributeNS(null, "width", h(_)), Y.setAttributeNS(null, "height", h(o)), Y.setAttributeNS(null, "fill", x), Y.setAttributeNS(null, "mask", `url(#${E.maskId})`), this.defs.append(P), this._ensureTransformGroup().append(Y), this.paintInlineImageXObject(i, P);
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
          class C {
            static textContent(u) {
              const $ = [], V = {
                items: $,
                styles: /* @__PURE__ */ Object.create(null)
              };
              function F(c) {
                var I;
                if (!c)
                  return;
                let d = null;
                const r = c.name;
                if (r === "#text")
                  d = c.value;
                else if (C.shouldBuildText(r))
                  (I = c == null ? void 0 : c.attributes) != null && I.textContent ? d = c.attributes.textContent : c.value && (d = c.value);
                else
                  return;
                if (d !== null && $.push({
                  str: d
                }), !!c.children)
                  for (const k of c.children)
                    F(k);
              }
              return F(u), V;
            }
            static shouldBuildText(u) {
              return !(u === "textarea" || u === "input" || u === "option" || u === "select");
            }
          }
          e.XfaText = C;
        },
        /* 26 */
        /***/
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.TextLayerRenderTask = void 0, e.renderTextLayer = p, e.updateTextLayer = f;
          var n = C(1), u = C(6);
          const $ = 1e5, V = 30, F = 0.8, c = /* @__PURE__ */ new Map();
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
            for (let o = 0, x = _.length; o < x; o += 4)
              if (_[o] > 0) {
                i = V - Math.floor(o / 4 / V);
                break;
              }
            if (w.canvas.width = w.canvas.height = 0, i) {
              const o = i / (i + E);
              return c.set(y, o), o;
            }
            return c.set(y, F), F;
          }
          function I(y, b, g) {
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
            const o = Math.hypot(i[2], i[3]), x = o * r(_.fontFamily, y._isOffscreenCanvasSupported);
            let P, Y;
            E === 0 ? (P = i[4], Y = i[5] - x) : (P = i[4] + x * Math.sin(E), Y = i[5] - x * Math.cos(E));
            const tt = "calc(var(--scale-factor)*", M = w.style;
            y._container === y._rootContainer ? (M.left = `${(100 * P / y._pageWidth).toFixed(2)}%`, M.top = `${(100 * Y / y._pageHeight).toFixed(2)}%`) : (M.left = `${tt}${P.toFixed(2)}px)`, M.top = `${tt}${Y.toFixed(2)}px)`), M.fontSize = `${tt}${o.toFixed(2)}px)`, M.fontFamily = _.fontFamily, s.fontSize = o, w.setAttribute("role", "presentation"), w.textContent = b.str, w.dir = b.dir, y._fontInspectorEnabled && (w.dataset.fontName = b.fontName), E !== 0 && (s.angle = E * (180 / Math.PI));
            let K = !1;
            if (b.str.length > 1)
              K = !0;
            else if (b.str !== " " && b.transform[0] !== b.transform[3]) {
              const Z = Math.abs(b.transform[0]), Q = Math.abs(b.transform[3]);
              Z !== Q && Math.max(Z, Q) / Math.min(Z, Q) > 1.5 && (K = !0);
            }
            K && (s.canvasWidth = _.vertical ? b.height : b.width), y._textDivProperties.set(w, s), y._isReadableStream && y._layoutText(w);
          }
          function k(y) {
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
                fontFamily: x
              } = _, {
                canvasWidth: P,
                fontSize: Y
              } = w;
              (i !== Y || E !== x) && (s.font = `${Y * g}px ${x}`, y.prevFontSize = Y, y.prevFontFamily = x);
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
            if (b.length > $) {
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
                pageHeight: x,
                pageX: P,
                pageY: Y
              } = w.rawDims;
              this._transform = [1, 0, 0, -1, -P, Y + x], this._pageWidth = o, this._pageHeight = x, (0, u.setLayerDimensions)(g, w), this._capability.promise.finally(() => {
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
                this._textContentItemsStr.push(w.str), I(this, w, g);
              }
            }
            _layoutText(b) {
              const g = this._layoutTextParams.properties = this._textDivProperties.get(b);
              if (this._layoutTextParams.div = b, k(this._layoutTextParams), g.hasText && this._container.append(b), g.hasEOL) {
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
            !y.textContentSource && (y.textContent || y.textContentStream) && ((0, u.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."), y.textContentSource = y.textContent || y.textContentStream);
            const {
              container: b,
              viewport: g
            } = y, w = getComputedStyle(b), s = w.getPropertyValue("visibility"), i = parseFloat(w.getPropertyValue("--scale-factor"));
            s === "visible" && (!i || Math.abs(i - g.scale) > 1e-5) && console.error("The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.");
            const E = new h(y);
            return E._render(), E;
          }
          function f({
            container: y,
            viewport: b,
            textDivs: g,
            textDivProperties: w,
            isOffscreenCanvasSupported: s,
            mustRotate: i = !0,
            mustRescale: E = !0
          }) {
            if (i && (0, u.setLayerDimensions)(y, {
              rotation: b.rotation
            }), E) {
              const _ = d(0, s), x = {
                prevFontSize: null,
                prevFontFamily: null,
                div: null,
                scale: b.scale * (globalThis.devicePixelRatio || 1),
                properties: null,
                ctx: _
              };
              for (const P of g)
                x.properties = w.get(P), x.div = P, k(x);
            }
          }
        },
        /* 27 */
        /***/
        (A, e, C) => {
          var r, I, k, S, h, p, f, y, b, g, w, ni, i, Me, _, si, x, ri;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.AnnotationEditorLayer = void 0;
          var n = C(1), u = C(4), $ = C(28), V = C(33), F = C(6), c = C(34);
          const Y = class Y {
            constructor({
              uiManager: M,
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
              N(this, x);
              N(this, r, void 0);
              N(this, I, !1);
              N(this, k, null);
              N(this, S, this.pointerup.bind(this));
              N(this, h, this.pointerdown.bind(this));
              N(this, p, /* @__PURE__ */ new Map());
              N(this, f, !1);
              N(this, y, !1);
              N(this, b, !1);
              N(this, g, void 0);
              const lt = [$.FreeTextEditor, V.InkEditor, c.StampEditor];
              if (!Y._initialized) {
                Y._initialized = !0;
                for (const _t of lt)
                  _t.initialize(D);
              }
              M.registerEditorTypes(lt), it(this, g, M), this.pageIndex = K, this.div = Z, it(this, r, Q), it(this, k, v), this.viewport = j, t(this, g).addLayer(this);
            }
            get isEmpty() {
              return t(this, p).size === 0;
            }
            updateToolbar(M) {
              t(this, g).updateToolbar(M);
            }
            updateMode(M = t(this, g).getMode()) {
              q(this, x, ri).call(this), M === n.AnnotationEditorType.INK ? (this.addInkEditorIfNeeded(!1), this.disableClick()) : this.enableClick(), M !== n.AnnotationEditorType.NONE && (this.div.classList.toggle("freeTextEditing", M === n.AnnotationEditorType.FREETEXT), this.div.classList.toggle("inkEditing", M === n.AnnotationEditorType.INK), this.div.classList.toggle("stampEditing", M === n.AnnotationEditorType.STAMP), this.div.hidden = !1);
            }
            addInkEditorIfNeeded(M) {
              if (!M && t(this, g).getMode() !== n.AnnotationEditorType.INK)
                return;
              if (!M) {
                for (const Z of t(this, p).values())
                  if (Z.isEmpty()) {
                    Z.setInBackground();
                    return;
                  }
              }
              q(this, i, Me).call(this, {
                offsetX: 0,
                offsetY: 0
              }, !1).setInBackground();
            }
            setEditingState(M) {
              t(this, g).setEditingState(M);
            }
            addCommands(M) {
              t(this, g).addCommands(M);
            }
            enable() {
              this.div.style.pointerEvents = "auto";
              const M = /* @__PURE__ */ new Set();
              for (const Z of t(this, p).values())
                Z.enableEditing(), Z.annotationElementId && M.add(Z.annotationElementId);
              if (!t(this, k))
                return;
              const K = t(this, k).getEditableAnnotations();
              for (const Z of K) {
                if (Z.hide(), t(this, g).isDeletedAnnotationElement(Z.data.id) || M.has(Z.data.id))
                  continue;
                const Q = this.deserialize(Z);
                Q && (this.addOrRebuild(Q), Q.enableEditing());
              }
            }
            disable() {
              var K;
              it(this, b, !0), this.div.style.pointerEvents = "none";
              const M = /* @__PURE__ */ new Set();
              for (const Z of t(this, p).values()) {
                if (Z.disableEditing(), !Z.annotationElementId || Z.serialize() !== null) {
                  M.add(Z.annotationElementId);
                  continue;
                }
                (K = this.getEditableAnnotation(Z.annotationElementId)) == null || K.show(), Z.remove();
              }
              if (t(this, k)) {
                const Z = t(this, k).getEditableAnnotations();
                for (const Q of Z) {
                  const {
                    id: v
                  } = Q.data;
                  M.has(v) || t(this, g).isDeletedAnnotationElement(v) || Q.show();
                }
              }
              q(this, x, ri).call(this), this.isEmpty && (this.div.hidden = !0), it(this, b, !1);
            }
            getEditableAnnotation(M) {
              var K;
              return ((K = t(this, k)) == null ? void 0 : K.getEditableAnnotation(M)) || null;
            }
            setActiveEditor(M) {
              t(this, g).getActive() !== M && t(this, g).setActiveEditor(M);
            }
            enableClick() {
              this.div.addEventListener("pointerdown", t(this, h)), this.div.addEventListener("pointerup", t(this, S));
            }
            disableClick() {
              this.div.removeEventListener("pointerdown", t(this, h)), this.div.removeEventListener("pointerup", t(this, S));
            }
            attach(M) {
              t(this, p).set(M.id, M);
              const {
                annotationElementId: K
              } = M;
              K && t(this, g).isDeletedAnnotationElement(K) && t(this, g).removeDeletedAnnotationElement(M);
            }
            detach(M) {
              var K;
              t(this, p).delete(M.id), (K = t(this, r)) == null || K.removePointerInTextLayer(M.contentDiv), !t(this, b) && M.annotationElementId && t(this, g).addDeletedAnnotationElement(M);
            }
            remove(M) {
              this.detach(M), t(this, g).removeEditor(M), M.div.contains(document.activeElement) && setTimeout(() => {
                t(this, g).focusMainContainer();
              }, 0), M.div.remove(), M.isAttachedToDOM = !1, t(this, y) || this.addInkEditorIfNeeded(!1);
            }
            changeParent(M) {
              var K;
              M.parent !== this && (M.annotationElementId && (t(this, g).addDeletedAnnotationElement(M.annotationElementId), u.AnnotationEditor.deleteAnnotationElement(M), M.annotationElementId = null), this.attach(M), (K = M.parent) == null || K.detach(M), M.setParent(this), M.div && M.isAttachedToDOM && (M.div.remove(), this.div.append(M.div)));
            }
            add(M) {
              if (this.changeParent(M), t(this, g).addEditor(M), this.attach(M), !M.isAttachedToDOM) {
                const K = M.render();
                this.div.append(K), M.isAttachedToDOM = !0;
              }
              this.moveEditorInDOM(M), M.onceAdded(), t(this, g).addToAnnotationStorage(M);
            }
            moveEditorInDOM(M) {
              var Z;
              if (!M.isAttachedToDOM)
                return;
              const {
                activeElement: K
              } = document;
              M.div.contains(K) && (M._focusEventsAllowed = !1, setTimeout(() => {
                M.div.addEventListener("focusin", () => {
                  M._focusEventsAllowed = !0;
                }, {
                  once: !0
                }), K.focus();
              }, 0)), (Z = t(this, r)) == null || Z.moveElementInDOM(this.div, M.div, M.contentDiv, !0);
            }
            addOrRebuild(M) {
              M.needsToBeRebuilt() ? M.rebuild() : this.add(M);
            }
            addUndoableEditor(M) {
              const K = () => M._uiManager.rebuild(M), Z = () => {
                M.remove();
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
            pasteEditor(M, K) {
              t(this, g).updateToolbar(M), t(this, g).updateMode(M);
              const {
                offsetX: Z,
                offsetY: Q
              } = q(this, _, si).call(this), v = this.getNextId(), j = q(this, w, ni).call(this, {
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
            deserialize(M) {
              switch (M.annotationType ?? M.annotationEditorType) {
                case n.AnnotationEditorType.FREETEXT:
                  return $.FreeTextEditor.deserialize(M, this, t(this, g));
                case n.AnnotationEditorType.INK:
                  return V.InkEditor.deserialize(M, this, t(this, g));
                case n.AnnotationEditorType.STAMP:
                  return c.StampEditor.deserialize(M, this, t(this, g));
              }
              return null;
            }
            addNewEditor() {
              q(this, i, Me).call(this, q(this, _, si).call(this), !0);
            }
            setSelected(M) {
              t(this, g).setSelected(M);
            }
            toggleSelected(M) {
              t(this, g).toggleSelected(M);
            }
            isSelected(M) {
              return t(this, g).isSelected(M);
            }
            unselect(M) {
              t(this, g).unselect(M);
            }
            pointerup(M) {
              const {
                isMac: K
              } = n.FeatureTest.platform;
              if (!(M.button !== 0 || M.ctrlKey && K) && M.target === this.div && t(this, f)) {
                if (it(this, f, !1), !t(this, I)) {
                  it(this, I, !0);
                  return;
                }
                if (t(this, g).getMode() === n.AnnotationEditorType.STAMP) {
                  t(this, g).unselectAll();
                  return;
                }
                q(this, i, Me).call(this, M, !1);
              }
            }
            pointerdown(M) {
              if (t(this, f)) {
                it(this, f, !1);
                return;
              }
              const {
                isMac: K
              } = n.FeatureTest.platform;
              if (M.button !== 0 || M.ctrlKey && K || M.target !== this.div)
                return;
              it(this, f, !0);
              const Z = t(this, g).getActive();
              it(this, I, !Z || Z.isEmpty());
            }
            findNewParent(M, K, Z) {
              const Q = t(this, g).findParent(K, Z);
              return Q === null || Q === this ? !1 : (Q.changeParent(M), !0);
            }
            destroy() {
              var M, K;
              ((M = t(this, g).getActive()) == null ? void 0 : M.parent) === this && t(this, g).setActiveEditor(null);
              for (const Z of t(this, p).values())
                (K = t(this, r)) == null || K.removePointerInTextLayer(Z.contentDiv), Z.setParent(null), Z.isAttachedToDOM = !1, Z.div.remove();
              this.div = null, t(this, p).clear(), t(this, g).removeLayer(this);
            }
            render({
              viewport: M
            }) {
              this.viewport = M, (0, F.setLayerDimensions)(this.div, M);
              for (const K of t(this, g).getEditors(this.pageIndex))
                this.add(K);
              this.updateMode();
            }
            update({
              viewport: M
            }) {
              t(this, g).commitOrRemove(), this.viewport = M, (0, F.setLayerDimensions)(this.div, {
                rotation: M.rotation
              }), this.updateMode();
            }
            get pageDimensions() {
              const {
                pageWidth: M,
                pageHeight: K
              } = this.viewport.rawDims;
              return [M, K];
            }
          };
          r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), f = new WeakMap(), y = new WeakMap(), b = new WeakMap(), g = new WeakMap(), w = new WeakSet(), ni = function(M) {
            switch (t(this, g).getMode()) {
              case n.AnnotationEditorType.FREETEXT:
                return new $.FreeTextEditor(M);
              case n.AnnotationEditorType.INK:
                return new V.InkEditor(M);
              case n.AnnotationEditorType.STAMP:
                return new c.StampEditor(M);
            }
            return null;
          }, i = new WeakSet(), Me = function(M, K) {
            const Z = this.getNextId(), Q = q(this, w, ni).call(this, {
              parent: this,
              id: Z,
              x: M.offsetX,
              y: M.offsetY,
              uiManager: t(this, g),
              isCentered: K
            });
            return Q && this.add(Q), Q;
          }, _ = new WeakSet(), si = function() {
            const {
              x: M,
              y: K,
              width: Z,
              height: Q
            } = this.div.getBoundingClientRect(), v = Math.max(0, M), j = Math.max(0, K), D = Math.min(window.innerWidth, M + Z), lt = Math.min(window.innerHeight, K + Q), _t = (v + D) / 2 - M, L = (j + lt) / 2 - K, [a, l] = this.viewport.rotation % 180 === 0 ? [_t, L] : [L, _t];
            return {
              offsetX: a,
              offsetY: l
            };
          }, x = new WeakSet(), ri = function() {
            it(this, y, !0);
            for (const M of t(this, p).values())
              M.isEmpty() && M.remove();
            it(this, y, !1);
          }, Zt(Y, "_initialized", !1);
          let d = Y;
          e.AnnotationEditorLayer = d;
        },
        /* 28 */
        /***/
        (A, e, C) => {
          var c, d, r, I, k, S, h, p, f, y, an, g, on, s, ln, E, _e, o, ai, P, cn, tt, oi;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.FreeTextEditor = void 0;
          var n = C(1), u = C(5), $ = C(4), V = C(29);
          const K = class K extends $.AnnotationEditor {
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
              N(this, I, this.editorDivKeydown.bind(this));
              N(this, k, void 0);
              N(this, S, "");
              N(this, h, `${this.id}-editor`);
              N(this, p, void 0);
              N(this, f, null);
              it(this, k, v.color || K._defaultColor || $.AnnotationEditor._defaultLineColor), it(this, p, v.fontSize || K._defaultFontSize);
            }
            static get _keyboardManager() {
              const v = K.prototype, j = (_t) => _t.isEmpty(), D = u.AnnotationEditorUIManager.TRANSLATE_SMALL, lt = u.AnnotationEditorUIManager.TRANSLATE_BIG;
              return (0, n.shadow)(this, "_keyboardManager", new u.KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], v.commitOrRemove, {
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
                  q(this, y, an).call(this, j);
                  break;
                case n.AnnotationEditorParamsType.FREETEXT_COLOR:
                  q(this, g, on).call(this, j);
                  break;
              }
            }
            static get defaultPropertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.FREETEXT_SIZE, K._defaultFontSize], [n.AnnotationEditorParamsType.FREETEXT_COLOR, K._defaultColor || $.AnnotationEditor._defaultLineColor]];
            }
            get propertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.FREETEXT_SIZE, t(this, p)], [n.AnnotationEditorParamsType.FREETEXT_COLOR, t(this, k)]];
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
              this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(n.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", t(this, I)), this.editorDiv.addEventListener("focus", t(this, d)), this.editorDiv.addEventListener("blur", t(this, c)), this.editorDiv.addEventListener("input", t(this, r)));
            }
            disableEditMode() {
              this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", t(this, h)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", t(this, I)), this.editorDiv.removeEventListener("focus", t(this, d)), this.editorDiv.removeEventListener("blur", t(this, c)), this.editorDiv.removeEventListener("input", t(this, r)), this.div.focus({
                preventScroll: !0
              }), this.isEditing = !1, this.parent.div.classList.add("freeTextEditing"));
            }
            focusin(v) {
              this._focusEventsAllowed && (super.focusin(v), v.target !== this.editorDiv && this.editorDiv.focus());
            }
            onceAdded() {
              var v;
              if (this.width) {
                q(this, tt, oi).call(this);
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
              const v = t(this, S), j = it(this, S, q(this, s, ln).call(this).trimEnd());
              if (v === j)
                return;
              const D = (lt) => {
                if (it(this, S, lt), !lt) {
                  this.remove();
                  return;
                }
                q(this, o, ai).call(this), this._uiManager.rebuild(this), q(this, E, _e).call(this);
              };
              this.addCommands({
                cmd: () => {
                  D(j);
                },
                undo: () => {
                  D(v);
                },
                mustExec: !1
              }), q(this, E, _e).call(this);
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
              if (D.fontSize = `calc(${t(this, p)}px * var(--scale-factor))`, D.color = t(this, k), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, u.bindEvents)(this, this.div, ["dblclick", "keydown"]), this.width) {
                const [lt, _t] = this.parentDimensions;
                if (this.annotationElementId) {
                  const {
                    position: L
                  } = t(this, f);
                  let [a, l] = this.getInitialTranslation();
                  [a, l] = this.pageTranslationToScreen(a, l);
                  const [R, X] = this.pageDimensions, [W, nt] = this.pageTranslation;
                  let st, ut;
                  switch (this.rotation) {
                    case 0:
                      st = v + (L[0] - W) / R, ut = j + this.height - (L[1] - nt) / X;
                      break;
                    case 90:
                      st = v + (L[0] - W) / R, ut = j - (L[1] - nt) / X, [a, l] = [l, -a];
                      break;
                    case 180:
                      st = v - this.width + (L[0] - W) / R, ut = j - (L[1] - nt) / X, [a, l] = [-a, -l];
                      break;
                    case 270:
                      st = v + (L[0] - W - this.height * X) / R, ut = j + (L[1] - nt - this.width * R) / X, [a, l] = [-l, a];
                      break;
                  }
                  this.setAt(st * lt, ut * _t, a, l);
                } else
                  this.setAt(v * lt, j * _t, this.width * lt, this.height * _t);
                q(this, o, ai).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
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
                      fontSize: L,
                      fontColor: a
                    },
                    rect: l,
                    rotation: R,
                    id: X
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
                  fontSize: L,
                  value: W.join(`
`),
                  position: nt,
                  pageIndex: st - 1,
                  rect: l,
                  rotation: R,
                  id: X,
                  deleted: !1
                };
              }
              const _t = super.deserialize(v, j, D);
              return it(_t, p, v.fontSize), it(_t, k, n.Util.makeHexColor(...v.color)), it(_t, S, v.value), _t.annotationElementId = v.id || null, it(_t, f, lt), _t;
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
              const j = K._internalPadding * this.parentScale, D = this.getRect(j, j), lt = $.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : t(this, k)), _t = {
                annotationType: n.AnnotationEditorType.FREETEXT,
                color: lt,
                fontSize: t(this, p),
                value: t(this, S),
                pageIndex: this.pageIndex,
                rect: D,
                rotation: this.rotation
              };
              return v ? _t : this.annotationElementId && !q(this, P, cn).call(this, _t) ? null : (_t.id = this.annotationElementId, _t);
            }
          };
          c = new WeakMap(), d = new WeakMap(), r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), f = new WeakMap(), y = new WeakSet(), an = function(v) {
            const j = (lt) => {
              this.editorDiv.style.fontSize = `calc(${lt}px * var(--scale-factor))`, this.translate(0, -(lt - t(this, p)) * this.parentScale), it(this, p, lt), q(this, E, _e).call(this);
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
            const j = t(this, k);
            this.addCommands({
              cmd: () => {
                it(this, k, this.editorDiv.style.color = v);
              },
              undo: () => {
                it(this, k, this.editorDiv.style.color = j);
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
              } = this, L = _t.style.display;
              _t.style.display = "hidden", lt.div.append(this.div), D = _t.getBoundingClientRect(), _t.remove(), _t.style.display = L;
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
              pageIndex: L
            } = t(this, f);
            return v.value !== j || v.fontSize !== D || v.rect.some((a, l) => Math.abs(a - _t[l]) >= 1) || v.color.some((a, l) => a !== lt[l]) || v.pageIndex !== L;
          }, tt = new WeakSet(), oi = function(v = !1) {
            if (!this.annotationElementId)
              return;
            if (q(this, E, _e).call(this), !v && (this.width === 0 || this.height === 0)) {
              setTimeout(() => q(this, tt, oi).call(this, !0), 0);
              return;
            }
            const j = K._internalPadding * this.parentScale;
            t(this, f).rect = this.getRect(j, j);
          }, Zt(K, "_freeTextDefaultContent", ""), Zt(K, "_l10nPromise"), Zt(K, "_internalPadding", 0), Zt(K, "_defaultColor", null), Zt(K, "_defaultFontSize", 10), Zt(K, "_type", "freetext");
          let F = K;
          e.FreeTextEditor = F;
        },
        /* 29 */
        /***/
        (A, e, C) => {
          var l, R, re, W, hn, st, ut, wt, yt, Et, ot, At, St, Rt, Bt, kt, Ut, at, J, rt, dt, xt, li, jt, ci, Nt, hi, $t, Gt, Ct, m, B, ht, Lt, Pt, pt, vt, dn, gt, di;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.StampAnnotationElement = e.InkAnnotationElement = e.FreeTextAnnotationElement = e.AnnotationLayer = void 0;
          var n = C(1), u = C(6), $ = C(3), V = C(30), F = C(31), c = C(32);
          const d = 1e3, r = 9, I = /* @__PURE__ */ new WeakSet();
          function k(bt) {
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
                  return new f(O);
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
                  return new x(O);
                case n.AnnotationType.LINE:
                  return new P(O);
                case n.AnnotationType.SQUARE:
                  return new Y(O);
                case n.AnnotationType.CIRCLE:
                  return new tt(O);
                case n.AnnotationType.POLYLINE:
                  return new M(O);
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
                  return new L(O);
                default:
                  return new h(O);
              }
            }
          }
          class h {
            constructor(O, {
              isRenderable: T = !1,
              ignoreBorder: z = !1,
              createQuadrilaterals: H = !1
            } = {}) {
              N(this, l, !1);
              this.isRenderable = T, this.data = O.data, this.layer = O.layer, this.linkService = O.linkService, this.downloadManager = O.downloadManager, this.imageResourcesPath = O.imageResourcesPath, this.renderForms = O.renderForms, this.svgFactory = O.svgFactory, this.annotationStorage = O.annotationStorage, this.enableScripting = O.enableScripting, this.hasJSActions = O.hasJSActions, this._fieldObjects = O.fieldObjects, this.parent = O.parent, T && (this.container = this._createContainer(z)), H && this._createQuadrilaterals();
            }
            _createContainer(O) {
              const {
                data: T,
                parent: {
                  page: z,
                  viewport: H
                }
              } = this, et = document.createElement("section");
              et.setAttribute("data-annotation-id", T.id), et.style.zIndex = this.parent.zIndex++, this.data.popupRef && et.setAttribute("aria-haspopup", "dialog"), T.noRotate && et.classList.add("norotate");
              const {
                pageWidth: ft,
                pageHeight: Mt,
                pageX: G,
                pageY: ct
              } = H.rawDims;
              if (!T.rect || this instanceof _) {
                const {
                  rotation: Vt
                } = T;
                return !T.hasOwnCanvas && Vt !== 0 && this.setRotation(Vt, et), et;
              }
              const {
                width: mt,
                height: Ft
              } = k(T.rect), Tt = n.Util.normalizeRect([T.rect[0], z.view[3] - T.rect[1] + z.view[1], T.rect[2], z.view[3] - T.rect[3] + z.view[1]]);
              if (!O && T.borderStyle.width > 0) {
                et.style.borderWidth = `${T.borderStyle.width}px`;
                const Vt = T.borderStyle.horizontalCornerRadius, zt = T.borderStyle.verticalCornerRadius;
                if (Vt > 0 || zt > 0) {
                  const qt = `calc(${Vt}px * var(--scale-factor)) / calc(${zt}px * var(--scale-factor))`;
                  et.style.borderRadius = qt;
                } else if (this instanceof s) {
                  const qt = `calc(${mt}px * var(--scale-factor)) / calc(${Ft}px * var(--scale-factor))`;
                  et.style.borderRadius = qt;
                }
                switch (T.borderStyle.style) {
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
                const Xt = T.borderColor || null;
                Xt ? (it(this, l, !0), et.style.borderColor = n.Util.makeHexColor(Xt[0] | 0, Xt[1] | 0, Xt[2] | 0)) : et.style.borderWidth = 0;
              }
              et.style.left = `${100 * (Tt[0] - G) / ft}%`, et.style.top = `${100 * (Tt[1] - ct) / Mt}%`;
              const {
                rotation: Dt
              } = T;
              return T.hasOwnCanvas || Dt === 0 ? (et.style.width = `${100 * mt / ft}%`, et.style.height = `${100 * Ft / Mt}%`) : this.setRotation(Dt, et), et;
            }
            setRotation(O, T = this.container) {
              if (!this.data.rect)
                return;
              const {
                pageWidth: z,
                pageHeight: H
              } = this.parent.viewport.rawDims, {
                width: et,
                height: ft
              } = k(this.data.rect);
              let Mt, G;
              O % 180 === 0 ? (Mt = 100 * et / z, G = 100 * ft / H) : (Mt = 100 * ft / z, G = 100 * et / H), T.style.width = `${Mt}%`, T.style.height = `${G}%`, T.setAttribute("data-main-rotation", (360 - O) % 360);
            }
            get _commonActions() {
              const O = (T, z, H) => {
                const et = H.detail[T], ft = et[0], Mt = et.slice(1);
                H.target.style[z] = V.ColorConverters[`${ft}_HTML`](Mt), this.annotationStorage.setValue(this.data.id, {
                  [z]: V.ColorConverters[`${ft}_rgb`](Mt)
                });
              };
              return (0, n.shadow)(this, "_commonActions", {
                display: (T) => {
                  const {
                    display: z
                  } = T.detail, H = z % 2 === 1;
                  this.container.style.visibility = H ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                    noView: H,
                    noPrint: z === 1 || z === 2
                  });
                },
                print: (T) => {
                  this.annotationStorage.setValue(this.data.id, {
                    noPrint: !T.detail.print
                  });
                },
                hidden: (T) => {
                  const {
                    hidden: z
                  } = T.detail;
                  this.container.style.visibility = z ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                    noPrint: z,
                    noView: z
                  });
                },
                focus: (T) => {
                  setTimeout(() => T.target.focus({
                    preventScroll: !1
                  }), 0);
                },
                userName: (T) => {
                  T.target.title = T.detail.userName;
                },
                readonly: (T) => {
                  T.target.disabled = T.detail.readonly;
                },
                required: (T) => {
                  this._setRequired(T.target, T.detail.required);
                },
                bgColor: (T) => {
                  O("bgColor", "backgroundColor", T);
                },
                fillColor: (T) => {
                  O("fillColor", "backgroundColor", T);
                },
                fgColor: (T) => {
                  O("fgColor", "color", T);
                },
                textColor: (T) => {
                  O("textColor", "color", T);
                },
                borderColor: (T) => {
                  O("borderColor", "borderColor", T);
                },
                strokeColor: (T) => {
                  O("strokeColor", "borderColor", T);
                },
                rotation: (T) => {
                  const z = T.detail.rotation;
                  this.setRotation(z), this.annotationStorage.setValue(this.data.id, {
                    rotation: z
                  });
                }
              });
            }
            _dispatchEventFromSandbox(O, T) {
              const z = this._commonActions;
              for (const H of Object.keys(T.detail)) {
                const et = O[H] || z[H];
                et == null || et(T);
              }
            }
            _setDefaultPropertiesFromJS(O) {
              if (!this.enableScripting)
                return;
              const T = this.annotationStorage.getRawValue(this.data.id);
              if (!T)
                return;
              const z = this._commonActions;
              for (const [H, et] of Object.entries(T)) {
                const ft = z[H];
                if (ft) {
                  const Mt = {
                    detail: {
                      [H]: et
                    },
                    target: O
                  };
                  ft(Mt), delete T[H];
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
              const [T, z, H, et] = this.data.rect;
              if (O.length === 1) {
                const [, {
                  x: zt,
                  y: Xt
                }, {
                  x: qt,
                  y: Qt
                }] = O[0];
                if (H === zt && et === Xt && T === qt && z === Qt)
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
              const G = H - T, ct = et - z, {
                svgFactory: mt
              } = this, Ft = mt.createElement("svg");
              Ft.classList.add("quadrilateralsContainer"), Ft.setAttribute("width", 0), Ft.setAttribute("height", 0);
              const Tt = mt.createElement("defs");
              Ft.append(Tt);
              const Dt = mt.createElement("clipPath"), Vt = `clippath_${this.data.id}`;
              Dt.setAttribute("id", Vt), Dt.setAttribute("clipPathUnits", "objectBoundingBox"), Tt.append(Dt);
              for (const [, {
                x: zt,
                y: Xt
              }, {
                x: qt,
                y: Qt
              }] of O) {
                const Yt = mt.createElement("rect"), Kt = (qt - T) / G, te = (et - Xt) / ct, Jt = (zt - qt) / G, ee = (Xt - Qt) / ct;
                Yt.setAttribute("x", Kt), Yt.setAttribute("y", te), Yt.setAttribute("width", Jt), Yt.setAttribute("height", ee), Dt.append(Yt), Mt == null || Mt.push(`<rect vector-effect="non-scaling-stroke" x="${Kt}" y="${te}" width="${Jt}" height="${ee}"/>`);
              }
              t(this, l) && (Mt.push("</g></svg>')"), ft.backgroundImage = Mt.join("")), this.container.append(Ft), this.container.style.clipPath = `url(#${Vt})`;
            }
            _createPopup() {
              const {
                container: O,
                data: T
              } = this;
              O.setAttribute("aria-haspopup", "dialog");
              const z = new _({
                data: {
                  color: T.color,
                  titleObj: T.titleObj,
                  modificationDate: T.modificationDate,
                  contentsObj: T.contentsObj,
                  richText: T.richText,
                  parentRect: T.rect,
                  borderStyle: 0,
                  id: `popup_${T.id}`,
                  rotation: T.rotation
                },
                parent: this.parent,
                elements: [this]
              });
              this.parent.div.append(z.render());
            }
            render() {
              (0, n.unreachable)("Abstract method `AnnotationElement.render` called");
            }
            _getElementsByName(O, T = null) {
              const z = [];
              if (this._fieldObjects) {
                const H = this._fieldObjects[O];
                if (H)
                  for (const {
                    page: et,
                    id: ft,
                    exportValues: Mt
                  } of H) {
                    if (et === -1 || ft === T)
                      continue;
                    const G = typeof Mt == "string" ? Mt : null, ct = document.querySelector(`[data-element-id="${ft}"]`);
                    if (ct && !I.has(ct)) {
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
                ft !== T && I.has(H) && z.push({
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
                for (const T of O)
                  T.classList.add("highlightArea");
              else
                O.classList.add("highlightArea");
            }
            _editOnDoubleClick() {
              const {
                annotationEditorType: O,
                data: {
                  id: T
                }
              } = this;
              this.container.addEventListener("dblclick", () => {
                var z;
                (z = this.linkService.eventBus) == null || z.dispatch("switchannotationeditormode", {
                  source: this,
                  mode: O,
                  editId: T
                });
              });
            }
          }
          l = new WeakMap();
          class p extends h {
            constructor(T, z = null) {
              super(T, {
                isRenderable: !0,
                ignoreBorder: !!(z != null && z.ignoreBorder),
                createQuadrilaterals: !0
              });
              N(this, R);
              N(this, W);
              this.isTooltipOnly = T.data.isTooltipOnly;
            }
            render() {
              const {
                data: T,
                linkService: z
              } = this, H = document.createElement("a");
              H.setAttribute("data-element-id", T.id);
              let et = !1;
              return T.url ? (z.addLinkAttributes(H, T.url, T.newWindow), et = !0) : T.action ? (this._bindNamedAction(H, T.action), et = !0) : T.attachment ? (this._bindAttachment(H, T.attachment), et = !0) : T.setOCGState ? (q(this, W, hn).call(this, H, T.setOCGState), et = !0) : T.dest ? (this._bindLink(H, T.dest), et = !0) : (T.actions && (T.actions.Action || T.actions["Mouse Up"] || T.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(H, T), et = !0), T.resetForm ? (this._bindResetFormAction(H, T.resetForm), et = !0) : this.isTooltipOnly && !et && (this._bindLink(H, ""), et = !0)), this.container.classList.add("linkAnnotation"), et && this.container.append(H), this.container;
            }
            _bindLink(T, z) {
              T.href = this.linkService.getDestinationHash(z), T.onclick = () => (z && this.linkService.goToDestination(z), !1), (z || z === "") && q(this, R, re).call(this);
            }
            _bindNamedAction(T, z) {
              T.href = this.linkService.getAnchorUrl(""), T.onclick = () => (this.linkService.executeNamedAction(z), !1), q(this, R, re).call(this);
            }
            _bindAttachment(T, z) {
              T.href = this.linkService.getAnchorUrl(""), T.onclick = () => {
                var H;
                return (H = this.downloadManager) == null || H.openOrDownloadData(this.container, z.content, z.filename), !1;
              }, q(this, R, re).call(this);
            }
            _bindJSAction(T, z) {
              T.href = this.linkService.getAnchorUrl("");
              const H = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
              for (const et of Object.keys(z.actions)) {
                const ft = H.get(et);
                ft && (T[ft] = () => {
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
              T.onclick || (T.onclick = () => !1), q(this, R, re).call(this);
            }
            _bindResetFormAction(T, z) {
              const H = T.onclick;
              if (H || (T.href = this.linkService.getAnchorUrl("")), q(this, R, re).call(this), !this._fieldObjects) {
                (0, n.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), H || (T.onclick = () => !1);
                return;
              }
              T.onclick = () => {
                var Ft;
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
                    if (!I.has(Vt)) {
                      (0, n.warn)(`_bindResetFormAction - element not allowed: ${Dt}`);
                      continue;
                    }
                  } else
                    continue;
                  Vt.dispatchEvent(new Event("resetform"));
                }
                return this.enableScripting && ((Ft = this.linkService.eventBus) == null || Ft.dispatch("dispatcheventinsandbox", {
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
          }, W = new WeakSet(), hn = function(T, z) {
            T.href = this.linkService.getAnchorUrl(""), T.onclick = () => (this.linkService.executeSetOCGState(z), !1), q(this, R, re).call(this);
          };
          class f extends h {
            constructor(O) {
              var z, H, et;
              const T = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: T
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
              var T;
              this.data.hasOwnCanvas && (((T = O.previousSibling) == null ? void 0 : T.nodeName) === "CANVAS" && (O.previousSibling.hidden = !0), O.hidden = !1);
            }
            _getKeyModifier(O) {
              const {
                isWin: T,
                isMac: z
              } = n.FeatureTest.platform;
              return T && O.ctrlKey || z && O.metaKey;
            }
            _setEventListener(O, T, z, H) {
              T.includes("mouse") ? O.addEventListener(T, (et) => {
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
              }) : O.addEventListener(T, (et) => {
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
            _setEventListeners(O, T, z) {
              var H;
              for (const [et, ft] of T)
                (ft === "Action" || (H = this.data.actions) != null && H[ft]) && this._setEventListener(O, et, ft, z);
            }
            _setBackgroundColor(O) {
              const T = this.data.backgroundColor || null;
              O.style.backgroundColor = T === null ? "transparent" : n.Util.makeHexColor(T[0], T[1], T[2]);
            }
            _setTextStyle(O) {
              const T = ["left", "center", "right"], {
                fontColor: z
              } = this.data.defaultAppearanceData, H = this.data.defaultAppearanceData.fontSize || r, et = O.style;
              let ft;
              const Mt = 2, G = (ct) => Math.round(10 * ct) / 10;
              if (this.data.multiLine) {
                const ct = Math.abs(this.data.rect[3] - this.data.rect[1] - Mt), mt = Math.round(ct / (n.LINE_FACTOR * H)) || 1, Ft = ct / mt;
                ft = Math.min(H, G(Ft / n.LINE_FACTOR));
              } else {
                const ct = Math.abs(this.data.rect[3] - this.data.rect[1] - Mt);
                ft = Math.min(H, G(ct / n.LINE_FACTOR));
              }
              et.fontSize = `calc(${ft}px * var(--scale-factor))`, et.color = n.Util.makeHexColor(z[0], z[1], z[2]), this.data.textAlignment !== null && (et.textAlign = T[this.data.textAlignment]);
            }
            _setRequired(O, T) {
              T ? O.setAttribute("required", !0) : O.removeAttribute("required"), O.setAttribute("aria-required", T);
            }
          }
          class b extends y {
            constructor(O) {
              const T = O.renderForms || !O.data.hasAppearance && !!O.data.fieldValue;
              super(O, {
                isRenderable: T
              });
            }
            setPropertyOnSiblings(O, T, z, H) {
              const et = this.annotationStorage;
              for (const ft of this._getElementsByName(O.name, O.id))
                ft.domElement && (ft.domElement[T] = z), et.setValue(ft.id, {
                  [H]: z
                });
            }
            render() {
              var H, et;
              const O = this.annotationStorage, T = this.data.id;
              this.container.classList.add("textWidgetAnnotation");
              let z = null;
              if (this.renderForms) {
                const ft = O.getValue(T, {
                  value: this.data.fieldValue
                });
                let Mt = ft.value || "";
                const G = O.getValue(T, {
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
                this.data.multiLine ? (z = document.createElement("textarea"), z.textContent = ct ?? Mt, this.data.doNotScroll && (z.style.overflowY = "hidden")) : (z = document.createElement("input"), z.type = "text", z.setAttribute("value", ct ?? Mt), this.data.doNotScroll && (z.style.overflowX = "hidden")), this.data.hasOwnCanvas && (z.hidden = !0), I.add(z), z.setAttribute("data-element-id", T), z.disabled = this.data.readOnly, z.name = this.data.fieldName, z.tabIndex = d, this._setRequired(z, this.data.required), G && (z.maxLength = G), z.addEventListener("input", (Tt) => {
                  O.setValue(T, {
                    value: Tt.target.value
                  }), this.setPropertyOnSiblings(z, "value", Tt.target.value, "value"), mt.formattedValue = null;
                }), z.addEventListener("resetform", (Tt) => {
                  const Dt = this.data.defaultFieldValue ?? "";
                  z.value = mt.userValue = Dt, mt.formattedValue = null;
                });
                let Ft = (Tt) => {
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
                        mt.userValue = zt.detail.value ?? "", O.setValue(T, {
                          value: mt.userValue.toString()
                        }), zt.target.value = mt.userValue;
                      },
                      formattedValue(zt) {
                        const {
                          formattedValue: Xt
                        } = zt.detail;
                        mt.formattedValue = Xt, Xt != null && zt.target !== document.activeElement && (zt.target.value = Xt), O.setValue(T, {
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
                        !Qt || Qt.length <= Xt || (Qt = Qt.slice(0, Xt), qt.value = mt.userValue = Qt, O.setValue(T, {
                          value: Qt
                        }), (Yt = this.linkService.eventBus) == null || Yt.dispatch("dispatcheventinsandbox", {
                          source: this,
                          detail: {
                            id: T,
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
                        id: T,
                        name: "Keystroke",
                        value: zt,
                        willCommit: !0,
                        commitKey: Vt,
                        selStart: Dt.target.selectionStart,
                        selEnd: Dt.target.selectionEnd
                      }
                    }));
                  });
                  const Tt = Ft;
                  Ft = null, z.addEventListener("blur", (Dt) => {
                    var zt;
                    if (!Dt.relatedTarget)
                      return;
                    const {
                      value: Vt
                    } = Dt.target;
                    mt.userValue = Vt, mt.lastCommittedValue !== Vt && ((zt = this.linkService.eventBus) == null || zt.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: T,
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
                        id: T,
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
                if (Ft && z.addEventListener("blur", Ft), this.data.comb) {
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
              const O = this.annotationStorage, T = this.data, z = T.id;
              let H = O.getValue(z, {
                value: T.exportValue === T.fieldValue
              }).value;
              typeof H == "string" && (H = H !== "Off", O.setValue(z, {
                value: H
              })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
              const et = document.createElement("input");
              return I.add(et), et.setAttribute("data-element-id", z), et.disabled = T.readOnly, this._setRequired(et, this.data.required), et.type = "checkbox", et.name = T.fieldName, H && et.setAttribute("checked", !0), et.setAttribute("exportValue", T.exportValue), et.tabIndex = d, et.addEventListener("change", (ft) => {
                const {
                  name: Mt,
                  checked: G
                } = ft.target;
                for (const ct of this._getElementsByName(Mt, z)) {
                  const mt = G && ct.exportValue === T.exportValue;
                  ct.domElement && (ct.domElement.checked = mt), O.setValue(ct.id, {
                    value: mt
                  });
                }
                O.setValue(z, {
                  value: G
                });
              }), et.addEventListener("resetform", (ft) => {
                const Mt = T.defaultFieldValue || "Off";
                ft.target.checked = Mt === T.exportValue;
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
              const O = this.annotationStorage, T = this.data, z = T.id;
              let H = O.getValue(z, {
                value: T.fieldValue === T.buttonValue
              }).value;
              typeof H == "string" && (H = H !== T.buttonValue, O.setValue(z, {
                value: H
              }));
              const et = document.createElement("input");
              if (I.add(et), et.setAttribute("data-element-id", z), et.disabled = T.readOnly, this._setRequired(et, this.data.required), et.type = "radio", et.name = T.fieldName, H && et.setAttribute("checked", !0), et.tabIndex = d, et.addEventListener("change", (ft) => {
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
                const Mt = T.defaultFieldValue;
                ft.target.checked = Mt != null && Mt === T.buttonValue;
              }), this.enableScripting && this.hasJSActions) {
                const ft = T.buttonValue;
                et.addEventListener("updatefromsandbox", (Mt) => {
                  const G = {
                    value: (ct) => {
                      const mt = ft === ct.detail.value;
                      for (const Ft of this._getElementsByName(ct.target.name)) {
                        const Tt = mt && Ft.id === z;
                        Ft.domElement && (Ft.domElement.checked = Tt), O.setValue(Ft.id, {
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
              const T = O.lastChild;
              return this.enableScripting && this.hasJSActions && T && (this._setDefaultPropertiesFromJS(T), T.addEventListener("updatefromsandbox", (z) => {
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
              const O = this.annotationStorage, T = this.data.id, z = O.getValue(T, {
                value: this.data.fieldValue
              }), H = document.createElement("select");
              I.add(H), H.setAttribute("data-element-id", T), H.disabled = this.data.readOnly, this._setRequired(H, this.data.required), H.name = this.data.fieldName, H.tabIndex = d;
              let et = this.data.combo && this.data.options.length > 0;
              this.data.combo || (H.size = this.data.options.length, this.data.multiSelect && (H.multiple = !0)), H.addEventListener("resetform", (mt) => {
                const Ft = this.data.defaultFieldValue;
                for (const Tt of H.options)
                  Tt.selected = Tt.value === Ft;
              });
              for (const mt of this.data.options) {
                const Ft = document.createElement("option");
                Ft.textContent = mt.displayValue, Ft.value = mt.exportValue, z.value.includes(mt.exportValue) && (Ft.setAttribute("selected", !0), et = !1), H.append(Ft);
              }
              let ft = null;
              if (et) {
                const mt = document.createElement("option");
                mt.value = " ", mt.setAttribute("hidden", !0), mt.setAttribute("selected", !0), H.prepend(mt), ft = () => {
                  mt.remove(), H.removeEventListener("input", ft), ft = null;
                }, H.addEventListener("input", ft);
              }
              const Mt = (mt) => {
                const Ft = mt ? "value" : "textContent", {
                  options: Tt,
                  multiple: Dt
                } = H;
                return Dt ? Array.prototype.filter.call(Tt, (Vt) => Vt.selected).map((Vt) => Vt[Ft]) : Tt.selectedIndex === -1 ? null : Tt[Tt.selectedIndex][Ft];
              };
              let G = Mt(!1);
              const ct = (mt) => {
                const Ft = mt.target.options;
                return Array.prototype.map.call(Ft, (Tt) => ({
                  displayValue: Tt.textContent,
                  exportValue: Tt.value
                }));
              };
              return this.enableScripting && this.hasJSActions ? (H.addEventListener("updatefromsandbox", (mt) => {
                const Ft = {
                  value(Tt) {
                    ft == null || ft();
                    const Dt = Tt.detail.value, Vt = new Set(Array.isArray(Dt) ? Dt : [Dt]);
                    for (const zt of H.options)
                      zt.selected = Vt.has(zt.value);
                    O.setValue(T, {
                      value: Mt(!0)
                    }), G = Mt(!1);
                  },
                  multipleSelection(Tt) {
                    H.multiple = !0;
                  },
                  remove(Tt) {
                    const Dt = H.options, Vt = Tt.detail.remove;
                    Dt[Vt].selected = !1, H.remove(Vt), Dt.length > 0 && Array.prototype.findIndex.call(Dt, (Xt) => Xt.selected) === -1 && (Dt[0].selected = !0), O.setValue(T, {
                      value: Mt(!0),
                      items: ct(Tt)
                    }), G = Mt(!1);
                  },
                  clear(Tt) {
                    for (; H.length !== 0; )
                      H.remove(0);
                    O.setValue(T, {
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
                    qt.textContent = Vt, qt.value = zt, Xt ? Xt.before(qt) : H.append(qt), O.setValue(T, {
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
                    H.options.length > 0 && (H.options[0].selected = !0), O.setValue(T, {
                      value: Mt(!0),
                      items: ct(Tt)
                    }), G = Mt(!1);
                  },
                  indices(Tt) {
                    const Dt = new Set(Tt.detail.indices);
                    for (const Vt of Tt.target.options)
                      Vt.selected = Dt.has(Vt.index);
                    O.setValue(T, {
                      value: Mt(!0)
                    }), G = Mt(!1);
                  },
                  editable(Tt) {
                    Tt.target.disabled = !Tt.detail.editable;
                  }
                };
                this._dispatchEventFromSandbox(Ft, mt);
              }), H.addEventListener("input", (mt) => {
                var Tt;
                const Ft = Mt(!0);
                O.setValue(T, {
                  value: Ft
                }), mt.preventDefault(), (Tt = this.linkService.eventBus) == null || Tt.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: T,
                    name: "Keystroke",
                    value: G,
                    changeEx: Ft,
                    willCommit: !1,
                    commitKey: 1,
                    keyDown: !1
                  }
                });
              }), this._setEventListeners(H, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (mt) => mt.target.value)) : H.addEventListener("input", function(mt) {
                O.setValue(T, {
                  value: Mt(!0)
                });
              }), this.data.combo && this._setTextStyle(H), this._setBackgroundColor(H), this._setDefaultPropertiesFromJS(H), this.container.append(H), this.container;
            }
          }
          class _ extends h {
            constructor(O) {
              var et, ft, Mt;
              const {
                data: T,
                elements: z
              } = O, H = !!((et = T.titleObj) != null && et.str || (ft = T.contentsObj) != null && ft.str || (Mt = T.richText) != null && Mt.str);
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
              }), T = [];
              for (const z of this.elements)
                z.popup = O, T.push(z.data.id), z.addHighlightArea();
              return this.container.setAttribute("aria-controls", T.join(",")), this.container;
            }
          }
          class o {
            constructor({
              container: O,
              color: T,
              elements: z,
              titleObj: H,
              modificationDate: et,
              contentsObj: ft,
              richText: Mt,
              parent: G,
              rect: ct,
              parentRect: mt,
              open: Ft
            }) {
              N(this, xt);
              N(this, jt);
              N(this, Nt);
              N(this, st, null);
              N(this, ut, q(this, Nt, hi).bind(this));
              N(this, wt, q(this, jt, ci).bind(this));
              N(this, yt, q(this, xt, li).bind(this));
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
              it(this, ot, O), it(this, rt, H), it(this, At, ft), it(this, J, Mt), it(this, Rt, G), it(this, Et, T), it(this, at, ct), it(this, Bt, mt), it(this, St, z);
              const Tt = u.PDFDateString.toDateObject(et);
              Tt && it(this, st, G.l10n.get("annotation_date_string", {
                date: Tt.toLocaleDateString(),
                time: Tt.toLocaleTimeString()
              })), this.trigger = z.flatMap((Dt) => Dt.getElementsToTriggerPopup());
              for (const Dt of this.trigger)
                Dt.addEventListener("click", t(this, yt)), Dt.addEventListener("mouseenter", t(this, wt)), Dt.addEventListener("mouseleave", t(this, ut));
              t(this, ot).hidden = !0, Ft && q(this, xt, li).call(this);
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
                    pageWidth: T,
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
              let Ft = !!t(this, Bt), Tt = Ft ? t(this, Bt) : t(this, at);
              for (const Yt of t(this, St))
                if (!Tt || n.Util.intersect(Yt.data.rect, Tt) !== null) {
                  Tt = Yt.data.rect, Ft = !0;
                  break;
                }
              const Dt = n.Util.normalizeRect([Tt[0], O[3] - Tt[1] + O[1], Tt[2], O[3] - Tt[3] + O[1]]), Vt = 5, zt = Ft ? Tt[2] - Tt[0] + Vt : 0, Xt = Dt[0] + zt, qt = Dt[1], {
                style: Qt
              } = t(this, ot);
              Qt.left = `${100 * (Xt - H) / T}%`, Qt.top = `${100 * (qt - et) / z}%`, t(this, ot).append(ft);
            }
            _formatContents({
              str: O,
              dir: T
            }) {
              const z = document.createElement("p");
              z.classList.add("popupContent"), z.dir = T;
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
            it(this, kt, !t(this, kt)), t(this, kt) ? (q(this, jt, ci).call(this), t(this, ot).addEventListener("click", t(this, yt))) : (q(this, Nt, hi).call(this), t(this, ot).removeEventListener("click", t(this, yt)));
          }, jt = new WeakSet(), ci = function() {
            t(this, Ut) || this.render(), this.isVisible ? t(this, kt) && t(this, ot).classList.add("focused") : (t(this, ot).hidden = !1, t(this, ot).style.zIndex = parseInt(t(this, ot).style.zIndex) + 1e3);
          }, Nt = new WeakSet(), hi = function() {
            t(this, ot).classList.remove("focused"), !(t(this, kt) || !this.isVisible) && (t(this, ot).hidden = !0, t(this, ot).style.zIndex = parseInt(t(this, ot).style.zIndex) - 1e3);
          };
          class x extends h {
            constructor(O) {
              var z, H, et;
              const T = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: T,
                ignoreBorder: !0
              }), this.textContent = O.data.textContent, this.textPosition = O.data.textPosition, this.annotationEditorType = n.AnnotationEditorType.FREETEXT;
            }
            render() {
              if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
                const O = document.createElement("div");
                O.classList.add("annotationTextContent"), O.setAttribute("role", "comment");
                for (const T of this.textContent) {
                  const z = document.createElement("span");
                  z.textContent = T, O.append(z);
                }
                this.container.append(O);
              }
              return this.data.popupRef || this._createPopup(), this._editOnDoubleClick(), this.container;
            }
          }
          e.FreeTextAnnotationElement = x;
          class P extends h {
            constructor(T) {
              var H, et, ft;
              const z = !!(T.data.popupRef || (H = T.data.titleObj) != null && H.str || (et = T.data.contentsObj) != null && et.str || (ft = T.data.richText) != null && ft.str);
              super(T, {
                isRenderable: z,
                ignoreBorder: !0
              });
              N(this, $t, null);
            }
            render() {
              this.container.classList.add("lineAnnotation");
              const T = this.data, {
                width: z,
                height: H
              } = k(T.rect), et = this.svgFactory.create(z, H, !0), ft = it(this, $t, this.svgFactory.createElement("svg:line"));
              return ft.setAttribute("x1", T.rect[2] - T.lineCoordinates[0]), ft.setAttribute("y1", T.rect[3] - T.lineCoordinates[1]), ft.setAttribute("x2", T.rect[2] - T.lineCoordinates[2]), ft.setAttribute("y2", T.rect[3] - T.lineCoordinates[3]), ft.setAttribute("stroke-width", T.borderStyle.width || 1), ft.setAttribute("stroke", "transparent"), ft.setAttribute("fill", "transparent"), et.append(ft), this.container.append(et), T.popupRef || this._createPopup(), this.container;
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
            constructor(T) {
              var H, et, ft;
              const z = !!(T.data.popupRef || (H = T.data.titleObj) != null && H.str || (et = T.data.contentsObj) != null && et.str || (ft = T.data.richText) != null && ft.str);
              super(T, {
                isRenderable: z,
                ignoreBorder: !0
              });
              N(this, Gt, null);
            }
            render() {
              this.container.classList.add("squareAnnotation");
              const T = this.data, {
                width: z,
                height: H
              } = k(T.rect), et = this.svgFactory.create(z, H, !0), ft = T.borderStyle.width, Mt = it(this, Gt, this.svgFactory.createElement("svg:rect"));
              return Mt.setAttribute("x", ft / 2), Mt.setAttribute("y", ft / 2), Mt.setAttribute("width", z - ft), Mt.setAttribute("height", H - ft), Mt.setAttribute("stroke-width", ft || 1), Mt.setAttribute("stroke", "transparent"), Mt.setAttribute("fill", "transparent"), et.append(Mt), this.container.append(et), T.popupRef || this._createPopup(), this.container;
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
            constructor(T) {
              var H, et, ft;
              const z = !!(T.data.popupRef || (H = T.data.titleObj) != null && H.str || (et = T.data.contentsObj) != null && et.str || (ft = T.data.richText) != null && ft.str);
              super(T, {
                isRenderable: z,
                ignoreBorder: !0
              });
              N(this, Ct, null);
            }
            render() {
              this.container.classList.add("circleAnnotation");
              const T = this.data, {
                width: z,
                height: H
              } = k(T.rect), et = this.svgFactory.create(z, H, !0), ft = T.borderStyle.width, Mt = it(this, Ct, this.svgFactory.createElement("svg:ellipse"));
              return Mt.setAttribute("cx", z / 2), Mt.setAttribute("cy", H / 2), Mt.setAttribute("rx", z / 2 - ft / 2), Mt.setAttribute("ry", H / 2 - ft / 2), Mt.setAttribute("stroke-width", ft || 1), Mt.setAttribute("stroke", "transparent"), Mt.setAttribute("fill", "transparent"), et.append(Mt), this.container.append(et), T.popupRef || this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, Ct);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          Ct = new WeakMap();
          class M extends h {
            constructor(T) {
              var H, et, ft;
              const z = !!(T.data.popupRef || (H = T.data.titleObj) != null && H.str || (et = T.data.contentsObj) != null && et.str || (ft = T.data.richText) != null && ft.str);
              super(T, {
                isRenderable: z,
                ignoreBorder: !0
              });
              N(this, m, null);
              this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
            }
            render() {
              this.container.classList.add(this.containerClassName);
              const T = this.data, {
                width: z,
                height: H
              } = k(T.rect), et = this.svgFactory.create(z, H, !0);
              let ft = [];
              for (const G of T.vertices) {
                const ct = G.x - T.rect[0], mt = T.rect[3] - G.y;
                ft.push(ct + "," + mt);
              }
              ft = ft.join(" ");
              const Mt = it(this, m, this.svgFactory.createElement(this.svgElementName));
              return Mt.setAttribute("points", ft), Mt.setAttribute("stroke-width", T.borderStyle.width || 1), Mt.setAttribute("stroke", "transparent"), Mt.setAttribute("fill", "transparent"), et.append(Mt), this.container.append(et), T.popupRef || this._createPopup(Mt, T), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, m);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          m = new WeakMap();
          class K extends M {
            constructor(O) {
              super(O), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
            }
          }
          class Z extends h {
            constructor(O) {
              var z, H, et;
              const T = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: T,
                ignoreBorder: !0
              });
            }
            render() {
              return this.container.classList.add("caretAnnotation"), this.data.popupRef || this._createPopup(), this.container;
            }
          }
          class Q extends h {
            constructor(T) {
              var H, et, ft;
              const z = !!(T.data.popupRef || (H = T.data.titleObj) != null && H.str || (et = T.data.contentsObj) != null && et.str || (ft = T.data.richText) != null && ft.str);
              super(T, {
                isRenderable: z,
                ignoreBorder: !0
              });
              N(this, B, []);
              this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = n.AnnotationEditorType.INK;
            }
            render() {
              this.container.classList.add(this.containerClassName);
              const T = this.data, {
                width: z,
                height: H
              } = k(T.rect), et = this.svgFactory.create(z, H, !0);
              for (const ft of T.inkLists) {
                let Mt = [];
                for (const ct of ft) {
                  const mt = ct.x - T.rect[0], Ft = T.rect[3] - ct.y;
                  Mt.push(`${mt},${Ft}`);
                }
                Mt = Mt.join(" ");
                const G = this.svgFactory.createElement(this.svgElementName);
                t(this, B).push(G), G.setAttribute("points", Mt), G.setAttribute("stroke-width", T.borderStyle.width || 1), G.setAttribute("stroke", "transparent"), G.setAttribute("fill", "transparent"), T.popupRef || this._createPopup(G, T), et.append(G);
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
              const T = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: T,
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
              const T = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: T,
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
              const T = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: T,
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
              const T = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: T,
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
              const T = !!(O.data.popupRef || (z = O.data.titleObj) != null && z.str || (H = O.data.contentsObj) != null && H.str || (et = O.data.richText) != null && et.str);
              super(O, {
                isRenderable: T,
                ignoreBorder: !0
              });
            }
            render() {
              return this.container.classList.add("stampAnnotation"), this.data.popupRef || this._createPopup(), this.container;
            }
          }
          e.StampAnnotationElement = _t;
          class L extends h {
            constructor(T) {
              var et;
              super(T, {
                isRenderable: !0
              });
              N(this, ht, null);
              const {
                filename: z,
                content: H
              } = this.data.file;
              this.filename = (0, u.getFilenameFromUrl)(z, !0), this.content = H, (et = this.linkService.eventBus) == null || et.dispatch("fileattachmentannotation", {
                source: this,
                filename: z,
                content: H
              });
            }
            render() {
              var H, et;
              this.container.classList.add("fileAttachmentAnnotation");
              const {
                data: T
              } = this;
              let z;
              return T.hasAppearance || T.fillAlpha === 0 ? z = document.createElement("div") : (z = document.createElement("img"), z.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(T.name) ? "paperclip" : "pushpin"}.svg`, T.fillAlpha && T.fillAlpha < 1 && (z.style = `filter: opacity(${Math.round(T.fillAlpha * 100)}%);`)), z.classList.add("popupTriggerArea"), z.addEventListener("dblclick", this._download.bind(this)), it(this, ht, z), !T.popupRef && ((H = T.titleObj) != null && H.str || (et = T.contentsObj) != null && et.str || T.richText) && this._createPopup(), this.container.append(z), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, ht);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
            _download() {
              var T;
              (T = this.downloadManager) == null || T.openOrDownloadData(this.container, this.content, this.filename);
            }
          }
          ht = new WeakMap();
          class a {
            constructor({
              div: O,
              accessibilityManager: T,
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
              this.div = O, it(this, Lt, T), it(this, Pt, z), this.l10n = H, this.page = et, this.viewport = ft, this.zIndex = 0, this.l10n || (this.l10n = F.NullL10n);
            }
            async render(O) {
              const {
                annotations: T
              } = O, z = this.div;
              (0, u.setLayerDimensions)(z, this.viewport);
              const H = /* @__PURE__ */ new Map(), et = {
                data: null,
                layer: z,
                linkService: O.linkService,
                downloadManager: O.downloadManager,
                imageResourcesPath: O.imageResourcesPath || "",
                renderForms: O.renderForms !== !1,
                svgFactory: new u.DOMSVGFactory(),
                annotationStorage: O.annotationStorage || new $.AnnotationStorage(),
                enableScripting: O.enableScripting === !0,
                hasJSActions: O.hasJSActions,
                fieldObjects: O.fieldObjects,
                parent: this,
                elements: null
              };
              for (const ft of T) {
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
                    height: Ft
                  } = k(ft.rect);
                  if (mt <= 0 || Ft <= 0)
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
                ft.hidden && (ct.style.visibility = "hidden"), q(this, vt, dn).call(this, ct, ft.id);
              }
              q(this, gt, di).call(this), await this.l10n.translate(z);
            }
            update({
              viewport: O
            }) {
              const T = this.div;
              this.viewport = O, (0, u.setLayerDimensions)(T, {
                rotation: O.rotation
              }), q(this, gt, di).call(this), T.hidden = !1;
            }
            getEditableAnnotations() {
              return Array.from(t(this, pt).values());
            }
            getEditableAnnotation(O) {
              return t(this, pt).get(O);
            }
          }
          Lt = new WeakMap(), Pt = new WeakMap(), pt = new WeakMap(), vt = new WeakSet(), dn = function(O, T) {
            var H;
            const z = O.firstChild || O;
            z.id = `${u.AnnotationPrefix}${T}`, this.div.append(O), (H = t(this, Lt)) == null || H.moveElementInDOM(this.div, O, z, !1);
          }, gt = new WeakSet(), di = function() {
            if (!t(this, Pt))
              return;
            const O = this.div;
            for (const [T, z] of t(this, Pt)) {
              const H = O.querySelector(`[data-annotation-id="${T}"]`);
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
          function C($) {
            return Math.floor(Math.max(0, Math.min(1, $)) * 255).toString(16).padStart(2, "0");
          }
          function n($) {
            return Math.max(0, Math.min(255, 255 * $));
          }
          class u {
            static CMYK_G([V, F, c, d]) {
              return ["G", 1 - Math.min(1, 0.3 * V + 0.59 * c + 0.11 * F + d)];
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
              const F = C(V);
              return `#${F}${F}${F}`;
            }
            static RGB_G([V, F, c]) {
              return ["G", 0.3 * V + 0.59 * F + 0.11 * c];
            }
            static RGB_rgb(V) {
              return V.map(n);
            }
            static RGB_HTML(V) {
              return `#${V.map(C).join("")}`;
            }
            static T_HTML() {
              return "#00000000";
            }
            static T_rgb() {
              return [null];
            }
            static CMYK_RGB([V, F, c, d]) {
              return ["RGB", 1 - Math.min(1, V + d), 1 - Math.min(1, c + d), 1 - Math.min(1, F + d)];
            }
            static CMYK_rgb([V, F, c, d]) {
              return [n(1 - Math.min(1, V + d)), n(1 - Math.min(1, c + d)), n(1 - Math.min(1, F + d))];
            }
            static CMYK_HTML(V) {
              const F = this.CMYK_RGB(V).slice(1);
              return this.RGB_HTML(F);
            }
            static RGB_CMYK([V, F, c]) {
              const d = 1 - V, r = 1 - F, I = 1 - c, k = Math.min(d, r, I);
              return ["CMYK", d, r, I, k];
            }
          }
          e.ColorConverters = u;
        },
        /* 31 */
        /***/
        (A, e) => {
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
            editor_ink_canvas_aria_label: "User-created image"
          };
          C.print_progress_percent = "{{progress}}%";
          function n(V, F) {
            switch (V) {
              case "find_match_count":
                V = `find_match_count[${F.total === 1 ? "one" : "other"}]`;
                break;
              case "find_match_count_limit":
                V = `find_match_count_limit[${F.limit === 1 ? "one" : "other"}]`;
                break;
            }
            return C[V] || "";
          }
          function u(V, F) {
            return F ? V.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (c, d) => d in F ? F[d] : "{{" + d + "}}") : V;
          }
          const $ = {
            async getLanguage() {
              return "en-us";
            },
            async getDirection() {
              return "ltr";
            },
            async get(V, F = null, c = n(V, F)) {
              return u(c, F);
            },
            async translate(V) {
            }
          };
          e.NullL10n = $;
        },
        /* 32 */
        /***/
        (A, e, C) => {
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.XfaLayer = void 0;
          var n = C(25);
          class u {
            static setupStorage(V, F, c, d, r) {
              const I = d.getValue(F, {
                value: null
              });
              switch (c.name) {
                case "textarea":
                  if (I.value !== null && (V.textContent = I.value), r === "print")
                    break;
                  V.addEventListener("input", (k) => {
                    d.setValue(F, {
                      value: k.target.value
                    });
                  });
                  break;
                case "input":
                  if (c.attributes.type === "radio" || c.attributes.type === "checkbox") {
                    if (I.value === c.attributes.xfaOn ? V.setAttribute("checked", !0) : I.value === c.attributes.xfaOff && V.removeAttribute("checked"), r === "print")
                      break;
                    V.addEventListener("change", (k) => {
                      d.setValue(F, {
                        value: k.target.checked ? k.target.getAttribute("xfaOn") : k.target.getAttribute("xfaOff")
                      });
                    });
                  } else {
                    if (I.value !== null && V.setAttribute("value", I.value), r === "print")
                      break;
                    V.addEventListener("input", (k) => {
                      d.setValue(F, {
                        value: k.target.value
                      });
                    });
                  }
                  break;
                case "select":
                  if (I.value !== null) {
                    V.setAttribute("value", I.value);
                    for (const k of c.children)
                      k.attributes.value === I.value ? k.attributes.selected = !0 : k.attributes.hasOwnProperty("selected") && delete k.attributes.selected;
                  }
                  V.addEventListener("input", (k) => {
                    const S = k.target.options, h = S.selectedIndex === -1 ? "" : S[S.selectedIndex].value;
                    d.setValue(F, {
                      value: h
                    });
                  });
                  break;
              }
            }
            static setAttributes({
              html: V,
              element: F,
              storage: c = null,
              intent: d,
              linkService: r
            }) {
              const {
                attributes: I
              } = F, k = V instanceof HTMLAnchorElement;
              I.type === "radio" && (I.name = `${I.name}-${d}`);
              for (const [S, h] of Object.entries(I))
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
                      (!k || S !== "href" && S !== "newWindow") && V.setAttribute(S, h);
                  }
              k && r.addLinkAttributes(V, I.href, I.newWindow), c && I.dataId && this.setupStorage(V, I.dataId, F, c);
            }
            static render(V) {
              var p;
              const F = V.annotationStorage, c = V.linkService, d = V.xfaHtml, r = V.intent || "display", I = document.createElement(d.name);
              d.attributes && this.setAttributes({
                html: I,
                element: d,
                intent: r,
                linkService: c
              });
              const k = [[d, -1, I]], S = V.div;
              if (S.append(I), V.viewport) {
                const f = `matrix(${V.viewport.transform.join(",")})`;
                S.style.transform = f;
              }
              r !== "richText" && S.setAttribute("class", "xfaLayer xfaFont");
              const h = [];
              for (; k.length > 0; ) {
                const [f, y, b] = k.at(-1);
                if (y + 1 === f.children.length) {
                  k.pop();
                  continue;
                }
                const g = f.children[++k.at(-1)[1]];
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
                  storage: F,
                  intent: r,
                  linkService: c
                }), g.children && g.children.length > 0)
                  k.push([g, -1, s]);
                else if (g.value) {
                  const i = document.createTextNode(g.value);
                  n.XfaText.shouldBuildText(w) && h.push(i), s.append(i);
                }
              }
              for (const f of S.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
                f.setAttribute("readOnly", !0);
              return {
                textDivs: h
              };
            }
            static update(V) {
              const F = `matrix(${V.viewport.transform.join(",")})`;
              V.div.style.transform = F, V.div.hidden = !1;
            }
          }
          e.XfaLayer = u;
        },
        /* 33 */
        /***/
        (A, e, C) => {
          var c, d, r, I, k, S, h, p, f, y, b, g, w, s, i, E, un, o, fn, P, pn, tt, gn, K, ui, Q, mn, j, fi, lt, _n, L, bn, l, vn, X, yn, nt, An, ut, ne, yt, pi, ot, ke, St, Le, Bt, he, Ut, gi, J, Re, dt, Sn, Ot, mi, Wt, En, Ht, wn, Gt, _i, m, Ie, ht, de;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.InkEditor = void 0;
          var n = C(1), u = C(4), $ = C(29), V = C(5);
          const Pt = class Pt extends u.AnnotationEditor {
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
              N(this, L);
              N(this, l);
              N(this, X);
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
              N(this, I, this.canvasPointermove.bind(this));
              N(this, k, this.canvasPointerleave.bind(this));
              N(this, S, this.canvasPointerup.bind(this));
              N(this, h, this.canvasPointerdown.bind(this));
              N(this, p, new Path2D());
              N(this, f, !1);
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
                  q(this, E, un).call(this, gt);
                  break;
                case n.AnnotationEditorParamsType.INK_COLOR:
                  q(this, o, fn).call(this, gt);
                  break;
                case n.AnnotationEditorParamsType.INK_OPACITY:
                  q(this, P, pn).call(this, gt);
                  break;
              }
            }
            static get defaultPropertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.INK_THICKNESS, Pt._defaultThickness], [n.AnnotationEditorParamsType.INK_COLOR, Pt._defaultColor || u.AnnotationEditor._defaultLineColor], [n.AnnotationEditorParamsType.INK_OPACITY, Math.round(Pt._defaultOpacity * 100)]];
            }
            get propertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || Pt._defaultThickness], [n.AnnotationEditorParamsType.INK_COLOR, this.color || Pt._defaultColor || u.AnnotationEditor._defaultLineColor], [n.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? Pt._defaultOpacity))]];
            }
            rebuild() {
              this.parent && (super.rebuild(), this.div !== null && (this.canvas || (q(this, ot, ke).call(this), q(this, St, Le).call(this)), this.isAttachedToDOM || (this.parent.add(this), q(this, Bt, he).call(this)), q(this, ht, de).call(this)));
            }
            remove() {
              this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, t(this, g).disconnect(), it(this, g, null), super.remove());
            }
            setParent(U) {
              !this.parent && U ? this._uiManager.removeShouldRescale(this) : this.parent && U === null && this._uiManager.addShouldRescale(this), super.setParent(U);
            }
            onScaleChanging() {
              const [U, gt] = this.parentDimensions, It = this.width * U, bt = this.height * gt;
              this.setDimensions(It, bt);
            }
            enableEditMode() {
              t(this, f) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", t(this, h)));
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
              t(this, f) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), it(this, f, !0), this.div.classList.add("disabled"), q(this, ht, de).call(this, !0), this.makeResizable(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
                preventScroll: !0
              }));
            }
            focusin(U) {
              this._focusEventsAllowed && (super.focusin(U), this.enableEditMode());
            }
            canvasPointerdown(U) {
              U.button !== 0 || !this.isInEditMode() || t(this, f) || (this.setInForeground(), U.preventDefault(), U.type !== "mouse" && this.div.focus(), q(this, Q, mn).call(this, U.offsetX, U.offsetY));
            }
            canvasContextMenu(U) {
              U.preventDefault();
            }
            canvasPointermove(U) {
              U.preventDefault(), q(this, j, fi).call(this, U.offsetX, U.offsetY);
            }
            canvasPointerup(U) {
              U.preventDefault(), q(this, yt, pi).call(this, U);
            }
            canvasPointerleave(U) {
              q(this, yt, pi).call(this, U);
            }
            get isResizable() {
              return !this.isEmpty() && t(this, f);
            }
            render() {
              if (this.div)
                return this.div;
              let U, gt;
              this.width && (U = this.x, gt = this.y), super.render(), Pt._l10nPromise.get("editor_ink2_aria_label").then((z) => {
                var H;
                return (H = this.div) == null ? void 0 : H.setAttribute("aria-label", z);
              });
              const [It, bt, O, T] = q(this, tt, gn).call(this);
              if (this.setAt(It, bt, 0, 0), this.setDims(O, T), q(this, ot, ke).call(this), this.width) {
                const [z, H] = this.parentDimensions;
                this.setAspectRatio(this.width * z, this.height * H), this.setAt(U * z, gt * H, this.width * z, this.height * H), it(this, b, !0), q(this, Bt, he).call(this), this.setDims(this.width * z, this.height * H), q(this, ut, ne).call(this), this.div.classList.add("disabled");
              } else
                this.div.classList.add("editing"), this.enableEditMode();
              return q(this, St, Le).call(this), this.div;
            }
            setDimensions(U, gt) {
              const It = Math.round(U), bt = Math.round(gt);
              if (t(this, w) === It && t(this, s) === bt)
                return;
              it(this, w, It), it(this, s, bt), this.canvas.style.visibility = "hidden";
              const [O, T] = this.parentDimensions;
              this.width = U / O, this.height = gt / T, this.fixAndSetPosition(), t(this, f) && q(this, Ut, gi).call(this, U, gt), q(this, Bt, he).call(this), q(this, ut, ne).call(this), this.canvas.style.visibility = "visible", this.fixDims();
            }
            static deserialize(U, gt, It) {
              var Ft, Tt, Dt;
              if (U instanceof $.InkAnnotationElement)
                return null;
              const bt = super.deserialize(U, gt, It);
              bt.thickness = U.thickness, bt.color = n.Util.makeHexColor(...U.color), bt.opacity = U.opacity;
              const [O, T] = bt.pageDimensions, z = bt.width * O, H = bt.height * T, et = bt.parentScale, ft = U.thickness / 2;
              it(bt, f, !0), it(bt, w, Math.round(z)), it(bt, s, Math.round(H));
              const {
                paths: Mt,
                rect: G,
                rotation: ct
              } = U;
              for (let {
                bezier: Vt
              } of Mt) {
                Vt = q(Ft = Pt, Wt, En).call(Ft, Vt, G, ct);
                const zt = [];
                bt.paths.push(zt);
                let Xt = et * (Vt[0] - ft), qt = et * (Vt[1] - ft);
                for (let Yt = 2, Kt = Vt.length; Yt < Kt; Yt += 6) {
                  const te = et * (Vt[Yt] - ft), Jt = et * (Vt[Yt + 1] - ft), ee = et * (Vt[Yt + 2] - ft), Zn = et * (Vt[Yt + 3] - ft), ji = et * (Vt[Yt + 4] - ft), Wi = et * (Vt[Yt + 5] - ft);
                  zt.push([[Xt, qt], [te, Jt], [ee, Zn], [ji, Wi]]), Xt = ji, qt = Wi;
                }
                const Qt = q(this, dt, Sn).call(this, zt);
                bt.bezierPath2D.push(Qt);
              }
              const mt = q(Tt = bt, Gt, _i).call(Tt);
              return it(bt, d, Math.max(u.AnnotationEditor.MIN_SIZE, mt[2] - mt[0])), it(bt, c, Math.max(u.AnnotationEditor.MIN_SIZE, mt[3] - mt[1])), q(Dt = bt, Ut, gi).call(Dt, z, H), bt;
            }
            serialize() {
              if (this.isEmpty())
                return null;
              const U = this.getRect(0, 0), gt = u.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
              return {
                annotationType: n.AnnotationEditorType.INK,
                color: gt,
                thickness: this.thickness,
                opacity: this.opacity,
                paths: q(this, Ht, wn).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, U),
                pageIndex: this.pageIndex,
                rect: U,
                rotation: this.rotation
              };
            }
          };
          c = new WeakMap(), d = new WeakMap(), r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), f = new WeakMap(), y = new WeakMap(), b = new WeakMap(), g = new WeakMap(), w = new WeakMap(), s = new WeakMap(), i = new WeakMap(), E = new WeakSet(), un = function(U) {
            const gt = this.thickness;
            this.addCommands({
              cmd: () => {
                this.thickness = U, q(this, ht, de).call(this);
              },
              undo: () => {
                this.thickness = gt, q(this, ht, de).call(this);
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
                this.color = U, q(this, ut, ne).call(this);
              },
              undo: () => {
                this.color = gt, q(this, ut, ne).call(this);
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
                this.opacity = U, q(this, ut, ne).call(this);
              },
              undo: () => {
                this.opacity = gt, q(this, ut, ne).call(this);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.INK_OPACITY,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, tt = new WeakSet(), gn = function() {
            const {
              parentRotation: U,
              parentDimensions: [gt, It]
            } = this;
            switch (U) {
              case 90:
                return [0, It, It, gt];
              case 180:
                return [gt, It, gt, It];
              case 270:
                return [gt, 0, It, gt];
              default:
                return [0, 0, gt, It];
            }
          }, K = new WeakSet(), ui = function() {
            const {
              ctx: U,
              color: gt,
              opacity: It,
              thickness: bt,
              parentScale: O,
              scaleFactor: T
            } = this;
            U.lineWidth = bt * O / T, U.lineCap = "round", U.lineJoin = "round", U.miterLimit = 10, U.strokeStyle = `${gt}${(0, V.opacityToHex)(It)}`;
          }, Q = new WeakSet(), mn = function(U, gt) {
            this.canvas.addEventListener("contextmenu", t(this, r)), this.canvas.addEventListener("pointerleave", t(this, k)), this.canvas.addEventListener("pointermove", t(this, I)), this.canvas.addEventListener("pointerup", t(this, S)), this.canvas.removeEventListener("pointerdown", t(this, h)), this.isEditing = !0, t(this, b) || (it(this, b, !0), q(this, Bt, he).call(this), this.thickness || (this.thickness = Pt._defaultThickness), this.color || (this.color = Pt._defaultColor || u.AnnotationEditor._defaultLineColor), this.opacity ?? (this.opacity = Pt._defaultOpacity)), this.currentPath.push([U, gt]), it(this, y, !1), q(this, K, ui).call(this), it(this, i, () => {
              q(this, l, vn).call(this), t(this, i) && window.requestAnimationFrame(t(this, i));
            }), window.requestAnimationFrame(t(this, i));
          }, j = new WeakSet(), fi = function(U, gt) {
            const [It, bt] = this.currentPath.at(-1);
            if (this.currentPath.length > 1 && U === It && gt === bt)
              return;
            const O = this.currentPath;
            let T = t(this, p);
            if (O.push([U, gt]), it(this, y, !0), O.length <= 2) {
              T.moveTo(...O[0]), T.lineTo(U, gt);
              return;
            }
            O.length === 3 && (it(this, p, T = new Path2D()), T.moveTo(...O[0])), q(this, X, yn).call(this, T, ...O.at(-3), ...O.at(-2), U, gt);
          }, lt = new WeakSet(), _n = function() {
            if (this.currentPath.length === 0)
              return;
            const U = this.currentPath.at(-1);
            t(this, p).lineTo(...U);
          }, L = new WeakSet(), bn = function(U, gt) {
            it(this, i, null), U = Math.min(Math.max(U, 0), this.canvas.width), gt = Math.min(Math.max(gt, 0), this.canvas.height), q(this, j, fi).call(this, U, gt), q(this, lt, _n).call(this);
            let It;
            if (this.currentPath.length !== 1)
              It = q(this, nt, An).call(this);
            else {
              const H = [U, gt];
              It = [[H, H.slice(), H.slice(), H]];
            }
            const bt = t(this, p), O = this.currentPath;
            this.currentPath = [], it(this, p, new Path2D());
            const T = () => {
              this.allRawPaths.push(O), this.paths.push(It), this.bezierPath2D.push(bt), this.rebuild();
            }, z = () => {
              this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (q(this, ot, ke).call(this), q(this, St, Le).call(this)), q(this, ht, de).call(this));
            };
            this.addCommands({
              cmd: T,
              undo: z,
              mustExec: !0
            });
          }, l = new WeakSet(), vn = function() {
            if (!t(this, y))
              return;
            it(this, y, !1);
            const U = Math.ceil(this.thickness * this.parentScale), gt = this.currentPath.slice(-3), It = gt.map((T) => T[0]), bt = gt.map((T) => T[1]);
            Math.min(...It) - U, Math.max(...It) + U, Math.min(...bt) - U, Math.max(...bt) + U;
            const {
              ctx: O
            } = this;
            O.save(), O.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (const T of this.bezierPath2D)
              O.stroke(T);
            O.stroke(t(this, p)), O.restore();
          }, X = new WeakSet(), yn = function(U, gt, It, bt, O, T, z) {
            const H = (gt + bt) / 2, et = (It + O) / 2, ft = (bt + T) / 2, Mt = (O + z) / 2;
            U.bezierCurveTo(H + 2 * (bt - H) / 3, et + 2 * (O - et) / 3, ft + 2 * (bt - ft) / 3, Mt + 2 * (O - Mt) / 3, ft, Mt);
          }, nt = new WeakSet(), An = function() {
            const U = this.currentPath;
            if (U.length <= 2)
              return [[U[0], U[0], U.at(-1), U.at(-1)]];
            const gt = [];
            let It, [bt, O] = U[0];
            for (It = 1; It < U.length - 2; It++) {
              const [G, ct] = U[It], [mt, Ft] = U[It + 1], Tt = (G + mt) / 2, Dt = (ct + Ft) / 2, Vt = [bt + 2 * (G - bt) / 3, O + 2 * (ct - O) / 3], zt = [Tt + 2 * (G - Tt) / 3, Dt + 2 * (ct - Dt) / 3];
              gt.push([[bt, O], Vt, zt, [Tt, Dt]]), [bt, O] = [Tt, Dt];
            }
            const [T, z] = U[It], [H, et] = U[It + 1], ft = [bt + 2 * (T - bt) / 3, O + 2 * (z - O) / 3], Mt = [H + 2 * (T - H) / 3, et + 2 * (z - et) / 3];
            return gt.push([[bt, O], ft, Mt, [H, et]]), gt;
          }, ut = new WeakSet(), ne = function() {
            if (this.isEmpty()) {
              q(this, J, Re).call(this);
              return;
            }
            q(this, K, ui).call(this);
            const {
              canvas: U,
              ctx: gt
            } = this;
            gt.setTransform(1, 0, 0, 1, 0, 0), gt.clearRect(0, 0, U.width, U.height), q(this, J, Re).call(this);
            for (const It of this.bezierPath2D)
              gt.stroke(It);
          }, yt = new WeakSet(), pi = function(U) {
            this.canvas.removeEventListener("pointerleave", t(this, k)), this.canvas.removeEventListener("pointermove", t(this, I)), this.canvas.removeEventListener("pointerup", t(this, S)), this.canvas.addEventListener("pointerdown", t(this, h)), setTimeout(() => {
              this.canvas.removeEventListener("contextmenu", t(this, r));
            }, 10), q(this, L, bn).call(this, U.offsetX, U.offsetY), this.addToAnnotationStorage(), this.setInBackground();
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
            this.canvas.width = Math.ceil(this.width * U), this.canvas.height = Math.ceil(this.height * gt), q(this, J, Re).call(this);
          }, Ut = new WeakSet(), gi = function(U, gt) {
            const It = q(this, m, Ie).call(this), bt = (U - It) / t(this, d), O = (gt - It) / t(this, c);
            this.scaleFactor = Math.min(bt, O);
          }, J = new WeakSet(), Re = function() {
            const U = q(this, m, Ie).call(this) / 2;
            this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + U, this.translationY * this.scaleFactor + U);
          }, dt = new WeakSet(), Sn = function(U) {
            const gt = new Path2D();
            for (let It = 0, bt = U.length; It < bt; It++) {
              const [O, T, z, H] = U[It];
              It === 0 && gt.moveTo(...O), gt.bezierCurveTo(T[0], T[1], z[0], z[1], H[0], H[1]);
            }
            return gt;
          }, Ot = new WeakSet(), mi = function(U, gt, It) {
            const [bt, O, T, z] = gt;
            switch (It) {
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
                  U[H] = T - U[H], U[H + 1] += O;
                break;
              case 270:
                for (let H = 0, et = U.length; H < et; H += 2) {
                  const ft = U[H];
                  U[H] = T - U[H + 1], U[H + 1] = z - ft;
                }
                break;
              default:
                throw new Error("Invalid rotation");
            }
            return U;
          }, Wt = new WeakSet(), En = function(U, gt, It) {
            const [bt, O, T, z] = gt;
            switch (It) {
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
                  U[H] = T - U[H], U[H + 1] -= O;
                break;
              case 270:
                for (let H = 0, et = U.length; H < et; H += 2) {
                  const ft = U[H];
                  U[H] = z - U[H + 1], U[H + 1] = T - ft;
                }
                break;
              default:
                throw new Error("Invalid rotation");
            }
            return U;
          }, Ht = new WeakSet(), wn = function(U, gt, It, bt) {
            var et, ft;
            const O = [], T = this.thickness / 2, z = U * gt + T, H = U * It + T;
            for (const Mt of this.paths) {
              const G = [], ct = [];
              for (let mt = 0, Ft = Mt.length; mt < Ft; mt++) {
                const [Tt, Dt, Vt, zt] = Mt[mt], Xt = U * Tt[0] + z, qt = U * Tt[1] + H, Qt = U * Dt[0] + z, Yt = U * Dt[1] + H, Kt = U * Vt[0] + z, te = U * Vt[1] + H, Jt = U * zt[0] + z, ee = U * zt[1] + H;
                mt === 0 && (G.push(Xt, qt), ct.push(Xt, qt)), G.push(Qt, Yt, Kt, te, Jt, ee), ct.push(Qt, Yt), mt === Ft - 1 && ct.push(Jt, ee);
              }
              O.push({
                bezier: q(et = Pt, Ot, mi).call(et, G, bt, this.rotation),
                points: q(ft = Pt, Ot, mi).call(ft, ct, bt, this.rotation)
              });
            }
            return O;
          }, Gt = new WeakSet(), _i = function() {
            let U = 1 / 0, gt = -1 / 0, It = 1 / 0, bt = -1 / 0;
            for (const O of this.paths)
              for (const [T, z, H, et] of O) {
                const ft = n.Util.bezierBoundingBox(...T, ...z, ...H, ...et);
                U = Math.min(U, ft[0]), It = Math.min(It, ft[1]), gt = Math.max(gt, ft[2]), bt = Math.max(bt, ft[3]);
              }
            return [U, It, gt, bt];
          }, m = new WeakSet(), Ie = function() {
            return t(this, f) ? Math.ceil(this.thickness * this.parentScale) : 0;
          }, ht = new WeakSet(), de = function(U = !1) {
            if (this.isEmpty())
              return;
            if (!t(this, f)) {
              q(this, ut, ne).call(this);
              return;
            }
            const gt = q(this, Gt, _i).call(this), It = q(this, m, Ie).call(this);
            it(this, d, Math.max(u.AnnotationEditor.MIN_SIZE, gt[2] - gt[0])), it(this, c, Math.max(u.AnnotationEditor.MIN_SIZE, gt[3] - gt[1]));
            const bt = Math.ceil(It + t(this, d) * this.scaleFactor), O = Math.ceil(It + t(this, c) * this.scaleFactor), [T, z] = this.parentDimensions;
            this.width = bt / T, this.height = O / z, this.setAspectRatio(bt, O);
            const H = this.translationX, et = this.translationY;
            this.translationX = -gt[0], this.translationY = -gt[1], q(this, Bt, he).call(this), q(this, ut, ne).call(this), it(this, w, bt), it(this, s, O), this.setDims(bt, O);
            const ft = U ? It / this.scaleFactor / 2 : 0;
            this.translate(H - this.translationX - ft, et - this.translationY - ft);
          }, N(Pt, dt), N(Pt, Ot), N(Pt, Wt), Zt(Pt, "_defaultColor", null), Zt(Pt, "_defaultOpacity", 1), Zt(Pt, "_defaultThickness", 1), Zt(Pt, "_l10nPromise"), Zt(Pt, "_type", "ink");
          let F = Pt;
          e.InkEditor = F;
        },
        /* 34 */
        /***/
        (A, e, C) => {
          var c, d, r, I, k, S, h, p, f, y, b, be, w, ve, i, Fe, _, bi, x, Pn, Y, Cn, M, vi, Z, De, v, Tn;
          Object.defineProperty(e, "__esModule", {
            value: !0
          }), e.StampEditor = void 0;
          var n = C(1), u = C(4), $ = C(6), V = C(29);
          const D = class D extends u.AnnotationEditor {
            constructor(L) {
              super({
                ...L,
                name: "stampEditor"
              });
              N(this, b);
              N(this, w);
              N(this, i);
              N(this, _);
              N(this, x);
              N(this, Y);
              N(this, M);
              N(this, Z);
              N(this, v);
              N(this, c, null);
              N(this, d, null);
              N(this, r, null);
              N(this, I, null);
              N(this, k, null);
              N(this, S, null);
              N(this, h, null);
              N(this, p, null);
              N(this, f, !1);
              N(this, y, !1);
              it(this, I, L.bitmapUrl), it(this, k, L.bitmapFile);
            }
            static get supportedTypes() {
              const L = ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"];
              return (0, n.shadow)(this, "supportedTypes", L.map((a) => `image/${a}`));
            }
            static get supportedTypesStr() {
              return (0, n.shadow)(this, "supportedTypesStr", this.supportedTypes.join(","));
            }
            static isHandlingMimeForPasting(L) {
              return this.supportedTypes.includes(L);
            }
            static paste(L, a) {
              a.pasteEditor(n.AnnotationEditorType.STAMP, {
                bitmapFile: L.getAsFile()
              });
            }
            remove() {
              var L, a;
              t(this, d) && (it(this, c, null), this._uiManager.imageManager.deleteId(t(this, d)), (L = t(this, S)) == null || L.remove(), it(this, S, null), (a = t(this, h)) == null || a.disconnect(), it(this, h, null)), super.remove();
            }
            rebuild() {
              if (!this.parent) {
                t(this, d) && q(this, i, Fe).call(this);
                return;
              }
              super.rebuild(), this.div !== null && (t(this, d) && q(this, i, Fe).call(this), this.isAttachedToDOM || this.parent.add(this));
            }
            onceAdded() {
              this._isDraggable = !0, this.div.focus();
            }
            isEmpty() {
              return !(t(this, r) || t(this, c) || t(this, I) || t(this, k));
            }
            get isResizable() {
              return !0;
            }
            render() {
              if (this.div)
                return this.div;
              let L, a;
              if (this.width && (L = this.x, a = this.y), super.render(), this.div.hidden = !0, t(this, c) ? q(this, _, bi).call(this) : q(this, i, Fe).call(this), this.width) {
                const [l, R] = this.parentDimensions;
                this.setAt(L * l, a * R, this.width * l, this.height * R);
              }
              return this.div;
            }
            static deserialize(L, a, l) {
              if (L instanceof V.StampAnnotationElement)
                return null;
              const R = super.deserialize(L, a, l), {
                rect: X,
                bitmapUrl: W,
                bitmapId: nt,
                isSvg: st
              } = L;
              nt && l.imageManager.isValidId(nt) ? it(R, d, nt) : it(R, I, W), it(R, f, st);
              const [ut, wt] = R.pageDimensions;
              return R.width = (X[2] - X[0]) / ut, R.height = (X[3] - X[1]) / wt, R;
            }
            serialize(L = !1, a = null) {
              if (this.isEmpty())
                return null;
              const l = {
                annotationType: n.AnnotationEditorType.STAMP,
                bitmapId: t(this, d),
                pageIndex: this.pageIndex,
                rect: this.getRect(0, 0),
                rotation: this.rotation,
                isSvg: t(this, f)
              };
              if (L)
                return l.bitmapUrl = q(this, Z, De).call(this, !0), l;
              if (a === null)
                return l;
              a.stamps || (a.stamps = /* @__PURE__ */ new Map());
              const R = t(this, f) ? (l.rect[2] - l.rect[0]) * (l.rect[3] - l.rect[1]) : null;
              if (!a.stamps.has(t(this, d)))
                a.stamps.set(t(this, d), {
                  area: R,
                  serialized: l
                }), l.bitmap = q(this, Z, De).call(this, !1);
              else if (t(this, f)) {
                const X = a.stamps.get(t(this, d));
                R > X.area && (X.area = R, X.serialized.bitmap.close(), X.serialized.bitmap = q(this, Z, De).call(this, !1));
              }
              return l;
            }
          };
          c = new WeakMap(), d = new WeakMap(), r = new WeakMap(), I = new WeakMap(), k = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), f = new WeakMap(), y = new WeakMap(), b = new WeakSet(), be = function(L, a = !1) {
            if (!L) {
              this.remove();
              return;
            }
            it(this, c, L.bitmap), a || (it(this, d, L.id), it(this, f, L.isSvg)), q(this, _, bi).call(this);
          }, w = new WeakSet(), ve = function() {
            it(this, r, null), this._uiManager.enableWaiting(!1), t(this, S) && this.div.focus();
          }, i = new WeakSet(), Fe = function() {
            if (t(this, d)) {
              this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(t(this, d)).then((a) => q(this, b, be).call(this, a, !0)).finally(() => q(this, w, ve).call(this));
              return;
            }
            if (t(this, I)) {
              const a = t(this, I);
              it(this, I, null), this._uiManager.enableWaiting(!0), it(this, r, this._uiManager.imageManager.getFromUrl(a).then((l) => q(this, b, be).call(this, l)).finally(() => q(this, w, ve).call(this)));
              return;
            }
            if (t(this, k)) {
              const a = t(this, k);
              it(this, k, null), this._uiManager.enableWaiting(!0), it(this, r, this._uiManager.imageManager.getFromFile(a).then((l) => q(this, b, be).call(this, l)).finally(() => q(this, w, ve).call(this)));
              return;
            }
            const L = document.createElement("input");
            L.type = "file", L.accept = D.supportedTypesStr, it(this, r, new Promise((a) => {
              L.addEventListener("change", async () => {
                if (!L.files || L.files.length === 0)
                  this.remove();
                else {
                  this._uiManager.enableWaiting(!0);
                  const l = await this._uiManager.imageManager.getFromFile(L.files[0]);
                  q(this, b, be).call(this, l);
                }
                a();
              }), L.addEventListener("cancel", () => {
                this.remove(), a();
              });
            }).finally(() => q(this, w, ve).call(this))), L.click();
          }, _ = new WeakSet(), bi = function() {
            const {
              div: L
            } = this;
            let {
              width: a,
              height: l
            } = t(this, c);
            const [R, X] = this.pageDimensions, W = 0.75;
            if (this.width)
              a = this.width * R, l = this.height * X;
            else if (a > W * R || l > W * X) {
              const wt = Math.min(W * R / a, W * X / l);
              a *= wt, l *= wt;
            }
            const [nt, st] = this.parentDimensions;
            this.setDims(a * nt / R, l * st / X), this._uiManager.enableWaiting(!1);
            const ut = it(this, S, document.createElement("canvas"));
            L.append(ut), L.hidden = !1, q(this, M, vi).call(this, a, l), q(this, v, Tn).call(this), t(this, y) || (this.parent.addUndoableEditor(this), it(this, y, !0));
          }, x = new WeakSet(), Pn = function(L, a) {
            var W;
            const [l, R] = this.parentDimensions;
            this.width = L / l, this.height = a / R, this.setDims(L, a), (W = this._initialOptions) != null && W.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, t(this, p) !== null && clearTimeout(t(this, p)), it(this, p, setTimeout(() => {
              it(this, p, null), q(this, M, vi).call(this, L, a);
            }, 200));
          }, Y = new WeakSet(), Cn = function(L, a) {
            const {
              width: l,
              height: R
            } = t(this, c);
            let X = l, W = R, nt = t(this, c);
            for (; X > 2 * L || W > 2 * a; ) {
              const st = X, ut = W;
              X > 2 * L && (X = X >= 16384 ? Math.floor(X / 2) - 1 : Math.ceil(X / 2)), W > 2 * a && (W = W >= 16384 ? Math.floor(W / 2) - 1 : Math.ceil(W / 2));
              const wt = new OffscreenCanvas(X, W);
              wt.getContext("2d").drawImage(nt, 0, 0, st, ut, 0, 0, X, W), nt = wt.transferToImageBitmap();
            }
            return nt;
          }, M = new WeakSet(), vi = function(L, a) {
            L = Math.ceil(L), a = Math.ceil(a);
            const l = t(this, S);
            if (!l || l.width === L && l.height === a)
              return;
            l.width = L, l.height = a;
            const R = t(this, f) ? t(this, c) : q(this, Y, Cn).call(this, L, a), X = l.getContext("2d");
            X.filter = this._uiManager.hcmFilter, X.drawImage(R, 0, 0, R.width, R.height, 0, 0, L, a);
          }, Z = new WeakSet(), De = function(L) {
            if (L) {
              if (t(this, f)) {
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
            if (t(this, f)) {
              const [a, l] = this.pageDimensions, R = Math.round(this.width * a * $.PixelsPerInch.PDF_TO_CSS_UNITS), X = Math.round(this.height * l * $.PixelsPerInch.PDF_TO_CSS_UNITS), W = new OffscreenCanvas(R, X);
              return W.getContext("2d").drawImage(t(this, c), 0, 0, t(this, c).width, t(this, c).height, 0, 0, R, X), W.transferToImageBitmap();
            }
            return structuredClone(t(this, c));
          }, v = new WeakSet(), Tn = function() {
            it(this, h, new ResizeObserver((L) => {
              const a = L[0].contentRect;
              a.width && a.height && q(this, x, Pn).call(this, a.width, a.height);
            })), t(this, h).observe(this.div);
          }, Zt(D, "_type", "stamp");
          let F = D;
          e.StampEditor = F;
        }
        /******/
      ], __webpack_module_cache__ = {};
      function __w_pdfjs_require__(A) {
        var e = __webpack_module_cache__[A];
        if (e !== void 0)
          return e.exports;
        var C = __webpack_module_cache__[A] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return __webpack_modules__[A](C, C.exports, __w_pdfjs_require__), C.exports;
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
            return $.AnnotationEditorLayer;
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
            return F.AnnotationLayer;
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
            return C.PDFDataRangeTransport;
          }
        }), Object.defineProperty(A, "PDFDateString", {
          enumerable: !0,
          get: function() {
            return n.PDFDateString;
          }
        }), Object.defineProperty(A, "PDFWorker", {
          enumerable: !0,
          get: function() {
            return C.PDFWorker;
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
            return C.SVGGraphics;
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
            return C.build;
          }
        }), Object.defineProperty(A, "createValidAbsoluteUrl", {
          enumerable: !0,
          get: function() {
            return e.createValidAbsoluteUrl;
          }
        }), Object.defineProperty(A, "getDocument", {
          enumerable: !0,
          get: function() {
            return C.getDocument;
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
            return u.renderTextLayer;
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
            return u.updateTextLayer;
          }
        }), Object.defineProperty(A, "version", {
          enumerable: !0,
          get: function() {
            return C.version;
          }
        });
        var e = __w_pdfjs_require__(1), C = __w_pdfjs_require__(2), n = __w_pdfjs_require__(6), u = __w_pdfjs_require__(26), $ = __w_pdfjs_require__(27), V = __w_pdfjs_require__(5), F = __w_pdfjs_require__(29), c = __w_pdfjs_require__(14), d = __w_pdfjs_require__(32);
      })(), __webpack_exports__;
    })()
  ));
})(pdf);
var pdfExports = pdf.exports, pdf_viewer$1 = { exports: {} };
(function(A, e) {
  (function(n, u) {
    A.exports = n.pdfjsViewer = u();
  })(globalThis, () => (
    /******/
    (() => {
      var C = [
        ,
        /* 1 */
        /***/
        (V, F, c) => {
          var Z, Q, v, j, xn, lt, yi, L, Ai, l, Mn, X, kn, nt, Ln, ut, Si, yt, Rn, ot, In, St, Oe, Bt, ye, Ut, ue, J, Fn, dt, Ei, Ot, wi, Wt, Ne, Ht, Dn, Gt, Pi, m, Ci, ht, Ae;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFFindController = F.FindState = void 0;
          var d = c(2), r = c(3), I = c(4);
          const k = {
            FOUND: 0,
            NOT_FOUND: 1,
            WRAPPED: 2,
            PENDING: 3
          };
          F.FindState = k;
          const S = 250, h = -50, p = -400, f = {
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
          const g = /\p{M}+/gu, w = /([.*+?^${}()|[\]\\])|(\p{P})|(\s+)|(\p{M})|(\p{L})/gu, s = /([^\p{M}])\p{M}*$/u, i = /^\p{M}*([^\p{M}])/u, E = /[\uAC00-\uD7AF\uFA6C\uFACF-\uFAD1\uFAD5-\uFAD7]+/g, _ = /* @__PURE__ */ new Map(), o = "[\\u1100-\\u1112\\ud7a4-\\ud7af\\ud84a\\ud84c\\ud850\\ud854\\ud857\\ud85f]", x = /* @__PURE__ */ new Map();
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
              const Mt = Object.keys(f).join(""), G = (0, r.getNormalizeWithNFKC)(), Ft = `([${Mt}])|([${G}])|((?:゙|゚)\\n)|(\\p{M}+(?:-\\n)?)|(\\S-\\n)|((?:\\p{Ideographic}|[぀-ヿ])\\n)|(\\n)`;
              pt.length === 0 ? U = P = new RegExp(Ft + "|(\\u0000)", "gum") : U = Y = new RegExp(Ft + `|(${o})`, "gum");
            }
            const gt = [];
            for (; (vt = g.exec(Pt)) !== null; )
              gt.push([vt[0].length, vt.index]);
            let It = Pt.normalize("NFD");
            const bt = [[0, 0]];
            let O = 0, T = 0, z = 0, H = 0, et = 0, ft = !1;
            return It = It.replace(U, (Mt, G, ct, mt, Ft, Tt, Dt, Vt, zt, Xt) => {
              var qt, Qt, Yt;
              if (Xt -= H, G) {
                const Kt = f[G], te = Kt.length;
                for (let Jt = 1; Jt < te; Jt++)
                  bt.push([Xt - z + Jt, z - Jt]);
                return z -= te - 1, Kt;
              }
              if (ct) {
                let Kt = x.get(ct);
                Kt || (Kt = ct.normalize("NFKC"), x.set(ct, Kt));
                const te = Kt.length;
                for (let Jt = 1; Jt < te; Jt++)
                  bt.push([Xt - z + Jt, z - Jt]);
                return z -= te - 1, Kt;
              }
              if (mt)
                return ft = !0, Xt + et === ((qt = gt[O]) == null ? void 0 : qt[1]) ? ++O : (bt.push([Xt - 1 - z + 1, z - 1]), z -= 1, H += 1), bt.push([Xt - z + 1, z]), H += 1, et += 1, mt.charAt(0);
              if (Ft) {
                const Kt = Ft.endsWith(`
`), te = Kt ? Ft.length - 2 : Ft.length;
                ft = !0;
                let Jt = te;
                Xt + et === ((Qt = gt[O]) == null ? void 0 : Qt[1]) && (Jt -= gt[O][0], ++O);
                for (let ee = 1; ee <= Jt; ee++)
                  bt.push([Xt - 1 - z + ee, z - ee]);
                return z -= Jt, H += Jt, Kt ? (Xt += te - 1, bt.push([Xt - z + 1, 1 + z]), z += 1, H += 1, et += 1, Ft.slice(0, te)) : Ft;
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
              if (Xt + et === ((Yt = pt[T]) == null ? void 0 : Yt[1])) {
                const Kt = pt[T][0] - 1;
                ++T;
                for (let te = 1; te <= Kt; te++)
                  bt.push([Xt - (z - te), z - te]);
                z -= Kt, H += Kt;
              }
              return zt;
            }), bt.push([It.length, z]), [It, bt, ft];
          }
          function M(Pt, pt, vt) {
            if (!Pt)
              return [pt, vt];
            const U = pt, gt = pt + vt - 1;
            let It = (0, d.binarySearchFirstItem)(Pt, (H) => H[0] >= U);
            Pt[It][0] > U && --It;
            let bt = (0, d.binarySearchFirstItem)(Pt, (H) => H[0] >= gt, It);
            Pt[bt][0] > gt && --bt;
            const O = U + Pt[It][1], z = gt + Pt[bt][1] + 1 - O;
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
              N(this, L);
              N(this, l);
              N(this, X);
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
              this._linkService = pt, this._eventBus = vt, it(this, Q, U), this.onIsPageVisible = null, q(this, lt, yi).call(this), vt._on("find", q(this, j, xn).bind(this)), vt._on("findbarclose", q(this, Ht, Dn).bind(this));
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
              this._pdfDocument && q(this, lt, yi).call(this), pt && (this._pdfDocument = pt, this._firstPageCapability.resolve());
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
              const It = {
                top: h,
                left: vt + p
              };
              (0, d.scrollIntoView)(pt, It, !0);
            }
          }
          Z = new WeakMap(), Q = new WeakMap(), v = new WeakMap(), j = new WeakSet(), xn = function(pt) {
            if (!pt)
              return;
            pt.phraseSearch === !1 && (console.error("The `phraseSearch`-parameter was removed, please provide an Array of strings in the `query`-parameter instead."), typeof pt.query == "string" && (pt.query = pt.query.match(/\S+/g)));
            const vt = this._pdfDocument, {
              type: U
            } = pt;
            (t(this, Z) === null || q(this, l, Mn).call(this, pt)) && (this._dirtyMatch = !0), it(this, Z, pt), U !== "highlightallchange" && q(this, ht, Ae).call(this, k.PENDING), this._firstPageCapability.promise.then(() => {
              if (!this._pdfDocument || vt && this._pdfDocument !== vt)
                return;
              q(this, ot, In).call(this);
              const gt = !this._highlightMatches, It = !!this._findTimeout;
              this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), U ? this._dirtyMatch ? q(this, Ut, ue).call(this) : U === "again" ? (q(this, Ut, ue).call(this), gt && t(this, Z).highlightAll && q(this, Bt, ye).call(this)) : U === "highlightallchange" ? (It ? q(this, Ut, ue).call(this) : this._highlightMatches = !0, q(this, Bt, ye).call(this)) : q(this, Ut, ue).call(this) : this._findTimeout = setTimeout(() => {
                q(this, Ut, ue).call(this), this._findTimeout = null;
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
            }, this._extractTextPromises = [], this._pageContents = [], this._pageDiffs = [], this._hasDiacritics = [], this._matchesCountTotal = 0, this._pagesToSearch = null, this._pendingFindMatches = /* @__PURE__ */ new Set(), this._resumePageIdx = null, this._dirtyMatch = !1, clearTimeout(this._findTimeout), this._findTimeout = null, this._firstPageCapability = new I.PromiseCapability();
          }, L = new WeakSet(), Ai = function() {
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
                const O = this._selected.pageIdx + 1, T = this._linkService;
                return O >= 1 && O <= T.pagesCount && O !== T.page && !(((bt = this.onIsPageVisible) == null ? void 0 : bt.call(this, O)) ?? !0);
              case "highlightallchange":
                return !1;
            }
            return !0;
          }, X = new WeakSet(), kn = function(pt, vt, U) {
            let gt = pt.slice(0, vt).match(s);
            if (gt) {
              const It = pt.charCodeAt(vt), bt = gt[1].charCodeAt(0);
              if ((0, r.getCharacterType)(It) === (0, r.getCharacterType)(bt))
                return !1;
            }
            if (gt = pt.slice(vt + U).match(i), gt) {
              const It = pt.charCodeAt(vt + U - 1), bt = gt[1].charCodeAt(0);
              if ((0, r.getCharacterType)(It) === (0, r.getCharacterType)(bt))
                return !1;
            }
            return !0;
          }, nt = new WeakSet(), Ln = function(pt, vt, U, gt) {
            const It = this._pageMatches[U] = [], bt = this._pageMatchesLength[U] = [];
            if (!pt)
              return;
            const O = this._pageDiffs[U];
            let T;
            for (; (T = pt.exec(gt)) !== null; ) {
              if (vt && !q(this, X, kn).call(this, gt, T.index, T[0].length))
                continue;
              const [z, H] = M(O, T.index, T[0].length);
              H && (It.push(z), bt.push(H));
            }
          }, ut = new WeakSet(), Si = function(pt, vt) {
            const {
              matchDiacritics: U
            } = t(this, Z);
            let gt = !1;
            pt = pt.replaceAll(w, (bt, O, T, z, H, et) => O ? `[ ]*\\${O}[ ]*` : T ? `[ ]*${T}[ ]*` : z ? "[ ]+" : U ? H || et : H ? y.has(H.charCodeAt(0)) ? H : "" : vt ? (gt = !0, `${et}\\p{M}*`) : et);
            const It = "[ ]*";
            return pt.endsWith(It) && (pt = pt.slice(0, pt.length - It.length)), U && vt && (b || (b = String.fromCharCode(...y)), gt = !0, pt = `${pt}(?=[${b}]|[^\\p{M}]|$)`), [gt, pt];
          }, yt = new WeakSet(), Rn = function(pt) {
            let vt = t(this, L, Ai);
            if (vt.length === 0)
              return;
            const {
              caseSensitive: U,
              entireWord: gt
            } = t(this, Z), It = this._pageContents[pt], bt = this._hasDiacritics[pt];
            let O = !1;
            typeof vt == "string" ? [O, vt] = q(this, ut, Si).call(this, vt, bt) : vt = vt.sort().reverse().map((H) => {
              const [et, ft] = q(this, ut, Si).call(this, H, bt);
              return O || (O = et), `(${ft})`;
            }).join("|");
            const T = `g${O ? "u" : ""}${U ? "" : "i"}`;
            vt = vt ? new RegExp(vt, T) : null, q(this, nt, Ln).call(this, vt, gt, pt, It), t(this, Z).highlightAll && q(this, St, Oe).call(this, pt), this._resumePageIdx === pt && (this._resumePageIdx = null, q(this, dt, Ei).call(this));
            const z = this._pageMatches[pt].length;
            this._matchesCountTotal += z, t(this, Q) ? z > 0 && q(this, m, Ci).call(this) : ++ae(this, v)._ === this._linkService.pagesCount && q(this, m, Ci).call(this);
          }, ot = new WeakSet(), In = function() {
            if (this._extractTextPromises.length > 0)
              return;
            let pt = Promise.resolve();
            const vt = {
              disableNormalization: !0
            };
            for (let U = 0, gt = this._linkService.pagesCount; U < gt; U++) {
              const It = new I.PromiseCapability();
              this._extractTextPromises[U] = It.promise, pt = pt.then(() => this._pdfDocument.getPage(U + 1).then((bt) => bt.getTextContent(vt)).then((bt) => {
                const O = [];
                for (const T of bt.items)
                  O.push(T.str), T.hasEOL && O.push(`
`);
                [this._pageContents[U], this._pageDiffs[U], this._hasDiacritics[U]] = tt(O.join("")), It.resolve();
              }, (bt) => {
                console.error(`Unable to get text content for page ${U + 1}`, bt), this._pageContents[U] = "", this._pageDiffs[U] = null, this._hasDiacritics[U] = !1, It.resolve();
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
              this._dirtyMatch = !1, this._selected.pageIdx = this._selected.matchIdx = -1, this._offset.pageIdx = vt, this._offset.matchIdx = null, this._offset.wrapped = !1, this._resumePageIdx = null, this._pageMatches.length = 0, this._pageMatchesLength.length = 0, it(this, v, 0), this._matchesCountTotal = 0, q(this, Bt, ye).call(this);
              for (let bt = 0; bt < U; bt++)
                this._pendingFindMatches.has(bt) || (this._pendingFindMatches.add(bt), this._extractTextPromises[bt].then(() => {
                  this._pendingFindMatches.delete(bt), q(this, yt, Rn).call(this, bt);
                }));
            }
            if (t(this, L, Ai).length === 0) {
              q(this, ht, Ae).call(this, k.FOUND);
              return;
            }
            if (this._resumePageIdx)
              return;
            const It = this._offset;
            if (this._pagesToSearch = U, It.matchIdx !== null) {
              const bt = this._pageMatches[It.pageIdx].length;
              if (!pt && It.matchIdx + 1 < bt || pt && It.matchIdx > 0) {
                It.matchIdx = pt ? It.matchIdx - 1 : It.matchIdx + 1, q(this, Wt, Ne).call(this, !0);
                return;
              }
              q(this, Ot, wi).call(this, pt);
            }
            q(this, dt, Ei).call(this);
          }, J = new WeakSet(), Fn = function(pt) {
            const vt = this._offset, U = pt.length, gt = t(this, Z).findPrevious;
            return U ? (vt.matchIdx = gt ? U - 1 : 0, q(this, Wt, Ne).call(this, !0), !0) : (q(this, Ot, wi).call(this, gt), vt.wrapped && (vt.matchIdx = null, this._pagesToSearch < 0) ? (q(this, Wt, Ne).call(this, !1), !0) : !1);
          }, dt = new WeakSet(), Ei = function() {
            this._resumePageIdx !== null && console.error("There can only be one pending page.");
            let pt = null;
            do {
              const vt = this._offset.pageIdx;
              if (pt = this._pageMatches[vt], !pt) {
                this._resumePageIdx = vt;
                break;
              }
            } while (!q(this, J, Fn).call(this, pt));
          }, Ot = new WeakSet(), wi = function(pt) {
            const vt = this._offset, U = this._linkService.pagesCount;
            vt.pageIdx = pt ? vt.pageIdx - 1 : vt.pageIdx + 1, vt.matchIdx = null, this._pagesToSearch--, (vt.pageIdx >= U || vt.pageIdx < 0) && (vt.pageIdx = pt ? U - 1 : 0, vt.wrapped = !0);
          }, Wt = new WeakSet(), Ne = function(pt = !1) {
            let vt = k.NOT_FOUND;
            const U = this._offset.wrapped;
            if (this._offset.wrapped = !1, pt) {
              const gt = this._selected.pageIdx;
              this._selected.pageIdx = this._offset.pageIdx, this._selected.matchIdx = this._offset.matchIdx, vt = U ? k.WRAPPED : k.FOUND, gt !== -1 && gt !== this._selected.pageIdx && q(this, St, Oe).call(this, gt);
            }
            q(this, ht, Ae).call(this, vt, t(this, Z).findPrevious), this._selected.pageIdx !== -1 && (this._scrollMatches = !0, q(this, St, Oe).call(this, this._selected.pageIdx));
          }, Ht = new WeakSet(), Dn = function(pt) {
            const vt = this._pdfDocument;
            this._firstPageCapability.promise.then(() => {
              !this._pdfDocument || vt && this._pdfDocument !== vt || (this._findTimeout && (clearTimeout(this._findTimeout), this._findTimeout = null), this._resumePageIdx && (this._resumePageIdx = null, this._dirtyMatch = !0), q(this, ht, Ae).call(this, k.FOUND), this._highlightMatches = !1, q(this, Bt, ye).call(this));
            });
          }, Gt = new WeakSet(), Pi = function() {
            var It;
            const {
              pageIdx: pt,
              matchIdx: vt
            } = this._selected;
            let U = 0, gt = this._matchesCountTotal;
            if (vt !== -1) {
              for (let bt = 0; bt < pt; bt++)
                U += ((It = this._pageMatches[bt]) == null ? void 0 : It.length) || 0;
              U += vt + 1;
            }
            return (U < 1 || U > gt) && (U = gt = 0), {
              current: U,
              total: gt
            };
          }, m = new WeakSet(), Ci = function() {
            this._eventBus.dispatch("updatefindmatchescount", {
              source: this,
              matchesCount: q(this, Gt, Pi).call(this)
            });
          }, ht = new WeakSet(), Ae = function(pt, vt = !1) {
            var U;
            !t(this, Q) && (t(this, v) !== this._linkService.pagesCount || pt === k.PENDING) || this._eventBus.dispatch("updatefindcontrolstate", {
              source: this,
              state: pt,
              previous: vt,
              matchesCount: q(this, Gt, Pi).call(this),
              rawQuery: ((U = t(this, Z)) == null ? void 0 : U.query) ?? null
            });
          }, F.PDFFindController = K;
        },
        /* 2 */
        /***/
        (V, F) => {
          var St, Rt, Bt, kt, Ut;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.animationStarted = F.VERTICAL_PADDING = F.UNKNOWN_SCALE = F.TextLayerMode = F.SpreadMode = F.SidebarView = F.ScrollMode = F.SCROLLBAR_PADDING = F.RenderingStates = F.ProgressBar = F.PresentationModeState = F.OutputScale = F.MIN_SCALE = F.MAX_SCALE = F.MAX_AUTO_SCALE = F.DEFAULT_SCALE_VALUE = F.DEFAULT_SCALE_DELTA = F.DEFAULT_SCALE = F.CursorTool = F.AutoPrintRegExp = void 0, F.apiPageLayoutToViewerModes = yt, F.apiPageModeToSidebarView = Et, F.approximateFraction = Z, F.backtrackBeforeAllVisibleElements = j, F.binarySearchFirstItem = K, F.docStyle = void 0, F.getActiveOrFocusedElement = wt, F.getPageSizeInches = v, F.getVisibleElements = D, F.isPortraitOrientation = X, F.isValidRotation = a, F.isValidScrollMode = l, F.isValidSpreadMode = R, F.noContextMenuHandler = lt, F.normalizeWheelEventDelta = L, F.normalizeWheelEventDirection = _t, F.parseQueryString = Y, F.removeNullCharacters = M, F.roundToDivide = Q, F.scrollIntoView = x, F.toggleCheckedBtn = ot, F.toggleExpandedBtn = At, F.watchScroll = P;
          const c = "auto";
          F.DEFAULT_SCALE_VALUE = c;
          const d = 1;
          F.DEFAULT_SCALE = d;
          const r = 1.1;
          F.DEFAULT_SCALE_DELTA = r;
          const I = 0.1;
          F.MIN_SCALE = I;
          const k = 10;
          F.MAX_SCALE = k;
          const S = 0;
          F.UNKNOWN_SCALE = S;
          const h = 1.25;
          F.MAX_AUTO_SCALE = h;
          const p = 40;
          F.SCROLLBAR_PADDING = p;
          const f = 5;
          F.VERTICAL_PADDING = f;
          const y = {
            INITIAL: 0,
            RUNNING: 1,
            PAUSED: 2,
            FINISHED: 3
          };
          F.RenderingStates = y;
          const b = {
            UNKNOWN: 0,
            NORMAL: 1,
            CHANGING: 2,
            FULLSCREEN: 3
          };
          F.PresentationModeState = b;
          const g = {
            UNKNOWN: -1,
            NONE: 0,
            THUMBS: 1,
            OUTLINE: 2,
            ATTACHMENTS: 3,
            LAYERS: 4
          };
          F.SidebarView = g;
          const w = {
            DISABLE: 0,
            ENABLE: 1,
            ENABLE_PERMISSIONS: 2
          };
          F.TextLayerMode = w;
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
          const E = {
            SELECT: 0,
            HAND: 1,
            ZOOM: 2
          };
          F.CursorTool = E;
          const _ = /\bprint\s*\(/;
          F.AutoPrintRegExp = _;
          class o {
            constructor() {
              const J = window.devicePixelRatio || 1;
              this.sx = J, this.sy = J;
            }
            get scaled() {
              return this.sx !== 1 || this.sy !== 1;
            }
          }
          F.OutputScale = o;
          function x(at, J, rt = !1) {
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
          function M(at, J = !1) {
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
              const vt = J[pt], U = vt.div, gt = U.offsetLeft + U.clientLeft, It = U.offsetTop + U.clientTop, bt = U.clientWidth, O = U.clientHeight, T = gt + bt, z = It + O;
              if (ht === -1)
                z >= jt && (ht = z);
              else if ((dt ? gt : It) > ht)
                break;
              if (z <= Ot || It >= jt || T <= Wt || gt >= Nt)
                continue;
              const H = Math.max(0, Ot - It) + Math.max(0, z - jt), et = Math.max(0, Wt - gt) + Math.max(0, T - Nt), ft = (O - H) / O, Mt = (bt - et) / bt, G = ft * Mt * 100 | 0;
              Gt.push({
                id: vt.id,
                x: gt,
                y: It,
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
          function L(at) {
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
          function X(at) {
            return at.width <= at.height;
          }
          const W = new Promise(function(at) {
            window.requestAnimationFrame(at);
          });
          F.animationStarted = W;
          const nt = document.documentElement.style;
          F.docStyle = nt;
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
          St = new WeakMap(), Rt = new WeakMap(), Bt = new WeakMap(), kt = new WeakMap(), Ut = new WeakMap(), F.ProgressBar = ut;
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
        (V, F) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.CharacterType = void 0, F.getCharacterType = g, F.getNormalizeWithNFKC = s;
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
          F.CharacterType = c;
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
          function S(i) {
            return i === 32 || i === 9 || i === 13 || i === 10;
          }
          function h(i) {
            return i >= 13312 && i <= 40959 || i >= 63744 && i <= 64255;
          }
          function p(i) {
            return i >= 12448 && i <= 12543;
          }
          function f(i) {
            return i >= 12352 && i <= 12447;
          }
          function y(i) {
            return i >= 65376 && i <= 65439;
          }
          function b(i) {
            return (i & 65408) === 3584;
          }
          function g(i) {
            return d(i) ? r(i) ? S(i) ? c.SPACE : I(i) || k(i) || i === 95 ? c.ALPHA_LETTER : c.PUNCT : b(i) ? c.THAI_LETTER : i === 160 ? c.SPACE : c.ALPHA_LETTER : h(i) ? c.HAN_LETTER : p(i) ? c.KATAKANA_LETTER : f(i) ? c.HIRAGANA_LETTER : y(i) ? c.HALFWIDTH_KATAKANA_LETTER : c.ALPHA_LETTER;
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
        (V, F, c) => {
          var p, f, Ti, b, On;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.SimpleLinkService = F.PDFLinkService = F.LinkTarget = void 0;
          var d = c(2);
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
            target: E,
            rel: _,
            enabled: o = !0
          } = {}) {
            if (!i || typeof i != "string")
              throw new Error('A valid "url" parameter must provided.');
            const x = (0, d.removeNullCharacters)(i);
            o ? s.href = s.title = x : (s.href = "", s.title = `Disabled: ${x}`, s.onclick = () => !1);
            let P = "";
            switch (E) {
              case I.NONE:
                break;
              case I.SELF:
                P = "_self";
                break;
              case I.BLANK:
                P = "_blank";
                break;
              case I.PARENT:
                P = "_parent";
                break;
              case I.TOP:
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
              N(this, f);
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
              q(this, f, Ti).call(this, i, E, _);
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
              k(i, {
                url: E,
                target: _ ? I.BLANK : this.externalLinkTarget,
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
                const x = (0, d.parseQueryString)(i);
                if (x.has("search")) {
                  const P = x.get("search").replaceAll('"', ""), Y = x.get("phrase") === "true";
                  this.eventBus.dispatch("findfromurlhash", {
                    source: this,
                    query: Y ? P : P.match(/\S+/g)
                  });
                }
                if (x.has("page") && (E = x.get("page") | 0 || 1), x.has("zoom")) {
                  const P = x.get("zoom").split(","), Y = P[0], tt = parseFloat(Y);
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
                }) : E && (this.page = E), x.has("pagemode") && this.eventBus.dispatch("pagemode", {
                  source: this,
                  mode: x.get("pagemode")
                }), x.has("nameddest") && this.goToDestination(x.get("nameddest"));
              } else {
                _ = unescape(i);
                try {
                  _ = JSON.parse(_), Array.isArray(_) || (_ = _.toString());
                } catch {
                }
                if (typeof _ == "string" || q(o = w, b, On).call(o, _)) {
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
              for (const x of i.state) {
                switch (x) {
                  case "ON":
                  case "OFF":
                  case "Toggle":
                    o = x;
                    continue;
                }
                switch (o) {
                  case "ON":
                    _.setVisibility(x, !0);
                    break;
                  case "OFF":
                    _.setVisibility(x, !1);
                    break;
                  case "Toggle":
                    const P = _.getGroup(x);
                    P && _.setVisibility(x, !P.visible);
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
          p = new WeakMap(), f = new WeakSet(), Ti = function(i, E = null, _) {
            const o = _[0];
            let x;
            if (typeof o == "object" && o !== null) {
              if (x = this._cachedPageNumber(o), !x) {
                this.pdfDocument.getPageIndex(o).then((P) => {
                  this.cachePageRef(P + 1, o), q(this, f, Ti).call(this, i, E, _);
                }).catch(() => {
                  console.error(`PDFLinkService.#goToDestinationHelper: "${o}" is not a valid page reference, for dest="${i}".`);
                });
                return;
              }
            } else if (Number.isInteger(o))
              x = o + 1;
            else {
              console.error(`PDFLinkService.#goToDestinationHelper: "${o}" is not a valid destination reference, for dest="${i}".`);
              return;
            }
            if (!x || x < 1 || x > this.pagesCount) {
              console.error(`PDFLinkService.#goToDestinationHelper: "${x}" is not a valid page number, for dest="${i}".`);
              return;
            }
            this.pdfHistory && (this.pdfHistory.pushCurrentPosition(), this.pdfHistory.push({
              namedDest: E,
              explicitDest: _,
              pageNumber: x
            })), this.pdfViewer.scrollPageIntoView({
              pageNumber: x,
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
            let x = !0;
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
                x = !1;
                break;
              default:
                return !1;
            }
            for (let P = 2; P < E; P++) {
              const Y = i[P];
              if (!(typeof Y == "number" || x && Y === null))
                return !1;
            }
            return !0;
          }, N(w, b);
          let S = w;
          F.PDFLinkService = S;
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
              k(i, {
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
          F.SimpleLinkService = h;
        },
        /* 6 */
        /***/
        (V, F, c) => {
          var S, h, xi;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.AnnotationLayerBuilder = void 0;
          var d = c(4), r = c(7), I = c(2);
          class k {
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
              hasJSActionsPromise: x = null,
              fieldObjectsPromise: P = null,
              annotationCanvasMap: Y = null,
              accessibilityManager: tt = null
            }) {
              N(this, h);
              N(this, S, null);
              this.pageDiv = y, this.pdfPage = b, this.linkService = g, this.downloadManager = w, this.imageResourcesPath = i, this.renderForms = E, this.l10n = _, this.annotationStorage = s, this.enableScripting = o, this._hasJSActionsPromise = x || Promise.resolve(!1), this._fieldObjectsPromise = P || Promise.resolve(null), this._annotationCanvasMap = Y, this._accessibilityManager = tt, this.annotationLayer = null, this.div = null, this._cancelled = !1, this._eventBus = g.eventBus;
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
              }), this.linkService.isInPresentationMode && q(this, h, xi).call(this, I.PresentationModeState.FULLSCREEN), t(this, S) || (it(this, S, (_) => {
                q(this, h, xi).call(this, _.state);
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
              case I.PresentationModeState.FULLSCREEN:
                b = !0;
                break;
              case I.PresentationModeState.NORMAL:
                break;
              default:
                return;
            }
            for (const g of this.div.childNodes)
              g.hasAttribute("data-internal-link") || (g.inert = b);
          }, F.AnnotationLayerBuilder = k;
        },
        /* 7 */
        /***/
        (V, F) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.NullL10n = void 0, F.getL10nFallback = d;
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
          function d(k, S) {
            switch (k) {
              case "find_match_count":
                k = `find_match_count[${S.total === 1 ? "one" : "other"}]`;
                break;
              case "find_match_count_limit":
                k = `find_match_count_limit[${S.limit === 1 ? "one" : "other"}]`;
                break;
            }
            return c[k] || "";
          }
          function r(k, S) {
            return S ? k.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (h, p) => p in S ? S[p] : "{{" + p + "}}") : k;
          }
          const I = {
            async getLanguage() {
              return "en-us";
            },
            async getDirection() {
              return "ltr";
            },
            async get(k, S = null, h = d(k, S)) {
              return r(h, S);
            },
            async translate(k) {
            }
          };
          F.NullL10n = I;
        },
        /* 8 */
        /***/
        (V, F, c) => {
          var k;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.DownloadManager = void 0;
          var d = c(4);
          function r(S, h) {
            const p = document.createElement("a");
            if (!p.click)
              throw new Error('DownloadManager: "a.click()" is not supported.');
            p.href = S, p.target = "_parent", "download" in p && (p.download = h), (document.body || document.documentElement).append(p), p.click(), p.remove();
          }
          class I {
            constructor() {
              N(this, k, /* @__PURE__ */ new WeakMap());
            }
            downloadUrl(h, p, f) {
              if (!(0, d.createValidAbsoluteUrl)(h, "http://example.com")) {
                console.error(`downloadUrl - not a valid URL: ${h}`);
                return;
              }
              r(h + "#pdfjs.action=download", p);
            }
            downloadData(h, p, f) {
              const y = URL.createObjectURL(new Blob([h], {
                type: f
              }));
              r(y, p);
            }
            openOrDownloadData(h, p, f) {
              const b = (0, d.isPdfFile)(f) ? "application/pdf" : "";
              return this.downloadData(p, f, b), !1;
            }
            download(h, p, f, y) {
              const b = URL.createObjectURL(h);
              r(b, f);
            }
          }
          k = new WeakMap(), F.DownloadManager = I;
        },
        /* 9 */
        /***/
        (V, F) => {
          var k;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.WaitOnType = F.EventBus = F.AutomationEventBus = void 0, F.waitOnEventOrTimeout = d;
          const c = {
            EVENT: "event",
            TIMEOUT: "timeout"
          };
          F.WaitOnType = c;
          function d({
            target: S,
            name: h,
            delay: p = 0
          }) {
            return new Promise(function(f, y) {
              if (typeof S != "object" || !(h && typeof h == "string") || !(Number.isInteger(p) && p >= 0))
                throw new Error("waitOnEventOrTimeout - invalid parameters.");
              function b(i) {
                S instanceof r ? S._off(h, g) : S.removeEventListener(h, g), s && clearTimeout(s), f(i);
              }
              const g = b.bind(null, c.EVENT);
              S instanceof r ? S._on(h, g) : S.addEventListener(h, g);
              const w = b.bind(null, c.TIMEOUT), s = setTimeout(w, p);
            });
          }
          class r {
            constructor() {
              N(this, k, /* @__PURE__ */ Object.create(null));
            }
            on(h, p, f = null) {
              this._on(h, p, {
                external: !0,
                once: f == null ? void 0 : f.once
              });
            }
            off(h, p, f = null) {
              this._off(h, p, {
                external: !0,
                once: f == null ? void 0 : f.once
              });
            }
            dispatch(h, p) {
              const f = t(this, k)[h];
              if (!f || f.length === 0)
                return;
              let y;
              for (const {
                listener: b,
                external: g,
                once: w
              } of f.slice(0)) {
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
            _on(h, p, f = null) {
              var b;
              ((b = t(this, k))[h] || (b[h] = [])).push({
                listener: p,
                external: (f == null ? void 0 : f.external) === !0,
                once: (f == null ? void 0 : f.once) === !0
              });
            }
            _off(h, p, f = null) {
              const y = t(this, k)[h];
              if (y) {
                for (let b = 0, g = y.length; b < g; b++)
                  if (y[b].listener === p) {
                    y.splice(b, 1);
                    return;
                  }
              }
            }
          }
          k = new WeakMap(), F.EventBus = r;
          class I extends r {
            dispatch(h, p) {
              throw new Error("Not implemented: AutomationEventBus.dispatch");
            }
          }
          F.AutomationEventBus = I;
        },
        /* 10 */
        /***/
        (V, F, c) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.GenericL10n = void 0, c(11);
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
          function I(S) {
            return r[S == null ? void 0 : S.toLowerCase()] || S;
          }
          class k {
            constructor(h) {
              const {
                webL10n: p
              } = document;
              this._lang = h, this._ready = new Promise((f, y) => {
                p.setLanguage(I(h), () => {
                  f(p);
                });
              });
            }
            async getLanguage() {
              return (await this._ready).getLanguage();
            }
            async getDirection() {
              return (await this._ready).getDirection();
            }
            async get(h, p = null, f = (0, d.getL10nFallback)(h, p)) {
              return (await this._ready).get(h, p, f);
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
          document.webL10n = function(V, F) {
            var c = {}, d = "", r = "textContent", I = "", k = {}, S = "loading", h = !0;
            function p() {
              return F.querySelectorAll('link[type="application/l10n"]');
            }
            function f() {
              var M = F.querySelector('script[type="application/l10n"]');
              return M ? JSON.parse(M.innerHTML) : null;
            }
            function y(M) {
              return M ? M.querySelectorAll("*[data-l10n-id]") : [];
            }
            function b(M) {
              if (!M)
                return {};
              var K = M.getAttribute("data-l10n-id"), Z = M.getAttribute("data-l10n-args"), Q = {};
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
            function g(M, K, Z) {
              K = K || function(j) {
              }, Z = Z || function() {
              };
              var Q = new XMLHttpRequest();
              Q.open("GET", M, h), Q.overrideMimeType && Q.overrideMimeType("text/plain; charset=utf-8"), Q.onreadystatechange = function() {
                Q.readyState == 4 && (Q.status == 200 || Q.status === 0 ? K(Q.responseText) : Z());
              }, Q.onerror = Z, Q.ontimeout = Z;
              try {
                Q.send(null);
              } catch {
                Z();
              }
            }
            function w(M, K, Z, Q) {
              var v = M.replace(/[^\/]*$/, "") || "./";
              function j(lt) {
                return lt.lastIndexOf("\\") < 0 ? lt : lt.replace(/\\\\/g, "\\").replace(/\\n/g, `
`).replace(/\\r/g, "\r").replace(/\\t/g, "	").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\{/g, "{").replace(/\\}/g, "}").replace(/\\"/g, '"').replace(/\\'/g, "'");
              }
              function D(lt, _t) {
                var L = {}, a = /^\s*|\s*$/, l = /^\s*#|^\s*$/, R = /^\s*\[(.*)\]\s*$/, X = /^\s*@import\s+url\((.*)\)\s*$/i, W = /^([^=\s]*)\s*=\s*(.+)$/;
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
                          if (Rt = X.exec(kt), Rt) {
                            st(v + Rt[1], Bt);
                            return;
                          }
                        }
                        var Ut = kt.match(W);
                        Ut && Ut.length == 3 && (L[Ut[1]] = j(Ut[2]));
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
                  _t(L);
                });
              }
              g(M, function(lt) {
                d += lt, D(lt, function(_t) {
                  for (var L in _t) {
                    var a, l, R = L.lastIndexOf(".");
                    R > 0 ? (a = L.substring(0, R), l = L.substring(R + 1)) : (a = L, l = r), c[a] || (c[a] = {}), c[a][l] = _t[L];
                  }
                  Z && Z();
                });
              }, Q);
            }
            function s(M, K) {
              M && (M = M.toLowerCase()), K = K || function() {
              }, i(), I = M;
              var Z = p(), Q = Z.length;
              if (Q === 0) {
                var v = f();
                if (v && v.locales && v.default_locale) {
                  if (console.log("using the embedded JSON directory, early way out"), c = v.locales[M], !c) {
                    var j = v.default_locale.toLowerCase();
                    for (var D in v.locales)
                      if (D = D.toLowerCase(), D === M) {
                        c = v.locales[M];
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
              function L(R) {
                var X = R.href;
                this.load = function(W, nt) {
                  w(X, W, nt, function() {
                    console.warn(X + " not found."), console.warn('"' + W + '" resource not found'), I = "", nt();
                  });
                };
              }
              for (var a = 0; a < Q; a++) {
                var l = new L(Z[a]);
                l.load(M, lt);
              }
            }
            function i() {
              c = {}, d = "", I = "";
            }
            function E(M) {
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
              }, j = K[M.replace(/-.*$/, "")];
              return j in v ? v[j] : (console.warn("plural form unknown for [" + M + "]"), function() {
                return "other";
              });
            }
            k.plural = function(M, K, Z, Q) {
              var v = parseFloat(K);
              if (isNaN(v) || Q != r)
                return M;
              k._pluralRules || (k._pluralRules = E(I));
              var j = "[" + k._pluralRules(v) + "]";
              return v === 0 && Z + "[zero]" in c ? M = c[Z + "[zero]"][Q] : v == 1 && Z + "[one]" in c ? M = c[Z + "[one]"][Q] : v == 2 && Z + "[two]" in c ? M = c[Z + "[two]"][Q] : Z + j in c ? M = c[Z + j][Q] : Z + "[other]" in c && (M = c[Z + "[other]"][Q]), M;
            };
            function _(M, K, Z) {
              var Q = c[M];
              if (!Q) {
                if (console.warn("#" + M + " is undefined."), !Z)
                  return null;
                Q = Z;
              }
              var v = {};
              for (var j in Q) {
                var D = Q[j];
                D = o(D, K, M, j), D = x(D, K, M), v[j] = D;
              }
              return v;
            }
            function o(M, K, Z, Q) {
              var v = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/, j = v.exec(M);
              if (!j || !j.length)
                return M;
              var D = j[1], lt = j[2], _t;
              if (K && lt in K ? _t = K[lt] : lt in c && (_t = c[lt]), D in k) {
                var L = k[D];
                M = L(M, _t, Z, Q);
              }
              return M;
            }
            function x(M, K, Z) {
              var Q = /\{\{\s*(.+?)\s*\}\}/g;
              return M.replace(Q, function(v, j) {
                return K && j in K ? K[j] : j in c ? c[j] : (console.log("argument {{" + j + "}} for #" + Z + " is undefined."), v);
              });
            }
            function P(M) {
              var K = b(M);
              if (K.id) {
                var Z = _(K.id, K.args);
                if (!Z) {
                  console.warn("#" + K.id + " is undefined.");
                  return;
                }
                if (Z[r]) {
                  if (Y(M) === 0)
                    M[r] = Z[r];
                  else {
                    for (var Q = M.childNodes, v = !1, j = 0, D = Q.length; j < D; j++)
                      Q[j].nodeType === 3 && /\S/.test(Q[j].nodeValue) && (v ? Q[j].nodeValue = "" : (Q[j].nodeValue = Z[r], v = !0));
                    if (!v) {
                      var lt = F.createTextNode(Z[r]);
                      M.prepend(lt);
                    }
                  }
                  delete Z[r];
                }
                for (var _t in Z)
                  M[_t] = Z[_t];
              }
            }
            function Y(M) {
              if (M.children)
                return M.children.length;
              if (typeof M.childElementCount < "u")
                return M.childElementCount;
              for (var K = 0, Z = 0; Z < M.childNodes.length; Z++)
                K += M.nodeType === 1 ? 1 : 0;
              return K;
            }
            function tt(M) {
              M = M || F.documentElement;
              for (var K = y(M), Z = K.length, Q = 0; Q < Z; Q++)
                P(K[Q]);
              P(M);
            }
            return {
              get: function(M, K, Z) {
                var Q = M.lastIndexOf("."), v = r;
                Q > 0 && (v = M.substring(Q + 1), M = M.substring(0, Q));
                var j;
                Z && (j = {}, j[v] = Z);
                var D = _(M, K, j);
                return D && v in D ? D[v] : "{{" + M + "}}";
              },
              getData: function() {
                return c;
              },
              getText: function() {
                return d;
              },
              getLanguage: function() {
                return I;
              },
              setLanguage: function(M, K) {
                s(M, function() {
                  K && K();
                });
              },
              getDirection: function() {
                var M = ["ar", "he", "fa", "ps", "ur"], K = I.split("-", 1)[0];
                return M.indexOf(K) >= 0 ? "rtl" : "ltr";
              },
              translate: tt,
              getReadyState: function() {
                return S;
              },
              ready: function(M) {
                if (M)
                  S == "complete" || S == "interactive" ? V.setTimeout(function() {
                    M();
                  }) : F.addEventListener && F.addEventListener("localized", function K() {
                    F.removeEventListener("localized", K), M();
                  });
                else
                  return;
              }
            };
          }(window, document);
        },
        /* 12 */
        /***/
        (V, F, c) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFHistory = void 0, F.isDestArraysEqual = y, F.isDestHashesEqual = f;
          var d = c(2), r = c(9);
          const I = 1e3, k = 50, S = 1e3;
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
                  page: x,
                  rotation: P
                } = this._parseCurrentHash(!0);
                if (!o || i || w) {
                  this._pushOrReplaceState(null, !0);
                  return;
                }
                this._pushOrReplaceState({
                  hash: o,
                  page: x,
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
              if (this._destination && (f(this._destination.hash, i) || y(this._destination.dest, w))) {
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
              if (this._destination.hash === w.hash || !this._destination.page && this._numPositionUpdates <= k)
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
                delay: I
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
          F.PDFHistory = p;
          function f(b, g) {
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
        (V, F, c) => {
          var _, o, x, P, Y, tt, M, K, Z, Q, v, Be, D, Mi, _t, ki, a, Li, R, Ri, W, Nn, st, Bn, wt, Ii;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFPageView = void 0;
          var d = c(4), r = c(2), I = c(14), k = c(6), S = c(15), h = c(7), p = c(5), f = c(16), y = c(17), b = c(18), g = c(19), w = c(20);
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
              N(this, x, null);
              N(this, P, null);
              N(this, Y, null);
              N(this, tt, null);
              N(this, M, r.RenderingStates.INITIAL);
              N(this, K, r.TextLayerMode.ENABLE);
              N(this, Z, {
                directDrawing: !0,
                initialOptionalContent: !0,
                regularAnnotations: !0
              });
              N(this, Q, /* @__PURE__ */ new WeakMap());
              var Bt;
              const At = ot.container, St = ot.defaultViewport;
              this.id = ot.id, this.renderingId = "page" + this.id, it(this, x, ot.layerProperties || i), this.pdfPage = null, this.pageLabel = null, this.rotation = 0, this.scale = ot.scale || r.DEFAULT_SCALE, this.viewport = St, this.pdfPageRotate = St.rotation, this._optionalContentConfigPromise = ot.optionalContentConfigPromise || null, it(this, K, ot.textLayerMode ?? r.TextLayerMode.ENABLE), it(this, _, ot.annotationMode ?? d.AnnotationMode.ENABLE_FORMS), this.imageResourcesPath = ot.imageResourcesPath || "", this.isOffscreenCanvasSupported = ot.isOffscreenCanvasSupported ?? !0, this.maxCanvasPixels = ot.maxCanvasPixels ?? s, this.pageColors = ot.pageColors || null, this.eventBus = ot.eventBus, this.renderingQueue = ot.renderingQueue, this.l10n = ot.l10n || h.NullL10n, this.renderTask = null, this.resume = null, this._isStandalone = !((Bt = this.renderingQueue) != null && Bt.hasViewer()), this._container = At, ot.useOnlyCssZoom && (console.error("useOnlyCssZoom was removed, please use `maxCanvasPixels = 0` instead."), this.maxCanvasPixels = 0), this._annotationCanvasMap = null, this.annotationLayer = null, this.annotationEditorLayer = null, this.textLayer = null, this.zoomLayer = null, this.xfaLayer = null, this.structTreeLayer = null;
              const Rt = document.createElement("div");
              if (Rt.className = "page", Rt.setAttribute("data-page-number", this.id), Rt.setAttribute("role", "region"), this.l10n.get("page_landmark", {
                page: this.id
              }).then((kt) => {
                Rt.setAttribute("aria-label", kt);
              }), this.div = Rt, q(this, v, Be).call(this), At == null || At.append(Rt), this._isStandalone) {
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
              return t(this, M);
            }
            set renderingState(ot) {
              if (ot !== t(this, M))
                switch (it(this, M, ot), t(this, P) && (clearTimeout(t(this, P)), it(this, P, null)), ot) {
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
              }), q(this, v, Be).call(this), this.reset();
            }
            destroy() {
              var ot;
              this.reset(), (ot = this.pdfPage) == null || ot.cleanup();
            }
            get _textHighlighter() {
              return (0, d.shadow)(this, "_textHighlighter", new b.TextHighlighter({
                pageIndex: this.id - 1,
                eventBus: this.eventBus,
                findController: t(this, x).call(this).findController
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
              }), q(this, v, Be).call(this), this._isStandalone && ((kt = this._container) == null || kt.style.setProperty("--scale-factor", this.viewport.scale)), this.canvas) {
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
              At && this.annotationLayer && q(this, D, Mi).call(this), St && this.annotationEditorLayer && q(this, _t, ki).call(this), Rt && this.xfaLayer && q(this, a, Li).call(this), this.textLayer && (kt ? (this.textLayer.hide(), (at = this.structTreeLayer) == null || at.hide()) : Bt && q(this, R, Ri).call(this));
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
                } = t(this, x).call(this);
                this._annotationCanvasMap || (this._annotationCanvasMap = /* @__PURE__ */ new Map()), this.annotationLayer = new k.AnnotationLayerBuilder({
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
                if (xt == null || xt(!0), await q(this, wt, Ii).call(this, Ct), q(this, R, Ri).call(this), this.annotationLayer && await q(this, D, Mi).call(this), !this.annotationEditorLayer) {
                  const {
                    annotationEditorUIManager: ht
                  } = t(this, x).call(this);
                  if (!ht)
                    return;
                  this.annotationEditorLayer = new I.AnnotationEditorLayerBuilder({
                    uiManager: ht,
                    pageDiv: ot,
                    pdfPage: Rt,
                    l10n: At,
                    accessibilityManager: this._accessibilityManager,
                    annotationLayer: (B = this.annotationLayer) == null ? void 0 : B.annotationLayer
                  });
                }
                q(this, _t, ki).call(this);
              }, (B) => (B instanceof d.RenderingCancelledException || xt == null || xt(!0), q(this, wt, Ii).call(this, Ct, B)));
              if (Rt.isPureXfa) {
                if (this.xfaLayer)
                  this.xfaLayer.div && ot.append(this.xfaLayer.div);
                else {
                  const {
                    annotationStorage: B,
                    linkService: ht
                  } = t(this, x).call(this);
                  this.xfaLayer = new w.XfaLayerBuilder({
                    pageDiv: ot,
                    pdfPage: Rt,
                    annotationStorage: B,
                    linkService: ht
                  });
                }
                q(this, a, Li).call(this);
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
          _ = new WeakMap(), o = new WeakMap(), x = new WeakMap(), P = new WeakMap(), Y = new WeakMap(), tt = new WeakMap(), M = new WeakMap(), K = new WeakMap(), Z = new WeakMap(), Q = new WeakMap(), v = new WeakSet(), Be = function() {
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
              At != null && At.textDivs && this._textHighlighter && q(this, st, Bn).call(this, At.textDivs);
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
            }), q(this, W, Nn).call(this);
          }, W = new WeakSet(), Nn = async function() {
            var St, Rt, Bt;
            if (!this.textLayer)
              return;
            this.structTreeLayer || (this.structTreeLayer = new f.StructTreeLayerBuilder());
            const ot = await (this.structTreeLayer.renderingDone ? null : this.pdfPage.getStructTree()), At = (St = this.structTreeLayer) == null ? void 0 : St.render(ot);
            At && ((Rt = this.canvas) == null || Rt.append(At)), (Bt = this.structTreeLayer) == null || Bt.show();
          }, st = new WeakSet(), Bn = async function(ot) {
            const At = await this.pdfPage.getTextContent(), St = [];
            for (const Rt of At.items)
              St.push(Rt.str);
            this._textHighlighter.setTextMapping(ot, St), this._textHighlighter.enable();
          }, wt = new WeakSet(), Ii = async function(ot, At = null) {
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
          }, F.PDFPageView = E;
        },
        /* 14 */
        /***/
        (V, F, c) => {
          var k, S;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.AnnotationEditorLayerBuilder = void 0;
          var d = c(4), r = c(7);
          class I {
            constructor(p) {
              N(this, k, null);
              N(this, S, void 0);
              this.pageDiv = p.pageDiv, this.pdfPage = p.pdfPage, this.accessibilityManager = p.accessibilityManager, this.l10n = p.l10n || r.NullL10n, this.annotationEditorLayer = null, this.div = null, this._cancelled = !1, it(this, S, p.uiManager), it(this, k, p.annotationLayer || null);
            }
            async render(p, f = "display") {
              if (f !== "display" || this._cancelled)
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
                annotationLayer: t(this, k)
              });
              const g = {
                viewport: y,
                div: b,
                annotations: null,
                intent: f
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
          k = new WeakMap(), S = new WeakMap(), F.AnnotationEditorLayerBuilder = I;
        },
        /* 15 */
        /***/
        (V, F) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.compatibilityParams = F.OptionKind = F.AppOptions = void 0;
          const c = /* @__PURE__ */ Object.create(null);
          F.compatibilityParams = c;
          {
            const S = navigator.userAgent || "", h = navigator.platform || "", p = navigator.maxTouchPoints || 1, f = /Android/.test(S), y = /\b(iPad|iPhone|iPod)(?=;)/.test(S) || h === "MacIntel" && p > 1;
            (function() {
              (y || f) && (c.maxCanvasPixels = 5242880);
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
              const p = I[h];
              if (p !== void 0)
                return p;
              const f = r[h];
              if (f !== void 0)
                return c[h] ?? f.value;
            }
            static getAll(h = null) {
              const p = /* @__PURE__ */ Object.create(null);
              for (const f in r) {
                const y = r[f];
                if (h) {
                  if (!(h & y.kind))
                    continue;
                  if (h === d.PREFERENCE) {
                    const g = y.value, w = typeof g;
                    if (w === "boolean" || w === "string" || w === "number" && Number.isInteger(g)) {
                      p[f] = g;
                      continue;
                    }
                    throw new Error(`Invalid type for preference: ${f}`);
                  }
                }
                const b = I[f];
                p[f] = b !== void 0 ? b : c[f] ?? y.value;
              }
              return p;
            }
            static set(h, p) {
              I[h] = p;
            }
            static setAll(h) {
              for (const p in h)
                I[p] = h[p];
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
        (V, F) => {
          var I, k, Fi, h, Di;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.StructTreeLayerBuilder = void 0;
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
              N(this, k);
              N(this, h);
              N(this, I, void 0);
            }
            get renderingDone() {
              return t(this, I) !== void 0;
            }
            render(y) {
              if (t(this, I) !== void 0)
                return t(this, I);
              const b = q(this, h, Di).call(this, y);
              return b == null || b.classList.add("structTree"), it(this, I, b);
            }
            hide() {
              t(this, I) && !t(this, I).hidden && (t(this, I).hidden = !0);
            }
            show() {
              var y;
              (y = t(this, I)) != null && y.hidden && (t(this, I).hidden = !1);
            }
          }
          I = new WeakMap(), k = new WeakSet(), Fi = function(y, b) {
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
            if (q(this, k, Fi).call(this, y, b), y.children)
              if (y.children.length === 1 && "id" in y.children[0])
                q(this, k, Fi).call(this, y.children[0], b);
              else
                for (const g of y.children)
                  b.append(q(this, h, Di).call(this, g));
            return b;
          }, F.StructTreeLayerBuilder = r;
        },
        /* 17 */
        /***/
        (V, F, c) => {
          var I, k, S, h, p, Ve, y, Oi;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.TextAccessibilityManager = void 0;
          var d = c(2);
          const g = class g {
            constructor() {
              N(this, y);
              N(this, I, !1);
              N(this, k, null);
              N(this, S, /* @__PURE__ */ new Map());
              N(this, h, /* @__PURE__ */ new Map());
            }
            setTextMapping(s) {
              it(this, k, s);
            }
            enable() {
              if (t(this, I))
                throw new Error("TextAccessibilityManager is already enabled.");
              if (!t(this, k))
                throw new Error("Text divs and strings have not been set.");
              if (it(this, I, !0), it(this, k, t(this, k).slice()), t(this, k).sort(q(g, p, Ve)), t(this, S).size > 0) {
                const s = t(this, k);
                for (const [i, E] of t(this, S)) {
                  if (!document.getElementById(i)) {
                    t(this, S).delete(i);
                    continue;
                  }
                  q(this, y, Oi).call(this, i, s[E]);
                }
              }
              for (const [s, i] of t(this, h))
                this.addPointerInTextLayer(s, i);
              t(this, h).clear();
            }
            disable() {
              t(this, I) && (t(this, h).clear(), it(this, k, null), it(this, I, !1));
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
                id: E
              } = s, _ = t(this, S).get(E);
              if (_ === void 0)
                return;
              const o = i[_];
              t(this, S).delete(E);
              let x = o.getAttribute("aria-owns");
              x != null && x.includes(E) && (x = x.split(" ").filter((P) => P !== E).join(" "), x ? o.setAttribute("aria-owns", x) : (o.removeAttribute("aria-owns"), o.setAttribute("role", "presentation")));
            }
            addPointerInTextLayer(s, i) {
              const {
                id: E
              } = s;
              if (!E)
                return;
              if (!t(this, I)) {
                t(this, h).set(s, i);
                return;
              }
              i && this.removePointerInTextLayer(s);
              const _ = t(this, k);
              if (!_ || _.length === 0)
                return;
              const o = (0, d.binarySearchFirstItem)(_, (P) => {
                var Y;
                return q(Y = g, p, Ve).call(Y, s, P) < 0;
              }), x = Math.max(0, o - 1);
              q(this, y, Oi).call(this, E, _[x]), t(this, S).set(E, x);
            }
            moveElementInDOM(s, i, E, _) {
              if (this.addPointerInTextLayer(E, _), !s.hasChildNodes()) {
                s.append(i);
                return;
              }
              const o = Array.from(s.childNodes).filter((Y) => Y !== i);
              if (o.length === 0)
                return;
              const x = E || i, P = (0, d.binarySearchFirstItem)(o, (Y) => {
                var tt;
                return q(tt = g, p, Ve).call(tt, x, Y) < 0;
              });
              P === 0 ? o[0].before(i) : o[P - 1].after(i);
            }
          };
          I = new WeakMap(), k = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakSet(), Ve = function(s, i) {
            const E = s.getBoundingClientRect(), _ = i.getBoundingClientRect();
            if (E.width === 0 && E.height === 0)
              return 1;
            if (_.width === 0 && _.height === 0)
              return -1;
            const o = E.y, x = E.y + E.height, P = E.y + E.height / 2, Y = _.y, tt = _.y + _.height, M = _.y + _.height / 2;
            if (P <= Y && M >= x)
              return -1;
            if (M <= o && P >= tt)
              return 1;
            const K = E.x + E.width / 2, Z = _.x + _.width / 2;
            return K - Z;
          }, y = new WeakSet(), Oi = function(s, i) {
            const E = i.getAttribute("aria-owns");
            E != null && E.includes(s) || i.setAttribute("aria-owns", E ? `${E} ${s}` : s), i.removeAttribute("role");
          }, N(g, p);
          let r = g;
          F.TextAccessibilityManager = r;
        },
        /* 18 */
        /***/
        (V, F) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.TextHighlighter = void 0;
          class c {
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
              let S = 0, h = 0;
              const p = k.length - 1, f = [];
              for (let y = 0, b = r.length; y < b; y++) {
                let g = r[y];
                for (; S !== p && g >= h + k[S].length; )
                  h += k[S].length, S++;
                S === k.length && console.error("Could not find a matching mapping");
                const w = {
                  begin: {
                    divIdx: S,
                    offset: g - h
                  }
                };
                for (g += I[y]; S !== p && g > h + k[S].length; )
                  h += k[S].length, S++;
                w.end = {
                  divIdx: S,
                  offset: g - h
                }, f.push(w);
              }
              return f;
            }
            _renderMatches(r) {
              if (r.length === 0)
                return;
              const {
                findController: I,
                pageIdx: k
              } = this, {
                textContentItemsStr: S,
                textDivs: h
              } = this, p = k === I.selected.pageIdx, f = I.selected.matchIdx, y = I.state.highlightAll;
              let b = null;
              const g = {
                divIdx: -1,
                offset: void 0
              };
              function w(x, P) {
                const Y = x.divIdx;
                return h[Y].textContent = "", s(Y, 0, x.offset, P);
              }
              function s(x, P, Y, tt) {
                let M = h[x];
                if (M.nodeType === Node.TEXT_NODE) {
                  const Q = document.createElement("span");
                  M.before(Q), Q.append(M), h[x] = Q, M = Q;
                }
                const K = S[x].substring(P, Y), Z = document.createTextNode(K);
                if (tt) {
                  const Q = document.createElement("span");
                  return Q.className = `${tt} appended`, Q.append(Z), M.append(Q), tt.includes("selected") ? Q.offsetLeft : 0;
                }
                return M.append(Z), 0;
              }
              let i = f, E = i + 1;
              if (y)
                i = 0, E = r.length;
              else if (!p)
                return;
              let _ = -1, o = -1;
              for (let x = i; x < E; x++) {
                const P = r[x], Y = P.begin;
                if (Y.divIdx === _ && Y.offset === o)
                  continue;
                _ = Y.divIdx, o = Y.offset;
                const tt = P.end, M = p && x === f, K = M ? " selected" : "";
                let Z = 0;
                if (!b || Y.divIdx !== b.divIdx ? (b !== null && s(b.divIdx, b.offset, g.offset), w(Y)) : s(b.divIdx, b.offset, Y.offset), Y.divIdx === tt.divIdx)
                  Z = s(Y.divIdx, Y.offset, tt.offset, "highlight" + K);
                else {
                  Z = s(Y.divIdx, Y.offset, g.offset, "highlight begin" + K);
                  for (let Q = Y.divIdx + 1, v = tt.divIdx; Q < v; Q++)
                    h[Q].className = "highlight middle" + K;
                  w(tt, "highlight end" + K);
                }
                b = tt, M && I.scrollMatchIntoView({
                  element: h[Y.divIdx],
                  selectedLeft: Z,
                  pageIndex: k,
                  matchIndex: f
                });
              }
              b && s(b.divIdx, b.offset, g.offset);
            }
            _updateMatches(r = !1) {
              if (!this.enabled && !r)
                return;
              const {
                findController: I,
                matches: k,
                pageIdx: S
              } = this, {
                textContentItemsStr: h,
                textDivs: p
              } = this;
              let f = -1;
              for (const g of k) {
                const w = Math.max(f, g.begin.divIdx);
                for (let s = w, i = g.end.divIdx; s <= i; s++) {
                  const E = p[s];
                  E.textContent = h[s], E.className = "";
                }
                f = g.end.divIdx + 1;
              }
              if (!(I != null && I.highlightMatches) || r)
                return;
              const y = I.pageMatches[S] || null, b = I.pageMatchesLength[S] || null;
              this.matches = this._convertMatches(y, b), this._renderMatches(this.matches);
            }
          }
          F.TextHighlighter = c;
        },
        /* 19 */
        /***/
        (V, F, c) => {
          var k, S, h, p, f, Vn, b, Un;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.TextLayerBuilder = void 0;
          var d = c(4), r = c(2);
          class I {
            constructor({
              highlighter: s = null,
              accessibilityManager: i = null,
              isOffscreenCanvasSupported: E = !0,
              enablePermissions: _ = !1
            }) {
              N(this, f);
              N(this, b);
              N(this, k, !1);
              N(this, S, 0);
              N(this, h, 0);
              N(this, p, null);
              this.textContentItemsStr = [], this.renderingDone = !1, this.textDivs = [], this.textDivProperties = /* @__PURE__ */ new WeakMap(), this.textLayerRenderTask = null, this.highlighter = s, this.accessibilityManager = i, this.isOffscreenCanvasSupported = E, it(this, k, _ === !0), this.div = document.createElement("div"), this.div.className = "textLayer", this.hide();
            }
            get numTextDivs() {
              return this.textDivs.length;
            }
            async render(s) {
              var _, o, x;
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
              }), await this.textLayerRenderTask.promise, q(this, f, Vn).call(this), it(this, h, i), it(this, S, E), this.show(), (x = this.accessibilityManager) == null || x.enable();
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
          k = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), f = new WeakSet(), Vn = function() {
            this.renderingDone = !0;
            const s = document.createElement("div");
            s.className = "endOfContent", this.div.append(s), q(this, b, Un).call(this);
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
                const o = s.getBoundingClientRect(), x = Math.max(0, (i.pageY - o.top) / o.height);
                E.style.top = (x * 100).toFixed(2) + "%";
              }
              E.classList.add("active");
            }), s.addEventListener("mouseup", () => {
              const i = s.querySelector(".endOfContent");
              i && (i.style.top = "", i.classList.remove("active"));
            }), s.addEventListener("copy", (i) => {
              if (!t(this, k)) {
                const E = document.getSelection();
                i.clipboardData.setData("text/plain", (0, r.removeNullCharacters)((0, d.normalizeUnicode)(E.toString())));
              }
              i.preventDefault(), i.stopPropagation();
            });
          }, F.TextLayerBuilder = I;
        },
        /* 20 */
        /***/
        (V, F, c) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.XfaLayerBuilder = void 0;
          var d = c(4);
          class r {
            constructor({
              pageDiv: k,
              pdfPage: S,
              annotationStorage: h = null,
              linkService: p,
              xfaHtml: f = null
            }) {
              this.pageDiv = k, this.pdfPage = S, this.annotationStorage = h, this.linkService = p, this.xfaHtml = f, this.div = null, this._cancelled = !1;
            }
            async render(k, S = "display") {
              if (S === "print") {
                const f = {
                  viewport: k.clone({
                    dontFlip: !0
                  }),
                  div: this.div,
                  xfaHtml: this.xfaHtml,
                  annotationStorage: this.annotationStorage,
                  linkService: this.linkService,
                  intent: S
                }, y = document.createElement("div");
                return this.pageDiv.append(y), f.div = y, d.XfaLayer.render(f);
              }
              const h = await this.pdfPage.getXfa();
              if (this._cancelled || !h)
                return {
                  textDivs: []
                };
              const p = {
                viewport: k.clone({
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
          F.XfaLayerBuilder = r;
        },
        /* 21 */
        /***/
        (V, F, c) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFScriptingManager = void 0;
          var d = c(22), r = c(23);
          class I extends r.PDFScriptingManager {
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
          F.PDFScriptingManager = I;
        },
        /* 22 */
        /***/
        (V, F, c) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.GenericScripting = void 0, F.docProperties = r;
          var d = c(4);
          async function r(k) {
            const S = "", h = S.split("#")[0];
            let {
              info: p,
              metadata: f,
              contentDispositionFilename: y,
              contentLength: b
            } = await k.getMetadata();
            if (!b) {
              const {
                length: g
              } = await k.getDownloadInfo();
              b = g;
            }
            return {
              ...p,
              baseURL: h,
              filesize: b,
              filename: y || (0, d.getPdfFilenameFromUrl)(S),
              metadata: f == null ? void 0 : f.getRaw(),
              authors: f == null ? void 0 : f.get("dc:creator"),
              numPages: k.numPages,
              URL: S
            };
          }
          class I {
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
          F.GenericScripting = I;
        },
        /* 23 */
        /***/
        (V, F, c) => {
          var k, S, h, p, f, y, b, g, w, s, i, E, Hn, o, Ue, P, Ni, tt, jn, K, Se;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFScriptingManager = void 0;
          var d = c(2), r = c(4);
          class I {
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
              N(this, k, null);
              N(this, S, null);
              N(this, h, null);
              N(this, p, null);
              N(this, f, null);
              N(this, y, null);
              N(this, b, null);
              N(this, g, !1);
              N(this, w, null);
              N(this, s, null);
              N(this, i, null);
              it(this, p, v), it(this, w, j), it(this, f, D), it(this, h, lt);
            }
            setViewer(v) {
              it(this, b, v);
            }
            async setDocument(v) {
              var _t;
              if (t(this, y) && await q(this, K, Se).call(this), it(this, y, v), !v)
                return;
              const [j, D, lt] = await Promise.all([v.getFieldObjects(), v.getCalculationOrderIds(), v.getJSActions()]);
              if (!j && !lt) {
                await q(this, K, Se).call(this);
                return;
              }
              if (v === t(this, y)) {
                try {
                  it(this, s, q(this, tt, jn).call(this));
                } catch (L) {
                  console.error(`setDocument: "${L.message}".`), await q(this, K, Se).call(this);
                  return;
                }
                this._internalEvents.set("updatefromsandbox", (L) => {
                  (L == null ? void 0 : L.source) === window && q(this, E, Hn).call(this, L.detail);
                }), this._internalEvents.set("dispatcheventinsandbox", (L) => {
                  var a;
                  (a = t(this, s)) == null || a.dispatchEventInSandbox(L.detail);
                }), this._internalEvents.set("pagechanging", ({
                  pageNumber: L,
                  previous: a
                }) => {
                  L !== a && (q(this, P, Ni).call(this, a), q(this, o, Ue).call(this, L));
                }), this._internalEvents.set("pagerendered", ({
                  pageNumber: L
                }) => {
                  this._pageOpenPending.has(L) && L === t(this, b).currentPageNumber && q(this, o, Ue).call(this, L);
                }), this._internalEvents.set("pagesdestroy", async () => {
                  var L, a;
                  await q(this, P, Ni).call(this, t(this, b).currentPageNumber), await ((L = t(this, s)) == null ? void 0 : L.dispatchEventInSandbox({
                    id: "doc",
                    name: "WillClose"
                  })), (a = t(this, k)) == null || a.resolve();
                });
                for (const [L, a] of this._internalEvents)
                  t(this, p)._on(L, a);
                try {
                  const L = await t(this, h).call(this, v);
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
                      ...L,
                      actions: lt
                    }
                  }), t(this, p).dispatch("sandboxcreated", {
                    source: this
                  });
                } catch (L) {
                  console.error(`setDocument: "${L.message}".`), await q(this, K, Se).call(this);
                  return;
                }
                await ((_t = t(this, s)) == null ? void 0 : _t.dispatchEventInSandbox({
                  id: "doc",
                  name: "Open"
                })), await q(this, o, Ue).call(this, t(this, b).currentPageNumber, !0), Promise.resolve().then(() => {
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
          k = new WeakMap(), S = new WeakMap(), h = new WeakMap(), p = new WeakMap(), f = new WeakMap(), y = new WeakMap(), b = new WeakMap(), g = new WeakMap(), w = new WeakMap(), s = new WeakMap(), i = new WeakMap(), E = new WeakSet(), Hn = async function(v) {
            var R, X;
            const j = t(this, b), D = j.isInPresentationMode || j.isChangingPresentationMode, {
              id: lt,
              siblings: _t,
              command: L,
              value: a
            } = v;
            if (!lt) {
              switch (L) {
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
              })) : (X = t(this, y)) == null || X.annotationStorage.setValue(W, v);
            }
          }, o = new WeakSet(), Ue = async function(v, j = !1) {
            const D = t(this, y), lt = this._visitedPages;
            if (j && it(this, k, new r.PromiseCapability()), !t(this, k))
              return;
            const _t = t(this, b).getPageView(v - 1);
            if ((_t == null ? void 0 : _t.renderingState) !== d.RenderingStates.FINISHED) {
              this._pageOpenPending.add(v);
              return;
            }
            this._pageOpenPending.delete(v);
            const L = (async () => {
              var l, R;
              const a = await (lt.has(v) ? null : (l = _t.pdfPage) == null ? void 0 : l.getJSActions());
              D === t(this, y) && await ((R = t(this, s)) == null ? void 0 : R.dispatchEventInSandbox({
                id: "page",
                name: "PageOpen",
                pageNumber: v,
                actions: a
              }));
            })();
            lt.set(v, L);
          }, P = new WeakSet(), Ni = async function(v) {
            var _t;
            const j = t(this, y), D = this._visitedPages;
            if (!t(this, k) || this._pageOpenPending.has(v))
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
            return t(this, f).createScripting({
              sandboxBundleSrc: t(this, w)
            });
          }, K = new WeakSet(), Se = async function() {
            var v, j, D;
            if (!t(this, s)) {
              it(this, y, null), (v = t(this, S)) == null || v.resolve();
              return;
            }
            t(this, k) && (await Promise.race([t(this, k).promise, new Promise((lt) => {
              setTimeout(lt, 1e3);
            })]).catch(() => {
            }), it(this, k, null)), it(this, y, null);
            try {
              await t(this, s).destroySandbox();
            } catch {
            }
            (j = t(this, i)) == null || j.reject(new Error("Scripting destroyed.")), it(this, i, null);
            for (const [lt, _t] of this._internalEvents)
              t(this, p)._off(lt, _t);
            this._internalEvents.clear(), this._pageOpenPending.clear(), this._visitedPages.clear(), it(this, s, null), it(this, g, !1), (D = t(this, S)) == null || D.resolve();
          }, F.PDFScriptingManager = I;
        },
        /* 24 */
        /***/
        (V, F, c) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFSinglePageViewer = void 0;
          var d = c(2), r = c(25);
          class I extends r.PDFViewer {
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
          F.PDFSinglePageViewer = I;
        },
        /* 25 */
        /***/
        (V, F, c) => {
          var w, s, i, Bi, _, o, x, P, Y, tt, M, K, Z, Q, v, j, D, lt, _t, L, a, Wn, R, zn, W, Gn, st, $n, wt, Ee, Et, He, At, Xn, Rt, Vi, kt, qn, at, se, rt, Ui, xt, Yn, jt, Kn, Nt, Hi, $t, Qn;
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PagesCountLimit = F.PDFViewer = F.PDFPageViewBuffer = void 0;
          var d = c(4), r = c(2), I = c(7), k = c(13), S = c(26), h = c(5);
          const p = 10, f = {
            FORCE_SCROLL_MODE_PAGE: 15e3,
            FORCE_LAZY_PAGE_INIT: 7500,
            PAUSE_EAGER_PAGE_INIT: 250
          };
          F.PagesCountLimit = f;
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
              B.has(m) && B.delete(m), B.add(m), B.size > t(this, s) && q(this, i, Bi).call(this);
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
                q(this, i, Bi).call(this);
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
          }, F.PDFPageViewBuffer = b;
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
              N(this, x, null);
              N(this, P, d.AnnotationMode.ENABLE_FORMS);
              N(this, Y, null);
              N(this, tt, null);
              N(this, M, !1);
              N(this, K, !1);
              N(this, Z, null);
              N(this, Q, !1);
              N(this, v, 0);
              N(this, j, new ResizeObserver(q(this, $t, Qn).bind(this)));
              N(this, D, null);
              N(this, lt, null);
              N(this, _t, null);
              N(this, L, r.TextLayerMode.ENABLE);
              var ht, Lt;
              const B = "3.10.111";
              if (d.version !== B)
                throw new Error(`The API version "${d.version}" does not match the Viewer version "${B}".`);
              if (this.container = m.container, this.viewer = m.viewer || m.container.firstElementChild, ((ht = this.container) == null ? void 0 : ht.tagName) !== "DIV" || ((Lt = this.viewer) == null ? void 0 : Lt.tagName) !== "DIV")
                throw new Error("Invalid `container` and/or `viewer` option.");
              if (this.container.offsetParent && getComputedStyle(this.container).position !== "absolute")
                throw new Error("The `container` must be absolutely positioned.");
              t(this, j).observe(this.container), this.eventBus = m.eventBus, this.linkService = m.linkService || new h.SimpleLinkService(), this.downloadManager = m.downloadManager || null, this.findController = m.findController || null, this.findController && (this.findController.onIsPageVisible = (Pt) => this._getVisiblePages().ids.has(Pt)), this._scriptingManager = m.scriptingManager || null, it(this, L, m.textLayerMode ?? r.TextLayerMode.ENABLE), it(this, P, m.annotationMode ?? d.AnnotationMode.ENABLE_FORMS), it(this, o, m.annotationEditorMode ?? d.AnnotationEditorType.NONE), this.imageResourcesPath = m.imageResourcesPath || "", this.enablePrintAutoRotate = m.enablePrintAutoRotate || !1, this.removePageBorders = m.removePageBorders || !1, m.useOnlyCssZoom && (console.error("useOnlyCssZoom was removed, please use `maxCanvasPixels = 0` instead."), m.maxCanvasPixels = 0), this.isOffscreenCanvasSupported = m.isOffscreenCanvasSupported ?? !0, this.maxCanvasPixels = m.maxCanvasPixels, this.l10n = m.l10n || I.NullL10n, it(this, M, m.enablePermissions || !1), this.pageColors = m.pageColors || null, this.defaultRenderingQueue = !m.renderingQueue, this.defaultRenderingQueue ? (this.renderingQueue = new S.PDFRenderingQueue(), this.renderingQueue.setViewer(this)) : this.renderingQueue = m.renderingQueue, this.scroll = (0, r.watchScroll)(this.container, this._scrollUpdate.bind(this)), this.presentationModeState = r.PresentationModeState.UNKNOWN, this._onBeforeDraw = this._onAfterDraw = null, this._resetView(), this.removePageBorders && this.viewer.classList.add("removePageBorders"), q(this, Nt, Hi).call(this), this.eventBus._on("thumbnailrendered", ({
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
                return B && q(this, rt, Ui).call(this), !0;
              if (!(0 < m && m <= this.pagesCount))
                return !1;
              const ht = this._currentPageNumber;
              return this._currentPageNumber = m, this.eventBus.dispatch("pagechanging", {
                source: this,
                pageNumber: m,
                pageLabel: ((Lt = this._pageLabels) == null ? void 0 : Lt[m - 1]) ?? null,
                previous: ht
              }), B && q(this, rt, Ui).call(this), !0;
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
              this.pdfDocument && q(this, at, se).call(this, m, {
                noScroll: !1
              });
            }
            get currentScaleValue() {
              return this._currentScaleValue;
            }
            set currentScaleValue(m) {
              this.pdfDocument && q(this, at, se).call(this, m, {
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
              }), this._currentScaleValue && q(this, at, se).call(this, this._currentScaleValue, {
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
              }), this._cancelRendering(), this._resetView(), (pt = this.findController) == null || pt.setDocument(null), (vt = this._scriptingManager) == null || vt.setDocument(null), t(this, x) && (t(this, x).destroy(), it(this, x, null))), this.pdfDocument = m, !m)
                return;
              const B = m.numPages, ht = m.getPage(1), Lt = m.getOptionalContentConfig(), Pt = t(this, M) ? m.getPermissions() : Promise.resolve();
              if (B > f.FORCE_SCROLL_MODE_PAGE) {
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
                  annotationEditorMode: It,
                  annotationMode: bt,
                  textLayerMode: O
                } = q(this, R, zn).call(this, gt);
                if (O !== r.TextLayerMode.DISABLE) {
                  const ct = it(this, Z, document.createElement("div"));
                  ct.id = "hiddenCopyElement", this.viewer.before(ct);
                }
                if (It !== d.AnnotationEditorType.DISABLE) {
                  const ct = It;
                  m.isPureXfa ? console.warn("Warning: XFA-editing is not implemented.") : y(ct) ? (it(this, x, new d.AnnotationEditorUIManager(this.container, this.viewer, this.eventBus, m, this.pageColors)), ct !== d.AnnotationEditorType.NONE && t(this, x).updateMode(ct)) : console.error(`Invalid AnnotationEditor mode: ${ct}`);
                }
                const T = q(this, a, Wn).bind(this), z = this._scrollMode === r.ScrollMode.PAGE ? null : this.viewer, H = this.currentScale, et = U.getViewport({
                  scale: H * d.PixelsPerInch.PDF_TO_CSS_UNITS
                });
                this.viewer.style.setProperty("--scale-factor", et.scale), (((Mt = this.pageColors) == null ? void 0 : Mt.foreground) === "CanvasText" || ((G = this.pageColors) == null ? void 0 : G.background) === "Canvas") && this.viewer.style.setProperty("--hcm-highligh-filter", m.filterFactory.addHighlightHCMFilter("CanvasText", "Canvas", "HighlightText", "Highlight"));
                for (let ct = 1; ct <= B; ++ct) {
                  const mt = new k.PDFPageView({
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
                    layerProperties: T
                  });
                  this._pages.push(mt);
                }
                const ft = this._pages[0];
                ft && (ft.setPdfPage(U), this.linkService.cachePageRef(1, U.ref)), this._scrollMode === r.ScrollMode.PAGE ? q(this, wt, Ee).call(this) : this._spreadMode !== r.SpreadMode.NONE && this._updateSpreadMode(), q(this, W, Gn).call(this).then(async () => {
                  var mt, Ft;
                  if ((mt = this.findController) == null || mt.setDocument(m), (Ft = this._scriptingManager) == null || Ft.setDocument(m), t(this, Z) && (it(this, tt, q(this, st, $n).bind(this, O)), document.addEventListener("copy", t(this, tt))), t(this, x) && this.eventBus.dispatch("annotationeditormodechanged", {
                    source: this,
                    mode: t(this, o)
                  }), m.loadingParams.disableAutoFetch || B > f.FORCE_LAZY_PAGE_INIT) {
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
                    Tt % f.PAUSE_EAGER_PAGE_INIT === 0 && await Dt;
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
              let pt = 0, vt = 0, U = 0, gt = 0, It, bt;
              const O = Pt.rotation % 180 !== 0, T = (O ? Pt.height : Pt.width) / Pt.scale / d.PixelsPerInch.PDF_TO_CSS_UNITS, z = (O ? Pt.width : Pt.height) / Pt.scale / d.PixelsPerInch.PDF_TO_CSS_UNITS;
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
                  pt = B[2], U = T, gt = z, H = "page-height";
                  break;
                case "FitR":
                  pt = B[2], vt = B[3], U = B[4] - pt, gt = B[5] - vt;
                  let G = r.SCROLLBAR_PADDING, ct = r.VERTICAL_PADDING;
                  this.removePageBorders && (G = ct = 0), It = (this.container.clientWidth - G) / U / d.PixelsPerInch.PDF_TO_CSS_UNITS, bt = (this.container.clientHeight - ct) / gt / d.PixelsPerInch.PDF_TO_CSS_UNITS, H = Math.min(Math.abs(It), Math.abs(bt));
                  break;
                default:
                  console.error(`scrollPageIntoView: "${B[1].name}" is not a valid destination type.`);
                  return;
              }
              if (Lt || (H && H !== this._currentScale ? this.currentScaleValue = H : this._currentScale === r.UNKNOWN_SCALE && (this.currentScaleValue = r.DEFAULT_SCALE_VALUE)), H === "page-fit" && !B[4]) {
                q(this, Et, He).call(this, Pt);
                return;
              }
              const et = [Pt.viewport.convertToViewportPoint(pt, vt), Pt.viewport.convertToViewportPoint(pt + U, vt + gt)];
              let ft = Math.min(et[0][0], et[1][0]), Mt = Math.min(et[0][1], et[1][1]);
              ht || (ft = Math.max(ft, 0), Mt = Math.max(Mt, 0)), q(this, Et, He).call(this, Pt, {
                left: ft,
                top: Mt
              });
            }
            _updateLocation(m) {
              const B = this._currentScale, ht = this._currentScaleValue, Lt = parseFloat(ht) === B ? Math.round(B * 1e4) / 100 : ht, Pt = m.id, pt = this._pages[Pt - 1], vt = this.container, U = pt.getPagePoint(vt.scrollLeft - m.x, vt.scrollTop - m.y), gt = Math.round(U[0]), It = Math.round(U[1]);
              let bt = `#page=${Pt}`;
              this.isInPresentationMode || (bt += `&zoom=${Lt},${gt},${It}`), this._location = {
                pageNumber: Pt,
                scale: Lt,
                top: It,
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
              const B = m || this._getVisiblePages(), ht = q(this, jt, Kn).call(this, B), Lt = this._spreadMode !== r.SpreadMode.NONE && this._scrollMode !== r.ScrollMode.HORIZONTAL, Pt = this.renderingQueue.getHighestPriority(B, this._pages, ht, Lt);
              return Pt ? (q(this, xt, Yn).call(this, Pt).then(() => {
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
                this.pagesCount > f.FORCE_SCROLL_MODE_PAGE || (this._previousScrollMode = this._scrollMode, this._scrollMode = m, this.eventBus.dispatch("scrollmodechanged", {
                  source: this,
                  mode: m
                }), this._updateScrollMode(this._currentPageNumber));
              }
            }
            _updateScrollMode(m = null) {
              const B = this._scrollMode, ht = this.viewer;
              ht.classList.toggle("scrollHorizontal", B === r.ScrollMode.HORIZONTAL), ht.classList.toggle("scrollWrapped", B === r.ScrollMode.WRAPPED), !(!this.pdfDocument || !m) && (B === r.ScrollMode.PAGE ? q(this, wt, Ee).call(this) : this._previousScrollMode === r.ScrollMode.PAGE && this._updateSpreadMode(), this._currentScaleValue && isNaN(this._currentScaleValue) && q(this, at, se).call(this, this._currentScaleValue, {
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
                q(this, wt, Ee).call(this);
              else if (B.textContent = "", this._spreadMode === r.SpreadMode.NONE)
                for (const Lt of this._pages)
                  B.append(Lt.div);
              else {
                const Lt = this._spreadMode - 1;
                let Pt = null;
                for (let pt = 0, vt = ht.length; pt < vt; ++pt)
                  Pt === null ? (Pt = document.createElement("div"), Pt.className = "spread", B.append(Pt)) : pt % 2 === Lt && (Pt = Pt.cloneNode(!1), B.append(Pt)), Pt.append(ht[pt].div);
              }
              m && (this._currentScaleValue && isNaN(this._currentScaleValue) && q(this, at, se).call(this, this._currentScaleValue, {
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
                        const It = Pt[U], bt = Pt[U + 1] - 1;
                        if (It < bt)
                          return m - bt;
                      }
                    else
                      for (let U = pt + 1, gt = vt; U < gt; U++) {
                        const It = Pt[U], bt = Pt[U - 1] + 1;
                        if (It > bt)
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
              q(this, at, se).call(this, Math.min(r.MAX_SCALE, Lt), {
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
              q(this, at, se).call(this, Math.max(r.MIN_SCALE, Lt), {
                noScroll: !1,
                drawingDelay: m
              });
            }
            get containerTopLeft() {
              return t(this, Y) || it(this, Y, [this.container.offsetTop, this.container.offsetLeft]);
            }
            get annotationEditorMode() {
              return t(this, x) ? t(this, o) : d.AnnotationEditorType.DISABLE;
            }
            set annotationEditorMode({
              mode: m,
              editId: B = null
            }) {
              if (!t(this, x))
                throw new Error("The AnnotationEditor is not enabled.");
              if (t(this, o) !== m) {
                if (!y(m))
                  throw new Error(`Invalid AnnotationEditor mode: ${m}`);
                this.pdfDocument && (it(this, o, m), this.eventBus.dispatch("annotationeditormodechanged", {
                  source: this,
                  mode: m
                }), t(this, x).updateMode(m, B));
              }
            }
            set annotationEditorParams({
              type: m,
              value: B
            }) {
              if (!t(this, x))
                throw new Error("The AnnotationEditor is not enabled.");
              t(this, x).updateParams(m, B);
            }
            refresh(m = !1, B = /* @__PURE__ */ Object.create(null)) {
              if (this.pdfDocument) {
                for (const ht of this._pages)
                  ht.update(B);
                t(this, _t) !== null && (clearTimeout(t(this, _t)), it(this, _t, null)), m || this.update();
              }
            }
          }
          _ = new WeakMap(), o = new WeakMap(), x = new WeakMap(), P = new WeakMap(), Y = new WeakMap(), tt = new WeakMap(), M = new WeakMap(), K = new WeakMap(), Z = new WeakMap(), Q = new WeakMap(), v = new WeakMap(), j = new WeakMap(), D = new WeakMap(), lt = new WeakMap(), _t = new WeakMap(), L = new WeakMap(), a = new WeakSet(), Wn = function() {
            const m = this;
            return {
              get annotationEditorUIManager() {
                return t(m, x);
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
              textLayerMode: t(this, L)
            };
            return m && (!m.includes(d.PermissionFlag.COPY) && t(this, L) === r.TextLayerMode.ENABLE && (B.textLayerMode = r.TextLayerMode.ENABLE_PERMISSIONS), m.includes(d.PermissionFlag.MODIFY_CONTENTS) || (B.annotationEditorMode = d.AnnotationEditorType.DISABLE), !m.includes(d.PermissionFlag.MODIFY_ANNOTATIONS) && !m.includes(d.PermissionFlag.FILL_INTERACTIVE_FORMS) && t(this, P) === d.AnnotationMode.ENABLE_FORMS && (B.annotationMode = d.AnnotationMode.ENABLE)), B;
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
            if (this._currentPageNumber !== Lt && this._setCurrentPageNumber(Lt), this._scrollMode === r.ScrollMode.PAGE && (q(this, wt, Ee).call(this), this.update()), !B && !this.isInPresentationMode) {
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
            if (this._currentScaleValue = B.toString(), q(this, At, Xn).call(this, m)) {
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
              B.preset = !1, q(this, Rt, Vi).call(this, ht, m, B);
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
              B.preset = !0, q(this, Rt, Vi).call(this, ht, m, B);
            }
          }, rt = new WeakSet(), Ui = function() {
            const m = this._pages[this._currentPageNumber - 1];
            this.isInPresentationMode && q(this, at, se).call(this, this._currentScaleValue, {
              noScroll: !0
            }), q(this, Et, He).call(this, m);
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
                q(this, Nt, Hi).call(this, Math.floor(B.borderBoxSize[0].blockSize)), it(this, Y, null);
                break;
              }
          }, F.PDFViewer = g;
        },
        /* 26 */
        /***/
        (V, F, c) => {
          Object.defineProperty(F, "__esModule", {
            value: !0
          }), F.PDFRenderingQueue = void 0;
          var d = c(4), r = c(2);
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
              var p;
              this.idleTimeout && (clearTimeout(this.idleTimeout), this.idleTimeout = null), !this.pdfViewer.forceRendering(h) && (this.isThumbnailViewEnabled && ((p = this.pdfThumbnailViewer) != null && p.forceRendering()) || this.printing || this.onIdle && (this.idleTimeout = setTimeout(this.onIdle.bind(this), I)));
            }
            getHighestPriority(h, p, f, y = !1) {
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
                for (let o = 1, x = s - w; o < x; o++) {
                  const P = f ? w + o : s - o;
                  if (_.has(P))
                    continue;
                  const Y = p[P - 1];
                  if (!this.isViewFinished(Y))
                    return Y;
                }
              }
              let i = f ? s : w - 2, E = p[i];
              return E && !this.isViewFinished(E) || y && (i += f ? 1 : -1, E = p[i], E && !this.isViewFinished(E)) ? E : null;
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
          F.PDFRenderingQueue = k;
        }
        /******/
      ], n = {};
      function u(V) {
        var F = n[V];
        if (F !== void 0)
          return F.exports;
        var c = n[V] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return C[V](c, c.exports, u), c.exports;
      }
      var $ = {};
      return (() => {
        var V = $;
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
            return I.DownloadManager;
          }
        }), Object.defineProperty(V, "EventBus", {
          enumerable: !0,
          get: function() {
            return k.EventBus;
          }
        }), Object.defineProperty(V, "FindState", {
          enumerable: !0,
          get: function() {
            return F.FindState;
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
            return F.PDFFindController;
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
            return f.PDFPageView;
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
        var F = u(1), c = u(5), d = u(2), r = u(6), I = u(8), k = u(9), S = u(10), h = u(7), p = u(12), f = u(13), y = u(21), b = u(24), g = u(25), w = u(16), s = u(19), i = u(20);
      })(), $;
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
    let C = e.getBoundingClientRect(), n = 10, u = window.innerHeight - C.top - n;
    this.thumbnailContainer.className = "gap-y-2 py-2 px-4 fixed w-44 bg-gray-50 z-10 rounded h-full flex flex-col overflow-y-auto left-2", this.thumbnailContainer.style.height = u + "px", this.thumbnailContainer.style.display = "none", e.prepend(this.thumbnailContainer);
  }
  async _build(e) {
    let C = e.pdfDocument.numPages;
    for (let n = 1; n <= C; n++) {
      let u = await e.pdfDocument.getPage(n), $ = await this.generateThumbnail(u);
      $.dataset.id = n.toString(), $.title = "Page " + n, $.classList.add("cursor-pointer", "border"), $.addEventListener("click", () => {
        let V = e.pdfContainer.querySelector(
          `[data-page-number="${n}"]`
        );
        e.bodyContainer.scrollTop = e.bodyContainer.scrollTop + parseFloat(V.getBoundingClientRect().top.toString()) - e.buttonsContainer.getBoundingClientRect().height;
      }), this.thumbnailContainer.append($);
    }
  }
  async generateThumbnail(e) {
    let C = document.createElement("img"), n = await this.renderPage(e);
    return C.src = n.toDataURL(), C;
  }
  async renderPage(e) {
    let C = document.createElement("canvas"), n = C.getContext("2d");
    const u = e.getViewport({ scale: 0.5 });
    C.width = Math.floor(u.width), C.height = Math.floor(u.height), C.style.width = Math.floor(u.width) + "px", C.style.height = Math.floor(u.height) + "px";
    const $ = {
      canvasContext: n,
      viewport: u
    };
    return await e.render($).promise, this._reduceImage(C), C;
  }
  /**
   * @private
   */
  _reduceImage(e) {
    let C = e.width << MAX_NUM_SCALING_STEPS, n = e.height << MAX_NUM_SCALING_STEPS;
    const u = document.createElement("canvas");
    u.width = C, u.height = n;
    const $ = u.getContext("2d", { alpha: !1 });
    for ($.save(), $.fillStyle = "rgb(255, 255, 255)", $.fillRect(0, 0, C, n), $.restore(); C > e.width || n > e.height; )
      C >>= 1, n >>= 1;
    for ($.drawImage(
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
      $.drawImage(
        u,
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
      u,
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
function minMax(A, e, C) {
  return Math.min(Math.max(A, e), C);
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
  return e ? e[1].split(",").map(function(C) {
    return parseFloat(C);
  }) : [];
}
function spring(A, e) {
  var C = parseEasingParameters(A), n = minMax(is.und(C[0]) ? 1 : C[0], 0.1, 100), u = minMax(is.und(C[1]) ? 100 : C[1], 0.1, 100), $ = minMax(is.und(C[2]) ? 10 : C[2], 0.1, 100), V = minMax(is.und(C[3]) ? 0 : C[3], 0.1, 100), F = Math.sqrt(u / n), c = $ / (2 * Math.sqrt(u * n)), d = c < 1 ? F * Math.sqrt(1 - c * c) : 0, r = 1, I = c < 1 ? (c * F + -V) / d : -V + F;
  function k(h) {
    var p = e ? e * h / 1e3 : h;
    return c < 1 ? p = Math.exp(-p * c * F) * (r * Math.cos(d * p) + I * Math.sin(d * p)) : p = (r + I * p) * Math.exp(-p * F), h === 0 || h === 1 ? h : 1 - p;
  }
  function S() {
    var h = cache.springs[A];
    if (h)
      return h;
    for (var p = 1 / 6, f = 0, y = 0; ; )
      if (f += p, k(f) === 1) {
        if (y++, y >= 16)
          break;
      } else
        y = 0;
    var b = f * p * 1e3;
    return cache.springs[A] = b, b;
  }
  return e ? k : S;
}
function steps(A) {
  return A === void 0 && (A = 10), function(e) {
    return Math.ceil(minMax(e, 1e-6, 1) * A) * (1 / A);
  };
}
var bezier = function() {
  var A = 11, e = 1 / (A - 1);
  function C(r, I) {
    return 1 - 3 * I + 3 * r;
  }
  function n(r, I) {
    return 3 * I - 6 * r;
  }
  function u(r) {
    return 3 * r;
  }
  function $(r, I, k) {
    return ((C(I, k) * r + n(I, k)) * r + u(I)) * r;
  }
  function V(r, I, k) {
    return 3 * C(I, k) * r * r + 2 * n(I, k) * r + u(I);
  }
  function F(r, I, k, S, h) {
    var p, f, y = 0;
    do
      f = I + (k - I) / 2, p = $(f, S, h) - r, p > 0 ? k = f : I = f;
    while (Math.abs(p) > 1e-7 && ++y < 10);
    return f;
  }
  function c(r, I, k, S) {
    for (var h = 0; h < 4; ++h) {
      var p = V(I, k, S);
      if (p === 0)
        return I;
      var f = $(I, k, S) - r;
      I -= f / p;
    }
    return I;
  }
  function d(r, I, k, S) {
    if (!(0 <= r && r <= 1 && 0 <= k && k <= 1))
      return;
    var h = new Float32Array(A);
    if (r !== I || k !== S)
      for (var p = 0; p < A; ++p)
        h[p] = $(p * e, r, k);
    function f(y) {
      for (var b = 0, g = 1, w = A - 1; g !== w && h[g] <= y; ++g)
        b += e;
      --g;
      var s = (y - h[g]) / (h[g + 1] - h[g]), i = b + s * e, E = V(i, r, k);
      return E >= 1e-3 ? c(y, i, r, k) : E === 0 ? i : F(y, b, b + e, r, k);
    }
    return function(y) {
      return r === I && k === S || y === 0 || y === 1 ? y : $(f(y), I, S);
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
        for (var u, $ = 4; n < ((u = Math.pow(2, --$)) - 1) / 11; )
          ;
        return 1 / Math.pow(4, 3 - $) - 7.5625 * Math.pow((u * 3 - 2) / 22 - n, 2);
      };
    },
    Elastic: function(n, u) {
      n === void 0 && (n = 1), u === void 0 && (u = 0.5);
      var $ = minMax(n, 1, 10), V = minMax(u, 0.1, 2);
      return function(F) {
        return F === 0 || F === 1 ? F : -$ * Math.pow(2, 10 * (F - 1)) * Math.sin((F - 1 - V / (Math.PI * 2) * Math.asin(1 / $)) * (Math.PI * 2) / V);
      };
    }
  }, C = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
  return C.forEach(function(n, u) {
    e[n] = function() {
      return function($) {
        return Math.pow($, u + 2);
      };
    };
  }), Object.keys(e).forEach(function(n) {
    var u = e[n];
    A["easeIn" + n] = u, A["easeOut" + n] = function($, V) {
      return function(F) {
        return 1 - u($, V)(1 - F);
      };
    }, A["easeInOut" + n] = function($, V) {
      return function(F) {
        return F < 0.5 ? u($, V)(F * 2) / 2 : 1 - u($, V)(F * -2 + 2) / 2;
      };
    }, A["easeOutIn" + n] = function($, V) {
      return function(F) {
        return F < 0.5 ? (1 - u($, V)(1 - F * 2)) / 2 : (u($, V)(F * 2 - 1) + 1) / 2;
      };
    };
  }), A;
}();
function parseEasings(A, e) {
  if (is.fnc(A))
    return A;
  var C = A.split("(")[0], n = penner[C], u = parseEasingParameters(A);
  switch (C) {
    case "spring":
      return spring(A, e);
    case "cubicBezier":
      return applyArguments(bezier, u);
    case "steps":
      return applyArguments(steps, u);
    default:
      return applyArguments(n, u);
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
  for (var C = A.length, n = arguments.length >= 2 ? arguments[1] : void 0, u = [], $ = 0; $ < C; $++)
    if ($ in A) {
      var V = A[$];
      e.call(n, V, $, A) && u.push(V);
    }
  return u;
}
function flattenArray(A) {
  return A.reduce(function(e, C) {
    return e.concat(is.arr(C) ? flattenArray(C) : C);
  }, []);
}
function toArray(A) {
  return is.arr(A) ? A : (is.str(A) && (A = selectString(A) || A), A instanceof NodeList || A instanceof HTMLCollection ? [].slice.call(A) : [A]);
}
function arrayContains(A, e) {
  return A.some(function(C) {
    return C === e;
  });
}
function cloneObject(A) {
  var e = {};
  for (var C in A)
    e[C] = A[C];
  return e;
}
function replaceObjectProps(A, e) {
  var C = cloneObject(A);
  for (var n in A)
    C[n] = e.hasOwnProperty(n) ? e[n] : A[n];
  return C;
}
function mergeObjects(A, e) {
  var C = cloneObject(A);
  for (var n in e)
    C[n] = is.und(A[n]) ? e[n] : A[n];
  return C;
}
function rgbToRgba(A) {
  var e = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(A);
  return e ? "rgba(" + e[1] + ",1)" : A;
}
function hexToRgba(A) {
  var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, C = A.replace(e, function(F, c, d, r) {
    return c + c + d + d + r + r;
  }), n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(C), u = parseInt(n[1], 16), $ = parseInt(n[2], 16), V = parseInt(n[3], 16);
  return "rgba(" + u + "," + $ + "," + V + ",1)";
}
function hslToRgba(A) {
  var e = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(A) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(A), C = parseInt(e[1], 10) / 360, n = parseInt(e[2], 10) / 100, u = parseInt(e[3], 10) / 100, $ = e[4] || 1;
  function V(k, S, h) {
    return h < 0 && (h += 1), h > 1 && (h -= 1), h < 1 / 6 ? k + (S - k) * 6 * h : h < 1 / 2 ? S : h < 2 / 3 ? k + (S - k) * (2 / 3 - h) * 6 : k;
  }
  var F, c, d;
  if (n == 0)
    F = c = d = u;
  else {
    var r = u < 0.5 ? u * (1 + n) : u + n - u * n, I = 2 * u - r;
    F = V(I, r, C + 1 / 3), c = V(I, r, C), d = V(I, r, C - 1 / 3);
  }
  return "rgba(" + F * 255 + "," + c * 255 + "," + d * 255 + "," + $ + ")";
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
function convertPxToUnit(A, e, C) {
  var n = getUnit(e);
  if (arrayContains([C, "deg", "rad", "turn"], n))
    return e;
  var u = cache.CSS[e + C];
  if (!is.und(u))
    return u;
  var $ = 100, V = document.createElement(A.tagName), F = A.parentNode && A.parentNode !== document ? A.parentNode : document.body;
  F.appendChild(V), V.style.position = "absolute", V.style.width = $ + C;
  var c = $ / V.offsetWidth;
  F.removeChild(V);
  var d = c * parseFloat(e);
  return cache.CSS[e + C] = d, d;
}
function getCSSValue(A, e, C) {
  if (e in A.style) {
    var n = e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), u = A.style[e] || getComputedStyle(A).getPropertyValue(n) || "0";
    return C ? convertPxToUnit(A, u, C) : u;
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
    for (var e = A.style.transform || "", C = /(\w+)\(([^)]*)\)/g, n = /* @__PURE__ */ new Map(), u; u = C.exec(e); )
      n.set(u[1], u[2]);
    return n;
  }
}
function getTransformValue(A, e, C, n) {
  var u = stringContains(e, "scale") ? 1 : 0 + getTransformUnit(e), $ = getElementTransforms(A).get(e) || u;
  return C && (C.transforms.list.set(e, $), C.transforms.last = e), n ? convertPxToUnit(A, $, n) : $;
}
function getOriginalTargetValue(A, e, C, n) {
  switch (getAnimationType(A, e)) {
    case "transform":
      return getTransformValue(A, e, n, C);
    case "css":
      return getCSSValue(A, e, C);
    case "attribute":
      return getAttribute(A, e);
    default:
      return A[e] || 0;
  }
}
function getRelativeValue(A, e) {
  var C = /^(\*=|\+=|-=)/.exec(A);
  if (!C)
    return A;
  var n = getUnit(A) || 0, u = parseFloat(e), $ = parseFloat(A.replace(C[0], ""));
  switch (C[0][0]) {
    case "+":
      return u + $ + n;
    case "-":
      return u - $ + n;
    case "*":
      return u * $ + n;
  }
}
function validateValue(A, e) {
  if (is.col(A))
    return colorToRgb(A);
  if (/\s/g.test(A))
    return A;
  var C = getUnit(A), n = C ? A.substr(0, A.length - C.length) : A;
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
  for (var e = A.points, C = 0, n, u = 0; u < e.numberOfItems; u++) {
    var $ = e.getItem(u);
    u > 0 && (C += getDistance(n, $)), n = $;
  }
  return C;
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
  var C = e || {}, n = C.el || getParentSvgEl(A), u = n.getBoundingClientRect(), $ = getAttribute(n, "viewBox"), V = u.width, F = u.height, c = C.viewBox || ($ ? $.split(" ") : [0, 0, V, F]);
  return {
    el: n,
    viewBox: c,
    x: c[0] / 1,
    y: c[1] / 1,
    w: V,
    h: F,
    vW: c[2],
    vH: c[3]
  };
}
function getPath(A, e) {
  var C = is.str(A) ? selectString(A)[0] : A, n = e || 100;
  return function(u) {
    return {
      property: u,
      el: C,
      svg: getParentSvg(C),
      totalLength: getTotalLength(C) * (n / 100)
    };
  };
}
function getPathProgress(A, e, C) {
  function n(r) {
    r === void 0 && (r = 0);
    var I = e + r >= 1 ? e + r : 0;
    return A.el.getPointAtLength(I);
  }
  var u = getParentSvg(A.el, A.svg), $ = n(), V = n(-1), F = n(1), c = C ? 1 : u.w / u.vW, d = C ? 1 : u.h / u.vH;
  switch (A.property) {
    case "x":
      return ($.x - u.x) * c;
    case "y":
      return ($.y - u.y) * d;
    case "angle":
      return Math.atan2(F.y - V.y, F.x - V.x) * 180 / Math.PI;
  }
}
function decomposeValue(A, e) {
  var C = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, n = validateValue(is.pth(A) ? A.totalLength : A, e) + "";
  return {
    original: n,
    numbers: n.match(C) ? n.match(C).map(Number) : [0],
    strings: is.str(A) || e ? n.split(C) : []
  };
}
function parseTargets(A) {
  var e = A ? flattenArray(is.arr(A) ? A.map(toArray) : toArray(A)) : [];
  return filterArray(e, function(C, n, u) {
    return u.indexOf(C) === n;
  });
}
function getAnimatables(A) {
  var e = parseTargets(A);
  return e.map(function(C, n) {
    return { target: C, id: n, total: e.length, transforms: { list: getElementTransforms(C) } };
  });
}
function normalizePropertyTweens(A, e) {
  var C = cloneObject(e);
  if (/^spring/.test(C.easing) && (C.duration = spring(C.easing)), is.arr(A)) {
    var n = A.length, u = n === 2 && !is.obj(A[0]);
    u ? A = { value: A } : is.fnc(e.duration) || (C.duration = e.duration / n);
  }
  var $ = is.arr(A) ? A : [A];
  return $.map(function(V, F) {
    var c = is.obj(V) && !is.pth(V) ? V : { value: V };
    return is.und(c.delay) && (c.delay = F ? 0 : e.delay), is.und(c.endDelay) && (c.endDelay = F === $.length - 1 ? e.endDelay : 0), c;
  }).map(function(V) {
    return mergeObjects(V, C);
  });
}
function flattenKeyframes(A) {
  for (var e = filterArray(flattenArray(A.map(function($) {
    return Object.keys($);
  })), function($) {
    return is.key($);
  }).reduce(function($, V) {
    return $.indexOf(V) < 0 && $.push(V), $;
  }, []), C = {}, n = function($) {
    var V = e[$];
    C[V] = A.map(function(F) {
      var c = {};
      for (var d in F)
        is.key(d) ? d == V && (c.value = F[d]) : c[d] = F[d];
      return c;
    });
  }, u = 0; u < e.length; u++)
    n(u);
  return C;
}
function getProperties(A, e) {
  var C = [], n = e.keyframes;
  n && (e = mergeObjects(flattenKeyframes(n), e));
  for (var u in e)
    is.key(u) && C.push({
      name: u,
      tweens: normalizePropertyTweens(e[u], A)
    });
  return C;
}
function normalizeTweenValues(A, e) {
  var C = {};
  for (var n in A) {
    var u = getFunctionValue(A[n], e);
    is.arr(u) && (u = u.map(function($) {
      return getFunctionValue($, e);
    }), u.length === 1 && (u = u[0])), C[n] = u;
  }
  return C.duration = parseFloat(C.duration), C.delay = parseFloat(C.delay), C;
}
function normalizeTweens(A, e) {
  var C;
  return A.tweens.map(function(n) {
    var u = normalizeTweenValues(n, e), $ = u.value, V = is.arr($) ? $[1] : $, F = getUnit(V), c = getOriginalTargetValue(e.target, A.name, F, e), d = C ? C.to.original : c, r = is.arr($) ? $[0] : d, I = getUnit(r) || getUnit(c), k = F || I;
    return is.und(V) && (V = d), u.from = decomposeValue(r, k), u.to = decomposeValue(getRelativeValue(V, r), k), u.start = C ? C.end : 0, u.end = u.start + u.delay + u.duration + u.endDelay, u.easing = parseEasings(u.easing, u.duration), u.isPath = is.pth($), u.isPathTargetInsideSVG = u.isPath && is.svg(e.target), u.isColor = is.col(u.from.original), u.isColor && (u.round = 1), C = u, u;
  });
}
var setProgressValue = {
  css: function(A, e, C) {
    return A.style[e] = C;
  },
  attribute: function(A, e, C) {
    return A.setAttribute(e, C);
  },
  object: function(A, e, C) {
    return A[e] = C;
  },
  transform: function(A, e, C, n, u) {
    if (n.list.set(e, C), e === n.last || u) {
      var $ = "";
      n.list.forEach(function(V, F) {
        $ += F + "(" + V + ") ";
      }), A.style.transform = $;
    }
  }
};
function setTargetsValue(A, e) {
  var C = getAnimatables(A);
  C.forEach(function(n) {
    for (var u in e) {
      var $ = getFunctionValue(e[u], n), V = n.target, F = getUnit($), c = getOriginalTargetValue(V, u, F, n), d = F || getUnit(c), r = getRelativeValue(validateValue($, d), c), I = getAnimationType(V, u);
      setProgressValue[I](V, u, r, n.transforms, !0);
    }
  });
}
function createAnimation(A, e) {
  var C = getAnimationType(A.target, e.name);
  if (C) {
    var n = normalizeTweens(e, A), u = n[n.length - 1];
    return {
      type: C,
      property: e.name,
      animatable: A,
      tweens: n,
      duration: u.end,
      delay: n[0].delay,
      endDelay: u.endDelay
    };
  }
}
function getAnimations(A, e) {
  return filterArray(flattenArray(A.map(function(C) {
    return e.map(function(n) {
      return createAnimation(C, n);
    });
  })), function(C) {
    return !is.und(C);
  });
}
function getInstanceTimings(A, e) {
  var C = A.length, n = function($) {
    return $.timelineOffset ? $.timelineOffset : 0;
  }, u = {};
  return u.duration = C ? Math.max.apply(Math, A.map(function($) {
    return n($) + $.duration;
  })) : e.duration, u.delay = C ? Math.min.apply(Math, A.map(function($) {
    return n($) + $.delay;
  })) : e.delay, u.endDelay = C ? u.duration - Math.max.apply(Math, A.map(function($) {
    return n($) + $.duration - $.endDelay;
  })) : e.endDelay, u;
}
var instanceID = 0;
function createNewInstance(A) {
  var e = replaceObjectProps(defaultInstanceSettings, A), C = replaceObjectProps(defaultTweenSettings, A), n = getProperties(C, A), u = getAnimatables(A.targets), $ = getAnimations(u, n), V = getInstanceTimings($, C), F = instanceID;
  return instanceID++, mergeObjects(e, {
    id: F,
    children: [],
    animatables: u,
    animations: $,
    duration: V.duration,
    delay: V.delay,
    endDelay: V.endDelay
  });
}
var activeInstances = [], engine = function() {
  var A;
  function e() {
    !A && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0 && (A = requestAnimationFrame(C));
  }
  function C(u) {
    for (var $ = activeInstances.length, V = 0; V < $; ) {
      var F = activeInstances[V];
      F.paused ? (activeInstances.splice(V, 1), $--) : (F.tick(u), V++);
    }
    A = V > 0 ? requestAnimationFrame(C) : void 0;
  }
  function n() {
    anime.suspendWhenDocumentHidden && (isDocumentHidden() ? A = cancelAnimationFrame(A) : (activeInstances.forEach(
      function(u) {
        return u._onDocumentVisibility();
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
  var e = 0, C = 0, n = 0, u, $ = 0, V = null;
  function F(b) {
    var g = window.Promise && new Promise(function(w) {
      return V = w;
    });
    return b.finished = g, g;
  }
  var c = createNewInstance(A);
  F(c);
  function d() {
    var b = c.direction;
    b !== "alternate" && (c.direction = b !== "normal" ? "normal" : "reverse"), c.reversed = !c.reversed, u.forEach(function(g) {
      return g.reversed = c.reversed;
    });
  }
  function r(b) {
    return c.reversed ? c.duration - b : b;
  }
  function I() {
    e = 0, C = r(c.currentTime) * (1 / anime.speed);
  }
  function k(b, g) {
    g && g.seek(b - g.timelineOffset);
  }
  function S(b) {
    if (c.reversePlayback)
      for (var w = $; w--; )
        k(b, u[w]);
    else
      for (var g = 0; g < $; g++)
        k(b, u[g]);
  }
  function h(b) {
    for (var g = 0, w = c.animations, s = w.length; g < s; ) {
      var i = w[g], E = i.animatable, _ = i.tweens, o = _.length - 1, x = _[o];
      o && (x = filterArray(_, function(R) {
        return b < R.end;
      })[0] || x);
      for (var P = minMax(b - x.start - x.delay, 0, x.duration) / x.duration, Y = isNaN(P) ? 1 : x.easing(P), tt = x.to.strings, M = x.round, K = [], Z = x.to.numbers.length, Q = void 0, v = 0; v < Z; v++) {
        var j = void 0, D = x.to.numbers[v], lt = x.from.numbers[v] || 0;
        x.isPath ? j = getPathProgress(x.value, Y * D, x.isPathTargetInsideSVG) : j = lt + Y * (D - lt), M && (x.isColor && v > 2 || (j = Math.round(j * M) / M)), K.push(j);
      }
      var _t = tt.length;
      if (!_t)
        Q = K[0];
      else {
        Q = tt[0];
        for (var L = 0; L < _t; L++) {
          tt[L];
          var a = tt[L + 1], l = K[L];
          isNaN(l) || (a ? Q += l + a : Q += l + " ");
        }
      }
      setProgressValue[i.type](E.target, i.property, Q, E.transforms), i.currentValue = Q, g++;
    }
  }
  function p(b) {
    c[b] && !c.passThrough && c[b](c);
  }
  function f() {
    c.remaining && c.remaining !== !0 && c.remaining--;
  }
  function y(b) {
    var g = c.duration, w = c.delay, s = g - c.endDelay, i = r(b);
    c.progress = minMax(i / g * 100, 0, 100), c.reversePlayback = i < c.currentTime, u && S(i), !c.began && c.currentTime > 0 && (c.began = !0, p("begin")), !c.loopBegan && c.currentTime > 0 && (c.loopBegan = !0, p("loopBegin")), i <= w && c.currentTime !== 0 && h(0), (i >= s && c.currentTime !== g || !g) && h(g), i > w && i < s ? (c.changeBegan || (c.changeBegan = !0, c.changeCompleted = !1, p("changeBegin")), p("change"), h(i)) : c.changeBegan && (c.changeCompleted = !0, c.changeBegan = !1, p("changeComplete")), c.currentTime = minMax(i, 0, g), c.began && p("update"), b >= g && (C = 0, f(), c.remaining ? (e = n, p("loopComplete"), c.loopBegan = !1, c.direction === "alternate" && d()) : (c.paused = !0, c.completed || (c.completed = !0, p("loopComplete"), p("complete"), !c.passThrough && "Promise" in window && (V(), F(c)))));
  }
  return c.reset = function() {
    var b = c.direction;
    c.passThrough = !1, c.currentTime = 0, c.progress = 0, c.paused = !0, c.began = !1, c.loopBegan = !1, c.changeBegan = !1, c.completed = !1, c.changeCompleted = !1, c.reversePlayback = !1, c.reversed = b === "reverse", c.remaining = c.loop, u = c.children, $ = u.length;
    for (var g = $; g--; )
      c.children[g].reset();
    (c.reversed && c.loop !== !0 || b === "alternate" && c.loop === 1) && c.remaining++, h(c.reversed ? c.duration : 0);
  }, c._onDocumentVisibility = I, c.set = function(b, g) {
    return setTargetsValue(b, g), c;
  }, c.tick = function(b) {
    n = b, e || (e = n), y((n + (C - e)) * anime.speed);
  }, c.seek = function(b) {
    y(r(b));
  }, c.pause = function() {
    c.paused = !0, I();
  }, c.play = function() {
    c.paused && (c.completed && c.reset(), c.paused = !1, activeInstances.push(c), I(), engine());
  }, c.reverse = function() {
    d(), c.completed = !c.reversed, I();
  }, c.restart = function() {
    c.reset(), c.play();
  }, c.remove = function(b) {
    var g = parseTargets(b);
    removeTargetsFromInstance(g, c);
  }, c.reset(), c.autoplay && c.play(), c;
}
function removeTargetsFromAnimations(A, e) {
  for (var C = e.length; C--; )
    arrayContains(A, e[C].animatable.target) && e.splice(C, 1);
}
function removeTargetsFromInstance(A, e) {
  var C = e.animations, n = e.children;
  removeTargetsFromAnimations(A, C);
  for (var u = n.length; u--; ) {
    var $ = n[u], V = $.animations;
    removeTargetsFromAnimations(A, V), !V.length && !$.children.length && n.splice(u, 1);
  }
  !C.length && !n.length && e.pause();
}
function removeTargetsFromActiveInstances(A) {
  for (var e = parseTargets(A), C = activeInstances.length; C--; ) {
    var n = activeInstances[C];
    removeTargetsFromInstance(e, n);
  }
}
function stagger(A, e) {
  e === void 0 && (e = {});
  var C = e.direction || "normal", n = e.easing ? parseEasings(e.easing) : null, u = e.grid, $ = e.axis, V = e.from || 0, F = V === "first", c = V === "center", d = V === "last", r = is.arr(A), I = parseFloat(r ? A[0] : A), k = r ? parseFloat(A[1]) : 0, S = getUnit(r ? A[1] : A) || 0, h = e.start || 0 + (r ? I : 0), p = [], f = 0;
  return function(y, b, g) {
    if (F && (V = 0), c && (V = (g - 1) / 2), d && (V = g - 1), !p.length) {
      for (var w = 0; w < g; w++) {
        if (!u)
          p.push(Math.abs(V - w));
        else {
          var s = c ? (u[0] - 1) / 2 : V % u[0], i = c ? (u[1] - 1) / 2 : Math.floor(V / u[0]), E = w % u[0], _ = Math.floor(w / u[0]), o = s - E, x = i - _, P = Math.sqrt(o * o + x * x);
          $ === "x" && (P = -o), $ === "y" && (P = -x), p.push(P);
        }
        f = Math.max.apply(Math, p);
      }
      n && (p = p.map(function(tt) {
        return n(tt / f) * f;
      })), C === "reverse" && (p = p.map(function(tt) {
        return $ ? tt < 0 ? tt * -1 : -tt : Math.abs(f - tt);
      }));
    }
    var Y = r ? (k - I) / f : I;
    return h + Y * (Math.round(p[b] * 100) / 100) + S;
  };
}
function timeline(A) {
  A === void 0 && (A = {});
  var e = anime(A);
  return e.duration = 0, e.add = function(C, n) {
    var u = activeInstances.indexOf(e), $ = e.children;
    u > -1 && activeInstances.splice(u, 1);
    function V(k) {
      k.passThrough = !0;
    }
    for (var F = 0; F < $.length; F++)
      V($[F]);
    var c = mergeObjects(C, replaceObjectProps(defaultTweenSettings, A));
    c.targets = c.targets || A.targets;
    var d = e.duration;
    c.autoplay = !1, c.direction = e.direction, c.timelineOffset = is.und(n) ? d : getRelativeValue(n, d), V(e), e.seek(c.timelineOffset);
    var r = anime(c);
    V(r), $.push(r);
    var I = getInstanceTimings($, A);
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
anime.random = function(A, e) {
  return Math.floor(Math.random() * (e - A + 1)) + A;
};
function onClickOutside(A, e) {
  document.addEventListener("click", (C) => {
    const n = A.getBoundingClientRect(), $ = C.target.getBoundingClientRect();
    ($.left < n.left || $.right > n.right || $.top < n.top || $.bottom > n.bottom) && e(C);
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
            let u = n.source._matchesCountTotal > 0 && n.matchesCount.current === 0 ? 1 : n.matchesCount.current;
            this.statusIndicator.innerText = `Showing ${u} of ${n.source._matchesCountTotal}`;
            let $ = document.querySelector(".highlight.selected.appended");
            e.bodyContainer.scrollTop = e.bodyContainer.scrollTop + parseFloat(
              $ == null ? void 0 : $.getBoundingClientRect().top.toString()
            ) - e.buttonsContainer.getBoundingClientRect().height;
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
    C.className = "focus:outline-none px-2 py-1 border rounded", C.placeholder = "Search...", C.addEventListener("change", ($) => {
      this.query = $.target.value, this.search();
    });
    let n = document.createElement("button");
    n.className = "p-1 rounded border", n.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>', n.addEventListener("click", () => {
      this.search("again", !0);
    });
    let u = document.createElement("button");
    u.className = "p-1 rounded border", u.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide w-5 h-5 lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>', u.addEventListener("click", () => {
      this.search("again");
    }), e.append(C), e.append(n), e.append(u), this.container.append(e);
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
      e.append(q(this, je, Jn).call(this, n.label, n.callback));
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
je = new WeakSet(), Jn = function(e, C) {
  let n = document.createElement("button");
  return n.className = "px-2 py-1 rounded border text-sm whitespace-nowrap", n.innerText = e, n.addEventListener("click", (u) => {
    C(u), n.classList.toggle("bg-gray-100");
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
    this.currentScaleTracker = document.createElement("option"), this.currentScaleTracker.disabled = !0, C.append(this.currentScaleTracker), ["page-width", " page-actual", "page-height", "page-fit", "auto"].forEach((u) => {
      let $ = document.createElement("option");
      $.value = u, $.innerText = u, C.append($);
    }), C.addEventListener("change", (u) => {
      this.pdfViewer.currentScaleValue = u.target.value;
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
    this.popOver = document.createElement("div"), this.popOver.className = "flex-col fixed gap-y-2 p-4 top-1/2 z-[10000] bg-gray-50 border-2 shadow-lg rounded-lg left-1/2 transform -translate-x-1/2 -translate-y-1/2", this.popOver.style.display = "none";
    let e = document.createElement("h1");
    e.className = "font-semibold text-lg border-b py-2", e.innerText = "Document Properties", this.popOver.append(e), Object.getOwnPropertyNames(this).forEach((C) => {
      if (typeof this[C] == "string") {
        let n = document.createElement("div");
        n.className = "flex items-center mt-2";
        let u = document.createElement("span");
        u.className = "w-32", u.innerText = C;
        let $ = document.createElement("p");
        $.className = "w-64", $.innerText = this[C], n.append(u), n.append($), this.popOver.append(n);
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
    const C = e.substring(2, e.length - 7), n = C.substring(0, 4), u = C.substring(4, 6) - 1, $ = C.substring(6, 8), V = C.substring(8, 10), F = C.substring(10, 12), c = C.substring(12, 14), d = new Date(Date.UTC(n, u, $, V, F, c)), r = e.substring(e.length - 7), I = parseInt(
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
      this.isVisible = !this.isVisible, this.popOver.style.display = this.isVisible ? "flex" : "none";
    }, 100);
  }
  reset() {
    var e, C;
    this.isVisible = !1, (e = this.popOver) == null || e.remove(), (C = this.btn) == null || C.remove(), this.size = null, this.name = null, this.author = null, this.created = null, this.pdfProducer = null, this.pdfVersion = null, this.totalPages = null;
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
    Object.keys(C).forEach((n) => {
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
    e.className = "flex flex-col w-full", this.buttonsContainer = document.createElement("div"), this.buttonsContainer.className = "w-full grid grid-cols-3 gap-x-2 rounded items-center border shadow-lg p-1 bg-white";
    let C = document.createElement("div");
    C.className = "flex items-center";
    let n = document.createElement("div");
    n.className = "flex justify-center items-center";
    let u = document.createElement("div");
    u.className = "flex justify-end items-center", this.buttonsContainer.append(C), this.buttonsContainer.append(n), this.buttonsContainer.append(u), e.append(this.buttonsContainer), this.bodyContainer = document.createElement("div"), this.bodyContainer.className = "w-full h-full mt-2 relative overflow-y-auto flex justify-center", this.bodyContainer.style.scrollBehavior = "smooth", this.pdfContainer = document.createElement("div"), this.pdfContainer.style.position = "absolute", this.pdfContainer.style.width = "100%";
    let $ = document.createElement("div");
    $.id = "viewer", $.className = "pdfViewer", this.pdfContainer.append($), this.bodyContainer.append(this.pdfContainer), e.append(this.bodyContainer), this.container.append(e);
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
      var $;
      if (!this.states.visibility)
        return;
      let { screenX: C, screenY: n } = e, u = this.pdfContainer.querySelector(".pdfViewer .page").getBoundingClientRect();
      console.log(
        ($ = this.pdfContainer.querySelector(".pdfViewer .page")) == null ? void 0 : $.getBoundingClientRect(),
        C,
        n
      ), !(C >= u.left && C <= u.right) && this.toggleVisibility();
    });
  }
  async init(e, C = {}) {
    this.states.visibility || this.toggleVisibility();
    let n = `https://unpkg.com/pdfjs-dist@${pdfExports.version}/cmaps/`;
    this.url = e;
    let u = {
      url: e,
      enableXfa: !0,
      cMapPacked: !0,
      disableAutoFetch: !0,
      disableStream: !0,
      disableFontFace: !1,
      cMapUrl: n
    };
    Object.keys(C).forEach((V) => {
      u.hasOwnProperty(V) && (u[V] = C[V]);
    });
    const $ = pdfExports.getDocument(u);
    (async () => (this.pdfDocument = await $.promise, this.pdfViewer.setDocument(this.pdfDocument), this.pdfLinkService.setDocument(this.pdfDocument, null), C.initialPageIndex && setTimeout(() => {
      this.viewPage(C.initialPageIndex);
    }, 300), this.listenEvents(), this.buildButtons()))();
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
