// inserire 10 volte un numero con prompt
// stampare la somma di tutti i numeri

let array = [];
let sum = 0;

for ( let i = 0; i < 10; i++) {

    let inputNumero = parseInt(prompt(`inserisci un numero`));
    console.log(inputNumero);

    if (isNaN(inputNumero)) {

        alert(`ricarica la pagina e inserisci solo numeri`);

    } else {

        array.push(inputNumero);
        
        sum += inputNumero;

    }

}

console.log(array);
document.getElementById(`list`).innerHTML = `i numeri inseriti sono: ${array} !`;

console.log(sum);
document.getElementById(`result`).innerHTML = `la somma di tutti i numeri è ${sum}`;