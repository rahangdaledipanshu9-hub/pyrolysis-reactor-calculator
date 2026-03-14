window.onload=function(){

let tempRange=[];
let yieldData=[];

for(let t=350;t<=450;t+=10){

tempRange.push(t);

let yieldVal=60+(0.03*(t-350));

yieldData.push(yieldVal);

}

let ctx=document.getElementById("optChart").getContext("2d");

new Chart(ctx,{

type:'bar',

data:{

labels:tempRange,

datasets:[{

label:'Oil Yield (%) vs Temperature',

data:yieldData,

backgroundColor:'#3498db'

}]

}

});

}
