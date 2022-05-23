var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("f7VGo",(function(e,r){var o,l,n,s,p;o=e.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),l=e.exports,n="default",s=function(){return v},Object.defineProperty(l,n,{get:s,set:p,enumerable:!0,configurable:!0});var i=t("j6uz9"),u=t("bPmsI"),a=t("hO0an"),d=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var h,y=t("qA6zg"),f=t("iB9eg"),m=t("drdGg");let c=h=class extends a.JSONSupport{get thumbnailUrl(){const t=this.url,e=this.thumbnail;return t&&e?this.portal._normalizeUrl(`${t}/info/${e}?f=json`):null}get userContentUrl(){const t=this.get("portal.restUrl");return t?`${t}/content/users/${this.username}`:null}get url(){const t=this.get("portal.restUrl");return t?`${t}/community/users/${this.username}`:null}addItem(t){const e=t&&t.item,r=t&&t.data,o=t&&t.folder,l={method:"post"};e&&(l.query=e.createPostQuery(),null!=r&&("string"==typeof r?l.query.text=r:"object"==typeof r&&(l.query.text=JSON.stringify(r))));let n=this.userContentUrl;return o&&(n+="/"+("string"==typeof o?o:o.id)),this.portal._request(n+"/addItem",l).then((t=>(e.id=t.id,e.portal=this.portal,e.loaded?e.reload():e.load())))}deleteItem(t){let e=this.userContentUrl;return t.ownerFolder&&(e+="/"+t.ownerFolder),this.portal._request(e+`/items/${t.id}/delete`,{method:"post"}).then((()=>{t.id=null,t.portal=null}))}deleteItems(t){const e=this.userContentUrl+"/deleteItems",r=t.map((t=>t.id));if(r.length){const o={method:"post",query:{items:r.join(",")}};return this.portal._request(e,o).then((()=>{t.forEach((t=>{t.id=null,t.portal=null}))}))}return Promise.resolve(void 0)}fetchFolders(){return this.portal._request(this.userContentUrl,{query:{num:1}}).then((t=>{let e;return e=t&&t.folders?t.folders.map((t=>{const e=f.default.fromJSON(t);return e.portal=this.portal,e})):[],e}))}fetchGroups(){return this.portal._request(this.url).then((t=>{let e;return e=t&&t.groups?t.groups.map((t=>{const e=m.default.fromJSON(t);return e.portal=this.portal,e})):[],e}))}fetchItems(e){e||(e={});let r,o=this.userContentUrl;return e.folder&&(o+="/"+e.folder.id),t("kGVUU").then((({default:t})=>{r=t;const l={folders:!1,num:e.num||10,start:e.start||1,sortField:e.sortField||"created",sortOrder:e.sortOrder||"asc"};return this.portal._request(o,{query:l})})).then((t=>{let e;return t&&t.items?(e=t.items.map((t=>{const e=r.fromJSON(t);return e.portal=this.portal,e})),Promise.all(e.map((t=>t.load()))).catch((t=>t)).then((()=>({items:e,nextStart:t.nextStart,total:t.total})))):{items:[],nextStart:-1,total:0}}))}fetchTags(){return this.portal._request(this.url+"/tags").then((t=>t.tags))}getThumbnailUrl(t){let e=this.thumbnailUrl;return e&&t&&(e+=`&w=${t}`),e}queryFavorites(t){return this.favGroupId?(this._favGroup||(this._favGroup=new(0,m.default)({id:this.favGroupId,portal:this.portal})),this._favGroup.queryItems(t)):Promise.reject(new(0,u.default)("internal:unknown","Unknown internal error",{internalError:"Unknown favGroupId"}))}toJSON(){throw new(0,u.default)("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");const e=new h;return e.sourceJSON=t,e.read(t),e}constructor(...t){super(...t),this.access=null,this.created=null,this.culture=null,this.description=null,this.email=null,this.fullName=null,this.modified=null,this.orgId=null,this.portal=null,this.preferredView=null,this.privileges=null,this.region=null,this.role=null,this.roleId=null,this.sourceJSON=null,this.units=null,this.username=null,this.userType=null}};(0,i._)([(0,d.property)()],c.prototype,"access",void 0),(0,i._)([(0,d.property)({type:Date})],c.prototype,"created",void 0),(0,i._)([(0,d.property)()],c.prototype,"culture",void 0),(0,i._)([(0,d.property)()],c.prototype,"description",void 0),(0,i._)([(0,d.property)()],c.prototype,"email",void 0),(0,i._)([(0,d.property)()],c.prototype,"favGroupId",void 0),(0,i._)([(0,d.property)()],c.prototype,"fullName",void 0),(0,i._)([(0,d.property)({type:Date})],c.prototype,"modified",void 0),(0,i._)([(0,d.property)()],c.prototype,"orgId",void 0),(0,i._)([(0,d.property)()],c.prototype,"portal",void 0),(0,i._)([(0,d.property)()],c.prototype,"preferredView",void 0),(0,i._)([(0,d.property)()],c.prototype,"privileges",void 0),(0,i._)([(0,d.property)()],c.prototype,"region",void 0),(0,i._)([(0,d.property)()],c.prototype,"role",void 0),(0,i._)([(0,d.property)()],c.prototype,"roleId",void 0),(0,i._)([(0,d.property)()],c.prototype,"sourceJSON",void 0),(0,i._)([(0,d.property)()],c.prototype,"thumbnail",void 0),(0,i._)([(0,d.property)({readOnly:!0})],c.prototype,"thumbnailUrl",null),(0,i._)([(0,d.property)()],c.prototype,"units",void 0),(0,i._)([(0,d.property)({readOnly:!0})],c.prototype,"userContentUrl",null),(0,i._)([(0,d.property)({readOnly:!0})],c.prototype,"url",null),(0,i._)([(0,d.property)()],c.prototype,"username",void 0),(0,i._)([(0,d.property)()],c.prototype,"userType",void 0),c=h=(0,i._)([(0,y.subclass)("esri.portal.PortalUser")],c);const v=c})),t.register("kGVUU",(function(e,r){e.exports=import("./"+t("kyEFX").resolve("icJmK")).then((()=>t("h7Mrf")))}));
//# sourceMappingURL=PortalUser.ee2a4e21.js.map