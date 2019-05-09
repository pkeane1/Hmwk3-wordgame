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
["h","_","l","l","_"]

//1.7
function hasWon(puzzleState) {

    // if( !puzzleState.indexOf("_") === -1){
    //     return true
    // }
    // return false

   for (var i = 0; i < puzzleState.length; i++) {
        if (puzzleState[i] === "_") {
            return false;
        }
    }
            return true;
}

//1.8- if out of lives you lose
function hasLost(guessesLeft) {
        if(guessesLeft > 0) {
            return false;
        } else { 
            return true;
        }
    }     
        
//1.9
function isEndOfRound(round) {
    
    
    if (hasLost(round.guessesLeft) || hasWon(round.puzzleState)) {
        return true;
    } 
     return false;
    
}
//1.10 set up game

function setupGame(words,wins,losses) { 
    var game = {
        words: words,
        wins: wins,
        losses:losses,
        round:setupRound(randomWord(words))


    }
    return game;
}

    // randomWord(words.gameWords)
    // hasWon(wins.puzzleState)
    // hasLost(losses.guessesLeft)
    
   





//1.11 start new round
function startNewRound(game) {
    if(hasWon(game.round.puzzleState)) {
        alert(" winner " +  game.round.word)
        game.wins++;

    } else if(hasLost(game.round.guessesLeft)) {
        alert(" Loser " + game.round.word)
        game.losses++;
    }
    setupRound(randomWord(gameWords));
}

//1.12 
var wins = 0
var losses = 0
var myGame = setupGame(gameWords,wins,losses);



//
// document.addEventListener("keyup", gamePlay)


// function gamePlay(event){
//     console.log(event.key)
//     if (isCorrectGuess(myGame.round.word, event.key)){
//         document.getElementById("puzzle-state").innerHTML =
//     }
// }

document.getElementById("puzzle-state")
puzzle.innerHTML = myGame.round.puzzleState.join(" ")


 