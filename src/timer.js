let btnStart;
let btnPause;
let btnResume;
let timer;
let myCounter;
let date;

const initTimer = () => {

    btnStart = $("#timerStart");
    btnPause = $("#timerPause");
    btnResume = $("#timerResume");
    timer= $("#timerTime");
    date= new Date(0);

    const reloj = {};

    reloj.counter = () => {
        timer.text(date.toISOString().substr(14, 5));
        date.setSeconds(date.getSeconds() + 1);
    }

    reloj.toggle = (disapear, appear) => {
        disapear.removeClass("d-block");
        disapear.addClass("d-none");
        appear.removeClass("d-none");
        appear.addClass("d-block");
    };

    reloj.btnSt = () => {
        date.setTime(0);
        reloj.counter();
        reloj.toggle(btnStart, btnPause);
        myCounter = setInterval(reloj.counter, 1000);
    };

    reloj.btnPa = () => {
        reloj.toggle(btnPause, btnResume);
        clearInterval(myCounter);
    };

    reloj.btnRe = () => {
        reloj.toggle(btnResume, btnPause);
        myCounter = setInterval(reloj.counter, 1000);
    };

    btnStart.on("click", reloj.btnSt);
    btnPause.on("click", reloj.btnPa);
    btnResume.on("click", reloj.btnRe);
    return reloj;
}