function LuckySeven(){
var initialBet = document.getElementById("initialBet").value;
var money = 0;
var dice1 = 0;
var dice2 = 0;
var dices = 0;
var roll = 0;
var rollCounter = 0;
var money = initialBet;
var moneyInvested = [initialBet];
var win = 4;
var loss = 1;
var maxM = 0;


	do{
		roll++;
		dice1 = Math.floor(Math.random() * 6) + 1;
		dice2 = Math.floor(Math.random() * 6) + 1;
		dices = dice1+dice2;

			// WINNER
			if (dices == 7){
			money = money+win;
			var last_roll = moneyInvested[moneyInvested.length -1];
			var last_update = last_roll + win;
			moneyInvested.push(last_update);

			// LOSER
			}else {
			money--;
			rollCounter++;
			var last_roll = moneyInvested[moneyInvested.length -1];
			var last_update = last_roll - loss;
			moneyInvested.push(last_update);
			roll = roll++;
			}


	}while(money>0);
	var maxT = 0;

	maxT = Math.max.apply(Math, moneyInvested);
	numRolls = moneyInvested.indexOf(maxT);
	if(numRolls<1){
		numRolls = 0;
	}

	document.getElementById("player1").innerHTML=("<center><br><br><table style=\"width: 100% height: 100%;\"><th colspan=\"2\"; class=\"th1\">Results:</th><br><tr><th class=\"th2\">Starting Bet</th><th class=\"th2\">$" + initialBet + ".00</th></tr><tr><td>Total Rolls Before Running Out of Cash:<br></td><td>"+ roll +"</td></tr><tr><td>Highest Amount of Money Won:<br></td><td>"+maxT+"</td></tr><tr><td>Amount of times where Highest Amount was Held:<br></td><td>"+ numRolls + "</td></tr></table></center>");
	document.getElementById("pyb").innerHTML="Try Your Luck";

}
