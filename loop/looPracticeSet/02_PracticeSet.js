// QS 2
// Create a game whare you start with any random game number. Ask the user to keep guessing the game nubmer until the user enters correct value. 

let gameNumber = 25;
let userNum = prompt("Guess the game number :");

while (userNum != gameNumber) {
    userNum = prompt("Yue enterd worng number. Guess again :");
}

console.log("Congratulations, you entred the right number):")