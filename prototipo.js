let lineas = [];
let silbido = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  fondoDegradado();
  for (let i = 0; i < lineas.length; i++) {
    lineas[i].actualizar();
    lineas[i].mostrar();
  }
}

function fondoDegradado() {
  let color1 = color("#FFD84D");
  let color2 = color("#FF3EA5");
  for (let y = 0; y < height; y++) {
    let mezcla = map(y, 0, height, 0, 1);
    let c = lerpColor(color1, color2, mezcla);
    stroke(c);
    line(0, y, width, y);
  }
}
//
function keyPressed() {

  if (key == "1") {
    // máximo 60 líneas
    for (let i = 0; i < 50; i++) {
      agregarLinea();
    }
  }

  if (key == "s" ||key == "S") {
    silbido = true;
  }

  if (key == "c" || key == "C") {
    for (let i = 0; i < lineas.length; i++) {
      lineas[i].redistribuir();
    }
  }

  if (key == "b" || key =="B") {
    let nuevasLineas = [];
    for (let i = 0; i < lineas.length; i++) {
      if (lineas[i].tipoCurva != "recta") {
        nuevasLineas.push(lineas[i]);
      }
    }
    lineas = nuevasLineas;
  }
}

function keyReleased() {
  if (key == "s" ||key == "S") {
    silbido = false;
  }
}


function agregarLinea() {
  let nuevaLinea = new Linea();
  let superposiciones = 0;

  for (let i = 0; i < lineas.length; i++) {
    let distancia = dist(nuevaLinea.inicio.x, nuevaLinea.inicio.y, lineas[i].inicio.x, lineas[i].inicio.y);

    if (distancia < 250) {
      superposiciones++;
    }
  }
  if (superposiciones <= 3) {
    lineas.push(nuevaLinea);
  }
}
