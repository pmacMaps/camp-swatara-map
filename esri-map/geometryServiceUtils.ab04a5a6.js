function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("g2ihT",(function(r,n){e(r.exports,"getGeometryServiceURL",(function(){return f})),e(r.exports,"projectGeometry",(function(){return c}));var i=t("9XPDd"),o=t("bPmsI"),l=t("39WmQ"),a=t("k41AN"),u=t("cIeki");async function f(e=null,t){var r,n;if(i.default.geometryServiceUrl)return i.default.geometryServiceUrl;if(!e)throw new(0,o.default)("internal:geometry-service-url-not-configured");let a;a="portal"in e?e.portal||l.default.getDefault():e,await a.load({signal:t});const u=null==(r=a.helperServices)||null==(n=r.geometry)?void 0:n.url;if(!u)throw new(0,o.default)("internal:geometry-service-url-not-configured");return u}async function c(e,t,r=null,n){const i=await f(r,n),l=new(0,u.default);l.geometries=[e],l.outSpatialReference=t;const c=await(0,a.project)(i,l,{signal:n});if(c&&Array.isArray(c)&&1===c.length)return c[0];throw new(0,o.default)("internal:geometry-service-projection-failed")}}));
//# sourceMappingURL=geometryServiceUtils.ab04a5a6.js.map