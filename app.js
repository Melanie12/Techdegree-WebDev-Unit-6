const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
var missed=0;
const startButton = document.querySelector("a.btn__reset");
const listItem = document.querySelector('#phrase ul');
const phraseUl = phrase.querySelector('ul');


//array of phrases
var phrases = [
"I love chocolate",
"Be my valentine",
"I want to break free",
"Call me maybe",
"This is my last song"
];

//function to select a random phrase
startButton.addEventListener('click',() => {
  const overlay = document.getElementById("overlay");
  overlay.style.display='none';
});

//return a random phrase from array
const getRandomPhraseAsArray = arr => {
  let random= Math.floor(Math.random()*arr.length);
  let randomPhrase=arr[random];
  let randomPhraseSplit = randomPhrase.split("");
  return randomPhraseSplit;

}
const phraseArray = getRandomPhraseAsArray(phrases);

//function to set the game addPhraseToDisplay
const addPhraseToDisplay =arr => {
  for (let i=0; i<arr.length;i++){
    const listItem =document.createElement("li");
    listItem.innerText=arr[i];
    phraseUl.appendChild(listItem);
    if(listItem.innerText !==""){
      listItem.className="letter";
    }
  }
};
addPhraseToDisplay(phraseArray);


//check if a letter is in the phrase
const checkLetter=button => {
  let checkLetter= document.querySelectorAll(".letter");
  let matchFound=null;
  for(let i=0; i<checkLetter.length; i++) {
    if(button.innerText.toUpperCase()===checkletter[i].innerText.toUpperCase()){
      checkLetter[i].classList.add("show");
      return matchFound=true;
    }
  }
return matchFound;
};



// check if the game has been won or lost
//const checkWin = {} => {}

//listen for the start game button to be pressed
//startButton.addEventListener('click', ()=> {});

// listen for the onscreen jeyboard to be clicked
//qwerty.addEventListener('click', e=>{})
