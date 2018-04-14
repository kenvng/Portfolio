 document.getElementById('grayButton').onclick = switchGray;
$('#grayButton').click(function(){
	switchGray();
})

 document.getElementById('whiteButton').onclick = switchWhite;
$('#whiteButton').click(function(){
	switchWhite();
})

 document.getElementById('blueButton').onclick = switchBlue;
$('#blueButton').click(function(){
  switchBlue();
})

 document.getElementById('redButton').onclick = switchRed;
$('#redButton').click(function(){
  switchRed();
})

 document.getElementById('greenButton').onclick = switchGreen;
$('#greenButton').click(function(){
  switchGreen();
})

 document.getElementById('yellowButton').onclick = switchYellow;
$('#yellowButton').click(function(){
  switchYellow();
})

 document.getElementById('purpleButton').onclick = switchPurple;
$('#purpleButton').click(function(){
  switchPurple();
})

 document.getElementById('blackButton').onclick = switchBlack;
$('#blackButton').click(function(){
  switchBlack();
})

// GRAY //
function switchGray() {
   document.body.style.backgroundColor = 'gray';
	$("body.main").css("background-color", "gray");

   document.body.style.color = 'white';
  $("body").css("color", "white");

}
// WHITE //
function switchWhite() {
   document.body.style.backgroundColor = 'white';
	$("body").css("background-color", "white");

   document.body.style.color = 'black';
  $("body").css("color", "black");
}

// BLUE //
function switchBlue() {
   document.body.style.backgroundColor = 'blue';
  $("body").css("background-color", "blue");

   document.body.style.color = 'black';
  $("body").css("color", "black");
}

// RED //
function switchRed() {
   document.body.style.backgroundColor = 'red';
  $("body").css("background-color", "red");

   document.body.style.color = 'black';
  $("body").css("color", "black");
}

// GREEN //
function switchGreen() {
   document.body.style.backgroundColor = 'green';
  $("body").css("background-color", "green");

   document.body.style.color = 'black';
  $("body").css("color", "black");
}

// YELLOW //
function switchYellow() {
   document.body.style.backgroundColor = 'yellow';
  $("body").css("background-color", "yellow");

   document.body.style.color = 'black';
  $("body").css("color", "black");
}

// PURPLE //
function switchPurple() {
   document.body.style.backgroundColor = 'purple';
  $("body").css("background-color", "purple");

   document.body.style.color = 'black';
  $("body").css("color", "black");
}

// BLACK //
function switchBlack() {
   document.body.style.backgroundColor = 'black';
  $("body").css("background-color", "black");

   document.body.style.color = 'white';
  $("body").css("color", "white");
}