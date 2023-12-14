let partita = true;
let stato = 0;
let immagini = ['./src/Frame 1.jpg', './src/Frame 2.jpg'];
let counter = 0;
let turno = document.getElementById('type');
turno.src = immagini[stato];

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
    document.querySelector('h1').textContent = "Ha vinto";
    document.querySelector('button').style.display = "block";
    partita = false
}
let pareggio = function(vincitore) {
    turno.src = "";
    document.querySelector('h1').textContent = "Pareggio";
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
    location.reload();
}
