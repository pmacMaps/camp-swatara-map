/*** Functions ***/
// Reduce number of decimals of number to 2
export const reduceNumberDecimals = (data) => {
    return data.toFixed(2);
}

// Set the initial map zoom level based upon viewport width
export const setInitialMapZoom = (windowWidth) => {
    let mapZoom;
    if (windowWidth < 500) {
        mapZoom = 14;
    } else {
        mapZoom = 15;
    }
    return mapZoom;
}

// Set max width of pop-up window
export const setPopupMaxWidth = (windowWidth) => {
    let maxWidth;
    if (windowWidth < 450) {
        maxWidth = 240;
    } else {
        maxWidth = 300;
    }
    return maxWidth;
}

// place layer control widget in modal accessed from navigation
export const changeLayerControlLocation = () => {
    // DOM element parent for layer control
    const layerControlParent = document.querySelectorAll('div.leaflet-top.leaflet-right')[0]
    // DOM element of layer control widget
    const layerControlUI = document.querySelectorAll('div.leaflet-control-layers.leaflet-control')[0];
    // DOM element to place layer control within
    const newLayerControlParent = document.getElementById('layerControlUI');
    // remove node layer control from original parent
    const removedLayerControlUI = layerControlParent.removeChild(layerControlUI);
    // add layer control widget in new DOM element
    newLayerControlParent.appendChild(removedLayerControlUI);
}