//game states
// "win" - player robot has defeated all enemy-robots
//    * fight all enemy-robots
//    * defeat each enemy-robot
// "lose" - player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// You can also log multiple values at once like this - console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);




var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {

        var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //if player picks skip confirm then start loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true) leave the fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                //subtract playermoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }


    

            //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
            enemyHealth = enemyHealth - playerAttack;

            //log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
            );

            //check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died! ");
                //award player money for winnind
                playerMoney = playerMoney + 20;
                //leave while() loop since enemy is dead
                break;
                
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left. ");
            }

            //subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
            playerHealth = playerHealth - enemyAttack;

            //log a resulting message to the console so we know that it worked
            console.log(
                enemyName + " attacked " + playerName + "." + playerName + " now has " + playerHealth + " health remaining. "
            );

            //check players health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                // leave while() loop if player is dead
                break;
            
            } else {
                window.alert(playerName + " stll has " + playerHealth + " health left.");
            }
        }
  };
    
  
// fight each enemy by looping over them and fighting one at a time
var startGame = function() { 
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
    //if player is still alive keep fighting
    if (playerHealth > 0) {
        //let player know what round they are ing
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    // pick new enemy to fight based on enemyNames array
    var pickedEnemyName = enemyNames[i];
    // reset enemy health before new fight
    enemyHealth = 50;
    fight(pickedEnemyName);
}



  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
   }
}
endGame();
};

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is stil alive player wins!
    if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
}  else {
    window.alert("You've lost your robot in battle.");
  }
    var playAgainConfirm = window.confirm("Would you like to play again?");

 if (playAgainConfirm) {
  // restart the game
 startGame();
 } else {
 window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};
startGame();


