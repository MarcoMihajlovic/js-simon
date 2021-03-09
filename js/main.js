var array = [];
var arrayUtente = [];
var arrayEsatto = [];
var controllo = false;
var risposta = true;
var contatore = 0;

/* while (!risposta){ */
    array = [];

    for (var i = 0; i < 5; i++) {
        setArray();
    }
    
    alert("Ricordati questi numeri " + array);
    console.log("debug");
    
    setTimeout(myFunction, 30000);

    /* controllo = false;
    while (!controllo) {
        var domanda = prompt("Vuoi fare un'altra partita? Y/N");
        domanda = domanda.toLowerCase();
        if (domanda == "y" || domanda == "n") {
            controllo = true;
        } else if (domanda == null) {
            alert("Devi inserire una risposta corretta");
        } else {
            alert("Devi inserire una risposta corretta");
        }
    }

    if (domanda == "n") {
        risposta = false;
    } */

/* } */

function setArray() {
   
    do {
        var number = Math.floor(Math.random()*100 + 1);
        number = parseInt(number);
    } while ((array.includes(number)));

    array.push(number);
}

function myFunction() {
    for (var i = 0; i < 5; i++) {
        controllo = false;
        while (!controllo) {
            var numero = prompt("inserisci un numero che ti ricordi");
            numero = parseInt(numero);

            if (arrayUtente.includes(numero)) {
                alert("Hai già inserito questo numero");
            } else if (isNaN(numero)) {
                alert("Devi inserire un numero");
            } else if (numero < 0 || numero > 100){
                alert("Devi inserire un numero tra 1 e 100");
            } else {
                arrayUtente.push(numero);
                controllo = true;
            }
        }

        if (array.includes(numero)) {
            contatore ++;
            arrayEsatto.push(numero);
        }
    }

    if (contatore > 0) {
        alert("Hai fatto " + contatore + " punti poichè hai inserito correttamente " + arrayEsatto + " da quelli assegnati: " + array);
    } else {
        alert("Che peccato hai fatto " + contatore + " perchè non ti sei ricordato nessuno di questi numeri " + array);
    }

    controllo = false;
    while (!controllo) {
        var domanda = prompt("Vuoi fare un'altra partita? Y/N");
        domanda = domanda.toLowerCase();
        if (domanda == "y" || domanda == "n") {
            controllo = true;
        } else if (domanda == null) {
            alert("Devi inserire una risposta corretta");
        } else {
            alert("Devi inserire una risposta corretta");
        }
    }

    if (domanda == "y") {
        location.reload();
    } else {
        alert("Grazie per aver giocato");
    }

}