var map = L.map('map').setView([-22.015, -48.925], 7);

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);

var wmsLayer = L.Geoserver.wms('http://localhost:8080/geoserver/wms', {
    layers: 'cite:ottobacias_tiete_bho_2017_5k',
    CQL_FILTER: "cobacia LIKE '8666%'",
    attribution: ''
});
wmsLayer.addTo(map);

var wmsLayer1 = L.Geoserver.wms("http://localhost:8080/geoserver/wms", {
    layers: 'nurc:Img_Sample',
    attribution: ''
});
wmsLayer1.addTo(map);