!function(){function e(e){return e&&e.__esModule?e.default:e}function r(e,r,t,n){Object.defineProperty(e,r,{get:t,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("gZc4S",(function(n,a){r(n.exports,"createLabelFunction",(function(){return g})),r(n.exports,"formatField",(function(){return m}));var u=t("8TSCy"),i=t("2TvXO"),l=t("kyj08"),o=t("jHOLN"),s=t("8lxrq"),c=t("1RkqB"),f=t("7vTUY"),p=t("7OJpl"),d=t("3nnTb"),b=o.default.getLogger("esri.layers.support.labelFormatUtils"),v={type:"simple",evaluate:function(){return null}},y={getAttribute:function(e,r){return e.field(r)}};function g(e,r,t){return x.apply(this,arguments)}function x(){return(x=u.asyncToGenerator(e(i).mark((function r(n,a,u){var o,s,c,f,g,x,h;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&n.symbol){e.next=2;break}return e.abrupt("return",v);case 2:if(o=n.where,s=(0,p.getLabelExpression)(n),!o){e.next=10;break}return e.next=7,t("gQlYF");case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=null;case 11:if(c=e.t0,"arcade"!==s.type){e.next=20;break}return e.next=16,(0,d.createLabelExpression)(s.expression,u,a);case 16:g=e.sent,f={type:"arcade",evaluate:function(e){try{var r=g.evaluate({$feature:"attributes"in e?g.repurposeFeature(e):e});if(null!=r)return r.toString()}catch(r){b.error(new(0,l.default)("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:e,expression:s}))}return null},needsHydrationToEvaluate:function(){return null==(0,p.getSingleFieldArcadeExpression)(s.expression)}},e.next=21;break;case 20:f={type:"simple",evaluate:function(e){return s.expression.replace(/{[^}]*}/g,(function(r){var t=r.slice(1,-1),n=a.get(t);if(!n)return r;var u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[n.name]):u=e.field(n.name),null==u?"":m(u,n)}))}};case 21:if(!o){e.next=32;break}e.prev=23,x=c.WhereClause.create(o,a),e.next=30;break;case 27:return e.prev=27,e.t1=e.catch(23),e.abrupt("return",v);case 30:h=f.evaluate,f.evaluate=function(e){var r="attributes"in e?void 0:y;return x.testFeature(e,r)?h(e):null};case 32:return e.abrupt("return",f);case 33:case"end":return e.stop()}}),r,null,[[23,27]])})))).apply(this,arguments)}function m(e,r){if(null==e)return"";var t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){var n=e,a=!0,u=!1,i=void 0;try{for(var l,o=t.codedValues[Symbol.iterator]();!(a=(l=o.next()).done);a=!0){var p=l.value;if(p.code===n)return p.name}}catch(e){u=!0,i=e}finally{try{a||null==o.return||o.return()}finally{if(u)throw i}}}else if("range"===t.type){var d=+e,b="range"in t?t.range[0]:t.minValue,v="range"in t?t.range[1]:t.maxValue;if(b<=d&&d<=v)return t.name}var y=e;return"date"===r.type||"esriFieldTypeDate"===r.type?y=(0,s.formatDate)(y,(0,s.convertDateFormatToIntlOptions)("short-date")):(0,f.isNumericField)(r)&&(y=(0,c.formatNumber)(+y)),y||""}})),t.register("gQlYF",(function(e,r){e.exports=Promise.all([t("4WKyX")(t("aNJCr").getBundleURL("eeyk4")+t("iE7OH").resolve("j5U2t")),t("4WKyX")(t("aNJCr").getBundleURL("eeyk4")+t("iE7OH").resolve("cgD2M"))]).then((function(){return t("9AqbE")}))}))}();
//# sourceMappingURL=labelFormatUtils.47fd756b.js.map