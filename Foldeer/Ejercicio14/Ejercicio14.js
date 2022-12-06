class Corazon {
  dibujar(color) {
    var canvas = document.querySelector("canvas");
    var canvas1 = canvas.getContext("2d");

    canvas1.resetTransform();
    canvas1.clearRect(0, 0, canvas.width, canvas.height);

    canvas1.fillStyle = color;

    canvas1.translate(canvas.width / 2 - 75, canvas.height / 2 - 75);

    canvas1.beginPath();
    canvas1.moveTo(75, 40);
    canvas1.bezierCurveTo(75, 37, 70, 25, 50, 25);
    canvas1.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    canvas1.bezierCurveTo(20, 80, 40, 102, 75, 120);
    canvas1.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    canvas1.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    canvas1.bezierCurveTo(85, 25, 75, 37, 75, 40);
    canvas1.fill();
  }
}

class Rectangulo {
  dibujar(color) {
    var canvas = document.querySelector("canvas");
    var canvas1 = canvas.getContext("2d");
    canvas1.resetTransform();
    canvas1.clearRect(0, 0, canvas.width, canvas.height);

    canvas1.fillStyle = color;
    var width = canvas.width - 30;
    var height = canvas.height - 20;

    canvas1.translate(15, 10);
    canvas1.fillRect(0, 0, width, height);
  }
}

class Circulo {
  dibujar(color) {
    var canvas = document.querySelector("canvas");
    var canvas1 = canvas.getContext("2d");

    canvas1.resetTransform();
    canvas1.clearRect(0, 0, canvas.width, canvas.height);

    canvas1.strokeStyle = color;

    canvas1.translate(canvas.width / 2, canvas.height / 2);

    canvas1.beginPath();
    canvas1.arc(0, 0, 50, 0, 2 * Math.PI);
    canvas1.stroke();
  }
}

class Triangulo {
  dibujar(color) {
    var canvas = document.querySelector("canvas");
    var canvas1 = canvas.getContext("2d");

    canvas1.resetTransform();
    canvas1.clearRect(0, 0, canvas.width, canvas.height);

    canvas1.fillStyle = color;

    
    canvas1.translate(canvas.width / 2 - 75, canvas.height / 2 - 50);

    canvas1.beginPath();
    canvas1.moveTo(0, 75);
    canvas1.lineTo(75, 0);
    canvas1.lineTo(150, 75);

    canvas1.fill();
  }
}

class Canvas {
  constructor() {
    this.figura = null;
    this.color = null;
  }

  dibujar() {
    if (this.figura != null && this.color != null) {
      this.figura.dibujar(this.color);
    }
  }

  triangulo() {
    this.figura = new Triangulo();
    this.actualizarInfo();
  }

  rectangulo() {
    this.figura = new Rectangulo();
    this.actualizarInfo();
  }
  circulo() {
    this.figura = new Circulo();
    this.actualizarInfo();
  }

  corazon() {
    this.figura = new Corazon();
    this.actualizarInfo();
  }

  rojo() {
    this.color = "#FF0000";
    this.actualizarInfo();
  }
  azul() {
    this.color = "#0000FF";
    this.actualizarInfo();
  }
  verde() {
    this.color = "#00FF00";
    this.actualizarInfo();
  }

  actualizarInfo() {
    if (this.figura == null) {
      $("h2").text("Figura:  -  Color: " + this.color);
    } else if (this.color == null) {
      $("h2").text("Figura: " + this.figura.constructor.name + " -  Color: ");
    } else {
      $("h2").text(
        "Figura: " + this.figura.constructor.name + " -  Color: " + this.color
      );
    }
  }

  leerArchivo() {
    var files = document.querySelector("input[type=file]").files;
    var archivo = files[0];

    var reader = new FileReader();
    reader.onload = function (evento) {
      var json = $.parseJSON(reader.result);
      this.color = json.color;
      this.actualizarInfo();
    }.bind(this);
    reader.readAsText(archivo);
    
    
  }

  canvasFullScreen(){

    var elem = document.querySelector("main"); 

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } 

}

cv = new Canvas();
