import { vectorTileLayer } from 'esri-leaflet-vector';
import { featureLayer } from 'esri-leaflet';
import { setPopupMaxWidth } from './functions.js';
import { windowWidth } from './constants.js';

// Esri beta vector elevation contours
export const esriContours = vectorTileLayer('51ca3ce6a16d4080ad955dacd6dd2fe2', {
    pane: 'contours'
});

// Appalachian Trail
export const atTrail = featureLayer({
    url: 'https://mapservices.pasda.psu.edu/server/rest/services/pasda/AppalachianTrail/MapServer/0',
    simplifyFactor: 1,
    style: function(feature) {
        return {
            color: '#9c4040',
            weight: 6
        }
    }
});

// add popup to Appalachian Trail
atTrail.bindPopup(function(evt) {
    const popupContent = '<div class="feat-popup"><h3>Appalachian Trail</h3></div>';
    return L.Util.template(popupContent);
}, {closeOnClick: true, maxWidth: setPopupMaxWidth(windowWidth)});