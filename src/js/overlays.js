// Esri Leaflet
import { featureLayer, dynamicMapLayer } from 'esri-leaflet';
import { setPopupMaxWidth, reduceNumberDecimals } from './functions.js';
import { windowWidth } from './constants.js';

// Appalachian Trail
export const atTrail = featureLayer({
    url: 'https://mapservices.pasda.psu.edu/server/rest/services/pasda/AppalachianTrail/MapServer/0',
    fields: ['LENGTH_MI', 'TRAIL_CLUB'],
    simplifyFactor: 1,
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
    popupContent += '<ul>';
    popupContent += '<li>Trail Club: {TRAIL_CLUB}</li>';
    popupContent += `<li>Section Length (miles): ${reduceNumberDecimals(evt.feature.properties.LENGTH_MI)}</li>`;
    popupContent += '</ul>';
    popupContent+= '</div>';
    return L.Util.template(popupContent, evt.feature.properties);
}, {closeOnClick: true, maxWidth: setPopupMaxWidth(windowWidth)}
);

// USGS elevation contours
export const usgsContours = dynamicMapLayer({
    url: 'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer',
    layers: [19]
});