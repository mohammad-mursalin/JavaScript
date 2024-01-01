
var choice = confirm("Shall we play rock paper scissor ?");

if(choice)
{
    var playerChoice = prompt("Select one option from rock paper and scissor");

        if(playerChoice)
        {
            playerChoice = playerChoice.trim().toLowerCase();

            if( playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissor" )
            {
                var computerChoice = Math.floor(Math.random()*3 + 1);

                var computer = computerChoice === 1 ? "rock" : computerChoice === 2 ? "paper" : "scissor";

                var result = playerChoice === "rock" && computer === "scissor" || playerChoice === "scissor" & computer === "paper" 
                
                                              || playerChoice === "paper" & computer === "rock" ? "Player wins" : 

                                              playerChoice === computer ? "Tied" : "Computer wins" ;

                var lastChoice = confirm("Player choice : " +playerChoice+ "\nComputer choice : " +computer+ "\n" +result+ "\n\n" + 
                
                                        "\nDo you wanna play again ?");

                if(lastChoice === true)
                {
                    location.reload();
                }
                else
                {
                    alert("Thanks for playing");
                }
            }
            else
            {
                alert("You didn't choose the right option");

                location.reload();
            }
        }
        else
        {
            alert("I think you've changed your mind, maybe next time");
        }
}
else
{
    alert("Okay. Maybe next time");
}




