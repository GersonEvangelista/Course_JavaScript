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
*/

//ARRAYS
//var data = new Array(); //start with data -> new Array("name");
var data = []; //start with data -> ["name"];
data.push($name); data.push($lastname,years); //metodos -> .pop, .unshift, .shift
alert("Your data is: "+data[0]+" "+data[1]+" "+data[2]); 


