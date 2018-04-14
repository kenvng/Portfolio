// turn off light function
function clearLight(){
	document.getElementById("slowLight").style.backgroundColor = "black";
	document.getElementById("goLight").style.backgroundColor = "black";
	document.getElementById("stopLight").style.backgroundColor = "black";
}

// turn on stop function 
function turnOnStopLight(){
	clearLight(); // clearLight()function is called to clear the previous light
 	document.getElementById("stopLight").style.backgroundColor = "red"; // new light activated
}

// turn on slow function
function turnOnSlowLight(){
	clearLight();
 	document.getElementById("slowLight").style.backgroundColor = "yellow";
}

// turn on go function
function turnOnGoLight(){
	clearLight();
 	document.getElementById("goLight").style.backgroundColor = "green";
}


// set stop light click event
document.getElementById("stopButton").onclick = turnOnStopLight;


// set slow light click event
document.getElementById("slowButton").onclick = turnOnSlowLight;


// set go light click event
document.getElementById("goButton").onclick = turnOnGoLight;


//http://codepen.io/kenvng/pen/oxLLaW


