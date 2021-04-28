var numeri = [];
for(i=0;i<100;i++){
    numeri[i] = parseInt(i)+1;
}
//
var min = prompt("Inserisci il numero più piccolo il quale deve essere compreso tra 1 e 100");
var max = prompt("Inserisci il numero più grande il quale deve essere compreso tra 1 e 100");



function funzione(array_numeri, numero_min, numero_max){
    console.log(numero_min)
    console.log(numero_max)
    console.log(array_numeri)
    var nuovi_numeri= [];
    var j=0;
    if(numero_min>numero_max){
        alert("Il primo numero deve essere più piccolo del secondo")
    }else if(numero_max == numero_min){
        alert("metti due numeri diversi")
    }else if(numero_max>array_numeri.length){
        alert("Il numero deve essere compreso tra 1 e 100")
    }else if(numero_min<0){
        alert("Il numero deve essere compreso tra 1 e 100")
    }else if (numero_max == "" || numero_min ==""){
        alert("devi inserire entrambi i numeri")
    }else{
        for(i=numero_min-1;i<numero_max;i++){
            nuovi_numeri[j]=array_numeri[i];
            j++;
        }
    }
    return (nuovi_numeri);
}




var array_finale = funzione(numeri, min, max);
console.log(array_finale);