"use strict";

import 'bootstrap';
import './ui.js';
import esriConfig from "@arcgis/core/config";
import { mapView, webmap } from './webmap.js';
import * as mapWidgets from './mapControls.js';
import * as mapOverlays from './overlays.js';
import { trails } from './hikingTrails.js';
import { esriKey } from './apiKey.js'

// api key
esriConfig.apiKey = esriKey;

mapView.when(function() {
   webmap.addMany([mapOverlays.usgsContours, mapOverlays.atTrail, trails]);
   mapView.ui.add(mapWidgets.homeWidget, "top-left");
   mapView.ui.add(mapWidgets.locateWidget, "top-left");
   mapView.ui.add(mapWidgets.scalebar, "bottom-left");
   mapView.ui.add(mapWidgets.fullscreenWidget, "top-right");
}, function(error) {
   console.warn(error);
});