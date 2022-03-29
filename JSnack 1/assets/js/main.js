// inserire due numeri con prompt
// stampare il maggiore

let FirstNumber = parseInt(prompt(`inserisci il primo numero`));
let secondNumber = parseInt(prompt(`inserisci il secondo numero`));

let risultato = document.getElementById(`result`);

if (isNaN(FirstNumber||secondNumber)) {

    alert(`Inserire il numero per cortesia`);

} else {

    if (FirstNumber > secondNumber) {

        console.log(FirstNumber);
        risultato.innerHTML = `${FirstNumber} è il maggiore`;

    } else if (FirstNumber < secondNumber) {

        console.log(secondNumber);
        risultato.innerHTML = `${secondNumber} è il maggiore`;

    } else {

        console.log(`pari`);
        risultato.innerHTML = `Sono uguali`;

    }

}
