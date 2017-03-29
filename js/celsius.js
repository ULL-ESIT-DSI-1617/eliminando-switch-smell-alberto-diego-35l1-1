var Celsius = function(v, to){
  Temperatura.call(this,v,"Celsius",to);
}

Celsius.prototype = new Temperatura();

Celsius.prototype.to_F = function(){
    return new Fahrenheit((this.valor * 9/5)+32, "Fahrenheit");
  }

Celsius.prototype.to_K = function(){
    return new Kelvin(this.valor + 273.15, "Kelvin");
  }

Celsius.prototype.convert = function(){
    var result;
    if(this.convertir == 'F' || this.convertir == 'f'){
      return this.to_F().to_s();
    }

    if(this.convertir == 'K' || this.convertir == 'k'){
      return this.to_K().to_s();
    }
    else{
      result = "El formato de destino no es correcto";
      return result;
  }
}
