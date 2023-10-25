function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

//var map = L.map('map').setView([-25, -51], 7);    //set view bacia tietê e iguaçu
var map = L.map('map').setView([-25.8, -51.5], 8);

/*
//Carragamento de mapa OSM de fundo
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);
*/


//Carregamento de imagem Google Maps de fundo
var fundo_satelite = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 22,
    attribution: 'Imagem de satélite © <a href="https://www.google.com/maps">Google Maps</a>'
}).addTo(map);
fundo_satelite.addTo(map);


var wfsLayer = L.Geoserver.wfs('http://localhost:8080/geoserver/wfs', {
    layers: 'teste:__view_teste_iguacu',
    style: {
        color: '#000000',
        fillColor: 'orange',
        fillOpacity: '0.5',
        weight: '1',
    },
    attribution: 'ANA',
});
wfsLayer.addTo(map);