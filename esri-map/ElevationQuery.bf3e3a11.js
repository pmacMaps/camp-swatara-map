function e(e,t,i,n){Object.defineProperty(e,t,{get:i,set:n,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;t.register("eNsDv",(function(i,n){e(i.exports,"ElevationQuery",(function(){return y}));var s=t("dDQ0F"),o=t("bPmsI"),l=t("1CpCt"),a=t("lHg4e"),r=t("zPXCh"),c=t("5vMQI"),u=t("dZxPT"),h=t("7blCc"),p=t("5cP7j"),f=t("19dbe"),d=t("8owIL"),m=t("4XZVU");class y{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new(0,o.default)("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const n=x.fromGeometry(t);let s=!1;i&&i.returnSampleInfo||(s=!0);const l={...R,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],n,l),r=await this._queryAllContinue(e,a,l);return r.geometry=r.geometry.export(),s&&delete r.sampleInfo,r}async query(e,t,i){if(!e)throw new(0,o.default)("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof x)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new(0,o.default)("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const n={...R,...i},s=new T(e,t.spatialReference,n),l=n.signal;return await e.load({signal:l}),await this._createGeometryDescriptor(s,t,l),await this._selectTiles(s,l),await this._populateElevationTiles(s,l),this._sampleGeometryWithElevation(s),this._createQueryResult(s,l)}async createSampler(e,t,i){if(!e)throw new(0,o.default)("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new(0,o.default)("elevation-query:invalid-extent","Invalid or undefined extent");const n={...R,...i};return this._createSampler(e,t,n)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new(0,o.default)("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new(0,o.default)("elevation-query:invalid-extent","Invalid or undefined extent");const n={...R,...i,returnSampleInfo:!0},s=await this._createSampler(e[e.length-1],t,n);return this._createSamplerAllContinue(e,t,s,n)}async _createSampler(e,t,i,n){const s=i.signal;await e.load({signal:s});const o=t.spatialReference,l=e.tileInfo.spatialReference;o.equals(l)||(await(0,p.initializeProjection)([{source:o,dest:l}],{signal:s}),t=(0,p.project)(t,l));const a=new g(e,t,i,n);return await this._selectTiles(a,s),await this._populateElevationTiles(a,s),new(0,d.MultiTileElevationSampler)(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,n){if(e.pop(),!e.length)return i;const s=i.samplers.map((e=>(0,f.fromExtent)(e.extent))),o=await this._createSampler(e[e.length-1],t,n,s);if(0===o.samplers.length)return i;const l=i.samplers.concat(o.samplers),a=new(0,d.MultiTileElevationSampler)(l,n.noDataValue);return this._createSamplerAllContinue(e,t,a,n)}async _queryAllContinue(e,t,i){const n=e.pop(),s=t.geometry.coordinates,o=[],l=[];for(let i=0;i<s.length;i++){const a=t.sampleInfo[i];a.demResolution>=0?a.source||(a.source=n):e.length&&(o.push(s[i]),l.push(i))}if(!e.length||0===o.length)return t;const a=t.geometry.clone(o),r=await this.query(e[e.length-1],a,i);return l.forEach(((e,i)=>{s[e].z=r.geometry.coordinates[i].z,t.sampleInfo[e].demResolution=r.sampleInfo[i].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i={geometry:(await e.geometry.project(e.outSpatialReference,t)).export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i}async _createGeometryDescriptor(e,t,i){let n;const s=e.layer.tileInfo.spatialReference;if(t instanceof x?n=await t.project(s,i):(await(0,p.initializeProjection)([{source:t.spatialReference,dest:s}],{signal:i}),n=(0,p.project)(t,s)),!n)throw new(0,o.default)("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${s.wkid}'`);e.geometry=x.fromGeometry(n)}async _selectTiles(e,t){const i=e.options.demResolution;if("geometry"===e.type&&this._preselectOutsideLayerExtent(e),"number"==typeof i)this._selectTilesClosestResolution(e);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new(0,o.default)("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if((0,l.isNone)(e.layer.fullExtent))return;const t=new(0,m.ElevationTile)(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const n=e.x,s=e.y;(n<i.xmin||n>i.xmax||s<i.ymin||s>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e){const t=e.layer.tileInfo,i=this._findNearestDemResolutionLODIndex(t,e.options.demResolution);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const i=t/(0,r.getMetersPerUnitForSR)(e.spatialReference);let n=e.lods[0],s=0;for(let t=1;t<e.lods.length;t++){const o=e.lods[t];Math.abs(o.resolution-i)<Math.abs(n.resolution-i)&&(n=o,s=t)}return s}async _selectTilesFinestContiguous(e,t){const i=w(e.layer.tileInfo,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,i,t)}async _selectTilesFinestContiguousAt(e,t,i){const n=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const s=n.tilemapCache,l=e.getTilesToFetch();try{if(s)await(0,a.whenOrAbort)(Promise.all(l.map((e=>s.fetchAvailability(e.level,e.row,e.col,{signal:i})))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new(0,o.default)("elevation-query:has-unavailable-tiles")}catch(n){(0,a.throwIfAbortError)(n),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),n={},s=e.options.cache,o=e.options.noDataValue,r=i.map((async i=>{const a=`${e.layer.uid}:${i.id}:${o}`,r=(0,l.isSome)(s)?s.get(a):null,c=(0,l.isSome)(r)?r:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:o,signal:t});(0,l.isSome)(s)&&s.put(a,c),n[i.id]=new(0,m.ElevationTile)(i,c)}));await(0,a.whenOrAbort)((0,a.eachAlways)(r),t),e.populateElevationTiles(n)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i)return this._selectTilesAutoPrefetchUpsample(e,t);const n=e.getTilesToFetch(),o={},l=n.map((async e=>{const n={id:null,level:0,row:0,col:0,extent:(0,f.create)()},l=await(0,s.result)(i.fetchAvailabilityUpsample(e.level,e.row,e.col,n,{signal:t}));!1===l.ok?(0,a.throwIfAbortError)(l.error):o[e.id]=n}));await(0,a.whenOrAbort)(Promise.all(l),t),e.remapTiles(o)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const n={},s=e=>{e.id in n?n[e.id]++:(n[e.id]=1,i++)},o=e=>{const t=n[e.id];1===t?(delete n[e.id],i--):n[e.id]=t-1};e.forEachTileToFetch(s,o);let l=!0;for(;l&&(l=!1,e.forEachTileToFetch((n=>{i<=e.options.maximumAutoTileRequests||(o(n),t.upsampleTile(n)&&(l=!0),s(n))}),o),l););}_selectTilesAutoFinest(e){const t=w(e.layer.tileInfo,e.options.minDemResolution);e.selectTilesAtLOD(t,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let n=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?n=!0:t()})),n&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let n=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);(0,l.isSome)(e)?n=e:t.elevationTile=null}t.z=n}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=(0,r.getMetersPerUnitForSR)(t.spatialReference);return e.geometry.coordinates.map((n=>{let s=-1;return n.elevationTile&&n.elevationTile!==e.outsideExtentTile&&(s=t.lodAt(n.elevationTile.tile.level).resolution*i),{demResolution:s}}))}}class x{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new x;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>this._cloneCoordinate(e))),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await(0,p.initializeProjection)([{source:this.spatialReference,dest:e}],{signal:t});const i=new(0,c.default)({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),n=(0,p.project)(i,e);if(!n)return null;const s=this.coordinates.map(((e,t)=>{const i=this._cloneCoordinate(e),s=n.points[t];return i.x=s[0],i.y=s[1],i})),o=this.clone(s);return o.spatialReference=e,o}_cloneCoordinate(e){return{x:e.x,y:e.y,z:e.z,m:e.m,tile:null,elevationTile:null}}static fromGeometry(e){const t=new x;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof x)t.coordinates=e.coordinates.map((e=>t._cloneCoordinate(e))),t._exporter=(t,i)=>{const n=e.clone(t);return n.spatialReference=i,n};else switch(e.type){case"point":{const i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?[{x:i.x,y:i.y,z:i.z,m:i.m}]:n?[{x:i.x,y:i.y,z:i.z}]:s?[{x:i.x,y:i.y,m:i.m}]:[{x:i.x,y:i.y}],t._exporter=(t,i)=>e.hasM?new(0,u.default)(t[0].x,t[0].y,t[0].z,t[0].m,i):new(0,u.default)(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:n,hasM:s}=i;t.coordinates=n&&s?i.points.map((e=>({x:e[0],y:e[1],z:e[2],m:e[3]}))):n?i.points.map((e=>({x:e[0],y:e[1],z:e[2]}))):s?i.points.map((e=>({x:e[0],y:e[1],m:e[2]}))):i.points.map((e=>({x:e[0],y:e[1]}))),t._exporter=(t,i)=>e.hasM?new(0,c.default)({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new(0,c.default)(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,n=[],s=[],{hasZ:o,hasM:l}=e;let a=0;for(const e of i.paths)if(s.push([a,a+e.length]),a+=e.length,o&&l)for(const t of e)n.push({x:t[0],y:t[1],z:t[2],m:t[3]});else if(o)for(const t of e)n.push({x:t[0],y:t[1],z:t[2]});else if(l)for(const t of e)n.push({x:t[0],y:t[1],m:t[2]});else for(const t of e)n.push({x:t[0],y:t[1]});t.coordinates=n,t._exporter=(t,i)=>{const n=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),o=s.map((e=>n.slice(e[0],e[1])));return new(0,h.default)({paths:o,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class v{constructor(e,t){this.layer=e,this.options=t}}class T extends v{selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const t=this.layer.tileInfo,i=t.lods[e].level;this.geometry.coordinates.forEach((e=>{e.tile=t.tileAt(i,e.x,e.y)}))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates)t.tile=e[t.tile.id]}getTilesToFetch(){const e={},t=[];for(const i of this.geometry.coordinates){const n=i.tile;i.elevationTile||!i.tile||e[n.id]||(e[n.id]=n,t.push(n))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>t.tile=null))}constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}}class g extends v{selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this.candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n)}_maximumLodForRequests(e){const t=this.layer.tileInfo;if(!e)return t.lods.length-1;const i=this.extent;if((0,l.isNone)(i))return-1;for(let n=t.lods.length-1;n>=0;n--){const s=t.lods[n],o=s.resolution*t.size[0],l=s.resolution*t.size[1];if(Math.ceil(i.width/o)*Math.ceil(i.height/l)<=e)return n}return-1}allElevationTilesFetched(){return this.candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this.fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this.candidateTiles){const i=e[t.id];i&&(this.fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this.candidateTiles}forEachTileToFetch(e,t){const i=this.candidateTiles;this.candidateTiles=[],i.forEach((i=>{if(this.fetchedCandidates.has(i))return void(t&&t(i));let n=!1;e(i,(()=>n=!0)),n?t&&t(i):this.candidateTiles.push(i)})),this.candidateTiles=this._uniqueNonOverlappingTiles(this.candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},n=[];for(const s of e)i[s.id]?t&&t(s):(i[s.id]=s,n.push(s));const s=n.sort(((e,t)=>e.level-t.level));return s.filter(((e,i)=>{for(let n=0;n<i;n++)if((0,f.contains)(s[n].extent,e.extent))return t&&t(e),!1;return!0}))}_selectCandidateTilesCoveringExtentAt(e){this.candidateTiles.length=0;const t=this.extent;if((0,l.isNone)(t))return;const i=this.layer.tileInfo,n=i.lods[e],s=i.tileAt(n.level,t.xmin,t.ymin),o=n.resolution*i.size[0],a=n.resolution*i.size[1],r=Math.ceil((t.xmax-s.extent[0])/o),c=Math.ceil((t.ymax-s.extent[1])/a);for(let e=0;e<c;e++)for(let t=0;t<r;t++){const n={id:null,level:s.level,row:s.row-e,col:s.col+t};i.updateTileInfo(n),this._tileIsMasked(n)||this.candidateTiles.push(n)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>(0,f.contains)(t,e.extent)))}constructor(e,t,i,n){super(e,i),this.type="extent",this.elevationTiles=[],this.candidateTiles=[],this.fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=n}}function w(e,t){let i=e.lods.length-1;if(t>0){const n=e.lods.findIndex((e=>e.resolution<t));0===n?i=0:n>0&&(i=n-1)}return i}const R={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0}})),t.register("8owIL",(function(i,n){e(i.exports,"MultiTileElevationSampler",(function(){return d})),t("ixrNB"),t("5HTPH");var s=t("6TszD"),o=t("1CpCt"),l=t("zPXCh"),a=t("19dbe"),r=t("6fwEV"),c=t("ZYFMI"),u=t("dZxPT");const h=s.default.getLogger("esri.layers.support.ElevationSampler");class p{queryElevation(e){return function(e,t){const i=m(e,t.spatialReference);if(!i)return null;switch(e.type){case"point":n=i,s=t,e.z=(0,o.unwrapOr)(s.elevationAt(n),0);break;case"polyline":!function(e,t,i){y.spatialReference=t.spatialReference;const n=e.hasM&&!e.hasZ;for(let s=0;s<e.paths.length;s++){const l=e.paths[s],a=t.paths[s];for(let e=0;e<l.length;e++){const t=l[e],s=a[e];y.x=s[0],y.y=s[1],n&&(t[3]=t[2]),t[2]=(0,o.unwrapOr)(i.elevationAt(y),0)}}e.hasZ=!0}(e,i,t);break;case"multipoint":!function(e,t,i){y.spatialReference=t.spatialReference;const n=e.hasM&&!e.hasZ;for(let s=0;s<e.points.length;s++){const l=e.points[s],a=t.points[s];y.x=a[0],y.y=a[1],n&&(l[3]=l[2]),l[2]=(0,o.unwrapOr)(i.elevationAt(y),0)}e.hasZ=!0}(e,i,t)}var n,s;return e}(e.clone(),this)}on(){return x}projectIfRequired(e,t){return m(e,t)}}class f extends p{get spatialReference(){return this.extent.spatialReference}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return(0,r.extentContainsPoint)(this.extent,t)}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if((0,o.isNone)(t))return null;if(!this.contains(e)){const t=this.extent,i=`${t.xmin}, ${t.ymin}, ${t.xmax}, ${t.ymax}`;return h.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler extent (${i})`),this.noDataValue}return this.tile.sample(t.x,t.y)}constructor(e,t,i){super(),this.tile=e,this.noDataValue=i,this.extent=(0,a.toExtent)(e.tile.extent,t.spatialReference);const n=(0,l.getMetersPerUnitForSR)(t.spatialReference),s=t.lodAt(e.tile.level).resolution*n;this.demResolution={min:s,max:s}}}class d extends p{get spatialReference(){return this.extent.spatialReference}elevationAt(e){const t=this.projectIfRequired(e,this.spatialReference);if(!t)return null;for(const e of this.samplers)if(e.contains(t))return e.elevationAt(t);return h.warn("#elevationAt()",`Point used to sample elevation (${e.x}, ${e.y}) is outside of the sampler`),this.noDataValue}constructor(e,t,i){let n;super(),"number"==typeof t?(this.noDataValue=t,n=null):(n=t,this.noDataValue=i),this.samplers=n?e.map((e=>new f(e,n,this.noDataValue))):e;const s=this.samplers[0];if(s){this.extent=s.extent.clone();const{min:e,max:t}=s.demResolution;this.demResolution={min:e,max:t};for(let e=1;e<this.samplers.length;e++){const t=this.samplers[e];this.extent.union(t.extent),this.demResolution.min=Math.min(this.demResolution.min,t.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,t.demResolution.max)}}else this.extent=(0,a.toExtent)((0,a.create)(),n.spatialReference),this.demResolution={min:0,max:0}}}function m(e,t){if((0,o.isNone)(e))return null;const i=e.spatialReference;if(i.equals(t))return e;const n=(0,c.project)(e,t);return n||h.error(`Cannot project geometry spatial reference (wkid:${i.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),n}const y=new(0,u.default),x={remove(){}}})),t.register("4XZVU",(function(i,n){e(i.exports,"ElevationTile",(function(){return o}));var s=t("1CpCt");class o{sample(e,t){if((0,s.isNone)(this.samplerData))return;const{safeWidth:i,width:n,pixelData:o,noDataValue:a,dx:r,dy:c,y1:u,x0:h}=this.samplerData,p=l(c*(u-t),0,i),f=l(r*(e-h),0,i),d=Math.floor(p),m=Math.floor(f),y=d*n+m,x=y+n,v=o[y],T=o[x],g=o[y+1],w=o[x+1];if(v!==a&&T!==a&&g!==a&&w!==a){const e=f-m,t=v+(g-v)*e;return t+(T+(w-T)*e-t)*(p-d)}}constructor(e,t=null){if(this.tile=e,(0,s.isSome)(t)){const i=e.extent;this.samplerData={pixelData:t.values,width:t.width,height:t.height,safeWidth:.99999999*(t.width-1),noDataValue:t.noDataValue,dx:(t.width-1)/(i[2]-i[0]),dy:(t.width-1)/(i[3]-i[1]),x0:i[0],y1:i[3]}}}}function l(e,t,i){return e<t?t:e>i?i:e}}));
//# sourceMappingURL=ElevationQuery.bf3e3a11.js.map