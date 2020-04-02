
 /*
 
 <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin=""/>

    <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
    crossorigin=""></script>

    <script type="text/javascript" src="https://unpkg.com/default-passive-events"></script>
    
  
    <style>
        body { margin:0; padding:0; }
        #map {width:776; height:480; position: absolute; left: 100px; top: 200px; width: 776px; height: 480px;}
      
           
    
        
    </style>
</head>
<body>

<div id='map'></div>

*/
    
    
    var accessToken = 'pk.eyJ1IjoianVsaWV0LWdlb3JnZSIsImEiOiJjazhnOXNzN3gwMXoyM2RxbjNzbXdrYXJjIn0.a653svYKdCmg2wkjY5HxVg';
    var map = L.map('map').setView([0,0], 5);

// Add tiles from the Mapbox Static Tiles API
// (https://docs.mapbox.com/api/maps/#static-tiles)
// Tiles are 512x512 pixels and are offset by 1 zoom level
L.tileLayer(
    'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + accessToken, {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

var marker1 = L.marker([39.0119, -98.4842]).addTo(map); // US
var popup1;

var marker2 = L.marker([41.9028, 12.4964]).addTo(map); // Italy
var popup2;

var marker3 = L.marker([40.4637, -3.7492]).addTo(map); // Spain
var popup3;

var marker4 = L.marker([35.8617, 104.1954]).addTo(map); //China

var popup4;

var marker5 = L.marker([51.1657, 10.4515]).addTo(map); // Germany

var popup5;

var marker6 = L.marker([46.2276, 2.2137]).addTo(map); // France

var popup6;

var marker7 = L.marker([32.4279, 53.6880]).addTo(map); // Iran
var popup7;

var marker8 = L.marker([55.3781, -3.4360]).addTo(map); // United Kingdom
 
var popup8;

var marker9 = L.marker([46.8182, 8.2275]).addTo(map); // Switzerland

var popup9;

var marker10 = L.marker([50.5039, 4.4699]).addTo(map); // Belgium
 
var popup10;


var circle = L.circle([37.786542, -122.386022], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 50.0
}).addTo(map);   



L.circle([44.50, -89.50], {radius: 200}).addTo(map); //Wisconsin, the USA


L.circle([39.00, -80.50], {radius: 200}).addTo(map); //West Virginia, the US


L.circle([44.0, -72.69], {radius: 200}).addTo(map); //Vermont, the USA



L.circle([31.00, -100.00], {radius: 200}).addTo(map); //Texas, the USA


L.circle([44.50, -100], {radius: 200}).addTo(map); //South Dakota, the US

L.circle([41.70, -71.50], {radius: 200}).addTo(map); //Rhode Island, the US

L.circle([44.00, -120.50], {radius: 200}).addTo(map); //Oregon, the US

L.circle([43.00, -75.00], {radius: 200}).addTo(map); //New York, the US

L.circle([44.00, -71.50], {radius: 200}).addTo(map);

L.circle([41.50, -100.00], {radius: 200}).addTo(map);

L.circle([38.50, -98.00], {radius: 200}).addTo(map);

L.circle([33.00, -90.00], {radius: 200}).addTo(map);

L.circle([40.00, -89.00], {radius: 200}).addTo(map);

L.circle([39.00, -75.50], {radius: 200}).addTo(map);

L.circle([41.59, -72.69], {radius: 200}).addTo(map);

L.circle([34.79, -92.19], {radius: 200}).addTo(map);

L.circle([40.27, -86.12], {radius: 200}).addTo(map);

L.circle([38.57, -92.60], {radius: 200}).addTo(map);

L.circle([27.99, -81.76], {radius: 200}).addTo(map);

L.circle([39.87, -117.22], {radius: 200}).addTo(map);

L.circle([45.36, -68.97], {radius: 200}).addTo(map);

L.circle([44.18, -84.50], {radius: 200}).addTo(map);

L.circle([33.24, -83.44], {radius: 200}).addTo(map);

L.circle([19.74, -155.84], {radius: 200}).addTo(map);

L.circle([66.16, -153.36], {radius: 200}).addTo(map);

L.circle([35.86, -86.66], {radius: 200}).addTo(map);

L.circle([37.92, -78.02], {radius: 200}).addTo(map);

L.circle([39.83, -74.87], {radius: 200}).addTo(map);

L.circle([37.83, -84.27], {radius: 200}).addTo(map);

L.circle([47.65, -100.43], {radius: 200}).addTo(map);

L.circle([46.39, -94.63], {radius: 200}).addTo(map);


L.circle([36.08, -96.92], {radius: 200}).addTo(map);

L.circle([46.96, -109.53], {radius: 200}).addTo(map);

L.circle([47.75, -120.74], {radius: 200}).addTo(map);

L.circle([39.41, -111.95], {radius: 200}).addTo(map);

L.circle([39.11, -105.35], {radius: 200}).addTo(map);

L.circle([40.36, -82.99], {radius: 200}).addTo(map);

L.circle([32.31, -86.90], {radius: 200}).addTo(map);

L.circle([42.03, -93.58], {radius: 200}).addTo(map);

L.circle([34.30, -106.01], {radius: 200}).addTo(map);

L.circle([33.83, -81.16], {radius: 200}).addTo(map);

L.circle([41.20, -77.19], {radius: 200}).addTo(map);

L.circle([34.04, -111.09], {radius: 200}).addTo(map);

L.circle([39.04, -76.64], {radius: 200}).addTo(map);

L.circle([42.40, -71.38], {radius: 200}).addTo(map);

L.circle([36.77, -119.41], {radius: 200}).addTo(map);

L.circle([44.06, -114.74], {radius: 200}).addTo(map);

L.circle([43.07, -107.29], {radius: 200}).addTo(map);

L.circle([35.78, -80.79], {radius: 200}).addTo(map);

L.circle([30.39, -92.32], {radius: 200}).addTo(map);






