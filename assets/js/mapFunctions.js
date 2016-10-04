"use strict";
// Set the initial map zoom level based upon viewport width
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
function setPopupMaxWidth(windowWidth) {
    var maxWidth;
    if (windowWidth < 450) {
        maxWidth = 240;
    } else {
        maxWidth = 300;
    }
    return maxWidth;
}

// Determines if basemap selector is expanded or collapsed
function selectLayerControlCollapsed(windowWidth) {
    var isCollapsed;
    if (windowWidth < 768) {
        isCollapsed = true;
    } else {
        isCollapsed = false;
    }
    return isCollapsed;
}


/**********************
*** Event Listeners ***
***********************/

$(document).ready(function() {
    // Attach search control for desktop or mobile
    function attachSearch() {
        var parentName = $(".geocoder-control").parent().attr("id");
        var geocoder = $(".geocoder-control");
        $("#geocode").append(geocoder);
    }   
    
    attachSearch();    
});