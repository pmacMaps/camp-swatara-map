!function(){function e(e,t,r,o){Object.defineProperty(e,t,{get:r,set:o,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("d8x5p",(function(r,o){e(r.exports,"I3SNodePageDefinition",(function(){return l})),e(r.exports,"I3SMaterialDefinition",(function(){return d})),e(r.exports,"I3STextureSetDefinition",(function(){return f})),e(r.exports,"I3SGeometryDefinition",(function(){return _}));var p=t("8TSCy"),i=t("7eJjO"),n=t("1XAcN"),s=t("iho5X");t("lNwWH"),t("2VlWd"),t("iJAIC");var a=t("bSafx"),u=t("fcwIv"),l=function(e){"use strict";p.inherits(r,e);var t=p.createSuper(r);function r(){var e;return p.classCallCheck(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).nodesPerPage=null,e.rootIndex=0,e.lodSelectionMetricType=null,p.possibleConstructorReturn(e)}return r}(n.JSONSupport);(0,i._)([(0,s.property)({type:Number})],l.prototype,"nodesPerPage",void 0),(0,i._)([(0,s.property)({type:Number})],l.prototype,"rootIndex",void 0),(0,i._)([(0,s.property)({type:String})],l.prototype,"lodSelectionMetricType",void 0),l=(0,i._)([(0,u.subclass)("esri.layer.support.I3SNodePageDefinition")],l);var c=function(e){"use strict";p.inherits(r,e);var t=p.createSuper(r);function r(){var e;return p.classCallCheck(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).factor=1,p.possibleConstructorReturn(e)}return r}(n.JSONSupport);(0,i._)([(0,s.property)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],c.prototype,"id",void 0),(0,i._)([(0,s.property)({type:Number})],c.prototype,"factor",void 0),c=(0,i._)([(0,u.subclass)("esri.layer.support.I3SMaterialTexture")],c);var y=function(e){"use strict";p.inherits(r,e);var t=p.createSuper(r);function r(){var e;return p.classCallCheck(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).baseColorFactor=[1,1,1,1],e.baseColorTexture=null,e.metallicRoughnessTexture=null,e.metallicFactor=1,e.roughnessFactor=1,p.possibleConstructorReturn(e)}return r}(n.JSONSupport);(0,i._)([(0,s.property)({type:[Number]})],y.prototype,"baseColorFactor",void 0),(0,i._)([(0,s.property)({type:c})],y.prototype,"baseColorTexture",void 0),(0,i._)([(0,s.property)({type:c})],y.prototype,"metallicRoughnessTexture",void 0),(0,i._)([(0,s.property)({type:Number})],y.prototype,"metallicFactor",void 0),(0,i._)([(0,s.property)({type:Number})],y.prototype,"roughnessFactor",void 0),y=(0,i._)([(0,u.subclass)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],y);var d=function(e){"use strict";p.inherits(r,e);var t=p.createSuper(r);function r(){var e;return p.classCallCheck(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).alphaMode="opaque",e.alphaCutoff=.25,e.doubleSided=!1,e.cullFace="none",e.normalTexture=null,e.occlusionTexture=null,e.emissiveTexture=null,e.emissiveFactor=null,e.pbrMetallicRoughness=null,p.possibleConstructorReturn(e)}return r}(n.JSONSupport);(0,i._)([(0,a.enumeration)({opaque:"opaque",mask:"mask",blend:"blend"})],d.prototype,"alphaMode",void 0),(0,i._)([(0,s.property)({type:Number})],d.prototype,"alphaCutoff",void 0),(0,i._)([(0,s.property)({type:Boolean})],d.prototype,"doubleSided",void 0),(0,i._)([(0,a.enumeration)({none:"none",back:"back",front:"front"})],d.prototype,"cullFace",void 0),(0,i._)([(0,s.property)({type:c})],d.prototype,"normalTexture",void 0),(0,i._)([(0,s.property)({type:c})],d.prototype,"occlusionTexture",void 0),(0,i._)([(0,s.property)({type:c})],d.prototype,"emissiveTexture",void 0),(0,i._)([(0,s.property)({type:[Number]})],d.prototype,"emissiveFactor",void 0),(0,i._)([(0,s.property)({type:y})],d.prototype,"pbrMetallicRoughness",void 0),d=(0,i._)([(0,u.subclass)("esri.layer.support.I3SMaterialDefinition")],d);var v=function(e){"use strict";p.inherits(r,e);var t=p.createSuper(r);function r(){return p.classCallCheck(this,r),t.apply(this,arguments)}return r}(n.JSONSupport);(0,i._)([(0,s.property)({type:String,json:{read:{source:["name","index"],reader:function(e,t){return null!=e?e:"".concat(t.index)}}}})],v.prototype,"name",void 0),(0,i._)([(0,a.enumeration)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],v.prototype,"format",void 0),v=(0,i._)([(0,u.subclass)("esri.layer.support.I3STextureFormat")],v);var f=function(e){"use strict";p.inherits(r,e);var t=p.createSuper(r);function r(){var e;return p.classCallCheck(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).atlas=!1,p.possibleConstructorReturn(e)}return r}(n.JSONSupport);(0,i._)([(0,s.property)({type:[v]})],f.prototype,"formats",void 0),(0,i._)([(0,s.property)({type:Boolean})],f.prototype,"atlas",void 0),f=(0,i._)([(0,u.subclass)("esri.layer.support.I3STextureSetDefinition")],f);var S=function(e){"use strict";p.inherits(r,e);var t=p.createSuper(r);function r(){return p.classCallCheck(this,r),t.apply(this,arguments)}return r}(n.JSONSupport);(0,i._)([(0,a.enumeration)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],S.prototype,"type",void 0),(0,i._)([(0,s.property)({type:Number})],S.prototype,"component",void 0),S=(0,i._)([(0,u.subclass)("esri.layer.support.I3SGeometryAttribute")],S);var h=function(e){"use strict";p.inherits(r,e);var t=p.createSuper(r);function r(){return p.classCallCheck(this,r),t.apply(this,arguments)}return r}(n.JSONSupport);(0,i._)([(0,a.enumeration)({draco:"draco"})],h.prototype,"encoding",void 0),(0,i._)([(0,s.property)({type:[String]})],h.prototype,"attributes",void 0),h=(0,i._)([(0,u.subclass)("esri.layer.support.I3SGeometryCompressedAttributes")],h);var b=function(e){"use strict";p.inherits(r,e);var t=p.createSuper(r);function r(){var e;return p.classCallCheck(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).offset=0,p.possibleConstructorReturn(e)}return r}(n.JSONSupport);(0,i._)([(0,s.property)({type:Number})],b.prototype,"offset",void 0),(0,i._)([(0,s.property)({type:S})],b.prototype,"position",void 0),(0,i._)([(0,s.property)({type:S})],b.prototype,"normal",void 0),(0,i._)([(0,s.property)({type:S})],b.prototype,"uv0",void 0),(0,i._)([(0,s.property)({type:S})],b.prototype,"color",void 0),(0,i._)([(0,s.property)({type:S})],b.prototype,"uvRegion",void 0),(0,i._)([(0,s.property)({type:S})],b.prototype,"featureId",void 0),(0,i._)([(0,s.property)({type:S})],b.prototype,"faceRange",void 0),(0,i._)([(0,s.property)({type:h})],b.prototype,"compressedAttributes",void 0),b=(0,i._)([(0,u.subclass)("esri.layer.support.I3SGeometryBuffer")],b);var _=function(e){"use strict";p.inherits(r,e);var t=p.createSuper(r);function r(){return p.classCallCheck(this,r),t.apply(this,arguments)}return r}(n.JSONSupport);(0,i._)([(0,a.enumeration)({triangle:"triangle"})],_.prototype,"topology",void 0),(0,i._)([(0,s.property)()],_.prototype,"geometryBuffers",void 0),_=(0,i._)([(0,u.subclass)("esri.layer.support.I3SGeometryDefinition")],_)}))}();
//# sourceMappingURL=BuildingSceneLayer.78c5c2cd.js.map