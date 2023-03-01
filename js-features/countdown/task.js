let today = new Date();
let timer = document.getElementById('timer');
let timer2 = document.getElementById('timer2');

let timerFormat = () => {
    today.setHours(0, 0, timer.textContent);
    timer2.textContent = today.toLocaleTimeString();
};

timerFormat();

let timerID = setInterval(function () {

    timer.textContent -= 1;

    timerFormat();

    if (timer.textContent == 0) {
        alert('Вы победили в конкурсе! Заберите Ваш ПРИЗ!');
        clearInterval(timerID);
        window.location = 'https://github.com/netology-code/bhj-homeworks/raw/master/assets/fonts/Golos-Text/Golos-Text_Regular.woff'
    };

}, 1000);
