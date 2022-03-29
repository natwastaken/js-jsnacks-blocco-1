//Inserire 2 parole, stabilire la più lunga


let FristWord = prompt(`inserisci la prima parola`);
let secondWord = prompt(`inserisci la seconda parola`);

let lengthFirstWord = FristWord.length;
let lunghezzaSecondaParola = secondWord.length;

let risultato = document.getElementById(`result`);



if (lengthFirstWord > lunghezzaSecondaParola) {

    console.log(FristWord + ' ' + secondWord);
    risultato.innerHTML = `${FristWord} e ${secondWord}`;

} else if (lengthFirstWord < lunghezzaSecondaParola) {

    console.log(secondWord + ' ' + FristWord);
    risultato.innerHTML = `${secondWord} e ${FristWord}`;    

} else {

    console.log(`sono lunghi uguali`);
    risultato.innerHTML = `${FristWord} e ${secondWord} sono lunghe uguali`;

}