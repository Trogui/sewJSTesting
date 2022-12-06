class Geolocation{

    obtener(){
    navigator.geolocation.getCurrentPosition(this.mostrar,this.errores);
    }

    mostrar(posicion){
    var datos='';
    datos+="<h2>Datos coordenadas </h2>"
    datos+='<p>Latitud: '+posicion.coords.latitude+' grados</p>'; 
    datos+='<p>Longitud: '+posicion.coords.longitude+' grados</p>'; 
    datos+='<p>Precisión: '+posicion.coords.accuracy+' metros</p>';
    
    
    $("footer").before(datos);
    }
  
  errores(error){
    alert('Error: '+error.code+' '+error.message);
  }

  
}

gl = new Geolocation();