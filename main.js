
let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;



function playerPlay() {
    let x = false;
    while (x === false) {
        playerSelection = prompt("Type rock, paper or scissor").toLowerCase().trim();
        if (playerSelection.indexOf("rock") != -1 && playerSelection.length == 4 ||
            playerSelection.indexOf("paper") != -1 && playerSelection.length == 5 ||
            playerSelection.indexOf("scissor") != -1 && playerSelection.length == 7) {
            x = true;
        } else {
            alert("You didn't type rock, paper or scissor.");
        }
    }

}


function computerPlay() {
    let x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0:
            computerSelection = "rock";
            break;
        case 1:
            computerSelection = "paper";
            break;
        case 2:
            computerSelection = "scissor";
            break;
        default:
            alert("error on computerPlay");
    }

}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        alert("It's a draw! Both choose " + playerSelection + "s");
    } else if ((playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
        alert(playerSelection + " beats " + computerSelection + " you won this round!");
        playerScore++;
    } if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissor") ||
        (playerSelection === "scissor" && computerSelection === "rock")
    ) {
        alert(playerSelection + " is beaten by " + computerSelection + " you lost this round!");
        computerScore++;
    }


}

function game() {

    for (let i = 0; i < 5; i++) {
        playerPlay();
        computerPlay();
        playRound(playerSelection, computerSelection);
    }

        if (playerScore == computerScore) {
            alert("It's a draw! Both players scored " + playerScore);
        }
        if (playerScore > computerScore) {
            alert("You did " + playerScore + " points, and the computer did " + computerScore + " you won!");
        }
        if (playerScore < computerScore) {
            alert("You did " + playerScore + " points, and the computer did " + computerScore + " you lose!");
        }
    playerScore = 0;
    computerScore = 0;
}