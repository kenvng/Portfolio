// turn off light function
function turnOffLight() {
  $(".buld").css("background-color", "black");
}

// turn on stop function 
function turnOnStopLight(){
 document.getElementById("stopLight").style.backgroundColor = "red";
}

// turn on slow function
function turnOnSlowLight(){
 document.getElementById("slowLight").style.backgroundColor = "yellow";
}

// turn on go function
function turnOnGoLight(){
 document.getElementById("goLight").style.backgroundColor = "green";
}

// set stop light click event
document.getElementById("stopButton").onclick = turnOnStopLight;


// set slow light click event
document.getElementById("slowButton").onclick = turnOnSlowLight;

// set go light click event
document.getElementById("goButton").onclick = turnOnGoLight;





//http://codepen.io/kenvng/pen/oxLLaW