!function(){function t(t,e,i,r){Object.defineProperty(t,e,{get:i,set:r,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;e.register("idX6c",(function(i,r){t(i.exports,"default",(function(){return v}));var n=e("8TSCy"),a=e("7eJjO");e("2VlWd");var s,o=e("kyj08"),l=e("1XAcN"),h=e("flPLJ"),f=e("jHOLN"),u=e("7qybv"),p=e("iho5X"),c=e("ba18L"),x=e("fcwIv"),d=f.default.getLogger("esri.layers.support.PixelBlock"),m=s=function(t){"use strict";n.inherits(i,t);var e=n.createSuper(i);function i(t){var r;return n.classCallCheck(this,i),(r=e.call(this,t)).width=null,r.height=null,r.pixelType="f32",r.validPixelCount=null,r.mask=null,r.maskIsAlpha=!1,r.pixels=null,r.statistics=null,n.possibleConstructorReturn(r)}return n.createClass(i,[{key:"castPixelType",value:function(t){if(!t)return"f32";var e=t.toLowerCase();return["u1","u2","u4"].indexOf(e)>-1?e="u8":-1===["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].indexOf(e)&&(e="f32"),e}},{key:"getPlaneCount",value:function(){return this.pixels&&this.pixels.length}},{key:"addData",value:function(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new(0,o.default)("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics||{minValue:null,maxValue:null})}},{key:"getAsRGBA",value:function(){var t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}},{key:"getAsRGBAFloat",value:function(){var t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}},{key:"updateStatistics",value:function(){var t=this;this.statistics=this.pixels.map((function(e){return t._calculateBandStatistics(e,t.mask)}));var e=this.mask,i=0;if(e)for(var r=0;r<e.length;r++)e[r]&&i++;else i=this.width*this.height;this.validPixelCount=i}},{key:"clamp",value:function(t){if(t&&"f64"!==t&&"f32"!==t){var e;switch(t){case"u8":e=[0,255];break;case"u16":e=[0,65535];break;case"u32":e=[0,4294967295];break;case"s8":e=[-128,127];break;case"s16":e=[-32768,32767];break;case"s32":e=[-2147483648,2147483647];break;default:e=[-34e38,34e38]}for(var i,r,a,o=n.slicedToArray(e,2),l=o[0],h=o[1],f=this.pixels,u=this.width*this.height,p=f.length,c=[],x=0;x<p;x++){a=s.createEmptyBand(t,u),i=f[x];for(var d=0;d<u;d++)r=i[d],a[d]=r>h?h:r<l?l:r;c.push(a)}this.pixels=c,this.pixelType=t}}},{key:"extractBands",value:function(t){var e=this;if((0,u.isNone)(t)||0===t.length||null==this.pixels||0===this.pixels.length)return this;var i=this.pixels.length,r=t.some((function(t){return t>=e.pixels.length})),n=i===t.length&&!t.some((function(t,e){return t!==e}));return r||n?this:new s({pixelType:this.pixelType,width:this.width,height:this.height,mask:this.mask,validPixelCount:this.validPixelCount,maskIsAlpha:this.maskIsAlpha,pixels:t.map((function(t){return e.pixels[t]})),statistics:this.statistics&&t.map((function(t){return e.statistics[t]}))})}},{key:"clone",value:function(){var t,e=new s({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});this.mask&&(this.mask instanceof Uint8Array?e.mask=new Uint8Array(this.mask):e.mask=this.mask.slice(0));var i=s.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){e.pixels=[];var r=this.pixels[0].slice;for(t=0;t<this.pixels.length;t++)e.pixels[t]=r?this.pixels[t].slice(0,this.pixels[t].length):new i(this.pixels[t])}if(this.statistics)for(e.statistics=[],t=0;t<this.statistics.length;t++)e.statistics[t]=(0,h.clone)(this.statistics[t]);return e}},{key:"_fillFrom8Bit",value:function(t){var e=this,i=e.mask,r=e.maskIsAlpha,n=e.pixels;if(t&&n&&n.length){var a,s,o,l;a=s=o=n[0],n.length>=3?(s=n[1],o=n[2]):2===n.length&&(s=n[1]);var h=new Uint32Array(t),f=this.width*this.height;if(a.length===f)if(i&&i.length===f)if(r)for(l=0;l<f;l++)i[l]&&(h[l]=i[l]<<24|o[l]<<16|s[l]<<8|a[l]);else for(l=0;l<f;l++)i[l]&&(h[l]=-16777216|o[l]<<16|s[l]<<8|a[l]);else for(l=0;l<f;l++)h[l]=-16777216|o[l]<<16|s[l]<<8|a[l];else d.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}else d.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")}},{key:"_fillFromNon8Bit",value:function(t){var e=this,i=e.pixels,r=e.mask,n=e.statistics;if(t&&i&&i.length){var a=this.pixelType,s=1,o=0;if(n&&n.length>0)o=n.map((function(t){return t.minValue})).reduce((function(t,e){return Math.min(t,e)})),s=255/n.map((function(t){return t.maxValue-t.minValue})).reduce((function(t,e){return Math.max(t,e)}));else{var l=255;"s8"===a?(o=-128,l=127):"u16"===a?l=65535:"s16"===a?(o=-32768,l=32767):"u32"===a?l=4294967295:"s32"===a?(o=-2147483648,l=2147483647):"f32"===a?(o=-34e38,l=34e38):"f64"===a&&(o=-Number.MAX_VALUE,l=Number.MAX_VALUE),s=255/(l-o)}var h,f,u,p,c,x=new Uint32Array(t),m=this.width*this.height;if((h=f=u=i[0]).length!==m)return d.error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(i.length>=2)if(f=i[1],i.length>=3&&(u=i[2]),r&&r.length===m)for(p=0;p<m;p++)r[p]&&(x[p]=-16777216|(u[p]-o)*s<<16|(f[p]-o)*s<<8|(h[p]-o)*s);else for(p=0;p<m;p++)x[p]=-16777216|(u[p]-o)*s<<16|(f[p]-o)*s<<8|(h[p]-o)*s;else if(r&&r.length===m)for(p=0;p<m;p++)c=(h[p]-o)*s,r[p]&&(x[p]=-16777216|c<<16|c<<8|c);else for(p=0;p<m;p++)c=(h[p]-o)*s,x[p]=-16777216|c<<16|c<<8|c}else d.error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.")}},{key:"_fillFrom32Bit",value:function(t){var e,i,r,n,a=this.pixels,s=this.mask;if(!t||!a||!a.length)return d.error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");e=i=r=a[0],a.length>=3?(i=a[1],r=a[2]):2===a.length&&(i=a[1]);var o=this.width*this.height;if(e.length!==o)return d.error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");var l=0;if(s&&s.length===o)for(n=0;n<o;n++)t[l++]=e[n],t[l++]=i[n],t[l++]=r[n],t[l++]=1&s[n];else for(n=0;n<o;n++)t[l++]=e[n],t[l++]=i[n],t[l++]=r[n],t[l++]=1}},{key:"_calculateBandStatistics",value:function(t,e){var i,r=1/0,n=-1/0,a=t.length,s=0;if(e)for(i=0;i<a;i++)e[i]&&(r=(s=t[i])<r?s:r,n=s>n?s:n);else for(i=0;i<a;i++)r=(s=t[i])<r?s:r,n=s>n?s:n;return{minValue:r,maxValue:n}}}],[{key:"createEmptyBand",value:function(t,e){return new(s.getPixelArrayConstructor(t))(e)}},{key:"getPixelArrayConstructor",value:function(t){var e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}}]),i}(l.JSONSupport);(0,a._)([(0,p.property)({json:{write:!0}})],m.prototype,"width",void 0),(0,a._)([(0,p.property)({json:{write:!0}})],m.prototype,"height",void 0),(0,a._)([(0,p.property)({json:{write:!0}})],m.prototype,"pixelType",void 0),(0,a._)([(0,c.cast)("pixelType")],m.prototype,"castPixelType",null),(0,a._)([(0,p.property)({json:{write:!0}})],m.prototype,"validPixelCount",void 0),(0,a._)([(0,p.property)({json:{write:!0}})],m.prototype,"mask",void 0),(0,a._)([(0,p.property)({json:{write:!0}})],m.prototype,"maskIsAlpha",void 0),(0,a._)([(0,p.property)({json:{write:!0}})],m.prototype,"pixels",void 0),(0,a._)([(0,p.property)({json:{write:!0}})],m.prototype,"statistics",void 0);var v=m=s=(0,a._)([(0,x.subclass)("esri.layers.support.PixelBlock")],m)})),e.register("alctY",(function(i,r){t(i.exports,"isValidPixelBlock",(function(){return s})),t(i.exports,"extractBands",(function(){return o})),t(i.exports,"createColormapLUT",(function(){return l})),t(i.exports,"colorize",(function(){return h})),t(i.exports,"estimateStatisticsHistograms",(function(){return f})),t(i.exports,"estimateStatisticsFromHistograms",(function(){return u})),t(i.exports,"createStretchLUT",(function(){return p})),t(i.exports,"createHistogramEqualizationLUT",(function(){return c})),t(i.exports,"stretch",(function(){return x})),t(i.exports,"lookupPixels",(function(){return d})),t(i.exports,"remapColor",(function(){return m})),t(i.exports,"mosaicPixelData",(function(){return v})),t(i.exports,"mosaic",(function(){return y})),t(i.exports,"setValidBoundary",(function(){return k})),t(i.exports,"split",(function(){return B})),t(i.exports,"getLocalArithmeticNorthRotations",(function(){return P})),t(i.exports,"approximateTransform",(function(){return _}));var n=e("7qybv"),a=e("idX6c");function s(t){return(0,n.isSome)(t)&&"esri.layers.support.PixelBlock"===t.declaredClass&&t.pixels&&t.pixels.length>0}function o(t,e){if(null==e||!e.length||!s(t))return t;var i=t.pixels.length;return e&&e.some((function(t){return t>=i}))||1===i&&1===e.length&&0===e[0]?t:i!==e.length||e.some((function(t,e){return t!==e}))?new(0,a.default)({pixelType:t.pixelType,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:e.map((function(e){return t.pixels[e]})),statistics:t.statistics&&e.map((function(e){return t.statistics[e]}))}):t}function l(t){if(t){var e=t.colormap;if(e&&0!==e.length){var i=e.sort((function(t,e){return t[0]-e[0]})),r=0;i[0][0]<0&&(r=i[0][0]);var n,a=Math.max(256,i[i.length-1][0]-r+1),s=new Uint8Array(4*a),o=[],l=0,h=0,f=5===i[0].length;if(a>65536)return i.forEach((function(t){o[t[0]-r]=f?t.slice(1):t.slice(1).concat([255])})),{indexed2DColormap:o,offset:r,alphaSpecified:f};if(t.fillUnspecified)for(l=(n=i[h])[0]-r;l<a;l++)s[4*l]=n[1],s[4*l+1]=n[2],s[4*l+2]=n[3],s[4*l+3]=f?n[4]:255,l===n[0]-r&&(n=h===i.length-1?n:i[++h]);else for(l=0;l<i.length;l++)s[h=4*((n=i[l])[0]-r)]=n[1],s[h+1]=n[2],s[h+2]=n[3],s[h+3]=f?n[4]:255;return{indexedColormap:s,offset:r,alphaSpecified:f}}}}function h(t,e){if(!s(t))return t;if(!e&&(e.indexedColormap||e.indexed2DColormap))return t;var i=t.clone(),r=i.pixels,n=i.mask,a=i.width*i.height;if(1!==r.length)return t;var o,l=e.indexedColormap,h=e.indexed2DColormap,f=e.offset,u=e.alphaSpecified,p=l.length-1,c=0,x=r[0],d=new Uint8Array(x.length),m=new Uint8Array(x.length),v=new Uint8Array(x.length),g=0;if(l)if(n)for(c=0;c<a;c++)n[c]&&((g=4*(x[c]-f))<f||g>p?n[c]=0:(d[c]=l[g],m[c]=l[g+1],v[c]=l[g+2],n[c]=l[g+3]));else{for(n=new Uint8Array(a),c=0;c<a;c++)(g=4*(x[c]-f))<f||g>p?n[c]=0:(d[c]=l[g],m[c]=l[g+1],v[c]=l[g+2],n[c]=l[g+3]);i.mask=n}else if(n)for(c=0;c<a;c++)n[c]&&(o=h[x[c]],d[c]=o[0],m[c]=o[1],v[c]=o[2],n[c]=o[3]);else{for(n=new Uint8Array(a),c=0;c<a;c++)o=h[x[c]],d[c]=o[0],m[c]=o[1],v[c]=o[2],n[c]=o[3];i.mask=n}return i.pixels=[d,m,v],i.statistics=null,i.pixelType="u8",i.maskIsAlpha=u,i}function f(t){if(!s(t))return null;t.statistics||t.updateStatistics();var e,i,r,n,a,o,l,h,f,u,p,c,x,d,m=t.pixels,v=t.mask,g=t.pixelType,y=t.statistics,w=t.width*t.height,k=m.length,A=[],M=[],b=256;for(n=0;n<k;n++){if(o=new Uint32Array(b),h=m[n],"u8"===g)if(e=-.5,i=255.5,v)for(a=0;a<w;a++)v[a]&&o[h[a]]++;else for(a=0;a<w;a++)o[h[a]]++;else{if(e=y[n].minValue,r=((i=y[n].maxValue)-e)/b,l=new Uint32Array(257),v)for(a=0;a<w;a++)v[a]&&l[Math.floor((h[a]-e)/r)]++;else for(a=0;a<w;a++)l[Math.floor((h[a]-e)/r)]++;for(a=0;a<255;a++)o[a]=l[a];o[255]=l[255]+l[256]}for(A.push({min:e,max:i,size:b,counts:o}),f=0,u=0,x=0,a=0;a<b;a++)f+=o[a],u+=a*o[a];for(d=u/f,a=0;a<b;a++)x+=o[a]*Math.pow(a-d,2);p=(d+.5)*(r=(i-e)/b)+e,c=Math.sqrt(x/(f-1))*r,M.push({min:e,max:i,avg:p,stddev:c})}return{statistics:M,histograms:A}}function u(t){for(var e=[],i=0;i<t.length;i++){for(var r=t[i],n=r.min,a=r.max,s=r.size,o=r.counts,l=0,h=0,f=0;f<s;f++)l+=o[f],h+=f*o[f];for(var u=h/l,p=0,c=0;c<s;c++)p+=o[c]*Math.pow(c-u,2);var x=(a-n)/s,d=(u+.5)*x+n,m=Math.sqrt(p/(l-1))*x;e.push({min:n,max:a,avg:d,stddev:m})}return e}function p(t){var e=t.minCutOff,i=t.maxCutOff,r=t.gamma,n=t.pixelType,a=t.outMin||0,s=t.outMax||255;if(-1===["u8","u16","s8","s16"].indexOf(n))return null;var o,l,h=e.length,f=0;"s8"===n?f=-127:"s16"===n&&(f=-32767);var u=256;["u16","s16"].indexOf(n)>-1&&(u=65536);var p=[],c=[],x=s-a;for(o=0;o<h;o++)c[o]=i[o]-e[o],p[o]=x/(i[o]-e[o]);var d,m=r&&r.length>=h,v=[];if(m)for(o=0;o<h;o++)r[o]>1?r[o]>2?v[o]=6.5+Math.pow(r[o]-2,2.5):v[o]=6.5+100*Math.pow(2-r[o],4):v[o]=1;var g,y,w,k=[];if(m)for(o=0;o<h;o++){for(w=[],l=0;l<u;l++)d=((g=l+f)-e[o])/c[o],y=1,r[o]>1&&(y-=Math.pow(1/x,d*v[o])),g<i[o]&&g>e[o]?w[l]=Math.floor(y*x*Math.pow(d,1/r[o]))+a:g>=i[o]?w[l]=s:w[l]=a;k[o]=w}else for(o=0;o<h;o++){for(w=[],l=0;l<u;l++)(g=l+f)<=e[o]?w[l]=a:g>=i[o]?w[l]=s:w[l]=Math.floor((g-e[o])/c[o]*x)+a;k[o]=w}if(null!=t.contrastOffset){var A=function(t,e){var i,r,n=Math.min(Math.max(t,-100),100),a=Math.min(Math.max(e,-100),100),s=255,o=128,l=new Uint8Array(256);for(i=0;i<256;i++)n>0&&n<100?r=(200*i-100*s+2*s*a)/(2*(100-n))+o:n<=0&&n>-100?r=(200*i-100*s+2*s*a)*(100+n)/2e4+o:100===n?r=(r=200*i-100*s+(s+1)*(100-n)+2*s*a)>0?s:0:-100===n&&(r=o),l[i]=r>s?s:r<0?0:r;return l}(t.contrastOffset,t.brightnessOffset);for(o=0;o<h;o++)for(w=k[o],l=0;l<u;l++)w[l]=A[w[l]]}return{lut:k,offset:f}}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256;e=Math.min(e,256);for(var i=t.size,r=t.counts,n=new Uint8Array(i),a=r.reduce((function(t,i){return t+i/e}),0),s=0,o=0,l=0,h=a,f=0;f<i;f++)if(l+=r[f],!(f<i-1&&l+r[f+1]<h)){for(;s<e-1&&h<l;)s++,h+=a;for(var u=o;u<=f;u++)n[u]=s;o=f+1}for(var p=o;p<i;p++)n[p]=e-1;return n}function x(t,e){if(!s(t))return null;var i,r,n,a,o,l=t.clone(),h=l.pixels,f=l.mask,u=e.minCutOff,p=e.maxCutOff,c=e.gamma,x=e.outMin||0,d=e.outMax||255,m=l.width*l.height,v=h.length,g=d-x,y=[],w=[];for(i=0;i<v;i++)w[i]=p[i]-u[i],y[i]=g/(p[i]-u[i]);var k=c&&c.length>=v,A=[];if(k)for(i=0;i<v;i++)c[i]>1?c[i]>2?A[i]=6.5+Math.pow(c[i]-2,2.5):A[i]=6.5+100*Math.pow(2-c[i],4):A[i]=1;if(k)if(null!=f){for(r=0;r<m;r++)if(f[r])for(i=0;i<v;i++)o=((n=h[i][r])-u[i])/w[i],a=1,c[i]>1&&(a-=Math.pow(1/g,o*A[i])),n<p[i]&&n>u[i]?h[i][r]=Math.floor(a*g*Math.pow(o,1/c[i]))+x:n>=p[i]?h[i][r]=d:h[i][r]=x}else for(r=0;r<m;r++)for(i=0;i<v;i++)o=((n=h[i][r])-u[i])/w[i],a=1,c[i]>1&&(a-=Math.pow(1/g,o*A[i])),n<p[i]&&n>u[i]?h[i][r]=Math.floor(a*g*Math.pow(o,1/c[i]))+x:n>=p[i]?h[i][r]=d:h[i][r]=x;else if(null!=f){for(r=0;r<m;r++)if(f[r])for(i=0;i<v;i++)(n=h[i][r])<p[i]&&n>u[i]?h[i][r]=Math.floor((n-u[i])/w[i]*g)+x:n>=p[i]?h[i][r]=d:h[i][r]=x}else for(r=0;r<m;r++)for(i=0;i<v;i++)(n=h[i][r])<p[i]&&n>u[i]?h[i][r]=Math.floor((n-u[i])/w[i]*g)+x:n>=p[i]?h[i][r]=d:h[i][r]=x;return l.pixelType="u8",l.updateStatistics(),l}function d(t,e){if(!s(t))return null;var i,r,n=t.pixels,o=t.mask,l=t.width*t.height,h=n.length,f=e.lut,u=e.offset;f&&1===f[0].length&&(f=n.map((function(){return f})));var p,c,x,d=[];if(u)if(null==o)for(i=0;i<h;i++){for(p=n[i],c=f[i],x=new Uint8Array(l),r=0;r<l;r++)x[r]=c[p[r]-u];d.push(x)}else for(i=0;i<h;i++){for(p=n[i],c=f[i],x=new Uint8Array(l),r=0;r<l;r++)o[r]&&(x[r]=c[p[r]-u]);d.push(x)}else if(null==o)for(i=0;i<h;i++){for(p=n[i],c=f[i],x=new Uint8Array(l),r=0;r<l;r++)x[r]=c[p[r]];d.push(x)}else for(i=0;i<h;i++){for(p=n[i],c=f[i],x=new Uint8Array(l),r=0;r<l;r++)o[r]&&(x[r]=c[p[r]]);d.push(x)}var m=new(0,a.default)({width:t.width,height:t.height,pixels:d,mask:o,pixelType:"u8"});return m.updateStatistics(),m}function m(t,e){if(!s(t))return null;var i,r,n,a,o,l,h=t.clone(),f=h.pixels,u=h.width*h.height,p=e.length,c=Math.floor(p/2),x=e[Math.floor(c)],d=f[0],m=!1,v=new Uint8Array(u),g=new Uint8Array(u),y=new Uint8Array(u),w=h.mask,k=4===e[0].mappedColor.length;for(w||((w=new Uint8Array(u)).fill(k?255:1),h.mask=w),o=0;o<u;o++)if(w[o]){for(i=d[o],m=!1,l=c,r=x,n=0,a=p-1;a-n>1;){if(i===r.value){m=!0;break}i>r.value?n=l:a=l,l=Math.floor((n+a)/2),r=e[Math.floor(l)]}m||(i===e[n].value?(r=e[n],m=!0):i===e[a].value?(r=e[a],m=!0):i<e[n].value?(m=!1,r=null):i>e[n].value&&(i<e[a].value?(r=e[n],m=!0):a===p-1?(m=!1,r=null):(r=e[a],m=!0))),m?(v[o]=r.mappedColor[0],g[o]=r.mappedColor[1],y[o]=r.mappedColor[2],w[o]=r.mappedColor[3]):v[o]=g[o]=y[o]=w[o]=0}return h.pixels=[v,g,y],h.mask=w,h.pixelType="u8",h.maskIsAlpha=k,h}function v(t,e){if(!t||0===t.length)return null;var i=t.find((function(t){return t.pixelBlock}));if(!i||(0,n.isNone)(i.pixelBlock))return null;var r=(i.extent.xmax-i.extent.xmin)/i.pixelBlock.width,a=(i.extent.ymax-i.extent.ymin)/i.pixelBlock.height,s=.01*Math.min(r,a),o=t.sort((function(t,e){return Math.abs(t.extent.ymax-e.extent.ymax)>s?e.extent.ymax-t.extent.ymax:Math.abs(t.extent.xmin-e.extent.xmin)>s?t.extent.xmin-e.extent.xmin:0})),l=Math.min.apply(null,o.map((function(t){return t.extent.xmin}))),h=Math.min.apply(null,o.map((function(t){return t.extent.ymin}))),f=Math.max.apply(null,o.map((function(t){return t.extent.xmax}))),u=Math.max.apply(null,o.map((function(t){return t.extent.ymax}))),p={x:Math.round((e.xmin-l)/r),y:Math.round((u-e.ymax)/a)},c={width:Math.round((f-l)/r),height:Math.round((u-h)/a)},x={width:Math.round((e.xmax-e.xmin)/r),height:Math.round((e.ymax-e.ymin)/a)};return Math.round(c.width/i.pixelBlock.width)*Math.round(c.height/i.pixelBlock.height)!==o.length||p.x<0||p.y<0||c.width<x.width||c.height<x.height?null:{extent:e,pixelBlock:y(o.map((function(t){return t.pixelBlock})),c,{clipOffset:p,clipSize:x})}}function g(t,e,i,r,n,a){var s,o,l,h,f,u,p,c,x=i.block,d=x.width,m=x.height,v=i.offset,g=v.x,y=v.y,w=i.mosaic,k=w.width,A=w.height,M={xmin:(f=g)<=(l=r)*(s=d)?0:f<l*s+s?f-l*s:s,ymin:(u=y)<=(h=n)*(o=m)?0:u<h*o+o?u-h*o:o,xmax:f+(p=k)<=l*s?0:f+p<l*s+s?f+p-l*s:s,ymax:u+(c=A)<=h*o?0:u+c<h*o+o?u+c-h*o:o},b=0,T=0;if(a){var U=a.hasGCSSShiftTransform?360:a.halfWorldWidth,C=d*a.resolutionX,B=a.startX+r*C;B<U&&B+C>U?T=a.rightPadding:B>=U&&(b=a.leftMargin-a.rightPadding,T=0)}if(M.xmax-=T,"number"!=typeof e)for(var S=M.ymin;S<M.ymax;S++)for(var P=(n*m+S-y)*k+(r*d-g)+b,_=S*d,F=M.xmin;F<M.xmax;F++)t[P+F]=e[_+F];else for(var I=M.ymin;I<M.ymax;I++)for(var O=(n*m+I-y)*k+(r*d-g)+b,R=M.xmin;R<M.xmax;R++)t[O+R]=e}function y(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.clipOffset,o=i.clipSize,l=i.alignmentInfo,h=i.blockWidths;if(h)return w(t,e,{blockWidths:h});var f=t.find((function(t){return s(t)}));if((0,n.isNone)(f))return null;for(var u,p,c=o?o.width:e.width,x=o?o.height:e.height,d=f.width,m=f.height,v=e.width/d,y=e.height/m,k={offset:r||{x:0,y:0},mosaic:o||e,block:{width:d,height:m}},A=f.pixelType,M=a.default.getPixelArrayConstructor(A),b=f.pixels.length,T=[],U=0;U<b;U++){u=new M(c*x);for(var C=0;C<y;C++)for(var B=0;B<v;B++){var S=t[C*v+B];s(S)&&g(u,S.pixels[U],k,B,C,l)}T.push(u)}if(t.some((function(t){return(0,n.isNone)(t)||t.mask&&t.mask.length>0}))){p=new Uint8Array(c*x);for(var P=0;P<y;P++)for(var _=0;_<v;_++){var F=t[P*v+_],I=(0,n.isSome)(F)?F.mask:null;g(p,I||(F?1:0),k,_,P,l)}}var O=new(0,a.default)({width:c,height:x,pixels:T,pixelType:A,mask:p});return O.updateStatistics(),O}function w(t,e,i){var r=t.find((function(t){return(0,n.isSome)(t)}));if(!(0,n.isSome)(r))return null;var o=t.some((function(t){return!(0,n.isSome)(t)||!!t.mask})),l=e.width,h=e.height,f=o?new Uint8Array(l*h):null,u=i.blockWidths,p=[],c=r.getPlaneCount(),x=a.default.getPixelArrayConstructor(r.pixelType);if(o)for(var d=0,m=0;d<t.length;m+=u[d],d++){var v=t[d];if(s(v))for(var g=v.mask,y=0;y<h;y++)for(var w=0;w<u[d];w++)f[y*l+w+m]=null==g?255:g[y*v.width+w]}for(var k=0;k<c;k++){for(var A=new x(l*h),M=0,b=0;M<t.length;b+=u[M],M++){var T=t[M];if(s(T)){var U=T.pixels[k];if(null!=U)for(var C=0;C<h;C++)for(var B=0;B<u[M];B++)A[C*l+B+b]=U[C*T.width+B]}}p.push(A)}var S=new(0,a.default)({width:l,height:h,mask:f,pixels:p,pixelType:r.pixelType});return S.updateStatistics(),S}function k(t,e,i){if(!s(t))return null;var r=t.width,n=t.height,a=e.x,o=e.y,l=i.width+a,h=i.height+o;if(a<0||o<0||l>r||h>n)return t;if(0===a&&0===o&&l===r&&h===n)return t;t.mask||(t.mask=new Uint8Array(r*n));for(var f=t.mask,u=0;u<n;u++)for(var p=u*r,c=0;c<r;c++)f[p+c]=u<o||u>=h||c<a||c>=l?0:1;return t.updateStatistics(),t}function A(t){if(!s(t))return null;for(var e=t.clone(),i=t.width,r=t.height,n=t.pixels,a=t.mask,o=n[0],l=e.pixels[0],h=2;h<r-1;h++){for(var f=new Map,u=h-2;u<h+2;u++)for(var p=0;p<4;p++){var c=u*i+p;T(f,o[c],a?a[c]:1)}l[h*i]=M(f),l[h*i+1]=l[h*i+2]=l[h*i];for(var x=3;x<i-1;x++){var d=(h-2)*i+x+1;T(f,o[d],a?a[d]:1),T(f,o[d=(h-1)*i+x+1],a?a[d]:1),T(f,o[d=h*i+x+1],a?a[d]:1),T(f,o[d=(h+1)*i+x+1],a?a[d]:1),b(f,o[d=(h-2)*i+x-3],a?a[d]:1),b(f,o[d=(h-1)*i+x-3],a?a[d]:1),b(f,o[d=h*i+x-3],a?a[d]:1),b(f,o[d=(h+1)*i+x-3],a?a[d]:1),l[h*i+x]=M(f)}l[h*i+x+1]=l[h*i+x]}for(var m=0;m<i;m++)l[m]=l[i+m]=l[2*i+m],l[(r-1)*i+m]=l[(r-2)*i+m];return e.updateStatistics(),e}function M(t){if(0===t.size)return 0;for(var e=0,i=-1,r=0,n=t.keys(),a=n.next();!a.done;)(r=t.get(a.value))>e&&(i=a.value,e=r),a=n.next();return i}function b(t,e,i){if(0!==i){var r=t.get(e);1===r?t.delete(e):t.set(e,r-1)}}function T(t,e,i){0!==i&&t.set(e,t.has(e)?t.get(e)+1:1)}function U(t,e,i){var r=e.x,n=e.y,o=i.width,l=i.height;if(0===r&&0===n&&l===t.height&&o===t.width)return t;var h=t.width,f=t.height,u=Math.max(0,n),p=Math.max(0,r),c=Math.min(r+o,h),x=Math.min(n+l,f);if(c<0||x<0||!s(t))return null;r=Math.max(0,-r),n=Math.max(0,-n);for(var d=t.pixels,m=t.mask,v=o*l,g=d.length,y=[],w=0;w<g;w++){for(var k=d[w],A=a.default.createEmptyBand(t.pixelType,v),M=u;M<x;M++)for(var b=M*h,T=(M+n-u)*o+r,U=p;U<c;U++)A[T++]=k[b+U];y.push(A)}for(var C=new Uint8Array(v),B=u;B<x;B++)for(var S=B*h,P=(B+n-u)*o+r,_=p;_<c;_++)C[P++]=m?m[S+_]:1;var F=new(0,a.default)({width:i.width,height:i.height,pixelType:t.pixelType,pixels:y,mask:C});return F.updateStatistics(),F}function C(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!s(t))return null;for(var i=t.pixels,r=t.width,n=t.height,o=t.mask,l=t.pixelType,h=[],f=Math.round(r/2),u=Math.round(n/2),p=n-1,c=r-1,x=0;x<i.length;x++){for(var d=i[x],m=a.default.createEmptyBand(l,f*u),v=0,g=0;g<n;g+=2)for(var y=0;y<r;y+=2){var w=d[g*r+y];if(e){var k=y===c?w:d[g*r+y+1],A=g===p?w:d[g*r+y+r],M=y===c?A:g===p?k:d[g*r+y+r+1];m[v++]=(w+k+A+M)/4}else m[v++]=w}h.push(m)}var b=null;if(o){b=new Uint8Array(f*u);for(var T=0,U=0;U<n;U+=2)for(var C=0;C<r;C+=2){var B=o[U*r+C];if(e){var S=C===c?B:o[U*r+C+1],P=U===p?B:o[U*r+C+r],_=C===c?P:U===p?S:o[U*r+C+r+1];b[T++]=B*S*P*_?1:0}else b[T++]=B}}return new(0,a.default)({width:f,height:u,pixelType:l,pixels:h,mask:b})}function B(t,e,i){if(!s(t))return null;for(var r=e.width,n=e.height,a=t.width,o=t.height,l=new Map,h={x:0,y:0},f=null==i?1:1+i,u=t,p=0;p<f;p++){for(var c=Math.ceil(a/r),x=Math.ceil(o/n),d=0;d<x;d++){h.y=d*n;for(var m=0;m<c;m++){h.x=m*r;var v=U(u,h,e);l.set("".concat(p,"/").concat(d,"/").concat(m),v)}}p<f-1&&(u=C(u)),a=Math.round(a/2),o=Math.round(o/2)}return l}function S(t,e,i,r){for(var n,a,s,o,l,h,f,u,p,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5,x=t.width,d=t.height,m=e.width,v=e.height,g=r.cols,y=r.rows,w=Math.ceil(m/g-.1/g),k=Math.ceil(v/y-.1/y),A=w*g,M=A*k*y,b=new Float32Array(M),T=new Float32Array(M),U=new Uint32Array(M),C=new Uint32Array(M),B=0,S=0;S<k;S++)for(var P=0;P<w;P++){a=i[n=12*(S*w+P)],s=i[n+1],o=i[n+2],l=i[n+3],h=i[n+4],f=i[n+5];for(var _=0;_<y;_++){B=(S*y+_)*A+P*g,p=(_+.5)/y;for(var F=0;F<_;F++)u=(F+.5)/g,b[B+F]=(a*u+s*p+o)*x-c,T[B+F]=(l*u+h*p+f)*d-c,U[B+F]=Math.round(b[B+F]),C[B+F]=Math.round(T[B+F])}a=i[n+=6],s=i[n+1],o=i[n+2],l=i[n+3],h=i[n+4],f=i[n+5];for(var I=0;I<y;I++){B=(S*y+I)*A+P*g,p=(I+.5)/y;for(var O=I;O<g;O++)u=(O+.5)/g,b[B+O]=(a*u+s*p+o)*x-c,T[B+O]=(l*u+h*p+f)*d-c,U[B+O]=Math.round(b[B+O]),C[B+O]=Math.round(T[B+O])}}return{offsets_x:b,offsets_y:T,offsets_xi:U,offsets_yi:C,gridWidth:A}}function P(t,e){for(var i=e.coefficients,r=e.spacing,n=S(t,t,i,{rows:r[0],cols:r[1]},.5),a=n.offsets_x,s=n.offsets_y,o=n.gridWidth,l=t.width,h=t.height,f=new Float32Array(l*h),u=180/Math.PI,p=0;p<h;p++)for(var c=0;c<l;c++){var x=p*o+c,d=0===p?x:x-o,m=p===h-1?x:x+o,v=a[d]-a[m],g=s[m]-s[d];if(isNaN(v)||isNaN(g))f[p*l+c]=90;else{var y=Math.atan2(g,v)*u;y=(360+y)%360,f[p*l+c]=y}}return f}function _(t,e,i,r){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"nearest";if(!s(t))return null;"majority"===n&&(t=A(t));for(var o=t.pixels,l=t.mask,h=t.pixelType,f=t.width,u=t.height,p=a.default.getPixelArrayConstructor(h),c=o.length,x=e.width,d=e.height,m=!1,v=0;v<i.length;v+=3)-1===i[v]&&-1===i[v+1]&&-1===i[v+2]&&(m=!0);for(var g,y,w=S({width:f,height:u},e,i,r,"majority"===n?0:.5),k=w.offsets_x,M=w.offsets_y,b=w.offsets_xi,T=w.offsets_yi,U=w.gridWidth,C=function(t,e,i){for(var r=t instanceof Float32Array||t instanceof Float64Array?0:.5,n=0;n<d;n++){g=n*U;for(var a=0;a<x;a++){if(k[g]<0||M[g]<0)t[n*x+a]=0;else if(i)t[n*x+a]=e[b[g]+T[g]*f];else{var s=Math.floor(k[g]),o=Math.floor(M[g]),h=Math.ceil(k[g]),u=Math.ceil(M[g]),p=k[g]-s,c=M[g]-o;if(!l||l[s+o*f]&&l[s+o*f]&&l[s+u*f]&&l[h+u*f]){var m=(1-p)*e[s+o*f]+p*e[h+o*f],v=(1-p)*e[s+u*f]+p*e[h+u*f];t[n*x+a]=(1-c)*m+c*v+r}else t[n*x+a]=e[b[g]+T[g]*f]}g++}}},B=[],P=0;P<c;P++)C(y=new p(x*d),o[P],"nearest"===n||"majority"===n),B.push(y);var _=new(0,a.default)({width:x,height:d,pixelType:h,pixels:B});if(l)_.mask=new Uint8Array(x*d),C(_.mask,l,!0);else if(m){_.mask=new Uint8Array(x*d);for(var F=0;F<x*d;F++)_.mask[F]=k[F]<0||M[F]<0?0:1}return _.updateStatistics(),_}}))}();
//# sourceMappingURL=ImageryLayer.95860883.js.map