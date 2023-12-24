//VARIABLES
/*
var $name, $lastname, years;

//INPUTS
$name = prompt("Insert your name")
$lastname = prompt("Insert your lastname");
years = prompt("Insert your age");
//OUTPUTS
//alert("Your name is "+$name+"\nyour lastname is "+$lastname+"\nYou are "+years+" years old");


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


//POO
//Pasando objeto de JS a HTML
var myButton = document.getElementById("myButton");
var myText = document.getElementById("myText"), myText2 = document.getElementById("myText2");

//Métodos y propiedades de los objetos
myText.style.width = "150px";
myText.style.height = "50px";
myButton.style.width = "80px";
myButton.style.height = "60px";

myButton.style.backgroundColor = "green";
myText.value = "Escriba aqui! ..." //mensaje propio de FB
myText2.focus();  //Para tener el click que indica jerarquía


//CONDICIONALES (IF, else if)
var myButton = document.getElementById("myButton");
var myText = document.getElementById("myText"), myText2 = document.getElementById("myText2");

myText.style.width = "150px";
myText.style.height = "50px";
myButton.style.width = "80px";
myButton.style.height = "60px";
myButton.style.backgroundColor="yellow";

var webColor = prompt("Insert background color").toLocaleUpperCase(); //convierte todo a mayúscula
myText.value = webColor;

//Para dar color al body
var myBody = document.getElementById("myBody");
if(myText.value == "ROJO"){
    myBody.style.backgroundColor="red";
}else if(myText.value == "VERDE"){
    myBody.style.backgroundColor="green";
}else{
    myBody.style.backgroundColor="blue";
}

//CONDICIONALES ANIDADOS 
var num1 = prompt("Insert first number"); 
var num2 = prompt("Insert second number");
//alert(typeof(num1));

if(!isNaN(num1) && !isNaN(num2)){ //si no son numéricos
    var operation = prompt("Insert operation");

    if(operation=="+"){
        alert(parseInt(num1)+parseInt(num2)); //para convertir a entero temporalmente
    }else if(operation=="-"){
        alert(parseInt(num1)-parseInt(num2));
    }else if(operation=="*"){
        alert(parseInt(num1)*parseInt(num2));
    }else{
        alert(parseInt(num1)/parseInt(num2));
    }
}
*/

//BUCLE WHILE
var num = Number(prompt("Insert a number"));
var numbers = new Array();
var cont = 0;

while(cont < num){
    numbers.push(Number(prompt("Insert "+num+" numbers")));
    cont++;
}
cont = 0
while(cont < numbers.length){
    document.write(numbers[cont]+"</br>");
    cont++
}

