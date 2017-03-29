

var Medida = function( v,  t){
  this.valor = v;
  this.tipo = t;
}

Medida.prototype.to_s = function(){
    var string = "";
    string += this.valor;
    string += " " + this.tipo;
    return string;
  }

  Medida.regexp = /([-+]?\d+(?:\.\d*)?)\s*([fFcCkKmMpP])\s*([fFcCkKpPmM])/;
  Medida.measures = {};

  Medida.convertir = function(valor) {

    var match = valor.match(Medida.regexp);

    if (match) {
      var numero = match[1],
          tipo   = match[2].toLowerCase(), //pasamos a minuscula
          destino = match[3].toLowerCase();

      try {
        var source = new measures[tipo](numero); //new measures['k'](35) => new Kelvin(35)
        var target = "to"+measures[destino].name; //toCelsius
        console.log(target);
        return source[target](); //kelvin.toCelsius()
      }
      catch(err) {
        console.log(err);
        return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
      }
    }
    else
      return "Introduzca una temperatura valida: 330e-1F C";
  };
