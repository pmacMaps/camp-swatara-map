!function(){var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("fQy4Q",(function(e,r){var o,n,u,l,a;o=e.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),n=e.exports,u="default",l=function(){return g},Object.defineProperty(n,u,{get:l,set:a,enumerable:!0,configurable:!0});var i=t("8TSCy"),p=t("7eJjO"),s=t("kyj08"),y=t("1XAcN"),c=t("iho5X");t("lNwWH"),t("2VlWd");var d=t("iJAIC"),f=t("fcwIv"),h=t("kdfYM"),v=function(t){"use strict";i.inherits(r,t);var e=i.createSuper(r);function r(t){var o;return i.classCallCheck(this,r),(o=e.call(this,t)).access=null,o.created=null,o.description=null,o.id=null,o.isInvitationOnly=!1,o.modified=null,o.owner=null,o.portal=null,o.snippet=null,o.sortField=null,o.sortOrder=null,o.tags=null,o.title=null,i.possibleConstructorReturn(o)}return i.createClass(r,[{key:"thumbnailUrl",get:function(){var t=this.url,e=this.thumbnail;return t&&e?this.portal._normalizeUrl("".concat(t,"/info/").concat(e,"?f=json")):null}},{key:"url",get:function(){var t=this.get("portal.restUrl");return t?t+"/community/groups/"+this.id:null}},{key:"fetchCategorySchema",value:function(t){var e=this;return this.portal._request(this.url+"/categorySchema",t).then((function(r){var o=r.categorySchema||[];return o.some((function(t){return"contentCategorySetsGroupQuery.LivingAtlas"===t.source}))?e._fetchCategorySchemaSet("LivingAtlas",t):o}))}},{key:"fetchMembers",value:function(t){return this.portal._request(this.url+"/users",t)}},{key:"getThumbnailUrl",value:function(t){var e=this.thumbnailUrl;return e&&t&&(e+="&w=".concat(t)),e}},{key:"toJSON",value:function(){throw new(0,s.default)("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}},{key:"queryItems",value:function(t,e){var r=(0,d.ensureType)(h.default,t);return parseFloat(this.portal.currentVersion)>5?(r=r||new(0,h.default),this.portal._queryPortal("/content/groups/".concat(this.id,"/search"),r,"PortalItem",e)):((r=r?r.clone():new(0,h.default)).query="group:"+this.id+(r.query?" "+r.query:""),this.portal.queryItems(r,e))}},{key:"_fetchCategorySchemaSet",value:function(t,e){var r=this;return this.portal._fetchSelf(this.portal.authMode,!0,e).then((function(t){var o=t.contentCategorySetsGroupQuery;if(o){var n=new(0,h.default);return n.disableExtraQuery=!0,n.num=1,n.query=o,r.portal.queryGroups(n,e)}throw new(0,s.default)("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")})).then((function(r){if(r.total){var o=r.results[0],n=new(0,h.default);return n.num=1,n.query='typekeywords:"'.concat(t,'"'),o.queryItems(n,e)}throw new(0,s.default)("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")})).then((function(t){return t.total?t.results[0].fetchData("json",e).then((function(t){var e=t&&t.categorySchema;return e&&e.length?e:[]})):[]}))}}]),r}(y.JSONSupport);(0,p._)([(0,c.property)()],v.prototype,"access",void 0),(0,p._)([(0,c.property)({type:Date})],v.prototype,"created",void 0),(0,p._)([(0,c.property)()],v.prototype,"description",void 0),(0,p._)([(0,c.property)()],v.prototype,"id",void 0),(0,p._)([(0,c.property)()],v.prototype,"isInvitationOnly",void 0),(0,p._)([(0,c.property)({type:Date})],v.prototype,"modified",void 0),(0,p._)([(0,c.property)()],v.prototype,"owner",void 0),(0,p._)([(0,c.property)()],v.prototype,"portal",void 0),(0,p._)([(0,c.property)()],v.prototype,"snippet",void 0),(0,p._)([(0,c.property)()],v.prototype,"sortField",void 0),(0,p._)([(0,c.property)()],v.prototype,"sortOrder",void 0),(0,p._)([(0,c.property)()],v.prototype,"tags",void 0),(0,p._)([(0,c.property)()],v.prototype,"thumbnail",void 0),(0,p._)([(0,c.property)({readOnly:!0})],v.prototype,"thumbnailUrl",null),(0,p._)([(0,c.property)()],v.prototype,"title",void 0),(0,p._)([(0,c.property)({readOnly:!0})],v.prototype,"url",null);var g=v=(0,p._)([(0,f.subclass)("esri.portal.PortalGroup")],v)}))}();
//# sourceMappingURL=PortalGroup.ba8c8e24.js.map