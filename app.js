var qwerty = document.getElementById("qwerty");
var phrase = document.getElementById("phrase");
var missed=0;


//hide overlay
btnReset.addEventListener('click', () => {
  overlay.style.display="none";
});

//array of phrases
var phrases = [
"I love chocolate",
"Be my valentine",
"I want to break free",
"Call me maybe",
"This is my last song"
];
