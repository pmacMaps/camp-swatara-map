function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("35vaU",(function(r,i){e(r.exports,"LayerView2DMixin",(function(){return g}));var s=t("j6uz9"),n=t("26zvD"),a=t("4cIQk"),o=t("bPmsI"),p=t("cc23H"),l=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var u=t("qA6zg"),d=t("jrPhy"),h=t("f5STU"),c=t("3DO8P"),y=t("611Mf"),v=t("huCpd");const f=n.default.ofType({key:"type",base:h.default,typeMap:{rect:c.default,path:v.default,geometry:y.default}}),g=e=>{let t=class extends e{initialize(){var e,t,r,i;const s=null==(e=null==(t=this.view)?void 0:t.spatialReferenceLocked)||e;(null==(r=this.view)?void 0:r.spatialReference)&&s&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new(0,o.default)("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new(0,d.Container)),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,p.watch)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),p.syncAndInitial),(0,p.watch)((()=>{var e,t;return null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1}),(e=>{this.container&&(this.container.opacity=e)}),p.syncAndInitial),(0,p.watch)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),p.syncAndInitial),(0,p.watch)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),p.syncAndInitial),(0,p.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}))]),null!=(i=this.view)&&i.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null==(e=this.view)?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(e=this.updatingHandles)||!e.updating))}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:r,maxScale:i}=t;return(0===r||e<=r)&&(0===i||e>=i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,r=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),r&&(e.outsideScaleRange=r),e}constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}};return(0,s._)([(0,l.property)()],t.prototype,"attached",void 0),(0,s._)([(0,l.property)({type:f,set(e){const t=(0,a.referenceSetter)(e,this._get("clips"),f);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,l.property)()],t.prototype,"container",void 0),(0,s._)([(0,l.property)()],t.prototype,"moving",void 0),(0,s._)([(0,l.property)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,l.property)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,l.property)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,l.property)()],t.prototype,"updating",null),(0,s._)([(0,l.property)()],t.prototype,"view",void 0),(0,s._)([(0,l.property)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,s._)([(0,u.subclass)("esri.views.2d.layers.LayerView2D")],t),t}})),t.register("f5STU",(function(r,i){e(r.exports,"default",(function(){return p}));var s=t("j6uz9"),n=t("hO0an");t("6TszD"),t("gHCNy"),t("aX9sh"),t("5HTPH"),t("bXKTN");var a=t("qA6zg");let o=class extends n.JSONSupport{};o=(0,s._)([(0,a.subclass)("esri.views.layers.support.ClipArea")],o);const p=o})),t.register("3DO8P",(function(r,i){e(r.exports,"default",(function(){return u}));var s=t("j6uz9"),n=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var a,o=t("qA6zg"),p=t("f5STU");let l=a=class extends p.default{clone(){return new a({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}};(0,s._)([(0,n.property)({type:[Number,String],json:{write:!0}})],l.prototype,"left",void 0),(0,s._)([(0,n.property)({type:[Number,String],json:{write:!0}})],l.prototype,"right",void 0),(0,s._)([(0,n.property)({type:[Number,String],json:{write:!0}})],l.prototype,"top",void 0),(0,s._)([(0,n.property)({type:[Number,String],json:{write:!0}})],l.prototype,"bottom",void 0),(0,s._)([(0,n.property)({readOnly:!0})],l.prototype,"version",null),l=a=(0,s._)([(0,o.subclass)("esri.views.layers.support.ClipRect")],l);const u=l})),t.register("611Mf",(function(r,i){e(r.exports,"default",(function(){return v}));var s=t("j6uz9");t("ixrNB");var n=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var a,o=t("qA6zg"),p=t("eqMhf"),l=t("86d4E"),u=t("f5STU"),d=t("2WnyR"),h=t("etknW");const c={base:p.default,key:"type",typeMap:{extent:d.default,polygon:h.default}};let y=a=class extends u.default{get version(){return(this._get("version")||0)+1}clone(){return new a({geometry:this.geometry.clone()})}constructor(){super(...arguments),this.type="geometry",this.geometry=null}};(0,s._)([(0,n.property)({types:c,json:{read:l.fromJSON,write:!0}})],y.prototype,"geometry",void 0),(0,s._)([(0,n.property)({readOnly:!0})],y.prototype,"version",null),y=a=(0,s._)([(0,o.subclass)("esri.views.layers.support.Geometry")],y);const v=y})),t.register("huCpd",(function(r,i){e(r.exports,"default",(function(){return l}));var s=t("j6uz9"),n=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var a=t("qA6zg"),o=t("f5STU");let p=class extends o.default{get version(){return(this._get("version")||0)+1}constructor(){super(...arguments),this.type="path",this.path=[]}};(0,s._)([(0,n.property)({type:[[[Number]]],json:{write:!0}})],p.prototype,"path",void 0),(0,s._)([(0,n.property)({readOnly:!0})],p.prototype,"version",null),p=(0,s._)([(0,a.subclass)("esri.views.layers.support.Path")],p);const l=p})),t.register("YRjSC",(function(r,i){e(r.exports,"default",(function(){return v}));var s=t("j6uz9"),n=t("27btt"),a=t("cS4u3"),o=t("8Y9g8"),p=t("2tTSh"),l=t("6TszD"),u=t("1CpCt"),d=t("fteFo"),h=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var c=t("qA6zg");let y=class extends((0,o.HandleOwnerMixin)((0,p.IdentifiableMixin)((0,d.EsriPromiseMixin)(a.default.EventedMixin(n.default))))){initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer&&this.layer.title||"no title";throw l.default.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e),e}}))}get fullOpacity(){return(0,u.unwrapOr)(this.get("layer.opacity"),1)*(0,u.unwrapOr)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){var e;return!!(null!=(e=this.updatingHandles)&&e.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){var e,t,r;return this.visible&&(null==(e=this.layer)?void 0:e.loaded)&&!(null!=(t=this.parent)&&t.suspended)&&(null==(r=this.view)?void 0:r.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}constructor(e){super(e),this.layer=null,this.parent=null}};(0,s._)([(0,h.property)()],y.prototype,"fullOpacity",null),(0,s._)([(0,h.property)()],y.prototype,"layer",void 0),(0,s._)([(0,h.property)()],y.prototype,"parent",void 0),(0,s._)([(0,h.property)({readOnly:!0})],y.prototype,"suspended",null),(0,s._)([(0,h.property)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,s._)([(0,h.property)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,s._)([(0,h.property)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,s._)([(0,h.property)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,s._)([(0,h.property)()],y.prototype,"visible",null),(0,s._)([(0,h.property)()],y.prototype,"view",void 0),y=(0,s._)([(0,c.subclass)("esri.views.layers.LayerView")],y);const v=y}));
//# sourceMappingURL=TileLayerView2D.540f9199.js.map