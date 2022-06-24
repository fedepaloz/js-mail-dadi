/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

const human = Math.floor((Math.random() * 6) + 1)
console.log("hai lanciato il numero " + human)

const computer = Math.floor((Math.random() * 6) + 1)
console.log("il computer ha lanciato il numero  " + computer)

const dice = (prompt("lancia il dado"
))
 

if (human > computer)
{console.log("hai vinto tu")}

else {console.log("ha vinto il pc")}