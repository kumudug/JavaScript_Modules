//(function() {
var player = require('./player.js');
var game = require('./game.js');

console.log('Bundled with Browserfy');

// add click handler to the start game button
document.getElementById('startGame').addEventListener('click', function () {
    player.setName(document.getElementById('playername').value);
    game.printGame();
});

// add click handler to the calculate score button
document.getElementById('calculate').addEventListener('click', function () {
    game.calculateScore();
});

// set the default number of problems
document.getElementById('problemCount').value = game.getProblemCount();

//})();