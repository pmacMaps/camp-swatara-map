/*** Basemaps for Webmap ***/
import { vectorBasemapLayer } from 'esri-leaflet-vector';
import { tiledMapLayer } from 'esri-leaflet';
import { layerGroup } from 'leaflet';
// esri api key
import { esriKey } from './constants.js';

// PEMA Imagery
const pemaImagery = tiledMapLayer({
    url: ' https://imagery.pasda.psu.edu/arcgis/rest/services/pasda/PEMAImagery2018_2020/MapServer',
    detectRetina: true,
    attribution: 'Pennsylvania Emergency Management Agency'
});

// Labels layer from Esri
const esriLabels = vectorBasemapLayer('ArcGIS:Imagery:Labels', {
    apikey: esriKey
 });

// Group layer combing PEMA imagery and Esri labels
// initial basemap on map load
export const imageryWithLabels = layerGroup([pemaImagery, esriLabels]);

// Esri Open Street Map Terrain
const esriOsmTerrain = vectorBasemapLayer('OSM:StandardRelief', {
    apikey: esriKey
});

// basemap layers for control
// used to hydrate layer control widget
export const basemapLayers = {
    "Satellite Imagery": imageryWithLabels,
    "Topographic": esriOsmTerrain,
};