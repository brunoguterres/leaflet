var map = L.map('map').setView([-25, -51], 7);

/*
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);
*/

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
osm.addTo(map);

var wmsLayer_ottobacias_tiete = L.Geoserver.wms('http://localhost:8080/geoserver/wms', {
    layers: 'cite:ottobacias_tiete_bho_2017_5k',
    //CQL_FILTER: "cobacia like '8666%'",
    attribution: 'ANA'
});
wmsLayer_ottobacias_tiete.addTo(map);

var wfsLayer = L.Geoserver.wfs("http://localhost:8080/geoserver/wfs", {
  layers: "teste:Ottobacias_Iguacu_BHO_2017_5k",
});
wfsLayer.addTo(map);
