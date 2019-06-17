var games = ["pac-man", "super mario bros", "galaga", "pitfall", "super contra", "space invaders", "the legend of zelda", "joust", "frogger", "metroid"];

var games = games[Math.floor(math.random() * games.length)];

var answerArray = [];
for (var i = 0; i < games.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = word.length;
