!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire594f;e.register("DFfoO",(function(n,i){var t,l,a,r;t=n.exports,l="previewWebStyleSymbol",a=function(){return f},Object.defineProperty(t,l,{get:a,set:r,enumerable:!0,configurable:!0});var o=e("9pNSx"),u=e("iXlXu"),d=e("cBxZc");function f(e,n,i){var t=e.thumbnail&&e.thumbnail.url;return t?(0,o.default)(t,{responseType:"image"}).then((function(e){var n=function(e,n){var i=!/\\.svg$/i.test(e.src)&&n&&n.disableUpsampling,t=Math.max(e.width,e.height),l=n&&null!=n.maxSize?(0,u.pt2px)(n.maxSize):d.SymbolSizeDefaults.maxSize;i&&(l=Math.min(t,l));var a="number"==typeof(null==n?void 0:n.size)?null==n?void 0:n.size:null,r=Math.min(l,null!=a?(0,u.pt2px)(a):t);if(r!==t){var o=0!==e.width&&0!==e.height?e.width/e.height:1;o>=1?(e.width=r,e.height=r/o):(e.width=r*o,e.height=r)}return e}(e.data,i);return i&&i.node?(i.node.appendChild(n),i.node):n})):e.fetchSymbol().then((function(e){return n(e,i)}))}}))}();
//# sourceMappingURL=previewWebStyleSymbol.2557f95b.js.map