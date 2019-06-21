var games = ["pac-man", "super mario bros", "galaga", "pitfall", "super contra", "space invaders", "the legend of zelda", "joust", "frogger", "metroid"];

var totalWins = 0;
var currentWord = [];
var remainingGuesses = 0;
var lettersGuessed = [];
var maxGuesses = 10;
var wordLetters = [];
var blanks = [];
var numblanks = 0;

function beginGame() {
    var currentWord = games[Math.floor(Math.random() * games.length)];

    // var wordLetters = [];

    numblanks = currentWord.length;
    for (var i = 0; i < numblanks; i++) {
        wordLetters[i] = "_";
    }

    var remainingGuesses = maxGuesses;
    // var lettersGuessed = [];

    function updateDisplay() {
        document.getElementById("totalWins").textContent = totalWins;
        document.getElementById("currentWord").textContent = wordLetters.join(" ");
        document.getElementById("remainingGuesses").textContent = remainingGuesses;
        document.getElementById("lettersGuessed").textContent = lettersGuessed;
    }

    function varifyGuess(letter) {
        if (lettersGuessed.indexOf(letter) === -1) {
            lettersGuessed.push(letter);

            if (currentWord.indexOf(letter) === -1) {
                remainingGuesses--;
            }

            else {
                for (var i = 0; i < currentWord.length; i++) {
                    if (letter === currentWord[i]) {
                        wordLetters[i] = letter;
                    }
                }
            }
        }
    }

    function winnerWinner() {
        if (wordLetters.indexOf("_") === -1) {
            totalWins++;

            ifWon = true;

            if (currentWord === "pac-man") {
                document.getElementById("place holder").scr = "place holder";
            }
            else if (currentWord === "super mario bros") {
                document.getElementById("place holder").scr = "place holder";
            }
            else if (currentWord === "galaga") {
                document.getElementById("place holder").scr = "place holder";
            }
            else if (currentWord === "pitfall") {
                document.getElementById("place holder").scr = "place holder";
            }
            else if (currentWord === "super contra") {
                document.getElementById("place holder").scr = "place holder";
            }
            else if (currentWord === "space invaders") {
                document.getElementById("place holder").scr = "place holder";
            }
            else if (currentWord === "the legend of zelda") {
                document.getElementById("place holder").scr = "place holder";
            }
            else if (currentWord === "joust") {
                document.getElementById("place holder").scr = "place holder";
            }
            else if (currentWord === "frogger") {
                document.getElementById("place holder").scr = "place holder";
            }
            else if (currentWord === "metroid") {
                document.getElementById("place holder").scr = "place holder";
            }
        }

        function youLost() {

            if (remainingGuesses <= 0) {
                ifFinished = true;
            }
        }
        document.onkeyup = function (event) {
            if (ifFinished) {
                beginGame();
                ifFinished = false;
            }
            else {
                if (event.keyCode >= 65 && event.keyCode <= 90) {
                    varifyGuess(event.key.toUpperCase());
                    updateDisplay();
                    ifWon();
                }
            }
        }
    }

    updateDisplay()
}

beginGame();
