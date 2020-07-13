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

    marker1 = L.marker([39.0119, -98.4842], { icon: orangeIcon }).addTo(map).on('click', countryClick); // US
        marker1.key = "US";
    marker2 = L.marker([41.9028, 12.4964], { icon: orangeIcon }).addTo(map).on('click', countryClick); // Italy
        marker2.key = "Italy";
    marker3 = L.marker([52.1326, 5.2913], { icon: orangeIcon }).addTo(map).on('click', countryClick); // Netherland
        marker3.key = "Netherland";
    marker4 = L.marker([35.8617, 104.1954], { icon: orangeIcon }).addTo(map).on('click', countryClick); //China
        marker4.key = "China";
    marker5 = L.marker([51.1657, 10.4515], { icon: orangeIcon }).addTo(map).on('click', countryClick); // Germany
        marker5.key = "Germany";
    marker6 = L.marker([46.2276, 2.2137], { icon: orangeIcon }).addTo(map).on('click', countryClick); // France
        marker6.key = "France";
    marker7 = L.marker([56.1304, -106.3468], { icon: orangeIcon }).addTo(map).on('click', countryClick); // Canada
        marker7.key = "Canada";
    marker8 = L.marker([55.3781, -3.4360], { icon: orangeIcon }).addTo(map).on('click', countryClick); // United Kingdom
        marker8.key = "United-Kingdom";
    marker9 = L.marker([46.8182, 8.2275], { icon: orangeIcon }).addTo(map).on('click', countryClick); // Switzerland
        marker9.key = "Switzerland";
    marker10 = L.marker([50.5039, 4.4699], { icon: orangeIcon }).addTo(map).on('click', countryClick); // Belgium
        marker10.key = "Belgium";
    marker11 = L.marker([-25.2744, 133.7751], { icon: orangeIcon }).addTo(map).on('click', countryClick); // Australia
        marker11.key = "Australia"
    marker12 = L.marker([-13.8267, -47.9218], { icon: orangeIcon }).addTo(map).on('click', countryClick); // Brazil
        marker12.key = "Brazil"
    marker13 = L.marker([40.4637, -3.7492], { icon: orangeIcon }).addTo(map).on('click', countryClick); // Spain
        marker13.key = "Spain"
    marker14 = L.marker([55.7558, 37.6173], { icon: orangeIcon }).addTo(map).on('click', countryClick); // Russia
        marker14.key = "Russia"
}
