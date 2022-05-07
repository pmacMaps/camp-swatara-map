import 'leaflet.zoomhome/src/js/leaflet.zoomhome.js';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.js';
import 'leaflet-betterscale/L.Control.BetterScale.js';
import { homeCoords, initZoom} from './constants.js';
import { basemapLayers } from './basemaps.js';

// zoom and full extent control
export const zoomHomeControl = L.Control.zoomHome({
    position: 'topleft',
    zoomHomeTitle: 'Full map extent',
    homeCoordinates: homeCoords,
    homeZoom: initZoom,
    maxZoom: 17
});

// Layer Control
export const layerControlUI = L.control.layers(basemapLayers, null, {
    collapsed: false
});

// scale bar control
export const scaleBarControl = L.control.betterscale({
    maxWidth: 200,
    metric: false,
    imperial: true,
    updateWhenIdle: true,
    position: 'bottomleft'
});

// locate control
export const locateControl = L.control.locate();