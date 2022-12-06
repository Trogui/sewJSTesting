class DynamicMap {
    generarMapa(posicion) {

      this.posicionActual = {
        lat: posicion.coords.latitude,
        lng: posicion.coords.longitude,
      };
     
      this.mapa = new google.maps.Map(document.querySelector("main"), {
        zoom: 8,
        center: this.posicionActual,
      });
      new google.maps.Marker({
        position: this.posicionActual,
        map: this.mapa,
      });
      
    }
  
    constructor() {
      navigator.geolocation.getCurrentPosition(this.generarMapa.bind(this), this.errores);
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

    museo(){
      var museoFernandoAlonso = {
        lat: 43.42884687826093,
        lng: -5.831323227263286,
      };

      new google.maps.Marker({
        position: museoFernandoAlonso,
        map: this.mapa
      });

      new google.maps.Polyline({
        path: [
          new google.maps.LatLng(this.posicionActual.lat, this.posicionActual.lng), 
          new google.maps.LatLng(museoFernandoAlonso.lat, museoFernandoAlonso.lng)
        ],
        strokeColor: "#8888ff",
        strokeOpacity: 0.7,
        strokeWeight: 4,
        map: this.mapa
    });
  }

    montmelo(){
      var montmelo = {
        lat: 41.56946855,
        lng: 2.25806310666666,
      };

      new google.maps.Marker({
        position: montmelo,
        map: this.mapa
      });

      new google.maps.Polyline({
        path: [
          new google.maps.LatLng(this.posicionActual.lat, this.posicionActual.lng), 
          new google.maps.LatLng(montmelo.lat, montmelo.lng)
        ],
        strokeColor: "#88ff88",
        strokeOpacity: 0.7,
        strokeWeight: 4,
        map: this.mapa
    });
  }

    valencia(){
      var valencia = {
        lat: 39.4574,
        lng: -0.3310,
      };

      new google.maps.Marker({
        position: valencia,
        map: this.mapa
      });

      new google.maps.Polyline({
        path: [
          new google.maps.LatLng(this.posicionActual.lat, this.posicionActual.lng), 
          new google.maps.LatLng(valencia.lat, valencia.lng)
        ],
        strokeColor: "#ff8888",
        strokeOpacity: 0.7,
        strokeWeight: 4,
        map: this.mapa
    });

    }

  }
  
  dm = new DynamicMap();
  