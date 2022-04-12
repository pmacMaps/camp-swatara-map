"use strict";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// Leaflet
import { map } from 'leaflet';
import 'leaflet/dist/leaflet.css';
// app modules
import './ui.js';
import { initZoom, homeCoords} from './constants.js';
import { zoomHomeControl, layerControlUI, scaleBarControl, locateControl} from './mapControls.js';
import { imageryWithLabels } from './basemaps.js';
import { hikingTrails } from './hikingTrails.js';
import { atTrail, esriContours } from './overlays.js';
import { changeLayerControlLocation } from './functions.js';
// custom styles
import './css/style.css';

/*** Map & Controls ***/
const webmap = map('map', {
   center: homeCoords,
   zoom: initZoom,
   zoomControl: false
});

// create pane for contours
webmap.createPane('contours');

// add map controls
zoomHomeControl.addTo(webmap);
layerControlUI.addTo(webmap);
scaleBarControl.addTo(webmap);
locateControl.addTo(webmap);

// basemap
imageryWithLabels.addTo(webmap);

// overlays
atTrail.addTo(webmap);
hikingTrails.addTo(webmap);
esriContours.addTo(webmap);

// change where layer widget is located
changeLayerControlLocation();