class PrecioLuz {
  constructor() {
    this.url = "";
    this.correcto =
      "¡Todo correcto! JSON recibido de <a href='www.ree.es'>www.ree.es</a>";
    this.ejecutar();
  }
  cargarDatos() {
    var hora = this.hour;

    $.ajax({
      dataType: "json",
      url: this.url,
      method: "GET",
      success: function (datos) {
        var horaActualString = "<section>";

        horaActualString +=
          "<h2> Hora actual 💡 </h2>";

        horaActualString +=
          "<h3>Hora: " +
          datos.included[1].attributes.values[hora]["datetime"]
            .split("T")[1]
            .substring(0, 5) +
          "</h3>";
        horaActualString +=
          "<p>Precio: " +
          datos.included[1].attributes.values[hora]["value"] +
          "€ </p>";

        horaActualString += "</section>";

        $("main").append(horaActualString);

        var horaMasBarataString = "<section>";
        horaMasBarataString += "<h2> Hora más barata hoy 📉 </h2>";

        var horaMasBarata = 0;
        var precioMasBajo = 20000;
        for (var i = 0; i < 24; i++) {
          if (datos.included[1].attributes.values[i]["value"] < precioMasBajo) {
            horaMasBarata = i;
            precioMasBajo = datos.included[1].attributes.values[i]["value"];
          }
        }

        horaMasBarataString +=
          "<h3>Hora: " +
          datos.included[1].attributes.values[horaMasBarata]["datetime"]
            .split("T")[1]
            .substring(0, 5) +
          "</h3>";
        horaMasBarataString +=
          "<p>Precio: " +
          datos.included[1].attributes.values[horaMasBarata]["value"] +
          "€ </p>";

        horaMasBarataString += "</section>";

        $("main").append(horaMasBarataString);
      },
      error: function () {
        $("h3").html(
          "¡Tenemos problemas! No puedo obtener JSON de <a href='www.ree.es'>www.ree.es</a>"
        );
        $("h4").remove();
        $("p").remove();
      },
    });
  }

  crearElemento(tipoElemento, texto, insertarAntesDe) {
    var elemento = document.createElement(tipoElemento);
    elemento.innerHTML = texto;
    $(insertarAntesDe).before(elemento);
  }
  verDatos() {
    /* this.crearElemento(
      "h2",
      "Datos en JSON desde <a href='www.ree.es'>www.ree.es</a>",
      "footer"
    );
    this.crearElemento("h3", this.correcto, "footer"); */
    this.cargarDatos();
  }

  ejecutar() {
    this.formarURLHoy();
    this.verDatos();
  }

  formarURLHoy() {
    var today = new Date();

    var startDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      "T" +
      "00:00";
    var endDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      "T" +
      "23:59";

    this.url =
      "https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=" +
      startDate +
      "&end_date=" +
      endDate +
      "&time_trunc=hour";
    this.hour = today.getHours();
  }
}

var pl = new PrecioLuz();
