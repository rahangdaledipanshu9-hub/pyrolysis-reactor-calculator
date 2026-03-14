function calculate(){

let feed = parseFloat(document.getElementById("feedstock").value);
let catalyst = parseFloat(document.getElementById("catalyst").value);
let temp = parseFloat(document.getElementById("temperature").value);

let oil_percent = 60 + (0.8*catalyst) + (0.02*(temp-350));
let gas_percent = 25 - (0.3*catalyst);
let char_percent = 100 - oil_percent - gas_percent;

let oil = feed * oil_percent/100;
let gas = feed * gas_percent/100;
let char = feed * char_percent/100;

document.getElementById("result").innerHTML = 
"Oil Yield = " + oil.toFixed(2) + " kg<br>" +
"Gas Yield = " + gas.toFixed(2) + " kg<br>" +
"Biochar Yield = " + char.toFixed(2) + " kg";

}
