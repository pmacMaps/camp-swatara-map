!function(){function t(t){return t&&t.__esModule?t.default:t}function i(t,i,e,s){Object.defineProperty(t,i,{get:e,set:s,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;e.register("fb8De",(function(s,n){i(s.exports,"loadLibtess",(function(){return o})),i(s.exports,"triangulate",(function(){return f}));var r=e("8TSCy"),h=e("2TvXO"),a=e("i9j5X"),l=e("2VlWd"),x=null,y=null;function o(){return u.apply(this,arguments)}function u(){return(u=r.asyncToGenerator(t(h).mark((function i(){return t(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(x||(x=c()),x));case 1:case"end":return t.stop()}}),i)})))).apply(this,arguments)}function c(){return v.apply(this,arguments)}function v(){return(v=r.asyncToGenerator(t(h).mark((function i(){var s;return t(h).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(0,l.default)("esri-csp-restrictions")){t.next=6;break}return t.next=3,e("2ZjnQ").then((function(t){return t.l}));case 3:t.t0=t.sent,t.next=9;break;case 6:return t.next=8,e("65Bcs").then((function(t){return t.l}));case 8:t.t0=t.sent;case 9:return s=t.t0,t.next=12,s.load({locateFile:function(){return(0,a.getAssetUrl)("esri/core/libs/libtess/libtess.wasm")}});case 12:y=t.sent;case 13:case"end":return t.stop()}}),i)})))).apply(this,arguments)}function f(t,i){var e=Math.max(t.length,128e3);return y.triangulate(t,i,e)}})),e.register("2ZjnQ",(function(t,i){t.exports=e("4WKyX")(e("aNJCr").getBundleURL("16ztO")+e("iE7OH").resolve("6NR5v")).then((function(){return e("bPpSr")}))})),e.register("4WKyX",(function(t,i){"use strict";var s=e("2prpb");t.exports=s((function(t){return new Promise((function(i,e){var s=document.getElementsByTagName("script");if([].concat(s).some((function(i){return i.src===t})))i();else{var n=document.createElement("link");n.href=t,n.rel="preload",n.as="script",document.head.appendChild(n);var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=t,r.onerror=function(i){var s=new TypeError("Failed to fetch dynamically imported module: ".concat(t,". Error: ").concat(i.message));r.onerror=r.onload=null,r.remove(),e(s)},r.onload=function(){r.onerror=r.onload=null,i()},document.getElementsByTagName("head")[0].appendChild(r)}}))}))})),e.register("2prpb",(function(t,i){"use strict";var e={},s={},n={};function r(t){switch(t){case"preload":return s;case"prefetch":return n;default:return e}}t.exports=function(t,i){return function(e){var s=r(i);return s[e]?s[e]:s[e]=t.apply(null,arguments).catch((function(t){throw delete s[e],t}))}}})),e.register("aNJCr",(function(t,e){var s;i(t.exports,"getBundleURL",(function(){return s}),(function(t){return s=t}));var n={};function r(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}s=function(t){var i=n[t];return i||(i=function(){try{throw new Error}catch(i){var t=(""+i.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return r(t[2])}return"/"}(),n[t]=i),i}})),e.register("iE7OH",(function(t,e){var s,n;i(t.exports,"register",(function(){return s}),(function(t){return s=t})),i(t.exports,"resolve",(function(){return n}),(function(t){return n=t}));var r={};s=function(t){for(var i=Object.keys(t),e=0;e<i.length;e++)r[i[e]]=t[i[e]]},n=function(t){var i=r[t];if(null==i)throw new Error("Could not resolve bundle with id "+t);return i}})),e.register("65Bcs",(function(t,i){t.exports=e("4WKyX")(e("aNJCr").getBundleURL("16ztO")+e("iE7OH").resolve("5N1h7")).then((function(){return e("3CnDM")}))})),e.register("eCSGR",(function(t,s){i(t.exports,"TileClipper",(function(){return o})),i(t.exports,"SimpleBuilder",(function(){return u}));var n,r,h=e("8TSCy"),a=e("4WoSm"),l=e("ljf2P"),x=e("iTfMY"),y=function t(i,e,s){"use strict";h.classCallCheck(this,t),this.ratio=i,this.x=e,this.y=s},o=function(){"use strict";function t(i,e,s){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:8;h.classCallCheck(this,t),this.lines=[],this.starts=[],this.validateTessellation=!0,this.pixelRatio=n,this.pixelMargin=r,this.tileSize=a.TILE_SIZE*n,this.dz=i,this.yPos=e,this.xPos=s}return h.createClass(t,[{key:"setPixelMargin",value:function(t){t!==this.pixelMargin&&(this.pixelMargin=t,this.setExtent(this._extent))}},{key:"setExtent",value:function(t){this._extent=t,this.finalRatio=this.tileSize/t*(1<<this.dz);var i=this.pixelRatio*this.pixelMargin;i/=this.finalRatio;var e=t>>this.dz;i>e&&(i=e),this.margin=i,this.xmin=e*this.xPos-i,this.ymin=e*this.yPos-i,this.xmax=this.xmin+e+2*i,this.ymax=this.ymin+e+2*i}},{key:"reset",value:function(t){this.type=t,this.lines=[],this.starts=[],this.line=null,this.start=0}},{key:"moveTo",value:function(t,i){this._pushLine(),this._prevIsIn=this._isIn(t,i),this._moveTo(t,i,this._prevIsIn),this._prevPt=new(0,l.Point)(t,i),this._firstPt=new(0,l.Point)(t,i),this._dist=0}},{key:"lineTo",value:function(t,i){var e,s,n,r,h,a,x,o,u=this._isIn(t,i),c=new(0,l.Point)(t,i),v=l.Point.distance(this._prevPt,c);if(u)this._prevIsIn?this._lineTo(t,i,!0):(e=this._prevPt,s=c,n=this._intersect(s,e),this.start=this._dist+v*(1-this._r),this._lineTo(n.x,n.y,!0),this._lineTo(s.x,s.y,!0));else if(this._prevIsIn)s=this._prevPt,e=c,n=this._intersect(s,e),this._lineTo(n.x,n.y,!0),this._lineTo(e.x,e.y,!1);else{var f=this._prevPt,p=c;if(f.x<=this.xmin&&p.x<=this.xmin||f.x>=this.xmax&&p.x>=this.xmax||f.y<=this.ymin&&p.y<=this.ymin||f.y>=this.ymax&&p.y>=this.ymax)this._lineTo(p.x,p.y,!1);else{var m=[];if((f.x<this.xmin&&p.x>this.xmin||f.x>this.xmin&&p.x<this.xmin)&&(r=(this.xmin-f.x)/(p.x-f.x),(o=f.y+r*(p.y-f.y))<=this.ymin?a=!1:o>=this.ymax?a=!0:m.push(new y(r,this.xmin,o))),(f.x<this.xmax&&p.x>this.xmax||f.x>this.xmax&&p.x<this.xmax)&&(r=(this.xmax-f.x)/(p.x-f.x),(o=f.y+r*(p.y-f.y))<=this.ymin?a=!1:o>=this.ymax?a=!0:m.push(new y(r,this.xmax,o))),(f.y<this.ymin&&p.y>this.ymin||f.y>this.ymin&&p.y<this.ymin)&&(r=(this.ymin-f.y)/(p.y-f.y),(x=f.x+r*(p.x-f.x))<=this.xmin?h=!1:x>=this.xmax?h=!0:m.push(new y(r,x,this.ymin))),(f.y<this.ymax&&p.y>this.ymax||f.y>this.ymax&&p.y<this.ymax)&&(r=(this.ymax-f.y)/(p.y-f.y),(x=f.x+r*(p.x-f.x))<=this.xmin?h=!1:x>=this.xmax?h=!0:m.push(new y(r,x,this.ymax))),0===m.length)h?a?this._lineTo(this.xmax,this.ymax,!0):this._lineTo(this.xmax,this.ymin,!0):a?this._lineTo(this.xmin,this.ymax,!0):this._lineTo(this.xmin,this.ymin,!0);else if(m.length>1&&m[0].ratio>m[1].ratio)this.start=this._dist+v*m[1].ratio,this._lineTo(m[1].x,m[1].y,!0),this._lineTo(m[0].x,m[0].y,!0);else{this.start=this._dist+v*m[0].ratio;for(var d=0;d<m.length;d++)this._lineTo(m[d].x,m[d].y,!0)}this._lineTo(p.x,p.y,!1)}}this._dist+=v,this._prevIsIn=u,this._prevPt=c}},{key:"close",value:function(){if(this.line.length>2){var t=this._firstPt,i=this._prevPt;t.x===i.x&&t.y===i.y||this.lineTo(t.x,t.y);for(var e=this.line,s=e.length;s>=4&&(e[0].x===e[1].x&&e[0].x===e[s-2].x||e[0].y===e[1].y&&e[0].y===e[s-2].y);)e.pop(),e[0].x=e[s-2].x,e[0].y=e[s-2].y,--s}}},{key:"result",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this._pushLine(),0===this.lines.length?null:(this.type===l.GeometryType.Polygon&&t&&c.simplify(this.tileSize,this.margin*this.finalRatio,this.lines),this.lines)}},{key:"resultWithStarts",value:function(){if(this.type!==l.GeometryType.LineString)throw new Error("Only valid for lines");this._pushLine();var t=this.lines,i=t.length;if(0===i)return null;for(var e=[],s=0;s<i;s++)e.push({line:t[s],start:this.starts[s]||0});return e}},{key:"_isIn",value:function(t,i){return t>=this.xmin&&t<=this.xmax&&i>=this.ymin&&i<=this.ymax}},{key:"_intersect",value:function(t,i){var e,s,n;if(i.x>=this.xmin&&i.x<=this.xmax)n=((s=i.y<=this.ymin?this.ymin:this.ymax)-t.y)/(i.y-t.y),e=t.x+n*(i.x-t.x);else if(i.y>=this.ymin&&i.y<=this.ymax)n=((e=i.x<=this.xmin?this.xmin:this.xmax)-t.x)/(i.x-t.x),s=t.y+n*(i.y-t.y);else{s=i.y<=this.ymin?this.ymin:this.ymax;var r=((e=i.x<=this.xmin?this.xmin:this.xmax)-t.x)/(i.x-t.x),h=(s-t.y)/(i.y-t.y);r<h?(n=r,s=t.y+r*(i.y-t.y)):(n=h,e=t.x+h*(i.x-t.x))}return this._r=n,new(0,l.Point)(e,s)}},{key:"_pushLine",value:function(){this.line&&(this.type===l.GeometryType.Point?this.line.length>0&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===l.GeometryType.LineString?this.line.length>1&&(this.lines.push(this.line),this.starts.push(this.start)):this.type===l.GeometryType.Polygon&&this.line.length>3&&(this.lines.push(this.line),this.starts.push(this.start))),this.line=[],this.start=0}},{key:"_moveTo",value:function(t,i,e){this.type!==l.GeometryType.Polygon?e&&(t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.push(new(0,l.Point)(t,i))):(e||(t<this.xmin&&(t=this.xmin),t>this.xmax&&(t=this.xmax),i<this.ymin&&(i=this.ymin),i>this.ymax&&(i=this.ymax)),t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.push(new(0,l.Point)(t,i)),this._is_h=!1,this._is_v=!1)}},{key:"_lineTo",value:function(t,i,e){var s,n;if(this.type!==l.GeometryType.Polygon)if(e){if(t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line.length>0&&(s=this.line[this.line.length-1]).equals(t,i))return;this.line.push(new(0,l.Point)(t,i))}else this.line&&this.line.length>0&&this._pushLine();else if(e||(t<this.xmin&&(t=this.xmin),t>this.xmax&&(t=this.xmax),i<this.ymin&&(i=this.ymin),i>this.ymax&&(i=this.ymax)),t=Math.round((t-(this.xmin+this.margin))*this.finalRatio),i=Math.round((i-(this.ymin+this.margin))*this.finalRatio),this.line&&this.line.length>0){var r=(s=this.line[this.line.length-1]).x===t,h=s.y===i;if(r&&h)return;this._is_h&&r||this._is_v&&h?(s.x=t,s.y=i,(n=this.line[this.line.length-2]).x===t&&n.y===i?(this.line.pop(),this.line.length<=1?(this._is_h=!1,this._is_v=!1):(n=this.line[this.line.length-2],this._is_h=n.x===t,this._is_v=n.y===i)):(this._is_h=n.x===t,this._is_v=n.y===i)):(this.line.push(new(0,l.Point)(t,i)),this._is_h=r,this._is_v=h)}else this.line.push(new(0,l.Point)(t,i))}}]),t}(),u=function(){"use strict";function t(){h.classCallCheck(this,t)}return h.createClass(t,[{key:"setExtent",value:function(t){this._ratio=4096===t?1:4096/t}},{key:"validateTessellation",get:function(){return this._ratio<1}},{key:"reset",value:function(t){this.lines=[],this.line=null}},{key:"moveTo",value:function(t,i){this.line&&this.lines.push(this.line),this.line=[];var e=this._ratio;this.line.push(new(0,l.Point)(t*e,i*e))}},{key:"lineTo",value:function(t,i){var e=this._ratio;this.line.push(new(0,l.Point)(t*e,i*e))}},{key:"close",value:function(){var t=this.line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}},{key:"result",value:function(){return this.line&&this.lines.push(this.line),0===this.lines.length?null:this.lines}}]),t}();(r=n||(n={}))[r.sideLeft=0]="sideLeft",r[r.sideRight=1]="sideRight",r[r.sideTop=2]="sideTop",r[r.sideBottom=3]="sideBottom";var c=function(){"use strict";function t(){h.classCallCheck(this,t)}return h.createClass(t,null,[{key:"simplify",value:function(i,e,s){if(s){for(var r=-e,h=i+e,a=-e,l=i+e,x=[],y=[],o=s.length,u=0;u<o;++u){var c=s[u];if(c&&!(c.length<2))for(var v=void 0,f=c[0],p=c.length,m=1;m<p;++m)v=c[m],f.x===v.x&&(f.x<=r&&(f.y>v.y?(x.push(u),x.push(m),x.push(n.sideLeft),x.push(-1)):(y.push(u),y.push(m),y.push(n.sideLeft),y.push(-1))),f.x>=h&&(f.y<v.y?(x.push(u),x.push(m),x.push(n.sideRight),x.push(-1)):(y.push(u),y.push(m),y.push(n.sideRight),y.push(-1)))),f.y===v.y&&(f.y<=a&&(f.x<v.x?(x.push(u),x.push(m),x.push(n.sideTop),x.push(-1)):(y.push(u),y.push(m),y.push(n.sideTop),y.push(-1))),f.y>=l&&(f.x>v.x?(x.push(u),x.push(m),x.push(n.sideBottom),x.push(-1)):(y.push(u),y.push(m),y.push(n.sideBottom),y.push(-1)))),f=v}if(0!==x.length&&0!==y.length){t.fillParent(s,y,x),t.fillParent(s,x,y);var d=[];t.calcDeltas(d,y,x),t.calcDeltas(d,x,y),t.addDeltas(d,s)}}}},{key:"fillParent",value:function(t,i,e){for(var s=e.length,r=i.length,h=0;h<r;h+=4){for(var a=i[h],l=i[h+1],y=i[h+2],o=t[a][l-1],u=t[a][l],c=8092,v=-1,f=0;f<s;f+=4)if(e[f+2]===y){var p=e[f],m=e[f+1],d=t[p][m-1],g=t[p][m];switch(y){case n.sideLeft:case n.sideRight:if((0,x.between)(o.y,d.y,g.y)&&(0,x.between)(u.y,d.y,g.y)){var T=Math.abs(g.y-d.y);T<c&&(c=T,v=f)}break;case n.sideTop:case n.sideBottom:if((0,x.between)(o.x,d.x,g.x)&&(0,x.between)(u.x,d.x,g.x)){var _=Math.abs(g.x-d.x);_<c&&(c=_,v=f)}}}i[h+3]=v}}},{key:"calcDeltas",value:function(i,e,s){for(var n=e.length,r=0;r<n;r+=4){var h=t.calcDelta(r,e,s,[]);i.push(e[r]),i.push(e[r+1]),i.push(e[r+2]),i.push(h)}}},{key:"calcDelta",value:function(i,e,s,n){var r=e[i+3];if(-1===r)return 0;var h=n.length;return h>1&&n[h-2]===r?0:(n.push(r),t.calcDelta(r,s,e,n)+1)}},{key:"addDeltas",value:function(t,i){for(var e=t.length,s=0,r=0;r<e;r+=4){var h=t[r+3];h>s&&(s=h)}for(var a=0;a<e;a+=4){var l=i[t[a]],x=t[a+1],y=s-t[a+3];switch(t[a+2]){case n.sideLeft:l[x-1].x-=y,l[x].x-=y,1===x&&(l[l.length-1].x-=y),x===l.length-1&&(l[0].x-=y);break;case n.sideRight:l[x-1].x+=y,l[x].x+=y,1===x&&(l[l.length-1].x+=y),x===l.length-1&&(l[0].x+=y);break;case n.sideTop:l[x-1].y-=y,l[x].y-=y,1===x&&(l[l.length-1].y-=y),x===l.length-1&&(l[0].y-=y);break;case n.sideBottom:l[x-1].y+=y,l[x].y+=y,1===x&&(l[l.length-1].y+=y),x===l.length-1&&(l[0].y+=y)}}}}]),t}()})),e.register("8DFoJ",(function(t,s){i(t.exports,"LineTessellation",(function(){return f}));var n=e("8TSCy"),r=e("6LoaD"),h=e("4WoSm");function a(t,i){return t.x===i.x&&t.y===i.y}function l(t,i){return t.x=i.y,t.y=-i.x,t}function x(t,i){return t.x=-i.y,t.y=i.x,t}function y(t,i){return t.x=i.x,t.y=i.y,t}function o(t,i){return t.x=-i.x,t.y=-i.y,t}function u(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function c(t,i){return t.x*i.x+t.y*i.y}function v(t,i,e,s){return t.x=i.x*e+i.y*s,t.y=i.x*s-i.y*e,t}var f=function(){"use strict";function t(i,e,s){n.classCallCheck(this,t),this.writeVertex=i,this.writeTriangle=e,this.canUseThinTessellation=s,this.prevNormal={x:void 0,y:void 0},this.nextNormal={x:void 0,y:void 0},this.textureNormalLeft={x:0,y:1},this.textureNormalRight={x:0,y:-1},this.textureNormal={x:void 0,y:void 0},this.joinNormal={x:void 0,y:void 0},this.inner={x:void 0,y:void 0},this.outer={x:void 0,y:void 0},this.roundStart={x:void 0,y:void 0},this.roundEnd={x:void 0,y:void 0},this.startBreak={x:void 0,y:void 0},this.endBreak={x:void 0,y:void 0},this.innerPrev={x:void 0,y:void 0},this.innerNext={x:void 0,y:void 0},this.bevelStart={x:void 0,y:void 0},this.bevelEnd={x:void 0,y:void 0},this.bevelMiddle={x:void 0,y:void 0}}return n.createClass(t,[{key:"tessellate",value:function(t,i){(function(t){if(t){var i=t.length;if(!(i<=1)){for(var e=0,s=1;s<i;s++)a(t[s],t[e])||++e===s||(t[e]=t[s]);t.length=e+1}}})(t),this.canUseThinTessellation&&i.halfWidth<h.THIN_LINE_HALF_WIDTH_THRESHOLD&&!i.offset?this._tessellateThin(t,i):this._tessellate(t,i)}},{key:"_tessellateThin",value:function(t,i){if(!(t.length<2))for(var e=i.wrapDistance||65535,s=i.initialDistance||0,n=!1,r=t[0].x,h=t[0].y,a=t.length,l=1;l<a;++l){n&&(n=!1,s=0);var x=t[l].x,y=t[l].y,o=x-r,u=y-h,c=Math.sqrt(o*o+u*u);if(o/=c,u/=c,s+c>e){n=!0;var v=(e-s)/c;c=e-s,x=(1-v)*r+v*x,y=(1-v)*h+v*y,--l}var f=this.writeVertex(r,h,0,0,o,u,u,-o,0,-1,s),p=this.writeVertex(r,h,0,0,o,u,-u,o,0,1,s);s+=c;var m=this.writeVertex(x,y,0,0,o,u,u,-o,0,-1,s),d=this.writeVertex(x,y,0,0,o,u,-u,o,0,1,s);this.writeTriangle(f,p,m),this.writeTriangle(p,m,d),r=x,h=y}}},{key:"_tessellate",value:function(t,i){var e=t[0],s=t[t.length-1],n=a(e,s),h=n?3:2;if(!(t.length<h)){var f,p,m,d,g=i.pixelCoordRatio,T=null!=i.capType?i.capType:r.CapType.BUTT,_=null!=i.joinType?i.joinType:r.JoinType.MITER,w=null!=i.miterLimit?Math.min(i.miterLimit,4):2,k=null!=i.roundLimit?Math.min(i.roundLimit,1.05):1.05,b=null!=i.halfWidth?i.halfWidth:2,P=!!i.textured,R=null,E=null,C=this.prevNormal,L=this.nextNormal,N=-1,M=-1,V=this.joinNormal,B=this.textureNormalLeft,D=this.textureNormalRight,S=this.textureNormal,I=-1,U=-1,O=i.wrapDistance||65535,J=i.initialDistance||0,j=this.writeVertex,W=this.writeTriangle,z=function(t,i,e,s,n,r){var h=j(f,p,m,d,e,s,t,i,n,r,J);return I>=0&&U>=0&&h>=0&&W(I,U,h),I=U,U=h,h};n&&(R=t[t.length-2],L.x=s.x-R.x,L.y=s.y-R.y,M=u(L),L.x/=M,L.y/=M);for(var G,A,H=!1,X=0;X<t.length;++X){if(H&&(H=!1,J=0),R&&(C.x=-L.x,C.y=-L.y,J+(N=M)>O&&(H=!0)),H){var q=(O-J)/N;N=O-J,R={x:(1-q)*R.x+q*t[X].x,y:(1-q)*R.y+q*t[X].y},--X}else R=t[X];f=R.x,p=R.y;var F=X<=0&&!H,Q=X===t.length-1;if(F||(J+=N),(E=Q?n?t[1]:null:t[X+1])?(L.x=E.x-f,L.y=E.y-p,M=u(L),L.x/=M,L.y/=M):(L.x=void 0,L.y=void 0),!n){if(F){x(V,L),m=V.x,d=V.y,T===r.CapType.SQUARE&&(z(-L.y-L.x,L.x-L.y,L.x,L.y,0,-1),z(L.y-L.x,-L.x-L.y,L.x,L.y,0,1)),T===r.CapType.ROUND&&(z(-L.y-L.x,L.x-L.y,L.x,L.y,-1,-1),z(L.y-L.x,-L.x-L.y,L.x,L.y,-1,1)),T!==r.CapType.ROUND&&T!==r.CapType.BUTT||(z(-L.y,L.x,L.x,L.y,0,-1),z(L.y,-L.x,L.x,L.y,0,1));continue}if(Q){l(V,C),m=V.x,d=V.y,T!==r.CapType.ROUND&&T!==r.CapType.BUTT||(z(C.y,-C.x,-C.x,-C.y,0,-1),z(-C.y,C.x,-C.x,-C.y,0,1)),T===r.CapType.SQUARE&&(z(C.y-C.x,-C.x-C.y,-C.x,-C.y,0,-1),z(-C.y-C.x,C.x-C.y,-C.x,-C.y,0,1)),T===r.CapType.ROUND&&(z(C.y-C.x,-C.x-C.y,-C.x,-C.y,1,-1),z(-C.y-C.x,C.x-C.y,-C.x,-C.y,1,1));continue}}var K=void 0,Z=void 0,$=(A=L,-((G=C).x*A.y-G.y*A.x));if(Math.abs($)<.01)c(C,L)>0?(V.x=C.x,V.y=C.y,$=1,K=Number.MAX_VALUE,Z=!0):(x(V,L),$=1,K=1,Z=!1);else{V.x=(C.x+L.x)/$,V.y=(C.y+L.y)/$;var Y=((K=u(V))-1)*b*g;Z=K>4||Y>N&&Y>M}m=V.x,d=V.y;var tt=_;switch(_){case r.JoinType.BEVEL:K<1.05&&(tt=r.JoinType.MITER);break;case r.JoinType.ROUND:K<k&&(tt=r.JoinType.MITER);break;case r.JoinType.MITER:K>w&&(tt=r.JoinType.BEVEL)}switch(tt){case r.JoinType.MITER:if(z(V.x,V.y,-C.x,-C.y,0,-1),z(-V.x,-V.y,-C.x,-C.y,0,1),Q)break;if(P){var it=H?0:J;I=this.writeVertex(f,p,m,d,L.x,L.y,V.x,V.y,0,-1,it),U=this.writeVertex(f,p,m,d,L.x,L.y,-V.x,-V.y,0,1,it)}break;case r.JoinType.BEVEL:var et=$<0,st=void 0,nt=void 0,rt=void 0,ht=void 0;if(et){var at=I;I=U,U=at,st=B,nt=D}else st=D,nt=B;if(Z)rt=et?x(this.innerPrev,C):l(this.innerPrev,C),ht=et?l(this.innerNext,L):x(this.innerNext,L);else{var lt=et?o(this.inner,V):y(this.inner,V);rt=lt,ht=lt}var xt=et?l(this.bevelStart,C):x(this.bevelStart,C);z(rt.x,rt.y,-C.x,-C.y,st.x,st.y);var yt=z(xt.x,xt.y,-C.x,-C.y,nt.x,nt.y);if(Q)break;var ot=et?x(this.bevelEnd,L):l(this.bevelEnd,L);if(Z){var ut=this.writeVertex(f,p,m,d,-C.x,-C.y,0,0,0,0,J);I=this.writeVertex(f,p,m,d,L.x,L.y,ht.x,ht.y,st.x,st.y,J),U=this.writeVertex(f,p,m,d,L.x,L.y,ot.x,ot.y,nt.x,nt.y,J),this.writeTriangle(yt,ut,U)}else{if(P){var ct=this.bevelMiddle;ct.x=(xt.x+ot.x)/2,ct.y=(xt.y+ot.y)/2,v(S,ct,-C.x,-C.y),z(ct.x,ct.y,-C.x,-C.y,S.x,S.y),v(S,ct,L.x,L.y),I=this.writeVertex(f,p,m,d,L.x,L.y,ct.x,ct.y,S.x,S.y,J),U=this.writeVertex(f,p,m,d,L.x,L.y,ht.x,ht.y,st.x,st.y,J)}else{var vt=I;I=U,U=vt}z(ot.x,ot.y,L.x,L.y,nt.x,nt.y)}if(et){var ft=I;I=U,U=ft}break;case r.JoinType.ROUND:var pt=$<0,mt=void 0,dt=void 0;if(pt){var gt=I;I=U,U=gt,mt=B,dt=D}else mt=D,dt=B;var Tt=pt?o(this.inner,V):y(this.inner,V),_t=void 0,wt=void 0;Z?(_t=pt?x(this.innerPrev,C):l(this.innerPrev,C),wt=pt?l(this.innerNext,L):x(this.innerNext,L)):(_t=Tt,wt=Tt);var kt=pt?l(this.roundStart,C):x(this.roundStart,C),bt=pt?x(this.roundEnd,L):l(this.roundEnd,L),Pt=z(_t.x,_t.y,-C.x,-C.y,mt.x,mt.y),Rt=z(kt.x,kt.y,-C.x,-C.y,dt.x,dt.y);if(Q)break;var Et=this.writeVertex(f,p,m,d,-C.x,-C.y,0,0,0,0,J);Z||this.writeTriangle(I,U,Et);var Ct=o(this.outer,Tt),Lt=this.writeVertex(f,p,m,d,L.x,L.y,bt.x,bt.y,dt.x,dt.y,J),Nt=void 0,Mt=void 0,Vt=K>2;if(Vt){var Bt=void 0;K!==Number.MAX_VALUE?(Ct.x/=K,Ct.y/=K,Bt=(K*((Bt=c(C,Ct))*Bt-1)+1)/Bt):Bt=-1,(Nt=pt?l(this.startBreak,C):x(this.startBreak,C)).x+=C.x*Bt,Nt.y+=C.y*Bt,(Mt=pt?x(this.endBreak,L):l(this.endBreak,L)).x+=L.x*Bt,Mt.y+=L.y*Bt}v(S,Ct,-C.x,-C.y);var Dt=this.writeVertex(f,p,m,d,-C.x,-C.y,Ct.x,Ct.y,S.x,S.y,J);v(S,Ct,L.x,L.y);var St=P?this.writeVertex(f,p,m,d,L.x,L.y,Ct.x,Ct.y,S.x,S.y,J):Dt,It=Et,Ut=P?this.writeVertex(f,p,m,d,L.x,L.y,0,0,0,0,J):Et,Ot=-1,Jt=-1;if(Vt&&(v(S,Nt,-C.x,-C.y),Ot=this.writeVertex(f,p,m,d,-C.x,-C.y,Nt.x,Nt.y,S.x,S.y,J),v(S,Mt,L.x,L.y),Jt=this.writeVertex(f,p,m,d,L.x,L.y,Mt.x,Mt.y,S.x,S.y,J)),P?Vt?(this.writeTriangle(It,Rt,Ot),this.writeTriangle(It,Ot,Dt),this.writeTriangle(Ut,St,Jt),this.writeTriangle(Ut,Jt,Lt)):(this.writeTriangle(It,Rt,Dt),this.writeTriangle(Ut,St,Lt)):Vt?(this.writeTriangle(Et,Rt,Ot),this.writeTriangle(Et,Ot,Jt),this.writeTriangle(Et,Jt,Lt)):(this.writeTriangle(Et,Rt,Dt),this.writeTriangle(Et,St,Lt)),Z?(I=this.writeVertex(f,p,m,d,L.x,L.y,wt.x,wt.y,mt.x,mt.y,J),U=Lt):(I=P?this.writeVertex(f,p,m,d,L.x,L.y,wt.x,wt.y,mt.x,mt.y,J):Pt,this.writeTriangle(I,Ut,Lt),U=Lt),pt){var jt=I;I=U,U=jt}}}}}}]),t}()}))}();
//# sourceMappingURL=SymbolProcessor.16f3c61d.js.map