class DynamicMap {
  generarMapa() {
    var museoFernandoAlonso = {
      lat: 43.42884687826093,
      lng: -5.831323227263286,
    };
    var mapaMuseo = new google.maps.Map(document.querySelector("main"), {
      zoom: 8,
      center: museoFernandoAlonso,
    });
    var marcador = new google.maps.Marker({
      position: museoFernandoAlonso,
      map: mapaMuseo,
    });
  }
}

dm = new DynamicMap();

var mapaDinamicoGoogle = new Object();
mapaDinamicoGoogle.initMap = dm.generarMapa;
