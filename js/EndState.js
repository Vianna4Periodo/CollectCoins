var EndState = {
    
    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FILL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    preload: function () {
    },

    create: function () {
        var style = {
            font: 'bold 10pt Arial', 
            fill: 'white', 
            align: 'center',
            wordWrap: true, 
            wordWrapWidth: 450
        };

        this.endText = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "Para jogar novamente, clique na tela.", style);
        this.endText.anchor.setTo(0.5);

        this.game.input.onDown.add(this.restart, this);
    },

    update: function () {
    },

    restart: function() {
        this.game.state.start("GameState");
    }

}