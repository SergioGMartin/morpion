const cells = document.querySelectorAll(".case");
const myModal = new bootstrap.Modal(newModal);
const btnRedemarrer = document.querySelector("#redemarrer");
const winComb = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];
const player = "circle";
const cpu = "cross";
let cellChoisi = new Array(9);
let estrategia = new Array(3);
let cont = 0;
let sPlayer = 0;
let sCpu = 0;
let selec = 0;
let timeoutId;

const callback = (e) => {
    val = e.target;
    if (mark(val, player)) {      
        gStop();
        timeoutId = setTimeout(juegaCPU, 2000);
    }
}

const juegaCPU = () => {
    let jugado = false;
    while (false == jugado  && 9 > cont && 0 < cont) {
        if (2 > cont) {
            jugado = mark(cells[4],cpu);
            if (false == jugado) {
                let x = Math.round(Math.random() * 3);
                if (0 == x) {
                    jugado = mark(cells[0], cpu);
                }
                if (1 == x) {
                    jugado = mark(cells[2], cpu);
                }
                if (2 == x) {
                    jugado = mark(cells[6], cpu);
                }
                if (3 == x) {
                    jugado = mark(cells[8], cpu);
                }
            }
        } else {
            checkWin(cpu);
            if (9 > selec && false == jugado) {
                jugado = mark(cells[selec], cpu);
            }
            checkWin(player);
            if (9 > selec && false == jugado) {
                jugado = mark(cells[selec], cpu);
            }
            if (false == jugado) {
                jugado = mark(cells[Math.round(Math.random() * 8)], cpu);
            }
        }
    }
    clearTimeout(timeoutId);
    return jugado;
}

const mark = (pos, val) => {
    let hecho = false;
    if (!(pos.classList.contains(player)) && !(pos.classList.contains(cpu))) {
        pos.classList.add(val);
        const index = parseInt(pos.id.substr(4));
        cellChoisi[index] = val;
        hecho = true;
        cont = cont + 1;
        gStart();
    }
    if (5 < cont) {
        if (checkWin(player)) {
            sPlayer = sPlayer + 1;
            stop();
        }
        if (checkWin(cpu)) {
            sCpu = sCpu + 1;
            stop();
        }
    }
    if (9 == cont) {
        stop();
    }
    return hecho;
}

const checkWin = (x) => {
    win = false;
    selec = 9;
    for (i = 0; i < 8; i++) {
        num = 0;
        for (j = 0; j < 3; j++) {
            if (x == cellChoisi[winComb[i][j]]) {
                num = num + 1;
                estrategia[j] = 1;
            } else {
                estrategia[j] = 0;
            }
        }
        if (2 == num) {
            for (y = 0; y < 3; y++) {
                if (0 == estrategia[y] && !cellChoisi[winComb[i][y]]) {
                    selec = winComb[i][y];
                }
            }   
        }
        if (3 == num) {
            win = true;
            break
        }
    }
    return (win);
}

const stop = () => {
    gStop();
    toggle(btnPause, btnStart);
    clearInterval(myCounter);
    clearTimeout(timeoutId);
    cont = 0;
    selec = 0;
    estrategia.splice(0);
    incrementPlayer(sPlayer);
    incrementCpu(sCpu);
    myModal.show();
};

const gIni = () => {
    cellChoisi.splice(0);
    cells.forEach((cell) => {
        cell.classList.remove("circle","cross");
    })
    gStart();
};

const gStop = () => {
    cells.forEach((cell) => {
        cell.removeEventListener("click", callback);
    })
};

const gStart = () => {
    cells.forEach((cell) => {
        cell.addEventListener("click", callback);
    })
};

const reiniciar = () => {
    sPlayer = 0;
    sCpu = 0;
    incrementPlayer(sPlayer);
    incrementCpu(sCpu);
    timer.innerHTML = `00:00`;
    cells.forEach((cell) => {
        cell.classList.remove("circle", "cross");
    })
}

btnStart.addEventListener("click", gIni);
btnPause.addEventListener("click", gStop);
btnResume.addEventListener("click", gStart);
btnRedemarrer.addEventListener("click", reiniciar);
