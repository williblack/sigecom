<?php
/* 
 * Archivo para crear usuarios
 */

include_once 'php_mysql.php';

$obCon = new ConectorBD();

$Datos["UsuCedula"]=$_REQUEST["Cedula"];
$Datos["UsuNombre"]=$_REQUEST["Nombres"];
$Datos["UsuCargo"]=$_REQUEST["Cargo"];
$Datos["UsuDireccion"]=$_REQUEST["Direccion"];
$Datos["UsuTelefono"]=$_REQUEST["Telefono"];
$Datos["UsuEmail"]=$_REQUEST["Email"];

$Mensaje["msg"]=$obCon->initConexion("sigecom");

if($Mensaje["msg"]=="OK"){
    $sql=$obCon->getSQLInsert("usuario", $Datos);
    $obCon->Query($sql);
    $Mensaje["msg"]="Usuario Creado Satisfactoriamente";
    print($Mensaje["msg"]);
}else{
    print($Mensaje["msg"]);
}