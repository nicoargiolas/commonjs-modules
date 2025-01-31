// 3 - people.js
// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.

const name = require("./names.js");
const hobbies = require("./hobbies.js");

function people() {
    let fullName = name('Nicola', 'Argiolas');
    let hobbies2 = hobbies('Tennis', 'Musica', 'Birra');

    return {
        'fullName': `${fullName.firstName} ${fullName.lastName}`,
        'hobbies': `${hobbies2[0]}, ${hobbies2[1]}, ${hobbies2[2]}`
    }
}

console.log(people());
