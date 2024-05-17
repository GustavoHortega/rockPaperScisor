let player;
let com;

document.getElementById('rock').addEventListener('click', function() {
    player = 0;
    console.log(player);  
        
})

document.getElementById('paper').addEventListener('click', function(){
    player = 1
    console.log(player)
})

document.getElementById('scisor').addEventListener('click', function(){
    player = 2;
    console.log(player);
})
