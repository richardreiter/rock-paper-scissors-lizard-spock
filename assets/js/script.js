// array of options index 0 is rock, index 1 is paper and index 2 is scissors, index 3 is lizard and index 4 spock
const options = ["Rock ✊", "Paper ✋", "Scissors ✌️", "Lizard 🦎", "Spock 🖖"];

// array of results which will hold the option of our results depending on index 0 draw/1 win / 2 lose
const resultsArray = ["Draw :/", "Win :D", "Lose :("];
let result = "";

// function to change the emoji state depending on the outcome of the game
const changeEmoji = () => {
    if (result == resultsArray[0]) {
        document.getElementById("emoji").src = "/assets/images/draw-emoji.png";
    } else if (result == resultsArray[1]) {
        document.getElementById("emoji").src = "/assets/images/win-emoji.png";
    } else if (result == resultsArray[2]) {
        document.getElementById("emoji").src = "/assets/images/lose-emoji.png";
    }
}; 

// function to get computers choice
const computersChoice = () => {
    // generate a random number between 0-4 (represents index 0 rock/index 1 paper/index 2 scissors, etc, in numerals, depending on the random number)
    const randomNumber = Math.floor(Math.random() * 5);
    const computerOption = options[randomNumber];
    return computerOption;
};

// create the games logic function
const gamesLogic = (user) => {
    const computer = computersChoice();
    // if statement for logic of the game, depending on the user's and computer's choices
    if (computer == user) {
        result = resultsArray[0]; // if both the computer and user make the same choice, it's a draw
    } else if (computer == "Rock ✊" && user == "Paper ✋") {
        result = resultsArray[1];
        incrementYourScore(); // rock and paper user wins
    } else if (computer == "Rock ✊" && user == "Spock 🖖") {
        result = resultsArray[1];
        incrementYourScore(); // rock and spock user wins
    } else if (computer == "Paper ✋" && user == "Scissors ✌️") {
        result = resultsArray[1];
        incrementYourScore(); // paper and scissors user wins
    } else if (computer == "Paper ✋" && user == "Lizard 🦎") {
        result = resultsArray[1];
        incrementYourScore(); // paper and lizard user wins
    } else if (computer == "Scissors ✌️" && user == "Rock ✊") {
        result = resultsArray[1];
        incrementYourScore(); // scissors and rock user wins
    } else if (computer == "Scissors ✌️" && user == "Spock 🖖") {
        result = resultsArray[1];
        incrementYourScore(); // scissors and spock user wins
    } else if (computer == "Lizard 🦎" && user == "Scissors ✌️") {
        result = resultsArray[1];
        incrementYourScore(); // lizard and scissors user wins
    } else if (computer == "Lizard 🦎" && user == "Rock ✊") {
        result = resultsArray[1];
        incrementYourScore(); // lizard and rock user wins
    } else if (computer == "Spock 🖖" && user == "Paper ✋") {
        result = resultsArray[1];
        incrementYourScore(); // spock and paper user wins
    } else if (computer == "Spock 🖖" && user == "Lizard 🦎") {
        result = resultsArray[1];
        incrementYourScore(); // spock and lizard user wins
    } else if (computer == "Rock ✊" && user == "Scissors ✌️") {
        result = resultsArray[2];
        incrementCompScore(); // rock and scissors user lose
    } else if (computer == "Rock ✊" && user == "Lizard 🦎") {
        result = resultsArray[2];
        incrementCompScore(); // rock and lizard user lose
    } else if (computer == "Paper ✋" && user == "Rock ✊") {
        result = resultsArray[2];
        incrementCompScore(); // paper and rock user lose
    } else if (computer == "Paper ✋" && user == "Spock 🖖") {
        result = resultsArray[2];
        incrementCompScore(); // paper and spock user lose
    } else if (computer == "Scissors ✌️" && user == "Paper ✋") {
        result = resultsArray[2];
        incrementCompScore(); // scissors and paper user lose
    } else if (computer == "Scissors ✌️" && user == "Lizard 🦎") {
        result = resultsArray[2];
        incrementCompScore(); // scissors and lizard user lose
    } else if (computer == "Lizard 🦎" && user == "Paper ✋") {
        result = resultsArray[2];
        incrementCompScore(); // lizard and paper user lose
    } else if (computer == "Lizard 🦎" && user == "Spock 🖖") {
        result = resultsArray[2];
        incrementCompScore(); // lizard and spock user lose
    } else if (computer == "Spock 🖖" && user == "Scissors ✌️") {
        result = resultsArray[2];
        incrementCompScore(); // spock and scissors user lose
    } else if (computer == "Spock 🖖" && user == "Rock ✊") {
        result = resultsArray[2];
        incrementCompScore(); // spock and rock user lose
    }

    document.getElementById("computerChoice").innerHTML = computer; // displays the computers weapon choice to the computerChoice span
    document.getElementById("result").innerHTML = result; // displays the outcome of the game to the result span (draw, win or lose)
};

// event listeners for the players choice, get span element by its id when player makes a choice and change the inner html of the span
const rockChoice = document.getElementById("rock").addEventListener("click", function() {
    document.getElementById("yourChoice").innerHTML = "Rock ✊";
    gamesLogic("Rock ✊");
    changeEmoji();
});

const paperChoice = document.getElementById("paper").addEventListener("click", function() {
    document.getElementById("yourChoice").innerHTML = "Paper ✋";
    gamesLogic("Paper ✋");
    changeEmoji();
});

const scissorsChoice = document.getElementById("scissors").addEventListener("click", function() {
    document.getElementById("yourChoice").innerHTML = "Scissors ✌️";
    gamesLogic("Scissors ✌️");
    changeEmoji();
});

const lizardChoice = document.getElementById("lizard").addEventListener("click", function() {
    document.getElementById("yourChoice").innerHTML = "Lizard 🦎";
    gamesLogic("Lizard 🦎");
    changeEmoji();
});

const spockChoice = document.getElementById("spock").addEventListener("click", function() {
    document.getElementById("yourChoice").innerHTML = "Spock 🖖";
    gamesLogic("Spock 🖖");
    changeEmoji();
});

// add event listener for the reset button and clear below spans on the event the button is clicked
const resetChoice = document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("computerChoice").innerHTML = "";
    document.getElementById("yourChoice").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("emoji").src = "/assets/images/reset-emoji.png";
});

// modal variables
const openModal = document.getElementById("open-modal");
const modalContainer = document.getElementById("modal_container");
const closeModal = document.getElementById("close-modal");

// add event listener to show the model when the open-modal button is clicked
openModal.addEventListener("click", () => {
    modalContainer.classList.add("show");
});

// add event listener to hide/remove the model class when the close-modal button is clicked
closeModal.addEventListener("click", () => {
    modalContainer.classList.remove("show");
});

/**
 * Gets the computer score from the DOM and increments it by 1
 */
 function incrementCompScore() {
    let oldScore = parseInt(document.getElementById("computerScore").innerText);
    document.getElementById("computerScore").innerText = ++oldScore;
}

/**
 * Gets the user score from the DOM and increments it by 1
 */
 function incrementYourScore() {
    let oldScore = parseInt(document.getElementById("yourScore").innerText);
    document.getElementById("yourScore").innerText = ++oldScore;
}