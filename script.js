function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const noButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');
const answerBox = document.querySelector('.gay__answer');

noButton.addEventListener('mouseenter', function () {
    const top = getRandomInt(-100, 100)+"px";
    const left = getRandomInt(0, 350)+"px";

    this.style.top = top;
    this.style.left = left;
});


yesButton.addEventListener('click', function () {
    answerBox.textContent = 'I knew';
});
