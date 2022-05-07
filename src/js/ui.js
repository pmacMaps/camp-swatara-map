window.$ = require('jquery');

// Open About info window
$("#about-btn").click(function() {
    $('#aboutModal').modal('show');
});

// Open Select Basemap info  window
$("#basemap-btn").click(function() {
    $('#basemapModal').modal('show');
});

// Open Legend info window
$("#legend-btn").click(function() {
    $('#legendModal').modal('show');
});

// Open Discliamer info window
$("#disclaimer-btn").click(function() {
    $('#disclaimerModal').modal('show');
});