!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;e.register("eiYTg",(function(n,t){var a,r,i,o;a=n.exports,r="hydratedAdapter",i=function(){return h},Object.defineProperty(a,r,{get:i,set:o,enumerable:!0,configurable:!0});var s=e("gINRd"),c=e("eaHvJ"),f=e("d1Fqh"),l=e("fTq43"),u=e("95Tg0"),h={convertToGEGeometry:function(e,n){if(null==n)return null;var t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,t){var a=e.hasZ(n),r=e.hasM(n),i=new(0,f.default)({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(i.z=e.getPointZ(n)),r&&(i.m=e.getPointM(n)),i.cache._geVersion=n,i},exportPolygon:function(e,n,t){var a=new(0,l.default)({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportPolyline:function(e,n,t){var a=new(0,u.default)({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){var a=new(0,c.default)({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a},exportExtent:function(e,n,t){var a=e.hasZ(n),r=e.hasM(n),i=new(0,s.default)({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(a){var o=e.getZExtent(n);i.zmin=o.vmin,i.zmax=o.vmax}if(r){var c=e.getMExtent(n);i.mmin=c.vmin,i.mmax=c.vmax}return i.cache._geVersion=n,i}}}))}();
//# sourceMappingURL=hydrated.7525ce0f.js.map