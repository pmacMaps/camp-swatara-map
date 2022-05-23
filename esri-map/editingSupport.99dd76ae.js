var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;e.register("hw2Os",(function(t,a){var r,d,i,s;r=t.exports,d="applyEdits",i=function(){return f},Object.defineProperty(r,d,{get:i,set:s,enumerable:!0,configurable:!0});var l=e("EvxpF"),n=e("26zvD"),u=e("bPmsI"),o=e("itGIg"),p=e("1CpCt"),c=e("7dRCe"),h=e("hq5aB");async function f(e,t,a,r={}){let d,i;const s={edits:a,result:new Promise(((e,t)=>{d=e,i=t}))};e.emit("apply-edits",s);try{var l;const{results:i,edits:s}=await async function(e,t,a,r){if(await e.load(),d=t,!d||null==d.applyEdits)return Promise.reject(new(0,u.default)(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e}));var d;if(!e.editingEnabled)throw new(0,u.default)(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:s}=await async function(e,t,a){const r=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),d=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!t||!r&&!d)throw new(0,u.default)(`${e.type}-layer:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new(0,u.default)(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new(0,u.default)(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new(0,u.default)(`${e.type}-layer:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&d)throw new(0,u.default)(`${e.type}-layer:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&d)throw new(0,u.default)(`${e.type}-layer:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const i={...a};if(null!=i.rollbackOnFailureEnabled||e.capabilities.editing.supportsRollbackOnFailure||(i.rollbackOnFailureEnabled=!0),!1===i.rollbackOnFailureEnabled&&"original-and-current-features"===i.returnServiceEditsOption)throw new(0,u.default)(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true.");if(!e.capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference&&i.returnServiceEditsInSourceSR)throw new(0,u.default)(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(i.returnServiceEditsInSourceSR&&"original-and-current-features"!==i.returnServiceEditsOption)throw new(0,u.default)(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsOption' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const s={...t};if(s.addFeatures=t&&n.default.isCollection(t.addFeatures)?t.addFeatures.toArray():s.addFeatures||[],s.updateFeatures=t&&n.default.isCollection(t.updateFeatures)?t.updateFeatures.toArray():s.updateFeatures||[],s.deleteFeatures=t&&n.default.isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():s.deleteFeatures||[],s.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new(0,u.default)(`${e.type}-layer:unsupported-operation`,"Layer does not support adding features.");if(s.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new(0,u.default)(`${e.type}-layer:unsupported-operation`,"Layer does not support updating features.");if(s.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new(0,u.default)(`${e.type}-layer:unsupported-operation`,"Layer does not support deleting features.");s.addAttachments=s.addAttachments||[],s.updateAttachments=s.updateAttachments||[],s.deleteAttachments=s.deleteAttachments||[],s.addFeatures=s.addFeatures.map(b),s.updateFeatures=s.updateFeatures.map(b);const l=a&&a.globalIdUsed;return s.addFeatures.forEach((t=>{y(t,e,l)})),s.updateFeatures.forEach((t=>function(e,t,a){if(y(e,t,a),"geometry"in e&&(0,p.isSome)(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new(0,u.default)(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}(t,e,l))),s.deleteFeatures.forEach((t=>{y(t,e,l)})),s.addAttachments.forEach((t=>m(t,e))),s.updateAttachments.forEach((t=>m(t,e))),{edits:await g(s),options:i}}(e,a,r);return i.addFeatures.length||i.updateFeatures.length||i.deleteFeatures.length||i.addAttachments.length||i.updateAttachments.length||i.deleteAttachments.length?{edits:i,results:await t.applyEdits(i,s)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}(e,t,a,r),c=e=>e.filter((e=>!e.error)).map(o.clone),h={edits:s,addedFeatures:c(i.addFeatureResults),updatedFeatures:c(i.updateFeatureResults),deletedFeatures:c(i.deleteFeatureResults),addedAttachments:c(i.addAttachmentResults),updatedAttachments:c(i.updateAttachmentResults),deletedAttachments:c(i.deleteAttachmentResults)};return null!=(l=i.editedFeatureResults)&&l.length&&(h.editedFeatures=i.editedFeatureResults),(h.addedFeatures.length||h.updatedFeatures.length||h.deletedFeatures.length||h.addedAttachments.length||h.updatedAttachments.length||h.deletedAttachments.length)&&e.emit("edits",h),d(h),i}catch(e){throw i(e),e}}function y(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new(0,u.default)(`${t.type}-layer:invalid-parameter`,"Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new(0,u.default)(`${t.type}-layer:invalid-parameter`,"'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&(0,p.isSome)(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new(0,u.default)(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new(0,u.default)(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function m(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new(0,u.default)(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new(0,u.default)(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new(0,u.default)(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new(0,u.default)(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name||r.name))throw new(0,u.default)(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new(0,u.default)(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=(0,c.dataComponents)(r.data);if(e&&!e.isBase64)throw new(0,u.default)(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function g(e){const t=e.addFeatures,a=e.updateFeatures,r=t.concat(a).map((e=>e.geometry)),d=await(0,h.normalizeCentralMeridian)(r),i=t.length,s=a.length;return d.slice(0,i).forEach(((t,a)=>e.addFeatures[a].geometry=t)),d.slice(i,i+s).forEach(((t,a)=>e.updateFeatures[a].geometry=t)),e}function b(e){const t=new(0,l.default);return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}));
//# sourceMappingURL=editingSupport.99dd76ae.js.map