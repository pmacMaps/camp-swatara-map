import { esriKey } from './constants.js';

/*** Basemaps ***/
// PEMA Imagery
export const pemaImagery = L.esri.tiledMapLayer({
    url: ' https://imagery.pasda.psu.edu/arcgis/rest/services/pasda/PEMAImagery2018_2020/MapServer',
    detectRetina: true,
    attribution: 'Pennsylvania Emergency Management Agency'
});

// Open Topographic Map
const openTopoMap = L.tileLayer('https://a.tile.opentopomap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: 'OpenTopoMap'
});

// Esri Topographic Map
const esriTopo1 =   L.esri.Vector.vectorBasemapLayer('ArcGIS:Topographic:Base', {
    apikey: esriKey
});
const esriTopo2 =   L.esri.Vector.vectorBasemapLayer('ArcGIS:Topographic', {
    apikey: esriKey
});
const esriTopo = L.layerGroup([esriTopo1, esriTopo2]);

// basemap layers for control
export const basemapLayers = {
    "Satellite Imagery": pemaImagery,
    "Topographic (Esri)": esriTopo,
    "Topographic (metric)": openTopoMap
};