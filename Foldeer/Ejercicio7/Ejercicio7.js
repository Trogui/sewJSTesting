"use strict";
class Manager{
    constructor(){

    }

    mostrarTabla(){
        $("table").show();
    }

    esconderTabla(){
        $("table").hide();
    }

    mostrarAside(){
        $("aside").show();
    }

    esconderAside(){
        $("aside").hide();
    }

    cambiarAside(){
        $("aside p").text("Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
       + "Donec feugiat et orci ac tincidunt. Nunc accumsan pulvinar elementum."
       + "Donec dictum turpis lectus, vel consectetur risus luctus a." 
       + "Nulla facilisi. Aliquam posuere turpis in nisl condimentum consectetur."
       + " Aenean a vehicula enim. Ut ornare erat ante, ac commodo nulla gravida id.") 
    }

    revertirAside(){
        $("aside p").text("De acuerdo con el sitio web oficial de React es una biblioteca de "
        + "JavaScript para la construcción de interfaces de usuario, por lo que la "
        + "respuesta corta es que React es una biblioteca de JavaScript, pero el "
        + "hecho es que tiene varias características de un framework.")
    }

    añadirParrafo(){
        $("table").prepend("<p> Estas son las versiones mas importantes de React</p>");
    }

    quitarParrafo(){
        $("main p").remove();
    }
    contarTabla(){
        $("table").append("<p> La tabla tiene " + $("table tr").length + " filas y " + $("table tr th").length + " columnas</p>");
    }

    recorrerDom(){
        $("*", document.body).each(function() {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode( "Etiqueta padre : <"  + etiquetaPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }
}

var man = new Manager();