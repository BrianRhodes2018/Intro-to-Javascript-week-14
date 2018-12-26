
// from data.js
var tableData = data;

var tbody = d3.select("tbody");

 tableData.forEach(function(ufoReport) {
   console.log(ufoReport);
   var row = tbody.append("tr");
   Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key, value);
     var cell = row.append("td");
     cell.text(value);
   });
 });

var submit = d3.select("#filter-btn");

submit.on("click", function() {   
     
     
    d3.event.preventDefault();
     
     
     var inputElement = d3.select("#datetime");
     
     
     var inputValue = inputElement.property("value");
     
     console.log(inputValue);
     console.log(tableData);
   
   
    
   var filteredData = tableData.filter(date => date.datetime === inputValue);
    
   console.log(filteredData);
    
   var tbody = d3.select("tbody");
    
    filteredData.forEach(function(fData) {
          console.log(fData);
          var row = tbody.append("tr");
          Object.entries(fData).forEach(function([key, value]) {
          console.log(key, value);
           var cell = row.append("td");
           cell.text(value);
         });
    });
   });

