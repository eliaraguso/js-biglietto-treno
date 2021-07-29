// ) Definire il prezzo per Km del biglietto
var prezzoKm = 0.21;

// ) Chiedere all'utente il numero di Km che percorrerà il passeggero
var kmViaggio = prompt("Inserisci il chilometraggio del viaggio");

// ) Chiedere all'utente l'età del passeggero
var etaPasseggero = prompt("Inserisci l'età del passeggero");

// ) Calcolare il prezzo del biglietto intero
var prezzoBiglietto = (kmViaggio * prezzoKm);

// ) Calcolare il prezzo del biglietto Under18
var prezzoBigliettoU18 = ((prezzoBiglietto) - ((prezzoBiglietto) * 0.2))

// ) Calcolare il prezzo del biglietto Under18
var prezzoBigliettoO65 = ((prezzoBiglietto) - ((prezzoBiglietto) * 0.4))

// ) Restituire il prezzo del biglietto
if (etaPasseggero < 18) {
    alert ("Hey tu!!! Si proprio tu!!!! Hai meno di 18 anni e ti spetta un bello sconto del 20% sul totale!!!! Il prezzo del tuo biglietto è di " + prezzoBigliettoU18.toFixed(2) + " euro");
} else if (etaPasseggero > 65) {
    alert ("Hey tu!!! Si proprio tu!!!! Hai più di 65 anni e ti spetta un bello sconto del 40% sul totale!!!! Il prezzo del tuo biglietto è di " + prezzoBigliettoO65.toFixed(2) + " euro");
} else {
    alert ("Il prezzo del tuo biglietto è di " + prezzoBiglietto.toFixed(2) + " euro");
}

