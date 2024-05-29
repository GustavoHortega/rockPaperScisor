let playerChoice = document.querySelector('.playerChoice');
let audioArr = document.getElementsByTagName('audio');

playerChoice.addEventListener('mouseenter', ()=>{
    audioArr[0].play();
    audioArr[0].currentTime = 0;
})

playerChoice.addEventListener('click', ()=>{
    audioArr[1].play();
    audioArr[1].currentTime = 0;
})


