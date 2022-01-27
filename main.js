let numeroKm = parseInt(prompt('Quanti chilometri devi fare?'));
console.log(numeroKm);
document.getElementById('Numero-Km').innerHTML = "Quanti chilometri devi fare?";
document.getElementById('Risposta-Km').innerHTML = numeroKm;

let eta= parseInt(prompt('Quanti anni hai?'));
console.log(eta);
document.getElementById('Numero-eta').innerHTML = "Quanti anni hai?";
document.getElementById('Risposta-eta').innerHTML = eta;

let costoAlkm= 0.21;
console.log(costoAlkm);

let euro = "Euro";

let text = "Il prezzo del biglietto è "


let prezzoBigliettoSenzaSconto = costoAlkm * numeroKm  .toFixed(2);
console.log(prezzoBigliettoSenzaSconto);


if (numeroKm < 1) {
    alert('Devi inserire una distanza maggiore di un 1km');
}

if (eta <= 18){
    
    document.getElementById('Prezzo-biglietto').innerHTML = text + (( prezzoBigliettoSenzaSconto * 80) / 100) .toFixed(2) + euro;

} else if (eta >= 65){

    document.getElementById('Prezzo-biglietto').innerHTML = text + (( prezzoBigliettoSenzaSconto * 60) / 100) .toFixed(2) + euro;

} else {
    document.getElementById('Prezzo-biglietto').innerHTML = text + prezzoBigliettoSenzaSconto + euro;
}


