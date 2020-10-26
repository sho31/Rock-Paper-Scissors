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
                return "W"
               case "scissors" :
                return "L"   
               default :
                return "E"          
            }
        case "paper":
            switch (playerSelectionModded) {
                case "scissors" :
                 return "W"
                case "rock" :
                 return "L"   
                default :
                 return "E"          
             }
            
        case "scissors":
            switch (playerSelectionModded) {
                case "rock" :
                 return "W"
                case "paper" :
                 return "L"   
                default :
                 return "E"          
             }

    }
}

function game() {
    let roundCount = 0
    let wincount
    while(true) {

    }
}
game()