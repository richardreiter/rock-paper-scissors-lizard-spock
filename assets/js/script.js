// array of options index 0 is rock, index 1 is paper and index 2 is scissors
const options = ["Rock ✊", "Paper ✋", "Scissors ✌️"];

// array of results which will hold the option of our results depending on index 0 draw/1 win / 2 lose
const resultsArray = ["Draw", "Win", "Lose"];
let result = "";

// function to get computers choice
const computersChoice = () => {
    //generate a random number between 0-2 (represents index 0 rock/index 1 paper/index 2 scissors in numerals, depending on the random number)
    const randomNumber = Math.floor(Math.random() * 3);
    const computerOption = options[randomNumber];
    return computerOption;
};

// event listeners for the players choice, get span element by its id when player makes a choice and change the inner html of the span
const rockChoice = document.getElementById("rock").addEventListener("click", function() {
    document.getElementById("yourChoice").innerHTML = "Rock ✊";
});

const paperChoice = document.getElementById("paper").addEventListener("click", function() {
    document.getElementById("yourChoice").innerHTML = "Paper ✋";
});

const scissorsChoice = document.getElementById("scissors").addEventListener("click", function() {
    document.getElementById("yourChoice").innerHTML = "Scissors ✌️";
});