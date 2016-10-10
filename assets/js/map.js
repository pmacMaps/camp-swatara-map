"use strict";

/*** Variables ***/
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
// Esri
var esriImagery;
var esriImageryLabels;
var esriTransportationLabels;
// Mapbox
var mapboxHikeBike;
var mapboxOutdoors;
var mapboxStreetsSatellite;
var mapboxKey = 'pk.eyJ1IjoicG1ja2lubmV5IiwiYSI6ImNpa3NpNTlyNDBlcG51cm0xcG9kd3Z2ZGoifQ.9mtNv6FNVl8c1bd7Kqud_Q';

/*** Map & Controls ***/
map = L.map('map', {
   center: homeCoords,
   zoom: initZoom,
   zoomControl: false   
});

// Zoom Home Control
zoomHomeControl = L.Control.zoomHome({
    position: 'topleft',
    zoomHomeTitle: 'Full map extent',
    homeCoordinates: homeCoords,
    homeZoom: initZoom
}).addTo(map);

/*** Layers ***/
// Mapbox Hike Bike
mapboxOutdoors = L.tileLayer('//api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://mapbox.com/about/maps/">MapBox</a>',
	subdomains: 'abcd',
	id: 'mapbox.outdoors',
	accessToken: mapboxKey
}).addTo(map);

// Mapbox Hike Bike
mapboxHikeBike = L.tileLayer('//api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://mapbox.com/about/maps/">MapBox</a>',
	subdomains: 'abcd',
	id: 'mapbox.run-bike-hike',
	accessToken: mapboxKey
});

// Mapbox Streets Satellite
mapboxStreetsSatellite = L.tileLayer('//api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://mapbox.com/about/maps/">MapBox</a>',
	subdomains: 'abcd',
	id: 'mapbox.streets-satellite',
	accessToken: mapboxKey
});

// Hiking Trails
hikingTrails = new L.GeoJSON.AJAX('assets/geodata/hikingTrails.geojson', {
    style: function(feature) {
        var lineWeight = 5;
        var dashArrayType = '5, 8';
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
            weight: lineWeight            
        }   
     }
}).addTo(map);

// Add popup to Hiking Trails
hikingTrails.bindPopup(function(evt) {
    var trailLength = reduceDecimalsTrailLength(evt.feature.properties.Miles);
    
    var popupContent = '<div class="feat-popup">';
    popupContent += '<h3>{Name}</h3><hr />';
    popupContent += '<p>The trail has a <strong>{Blaze}</strong> blaze and is <strong>' + trailLength +'-miles</strong> long.</p>';
    popupContent += '</div>';
    
    return L.Util.template(popupContent, evt.feature.properties);    
});

// Add tooltip to Hiking Trails
// add in conditional that if device is a touch device the tool-tip does not happen
hikingTrails.bindTooltip(function(evt) {
   return L.Util.template('<span class="feat-tooltip">{Name}</span>', evt.feature.properties); 
}, {opacity: 1, interactive: true});

// Basemap Selector Code
function setBasemap(selectedBasemap) {
    var basemap;
    
    // set basemap
    if (selectedBasemap === 'Outdoors') {
        if (!map.hasLayer(mapboxOutdoors)) {
            if (map.hasLayer(mapboxHikeBike)) {
                map.removeLayer(mapboxHikeBike);
            } else if (map.hasLayer(mapboxStreetsSatellite)) {
                map.removeLayer(mapboxStreetsSatellite);
            } else if (map.hasLayer(usgsImagery)) {
                map.removeLayer(usgsImagery);
            }
            
            basemap = mapboxOutdoors;    
        }        
    } else if (selectedBasemap === 'HikeBike') {
        if (!map.hasLayer(mapboxHikeBike)) {
            if (map.hasLayer(mapboxOutdoors)) {
                map.removeLayer(mapboxOutdoors);
            } else if (map.hasLayer(mapboxStreetsSatellite)) {
                map.removeLayer(mapboxStreetsSatellite);
            } else if (map.hasLayer(usgsImagery)) {
                map.removeLayer(usgsImagery);
            }
        }
        
        basemap = mapboxHikeBike;
    } else if (selectedBasemap === 'MapboxImagery') {
        if (!map.hasLayer(mapboxStreetsSatellite)) {
            if (map.hasLayer(mapboxOutdoors)) {
                map.removeLayer(mapboxOutdoors);
            } else if (map.hasLayer(mapboxHikeBike)) {
                map.removeLayer(mapboxHikeBike);
            } else if (map.hasLayer(usgsImagery)) {
                map.removeLayer(usgsImagery);
            }
        }
        
      basemap = mapboxStreetsSatellite;
    }
    
    // add basemap to map
    map.addLayer(basemap);
}