/*Ejemplos de tipos de datos en JavaScript*/
//Tipo de dato String
var nombre = "carlos";
console.log(nombre);

nombre = 10.5;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato Object
var Object = {
    nombre : "Anderson",
    apellido : "Parra",
    telefono : "9614"
}
console.log( typeof Object);

//Tipo de datos boolean (true, false)
var bandera =true;
console.log(typeof bandera);

//Tipo de datos function
function miFuncion(){}
console.log( typeof miFuncion);

//Tipo de datos Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo clase es una function
class Persona{
        constructor(nombre, apellido){
            this.nombre = nombre;
            this.apellido = apellido;
        }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

var autos = ['BMW', 'Audi', 'Volvo' ];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);
