class Leedor {
  leerArchivo() {
    var files = document.querySelector("input[type=file]").files;
    var archivo = files[0];

    $("footer").before("<p>" + "Nombre del archivo: " + archivo.name + "</p>");
    $("footer").before(
      "<p>" + "Tamaño del archivo: " + archivo.size + " bytes" + "</p>"
    );
    $("footer").before("<p>" + "Tipo del archivo: " + archivo.type + "</p>");
    $("footer").before(
      "<p>" +
        "Fecha de la última modificación: " +
        archivo.lastModifiedDate +
        "</p>"
    );
    var tipoTexto = /text.*/;
    var tipoJson = /json.*/;
    var reader = new FileReader();

  if (archivo.type.match(tipoTexto) || archivo.type.match(tipoJson)) {
    reader.onload = function (evento) {
      $("footer").before(
        "<p>" + "Contenido del archivo de texto: " + reader.result + "</p>"
      );
    };
    reader.readAsText(archivo);
  } else {
    $("footer").before("<p>" + "Error : ¡¡¡ Archivo no válido !!!" + "</p>");
  }
}
}

fl = new Leedor();
