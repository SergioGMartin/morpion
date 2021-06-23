let scorePlayer;
let scoreCpu;

const initScore = () => {
    
    const spinner = $(`<div class="spinner-border text-success" role="status">
    <span class="sr-only"></span></div>`);
    $("#spin").append(spinner);

    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.jsonbin.io/b/60d32b9b5ed58625fd177079");
    xhr.setRequestHeader("secret-key","$2b$10$DrQLcmDPnd4qPExl/dCx8ea5xJ0b/IQDMinWHnIihmW7NNi9IPbOy");
    xhr.onload = () => {
        let data = JSON.parse(xhr.response);
        spinner.remove();
        score.incrementPlayer(data.scorePlayer);
        score.incrementCpu(data.scoreCPU);
    };
    xhr.send();

    scorePlayer = $("#scorePlayer");
    scoreCpu = $("#scoreCPU");

    const score = {};

    score.incrementPlayer = (sPlayer) => {
        scorePlayer.text(sPlayer);
    }
    score.incrementCpu = (sCpu) => {
        scoreCpu.text(sCpu);
    }

    return score;
}