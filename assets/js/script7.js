$(()=>{
const arrAutomobili = [
  {
    marca: 'fiat',
    modello: 'panda',
    alimentazione: 'benzina'
  },
  {
    marca: 'ford',
    modello: 'fiesta',
    alimentazione: 'diesel'
  },
  {
    marca: 'bmw',
    modello: 'e350',
    alimentazione: 'elettrico'
  },
  {
    marca: 'audi',
    modello: 'a4',
    alimentazione: 'gpl'
  },
  {
    marca: 'toyota',
    modello: 'modello b',
    alimentazione: 'metano'
  },
  {
    marca: 'fiat',
    modello: 'punto',
    alimentazione: 'benzina'
  },
  {
    marca: 'ford',
    modello: 'puma',
    alimentazione: 'diesel'
  },
  {
    marca: 'audi',
    modello: 'q5',
    alimentazione: 'gpl'
  },
  {
    marca: 'bmw',
    modello: 'x4',
    alimentazione: 'elettrico'
  },
  {
    marca: 'toyota',
    modello: 'modelloa',
    alimentazione: 'metano'
  }
];

  arrAutomobili.forEach((auto)=>{
    $(".tutte ul").append(stampa(auto));
  });
  const arrBenzina = arrAutomobili.filter((auto) =>auto.alimentazione === 'benzina');
  console.log(arrBenzina);
  arrBenzina.forEach((auto)=>{
    $(".benzina ul").append(stampa(auto));
  });
  const arrDiesel = arrAutomobili.filter((auto) =>auto.alimentazione === 'diesel');
  
  console.log(arrDiesel);
  
  arrDiesel.forEach((auto)=>{
    $(".diesel ul").append(stampa(auto));
  });
  
  const arrAltreAlimentazioni = arrAutomobili.filter((auto) => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel');
  
  console.log(arrAltreAlimentazioni);
  
  arrAltreAlimentazioni.forEach((auto)=>{
    $(".altre ul").append(stampa(auto));
  });


  function stampa(elemento){
    let{marca, modello, alimentazione} = elemento;
    let html = `
      <li>
      <p>la marca della macchina: ${marca}</p>
      <p>modello: ${modello}</p>
      <p>alimentazione: ${alimentazione}</p>
      </li>
    `
    return html;
  };
});