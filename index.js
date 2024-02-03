var yesButton = document.getElementById('yes-button');
var noButton = document.getElementById('no-button');

yesButton.addEventListener('click', function() {
    var audio = new Audio("yippee.mp3");
    audio.play();
});

noButton.addEventListener('click', function() {
    var audio = new Audio("pop.mp3");
    audio.play();
    
    noButton.style.position = 'absolute';

    const randomX = Math.floor(Math.random() * window.innerWidth - 50);
    const randomY = Math.floor(Math.random() * window.innerHeight) -50;

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

