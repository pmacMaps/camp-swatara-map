!function(){var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;n.register("9rta5",(function(t,e){var r,u,a,i;r=t.exports,u="registerFunctions",a=function(){return g},Object.defineProperty(r,u,{get:a,set:i,enumerable:!0,configurable:!0});var c=n("e8oaX"),o=n("hRH8E"),f=n("10vEZ"),l=n("9AqbE");function s(n,t,e,r,u,a){if(1===r.length){if((0,c.a)(r[0]))return(0,f.resolve)((0,o.calculateStat)(n,r[0],(0,c.C)(r[1],-1)));if((0,c.b)(r[0]))return(0,f.resolve)((0,o.calculateStat)(n,r[0].toArray(),(0,c.C)(r[1],-1)))}else if(2===r.length){if((0,c.a)(r[0]))return(0,f.resolve)((0,o.calculateStat)(n,r[0],(0,c.C)(r[1],-1)));if((0,c.b)(r[0]))return(0,f.resolve)((0,o.calculateStat)(n,r[0].toArray(),(0,c.C)(r[1],-1)));if((0,c.q)(r[0]))return r[0].load().then((function(e){return d(l.WhereClause.create(r[1],e.getFieldsIndex()),a,u).then((function(e){return r[0].calculateStatistic(n,e,(0,c.C)(r[2],1e3),t.abortSignal)}))}))}else if(3===r.length&&(0,c.q)(r[0]))return r[0].load().then((function(e){return d(l.WhereClause.create(r[1],e.getFieldsIndex()),a,u).then((function(e){return r[0].calculateStatistic(n,e,(0,c.C)(r[2],1e3),t.abortSignal)}))}));return(0,f.resolve)((0,o.calculateStat)(n,r,-1))}function d(n,t,e){try{var r=n.getVariables();if(r.length>0){for(var u=[],a=0;a<r.length;a++){var i={name:r[a]};u.push(t.evaluateIdentifier(e,i))}return(0,f.all)(u).then((function(t){for(var e={},u=0;u<r.length;u++)e[r[u]]=t[u];return n.parameters=e,n}))}return(0,f.resolve)(n)}catch(n){return(0,f.reject)(n)}}function g(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return s("stdev",e,0,u,t,n)}))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return s("variance",e,0,u,t,n)}))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return s("mean",e,0,u,t,n)}))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return s("mean",e,0,u,t,n)}))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return s("sum",e,0,u,t,n)}))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return s("min",e,0,u,t,n)}))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,(function(e,r,u){return s("max",e,0,u,t,n)}))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,(function(n,t,e){if((0,c.p)(e,1,1),(0,c.q)(e[0]))return e[0].count(n.abortSignal);if((0,c.a)(e[0])||(0,c.f)(e[0]))return e[0].length;if((0,c.b)(e[0]))return e[0].length();throw new Error("Invalid Parameters for Count")}))})}}))}();
//# sourceMappingURL=featuresetstats.0248a88f.js.map