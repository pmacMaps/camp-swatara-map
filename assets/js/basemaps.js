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

export const basemapLayers = {
    "Satellite Imagery": pemaImagery,
    "Topographic": openTopoMap
};