import Home from "@arcgis/core/widgets/Home";
import Locate from "@arcgis/core/widgets/Locate";
import Legend from "@arcgis/core/widgets/Legend";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import Fullscreen from "@arcgis/core/widgets/Fullscreen";
import { mapView } from './webmap.js';

export const homeWidget = new Home({
    label: 'Default Extent',
    view: mapView
});

export const locateWidget = new Locate({
    scale: 10,
    label: 'Find My Location',
    view: mapView
});

export const mapLegend = new Legend({
    label: 'Map Legend',
    container: 'mapLegendContainer',
    basemapLegendVisible: true,
    view: mapView
});

export const scalebar = new ScaleBar({
    view: mapView
});

export const fullscreenWidget = new Fullscreen({
    view: mapView
});