/*** Basemaps ***/
// PEMA Imagery
export const pemaImagery = L.esri.tiledMapLayer({
    url: ' https://imagery.pasda.psu.edu/arcgis/rest/services/pasda/PEMAImagery2018_2020/MapServer',
    detectRetina: true,
    attribution: 'Pennsylvania Emergency Management Agency'
});

// USA Topographic
const usaTopo = L.esri.tiledMapLayer({
    url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer',
    detectRetina: true,
    maxZoom: 15,
    attribution: 'Copyright:© 2013 National Geographic Society, i-cubed'
});

// USGS Topographic
const usgsTopo = L.esri.tiledMapLayer({
    url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer',
    detectRetina: true,
    maxZoom: 15,
    attribution: 'USGS The National Map',
});

// basemap layers for control
export const basemapLayers = {
    "Satellite Imagery": pemaImagery,
    "Historic Topographic": usaTopo,
    "USGS Topopgrahic": usgsTopo
};