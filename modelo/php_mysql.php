<?php
//mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); //Habilito el reporte de errores

  class ConectorBD{
    private $host = 'localhost';
    private $user = 'root';
    private $password = 'pirlo1985';
    private $conexion;
    /**
     * Inicializa la conexion con la base de datos utilizando mysqli
     * @param type $nombre_db -> Nombre de la base de datos a la que se va a conectar
     * @return string ->Un error o un OK indicando el exito en la conexion
     */
    function initConexion($nombre_db){
      $this->conexion = new mysqli($this->host, $this->user, $this->password, $nombre_db);
      if ($this->conexion->connect_error) {
        return "Error: " . $this->conexion->connect_error;
      }else {
        return "OK";
      }
    }

   
    /**
     * Esta Funcion devuelve el sql para la insercion de datos.
     * @param type $Tabla ->Tabla en la que se insertaran los datos
     * @param type $Datos -> Vector que contiene en los indices los nombres de los campos y el valor
     * @return string -> Retorna el sql
     */
    function getSQLInsert($Tabla,$Datos){
      $sqlCampos = "INSERT INTO $Tabla (";
      $sqlValores= ' VALUES (';
      $length_array = count($Datos);
      $i = 1;
      foreach ($Datos as $key => $value) {
        $sqlCampos .= "`$key`";
        $sqlValores .= "'$value'";
        if ($i!= $length_array) {
          $sqlCampos .= ", " ;
          $sqlValores .= ", " ;
        }else {
          $sqlCampos .= ')';
          $sqlValores .= ');';
        }
        $i++;
      }
      $sql=$sqlCampos.$sqlValores;
      return $sql;
    }

    //Ejecutar un query.
    function Query($sql){
        
        return $this->conexion->query($sql); 
        
    }
    
   
    //Cierra la conexion
    function cerrarConexion(){
      $this->conexion->close();
    }


  }

 ?>
