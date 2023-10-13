function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}

//var map = L.map('map').setView([-25, -51], 7);    //set view bacia tietê e iguaçu
var map = L.map('map').setView([-25.425, -49.220], 16);


var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);

var wmsLayer_ottobacias_tiete = L.Geoserver.wms('http://localhost:8080/geoserver/wms', {
    layers: 'cite:ottobacias_tiete_bho_2017_5k',
    CQL_FILTER: "cobacia like '8666%'",
    attribution: 'ANA'
});
wmsLayer_ottobacias_tiete.addTo(map);


var states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

L.geoJSON(states, {
    style: function(feature) {
        switch (feature.properties.party) {
            case 'Republican': return {color: "#ff0000"};
            case 'Democrat':   return {color: "#0000ff"};
        }
    }
}).addTo(map);

/*
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

$.getJSON('teste_geojson.geojson', function(data) {
    L.geoJSON(data).addTo(map);
});


var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

//L.geoJSON(geojsonFeature).addTo(map)


var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.7
};

/*
L.geoJSON(geojsonFeature, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);
*/

/*
L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);
*/

var someFeatures = [{
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
}, {
    "type": "Feature",
    "properties": {
        "name": "Busch Field",
        "amenity": "Local desconhecido",
        "popupContent": "Não tenho informações sobre o que existe nesta localização!",
        "show_on_map": true
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.98404, 39.74621]
    }
}];

L.geoJSON(someFeatures, {
    filter: function(feature, layer) {
        return feature.properties.show_on_map;
    },
    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);