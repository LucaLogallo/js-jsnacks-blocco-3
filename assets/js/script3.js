$(function(){
//creo fue array di dimensioni diverse
  var arrLettere = ['a','b','c','d'];
  var arrNumeri =[1,2,3,4,5,6,7,8,9,10];
  var arrResult = []; //array che conterrà il risultato della fusione tra i due array

  //confronto le lenght tra i due array e salvo quello con la lunghezza minore in una variabile di appoggio.se sono uguali è indifferente per poi far ciclare il for che li unirà tante volte in base alla cardinalità dell'array più corto;

  var l = 0; //variabile lunghezza

  if(arrLettere.length === arrNumeri.length){ //controllo se le lunghezze dei due array sono uguali
    l = arrLettere.length; //salvo la lunghezza di un array (indifferente quale perchè sono uguali)
    console.log(l);
  }else if(arrLettere.length < arrNumeri.length){ //controllo se il primo array è più corto del secondo
    l = arrLettere.length; //salvo la lunghezza del primo array perchè più corto
    console.log(l);
  }else{  //altrimenti il secondo è più corto del primo 
    l = arrNumeri.length; //salvo la lunghezza del secondo perchè più corto
    console.log(l);
  }

  for(var i = 0; i<l; i++){
    arrResult.push(arrLettere[i]);//faccio il push dell'elemento in posizione i di array Lettere
    arrResult.push(arrNumeri[i]);//faccio il push dell'elemento in posizione i di array Numeri
    console.log(arrResult); //stampo il risultato
  }
});