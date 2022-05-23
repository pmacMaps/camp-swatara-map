function e(e,t,r,s){Object.defineProperty(e,t,{get:r,set:s,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("iQ0Vp",(function(r,s){var o;o=r.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),e(r.exports,"default",(function(){return F}));var l=t("j6uz9");t("ixrNB");var i=t("26zvD"),n=t("b4dCZ"),a=t("1CpCt"),u=t("2IJVS"),y=t("lHg4e"),p=t("7dRCe"),f=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var d=t("bzBbJ"),c=t("qA6zg"),h=t("g9601"),b=t("jaaCV"),g=t("iGP99"),m=t("90xN9"),v=t("ctxhN"),S=t("54ioU"),_=t("eOpMC"),x=t("5lb2Y"),w=t("lixLM"),E=t("9jSkB"),O=t("3gjuj"),I=t("2WnyR");const k=["kml","xml"];let N=class extends((0,m.BlendLayer)((0,_.RefreshableLayer)((0,x.ScaleRangeLayer)((0,v.OperationalLayer)((0,S.PortalLayer)((0,u.MultiOriginJSONMixin)(g.default))))))){initialize(){this.watch("sublayers",((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return(0,O.sublayersFromJSON)(E.default,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],s=e.toArray();for(;s.length;){const e=s[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&s.push(...e.sublayers.toArray())),s.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,p.getFilename)(this.url,k)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=(0,a.isSome)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(y.throwIfAbortError).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:(0,O.fetchService)(this.url,this.outSpatialReference,this.refreshInterval,e))),r=(0,O.parseKML)(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;(0,a.isSome)(this.extent)&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const s of r.sublayers.items)t(s),s.visible&&s.fullExtent&&((0,a.isSome)(e)?e.union(s.fullExtent):e=s.fullExtent.clone())};return t(this),e}constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new(0,n.default)({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=b.default.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}};(0,l._)([(0,f.property)({readOnly:!0})],N.prototype,"allSublayers",void 0),(0,l._)([(0,f.property)({type:b.default})],N.prototype,"outSpatialReference",void 0),(0,l._)([(0,f.property)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],N.prototype,"path",void 0),(0,l._)([(0,f.property)({readOnly:!0,json:{read:!1,write:!1}})],N.prototype,"legendEnabled",void 0),(0,l._)([(0,f.property)({type:["show","hide","hide-children"]})],N.prototype,"listMode",void 0),(0,l._)([(0,f.property)({type:["KML"]})],N.prototype,"operationalLayerType",void 0),(0,l._)([(0,f.property)({})],N.prototype,"resourceInfo",void 0),(0,l._)([(0,f.property)({type:i.default.ofType(E.default),json:{write:{ignoreOrigin:!0}}})],N.prototype,"sublayers",void 0),(0,l._)([(0,d.reader)(["web-map","portal-item"],"sublayers",["visibleFolders"])],N.prototype,"readSublayersFromItemOrWebMap",null),(0,l._)([(0,d.reader)("service","sublayers",["sublayers"])],N.prototype,"readSublayers",null),(0,l._)([(0,h.writer)("sublayers")],N.prototype,"writeSublayers",null),(0,l._)([(0,f.property)({readOnly:!0,json:{read:!1}})],N.prototype,"type",void 0),(0,l._)([(0,f.property)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],N.prototype,"title",null),(0,l._)([(0,f.property)(w.url)],N.prototype,"url",void 0),(0,l._)([(0,f.property)({readOnly:!0})],N.prototype,"visibleSublayers",null),(0,l._)([(0,f.property)({type:I.default})],N.prototype,"extent",void 0),(0,l._)([(0,f.property)()],N.prototype,"fullExtent",null),N=(0,l._)([(0,c.subclass)("esri.layers.KMLLayer")],N);const F=N})),t.register("9jSkB",(function(r,s){e(r.exports,"default",(function(){return _}));var o=t("j6uz9");t("ixrNB");var l=t("26zvD"),i=t("cS4u3"),n=t("hO0an"),a=t("lEAUW"),u=t("1CpCt"),y=t("cc23H"),p=t("29Fuv"),f=t("hTI69");t("aX9sh"),t("5HTPH");var d,c=t("5ORF5"),h=t("bzBbJ"),b=t("qA6zg"),g=t("gHCNy"),m=t("3gjuj"),v=t("2WnyR");let S=d=class extends(i.default.EventedMixin((0,n.JSONSupportMixin)(a.default))){initialize(){(0,y.whenOnce)((()=>this.networkLink)).then((()=>(0,y.whenOnce)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=(0,u.isSome)(e)?e.signal:null,r=this._fetchService(this._get("networkLink").href,t).then((e=>{const t=(0,m.computeExtent)(e.sublayers);this.fullExtent=v.default.fromJSON(t),this.sourceJSON=e;const r=(0,g.ensureType)(l.default.ofType(d),(0,m.sublayersFromJSON)(d,e));this.sublayers?this.sublayers.addMany(r):this.sublayers=r,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(r),Promise.resolve(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]),this._set("sublayers",e)}castSublayers(e){return(0,g.ensureType)(l.default.ofType(d),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}_fetchService(e,t){return(0,m.fetchService)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>(0,m.parseKML)(e.data)))}constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}};(0,o._)([(0,f.property)()],S.prototype,"description",void 0),(0,o._)([(0,f.property)()],S.prototype,"id",void 0),(0,o._)([(0,f.property)({readOnly:!0,value:null})],S.prototype,"networkLink",void 0),(0,o._)([(0,f.property)({json:{write:{allowNull:!0}}})],S.prototype,"parent",void 0),(0,o._)([(0,f.property)({value:null,json:{write:{allowNull:!0}}})],S.prototype,"sublayers",null),(0,o._)([(0,c.cast)("sublayers")],S.prototype,"castSublayers",null),(0,o._)([(0,f.property)({value:null,json:{read:{source:"name",reader:e=>(0,p.stripHTML)(e)}}})],S.prototype,"title",void 0),(0,o._)([(0,f.property)({value:!0})],S.prototype,"visible",null),(0,o._)([(0,h.reader)("visible",["visibility"])],S.prototype,"readVisible",null),(0,o._)([(0,f.property)()],S.prototype,"sourceJSON",void 0),(0,o._)([(0,f.property)({value:null})],S.prototype,"layer",null),(0,o._)([(0,f.property)({type:v.default})],S.prototype,"fullExtent",void 0),S=d=(0,o._)([(0,b.subclass)("esri.layers.support.KMLSublayer")],S);const _=S})),t.register("3gjuj",(function(r,s){e(r.exports,"parseKML",(function(){return b})),e(r.exports,"computeExtent",(function(){return _})),e(r.exports,"fetchService",(function(){return g})),e(r.exports,"sublayersFromJSON",(function(){return m})),e(r.exports,"getGraphics",(function(){return S}));var o=t("9XPDd"),l=t("1mmm2"),i=t("5kFOn"),n=t("bYA0c"),a=t("itGIg"),u=t("7dRCe"),y=t("jaaCV"),p=t("ccOFp"),f=t("772GK"),d=t("3yGBU"),c=t("gEU1A");const h={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function b(e){const t=e.folders||[],r=t.slice(),s=new Map,o=new Map,l=new Map,i=new Map,n=new Map,u={esriGeometryPoint:o,esriGeometryPolyline:l,esriGeometryPolygon:i};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=(0,a.clone)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;s.set(r,t);const n=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?v(o,n,e.featureSet.features):"esriGeometryPolyline"===r?v(l,n,e.featureSet.features):"esriGeometryPolygon"===r&&v(i,n,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{n.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((s=>{const o=function(e,t,r){const s=function(e,t){let r;return t.some((t=>t.id===e&&(r=t,!0))),r}(e,r);return s&&(s.parentFolderId=t,s.networkLink=s),s}(s,t.id,e.networkLinks);o&&r.push(o)}))})),r.forEach((e=>{if(e.featureInfos){e.points=(0,a.clone)(s.get("esriGeometryPoint")),e.polylines=(0,a.clone)(s.get("esriGeometryPolyline")),e.polygons=(0,a.clone)(s.get("esriGeometryPolygon")),e.mapImages=[];for(const t of e.featureInfos)switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const r=u[t.type].get(t.id);r&&e[h[t.type]].featureSet.features.push(r);break}case"GroundOverlay":{const r=n.get(t.id);r&&e.mapImages.push(r);break}}e.fullExtent=_([e])}}));const y=_(r);return{folders:t,sublayers:r,extent:y}}function g(e,t,r,s){const i=l.id&&l.id.findCredential(e);e=(0,u.addQueryParameters)(e,{token:i&&i.token});const a=o.default.kmlServiceUrl;return(0,n.default)(a,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:s})}function m(e,t,r=null,s=[]){const o=[],l={},i=t.sublayers,n=t.folders.map((e=>e.id));return i.forEach((t=>{const i=new e;if(r?i.read(t,r):i.read(t),s.length&&n.indexOf(i.id)>-1&&(i.visible=-1!==s.indexOf(i.id)),l[t.id]=i,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=l[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i)}else o.unshift(i)})),o}function v(e,t,r){r.forEach((r=>{e.set(r.attributes[t],r)}))}async function S(e){const t=c.default.fromJSON(e.featureSet).features,r=e.layerDefinition,s=(0,d.fromJSON)(r.drawingInfo.renderer),o=i.default.fromJSON(e.popupInfo),l=[];for(const e of t){const t=await s.getSymbolAsync(e);e.symbol=t,e.popupTemplate=o,e.visible=!0,l.push(e)}return l}function _(e){const t=(0,p.create)(p.NEGATIVE_INFINITY),r=(0,p.create)(p.NEGATIVE_INFINITY);for(const s of e){if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features)for(const e of s.polygons.featureSet.features)(0,f.getBoundsXYZ)(t,e.geometry),(0,p.expandWithAABB)(r,t);if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features)for(const e of s.polylines.featureSet.features)(0,f.getBoundsXYZ)(t,e.geometry),(0,p.expandWithAABB)(r,t);if(s.points&&s.points.featureSet&&s.points.featureSet.features)for(const e of s.points.featureSet.features)(0,f.getBoundsXYZ)(t,e.geometry),(0,p.expandWithAABB)(r,t);if(s.mapImages)for(const e of s.mapImages)(0,f.getBoundsXYZ)(t,e.extent),(0,p.expandWithAABB)(r,t)}return(0,p.equals)(r,p.NEGATIVE_INFINITY)?null:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:y.default.WGS84}}}));
//# sourceMappingURL=KMLLayer.8124716b.js.map