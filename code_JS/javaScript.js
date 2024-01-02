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


//BUCLE DO WHILE
var aleatorio = Math.round(Math.random()*100);
alert(aleatorio);
var intentos = 0, c_intentos = document.getElementById("c_intentos");

        do{
            var myNumber = Number(prompt("Insert your number"));
            if(myNumber<aleatorio){
                alert("Mas alto");
            }else if(myNumber>aleatorio){
                alert("Mas bajo");
            }
            intentos++;
        }while(myNumber!=aleatorio);
        //Aplicando POO para el estilo de la caja de texto
        c_intentos.style.backgroundColor="yellow";
        c_intentos.style.color="red";
        c_intentos.value = "Tu has hecho "+intentos+" intentos.";
        c_intentos.style.textAlign="center";
        c_intentos.style.fontSize="12px";

        
//BUCLE FOR
var workers = new Array(), decision;

do{
    workers.push(prompt("Insert name of worker"));
    decision = prompt("Desea continuar? (si/no)");

}while(decision != "no");
document.write("</br>");
for(var i=0;i<workers.length;i++){
    document.write(workers[i]+" </br>");
}

//FUNCIONES CON EVENTOS
var $name = prompt("Ingresa tu nombre");
var $num1 = parseInt(prompt("Ingresa num1"));
var $num2 = parseInt(prompt("Ingresa num2"));

function saluda(name){
    document.write("</br>");
    document.write("Hola mi estimado <strong>"+name+"</strong> la suma de los números es <strong>"+suma($num1,$num2)+"</strong>");
}

function suma(a,b){
    return a+b;
}

//ESTO VA EN EL index.HTML
<input type="text" id="texto"/>
<input type="button" id="boton" value="Go!" onclick="validate();"/>

<script>
        //JQUERY USO Y FUNCIONES
        //var texto = document.getElementById("texto");
        var text = $("#texto"); 

        function validate(){
            if(texto.value ==""){
                $("#texto").after("<p>Ingrese dato<p>"); //agregando codigo html despues de #texto
            }else{
                alert("Esto contiene la caja de texto: "+texto.value);
            }
        }
        
        $(document).ready(function(){ //Espera a que cargue toda la página
            //POO con Jquery
            $("img").hide() //todo en blanco
            .width("800") //ancho en pixeles
            .height("500")
            .fadeIn(5000); //degradado en 5 seg

            var title = $("#title");
            //Funciones/Métodos de Jquery
            title.text("Cambiando el titulo"); //solo cambia el contenido de #title
            title.append("<h2>This is a subtitle</h2>"); //dentro y despues del #title
            title.prepend("<h2>This is first</h2>"); //dentro y previo del #title
            title.after("<p>another block</p>"); //fuera del bloque #title
        })
    </script>

//ESTO VA EN EL index.HTML
<div id="contenedor">
    <img id="imagen1" src="fotoIA.jpg"/>
    <img id="imagen2" src="JD.png"/>
    <img id="imagen3" src="fotoIA.jpg"/>
    <img id="imagen4" src="JD.png"/>
</div>

<script>
        //Jquery: -REMOVE Y REPLACEWITH- CON SWITCH
        var imgs = document.querySelectorAll("#contenedor img");//Selecciona todos los img de #contenedor

        for(var i=0;i<imgs.length;i++){
            imgs[i].addEventListener("click", elimina, false);//escuchador de eventos, parámetros (evento,nameFuncion,false)
        }

        function elimina(num){ //num -> objeto del evento
            switch(num.target){ //Solo funciona con ID, no funciona con clases
                case imagen1: //ID del img 1
                    $("#texto").remove();break; //borra codigo HTML
                case imagen2:
                    $("#boton").remove();break;
                case imagen3:
                    $("#imagen3").replaceWith("<h2 id='imagen3'>Agregado al carrito</h2>");break;//Reemplaza codigo HTML (considera el ID para evitar errores)
                case imagen4:    
                    $("#imagen4").replaceWith("<h2 id='imagen4'>Agregado al carrito</h2>");break;
            }
        }
    </script>

//ESTO VA EN EL index.HTML
<input type="button" value="newStyle1" id="boton_1"/>
<input type="button" value="newStyle2" id="boton_2"/>
    <ol>
        <li id="first">Primero</li>
        <li id="second">Segundo</li>
        <li id="third">Tercero</li>
        <li id="four">Cuarto</li>
    </ol>

<script>
        //Métodos Jquery: addClass, removeClass, toggleClass
        $(document).ready(function(){
            document.getElementById("boton_1").addEventListener("click",style1,false);
            document.getElementById("boton_2").addEventListener("click",style2,false);
        });

        function style1(){
            //$("#first").addClass("newStyle1");//agregando estilo "newStyle" de CSS a #first
            //$("#third").addClass("newStyle1"); 
            //$("#second").removeClass("newStyle2");//Eliminando estilo "newStyle2" de CSS a #second
            //$("#four").removeClass("newStyle2"); 
        
            $("#first").toggleClass("newStyle1");//Activa y desactiva el estilo CSS a #first
            $("#third").toggleClass("newStyle1");
        }

        function style2(){
            //$("#second").addClass("newStyle2");
            //$("#four").addClass("newStyle2"); 
            //$("#first").removeClass("newStyle1");
            //$("#third").removeClass("newStyle1"); 

            $("#second").toggleClass("newStyle2");
            $("#four").toggleClass("newStyle2");
        }

</script>

//ESTO VA EN EL index.HTML
<input type="button" value="+" id="aumenta"/>
<input type="button" value="-" id="disminuye"/>
<ol>
    <li id="first">Primero</li>
    <li id="second">Segundo</li>
    <li id="third">Tercero</li>
    <li id="four">Cuarto</li>
</ol>

    <script>
        //CAMBIANDO ATRIBUTOS CSS CON JS
        $(document).ready(function(){
            document.getElementById("aumenta").addEventListener("click",aumentar_disminuir,false);
            document.getElementById("disminuye").addEventListener("click",aumentar_disminuir,false);
        });

        var tam = $("li").css("font-size");//obteniendo valor CSS del componente "li"
        tam = parseInt(tam);//convirtiendo a entero
        //alert(tam);
        var zona_a_cambiar = "li"; //etiqueta que se quiere cambiar una propiedad CSS

        function aumentar_disminuir(e){
            if(e.target==aumenta){//detectando el ID del boton 
                //$(zona_a_cambiar).css("font-size",tam*2); 
                $(zona_a_cambiar).css({"font-size":tam*1.5+"px","color":"red"});
            }else if(e.target==disminuye){
                //$(zona_a_cambiar).css("font-size",tam*0.5);
                $(zona_a_cambiar).css({"font-size":tam*0.95+"px","color":"blue"});
            }
        }

    </script>

//ESTO VA EN EL index.HTML
<ul>
    <li id="img1">Imagen1</li>
    <li id="img2">Imagen2</li>
</ul>

<div>
    <img src=""/>
</div>
    
    <script>
        //MODIFICANDO ATRIBUTOS HTML CON JS
        $(document).ready(function(){
            var imagenes = document.querySelectorAll("ul li");
            for(var i=0;i<imagenes.length;i++){
                imagenes[i].addEventListener("mouseover",pon_imagen,false);//mouse sobre imagen
                imagenes[i].addEventListener("mouseout",quita_imagen,false);//mouse fuera de imagen
            }
        });

        function pon_imagen(e){
            if(e.target==img1){
                $("#img1").addClass("destacar");//agrega estilo CSS a #img1
                $("div img").attr("src","fotoIA.jpg");//agrega atributo html a "div img"
            }else if(e.target==img2){
                $("#img2").addClass("destacar"); 
                $("div img").attr("src","JD.png");
            }
            $("div img").addClass("modificar_img");
        }

        function quita_imagen(e){
            switch(e.target){
                case img1:
                    $("#img1").removeClass();//elimina el estilo CSS de #img1
                case img2:
                    $("#img2").removeClass();
            }
            $("div img").removeClass();
            $("div img").removeAttr("src");//elimina atributo "src" de "div img" 
        }

    </script>

//ESTO VA EN EL index.HTML
<a href="este es el primero">Primero</a></br>
<a href="este es el segundo">Segundo</a></br>
<a href="este es el tercero">Tercero</a></br>
<a href="este es el cuarto">Cuarto</a>

    <input type="button" value="mostrar" id="boton"/>

    <div id="contenedor">
        <ul>
        </ul>
    </div>

    <script>
        //FUNCION EACH Y FUNCIONES ANÓNIMAS
        $(document).ready(function(){

            document.getElementById("boton").addEventListener("click",show,false);

            function show(){
                $("a[href^='este']").each(function(){//función each
                    //a[href^='este'] -> indica a todos los componentes "a" que su atributo href inicie con "este"
                    var links = $(this).attr("href");//capturando el valor de "href" de cada componente "a" que es referenciado por "this"
                    $("ul").append("<li>"+links+"</li>");//agregando codigo HTML
                    $("ul").addClass("destacar");//agregando estilo CSS
                });
            } 
        });
    </script>
    
//ESTO VA EN EL index.HTML
<input type="button" id="boton1" value="OK!"></br>
<div id="contenedor">
    <input type="text" id="texto1">
    <div class="mensaje">
        <h1>Hola mundo</h1>
    </div>
</div>
    
    <script>
        //Eventos con JS
        $(document).ready(function(){
            $("div h1").hide();
            $("#boton1").click(saluda);
            $("#boton1").dblclick(quita_saludo);
        });

        function saluda(){
            $("h1").show();
            $("#texto1").focus();
            $("#texto1").val("Escribe aqui");
        }

        function quita_saludo(){
            $(".mensaje h1").hide();
            $("#texto1").val("");
        }
    
    </script>

//ESTO VA EN EL index.HTML
<button id="boton">Mostrar/Ocultar Elemento</button>
    <div class="mensaje">
        Este es el elemento que se mostrará u ocultará.
    </div>

    <ul>
        <li id="pon">Poner Imagen</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
        <li>Elemento 4</li>
    </ul>

    <img src="" width="550px" height="400"/>

    <script>
        //USO DEL TOGGLE(), NEXT() y BIND con eventos
        $(document).ready(function() {
          $("#boton").click(function(){ //funcion anonima
            $(".mensaje").toggle(); // ON_OFF de .mensaje
          });
          //Next()
          $("li").mouseover(function(){
                $(this).next().addClass("destacar"); //apunta al siguiente hrno de "li" y le aplica el estilo CSS "destacar"
          });
          
          var data = "JD.png"
          //BIND: El 2do parametro es la data del eventoObjeto que se envia a la funcion 
          $("#pon").bind("click",data,function(e){//funcion anonima
                //e.stopPropagation ->Sirve para parar el evento y que no se cierre en automatico
                $("img").fadeIn(2000);
                $("img").attr("src",e.data);//e.data es la "data" del eventoObjeto que recibe la funcion  
          });

          $(document).bind("dblclick keypress","",quitar_imagen)//eventos en cualquier parte de la pagina
        });

        function quitar_imagen(e){
            $("img").fadeOut(2000);
            $("img").attr("src",e.data);
        }

    </script>

//ESTO VA EN EL index.HTML
<input type="button" value="muestra!" id="boton1"/>
<input type="button" value="oculta!" id="boton2"/>
<ul id="lista">
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
    <li>Elemento 4</li>
</ul>

    <div id="contenedor">
        <img src="JD.png"/>
    </div>
    
    <script>
        //ANIMATE Y FUNCIONES ANIDADAS
        $(document).ready(function(){
            $("#boton1").click(function(){
                $("#lista").slideDown(2000);//desliza en 2seg
            });

            $("#boton2").click(function(){
                $("#lista").fadeToggle(2000);//desaparece en 2seg
            });

            //de la imagen 
            $("#contenedor img").width(80).height(80).mouseover(function(){
                $(this).animate({ //param ({estiloCSS_numericos},time,funcion)
                    marginLeft: "+=100px",//va moviendose a la derecha en 100px
                    width: "+=40px",//va anchando en 40px
                    height: "+=40px"
                },1000,function(){//funcion anidada
                    alert("creciendo");
                });
            });
        });
    </script>    

//ESTO VA EN EL index.HTML
<input type="button" value="OK!" id="boton"/>
<div id="cubo">CUBO</div>

<script>
        $(document).ready(function(){
            //USO DE LA LIBRERIA "easing"
            $("#boton").click(function(){
                $("#cubo").stop().animate({//el stop sirve para que no se forme la cola de eventos de tantas veces que se presione el boton y asi ya no paresca bucle
                    marginLeft:"100px"
                },1000,"easeOutBounce");//efecto de rebote con la libreria "easing"
            });

            $("#boton").dblclick(function(){
                $("#cubo").stop().animate({
                    marginLeft:"0px"
                },2000,"easeOutBounce");
            });
            
            //VENTANAS EMERGENTES 
            //Nota: Requiere de permisos para mostrar las ventanas, las páginas lo bloquean por defecto
            var propiedades = "width=500, height=500"
            var ventana = open("https://www.google.com.pe/?hl=es","GOOGLE",propiedades);//abriendo una ventana

        });
        
</script>


//ESTO VA EN EL index.HTML
<form id="formulario">
        <input type="text" id="dato">
        <input type="submit" value="Enviar" id="enviar">
    </form>
    
<script>
        //FORMULARIOS
        $(document).ready(function(){
            
            $("#formulario").submit(function(e){ //submit: funciona solo cuando esta dentro del componente "form"
                e.preventDefault();//Evita que el formulario se envíe normalmente

                if($("#dato").val()==""){//si el text esta vacio
                    alert("Ingrese un dato");
                    $("#dato").focus();
                }else{
                    if(isNaN($("#dato").val())){
                        alert("Ingresa un dato numérico");
                        $("#dato").val("");//Limpiando text
                        $("#dato").focus();
                    }else{
                        alert("Dato enviado");
                        $("#dato").attr("disabled","disabled");//Desabilitando text
                    }
                }
            });
        });  
</script>

*/

