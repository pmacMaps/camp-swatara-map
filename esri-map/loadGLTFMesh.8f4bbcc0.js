function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("cF7II",(function(r,n){e(r.exports,"loadGLTFMesh",(function(){return E}));var o=t("hJt7u"),u=t("bYA0c"),i=t("035lZ"),a=t("1CpCt"),s=t("52822"),c=t("4vUOo"),f=t("iHxaG"),l=t("64ROT"),p=t("lnPqT"),m=t("9CdsJ"),d=t("44zDp"),g=t("7uKdD"),w=t("k4Lc2"),x=t("3Bcds"),T=t("7vBMy"),y=t("6Jhbg"),S=t("cjn8Z"),V=t("5cRuQ"),b=t("iXVKm"),h=t("jQTCa"),v=t("7AfyI"),B=t("amFar"),A=t("l3QXd"),C=t("5gcCk"),M=t("7JiCL"),R=t("lLtQf");async function E(e,t,r){const n=new(0,V.DefaultLoadingContext)(null!=(T=r)&&T.resolveFile?{busy:!1,request:async(e,t,r)=>{const n=T.resolveFile(e),o="image"===t?"image":"binary"===t?"array-buffer":"json";return(await(0,u.default)(n,{responseType:o,signal:(0,a.isSome)(r)?r.signal:null})).data}}:null),s=(await(0,b.load)(n,t,r,!0)).model,c=s.lods.shift(),p=new Map,x=new Map;var T;s.textures.forEach(((e,t)=>{return p.set(t,(r=e,new(0,d.default)({data:r.data,wrap:F(r.parameters.wrap)})));var r})),s.materials.forEach(((e,t)=>x.set(t,function(e,t){const r=new(0,o.default)((i=e.color,s=e.opacity,(0,l.f)(P(i[0]),P(i[1]),P(i[2]),s))),n=e.emissiveFactor?new(0,o.default)((u=e.emissiveFactor,(0,f.f)(P(u[0]),P(u[1]),P(u[2])))):null;var u;var i,s;return new(0,m.default)({color:r,colorTexture:(0,a.unwrap)((0,a.applySome)(e.textureColor,(e=>t.get(e)))),normalTexture:(0,a.unwrap)((0,a.applySome)(e.textureNormal,(e=>t.get(e)))),emissiveColor:n,emissiveTexture:(0,a.unwrap)((0,a.applySome)(e.textureEmissive,(e=>t.get(e)))),occlusionTexture:(0,a.unwrap)((0,a.applySome)(e.textureOcclusion,(e=>t.get(e)))),alphaMode:N(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:(0,a.unwrap)((0,a.applySome)(e.textureMetallicRoughness,(e=>t.get(e))))})}(e,p))));const h=function(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,o=new Map,u=[];for(const a of e.parts){const{attributes:{position:e,normal:s,color:c,tangent:f,texCoord0:l}}=a,p=`\n      ${I(e,n)}/\n      ${I(s,n)}/\n      ${I(c,n)}/\n      ${I(f,n)}/\n      ${I(l,n)}/\n      ${O(a.transform)}\n    `;let m=!1;const d=(0,i.getOrCreateMapValue)(o,p,(()=>(m=!0,{start:t,length:e.count})));m&&(t+=e.count),s&&(r.normal=!0),c&&(r.color=!0),f&&(r.tangent=!0),l&&(r.texCoord0=!0),u.push({gltf:a,writeVertices:m,region:d})}return{vertexAttributes:{position:(0,y.createBuffer)(w.BufferViewVec3f64,t),normal:r.normal?(0,y.createBuffer)(w.BufferViewVec3f,t):null,tangent:r.tangent?(0,y.createBuffer)(w.BufferViewVec4f,t):null,color:r.color?(0,y.createBuffer)(w.BufferViewVec4u8,t):null,texCoord0:r.texCoord0?(0,y.createBuffer)(w.BufferViewVec2f,t):null},parts:u,components:[]}}(c);for(const e of h.parts)_(h,e,x);const{position:v,normal:B,tangent:A,color:C,texCoord0:M}=h.vertexAttributes,R={position:v.typedBuffer,normal:(0,a.isSome)(B)?B.typedBuffer:null,tangent:(0,a.isSome)(A)?A.typedBuffer:null,uv:(0,a.isSome)(M)?M.typedBuffer:null,color:(0,a.isSome)(C)?C.typedBuffer:null},E=(0,S.georeferenceByTransform)(R,e,r);return{transform:E.transform,components:h.components,spatialReference:e.spatialReference,vertexAttributes:new(0,g.MeshVertexAttributes)({position:E.vertexAttributes.position,normal:E.vertexAttributes.normal,tangent:E.vertexAttributes.tangent,color:R.color,uv:R.uv})}}function I(e,t){if((0,a.isNone)(e))return"-";const r=e.typedBuffer;return`${(0,i.getOrCreateMapValue)(t,r.buffer,(()=>t.size))}/${r.byteOffset}/${r.byteLength}`}function O(e){return(0,a.isSome)(e)?e.toString():"-"}function _(e,t,r){t.writeVertices&&function(e,t){const{position:r,normal:n,tangent:o,color:u,texCoord0:i}=e.vertexAttributes,f=t.region.start,{attributes:l,transform:p}=t.gltf,m=l.position.count;if((0,x.t)(r.slice(f,m),l.position,p),(0,a.isSome)(l.normal)&&(0,a.isSome)(n)){const e=(0,s.a)((0,c.c)(),p);(0,x.a)(n.slice(f,m),l.normal,e)}else(0,a.isSome)(n)&&(0,C.f)(n,0,0,1,{dstIndex:f,count:m});if((0,a.isSome)(l.tangent)&&(0,a.isSome)(o)){const e=(0,s.a)((0,c.c)(),p);(0,T.t)(o.slice(f,m),l.tangent,e)}else(0,a.isSome)(o)&&(0,M.f)(o,0,0,1,1,{dstIndex:f,count:m});if((0,a.isSome)(l.texCoord0)&&(0,a.isSome)(i)?(0,R.n)(i.slice(f,m),l.texCoord0):(0,a.isSome)(i)&&(0,R.f)(i,0,0,{dstIndex:f,count:m}),(0,a.isSome)(l.color)&&(0,a.isSome)(u)){const e=l.color,t=u.slice(f,m);if(4===e.elementCount)e instanceof w.BufferViewVec4f?(0,T.s)(t,e,255):e instanceof w.BufferViewVec4u8?(0,M.c)(t,e):e instanceof w.BufferViewVec4u16&&(0,T.a)(t,e,8);else{(0,M.f)(t,255,255,255,255);const r=w.BufferViewVec3u8.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof w.BufferViewVec3f?(0,x.s)(r,e,255):e instanceof w.BufferViewVec3u8?(0,C.c)(r,e):e instanceof w.BufferViewVec3u16&&(0,x.b)(r,e,8)}}else(0,a.isSome)(u)&&(0,M.f)(u.slice(f,m),255,255,255,255)}(e,t);const n=t.gltf,o=function(e,t){switch(t){case A.PrimitiveType.TRIANGLES:return(0,h.trianglesToTriangles)(e,v.generateIndexArray);case A.PrimitiveType.TRIANGLE_STRIP:return(0,h.triangleStripToTriangles)(e);case A.PrimitiveType.TRIANGLE_FAN:return(0,h.triangleFanToTriangles)(e)}}(n.indices||n.attributes.position.count,n.primitiveType),u=t.region.start;if(u)for(let e=0;e<o.length;e++)o[e]+=u;e.components.push(new(0,p.default)({faces:o,material:r.get(n.material),trustSourceNormals:!0}))}function N(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function F(e){return{horizontal:L(e.s),vertical:L(e.t)}}function L(e){switch(e){case A.TextureWrapMode.CLAMP_TO_EDGE:return"clamp";case A.TextureWrapMode.MIRRORED_REPEAT:return"mirror";case A.TextureWrapMode.REPEAT:return"repeat"}}function P(e){return e**(1/B.COLOR_GAMMA)*255}})),t.register("64ROT",(function(t,r){function n(){return[0,0,0,0]}function o(e,t,r,n){return[e,t,r,n]}function u(e){const t=[0,0,0,0],r=Math.min(4,e.length);for(let n=0;n<r;++n)t[n]=e[n];return t}function i(e,t){return new Float64Array(e,t,4)}function a(){return[0,0,0,0]}function s(){return o(1,1,1,1)}function c(){return o(1,0,0,0)}function f(){return o(0,1,0,0)}function l(){return o(0,0,1,0)}function p(){return o(0,0,0,1)}e(t.exports,"c",(function(){return n})),e(t.exports,"f",(function(){return o})),e(t.exports,"d",(function(){return u})),e(t.exports,"a",(function(){return i}));const m=[0,0,0,0],d=s(),g=c(),w=f(),x=l(),T=p();Object.freeze({__proto__:null,create:n,clone:function(e){return[e[0],e[1],e[2],e[3]]},fromValues:o,fromArray:u,createView:i,zeros:a,ones:s,unitX:c,unitY:f,unitZ:l,unitW:p,ZEROS:m,ONES:d,UNIT_X:g,UNIT_Y:w,UNIT_Z:x,UNIT_W:T})})),t.register("2bApG",(function(r,n){function o(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8;default:return}}function u(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function i(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function a(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}e(r.exports,"elementTypeSize",(function(){return o})),e(r.exports,"isSigned",(function(){return u})),e(r.exports,"isInteger",(function(){return i})),e(r.exports,"maximumValue",(function(){return a})),t("5HTPH")}));
//# sourceMappingURL=loadGLTFMesh.8f4bbcc0.js.map