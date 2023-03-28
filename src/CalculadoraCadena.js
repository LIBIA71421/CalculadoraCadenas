function aCadena(cadena){
    let newCadena = [];
    for (let i = 0 ; i < cadena.length; i++){
      newCadena[i] = parseInt(cadena[i]);
    } 
    return newCadena;
  }

function sumar(num){
    let suma = 0;
    for (let i = 0 ; i < num.length; i++){
      suma = suma + num[i];
    } 
    return suma;
  }
  function Calcu  (cadena){
    if(cadena == ""){
        return 0;
    }
    else{
        if(cadena.length > 1){
            let cadenaN = aCadena(cadena.split("/[,-]+/"));
            return sumar(cadenaN);
            }
        else
        {
            return parseInt(cadena);
        }
    }
}
export default Calcu;