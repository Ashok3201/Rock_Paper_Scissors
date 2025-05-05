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


//Write the logic to get the human choice

//start function, assign name getHumanChoice(with parameter name string)
function getHumanChoice() {
//declure var human= pop a window for Enter choice in these Rock, Paper, Scissor. With the help of propt().
let human = prompt("Type any one you choose in these below word \n Rock, Paper, Scissor\n R, P, S\n r, p, s");
//if human=="Rock" return "Rock", ensure with other variations such as "rock","ROCK","r"and "R" with the help of || (or) operator
if (human == "Rock" || human == "rock" || human == "ROCK" || human == "R" || human == "r") {
    return "Rock";
}
//else if human=="Paper" return "Paper",ensure with other variations such as "paper","PAPER","p"and "P" with the help of || (or) operator
else if (human == "Paper" || human == "paper" || human == "PAPER" || human == "P" || human == "p") {
    return "Paper";
}
//else if human=="Scissor" return "Scissor",ensure with other variations such as "scissor","SCISSOR","s"and "S" with the help of || (or) operator
else if (human == "Scissor" || human == "scissor" || human == "SCISSOR" || human == "S" || human == "s") {
    return "Scissor";
}

}
//call getHumanChoice(), store in a humanSelection var
const humanSelection = getHumanChoice();
//console.log() check output is correct via developer console
console.log(humanSelection);//check

