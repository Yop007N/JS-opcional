/* 
alert('hola mundo!'); */
var saludo = "Hola"
var nombre = "Enrique Bobadilla";
var altura = 1.75;/* 
document.write(nombre);
document.write(altura); */
var concatenar = saludo + " " + nombre + " "  +  altura ;

var datos = document.getElementById("datos");

datos.innerHTML = concatenar;