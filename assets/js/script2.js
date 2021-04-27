$(function(){
  var arrZucchine =[
    {
      'varietà':  'Nera di Milano',
      'peso': '100',
      'lunghezza': '10'
    },
    {
      'varietà':  'Alberello',
      'peso': '100',
      'lunghezza': '10'
    },
    {
      'varietà': 'Tonda di Nizza' ,
      'peso': '100',
      'lunghezza': '10'
    },
    {
      'varietà':  'Lunghe fiorentine',
      'peso': '100',
      'lunghezza': '10'
    },
    {
      'varietà':  "Trombetta d'Albenga",
      'peso': '100 ',
      'lunghezza': '10'
    },
    {
      'varietà':  'Zucchino giallo Golden',
      'peso': '100',
      'lunghezza': '20'
    },
    {
      'varietà': 'bianca' ,
      'peso': '100',
      'lunghezza': '20'
    },
    {
      'varietà':  'azzurra',
      'peso': '100',
      'lunghezza': '20'
    },
    {
      'varietà':  'rossa',
      'peso': '100',
      'lunghezza': '20'
    },
    {
      'varietà':  'arancione',
      'peso': '100',
      'lunghezza': '20'
    }
  ];

  var arrZucchineMeno = [];
  var arrZucchinePiu = [];
  
  for(var index in arrZucchine){
    var a = arrZucchine[index];
    console.log(a);
    console.log(parseInt(a['lunghezza']));
    if(parseInt(a['lunghezza']) < 15){
      arrZucchineMeno.push(a);
    }else{
      arrZucchinePiu.push(a);
    }
  };
  var somma = 0;
  for(var index in arrZucchineMeno){
    var a = arrZucchineMeno[index];
    somma += parseInt(a['peso']);
    console.log("zucchina con lunghezza minore di 15 cm");
    for (var key in a){
      console.log(key+": "+a[key]);
    }
    console.log("totale peso : "+somma+" g");
  };
  
  somma = 0;
  for(var index in arrZucchineMeno){
    var a = arrZucchinePiu[index];
    somma += parseInt(a['peso']);
    console.log("zucchina con lunghezza maggiore di 15 cm"+ a);
    for(var key in a){
      console.log(key+": "+a[key]);
    }
    console.log("totale peso: "+somma+" g");
  };


  
})
