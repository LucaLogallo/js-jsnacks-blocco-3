$(()=>{
  const arrAnimali = [
    
      { nome: "leone", famiglia: "felidi", classe: "mammiferi" },
	    { nome: "cane", famiglia: "canidi", classe: "mammiferi" },
	    { nome: "gallina", famiglia: "fasianidi", classe: "uccelli" },

  ];
  let addAnimal;
  do{
    addAnimal = prompt("vuoi inseire altri animali alla lista già presente? rispondi con si oppure no");
  }while(addAnimal !== "si" && addAnimal !== "Si" && addAnimal !== "SI" && addAnimal !== "sI" && addAnimal !== "no" && addAnimal !== "No" && addAnimal !== "nO");

  if(addAnimal === "si" || addAnimal === "SI" || addAnimal === "sI"){
    let numeroAnimaliAdd = 0;
    do{
      numeroAnimaliAdd = parseInt(prompt("inserisci il numero di animali che vuoi aggiungere"));
    }while(numeroAnimaliAdd < 1);

    for(var i = 0; i < numeroAnimaliAdd; i++){
      let nome = prompt("inserisci il nome dell'animale");
      let famiglia = prompt("inserisci la famiglia");
      let classe = prompt("inserisci la classe dell'animale");
      let animale ={
        nome: nome,
        famiglia:famiglia,
        classe:classe
      }
      arrAnimali.push(animale);
    }

  }

  console.log(arrAnimali);
  console.log("--------------")
  arrAnimali.forEach((animale)=>{
    console.log(animale);
    console.log("----------------");
  })
  const mammiferi = arrAnimali.filter((animale)=>animale.classe ==='mammiferi');

  console.log(mammiferi);
  console.log("......................")
  mammiferi.forEach((animale)=>{
    console.log(animale)
    console.log("----------");
  });
});