"use strict";

import 'bootstrap';
import './ui.js';
import esriConfig from "@arcgis/core/config";
import { mapView, webmap } from './webmap.js';
// app modules
import * as mapWidgets from './mapControls.js';
import * as mapOverlays from './overlays.js';
//import { hikingTrails } from './hikingTrails.js';
//import { atTrail, usgsContours } from './overlays.js';
//import { changeLayerControlLocation } from './functions.js';

// api key
esriConfig.apiKey = 'AAPK56c13fae1a6d4407a5d392981b9b50d2kwxUZMYHbCl1MyifP-JufC7lrC9K2TvvL93oR25h20j0cjvoAro30x-p0O27jPwS';

mapView.when(function() {
   webmap.addMany([mapOverlays.atTrail ,mapOverlays.usgsContours]);
   mapView.ui.add(mapWidgets.homeWidget, "top-left");
   mapView.ui.add(mapWidgets.locateWidget, "top-left");
   mapView.ui.add(mapWidgets.scalebar, "bottom-left");
   mapView.ui.add(mapWidgets.fullscreenWidget, "top-right");
}, function(error) {
   console.warn(error);
});