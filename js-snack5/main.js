var listaNumeri = [2, 3, 4, 5, 6, 7, 8, 9];
//chiedi all'utente di quanti numeri fare il cubo

var numeroUtente = prompt('quanti numeri elevo al cubo?')

for (var i = 0; i < numeroUtente; i++) {
    var numero = listaNumeri[i];
    var cubo = numero * numero * numero;
    var numeriALcubo = [cubo];
    console.log(numeriALcubo);
}

var potenza = Math.pow(2, 3);

console.log(potenza);
