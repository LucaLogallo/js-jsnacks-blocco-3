$(()=>{

  const arrUmani = [ 
    	{ nome: "Mario", cognome: "Rossi", eta: 60 },
     	{ nome: "Luigi", cognome: "Verdi", eta: 12 }, 	
      { nome: "Silvia", cognome: "Neri", eta: 25 }, 
    ] ;

  let addUman;
  do{
    addUman = prompt("vuoi inseire altre persone alla lista già presente? rispondi con si oppure no");
  }while(addUman !== "si" && addUman !== "Si" && addUman !== "SI" && addUman !== "sI" && addUman !== "no" && addUman !== "No" && addUman !== "nO");

  if(addUman === "si" || addUman === "SI" || addUman === "sI"){
    let numeroUmanAdd = 0;
    do{
      numeroUmanAdd = parseInt(prompt("inserisci il numero umani che vuoi aggiungere"));
    }while(numeroUmanAdd < 1);

    for(var i = 0; i < numeroUmanAdd; i++){
      let nome = prompt("inserisci il nome ");
      let cognome = prompt("inserisci il cognome");
      let eta = parseInt(prompt("inserisci l'età"));
      let umano ={
        nome: nome,
        cognome: cognome,
        eta: eta
      }
      arrUmani.push(umano);
    }

    

  }
  
  const arrGuida = arrUmani.map((umano)=>{
    console.log(umano.eta)
    let conferma = (umano.eta > 18 && umano.eta < 60) ? "può guidare</li>" : "non può guidare</li>";
    let{nome,cognome} = umano;
    let frase = `<li>${nome} ${cognome} ${conferma}`;
    return frase
  });

  console.log(arrGuida)


  arrGuida.forEach(element => {
    stamp(element, $(".persone"));
  });


  function stamp(element,target){
    let html = element;
    target.append(html);
  }

});
