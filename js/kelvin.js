

var Kelvin = function(v, to){
  Temperatura.call(this,v,"Kelvin", to);
}

Kelvin.prototype = new Temperatura();

Kelvin.prototype.to_C = function(){
    return new Celsius(this.valor - 273.15, "Celsius");
  }

Kelvin.prototype.to_F = function(){
    return new Fahrenheit(1.8 * (this.valor - 273.15) + 32, "Fahrenheit");
  }

Kelvin.prototype.convert = function(){
    var result;
    if(this.convertir == 'F' || this.convertir == 'f'){
      return this.to_F().to_s();

    }

    if(this.convertir == 'C' || this.convertir == 'c'){
      return this.to_C().to_s();
    }
    else{
      result = "El formato de destino no es correcto";
      return result;
  }
}
