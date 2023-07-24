import { setInitialMapZoom } from './functions.js';

// viewport
export const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// Map & Controls
export const homeCoords = [40.501449, -76.362061];
export const initZoom = setInitialMapZoom(windowWidth);
