<?php
/* 
 * Archivo para buscar usuarios
 */

include_once 'php_mysql.php';

$obCon = new ConectorBD();

$Cedula=$_REQUEST["Cedula"];

$Mensaje["msg"]=$obCon->initConexion("sigecom");

if($Mensaje["msg"]=="OK"){
    $sql="SELECT * FROM usuario WHERE UsuCedula='$Cedula' LIMIT 1";
    $consulta=$obCon->Query($sql);
    $DatosUsuarios=$consulta->fetch_assoc();       
    echo(json_encode($DatosUsuarios));
}else{
    echo(json_encode($Mensaje));
}