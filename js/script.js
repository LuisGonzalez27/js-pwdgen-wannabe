const nomeUtente = prompt('Hey, qual è il tuo nome ?');
const cognomeUtente = prompt('è il tuo cognome ?');
const coloreUtente = prompt('Qual è il tuo colore preferito ?');
const etaUtente = prompt('Quanti anni hai ?');

const descrizione = ` 
Benvenuto, tu sei ${nomeUtente} ${cognomeUtente}.
Il tuo colore preferito è il ${coloreUtente},
la tua età  è ${etaUtente}.
`;

const infoUtente = document.getElementById('mioId');

infoUtente.innerHTML = descrizione;


const passwordGener = "La tua password è : " + nomeUtente + cognomeUtente + coloreUtente + etaUtente;

const passwordUtente = document.getElementById('myPassword');

passwordUtente.innerHTML = passwordGener;