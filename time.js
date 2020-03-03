const timeContainer = document.querySelector('.time-container');
const clock = timeContainer.querySelector('h1');
const intro = timeContainer.querySelector('p');

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clock.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();

    const today = new Date();
    let birthYear = 1993;
    let birthMonth = 1;
    let birthDay = 14;

    const dateObj = new Date(birthYear, birthMonth, birthDay);

    const lifeTime = parseInt((today.getTime() - dateObj.getTime()) / 1000 / 60 / 60 / 24);
    intro.innerText = `내가 살아온 일 수 : ${lifeTime}`;

    setInterval(getTime, 1000);
}

init();