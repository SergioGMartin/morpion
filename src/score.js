const scorePlayer = document.querySelector("#scorePlayer");
const scoreCpu = document.querySelector("#scoreCPU");

const incrementPlayer = (sPlayer) => {
    scorePlayer.innerText = `${sPlayer}`;
}
const incrementCpu = (sCpu) => {
    scoreCpu.innerText = `${sCpu}`;
}
