function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;n.register("bRLvk",(function(t,r){e(t.exports,"registerFunctions",(function(){return d}));var i=n("k26HV"),u=n("hyHkL"),a=n("cGW1b"),o=n("ibJf1"),s=n("lHg4e"),c=n("eqMhf"),f=n("jVdcX");function l(e){return e instanceof c.default}function p(e,n,t,r,p){return p(e,n,(function(e,n,p){if(p.length<2)return r(new Error("Missing Parameters"));if(null===(p=(0,u.H)(p))[0]&&null===p[1])return(0,s.resolve)(!1);if((0,u.q)(p[0]))return p[1]instanceof c.default?(0,s.resolve)(new(0,a.default)({parentfeatureset:p[0],relation:t,relationGeom:p[1]})):null===p[1]?(0,s.resolve)(new(0,o.default)({parentfeatureset:p[0]})):r("Spatial Relation cannot accept this parameter type");if(l(p[0])){if(l(p[1])){let e=null;switch(t){case"esriSpatialRelEnvelopeIntersects":e=(0,f.intersects)((0,i.shapeExtent)(p[0]),(0,i.shapeExtent)(p[1]));break;case"esriSpatialRelIntersects":e=(0,f.intersects)(p[0],p[1]);break;case"esriSpatialRelContains":e=(0,f.contains)(p[0],p[1]);break;case"esriSpatialRelOverlaps":e=(0,f.overlaps)(p[0],p[1]);break;case"esriSpatialRelWithin":e=(0,f.within)(p[0],p[1]);break;case"esriSpatialRelTouches":e=(0,f.touches)(p[0],p[1]);break;case"esriSpatialRelCrosses":e=(0,f.crosses)(p[0],p[1])}return null!==e?e:(0,s.reject)(new Error("Unrecognised Relationship"))}return(0,u.q)(p[1])?(0,s.resolve)(new(0,a.default)({parentfeatureset:p[1],relation:t,relationGeom:p[0]})):null===p[1]?(0,s.resolve)(!1):r("Spatial Relation cannot accept this parameter type")}return null!==p[0]?r("Spatial Relation cannot accept this parameter type"):(0,u.q)(p[1])?(0,s.resolve)(new(0,o.default)({parentfeatureset:p[1]})):p[1]instanceof c.default||null===p[1]?(0,s.resolve)(!1):void 0}))}function d(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return p(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return p(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return p(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return p(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return p(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return p(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return p(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(n,t){return e.standardFunctionAsync(n,t,(function(e,n,t){if(t=(0,u.H)(t),(0,u.p)(t,3,3),l(t[0])&&l(t[1]))return(0,f.relate)(t[0],t[1],(0,u.d)(t[2]));if(t[0]instanceof c.default&&null===t[1])return!1;if(t[1]instanceof c.default&&null===t[0])return!1;if((0,u.q)(t[0])&&null===t[1])return new(0,o.default)({parentfeatureset:t[0]});if((0,u.q)(t[1])&&null===t[0])return new(0,o.default)({parentfeatureset:t[1]});if((0,u.q)(t[0])&&t[1]instanceof c.default)return t[0].relate(t[1],(0,u.d)(t[2]));if((0,u.q)(t[1])&&t[0]instanceof c.default)return t[1].relate(t[0],(0,u.d)(t[2]));if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))})}})),n.register("jVdcX",(function(t,r){e(t.exports,"clip",(function(){return l})),e(t.exports,"cut",(function(){return p})),e(t.exports,"contains",(function(){return d})),e(t.exports,"crosses",(function(){return y})),e(t.exports,"distance",(function(){return x})),e(t.exports,"equals",(function(){return w})),e(t.exports,"intersects",(function(){return g})),e(t.exports,"touches",(function(){return h})),e(t.exports,"within",(function(){return m})),e(t.exports,"disjoint",(function(){return v})),e(t.exports,"overlaps",(function(){return R})),e(t.exports,"relate",(function(){return S})),e(t.exports,"isSimple",(function(){return A})),e(t.exports,"simplify",(function(){return b})),e(t.exports,"difference",(function(){return D})),e(t.exports,"symmetricDifference",(function(){return E})),e(t.exports,"intersect",(function(){return k})),e(t.exports,"union",(function(){return q})),e(t.exports,"offset",(function(){return F})),e(t.exports,"buffer",(function(){return O})),e(t.exports,"geodesicBuffer",(function(){return j})),e(t.exports,"rotate",(function(){return I})),e(t.exports,"generalize",(function(){return J})),e(t.exports,"densify",(function(){return L})),e(t.exports,"geodesicDensify",(function(){return N})),e(t.exports,"planarArea",(function(){return T})),e(t.exports,"planarLength",(function(){return C})),e(t.exports,"geodesicArea",(function(){return G})),e(t.exports,"geodesicLength",(function(){return W})),n("ixrNB");var i=n("lHDjA"),u=(n("dZxPT"),n("86d4E"));function a(e){var n;return Array.isArray(e)?null==(n=e[0])?void 0:n.spatialReference:null==e?void 0:e.spatialReference}function o(e){return e?Array.isArray(e)?e.map(o):e.toJSON?e.toJSON():e:e}function s(e){return Array.isArray(e)?e.map((e=>(0,u.fromJSON)(e))):(0,u.fromJSON)(e)}let c;async function f(e,n){return(await async function(){return c||(c=(0,i.open)("geometryEngineWorker",{strategy:"distributed"})),c}()).invoke("executeGEOperation",{operation:e,parameters:o(n)})}async function l(e,n){return s(await f("clip",[a(e),e,n]))}async function p(e,n){return s(await f("cut",[a(e),e,n]))}function d(e,n){return f("contains",[a(e),e,n])}function y(e,n){return f("crosses",[a(e),e,n])}function x(e,n,t){return f("distance",[a(e),e,n,t])}function w(e,n){return f("equals",[a(e),e,n])}function g(e,n){return f("intersects",[a(e),e,n])}function h(e,n){return f("touches",[a(e),e,n])}function m(e,n){return f("within",[a(e),e,n])}function v(e,n){return f("disjoint",[a(e),e,n])}function R(e,n){return f("overlaps",[a(e),e,n])}function S(e,n,t){return f("relate",[a(e),e,n,t])}function A(e){return f("isSimple",[a(e),e])}async function b(e){return s(await f("simplify",[a(e),e]))}async function D(e,n){return s(await f("difference",[a(e),e,n]))}async function E(e,n){return s(await f("symmetricDifference",[a(e),e,n]))}async function k(e,n){return s(await f("intersect",[a(e),e,n]))}async function q(e,n=null){const t=function(e,n){let t;return Array.isArray(e)?t=e:(t=[],t.push(e),null!=n&&t.push(n)),t}(e,n);return s(await f("union",[a(t),t]))}async function F(e,n,t,r,i,u){return s(await f("offset",[a(e),e,n,t,r,i,u]))}async function O(e,n,t,r=!1){const i=[a(e),e,n,t,r];return s(await f("buffer",i))}async function j(e,n,t,r,i,u){const o=[a(e),e,n,t,r,i,u];return s(await f("geodesicBuffer",o))}function H(e){return"xmin"in e?e.center:"x"in e?e:e.extent.center}async function I(e,n,t){var r;if(null==e)throw new Error("Illegal Argument Exception");const i=e.spatialReference;t=null!=(r=t)?r:H(e);const u=e.constructor.fromJSON(await f("rotate",[i,e,n,t]));return u.spatialReference=i,u}async function J(e,n,t,r){return s(await f("generalize",[a(e),e,n,t,r]))}async function L(e,n,t){return s(await f("densify",[a(e),e,n,t]))}async function N(e,n,t,r=0){return s(await f("geodesicDensify",[a(e),e,n,t,r]))}function T(e,n){return f("planarArea",[a(e),e,n])}function C(e,n){return f("planarLength",[a(e),e,n])}function G(e,n,t){return f("geodesicArea",[a(e),e,n,t])}function W(e,n,t){return f("geodesicLength",[a(e),e,n,t])}}));
//# sourceMappingURL=featuresetgeom.dc8b12e9.js.map