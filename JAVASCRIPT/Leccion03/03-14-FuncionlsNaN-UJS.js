let miNumero = "20";

let edad =  Number(miNumero);
console.log(edad);

if (isNaN(edad)){
    console.log("No es  un número");
}else{
    if(edad >= 18){
        console.log("Puede votar");
    }else{
        console.log("Muy joven para votar");
    }
}