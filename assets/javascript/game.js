$(document).ready(function(){

//Define Crystal Variables
var lowEndCrystal = 1;
var highEndCrystal = 12;
var crystalValues = [];
while(lowEndCrystal <= highEndCrystal){
   crystalValues.push(lowEndCrystal++);
}
//var crystalNumber = crystalValues[Math.floor(Math.random()* crystalValues.length)];

//Define Computer Score 
var lowEndComputer = 19;
var highEndComputer = 120;
var computerValues = [];
while(lowEndComputer <= highEndComputer){
   computerValues.push(lowEndComputer++);
}
var computerScore = computerValues[Math.floor(Math.random()* computerValues.length)];
$("#computer-score-value").append(computerScore);

//Define Player Score
var playerScore = 0;
$("#player-score-value").html(playerScore);

//Define Wins and Losses
var wins = 0;
$(".wins").html(wins);
var losses = 0;
$(".losses").html(losses);

//Assign Random Values to Crystals
var firstCrystal = crystalValues[Math.floor(Math.random()* crystalValues.length)];
var secondCrystal = crystalValues[Math.floor(Math.random()* crystalValues.length)];
var thirdCrystal = crystalValues[Math.floor(Math.random()* crystalValues.length)];
var fourthCrystal = crystalValues[Math.floor(Math.random()* crystalValues.length)];

//Testing
console.log(firstCrystal);
console.log(secondCrystal);
console.log(thirdCrystal);
console.log(fourthCrystal);

//Click Events Assigning Values to Crystals
$(".crystal-1").on("click", function (){
	$(".crystal-number-1").hide(firstCrystal);
	playerScore = playerScore + firstCrystal;
	$("#player-score-value").html(playerScore);
	check();
});

$(".crystal-2").on("click", function (){
	$(".crystal-number-2").hide(secondCrystal);
	playerScore = playerScore + secondCrystal;
	$("#player-score-value").html(playerScore);
	check();
});

$(".crystal-3").on("click", function (){
	$(".crystal-number-3").hide(thirdCrystal);
	playerScore = playerScore + thirdCrystal;
	$("#player-score-value").html(playerScore);
	check();
});

$(".crystal-4").on("click", function (){
	$(".crystal-number-4").hide(fourthCrystal);
	playerScore = playerScore + fourthCrystal;
	$("#player-score-value").html(playerScore);
	check();
});

//Display Wins & Losses

function check() {
	if (playerScore === computerScore) {
		//alert("You win!");
		wins++;
		$(".wins").html(wins);
		resetGame();

	}

	else if (playerScore > computerScore){
		//alert("You went over! Try again.")
		losses++;
		$(".losses").html(losses);
		resetGame();
	}

}
	function resetGame (){
		playerScore = 0;
		$("#player-score-value").html(playerScore);
		computerScore = computerValues[Math.floor(Math.random()* computerValues.length)];
		$("#computer-score-value").html(computerScore);
		firstCrystal = crystalValues[Math.floor(Math.random()* crystalValues.length)];
		secondCrystal = crystalValues[Math.floor(Math.random()* crystalValues.length)];
		thirdCrystal = crystalValues[Math.floor(Math.random()* crystalValues.length)];
		fourthCrystal = crystalValues[Math.floor(Math.random()* crystalValues.length)];
}

});