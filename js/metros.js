
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
