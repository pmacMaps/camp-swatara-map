import { geoJson } from 'leaflet';
import { reduceNumberDecimals, setPopupMaxWidth } from './functions.js';
import { windowWidth } from './constants.js';

// hiking trails data file
const data = require('./data/hikingTrails.geojson');

// Hiking Trails
export const hikingTrails = geoJson(data, {
    style: function(feature) {
        const lineWeight = 5;
        let lineColor;

        // custom color for each trail
        switch(feature.properties.Name) {
            case 'Boundary Trail':
                lineColor = 'rgb(255,170,170)';
                break;
            case "Cat's Eye Trail":
                lineColor = 'rgb(255,85,0)';
                break;
            case 'Cathedral Trail':
                lineColor = 'rgb(0,92,230)';
                break;
            case 'Charcoal Trail':
                lineColor = 'rgb(230,0,0)';
                break;
            case 'Creek Trail':
                lineColor = 'rgb(197,0,255)';
                break;
            case 'Frog Pond Trail':
                lineColor = 'rgb(200,20,43)';
                break;
            case 'Grapevine Trail':
                lineColor = 'rgb(169,0,230)';
                break;
            case 'Ground Hog Trail':
                lineColor = 'rgb(242,242,61)';
                break;
            case 'Hemlock Trail':
                lineColor = 'rgb(56,168,0)';
                break;
            case 'Mountain Side Trail':
                lineColor = 'rgb(0,255,197)';
                break;
            case 'Nature Trail':
                lineColor = 'rgb(255,255,0)';
                break;
            case 'Pool Trail':
                lineColor = 'rgb(255,255,115)';
                break;
            case 'Power Line Trail':
                lineColor = 'rgb(76,230,0)';
                break;
            case 'Rock Pile Trail':
                lineColor = 'rgb(0,92,230)';
                break;
            case 'Tree House Trail':
                lineColor = 'rgb(230,115,0)';
                break;
            default:
                lineColor = '#fff';
        }
        return {
            color: lineColor,
            weight: lineWeight
        }
     }
});

// Add popup to Hiking Trails
hikingTrails.bindPopup(function(evt) {
    const trailLength = reduceNumberDecimals(evt.feature.properties.Miles);

    let popupContent = '<div class="feat-popup">';
    popupContent += '<h3>{Name}</h3><hr />';
    popupContent += '<ul>';
    popupContent += '<li>Blaze: {Blaze}</li>';
    popupContent += `<li>Length: ${trailLength}-miles</li>`;
    popupContent += '</ul>';
    popupContent += '</div>';

    return L.Util.template(popupContent, evt.feature.properties);
}, {closeOnClick: true, maxWidth: setPopupMaxWidth(windowWidth)});
