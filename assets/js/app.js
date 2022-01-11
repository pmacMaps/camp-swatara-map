"use strict";

import { initZoom, homeCoords} from './constants.js';
import { zoomHomeControl, layerControlUI, scaleBarControl} from './mapControls.js';
import { pemaImagery } from './basemaps.js';
import { hikingTrails } from './hikingTrails.js';

/*** Map & Controls ***/
const map = L.map('map', {
   center: homeCoords,
   zoom: initZoom,
   zoomControl: false
});

// add map controls
zoomHomeControl.addTo(map);
layerControlUI.addTo(map);
scaleBarControl.addTo(map);

// basemap
pemaImagery.addTo(map);

// overlays
hikingTrails.addTo(map);
