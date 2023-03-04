const letters = "abcdefghijklmnopqrstuvwxyz";
const lettersArray = Array.from(letters) // Convert string letters to Array
const lettersContainer = document.querySelector(".row .letters");
const gameOverContainer = document.querySelector(".game-over");
const successGameOver = document.querySelector(".game-over .success");
const failGameOver = document.querySelector(".game-over .fail");
const playAgainBtn = document.querySelector("button");
// Genrate all letters and add them to lettersContainer
lettersArray.forEach(letter => {
    let span = document.createElement("span");
    span.className = "char-box";
    let char = document.createTextNode(letter);
    span.appendChild(char);
    lettersContainer.appendChild(span);
});

// Object Of Words + Categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

// Genrate Category and word
const allKeys = Object.keys(words);
let randomKeysIndex = Math.floor(Math.random() * allKeys.length);
let keyName = allKeys[randomKeysIndex];
let keyValue = words[keyName];
document.querySelector(".game-info .category span").innerHTML = keyName;
let randomValue = Math.floor(Math.random() * keyValue.length);
let value = keyValue[randomValue];

// Customize letter guess
let letterValue = Array.from(value);
let letterGuessContainer = document.querySelector(".letters-guess");
letterValue.forEach(char => {
    let span = document.createElement("span");
    if(char === ' ')
        span.className = 'space';
    letterGuessContainer.appendChild(span);
});

// Add actions
let guessBoxes = document.querySelectorAll(".letters-guess span");
let theDraw = document.querySelector(".the-draw");
let attemp = {
    wrong : 0,
    valid : 0
};

let isValid = {
    value : false
};

let failAudio = document.getElementById("fail");
let successAudio = document.getElementById("success");
lettersContainer.addEventListener("click",(e) => {
    
    if (e.target.className === "char-box" && (attemp.wrong < 7 || attemp.valid < value.length))
    {
        e.target.classList.add("clicked");
        let clickedLetter = e.target.innerHTML.toUpperCase();
        let curValue = value.toUpperCase();
        let idxList = [];
        isValid.value = false;
        failAudio.currentTime = 0;
        successAudio.currentTime = 0;
        findIndex(curValue,clickedLetter,idxList); // find indexes for clickedLetter in word
        setLetters(idxList,clickedLetter,isValid); // set letters in guessBoxes
        setWrongAttemp(isValid,attemp);

    }

    if (attemp.wrong >= 7) {
        lettersContainer.classList.add("finished");
        endGame(1);
    }

    if (attemp.valid >= value.length) {
        lettersContainer.classList.add("finished");
        endGame(0);
    }

});

function findIndex(valeus, clickedLetter,idxList) {
    let start = valeus.indexOf(clickedLetter);
    let end = valeus.lastIndexOf(clickedLetter);
    for(let i = start ; i <= end && start != -1; ++i) {
        if (valeus[i] === clickedLetter)
            idxList.push(i);
    }
}

function setLetters(idxList,clickedLetter,isValid) {
    for(let i = 0 ; i < idxList.length ; ++i) {
        guessBoxes[idxList[i]].innerHTML = clickedLetter;
        isValid.value = true;
        ++attemp.valid;
    }
}

function setWrongAttemp(isValid,wrongAttemp) {
    if (isValid.value === false) {
        ++attemp.wrong;
        theDraw.classList.add(`worng-num${attemp.wrong}`);
        successAudio.pause();
        failAudio.play();
    }
    else {
        failAudio.pause();
        successAudio.play();
    }
}

function endGame(type) {
    gameOverContainer.style.display = "flex";
    if (type === 0) {
        successGameOver.style.display = "block";
        successGameOver.lastElementChild.innerHTML = `Good`;
        successAudio.pause();
        document.getElementById("successGame").play();
    }
    else {
        failGameOver.style.display = "block";
        failGameOver.lastElementChild.innerHTML = `Game Over , the word is ${value.toUpperCase()}`;
        failAudio.pause();
        document.getElementById("failGame").play();
    }

    playAgainBtn.addEventListener("click",function() {
        window.location.reload();
    })

}