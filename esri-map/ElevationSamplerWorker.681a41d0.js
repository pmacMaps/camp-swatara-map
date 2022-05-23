!function(){function t(t){return t&&t.__esModule?t.default:t}function e(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;n.register("iZfjq",(function(r,i){var a;a=r.exports,Object.defineProperty(a,"__esModule",{value:!0,configurable:!0}),e(r.exports,"default",(function(){return h}));var o=n("8TSCy"),u=n("2TvXO"),s=n("2VlWd"),c=n("7qybv"),l=n("bWAZj"),f=n("4pnUn"),h=function(){"use strict";function e(){o.classCallCheck(this,e)}return o.createClass(e,[{key:"createIndex",value:function(e,n){var r=this;return o.asyncToGenerator(t(u).mark((function i(){var a,o,s;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=new Array,e.vertexAttributes&&e.vertexAttributes.position){t.next=3;break}return t.abrupt("return",new(0,l.PooledRBush));case 3:if(o=r._createMeshData(e),!(0,c.isSome)(n)){t.next=10;break}return t.next=7,n.invoke("createIndexThread",o,{transferList:a});case 7:t.t0=t.sent,t.next=11;break;case 10:t.t0=r.createIndexThread(o).result;case 11:return s=t.t0,t.abrupt("return",r._createPooledRBush().fromJSON(s));case 13:case"end":return t.stop()}}),i)})))()}},{key:"createIndexThread",value:function(t){var e=new Float64Array(t.position),n=this._createPooledRBush();return t.components?this._createIndexComponentsThread(n,e,t.components.map((function(t){return new Uint32Array(t)}))):this._createIndexAllThread(n,e)}},{key:"_createIndexAllThread",value:function(t,e){for(var n=new Array(e.length/9),r=0,i=0;i<e.length;i+=9)n[r++]=d(e,i+0,i+3,i+6);return t.load(n),{result:t.toJSON()}}},{key:"_createIndexComponentsThread",value:function(t,e,n){var r=0,i=!0,a=!1,o=void 0;try{for(var u,s=n[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){r+=u.value.length/3}}catch(t){a=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}var c=new Array(r),l=0,f=!0,h=!1,m=void 0;try{for(var p,v=n[Symbol.iterator]();!(f=(p=v.next()).done);f=!0)for(var x=p.value,y=0;y<x.length;y+=3)c[l++]=d(e,3*x[y+0],3*x[y+1],3*x[y+2])}catch(t){h=!0,m=t}finally{try{f||null==v.return||v.return()}finally{if(h)throw m}}return t.load(c),{result:t.toJSON()}}},{key:"_createMeshData",value:function(t){var e=(t.transform?(0,f.georeferenceApplyTransform)({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some((function(t){return!t.faces}))?{position:e}:{position:e,components:t.components.map((function(t){return t.faces}))}}},{key:"_createPooledRBush",value:function(){return new(0,l.PooledRBush)(9,(0,s.default)("esri-csp-restrictions")?function(t){return t}:[".minX",".minY",".maxX",".maxY"])}}]),e}();function d(t,e,n,r){return{minX:Math.min(t[e+0],t[n+0],t[r+0]),maxX:Math.max(t[e+0],t[n+0],t[r+0]),minY:Math.min(t[e+1],t[n+1],t[r+1]),maxY:Math.max(t[e+1],t[n+1],t[r+1]),p0:[t[e+0],t[e+1],t[e+2]],p1:[t[n+0],t[n+1],t[n+2]],p2:[t[r+0],t[r+1],t[r+2]]}}})),n.register("bWAZj",(function(t,r){e(t.exports,"PooledRBush",(function(){return c}));var i=n("8TSCy"),a=n("lNwWH"),o=n("7qybv"),u=n("6v7Z0"),s=n("fcGl2"),c=function(){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,n=arguments.length>1?arguments[1]:void 0;i.classCallCheck(this,t),this.compareMinX=d,this.compareMinY=m,this._toBBox=function(t){return t},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this._toBBox=n:this._initFormat(n)),this.clear()}return i.createClass(t,[{key:"destroy",value:function(){this.clear(),g.prune(),B.prune(),b.prune(),X.prune()}},{key:"all",value:function(t){this._all(this.data,t)}},{key:"search",value:function(t,e){var n=this.data,r=this._toBBox;if(M(t,n))for(g.clear();n;){for(var i=0,a=n.children.length;i<a;i++){var o=n.children[i],u=n.leaf?r(o):o;M(t,u)&&(n.leaf?e(o):y(t,u)?this._all(o,e):g.push(o))}n=g.pop()}}},{key:"collides",value:function(t){var e=this.data,n=this._toBBox;if(!M(t,e))return!1;for(g.clear();e;){for(var r=0,i=e.children.length;r<i;r++){var a=e.children[r],o=e.leaf?n(a):a;if(M(t,o)){if(e.leaf||y(t,o))return!0;g.push(a)}}e=g.pop()}return!1}},{key:"load",value:function(t){if(!t.length)return this;if(t.length<this._minEntries){for(var e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}var r=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var i=this.data;this.data=r,r=i}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this}},{key:"insert",value:function(t){return t&&this._insert(t,this.data.height-1),this}},{key:"clear",value:function(){return this.data=new k([]),this}},{key:"remove",value:function(t){if(!t)return this;var e,n=this.data,r=null,i=0,u=!1,s=this._toBBox(t);for(b.clear(),X.clear();n||b.length>0;){var c;if(n||(n=(0,o.assumeNonNull)(b.pop()),r=b.data[b.length-1],i=null!=(c=X.pop())?c:0,u=!0),n.leaf&&-1!==(e=(0,a.indexOf)(n.children,t,n.children.length,n.indexHint)))return n.children.splice(e,1),b.push(n),this._condense(b),this;u||n.leaf||!y(n,s)?r?(i++,n=r.children[i],u=!1):n=null:(b.push(n),X.push(i),i=0,r=n,n=n.children[0])}return this}},{key:"toJSON",value:function(){return this.data}},{key:"fromJSON",value:function(t){return this.data=t,this}},{key:"_all",value:function(t,e){var n=t;for(B.clear();n;){var r,i=!0,a=!1,o=void 0;if(!0===n.leaf)try{for(var u,s=n.children[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){e(u.value)}}catch(t){a=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(a)throw o}}else B.pushArray(n.children);n=null!=(r=B.pop())?r:null}}},{key:"_build",value:function(t,e,n,r){var i=n-e+1,a=this._maxEntries;if(i<=a){var o=new k(t.slice(e,n+1));return l(o,this._toBBox),o}r||(r=Math.ceil(Math.log(i)/Math.log(a)),a=Math.ceil(i/Math.pow(a,r-1)));var u=new w([]);u.height=r;var s=Math.ceil(i/a),c=s*Math.ceil(Math.sqrt(a));_(t,e,n,c,this.compareMinX);for(var f=e;f<=n;f+=c){var h=Math.min(f+c-1,n);_(t,f,h,s,this.compareMinY);for(var d=f;d<=h;d+=s){var m=Math.min(d+s-1,h);u.children.push(this._build(t,d,m,r-1))}}return l(u,this._toBBox),u}},{key:"_chooseSubtree",value:function(t,e,n,r){for(;r.push(e),!0!==e.leaf&&r.length-1!==n;){for(var i=void 0,a=1/0,o=1/0,u=0,s=e.children.length;u<s;u++){var c=e.children[u],l=p(c),f=(h=t,d=c,(Math.max(d.maxX,h.maxX)-Math.min(d.minX,h.minX))*(Math.max(d.maxY,h.maxY)-Math.min(d.minY,h.minY))-l);f<o?(o=f,a=l<a?l:a,i=c):f===o&&l<a&&(a=l,i=c)}e=i||e.children[0]}var h,d;return e}},{key:"_insert",value:function(t,e,n){var r=this._toBBox,i=n?t:r(t);b.clear();var a=this._chooseSubtree(i,this.data,e,b);for(a.children.push(t),h(a,i);e>=0&&b.data[e].children.length>this._maxEntries;)this._split(b,e),e--;this._adjustParentBBoxes(i,b,e)}},{key:"_split",value:function(t,e){var n=t.data[e],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);var a=this._chooseSplitIndex(n,i,r);if(a){var o=n.children.splice(a,n.children.length-a),u=n.leaf?new k(o):new w(o);u.height=n.height,l(n,this._toBBox),l(u,this._toBBox),e?t.data[e-1].children.push(u):this._splitRoot(n,u)}else console.log("  Error: assertion failed at PooledRBush._split: no valid split index")}},{key:"_splitRoot",value:function(t,e){this.data=new w([t,e]),this.data.height=t.height+1,l(this.data,this._toBBox)}},{key:"_chooseSplitIndex",value:function(t,e,n){var r,i,a;r=i=1/0;for(var o=e;o<=n-e;o++){var u=f(t,0,o,this._toBBox),s=f(t,o,n,this._toBBox),c=x(u,s),l=p(u)+p(s);c<r?(r=c,a=o,i=l<i?l:i):c===r&&l<i&&(i=l,a=o)}return a}},{key:"_chooseSplitAxis",value:function(t,e,n){var r=t.leaf?this.compareMinX:d,i=t.leaf?this.compareMinY:m;this._allDistMargin(t,e,n,r)<this._allDistMargin(t,e,n,i)&&t.children.sort(r)}},{key:"_allDistMargin",value:function(t,e,n,r){t.children.sort(r);for(var i=this._toBBox,a=f(t,0,e,i),o=f(t,n-e,n,i),u=v(a)+v(o),s=e;s<n-e;s++){var c=t.children[s];h(a,t.leaf?i(c):c),u+=v(a)}for(var l=n-e-1;l>=e;l--){var d=t.children[l];h(o,t.leaf?i(d):d),u+=v(o)}return u}},{key:"_adjustParentBBoxes",value:function(t,e,n){for(var r=n;r>=0;r--)h(e.data[r],t)}},{key:"_condense",value:function(t){for(var e=t.length-1;e>=0;e--){var n=t.data[e];if(0===n.children.length)if(e>0){var r=t.data[e-1],i=r.children;i.splice((0,a.indexOf)(i,n,i.length,r.indexHint),1)}else this.clear();else l(n,this._toBBox)}}},{key:"_initFormat",value:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}]),t}();function l(t,e){f(t,0,t.children.length,e,t)}function f(t,e,n,r,i){i||(i=new k([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(var a,o=e;o<n;o++)a=t.children[o],h(i,t.leaf?r(a):a);return i}function h(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function d(t,e){return t.minX-e.minX}function m(t,e){return t.minY-e.minY}function p(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function v(t){return t.maxX-t.minX+(t.maxY-t.minY)}function x(t,e){var n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),a=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,a-r)}function y(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function M(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function _(t,e,n,r,i){for(var a=[e,n];a.length;){var u=(0,o.assumeNonNull)(a.pop()),c=(0,o.assumeNonNull)(a.pop());if(!(u-c<=r)){var l=c+Math.ceil((u-c)/r/2)*r;(0,s.q)(t,l,c,u,i),a.push(c,l,l,u)}}}var g=new(0,u.default),B=new(0,u.default),b=new(0,u.default),X=new(0,u.default)({deallocator:void 0}),Y=function(t){"use strict";i.inherits(n,t);var e=i.createSuper(n);function n(){var t;return i.classCallCheck(this,n),(t=e.call.apply(e,[this].concat(Array.prototype.slice.call(arguments)))).height=1,t.indexHint=new(0,a.PositionHint),i.possibleConstructorReturn(t)}return n}((function t(){"use strict";i.classCallCheck(this,t),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0})),k=function(t){"use strict";i.inherits(n,t);var e=i.createSuper(n);function n(t){var r;return i.classCallCheck(this,n),(r=e.call(this)).children=t,r.leaf=!0,i.possibleConstructorReturn(r)}return n}(Y),w=function(t){"use strict";i.inherits(n,t);var e=i.createSuper(n);function n(t){var r;return i.classCallCheck(this,n),(r=e.call(this)).children=t,r.leaf=!1,i.possibleConstructorReturn(r)}return n}(Y)})),n.register("gnwu9",(function(t,n){function r(){return[1,0,0,0,1,0,0,0,1]}function i(t,e){return new Float64Array(t,e,9)}e(t.exports,"c",(function(){return r})),e(t.exports,"a",(function(){return i}));Object.freeze({__proto__:null,create:r,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},fromValues:function(t,e,n,r,i,a,o,u,s){return[t,e,n,r,i,a,o,u,s]},createView:i})})),n.register("koyqq",(function(t,r){e(t.exports,"s",(function(){return l})),e(t.exports,"g",(function(){return f})),e(t.exports,"m",(function(){return h})),e(t.exports,"c",(function(){return m})),e(t.exports,"k",(function(){return v})),e(t.exports,"j",(function(){return I}));var i=n("gnwu9"),a=n("ksUrQ"),o=n("5YMIf"),u=n("1CBkz"),s=n("e4Xv2"),c=n("hRPEZ");function l(t,e,n){n*=.5;var r=Math.sin(n);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(n),t}function f(t,e){var n=2*Math.acos(e[3]),r=Math.sin(n/2);return r>u.E?(t[0]=e[0]/r,t[1]=e[1]/r,t[2]=e[2]/r):(t[0]=1,t[1]=0,t[2]=0),n}function h(t,e,n){var r=e[0],i=e[1],a=e[2],o=e[3],u=n[0],s=n[1],c=n[2],l=n[3];return t[0]=r*l+o*u+i*c-a*s,t[1]=i*l+o*s+a*u-r*c,t[2]=a*l+o*c+r*s-i*u,t[3]=o*l-r*u-i*s-a*c,t}function d(t,e,n,r){var i,a,o,s,c,l=e[0],f=e[1],h=e[2],d=e[3],m=n[0],p=n[1],v=n[2],x=n[3];return(a=l*m+f*p+h*v+d*x)<0&&(a=-a,m=-m,p=-p,v=-v,x=-x),1-a>u.E?(i=Math.acos(a),o=Math.sin(i),s=Math.sin((1-r)*i)/o,c=Math.sin(r*i)/o):(s=1-r,c=r),t[0]=s*l+c*m,t[1]=s*f+c*p,t[2]=s*h+c*v,t[3]=s*d+c*x,t}function m(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function p(t,e){var n,r=e[0]+e[4]+e[8];if(r>0)n=Math.sqrt(r+1),t[3]=.5*n,n=.5/n,t[0]=(e[5]-e[7])*n,t[1]=(e[6]-e[2])*n,t[2]=(e[1]-e[3])*n;else{var i=0;e[4]>e[0]&&(i=1),e[8]>e[3*i+i]&&(i=2);var a=(i+1)%3,o=(i+2)%3;n=Math.sqrt(e[3*i+i]-e[3*a+a]-e[3*o+o]+1),t[i]=.5*n,n=.5/n,t[3]=(e[3*a+o]-e[3*o+a])*n,t[a]=(e[3*a+i]+e[3*i+a])*n,t[o]=(e[3*o+i]+e[3*i+o])*n}return t}function v(t,e,n,r){var i=.5*Math.PI/180;e*=i,n*=i,r*=i;var a=Math.sin(e),o=Math.cos(e),u=Math.sin(n),s=Math.cos(n),c=Math.sin(r),l=Math.cos(r);return t[0]=a*s*l-o*u*c,t[1]=o*u*l+a*s*c,t[2]=o*s*c-a*u*l,t[3]=o*s*l+a*u*c,t}var x=c.c,y=c.s,M=c.a,_=h,g=c.b,B=c.d,b=c.l,X=c.e,Y=X,k=c.f,w=k,S=c.n,I=c.g,A=c.h;var C=(0,o.c)(),q=(0,o.f)(1,0,0),R=(0,o.f)(0,1,0);var P=(0,a.a)(),T=(0,a.a)();var j=(0,i.c)();Object.freeze({__proto__:null,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:l,getAxisAngle:f,multiply:h,rotateX:function(t,e,n){n*=.5;var r=e[0],i=e[1],a=e[2],o=e[3],u=Math.sin(n),s=Math.cos(n);return t[0]=r*s+o*u,t[1]=i*s+a*u,t[2]=a*s-i*u,t[3]=o*s-r*u,t},rotateY:function(t,e,n){n*=.5;var r=e[0],i=e[1],a=e[2],o=e[3],u=Math.sin(n),s=Math.cos(n);return t[0]=r*s-a*u,t[1]=i*s+o*u,t[2]=a*s+r*u,t[3]=o*s-i*u,t},rotateZ:function(t,e,n){n*=.5;var r=e[0],i=e[1],a=e[2],o=e[3],u=Math.sin(n),s=Math.cos(n);return t[0]=r*s+i*u,t[1]=i*s-r*u,t[2]=a*s+o*u,t[3]=o*s-a*u,t},calculateW:function(t,e){var n=e[0],r=e[1],i=e[2];return t[0]=n,t[1]=r,t[2]=i,t[3]=Math.sqrt(Math.abs(1-n*n-r*r-i*i)),t},slerp:d,random:function(t){var e=(0,u.R)(),n=(0,u.R)(),r=(0,u.R)(),i=Math.sqrt(1-e),a=Math.sqrt(e);return t[0]=i*Math.sin(2*Math.PI*n),t[1]=i*Math.cos(2*Math.PI*n),t[2]=a*Math.sin(2*Math.PI*r),t[3]=a*Math.cos(2*Math.PI*r),t},invert:function(t,e){var n=e[0],r=e[1],i=e[2],a=e[3],o=n*n+r*r+i*i+a*a,u=o?1/o:0;return t[0]=-n*u,t[1]=-r*u,t[2]=-i*u,t[3]=a*u,t},conjugate:m,fromMat3:p,fromEuler:v,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:x,set:y,add:M,mul:_,scale:g,dot:B,lerp:b,length:X,len:Y,squaredLength:k,sqrLen:w,normalize:S,exactEquals:I,equals:A,rotationTo:function(t,e,n){var r=(0,s.d)(e,n);return r<-.999999?((0,s.c)(C,q,e),(0,s.u)(C)<1e-6&&(0,s.c)(C,R,e),(0,s.n)(C,C),l(t,C,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,s.c)(C,e,n),t[0]=C[0],t[1]=C[1],t[2]=C[2],t[3]=1+r,S(t,t))},sqlerp:function(t,e,n,r,i,a){return d(P,e,i,a),d(T,n,r,a),d(t,P,T,2*a*(1-a)),t},setAxes:function(t,e,n,r){var i=j;return i[0]=n[0],i[3]=n[1],i[6]=n[2],i[1]=r[0],i[4]=r[1],i[7]=r[2],i[2]=-e[0],i[5]=-e[1],i[8]=-e[2],S(t,p(t,i))}})})),n.register("ksUrQ",(function(t,n){function r(){return[0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3]]}function a(t,e){return new Float64Array(t,e,4)}e(t.exports,"a",(function(){return r})),e(t.exports,"b",(function(){return i})),e(t.exports,"c",(function(){return a})),e(t.exports,"I",(function(){return o}));var o=[0,0,0,1];Object.freeze({__proto__:null,create:r,clone:i,fromValues:function(t,e,n,r){return[t,e,n,r]},createView:a,IDENTITY:o})})),n.register("89KCq",(function(t,n){function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function a(t,e){return new Float64Array(t,e,16)}e(t.exports,"c",(function(){return r})),e(t.exports,"b",(function(){return i})),e(t.exports,"a",(function(){return a})),e(t.exports,"I",(function(){return o}));var o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze({__proto__:null,create:r,clone:i,fromValues:function(t,e,n,r,i,a,o,u,s,c,l,f,h,d,m,p){return[t,e,n,r,i,a,o,u,s,c,l,f,h,d,m,p]},createView:a,IDENTITY:o})})),n.register("hhwnq",(function(t,r){e(t.exports,"t",(function(){return a})),e(t.exports,"a",(function(){return o})),e(t.exports,"s",(function(){return u})),e(t.exports,"n",(function(){return s})),e(t.exports,"b",(function(){return c}));var i=n("997M2");function a(t,e,n){if(t.count===e.count)for(var r=t.count,a=n[0],o=n[1],u=n[2],s=n[4],c=n[5],l=n[6],f=n[8],h=n[9],d=n[10],m=n[12],p=n[13],v=n[14],x=t.typedBuffer,y=t.typedBufferStride,M=e.typedBuffer,_=e.typedBufferStride,g=0;g<r;g++){var B=g*y,b=g*_,X=M[b],Y=M[b+1],k=M[b+2];x[B]=a*X+s*Y+f*k+m,x[B+1]=o*X+c*Y+h*k+p,x[B+2]=u*X+l*Y+d*k+v}else i.mathLogger.error("source and destination buffers need to have the same number of elements")}function o(t,e,n){if(t.count===e.count)for(var r=t.count,a=n[0],o=n[1],u=n[2],s=n[3],c=n[4],l=n[5],f=n[6],h=n[7],d=n[8],m=t.typedBuffer,p=t.typedBufferStride,v=e.typedBuffer,x=e.typedBufferStride,y=0;y<r;y++){var M=y*p,_=y*x,g=v[_],B=v[_+1],b=v[_+2];m[M]=a*g+s*B+f*b,m[M+1]=o*g+c*B+h*b,m[M+2]=u*g+l*B+d*b}else i.mathLogger.error("source and destination buffers need to have the same number of elements")}function u(t,e,n){for(var r=Math.min(t.count,e.count),i=t.typedBuffer,a=t.typedBufferStride,o=e.typedBuffer,u=e.typedBufferStride,s=0;s<r;s++){var c=s*a,l=s*u;i[c]=n*o[l],i[c+1]=n*o[l+1],i[c+2]=n*o[l+2]}}function s(t,e){for(var n=Math.min(t.count,e.count),r=t.typedBuffer,i=t.typedBufferStride,a=e.typedBuffer,o=e.typedBufferStride,u=0;u<n;u++){var s=u*i,c=u*o,l=a[c],f=a[c+1],h=a[c+2],d=Math.sqrt(l*l+f*f+h*h);if(d>0){var m=1/d;r[s]=m*l,r[s+1]=m*f,r[s+2]=m*h}}}function c(t,e,n){for(var r=Math.min(t.count,e.count),i=t.typedBuffer,a=t.typedBufferStride,o=e.typedBuffer,u=e.typedBufferStride,s=0;s<r;s++){var c=s*a,l=s*u;i[c]=o[l]>>n,i[c+1]=o[l+1]>>n,i[c+2]=o[l+2]>>n}}Object.freeze({__proto__:null,transformMat4:a,transformMat3:o,scale:u,normalize:s,shiftRight:c})})),n.register("997M2",(function(t,r){e(t.exports,"mathLogger",(function(){return i}));var i=n("jHOLN").default.getLogger("esri.views.3d.support.buffer.math")})),n.register("fxkX0",(function(t,n){function r(t,e,n){for(var r=t.typedBuffer,i=t.typedBufferStride,a=e.typedBuffer,o=e.typedBufferStride,u=n?n.count:e.count,s=(n&&n.dstIndex?n.dstIndex:0)*i,c=(n&&n.srcIndex?n.srcIndex:0)*o,l=0;l<u;++l)r[s]=a[c],r[s+1]=a[c+1],r[s+2]=a[c+2],s+=i,c+=o}function i(t,e,n,r,i){for(var a,o,u=t.typedBuffer,s=t.typedBufferStride,c=null!=(a=null==i?void 0:i.count)?a:t.count,l=(null!=(o=null==i?void 0:i.dstIndex)?o:0)*s,f=0;f<c;++f)u[l]=e,u[l+1]=n,u[l+2]=r,l+=s}e(t.exports,"c",(function(){return r})),e(t.exports,"f",(function(){return i}));Object.freeze({__proto__:null,copy:r,fill:i})}))}();
//# sourceMappingURL=ElevationSamplerWorker.681a41d0.js.map