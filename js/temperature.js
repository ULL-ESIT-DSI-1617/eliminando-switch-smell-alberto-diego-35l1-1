

var Temperatura = function(v, t, to){
  Medida.call(this, v,t);
  this.convertir = to;

}

Temperatura.prototype = new Medida();
