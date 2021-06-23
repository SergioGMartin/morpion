let scorePlayer;
let scoreCpu;

const initScore = () => {
    
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
