// array of options index 0 is rock, index 1 is paper and index 2 is scissors
const options = ["Rock ✊", "Paper ✋", "Scissors ✌️"];

// array of results which will hold the option of our results depending on index 0 draw/1 win / 2 lose
const resultsArray = ["Draw :/", "Win :D", "Lose :("];
let result = "";

// function to get computers choice
const computersChoice = () => {
    // generate a random number between 0-2 (represents index 0 rock/index 1 paper/index 2 scissors in numerals, depending on the random number)
    const randomNumber = Math.floor(Math.random() * 3);
    const computerOption = options[randomNumber];
    return computerOption;
};

// create the games logic function
const gamesLogic = (user) => {
    const computer = computersChoice();
    // if statement for logic of the game, depending on the user's and computer's choices
    if (computer == "Rock ✊" && user == "Rock ✊") {
        result = resultsArray[0]; // rock and rock result is a draw
    } else if (computer == "Paper ✋" && user == "Paper ✋") {
        result = resultsArray[0]; // paper and paper result is a draw
    } else if (computer == "Scissors ✌️" && user == "Scissors ✌️") {
        result = resultsArray[0]; // scissors and scissors result is a draw
    } else if (computer == "Rock ✊" && user == "Paper ✋") {
        result = resultsArray[1]; // rock and paper user wins
    } else if (computer == "Paper ✋" && user == "Scissors ✌️") {
        result = resultsArray[1]; // paper and scissors user wins
    } else if (computer == "Scissors ✌️" && user == "Rock ✊") {
        result = resultsArray[1]; // paper and scissors user wins
    } else if (computer == "Rock ✊" && user == "Scissors ✌️") {
        result = resultsArray[2]; // rock and scissors user lose
    } else if (computer == "Paper ✋" && user == "Rock ✊") {
        result = resultsArray[2]; // paper and rock user lose
    } else if (computer == "Scissors ✌️" && user == "Paper ✋") {
        result = resultsArray[2]; // rock and scissors user lose
    }

    document.getElementById("computerChoice").innerHTML = computer;  
    document.getElementById("result").innerHTML = result; // displays the outcome of the game (draw, win or lose) 
} 

// event listeners for the players choice, get span element by its id when player makes a choice and change the inner html of the span
const rockChoice = document.getElementById("rock").addEventListener("click", function() {
    document.getElementById("yourChoice").innerHTML = "Rock ✊";
    gamesLogic("Rock ✊")
});

const paperChoice = document.getElementById("paper").addEventListener("click", function() {
    document.getElementById("yourChoice").innerHTML = "Paper ✋"
    gamesLogic("Paper ✋")
});

const scissorsChoice = document.getElementById("scissors").addEventListener("click", function() {
    document.getElementById("yourChoice").innerHTML = "Scissors ✌️";
    gamesLogic("Scissors ✌️")
});