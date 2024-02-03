const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const message = document.getElementById('message');

let noClicked = 0;

yesButton.addEventListener('click', function() {
    const audio = new Audio("yippee.mp3");
    audio.play();
    message.style.display = 'flex'

    noButton.style.visibility = 'hidden';
    yesButton.style.visibility = 'hidden';
});

noButton.addEventListener('click', function() {
    if (noClicked <= 3) {
        const audio = new Audio("pop.mp3");
        audio.play();

        noButton.style.position = 'absolute';

        const maxX = window.innerWidth - noButton.clientWidth -50;
        const maxY = window.innerHeight - noButton.clientHeight -50;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    } else {
        noButton.style.display = 'none';
        alert('no choice :3')
    }
    noClicked++
});

