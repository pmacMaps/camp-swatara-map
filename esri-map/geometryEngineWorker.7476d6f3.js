!function(){function n(n,t,e,r){Object.defineProperty(n,t,{get:e,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("hzNg5",(function(e,r){n(e.exports,"executeGEOperation",(function(){return s}));var o=t("8TSCy"),i=t("lRmUQ");function s(n){return i.g[n.operation].apply(this,o.toConsumableArray(n.parameters))}})),t.register("lRmUQ",(function(e,r){n(e.exports,"e",(function(){return s})),n(e.exports,"c",(function(){return u})),n(e.exports,"a",(function(){return a})),n(e.exports,"b",(function(){return c})),n(e.exports,"d",(function(){return f})),n(e.exports,"f",(function(){return p})),n(e.exports,"h",(function(){return l})),n(e.exports,"i",(function(){return h})),n(e.exports,"t",(function(){return d})),n(e.exports,"w",(function(){return x})),n(e.exports,"j",(function(){return v})),n(e.exports,"o",(function(){return g})),n(e.exports,"r",(function(){return G})),n(e.exports,"k",(function(){return A})),n(e.exports,"s",(function(){return m})),n(e.exports,"l",(function(){return j})),n(e.exports,"m",(function(){return y})),n(e.exports,"n",(function(){return w})),n(e.exports,"p",(function(){return M})),n(e.exports,"u",(function(){return C})),n(e.exports,"q",(function(){return b})),n(e.exports,"v",(function(){return z})),n(e.exports,"x",(function(){return R})),n(e.exports,"y",(function(){return Z})),n(e.exports,"z",(function(){return E})),n(e.exports,"A",(function(){return P})),n(e.exports,"B",(function(){return I})),n(e.exports,"C",(function(){return S})),n(e.exports,"D",(function(){return T})),n(e.exports,"E",(function(){return k})),n(e.exports,"F",(function(){return q})),n(e.exports,"G",(function(){return V})),n(e.exports,"H",(function(){return D})),n(e.exports,"I",(function(){return H})),n(e.exports,"J",(function(){return L})),n(e.exports,"K",(function(){return O})),n(e.exports,"g",(function(){return U}));var o=t("bToqq"),i=t("jGyUI");function s(n){return o.G.extendedSpatialReferenceInfo(n)}function u(n,t,e){return o.G.clip(i.jsonAdapter,n,t,e)}function a(n,t,e){return o.G.cut(i.jsonAdapter,n,t,e)}function c(n,t,e){return o.G.contains(i.jsonAdapter,n,t,e)}function f(n,t,e){return o.G.crosses(i.jsonAdapter,n,t,e)}function p(n,t,e,r){return o.G.distance(i.jsonAdapter,n,t,e,r)}function l(n,t,e){return o.G.equals(i.jsonAdapter,n,t,e)}function h(n,t,e){return o.G.intersects(i.jsonAdapter,n,t,e)}function d(n,t,e){return o.G.touches(i.jsonAdapter,n,t,e)}function x(n,t,e){return o.G.within(i.jsonAdapter,n,t,e)}function v(n,t,e){return o.G.disjoint(i.jsonAdapter,n,t,e)}function g(n,t,e){return o.G.overlaps(i.jsonAdapter,n,t,e)}function G(n,t,e,r){return o.G.relate(i.jsonAdapter,n,t,e,r)}function A(n,t){return o.G.isSimple(i.jsonAdapter,n,t)}function m(n,t){return o.G.simplify(i.jsonAdapter,n,t)}function j(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return o.G.convexHull(i.jsonAdapter,n,t,e)}function y(n,t,e){return o.G.difference(i.jsonAdapter,n,t,e)}function w(n,t,e){return o.G.symmetricDifference(i.jsonAdapter,n,t,e)}function M(n,t,e){return o.G.intersect(i.jsonAdapter,n,t,e)}function C(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return o.G.union(i.jsonAdapter,n,t,e)}function b(n,t,e,r,s,u,a){return o.G.offset(i.jsonAdapter,n,t,e,r,s,u,a)}function z(n,t,e,r){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return o.G.buffer(i.jsonAdapter,n,t,e,r,s)}function R(n,t,e,r,s,u,a){return o.G.geodesicBuffer(i.jsonAdapter,n,t,e,r,s,u,a)}function Z(n,t,e){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return o.G.nearestCoordinate(i.jsonAdapter,n,t,e,r)}function E(n,t,e){return o.G.nearestVertex(i.jsonAdapter,n,t,e)}function P(n,t,e,r,s){return o.G.nearestVertices(i.jsonAdapter,n,t,e,r,s)}function I(n,t,e,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");var i=o.G.rotate(t,e,r);return i.spatialReference=n,i}function S(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");var r=o.G.flipHorizontal(t,e);return r.spatialReference=n,r}function T(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");var r=o.G.flipVertical(t,e);return r.spatialReference=n,r}function k(n,t,e,r,s){return o.G.generalize(i.jsonAdapter,n,t,e,r,s)}function q(n,t,e,r){return o.G.densify(i.jsonAdapter,n,t,e,r)}function V(n,t,e,r){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return o.G.geodesicDensify(i.jsonAdapter,n,t,e,r,s)}function D(n,t,e){return o.G.planarArea(i.jsonAdapter,n,t,e)}function H(n,t,e){return o.G.planarLength(i.jsonAdapter,n,t,e)}function L(n,t,e,r){return o.G.geodesicArea(i.jsonAdapter,n,t,e,r)}function O(n,t,e,r){return o.G.geodesicLength(i.jsonAdapter,n,t,e,r)}var U=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:s,clip:u,cut:a,contains:c,crosses:f,distance:p,equals:l,intersects:h,touches:d,within:x,disjoint:v,overlaps:g,relate:G,isSimple:A,simplify:m,convexHull:j,difference:y,symmetricDifference:w,intersect:M,union:C,offset:b,buffer:z,geodesicBuffer:R,nearestCoordinate:Z,nearestVertex:E,nearestVertices:P,rotate:I,flipHorizontal:S,flipVertical:T,generalize:k,densify:q,geodesicDensify:V,planarArea:D,planarLength:H,geodesicArea:L,geodesicLength:O})})),t.register("jGyUI",(function(e,r){n(e.exports,"jsonAdapter",(function(){return i}));var o=t("8TSCy"),i={convertToGEGeometry:function(n,t){return null==t?null:n.convertJSONToGeometry(t)},exportPoint:function(n,t,e){var r=new s(n.getPointX(t),n.getPointY(t),e),o=n.hasZ(t),i=n.hasM(t);return o&&(r.z=n.getPointZ(t)),i&&(r.m=n.getPointM(t)),r},exportPolygon:function(n,t,e){return new u(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))},exportPolyline:function(n,t,e){return new a(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))},exportMultipoint:function(n,t,e){return new c(n.exportPoints(t),e,n.hasZ(t),n.hasM(t))},exportExtent:function(n,t,e){var r=n.hasZ(t),o=n.hasM(t),i=new f(n.getXMin(t),n.getYMin(t),n.getXMax(t),n.getYMax(t),e);if(r){var s=n.getZExtent(t);i.zmin=s.vmin,i.zmax=s.vmax}if(o){var u=n.getMExtent(t);i.mmin=u.vmin,i.mmax=u.vmax}return i}};var s=function n(t,e,r){"use strict";o.classCallCheck(this,n),this.x=t,this.y=e,this.spatialReference=r,this.z=void 0,this.m=void 0};var u=function n(t,e,r,i){"use strict";o.classCallCheck(this,n),this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)};var a=function n(t,e,r,i){"use strict";o.classCallCheck(this,n),this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)};var c=function n(t,e,r,i){"use strict";o.classCallCheck(this,n),this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)};var f=function n(t,e,r,i,s){"use strict";o.classCallCheck(this,n),this.xmin=t,this.ymin=e,this.xmax=r,this.ymax=i,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}))}();
//# sourceMappingURL=geometryEngineWorker.7476d6f3.js.map