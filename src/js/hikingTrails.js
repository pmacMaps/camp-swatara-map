import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import Color from "@arcgis/core/Color";

// hiking trails data file
// TODO: define json or geojson transformer to load geojson file from local system
//const data = require('../data/hikingTrails.geojson');
// use GitHub hosted geojson data for time being
const data = 'https://raw.githubusercontent.com/pmacMaps/camp-swatara-map/main/src/data/hikingTrails.geojson';

// codeblock for creating geojson layer from local source file
// blob object for geojson file
/*
const geojsonBlob = new Blob([JSON.stringify(data)], {
    type: "application/json"
});
// URL reference to geojson blob
const geojsonUrl = URL.createObjectURL(geojsonBlob);
*/

const trailsRenderer = {
    type: "unique-value",
    field: "Name",
    defaultSymbol: { type: "simple-line" },
    uniqueValueInfos: [
        {
            value: "Boundary Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(255,170,170)"),
            width: "3px"
            }
        },
        {
            value: "Cat's Eye Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(255,85,0)"),
            width: "3px"
            }
        },
        {
            value: "Cathedral Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(0,92,230)"),
            width: "3px"
            }
        },
        {
            value: "Creek Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(197,0,255)"),
            width: "3px"
            }
        },
        {
            value: "Frog Pond Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(200,20,43)"),
            width: "3px"
            }
        },
        {
            value: "Grapevine Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(169,0,230)"),
            width: "3px"
            }
        },
        {
            value: "Ground Hog Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(242,242,61)"),
            width: "3px"
            }
        },
        {
            value: "Hemlock Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(56,168,0)"),
            width: "3px"
            }
        },
        {
            value: "Mountain Side Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(0,255,197)"),
            width: "3px"
            }
        },
        {
            value: "Nature Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(255,255,0)"),
            width: "3px"
            }
        },
        {
            value: "Pool Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(255,255,115)"),
            width: "3px"
            }
        },
        {
            value: "Power Line Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(76,230,0)"),
            width: "3px"
            }
        },
        {
            value: "Rock Pile Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(0,92,230)"),
            width: "3px"
            }
        },
        {
            value: "Tree House Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(230,115,0)"),
            width: "3px"
            }
        }
    ]
};

export const hikingTrails = new GeoJSONLayer({
    copyright: 'Camp Swatara',
    url: data,
    popupTemplate: {
        title: '{Name}',
        expressionInfos: [
            {
                name: 'trail-length',
                expression: 'Round($feature.Miles, 2)',
                title: 'Length (miles)'
            }
        ],
        content: [{
            type: 'fields',
            fieldInfos: [
                {
                    fieldName: 'Blaze',
                    label: 'Blaze Color'
                },
                {
                    fieldName: 'expression/trail-length'
                }
            ]
        }]
    },
    renderer: trailsRenderer
});