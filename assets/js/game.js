// functions
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};



var fight = function(enemy) {
    // repeat and execute as long as the enemy-robot is alive
    while (playerInfo.Health > 0 && enemy.health > 0) {

        var promptFight = window.prompt('would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

        //if player picks skip confirm then start loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            //if yes (true) leave the fight
            if (confirmSkip) {
                window.alert(playerInfo.Name + ' has decided to skip this fight. Goodbye!');
                //subtract playermoney for skipping
                playerInfo.Money = Math.max(0, playerInfo.Money - 10);
                console.log("playerInfo.money", playerInfo.Money);
                break;
            }
        }


    

            //generate random damage based on attack power
            var damage = randomNumber(playerInfo.Attack - 3, playerInfo.Attack);

            enemy.health = Math.max(0, enemy.health - damage); 

            //log a resulting message to the console so we know that it worked.
            console.log(
                playerInfo.Name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining. '
            );

            //check enemy's health
            if (enemy.health <= 0) {
                window.alert(enemy.name + ' has died! ');
                //award player money for winnind
                playerInfo.Money = playerInfo.Money + 20;
                //leave while() loop since enemy is dead
                break;
                
            } else {
                window.alert(enemy.name + ' still has ' + enemy.health + ' health left. ');
            }

            //random damage based on enemy attack
            var damage = randomNumber(enemy.Attack - 3, enemy.Attack);

            playerInfo.Health = Math.max(0, playerInfo.Health - damage); 

            //log a resulting message to the console so we know that it worked
            console.log(
                enemy.name + ' attacked ' + playerInfo.Name + '.' + playerInfo.Name + ' now has ' + playerInfo.Health + ' health remaining. '
            );

            //check players health
            if (playerInfo.Health <= 0) {
                window.alert(playerInfo.Name + ' has died!');
                // leave while() loop if player is dead
                break;
            
            } else {
                window.alert(playerInfo.Name + " stll has " + playerInfo.Health + " health left.");
            }
        }
  };
    
  
// fight each enemy by looping over them and fighting one at a time
var startGame = function() { 
    //reset player stats
    playerInfo.reset();

for (var i = 0; i < enemyInfo.length; i++) {
    //if player is still alive keep fighting
    if (playerInfo.Health > 0) {
        //let player know what round they are ing
        window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
    // pick new enemy to fight based on enemyNames array
    var pickedEnemyObj = enemyInfo[i];
    // reset enemy health before new fight
    pickedEnemyObj.health = randomNumber(40, 60);
    
    fight(pickedEnemyObj);

    // if player is alive and not at the last enemy
    if (playerInfo.Health > 0 && i < enemyInfo.length - 1){
        //ask player if they want to use the store
        var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
        // if yes take them to the store()
        if (storeConfirm) {
            shop();
        }

    }
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
    if (playerInfo.Health > 0) {
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
// go to shop between battles
var shop = function(){
    //ask player what they would like to do
    var shopOptionPrompt = window.prompt('Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one "REFILL", "UPGRADE", or "LEAVE" to make a choice.');

    // use switch case to carry out action
    switch (shopOptionPrompt) {
        case 'REFILL':
        case 'refill':
            playerInfo.refillHealth();
            break;
            case 'UPGRADE':
            case 'upgrade':
                playerInfo.upgradeAttack
                break;
                case 'LEAVE':
                case 'leave':
                    window.alert('leaving the store.');
                    //do nothing
                    break;
                    default:
                        window.alert('You did not pick a vali option. try again.');
                        
                        // call shop() agian to force player to pick an option
                        shop();
                        break;
         
    }

};


// player info
var playerInfo = {
    Name: window.prompt("What is your robot's name?"),
    Health: 100,
    Attack: 10,
    Money: 10,
    reset: function() {
        this.Health = 100;
        this.Money = 10;
        this.Attack = 10;
    },
    refillHealth: function() {
        if (this.Money >= 7) {
           window.alert("Refilling player's health by 20 for 7 money.");
           this.Health += 20;
           this.Money -= 7; 
        }
        else{
            window.alert("You don't have enough money!!");
        }
    },

    upgradeAttack: function() {
        if (this.Money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.Attack += 6;
            this.Money -= 7;
        }
        else {
            window.alert("You don't have enough money!!");
        }
    }
};

//enemy info
var enemyInfo = [
    {
        name: 'Roborto',
        Attack: randomNumber(10,14)
    },
    {
        name: 'Amy Android',
        Attack: randomNumber(10,14)
    },
    {
        name: 'Robo Trumble',
        Attack: randomNumber(10,14)
    }
];

console.log(enemyInfo);
console.log(enemyInfo[0]);
console.log(enemyInfo[0].name);
console.log(enemyInfo[0]['attack']);

startGame();


