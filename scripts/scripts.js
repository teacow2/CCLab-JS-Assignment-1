var playerThrow; 
var opponentNumber;
var opponentThrow; 


var playerMove = function(pThrow){
	opponentNumber = ((Math.random()*3) + 1);
	switch (opponentNumber) {
		case 1: 
			opponentThrow = "rock";
			break;
		case 2: 
			opponentThrow = "paper";
			break; 
		default:
			opponentThrow = "scissors";
			break; 
	}
    console.log("Opp " + opponentThrow + " vs. Player " + pThrow);
	opponentThrow = pThrow; 	
	if (playerThrow == "continue") {


	}

	if (pThrow == opponentThrow) {
		console.log("You Tied.")
		var newForm = document.createElement("form");
		var newButton = document.createElement("input");
		newButton.type = "sumbit";
		newButton.id = "continue";
		newButton.value = "Tie! Tie again";
		newForm.appendChild(newButton);
		var item = document.getElementById("playerBox");
		var itemChild = document.getElementById("playerButton")
		item.replaceChild(newForm, itemChild);

	} else {
		if((pThrow == "scissors" && opponentThrow =="rock") || (pThrow == "paper" && opponentThrow =="scissors") || (pThrow == "rock" && opponentThrow =="paper") ) {
			console.log("You lost.");

		}
		if((opponentThrow == "scissors" && pThrow =="rock") || (opponentThrow == "paper" && pThrow =="scissors") || (opponentThrow == "rock" && pThrow =="paper") ) {
			console.log("You won.");

		}

	}

// player beats opp
// opp beats player 

}

var init = function(){
	

	var rockButton = document.getElementById("rock");

	rockButton.addEventListener('click', function(e){
		e.preventDefault();
		playerMove("rock");
	
	});

	var paperButton = document.getElementById("paper");

	paperButton.addEventListener('click', function(e){
		e.preventDefault();
		playerMove("paper");
	});

	var scissorButton = document.getElementById("scissors");

	scissorButton.addEventListener('click', function(e){
		e.preventDefault();
		playerMove("scissors");
		


		
	});
	
	
};

window.onload = init();