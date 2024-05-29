let player;
let com ;
let win;

const hideComHands = () =>{
    document.getElementById('comRockHand').style.visibility = "hidden";
    document.getElementById('comPaperHand').style.visibility = "hidden";
    document.getElementById('comScisorHand').style.visibility = "hidden";
    document.getElementById('comRockCard').style.visibility = "visible";
    document.getElementById('comPaperCard').style.visibility = "visible";
    document.getElementById('comScisorCard').style.visibility = "visible";
}

hideComHands();

document.getElementById('rockHand').addEventListener('click', function(){
    player = 1;
    console.log(player);
    document.getElementById('rockHand').style.borderStyle = "solid";
    document.getElementById('paperHand').style.borderStyle = "none";
    document.getElementById('scisorHand').style.borderStyle = "none";
        
})

document.getElementById('paperHand').addEventListener('click', function(){
    player = 2
    console.log(player)
    document.getElementById('rockHand').style.borderStyle = "none";
    document.getElementById('paperHand').style.borderStyle = "solid";
    document.getElementById('scisorHand').style.borderStyle = "none";
})

document.getElementById('scisorHand').addEventListener('click', function(){
    player = 3;
    console.log(player);
    document.getElementById('rockHand').style.borderStyle = "none";
    document.getElementById('paperHand').style.borderStyle = "none";
    document.getElementById('scisorHand').style.borderStyle = "solid";
})

const playGame = () =>{
    hideComHands();
    
    setTimeout(()=>{
        com = Math.floor(Math.random() * 3) + 1;
        console.log("COM", com)
        switch(com){
            case 1:
                document.getElementById('comRockHand').style.visibility = "visible";
                document.getElementById('comPaperHand').style.visibility = "hidden";
                document.getElementById('comScisorHand').style.visibility = "hidden";
                document.getElementById('comRockCard').style.visibility = "hidden";
                document.getElementById('comPaperCard').style.visibility = "visible";
                document.getElementById('comScisorCard').style.visibility = "visible";
            break
            case 2:
                document.getElementById('comRockHand').style.visibility = "hidden";
                document.getElementById('comPaperHand').style.visibility = "visible";
                document.getElementById('comScisorHand').style.visibility = "hidden";
                document.getElementById('comRockCard').style.visibility = "visible";
                document.getElementById('comPaperCard').style.visibility = "hidden";
                document.getElementById('comScisorCard').style.visibility = "visible";
            break
            case 3:
                document.getElementById('comRockHand').style.visibility = "hidden";
                document.getElementById('comPaperHand').style.visibility = "hidden";
                document.getElementById('comScisorHand').style.visibility = "visible";
                document.getElementById('comRockCard').style.visibility = "visible";
                document.getElementById('comPaperCard').style.visibility = "visible";
                document.getElementById('comScisorCard').style.visibility = "hidden";
            break
            default:
            
            break
        };
    }, 1000)

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
        console.log(win);
    }, 1000)
    
}

