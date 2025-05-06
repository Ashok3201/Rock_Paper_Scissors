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


//Write the logic to get the human choice

//start function, assign name getHumanChoice(with parameter name string)
function getHumanChoice(round) {
    //declare var human= pop a window for Enter choice in these Rock, Paper, Scissor. With the help of propt().
    let human = prompt(round + "\nType any one you choose in these below word\n\n Rock, Paper, Scissor\n R, P, S\n r, p, s");
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
    //else if for tie
    else if (humanChoice == computerChoice) {
        console.log("Tie: Both Choose same");
        return 0;
    }
    //display massage when user enter Invalid or Empty massage
    else {
        console.log("Invalid or Empty Response");
        return 0;
    }
}


//Write the logic to play the entire game

//Create a new function named playGame
function playGame(round) {
    //know the round for console user
    console.log("\n" + round)

    //call getHumanChoice(), store in a humanSelection var
    const humanSelection = getHumanChoice(round);

    //call getComputerChoice(), return string store in a computerSelection var
    const computerSelection = getComputerChoice();

    //console.log() check output is correct via developer console
    console.log("You Choose:" + humanSelection + "\nComputer Choose:" + computerSelection);//for console user

    //call playRound(with argu humanSelection, computerSelection), store in a roundWinner var
    let roundWinner = playRound(humanSelection, computerSelection);

    //Increment the humanScore or computerScore variable based on the round winner.
    if (roundWinner == "computerScore") {
        computerScore += 1;
    }
    else if (roundWinner == "humanScore") {
        humanScore += 1;
    }
    //console.log() check output is correct via developer console
    console.log("Track score:\n" + "You score:" + humanScore + "\n" + "Computer score:" + computerScore);//console user
    alert(round + "\n\nChoice Board:\n" + "You Choose: " + humanSelection + "\n" + "Computer Choose: " + computerSelection + "\n\nTrack Score Board:\nYou score:" + humanScore + "\n" + "Computer score:" + computerScore);//for play using alert massage
}
//call multiple times,for 3 or 4 round 
playGame("1st Round")
playGame("2nd Round")
playGame("3rd Round")
//Declare Winner using conditional statements,Who is Match Winner or Match tie
if (humanScore > computerScore) {
    console.log("\nFinal Score Board:\n" + "You score: " + humanScore + "\nComputer score: " + computerScore + "\n\nMatch Winner: YOU");//for console user
    alert("Match Winner: YOU\n" + "\nFinal Score Board:\n" + "You score: " + humanScore + "\nComputer score: " + computerScore);//for play game using alert massage
}
else if (humanScore < computerScore) {
    console.log("\nFinal Score Board:\n" + "You score: " + humanScore + "\nComputer score: " + computerScore + "\n\nMatch Winner: COMPUTER");//for console user
    alert("Match Winner: COMPUTER\n" + "\nFinal Score Board:\n" + "You score: " + humanScore + "\nComputer score: " + computerScore);//for play game using alert massage
}
else {
    console.log("\nFinal Score Board:\n" + "You score: " + humanScore + "\nComputer score: " + computerScore + "\n\nOoops..\nTie: Both score same");//for console user
    alert("\nTie: Both score same\n" + "\nFinal Score Board:\n" + "You score: " + humanScore + "\nComputer score: " + computerScore);//for play game using alert massage
}