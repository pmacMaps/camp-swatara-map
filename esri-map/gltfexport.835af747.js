!function(){function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;r.register("7tZan",(function(t,i){e(t.exports,"toBinaryGLTF",(function(){return h}));var n=r("8TSCy"),a=r("kYueh"),s=r("1uW8e"),o=r("lN6lD"),u=r("eK1My"),f=r("hnIRy"),c=function(){"use strict";function e(t,r){n.classCallCheck(this,e),this._file={type:"model/gltf-binary",data:t},this.origin=r}return n.createClass(e,[{key:"buffer",value:function(){return Promise.resolve(this._file)}},{key:"download",value:function(e){(0,a.downloadBlobAsFile)(new Blob([this._file.data],{type:this._file.type}),e)}}]),e}();function h(e,t){var r=new(0,u.Asset),i=new(0,f.Scene);return r.addScene(i),i.addNode(new(0,o.Node)(e)),(0,s.exportGLB)(r,t).then((function(e){return new c(e[s.MODEL_NAME_GLB],e.origin)}))}})),r.register("1uW8e",(function(t,i){e(t.exports,"MODEL_NAME_GLB",(function(){return c})),e(t.exports,"exportGLB",(function(){return h}));var n=r("10vEZ"),a=r("d1Fqh"),s=r("bfEJe"),o=r("4fGR3"),u=r("jLUzn"),f=r("hbVMw"),c=(u=r("jLUzn"),r("eK1My"),r("hnIRy"),r("lN6lD"),"model.glb");function h(e,t){return function(e,t,r){var i=new(0,o.GLTF)(e,t=t||{},r),h=i.params;h?h.origin||(h.origin=new(0,a.default)({x:-1,y:-1,z:-1})):h={origin:new(0,a.default)({x:-1,y:-1,z:-1})};var l=h.origin,p=i.gltf,d=p.extras.promises,y=1,g=1,m=null;return(0,n.eachAlways)(d).then((function(){var e={origin:l};delete p.extras;var r="number"==typeof t.jsonSpacing?t.jsonSpacing:4,i=JSON.stringify(p,(function(r,i){if("extras"!==r){if(i instanceof ArrayBuffer){if((0,f.isArrayBufferPNG)(i))switch(t.imageOutputType){case u.ImageOutputType.DataURI:case u.ImageOutputType.GLB:break;case u.ImageOutputType.External:default:var n="img".concat(g,".png");return g++,e[n]=i,n}switch(t.bufferOutputType){case u.BufferOutputType.DataURI:return(0,f.encodeBase64DataUri)(i);case u.BufferOutputType.GLB:if(m)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(m=i);case u.BufferOutputType.External:default:var a="data".concat(y,".bin");return y++,e[a]=i,a}}return i}}),r);return t.bufferOutputType===u.BufferOutputType.GLB||t.imageOutputType===u.ImageOutputType.GLB?e[c]=new(0,s.GLB)(i,m).buffer:e["model.gltf"]=i,e}))}(e,{bufferOutputType:u.BufferOutputType.GLB,imageOutputType:u.ImageOutputType.GLB,jsonSpacing:0},t)}})),r.register("bfEJe",(function(t,i){e(t.exports,"GLB",(function(){return o}));var n,a,s=r("8TSCy");(a=n||(n={}))[a.JSON=1313821514]="JSON",a[a.BIN=5130562]="BIN";var o=function(){"use strict";function e(t,r){if(s.classCallCheck(this,e),!t)throw new Error("GLB requires a JSON gltf chunk");this.length=e.HEADER_SIZE,this.length+=e.CHUNK_HEADER_SIZE;var i=this._textToArrayBuffer(t);if(this.length+=this._alignTo(i.byteLength,4),r&&(this.length+=e.CHUNK_HEADER_SIZE,this.length+=r.byteLength,r.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this._writeHeader();var a=this._writeChunk(i,12,n.JSON,32);r&&this._writeChunk(r,a,n.BIN)}return s.createClass(e,[{key:"_writeHeader",value:function(){this.outView.setUint32(0,e.MAGIC,!0),this.outView.setUint32(4,e.VERSION,!0),this.outView.setUint32(8,this.length,!0)}},{key:"_writeChunk",value:function(e,t,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=this._alignTo(e.byteLength,4);for(this.outView.setUint32(t,n,!0),this.outView.setUint32(t+=4,r,!0),this._writeArrayBuffer(this.outView.buffer,e,t+=4,0,e.byteLength),t+=e.byteLength;t%4;)i&&this.outView.setUint8(t,i),t++;return t}},{key:"_writeArrayBuffer",value:function(e,t,r,i,n){new Uint8Array(e,r,n).set(new Uint8Array(t,i,n),0)}},{key:"_textToArrayBuffer",value:function(e){return(new TextEncoder).encode(e).buffer}},{key:"_alignTo",value:function(e,t){return t*Math.ceil(e/t)}}]),e}();o.HEADER_SIZE=12,o.CHUNK_HEADER_SIZE=8,o.MAGIC=1179937895,o.VERSION=2})),r.register("4fGR3",(function(t,i){e(t.exports,"GLTF",(function(){return T}));var n=r("8TSCy"),a=r("edmn4"),s=r("7qybv"),o=r("koyqq"),u=r("ksUrQ"),f=r("e4Xv2"),c=r("5YMIf"),h=r("4aGER"),l=r("4pnUn"),p=r("4S8Dk"),d=r("aZkn1"),y=r("jLUzn"),g=r("hbVMw"),m=r("8JzMA"),T=function(){"use strict";function e(t,r,i){n.classCallCheck(this,e),this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:t.copyright,generator:t.generator},extras:{options:r,binChunkBuffer:null,promises:[]}},i&&(this.params=i),this._addScenes(t)}return n.createClass(e,[{key:"_addScenes",value:function(e){var t=this;this.gltf.scene=e.defaultScene;var r=this.gltf.extras.options.bufferOutputType===y.BufferOutputType.GLB||this.gltf.extras.options.imageOutputType===y.ImageOutputType.GLB;r&&(this.gltf.extras.binChunkBuffer=new(0,p.Buffer)(this.gltf)),e.forEachScene((function(e){t._addScene(e)})),r&&this.gltf.extras.binChunkBuffer.finalize()}},{key:"_addScene",value:function(e){var t=this;this.gltf.scenes||(this.gltf.scenes=[]);var r={};e.name&&(r.name=e.name),e.forEachNode((function(e){r.nodes||(r.nodes=[]);var i=t._addNode(e);r.nodes.push(i)})),this.gltf.scenes.push(r)}},{key:"_addNode",value:function(e){var t=this;this.gltf.nodes||(this.gltf.nodes=[]);var r={};e.name&&(r.name=e.name);var i=e.translation;(0,f.k)(i,c.Z)||(r.translation=(0,c.a)(i));var n=e.rotation;(0,o.j)(n,u.I)||(r.rotation=(0,u.b)(n));var a=e.scale;(0,f.k)(a,c.O)||(r.scale=(0,c.a)(a)),e.mesh&&e.mesh.vertexAttributes.position?r.mesh=this._addMesh(e.mesh):e.forEachNode((function(e){r.children||(r.children=[]);var i=t._addNode(e);r.children.push(i)}));var s=this.gltf.nodes.length;return this.gltf.nodes.push(r),s}},{key:"_addMesh",value:function(e){this.gltf.meshes||(this.gltf.meshes=[]);var t,r={primitives:[]},i=this.gltf.extras.options.bufferOutputType===y.BufferOutputType.GLB;t=i?this.gltf.extras.binChunkBuffer:new(0,p.Buffer)(this.gltf),this.params.origin||(this.params.origin=(0,d.computeOrigin)(e));var n=(0,l.ungeoreferenceByTransform)(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});(0,d.smoothNormals)(e,n),this._flipYZAxis(n);var a,o,u,f,c=t.addBufferView(m.DataType.FLOAT,y.AttributeType.VEC3,y.TargetBuffer.ARRAY_BUFFER);n.normal&&(a=t.addBufferView(m.DataType.FLOAT,y.AttributeType.VEC3,y.TargetBuffer.ARRAY_BUFFER)),e.vertexAttributes.uv&&(o=t.addBufferView(m.DataType.FLOAT,y.AttributeType.VEC2,y.TargetBuffer.ARRAY_BUFFER)),n.tangent&&(u=t.addBufferView(m.DataType.FLOAT,y.AttributeType.VEC4,y.TargetBuffer.ARRAY_BUFFER)),e.vertexAttributes.color&&(f=t.addBufferView(m.DataType.UNSIGNED_BYTE,y.AttributeType.VEC4,y.TargetBuffer.ARRAY_BUFFER)),c.startAccessor("POSITION"),a&&a.startAccessor("NORMAL"),o&&o.startAccessor("TEXCOORD_0"),u&&u.startAccessor("TANGENT"),f&&f.startAccessor("COLOR_0");for(var h=n.position.length/3,g=n.position,T=n.normal,v=n.tangent,A=e.vertexAttributes,w=A.color,b=A.uv,E=0;E<h;++E)c.push(g[3*E+0]),c.push(g[3*E+1]),c.push(g[3*E+2]),a&&(0,s.isSome)(T)&&(a.push(T[3*E+0]),a.push(T[3*E+1]),a.push(T[3*E+2])),o&&(0,s.isSome)(b)&&(o.push(b[2*E+0]),o.push(b[2*E+1])),u&&(0,s.isSome)(v)&&(u.push(v[4*E+0]),u.push(v[4*E+1]),u.push(v[4*E+2]),u.push(v[4*E+3])),f&&(0,s.isSome)(w)&&(f.push(w[4*E+0]),f.push(w[4*E+1]),f.push(w[4*E+2]),f.push(w[4*E+3]));var x,_,R,B,S,M=c.endAccessor(),C=this._addAccessor(c.index,M);if(a){var O=a.endAccessor();x=this._addAccessor(a.index,O)}if(o){var N=o.endAccessor();_=this._addAccessor(o.index,N)}if(u){var I=u.endAccessor();R=this._addAccessor(u.index,I)}if(f){var k=f.endAccessor();B=this._addAccessor(f.index,k)}e.components&&e.components.length>0&&e.components[0].faces?(S=t.addBufferView(m.DataType.UNSIGNED_INT,y.AttributeType.SCALAR,y.TargetBuffer.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(S,e.components,r,C,x,_,R,B)):this._addMeshVertexNonIndexed(e.components,r,C,x,_,R,B),c.finalize(),a&&a.finalize(),o&&o.finalize(),u&&u.finalize(),S&&S.finalize(),f&&f.finalize(),i||t.finalize();var L=this.gltf.meshes.length;return this.gltf.meshes.push(r),L}},{key:"_flipYZAxis",value:function(e){var t=e.position,r=e.normal,i=e.tangent;this._flipYZBuffer(t,3),this._flipYZBuffer(r,3),this._flipYZBuffer(i,4)}},{key:"_flipYZBuffer",value:function(e,t){if(!(0,s.isNone)(e))for(var r=1,i=2;r<e.length;r+=t,i+=t){var n=e[r],a=e[i];e[r]=a,e[i]=-n}}},{key:"_addMaterial",value:function(e){if(null!==e){var t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);var r={};switch(e.alphaMode){case"mask":r.alphaMode=y.AlphaMode.MASK;break;case"auto":case"blend":r.alphaMode=y.AlphaMode.BLEND}.5!==e.alphaCutoff&&(r.alphaCutoff=e.alphaCutoff),e.doubleSided&&(r.doubleSided=e.doubleSided),r.pbrMetallicRoughness={};var i=function(e){return Math.pow(e,2.1)},n=function(e){var t=e.toRgba();return t[0]=i(t[0]/255),t[1]=i(t[1]/255),t[2]=i(t[2]/255),t};if((0,s.isSome)(e.color)&&(r.pbrMetallicRoughness.baseColorFactor=n(e.color)),(0,s.isSome)(e.colorTexture)&&(r.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),(0,s.isSome)(e.normalTexture)&&(r.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof h.default){if((0,s.isSome)(e.emissiveTexture)&&(r.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),(0,s.isSome)(e.emissiveColor)){var a=n(e.emissiveColor);r.emissiveFactor=[a[0],a[1],a[2]]}(0,s.isSome)(e.occlusionTexture)&&(r.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),(0,s.isSome)(e.metallicRoughnessTexture)&&(r.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),r.pbrMetallicRoughness.metallicFactor=e.metallic,r.pbrMetallicRoughness.roughnessFactor=e.roughness}else r.pbrMetallicRoughness.metallicFactor=1,r.pbrMetallicRoughness.roughnessFactor=1;var o=this.gltf.materials.length;return this.gltf.materials.push(r),this.materialMap.push(e),o}}},{key:"_addTexture",value:function(e){var t=this;return this.gltf.textures||(this.gltf.textures=[]),(0,a.getOrCreateMapValue)(this.textureMap,e,(function(){var r={sampler:t._addSampler(e),source:t._addImage(e)},i=t.gltf.textures.length;return t.gltf.textures.push(r),i}))}},{key:"_addImage",value:function(e){var t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);var r={};if(e.url)r.uri=e.url;else{r.extras=e.data;for(var i=0;i<this.gltf.images.length;++i)if(e.data===this.gltf.images[i].extras)return i;switch(this.gltf.extras.options.imageOutputType){case y.ImageOutputType.GLB:var n=this.gltf.extras.binChunkBuffer.addBufferView(m.DataType.UNSIGNED_BYTE,y.AttributeType.SCALAR),a=(0,g.imageToArrayBuffer)(e.data).then((function(e){var t=e.data,i=e.type;return r.mimeType=i,t}));n.writeAsync(a).then((function(){n.finalize()})),r.bufferView=n.index;break;case y.ImageOutputType.DataURI:r.uri=(0,g.imageToDataURI)(e.data);break;default:this.gltf.extras.promises.push((0,g.imageToArrayBuffer)(e.data).then((function(e){var t=e.data,i=e.type;r.uri=t,r.mimeType=i})))}}var s=this.gltf.images.length;return this.gltf.images.push(r),this.imageMap.set(e,s),s}},{key:"_addSampler",value:function(e){this.gltf.samplers||(this.gltf.samplers=[]);var t=m.TextureWrapMode.REPEAT,r=m.TextureWrapMode.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=m.TextureWrapMode.CLAMP_TO_EDGE,r=m.TextureWrapMode.CLAMP_TO_EDGE;break;case"mirror":t=m.TextureWrapMode.MIRRORED_REPEAT,r=m.TextureWrapMode.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":r=m.TextureWrapMode.CLAMP_TO_EDGE;break;case"mirror":r=m.TextureWrapMode.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":t=m.TextureWrapMode.CLAMP_TO_EDGE;break;case"mirror":t=m.TextureWrapMode.MIRRORED_REPEAT}}for(var i={wrapS:t,wrapT:r},n=0;n<this.gltf.samplers.length;++n)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[n]))return n;var a=this.gltf.samplers.length;return this.gltf.samplers.push(i),a}},{key:"_addAccessor",value:function(e,t){this.gltf.accessors||(this.gltf.accessors=[]);var r={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(r.normalized=!0);var i=this.gltf.accessors.length;return this.gltf.accessors.push(r),i}},{key:"_addMeshVertexIndexed",value:function(e,t,r,i,n,a,s,o){var u=!0,f=!1,c=void 0;try{for(var h,l=t[Symbol.iterator]();!(u=(h=l.next()).done);u=!0){var p=h.value;e.startAccessor("INDICES");for(var d=0;d<p.faces.length;++d)e.push(p.faces[d]);var y=e.endAccessor(),g={attributes:{POSITION:i},indices:this._addAccessor(e.index,y),material:this._addMaterial(p.material)};n&&"flat"!==p.shading&&(g.attributes.NORMAL=n),a&&(g.attributes.TEXCOORD_0=a),s&&"flat"!==p.shading&&(g.attributes.TANGENT=s),o&&(g.attributes.COLOR_0=o),r.primitives.push(g)}}catch(e){f=!0,c=e}finally{try{u||null==l.return||l.return()}finally{if(f)throw c}}}},{key:"_addMeshVertexNonIndexed",value:function(e,t,r,i,n,a,s){var o={attributes:{POSITION:r}};i&&(o.attributes.NORMAL=i),n&&(o.attributes.TEXCOORD_0=n),a&&(o.attributes.TANGENT=a),s&&(o.attributes.COLOR_0=s),e&&(o.material=this._addMaterial(e[0].material)),t.primitives.push(o)}}]),e}()})),r.register("4S8Dk",(function(t,i){e(t.exports,"Buffer",(function(){return o}));var n=r("8TSCy"),a=r("10vEZ"),s=r("73tdq"),o=function(){"use strict";function e(t){n.classCallCheck(this,e),this.gltf=t,this.bufferViews=[],this.isFinalized=!1,t.buffers||(t.buffers=[]),this.index=t.buffers.length;var r={byteLength:-1};t.buffers.push(r),this.buffer=r}return n.createClass(e,[{key:"addBufferView",value:function(e,t,r){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");var i=new(0,s.BufferView)(this,this.gltf,e,t,r);return this.bufferViews.push(i),i}},{key:"getByteOffset",value:function(e){var t=0,r=!0,i=!1,n=void 0;try{for(var a,s=this.bufferViews[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var o=a.value;if(o===e)return t;t+=o.byteSize}}catch(e){i=!0,n=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw n}}throw new Error("Given bufferView was not present in this buffer")}},{key:"getViewFinalizePromises",value:function(e){var t=[],r=!0,i=!1,n=void 0;try{for(var a,s=this.bufferViews[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var o=a.value;if(e&&o===e)return t;t.push(o.finalized)}}catch(e){i=!0,n=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw n}}return t}},{key:"getArrayBuffer",value:function(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");var e=this._getTotalSize(),t=new ArrayBuffer(e),r=0,i=!0,n=!1,a=void 0;try{for(var s,o=this.bufferViews[Symbol.iterator]();!(i=(s=o.next()).done);i=!0){var u=s.value;u.writeOutToBuffer(t,r),r+=u.byteSize}}catch(e){n=!0,a=e}finally{try{i||null==o.return||o.return()}finally{if(n)throw a}}return t}},{key:"finalize",value:function(){var e=this;if(this.finalizePromise)throw new Error("Buffer ".concat(this.index," was already finalized"));return this.finalizePromise=new Promise((function(t){t((0,a.eachAlways)(e.getViewFinalizePromises()))})).then((function(){e.isFinalized=!0;var t=e.getArrayBuffer();e.buffer.byteLength=t.byteLength,e.buffer.uri=t})),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}},{key:"_getTotalSize",value:function(){var e=0,t=!0,r=!1,i=void 0;try{for(var n,a=this.bufferViews[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){e+=n.value.byteSize}}catch(e){r=!0,i=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw i}}return e}}]),e}()})),r.register("73tdq",(function(t,i){e(t.exports,"BufferView",(function(){return u}));var n=r("8TSCy"),a=r("10vEZ"),s=r("jLUzn"),o=r("8JzMA"),u=function(){"use strict";function e(t,r,i,a,o){n.classCallCheck(this,e),this.buffer=t,this.componentType=i,this.dataType=a,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,r.bufferViews||(r.bufferViews=[]),this.index=r.bufferViews.length,this.bufferView={buffer:t.index,byteLength:-1,target:o};var u=this._getElementSize();u>=4&&o!==s.TargetBuffer.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=u),r.bufferViews.push(this.bufferView),this.numComponentsForDataType=this._calculateNumComponentsForDataType()}return n.createClass(e,[{key:"push",value:function(e){var t=this.data.length;if(this.data.push(e),this.accessorIndex>=0){var r=t%this.numComponentsForDataType,i=this.accessorMin[r];this.accessorMin[r]="number"!=typeof i?e:Math.min(i,e);var n=this.accessorMax[r];this.accessorMax[r]="number"!=typeof n?e:Math.max(n,e)}}},{key:"dataSize",get:function(){return this.data.length*this._sizeComponentType()}},{key:"byteSize",get:function(){return e=this.dataSize,(t=4)*Math.ceil(e/t);var e,t}},{key:"getByteOffset",value:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"byteOffset",get:function(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}},{key:"_createTypedArray",value:function(e,t){switch(this.componentType){case o.DataType.BYTE:return new Int8Array(e,t);case o.DataType.FLOAT:return new Float32Array(e,t);case o.DataType.SHORT:return new Int16Array(e,t);case o.DataType.UNSIGNED_BYTE:return new Uint8Array(e,t);case o.DataType.UNSIGNED_INT:return new Uint32Array(e,t);case o.DataType.UNSIGNED_SHORT:return new Uint16Array(e,t)}}},{key:"writeOutToBuffer",value:function(e,t){this._createTypedArray(e,t).set(this.data)}},{key:"writeAsync",value:function(e){var t=this;if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then((function(e){for(var r=new Uint8Array(e),i=0;i<r.length;++i)t.data.push(r[i]);delete t.asyncWritePromise})),this.asyncWritePromise}},{key:"startAccessor",value:function(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;var t=this.numComponentsForDataType;this.accessorMin=new Array(t),this.accessorMax=new Array(t)}},{key:"endAccessor",value:function(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");var e=this._getElementSize(),t=this.numComponentsForDataType,r=(this.data.length-this.accessorIndex)/t;if(r%1)throw new Error("An accessor was ended with missing component values");for(var i=0;i<this.accessorMin.length;++i)"number"!=typeof this.accessorMin[i]&&(this.accessorMin[i]=0),"number"!=typeof this.accessorMax[i]&&(this.accessorMax[i]=0);var n={byteOffset:e*(this.accessorIndex/t),componentType:this.componentType,count:r,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case o.DataType.UNSIGNED_BYTE:case o.DataType.UNSIGNED_SHORT:n.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,n}},{key:"finalized",get:function(){var e=this;return this.finalizedPromise?this.finalizedPromise:this.isFinalized?this.finalizedPromise=Promise.resolve():this.finalizedPromise=new Promise((function(t){return e.finalizedPromiseResolve=t}))}},{key:"finalize",value:function(){var e=this,t=this.bufferView;return new Promise((function(t){var r=e.buffer.getViewFinalizePromises(e);e.asyncWritePromise&&r.push(e.asyncWritePromise),t((0,a.eachAlways)(r))})).then((function(){e.isFinalized=!0,t.byteOffset=e.getByteOffset(),t.byteLength=e.dataSize,e.finalizedPromiseResolve&&e.finalizedPromiseResolve()}))}},{key:"_getElementSize",value:function(){return this._sizeComponentType()*this.numComponentsForDataType}},{key:"_sizeComponentType",value:function(){switch(this.componentType){case o.DataType.BYTE:case o.DataType.UNSIGNED_BYTE:return 1;case o.DataType.SHORT:case o.DataType.UNSIGNED_SHORT:return 2;case o.DataType.UNSIGNED_INT:case o.DataType.FLOAT:return 4}}},{key:"_calculateNumComponentsForDataType",value:function(){switch(this.dataType){case s.AttributeType.SCALAR:return 1;case s.AttributeType.VEC2:return 2;case s.AttributeType.VEC3:return 3;case s.AttributeType.VEC4:case s.AttributeType.MAT2:return 4;case s.AttributeType.MAT3:return 9;case s.AttributeType.MAT4:return 16}}}]),e}()})),r.register("jLUzn",(function(t,r){var i,n,a,s,o,u,f,c,h,l,p,d,y,g;e(t.exports,"BufferOutputType",(function(){return i})),e(t.exports,"ImageOutputType",(function(){return n})),e(t.exports,"TargetBuffer",(function(){return a})),e(t.exports,"AttributeType",(function(){return s})),e(t.exports,"AlphaMode",(function(){return u})),(g=i||(i={}))[g.External=0]="External",g[g.DataURI=1]="DataURI",g[g.GLB=2]="GLB",(y=n||(n={}))[y.External=0]="External",y[y.DataURI=1]="DataURI",y[y.GLB=2]="GLB",(d=a||(a={}))[d.ARRAY_BUFFER=34962]="ARRAY_BUFFER",d[d.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",(p=s||(s={})).SCALAR="SCALAR",p.VEC2="VEC2",p.VEC3="VEC3",p.VEC4="VEC4",p.MAT2="MAT2",p.MAT3="MAT3",p.MAT4="MAT4",(l=o||(o={}))[l.POINTS=0]="POINTS",l[l.LINES=1]="LINES",l[l.LINE_LOOP=2]="LINE_LOOP",l[l.LINE_STRIP=3]="LINE_STRIP",l[l.TRIANGLES=4]="TRIANGLES",l[l.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",l[l.TRIANGLE_FAN=6]="TRIANGLE_FAN",(h=u||(u={})).OPAQUE="OPAQUE",h.MASK="MASK",h.BLEND="BLEND",(c=f||(f={}))[c.NoColor=0]="NoColor",c[c.FaceColor=1]="FaceColor",c[c.VertexColor=2]="VertexColor"})),r.register("aZkn1",(function(t,i){e(t.exports,"smoothNormals",(function(){return u})),e(t.exports,"computeOrigin",(function(){return c})),r("2ILM8");var n=r("7qybv"),a=r("e4Xv2"),s=r("5YMIf"),o=r("d1Fqh");function u(e,t){var r=!0,i=!1,n=void 0;if(e.components)try{for(var a,s=e.components[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var o=a.value;o.faces&&"smooth"===o.shading&&f(o,t)}}catch(e){i=!0,n=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw n}}}function f(e,t){(0,n.isNone)(t.normal)&&(t.normal=new Float32Array(t.position.length));for(var r=e.faces,i=t.position,s=t.normal,o=r.length/3,u=0;u<o;++u){var f=3*r[3*u+0],c=3*r[3*u+1],y=3*r[3*u+2],g=(0,a.s)(h,i[f+0],i[f+1],i[f+2]),m=(0,a.s)(l,i[c+0],i[c+1],i[c+2]),T=(0,a.s)(p,i[y+0],i[y+1],i[y+2]),v=(0,a.f)(m,m,g),A=(0,a.f)(T,T,g),w=(0,a.c)(v,v,A);s[f+0]+=w[0],s[f+1]+=w[1],s[f+2]+=w[2],s[c+0]+=w[0],s[c+1]+=w[1],s[c+2]+=w[2],s[y+0]+=w[0],s[y+1]+=w[1],s[y+2]+=w[2]}for(var b=0;b<s.length;b+=3)(0,a.s)(d,s[b],s[b+1],s[b+2]),(0,a.n)(d,d),s[b+0]=d[0],s[b+1]=d[1],s[b+2]=d[2]}function c(e){if((0,n.isSome)(e.transform))return e.transform.getOriginPoint(e.spatialReference);var t=e.extent.xmax-e.extent.width/2,r=e.extent.ymax-e.extent.height/2,i=e.extent.zmin;return new(0,o.default)({x:t,y:r,z:i,spatialReference:e.extent.spatialReference})}var h=(0,s.c)(),l=(0,s.c)(),p=(0,s.c)(),d=(0,s.c)()})),r.register("hbVMw",(function(i,n){e(i.exports,"imageToDataURI",(function(){return c})),e(i.exports,"imageToArrayBuffer",(function(){return h})),e(i.exports,"encodeBase64DataUri",(function(){return g})),e(i.exports,"isArrayBufferPNG",(function(){return m}));var a=r("8TSCy"),s=r("2TvXO");r("2VlWd");var o=r("kyj08"),u=r("7qybv"),f=r("kYueh");function c(e){var t=y(e);return(0,u.isSome)(t)?t.toDataURL():""}function h(e){return l.apply(this,arguments)}function l(){return(l=a.asyncToGenerator(t(s).mark((function e(r){var i,n,a;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=y(r),!(0,u.isNone)(i)){e.next=3;break}throw new(0,o.default)("imageToArrayBuffer","Unsupported image type");case 3:return e.next=5,p(r);case 5:return n=e.sent,e.next=8,new Promise((function(e){return i.toBlob(e,n)}));case 8:if(a=e.sent){e.next=11;break}throw new(0,o.default)("imageToArrayBuffer","Failed to encode image");case 11:return e.next=13,a.arrayBuffer();case 13:return e.t0=e.sent,e.t1=n,e.abrupt("return",{data:e.t0,type:e.t1});case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=a.asyncToGenerator(t(s).mark((function e(r){var i,n,a;return t(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r instanceof HTMLImageElement){e.next=2;break}return e.abrupt("return","image/png");case 2:if(i=r.src,!(0,f.isDataProtocol)(i)){e.next=6;break}return n=(0,f.dataComponents)(i),a=n.mediaType,e.abrupt("return","image/jpeg"===a?a:"image/png");case 6:return e.abrupt("return",/\.png$/i.test(i)?"image/png":/\.(jpg|jpeg)$/i.test(i)?"image/jpeg":"image/png");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){if(e instanceof HTMLCanvasElement)return e;if(e instanceof HTMLVideoElement)return null;var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");return e instanceof HTMLImageElement?r.drawImage(e,0,0,e.width,e.height):e instanceof ImageData&&r.putImageData(e,e.width,e.height),t}function g(e){for(var t=[],r=new Uint8Array(e),i=0;i<r.length;i++)t.push(String.fromCharCode(r[i]));return"data:application/octet-stream;base64,"+btoa(t.join(""))}function m(e){if(e.byteLength<8)return!1;var t=new Uint8Array(e);return 137===t[0]&&80===t[1]&&78===t[2]&&71===t[3]&&13===t[4]&&10===t[5]&&26===t[6]&&10===t[7]}})),r.register("eK1My",(function(t,i){e(t.exports,"Asset",(function(){return s}));var n=r("8TSCy"),a=r("lNwWH"),s=function(){"use strict";function e(){n.classCallCheck(this,e),this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}return n.createClass(e,[{key:"addScene",value:function(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}},{key:"removeScene",value:function(e){(0,a.remove)(this._scenes,e)}},{key:"forEachScene",value:function(e){this._scenes.forEach(e)}}]),e}()})),r.register("hnIRy",(function(t,i){e(t.exports,"Scene",(function(){return a}));var n=r("8TSCy"),a=function(){"use strict";function e(){n.classCallCheck(this,e),this.name="",this._nodes=[]}return n.createClass(e,[{key:"addNode",value:function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}},{key:"forEachNode",value:function(e){this._nodes.forEach(e)}}]),e}()})),r.register("lN6lD",(function(t,i){e(t.exports,"Node",(function(){return u}));var n=r("8TSCy"),a=r("koyqq"),s=r("ksUrQ"),o=r("5YMIf"),u=function(){"use strict";function e(t){n.classCallCheck(this,e),this.mesh=t,this.name="",this.translation=(0,o.c)(),this.rotation=(0,s.a)(),this.scale=(0,o.a)(o.O),this._nodes=[]}return n.createClass(e,[{key:"addNode",value:function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}},{key:"forEachNode",value:function(e){this._nodes.forEach(e)}},{key:"rotationAngles",set:function(e){(0,a.k)(this.rotation,e[0],e[1],e[2])}}]),e}()}))}();
//# sourceMappingURL=gltfexport.835af747.js.map