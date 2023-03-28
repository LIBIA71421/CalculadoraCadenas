function Calcu  (cadena){
    if(cadena == ""){
        return 0;
    }
    else{
        if(cadena.lengt > 1){
            let cadenaInt = cadena.split(",");
            return parseInt(cadenaInt[0])+parseInt(cadenaInt[1]);
        }else{
            return parseInt(cadena)
        }
    }
}

export default Calcu;