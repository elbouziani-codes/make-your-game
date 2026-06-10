let statuss = "start"


const allowedMoves = {
    start: ["game"],
    game: ["pause", "gameOver", "start"],
    pause: ["game", "start"],
    gameOver: ["start", "game"]
};

function setStatus(newStatus){
    if (!allowedMoves[statuss].includes(newStatus)) {
        console.warn(`Invalid move: ${statuss} -> ${newStatus}`);
        statuss = "start";
        switchs();
        return;
    }

    statuss = newStatus;
    switchs();
}

function Start(){
    setStatus("game");
}

function pause(){
    stops();
    if( statuss == "game"){
        setStatus("pause")
    }else if(statuss == "pause"){
        setStatus("game")
    }else{
        setStatus("start")
    }
}

function restart(){
    reset()
    setStatus("game");
}

function Exit(){
    exit()
    setStatus("start");
}

function show(start, ui, pause, over){
    document.querySelector("#start").className = start ? "showFlex" : "hidden";
    document.querySelector("#ui").className = ui ? "showFlex" : "hidden";
    document.querySelector("#pause-menu").className = pause ? "showFlex" : "hidden";
    document.querySelector("#gameOver").className = over ? "showFlex" : "hidden";
}

function switchs(){
    switch (statuss) {
        case "start":
            show(true, false, false, false);
            break;

        case "game":
            show(false, true, false, false);
            break;

        case "pause":
            show(false, true, true, false);
            break;

        case "gameOver":
            show(false, false, false, true);
            break;
        default:
            statuss = "start";
            show(true, false, false, false);
    }
}

function stops(){
    
}
function reset(){
    
}

function exit(){
    
}