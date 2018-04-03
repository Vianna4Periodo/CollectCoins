var EndState = {
    
    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FILL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    preload: function () {
        this.load.audio("winSound", ['assets/audio/win.m4a', 'assets/audio/win.ogg']);
    },

    create: function () {
        var som =  game.add.audio('winSound', 1, true, true);
        som.play();
        var style = {
            font: 'bold 10pt Arial', 
            fill: 'white', 
            align: 'center',
            wordWrap: true, 
            wordWrapWidth: 450
        };

        this.endText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Jogar de novo", style);
        this.endText.anchor.setTo(0.5, 0.9);

        this.game.input.onDown.add(this.restart, this);
    },

    update: function () {
    },

    restart: function() {
        this.game.state.start("GameState");
    }

}