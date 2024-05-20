let player;
let com;

document.getElementById('rock').addEventListener('click', function() {
    player = 0;
    console.log(player);
    document.getElementById('rockFigure').style.borderStyle = "solid";
    document.getElementById('paperFigure').style.borderStyle = "none";
    document.getElementById('scisorFigure').style.borderStyle = "none";

        
})

document.getElementById('paper').addEventListener('click', function(){
    player = 1
    console.log(player)
    document.getElementById('rockFigure').style.borderStyle = "none";
    document.getElementById('paperFigure').style.borderStyle = "solid";
    document.getElementById('scisorFigure').style.borderStyle = "none";
})

document.getElementById('scisor').addEventListener('click', function(){
    player = 2;
    console.log(player);
    document.getElementById('rockFigure').style.borderStyle = "none";
    document.getElementById('paperFigure').style.borderStyle = "none";
    document.getElementById('scisorFigure').style.borderStyle = "solid";
})