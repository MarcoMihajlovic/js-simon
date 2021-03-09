var array = [];
var arrayUtente = [];
var arrayEsatto = [];
var controllo = false;
var contatore = 0;

for (var i = 0; i < 5; i++) {
    setArray();
}

alert("Ricordati questi numeri " + array);

setTimeout(myFunction, 1000);

function setArray() {
   
    do {
        var number = Math.floor(Math.random()*100 + 1);
    } while ((array.includes(number)));

    array.push(number);
}

function myFunction() {
    for (var i = 0; i < 5; i++) {
        controllo = false;
        while (!controllo) {
            var numero = prompt("inserisci un numero che ti ricordi");

            if (arrayUtente.includes(numero)) {
                alert("Hai già inserito questo numero");
            } else {
                arrayUtente.push(numero);
                controllo = true;
            }
        }

        /* if (array.includes(numero)) {
            contatore ++;
            arrayEsatto.push(numero);
        } */
    }

    for (var i = 0; i < arrayUtente.length; i++){

        numero = arrayUtente[i];
        
        if (array.includes(numero)) {
            contatore ++;
            arrayEsatto.push(numero);
        }
    }

    if (contatore > 0) {
        alert("Hai fatto " + contatore + " poichè hai inserito correttamente " + arrayEsatto + " da quelli assegnati: " + array);
    } else {
        alert("Che peccato hai fatto " + contatore + " perchè non ti sei ricordato nessuno di questi numeri " + array);
    }


}