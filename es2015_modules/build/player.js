'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.logPlayer = logPlayer;
exports.default = setName;
exports.getName = getName;
//var player = function() {

// private members
var playerName = '';

function logPlayer() {
    console.log('The current player is ' + playerName + '.');
}

function setName(newName) {
    playerName = newName;
}

function getName() {
    return playerName;
}

/*    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };
    
}();*/