import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import { pemaImagery, basemapToggle } from './basemaps.js';

// webmap object
export const webmap = new Map({
    basemap: pemaImagery
});

// view for webmap
export const mapView = new MapView({
    container: 'webmap',
    map: webmap,
    center: [-76.362, 40.501],
    zoom: 8
});

// allow for dockable popups
mapView.popup = {
    dockEnabled: true,
    dockOptions: {
        buttonEnabled: true,
        breakpoint: true
    }
};

basemapToggle.view = mapView;