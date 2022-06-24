/* Crea (inventa) una lista di inidirizzi mail autorizzati.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è); */




//creare una lista di email 
//fare prompt in cui chiedere la tua email 
//fare un loop per verificare se la tua email corrisponde ad uno degli elementi dell'array
// if else (se è presente stampo la tua mail è corretta se non ci sta stampo la tua mail è errata)

const email = (prompt("Inserisci la tua email"))

const emailList = ['aldo@email.it', 'carlo@email.it', 'elena@email.it', 'federico@email.it', 'mario@email.it', 'mimmo@email.it']


for (let i = 0; i < emailList.lenght; i++) {
    if (email == emailList[i] ) {console.log("benvenuto")}
    else { console.log("spiacenti")}

    
}

