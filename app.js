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
  let randomPhrase=arr[random].split('');
//  let randomPhraseSplit = randomPhrase.split('');
//  return randomPhraseSplit;
return randomPhrase;
}

const phraseArray = getRandomPhraseAsArray(phrases);

//function to set the game addPhraseToDisplay
const addPhraseToDisplay =arr => {
  for (let i=0; i<arr.length;i++){
    const listItem=document.createElement("li");
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
  let checkLetter = document.getElementsByClassName("letter");
  let matchFound=null;
  for(let i=0; i<checkLetter.length; i++) {
    if(button.innerText.toUpperCase()===checkLetter[i].innerText.toUpperCase()){
      //  if(button.textContent===checkLetter[i].textContent){
      checkLetter[i].classList.add('show');
      matchFound=button.innerText;
    }
  }
return matchFound;
};

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener("click", e => {
 const buttonChoosen = e.target;
 if (buttonChoosen.tagName === "BUTTON") {
    buttonChoosen.classList.add('chosen');
    buttonChoosen.setAttribute("disabled", "");
      } else {
   return null;
 }
});
