$(function(){
  var arrZucchine =[
    {
      'varietà':  'Nera di Milano',
      'peso': '100',
      'lunghezza': '20cm'
    },
    {
      'varietà':  'Alberello',
      'peso': '100',
      'lunghezza': '20cm'
    },
    {
      'varietà': 'Tonda di Nizza' ,
      'peso': '100',
      'lunghezza': '20cm'
    },
    {
      'varietà':  'Lunghe fiorentine',
      'peso': '100',
      'lunghezza': '20cm'
    },
    {
      'varietà':  "Trombetta d'Albenga",
      'peso': '100 ',
      'lunghezza': '20cm'
    },
    {
      'varietà':  'Zucchino giallo Golden',
      'peso': '100',
      'lunghezza': '20cm'
    },
    {
      'varietà': 'bianca' ,
      'peso': '100',
      'lunghezza': '20cm'
    },
    {
      'varietà':  'azzurra',
      'peso': '100',
      'lunghezza': '20cm'
    },
    {
      'varietà':  'rossa',
      'peso': '100',
      'lunghezza': '20cm'
    },
    {
      'varietà':  'arancione',
      'peso': '100',
      'lunghezza': '20cm'
    }
  ];

  var sommaPeso = 0;

  for(var index in arrZucchine){
    var a = arrZucchine[index];
    console.log(a);
    var t = parseInt(a['peso']);
    console.log(t);
    sommaPeso += t;
    console.log(sommaPeso);
  }

});