class DynamicMap {
    generarMapa(posicion) {
      var posicionActual = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude,
      };
      var mapa = new google.maps.Map(document.querySelector("main"), {
        zoom: 8,
        center: posicionActual,
      });
      new google.maps.Marker({
        position: posicionActual,
        map: mapa,
      });
    }
  
    constructor() {
      navigator.geolocation.getCurrentPosition(this.generarMapa, this.errores);
    }
    errores(error) {
      var mensaje = "";
      switch (error.code) {
        case error.PERMISSION_DENIED:
          mensaje = "El usuario no permite la petición de geolocalización";
          break;
        case error.POSITION_UNAVAILABLE:
          mensaje = "Información de geolocalización no disponible";
          break;
        case error.TIMEOUT:
          mensaje = "La petición de geolocalización ha caducado";
          break;
        case error.UNKNOWN_ERROR:
          mensaje = "Se ha producido un error desconocido";
          break;
      }
      $("footer").before(mensaje);
    }
  }
  
  dm = new DynamicMap();
  
  var mapaDinamicoGoogle = new Object();
  mapaDinamicoGoogle.initMap = dm.generarMapa;
  