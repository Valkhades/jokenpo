
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



/* Down here for the UI code. */

function rpsSelection(arg) {
    playerSelection = arg;
    computerPlay();
    playRoundUI(playerSelection, computerSelection);
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector("#round_result").textContent = "";
    document.querySelector("#computer_Score").textContent = computerScore;
    document.querySelector("#player_Score").textContent = playerScore;
    document.querySelector(".rpsButtons").style.display = "grid";
    document.querySelector(".gameOver").style.display = "none";

}

function playRoundUI(playerSelection, computerSelection) {
    let endgame = false;
    if (endgame === false) {

        if (playerSelection === computerSelection) {
            document.querySelector("#round_result").textContent = "It's a draw! Both choose " + playerSelection + "s";
        }
        else if ((playerSelection === "rock" && computerSelection === "scissor") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissor" && computerSelection === "paper")) {
            document.querySelector("#round_result").textContent = playerSelection + " beats " + computerSelection + " you won this round!";
            playerScore++;
            document.querySelector("#player_Score").textContent = playerScore;
        }
        if ((playerSelection === "rock" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "scissor") ||
            (playerSelection === "scissor" && computerSelection === "rock")) {
            document.querySelector("#round_result").textContent = playerSelection + " is beaten by " + computerSelection + " you lost this round!";
            computerScore++;
            document.querySelector("#computer_Score").textContent = computerScore;
        }
        if (playerScore === 5 || computerScore === 5) {
            endgame = true;
        }
    }
    if (endgame === true) {
        document.querySelector(".rpsButtons").style.display = "none";
        document.querySelector(".gameOver").style.display = "block";
        if (playerScore === 5) {
            document.querySelector("#final_result").textContent = "Congratulations! You won!";
        }
        if (computerScore === 5) {
            document.querySelector("#final_result").textContent = "Too bad! You lost!";
        }
    }



}


