
var Medida = function( v,  t){
  this.valor = v;
  this.tipo = t;
}

Medida.prototype.to_s = function(){
    var string = "";
    string += this.valor;
    string += this.tipo;
    return string;
  }

var Temperatura = function(v, t, to){
  Medida.call(this, v,t);
  this.convertir = to;

}

Temperatura.prototype = new Medida();

var Celsius = function(v, to){
  Temperatura.call(this,v,"C",to);
}

Celsius.prototype = new Temperatura();

Celsius.prototype.to_F = function(){
    return (this.valor * 9/5)+32;
  }

Celsius.prototype.to_K = function(){
    return (this.valor + 273.15);
  }

Celsius.prototype.convert = function(){
    var result;
    if(this.convertir == 'F' || this.convertir == 'f'){
      result = this.to_F();
      result = result.toString() + " Fahrenheit";
      return result;
    }

    if(this.convertir == 'K' || this.convertir == 'k'){
      result = this.to_K();
      result = result.toString() + " Kelvin";
      return result;
    }
    else{
      result = "El formato de destino no es correcto";
      return result;
  }
}


var Fahrenheit = function(v, to){
  Temperatura.call(this,v,"F", to);
}

Fahrenheit.prototype = new Temperatura();

Fahrenheit.prototype.to_C = function(){
    return ((this.valor -32) * (5/9));
  }

Fahrenheit.prototype.to_K = function(){
    return ((this.valor + 459.67)*(5/9));
  }

Fahrenheit.prototype.convert = function(){
    var result;
    if(this.convertir == 'C' || this.convertir == 'c'){
      result = this.to_C();
      result = result.toString() + " Celsius";
      return result;
    }

    if(this.convertir == 'K' || this.convertir == 'k'){
      result = this.to_K();
      result = result.toString() + " Kelvin";
      return result;
    }
    else{
      result = "El formato de destino no es correcto";
      return result;
  }

}


var Kelvin = function(v, to){
  Temperatura.call(this,v,"K", to);
}

Kelvin.prototype = new Temperatura();

Kelvin.prototype.to_C = function(){
    return (this.valor - 273.15);
  }

Kelvin.prototype.to_F = function(){
    return (1.8 * (this.valor - 273.15) + 32);
  }

Kelvin.prototype.convert = function(){
    var result;
    if(this.convertir == 'F' || this.convertir == 'f'){
      result = this.to_F();
      result = result.toString() + " Fahrenheit";
      return result;

    }

    if(this.convertir == 'C' || this.convertir == 'c'){
      result = this.to_C();
      result = result.toString() + " Celsius";
      return result;
    }
    else{
      result = "El formato de destino no es correcto";
      return result;
  }
}


var Metros = function(v, to){
  Medida.call(this, v, "m");
  this.convertir = to;
}

Metros.prototype = new Medida();

Metros.prototype.to_pulgadas = function(){
    var result;
    result = (this.valor * 39.3701);
    result = result.toString() + "\"";
    return result;
  }

Metros.prototype.convert = function(){
    if(this.convertir == '\"'){
      return this.to_pulgadas();
    }
    else{
      return "El formato de destino no es correcto";
    }
  }





function calculate() {
  var result;
  var obj;
  var temp = original.value;
  var regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkKmM])\s*([fFcCkK"])/;

  var m = temp.match(regexp);

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
    result = obj.convert();
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C K' instead";
  }
}
