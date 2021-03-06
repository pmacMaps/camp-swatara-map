"use strict";

// viewport
const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// Map & Controls
const homeCoords = [40.501449, -76.362061];
const initZoom = setInitialMapZoom(windowWidth);


/*** Functions ***/
// Reduce number of decimals for trail length in pop-up
function reduceDecimalsTrailLength(data) {
    const trailLengthReducedDecimals = data.toFixed(2);
    return trailLengthReducedDecimals;
}

// Set the initial map zoom level based upon viewport width
// needs fine-tuned
function setInitialMapZoom(windowWidth) {
    let mapZoom;
    if (windowWidth < 500) {
        mapZoom = 14;
    } else {
        mapZoom = 15;
    }
    return mapZoom;
}

// Set max width of pop-up window
// Needs updated and tied to pop-ups
function setPopupMaxWidth(windowWidth) {
    let maxWidth;
    if (windowWidth < 450) {
        maxWidth = 240;
    } else {
        maxWidth = 300;
    }
        return maxWidth;
}

// Add event listener to change event for basemaps select element
// Run function to change basemap
// enhancement
/*
$("#basemapsSelector").on("change", function(e) {
    setBasemap($(this).val());
});
*/

/*** Map & Controls ***/
const map = L.map('map', {
   center: homeCoords,
   zoom: initZoom,
   zoomControl: false
});

// Zoom Home Control
const zoomHomeControl = L.Control.zoomHome({
    position: 'topleft',
    zoomHomeTitle: 'Full map extent',
    homeCoordinates: homeCoords,
    homeZoom: initZoom
}).addTo(map);

/*** Basemaps ***/
// Esri
// Esri Imagery
const esriImagery = L.esri.basemapLayer('Imagery');

// Esri Imagery Labels
const esriImageryLabels = L.esri.basemapLayer('ImageryLabels');

// Esri Transportation Labels
const esriTransportationLabels = L.esri.basemapLayer('ImageryTransportation');

// Esri Basemap
const esriBasemap = L.layerGroup([esriImagery, esriImageryLabels, esriTransportationLabels]);

const basemap = esriBasemap.addTo(map);
/*** Overlays ***/
// Hiking Trails
// consider switchin to Esri-hosted feature service
const hikingTrails = new L.GeoJSON.AJAX('assets/geodata/hikingTrails.geojson', {
    style: function(feature) {
        const lineWeight = 5;
        const dashArrayType = '5, 8';
        let lineColor;

        // custom color for each trail
        switch(feature.properties.Name) {
            case 'Boundary Trail':
                lineColor = 'rgb(78,78,78)';
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
                lineColor = 'rgb(230,115,0)';
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
                lineColor = 'rgb(255,170,255)';
                break;
            default:
                lineColor = '#fff';
        }

        return {
            color: lineColor,
            weight: lineWeight
        }
     }
}).addTo(map);

// Add popup to Hiking Trails
hikingTrails.bindPopup(function(evt) {
    const trailLength = reduceDecimalsTrailLength(evt.feature.properties.Miles);

    let popupContent = '<div class="feat-popup">';
    popupContent += '<h3>{Name}</h3><hr />';
    popupContent += '<p>The trail has a <strong>{Blaze}</strong> blaze and is <strong>' + trailLength +'-miles</strong> long.</p>';
    popupContent += '</div>';

    return L.Util.template(popupContent, evt.feature.properties);
}, {closeOnClick: true, maxWidth: setPopupMaxWidth(windowWidth)});