$(() =>{
  const arrStringhe = [];
  let cardArrStringhe;
  do{
    cardArrStringhe = parseInt(prompt("inserisci il numero di parole da inserire"));
  }while(cardArrStringhe === 0);


  //for per l'inserimento da tastiera delle parole dall'utente
  for(var i =0; i< cardArrStringhe; i++){
    let parola =""; // creo la variabile di lavoro 
    do{
      parola = prompt("inserisci la parola numero "+(i+1)); //prendo il prompt
    }while(parola.trim().length = 0); // controllo le la parola privata degli spazi ha lunghezza = 0 , allora la farò reinserire all'utente altrimenti esce
    console.log(parola);  
    arrStringhe[i] = parola; //associo alla posizione i di arrStringhe la variabile di lavoro parola
    console.log(arrStringhe);
  };

  const arrLower = arrStringhe.map((stringa) => { //creo un nuovo array che conterrò tutte le stringhe presenti in arrStringhe trasformate in minuscolo in modo tale che se l'utente inserisce parole in maiuscolo non avrò problemi in seguito
    return lowerCase(stringa); //restituisco il valore 
  });

  console.log(arrLower);
  
  const arrFinale = arrLower.map((stringa) =>{//prendo l'array di stringhe che ho trasformato in tutte stringhe minuscole e poi richiamo la funzione che mi fa il capitalize first letter
    return capitalizeFirstLetter(stringa);
  })

  
  /* FUNZIONI */
  function lowerCase(string){
    return string.toLowerCase(); //trasforma la stringa tutta in minuscolo
  }

  function capitalizeFirstLetter(string) { //trasforma la stringa in maiuscolo
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //charAt(0) prende il carattere char in posizione(0) 
  //to upper case mi trasforma in maiuscolo
  //slice(1) mi salta il primo carattere e parte da posizione 1
  //quindi string.charAt(0).toUpperCase() mi prende il primo carattere e me lo trasforma in maiuscolo
  //con il + string.slice(1) aggiungo al carattere che ho trasformato in maiuscolo la stringa senza la prima lettere (ovvero quella che rimane minuscola)

   
});