

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

  Medida.regexp = XRegExp('(?<src> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) #valor              \n' +
                          '(?<espacio> \\s*)                                                       \n' +
                  			  '(?<tipo> \\s*[A-Za-z]+)                      # tipo de entrada   \n' +
                  			  '(?<to> \\s*(?:to)?\\s*)                             # to opcional       \n' +
                  			  '(?<dst> [A-Za-z]+)                       # tipo destino', 'x');

  Medida.measures = Medida.measures || {};

  Medida.convertir = function(valor) {

    var match = XRegExp.exec(valor, Medida.regexp);

    if (match) {
      var numero = match.src,
          tipo   = match.tipo.toLowerCase(), //pasamos a minuscula
          destino = match.dst.toLowerCase();

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
