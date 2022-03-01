/*** Basemaps for Webmap ***/
// esri api key
import { esriKey } from './constants.js';

// PEMA Imagery
// initial basemap on map load
export const pemaImagery = L.esri.tiledMapLayer({
    url: ' https://imagery.pasda.psu.edu/arcgis/rest/services/pasda/PEMAImagery2018_2020/MapServer',
    detectRetina: true,
    attribution: 'Pennsylvania Emergency Management Agency'
});

// Esri Open Street Map Terrain
const esriOsmTerrain = L.esri.Vector.vectorBasemapLayer('OSM:StandardRelief', {
    apikey: esriKey
});

// basemap layers for control
// used to hydrate layer control widget
export const basemapLayers = {
    "Satellite Imagery": pemaImagery,
    "Topographic": esriOsmTerrain,
};
