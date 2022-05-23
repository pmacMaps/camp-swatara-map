!function(){function e(e,t,r,i){Object.defineProperty(e,t,{get:r,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;r.register("7yLcd",(function(t,i){e(t.exports,"getErrorString",(function(){return s})),e(t.exports,"vertexCount",(function(){return o})),e(t.exports,"bindVertexBufferLayout",(function(){return u})),e(t.exports,"unbindVertexBufferLayout",(function(){return c})),e(t.exports,"getBytesPerElementFormat",(function(){return h})),e(t.exports,"getGpuMemoryUsage",(function(){return l})),r("2VlWd");var n=r("7qybv"),a=r("8JzMA");function s(e){var t=e.gl;switch(t.getError()){case t.NO_ERROR:return null;case t.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case t.INVALID_VALUE:return"A numeric argument is out of range";case t.INVALID_OPERATION:return"The specified command is not allowed for the current state";case t.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case t.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case t.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function o(e,t){return e.vertexBuffers[t].size/e.layout[t][0].stride}function u(e,t,r,i){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=e.gl,s=e.capabilities.instancing;e.bindBuffer(r);var o=!0,u=!1,c=void 0;try{for(var h,l=i[Symbol.iterator]();!(o=(h=l.next()).done);o=!0){var f=h.value,_=t.get(f.name);void 0===_&&console.error("There is no location for vertex attribute '".concat(f.name,"' defined."));var d=n*f.stride;if(f.count<=4)a.vertexAttribPointer(_,f.count,f.type,f.normalized,f.stride,f.offset+d),a.enableVertexAttribArray(_),f.divisor>0&&s&&s.vertexAttribDivisor(_,f.divisor);else if(9===f.count)for(var T=0;T<3;T++)a.vertexAttribPointer(_+T,3,f.type,f.normalized,f.stride,f.offset+12*T+d),a.enableVertexAttribArray(_+T),f.divisor>0&&s&&s.vertexAttribDivisor(_+T,f.divisor);else if(16===f.count)for(var E=0;E<4;E++)a.vertexAttribPointer(_+E,4,f.type,f.normalized,f.stride,f.offset+16*E+d),a.enableVertexAttribArray(_+E),f.divisor>0&&s&&s.vertexAttribDivisor(_+E,f.divisor);else console.error("Unsupported vertex attribute element count: "+f.count)}}catch(e){u=!0,c=e}finally{try{o||null==l.return||l.return()}finally{if(u)throw c}}}function c(e,t,r,i){var n=e.gl,s=e.capabilities.instancing;e.bindBuffer(r);var o=!0,u=!1,c=void 0;try{for(var h,l=i[Symbol.iterator]();!(o=(h=l.next()).done);o=!0){var f=h.value,_=t.get(f.name);if(f.count<=4)n.disableVertexAttribArray(_),f.divisor&&f.divisor>0&&s&&s.vertexAttribDivisor(_,0);else if(9===f.count)for(var d=0;d<3;d++)n.disableVertexAttribArray(_+d),f.divisor&&f.divisor>0&&s&&s.vertexAttribDivisor(_+d,0);else if(16===f.count)for(var T=0;T<4;T++)n.disableVertexAttribArray(_+T),f.divisor&&f.divisor>0&&s&&s.vertexAttribDivisor(_+T,0);else console.error("Unsupported vertex attribute element count: "+f.count)}}catch(e){u=!0,c=e}finally{try{o||null==l.return||l.return()}finally{if(u)throw c}}e.unbindBuffer(a.BufferType.ARRAY_BUFFER)}function h(e){switch(e){case a.PixelFormat.ALPHA:case a.PixelFormat.LUMINANCE:case a.PixelFormat.RED:case a.PixelFormat.RED_INTEGER:case a.SizedPixelFormat.R8:case a.SizedPixelFormat.R8I:case a.SizedPixelFormat.R8UI:case a.SizedPixelFormat.R8_SNORM:case a.RenderbufferFormat.STENCIL_INDEX8:return 1;case a.PixelFormat.LUMINANCE_ALPHA:case a.PixelFormat.RG:case a.PixelFormat.RG_INTEGER:case a.SizedPixelFormat.RGBA4:case a.SizedPixelFormat.R16F:case a.SizedPixelFormat.R16I:case a.SizedPixelFormat.R16UI:case a.SizedPixelFormat.RG8:case a.SizedPixelFormat.RG8I:case a.SizedPixelFormat.RG8UI:case a.SizedPixelFormat.RG8_SNORM:case a.SizedPixelFormat.RGB565:case a.SizedPixelFormat.RGB5_A1:case a.RenderbufferFormat.DEPTH_COMPONENT16:return 2;case a.PixelFormat.DEPTH_COMPONENT:case a.PixelFormat.RGB:case a.PixelFormat.RGB_INTEGER:case a.SizedPixelFormat.RGB8:case a.SizedPixelFormat.RGB8I:case a.SizedPixelFormat.RGB8UI:case a.SizedPixelFormat.RGB8_SNORM:case a.SizedPixelFormat.SRGB8:case a.RenderbufferFormat.DEPTH_COMPONENT24:return 3;case a.PixelFormat.DEPTH_STENCIL:case a.PixelFormat.RGBA:case a.PixelFormat.RGBA_INTEGER:case a.SizedPixelFormat.RGBA8:case a.SizedPixelFormat.R32F:case a.SizedPixelFormat.R11F_G11F_B10F:case a.SizedPixelFormat.RG16F:case a.SizedPixelFormat.R32I:case a.SizedPixelFormat.R32UI:case a.SizedPixelFormat.RG16I:case a.SizedPixelFormat.RG16UI:case a.SizedPixelFormat.RGBA8I:case a.SizedPixelFormat.RGBA8UI:case a.SizedPixelFormat.RGBA8_SNORM:case a.SizedPixelFormat.SRGB8_ALPHA8:case a.SizedPixelFormat.RGB9_E5:case a.SizedPixelFormat.RGB10_A2UI:case a.SizedPixelFormat.RGB10_A2:case a.RenderbufferFormat.DEPTH_STENCIL:case a.RenderbufferFormat.DEPTH_COMPONENT32F:case a.RenderbufferFormat.DEPTH24_STENCIL8:return 4;case a.RenderbufferFormat.DEPTH32F_STENCIL8:return 5;case a.SizedPixelFormat.RGB16F:case a.SizedPixelFormat.RGB16I:case a.SizedPixelFormat.RGB16UI:return 6;case a.SizedPixelFormat.RG32F:case a.SizedPixelFormat.RG32I:case a.SizedPixelFormat.RG32UI:case a.SizedPixelFormat.RGBA16F:case a.SizedPixelFormat.RGBA16I:case a.SizedPixelFormat.RGBA16UI:return 8;case a.SizedPixelFormat.RGB32F:case a.SizedPixelFormat.RGB32I:case a.SizedPixelFormat.RGB32UI:return 12;case a.SizedPixelFormat.RGBA32F:case a.SizedPixelFormat.RGBA32I:case a.SizedPixelFormat.RGBA32UI:return 16;case a.CompressedTextureFormat.COMPRESSED_RGB_S3TC_DXT1_EXT:case a.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case a.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT3_EXT:case a.CompressedTextureFormat.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case a.CompressedTextureFormat.COMPRESSED_R11_EAC:case a.CompressedTextureFormat.COMPRESSED_SIGNED_R11_EAC:case a.CompressedTextureFormat.COMPRESSED_RGB8_ETC2:case a.CompressedTextureFormat.COMPRESSED_SRGB8_ETC2:case a.CompressedTextureFormat.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case a.CompressedTextureFormat.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case a.CompressedTextureFormat.COMPRESSED_RG11_EAC:case a.CompressedTextureFormat.COMPRESSED_SIGNED_RG11_EAC:case a.CompressedTextureFormat.COMPRESSED_RGBA8_ETC2_EAC:case a.CompressedTextureFormat.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}function l(e){if((0,n.isNone)(e))return 0;if("descriptor"in e)return e.glName?l(e.descriptor):0;var t=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!t)return 0;var r="hasMipmap"in e&&e.hasMipmap?1.3:1,i=e.width*e.height;return h(t)*i*r}})),r.register("iRJeW",(function(i,n){e(i.exports,"BufferObject",(function(){return E}));var a=r("8TSCy"),s=r("2TvXO"),o=r("lNwWH"),u=r("jHOLN"),c=r("7qybv"),h=r("kkxEC"),l=r("kGNC4"),f=r("fnzEM"),_=r("8JzMA"),d=u.default.getLogger("esri.views.webgl.BufferObject");function T(e){return(0,o.isArrayLike)(e)}var E=function(){"use strict";function e(t,r,i,n){a.classCallCheck(this,e),this._context=t,this.bufferType=r,this.usage=i,this._glName=null,this._size=-1,this._indexType=void 0,t.instanceCounter.increment(_.ResourceType.Buffer,this),this._glName=this._context.gl.createBuffer(),(0,l.checkWebGLError)(this._context.gl),n&&this.setData(n)}return a.createClass(e,[{key:"glName",get:function(){return this._glName}},{key:"size",get:function(){return this._size}},{key:"indexType",get:function(){return this._indexType}},{key:"byteSize",get:function(){return this.bufferType===_.BufferType.ELEMENT_ARRAY_BUFFER?this._indexType===_.DataType.UNSIGNED_INT?4*this._size:2*this._size:this._size}},{key:"_isVAOAware",get:function(){return this.bufferType===_.BufferType.ELEMENT_ARRAY_BUFFER||this.bufferType===_.BufferType.ARRAY_BUFFER}},{key:"dispose",value:function(){var e;null!=(e=this._context)&&e.gl?(this._glName&&(this._context.gl.deleteBuffer(this._glName),this._glName=null),this._context.instanceCounter.decrement(_.ResourceType.Buffer,this),this._context=null):this._glName&&d.warn("Leaked WebGL buffer object")}},{key:"setSize",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e<=0&&d.error("Buffer size needs to be positive!"),this.bufferType===_.BufferType.ELEMENT_ARRAY_BUFFER&&(0,c.isSome)(t))switch(this._indexType=t,t){case _.DataType.UNSIGNED_SHORT:e*=2;break;case _.DataType.UNSIGNED_INT:e*=4}this._setBufferData(e)}},{key:"setData",value:function(e){if(e){var t=e.byteLength;this.bufferType===_.BufferType.ELEMENT_ARRAY_BUFFER&&((0,h.isUint16Array)(e)&&(t/=2,this._indexType=_.DataType.UNSIGNED_SHORT),(0,h.isUint32Array)(e)&&(t/=4,this._indexType=_.DataType.UNSIGNED_INT)),this._setBufferData(t,e)}}},{key:"_setBufferData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._size=e;var r=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);var i=this._context.gl;(0,c.isSome)(t)?i.bufferData(this.bufferType,t,this.usage):i.bufferData(this.bufferType,e,this.usage),(0,l.checkWebGLError)(i),this._isVAOAware&&this._context.bindVAO(r)}},{key:"setSubData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.byteLength;if(e){(t<0||t>=this._size)&&d.error("offset is out of range!");var n=t,a=r,s=i,o=e.byteLength;this.bufferType===_.BufferType.ELEMENT_ARRAY_BUFFER&&((0,h.isUint16Array)(e)?(o/=2,n*=2,a*=2,s*=2):(0,h.isUint32Array)(e)&&(o/=4,n*=4,a*=4,s*=4)),void 0===i&&(i=o-1),r>=i&&d.error("end must be bigger than start!"),t+r-i>this._size&&d.error("An attempt to write beyond the end of the buffer!");var u=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);var c=this._context.gl,f=ArrayBuffer.isView(e)?e.buffer:e,T=0===a&&s===e.byteLength?f:f.slice(a,s);c.bufferSubData(this.bufferType,n,T),(0,l.checkWebGLError)(c),this._isVAOAware&&this._context.bindVAO(u)}}},{key:"setSubDataFromView",value:function(e,t,r,i){if(e){(t<0||t>=this._size)&&d.error("offset is out of range!"),r>=i&&d.error("end must be bigger than start!"),t+r-i>this._size&&d.error("An attempt to write beyond the end of the buffer!");var n=this._context.getBoundVAO();this._isVAOAware&&this._context.bindVAO(null),this._context.bindBuffer(this);var a=this._context.gl;if(this._context.type===f.ContextType.WEBGL2)a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,e,r,i-r);else{var s=0===r&&i===e.length?e:e.subarray(r,i);a.bufferSubData(this.bufferType,t*e.BYTES_PER_ELEMENT,s)}(0,l.checkWebGLError)(a),this._isVAOAware&&this._context.bindVAO(n)}}},{key:"getSubData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;if(this._context.type===f.ContextType.WEBGL2)if(r<0||i<0)d.error("Problem getting subdata: offset and length were less than zero!");else{var n=T(e)?e.BYTES_PER_ELEMENT:1;if(n*((null!=r?r:0)+(null!=i?i:0))>e.byteLength)d.error("Problem getting subdata: offset and length exceeded destination size!");else{t+n*(null!=i?i:0)>this.byteSize&&d.warn("Potential problem getting subdata: requested data exceeds buffer size!");var a=this._context.gl;this._context.bindBuffer(this,_.BufferType.COPY_READ_BUFFER),a.getBufferSubData(_.BufferType.COPY_READ_BUFFER,t,e,r,i),this._context.unbindBuffer(_.BufferType.COPY_READ_BUFFER)}}else d.error("Get buffer subdata is supported in WebGL2 only!")}},{key:"getSubDataAsync",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,o=this;return a.asyncToGenerator(t(s).mark((function a(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o._context.type!==f.ContextType.WEBGL2){t.next=6;break}return t.next=3,o._context.clientWaitAsync();case 3:o.getSubData(e,r,i,n),t.next=7;break;case 6:d.error("Get buffer subdata is supported in WebGL2 only!");case 7:case"end":return t.stop()}}),a)})))()}}],[{key:"createIndex",value:function(t,r,i){return new e(t,_.BufferType.ELEMENT_ARRAY_BUFFER,r,i)}},{key:"createVertex",value:function(t,r,i){return new e(t,_.BufferType.ARRAY_BUFFER,r,i)}},{key:"createUniform",value:function(t,r,i){if(t.type!==f.ContextType.WEBGL2)throw new Error("Uniform buffers are supported in WebGL2 only!");return new e(t,_.BufferType.UNIFORM_BUFFER,r,i)}},{key:"createPixelPack",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.Usage.STREAM_READ,i=arguments.length>2?arguments[2]:void 0;if(t.type!==f.ContextType.WEBGL2)throw new Error("Pixel pack buffers are supported in WebGL2 only!");var n=new e(t,_.BufferType.PIXEL_PACK_BUFFER,r);return i&&n.setSize(i),n}},{key:"createPixelUnpack",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_.Usage.STREAM_DRAW,i=arguments.length>2?arguments[2]:void 0;if(t.type!==f.ContextType.WEBGL2)throw new Error("Pixel unpack buffers are supported in WebGL2 only!");return new e(t,_.BufferType.PIXEL_UNPACK_BUFFER,r,i)}}]),e}()})),r.register("4aQus",(function(t,i){e(t.exports,"VertexArrayObject",(function(){return h}));var n=r("8TSCy"),a=r("jHOLN"),s=r("7qybv"),o=r("8JzMA"),u=r("7yLcd"),c=a.default.getLogger("esri.views.webgl.VertexArrayObject"),h=function(){"use strict";function e(t,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;n.classCallCheck(this,e),this._context=t,this._locations=r,this._layout=i,this._buffers=a,this._indexBuffer=s,this._glName=null,this._initialized=!1,t.instanceCounter.increment(o.ResourceType.VAO,this)}return n.createClass(e,[{key:"glName",get:function(){return this._glName}},{key:"vertexBuffers",get:function(){return this._buffers}},{key:"indexBuffer",get:function(){return this._indexBuffer}},{key:"size",get:function(){var e=this;return Object.keys(this._buffers).reduce((function(t,r){return t+e._buffers[r].size}),(0,s.isSome)(this._indexBuffer)?this._indexBuffer.size:0)}},{key:"layout",get:function(){return this._layout}},{key:"locations",get:function(){return this._locations}},{key:"dispose",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this._context){if(this._glName){var t,r,i=null==(t=this._context)||null==(r=t.capabilities)?void 0:r.vao;i?(i.deleteVertexArray(this._glName),this._glName=null):c.warn("Leaked WebGL VAO")}if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(var n in this._buffers)this._buffers[n].dispose(),delete this._buffers[n];this._indexBuffer=(0,s.disposeMaybe)(this._indexBuffer)}this._context.instanceCounter.decrement(o.ResourceType.VAO,this),this._context=null}else(this._glName||e&&Object.getOwnPropertyNames(this._buffers).length>0)&&c.warn("Leaked WebGL VAO")}},{key:"initialize",value:function(){if(!this._initialized){var e=this._context.capabilities.vao;if(e){var t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}}},{key:"bind",value:function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())}},{key:"_bindLayout",value:function(){var e=this,t=e._buffers,r=e._layout,i=e._indexBuffer;t||c.error("Vertex buffer dictionary is empty!");var n=this._context.gl;for(var a in t){var o=t[a];o||c.error("Vertex buffer is uninitialized!");var h=r[a];h||c.error("Vertex element descriptor is empty!"),(0,u.bindVertexBufferLayout)(this._context,this._locations,o,h)}(0,s.isSome)(i)&&(this._context.capabilities.vao?n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,i.glName):this._context.bindBuffer(i))}},{key:"unbind",value:function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()}},{key:"_unbindLayout",value:function(){var e=this._buffers,t=this._layout;for(var r in e||c.error("Vertex buffer dictionary is empty!"),e){var i=e[r];i||c.error("Vertex buffer is uninitialized!");var n=t[r];(0,u.unbindVertexBufferLayout)(this._context,this._locations,i,n)}(0,s.isSome)(this._indexBuffer)&&this._context.unbindBuffer(this._indexBuffer.bufferType)}}]),e}()})),r.register("72d6A",(function(i,n){e(i.exports,"FramebufferObject",(function(){return m}));var a=r("8TSCy"),s=r("2TvXO"),o=r("jHOLN"),u=r("7qybv"),c=r("iRJeW"),h=r("kGNC4"),l=r("fnzEM"),f=r("8JzMA"),_=r("kM85I"),d=r("8aBT4"),T=r("7yLcd"),E=o.default.getLogger("esri.views.webgl.FrameBufferObject"),m=function(){"use strict";function e(t,r){var i,n,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(a.classCallCheck(this,e),this._context=t,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachments=new Map,this._initialized=!1,this._desc=a.objectSpread({},r),t.instanceCounter.increment(f.ResourceType.Framebuffer,this),(0,u.isSome)(s)){Array.isArray(s)||(s=[s]);for(var c=0;c<s.length;++c){var h=s[c],l=f.ColorAttachment.COLOR_ATTACHMENT0+c,T=void 0;R(h)?(p(h)?(T=h.descriptor,this._colorAttachments.set(l,h)):(T=h,this._colorAttachments.set(l,new(0,d.Texture)(this._context,T))),A(T,this._desc)):(x(h)?(T=h.descriptor,this._colorAttachments.set(l,h)):(T=h,this._colorAttachments.set(l,new(0,_.Renderbuffer)(this._context,T))),g(T,this._desc)),this._validateColorAttachmentPoint(l)}}if((0,u.isSome)(o))if(R(o))this._context.capabilities.depthTexture||console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"),p(o)?(n=o.descriptor,this._depthStencilTexture=o):(n=o,this._depthStencilTexture=new(0,d.Texture)(this._context,n)),A(n,this._desc);else{var E;x(o)?(n=o.descriptor,i=o):(n=o,i=new(0,_.Renderbuffer)(this._context,n));var m=null!=(E=this._desc.depthStencilTarget)?E:f.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER;m===f.DepthStencilTargetType.STENCIL_RENDER_BUFFER?this._stencilAttachment=i:m===f.DepthStencilTargetType.DEPTH_RENDER_BUFFER||m===f.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER?this._depthAttachment=i:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),g(n,this._desc)}}return a.createClass(e,[{key:"dispose",value:function(){if(this._desc){var e=this._context.getBoundFramebufferObject();this._disposeColorAttachments(),this._disposeDepthStencilAttachments(),this._glName&&(this._context.gl.deleteFramebuffer(this._glName),this._glName=null),this._context.bindFramebuffer(e),this._context.instanceCounter.decrement(f.ResourceType.Framebuffer,this),this._desc=null}}},{key:"glName",get:function(){return this._glName}},{key:"descriptor",get:function(){return this._desc}},{key:"colorTexture",get:function(){var e=this._colorAttachments.get(f.ColorAttachment.COLOR_ATTACHMENT0);return e&&p(e)?e:null}},{key:"colorAttachment",get:function(){return this._colorAttachments.get(f.ColorAttachment.COLOR_ATTACHMENT0)}},{key:"depthStencilAttachment",get:function(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment}},{key:"depthStencilTexture",get:function(){return this._depthStencilTexture}},{key:"width",get:function(){return this._desc.width}},{key:"height",get:function(){return this._desc.height}},{key:"gpuMemoryUsage",get:function(){return a.toConsumableArray(this._colorAttachments).reduce((function(e,t){var r=a.slicedToArray(t,2),i=(r[0],r[1]);return e+(0,T.getGpuMemoryUsage)(i)}),0)+(0,T.getGpuMemoryUsage)(this.depthStencilAttachment)}},{key:"getColorTexture",value:function(e){var t=this._colorAttachments.get(e);return t&&p(t)?t:null}},{key:"attachColorTexture",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.ColorAttachment.COLOR_ATTACHMENT0;e&&(this._validateColorAttachmentPoint(t),A(e.descriptor,this._desc),this._disposeColorAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,t)),this._colorAttachments.set(t,e))}},{key:"detachColorTexture",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.ColorAttachment.COLOR_ATTACHMENT0,t=this._colorAttachments.get(e);if(p(t)){var r=t;return this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)),this._colorAttachments.delete(e),r}}},{key:"setColorTextureTarget",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.ColorAttachment.COLOR_ATTACHMENT0,r=this._colorAttachments.get(t);p(r)&&this._framebufferTexture2D(r.glName,t,e)}},{key:"attachDepthStencilTexture",value:function(e){if(!(0,u.isNone)(e)){var t=e.descriptor;t.pixelFormat!==f.PixelFormat.DEPTH_STENCIL&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),t.dataType!==f.PixelType.UNSIGNED_INT_24_8&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),A(t,this._desc),this._desc.depthStencilTarget&&this._desc.depthStencilTarget!==f.DepthStencilTargetType.DEPTH_STENCIL_TEXTURE&&(this._desc.depthStencilTarget=f.DepthStencilTargetType.DEPTH_STENCIL_TEXTURE),this._disposeDepthStencilAttachments(),this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(e.glName,f.DepthStencilAttachment)),this._depthStencilTexture=e}}},{key:"detachDepthStencilTexture",value:function(){var e=this._depthStencilTexture;return e&&this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,f.DepthStencilAttachment)),this._depthStencilTexture=null,e}},{key:"attachDepthStencilBuffer",value:function(e){if(!(0,u.isNone)(e)){var t=e.descriptor;if(t.internalFormat!==f.RenderbufferFormat.DEPTH_STENCIL&&t.internalFormat!==f.RenderbufferFormat.DEPTH_COMPONENT16&&console.error("Depth/Stencil buffer must have correct internalFormat"),g(t,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=t.internalFormat===f.RenderbufferFormat.DEPTH_STENCIL?f.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER:f.DepthStencilTargetType.DEPTH_RENDER_BUFFER,this._initialized){this._context.bindFramebuffer(this);var r=this._context.gl,i=this._desc.depthStencilTarget===f.DepthStencilTargetType.DEPTH_RENDER_BUFFER?r.DEPTH_ATTACHMENT:r.DEPTH_STENCIL_ATTACHMENT;r.framebufferRenderbuffer(f.FramebufferTarget.FRAMEBUFFER,i,r.RENDERBUFFER,e.glName)}this._depthAttachment=e}}},{key:"detachDepthStencilBuffer",value:function(){var e=this._context.gl,t=this._depthAttachment;if(t&&this._initialized){this._context.bindFramebuffer(this);var r=this._desc.depthStencilTarget===f.DepthStencilTargetType.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(f.FramebufferTarget.FRAMEBUFFER,r,e.RENDERBUFFER,null)}return this._depthAttachment=null,t}},{key:"detachAll",value:function(){var e=this;this._colorAttachments.forEach((function(t,r){return e._detachColorAttachment(r)})),this.detachDepthStencilBuffer(),this.detachDepthStencilTexture()}},{key:"copyToTexture",value:function(e,t,r,i,n,a,s){(e<0||t<0||n<0||a<0)&&console.error("Offsets cannot be negative!"),(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!");var o=this._desc,u=s.descriptor;s.descriptor.target!==f.TextureType.TEXTURE_2D&&console.error("Texture target must be TEXTURE_2D!"),(e+r>o.width||t+i>o.height||n+r>u.width||a+i>u.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");var c=this._context,h=c.bindTexture(s,d.Texture.TEXTURE_UNIT_FOR_UPDATES);c.setActiveTexture(d.Texture.TEXTURE_UNIT_FOR_UPDATES),c.bindFramebuffer(this),c.gl.copyTexSubImage2D(f.TextureType.TEXTURE_2D,0,n,a,e,t,r,i),c.bindTexture(h,d.Texture.TEXTURE_UNIT_FOR_UPDATES)}},{key:"readPixels",value:function(e,t,r,i,n,a,s){(r<=0||i<=0)&&console.error("Copy width and height must be greater than zero!"),s||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(e,t,r,i,n,a,s)}},{key:"readPixelsAsync",value:function(e,r,i,n,o,u,_){var d=this;return a.asyncToGenerator(t(s).mark((function a(){var T,E;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(d._context.type===l.ContextType.WEBGL2){t.next=2;break}return t.abrupt("return",((0,h.webglDebugEnabled)()&&console.warn("Attempting to read pixels using pixel buffer object without WebGL2"),void d.readPixels(e,r,i,n,o,u,_)));case 2:return T=d._context.gl,E=c.BufferObject.createPixelPack(d._context,f.Usage.STREAM_READ,_.byteLength),d._context.bindBuffer(E),d._context.bindFramebuffer(d),T.readPixels(e,r,i,n,o,u,0),d._context.unbindBuffer(f.BufferType.PIXEL_PACK_BUFFER),t.next=9,E.getSubDataAsync(_);case 9:E.dispose();case 10:case"end":return t.stop()}}),a)})))()}},{key:"resize",value:function(e,t){var r=this._desc;if(r.width!==e||r.height!==t){if(!this._initialized)return r.width=e,r.height=t,this._colorAttachments.forEach((function(r){r&&r.resize(e,t)})),void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,t));r.width=e,r.height=t,this._colorAttachments.forEach((function(r){r&&r.resize(e,t)})),null!=this._depthStencilTexture?this._depthStencilTexture.resize(e,t):(this._depthAttachment||this._stencilAttachment)&&(this._depthAttachment&&this._depthAttachment.resize(e,t),this._stencilAttachment&&this._stencilAttachment.resize(e,t)),this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}}},{key:"initializeAndBind",value:function(){var e,t,r,i,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.FramebufferTarget.FRAMEBUFFER,a=this,s=this._context.gl;if(this._initialized)s.bindFramebuffer(n,this.glName);else{this._glName&&s.deleteFramebuffer(this._glName);var o=this._context,u=s.createFramebuffer(),c=this._desc,l=null!=(e=c.colorTarget)?e:f.TargetType.RENDER_BUFFER,T=null!=(t=c.width)?t:1,E=null!=(r=c.height)?r:1;if(s.bindFramebuffer(n,u),0===this._colorAttachments.size)if(l===f.TargetType.TEXTURE||l===f.TargetType.CUBEMAP)this._colorAttachments.set(f.ColorAttachment.COLOR_ATTACHMENT0,b(o,c,this.descriptor.colorTarget===f.TargetType.CUBEMAP?f.TextureType.TEXTURE_CUBE_MAP:f.TextureType.TEXTURE_2D));else{var m=new(0,_.Renderbuffer)(o,{internalFormat:f.SizedPixelFormat.RGBA4,width:T,height:E});this._colorAttachments.set(f.ColorAttachment.COLOR_ATTACHMENT0,m)}this._colorAttachments.forEach((function(e,t){e&&(p(e)?a._framebufferTexture2D(e.glName,t,F(e),n):s.framebufferRenderbuffer(n,t,s.RENDERBUFFER,e.glName))}));var x=null!=(i=c.depthStencilTarget)?i:f.DepthStencilTargetType.NONE;switch(x){case f.DepthStencilTargetType.DEPTH_RENDER_BUFFER:case f.DepthStencilTargetType.DEPTH_STENCIL_RENDER_BUFFER:this._depthAttachment||(this._depthAttachment=new(0,_.Renderbuffer)(o,{internalFormat:c.depthStencilTarget===f.DepthStencilTargetType.DEPTH_RENDER_BUFFER?f.RenderbufferFormat.DEPTH_COMPONENT16:f.RenderbufferFormat.DEPTH_STENCIL,width:T,height:E}));var R=x===f.DepthStencilTargetType.DEPTH_RENDER_BUFFER?s.DEPTH_ATTACHMENT:s.DEPTH_STENCIL_ATTACHMENT;s.framebufferRenderbuffer(n,R,s.RENDERBUFFER,this._depthAttachment.glName);break;case f.DepthStencilTargetType.STENCIL_RENDER_BUFFER:this._stencilAttachment||(this._stencilAttachment=new(0,_.Renderbuffer)(o,{internalFormat:f.RenderbufferFormat.STENCIL_INDEX8,width:T,height:E})),s.framebufferRenderbuffer(n,s.STENCIL_ATTACHMENT,s.RENDERBUFFER,this._stencilAttachment.glName);break;case f.DepthStencilTargetType.DEPTH_STENCIL_TEXTURE:if(!this._depthStencilTexture){o.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");var A={target:f.TextureType.TEXTURE_2D,pixelFormat:f.PixelFormat.DEPTH_STENCIL,dataType:f.PixelType.UNSIGNED_INT_24_8,samplingMode:f.TextureSamplingMode.NEAREST,wrapMode:f.TextureWrapMode.CLAMP_TO_EDGE,width:T,height:E};this._depthStencilTexture=new(0,d.Texture)(o,A)}this._framebufferTexture2D(this._depthStencilTexture.glName,s.DEPTH_STENCIL_ATTACHMENT,F(this._depthStencilTexture),n)}(0,h.webglValidateShadersEnabled)()&&s.checkFramebufferStatus(n)!==s.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=u,this._initialized=!0}}},{key:"_framebufferTexture2D",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f.ColorAttachment.COLOR_ATTACHMENT0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f.TextureType.TEXTURE_2D,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:f.FramebufferTarget.FRAMEBUFFER,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this._context.gl.framebufferTexture2D(i,t,r,e,n)}},{key:"_detachColorAttachment",value:function(e){(0,h.webglDebugEnabled)()&&console.warn("Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!");var t=this._context.gl,r=this._colorAttachments.get(e);return p(r)?this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e)):this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(f.FramebufferTarget.FRAMEBUFFER,e,t.RENDERBUFFER,null)),this._colorAttachments.delete(e),r}},{key:"_disposeColorAttachments",value:function(){var e=this;this._colorAttachments.forEach((function(t,r){e._detachColorAttachment(r),t.dispose()})),this._colorAttachments.clear()}},{key:"_disposeDepthStencilAttachments",value:function(){var e=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);var t=this._desc.depthStencilTarget===f.DepthStencilTargetType.DEPTH_RENDER_BUFFER?e.DEPTH_ATTACHMENT:e.DEPTH_STENCIL_ATTACHMENT;e.framebufferRenderbuffer(f.FramebufferTarget.FRAMEBUFFER,t,e.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(f.FramebufferTarget.FRAMEBUFFER,e.STENCIL_ATTACHMENT,e.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),this._framebufferTexture2D(null,e.DEPTH_STENCIL_ATTACHMENT)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)}},{key:"_validateColorAttachmentPoint",value:function(t){if(-1===e._MAX_COLOR_ATTACHMENTS){var r=this._context.capabilities.drawBuffers;if(r){var i=this._context.gl;e._MAX_COLOR_ATTACHMENTS=i.getParameter(r.MAX_COLOR_ATTACHMENTS)}else e._MAX_COLOR_ATTACHMENTS=1}var n=t-f.ColorAttachment.COLOR_ATTACHMENT0;n+1>e._MAX_COLOR_ATTACHMENTS&&E.error("esri.FrameBufferObject","illegal attachment point for color attachment: ".concat(n+1,". Implementation supports up to ").concat(e._MAX_COLOR_ATTACHMENTS," color attachments"))}}]),e}();function p(e){return"type"in e&&"texture"===e.type}function x(e){return"type"in e&&"renderbuffer"===e.type}function R(e){return p(e)||"pixelFormat"in e}function b(e,t,r){return new(0,d.Texture)(e,{target:r,pixelFormat:f.PixelFormat.RGBA,dataType:f.PixelType.UNSIGNED_BYTE,samplingMode:f.TextureSamplingMode.NEAREST,wrapMode:f.TextureWrapMode.CLAMP_TO_EDGE,width:t.width,height:t.height})}function A(e,t){e.target!==f.TextureType.TEXTURE_2D&&e.target!==f.TextureType.TEXTURE_CUBE_MAP&&console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"),void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Color attachment texture must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function g(e,t){void 0!==t.width&&t.width>=0&&void 0!==t.height&&t.height>=0?t.width===e.width&&t.height===e.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(t.width=e.width,t.height=e.height)}function F(e){return e.descriptor.target===f.TextureType.TEXTURE_CUBE_MAP?f.TextureType.TEXTURE_CUBE_MAP_POSITIVE_X:f.TextureType.TEXTURE_2D}m._MAX_COLOR_ATTACHMENTS=-1})),r.register("kM85I",(function(t,i){e(t.exports,"Renderbuffer",(function(){return o}));var n=r("8TSCy"),a=r("fnzEM"),s=r("8JzMA"),o=function(){"use strict";function e(t,r){n.classCallCheck(this,e),this._context=t,this._desc=r,this.type="renderbuffer",this._context.instanceCounter.increment(s.ResourceType.Renderbuffer,this);var i=this._context.gl;this.glName=i.createRenderbuffer(),this._context.bindRenderbuffer(this);var o=r.width,u=r.height,c=r.internalFormat;if(r.multisampled){if(this._context.type!==a.ContextType.WEBGL2)throw new Error("Multisampled renderbuffers are not supported in WebGL1!");i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,c,o,u)}else i.renderbufferStorage(i.RENDERBUFFER,c,o,u)}return n.createClass(e,[{key:"descriptor",get:function(){return this._desc}},{key:"samples",get:function(){var e=this._desc.samples,t=this._context.parameters.maxSamples;return e?Math.min(e,t):t}},{key:"resize",value:function(e,t){var r=this._desc;if(r.width!==e||r.height!==t){r.width=e,r.height=t;var i=this._context.gl;this._context.bindRenderbuffer(this),r.multisampled?i.renderbufferStorageMultisample(i.RENDERBUFFER,this.samples,r.internalFormat,r.width,r.height):i.renderbufferStorage(i.RENDERBUFFER,r.internalFormat,r.width,r.height)}}},{key:"dispose",value:function(){this._context&&(this._context.gl.deleteRenderbuffer(this.glName),this._context.instanceCounter.decrement(s.ResourceType.Renderbuffer,this),this._context=null)}}]),e}()}))}();
//# sourceMappingURL=objectResourceUtils.0bae765d.js.map