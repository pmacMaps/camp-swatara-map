!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,a){Object.defineProperty(e,t,{get:r,set:a,enumerable:!0,configurable:!0})}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;r.register("gjMUe",(function(a,o){var n;n=a.exports,Object.defineProperty(n,"__esModule",{value:!0,configurable:!0}),t(a.exports,"default",(function(){return _}));var l=r("8TSCy"),i=r("2TvXO"),s=r("7eJjO"),u=r("9pNSx"),p=r("kyj08"),d=r("79ASa"),y=r("7qybv"),c=r("8NioF"),g=r("iho5X");r("lNwWH"),r("2VlWd"),r("iJAIC");var f=r("fcwIv"),v=r("j40xv"),b=r("h1GQv"),h=r("gIXJ2"),m=r("5N5S1"),M=r("xQ42o"),w=new(0,d.JSONMap)({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),S=function(t){"use strict";l.inherits(a,t);var r=l.createSuper(a);function a(e){var t;return l.classCallCheck(this,a),(t=r.call(this,e)).type="bing-maps",t.tileInfo=new(0,M.default)({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:v.default.WebMercator},spatialReference:v.default.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),t.key=null,t.style="road",t.culture="en-US",t.region=null,t.portalUrl=null,t.hasAttributionData=!0,l.possibleConstructorReturn(t)}return l.createClass(a,[{key:"bingMetadata",get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)}},{key:"copyright",get:function(){return(0,y.isSome)(this.bingMetadata)?this.bingMetadata.copyright:null}},{key:"operationalLayerType",get:function(){return w.toJSON(this.style)}},{key:"bingLogo",get:function(){return(0,y.isSome)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}},{key:"load",value:function(e){var t=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((function(){return t._getMetadata()}))):this.addResolvingPromise(Promise.reject(new(0,p.default)("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}},{key:"getTileUrl",value:function(e,t,r){if(!this.loaded||(0,y.isNone)(this.bingMetadata))return null;var a=this.bingMetadata.resourceSets[0].resources[0],o=a.imageUrlSubdomains[t%a.imageUrlSubdomains.length],n=this._getQuadKey(e,t,r);return a.imageUrl.replace("{subdomain}",o).replace("{quadkey}",n)}},{key:"fetchAttributionData",value:function(){var t=this;return l.asyncToGenerator(e(i).mark((function r(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.load().then((function(){return(0,y.isNone)(t.bingMetadata)?null:{contributors:t.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}})));case 1:case"end":return e.stop()}}),r)})))()}},{key:"_getMetadata",value:function(){var e=this,t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,u.default)("".concat("https://dev.virtualearth.net","/REST/v1/Imagery/Metadata/").concat(t),{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(t){var r=t.data;if(200!==r.statusCode)throw new(0,p.default)("bingmapslayer:getmetadata",r.statusDescription);if(e.bingMetadata=r,0===e.bingMetadata.resourceSets.length)throw new(0,p.default)("bingmapslayer:getmetadata","no bing resourcesets");if(0===e.bingMetadata.resourceSets[0].resources.length)throw new(0,p.default)("bingmapslayer:getmetadata","no bing resources")})).catch((function(e){throw new(0,p.default)("bingmapslayer:getmetadata",e.message)}))}},{key:"_getPortalBingKey",value:function(){var e=this;return(0,u.default)(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(t){if(!t.data.bingKey)throw new(0,p.default)("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");e.key=t.data.bingKey})).catch((function(e){throw new(0,p.default)("bingmapslayer:getportalbingkey",e.message)}))}},{key:"_getQuadKey",value:function(e,t,r){for(var a="",o=e;o>0;o--){var n=0,l=1<<o-1;0!=(r&l)&&(n+=1),0!=(t&l)&&(n+=2),a+=n.toString()}return a}}]),a}((0,h.BlendLayer)((0,m.OperationalLayer)((0,c.MultiOriginJSONMixin)(b.default))));(0,s._)([(0,g.property)({json:{read:!1,write:!1},value:null})],S.prototype,"bingMetadata",null),(0,s._)([(0,g.property)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],S.prototype,"type",void 0),(0,s._)([(0,g.property)({type:M.default})],S.prototype,"tileInfo",void 0),(0,s._)([(0,g.property)({type:String,readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"copyright",null),(0,s._)([(0,g.property)({type:String,json:{write:!1,read:!1}})],S.prototype,"key",void 0),(0,s._)([(0,g.property)({type:w.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:w.read}}})],S.prototype,"style",void 0),(0,s._)([(0,g.property)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],S.prototype,"operationalLayerType",null),(0,s._)([(0,g.property)({type:String,json:{write:!1,read:!1}})],S.prototype,"culture",void 0),(0,s._)([(0,g.property)({type:String,json:{write:!1,read:!1}})],S.prototype,"region",void 0),(0,s._)([(0,g.property)({type:String,json:{write:!0,read:!0}})],S.prototype,"portalUrl",void 0),(0,s._)([(0,g.property)({type:Boolean,json:{write:!1,read:!1}})],S.prototype,"hasAttributionData",void 0),(0,s._)([(0,g.property)({type:String,readOnly:!0})],S.prototype,"bingLogo",null);var _=S=(0,s._)([(0,f.subclass)("esri.layers.BingMapsLayer")],S)})),r.register("h1GQv",(function(e,a){t(e.exports,"default",(function(){return M}));var o=r("8TSCy"),n=r("7eJjO"),l=r("9pNSx"),i=r("kyj08"),s=r("iho5X");r("lNwWH"),r("2VlWd"),r("iJAIC");var u=r("fcwIv"),p=r("gINRd"),d=r("j40xv"),y=r("8TwEW"),c=r("4LDxK"),g=r("gIXJ2"),f=r("13Qxf"),v=r("3GzOb"),b=r("xQ42o"),h={id:"0/0/0",level:0,row:0,col:0,extent:null},m=function(e){"use strict";o.inherits(r,e);var t=o.createSuper(r);function r(){var e;return o.classCallCheck(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments)))).tileInfo=b.default.create({spatialReference:d.default.WebMercator,size:256}),e.type="base-tile",e.fullExtent=new(0,p.default)(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,d.default.WebMercator),e.spatialReference=d.default.WebMercator,o.possibleConstructorReturn(e)}return o.createClass(r,[{key:"getTileBounds",value:function(e,t,r,a){var o=a||(0,y.create)();return h.level=e,h.row=t,h.col=r,h.extent=o,this.tileInfo.updateTileInfo(h),h.extent=null,o}},{key:"fetchTile",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=a.signal,i=this.getTileUrl(e,t,r),s={responseType:"image",signal:n,query:o.objectSpread({},this.refreshParameters)};return(0,l.default)(i,s).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(){throw new(0,i.default)("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}}]),r}((0,g.BlendLayer)((0,v.ScaleRangeLayer)((0,f.RefreshableLayer)(c.default))));(0,n._)([(0,s.property)({type:b.default})],m.prototype,"tileInfo",void 0),(0,n._)([(0,s.property)({type:["show","hide"]})],m.prototype,"listMode",void 0),(0,n._)([(0,s.property)({readOnly:!0,value:"base-tile"})],m.prototype,"type",void 0),(0,n._)([(0,s.property)({nonNullable:!0})],m.prototype,"fullExtent",void 0),(0,n._)([(0,s.property)()],m.prototype,"spatialReference",void 0);var M=m=(0,n._)([(0,u.subclass)("esri.layers.BaseTileLayer")],m)}))}();
//# sourceMappingURL=BingMapsLayer.514fd544.js.map