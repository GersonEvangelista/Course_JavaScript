//VARIABLES

var $name, $lastname, years;

//INPUTS
$name = prompt("Insert your name")
$lastname = prompt("Insert your lastname");
years = prompt("Insert your age");
//OUTPUTS
//alert("Your name is "+$name+"\nyour lastname is "+$lastname+"\nYou are "+years+" years old");

/*
//OPERADORES BÁSICOS
var $num1, $num2, $result;
    $num1 = Number(prompt("Número1")); //Number: para indicarle que se trata de numeros
    $num2 = Number(prompt("Número2")); //sin Number lo toma como cadenas y en vez de sumar los concatena
    document.write("<p>num1: "+$num1+"<br>num2: "+$num2+"</p>");
    $result = $num1+$num2;

//operadores de incremento y decremento 
    $num1+=$num2;
    $num2*=3; //num2 = num2*3

//CODE HTML + JAVASCRIPT
    document.write("<p>result = <strong>"+$result+"</strong></p>");
    document.write("<p>num1+num2 = "+$num1+"<br>num2x3 = "+$num2+"</p>");

//ARRAYS
//var data = new Array(); //start with data -> new Array("name");
var data = []; //start with data -> ["name"];
data.push($name); data.push($lastname,years); //metodos -> .pop, .unshift, .shift
//alert("Your data is: "+data[0]+" "+data[1]+" "+data[2]); 

//MATRICES: Es similar a python, dentro de una lista van otras listas
var data2 = [];
data2.push("Jose","Rivera",15);

var matriz = [];
matriz.push(data,data2); //array que contiene arrays
alert(matriz[1][2]);
*/

// Crear una matriz de números y mostrar en consola (F12/fn+F12/inspeccionar para ver consola)
var matrizNumeros = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  // Acceder a un elemento de la matriz
  var primerElemento = matrizNumeros[0][0];
  console.log("Primer elemento:", primerElemento);
  // Modificar un elemento de la matriz
  matrizNumeros[1][1] = 10;
  console.log("Matriz modificada:", matrizNumeros);

