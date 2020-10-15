//creo un array vuoto

let numeri_dispari = [];

//chiedi per 6 volte all'utente di inserire un numero

for (var i = 0; i < 6; i++) {
    var numero = parseInt(prompt('inserisci un numero'));
    if (numero % 2 != 0) {
        numeri_dispari.push(numero)
        console.log(numero);
    }
}
