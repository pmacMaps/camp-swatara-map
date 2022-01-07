import { homeCoords, initZoom} from './constants.js';
import { basemapLayers } from './basemaps.js';

// Zoom Home Control
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
