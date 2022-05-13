import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
// hiking trails data file
const data = require('../data/hikingTrails.geojson');

// blob object for geojson file
const geojsonBlob = new Blob([JSON.stringify(data)], {
    type: "application/json"
});
// URL reference to geojson blob
const geojsonUrl = URL.createObjectURL(geojsonBlob);

export const hikingTrails = new GeoJSONLayer({
    copyright: 'Camp Swatara',
    url: geojsonUrl,
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
    }
});

// Hiking Trails
/*
export const hikingTrails = geoJson(data, {
    style: function(feature) {
        const lineWeight = 5;
        let lineColor;

        // custom color for each trail
        switch(feature.properties.Name) {
            case 'Boundary Trail':
                lineColor = 'rgb(255,170,170)';
                break;
            case "Cat's Eye Trail":
                lineColor = 'rgb(255,85,0)';
                break;
            case 'Cathedral Trail':
                lineColor = 'rgb(0,92,230)';
                break;
            case 'Charcoal Trail':
                lineColor = 'rgb(230,0,0)';
                break;
            case 'Creek Trail':
                lineColor = 'rgb(197,0,255)';
                break;
            case 'Frog Pond Trail':
                lineColor = 'rgb(200,20,43)';
                break;
            case 'Grapevine Trail':
                lineColor = 'rgb(169,0,230)';
                break;
            case 'Ground Hog Trail':
                lineColor = 'rgb(242,242,61)';
                break;
            case 'Hemlock Trail':
                lineColor = 'rgb(56,168,0)';
                break;
            case 'Mountain Side Trail':
                lineColor = 'rgb(0,255,197)';
                break;
            case 'Nature Trail':
                lineColor = 'rgb(255,255,0)';
                break;
            case 'Pool Trail':
                lineColor = 'rgb(255,255,115)';
                break;
            case 'Power Line Trail':
                lineColor = 'rgb(76,230,0)';
                break;
            case 'Rock Pile Trail':
                lineColor = 'rgb(0,92,230)';
                break;
            case 'Tree House Trail':
                lineColor = 'rgb(230,115,0)';
                break;
            default:
                lineColor = '#fff';
        }
        return {
            color: lineColor,
            weight: lineWeight
        }
     }
});
*/