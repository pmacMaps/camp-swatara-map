
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const atTrail = new FeatureLayer({
    title: 'Appalachian Trail',
    copyright: 'Appalachian Trail Conservancy',
    outFields: ['LENGTH_MI', 'SUPPLIER', 'TRAIL_CLUB'],
    url: 'https://mapservices.pasda.psu.edu/server/rest/services/pasda/AppalachianTrail/MapServer/0'
});


// add popup to Appalachian Trail
/*
atTrail.bindPopup(function(evt) {
    const popupContent = '<div class="feat-popup"><h3>Appalachian Trail</h3></div>';
    return L.Util.template(popupContent);
}, {closeOnClick: true, maxWidth: setPopupMaxWidth(windowWidth)});
*/

// USGS elevation contours
export const usgsContours = new MapImageLayer({
    title: 'Elevation Contours',
    copyright: 'USGS',
    url: 'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer',
    sublayers: [{
        id: 19,
        legendEnabled: true // not working
    }]
});