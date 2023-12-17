// PARTITA
let partita = true;
let player = 0; // PLAYER INIZIALE X = 0, O = 1
let mosse = 0; // MOSSE TOTALI, MAX = 9

// TURNO GIOCATORE, X = 0, O = 1
let giocatoreAttuale = 0;
let immaginiGiocatore = ['./src/Frame 1.jpg', './src/Frame 2.jpg'];
let turno = document.getElementById('type');
turno.src = immaginiGiocatore[giocatoreAttuale];

// PUNTEGGIO GIOCATORI
let punteggioX = 0; // GIOCATORE X
let textX = document.getElementById('punteggio0');
let punteggioO = 0; // GIOCATORE O
let textO = document.getElementById('punteggio1');

// GRIGLIA GIOCO
let griglia = [null, null, null, null, null, null, null, null, null];

// INIZIALIZZAZIONE GRIGLIA
let posizioni = [];
for(let i = 0; i < 9; i++) {
    posizioni.push(document.getElementById("" + (i+1)));
}

// EVENTI GRIGLIA
for(let i = 0; i < posizioni.length; i++) {
    posizioni[i].onclick = function () {
        if(griglia[i] === null && partita === true) {
            let immagine = document.createElement("img");
            immagine.setAttribute('id', 'img' + i);
            immagine.src = immaginiGiocatore[giocatoreAttuale];
            griglia[i] = giocatoreAttuale;

            // IMMAGINE TURNO GIOCATORE
            if(giocatoreAttuale == 1) giocatoreAttuale--;
            else giocatoreAttuale++;
            turno.src = immaginiGiocatore[giocatoreAttuale];

            posizioni[i].appendChild(immagine);
            mosse++;
            console.log(griglia);
            checkWin();
        }
    }
}

let finePartita = function(vincitore) {
    
    turno.src = immaginiGiocatore[vincitore]
    if(vincitore == 0) {
        punteggioX++; 
        textX.textContent = "" + punteggioX;
    }   
    else {
        punteggioO++;
        textO.textContent = "" + punteggioO;
    }

    document.querySelector('h1').textContent = "Ha vinto 🥳";
    partita = false
}
let pareggio = function() {
    turno.src = "";
    document.querySelector('h1').textContent = "Pareggio 🤕";
    partita = false;
}




let checkWin = function() {
    for(let i = 0; i < 7; i+=3) {
        for(let j = 0; j < 2; j++) {
            if(griglia[i] == j && griglia[i+1] == j && griglia[i+2] == j){
                finePartita(j);
                break;
            }
        }
    }

    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 2; j++) {
            if(griglia[i] == j && griglia[i+3] == j && griglia[i+6] == j){
            finePartita(j);
            break;
            }
        }
    }

    for(let i = 0; i < 3; i+=2) {
        for(let j = 0; j < 2; j++) {
            if(griglia[i] == j && griglia[4] == j && griglia[8-i] == j){
            finePartita(j);
            break;
            }
        }
    }

    if(mosse == 9) {
        pareggio(0);
    }
}


document.querySelector('button').onclick = function() {
    document.querySelector('h1').textContent = "";

    // GIOCATORE INIZIALE
    if(player == 0) player++; else player--;
    giocatoreAttuale = player;
    turno.src = immaginiGiocatore[giocatoreAttuale];

    // RESET GRIGLIA
    for(let i = 0; i < griglia.length; i++) {
        if(griglia[i] != null) {
            griglia[i] = null;
            document.getElementById('img' + i).remove();
        }
        partita = true;
    }
    mosse = 0;
}
