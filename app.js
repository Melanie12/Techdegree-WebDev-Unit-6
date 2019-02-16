var qwerty = document.getElementById("qwerty");
var phrase = document.getElementById("phrase");
var missed=0;
let startButton = document.querySelector("a.btn__reset");
let listItem = document.querySelector('#phrase ul');
const ul = phrase.querySelector('ul');


//hide overlay
  startButton.addEventListener('click',()=>{
  overlay.style.display = "none";
  const phraseArray = getRandomPhraseAsArray(phrases);
  addPhraseToDisplay(phraseArray);
});

//array of phrases
var phrases = [
"I love chocolate",
"Be my valentine",
"I want to break free",
"Call me maybe",
"This is my last song"
];

//function to choose a random phrase
function getRandomPhraseAsArray(arr){
    var phraseIndex = Math.floor(Math.random() * phrases.length); //choose a number between 1 and 5
    var randomPhrase = arr[phraseIndex].toLowerCase(); //apply that number to  phraseIndex and make it lowercase
    var phraseLetters = randomPhrase.split(""); //JS method to split characters
    return phraseLetters;
  };


//Set the game display
function addPhraseToDisplay(arr){
    for (i=0; i< phraseLetters.length;i++) {
    const li = document.createElement('li'); //create a new element li
    ul.appendChild('li');
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray);
