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
let card = document.createElement('div')
let test = document.createElement('p')
test.textContent = "je suis lol"
card.setAttribute("class", "card-body")
card.innerHTML='<h4 class=\"card-title\" style=\"font-size: 42px;\">Score</h4>\n    <p class=\"card-text\" style=\"font-size: 37px;\"><span id="scoreMe" style=\"color: rgb(92,181,50);\">0</span><span> - </span><span id="scoreOpp"style=\"color: rgb(187,79,86);\">0</span></p>'
const score = document.querySelector("#score")
const br = document.querySelector("#rock")
const bp = document.querySelector("paper")
const bs = document.querySelector("scissors")

function game() {
    let roundCount = 1;
    let wincount = 0;
    score.appendChild(card)
    const scoreMe = document.querySelector("#scoreMe");
    const scoreOpp = document.querySelector("#scoreOpp")
    const roundp = document.createElement("p");
    roundp.textContent = "Round " + roundCount
    card.appendChild(roundp)
    const buttons = document.querySelectorAll('buttons');
    alert(buttons);
    buttons.forEach()

}
const startButton = document.querySelector("#startButton")
startButton.addEventListener('click', game)
game()