function computerPlay() {
    let possibleValues = ["Rock", "Paper", "Scissors"];
    return possibleValues[getRandomInt(possibleValues.length)];
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection){
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();

    switch (p)
    {
        case "rock":
            switch (c)
            {
                case "rock":
                    return "You tie! Rock equals Rock";
                case "paper":
                    return "You lose! Paper beats Rock";
                case "scissors":
                    return "You win! Rock beats Scissors";
                default:
                    return null;
            }
        case "paper":
            switch (c)
            {
                case "rock":
                    return "You win! Paper beats Rock";
                case "paper":
                    return "You tie! Paper equals Paper";
                case "scissors":
                    return "You lose! Scissors beats Paper";
                default:
                    return null;
            }
        case "scissors":
            switch (c)
            {
                case "rock":
                    return "You lose! Rock beats Scissors";
                case "paper":
                    return "You win! Scissors beats Paper";
                case "scissors":
                    return "You tie! Scissors equals Scissors";
                default:
                    return null;
            }
        default:
            return null;
    }
}

function game()
{
    for (let i = 0; i<5; i++)
    {
        console.log(playRound(prompt("Choose RPS"), computerPlay()));
    }
}

game();