function calculateYield(){

let feedstock = parseFloat(document.getElementById("feedstock").value);
let catalyst = parseFloat(document.getElementById("catalyst").value);
let temperature = parseFloat(document.getElementById("temperature").value);

if(isNaN(feedstock) || isNaN(catalyst) || isNaN(temperature)){

alert("Please enter all values");

return;

}

/* Yield model */

let oil_percent = 60 + (0.5 * catalyst) + (0.02 * (temperature - 350));

let gas_percent = 25 - (0.2 * catalyst);

let char_percent = 100 - oil_percent - gas_percent;

/* Convert to kg */

let oil = (feedstock * oil_percent / 100).toFixed(2);

let gas = (feedstock * gas_percent / 100).toFixed(2);

let char = (feedstock * char_percent / 100).toFixed(2);

/* Display */

document.getElementById("oil").innerText = oil + " kg";

document.getElementById("gas").innerText = gas + " kg";

document.getElementById("char").innerText = char + " kg";

}
