import { setPopupMaxWidth } from './functions.js';
import { windowWidth } from './constants.js';

// Appalachian Trail
export const atTrail = L.esri.featureLayer({
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
