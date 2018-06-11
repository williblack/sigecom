/* 
 * Archivo js para buscar un usuario
 */
//Funcion para enviar los datos de la busqueda y escribirlos en los campos del formulario para editar
function BuscarMostrar(){
   
    //se crea un objeto con los datos del formulario
    var form_data = new FormData();
        form_data.append('Cedula', $('#CedulaBuscar').val())
                
        $.ajax({
        url: '../modelo/buscarUsuario.php',
        dataType: "json",
        cache: false,
        processData: false,
        contentType: false,
        data: form_data,
        type: 'POST',
        success: (data) =>{
            console.log(data)
            if(data.idUsuario){
                document.getElementById('Cedula').value=data.UsuCedula;
                document.getElementById('Nombres').value=data.UsuNombre;
                document.getElementById('Cargo').value=data.UsuCargo;
                document.getElementById('Direccion').value=data.UsuDireccion;
                document.getElementById('Telefono').value=data.UsuTelefono;
                document.getElementById('Correo').value=data.UsuEmail;
            }
        },
        error: function(){
          alert("error en la comunicación con el servidor");
        }
      })
}

document.getElementById('CedulaBuscar').addEventListener('keyup',BuscarMostrar);
