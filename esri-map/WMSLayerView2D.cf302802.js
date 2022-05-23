!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;r.register("hpGBw",(function(n,i){var s;s=n.exports,Object.defineProperty(s,"__esModule",{value:!0,configurable:!0}),t(n.exports,"default",(function(){return R}));var a=r("8TSCy"),o=r("2TvXO"),u=r("7eJjO"),l=r("jHOLN"),c=r("10vEZ"),h=r("lKPaD"),f=r("iho5X");r("lNwWH"),r("2VlWd"),r("iJAIC");var d=r("fcwIv"),p=r("gINRd"),v=r("1UuUA"),y=r("dIFqf"),x=r("3UAL3"),g=r("30vBn"),m=r("hfthk"),_=r("ltQfE"),b=l.default.getLogger("esri.views.2d.layers.WMSLayerView2D"),w=function(t){"use strict";a.inherits(n,t);var r=a.createSuper(n);function n(){var e;return a.classCallCheck(this,n),(e=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).container=new(0,v.BitmapContainer),a.possibleConstructorReturn(e)}return a.createClass(n,[{key:"supportsSpatialReference",value:function(e){return this.layer.serviceSupportsSpatialReference(e)}},{key:"update",value:function(e){this.strategy.update(e).catch((function(e){(0,c.isAbortError)(e)||b.error(e)}))}},{key:"attach",value:function(){var e=this,t=this.layer,r=this.container,n=t.imageMaxHeight,i=t.imageMaxWidth;this.strategy=new(0,x.default)({container:r,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:n,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add((0,h.watch)((function(){return e.exportImageVersion}),(function(){return e.requestUpdate()})),"exportImageVersion")}},{key:"detach",value:function(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}},{key:"moveStart",value:function(){}},{key:"viewChange",value:function(){}},{key:"moveEnd",value:function(){this.requestUpdate()}},{key:"createFetchPopupFeaturesQuery",value:function(e){var t=this.view,r=this.container,n=e.x,i=e.y,s=t.spatialReference,a=null,o=0,u=0;if(r.children.some((function(e){var t=e.width,r=e.height,l=e.resolution,c=e.x,h=e.y,f=c+l*t,d=h-l*r;return n>=c&&n<=f&&i<=h&&i>=d&&(a=new(0,p.default)({xmin:c,ymin:d,xmax:f,ymax:h,spatialReference:s}),o=t,u=r,!0)})),!a)return null;var l=a.width/o,c=Math.round((n-a.xmin)/l),h=Math.round((a.ymax-i)/l);return{extent:a,width:o,height:u,x:c,y:h}}},{key:"doRefresh",value:function(){var t=this;return a.asyncToGenerator(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.requestUpdate();case 1:case"end":return e.stop()}}),r)})))()}},{key:"isUpdating",value:function(){return this.strategy.updating||this.updateRequested}},{key:"fetchImage",value:function(e,t,r,n){return this.layer.fetchImage(e,t,r,a.objectSpread({timeExtent:this.timeExtent},n))}}]),n}((0,_.WMSLayerView)((0,m.RefreshableLayerView)((0,y.LayerView2DMixin)(g.default))));(0,u._)([(0,f.property)()],w.prototype,"strategy",void 0),(0,u._)([(0,f.property)()],w.prototype,"updating",void 0);var R=w=(0,u._)([(0,d.subclass)("esri.views.2d.layers.WMSLayerView2D")],w)})),r.register("1UuUA",(function(e,n){t(e.exports,"BitmapContainer",(function(){return o}));var i=r("8TSCy"),s=r("jhrt5"),a=r("66IJZ"),o=function(e){"use strict";i.inherits(r,e);var t=i.createSuper(r);function r(){return i.classCallCheck(this,r),t.apply(this,arguments)}return i.createClass(r,[{key:"requiresDedicatedFBO",get:function(){return this.children.some((function(e){return"additive"===e.blendFunction}))}},{key:"prepareRenderPasses",value:function(e){var t=this,n=e.registerRenderPass({name:"bitmap",brushes:[s.brushes.bitmap],target:function(){return t.children},drawPhase:a.WGLDrawPhase.MAP});return i.toConsumableArray(i.get(i.getPrototypeOf(r.prototype),"prepareRenderPasses",this).call(this,e)).concat([n])}}]),r}(r("3FBIK").default)})),r.register("hfthk",(function(e,n){t(e.exports,"RefreshableLayerView",(function(){return h}));var i=r("8TSCy"),s=r("7eJjO"),a=r("jHOLN"),o=r("10vEZ"),u=r("lKPaD"),l=r("iho5X");r("lNwWH"),r("2VlWd"),r("iJAIC");var c=r("fcwIv"),h=function(e){var t=function(e){"use strict";i.inherits(r,e);var t=i.createSuper(r);function r(){return i.classCallCheck(this,r),t.apply(this,arguments)}return i.createClass(r,[{key:"initialize",value:function(){var e=this;this.handles.add((0,u.on)((function(){return e.layer}),"refresh",(function(t){var r=e;e.doRefresh(t.dataChanged).catch((function(e){(0,o.isAbortError)(e)||a.default.getLogger(r.declaredClass).error(e)}))})),"RefreshableLayerView")}}]),r}(e);return(0,s._)([(0,l.property)()],t.prototype,"layer",void 0),t=(0,s._)([(0,c.subclass)("esri.layers.mixins.RefreshableLayerView")],t)}})),r.register("ltQfE",(function(e,n){t(e.exports,"WMSLayerView",(function(){return h}));var i=r("8TSCy"),s=r("7eJjO"),a=r("kyj08"),o=r("iho5X");r("lNwWH"),r("2VlWd"),r("iJAIC");var u=r("fcwIv"),l=r("gRgX5"),c=r("8gDfE"),h=function(e){var t=function(e){"use strict";i.inherits(r,e);var t=i.createSuper(r);function r(){return i.classCallCheck(this,r),t.apply(this,arguments)}return i.createClass(r,[{key:"initialize",value:function(){this.exportImageParameters=new(0,c.ExportWMSImageParameters)({layer:this.layer})}},{key:"destroy",value:function(){this.exportImageParameters.destroy(),this.exportImageParameters=null}},{key:"exportImageVersion",get:function(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}},{key:"fetchPopupFeatures",value:function(e){var t=this.layer;if(!e)return Promise.reject(new(0,a.default)("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));var r=t.popupEnabled;if(!r)return Promise.reject(new(0,a.default)("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:r}));var n=this.createFetchPopupFeaturesQuery(e);if(!n)return Promise.resolve([]);var i=n.extent,s=n.width,o=n.height,u=n.x,l=n.y;if(!(i&&s&&o))throw new(0,a.default)("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:s,height:o});var c=t.fetchFeatureInfo(i,s,o,u,l);return Promise.resolve(c?[c]:[])}}]),r}(e);return(0,s._)([(0,o.property)()],t.prototype,"exportImageParameters",void 0),(0,s._)([(0,o.property)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,s._)([(0,o.property)()],t.prototype,"layer",void 0),(0,s._)([(0,o.property)(l.combinedViewLayerTimeExtentProperty)],t.prototype,"timeExtent",void 0),t=(0,s._)([(0,u.subclass)("esri.layers.mixins.WMSLayerView")],t)}})),r.register("8gDfE",(function(e,n){t(e.exports,"ExportWMSImageParameters",(function(){return h}));var i=r("8TSCy"),s=r("7eJjO"),a=r("jymfC"),o=r("6dXDO"),u=r("iho5X");r("lNwWH"),r("2VlWd"),r("iJAIC");var l=r("fcwIv"),c={visible:"visibleSublayers"},h=function(e){"use strict";i.inherits(r,e);var t=i.createSuper(r);function r(e){var n;return i.classCallCheck(this,r),(n=t.call(this,e)).scale=0,i.possibleConstructorReturn(n)}return i.createClass(r,[{key:"layer",set:function(e){var t=this;this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",(function(){return t.notifyChange("visibleSublayers")})),e.on("wms-sublayer-update",(function(e){return t.notifyChange(c[e.propertyName])}))],"layer"))}},{key:"layers",get:function(){return this.visibleSublayers.filter((function(e){return e.name})).map((function(e){return e.name})).join(",")}},{key:"version",get:function(){this.commitProperty("layers");var e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}},{key:"visibleSublayers",get:function(){var e=this.layer,t=this.scale,r=null==e?void 0:e.sublayers,n=[],i=function(e){var r=e.minScale,s=e.maxScale,a=e.sublayers;e.visible&&(0===t||(0===r||t<=r)&&(0===s||t>=s))&&(a?a.forEach(i):n.unshift(e))};return null==r||r.forEach(i),n}},{key:"toJSON",value:function(){var e=this.layer,t=this.layers;return{format:e.imageFormat,request:"GetMap",service:"WMS",styles:"",transparent:e.imageTransparency?"TRUE":"FALSE",version:e.version,layers:t}}}]),r}((0,o.HandleOwnerMixin)(a.default));(0,s._)([(0,u.property)()],h.prototype,"layer",null),(0,s._)([(0,u.property)({readOnly:!0})],h.prototype,"layers",null),(0,s._)([(0,u.property)({type:Number})],h.prototype,"scale",void 0),(0,s._)([(0,u.property)({readOnly:!0})],h.prototype,"version",null),(0,s._)([(0,u.property)({readOnly:!0})],h.prototype,"visibleSublayers",null),h=(0,s._)([(0,l.subclass)("esri.layers.support.ExportWMSImageParameters")],h)})),r.register("8lbQw",(function(e,r){t(e.exports,"u32to4Xu8",(function(){return i})),t(e.exports,"i1616to32",(function(){return s})),t(e.exports,"i8888to32",(function(){return a}));var n=new Float32Array(1);new Uint32Array(n.buffer);function i(e){return[255&e,(65280&e)>>>8,(16711680&e)>>>16,(4278190080&e)>>>24]}function s(e,t){return 65535&e|t<<16}function a(e,t,r,n){return 255&e|(255&t)<<8|(255&r)<<16|n<<24}})),r.register("6S0qa",(function(e,r){var n,i,s,a;function o(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":case"justify":return n.Center}}function u(e){switch(e){case"top":return i.Top;case"middle":return i.Center;case"baseline":return i.Baseline;case"bottom":return i.Bottom}}function l(e){switch(e){case"above-left":case"esriServerPointLabelPlacementAboveLeft":return[n.Right,i.Bottom];case"above-center":case"above-along":case"esriServerPointLabelPlacementAboveCenter":case"esriServerLinePlacementAboveAlong":return[n.Center,i.Bottom];case"above-right":case"esriServerPointLabelPlacementAboveRight":return[n.Left,i.Bottom];case"center-left":case"esriServerPointLabelPlacementCenterLeft":return[n.Right,i.Center];case"center-center":case"center-along":case"esriServerPointLabelPlacementCenterCenter":case"esriServerLinePlacementCenterAlong":case"always-horizontal":case"esriServerPolygonPlacementAlwaysHorizontal":return[n.Center,i.Center];case"center-right":case"esriServerPointLabelPlacementCenterRight":return[n.Left,i.Center];case"below-left":case"esriServerPointLabelPlacementBelowLeft":return[n.Right,i.Top];case"below-center":case"below-along":case"esriServerPointLabelPlacementBelowCenter":case"esriServerLinePlacementBelowAlong":return[n.Center,i.Top];case"below-right":case"esriServerPointLabelPlacementBelowRight":return[n.Left,i.Top];default:return console.debug("Found invalid placement type ".concat(e)),[n.Center,i.Center]}}function c(e){switch(e){case n.Right:return-1;case n.Center:return 0;case n.Left:return 1;default:return console.debug("Found invalid horizontal alignment ".concat(e)),0}}function h(e){switch(e){case i.Top:return 1;case i.Center:return 0;case i.Bottom:case i.Baseline:return-1;default:return console.debug("Found invalid vertical alignment ".concat(e)),0}}function f(e){switch(e){case"left":return n.Left;case"right":return n.Right;case"center":case"justify":return n.Center}}function d(e){switch(e){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}t(e.exports,"HAlign",(function(){return n})),t(e.exports,"VAlign",(function(){return i})),t(e.exports,"getXAnchorDirection",(function(){return o})),t(e.exports,"getYAnchorDirection",(function(){return u})),t(e.exports,"getAlignmentFromPlacement",(function(){return l})),t(e.exports,"getXDirection",(function(){return c})),t(e.exports,"getYDirection",(function(){return h})),t(e.exports,"getJustification",(function(){return f})),t(e.exports,"isMapAligned",(function(){return d})),(a=n||(n={}))[a.Left=-1]="Left",a[a.Center=0]="Center",a[a.Right=1]="Right",(s=i||(i={}))[s.Top=1]="Top",s[s.Center=0]="Center",s[s.Bottom=-1]="Bottom",s[s.Baseline=2]="Baseline"})),r.register("iTfMY",(function(e,r){t(e.exports,"radToByte",(function(){return o})),t(e.exports,"degToByte",(function(){return u})),t(e.exports,"log2",(function(){return l})),t(e.exports,"between",(function(){return c}));Number.POSITIVE_INFINITY;var n=Math.PI,i=128/n,s=1/Math.LN2;function a(e,t){return(e%=t)>=0?e:e+t}function o(e){return a(e*i,256)}function u(e){return a(.7111111111111111*e,256)}function l(e){return Math.log(e)*s}function c(e,t,r){return e>=t&&e<=r||e>=r&&e<=t}})),r.register("2ndsO",(function(e,r){t(e.exports,"e",(function(){return a}));var n,i,s={exports:{}};n=s,void 0!==(i=function(){function e(e,i,s){s=s||2;var a,o,l,h,f,p,v,y=i&&i.length,x=y?i[0]*s:e.length,g=t(e,0,x,s,!0),m=[];if(!g||g.next===g.prev)return m;if(y&&(g=function(e,n,i,s){var a,o,l,h=[];for(a=0,o=n.length;a<o;a++)(l=t(e,n[a]*s,a<o-1?n[a+1]*s:e.length,s,!1))===l.next&&(l.steiner=!0),h.push(d(l));for(h.sort(u),a=0;a<h.length;a++)i=r(i=c(h[a],i),i.next);return i}(e,i,g,s)),e.length>80*s){a=l=e[0],o=h=e[1];for(var _=s;_<x;_+=s)(f=e[_])<a&&(a=f),(p=e[_+1])<o&&(o=p),f>l&&(l=f),p>h&&(h=p);v=0!==(v=Math.max(l-a,h-o))?1/v:0}return n(g,m,s,a,o,v),m}function t(e,t,r,n,i){var s,a;if(i===S(e,t,r,n)>0)for(s=t;s<r;s+=n)a=R(s,e[s],e[s+1],a);else for(s=r-n;s>=t;s-=n)a=R(s,e[s],e[s+1],a);if(a&&x(a,a.next)){var o=a.next;k(a),a=o}return a}function r(e,t){if(!e)return e;t||(t=e);var r,n=e;do{if(r=!1,n.steiner||!x(n,n.next)&&0!==y(n.prev,n,n.next))n=n.next;else{var i=n.prev;if(k(n),(n=t=i)===n.next)break;r=!0}}while(r||n!==t);return t}function n(e,t,u,l,c,h,d){if(e){!d&&h&&function(e,t,r,n){var i=e;do{null===i.z&&(i.z=f(i.x,i.y,t,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,function(e){var t,r,n,i,s,a,o,u,l=1;do{for(r=e,e=null,s=null,a=0;r;){for(a++,n=r,o=0,t=0;t<l&&(o++,n=n.nextZ);t++);for(u=l;o>0||u>0&&n;)0!==o&&(0===u||!n||r.z<=n.z)?(i=r,r=r.nextZ,o--):(i=n,n=n.nextZ,u--),s?s.nextZ=i:e=i,i.prevZ=s,s=i;r=n}s.nextZ=null,l*=2}while(a>1)}(i)}(e,l,c,h);for(var p,v,y=e;e.prev!==e.next;)if(p=e.prev,v=e.next,h?s(e,l,c,h):i(e))t.push(p.i/u),t.push(e.i/u),t.push(v.i/u),k(e),e=v.next,y=v.next;else if((e=v)===y){d?1===d?n(e=a(r(e),t,u),t,u,l,c,h,2):2===d&&o(e,t,u,l,c,h):n(r(e),t,u,l,c,h,1);break}}}function i(e){var t=e.prev,r=e,n=e.next;if(y(t,r,n)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(p(t.x,t.y,r.x,r.y,n.x,n.y,i.x,i.y)&&y(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function s(e,t,r,n){var i=e.prev,s=e,a=e.next;if(y(i,s,a)>=0)return!1;for(var o=i.x<s.x?i.x<a.x?i.x:a.x:s.x<a.x?s.x:a.x,u=i.y<s.y?i.y<a.y?i.y:a.y:s.y<a.y?s.y:a.y,l=i.x>s.x?i.x>a.x?i.x:a.x:s.x>a.x?s.x:a.x,c=i.y>s.y?i.y>a.y?i.y:a.y:s.y>a.y?s.y:a.y,h=f(o,u,t,r,n),d=f(l,c,t,r,n),v=e.prevZ,x=e.nextZ;v&&v.z>=h&&x&&x.z<=d;){if(v!==e.prev&&v!==e.next&&p(i.x,i.y,s.x,s.y,a.x,a.y,v.x,v.y)&&y(v.prev,v,v.next)>=0)return!1;if(v=v.prevZ,x!==e.prev&&x!==e.next&&p(i.x,i.y,s.x,s.y,a.x,a.y,x.x,x.y)&&y(x.prev,x,x.next)>=0)return!1;x=x.nextZ}for(;v&&v.z>=h;){if(v!==e.prev&&v!==e.next&&p(i.x,i.y,s.x,s.y,a.x,a.y,v.x,v.y)&&y(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=d;){if(x!==e.prev&&x!==e.next&&p(i.x,i.y,s.x,s.y,a.x,a.y,x.x,x.y)&&y(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function a(e,t,n){var i=e;do{var s=i.prev,a=i.next.next;!x(s,a)&&g(s,i,i.next,a)&&b(s,a)&&b(a,s)&&(t.push(s.i/n),t.push(i.i/n),t.push(a.i/n),k(i),k(i.next),i=e=a),i=i.next}while(i!==e);return r(i)}function o(e,t,i,s,a,o){var u=e;do{for(var l=u.next.next;l!==u.prev;){if(u.i!==l.i&&v(u,l)){var c=w(u,l);return u=r(u,u.next),c=r(c,c.next),n(u,t,i,s,a,o),void n(c,t,i,s,a,o)}l=l.next}u=u.next}while(u!==e)}function u(e,t){return e.x-t.x}function l(e){if(e.next.prev===e)return e;for(var t=e;;){var r=t.next;if(r.prev===t||r===t||r===e)break;t=r}return t}function c(e,t){var n=function(e,t){var r,n=t,i=e.x,s=e.y,a=-1/0;do{if(s<=n.y&&s>=n.next.y&&n.next.y!==n.y){var o=n.x+(s-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(o<=i&&o>a){if(a=o,o===i){if(s===n.y)return n;if(s===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!r)return null;if(i===a)return r;var u,l=r,c=r.x,f=r.y,d=1/0;n=r;do{i>=n.x&&n.x>=c&&i!==n.x&&p(s<f?i:a,s,c,f,s<f?a:i,s,n.x,n.y)&&(u=Math.abs(s-n.y)/(i-n.x),b(n,e)&&(u<d||u===d&&(n.x>r.x||n.x===r.x&&h(r,n)))&&(r=n,d=u)),n=n.next}while(n!==l);return r}(e,t);if(!n)return t;var i=w(n,e),s=r(n,n.next),a=l(i);return r(a,a.next),s=l(s),l(t===n?s:t)}function h(e,t){return y(e.prev,e,t.prev)<0&&y(t.next,e,e.next)<0}function f(e,t,r,n,i){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*i)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-n)*i)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function d(e){var t=e,r=e;do{(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next}while(t!==e);return r}function p(e,t,r,n,i,s,a,o){return(i-a)*(t-o)-(e-a)*(s-o)>=0&&(e-a)*(n-o)-(r-a)*(t-o)>=0&&(r-a)*(s-o)-(i-a)*(n-o)>=0}function v(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&g(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}(e,t)&&(b(e,t)&&b(t,e)&&function(e,t){var r=e,n=!1,i=(e.x+t.x)/2,s=(e.y+t.y)/2;do{r.y>s!=r.next.y>s&&r.next.y!==r.y&&i<(r.next.x-r.x)*(s-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==e);return n}(e,t)&&(y(e.prev,e,t.prev)||y(e,t.prev,t))||x(e,t)&&y(e.prev,e,e.next)>0&&y(t.prev,t,t.next)>0)}function y(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function x(e,t){return e.x===t.x&&e.y===t.y}function g(e,t,r,n){var i=_(y(e,t,r)),s=_(y(e,t,n)),a=_(y(r,n,e)),o=_(y(r,n,t));return i!==s&&a!==o||!(0!==i||!m(e,r,t))||!(0!==s||!m(e,n,t))||!(0!==a||!m(r,e,n))||!(0!==o||!m(r,t,n))}function m(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function _(e){return e>0?1:e<0?-1:0}function b(e,t){return y(e.prev,e,e.next)<0?y(e,t,e.next)>=0&&y(e,e.prev,t)>=0:y(e,t,e.prev)<0||y(e,e.next,t)<0}function w(e,t){var r=new C(e.i,e.x,e.y),n=new C(t.i,t.x,t.y),i=e.next,s=t.prev;return e.next=t,t.prev=e,r.next=i,i.prev=r,n.next=r,r.prev=n,s.next=n,n.prev=s,n}function R(e,t,r,n){var i=new C(e,t,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function k(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function C(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function S(e,t,r,n){for(var i=0,s=t,a=r-n;s<r;s+=n)i+=(e[a]-e[s])*(e[s+1]+e[a+1]),a=s;return i}return e.deviation=function(e,t,r,n){var i=t&&t.length,s=i?t[0]*r:e.length,a=Math.abs(S(e,0,s,r));if(i)for(var o=0,u=t.length;o<u;o++){var l=t[o]*r,c=o<u-1?t[o+1]*r:e.length;a-=Math.abs(S(e,l,c,r))}var h=0;for(o=0;o<n.length;o+=3){var f=n[o]*r,d=n[o+1]*r,p=n[o+2]*r;h+=Math.abs((e[f]-e[p])*(e[d+1]-e[f+1])-(e[f]-e[d])*(e[p+1]-e[f+1]))}return 0===a&&0===h?0:Math.abs((h-a)/a)},e.flatten=function(e){for(var t=e[0][0].length,r={vertices:[],holes:[],dimensions:t},n=0,i=0;i<e.length;i++){for(var s=0;s<e[i].length;s++)for(var a=0;a<t;a++)r.vertices.push(e[i][s][a]);i>0&&(n+=e[i-1].length,r.holes.push(n))}return r},e}())&&(n.exports=i);var a=s.exports})),r.register("ebEEs",(function(e,r){t(e.exports,"DECLUTTER_TILES",(function(){return n})),t(e.exports,"COLLISION_GRID_CELL_SIZE",(function(){return i})),t(e.exports,"DECLUTTER_BUDGET",(function(){return s})),t(e.exports,"FADE_DURATION",(function(){return a}));var n=!0,i=32,s=1.5,a=200})),r.register("cOrC4",(function(e,n){t(e.exports,"Container",(function(){return o}));var i=r("8TSCy"),s=r("eYrMi"),a=r("a4nX6"),o=function(e){"use strict";i.inherits(r,e);var t=i.createSuper(r);function r(){var e;return i.classCallCheck(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments))))._childrenSet=new Set,e._needsSort=!1,e.children=[],e._effectView=null,i.possibleConstructorReturn(e)}return i.createClass(r,[{key:"blendMode",get:function(){return this._blendMode},set:function(e){this._blendMode=e,this.requestRender()}},{key:"clips",get:function(){return this._clips},set:function(e){this._clips=e,this.children.forEach((function(t){return t.clips=e}))}},{key:"computedEffects",get:function(){var e,t;return null!=(e=null==(t=this._effectView)?void 0:t.effects)?e:null}},{key:"effect",get:function(){var e,t;return null!=(e=null==(t=this._effectView)?void 0:t.effect)?e:""},set:function(e){(this._effectView||e)&&(this._effectView||(this._effectView=new(0,a.EffectView)),this._effectView.effect=e,this.requestRender())}},{key:"updateTransitionProperties",value:function(e,t){i.get(i.getPrototypeOf(r.prototype),"updateTransitionProperties",this).call(this,e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}},{key:"doRender",value:function(e){var t=this.createRenderParams(e);this.renderChildren(t)}},{key:"addChild",value:function(e){return this.addChildAt(e,this.children.length)}},{key:"addChildAt",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.children.length;if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;var r=e.parent;return r&&r!==this&&r.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}},{key:"contains",value:function(e){return this._childrenSet.has(e)}},{key:"removeAllChildren",value:function(){this._childrenSet.clear(),this._needsSort=!0;var e=!0,t=!1,r=void 0;try{for(var n,i=this.children[Symbol.iterator]();!(e=(n=i.next()).done);e=!0){var s=n.value;this!==this.stage&&(s.clips=null),s.stage=null,s.parent=null}}catch(e){t=!0,r=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw r}}this.children.length=0}},{key:"removeChild",value:function(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}},{key:"removeChildAt",value:function(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;var t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}},{key:"sortChildren",value:function(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}},{key:"_createTransforms",value:function(){return{dvs:(0,s.c)()}}},{key:"onAttach",value:function(){i.get(i.getPrototypeOf(r.prototype),"onAttach",this).call(this);var e=this.stage,t=!0,n=!1,s=void 0;try{for(var a,o=this.children[Symbol.iterator]();!(t=(a=o.next()).done);t=!0){a.value.stage=e}}catch(e){n=!0,s=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw s}}}},{key:"onDetach",value:function(){i.get(i.getPrototypeOf(r.prototype),"onDetach",this).call(this);var e=!0,t=!1,n=void 0;try{for(var s,a=this.children[Symbol.iterator]();!(e=(s=a.next()).done);e=!0){s.value.stage=null}}catch(e){t=!0,n=e}finally{try{e||null==a.return||a.return()}finally{if(t)throw n}}}},{key:"renderChildren",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,s=this.children[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){i.value.beforeRender(e)}}catch(e){r=!0,n=e}finally{try{t||null==s.return||s.return()}finally{if(r)throw n}}var a=!0,o=!1,u=void 0;try{for(var l,c=this.children[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){l.value.processRender(e)}}catch(e){o=!0,u=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw u}}var h=!0,f=!1,d=void 0;try{for(var p,v=this.children[Symbol.iterator]();!(h=(p=v.next()).done);h=!0){p.value.afterRender(e)}}catch(e){f=!0,d=e}finally{try{h||null==v.return||v.return()}finally{if(f)throw d}}}},{key:"createRenderParams",value:function(e){return i.objectSpread({},e,{blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition})}}]),r}(r("2qlsz").DisplayObject)})),r.register("2qlsz",(function(e,n){t(e.exports,"DisplayObject",(function(){return c}));var i=r("8TSCy"),s=r("amfHf"),a=r("2VlWd"),o=r("7qybv"),u=r("10vEZ"),l=1/(0,a.default)("mapview-transitions-duration"),c=function(e){"use strict";i.inherits(r,e);var t=i.createSuper(r);function r(){var e;return i.classCallCheck(this,r),(e=t.call.apply(t,[this].concat(Array.prototype.slice.call(arguments))))._fadeOutResolver=null,e._fadeInResolver=null,e._clips=null,e.computedVisible=!0,e.computedOpacity=1,e.fadeTransitionEnabled=!1,e.inFadeTransition=!1,e._isReady=!1,e._opacity=1,e._stage=null,e._visible=!0,i.possibleConstructorReturn(e)}return i.createClass(r,[{key:"clips",get:function(){return this._clips},set:function(e){this._clips=e,this.requestRender()}},{key:"isReady",get:function(){return this._isReady}},{key:"opacity",get:function(){return this._opacity},set:function(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender())}},{key:"stage",get:function(){return this._stage},set:function(e){if(this._stage!==e){var t=this._stage;this._stage=e,e?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t.trashDisplayObject(this)}}},{key:"transforms",get:function(){return this._getTransforms()}},{key:"_getTransforms",value:function(){return(0,o.isNone)(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}},{key:"visible",get:function(){return this._visible},set:function(e){this._visible!==e&&(this._visible=e,this.requestRender())}},{key:"fadeIn",value:function(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,u.createResolver)(),this.requestRender()),this._fadeInResolver.promise}},{key:"fadeOut",value:function(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,u.createResolver)(),this.requestRender()),this._fadeOutResolver.promise}},{key:"beforeRender",value:function(e){this.updateTransitionProperties(e.deltaTime,e.state.scale)}},{key:"afterRender",value:function(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}},{key:"remove",value:function(){var e;null==(e=this.parent)||e.removeChild(this)}},{key:"setTransform",value:function(e){}},{key:"processRender",value:function(e){this.stage&&this.computedVisible&&this.doRender(e)}},{key:"requestRender",value:function(){this.stage&&this.stage.requestRender()}},{key:"processDetach",value:function(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}},{key:"updateTransitionProperties",value:function(e,t){if(this.fadeTransitionEnabled){var r=this._fadeOutResolver||!this.visible?0:this.opacity,n=this.computedOpacity;if(n===r)this.computedVisible=this.visible;else{var i=e*l;this.computedOpacity=n>r?Math.max(r,n-i):Math.min(r,n+i),this.computedVisible=this.computedOpacity>0;var s=r===this.computedOpacity;this.inFadeTransition=!s,s||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}},{key:"onAttach",value:function(){}},{key:"onDetach",value:function(){}},{key:"doRender",value:function(e){}},{key:"ready",value:function(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}]),r}(s.default)})),r.register("1ScYs",(function(e,n){t(e.exports,"Bitmap",(function(){return p}));var i=r("8TSCy"),s=r("7qybv"),a=r("j3x2p"),o=r("eYrMi"),u=r("0P8XU"),l=r("2qlsz"),c=r("9rklz"),h=r("8JzMA"),f=r("8aBT4");function d(e,t,r){var n={target:h.TextureType.TEXTURE_2D,pixelFormat:h.PixelFormat.RGBA,internalFormat:h.PixelFormat.RGBA,dataType:h.PixelType.UNSIGNED_BYTE,wrapMode:h.TextureWrapMode.CLAMP_TO_EDGE};return t&&r&&(n.width=t,n.height=r),new(0,f.Texture)(e,n)}var p=function(e){"use strict";i.inherits(r,e);var t=i.createSuper(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,s=arguments.length>1?arguments[1]:void 0,a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return i.classCallCheck(this,r),(e=t.call(this)).requestRenderOnSourceChangedEnabled=a,e._textureInvalidated=!0,e.stencilRef=0,e.coordScale=[1,1],e._height=void 0,e.pixelRatio=1,e.resolution=0,e.rotation=0,e._source=null,e._width=void 0,e.x=0,e.y=0,e.blendFunction=s,e.source=n,e.requestRender=e.requestRender.bind(i.assertThisInitialized(e)),i.possibleConstructorReturn(e)}return i.createClass(r,[{key:"destroy",value:function(){this._texture&&(this._texture.dispose(),this._texture=null)}},{key:"isSourceScaled",get:function(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}},{key:"height",get:function(){return void 0!==this._height?this._height:this.sourceHeight},set:function(e){this._height=e}},{key:"source",get:function(){return this._source},set:function(e){this._source=e,this.invalidateTexture()}},{key:"sourceHeight",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}},{key:"sourceWidth",get:function(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}},{key:"width",get:function(){return void 0!==this._width?this._width:this.sourceWidth},set:function(e){this._width=e}},{key:"beforeRender",value:function(e){i.get(i.getPrototypeOf(r.prototype),"beforeRender",this).call(this,e),this.updateTexture(e.context)}},{key:"invalidateTexture",value:function(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}},{key:"_createTransforms",value:function(){return{dvs:(0,o.c)()}}},{key:"setTransform",value:function(e){var t=(0,a.b)(this.transforms.dvs),r=i.slicedToArray(e.toScreenNoRotation([0,0],[this.x,this.y]),2),n=r[0],s=r[1],o=this.resolution/this.pixelRatio/e.resolution,l=o*this.width,c=o*this.height,h=Math.PI*this.rotation/180;(0,a.c)(t,t,(0,u.f)(n,s)),(0,a.c)(t,t,(0,u.f)(l/2,c/2)),(0,a.r)(t,t,-h),(0,a.c)(t,t,(0,u.f)(-l/2,-c/2)),(0,a.j)(t,t,(0,u.f)(l,c)),(0,a.m)(this.transforms.dvs,e.displayViewMat3,t)}},{key:"setSamplingProfile",value:function(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}},{key:"bind",value:function(e,t){this._texture&&e.bindTexture(this._texture,t)}},{key:"updateTexture",value:function(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(this._textureInvalidated){this._textureInvalidated=!1,this._texture||(this.source?this._texture=d(e,this.sourceWidth,this.sourceHeight):this._texture=d(e));var r,n,i,a,o=this.source;if(o){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(a=o)&&"render"in a)if(o instanceof c.default){var u=o.getRenderedRasterPixels();this._texture.setData((0,s.isSome)(u)?u.renderedRasterPixels:null)}else this._texture.setData((n=o,(i=document.createElement("canvas")).width=n.width,i.height=n.height,n.render(i.getContext("2d")),i));else(r=o)&&!("render"in r)&&this._texture.setData(o);this.ready()}else this._texture.setData(null)}}},{key:"onAttach",value:function(){this.invalidateTexture()}},{key:"onDetach",value:function(){this.invalidateTexture()}}]),r}(l.DisplayObject)})),r.register("9rklz",(function(e,n){t(e.exports,"default",(function(){return a}));var i=r("8TSCy"),s=r("7qybv"),a=function(){"use strict";function e(t,r,n){i.classCallCheck(this,e),this.pixelBlock=t,this.extent=r,this.originalPixelBlock=n}return i.createClass(e,[{key:"width",get:function(){return(0,s.isSome)(this.pixelBlock)?this.pixelBlock.width:0}},{key:"height",get:function(){return(0,s.isSome)(this.pixelBlock)?this.pixelBlock.height:0}},{key:"render",value:function(e){var t=this.pixelBlock;if(!(0,s.isNone)(t)){var r=this.filter({pixelBlock:t});if(!(0,s.isNone)(r.pixelBlock)){var n=r.pixelBlock.getAsRGBA(),i=e.createImageData(r.pixelBlock.width,r.pixelBlock.height);i.data.set(n),e.putImageData(i,0,0)}}}},{key:"getRenderedRasterPixels",value:function(){var e=this.filter({pixelBlock:this.pixelBlock});return(0,s.isNone)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}]),e}()}))}();
//# sourceMappingURL=WMSLayerView2D.cf302802.js.map