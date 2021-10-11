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