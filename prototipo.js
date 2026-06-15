
let lineas = [];

let mic;
let nivelMic = 0;
let gestor;
let intensidad = 0;
let mostrarPanel = false;


let fondoPG;
let obraActual;

let paletas = [
  {
    nombre: "obra1",
    fondo: ["#EA2D3D", "#5A8EFA"],
    lineas: [
      "#8FC2FE",
      "#CE97DD",
      "#FCC50F",
      "#5B74E9",
      "#62D1CF",
      "#D5253C",
      "#000000"
    ]
  },

  {
    nombre: "obra2",
    fondo: ["#E1651F", "#E8BA2B", "#5AABB4", "#366EC3"],
    lineas: [
      "#C1AAC3",
      "#80BC40",
      "#3A55B3",
      "#F2EC8E"
    ]
  },

  {
    nombre: "obra3",
    fondo: ["#73BFC8", "#0A38C5", "#F6ECD6", "#2518E3", "#2676D5", "#281D19"],
    lineas: [
      "#73BFC8",
      "#F6ECD6",
      "#2676D5",
      "#2518E3",
      "#281D19"
    ]
  },

  {
    nombre: "obra4",
    fondo: ["#9C5885", "#4885CA", "#3B528E", "#9E91E7"],
    lineas: [
      "#F264A8",
      "#74AFFF",
      "#06D3ED",
      "#B78EE3",
      "#CA79C6",
      "#3B528E"
    ]
  }
];

function setup() {

  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();

  mic.start(() => {

    startPitch();

  });

  gestor = new GestorSenial(
    0,
    0.4
  );

  gestorFrec = new GestorSenial(
    40,
    100
  );

  noFill();

  obraActual = random(paletas);

  fondoPG = createGraphics(width, height);
  fondoPG.pixelDensity(1);

  generarFondo();
}

function draw() {

  nivelMic = mic.getLevel();
  gestor.actualizar(nivelMic);
  intensidad = gestor.filtrada;
  let altura =
gestorFrec.filtrada;
if (frameCount % 20 == 0) {

  console.log(
    "FREC:",
    frec,
    "NOTA:",
    notaMidi,
    "PITCH:",
    hayPitch
  );

}
  
//  if (frameCount % 20 == 0) {
//  console.log(nivelMic);
//}

  antesHabiaSonido = haySonido;

haySonido = intensidad > 0.10;

empezoSonido =
haySonido && !antesHabiaSonido;

terminoSonido =
!haySonido && antesHabiaSonido;

if (empezoSonido) {
  marcaInicioSonido = millis();
  durSilencio =
    millis() -
    marcaFinSonido;
}

if (haySonido) {
  durSonido =
    millis() -
    marcaInicioSonido;
}

if (terminoSonido) {
  durSonido =
    millis() -
    marcaInicioSonido;
  marcaFinSonido =
    millis();
}

if (!haySonido) {
  durSilencio =
    millis() -
    marcaFinSonido;
}

detectarGrave();
  detectarSilbido();
  detectarChasquido();
  detectarAplauso();
  detectarShhh();

  image(fondoPG, 0, 0);

  for (let i = 0; i < lineas.length; i++) {
    lineas[i].actualizar();
    lineas[i].mostrar();
  }
if (mostrarPanel) {
  fill(255);
  stroke(0);
  strokeWeight(2);
  textSize(30);

  fill(255);
rect(30, 30, nivelMic * 5000, 30);

fill(255);
text("MIC: " + nf(nivelMic, 1, 4), 30, 90);
text(
  "FILTRADA: " +
  nf(gestor.filtrada, 1, 4),
  30,
  130
);
text(
  "SONIDO: " + haySonido,
  30,
  170
);
text(
  "FREC: " +
  nf(frec,1,2),
  30,
  210
);

text(
  "NOTA: " +
  nf(notaMidi,1,2),
  30,
  250
);

text(
  "PITCH: " +
  hayPitch,
  30,
  290
);
text(
  "GRAVE: " +
  graveDetectado,
  30,
  330
);

text(
  "SILBIDO: " +
  silbidoDetectado,
  30,
  370
);
text(
  "APLAUSO: " +
  aplausoDetectado,
  30,
  410
);
text(
  "SHHH: " +
  shhhDetectado,
  30,
  450
);
text(
  "INTENSIDAD: " +
  intensidad.toFixed(3),
  30,
  570
);
text(
  "DURACION MS: " +
  durSonido,
  30,
  610
);
text(
  "DURACION: " +
  (durSonido / 1000).toFixed(2),
  30,
  490
);

text(
  "SILENCIO: " +
  (durSilencio / 1000).toFixed(2),
  30,
  530
);
text(
  "IIII: " + chasquidoDetectado,
  30,
  650
);
}
  noFill();
}

function generarFondo() {
  fondoPG.clear();
  fondoPG.background(color(obraActual.fondo[0]));
  fondoPG.strokeCap(ROUND);
  fondoPG.strokeJoin(ROUND);

  if (obraActual.nombre === "obra1") {
    fondoObra1();
  } else if (obraActual.nombre === "obra2") {
    fondoObra2();
  } else if (obraActual.nombre === "obra3") {
    fondoObra3();
  } else if (obraActual.nombre === "obra4") {
    fondoObra4();
  }
}

function keyPressed() {
  if (key == "1") {
    for (let i = 0; i < 50; i++) {
      agregarLinea();
    }
  }

  if (key == "s" || key == "S") {
    silbido = true;
  }

  if (key == "c" || key == "C") {
    for (let i = 0; i < lineas.length; i++) {
      lineas[i].redistribuir();
    }
  }

  if (key == "b" || key == "B") {
    let nuevasLineas = [];
    for (let i = 0; i < lineas.length; i++) {
      if (lineas[i].tipoCurva != "recta") {
        nuevasLineas.push(lineas[i]);
      }
    }
    lineas = nuevasLineas;
  }
  if (key == "r" || key == "R") {

  lineas = [];

  obraActual = random(paletas);

  generarFondo();

}
if (key == "p" || key == "P") {
  mostrarPanel = !mostrarPanel;
}
}

function keyReleased() {
  if (key == "s" || key == "S") {
    silbido = false;
  }
}

function agregarLinea() {
  let nuevaLinea = new Linea();
  let superposiciones = 0;

  for (let i = 0; i < lineas.length; i++) {
    let distancia = dist(
      nuevaLinea.inicio.x,
      nuevaLinea.inicio.y,
      lineas[i].inicio.x,
      lineas[i].inicio.y
    );

    if (distancia < 250) {
      superposiciones++;
    }
  }

  if (superposiciones <= 3) {
    lineas.push(nuevaLinea);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  fondoPG = createGraphics(width, height);
  fondoPG.pixelDensity(1);
  generarFondo();
}
