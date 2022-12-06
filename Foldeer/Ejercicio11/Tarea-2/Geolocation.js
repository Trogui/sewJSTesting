class Geolocation{

    obtener(){
    navigator.geolocation.getCurrentPosition(this.mostrar,this.errores);
    }

    mostrar(posicion){
    var datos='';
    datos+= "<p>Se ha realizado correctamente la petición de geolocalización<p>"
    datos+="<h2>Datos coordenadas </h2>"
    datos+='<p>Latitud: '+posicion.coords.latitude+' grados</p>'; 
    datos+='<p>Longitud: '+posicion.coords.longitude+' grados</p>'; 
    datos+='<p>Precisión: '+posicion.coords.accuracy+' metros</p>';
    
    $("footer").before(datos);
    }
  
  errores(error){
    var mensaje = '';
    switch(error.code) {
      case error.PERMISSION_DENIED:
          mensaje = "El usuario no permite la petición de geolocalización"
          break;
      case error.POSITION_UNAVAILABLE:
          mensaje = "Información de geolocalización no disponible"
          break;
      case error.TIMEOUT:
          mensaje = "La petición de geolocalización ha caducado"
          break;
      case error.UNKNOWN_ERROR:
          mensaje = "Se ha producido un error desconocido"
          break;
      }
      $("footer").before(mensaje );

  }

  
}

gl = new Geolocation();


