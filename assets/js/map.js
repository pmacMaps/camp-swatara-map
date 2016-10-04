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
var homeCoords = [40.503582, -76.355793];
var initZoom = setInitialMapZoom(windowWidth);
var zoomHomeControl;
// Layers
var hikingTrails;
var imageryBasemap;

/*********************
*** Map & Controls ***
**********************/

// Map
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

// Layers