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
        this.load.audio("start", ["assets/audio/start.mp4"]);
        this.load.audio("end", ["assets/audio/end.mp4"]);
        this.load.audio("tap", ["assets/audio/tap.mp4"]);
    },

    create: function () {
        var coinsData = [];

        for (let index = 0; index < 9; index++) {
            coinsData.push({ key: "coin", value: 10, position: this.randomPosition() });
        };

        this.coins = this.game.add.group();

        let self = this;

        coinsData.forEach(function (element) {
            coin = self.coins.create(element.position.x, element.position.y, element.key);
            coin.animations.add('animate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 24, true);
            coin.customParams = { value: element.value };
            coin.anchor.setTo(0.5);
            coin.scale.setTo(0.2);
            coin.inputEnabled = true;
            coin.input.pixelPerfectClick = true;
            coin.play("animate");
        });

        // this.background = this.game.add.sprite(0, 0, 'background');

        // var animalData = [
        //     {key:'chicken' , text:'CHICKEN', audio: 'chickenSound'},
        //     {key:'horse' , text:'HORSE', audio: 'horseSound'},
        //     {key:'pig' , text:'PIG', audio: 'pigSound'},
        //     {key:'sheep' , text:'SHEEP', audio: 'sheepSound'}
        // ];

        // this.animals = this.game.add.group();



        // var self = this;

        // animalData.forEach(function (element) {
        //     animal = self.animals.create(-1000, self.game.world.centerY,element.key);
        //     animal.animations.add('animate', [0, 1, 2, 1, 0, 1], 3, false);
        //     animal.customParams = {text: element.text, audio: self.game.add.audio(element.audio)};
        //     animal.anchor.setTo(0.5);
        //     animal.inputEnabled = true;
        //     animal.input.pixelPerfectClick = true;
        //     animal.events.onInputDown.add(self.animateAnimal, self);
        // });

        // this.currentAnimal = this.animals.next();
        // this.currentAnimal.position.set(this.game.world.centerX, this.world.centerY);

        // this.showText(this.currentAnimal);

        // this.leftArrow = this.game.add.sprite(60, this.game.world.centerY,'arrow');
        // this.leftArrow.anchor.setTo(0.5);
        // this.leftArrow.scale.setTo(-1,1);
        // this.leftArrow.inputEnabled = true;
        // this.leftArrow.input.pixelPerfectClick = true;
        // this.leftArrow.events.onInputDown.add(this.switchAnimal,this);

        // this.rightArrow = this.game.add.sprite(580, this.game.world.centerY,'arrow');
        // this.rightArrow.anchor.setTo(0.5);
        // this.rightArrow.scale.setTo(1,1);
        // this.rightArrow.inputEnabled = true;
        // this.rightArrow.input.pixelPerfectClick = true;
        // this.rightArrow.events.onInputDown.add(this.switchAnimal,this);

        // this.leftArrow.customParams = {direction: 1};
        // this.rightArrow.customParams = {direction: -1};
    },

    update: function () {
    },

    animateAnimal: function (sprite, event) {
        // sprite.play('animate');
        // sprite.customParams.audio.play();
    },

    showText: function(animal) {
        // if(!this.animalText){
        //     var style = {
        //         font: 'bold 30pt Arial',
        //         fill: 'D01718',
        //         align: 'center'
        //     };

        //     this.animalText = this.game.add.text(this.game.width / 2, 40, '', style);
        //     this.animalText.anchor.setTo(0.5);
        // }

        // this.animalText.setText(animal.customParams.text);
        // this.animalText.visible = true;
    },

    switchAnimal: function (sprite, event) {
        // var newAnimal, endX;

        // this.animalText.visible = false;

        // if(this.isMoving) {
        //     return;
        // }

        // this.isMoving = true;

        // if(sprite.customParams.direction > 0) {
        //     newAnimal = this.animals.next();
        //     newAnimal.x = - newAnimal.width / 2;
        //     endX = this.game.width + this.currentAnimal.width / 2;
        // } else {
        //     newAnimal = this.animals.previous();
        //     newAnimal.x = this.game.width + newAnimal.width / 2;
        //     endX = 0 - this.currentAnimal.width / 2;
        // }

        // var newAnimalMoviment = this.game.add.tween(newAnimal);
        // newAnimalMoviment.to({x:this.game.world.centerX}, 1000);
        // newAnimalMoviment.onComplete.add(function() {
        //     this.isMoving = false;
        //     this.showText(newAnimal);
        //     this.animateAnimal(newAnimal);
        // }, this);

        // newAnimalMoviment.start();

        // var currentAnimalMoviment = this.game.add.tween(this.currentAnimal);
        // currentAnimalMoviment.to({x:endX}, 1000);
        // currentAnimalMoviment.start();

        // this.currentAnimal = newAnimal;
    },

    randomPosition: function() {
        let valueX = Math.floor(Math.random() * this.game.width);
        let valueY = Math.floor(Math.random() * this.game.height);
        return { x: valueX, y: valueY };
    }

};