/* 
 * Archivo js para crear un usuario
 */
//Funcion para enviar los datos del formulario usuario.html al archivo CrearUsuario.php
function sendForm(){
    
    if($('#Cedula').val() == '' || $('#Nombres').val() == '' || $('#Cargo').val() == '' || $('#Email').val() == '' || $('#Direccion').val() == '' || $('#Telefono').val() == '' ){
        alert("Debe llenar todos los campos");
        return;
    }
    //se crea un objeto con los datos del formulario
    var form_data = new FormData();
        form_data.append('Cedula', $('#Cedula').val())
        form_data.append('Nombres', $('#Nombres').val())
        form_data.append('Cargo', $('#Cargo').val())
        form_data.append('Direccion', $('#Direccion').val())
        form_data.append('Telefono', $('#Telefono').val())
        form_data.append('Email', $('#Email').val())
        
        $.ajax({
        url: '../modelo/crearUsuario.php',
        dataType: "json",
        cache: false,
        processData: false,
        contentType: false,
        data: form_data,
        type: 'POST',
        success: (data) =>{
            console.log(data)
          if (data.msg=="OK") {
            alert('Se ha añadido el usuario exitosamente')    

          }else {
            alert("Error: "+data.msg)
          }
        },
        error: function(){
          alert("error en la comunicación con el servidor");
        }
      })
}

function limpiarCampos(){
    document.getElementById('Cedula').value='';
    document.getElementById('Nombres').value='';
    document.getElementById('Cargo').value='';
    document.getElementById('Direccion').value='';
    document.getElementById('Telefono').value='';
    document.getElementById('Email').value='';
}

document.getElementById('AdvancedButton2').addEventListener('click',sendForm);
document.getElementById('AdvancedButton1').addEventListener('click',limpiarCampos);

