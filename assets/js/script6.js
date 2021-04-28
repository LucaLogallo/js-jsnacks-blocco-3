//Creare 2 array di 2 lunghezze diverse
var array_1 = [];
var array_2 = [];

var lunghezza_1 = prompt("Quanto deve essere grande il primo array?");
var lunghezza_2 = prompt("Quanto deve essere grande il secondo array?");

for(i=0; i<lunghezza_1;i++){
    array_1[i] = Math.floor(Math.random()*101);
}
for(i=0; i<lunghezza_2;i++){
    array_2[i] = Math.floor(Math.random()*101);
}
//Confrontare le lunghezze
//riempire l'array più corto finchè non raggiunge la lunghezza di quello più lungo
if(array_1.length < array_2.length){
    while(array_1.length<array_2.length){
    array_1.push(Math.floor(Math.random()*101));
    }
}else if(array_2.length<array_1.length){
    while(array_2.length<array_1.length){
        array_2.push(Math.floor(Math.random()*101));
        }
}else{
    alert("I due array sono uguali");
}
console.log(array_1);
console.log(array_2);