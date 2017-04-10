function isValidCard(creditCardNumber) {
    // Escribe tu código aquí

  if (creditCardNumber==undefined){
    return "Ingresa un numero";
  }else if(typeof creditCardNumber!="number"){
    return "Error de dato";
  }
  var longitud=creditCardNumber.toString().length;
  if(longitud!=16){
    return "Faltan numeros";
  }
  var boolean= validarTarjeta(creditCardNumber);
  return boolean;
}


function validarTarjeta(numeroTarjeta){
  var numeroTarjeta=numeroTarjeta.toString();
  var arreglo = numeroTarjeta.split("");
  var total = 0;
  var valorfuncion=Boolean;
  var nuevoArreglo=arreglo.map(function(valorActual,indice,nuevoArreglo){
    if(indice%2==0){
      var por2 = valorActual * 2;
      if(por2>=10){
        return parseInt(por2.toString().split("")[0])+parseInt(por2.toString().split("")[1]);
      }else
      {
        return valorActual * 2;
      }
    }
    else{
      return valorActual;
    }
  });

  nuevoArreglo.forEach(function(valor){
    total += parseInt(valor);
  });
  if(total%10==0){
    valorfuncion = true;
  }else{
    valorfuncion = false;
  }
  return valorfuncion;
}


// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
