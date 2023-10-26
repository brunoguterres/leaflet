function onEachFeature(feature, layer) {
    layer.on('click', function (e) {
        var cobaciaValue = feature.properties.cobacia;
        
        var popupContent = "Cobacia: " + cobaciaValue;
        
        L.popup()
            .setLatLng(e.latlng)
            .setContent(popupContent)
            .openOn(map);
    });
}

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var google_satelite = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 22,
    attribution: 'Imagem de satélite © <a href="https://www.google.com/maps">Google Maps</a>'
});

var ottobacias = L.Geoserver.wfs('http://localhost:8080/geoserver/wfs', {
    layers: 'teste:__view_teste_iguacu',
    className: 'camada_ottobacias',
    attribution: 'ANA',
    onEachFeature: onEachFeature
});

var map = L.map('map', {
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
