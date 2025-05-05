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


//Declare the players score variables

//declare humanScore var assign initial value 0
let humanScore = 0;
//declare computerScore var assign initial value 0
let computerScore = 0;


//Write the logic to play a single round



//start function, assign name playRound(with parameter name humanChoice, computerChoice)
function playRound(humanChoice, computerChoice) {

    //if humanChoice =="Rock" &&(and) computerChoice == "Paper" 
    if (humanChoice == "Rock" && computerChoice == "Paper") {
        //print console.log("You lose! Paper beats Rock") 
        console.log("You lose! Paper beats Rock");
        // and also return "computerScore"
        return "computerScore";
    }
    //else if humanChoice =="Paper" &&(and) computerChoice == "Rock" 
    else if (humanChoice == "Paper" && computerChoice == "Rock") {
        // print console.log("You Win! Paper beats Rock")
        console.log("You Win! Paper beats Rock");
        // return "humanScore"
        return "humanScore";
    }
    //else if (humanChoice == "Paper" &&(and) computerChoice == "Scissor")
    else if (humanChoice == "Paper" && computerChoice == "Scissor") {
        //print console.log("You lose! Scissor beats Paper")
        console.log("You lose! Scissor beats Paper");
        //return "computerScore"
        return "computerScore";
    }
    //else if (humanChoice == "Scissor" &&(and) computerChoice == "Paper")
    else if (humanChoice == "Scissor" && computerChoice == "Paper") {
        // print console.log("You Win! Scissor beats Paper"); 
        console.log("You Win! Scissor beats Paper");
        // return "humanScore"
    return "humanScore";
    }
    //else if (humanChoice == "Scissor" &&(and) computerChoice == "Rock")
    else if (humanChoice == "Scissor" && computerChoice == "Rock") {
        // print console.log("You lose! Rock beats Scissor") 
        console.log("You lose! Rock beats Scissor");
        // return "computerScore"
        return "computerScore";
    }
    //else if (humanChoice == "Rock" &&(and) computerChoice == "Scissor")
    else if (humanChoice == "Rock" && computerChoice == "Scissor") {
        // print console.log("You Win! Rock beats Scissor")
        console.log("You Win! Rock beats Scissor");
        // return "humanScore"
        return "humanScore";
    }
}
//call playRound(with argu humanSelection, computerSelection), store in a roundWinner var
let roundWinner = playRound(humanSelection, computerSelection);

//Increment the humanScore or computerScore variable based on the round winner.
if (roundWinner == "computerScore") {
    computerScore += 1;
}
else {
    humanScore += 1;
}
//console.log() check output is correct via developer console
console.log("You score:" + humanScore +" "+ "Computer score:" + computerScore);//check

