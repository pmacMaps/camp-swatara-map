function e(e,t,o,r){Object.defineProperty(e,t,{get:o,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("5fhhG",(function(o,r){e(o.exports,"default",(function(){return f}));var i=t("j6uz9"),n=t("itGIg"),l=t("hTI69");t("gHCNy");var s,p=t("8gk9b"),u=t("qA6zg"),a=t("eEVo1"),d=t("bxbqm"),c=t("kT5nU");let y=s=class extends a.default{clone(){return new s({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,n.clone)(this.colorClassBreakInfos),legendOptions:(0,n.clone)(this.legendOptions)})}constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}};(0,i._)([(0,p.enumeration)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],y.prototype,"type",void 0),(0,i._)([(0,l.property)({json:{write:!0},type:String})],y.prototype,"field",void 0),(0,i._)([(0,l.property)({type:d.default,json:{write:!0}})],y.prototype,"legendOptions",void 0),(0,i._)([(0,l.property)({type:a.default.fieldTransformTypeKebabDict.apiValues,json:{type:a.default.fieldTransformTypeKebabDict.jsonValues,read:a.default.fieldTransformTypeKebabDict.read,write:a.default.fieldTransformTypeKebabDict.write}})],y.prototype,"fieldTransformType",void 0),(0,i._)([(0,l.property)({type:[c.default],json:{write:!0}})],y.prototype,"colorClassBreakInfos",void 0),y=s=(0,i._)([(0,u.subclass)("esri.renderers.PointCloudClassBreaksRenderer")],y);const f=y})),t.register("eEVo1",(function(o,r){e(o.exports,"default",(function(){return f}));var i=t("j6uz9"),n=t("4jlRt"),l=t("hO0an"),s=t("itGIg"),p=t("hTI69");t("gHCNy");var u=t("qA6zg"),a=t("6qdDf"),d=t("g3b9H");const c=(0,n.strict)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let y=class extends l.JSONSupport{clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,s.clone)(this.pointSizeAlgorithm),colorModulation:(0,s.clone)(this.colorModulation),pointsPerInch:(0,s.clone)(this.pointsPerInch)}}constructor(e){super(e),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}};(0,i._)([(0,p.property)({type:c.apiValues,readOnly:!0,nonNullable:!0,json:{type:c.jsonValues,read:!1,write:c.write}})],y.prototype,"type",void 0),(0,i._)([(0,p.property)({types:d.pointSizeAlgorithmTypes,json:{write:!0}})],y.prototype,"pointSizeAlgorithm",void 0),(0,i._)([(0,p.property)({type:a.default,json:{write:!0}})],y.prototype,"colorModulation",void 0),(0,i._)([(0,p.property)({json:{write:!0},nonNullable:!0,type:Number})],y.prototype,"pointsPerInch",void 0),y=(0,i._)([(0,u.subclass)("esri.renderers.PointCloudRenderer")],y),(y||(y={})).fieldTransformTypeKebabDict=new(0,n.JSONMap)({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"});const f=y})),t.register("6qdDf",(function(o,r){e(o.exports,"default",(function(){return a}));var i=t("j6uz9"),n=t("hO0an"),l=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var s,p=t("qA6zg");let u=s=class extends n.JSONSupport{clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}};(0,i._)([(0,l.property)({type:String,json:{write:!0}})],u.prototype,"field",void 0),(0,i._)([(0,l.property)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"minValue",void 0),(0,i._)([(0,l.property)({type:Number,nonNullable:!0,json:{write:!0}})],u.prototype,"maxValue",void 0),u=s=(0,i._)([(0,p.subclass)("esri.renderers.support.pointCloud.ColorModulation")],u);const a=u})),t.register("g3b9H",(function(o,r){e(o.exports,"pointSizeAlgorithmTypes",(function(){return s}));var i=t("iSMJh"),n=t("7dNuC"),l=t("2aWFt");const s={key:"type",base:i.default,typeMap:{"fixed-size":n.default,splat:l.default}}})),t.register("iSMJh",(function(o,r){e(o.exports,"default",(function(){return d}));var i=t("j6uz9"),n=t("4jlRt"),l=t("hO0an"),s=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var p=t("qA6zg");const u=new(0,n.JSONMap)({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let a=class extends l.JSONSupport{};(0,i._)([(0,s.property)({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],a.prototype,"type",void 0),a=(0,i._)([(0,p.subclass)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],a);const d=a})),t.register("7dNuC",(function(o,r){e(o.exports,"default",(function(){return d}));var i=t("j6uz9"),n=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var l,s=t("8gk9b"),p=t("qA6zg"),u=t("iSMJh");let a=l=class extends u.default{clone(){return new l({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}};(0,i._)([(0,s.enumeration)({pointCloudFixedSizeAlgorithm:"fixed-size"})],a.prototype,"type",void 0),(0,i._)([(0,n.property)({type:Number,nonNullable:!0,json:{write:!0}})],a.prototype,"size",void 0),(0,i._)([(0,n.property)({type:Boolean,json:{write:!0}})],a.prototype,"useRealWorldSymbolSizes",void 0),a=l=(0,i._)([(0,p.subclass)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],a);const d=a})),t.register("2aWFt",(function(o,r){e(o.exports,"default",(function(){return d}));var i=t("j6uz9"),n=t("hTI69");t("aX9sh"),t("5HTPH"),t("gHCNy");var l,s=t("8gk9b"),p=t("qA6zg"),u=t("iSMJh");let a=l=class extends u.default{clone(){return new l({scaleFactor:this.scaleFactor})}constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}};(0,i._)([(0,s.enumeration)({pointCloudSplatAlgorithm:"splat"})],a.prototype,"type",void 0),(0,i._)([(0,n.property)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],a.prototype,"scaleFactor",void 0),a=l=(0,i._)([(0,p.subclass)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],a);const d=a})),t.register("kT5nU",(function(o,r){e(o.exports,"default",(function(){return y}));var i,n=t("j6uz9"),l=t("hJt7u"),s=t("hO0an"),p=t("itGIg"),u=t("hTI69"),a=t("gHCNy"),d=t("qA6zg");let c=i=class extends s.JSONSupport{clone(){return new i({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,p.clone)(this.color)})}constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}};(0,n._)([(0,u.property)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,n._)([(0,u.property)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,n._)([(0,u.property)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],c.prototype,"minValue",void 0),(0,n._)([(0,u.property)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],c.prototype,"maxValue",void 0),(0,n._)([(0,u.property)({type:l.default,json:{type:[a.Integer],write:!0}})],c.prototype,"color",void 0),c=i=(0,n._)([(0,d.subclass)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],c);const y=c})),t.register("61J2m",(function(o,r){e(o.exports,"default",(function(){return f}));var i=t("j6uz9"),n=t("itGIg"),l=t("hTI69");t("gHCNy");var s,p=t("8gk9b"),u=t("qA6zg"),a=t("eEVo1"),d=t("bxbqm"),c=t("hpzyQ");let y=s=class extends a.default{clone(){return new s({...this.cloneProperties(),field:(0,n.clone)(this.field),fieldTransformType:(0,n.clone)(this.fieldTransformType),stops:(0,n.clone)(this.stops),legendOptions:(0,n.clone)(this.legendOptions)})}constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}};(0,i._)([(0,p.enumeration)({pointCloudStretchRenderer:"point-cloud-stretch"})],y.prototype,"type",void 0),(0,i._)([(0,l.property)({json:{write:!0},type:String})],y.prototype,"field",void 0),(0,i._)([(0,l.property)({type:d.default,json:{write:!0}})],y.prototype,"legendOptions",void 0),(0,i._)([(0,l.property)({type:a.default.fieldTransformTypeKebabDict.apiValues,json:{type:a.default.fieldTransformTypeKebabDict.jsonValues,read:a.default.fieldTransformTypeKebabDict.read,write:a.default.fieldTransformTypeKebabDict.write}})],y.prototype,"fieldTransformType",void 0),(0,i._)([(0,l.property)({type:[c.default],json:{write:!0}})],y.prototype,"stops",void 0),y=s=(0,i._)([(0,u.subclass)("esri.renderers.PointCloudStretchRenderer")],y);const f=y})),t.register("cA3NT",(function(o,r){e(o.exports,"default",(function(){return f}));var i=t("j6uz9"),n=t("itGIg"),l=t("hTI69");t("gHCNy");var s,p=t("8gk9b"),u=t("qA6zg"),a=t("eEVo1"),d=t("bxbqm"),c=t("bvCRa");let y=s=class extends a.default{clone(){return new s({...this.cloneProperties(),field:(0,n.clone)(this.field),fieldTransformType:(0,n.clone)(this.fieldTransformType),colorUniqueValueInfos:(0,n.clone)(this.colorUniqueValueInfos),legendOptions:(0,n.clone)(this.legendOptions)})}constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}};(0,i._)([(0,p.enumeration)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],y.prototype,"type",void 0),(0,i._)([(0,l.property)({json:{write:!0},type:String})],y.prototype,"field",void 0),(0,i._)([(0,l.property)({type:a.default.fieldTransformTypeKebabDict.apiValues,json:{type:a.default.fieldTransformTypeKebabDict.jsonValues,read:a.default.fieldTransformTypeKebabDict.read,write:a.default.fieldTransformTypeKebabDict.write}})],y.prototype,"fieldTransformType",void 0),(0,i._)([(0,l.property)({type:[c.default],json:{write:!0}})],y.prototype,"colorUniqueValueInfos",void 0),(0,i._)([(0,l.property)({type:d.default,json:{write:!0}})],y.prototype,"legendOptions",void 0),y=s=(0,i._)([(0,u.subclass)("esri.renderers.PointCloudUniqueValueRenderer")],y);const f=y})),t.register("bvCRa",(function(o,r){e(o.exports,"default",(function(){return y}));var i,n=t("j6uz9"),l=t("hJt7u"),s=t("hO0an"),p=t("itGIg"),u=t("hTI69"),a=t("gHCNy"),d=t("qA6zg");let c=i=class extends s.JSONSupport{clone(){return new i({description:this.description,label:this.label,values:(0,p.clone)(this.values),color:(0,p.clone)(this.color)})}constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}};(0,n._)([(0,u.property)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,n._)([(0,u.property)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,n._)([(0,u.property)({type:[String],json:{write:!0}})],c.prototype,"values",void 0),(0,n._)([(0,u.property)({type:l.default,json:{type:[a.Integer],write:!0}})],c.prototype,"color",void 0),c=i=(0,n._)([(0,d.subclass)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);const y=c}));
//# sourceMappingURL=PointCloudLayer.fdbba2f9.js.map