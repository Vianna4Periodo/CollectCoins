var GameState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FILL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    preload: function () {
        // Sprites
        this.load.spritesheet('coin', 'assets/images/coin_spritesheet.png', 128, 128, 21);
        
        // Sounds
        this.load.audio("start", ["assets/audio/start.m4a"]);
        this.load.audio("end", ["assets/audio/end.m4a"]);
        this.load.audio("tapSound", ["assets/audio/tap.m4a"]);
    },

    create: function () {
        this.points = 0;

        let self = this;

        for (let index = 0; index <= 9; index++) {
            let position = this.randomPosition();

            var coin = self.game.add.sprite(position.x, position.y, "coin");
            coin.animations.add('animate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 24, true);
            coin.customParams = { value: 10, sound: self.game.add.audio("tapSound") };
            coin.anchor.setTo(0.5);
            coin.scale.setTo(0.2);
            coin.inputEnabled = true;
            coin.input.pixelPerfectClick = true;
            coin.useHandCursor = true;
            coin.events.onInputDown.add(self.tap, self);
            coin.play("animate");
        };
    },

    update: function () {
    },

    showPoints: function(points) {
        if(!this.pointsText){
            var style = {
                font: 'bold 10pt Arial', 
                fill: 'white', 
                align: 'left',
                wordWrap: true, 
                wordWrapWidth: 450
            };

            this.pointsText = this.game.add.text(20, 20, "", style);
            this.pointsText.anchor.setTo(0.0);
        }

        this.pointsText.setText("Pontuação: " + points);
        this.pointsText.visible = true;
    },

    tap: function (coin, event) {
        if ((this.points + coin.customParams.value) >= 100) {
            this.endGame();
            return;
        } 

        this.points += coin.customParams.value;

        this.showPoints(this.points);

        coin.customParams.sound.play();
        coin.destroy();
    },

    endGame: function() {
        this.game.state.start("EndState");
    },

    randomPosition: function() {
        let valueX = Math.floor(Math.random() * this.game.width);
        let valueY = Math.floor(Math.random() * this.game.height);
        return { x: valueX, y: valueY };
    }

};