const NumeroKm = parseInt(prompt("Quanti Km vuoi percorrere?"));
const AnniPass = parseInt(prompt("Quanti hanni hai?"));
const PrezzoBiglietto = NumeroKm * 0.276;

function arrotondaInEccesso(prezzo) {
    return Math.ceil(prezzo * 100) / 100;
}

let PrezzoScontato;
if (AnniPass < 18) {
    PrezzoScontato =PrezzoBiglietto - ((PrezzoBiglietto/100) * 21);
    PrezzoScontato = arrotondaInEccesso(PrezzoScontato);
    console.log(PrezzoScontato);
} else if (AnniPass >= 65) {
    PrezzoScontato =PrezzoBiglietto - ((PrezzoBiglietto/100) * 42);
    PrezzoScontato = arrotondaInEccesso(PrezzoScontato);
    console.log(PrezzoScontato);
} else {
    console.log(PrezzoBiglietto);
}
