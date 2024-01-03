<?php

$el_usuario=isset($_GET['usuario']) ? $_GET['usuario'] : $_POST['usuario'];

$el_array = new stdClass();

if($el_usuario=="Gerson"){
    $el_array->Nombre="Gerson";
    $el_array->Apellido="Chaev";
    $el_array->Edad="15"; 
    $json = json_encode($el_array);
    echo $json;
}

?>