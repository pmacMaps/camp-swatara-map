!function(){function n(n,t,e,r){Object.defineProperty(n,t,{get:e,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("1n9JK",(function(e,r){n(e.exports,"buffer",(function(){return t("lRmUQ").v})),n(e.exports,"clip",(function(){return t("lRmUQ").c})),n(e.exports,"contains",(function(){return t("lRmUQ").b})),n(e.exports,"convexHull",(function(){return t("lRmUQ").l})),n(e.exports,"crosses",(function(){return t("lRmUQ").d})),n(e.exports,"cut",(function(){return t("lRmUQ").a})),n(e.exports,"densify",(function(){return t("lRmUQ").F})),n(e.exports,"difference",(function(){return t("lRmUQ").m})),n(e.exports,"disjoint",(function(){return t("lRmUQ").j})),n(e.exports,"distance",(function(){return t("lRmUQ").f})),n(e.exports,"equals",(function(){return t("lRmUQ").h})),n(e.exports,"extendedSpatialReferenceInfo",(function(){return t("lRmUQ").e})),n(e.exports,"flipHorizontal",(function(){return t("lRmUQ").C})),n(e.exports,"flipVertical",(function(){return t("lRmUQ").D})),n(e.exports,"generalize",(function(){return t("lRmUQ").E})),n(e.exports,"geodesicArea",(function(){return t("lRmUQ").J})),n(e.exports,"geodesicBuffer",(function(){return t("lRmUQ").x})),n(e.exports,"geodesicDensify",(function(){return t("lRmUQ").G})),n(e.exports,"geodesicLength",(function(){return t("lRmUQ").K})),n(e.exports,"intersect",(function(){return t("lRmUQ").p})),n(e.exports,"intersects",(function(){return t("lRmUQ").i})),n(e.exports,"isSimple",(function(){return t("lRmUQ").k})),n(e.exports,"nearestCoordinate",(function(){return t("lRmUQ").y})),n(e.exports,"nearestVertex",(function(){return t("lRmUQ").z})),n(e.exports,"nearestVertices",(function(){return t("lRmUQ").A})),n(e.exports,"offset",(function(){return t("lRmUQ").q})),n(e.exports,"overlaps",(function(){return t("lRmUQ").o})),n(e.exports,"planarArea",(function(){return t("lRmUQ").H})),n(e.exports,"planarLength",(function(){return t("lRmUQ").I})),n(e.exports,"relate",(function(){return t("lRmUQ").r})),n(e.exports,"rotate",(function(){return t("lRmUQ").B})),n(e.exports,"simplify",(function(){return t("lRmUQ").s})),n(e.exports,"symmetricDifference",(function(){return t("lRmUQ").n})),n(e.exports,"touches",(function(){return t("lRmUQ").t})),n(e.exports,"union",(function(){return t("lRmUQ").u})),n(e.exports,"within",(function(){return t("lRmUQ").w})),t("bToqq"),t("jGyUI");t("lRmUQ")})),t.register("jGyUI",(function(e,r){n(e.exports,"jsonAdapter",(function(){return i}));var o=t("8TSCy"),i={convertToGEGeometry:function(n,t){return null==t?null:n.convertJSONToGeometry(t)},exportPoint:function(n,t,e){var r=new u(n.getPointX(t),n.getPointY(t),e),o=n.hasZ(t),i=n.hasM(t);return o&&(r.z=n.getPointZ(t)),i&&(r.m=n.getPointM(t)),r},exportPolygon:function(n,t,e){return new s(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))},exportPolyline:function(n,t,e){return new c(n.exportPaths(t),e,n.hasZ(t),n.hasM(t))},exportMultipoint:function(n,t,e){return new f(n.exportPoints(t),e,n.hasZ(t),n.hasM(t))},exportExtent:function(n,t,e){var r=n.hasZ(t),o=n.hasM(t),i=new a(n.getXMin(t),n.getYMin(t),n.getXMax(t),n.getYMax(t),e);if(r){var u=n.getZExtent(t);i.zmin=u.vmin,i.zmax=u.vmax}if(o){var s=n.getMExtent(t);i.mmin=s.vmin,i.mmax=s.vmax}return i}};var u=function n(t,e,r){"use strict";o.classCallCheck(this,n),this.x=t,this.y=e,this.spatialReference=r,this.z=void 0,this.m=void 0};var s=function n(t,e,r,i){"use strict";o.classCallCheck(this,n),this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)};var c=function n(t,e,r,i){"use strict";o.classCallCheck(this,n),this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)};var f=function n(t,e,r,i){"use strict";o.classCallCheck(this,n),this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),i&&(this.hasM=i)};var a=function n(t,e,r,i,u){"use strict";o.classCallCheck(this,n),this.xmin=t,this.ymin=e,this.xmax=r,this.ymax=i,this.spatialReference=u,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}})),t.register("lRmUQ",(function(e,r){n(e.exports,"e",(function(){return u})),n(e.exports,"c",(function(){return s})),n(e.exports,"a",(function(){return c})),n(e.exports,"b",(function(){return f})),n(e.exports,"d",(function(){return a})),n(e.exports,"f",(function(){return p})),n(e.exports,"h",(function(){return l})),n(e.exports,"i",(function(){return x})),n(e.exports,"t",(function(){return d})),n(e.exports,"w",(function(){return h})),n(e.exports,"j",(function(){return m})),n(e.exports,"o",(function(){return g})),n(e.exports,"r",(function(){return v})),n(e.exports,"k",(function(){return R})),n(e.exports,"s",(function(){return A})),n(e.exports,"l",(function(){return G})),n(e.exports,"m",(function(){return j})),n(e.exports,"n",(function(){return U})),n(e.exports,"p",(function(){return Q})),n(e.exports,"u",(function(){return y})),n(e.exports,"q",(function(){return w})),n(e.exports,"v",(function(){return M})),n(e.exports,"x",(function(){return C})),n(e.exports,"y",(function(){return b})),n(e.exports,"z",(function(){return z})),n(e.exports,"A",(function(){return Z})),n(e.exports,"B",(function(){return E})),n(e.exports,"C",(function(){return I})),n(e.exports,"D",(function(){return P})),n(e.exports,"E",(function(){return q})),n(e.exports,"F",(function(){return V})),n(e.exports,"G",(function(){return D})),n(e.exports,"H",(function(){return H})),n(e.exports,"I",(function(){return S})),n(e.exports,"J",(function(){return k})),n(e.exports,"K",(function(){return T})),n(e.exports,"g",(function(){return L}));var o=t("bToqq"),i=t("jGyUI");function u(n){return o.G.extendedSpatialReferenceInfo(n)}function s(n,t,e){return o.G.clip(i.jsonAdapter,n,t,e)}function c(n,t,e){return o.G.cut(i.jsonAdapter,n,t,e)}function f(n,t,e){return o.G.contains(i.jsonAdapter,n,t,e)}function a(n,t,e){return o.G.crosses(i.jsonAdapter,n,t,e)}function p(n,t,e,r){return o.G.distance(i.jsonAdapter,n,t,e,r)}function l(n,t,e){return o.G.equals(i.jsonAdapter,n,t,e)}function x(n,t,e){return o.G.intersects(i.jsonAdapter,n,t,e)}function d(n,t,e){return o.G.touches(i.jsonAdapter,n,t,e)}function h(n,t,e){return o.G.within(i.jsonAdapter,n,t,e)}function m(n,t,e){return o.G.disjoint(i.jsonAdapter,n,t,e)}function g(n,t,e){return o.G.overlaps(i.jsonAdapter,n,t,e)}function v(n,t,e,r){return o.G.relate(i.jsonAdapter,n,t,e,r)}function R(n,t){return o.G.isSimple(i.jsonAdapter,n,t)}function A(n,t){return o.G.simplify(i.jsonAdapter,n,t)}function G(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return o.G.convexHull(i.jsonAdapter,n,t,e)}function j(n,t,e){return o.G.difference(i.jsonAdapter,n,t,e)}function U(n,t,e){return o.G.symmetricDifference(i.jsonAdapter,n,t,e)}function Q(n,t,e){return o.G.intersect(i.jsonAdapter,n,t,e)}function y(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return o.G.union(i.jsonAdapter,n,t,e)}function w(n,t,e,r,u,s,c){return o.G.offset(i.jsonAdapter,n,t,e,r,u,s,c)}function M(n,t,e,r){var u=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return o.G.buffer(i.jsonAdapter,n,t,e,r,u)}function C(n,t,e,r,u,s,c){return o.G.geodesicBuffer(i.jsonAdapter,n,t,e,r,u,s,c)}function b(n,t,e){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return o.G.nearestCoordinate(i.jsonAdapter,n,t,e,r)}function z(n,t,e){return o.G.nearestVertex(i.jsonAdapter,n,t,e)}function Z(n,t,e,r,u){return o.G.nearestVertices(i.jsonAdapter,n,t,e,r,u)}function E(n,t,e,r){if(null==t||null==r)throw new Error("Illegal Argument Exception");var i=o.G.rotate(t,e,r);return i.spatialReference=n,i}function I(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");var r=o.G.flipHorizontal(t,e);return r.spatialReference=n,r}function P(n,t,e){if(null==t||null==e)throw new Error("Illegal Argument Exception");var r=o.G.flipVertical(t,e);return r.spatialReference=n,r}function q(n,t,e,r,u){return o.G.generalize(i.jsonAdapter,n,t,e,r,u)}function V(n,t,e,r){return o.G.densify(i.jsonAdapter,n,t,e,r)}function D(n,t,e,r){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return o.G.geodesicDensify(i.jsonAdapter,n,t,e,r,u)}function H(n,t,e){return o.G.planarArea(i.jsonAdapter,n,t,e)}function S(n,t,e){return o.G.planarLength(i.jsonAdapter,n,t,e)}function k(n,t,e,r){return o.G.geodesicArea(i.jsonAdapter,n,t,e,r)}function T(n,t,e,r){return o.G.geodesicLength(i.jsonAdapter,n,t,e,r)}var L=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:u,clip:s,cut:c,contains:f,crosses:a,distance:p,equals:l,intersects:x,touches:d,within:h,disjoint:m,overlaps:g,relate:v,isSimple:R,simplify:A,convexHull:G,difference:j,symmetricDifference:U,intersect:Q,union:y,offset:w,buffer:M,geodesicBuffer:C,nearestCoordinate:b,nearestVertex:z,nearestVertices:Z,rotate:E,flipHorizontal:I,flipVertical:P,generalize:q,densify:V,geodesicDensify:D,planarArea:H,planarLength:S,geodesicArea:k,geodesicLength:T})}))}();
//# sourceMappingURL=geometryEngineJSON.98fac709.js.map