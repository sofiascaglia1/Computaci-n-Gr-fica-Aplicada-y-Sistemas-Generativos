function fondoObra1() {
  pintarGradiente(fondoPG, [
    { pos: 0.00, c: "#5A8EFA" },
    { pos: 0.38, c: "#8FC2FE" },
    { pos: 0.68, c: "#CE97DD" },
    { pos: 1.00, c: "#EA2D3D" }
  ]);

  // banda cálida inferior
  dibujarConjuntoCurvas(
    fondoPG,
    10,
    ["#EA2D3D", "#D5253C", "#FF5E7E"],
    {
      ribbon: true,
      halo: true,
      angMin: 8,
      angMax: 32,
      largoMin: width * 0.55,
      largoMax: width * 0.95,
      ampMin: 90,
      ampMax: 240,
      grosorMin: 24,
      grosorMax: 70,
      alphaMin: 40,
      alphaMax: 90,
      xMin: -width * 0.15,
      xMax: width * 0.15,
      yMin: height * 0.55,
      yMax: height * 1.05,
      t1: 0.28,
      t2: 0.72,
      pasos: 64
    }
  );

  // curvas principales de arriba hacia abajo
  dibujarConjuntoCurvas(
    fondoPG,
    10,
    ["#8FC2FE", "#CE97DD", "#FCC50F", "#5B74E9", "#62D1CF", "#FFB84D", "#000000"],
    {
      ribbon: true,
      halo: true,
      angMin: -20,
angMax: 35,
      largoMin: width * 0.35,
      largoMax: width * 0.9,
      ampMin: 70,
      ampMax: 260,
      grosorMin: 16,
      grosorMax: 55,
      alphaMin: 28,
      alphaMax: 78,
      xMin: -width * 0.10,
      xMax: width * 1.05,
      yMin: -height * 0.05,
      yMax: height * 1.05,
      t1: 0.30,
      t2: 0.70,
      pasos: 62
    }
  );

  
}

function fondoObra2() {
  pintarGradiente(fondoPG, [
    { pos: 0.00, c: "#E1651F" },
    { pos: 0.18, c: "#E8BA2B" },
    { pos: 0.50, c: "#5AABB4" },
    { pos: 1.00, c: "#366EC3" }
  ]);

  dibujarConjuntoCurvas(
    fondoPG,
    10,
    ["#E1651F", "#E8BA2B", "#5AABB4", "#366EC3", "#80BC40", "#C1AAC3"],
    {
      ribbon: true,
      halo: true,
     angMin: -25,
angMax: 30,
      largoMin: width * 0.40,
      largoMax: width * 0.95,
      ampMin: 70,
      ampMax: 240,
      grosorMin: 18,
      grosorMax: 60,
      alphaMin: 28,
      alphaMax: 82,
      xMin: -width * 0.12,
      xMax: width * 1.06,
      yMin: -height * 0.05,
      yMax: height * 1.05,
      t1: 0.28,
      t2: 0.72,
      pasos: 64
    }
  );

  dibujarConjuntoCurvas(
    fondoPG,
    12,
    ["#F2EC8E", "#C1AAC3", "#80BC40", "#3A55B3", "#5AABB4"],
    {
      ribbon: true,
      halo: true,
      angMin: 112,
      angMax: 165,
      largoMin: width * 0.30,
      largoMax: width * 0.80,
      ampMin: 55,
      ampMax: 180,
      grosorMin: 14,
      grosorMax: 42,
      alphaMin: 24,
      alphaMax: 70,
      xMin: -width * 0.12,
      xMax: width * 1.06,
      yMin: -height * 0.05,
      yMax: height * 1.05,
      t1: 0.32,
      t2: 0.68,
      pasos: 62
    }
  );

  
}

function fondoObra3() {
  pintarGradiente(fondoPG, [
    { pos: 0.00, c: "#281D19" },
    { pos: 0.20, c: "#0A38C5" },
    { pos: 0.55, c: "#2518E3" },
    { pos: 1.00, c: "#73BFC8" }
  ]);

  dibujarConjuntoCurvas(
    fondoPG,
    10,
    ["#0A38C5", "#2518E3", "#2676D5", "#73BFC8", "#F6ECD6", "#281D19"],
    {
      ribbon: true,
      halo: true,
     angMin: -15,
angMax: 25,
      largoMin: width * 0.45,
      largoMax: width * 1.05,
      ampMin: 90,
      ampMax: 300,
      grosorMin: 20,
      grosorMax: 72,
      alphaMin: 32,
      alphaMax: 92,
      xMin: -width * 0.15,
      xMax: width * 1.05,
      yMin: -height * 0.05,
      yMax: height * 1.05,
      t1: 0.26,
      t2: 0.74,
      pasos: 66
    }
  );

  dibujarConjuntoCurvas(
    fondoPG,
    14,
    ["#F6ECD6", "#73BFC8", "#2676D5", "#2518E3", "#281D19"],
    {
      ribbon: true,
      halo: true,
      angMin: 118,
      angMax: 168,
      largoMin: width * 0.35,
      largoMax: width * 0.95,
      ampMin: 75,
      ampMax: 230,
      grosorMin: 16,
      grosorMax: 52,
      alphaMin: 24,
      alphaMax: 82,
      xMin: -width * 0.15,
      xMax: width * 1.05,
      yMin: -height * 0.05,
      yMax: height * 1.05,
      t1: 0.30,
      t2: 0.70,
      pasos: 64
    }
  );

  
}

function fondoObra4() {
  pintarGradiente(fondoPG, [
    { pos: 0.00, c: "#74AFFF" },
    { pos: 0.34, c: "#9E91E7" },
    { pos: 0.68, c: "#9C5885" },
    { pos: 1.00, c: "#F264A8" }
  ]);

  dibujarConjuntoCurvas(
    fondoPG,
    8,
    ["#3B528E", "#4885CA", "#74AFFF", "#9E91E7", "#B78EE3"],
    {
      ribbon: true,
      halo: true,
     angMin: -30,
angMax: 20,
      largoMin: width * 0.45,
      largoMax: width * 0.98,
      ampMin: 80,
      ampMax: 260,
      grosorMin: 18,
      grosorMax: 60,
      alphaMin: 26,
      alphaMax: 78,
      xMin: -width * 0.15,
      xMax: width * 1.05,
      yMin: -height * 0.05,
      yMax: height * 1.05,
      t1: 0.28,
      t2: 0.72,
      pasos: 66
    }
  );

  dibujarConjuntoCurvas(
    fondoPG,
    10,
    ["#3B528E", "#9C5885", "#4885CA"],
    {
      ribbon: true,
      halo: true,
      angMin: -40,
angMax: 10,
      largoMin: width * 0.35,
      largoMax: width * 0.95,
      ampMin: 70,
      ampMax: 220,
      grosorMin: 16,
      grosorMax: 52,
      alphaMin: 25,
      alphaMax: 75,
      xMin: -width * 0.15,
      xMax: width * 1.05,
      yMin: -height * 0.05,
      yMax: height * 1.05,
      t1: 0.30,
      t2: 0.70,
      pasos: 64
    }
  );

  
}

function dibujarConjuntoCurvas(pg, cantidad, colores, cfg) {
  for (let i = 0; i < cantidad; i++) {
    crearCurva(pg, colores, cfg);
  }
}

function crearCurva(pg, colores, cfg) {
  let xMin = cfg.xMin !== undefined ? cfg.xMin : -width * 0.1;
  let xMax = cfg.xMax !== undefined ? cfg.xMax : width * 1.1;
  let yMin = cfg.yMin !== undefined ? cfg.yMin : -height * 0.1;
  let yMax = cfg.yMax !== undefined ? cfg.yMax : height * 1.1;

  let p0 = createVector(random(xMin, xMax), random(yMin, yMax));

  let angulo = radians(random(cfg.angMin, cfg.angMax));
  let largo = random(cfg.largoMin, cfg.largoMax);

  let direccion = p5.Vector.fromAngle(angulo);
  let p3 = p5.Vector.add(p0, direccion.copy().mult(largo));
  let normal = createVector(-direccion.y, direccion.x);

  let t1 = cfg.t1 !== undefined ? cfg.t1 : 0.3;
  let t2 = cfg.t2 !== undefined ? cfg.t2 : 0.7;

  let p1 = p5.Vector.lerp(p0, p3, t1);
  let p2 = p5.Vector.lerp(p0, p3, t2);

  let amp = random(cfg.ampMin, cfg.ampMax) * (random() < 0.5 ? -1 : 1);
  let ampMirror = cfg.ampMirror !== undefined ? cfg.ampMirror : 1;

  p1.add(normal.copy().mult(amp));
  p2.add(normal.copy().mult(-amp * ampMirror));

  let colorBase = random(colores);
  let grosor = random(cfg.grosorMin, cfg.grosorMax);
  let alpha = random(cfg.alphaMin, cfg.alphaMax);
  let pasos = cfg.pasos !== undefined ? cfg.pasos : 64;

  if (cfg.halo) {
    dibujarCintaCurva(
      pg,
      p0,
      p1,
      p2,
      p3,
      colorBase,
      grosor * 1.25,
      alpha * 0.14,
      pasos
    );
  }

  if (cfg.ribbon) {
    dibujarCintaCurva(
      pg,
      p0,
      p1,
      p2,
      p3,
      colorBase,
      grosor,
      alpha,
      pasos
    );
  } else {
    dibujarTrazoCurvo(
      pg,
      p0,
      p1,
      p2,
      p3,
      colorBase,
      grosor,
      alpha,
      cfg.glowAlpha || 0,
      pasos
    );
  }
}

function dibujarCintaCurva(pg, p0, p1, p2, p3, col, grosorMax, alpha, pasos) {
  let c = color(col);
  let r = red(c);
  let g = green(c);
  let b = blue(c);

  let arriba = [];
  let abajo = [];

  for (let i = 0; i <= pasos; i++) {
    let t = i / pasos;

    let x = bezierPoint(p0.x, p1.x, p2.x, p3.x, t);
    let y = bezierPoint(p0.y, p1.y, p2.y, p3.y, t);

    let tx = bezierTangent(p0.x, p1.x, p2.x, p3.x, t);
    let ty = bezierTangent(p0.y, p1.y, p2.y, p3.y, t);

    let angulo = atan2(ty, tx);
    let ancho = sin(t * PI) * grosorMax;

    let px = cos(angulo + HALF_PI) * ancho;
    let py = sin(angulo + HALF_PI) * ancho;

    arriba.push({ x: x + px, y: y + py });
    abajo.push({ x: x - px, y: y - py });
  }

  pg.noStroke();
  pg.fill(r, g, b, alpha);

  pg.beginShape();
  for (let i = 0; i < arriba.length; i++) {
    pg.vertex(arriba[i].x, arriba[i].y);
  }
  for (let i = abajo.length - 1; i >= 0; i--) {
    pg.vertex(abajo[i].x, abajo[i].y);
  }
  pg.endShape(CLOSE);
}

function dibujarTrazoCurvo(pg, p0, p1, p2, p3, col, grosorMax, alpha, glowAlpha, pasos) {
  let c = color(col);
  let r = red(c);
  let g = green(c);
  let b = blue(c);

  let anterior = p0.copy();

  for (let i = 1; i <= pasos; i++) {
    let t = i / pasos;

    let x = bezierPoint(p0.x, p1.x, p2.x, p3.x, t);
    let y = bezierPoint(p0.y, p1.y, p2.y, p3.y, t);
    let actual = createVector(x, y);

    let grosor = map(sin(t * PI), 0, 1, 1, grosorMax);

    if (glowAlpha > 0) {
      pg.stroke(r, g, b, glowAlpha);
      pg.strokeWeight(grosor + 8);
      pg.line(anterior.x, anterior.y, actual.x, actual.y);
    }

    pg.stroke(r, g, b, alpha);
    pg.strokeWeight(grosor);
    pg.line(anterior.x, anterior.y, actual.x, actual.y);

    anterior = actual;
  }
}

function pintarGradiente(pg, stops) {
  let pasos = height;

  for (let y = 0; y < pasos; y++) {
    let t = pasos <= 1 ? 0 : y / (pasos - 1);
    let c = colorDesdeStops(stops, t);
    pg.stroke(c);
    pg.strokeWeight(1);
    pg.line(0, y, width, y);
  }
}

function colorDesdeStops(stops, t) {
  t = constrain(t, 0, 1);

  for (let i = 0; i < stops.length - 1; i++) {
    let a = stops[i];
    let b = stops[i + 1];

    if (t >= a.pos && t <= b.pos) {
      let local = map(t, a.pos, b.pos, 0, 1);
      return lerpColor(color(a.c), color(b.c), local);
    }
  }

  return color(stops[stops.length - 1].c);
}
