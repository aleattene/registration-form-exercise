// Funzione di verifica della CONSISTENZA dei VALORI presenti nei campi del FORM
function controllo() {
    /* Definizione di una Variabile "ctrlEmail", da utilizzarsi per il successivo ulteriore CONTROLLO
          circa la correttezza nella forma, dell'email immessa dall'utente all'interno del form.
          Si utlizza a tale scopo una ESPRESSIONE REGOLARE dichiarata come di seguito. 
          Il confronto viene poi effettuato tramite il metodo test(), il quale restituisce TRUE
          se e solo se la mail immessa dall'utente si presenta nell forma consentita, ovvero:
              1) prima parte antecedente la @ composta da caratteri, numeri ed alcuni caratteri speciali
              2) seconda parte successiva alla @ ed antecedente "un punto", composta da caratteri, numeri 
                                                                          ed alcuni caratteri speciali
              3) parte conclusiva, successiva al "punto", composta da soli caratteri, in un numero variabile
                                          da 2 a 6 (per domini di primo livello - come da fonte wikipedia) */

    var ctrlEmail = new RegExp(
        /([a-zA-Z0-9_.-])+@(([a-zA-Z0-9_.-])+\.)+([a-z]{2,6})$/
    );

    /* Verifica che i campi del FORM non siano vuoti prima di essere "inviati" per la "Registrazione Utente"
          (simulata nella circostanza specifica e che in ambiente diverso da quello didattico, 
              avverrà tramite interazione con uno specifico Server Web) */

    if (document.getElementById("nome").value === "") {
        // verifica che campo NOME non sia VUOTO
        alert("Attenzione!!! Inserire NOME e Riprovare"); // messaggio di avvertimento campo vuoto
        document.getElementById("nome").focus(); // riposizionamento cursore su campo vuoto
    } else if (document.getElementById("cognome").value === "") {
        // verifica che campo COGNOME non sia VUOTO
        alert("Attenzione!!! Inserire COGNOME e Riprovare"); // messaggio di avvertimento campo vuoto
        document.getElementById("cognome").focus(); // riposizionamento cursore su campo vuoto
    } else if (document.getElementById("matricola").value === "") {
        // verifica campo MATRICOLA non sia VUOTO
        alert("Attenzione!!! Inserire MATRICOLA e Riprovare"); // messaggio di avvertimento campo vuoto
        document.getElementById("matricola").focus(); // riposizionamento cursore su campo vuoto
    } else if (document.getElementById("dataNascita").value === "") {
        // verifica campo DATA di NASCITA non VUOTO
        alert("Attenzione!!! Inserire DATA di NASCITA e Riprovare"); // messaggio di avvertimento campo vuoto
        document.getElementById("dataNascita").focus(); // riposizionamento cursore su campo vuoto
    } else if (document.getElementById("luogoNascita").value === "") {
        // verifica campo LUOGO di NASCITA non VUOTO
        alert("Attenzione!!! Inserire LUOGO di NASCITA e Riprovare"); // messaggio di avvertimento campo vuoto
        document.getElementById("luogoNascita").focus(); // riposizionamento cursore su campo vuoto
    } else if (document.getElementById("email").value === "") {
        // verifica che campo EMAIL non sia VUOTO
        alert("Attenzione!!! Inserire Email e Riprovare"); // messaggio di avvertimento campo vuoto
        document.getElementById("email").focus(); // messaggio di avvertimento campo vuoto
    }

    // VERIFICA Correttezza FORMA Email inserita dall'utente nel FORM (come da procedimento descritto sopra)
    else if (ctrlEmail.test(document.getElementById("email").value) !== true) {
        alert("Attenzione!!! indirizzo EMAIL non valido"); // messaggio di avvertimento errore
        document.getElementById("email").focus(); // riposizionamento su campo errato
    } else {

        /* Giunti a questo controllo, significa che i precedenti CONTROLLI hanno dato TUTTI esito positivo, 
              quindi (simulando didatticamente) si possono correttamente inoltrare i dati inseriti dall'utente nel FORM,
              al Server WEB di competenza, per effettuare la "REGISTRAZIONE UTENTE".
              Sempre a scopo didattico, viene simulato l'evento "Registrazione Avvenuta con Successo", quale si  
              suppone possa essere la risposta ricevuta da un Web Server con cui si interagisce */
        alert("Registrazione Effettuata con Successo"); // messaggio di CONFERMA REGISTRAZIONE
        document.getElementById("form").submit();
        clearForm();
    }
    return;
} // Fine Funzione di verifica della CONSISTENZA dei VALORI presenti nei campi del FORM

// Funzione di "Reset Form" e modifica Type CAMPO del FORM avente id = "dataNascita"
function clearForm() {
    document.getElementById("form").reset();
    document.getElementById("dataNascita").type = "text";
    return;
}

// Funzione di modifica Type CAMPO del FORM avente id = "dataNascita"
function typeTextToDate() {
    document.getElementById("dataNascita").type = "date";
    return;
}

/* Funzione di Validazione Data di Nascita inserita dall'utente, nel CAMPO del FORM avente id = "dataNascita" 
    Viene effettuata la VERIFICA che tale campo non contenga una DATA di NASCITA superiore alla data stessa 
    di Registrazione.
    Si è volutamente lasciato libero il "margine inferiore" poichè la compilazione del FORM potrebbe riguardare 
    qualunque situazione, anche in relazione a persone non più viventi (ad esempio per fini statistici) */
function verificationDate() {
    /* Dichiarazione di una variabile relativa alla data "corrente", che si aggiorna automaticamente
          tramite il browser dell'utente */
    var dataOdierna = new Date();

    /* In questa sezione di codice viene verificato che la DATA di NASCITA inserita dall'utente non sia SUCCESSIVA
          alla data di compilazione del Form (data che si aggiorna dinamicamente). Nello specifico:
          1) Viene prima di tutto verificato che l'anno non sia superiore all'anno "corrente"
          2) Qualora l'anno "corrente" coincida con l'anno immesso dall'utente viene verifcato che il mese
              inserito dall'utente non sia successivo a quello "corrente"
          3) Qualora sia l'anno che il mese immessi dall'utente coincidano con anno e mese "corrente", si passa 
              alla verifica del giorno immesso dall'utente, che non deve essere successivo a quello corrente
          Nel confronto dei valori si utilizza volutamente l'operatore "==" e non "===" per sfruttare la
              possibilità di "verifica uguaglianza" solo in termini di VALORE e non necessariamente anche di TIPO */
    if (
        document.getElementById("dataNascita").value.substring(0, 4) >
        dataOdierna.getFullYear() ||
        (document.getElementById("dataNascita").value.substring(0, 4) ==
            dataOdierna.getFullYear() &&
            document.getElementById("dataNascita").value.substring(5, 7) >
            dataOdierna.getMonth() + 1) ||
        (document.getElementById("dataNascita").value.substring(0, 4) ==
            dataOdierna.getFullYear() &&
            document.getElementById("dataNascita").value.substring(5, 7) ==
            dataOdierna.getMonth() + 1 &&
            document.getElementById("dataNascita").value.substring(8, 10) >
            dataOdierna.getDate())
    ) {
        alert("Attenzione!!! Hai inserito una DATA SUCCESSIVA alla Data Odierna.");
        document.getElementById("dataNascita").value = "";
        document.getElementById("dataNascita").type = "text";
    }

    return;
}
