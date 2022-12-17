var gamePattern = [];
//3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress
var started = false;
// Create a new variable called level and start at level 0.
var level = 0;

function nextSequence() {
    // Increasing the level
    level++;

    $("#level-title").text("Level " + level);

    // Reset for next level
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // Playing sound
    playSound(randomChosenColour);

}

// Function to play the sound according to the color
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function () {
    //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");

    //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);
    //   console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    // Passing in the length of clicks - 1
    checkAnswer(userClickedPattern.length - 1);
})

// Create a new function called animatePress(), it should take a single input parameter called currentColour
function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    // Removing 'pressed' class after 100 ms
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// Starting the game if any key is pressed
$(document).on("keypress", function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
})

// Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {
    // Checking whether the latest color is the same
    console.log(gamePattern[currentLevel]);
    console.log(userClickedPattern[currentLevel]);

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over")
        $("#level-title").text("Game Over, Press Any Key to Restart");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

// Resetting all the values before starting over
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}