//var player = function() {

// private members
var playerName = '';

export function logPlayer() {
    console.log('The current player is ' + playerName + '.');
}

export default function setName(newName) {
    playerName = newName;
}

export function getName() {
    return playerName;
}

/*    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    };
    
}();*/