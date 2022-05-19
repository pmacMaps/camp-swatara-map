"use strict";

import 'bootstrap';
// Leaflet
import { map } from 'leaflet';
import 'leaflet-fullscreen';
// app modules
import './ui.js';
import { initZoom, homeCoords} from './constants.js';
import { zoomHomeControl, layerControlUI, scaleBarControl, locateControl} from './mapControls.js';
import { imageryWithLabels } from './basemaps.js';
import { hikingTrails } from './hikingTrails.js';
import { atTrail, usgsContours } from './overlays.js';
import { changeLayerControlLocation } from './functions.js';

/*** Map & Controls ***/
const webmap = map('map', {
   center: homeCoords,
   zoom: initZoom,
   zoomControl: false,
   fullscreenControl: {
      position: 'topright'
   }

});

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
usgsContours.addTo(webmap);

// change where layer widget is located
changeLayerControlLocation();