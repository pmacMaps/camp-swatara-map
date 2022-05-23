var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;e.register("eJiUm",(function(t,n){var r,i,o,a;r=t.exports,i="b",o=function(){return h},Object.defineProperty(r,i,{get:o,set:a,enumerable:!0,configurable:!0});var u=e("el86H"),s=e("5Io6y"),l="node_modules/@arcgis/core/chunks/basis_transcoder.js";var c,f,p,d={exports:{}};c=d,f=(f="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||l,p=function(t){var n,r,i=void 0!==(t=t||{})?t:{};i.ready=new Promise((function(e,t){n=e,r=t}));var o,a={};for(o in i)i.hasOwnProperty(o)&&(a[o]=i[o]);var l,c,p,d;l="object"==typeof window,c="function"==typeof importScripts,p="object"==typeof s&&"object"==typeof s.versions&&"string"==typeof s.versions.node,d=!l&&!p&&!c;var y,h,v,m,g="";p?(g=c?e("5Io6y").dirname(g)+"/":"node_modules/@arcgis/core/chunks/",y=function(t,n){return v||(v=e("5Io6y")),m||(m=e("5Io6y")),t=m.normalize(t),v.readFileSync(t,n?null:"utf8")},h=function(e){var t=y(e,!0);return t.buffer||(t=new Uint8Array(t)),P(t.buffer),t},s.argv.length>1&&s.argv[1].replace(/\\/g,"/"),s.argv.slice(2),s.on("uncaughtException",(function(e){if(!(e instanceof Mt))throw e})),s.on("unhandledRejection",ne),i.inspect=function(){return"[Emscripten Module object]"}):d?("undefined"!=typeof read&&(y=function(e){return read(e)}),h=function(e){var t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(e)):(P("object"==typeof(t=read(e,"binary"))),t)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(l||c)&&(c?g=self.location.href:document.currentScript&&(g=document.currentScript.src),f&&(g=f),g=0!==g.indexOf("blob:")?g.substr(0,g.lastIndexOf("/")+1):"",y=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(null),t.responseText},c&&(h=function(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}));var b,$,C=i.print||console.log.bind(console),w=i.printErr||console.warn.bind(console);for(o in a)a.hasOwnProperty(o)&&(i[o]=a[o]);a=null,i.arguments,i.thisProgram,i.quit,i.wasmBinary&&(b=i.wasmBinary),i.noExitRuntime,"object"!=typeof WebAssembly&&ne("no native wasm support detected");var T=new WebAssembly.Table({initial:157,maximum:157,element:"anyfunc"}),_=!1;function P(e,t){e||ne("Assertion failed: "+t)}var A="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function W(e,t,n){for(var r=t+n,i=t;e[i]&&!(i>=r);)++i;if(i-t>16&&e.subarray&&A)return A.decode(e.subarray(t,i));for(var o="";t<i;){var a=e[t++];if(128&a){var u=63&e[t++];if(192!=(224&a)){var s=63&e[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&e[t++])<65536)o+=String.fromCharCode(a);else{var l=a-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function E(e,t){return e?W(U,e,t):""}var S="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function O(e,t){for(var n=e,r=n>>1,i=r+t/2;!(r>=i)&&V[r];)++r;if((n=r<<1)-e>32&&S)return S.decode(U.subarray(e,n));for(var o=0,a="";;){var u=M[e+2*o>>1];if(0==u||o==t/2)return a;++o,a+=String.fromCharCode(u)}}function j(e,t,n){if(void 0===n&&(n=2147483647),n<2)return 0;for(var r=t,i=(n-=2)<2*e.length?n/2:e.length,o=0;o<i;++o){var a=e.charCodeAt(o);M[t>>1]=a,t+=2}return M[t>>1]=0,t-r}function k(e){return 2*e.length}function F(e,t){for(var n=0,r="";!(n>=t/4);){var i=H[e+4*n>>2];if(0==i)break;if(++n,i>=65536){var o=i-65536;r+=String.fromCharCode(55296|o>>10,56320|1023&o)}else r+=String.fromCharCode(i)}return r}function R(e,t,n){if(void 0===n&&(n=2147483647),n<4)return 0;for(var r=t,i=r+n-4,o=0;o<e.length;++o){var a=e.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++o)),H[t>>2]=a,(t+=4)+4>i)break}return H[t>>2]=0,t-r}function x(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r>=55296&&r<=57343&&++n,t+=4}return t}var I,D,U,M,V,H,z,B,N;function G(e){I=e,i.HEAP8=D=new Int8Array(e),i.HEAP16=M=new Int16Array(e),i.HEAP32=H=new Int32Array(e),i.HEAPU8=U=new Uint8Array(e),i.HEAPU16=V=new Uint16Array(e),i.HEAPU32=z=new Uint32Array(e),i.HEAPF32=B=new Float32Array(e),i.HEAPF64=N=new Float64Array(e)}var L=i.INITIAL_MEMORY||16777216;function q(e){for(;e.length>0;){var t=e.shift();if("function"!=typeof t){var n=t.func;"number"==typeof n?void 0===t.arg?i.dynCall_v(n):i.dynCall_vi(n,t.arg):n(void 0===t.arg?null:t.arg)}else t(i)}}($=i.wasmMemory?i.wasmMemory:new WebAssembly.Memory({initial:L/65536,maximum:32768}))&&(I=$.buffer),L=I.byteLength,G(I),H[80624]=5565536;var J=[],X=[],Y=[],Z=[];var K=Math.ceil,Q=Math.floor,ee=0,te=null;function ne(e){i.onAbort&&i.onAbort(e),w(e+=""),_=!0,e="abort("+e+"). Build with -s ASSERTIONS=1 for more info.";var t=new WebAssembly.RuntimeError(e);throw r(t),t}function re(e,t){return String.prototype.startsWith?e.startsWith(t):0===e.indexOf(t)}i.preloadedImages={},i.preloadedAudios={};function ie(e){return re(e,"data:application/octet-stream;base64,")}function oe(e){return re(e,"file://")}var ae,ue="basis_transcoder.wasm";function se(){try{if(b)return new Uint8Array(b);if(h)return h(ue);throw"both async and sync fetching of the wasm failed"}catch(e){ne(e)}}ie(ue)||(ae=ue,ue=i.locateFile?i.locateFile(ae,g):g+ae),X.push({func:function(){xt()}});var le={};function ce(e){for(;e.length;){var t=e.pop();e.pop()(t)}}function fe(e){return this.fromWireType(z[e>>2])}var pe={},de={},ye={};function he(e){if(void 0===e)return"_unknown";var t=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=48&&t<=57?"_"+e:e}function ve(e,t){return e=he(e),function(){return t.apply(this,arguments)}}function me(e,t){var n=ve(t,(function(e){this.name=t,this.message=e;var n=new Error(e).stack;void 0!==n&&(this.stack=this.toString()+"\n"+n.replace(/^Error(:[^\n]*)?\n/,""))}));return n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},n}var ge=void 0;function be(e){throw new ge(e)}function $e(e,t,n){function r(t){var r=n(t);r.length!==e.length&&be("Mismatched type converter count");for(var i=0;i<e.length;++i)Ae(e[i],r[i])}e.forEach((function(e){ye[e]=t}));var i=new Array(t.length),o=[],a=0;t.forEach((function(e,t){de.hasOwnProperty(e)?i[t]=de[e]:(o.push(e),pe.hasOwnProperty(e)||(pe[e]=[]),pe[e].push((function(){i[t]=de[e],++a===o.length&&r(i)})))})),0===o.length&&r(i)}function Ce(e){switch(e){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+e)}}var we=void 0;function Te(e){for(var t="",n=e;U[n];)t+=we[U[n++]];return t}var _e=void 0;function Pe(e){throw new _e(e)}function Ae(e,t,n){if(n=n||{},!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=t.name;if(e||Pe('type "'+r+'" must have a positive integer typeid pointer'),de.hasOwnProperty(e)){if(n.ignoreDuplicateRegistrations)return;Pe("Cannot register type '"+r+"' twice")}if(de[e]=t,delete ye[e],pe.hasOwnProperty(e)){var i=pe[e];delete pe[e],i.forEach((function(e){e()}))}}function We(e){if(!(this instanceof Ve))return!1;if(!(e instanceof Ve))return!1;for(var t=this.$$.ptrType.registeredClass,n=this.$$.ptr,r=e.$$.ptrType.registeredClass,i=e.$$.ptr;t.baseClass;)n=t.upcast(n),t=t.baseClass;for(;r.baseClass;)i=r.upcast(i),r=r.baseClass;return t===r&&n===i}function Ee(e){Pe(e.$$.ptrType.registeredClass.name+" instance already deleted")}var Se=!1;function Oe(e){}function je(e){var t;e.count.value-=1,0===e.count.value&&((t=e).smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr))}function ke(e){return"undefined"==typeof FinalizationGroup?(ke=function(e){return e},e):(Se=new FinalizationGroup((function(e){for(var t=e.next();!t.done;t=e.next()){var n=t.value;n.ptr?je(n):console.warn("object already deleted: "+n.ptr)}})),Oe=function(e){Se.unregister(e.$$)},(ke=function(e){return Se.register(e,e.$$,e.$$),e})(e))}function Fe(){if(this.$$.ptr||Ee(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var e,t=ke(Object.create(Object.getPrototypeOf(this),{$$:{value:(e=this.$$,{count:e.count,deleteScheduled:e.deleteScheduled,preservePointerOnDelete:e.preservePointerOnDelete,ptr:e.ptr,ptrType:e.ptrType,smartPtr:e.smartPtr,smartPtrType:e.smartPtrType})}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t}function Re(){this.$$.ptr||Ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Pe("Object already scheduled for deletion"),Oe(this),je(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)}function xe(){return!this.$$.ptr}var Ie=void 0,De=[];function Ue(){for(;De.length;){var e=De.pop();e.$$.deleteScheduled=!1,e.delete()}}function Me(){return this.$$.ptr||Ee(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Pe("Object already scheduled for deletion"),De.push(this),1===De.length&&Ie&&Ie(Ue),this.$$.deleteScheduled=!0,this}function Ve(){}var He={};function ze(e,t,n){if(void 0===e[t].overloadTable){var r=e[t];e[t]=function(){return e[t].overloadTable.hasOwnProperty(arguments.length)||Pe("Function '"+n+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+e[t].overloadTable+")!"),e[t].overloadTable[arguments.length].apply(this,arguments)},e[t].overloadTable=[],e[t].overloadTable[r.argCount]=r}}function Be(e,t,n){i.hasOwnProperty(e)?((void 0===n||void 0!==i[e].overloadTable&&void 0!==i[e].overloadTable[n])&&Pe("Cannot register public name '"+e+"' twice"),ze(i,e,e),i.hasOwnProperty(n)&&Pe("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),i[e].overloadTable[n]=t):(i[e]=t,void 0!==n&&(i[e].numArguments=n))}function Ne(e,t,n,r,i,o,a,u){this.name=e,this.constructor=t,this.instancePrototype=n,this.rawDestructor=r,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Ge(e,t,n){for(;t!==n;)t.upcast||Pe("Expected null or instance of "+n.name+", got an instance of "+t.name),e=t.upcast(e),t=t.baseClass;return e}function Le(e,t){if(null===t)return this.isReference&&Pe("null is not a valid "+this.name),0;t.$$||Pe('Cannot pass "'+wt(t)+'" as a '+this.name),t.$$.ptr||Pe("Cannot pass deleted object as a pointer of type "+this.name);var n=t.$$.ptrType.registeredClass;return Ge(t.$$.ptr,n,this.registeredClass)}function qe(e,t){var n;if(null===t)return this.isReference&&Pe("null is not a valid "+this.name),this.isSmartPointer?(n=this.rawConstructor(),null!==e&&e.push(this.rawDestructor,n),n):0;t.$$||Pe('Cannot pass "'+wt(t)+'" as a '+this.name),t.$$.ptr||Pe("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&t.$$.ptrType.isConst&&Pe("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);var r=t.$$.ptrType.registeredClass;if(n=Ge(t.$$.ptr,r,this.registeredClass),this.isSmartPointer)switch(void 0===t.$$.smartPtr&&Pe("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?n=t.$$.smartPtr:Pe("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:n=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)n=t.$$.smartPtr;else{var i=t.clone();n=this.rawShare(n,bt((function(){i.delete()}))),null!==e&&e.push(this.rawDestructor,n)}break;default:Pe("Unsupporting sharing policy")}return n}function Je(e,t){if(null===t)return this.isReference&&Pe("null is not a valid "+this.name),0;t.$$||Pe('Cannot pass "'+wt(t)+'" as a '+this.name),t.$$.ptr||Pe("Cannot pass deleted object as a pointer of type "+this.name),t.$$.ptrType.isConst&&Pe("Cannot convert argument of type "+t.$$.ptrType.name+" to parameter type "+this.name);var n=t.$$.ptrType.registeredClass;return Ge(t.$$.ptr,n,this.registeredClass)}function Xe(e){return this.rawGetPointee&&(e=this.rawGetPointee(e)),e}function Ye(e){this.rawDestructor&&this.rawDestructor(e)}function Ze(e){null!==e&&e.delete()}function Ke(e,t,n){if(t===n)return e;if(void 0===n.baseClass)return null;var r=Ke(e,t,n.baseClass);return null===r?null:n.downcast(r)}function Qe(){return Object.keys(nt).length}function et(){var e=[];for(var t in nt)nt.hasOwnProperty(t)&&e.push(nt[t]);return e}function tt(e){Ie=e,De.length&&Ie&&Ie(Ue)}var nt={};function rt(e,t){return t=function(e,t){for(void 0===t&&Pe("ptr should not be undefined");e.baseClass;)t=e.upcast(t),e=e.baseClass;return t}(e,t),nt[t]}function it(e,t){return t.ptrType&&t.ptr||be("makeClassHandle requires ptr and ptrType"),!!t.smartPtrType!=!!t.smartPtr&&be("Both smartPtrType and smartPtr must be specified"),t.count={value:1},ke(Object.create(e,{$$:{value:t}}))}function ot(e){var t=this.getPointee(e);if(!t)return this.destructor(e),null;var n=rt(this.registeredClass,t);if(void 0!==n){if(0===n.$$.count.value)return n.$$.ptr=t,n.$$.smartPtr=e,n.clone();var r=n.clone();return this.destructor(e),r}function i(){return this.isSmartPointer?it(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:e}):it(this.registeredClass.instancePrototype,{ptrType:this,ptr:e})}var o,a=this.registeredClass.getActualType(t),u=He[a];if(!u)return i.call(this);o=this.isConst?u.constPointerType:u.pointerType;var s=Ke(t,this.registeredClass,o.registeredClass);return null===s?i.call(this):this.isSmartPointer?it(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:e}):it(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}function at(e,t,n,r,i,o,a,u,s,l,c){this.name=e,this.registeredClass=t,this.isReference=n,this.isConst=r,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=l,this.rawDestructor=c,i||void 0!==t.baseClass?this.toWireType=qe:r?(this.toWireType=Le,this.destructorFunction=null):(this.toWireType=Je,this.destructorFunction=null)}function ut(e,t,n){i.hasOwnProperty(e)||be("Replacing nonexistant public symbol"),void 0!==i[e].overloadTable&&void 0!==n?i[e].overloadTable[n]=t:(i[e]=t,i[e].argCount=n)}function st(e,t){e=Te(e);var n,r,o=(n=i["dynCall_"+e],r=[t],function(){r.length=arguments.length+1;for(var e=0;e<arguments.length;e++)r[e+1]=arguments[e];return n.apply(null,r)});return"function"!=typeof o&&Pe("unknown function pointer with signature "+e+": "+t),o}var lt=void 0;function ct(e){var t=Ut(e),n=Te(t);return Dt(t),n}function ft(e,t){var n=[],r={};throw t.forEach((function e(t){r[t]||de[t]||(ye[t]?ye[t].forEach(e):(n.push(t),r[t]=!0))})),new lt(e+": "+n.map(ct).join([", "]))}function pt(e,t){for(var n=[],r=0;r<e;r++)n.push(H[(t>>2)+r]);return n}function dt(e,t,n,r,i){var o=t.length;o<2&&Pe("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==t[1]&&null!==n,u=!1,s=1;s<t.length;++s)if(null!==t[s]&&void 0===t[s].destructorFunction){u=!0;break}var l="void"!==t[0].name,c=o-2,f=new Array(c),p=[],d=[];return function(){var n;arguments.length!==c&&Pe("function "+e+" called with "+arguments.length+" arguments, expected "+c+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(n=t[1].toWireType(d,this),p[1]=n);for(var o=0;o<c;++o)f[o]=t[o+2].toWireType(d,arguments[o]),p.push(f[o]);var s=r.apply(null,p);if(u)ce(d);else for(o=a?1:2;o<t.length;o++){var y=1===o?n:f[o-2];null!==t[o].destructorFunction&&t[o].destructorFunction(y)}if(l)return t[0].fromWireType(s)}}var yt=[],ht=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function vt(e){e>4&&0==--ht[e].refcount&&(ht[e]=void 0,yt.push(e))}function mt(){for(var e=0,t=5;t<ht.length;++t)void 0!==ht[t]&&++e;return e}function gt(){for(var e=5;e<ht.length;++e)if(void 0!==ht[e])return ht[e];return null}function bt(e){switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=yt.length?yt.pop():ht.length;return ht[t]={refcount:1,value:e},t}}function $t(e,t,n){switch(t){case 0:return function(e){var t=n?D:U;return this.fromWireType(t[e])};case 1:return function(e){var t=n?M:V;return this.fromWireType(t[e>>1])};case 2:return function(e){var t=n?H:z;return this.fromWireType(t[e>>2])};default:throw new TypeError("Unknown integer type: "+e)}}function Ct(e,t){var n=de[e];return void 0===n&&Pe(t+" has unknown type "+ct(e)),n}function wt(e){if(null===e)return"null";var t=typeof e;return"object"===t||"array"===t||"function"===t?e.toString():""+e}function Tt(e,t){switch(t){case 2:return function(e){return this.fromWireType(B[e>>2])};case 3:return function(e){return this.fromWireType(N[e>>3])};default:throw new TypeError("Unknown float type: "+e)}}function _t(e,t,n){switch(t){case 0:return n?function(e){return D[e]}:function(e){return U[e]};case 1:return n?function(e){return M[e>>1]}:function(e){return V[e>>1]};case 2:return n?function(e){return H[e>>2]}:function(e){return z[e>>2]};default:throw new TypeError("Unknown integer type: "+e)}}function Pt(e){return e||Pe("Cannot use deleted val. handle = "+e),ht[e].value}var At={};function Wt(e){var t=At[e];return void 0===t?Te(e):t}var Et=[];function St(){if("object"==typeof globalThis)return globalThis;function e(e){e.$$$embind_global$$$=e;var t="object"==typeof $$$embind_global$$$&&e.$$$embind_global$$$===e;return t||delete e.$$$embind_global$$$,t}if("object"==typeof $$$embind_global$$$)return $$$embind_global$$$;if("object"==typeof u.c&&e(u.c)?$$$embind_global$$$=u.c:"object"==typeof self&&e(self)&&($$$embind_global$$$=self),"object"==typeof $$$embind_global$$$)return $$$embind_global$$$;throw Error("unable to get global object.")}var Ot={};function jt(e){try{return $.grow(e-I.byteLength+65535>>>16),G($.buffer),1}catch(e){}}var kt={mappings:{},buffers:[null,[],[]],printChar:function(e,t){var n=kt.buffers[e];0===t||10===t?((1===e?C:w)(W(n,0)),n.length=0):n.push(t)},varargs:void 0,get:function(){return kt.varargs+=4,H[kt.varargs-4>>2]},getStr:function(e){return E(e)},get64:function(e,t){return e}};ge=i.InternalError=me(Error,"InternalError"),function(){for(var e=new Array(256),t=0;t<256;++t)e[t]=String.fromCharCode(t);we=e}(),_e=i.BindingError=me(Error,"BindingError"),Ve.prototype.isAliasOf=We,Ve.prototype.clone=Fe,Ve.prototype.delete=Re,Ve.prototype.isDeleted=xe,Ve.prototype.deleteLater=Me,at.prototype.getPointee=Xe,at.prototype.destructor=Ye,at.prototype.argPackAdvance=8,at.prototype.readValueFromPointer=fe,at.prototype.deleteObject=Ze,at.prototype.fromWireType=ot,i.getInheritedInstanceCount=Qe,i.getLiveInheritedInstances=et,i.flushPendingDeletes=Ue,i.setDelayFunction=tt,lt=i.UnboundTypeError=me(Error,"UnboundTypeError"),i.count_emval_handles=mt,i.get_first_emval=gt;var Ft={u:function(e){var t=le[e];delete le[e];var n=t.rawConstructor,r=t.rawDestructor,i=t.fields;$e([e],i.map((function(e){return e.getterReturnType})).concat(i.map((function(e){return e.setterArgumentType}))),(function(e){var o={};return i.forEach((function(t,n){var r=t.fieldName,a=e[n],u=t.getter,s=t.getterContext,l=e[n+i.length],c=t.setter,f=t.setterContext;o[r]={read:function(e){return a.fromWireType(u(s,e))},write:function(e,t){var n=[];c(f,e,l.toWireType(n,t)),ce(n)}}})),[{name:t.name,fromWireType:function(e){var t={};for(var n in o)t[n]=o[n].read(e);return r(e),t},toWireType:function(e,t){for(var i in o)if(!(i in t))throw new TypeError('Missing field:  "'+i+'"');var a=n();for(i in o)o[i].write(a,t[i]);return null!==e&&e.push(r,a),a},argPackAdvance:8,readValueFromPointer:fe,destructorFunction:r}]}))},J:function(e,t,n,r,i){var o=Ce(n);Ae(e,{name:t=Te(t),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?r:i},argPackAdvance:8,readValueFromPointer:function(e){var r;if(1===n)r=D;else if(2===n)r=M;else{if(4!==n)throw new TypeError("Unknown boolean type size: "+t);r=H}return this.fromWireType(r[e>>o])},destructorFunction:null})},y:function(e,t,n,r,i,o,a,u,s,l,c,f,p){c=Te(c),o=st(i,o),u&&(u=st(a,u)),l&&(l=st(s,l)),p=st(f,p);var d=he(c);Be(d,(function(){ft("Cannot construct "+c+" due to unbound types",[r])})),$e([e,t,n],r?[r]:[],(function(t){var n,i;t=t[0],i=r?(n=t.registeredClass).instancePrototype:Ve.prototype;var a=ve(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new _e("Use 'new' to construct "+c);if(void 0===f.constructor_body)throw new _e(c+" has no accessible constructor");var e=f.constructor_body[arguments.length];if(void 0===e)throw new _e("Tried to invoke ctor of "+c+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return e.apply(this,arguments)})),s=Object.create(i,{constructor:{value:a}});a.prototype=s;var f=new Ne(c,a,s,p,n,o,u,l),y=new at(c,f,!0,!1,!1),h=new at(c+"*",f,!1,!1,!1),v=new at(c+" const*",f,!1,!0,!1);return He[e]={pointerType:h,constPointerType:v},ut(d,a),[y,h,v]}))},x:function(e,t,n,r,i,o){P(t>0);var a=pt(t,n);i=st(r,i);var u=[o],s=[];$e([],[e],(function(e){var n="constructor "+(e=e[0]).name;if(void 0===e.registeredClass.constructor_body&&(e.registeredClass.constructor_body=[]),void 0!==e.registeredClass.constructor_body[t-1])throw new _e("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+e.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return e.registeredClass.constructor_body[t-1]=function(){ft("Cannot construct "+e.name+" due to unbound types",a)},$e([],a,(function(r){return e.registeredClass.constructor_body[t-1]=function(){arguments.length!==t-1&&Pe(n+" called with "+arguments.length+" arguments, expected "+(t-1)),s.length=0,u.length=t;for(var e=1;e<t;++e)u[e]=r[e].toWireType(s,arguments[e-1]);var o=i.apply(null,u);return ce(s),r[0].fromWireType(o)},[]})),[]}))},d:function(e,t,n,r,i,o,a,u){var s=pt(n,r);t=Te(t),o=st(i,o),$e([],[e],(function(e){var r=(e=e[0]).name+"."+t;function i(){ft("Cannot call "+r+" due to unbound types",s)}u&&e.registeredClass.pureVirtualFunctions.push(t);var l=e.registeredClass.instancePrototype,c=l[t];return void 0===c||void 0===c.overloadTable&&c.className!==e.name&&c.argCount===n-2?(i.argCount=n-2,i.className=e.name,l[t]=i):(ze(l,t,r),l[t].overloadTable[n-2]=i),$e([],s,(function(i){var u=dt(r,i,e,o,a);return void 0===l[t].overloadTable?(u.argCount=n-2,l[t]=u):l[t].overloadTable[n-2]=u,[]})),[]}))},k:function(e,t,n){e=Te(e),$e([],[t],(function(t){return t=t[0],i[e]=t.fromWireType(n),[]}))},I:function(e,t){Ae(e,{name:t=Te(t),fromWireType:function(e){var t=ht[e].value;return vt(e),t},toWireType:function(e,t){return bt(t)},argPackAdvance:8,readValueFromPointer:fe,destructorFunction:null})},n:function(e,t,n,r){var i=Ce(n);function o(){}t=Te(t),o.values={},Ae(e,{name:t,constructor:o,fromWireType:function(e){return this.constructor.values[e]},toWireType:function(e,t){return t.value},argPackAdvance:8,readValueFromPointer:$t(t,i,r),destructorFunction:null}),Be(t,o)},a:function(e,t,n){var r=Ct(e,"enum");t=Te(t);var i=r.constructor,o=Object.create(r.constructor.prototype,{value:{value:n},constructor:{value:ve(r.name+"_"+t,(function(){}))}});i.values[n]=o,i[t]=o},B:function(e,t,n){var r=Ce(n);Ae(e,{name:t=Te(t),fromWireType:function(e){return e},toWireType:function(e,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+wt(t)+'" to '+this.name);return t},argPackAdvance:8,readValueFromPointer:Tt(t,r),destructorFunction:null})},i:function(e,t,n,r,i,o){var a=pt(t,n);e=Te(e),i=st(r,i),Be(e,(function(){ft("Cannot call "+e+" due to unbound types",a)}),t-1),$e([],a,(function(n){var r=[n[0],null].concat(n.slice(1));return ut(e,dt(e,r,null,i,o),t-1),[]}))},j:function(e,t,n,r,i){t=Te(t),-1===i&&(i=4294967295);var o=Ce(n),a=function(e){return e};if(0===r){var u=32-8*n;a=function(e){return e<<u>>>u}}var s=-1!=t.indexOf("unsigned");Ae(e,{name:t,fromWireType:a,toWireType:function(e,n){if("number"!=typeof n&&"boolean"!=typeof n)throw new TypeError('Cannot convert "'+wt(n)+'" to '+this.name);if(n<r||n>i)throw new TypeError('Passing a number "'+wt(n)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+r+", "+i+"]!");return s?n>>>0:0|n},argPackAdvance:8,readValueFromPointer:_t(t,o,0!==r),destructorFunction:null})},h:function(e,t,n){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function i(e){var t=z,n=t[e>>=2],i=t[e+1];return new r(I,i,n)}Ae(e,{name:n=Te(n),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},C:function(e,t){var n="std::string"===(t=Te(t));Ae(e,{name:t,fromWireType:function(e){var t,r=z[e>>2];if(n)for(var i=e+4,o=0;o<=r;++o){var a=e+4+o;if(o==r||0==U[a]){var u=E(i,a-i);void 0===t?t=u:(t+=String.fromCharCode(0),t+=u),i=a+1}}else{var s=new Array(r);for(o=0;o<r;++o)s[o]=String.fromCharCode(U[e+4+o]);t=s.join("")}return Dt(e),t},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var r="string"==typeof t;r||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||Pe("Cannot pass non-string to std::string");var i=(n&&r?function(){return function(e){for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&e.charCodeAt(++n)),r<=127?++t:t+=r<=2047?2:r<=65535?3:4}return t}(t)}:function(){return t.length})(),o=It(4+i+1);if(z[o>>2]=i,n&&r)(function(e,t,n,r){if(!(r>0))return 0;for(var i=n,o=n+r-1,a=0;a<e.length;++a){var u=e.charCodeAt(a);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++a)),u<=127){if(n>=o)break;t[n++]=u}else if(u<=2047){if(n+1>=o)break;t[n++]=192|u>>6,t[n++]=128|63&u}else if(u<=65535){if(n+2>=o)break;t[n++]=224|u>>12,t[n++]=128|u>>6&63,t[n++]=128|63&u}else{if(n+3>=o)break;t[n++]=240|u>>18,t[n++]=128|u>>12&63,t[n++]=128|u>>6&63,t[n++]=128|63&u}}t[n]=0})(t,U,o+4,i+1);else if(r)for(var a=0;a<i;++a){var u=t.charCodeAt(a);u>255&&(Dt(o),Pe("String has UTF-16 code units that do not fit in 8 bits")),U[o+4+a]=u}else for(a=0;a<i;++a)U[o+4+a]=t[a];return null!==e&&e.push(Dt,o),o},argPackAdvance:8,readValueFromPointer:fe,destructorFunction:function(e){Dt(e)}})},w:function(e,t,n){var r,i,o,a,u;n=Te(n),2===t?(r=O,i=j,a=k,o=function(){return V},u=1):4===t&&(r=F,i=R,a=x,o=function(){return z},u=2),Ae(e,{name:n,fromWireType:function(e){for(var n,i=z[e>>2],a=o(),s=e+4,l=0;l<=i;++l){var c=e+4+l*t;if(l==i||0==a[c>>u]){var f=r(s,c-s);void 0===n?n=f:(n+=String.fromCharCode(0),n+=f),s=c+t}}return Dt(e),n},toWireType:function(e,r){"string"!=typeof r&&Pe("Cannot pass non-string to C++ string type "+n);var o=a(r),s=It(4+o+t);return z[s>>2]=o>>u,i(r,s+4,o+t),null!==e&&e.push(Dt,s),s},argPackAdvance:8,readValueFromPointer:fe,destructorFunction:function(e){Dt(e)}})},v:function(e,t,n,r,i,o){le[e]={name:Te(t),rawConstructor:st(n,r),rawDestructor:st(i,o),fields:[]}},c:function(e,t,n,r,i,o,a,u,s,l){le[e].fields.push({fieldName:Te(t),getterReturnType:n,getter:st(r,i),getterContext:o,setterArgumentType:a,setter:st(u,s),setterContext:l})},K:function(e,t){Ae(e,{isVoid:!0,name:t=Te(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(e,t){}})},m:function(e,t,n){e=Pt(e),t=Ct(t,"emval::as");var r=[],i=bt(r);return H[n>>2]=i,t.toWireType(r,e)},s:function(e,t,n,r){(e=Et[e])(t=Pt(t),n=Wt(n),null,r)},b:vt,z:function(e){return 0===e?bt(St()):(e=Wt(e),bt(St()[e]))},t:function(e,t){var n,r,i=function(e,t){for(var n=new Array(e),r=0;r<e;++r)n[r]=Ct(H[(t>>2)+r],"parameter "+r);return n}(e,t),o=i[0],a=new Array(e-1);return n=function(t,n,r,u){for(var s=0,l=0;l<e-1;++l)a[l]=i[l+1].readValueFromPointer(u+s),s+=i[l+1].argPackAdvance;var c=t[n].apply(t,a);for(l=0;l<e-1;++l)i[l+1].deleteObject&&i[l+1].deleteObject(a[l]);if(!o.isVoid)return o.toWireType(r,c)},r=Et.length,Et.push(n),r},r:function(e){return e=Wt(e),bt(i[e])},e:function(e,t){return bt((e=Pt(e))[t=Pt(t)])},g:function(e){e>4&&(ht[e].refcount+=1)},q:function(e,t,n,r){e=Pt(e);var i,o,a=Ot[t];return a||(i=t,o=new Array(i+1),a=function(e,t,n){o[0]=e;for(var r=0;r<i;++r){var a=Ct(H[(t>>2)+r],"parameter "+r);o[r+1]=a.readValueFromPointer(n),n+=a.argPackAdvance}return bt(new(e.bind.apply(e,o)))},Ot[t]=a),a(e,n,r)},f:function(e){return bt(Wt(e))},l:function(e){ce(ht[e].value),vt(e)},p:function(){ne()},F:function(e,t,n){U.copyWithin(e,t,t+n)},G:function(e){e>>>=0;var t,n,r=U.length,i=2147483648;if(e>i)return!1;for(var o=1;o<=4;o*=2){var a=r*(1+.2/o);if(a=Math.min(a,e+100663296),jt(Math.min(i,((t=Math.max(16777216,e,a))%(n=65536)>0&&(t+=n-t%n),t))))return!0}return!1},H:function(e){return 0},D:function(e,t,n,r,i){},A:function(e,t,n,r){for(var i=0,o=0;o<n;o++){for(var a=H[t+8*o>>2],u=H[t+(8*o+4)>>2],s=0;s<u;s++)kt.printChar(e,U[a+s]);i+=u}return H[r>>2]=i,0},memory:$,o:function(e){return(e=+e)>=0?+Q(e+.5):+K(e-.5)},E:function(e){},table:T};!function(){var e={a:Ft};function t(e,t){var n=e.exports;i.asm=n,function(e){if(ee--,i.monitorRunDependencies&&i.monitorRunDependencies(ee),0==ee&&te){var t=te;te=null,t()}}()}function n(e){t(e.instance)}function r(t){return(b||!l&&!c||"function"!=typeof fetch||oe(ue)?new Promise((function(e,t){e(se())})):fetch(ue,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+ue+"'";return e.arrayBuffer()})).catch((function(){return se()}))).then((function(t){return WebAssembly.instantiate(t,e)})).then(t,(function(e){w("failed to asynchronously prepare wasm: "+e),ne(e)}))}if(ee++,i.monitorRunDependencies&&i.monitorRunDependencies(ee),i.instantiateWasm)try{return i.instantiateWasm(e,t)}catch(e){return w("Module.instantiateWasm callback failed with error: "+e),!1}(function(){if(b||"function"!=typeof WebAssembly.instantiateStreaming||ie(ue)||oe(ue)||"function"!=typeof fetch)return r(n);fetch(ue,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,e).then(n,(function(e){return w("wasm streaming compile failed: "+e),w("falling back to ArrayBuffer instantiation"),r(n)}))}))})()}();var Rt,xt=i.___wasm_call_ctors=function(){return(xt=i.___wasm_call_ctors=i.asm.L).apply(null,arguments)},It=i._malloc=function(){return(It=i._malloc=i.asm.M).apply(null,arguments)},Dt=i._free=function(){return(Dt=i._free=i.asm.N).apply(null,arguments)},Ut=i.___getTypeName=function(){return(Ut=i.___getTypeName=i.asm.O).apply(null,arguments)};function Mt(e){this.name="ExitStatus",this.message="Program terminated with exit("+e+")",this.status=e}function Vt(e){function t(){Rt||(Rt=!0,i.calledRun=!0,_||(q(X),q(Y),n(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),function(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)e=i.postRun.shift(),Z.unshift(e);var e;q(Z)}()))}ee>0||(function(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)e=i.preRun.shift(),J.unshift(e);var e;q(J)}(),ee>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),t()}),1)):t()))}if(i.___embind_register_native_and_builtin_types=function(){return(i.___embind_register_native_and_builtin_types=i.asm.P).apply(null,arguments)},i.dynCall_viii=function(){return(i.dynCall_viii=i.asm.Q).apply(null,arguments)},i.dynCall_vi=function(){return(i.dynCall_vi=i.asm.R).apply(null,arguments)},i.dynCall_v=function(){return(i.dynCall_v=i.asm.S).apply(null,arguments)},i.dynCall_i=function(){return(i.dynCall_i=i.asm.T).apply(null,arguments)},i.dynCall_iii=function(){return(i.dynCall_iii=i.asm.U).apply(null,arguments)},i.dynCall_ii=function(){return(i.dynCall_ii=i.asm.V).apply(null,arguments)},i.dynCall_vii=function(){return(i.dynCall_vii=i.asm.W).apply(null,arguments)},i.dynCall_iiii=function(){return(i.dynCall_iiii=i.asm.X).apply(null,arguments)},i.dynCall_iiiii=function(){return(i.dynCall_iiiii=i.asm.Y).apply(null,arguments)},i.dynCall_iiiiii=function(){return(i.dynCall_iiiiii=i.asm.Z).apply(null,arguments)},i.dynCall_iiiiiiii=function(){return(i.dynCall_iiiiiiii=i.asm._).apply(null,arguments)},i.dynCall_iiiiiiiii=function(){return(i.dynCall_iiiiiiiii=i.asm.$).apply(null,arguments)},i.dynCall_viiii=function(){return(i.dynCall_viiii=i.asm.aa).apply(null,arguments)},i.dynCall_iiiiiii=function(){return(i.dynCall_iiiiiii=i.asm.ba).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiii=i.asm.ca).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiiiii=i.asm.da).apply(null,arguments)},i.dynCall_iiiiiiiiiiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiiiiiiiiiii=i.asm.ea).apply(null,arguments)},i.dynCall_viiiii=function(){return(i.dynCall_viiiii=i.asm.fa).apply(null,arguments)},i.dynCall_iiiiiiiiii=function(){return(i.dynCall_iiiiiiiiii=i.asm.ga).apply(null,arguments)},i.dynCall_iiiiiiiiiii=function(){return(i.dynCall_iiiiiiiiiii=i.asm.ha).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.ia).apply(null,arguments)},i.dynCall_viiiiii=function(){return(i.dynCall_viiiiii=i.asm.ja).apply(null,arguments)},te=function e(){Rt||Vt(),Rt||(te=e)},i.run=Vt,i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Vt(),t.ready},c.exports=p;const y=d.exports,h=Object.freeze(function(e,t){for(var n=0;n<t.length;n++){const r=t[n];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in e)){const n=Object.getOwnPropertyDescriptor(r,t);n&&Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(e)}({__proto__:null,default:y},[d.exports]))})),e.register("5Io6y",(function(e,t){}));
//# sourceMappingURL=basis_transcoder.7c5b5066.js.map