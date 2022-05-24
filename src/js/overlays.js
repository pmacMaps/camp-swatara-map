import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";

export const atTrail = new FeatureLayer({
    title: 'Appalachian Trail',
    copyright: 'Appalachian Trail Conservancy',
    outFields: ['LENGTH_MI', 'TRAIL_CLUB'],
    url: 'https://mapservices.pasda.psu.edu/server/rest/services/pasda/AppalachianTrail/MapServer/0',
    renderer: {
        type: 'simple',
        symbol: {
            type: 'simple-line',
            color: '#9c4040',
            width: "5px",
            style: 'solid'
        }
    },
    popupTemplate: {
        title: 'Appalachian Trail',
        expressionInfos: [
            {
                name: 'trail-length',
                expression: 'Round($feature.LENGTH_MI, 2)',
                title: 'Section Length (miles)'
            }
        ],
        content: [{
            type: 'fields',
            fieldInfos: [
                {
                    fieldName: 'TRAIL_CLUB',
                    label: 'Trail Club'
                },
                {
                    fieldName: 'expression/trail-length'
                }
            ]
        }]
    }
});

// USGS elevation contours
export const usgsContours = new MapImageLayer({
    title: 'Elevation Contours',
    copyright: 'USGS',
    url: 'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer'
});