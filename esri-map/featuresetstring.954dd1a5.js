var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;n.register("iHdtO",(function(e,t){var r,o,a,i;r=e.exports,o="registerFunctions",a=function(){return f},Object.defineProperty(r,o,{get:a,set:i,enumerable:!0,configurable:!0});var d=n("lz1nc"),u=n("hyHkL"),c=n("axKjD");function s(n){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?d.default.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:c.layerFieldEsriConstants[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))}):d.default.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:c.layerFieldEsriConstants[n.field.type],min:n.domain.min,max:n.domain.max}):null}function f(n){"async"===n.mode&&(n.functions.domain=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,u.p)(t,2,3),(0,u.k)(t[0]))return s((0,u.T)(t[0],(0,u.d)(t[1]),void 0===t[2]?void 0:(0,u.t)(t[2])));if((0,u.q)(t[0]))return t[0]._ensureLoaded().then((()=>s((0,u.Z)((0,u.d)(t[1]),t[0],null,void 0===t[2]?void 0:(0,u.t)(t[2])))));throw new Error("Invalid Parameter")}))},n.functions.subtypes=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,u.p)(t,1,1),(0,u.k)(t[0])){const n=(0,u.Q)(t[0]);return n?d.default.convertObjectToArcadeDictionary(n):null}if((0,u.q)(t[0]))return t[0]._ensureLoaded().then((()=>{const n=t[0].subtypes();return n?d.default.convertObjectToArcadeDictionary(n):null}));throw new Error("Invalid Parameter")}))},n.functions.domainname=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,u.p)(t,2,4),(0,u.k)(t[0]))return(0,u.U)(t[0],(0,u.d)(t[1]),t[2],void 0===t[3]?void 0:(0,u.t)(t[3]));if((0,u.q)(t[0]))return t[0]._ensureLoaded().then((()=>{const n=(0,u.Z)((0,u.d)(t[1]),t[0],null,void 0===t[3]?void 0:(0,u.t)(t[3]));return(0,u._)(n,t[2])}));throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domainname",min:"2",max:"4"}),n.functions.domaincode=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,u.p)(t,2,4),(0,u.k)(t[0]))return(0,u.V)(t[0],(0,u.d)(t[1]),t[2],void 0===t[3]?void 0:(0,u.t)(t[3]));if((0,u.q)(t[0]))return t[0]._ensureLoaded().then((()=>{const n=(0,u.Z)((0,u.d)(t[1]),t[0],null,void 0===t[3]?void 0:(0,u.t)(t[3]));return(0,u.$)(n,t[2])}));throw new Error("Invalid Parameter")}))},n.signatures.push({name:"domaincode",min:"2",max:"4"})),n.functions.text=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,u.p)(t,1,2),!(0,u.q)(t[0]))return(0,u.u)(t[0],t[1]);{const e=(0,u.C)(t[1],"");if(""===e)return t[0].castToText();if("schema"===e.toLowerCase())return t[0].convertToText("schema",n.abortSignal);if("featureset"===e.toLowerCase())return t[0].convertToText("featureset",n.abortSignal)}}))},n.functions.gdbversion=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,u.p)(t,1,1),(0,u.k)(t[0]))return t[0].gdbVersion();if((0,u.q)(t[0]))return t[0].load().then((n=>n.gdbVersion));throw new Error("Invalid Parameter")}))},n.functions.schema=function(e,t){return n.standardFunctionAsync(e,t,(function(n,e,t){if((0,u.p)(t,1,1),(0,u.q)(t[0]))return t[0].load().then((()=>d.default.convertObjectToArcadeDictionary(t[0].schema())));if((0,u.k)(t[0])){const n=(0,u.P)(t[0]);return n?d.default.convertObjectToArcadeDictionary(n):null}throw new Error("Invalid Parameter")}))}}}));
//# sourceMappingURL=featuresetstring.954dd1a5.js.map