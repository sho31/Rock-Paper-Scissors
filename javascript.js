function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0 :
            return "rock";
        case 1 : 
            return "scissors";   
        case 2 : 
            return "paper"
    }
}
function round(playerSelection, computerSelection) {
    let playerSelectionModded = playerSelection.toLowerCase()
    switch (computerSelection) {
        case "rock":
            switch (playerSelectionModded) {
               case "paper" :
                return "You won the round! Paper beats Rock"
               case "scissors" :
                return "You lost the round! Rock beats Scissors"   
               default :
                return "No one wins the round."          
            }
        case "paper":
        case "scissors":


    }
}