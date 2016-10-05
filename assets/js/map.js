"use strict";

/****************
*** Variables ***
****************/

// viewport
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var windowArea = windowWidth * windowHeight;
// Map & Controls
var map;
var homeCoords = [40.50181, -76.35811];
var initZoom = 15; //setInitialMapZoom(windowWidth);
var zoomHomeControl;
// Layers
var hikingTrails;
// Basemaps
var naip;
var mapboxHikeBike;
var mapboxOutdoors;
var mapboxKey;

/*********************
*** Map & Controls ***
**********************/

// Map
map = L.map('map', {
   center: homeCoords,
   zoom: initZoom,
   zoomControl: false,
   maxZoom: 17
});

// Zoom Home Control
zoomHomeControl = L.Control.zoomHome({
    position: 'topleft',
    zoomHomeTitle: 'Full map extent',
    homeCoordinates: homeCoords,
    homeZoom: initZoom
}).addTo(map);

// Layers
// USDA NAIP Imagery
naip = L.tileLayer.wms('//gis.apfo.usda.gov/arcgis/services/NAIP/Pennsylvania_2015_1m/ImageServer/WMSServer', {
    layers: '0',
    format: 'image/png24',
    version: '1.3.0',
    detectRetina: true,
    attribution: 'USDA'
}).addTo(map);

// Hiking Trails
hikingTrails = new L.GeoJSON.AJAX('assets/geodata/hikingTrails.geojson', {
    style: function(geoJsonFeature) {
        var lineWeight = 3;
        var dashArrayType = '5, 5';
        var lineColor;
        
        // switch statement for color
        
        return {
            color: '#f00',
            weight: lineWeight,
            dashArray: dashArrayType
        }
    }
}).addTo(map);

// Add popup to Hiking Trails
hikingTrails.bindPopup(function(evt) {
    var trailLength = reduceDecimalsTrailLength(evt.feature.properties.Miles);
    
    var popupContent = '<div class="feat-popup">';
    popupContent += '<h3>{Name}</h3><hr />';
    popupContent += '<p>The trail has a <strong>{Blaze}</strong> blaze and is <strong>' + trailLength +'</strong>-miles long.</p>';
    popupContent += '</div>';
    
    return L.Util.template(popupContent, evt.feature.properties);    
});

// Add tooltip to Hiking Trails

// Basemap Selector Code