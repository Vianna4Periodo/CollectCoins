var GameState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FILL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },

    preload: function () {
        this.load.spritesheet('moeda', 'assets/images/moeda_spritesheet.png', 100, 100, 10);
        this.load.audio("coinSound", ['assets/audio/tap.m4a']);
    },

    create: function () {
        this.pontuacao = 0;

        let self = this;

        for (let index = 1; index < 11; index++) {
            let position = self.randomPosition();
            var moeda = self.game.add.sprite(position.x, position.y, "moeda");
            moeda.animations.add('animate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 12, true);
            moeda.customParams = { ponto: 10, sound: self.game.add.audio("coinSound") };
            moeda.anchor.setTo(0.5);
            moeda.scale.setTo(0.5);
            moeda.inputEnabled = true;
            moeda.input.pixelPerfectClick = true;
            moeda.useHandCursor = true;
            moeda.events.onInputDown.add(self.pegar, self);
            moeda.play("animate");
        };
    },

    update: function () {
    },

    pegar: function (moeda, event) {
        if ((this.pontuacao + moeda.customParams.ponto) >= 100) {
            this.fimJogo();
            return;
        }

        console.log(this.pontuacao);

        this.pontuacao += moeda.customParams.ponto;

        if(!this.placar){
            var style = {
                font: 'bold 15pt Arial', 
                fill: 'white', 
                align: 'left'
            };

            this.placar = this.game.add.text(20, 20, "", style);
            this.placar.anchor.setTo(0.0);
        }

        this.placar.setText("Seus pontos: " + this.pontuacao);

        moeda.customParams.sound.play();
        moeda.destroy();
    },

    fimJogo: function() {
        this.game.state.start("EndState");
    },

    randomPosition: function() {
        let valueX = Math.floor(Math.random() * this.game.width);
        let valueY = Math.floor(Math.random() * this.game.height);
        return { x: valueX, y: valueY };
    }

};