/*eslint-env browser*/

function displayTitle() {
    "use strict";
    window.alert("Welcome to the Guess the nUmber Game!");
}

function playGame() {
    "use strict";
    var number, count, guess;
    number = Math.floor(Math.random() * 10 + 1)
    window.alert("I\'m guessing a number between 1 and 10");
    count = 0;
    while (true) {
        guess = Number(window.prompt("Your guess: "));
         count += 1;
        if (guess < number) {
            window.alert("Too low.");
           
        } else if (guess > number) {
            window.alert("Too low.");
       
        } else if (guess === number) {
            window.alert("You guessed the number in " + count + " tries.");
            return;
        }
    }
}

function main() {
    "use strict";
    displayTitle();
    var playAgain = "y";
    while (playAgain === "y") {
        playGame();
        playAgain = window.prompt("Do you want to play again (y/n)?");
    }
    window.alert("Thanks for playing the game!");
}
main();