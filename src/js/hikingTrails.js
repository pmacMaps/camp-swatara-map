import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Color from "@arcgis/core/Color";

// symbology for hiking trails
const trailsRenderer = {
    type: "unique-value",
    field: "Name",
    defaultSymbol: {
        type: "simple-line",
        color: new Color('#fff'),
        width: "3px"
    },
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
            value: "Charcoal Trail",
            symbol: {
            type: "simple-line",
            color: new Color("rgb(230,0,0)"),
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

export const trails = new FeatureLayer({
    copyright: 'Camp Swatara',
    url: 'https://services3.arcgis.com/3SxkE9GPRaAzbnWT/ArcGIS/rest/services/Camp_Swatara_Hiking_Trails/FeatureServer/0',
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