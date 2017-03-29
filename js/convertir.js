
Medida.regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkKmM])\s*([fFcCkK"])/;



Medida.convertir = function(temp) {
  var result;
  var obj;


  var m = temp.match(Medida.regexp);

  if (m) {
    var num = m[1];
    var type = m[2];
    var to = m[3];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      obj = new Celsius(num, to);
    }
    if (type == 'f' || type == 'F'){
      obj = new Fahrenheit(num, to);
    }
    if (type == 'k' || type == 'K'){
      obj = new Kelvin(num, to);
    }
    if (type == 'm' || type == 'M'){
      obj = new Metros(num, to);
    }
    return result = obj.convert();
    }
  else {
    return "ERROR! Try something like '-4.2C K' instead";
  }
}
