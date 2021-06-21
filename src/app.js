const btnStart = document.querySelector("#timerStart");
const btnPause = document.querySelector("#timerPause");
const btnResume = document.querySelector("#timerResume");
let myCounter;

const toggle = (disapear, appear) => {
    disapear.classList.remove("d-block");
    disapear.classList.add("d-none");
    appear.classList.remove("d-none");
    appear.classList.add("d-block");
};

const btnSt = () => {
    date.setTime(0);
    counter();
    toggle(btnStart, btnPause);
    myCounter = setInterval(counter, 1000);
};

const btnPa = () => {
    toggle(btnPause, btnResume);
    clearInterval(myCounter);
};
const btnRe = () => {
    toggle(btnResume, btnPause);
    myCounter = setInterval(counter, 1000);
};

btnStart.addEventListener("click", btnSt);
btnPause.addEventListener("click", btnPa);
btnResume.addEventListener("click", btnRe);


console.log($);