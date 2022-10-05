const nomeUtente = prompt('Hey, qual è il tuo nome ?');
const cognomeUtente = prompt('è il tuo cognome ?');
const coloreUtente = prompt('Qual è il tuo colore preferito ?');
const etaUtente = prompt('Quanti anni hai ?');

function validateUserName(nomeUtente){
    var usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(nomeUtente);
  }

const descrizione = ` 
Benvenuto, tu sei ${nomeUtente} ${cognomeUtente}.
Il tuo colore preferito è il ${coloreUtente},
la tua età  è ${etaUtente}.
`;

const infoUtente = document.getElementById('mioId');

infoUtente.innerHTML = descrizione;

