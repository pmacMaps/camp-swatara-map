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