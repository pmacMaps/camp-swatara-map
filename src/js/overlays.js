// Esri Leaflet
import { dynamicMapLayer } from 'esri-leaflet';
import { setPopupMaxWidth } from './functions.js';
import { windowWidth } from './constants.js';
import { geoJson } from 'leaflet';

// appalachian trail data file
const data = require('../data/at-trail.geojson');

// Hiking Trails
export const atTrail = geoJson(data, {
    style: function(feature) {
        return {
            color: '#9c4040',
            weight: 5
        }
    }
});

// add popup to Appalachian Trail
atTrail.bindPopup(function(evt) {
    let popupContent = '<div class="feat-popup">';
    popupContent += '<h3>Appalachian Trail</h3>';
    return L.Util.template(popupContent, evt.feature.properties);
}, {closeOnClick: true, maxWidth: setPopupMaxWidth(windowWidth)}
);

// USGS elevation contours
export const usgsContours = dynamicMapLayer({
    url: 'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer',
    layers: [19]
});