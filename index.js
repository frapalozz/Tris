let partita = true;
let attuale = 0;
let stato = 0;
let immagini = ['./src/Frame 1.jpg', './src/Frame 2.jpg'];
let counter = 0;
let turno = document.getElementById('type');
turno.src = immagini[stato];

let punteggioX = 0;
let spanX = document.getElementById('punteggio0');
let punteggioO = 0;
let spanO = document.getElementById('punteggio1');

let griglia = [null, null, null, null, null, null, null, null, null];

let posizioni = [];
for(let i = 0; i < 9; i++) {
    let pos = "" + (i+1);
    posizioni.push(document.getElementById(pos));
}

for(let i = 0; i < posizioni.length; i++) {
    posizioni[i].onclick = function (e) {
        if(griglia[i] === null && partita === true) {
            const index = i;
            let immagine = document.createElement("img");
            immagine.setAttribute('id', 'img' + i);
            immagine.src = immagini[stato];
            griglia[i] = stato;

            if(stato == 1) {
                stato = 0;
                turno.src = immagini[stato];
            }
            else {
                stato = 1;
                turno.src = immagini[stato]
            }

            posizioni[i].appendChild(immagine);
            counter++;
            console.log(griglia);
            checkWin();
        }
    }
}

let finePartita = function(vincitore) {
    
    turno.src = immagini[vincitore]
    if(vincitore == 0) {
            punteggioX++; 
            spanX.textContent = "" + punteggioX;
        }   
        else {
            punteggioO++;
            spanO.textContent = "" + punteggioO;
        }

    console.log("X: " + punteggioX +"   O: " + punteggioO);
    document.querySelector('h1').textContent = "Ha vinto 🥳";
    document.querySelector('button').style.display = "block";
    partita = false
}
let pareggio = function(vincitore) {
    turno.src = "";
    document.querySelector('h1').textContent = "Pareggio 🤕";
    document.querySelector('button').style.display = "block";
    partita = false;
}




let checkWin = function() {
    if(griglia[0] == 0 && griglia[1] == 0 && griglia[2] == 0){
        finePartita(0);
    }
    if(griglia[3] == 0 && griglia[4] == 0 && griglia[5] == 0){
        finePartita(0);
    }
    if(griglia[6] == 0 && griglia[7] == 0 && griglia[8] == 0){
        finePartita(0); 
    }
    if(griglia[0] == 0 && griglia[3] == 0 && griglia[6] == 0){
        finePartita(0);
    }
    if(griglia[1] == 0 && griglia[4] == 0 && griglia[7] == 0){
        finePartita(0);
    }
    if(griglia[2] == 0 && griglia[5] == 0 && griglia[8] == 0){
        finePartita(0);
    }
    if(griglia[0] == 0 && griglia[4] == 0 && griglia[8] == 0){
        finePartita(0);
    }
    if(griglia[2] == 0 && griglia[4] == 0 && griglia[6] == 0){
        finePartita(0);
    }
    
    if(griglia[0] == 1 && griglia[1] == 1 && griglia[2] == 1){
        finePartita(1);
    }
    if(griglia[3] == 1 && griglia[4] == 1 && griglia[5] == 1){
        finePartita(1);
    }
    if(griglia[6] == 1 && griglia[7] == 1 && griglia[8] == 1){
        finePartita(1);
    }
    if(griglia[0] == 1 && griglia[3] == 1 && griglia[6] == 1){
        finePartita(1);
    }
    if(griglia[1] == 1 && griglia[4] == 1 && griglia[7] == 1){
        finePartita(1);
    }
    if(griglia[2] == 1 && griglia[5] == 1 && griglia[8] == 1){
        finePartita(1);
    }
    if(griglia[0] == 1 && griglia[4] == 1 && griglia[8] == 1){
        finePartita(1);
    }
    if(griglia[2] == 1 && griglia[4] == 1 && griglia[6] == 1){
        finePartita(1);
    }
    if(counter == 9) {
        pareggio(0);
    }
}


document.querySelector('button').onclick = function(e) {
    document.querySelector('h1').textContent = "";
    if(attuale != 1) attuale++; else attuale = 0;
        stato = attuale;
        turno.src = immagini[stato];
    for(let i = 0; i < griglia.length; i++) {
        if(griglia[i] != null) {
            griglia[i] = null;
            document.getElementById('img' + i).remove();
        }
        partita = true;
    }
    counter = 0;
}
