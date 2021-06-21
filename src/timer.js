const timer = document.querySelector("#timerTime");
const date = new Date(0);

const counter = () => {
    timer.innerHTML = date.toISOString().substr(14, 5);
    date.setSeconds(date.getSeconds() + 1);
}


//let sec = 0;
//let min = 0;
//const fun = () => {
//    m = "";
//    if (min < 10) {
//        m = "0";
//    }
//    s = "";
//    if (sec < 10) {
//        s = "0";
//    }
//    timer.innerHTML = `${m}${min}:${s}${sec}`;
//    sec = sec + 1;
//    if (sec > 59) {
//        sec = 0;
//        min = min + 1;
//    }
//    if (min > 59) {
//        min = 0;
//    }
//}
