
var game = new Phaser.Game(600, 600, Phaser.AUTO);
game.state.add('EndState', EndState);
game.state.add('GameState', GameState);
game.state.start('GameState');