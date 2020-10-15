//chiedo all'utente 5 numeri

// var numero1 = prompt('inserisci il primo numero');
// var numero2 = prompt('inserisci il secondo numero');
// var numero3 = prompt('inserisci il terzo numero');
// var numero4 = prompt('inserisci il quarto numero');
// var numero5 = prompt('inserisci il quinto numero');
//
// console.log(numero1);
// console.log(numero2);
// console.log(numero3);
// console.log(numero4);
// console.log(numero5);
//
// var somma = parseInt(numero1) + parseInt(numero2) + parseInt(numero3) + parseInt(numero4) + parseInt(numero5);
//
// console.log(somma);

var somma = 0;

for (var i = 0; i < 5; i++) {
    var numero = prompt('inserisci un numero');
    somma = somma + parseInt(numero);
}

console.log(somma);
