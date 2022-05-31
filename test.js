// Se pedira al usuario que ingrese un texto, el mismo se mostrara por Alert y se seguira pidiendo un ingreso hasta que se tipe ESC, lo cual finalizara el ciclo.

 let entrada = prompt("Ingresar un dato");
while(entrada !=  "ESC") { // Mientras la entrada no sea ESC 
  alert("El usuario ingreso " + entrada); // Se mostrara "El usuario ingreso + el texto ingresado".
  entrada = prompt("Ingresar otro dato"); // Se pide nuevamente que ingrese un texto, repitiendo el ciclo.
}



/* Aunque el desafio solo pide 1 ejemplo, realize los demas por motivo de practica, seran incluidos aqui comentados pero 
van a haber sido testeados para un correcto funcionamiento. */


/* Se pedira al usuario que ingrese un numero, que sera sumado a una constante.
const manzanas = 20; // Juan tiene 20 manzanas.
let total = "";
let numero = "";  
for (let i = 0; i < 5; i++){ //Se le pediran 5 ingresos al usuario, cada uno de ellos sera sumado a las 20 manzanas y mostrado via alert.
     numero = +prompt("Ingrese un numero"); // Usuario ingresara un numero que sera parseado.
     total = manzanas + numero
    alert("Juan tenia 20 manzanas y ahora tiene " + total);

}

*/


/*
const mensaje = "Hola"; // Mensaje a repetir 
let mensajeParaRepetir = +prompt("Ingrese cantidad de veces a repetir"); //Usuario ingresa numero que determina el ciclo
for (let i = 0; i < mensajeParaRepetir; i++){ //Ciclo repite la alerta la cantidad asignada a mensajeParaRepetir
    alert(mensaje);
}

*/