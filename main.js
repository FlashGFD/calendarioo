

function marcar(){
  const date = new Date()
  horas = date.getHours()
  minutos =date.getMinutes()
  dia = date.getDay()

  hora = horas+minutos/100

  //8:00 - 8:40
  if(hora >= 8 && hora <= 8.40){
    document.getElementById('a').style.backgroundColor = '#61e8c2'

    if(dia == 1){document.getElementById('aa').style.backgroundColor = '#61e8c2'}
    if(dia == 2){document.getElementById('ab').style.backgroundColor = '#61e8c2'}
    if(dia == 3){document.getElementById('ac').style.backgroundColor = '#61e8c2'}
    if(dia == 4){document.getElementById('ad').style.backgroundColor = '#61e8c2'}
    if(dia == 5){document.getElementById('ae').style.backgroundColor = '#61e8c2'}

  }

  //8:40 - 9:20
  if(hora >= 8.40 && hora <= 9.20){
    document.getElementById('b').style.backgroundColor = '#61e8c2'

    if(dia == 1){document.getElementById('ba').style.backgroundColor = '#61e8c2'}
    if(dia == 2){document.getElementById('bb').style.backgroundColor = '#61e8c2'}
    if(dia == 3){document.getElementById('bc').style.backgroundColor = '#61e8c2'}
    if(dia == 4){document.getElementById('bd').style.backgroundColor = '#61e8c2'}
    if(dia == 5){document.getElementById('be').style.backgroundColor = '#61e8c2'}

  }

  //9:30 - 10:10
  if(hora >= 9.30 && hora <= 10.10){
    document.getElementById('c').style.backgroundColor = '#61e8c2'

    if(dia == 1){document.getElementById('ca').style.backgroundColor = '#61e8c2'}
    if(dia == 2){document.getElementById('cb').style.backgroundColor = '#61e8c2'}
    if(dia == 3){document.getElementById('cc').style.backgroundColor = '#61e8c2'}
    if(dia == 4){document.getElementById('cd').style.backgroundColor = '#61e8c2'}
    if(dia == 5){document.getElementById('ce').style.backgroundColor = '#61e8c2'}

  }

  //10:10 - 10:50
  if(hora >= 10.10 && hora <= 10.50){
    document.getElementById('d').style.backgroundColor = '#61e8c2'

    if(dia == 1){document.getElementById('da').style.backgroundColor = '#61e8c2'}
    if(dia == 2){document.getElementById('db').style.backgroundColor = '#61e8c2'}
    if(dia == 3){document.getElementById('dc').style.backgroundColor = '#61e8c2'}
    if(dia == 4){document.getElementById('dd').style.backgroundColor = '#61e8c2'}
    if(dia == 5){document.getElementById('de').style.backgroundColor = '#61e8c2'}

  }

  //10:50 - 11:00
  if(hora >= 10.50 && hora <= 11.00){
    document.getElementById('e').style.backgroundColor = '#61e8c2'

    if(dia == 1){document.getElementById('ea').style.backgroundColor = '#61e8c2'}
    if(dia == 2){document.getElementById('eb').style.backgroundColor = '#61e8c2'}
    if(dia == 3){document.getElementById('ec').style.backgroundColor = '#61e8c2'}
    if(dia == 4){document.getElementById('ed').style.backgroundColor = '#61e8c2'}
    if(dia == 5){document.getElementById('ee').style.backgroundColor = '#61e8c2'}
  }
    //11:00 - 11:30
    if(hora >= 11.00 && hora <= 11.30){
      document.getElementById('f').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('fa').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('fb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('fc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('fd').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('fe').style.backgroundColor = '#61e8c2'}

    }

    //11:30 - 11:40
    if(hora >= 11.30 && hora <= 11.40){
      document.getElementById('g').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('ga').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('gb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('gc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('gd').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('ge').style.backgroundColor = '#61e8c2'}

    }

    //11:40 - 12:20
    if(hora >= 11.40 && hora <= 12.20){
      document.getElementById('h').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('ha').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('hb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('hc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('hd').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('he').style.backgroundColor = '#61e8c2'}

    }

    //12:20 - 13:00
    if(hora >= 12.20 && hora <= 13.00){
      document.getElementById('i').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('ia').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('ib').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('ic').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('id').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('ie').style.backgroundColor = '#61e8c2'}

    }

    //13:30 - 14:50
    if(hora >= 13.30 && hora <= 14.50){
      document.getElementById('j').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('ja').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('jb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('jc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('jd').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('je').style.backgroundColor = '#61e8c2'}

    }

    //15:00 - 16:00
    if(hora >= 15.00 && hora <= 16.00){
      document.getElementById('k').style.backgroundColor = '#61e8c2'

      if(dia == 1){document.getElementById('ka').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('kb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('kc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('kd').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('ke').style.backgroundColor = '#61e8c2'}

    }

    //16:00 - 16:20
    if(hora >= 16.00 && hora <= 16.20){
      document.getElementById('l').style.backgroundColor = '#61e8c2'
      if(dia == 1){document.getElementById('la').style.backgroundColor = '#61e8c2'}
      if(dia == 2){document.getElementById('lb').style.backgroundColor = '#61e8c2'}
      if(dia == 3){document.getElementById('lc').style.backgroundColor = '#61e8c2'}
      if(dia == 4){document.getElementById('ld').style.backgroundColor = '#61e8c2'}
      if(dia == 5){document.getElementById('le').style.backgroundColor = '#61e8c2'}

    }



}


marcar()

setInterval(marcar, 100)
