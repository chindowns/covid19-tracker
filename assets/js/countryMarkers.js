function loadCountryMarkers() {
    // LOAD MAP MARKERS after Summary Data is received
    const orangeIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    
    marker1 = L.marker([39.0119, -98.4842], {icon: orangeIcon}).addTo(map).on('click', countryClick); // US
        marker1.key = "us";
    marker2 = L.marker([41.9028, 12.4964], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Italy
        marker2.key = "it";
    marker3 = L.marker([52.1326, 5.2913], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Netherland
        marker3.key = "nl";
    marker4 = L.marker([35.8617, 104.1954], {icon: orangeIcon}).addTo(map).on('click', countryClick); //China
        marker4.key = "cn";
    marker5 = L.marker([51.1657, 10.4515], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Germany
        marker5.key = "de";
    marker6 = L.marker([46.2276, 2.2137], {icon: orangeIcon}).addTo(map).on('click', countryClick); // France
        marker6.key = "fr";
    marker7 = L.marker([56.1304, -106.3468], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Canada
        marker7.key = "ca";
    marker8 = L.marker([55.3781, -3.4360], {icon: orangeIcon}).addTo(map).on('click', countryClick); // United Kingdom
        marker8.key = "gb";
    marker9 = L.marker([46.8182, 8.2275], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Switzerland
        marker9.key = "ch";
    marker10 = L.marker([50.5039, 4.4699], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Belgium
        marker10.key = "be";
    marker11 = L.marker([-25.2744, 133.7751], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Australia
        marker11.key = "au"
    marker12 = L.marker([-15.8267, -47.9218], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Brazil
        marker12.key = "br"
    marker13 = L.marker([40.4637, -3.7492], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Spain
        marker13.key = "es"
    marker14 = L.marker([55.7558, 37.6173], {icon: orangeIcon}).addTo(map).on('click', countryClick); // Russia
        marker14.key = "ru"
    }
    