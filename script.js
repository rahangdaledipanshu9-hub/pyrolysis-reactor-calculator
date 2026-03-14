let chart;

function calculateYield(){

let feed = parseFloat(document.getElementById("feedstock").value);
let catalyst = parseFloat(document.getElementById("catalyst").value);
let temp = parseFloat(document.getElementById("temperature").value);
let time = parseFloat(document.getElementById("time").value);

if(isNaN(feed) || isNaN(catalyst) || isNaN(temp) || isNaN(time)){

alert("Enter all values");
return;

}

/* Final yield calculation */

let oilPercent = 55 + (0.6*catalyst) + (0.03*(temp-350)) + (0.1*time);
let gasPercent = 25 - (0.2*catalyst) + (0.02*time);
let charPercent = 100 - oilPercent - gasPercent;

let oil = (feed * oilPercent / 100).toFixed(2);
let gas = (feed * gasPercent / 100).toFixed(2);
let char = (feed * charPercent / 100).toFixed(2);

/* Display results */

document.getElementById("oil").innerText = oil + " kg";
document.getElementById("gas").innerText = gas + " kg";
document.getElementById("char").innerText = char + " kg";

/* Conversion */

let conversion = ((feed - char) / feed * 100).toFixed(2);
document.getElementById("conversion").innerText = conversion + " %";

/* Carbon footprint */

let carbon = (feed * 0.6).toFixed(2);
document.getElementById("carbon").innerText = carbon + " kg CO₂ avoided";

/* Profit */

let oilPrice = 35;
let revenue = oil * oilPrice;
let operatingCost = feed * 10;
let profit = (revenue - operatingCost).toFixed(2);

document.getElementById("profit").innerText = "₹ " + profit;


/* Time simulation */

let timeSteps = [];
let oilData = [];
let gasData = [];
let charData = [];

for(let t=0; t<=time; t+=5){

let oilP = 55 + (0.6*catalyst) + (0.03*(temp-350)) + (0.1*t);
let gasP = 25 - (0.2*catalyst) + (0.02*t);
let charP = 100 - oilP - gasP;

timeSteps.push(t);

oilData.push((feed * oilP /100).toFixed(2));
gasData.push((feed * gasP /100).toFixed(2));
charData.push((feed * charP /100).toFixed(2));

}

let ctx = document.getElementById("timeChart").getContext("2d");

if(chart){

chart.destroy();

}

chart = new Chart(ctx,{

type:'line',

data:{

labels:timeSteps,

datasets:[

{
label:'Oil Yield',
data:oilData,
borderColor:'#27ae60',
fill:false
},

{
label:'Gas Yield',
data:gasData,
borderColor:'#e67e22',
fill:false
},

{
label:'Biochar',
data:charData,
borderColor:'#7f8c8d',
fill:false
}

]

},

options:{

responsive:true,
plugins:{
title:{
display:true,
text:'Reactor Yield vs Reaction Time'
}
}

}

});

}
