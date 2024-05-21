let player;
let com;
let win;

document.getElementById('rock').addEventListener('click', function() {
    player = 1;
    console.log(player);
    document.getElementById('rockFigure').style.borderStyle = "solid";
    document.getElementById('paperFigure').style.borderStyle = "none";
    document.getElementById('scisorFigure').style.borderStyle = "none";

        
})

document.getElementById('paper').addEventListener('click', function(){
    player = 2
    console.log(player)
    document.getElementById('rockFigure').style.borderStyle = "none";
    document.getElementById('paperFigure').style.borderStyle = "solid";
    document.getElementById('scisorFigure').style.borderStyle = "none";
})

document.getElementById('scisor').addEventListener('click', function(){
    player = 3;
    console.log(player);
    document.getElementById('rockFigure').style.borderStyle = "none";
    document.getElementById('paperFigure').style.borderStyle = "none";
    document.getElementById('scisorFigure').style.borderStyle = "solid";
})

const playGame = () =>{
    com = Math.floor(Math.random() * 3) + 1;
    console.log("COM", com)

    switch(com){
        case 1:
            document.getElementById('comRockFigure').style.borderStyle = "solid";
            document.getElementById('comPaperFigure').style.borderStyle = "none";
            document.getElementById('comScisorFigure').style.borderStyle = "none";
        break
        case 2:
            document.getElementById('comRockFigure').style.borderStyle = "none";
            document.getElementById('comPaperFigure').style.borderStyle = "solid";
            document.getElementById('comScisorFigure').style.borderStyle = "none";
        break
        case 3:
            document.getElementById('comRockFigure').style.borderStyle = "none";
            document.getElementById('comPaperFigure').style.borderStyle = "none";
            document.getElementById('comScisorFigure').style.borderStyle = "solid";
        break
    }
    setTimeout(() => {
        if(player === 1 && com === 2){
            win = false;
        }else if(player === 1 && com === 3){
            win = false;
        }else if(player === 2 && com === 1){
            win = true;
        }else if(player === 2 && com === 3){
            win = false;
        }else if(player === 3 && com === 1){
            win = false;
        }else if(player === 3 && com === 2){
            win = true;
        }else if(player === com){
            win = "Empate";
        }
    }, 1000)
}