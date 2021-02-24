class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    player1.scale = 0.5;

    player2 = createSprite(400,500);
    player2.addImage("player2", player2_img);
    player2.scale = 0.5;

    player3 = createSprite(600,500);
    player3.addImage("player3", player3_img);
    player3.scale = 0.5;

    player4 = createSprite(800,500);
    player4.addImage("player4", player4_img);
    player4.scale = 0.5;

    players=[player1,player2,player3,player4];

        }
    
    play(){
        
        form.hide();
        background(bg2);

        Player.getPlayerInfo();
        //image(back_img, 0, 0, 1000, 800);
        
        var index =0;
     //drawSprites();

        if(allPlayers !== undefined){
            var index = 0;

            //x and y position of the cars
            var x = 20;
            var y ;
      
            for(var plr in allPlayers){
              //add 1 to the index for every loop
              index = index + 1 ;
      
             //position the cars a little away from each other in x direction
              x = 20+(index*250)+allPlayers[plr].horizontal;
              //use data form the database to display the cars in y direction
              y = displayHeight - allPlayers[plr].distance;
              players[index-1].x = x;
              players[index-1].y = y;  
            }
            
             // Differentiate the main player by printing

             // the name of the player on the basket. 
             if(index === player.index){
                fill("black");
                textSize(25);
                text(allPlayers[plr].name ,x-25,y+25)
             }

             fill("white");
             textSize(25);
             text("Score =",20,50);
             text(allPlayers["player1"].name +"= "+ allPlayers["player1"].score,20 ,90)
             text(allPlayers["player2"].name +"= "+ allPlayers["player2"].score,20 ,125)

           
            }
    }
         // Give movements for the players using arrow keys
            if(keyIsDown(RIGHT_ARROW) && player.index !== null){
            player.distance -=10
            player.update();
           }

           if(keyIsDown(LEFT_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
         }
         drawSprites();
        }

          // Create and spawn fruits randomly
          /*if(frameCount % 20 === 0){
            fruits = createSprite(random(100, 1000),0,100,100);
            fruits.velocityY = 6;

            var rand = Math.round(random(1,5))
            switch (rand){
                case 1:fruits.addImage("fruit1",fruit1_img);
                break;
                case 2:fruits.addImage("fruit1",fruit1_img);
                break;
                case 3:fruits.addImage("fruit1",fruit1_img);
                break;
                case 4:fruits.addImage("fruit1",fruit1_img);
                break;
                case 5:fruits.addImage("fruit1",fruit1_img);
                break;
            }
            fruitGroup.add(fruits); 
         }
        
        if(player.index !== null){
            for(var i = 0; i< fruitGroup.length; i++){
                if(fruitGroup.get(i).isTouching(players)){
                    fruitGroup.get(i).destroy();
                    player.score += 1
                    player.update();
                }
            }
        }
        if(player.score>=10){
            game.update(2);
        }*/

    end(){
        
        background("red");
        textSize(35);
        fill("orange");
        text("Game Over!",480,300);
       console.log("Game Ended");
    }
}