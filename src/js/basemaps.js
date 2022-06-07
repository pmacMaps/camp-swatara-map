/*** Basemaps for Webmap ***/
import Basemap from "@arcgis/core/Basemap";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import LocalBasemapsSource from "@arcgis/core/widgets/BasemapGallery/support/LocalBasemapsSource";
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
const esriOsmTerrain = new Basemap({
  title: 'Topographic',
  url: 'https://www.arcgis.com/sharing/rest/content/items/0d28c37f80f648238e32efce097450f1/resources/styles/root.json'
});

export const basemapGalleryWidget = new BasemapGallery({
  container: 'layerControlUI',
  source: new LocalBasemapsSource({
    basemaps: [
      pemaImagery,
      esriOsmTerrain
    ]
   })
});