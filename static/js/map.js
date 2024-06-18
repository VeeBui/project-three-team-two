// Define the url for the data


// Create a map object.
let myMap = L.map("map", {
  center: [-37.8139, 144.96452],
  zoom: 16
  });
  
// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Loop through the buildings array, and create on marker for each object.
for (let i = 0; i < buildings.length; i++) {
  L.marker([buildings [i].B_Latitude, buildings [i].B_Longitude])
 // L.marker(buildings [i].B_Location)
    .bindPopup(`<h4>${buildings [i].B_StreetAddress}</h4> <hr> 

  <h7>Star Rating Out of 6 : ${buildings [i].CRT_Nabers_StarRating.toLocaleString()}</h6>
  <br/>
  <h7>Building NLA (m2): ${buildings [i].CRT_BuildingNla.toLocaleString()}</h6>
  <br/>
  <h7>Building Levels : ${buildings [i].CRT_NumberOfLevels.toLocaleString()}</h6>
  <br/>
  <h7>Rated Area (m2): ${buildings [i].CRT_Nabers_RatedArea.toLocaleString()}</h6>
  <br/>
  <h7>Rated Hours (Hrs): ${buildings [i].CRT_Nabers_RatedHours.toLocaleString()}</h6>
  <br/>
  <h7>Annual Emissions (C02): ${buildings [i].CRT_Nabers_AnnualEmissions.toLocaleString()}</h6>
  <br/>
  <h7>Annual Emission Intensity (kw/m2): ${buildings [i].CRT_Nabers_AnnualEmissionIntensity.toLocaleString()}</h6>
  <br/>
  <h7>Annual Consumption (kw): ${buildings [i].CRT_Nabers_AnnualConsumption.toLocaleString()}</h6>
  `)
  .addTo(myMap);
};
