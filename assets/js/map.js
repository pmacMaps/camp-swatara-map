"use strict";

/*** Variables ***/
// boolean if browser is on a mobile device or not
var isMobileDevice = L.Browser.mobile;
// viewport
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// Map & Controls
var map;
var homeCoords = [40.501449, -76.362061];
var initZoom = setInitialMapZoom(windowWidth);
var zoomHomeControl;
// Layers
var hikingTrails;
// Basemaps
// Esri
var esriImagery;
var esriImageryLabels;
var esriTransportationLabels;
var esriBasemap;
// Mapbox
var mapboxHikeBike;
var mapboxOutdoors;
var mapboxStreetsSatellite;
var mapboxKey = 'pk.eyJ1IjoicG1ja2lubmV5IiwiYSI6ImNpa3NpNTlyNDBlcG51cm0xcG9kd3Z2ZGoifQ.9mtNv6FNVl8c1bd7Kqud_Q';

/*** Functions ***/
// Reduce number of decimals for trail lenght in pop-up
function reduceDecimalsTrailLength(data) {
    var trailLengthReducedDecimals = data.toFixed(2); 
    return trailLengthReducedDecimals;
}

// Set the initial map zoom level based upon viewport width
// Needs updated
function setInitialMapZoom(windowWidth) {
    var mapZoom;    
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
    var maxWidth;
    if (windowWidth < 450) {
        maxWidth = 240;
    } else {
        maxWidth = 300;
    }
        return maxWidth;
}

// Add event listener to change event for basemaps select element
// Run function to change basemap
$("#basemapsSelector").on("change", function(e) {
    setBasemap($(this).val());
});

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
            } else if (map.hasLayer(esriBasemap)) {
                map.removeLayer(esriBasemap);
            }
            
            basemap = mapboxOutdoors;    
        }        
    } else if (selectedBasemap === 'HikeBike') {
        if (!map.hasLayer(mapboxHikeBike)) {
            if (map.hasLayer(mapboxOutdoors)) {
                map.removeLayer(mapboxOutdoors);
            } else if (map.hasLayer(mapboxStreetsSatellite)) {
                map.removeLayer(mapboxStreetsSatellite);
            } else if (map.hasLayer(esriBasemap)) {
                map.removeLayer(esriBasemap);
            }
        }
        
        basemap = mapboxHikeBike;
    } else if (selectedBasemap === 'MapboxImagery') {
        if (!map.hasLayer(mapboxStreetsSatellite)) {
            if (map.hasLayer(mapboxOutdoors)) {
                map.removeLayer(mapboxOutdoors);
            } else if (map.hasLayer(mapboxHikeBike)) {
                map.removeLayer(mapboxHikeBike);
            } else if (map.hasLayer(esriBasemap)) {
                map.removeLayer(esriBasemap);
            }
        }
        
      basemap = mapboxStreetsSatellite;
    } else if (selectedBasemap === 'EsriImagery') {
        if (!map.hasLayer(esriBasemap)) {
            if (map.hasLayer(mapboxOutdoors)) {
                map.removeLayer(mapboxOutdoors);
            } else if (map.hasLayer(mapboxHikeBike)) {
                map.removeLayer(mapboxHikeBike);
            } else if (map.hasLayer(mapboxStreetsSatellite)) {
                map.removeLayer(mapboxStreetsSatellite);
            }
        }
        
        basemap = esriBasemap;
    }
    
    // add basemap to map
    map.addLayer(basemap);
}

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

/*** Basemaps ***/
// Mapbox 
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

// Esri
// Esri Imagery
esriImagery = L.esri.basemapLayer('Imagery');

// Esri Imagery Labels
esriImageryLabels = L.esri.basemapLayer('ImageryLabels');

// Esri Transportation Labels
esriTransportationLabels = L.esri.basemapLayer('ImageryTransportation');

// Esri Basemap
esriBasemap = L.layerGroup([esriImagery, esriImageryLabels, esriTransportationLabels]);

/*** Overlays ***/
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

// Add tooltip to Hiking Trails
function bindTooltipHikingTrails() {
    hikingTrails.bindTooltip(function(evt) {
       return L.Util.template('<span class="feat-tooltip">{Name}</span>', evt.feature.properties); 
    }, {opacity: 1, interactive: true});
}

// Add popup to Hiking Trails
hikingTrails.bindPopup(function(evt) {
    if (!isMobileDevice) {
        evt.on('popupopen', function() {
            hikingTrails.unbindTooltip();
        });   
        
        evt.on('popupclose', bindTooltipHikingTrails);
    }   
        
    var trailLength = reduceDecimalsTrailLength(evt.feature.properties.Miles);
    
    var popupContent = '<div class="feat-popup">';
    popupContent += '<h3>{Name}</h3><hr />';
    popupContent += '<p>The trail has a <strong>{Blaze}</strong> blaze and is <strong>' + trailLength +'-miles</strong> long.</p>';
    popupContent += '</div>';
    
    return L.Util.template(popupContent, evt.feature.properties);    
}, {closeOnClick: true, maxWidth: setPopupMaxWidth(windowWidth)});

// Hiking Trails tooltip only added for non-mobile browsers
if (!isMobileDevice) {
    bindTooltipHikingTrails();
}