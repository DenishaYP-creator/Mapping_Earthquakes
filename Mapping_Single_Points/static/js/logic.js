/* The logic.js file, which will contain all the JavaScript and 
Leaflet code to create the map and add data to the map. 
add boilerplate code to the logic.js file.this code can be reused
for many of the maps we'll create later on in this module*/

 // Add console.log to check to see if our code is working.
console.log("working");

//+++++Add a Map Object++++++
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
//Add a Marker to the Map
var marker = L.marker([51.5, -0.09]).addTo(map);
let marker = L.marker([34.0522, -118.2437]).addTo(map);


//++++++++++Add a Tile Layer for Our Map++++++++++++
/*. The tile layer is used to load and display a tile layer on the map. 
We have two options to create a tile layer.*/
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
