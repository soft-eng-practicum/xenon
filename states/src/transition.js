var transitionState = function(game){
    
};
  
var levelBackground;
var titleLabel;
var timeTween;
var logo;
var text;
var tween;
var sprite;
var levelMusic;
var scoreLabel;
   
transitionState.prototype = {
    
  	create: function(){
  
    //Creates background
    levelBackground =  this.game.add.sprite(0,0,"transitionBackground");
    levelBackground.scale.setTo(.84,1.2);
    
    //Creates the High Score label
    scoreLabel = this.game.add.text(this.game.world.centerX-200, 280, "SCORE: " + score, {font: "55px Courier", fill: "#ffffff"});
        
    //Creates the Title Label
    titleLabel = this.game.add.text(0, 0, "", {font: "50px Courier", fill: "#ffffff"});

    //Creates a Tween for the Score Label  
    timeTween = this.game.add.tween(scoreLabel).to( { alpha: 1 }, 3000/*0*/, "Linear", true, 300);

    timeTween.onComplete.add(this.onComplete, this);    

    //Creates a sprite in the middle of the screen 
    sprite = game.add.sprite(game.world.centerX - 125, game.world.centerY - 50, 'Astronaut');
    
    
    music.pause();
    //Creates audio
   // music = this.game.add.audio("sound");
        
    //levelMusic = this.game.add.audio("levelMusic");

    },
    
    /*Function: onComplete()
    *
    *Calls when Tween has completed.
    *Starts the Game Title
    */
    onComplete: function() {

        //Starts Next Level
        if(level_2_Transition){
            this.game.state.start("Level2");
        }
        else if(level_5_Transition){
            this.game.state.start("Level5");
        }
    }
  
};




