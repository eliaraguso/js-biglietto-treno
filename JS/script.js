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
    alert ("Il prezzo del tuo biglietto è di " + prezzoBigliettoU18 + " euro");
} else if (etaPasseggero > 65) {
    alert ("Il prezzo del tuo biglietto è di " + prezzoBigliettoO65 + " euro");
} else {
    alert ("Il prezzo del tuo biglietto è di " + prezzoBiglietto + " euro");
}

