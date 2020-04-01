
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


