function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("eyQUy",(function(t,r){var n,o,i,s,a,u,c,l,p,T,f,y,E,I;e(t.exports,"WGLGeometryType",(function(){return n})),e(t.exports,"WGLDrawPhase",(function(){return i})),e(t.exports,"VVType",(function(){return s})),e(t.exports,"WGLVVFlag",(function(){return a})),e(t.exports,"WGLVVTarget",(function(){return u})),e(t.exports,"MosaicType",(function(){return c})),(I=n||(n={}))[I.FILL=0]="FILL",I[I.LINE=1]="LINE",I[I.MARKER=2]="MARKER",I[I.TEXT=3]="TEXT",I[I.LABEL=4]="LABEL",(E=o||(o={}))[E.SUCCEEDED=0]="SUCCEEDED",E[E.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY",(y=i||(i={}))[y.NONE=0]="NONE",y[y.MAP=1]="MAP",y[y.LABEL=2]="LABEL",y[y.LABEL_ALPHA=4]="LABEL_ALPHA",y[y.HITTEST=8]="HITTEST",y[y.HIGHLIGHT=16]="HIGHLIGHT",y[y.CLIP=32]="CLIP",y[y.DEBUG=64]="DEBUG",y[y.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES",(f=s||(s={}))[f.SIZE=0]="SIZE",f[f.COLOR=1]="COLOR",f[f.OPACITY=2]="OPACITY",f[f.ROTATION=3]="ROTATION",(T=a||(a={}))[T.NONE=0]="NONE",T[T.OPACITY=1]="OPACITY",T[T.COLOR=2]="COLOR",T[T.ROTATION=4]="ROTATION",T[T.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",T[T.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",T[T.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",T[T.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE",(p=u||(u={}))[p.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",p[p.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",p[p.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",p[p.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE",(l=c||(c={}))[l.SPRITE=0]="SPRITE",l[l.GLYPH=1]="GLYPH"})),t.register("cPgEa",(function(r,n){e(r.exports,"getStrides",(function(){return O})),e(r.exports,"strideToPackingFactor",(function(){return P})),e(r.exports,"allocateTypedArrayBuffer",(function(){return w})),e(r.exports,"allocateTypedArrayBufferwithData",(function(){return M})),e(r.exports,"isDefined",(function(){return V})),e(r.exports,"isNumber",(function(){return B})),e(r.exports,"getCapType",(function(){return F})),e(r.exports,"getJoinType",(function(){return v})),e(r.exports,"getVVType",(function(){return b})),e(r.exports,"copyMeshData",(function(){return W})),e(r.exports,"C_VBO_INFO",(function(){return H})),e(r.exports,"createGeometryData",(function(){return z})),e(r.exports,"getPixelBytes",(function(){return X})),e(r.exports,"getPixelArrayCtor",(function(){return Z})),e(r.exports,"createProgramDescriptor",(function(){return K})),e(r.exports,"forEachGeometryType",(function(){return q})),e(r.exports,"isSVGResource",(function(){return j})),e(r.exports,"isImageResource",(function(){return Q})),e(r.exports,"getUrl",(function(){return ee})),e(r.exports,"isGIF",(function(){return te})),e(r.exports,"isPNG",(function(){return re})),e(r.exports,"is3D",(function(){return ne})),e(r.exports,"isSimple",(function(){return oe})),e(r.exports,"isSVGImage",(function(){return ie})),e(r.exports,"shouldRepeat",(function(){return se})),e(r.exports,"getPMSResourceSize",(function(){return ae})),e(r.exports,"charCodes",(function(){return ue}));var o=t("bPmsI"),i=t("6TszD"),s=(t("8TN87"),t("jCR4P"),t("k7j48")),a=(t("9IkRH"),t("eyQUy")),u=(t("8xcnI"),t("l3QXd")),c=(t("2HKUi"),t("hSAA2"));const l=i.default.getLogger("esri.views.2d.engine.webgl.Utils"),p="geometry",T=[{name:p,strideInBytes:32}],f=[{name:p,strideInBytes:20}],y=[{name:p,strideInBytes:12}],E=[{name:p,strideInBytes:40}],I=[{name:p,strideInBytes:36}],L=[{name:p,strideInBytes:36}];function h(e){const t={};for(const r of e)t[r.name]=r.strideInBytes;return t}const A=h([{name:p,strideInBytes:36}]),d=h(T),S=h(f),m=h(y),g=h(E),G=h(I),N=h(L);function O(e,{fill:t}){switch(e){case a.WGLGeometryType.MARKER:return A;case a.WGLGeometryType.FILL:return"dot-density"===t?m:"simple"===t?S:d;case a.WGLGeometryType.LINE:return g;case a.WGLGeometryType.TEXT:return G;case a.WGLGeometryType.LABEL:return N}}const _=[p],x=[p],R=[p],D=[p],U=[p];function C(e){switch(e){case a.WGLGeometryType.MARKER:return _;case a.WGLGeometryType.FILL:return x;case a.WGLGeometryType.LINE:return R;case a.WGLGeometryType.TEXT:return D;case a.WGLGeometryType.LABEL:return U}}function P(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function w(e,t){switch(t%4){case 0:case 2:return new Uint32Array(Math.floor(e*t/4));case 1:case 3:return new Uint8Array(e*t)}}function M(e,t){switch(t%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function V(e){return null!=e}function B(e){return"number"==typeof e}function F(e){switch(e){case"butt":return s.CapType.BUTT;case"round":return s.CapType.ROUND;case"square":return s.CapType.SQUARE;default:return l.error(new(0,o.default)("mapview-invalid-type",`Cap type ${e} is not a valid option. Defaulting to round`)),s.CapType.ROUND}}function v(e){switch(e){case"miter":return s.JoinType.MITER;case"bevel":return s.JoinType.BEVEL;case"round":return s.JoinType.ROUND;default:return l.error(new(0,o.default)("mapview-invalid-type",`Join type ${e} is not a valid option. Defaulting to round`)),s.JoinType.ROUND}}function b(e){switch(e){case"opacity":return a.VVType.OPACITY;case"color":return a.VVType.COLOR;case"rotation":return a.VVType.ROTATION;case"size":return a.VVType.SIZE;default:return l.error(`Cannot interpret unknown vv: ${e}`),null}}function W(e,t,r,n,o,i,s){for(const t in i){const n=i[t].stride,s=P(n),a=i[t].data,u=r[t].data,c=n*o.vertexCount/s,l=n*e/s,p=n*o.vertexFrom/s;for(let e=0;e<c;++e)u[e+l]=a[e+p]}const a=o.indexCount;for(let r=0;r<a;++r)n[r+t]=s[r+o.indexFrom]-o.vertexFrom+e}const H={[p]:u.Usage.STATIC_DRAW};function z(e,t){const r=[];for(let n=0;n<5;++n){const o=C(n),i={};for(const e of o)i[e]={data:t(n,e)};r.push({data:e(n),buffers:i})}return r}function Y(e){switch(e){case u.DataType.BYTE:case u.DataType.UNSIGNED_BYTE:return 1;case u.DataType.SHORT:case u.DataType.UNSIGNED_SHORT:return 2;case u.DataType.FLOAT:case u.DataType.INT:case u.DataType.UNSIGNED_INT:return 4}}function X(e){switch(e){case u.PixelType.UNSIGNED_BYTE:return 1;case u.PixelType.UNSIGNED_SHORT_4_4_4_4:return 2;case u.PixelType.FLOAT:return 4;default:return void l.error(new(0,o.default)("webgl-utils",`Unable to handle type ${e}`))}}function Z(e){switch(e){case u.PixelType.UNSIGNED_BYTE:return Uint8Array;case u.PixelType.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case u.PixelType.FLOAT:return Float32Array;default:return void l.error(new(0,o.default)("webgl-utils",`Unable to handle type ${e}`))}}const k=e=>{const t=new Map;for(const r in e)for(const n of e[r])t.set(n.name,n.location);return t},$=e=>{const t={};for(const r in e){const n=e[r];t[r]=n.length?n[0].stride:0}return t},J=new Map,K=(e,t)=>{if(!J.has(e)){const r=function(e){const t={};for(const r in e){const n=e[r];let o=0;t[r]=n.map((e=>{const t=new(0,c.VertexElementDescriptor)(e.name,e.count,e.type,o,0,e.normalized||!1);return o+=e.count*Y(e.type),t})),t[r].forEach((e=>e.stride=o))}return t}(t),n={strides:$(r),bufferLayouts:r,attributes:k(t)};J.set(e,n)}return J.get(e)};function q(e){e(a.WGLGeometryType.FILL),e(a.WGLGeometryType.LINE),e(a.WGLGeometryType.MARKER),e(a.WGLGeometryType.TEXT),e(a.WGLGeometryType.LABEL)}const j=e=>"path"in e&&ce(e.path),Q=e=>"url"in e&&e.url||"imageData"in e&&e.imageData,ee=e=>"imageData"in e&&e.imageData&&"contentType"in e&&e.contentType?`data:${e.contentType};base64,${e.imageData}`:"url"in e?e.url:null,te=e=>"url"in e&&e.url&&e.url.includes(".gif")||"contentType"in e&&"image/gif"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/gif"),re=e=>"url"in e&&e.url&&e.url.includes(".png")||"contentType"in e&&"image/png"===e.contentType||"imageData"in e&&e.imageData.includes("data:image/png"),ne=e=>e.type&&-1!==e.type.toLowerCase().indexOf("3d");function oe(e){switch(e.type){case"line":{const t=e;return"CIMSolidStroke"===t.cim.type&&!t.dashTemplate}case"fill":return"CIMSolidFill"===e.cim.type;case"esriSFS":return"esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return"esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return!1}}const ie=e=>e.includes("data:image/svg+xml");function se(e){switch("cim"in e?e.cim.type:e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function ae(e){const t="maxVVSize"in e&&e.maxVVSize,r="width"in e&&e.width||"size"in e&&e.size||0;return t||r}function ue(e){const t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}const ce=e=>!!e&&(e=e.trim(),!!(/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4))})),t.register("9IkRH",(function(r,n){e(r.exports,"premultiplyAlpha",(function(){return s})),e(r.exports,"copyAndPremultiply",(function(){return a})),e(r.exports,"premultiplyAlphaRGBA",(function(){return u})),e(r.exports,"premultiplyAlphaRGBAArray",(function(){return c}));var o=t("3mbeV");function i(e,t){return Array.isArray(t)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]):(e[0]=t.r,e[1]=t.g,e[2]=t.b,e[3]=t.a),e}function s(e,t=0,r=!1){const n=e[t+3];return e[t+0]*=n,e[t+1]*=n,e[t+2]*=n,r||(e[t+3]*=255),e}function a(e){return s(i([],e))}function u(e){if(!e)return 0;const{r:t,g:r,b:n,a:i}=e;return(0,o.i8888to32)(t*i,r*i,n*i,255*i)}function c(e){if(!e)return 0;const[t,r,n,i]=e;return(0,o.i8888to32)(t*(i/255),r*(i/255),n*(i/255),i)}})),t.register("8xcnI",(function(r,n){e(r.exports,"TextProperties",(function(){return i}));var o=t("kVwIj");class i{acquire(e,t,r,n,o,i,s,a,u){this.color=e,this.haloColor=t,this.haloSize=r,this.size=n,this.angle=o,this.offsetX=i,this.offsetY=s,this.hAnchor=a,this.vAnchor=u}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}i.pool=new(0,o.default)(i)}));
//# sourceMappingURL=Pipeline.0d13ef42.js.map