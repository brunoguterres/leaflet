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

var baseGoogleStreets = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: 'Google Streets © <a href="https://www.google.com/maps">Google Maps</a>'
});

var baseGoogleSatelite = L.tileLayer('https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 22,
    attribution: 'Imagem de satélite © <a href="https://www.google.com/maps">Google Maps</a>'
});

var baseOpenStreetMap = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var ottobacias = L.Geoserver.wfs('http://localhost:8080/geoserver/wfs', {
    layers: 'teste:__view_teste_iguacu',
    className: 'camada_ottobacias',
    attribution: 'ANA',
    CQL_FILTER: "cobacia LIKE '8628%'",
    onEachFeature: onEachFeature
});

var ottobacias_montante = L.Geoserver.wfs('http://localhost:8080/geoserver/wfs', {
    layers: 'teste:__view_teste_iguacu',
    className: 'camada_ottobacias_montante',
    CQL_FILTER: "cobacia LIKE '86286%'"
});

var map = L.map('map', {
    center: [-15, -51.5],
    zoom: 4,
    layers: [baseGoogleStreets, ottobacias]
});

var baseMaps = {
    "Google Streets": baseGoogleStreets,
    "Google Satelite": baseGoogleSatelite,
    "OpenStreetMap": baseOpenStreetMap    
};

var overlayMaps = {
    "Ottobacias": ottobacias,
    "Ottobacias à Montante": ottobacias_montante
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
