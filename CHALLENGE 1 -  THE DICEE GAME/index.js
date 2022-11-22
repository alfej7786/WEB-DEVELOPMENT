var randomNumber1 = Math.random(); // chooses any random number from 0.01 - 0.9999 (max 16 digits)
randomNumber1 = randomNumber1 * 6 + 1; // addd 1 to include 6
randomNumber1 = Math.floor(randomNumber1); // round to the nearest whole number

let img1 = document.getElementsByClassName('img1')[0];
img1.setAttribute("src", './images/dice${randomNumber1}.png');


var randomNumber2 = Math.random(); // chooses any random number from 0.01 - 0.9999 (max 16 digits)
randomNumber2 = randomNumber2 * 6 + 1; // addd 1 to include 6
randomNumber2 = Math.floor(randomNumber2); // round to the nearest whole number

let img2 = document.getElementsByClassName('img1')[0];
img1.setAttribute("src", './images/dice${randomNumber2}.png');

let heading = document.getElementsByTagName('h1')[0];

// Changing the title to determine the winner
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins! 🏆";
}
else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins! 🏆";
}
else {
    heading.innerHTML = "It is a Tie! 🤝";
}