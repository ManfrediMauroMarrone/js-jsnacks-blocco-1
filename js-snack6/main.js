// stampa le potenze di 2 senza superare il numero 1000

var numero = 2

var risultato = []

var ultimaPotenza = 0;

var limite = 1000

for (var i = 0; ultimaPotenza < limite; i++){
    var potenza = Math.pow(numero, i);
    ultimaPotenza = potenza;
    if (ultimaPotenza < limite) {
      risultato.push(potenza);

    }
}

console.log(risultato);
