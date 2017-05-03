$(document).ready(function(){

//Define Crystal Variables
var lowEndCrystal = 1;
var highEndCrystal = 12;
var crystalValues = [];
while(lowEndCrystal <= highEndCrystal){
   crystalValues.push(lowEndCrystal++);
}
var crystalNumber = crystalValues[Math.floor(Math.random()* crystalValues.length)];

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
$("#player-score-value").append(playerScore);
var playersTotal = firstCrystal + secondCrystal + thirdCrystal + fourthCrystal;
//var playerScore = playersTotal;
//$("#player-score-value").append(playerScore);

//Define Wins and Losses
var wins = 0;
$(".wins").html(wins);
var losses = 0;
$(".losses").html(losses);

//Assign Random Values to Crystals
var firstCrystal = crystalNumber+3;
var secondCrystal = crystalNumber+5;
var thirdCrystal = crystalNumber-2;
var fourthCrystal = crystalNumber-4;

$(".crystal-1").on("click", function (){
	$(".crystal-number-1").hide(firstCrystal);
	

});

$(".crystal-2").on("click", function (){
	$(".crystal-2").append(secondCrystal);
});

$(".crystal-3").on("click", function (){
	$(".crystal-3").append(thirdCrystal);
});

$(".crystal-4").on("click", function (){
	$(".crystal-4").append(fourthCrystal);
});

//Display Wins & Losses
if (computerScore > playerScore) {
	losses++;
}

else {
	wins++;
}

});