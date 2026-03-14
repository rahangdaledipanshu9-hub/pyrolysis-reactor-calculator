let timeChart;

function calculateYield(){

let feed = Number(document.getElementById("feedstock").value);
let catalyst = Number(document.getElementById("catalyst").value);
let temp = Number(document.getElementById("temperature").value);
let time = Number(document.getElementById("time").value);

if(!feed || !catalyst || !temp || !time){

alert("Please enter all input values");

return;

}

/* Yield model */

let oilPercent = 55 + (0.6*catalyst) + (0.03*(temp-350)) + (0.1*time);
let gasPercent = 25 - (0.2*catalyst) + (0.02*time);
let charPercent = 100 - oilPercent - gasPercent;

/* Mass calculations */

let oil = feed * oilPercent / 100;
let gas = feed * gasPercent / 100;
let char = feed * charPercent / 100;

/* Display results */

document.getElementById("oil").innerText = oil.toFixed(2) + " kg";
document.getElementById("gas").innerText = gas.toFixed(2) + " kg";
document.getElementById("char").innerText = char.toFixed(2) + " kg";

/* Conversion */

let conversion = ((feed - char) / feed) * 100;

document.getElementById("conversion").innerText = conversion.toFixed(2) + " %";

/* Carbon footprint */

let carbon = feed * 0.6;

document.getElementById("carbon").innerText = carbon.toFixed(2) + " kg CO₂ avoided";

/* Profit */

let oilPrice = 35;

let revenue = oil * oilPrice;

let cost = feed * 10;

let profit = revenue - cost;

document.getElementById("profit").innerText = "₹ " + profit.toFixed(2);


/* Yield vs Time Graph */

let timeSteps=[];
let oilData=[];
let gasData=[];
let charData=[];

for(let t=0;t<=time;t+=5){

let o = 55 + (0.6*catalyst) + (0.03*(temp-350)) + (0.1*t);
let g = 25 - (0.2*catalyst) + (0.02*t);
let c = 100 - o - g;

timeSteps.push(t);
oilData.push(feed*o/100);
gasData.push(feed*g/100);
charData.push(feed*c/100);

}

let ctx=document.getElementById("timeChart").getContext("2d");

if(timeChart){timeChart.destroy();}

timeChart=new Chart(ctx,{

type:'line',

data:{

labels:timeSteps,

datasets:[

{label:'Oil Yield',data:oilData,borderColor:'green'},
{label:'Gas Yield',data:gasData,borderColor:'orange'},
{label:'Biochar',data:charData,borderColor:'gray'}

]

}

});

}
