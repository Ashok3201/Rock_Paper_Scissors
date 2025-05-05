console.log("Rock-Paper-Scissor Game")

//Write the logic to get the computer choice

//start function declare name getComputerChoice
function getComputerChoice() {
    //declare randomNumber var assign random value between  1 to 3 using  math.random().
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    //if randomNumber==1 return "Rock"
    if (randomNumber == 1) {
        return "Rock";
    }
    //else if randomNumber==2 return "Paper"
    else if (randomNumber == 2) {
        return "Paper";
    }
    //else if randomNumber==3 return "Scissor"
    else {
        return "Scissor";
    }
}
//call getComputerChoice(), return string store in a computerSelection var
const computerSelection = getComputerChoice();
//console.log() check output is correct via developer console
console.log(computerSelection);//check
