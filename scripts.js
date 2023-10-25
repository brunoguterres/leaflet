function onEachFeature(feature, layer) {
    // Define um evento de clique para a camada
    layer.on('click', function (e) {
        // Obtém o valor do atributo "cobacia" da feição
        var cobaciaValue = feature.properties.cobacia;
        
        // Cria um popup com o valor do atributo "cobacia"
        var popupContent = "Cobacia: " + cobaciaValue;
        
        // Exibe o popup no local do clique
        L.popup()
            .setLatLng(e.latlng)
            .setContent(popupContent)
            .openOn(map);
    });

    // Outros comportamentos do popup se necessário
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

//Adicionar camada de mapa OSM como base
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

//Adicionar camada de imagem Google Maps como base
var google_satelite = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 22,
    attribution: 'Imagem de satélite © <a href="https://www.google.com/maps">Google Maps</a>'
});

var ottobacias = L.Geoserver.wfs('http://localhost:8080/geoserver/wfs', {
    layers: 'teste:__view_teste_iguacu',
    style: {
        color: '#000000',
        fillColor: 'orange',
        fillOpacity: '0.5',
        weight: '1',
    },
    attribution: 'ANA',
    onEachFeature: onEachFeature
});

var map = L.map('map', {
    //center: [-25.8, -51.5],
    center: [-15, -51.5],
    zoom: 4,
    layers: [osm, ottobacias]
});

var baseMaps = {
    "OpenStreetMap": osm,
    "Google Satelite": google_satelite
};

var overlayMaps = {
    "Ottobacias": ottobacias
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);


