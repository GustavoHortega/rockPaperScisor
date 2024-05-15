/*document.getElementById('Rock').addEventListener('click', function() {
    alert('Você escolheu pedra');
})*/

let player;
let com;

document.getElementById('rock').addEventListener('click', function() {
    alert('Você escolheu pedra');
    player = 0;
    console.log(player);
    
})

document.getElementById('paper').addEventListener('click', function(){
    alert('Você escolheu pedra');
    player = 1
    console.log(player)
})

document.getElementById('scisor').addEventListener('click', function(){
    alert('Você escolheu tesoura');
    player = 2;
    console.log(player);
})

if(player === 0){
    document.getElementById('rock').style.backgroundColor = "yellowgreen";
}else{
    document.getElementById('rock').style.background = "none";
};