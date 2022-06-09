/*** Basemaps for Webmap ***/
import Basemap from "@arcgis/core/Basemap";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
import TileLayer from "@arcgis/core/layers/TileLayer";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";

// PEMA orthoimagery
export const pemaImagery = new Basemap({
    baseLayers: [
      new TileLayer({
        title: 'Imagery',
        url: 'https://imagery.pasda.psu.edu/arcgis/rest/services/pasda/PEMAImagery2018_2020/MapServer'
      }),
      new VectorTileLayer({
        title: 'Labels',
        url: 'https://www.arcgis.com/sharing/rest/content/items/30d6b8271e1849cd9c3042060001f425/resources/styles/root.json'
      })
    ],
    title: 'PEMA Imagery'
  });

// Esri Open Street Map Terrain
const esriTopo = new Basemap({
  title: 'Topographic',
  baseLayers: [
    new TileLayer({
      url: 'https://basemaps.arcgis.com/arcgis/rest/services/OpenStreetMap_v2/VectorTileServer'
    })
  ]
});

export const basemapToggle = new BasemapToggle({
  container: 'layerControlUI',
  label: 'Change Basemap',
  nextBasemap: "osm-streets-relief",
  visibleElements: {
    title: true
  }
});