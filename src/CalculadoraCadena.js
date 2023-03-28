function Calculadora(cadena){
    if(cadena == ""){
        return 0;
    }
    else{
        if(cadena.length > 1){
            if(cadena[0] == "/"){
                let cadenaN = cadena.split(" ");;
                let caracter = cadenaN[0][3];
                let caracterM = "/,|-|;/";
                let cadenaInt = aCadena(CaracteresSplit(cadenaN[1], [',','-', caracter]));
                return sumar(cadenaInt);    
            }
            else
            {
                let cadenaInt = aCadena(cadena.split(/,|-/));
                return parseInt(cadenaInt);
            }
        }
        else{
            return parseInt(cadena);
        }
    }
}

function aCadena(cadena){
    let newCadena = [];
    for (let i = 0 ; i < cadena.length; i++){
      newCadena[i] = parseInt(cadena[i]);
    } 
    return newCadena;
  }

  function CaracteresSplit(str, tokens) {
    var tempChar = tokens[0];
    for (var i = 1; i < tokens.length; i++) {
      str = str.split(tokens[i]).join(tempChar);
    }
    str = str.split(tempChar);
    return str;
  }

function sumar(num){
    let suma = 0;
    for (let i = 0 ; i < num.length; i++){
      suma = suma + num[i];
    } 
    return suma;
  }
  
export default Calculadora;