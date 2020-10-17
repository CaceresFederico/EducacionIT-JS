// EJERCICIO 1
// Funcion para concatenar Strings 
function concatenarNombre() {
    var nombre = prompt("Ingrese su nombre", "Federico")
    // Ciclo de control para el ingreso vacio 
    while (nombre == "" || nombre == null || nombre == " ") {
        nombre = prompt("Es importante que ingrese su nombre!! ")
    }
    var apellido = prompt("Ingrese su apellido", "Cáceres")
    // Ciclo de control para el ingreso vacio 
    while (apellido == "" || apellido == null || apellido == " ") {
        apellido = prompt("Es importante que ingrese su apellido!!")
    }
    var nombreCompleto = nombre + ' ' + apellido;
    document.getElementById("miNombre").innerHTML = nombreCompleto
}

// Funcion para borrar elemento del DOM.
function borrar(id) {
    document.getElementById(id).innerHTML = ' '
}

//EJERCICIO 2
//Funcion para detectar y mostrar en pantalla la eleccion del confirm ingresado por el usuario
function confirmacion() {
    var mensaje
    if (confirm("Elija una opcion")) { //confirm devuelve true or false
        mensaje = "Se ingreso la opcion OK"
    }
    else {
        mensaje = "Se ingreso la opcion Cancelar";
    }
    document.getElementById("respuestaConfirmar").innerHTML = mensaje
}

//EJERCICIO 3
// Solicitar con un prompt el sueldo y el bono luego sumarlos y mostrar en pantalla
function sumaSueldo() {
    var sueldoFinal;
    var sueldo = parseFloat(prompt("Ingrese su sueldo percibido"));
    var bono = parseFloat(prompt("Ingrese su sueldo percibido"));
    var sueldoFinal = sueldo + bono;
    document.getElementById("respuestaSueldo").innerHTML = sueldoFinal
}

//EJERCICIO 4
//Solicitar edad si es mayor a 18 puede ingresar sino mensaje de error
function controlEdad() {
    var edad = parseInt(prompt("Ingrese su edad"));
    var mensaje = '' 
    const output =  document.getElementById("respuestaEdad") //Capturo el elemento del DOM para manipular su salida
    if (edad >= 18) {
        mensaje = "Bienvenido! puede ingresar a la web"//Si es mayor que se muestre en verde.
        output.style.color = "green";
    } else {
        mensaje = "Acceso prohibido a menores de 18 años!" //Si es menor que se muestre en rojo.
        output.style.color = "red";
    }
   output.innerHTML = mensaje
}

//EJERCICIO 5
//Solicitar sueldo al usuario si gana mas de 200 informar, si gana entre 150 y 200 informar sino avisar que pida aumento
function controlSalario() {
    var salario = parseInt(prompt("Ingrese su sueldo"));
    if (salario > 200) {
        alert("Usted gana mas de 200 dolares, Lindo sueldo!")
    } else if (salario >= 150 && salario <= 200) {
        alert("Usted gana entre 150 y 200 dolares, Sueldo medio")
    } else {
        alert("Pedir AUMENTO!")
    }
}

//EJERCICIO 6
/*Ingresar antiguedad laboral y nombre
Más de 30 años final del if muestre nombre y jubilado
entre 10 y 29 pedir salario y mostrar nombre y salario
sino mostrar nombre y antiguedad
*/
function antiguedadLaboral() {
    var antiguedad = parseInt(prompt("Ingresar antiguedad laboral"));
    const nombre = prompt("Ingresar su nombre");
    var mensaje
    if (antiguedad > 30) {  // mayor a 30 años devolver el nombre
        mensaje = "Felicidades, " + nombre + ' usted es jubilad@'  
    } else if (antiguedad >= 10 && antiguedad <= 29) { // 10-29 años ingresar salario devolver nombre y salario
        const salario = parseInt(prompt("Ingrese su salario"));
        mensaje = "Nombre: " + nombre + "<br>Salario: " + salario + "<br>Usted aun no es jubilad@."
    } else { //Devolver nombre y antiguedad
        mensaje = "Nombre: " + nombre + "<br>Antiguedad: "
    }
    document.getElementById("respuestaAntiguedad").innerHTML = mensaje
}

//EJERCICIO 7
//Armar un ciclo while que se ejecute N veces que ingrese el usuario
function contadorWhile() {
    var contador = 0;
    var limite = parseInt(prompt("Ingrese la cantidad de repeticiones"))
    while (contador < limite) {
        document.write('<p>Iteracion nro° : ' + contador + '</p>')
        contador++
    }
    document.write('<p>Cantidad final del contador : ' + contador + '</p><br> <a href="index.html">volver</a>')
}

//EJERCICIO 8
//Adivinar numero utilizando el ciclo DO WHILE
function adivinarNumeroDo() {
    let numero = 25
    let input
    let contador = 0
        do {
            input = prompt("Ingrese un numero")
            contador++
        } while (input != numero);
    //Ciclo para arreglar la salida del contador de intentos
    if (contador <= 1) {
        document.getElementById("adivinarNumero").innerHTML = "Acertaste el numero en " + contador + " intento"
    } else {
        document.getElementById("adivinarNumero").innerHTML = "Acertaste el numero en " + contador + " intentos"
    }
}

//EJERCICIO 9
//Repetir ejercicio anterior aplicando el ciclo WHILE
function adivinarNumeroWhile() {
    let numero = 30
    let input
    let contador = 0
        while (contador < 5 && input != numero) {
            input = prompt("Ingrese el numero")
            contador++
        }
    //Ciclo para editar la salida del contador de intento || intentos 
    if (contador <= 1) {
        document.getElementById("adivinarNumeroWhile").innerHTML = "Acertaste el numero en " + contador + " intento"
    } else {
        document.getElementById("adivinarNumeroWhile").innerHTML = "Acertaste el numero en " + contador + " intentos"
    }
}

//Ejercicio 10
//Utilizar el metodo getDay para informar que dia es y cuanto falta para el finde semana
function diaSemana() {
    let fecha = new Date()
    let dia = fecha.getDay()
    let mensaje
    switch (dia) {
        case 0:
            mensaje = "Hoy es domingo y faltan 6 dias para el sábado"
            alert(mensaje)
            break;
        case 1:
            mensaje = "Hoy es Lunes y faltan 5 dias para el sábado"
            alert(mensaje)
            break;
        case 2:
            mensaje = "Hoy es Martes y faltan 4 dias para el sábado"
            alert(mensaje)
            break;
        case 3:
            mensaje = "Hoy es Miercoles y faltan 3 dias para el sábado"
            alert(mensaje)
            break;
        case 4:
            mensaje = "Hoy es Jueves y faltan 2 dias para el sábado"
            alert(mensaje)
            break;
        case 5:
            mensaje = "Hoy es Viernes y faltan 1 dias para el sábado"
            alert(mensaje)
            break;
        case 6:
            mensaje = "Hoy es Sábado, a disfrutar!"
            alert(mensaje)
            break;
    }
}

// Ejercicio 11
//Utilizar for para recorrer un arreglo, mostrar sus elementos con indice y el numero de elementos
function recorriendoFor() {
    let array = ['Federico', 'Sebastian', 'Lucas', 'Denis']
    //Otra forma de crear array usando el constructor new Aray
    //let arrayConstructor = new Array('Federico', 'Sebastian', 'Lucas', 'Denis', 20, 25, 24)
    for (i = 0; i < array.length; i++) {
        alert("Valor del elemento:  " + array[i] + ", Índice: [" + i +"]")
    }
    alert("Cantidad de elementos: " + (array.length))
}

//Ejercicio 12
//Crear un arreglo con objetos 'Empleados' con las propiedades nombre, apellido y dni, mostrar el dni del ultimo empleado
function dniUltimoEmpleado() {
    let array = [{ nombre: "Federico", apellido: "Cáceres", dni: 39076824 }, { nombre: "Luciano", apellido: "Cardona", dni: 32376824 }]
    alert("El DNI del ultimo empleado es: " + array[array.length - 1].dni)
}

//Ejercicio 13
//Crear un arreglo con objetos 'Empleados' con las propiedades nombre, apellido y dni, mostrar nombre y apellido del ultimo empleado
function nombreApellidoUltimoEmpleado() {
    let array = [{ nombre: "Federico", apellido: "Cáceres", dni: 39076824 }, { nombre: "Luciano", apellido: "Cardona", dni: 32376824 }]
    document.getElementById("nombreApellidoUltimoEmpleado").innerHTML = "El nombre del ultimo empleado es: " + array[array.length - 1].nombre + " <br>El apellido del ultimo empleado es: " + array[array.length - 1].apellido
}

/*NOTAS
PUSH(agrega un elemento al final del array)
POP(quita el ultimo elemento del array)
UNSHIFT(agrega un elemento al principio del array)
SHIFT(quita el primer elemento del array)
SPLICE(1er parametro remueve del valor del elemento en adelante (2), 2do parametro cantidad de elementos (1), elemento que agrega ('Lucrecia'))
*/

//Ejercicio 14
//Utilizar splice para modificar un array
function spliceArray() {
    let array = ['Federico', 'Lucrecia', 'Juan']
    array.splice(1, 1, "Carla")
    alert(array) //['Federico', 'Carla', 'Juan']
}

//Ejercicio 15
//Armar dos array de la clase felino y reptiles, agregar Leon, Tigre, gatopardo y vibora, lagarto respectivamente
//Concat se utiliza para unir arreglos que sean pasados como parametros 
function arrayEspecies() {
    let felinos = ['Leon ', 'Tigre ', 'gatopardo']
    let reptiles = ['Vibora ', 'Lagarto']
    let nombres = ['Federico']
    let apellidos = ['Caceres']
    // Se pueden agregar varios arrays para concatenar
    let felinosReptiles = felinos.concat(reptiles, nombres,apellidos)
    alert(felinosReptiles) //['Leon ', 'Tigre ', 'gatopardo','Vibora ', 'Lagarto','Federico','Caceres']
}

//Ejercicio 16
//Usar el metodo SLICE dentro de un array
function sliceArray() {
    let nombres = ['Federico ', 'Juan ', 'Manuel ', 'Lucas']
    //Genera un nuevo array con los elementos apartir del parametro que le pasamos en adelante empieza desde 1 y no desde 0
    let chicas = nombres.slice(3)
    alert(chicas)//['Lucas']
}


//Ejercicio 17 
//Recorrer con un for un arreglo bidimensional y mostrar todos sus elementos
function forMatrices() {
    let personaEmpresa = [['Juan', 'Gomez', 30], ['Sebastian', 'Gonzales', 24], ['Federico', 'Cáceres', 25]]
    for (i = 0; i < personaEmpresa.length; i++) {
        for (j = 0; j < personaEmpresa.length; j++){
            // Otra forma para concatenar en JS las dos funcionan
            alert(`Elemento: ${personaEmpresa[i][j]} - fila [${i}] columna [${j}]`)
            // alert("Elemento: "+personaEmpresa[i][j]+ "- fila ["+i+"] columna ["+j+"]")
        }
    }
}

//Ejercicio 18
//Definir una funcion que solicite dos numeros y que devuelva su multiplicacion
function multiplicar() {
    var p1 = parseInt(prompt("Ingrese el primer numero a multiplicar"));
    var p2 = parseInt(prompt("Ingrese el segundo numero a multiplicar"));
    var multiplicacion = p1 * p2;
    return (document.getElementById('respuestaMultiplicar').innerHTML = multiplicacion)
}

//Ejercicio 19
/*Hacer una funcion que reciba un color como parametro, al hacer click en un boton con el nombre AZUL
(el nombre del boton en castellano y el parametro en ingles) que me muestre en el index.html
el mensaje "el color es: blue" (usar el div)
HACER 4 botones con los colores azul (blue), rojo(red), verde(green), Rosa (pink)*/
function colorsButtons(color) {
    const output = document.getElementById("respuestaColorsButton")
    output.style.background = color
    var mensaje = "el color es: " + color
    return (document.getElementById("respuestaColorsButton").innerHTML = mensaje)
}

/*NOTAS EVENTOS: 
ONMOUSEOVER, ONMOUSEOUT, ONMOUSEMOVE, ONCHANGE, ONBLUR (FUERA DE FOCUS)
query.selector() se aplica al primero que cumpla con la condicion
query.selectorAll() te trae todos los elementos que coincidan con el parametro otorgado
.class o #id para referenciar a una clase o id respectivamente.
document.getElementByTagName('') trae los elementos que cumplan con el parametro y los devuelve dentro de un array
*/

//Ejercicio 20
// Vincular la libreria de jquery y modificar un elemento del html mediante un selector de clase
function jqueryModificarP() {
    //El metodo .html() y .text() devuelve el texto de la variable con la diferencia que en .html()conserva la sintaxis html
    $('.segundoParrafoClase').html('Este texto ahora tiene <em> italica </em>')
    // console.log($('.segundoParrafoClase').html())
    // console.log($('.segundoParrafoClase').text())
}

//Ejercicio 21
//Utilizar una funcion principal "inicializar" que capture eventos dentro del html con js y jquery
//document es un objeto de jquery que toma toda la pagina .ready es un método del document que referencia al cargado completo de la pagina
$(document).ready(inicializar)
function inicializar() {
    // LLAMADO DE LAS FUNCIONES
    // $('#parrafoLorem').click(alertaclick)
    // $('#parrafoLorem').dblclick(alertadblclick)
    // $('#parrafoLorem').mouseover(mousearr)
    // $('#parrafoLorem').mouseout(mouseOut)
}
// DEFINICION DE FUNCIONES
function alertaclick() {
    alert("Hiciste un click")
}
function alertadblclick() {
    alert("Hiciste doble click")
}
function mousearr() {
    alert("Pasaste el mouse por arriba")
}
function mouseOut() {
    alert("Sacaste el mouse del parrafo")
}

//Ejercicio 22
//Utilizar el método .val para capturar los valores de un option SI y NO en una etiqueta select
function get_valor() {
    var valor = $('select').val()
    alert(valor)

}
$('select').change(get_valor)

//Ejercicio 23
//Crear dos botones que aparezca el texto y otro para hacer desaparecer el texto aplicando jquery
function btnShow(){
    $('#divHideShow').show()
}
function btnHide(){
    $('#divHideShow').hide()
}
$('#buttonShow').click(btnShow)
$('#buttonHide').click(btnHide)