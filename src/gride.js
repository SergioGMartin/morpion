let cells;
let myModal;
let winComb;
let player;
let cpu;
let cellChoisi;
let estrategia;
let cont;
let sPlayer;
let sCpu;
let selec;
let timeoutId;
let msg;
let btnRedemarrer;
let modalTitle;

const initGride = () => {

    const reloj = initTimer();
    const score = initScore();
    myModal = new bootstrap.Modal(newModal);
    modalTitle = $('.modal-title');
    btnRedemarrer = $("#redemarrer");
    cells = $(".case");
    winComb = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
    ];
    player = "circle";
    cpu = "cross";
    cellChoisi = new Array(9);
    estrategia = new Array(3);
    cont = 0;
    sPlayer = 0;
    sCpu = 0;
    selec = 0;

    const callback = (e) => {
        val = e.target;
        if (mark(val, player)) {
            gStop();
            timeoutId = setTimeout(juegaCPU, 2000);
        }
    }

    const juegaCPU = () => {
        let jugado = false;
        while (false == jugado && 9 > cont && 0 < cont) {
            if (3 > cont) {
                jugado = mark(cells[4], cpu);
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
    }

    const mark = (pos, val) => {
        let hecho = false;
        
        if (!$(pos).hasClass(player) && !$(pos).hasClass(cpu)) {
            $(pos).addClass(val);
            const index = parseInt($(pos).attr("id").substr(4));
            cellChoisi[index] = val;
            hecho = true;
            cont = cont + 1;
            gStart();
        }
        if (5 < cont) {
            if (checkWin(player)) {
                sPlayer = sPlayer + 1;
                msg="VOUS AVEZ GAGNEZ";
                stop();
            }
            if (checkWin(cpu)) {
                sCpu = sCpu + 1;
                msg="VOUS AVEZ PERDU";
                stop();
            }
        }
        if (9 == cont) {
            msg="MATCH NULL";
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
        reloj.toggle(btnPause, btnStart);
        clearInterval(myCounter);
        clearTimeout(timeoutId);
        cont = 0;
        selec = 0;
        estrategia.splice(0);
        score.incrementPlayer(sPlayer);
        score.incrementCpu(sCpu);     
        modalTitle.text(msg);
        myModal.show();
    };
    
    const reiniciar = () => {
        sPlayer=0;
        sCpu=0;
        score.incrementPlayer(sPlayer);
        score.incrementCpu(sCpu);
        timer.text (`00:00`);
        cells.each((index, cell) => {
            $(cell).removeClass(["circle", "cross"]);
        })
    }

    const gIni = () => {
        cellChoisi.splice(0);
        cells.each((index, cell) => {
            $(cell).removeClass(["circle", "cross"]);
        })
        gStart();
    };

    const gStop = () => {
        cells.each((index, cell) => {
            $(cell).off("click", callback);
        })
    };

    const gStart = () => {
        cells.each((index, cell) => {
            $(cell).on("click", callback);
        });
    };

    btnStart.on("click", gIni);
    btnPause.on("click", gStop);
    btnResume.on("click", gStart);
    btnRedemarrer.on("click", reiniciar);
}