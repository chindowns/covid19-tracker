function loadStateMarkers() {
    // MARKERS placed on the states to pull up the US Totals
    const redIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [15, 25],
        iconAnchor: [10, 41],
        popupAnchor: [1, -34],
        shadowSize: [25, 25]
      });
    const redCircle = new L.circle({
        color: 'red',
        weight: 0,
        fillColor:'red',
        fillOpacity: 0.5,
        radius: 100000
    });
    const wisconsin = L.marker([44.00, -89.50], {icon: redIcon}).addTo(map).on('click', onClick);
          wisconsin.key = "WI";
    const westVirginia = L.marker([38.00, -80.75], {icon: redIcon}).addTo(map).on('click', onClick);
          westVirginia.key = "WV";
    const vermont = L.marker([43.75, -72.75], {icon: redIcon}).addTo(map).on('click', onClick);
          vermont.key = "VT";
    const texas = L.marker([31.25, -99.00], {icon: redIcon}).addTo(map).on('click', onClick);
          texas.key = "TX";
    const southdakota = L.marker([43.50, -100], {icon: redIcon}).addTo(map).on('click', onClick);
          southdakota.key = "SD";
    const rhodeIsland = L.marker([41.50, -71.25], {icon: redIcon}).addTo(map).on('click', onClick);
          rhodeIsland.key = "RI";
    const oregon = L.marker([43.50, -120.50], {icon: redIcon}).addTo(map).on('click', onClick);
          oregon.key = "OR";
    const newyork = L.marker([42.50, -75.20], {icon: redIcon}).addTo(map).on('click', onClick);
          newyork.key = "NY";
    const newHampshire = L.marker([43.50, -71.50], {icon: redIcon}).addTo(map).on('click', onClick);
          newHampshire.key = "NH";
    const nebraska = L.marker([41.50, -100.00], {icon: redIcon}).addTo(map).on('click', onClick);
          nebraska.key = "NE";
    const kansas = L.marker([38.25, -98.50], {icon: redIcon}).addTo(map).on('click', onClick);
          kansas.key = "KS";
    const mississippi = L.marker([32.00, -90.00], {icon: redIcon}).addTo(map).on('click', onClick);
          mississippi.key = "MS";
    const illinois = L.marker([40.00, -89.00], {icon: redIcon}).addTo(map).on('click', onClick);
          illinois.key = "IL";
    const delaware = L.marker([38.50, -75.50], {icon: redIcon}).addTo(map).on('click', onClick);
          delaware.key = "DE";
    const connecticut = L.marker([41.40, -72.69], {icon: redIcon}).addTo(map).on('click', onClick);
          connecticut.key = "CT";
    const arkansas = L.marker([34.50, -92.19], {icon: redIcon}).addTo(map).on('click', onClick);
          arkansas.key = "AR";
    const indiana = L.marker([39.25, -86.12], {icon: redIcon}).addTo(map).on('click', onClick);
          indiana.key = "IN";
    const missouri = L.marker([37.57, -92.60], {icon: redIcon}).addTo(map).on('click', onClick);
          missouri.key = "MO";
    const florida = L.marker([27.99, -81.76], {icon: redIcon}).addTo(map).on('click', onClick);
          florida.key = "FL";
    const nevada = L.marker([39.25, -117.00], {icon: redIcon}).addTo(map).on('click', onClick);
          nevada.key = "NV";
    const maine = L.marker([45.00, -68.97], {icon: redIcon}).addTo(map).on('click', onClick);
          maine.key = "ME";
    const michigan = L.marker([42.78, -84.50], {icon: redIcon}).addTo(map).on('click', onClick);
          michigan.key = "MI";
    const georgia = L.marker([32.00, -83.44], {icon: redIcon}).addTo(map).on('click', onClick);
          georgia.key = "GA";
    const hawaii = L.marker([19.74, -155.84], {icon: redIcon}).addTo(map).on('click', onClick);
          hawaii.key = "HI";
    const alaska = L.marker([66.16, -153.36], {icon: redIcon}).addTo(map).on('click', onClick);
          alaska.key = "AK";
    const tennessee = L.marker([35.00, -86.66], {icon: redIcon}).addTo(map).on('click', onClick);
          tennessee.key = "TN";
    const virgina = L.marker([37.25, -78.25], {icon: redIcon}).addTo(map).on('click', onClick);
          virgina.key = "VA";
    const newjersey = L.marker([39.50, -74.30], {icon: redIcon}).addTo(map).on('click', onClick);
          newjersey.key = "NJ";
    const kentucky = L.marker([36.83, -85.00], {icon: redIcon}).addTo(map).on('click', onClick);
          kentucky.key = "KY";
    const northdakota = L.marker([46.05, -100.43], {icon: redIcon}).addTo(map).on('click', onClick);
          northdakota.key = "ND";
    const minnesota = L.marker([45.39, -94.63], {icon: redIcon}).addTo(map).on('click', onClick);
          minnesota.key = "MN";
    const oklahoma = L.marker([35.08, -96.92], {icon: redIcon}).addTo(map).on('click', onClick);
          oklahoma.key = "OK";
    const montana = L.marker([46.96, -109.53], {icon: redIcon}).addTo(map).on('click', onClick);
          montana.key = "MT";
    const washington = L.marker([47.00, -120.74], {icon: redIcon}).addTo(map).on('click', onClick);
          washington.key = "WA";
    const utah = L.marker([38.41, -111.30], {icon: redIcon}).addTo(map).on('click', onClick);
          utah.key = "UT";
    const colorado = L.marker([38.11, -105.35], {icon: redIcon}).addTo(map).on('click', onClick);
          colorado.key = "CO";
    const ohio = L.marker([38.75, -82.99], {icon: redIcon}).addTo(map).on('click', onClick);
          ohio.key = "OH";
    const alabama = L.marker([32.31, -86.90], {icon: redIcon}).addTo(map).on('click', onClick);
          alabama.key = "AL";
    const iowa = L.marker([41.03, -93.58], {icon: redIcon}).addTo(map).on('click', onClick);
          iowa.key = "IA";
    const newmexico = L.marker([34.00, -106.01], {icon: redIcon}).addTo(map).on('click', onClick);
          newmexico.key = "NM";
    const southcarolina = L.marker([33.00, -81.00], {icon: redIcon}).addTo(map).on('click', onClick);
          southcarolina.key = "SC";
    const pennsylvania = L.marker([40.20, -77.75], {icon: redIcon}).addTo(map).on('click', onClick);
          pennsylvania.key = "PA";
    const arizona = L.marker([34.04, -111.09], {icon: redIcon}).addTo(map).on('click', onClick);
          arizona.key = "AZ";
    const maryland = L.marker([39.04, -76.64], {icon: redIcon}).addTo(map).on('click', onClick);
          maryland.key = "MD";
    const massachusetts = L.marker([42.00, -72.00], {icon: redIcon}).addTo(map).on('click', onClick);
          massachusetts.key = "MA";
    const california = L.marker([36.00, -120.75], {icon: redIcon}).addTo(map).on('click', onClick);
          california.key = "CA";
    const idaho = L.marker([44.06, -114.74], {icon: redIcon}).addTo(map).on('click', onClick);
          idaho.key = "ID";
    const wyoming = L.marker([43.07, -107.29], {icon: redIcon}).addTo(map).on('click', onClick);
          wyoming.key = "WY";
    const northcarolina = L.marker([35.00, -80.00], {icon: redIcon}).addTo(map).on('click', onClick);
          northcarolina.key = "NC";
    const louisiana = L.marker([30.39, -92.32], {icon: redIcon}).addTo(map).on('click', onClick);
          louisiana.key = "LA";
}
