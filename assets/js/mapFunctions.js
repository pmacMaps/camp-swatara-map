'use strict';

// Reduce number of decimals for trail lenght in pop-up
function reduceDecimalsTrailLength(data) {
    var trailLengthReducedDecimals = data.toFixed(2); 
    return trailLengthReducedDecimals;
}

// Set the initial map zoom level based upon viewport width
// Needs updated
function setInitialMapZoom(windowWidth) {
    var mapZoom;    
    if (windowWidth < 500) {
        mapZoom = 6; 
    } else if (windowWidth >= 500 && windowWidth < 1000) {
        mapZoom = 7; 
    } else {
        mapZoom = 8;  
    }
    return mapZoom;
}

// Set max height of pop-up window 
// Needs updated and tied to pop-ups
function setPopupMaxHeight(windowArea) {
    var maxHeight;
    if (windowArea < 315000) {
        maxHeight = 150;
    } else {
        maxHeight = 300;
    }
    return maxHeight;
}

// Set max width of pop-up window 
// Needs updated and tied to pop-ups
function setPopupMaxWidth(windowWidth) {
    var maxWidth;
    if (windowWidth < 450) {
        maxWidth = 240;
    } else {
        maxWidth = 300;
    }
        return maxWidth;
}

// Add event listener to change event for basemaps select element
// Run function to change basemap
$("#basemapsSelector").on("change", function(e) {
    setBasemap($(this).val());
});