// store URL in variable
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

function init(){ 

    // fetch the json data and console log it
    d3.json(url).then(function(alldata){

        // Use D3 to select the dropdown menu
        let dropdownMenu = d3.select("#selDataset");

        // getting all names from json
        let names = alldata.names;

        // getting dropdown 
        names.forEach(function(id){
            dropdownMenu.append("option").text(id).property("value");
        });
       
        // pass first subject and call the functions
        chartvalues(names[0]);
        metadata(names[0]);
    });
};
// function when the subject id changes
function optionChanged(passedvalue) {

    chartvalues(passedvalue);
    metadata(passedvalue);
};
// function to 
function chartvalues(passedvalue){

    // json data
    d3.json(url).then(function(alldata){

        // retrieve all samples data
        let samples = alldata.samples;

        // filter for each option/subject selected
        let id = samples.filter(take=>take.id == passedvalue);

        // get data for all charts
        let sample_values = id[0].sample_values; 
        let otu_ids = id[0].otu_ids; 
        let otu_labels = id[0].otu_labels; 

        // call function
        charts(sample_values, otu_ids, otu_labels);

    });
};
// function that displays the bar and bubble charts
function charts(sample_values, otu_ids, otu_labels){

    // json data
    d3.json(url).then(function(alldata){
                
        // data for bar chart
        let bar_data = [{
            type: 'bar',
            x: sample_values.slice(0,10).reverse(),
            y: otu_ids.slice(0,10).map(id => `OTU ${id}`).reverse(),
            text: otu_labels,
            orientation: 'h'
        }];

        // data for bubble chart
        let bubble_data = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker:{
                color: otu_ids,
                colorscale: 'Earth',
                size: sample_values
            }
        }];
    
        // layout for bar chart
        let bar_layout = {
            title: 'Ratings',
            height: 500,
            width: 600            
        };    

        // layout for bubble chart
        let bubble_layout = {
            title: 'Buildings Rating v Size',
            height: 550,
            width: 1000 
        };

        // display bar chart
        Plotly.newPlot('bar', bar_data, bar_layout);

        // display bubble chart
        Plotly.newPlot('bubble', bubble_data, bubble_layout);

    });
};
function metadata(passedvalue){

    // json data
    d3.json(url).then(function(alldata){

        // retrieve all samples data
        let samples = alldata.metadata;

        // filter data from metadata
        let id = samples.filter(take=>take.id == passedvalue);


        // using array method to iterate through the values
        Object.entries(id[0]).forEach(([key, value]) => {
            
            // display information in demographic info chart/table
            (d3.select('#sample-metadata').html('')).append("h5").text(`${key}: ${value}`);
        });
    });
};
init();

// Create a map object.
let myMap = L.map("map", {
    center: [-28.27, 133.77],
    zoom: 5
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // City markers
  let cities = [{
    location: [-21.1434, 149.1868], 
    name: "Mackay", 
    population: 80148
  },
  {
    location: [-19.2590, 146.8169], 
    name: "Townsville", 
    population: 178860
  },
  {
    location: [-32.9283, 151.7817], 
    name: "Newcastle", 
    population: 322278
  },
  {
    location: [-27.4705, 153.0260], 
    name: "Brisbane", 
    population: 2280000
  }
  ];
  // Add code to create a marker for each of the following cities and to add it to the map.
  
  for (let i = 0; i < cities.length; i++) {
    let city = cities [i];
    L.marker(city.location)
      .bindPopup(`<h4>${city.name}</h4> <hr> <h6>Population ${city.population.toLocaleString()}</h6>`)
      .addTo(myMap);
  };
  