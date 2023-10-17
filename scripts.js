function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

//var map = L.map('map').setView([-25, -51], 7);    //set view bacia tietê e iguaçu
var map = L.map('map').setView([-25.425, -49.220], 16);

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

/*
//Leitura de arquivo geojson como camada
var teste_geojson = {
    "type": "FeatureCollection",
    "name": "teste_geojson",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::4674" }},
    "features": [{
        "type": "Feature",
        "properties": { "id": 1 },
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": [[[
                [ -49.222534382171652, -25.420567980712512 ],
                [ -49.222297101021034, -25.420505474229078 ],
                [ -49.221457718950695, -25.422557455852761 ],
                [ -49.221398398663041, -25.42231814909016 ],
                [ -49.221256029972658, -25.422093128865072 ],
                [ -49.221030612879574, -25.421850249420583 ],
                [ -49.2207972864148, -25.421685948342418 ],
                [ -49.220528367777419, -25.421571651808133 ],
                [ -49.220263403825889, -25.421514503500365 ],
                [ -49.21999843987436, -25.42148592933631 ],
                [ -49.219717657179459, -25.421510931730221 ],
                [ -49.219353826081822, -25.421607369486743 ],
                [ -49.219100726187818, -25.421746668332176 ],
                [ -49.218875309094734, -25.421935971633335 ],
                [ -49.218736895090203, -25.422089557112077 ],
                [ -49.218634073258265, -25.422300290357473 ],
                [ -49.215689809647579, -25.429476608974177 ],
                [ -49.215945875555967, -25.429458751302178 ],
                [ -49.216717533631211, -25.427613146631519 ],
                [ -49.216742250417752, -25.427779225422455 ],
                [ -49.216821838470374, -25.42795378648557 ],
                [ -49.216928614988142, -25.428132365316639 ],
                [ -49.217063074306829, -25.428282371330234 ],
                [ -49.21722126174059, -25.42841451933036 ],
                [ -49.217411086661087, -25.428535952500017 ],
                [ -49.217624639696652, -25.428614526838714 ],
                [ -49.217822373988838, -25.428678814895896 ],
                [ -49.218016153595173, -25.42871095891163 ],
                [ -49.21835230189189, -25.428707387354752 ],
                [ -49.218640993958488, -25.428653813988845 ],
                [ -49.218886184480802, -25.428560953431525 ],
                [ -49.219060190657913, -25.428460949674385 ],
                [ -49.219253970264255, -25.428303800745507 ],
                [ -49.219431931127232, -25.42808593484602 ],
                [ -49.219554526388386, -25.427900212784657 ],
                [ -49.222534382171652, -25.420567980712512 ]
            ]]]}
        }]
    }
    
L.geoJSON(teste_geojson).addTo(map)
*/


//Carregamento de arquivo geojson como camada 
$.getJSON('teste_geojson.geojson', function(data) {
    L.geoJSON(data).addTo(map);
});
