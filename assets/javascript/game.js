var games = ["pac-man", "super mario bros", "galaga", "pitfall", "super contra", "space invaders", "the legend of zelda", "joust", "frogger", "metroid"];

var totalWins = 0;
var currentWord = [];
var remainingGuesses = 0;
var lettersGuessed = [];
var maxGuesses = 10;
var wordLetters = [];

function beginGame() {
    currentWord = games[Math.floor(Math.random() * games.length)];
    wordLetters = [];

    for (var i = 0; i < currentWord.length; i++) {
        wordLetters[i] = "_";
    }

    remainingGuesses = maxGuesses;
    lettersGuessed = [];

    function updateDisplay() {

        document.getElementById("totalWins").innerHTML = totalWins;
        document.getElementById("currentWord").innerHTML = wordLetters.join("");
        document.getElementById("remainingGuesses").innerHTML = remainingGuesses;
        document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    };

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
            else if (currentWord === "sthe legend of zelda") {
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

    }
}



    // wordLetters = currentWord.split("");
    // wordSpacing = wordLetters.length;


//     console.log(beginGame);
// }



//     console.log(updateDisplay)
// }