/* Mi idea para projecto final es armar una aplicacion web que sirva para contar minutos. El motivo es que trabajo 
como interpete medico, y me pagan por minuto atendido. La idea de este proyecto seria que no tenga que estar llevando 
una tabla de excel con los numeros, que me calcule el promedio a cumplir segun mi objetivo, y tambien poder usar la app
como un control de productividad..
Algunas de las funciones que quiero que tenga la app:
-Seleccionar X cantidad de dias de un mes
-Contar dias trabajados y dias por trabajar 
-Promedio de dias atendidos
-Promedio a hacer en dias restantes para alcanzar "X" objetivo"
-Codificacion por colores en dias por sobre/debajo de promedio necesario-objetivo diario

En este 1er ejercicio voy a intentar crear una funcion con condicionales, que calcule el promedio de minutos atendidos 
en el mes de acuerdo a la cantidad de dias trabajados, y minutos totales.*/


let minutos = ""; dias = ""; let resultado = "";

function promedio() {
    let dias = +prompt("Por favor ingrese total de dias trabajados")
    let minutos = +prompt("Por favor ingrese total de minutos trabajados en estos dias")
    /* Mi idea es, en vez de ingresarlos asi, poder crear un bucle de la siguiente forma:
    let dias = +prompt("Por favor ingrese total de dias trabajados")
    for (let i = 1; i <= dias; i++){
        minutos += +prompt("Ingrese cantidad de minutos trabajados en dia " +i)*/
     resultado = (minutos / dias) 
    console.log(resultado)
 
}
promedio()

 //Ahora creare una funcion para determinar si el promedio esta por debajo del objetivo 
let objetivoDeMinutosDiarios = 400 

function objetivo(){
    if (resultado < objetivoDeMinutosDiarios){
        console.log("Promedio debajo de objetivo")
    }else if (resultado == objetivoDeMinutosDiarios){
        console.log("Promedio dentro de objetivo")
    }else if (resultado > objetivoDeMinutosDiarios){
        console.log("Promedio por encima del objetivo");
    }else console.log("Error");

}
objetivo();

/* Cuando veamos como integrar el html con js, voy a intentar crear una interfaz para que codifique con color los dias de la sig forma
Rojo = Promedio debajo del objetivo
Verde = Promedio dentro de objetivo
Azul = Promedio por encima del objetivo.
*/



// Aqui mi intento de crear el bucle mencionado arriba. El problema que encuentro es no poder acumular los datos ingreasdos en cada prompt en una variable que los vaya sumando.

/*
let minutes = ""; dias = "";resultado = "";minutosTotal= "";

function calcularMinutos(){
 dias = +prompt("Ingrese dias");
for (let i = 1; i <= dias; i++){
    minutes = +prompt ("Ingrese minutos trabajados en dia " + i);
    minutosTotal += minutos;
} resultado = (minutosTotal / dias);
console.log(resultado);
}calcularMinutos();

*/