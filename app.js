let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
var missed=0;
let startButton = document.querySelector("a.btn__reset");
let listItem = document.querySelector('#phrase ul');
let phraseUl = phrase.querySelector('ul');
let hearts=document.querySelectorAll('.tries');
let title= document.querySelector('#overlay .title');


//array of phrases
var phrases = [
  "i love chocolate",
  "be my valentine",
  "i want to break free",
  "call me maybe",
  "this is my last song"
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
    else {listItem.className="space";}
  }
};
addPhraseToDisplay(phraseArray);


//check if a letter is in the phrase
function checkLetter(event) {
    let phraseLetter = document.querySelectorAll('.letter');
    let result = null;

    for (let i = 0; i < phraseLetter.length; i++) {
        if (phraseLetter[i].textContent == event.textContent) {
            phraseLetter[i].classList.add("show");
            result = event;
        }
    }
    return result;
}



// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', function(event) {
    let target_tagName = 'BUTTON';
    let get_tagName = event.target.tagName;
    if (target_tagName == get_tagName) {
        event.target.className = "chosen";
        event.target.disabled = true;
        let letterFound = checkLetter(event.target);
        if (letterFound === null) {
            missed++;
            let lost_heart = document.querySelector('.tries');
            lost_heart.remove();
        }
        checkWin();
    }
});

//check if you won
function checkWin() {
  function set_flex(e){
	e.style.display = 'flex';
};

function reset_game(event){
	event.addEventListener('click', function() {
	    window.location.reload(true);
	});
};
    if (missed === hearts.length) {
    		console.log(hearts.length);
        overlay.className = "lose";
        title.textContent = "Oh no!! ... You Lost!";
        startButton.textContent = "Try Again!";
        set_flex(overlay);
        reset_game(startButton);
    }
    let letters = document.querySelectorAll('.letter');
    let shows 	= document.querySelectorAll('.show');
    if (shows.length == letters.length) {
        overlay.className = "win";
        title.textContent = "Hey! You Won!!!";
        startButton.textContent = "Play Again!"
        set_flex(overlay);
        reset_game(button_startGame);
    }
}
