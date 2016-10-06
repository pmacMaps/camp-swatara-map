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
var mapboxKey = 'pk.eyJ1IjoicG1ja2lubmV5IiwiYSI6ImNpa3NpNTlyNDBlcG51cm0xcG9kd3Z2ZGoifQ.9mtNv6FNVl8c1bd7Kqud_Q';

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
// Mapbox Hike Bike
mapboxOutdoors = L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://mapbox.com/about/maps/">MapBox</a>',
	subdomains: 'abcd',
	id: 'mapbox.outdoors',
	accessToken: mapboxKey
}).addTo(map);

// Mapbox Hike Bike
mapboxHikeBike = L.tileLayer('http://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://mapbox.com/about/maps/">MapBox</a>',
	subdomains: 'abcd',
	id: 'mapbox.run-hike-bike',
	accessToken: mapboxKey
});

// USDA NAIP Imagery
naip = L.tileLayer.wms('//gis.apfo.usda.gov/arcgis/services/NAIP/Pennsylvania_2015_1m/ImageServer/WMSServer', {
    layers: '0',
    format: 'image/png24',
    version: '1.3.0',
    detectRetina: true,
    attribution: 'USDA'
});

// Hiking Trails
hikingTrails = new L.GeoJSON.AJAX('assets/geodata/hikingTrails.geojson', {
    style: function(feature) {
        var lineWeight = 3;
        var dashArrayType = '5, 5';
        var lineColor;
         
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
// add in conditional that if device is a touch device the tool-tip does not happen
hikingTrails.bindTooltip(function(evt) {
   return L.Util.template('<span class="feat-tooltip">{Name}</span>', evt.feature.properties); 
}, {opacity: 1, interactive: true});

// Basemap Selector Code