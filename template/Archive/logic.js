// 1.0
var gameWords = ["yankees", "sixers", "bruins", "ravens","dolphins"]
//1.1
function randomWord(gameWords) {
  var guessWord = gameWords[Math.floor(Math.random() * gameWords.length)];
    return gameWords[Math.floor(Math.random() * gameWords.length)];
};
//1.2
function isCorrectGuess(word,letter) {
    if(word.indexOf(letter) === -1) {
        return false 
    }  
    else {
        return true
    } 
}

//1.3
function getBlanks(word) {
    var blanks = [];
    for (var i = 0; i < word.length; i++) {
    var underScore = "_";
    blanks.push(underScore);
    }
    return blanks;
}
//1.4
function fillBlanks(word,puzzle,letter) {
    for (var i = 0; i < word.length; i++) {
    if (word [i] === letter) {
        puzzle [i] = letter;
    } 

    }
    return puzzle;
}

//1.5
function setupRound(word) {
var round = {
    word: word, 
    guessesLeft: 9,
    wrongGuesses: [],
    puzzleState: []

}
 return round;
}

//1.6
function updateRound(round,letter) {
    if (round.word.includes(letter)) {
        round.puzzleState = fillBlanks(round.word,round.puzzleState,letter);
    } else if (! round.word.includes(letter)) {
        round.wrongGuesses.push(letter)
        round.guessesLeft = round.guessesLeft - 1;   
    }
    return round;
}