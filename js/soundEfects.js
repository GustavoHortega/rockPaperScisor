let playerChoice = document.querySelector('.playerChoice');
let audioArr = document.getElementsByTagName('audio');

playerChoice.addEventListener('mouseenter', ()=>{
    audioArr[0].play();
})



