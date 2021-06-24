let scorePlayer;
let scoreCpu;
let spinner;

const initScore = () => {

    scorePlayer = $("#scorePlayer");
    scoreCpu = $("#scoreCPU");
    const score = {};
    
    score.Get = () => {
        score.createSpinner();
        const xhr = new XMLHttpRequest();
        xhr.open("GET","https://api.jsonbin.io/b/60d32b9b5ed58625fd177079");
        xhr.setRequestHeader("secret-key","$2b$10$DrQLcmDPnd4qPExl/dCx8ea5xJ0b/IQDMinWHnIihmW7NNi9IPbOy");
        xhr.onload = () => {
            let data = JSON.parse(xhr.response);
            score.incrementPlayer(data.scorePlayer);
            score.incrementCpu(data.scoreCPU);
            score.removeSpinner();
        };
        xhr.send();
    }

    score.createSpinner = () => {
        spinner = $(`<div class="spinner-border text-success" role="status">
                <span class="sr-only"></span></div>`);
        $("#spin").append(spinner);
    }

    score.removeSpinner = () => {
        spinner.remove();
    }

    score.Get();

    score.incrementPlayer = (sPlayer) => {
        scorePlayer.text(sPlayer);
    }
    score.incrementCpu = (sCpu) => {
        scoreCpu.text(sCpu);
    }

    return score;
}