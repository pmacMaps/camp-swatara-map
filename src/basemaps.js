/*** Basemaps for Webmap ***/
import { vectorBasemapLayer } from 'esri-leaflet-vector';
import { tiledMapLayer } from 'esri-leaflet';
// esri api key
import { esriKey } from './constants.js';

// PEMA Imagery
// initial basemap on map load
// L.esri.tiledMapLayer
export const pemaImagery = tiledMapLayer({
    url: ' https://imagery.pasda.psu.edu/arcgis/rest/services/pasda/PEMAImagery2018_2020/MapServer',
    detectRetina: true,
    attribution: 'Pennsylvania Emergency Management Agency'
});

// Esri Open Street Map Terrain
// L.esri.Vector.vectorBasemapLayer
const esriOsmTerrain = vectorBasemapLayer('OSM:StandardRelief', {
    apikey: esriKey
});

// basemap layers for control
// used to hydrate layer control widget
export const basemapLayers = {
    "Satellite Imagery": pemaImagery,
    "Topographic": esriOsmTerrain,
};