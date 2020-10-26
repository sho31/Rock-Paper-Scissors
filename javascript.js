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
            switch (playerSelectionModded) {
                case "scissors" :
                 return "You won the round! Scissors beats Paper"
                case "rock" :
                 return "You lost the round! Paper beats Rock"   
                default :
                 return "No one wins the round."          
             }
            
        case "scissors":
            switch (playerSelectionModded) {
                case "rock" :
                 return "You won the round! Rock beats scissors"
                case "paper" :
                 return "You lost the round! Scissors beats Paper"   
                default :
                 return "No one wins the round."          
             }

    }
}