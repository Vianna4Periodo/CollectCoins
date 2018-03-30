var GameState = {

    init: function () {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
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
        var coinsData = [];

        for (let index = 0; index < 9; index++) {
            coinsData.push({ key: "coin", value: 10, position: this.randomPosition(), sound: "tapSound" });
        };

        this.coins = this.game.add.group();

        let self = this;

        coinsData.forEach(function (element) {
            coin = self.coins.create(element.position.x, element.position.y, element.key);
            coin.animations.add('animate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 24, true);
            coin.customParams = { value: element.value, sound: self.game.add.audio(element.sound) };
            coin.anchor.setTo(0.5);
            coin.scale.setTo(0.2);
            coin.inputEnabled = true;
            coin.input.pixelPerfectClick = true;
            coin.useHandCursor = true;
            coin.events.onInputDown.add(self.tap, self);
            coin.play("animate");
        });
    },

    update: function () {
    },

    tap: function (coin, event) {
        coin.customParams.sound.play();
        coin.destroy();
    },

    randomPosition: function() {
        let valueX = Math.floor(Math.random() * this.game.width);
        let valueY = Math.floor(Math.random() * this.game.height);
        return { x: valueX, y: valueY };
    }

};