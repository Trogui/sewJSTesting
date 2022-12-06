class Meteo {
  constructor() {
    this.apikey = "47b790fd0fc41878c80c57c9846132cb";
    this.ciudad = "";
    this.unidades = "&units=metric";
    this.idioma = "&lang=es";
    this.url = "";
    this.correcto =
      "¡Todo correcto! JSON recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>";
  }
  cargarDatos() {

    $.ajax({
      dataType: "json",
      url: this.url,
      method: "GET",
      success: function (datos) {

        var stringDatos = "";
        stringDatos = "<ul><li>Ciudad: " + datos.name + "</li>";
        stringDatos += "<li>Paí­s: " + datos.sys.country + "</li>";
        stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
        stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
        stringDatos +=
          "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
        stringDatos +=
          "<li>Temperatura máxima: " +
          datos.main.temp_max +
          " grados Celsius</li>";
        stringDatos +=
          "<li>Temperatura mí­nima: " +
          datos.main.temp_min +
          " grados Celsius</li>";
        stringDatos +=
          "<li>Presión: " + datos.main.pressure + " milibares</li>";
        stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
        stringDatos +=
          "<li>Amanece a las: " +
          new Date(datos.sys.sunrise * 1000).toLocaleTimeString() +
          "</li>";
        stringDatos +=
          "<li>Oscurece a las: " +
          new Date(datos.sys.sunset * 1000).toLocaleTimeString() +
          "</li>";
        stringDatos +=
          "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
        stringDatos +=
          "<li>Velocidad del viento: " +
          datos.wind.speed +
          " metros/segundo</li>";
        stringDatos +=
          "<li>Hora de la medida: " +
          new Date(datos.dt * 1000).toLocaleTimeString() +
          "</li>";
        stringDatos +=
          "<li>Fecha de la medida: " +
          new Date(datos.dt * 1000).toLocaleDateString() +
          "</li>";
        stringDatos +=
          "<li>Descripción: " + datos.weather[0].description + "</li>";
        stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
        stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";

        var urlIcon = "http://openweathermap.org/img/w/" + datos.weather[0].icon + ".png";

        $("footer").before("<p>" + stringDatos + "</p>");

        $("footer").before("<img src ='" + urlIcon + "' alt='Icono del tiempo'>");

      },
      error: function () {
        $("h3").html(
          "Â¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>"
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
    //Muestra el archivo JSON recibido
    this.crearElemento(
      "h2",
      "Datos en JSON desde <a href='http://openweathermap.org'>OpenWeatherMap</a>",
      "footer"
    );
    this.crearElemento("h3", this.correcto, "footer"); // Crea un elemento con DOM
    this.crearElemento("h4", "Datos", "footer"); // Crea un elemento con DOM
    this.cargarDatos();
    //$("button").attr("disabled", "disabled");
  }

  tiempoAnkara() {
    this.ciudad = "Ankara";
    this.formarURL();
    this.verDatos()
  }
  tiempoLima() {
    this.ciudad = "Lima";
    this.formarURL();
    this.verDatos()
  }
  tiempoReykjavik() {
    this.ciudad = "Reykjavik";
    this.formarURL();
    this.verDatos()
  }
  tiempoAlicante() {
    this.ciudad = "Alicante";
    this.formarURL();
    this.verDatos()
  }
  tiempoChicago() {
    this.ciudad = "Chicago";
    this.formarURL();
    this.verDatos()
  }

  formarURL(){
    this.url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      this.ciudad +
      "," +
      this.unidades +
      this.idioma +
      "&APPID=" +
      this.apikey;
  }
}

var met = new Meteo();
