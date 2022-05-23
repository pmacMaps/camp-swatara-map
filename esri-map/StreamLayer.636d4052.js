function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("icBo2",(function(r,i){var o;o=r.exports,Object.defineProperty(o,"__esModule",{value:!0,configurable:!0}),e(r.exports,"default",(function(){return Y}));var n=t("j6uz9");t("ixrNB");var a=t("5kFOn");t("5xsPA"),t("lz74e"),t("1l8Di"),t("hmJOf"),t("eh5y5");var s=t("3nyrc"),p=t("azUs6"),l=t("3yGBU"),d=t("8E3XH"),y=t("bYA0c"),u=t("cSqwa"),f=t("bPmsI"),c=t("6TszD"),h=t("1CpCt"),m=t("2IJVS"),g=t("lHg4e"),b=t("hTI69");t("aX9sh"),t("5HTPH");var v=t("gHCNy"),S=t("bzBbJ"),w=t("qA6zg"),I=t("bRgC5"),_=t("jaTH0"),T=t("iGP99"),x=t("lPKJW"),R=t("90xN9"),j=t("8u5kg"),P=t("2lddq"),F=t("ctxhN"),O=t("54ioU"),N=t("eOpMC"),D=t("5lb2Y"),L=t("6rQbA"),E=t("lixLM"),C=t("58e38"),A=t("1sTo6"),J=t("15IfA"),z=t("clU5B"),k=t("gr7VF"),U=t("4jTMF"),G=t("4ycBe"),H=t("gC5jC"),M=t("gKyS5"),q=t("gDefd"),V=t("jaaCV"),B=t("2WnyR");const W=c.default.getLogger("esri.layers.StreamLayer"),K=(0,A.defineFieldProperties)();let X=class extends((0,P.FeatureEffectLayer)((0,R.BlendLayer)((0,L.TemporalLayer)((0,D.ScaleRangeLayer)((0,N.RefreshableLayer)((0,x.ArcGISService)((0,F.OperationalLayer)((0,O.PortalLayer)((0,m.MultiOriginJSONMixin)((0,j.CustomParametersMixin)(T.default))))))))))){normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new(0,f.default)("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=(0,h.isSome)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(g.throwIfAbortError).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,J.fixRendererFields)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=(0,l.read)(i,t,r)||void 0;return e||W.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new(0,p.default)({defaultSymbol:Q(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:Q(e.symbol,e,r)})))}):new(0,s.default)({symbol:Q(t.defaultSymbol,t,r)})}createPopupTemplate(e){return(0,M.createPopupTemplate)(this,e)}createQuery(){const e=new(0,H.default);return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}async _fetchService(e){var t;if(this.webSocketUrl){var r;if(null==(r=this.timeInfo)||!r.trackIdField)throw new(0,f.default)("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new(0,f.default)("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new(0,f.default)("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new(0,f.default)("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await(0,y.default)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...null!=(t=this.sourceJSON)?t:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),(0,J.fixRendererFields)(this.renderer,this.fieldsIndex),(0,J.fixTimeInfoFields)(this.timeInfo,this.fieldsIndex),(0,G.loadStyleRenderer)(this,{origin:"service"})}constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new(0,U.default),this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=V.default.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}};(0,n._)([(0,b.property)({type:String})],X.prototype,"copyright",void 0),(0,n._)([(0,b.property)({readOnly:!0})],X.prototype,"defaultPopupTemplate",null),(0,n._)([(0,b.property)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],X.prototype,"definitionExpression",void 0),(0,n._)([(0,b.property)({type:String})],X.prototype,"displayField",void 0),(0,n._)([(0,b.property)({type:q.default})],X.prototype,"elevationInfo",void 0),(0,n._)([(0,b.property)(C.featureReductionProperty)],X.prototype,"featureReduction",void 0),(0,n._)([(0,b.property)(K.fields)],X.prototype,"fields",void 0),(0,n._)([(0,b.property)(K.fieldsIndex)],X.prototype,"fieldsIndex",void 0),(0,n._)([(0,b.property)({type:B.default})],X.prototype,"geometryDefinition",void 0),(0,n._)([(0,b.property)({type:_.featureGeometryTypeKebabDictionary.apiValues,json:{read:{reader:_.featureGeometryTypeKebabDictionary.read}}})],X.prototype,"geometryType",void 0),(0,n._)([(0,b.property)(E.labelsVisible)],X.prototype,"labelsVisible",void 0),(0,n._)([(0,b.property)({type:[z.default],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:k.reader},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],X.prototype,"labelingInfo",void 0),(0,n._)([(0,b.property)(E.legendEnabled)],X.prototype,"legendEnabled",void 0),(0,n._)([(0,b.property)({type:["show","hide"]})],X.prototype,"listMode",void 0),(0,n._)([(0,b.property)({type:v.Integer})],X.prototype,"maxReconnectionAttempts",void 0),(0,n._)([(0,b.property)({type:v.Integer})],X.prototype,"maxReconnectionInterval",void 0),(0,n._)([(0,b.property)(E.maxScale)],X.prototype,"maxScale",void 0),(0,n._)([(0,b.property)(E.minScale)],X.prototype,"minScale",void 0),(0,n._)([(0,b.property)({type:String})],X.prototype,"objectIdField",void 0),(0,n._)([(0,b.property)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],X.prototype,"operationalLayerType",void 0),(0,n._)([(0,b.property)(E.popupEnabled)],X.prototype,"popupEnabled",void 0),(0,n._)([(0,b.property)({type:a.default,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],X.prototype,"popupTemplate",void 0),(0,n._)([(0,b.property)({type:U.default})],X.prototype,"purgeOptions",void 0),(0,n._)([(0,b.property)({types:d.rendererTypes,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:d.webSceneRendererTypes,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],X.prototype,"renderer",null),(0,n._)([(0,S.reader)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,S.reader)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],X.prototype,"readRenderer",null),(0,n._)([(0,b.property)(E.screenSizePerspectiveEnabled)],X.prototype,"screenSizePerspectiveEnabled",void 0),(0,n._)([(0,b.property)()],X.prototype,"sourceJSON",void 0),(0,n._)([(0,b.property)({type:V.default,json:{origins:{service:{read:{source:"spatialReference"}}}}})],X.prototype,"spatialReference",void 0),(0,n._)([(0,b.property)({json:{read:!1}})],X.prototype,"type",void 0),(0,n._)([(0,b.property)(E.url)],X.prototype,"url",void 0),(0,n._)([(0,b.property)({type:Number})],X.prototype,"updateInterval",void 0),(0,n._)([(0,b.property)({type:String})],X.prototype,"webSocketUrl",void 0),X=(0,n._)([(0,w.subclass)("esri.layers.StreamLayer")],X);const Q=(0,I.createTypeReader)({types:u.symbolTypesRenderer}),Y=X})),t.register("4jTMF",(function(r,i){e(r.exports,"default",(function(){return d}));var o=t("j6uz9"),n=t("hO0an"),a=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var s,p=t("qA6zg");let l=s=class extends n.JSONSupport{clone(){return new s({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}};(0,o._)([(0,a.property)({type:Number,json:{write:!0}})],l.prototype,"age",void 0),(0,o._)([(0,a.property)({type:Number,json:{write:!0}})],l.prototype,"ageReceived",void 0),(0,o._)([(0,a.property)({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),(0,o._)([(0,a.property)({type:Number,json:{write:!0}})],l.prototype,"maxObservations",void 0),l=s=(0,o._)([(0,p.subclass)("esri.layers.support.PurgeOptions")],l);const d=l}));
//# sourceMappingURL=StreamLayer.636d4052.js.map