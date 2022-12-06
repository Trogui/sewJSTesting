class Leedor {
  generarMapa() {
    var museoFernandoAlonso = {
      lat: 43.42884687826093,
      lng: -5.831323227263286,
    };
    this.mapaMuseo = new google.maps.Map(document.querySelector("main"), {
      zoom: 2,
      center: museoFernandoAlonso,
    });
    var marcador = new google.maps.Marker({
      position: museoFernandoAlonso,
      map: this.mapaMuseo,
    });
  }

  leerArchivo() {
    var files = document.querySelector("input[type=file]").files;
    var archivo = files[0];

    this.generarMapa();
    

    var map = this.mapaMuseo;

    var reader = new FileReader();
    reader.onload = function (evento) {
      $(reader.result)
        .find("Placemark")
        .each(function () {
          $(this)
            .find("coordinates")
            .each(function () {
              var coordinates = $(this).text().split(",");

              var coords = {
                lat: Number(coordinates[1]),
                lng: Number(coordinates[0]),
              };

              console.log(coords);

              new google.maps.Marker({
                position: coords,
                map: map,
              });
            });
        });
    };

    reader.readAsText(archivo);
  }
}

fl = new Leedor();
