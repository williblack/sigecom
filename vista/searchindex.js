// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Untitled Page", "untitled page por favor seleccione su rol ", "");
   this[database_length++] = new SearchPage("LOGIN.html", "LOGIN", "login ", "");
   this[database_length++] = new SearchPage("ADMINISTRADOR.html", "ADMINISTRADOR", "administrador ", "");
   this[database_length++] = new SearchPage("Crear_Usuario.html", "Crear_Usuario", "crear usuario limpiar campos guardar datos regresar ", "");
   this[database_length++] = new SearchPage("Eliminar_Usuario.html", "Eliminar_Usuario", "eliminar usuario regresar ", "");
   this[database_length++] = new SearchPage("Buscar_Usuario.html", "Buscar_Usuario", "buscar usuario regresar ", "");
   this[database_length++] = new SearchPage("Modificar_Usuario.html", "Modificar_Usuario", "modificar usuario guardar datos regresar ", "");
   this[database_length++] = new SearchPage("USUARIO.html", "USUARIO", "usuario ", "");
   this[database_length++] = new SearchPage("Crear_Cliente.html", "Crear_Cliente", "crear cliente limpiar campos guardar datos regresar ", "");
   this[database_length++] = new SearchPage("Buscar_Cliente.html", "Buscar_Cliente", "buscar cliente regresar ", "");
   this[database_length++] = new SearchPage("Eliminar_Cliente.html", "Eliminar_Cliente", "eliminar cliente regresar ", "");
   this[database_length++] = new SearchPage("Modificar_Cliente.html", "Modificar_Cliente", "modificar cliente guardar datos regresar ", "");
   this[database_length++] = new SearchPage("CLIENTE.html", "CLIENTE", "cliente regresar ", "");
   this[database_length++] = new SearchPage("INVENTARIO.html", "INVENTARIO", "inventario generar imprimir exportar ", "");
   this[database_length++] = new SearchPage("PRODUCTO.html", "PRODUCTO", "producto regresar ", "");
   this[database_length++] = new SearchPage("MENU.html", "MENU", "menu regresar plato seleccione el cantidad precio detalle pedido tomar borrar imprimir total id ", "");
   this[database_length++] = new SearchPage("FACTURA.html", "FACTURA", "factura regresar detalle imprimir id fecha venta exportar ", "");
   return this;
}
