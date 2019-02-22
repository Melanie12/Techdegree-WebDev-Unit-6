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
function addPhraseToDisplay(arr) {
  for(let i = 0; i < arr.length; i += 1){// loop
    let letter = arr[i];
    letter = document.createElement('li'); //create list
    letter.textContent = arr[i];    //put the character inside of the list item
    if(letter.textContent !== " "){    // if the character in the array is a letter and not a space, the function should add the class “letter” to the list item
      letter.className = "letter";
    }
    else {
      letter.className = "space";
    }
    ul.appendChild(letter); //append the list items to the list  #phrase ul
  }
}

//create a check letter function (to use again in the addEventListener)
 function checkLetter(button){
   let classLetter=document.getElementsByClassName("letter");
   for(let i = 0; i < classLetter.length; i ++) {
     console.log(i);
   }
 }




//Add an event listener to the keyboard
//qwerty.addEventListener('click', (event) => {}
