
var Fahrenheit = function(v, to){
  Temperatura.call(this,v,"Fahrenheit", to);
}

Fahrenheit.prototype = new Temperatura();

Fahrenheit.prototype.to_C = function(){
    return new Celsius((this.valor -32) * (5/9), "Celsius");
  }

Fahrenheit.prototype.to_K = function(){
    return new Kelvin((this.valor + 459.67)*(5/9), "Kelvin");
  }

Fahrenheit.prototype.convert = function(){
    var result;
    if(this.convertir == 'C' || this.convertir == 'c'){
      return this.to_C().to_s();
    }

    if(this.convertir == 'K' || this.convertir == 'k'){
      return this.to_K().to_s();
    }
    else{
      result = "El formato de destino no es correcto";
      return result;
  }

}
