// Lavoriamo con i moduli commonjs esportando e importando valori e funzioni.
// Segui questi tre step creando i rispettivi files:
// 1 - names.js
// 1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
// 2. Esporta la funzione dal file.

function name (firstName, lastName) {
    return {
        'firstName': firstName,
        'lastName' : lastName
    }
}

module.exports = name;
