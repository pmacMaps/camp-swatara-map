function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("6ljp4",(function(n,r){e(n.exports,"encodeGeometry",(function(){return f})),e(n.exports,"queryToQueryStringParameters",(function(){return m})),e(n.exports,"executeQuery",(function(){return p})),e(n.exports,"runQuery",(function(){return R})),e(n.exports,"executeQueryPBF",(function(){return S})),e(n.exports,"executeQueryPBFBuffer",(function(){return x})),e(n.exports,"executeQueryForIds",(function(){return g})),e(n.exports,"executeQueryForCount",(function(){return E})),e(n.exports,"executeQueryForExtent",(function(){return F}));var i=t("bYA0c"),o=t("1CpCt"),u=t("7dRCe"),a=t("86d4E"),s=t("hq5aB"),l=t("bAQEw"),c=t("foukt"),y=t("1FRrh");const d="Layer does not support extent calculation.";function f(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;if(t&&"point"===e.type)return`${e.x},${e.y}`;const n=e.toJSON();return delete n.spatialReference,JSON.stringify(n)}function m(e,t){const n=e.geometry,r=e.toJSON();delete r.compactGeometryEnabled,delete r.defaultSpatialReferenceEnabled;const i=r,u=e.outSpatialReference;let s,l;if((0,o.isSome)(n)&&(s=n.spatialReference,l=n.spatialReference.wkid||JSON.stringify(n.spatialReference),i.geometryType=(0,a.getJsonType)(n),i.geometry=f(n,e.compactGeometryEnabled),i.inSR=l),r.groupByFieldsForStatistics&&(i.groupByFieldsForStatistics=r.groupByFieldsForStatistics.join(",")),r.objectIds&&(i.objectIds=r.objectIds.join(",")),r.orderByFields&&(i.orderByFields=r.orderByFields.join(",")),!r.outFields||!r.returnDistinctValues&&(null!=t&&t.returnCountOnly||null!=t&&t.returnExtentOnly||null!=t&&t.returnIdsOnly)?delete i.outFields:-1!==r.outFields.indexOf("*")?i.outFields="*":i.outFields=r.outFields.join(","),r.outSR?i.outSR=r.outSR.wkid||JSON.stringify(r.outSR):n&&(r.returnGeometry||r.returnCentroid)&&(i.outSR=i.inSR),r.returnGeometry&&delete r.returnGeometry,r.outStatistics&&(i.outStatistics=JSON.stringify(r.outStatistics)),r.pixelSize&&(i.pixelSize=JSON.stringify(r.pixelSize)),r.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&(0,o.isSome)(s)&&(0,o.isSome)(e.quantizationParameters)&&(0,o.isSome)(e.quantizationParameters.extent)&&s.equals(e.quantizationParameters.extent.spatialReference)&&delete r.quantizationParameters.extent.spatialReference,i.quantizationParameters=JSON.stringify(r.quantizationParameters)),r.parameterValues&&(i.parameterValues=JSON.stringify(r.parameterValues)),r.rangeValues&&(i.rangeValues=JSON.stringify(r.rangeValues)),r.dynamicDataSource&&(i.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r.timeExtent){const e=r.timeExtent,{start:t,end:n}=e;null==t&&null==n||(i.time=t===n?t:`${null==t?"null":t},${null==n?"null":n}`),delete r.timeExtent}return e.defaultSpatialReferenceEnabled&&(0,o.isSome)(s)&&(0,o.isSome)(u)&&s.equals(u)&&(i.defaultSR=i.inSR,delete i.inSR,delete i.outSR),i}async function p(e,t,n,r){const i=(0,o.isSome)(t.timeExtent)&&t.timeExtent.isEmpty?{data:{features:[]}}:await R(e,t,"json",r);return(0,y.applyFeatureSetZUnitScaling)(t,n,i.data),i}async function S(e,t,n,r){if((0,o.isSome)(t.timeExtent)&&t.timeExtent.isEmpty)return Promise.resolve({data:n.createFeatureResult()});const i=await x(e,t,r),u=i;return u.data=(0,c.parsePBFFeatureQuery)(i.data,n),u}function x(e,t,n){return R(e,t,"pbf",n)}function g(e,t,n){return(0,o.isSome)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):R(e,t,"json",n,{returnIdsOnly:!0})}function E(e,t,n){return(0,o.isSome)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):R(e,t,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})}function F(e,t,n){return(0,o.isSome)(t.timeExtent)&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0,extent:null}}):R(e,t,"json",n,{returnExtentOnly:!0,returnCountOnly:!0}).then((e=>{const t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(d);if(t.hasOwnProperty("count"))throw new Error(d);return e}))}function R(e,t,n,r={},a={}){const c="string"==typeof e?(0,u.urlToObject)(e):e,y=t.geometry?[t.geometry]:[];return r.responseType="pbf"===n?"array-buffer":"json",(0,s.normalizeCentralMeridian)(y,null,r).then((e=>{const s=e&&e[0];(0,o.isSome)(s)&&((t=t.clone()).geometry=s);const y=(0,l.mapParameters)({...c.query,f:n,...a,...m(t,a)});return(0,i.default)((0,u.join)(c.path,"query"),{...r,query:{...y,...r.query}})}))}}));
//# sourceMappingURL=query.f51fe31f.js.map