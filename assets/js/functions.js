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