// Promt the user to enter their full name. Generate a username for them 
// based on the input. Start username with @, followed by their full name and ending eith the funame length.

let userInput = prompt("Enter your name with out spaces : ");
let userName = "@" + userInput + userInput.length;

document.write(userName);