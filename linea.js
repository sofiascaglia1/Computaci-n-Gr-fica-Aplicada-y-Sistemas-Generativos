class Linea {
  constructor() {

  this.angulo =
    radians(random(25, 55) + random(-15, 15));

  this.longitud =
    random(300, 900);

  let encontrado = false;
  while (!encontrado) {
    let x = random(width);
    let y = random(height);
    let finX =
      x +
      cos(this.angulo) *
      this.longitud;
    let finY =
      y +
      sin(this.angulo) *
      this.longitud;
    if (
      finX >= 0 &&
      finX <= width &&
      finY >= 0 &&
      finY <= height
    ) {

      this.inicio =
        createVector(x, y);
      encontrado = true;
    }
  }
    this.color =
random(obraActual.lineas);

    this.tiempo = 0;
    this.brillo = random() < 0.25;
    this.grosorMaximo = random(8, 16);
    this.tipoCurva = random([
      "serpiente",
      "serpiente",
      "serpiente",
      "serpiente",
      "u",
      "u",
      "recta"
      ]);

    this.semilla = random(1000);
    this.velocidad = random(0.02, 0.05);
    this.amplitudBase = random(50, 200);
    this.amplitudAnimada = this.amplitudBase;
this.factorSilbido = 0;
    this.progreso = 0;
  }

 actualizar() {

  if (this.progreso < 1) {
    this.progreso += 0.03;
  }

  if (silbido) {

    this.factorSilbido = lerp(
      this.factorSilbido,
      1,
      0.03
    );

  } else {

    this.factorSilbido = lerp(
      this.factorSilbido,
      0,
      0.15
    );

  }

  if (this.tipoCurva == "serpiente") {

    this.tiempo +=
      this.velocidad *
      this.factorSilbido;

    let onda = map(
  sin(this.tiempo + this.semilla),
  -1,
  1,
  this.amplitudBase * 0.7,
  this.amplitudBase * 1.3
);

if (silbido) {

  this.amplitudAnimada = lerp(
    this.amplitudAnimada,
    onda,
    0.03
  );
}
  }
}

  redistribuir() {

    this.inicio = createVector(
      random(width),
      random(height)
      );
    // vuelve a dibujarse desde cero
    this.progreso = 0;
  }

  mostrar() {
    let p0 = this.inicio.copy();
    let direccion = p5.Vector.fromAngle(this.angulo);
    let p3 = p5.Vector.add(p0, direccion.copy().mult(this.longitud));
    let normal = createVector(-direccion.y, direccion.x);
    let p1 = p5.Vector.add(p0, direccion.copy().mult(this.longitud * 0.3));
    let p2 = p5.Vector.add(p0, direccion.copy().mult(this.longitud * 0.7));

    if (this.tipoCurva == "u") {
      p1.add(normal.copy().mult(this.amplitudAnimada));
      p2.add(normal.copy().mult(this.amplitudAnimada));
    }

    if (this.tipoCurva == "serpiente") {
      p1.add(normal.copy().mult(this.amplitudAnimada));
      p2.add(normal.copy().mult(-this.amplitudAnimada));
    }

    if (this.tipoCurva == "recta") {
      p1.add(normal.copy().mult(10));
      p2.add(normal.copy().mult(-10));
    }

    let pasos = 80;
    let pasosVisibles = pasos * this.progreso;
    let anterior = p0.copy();


    for (let i = 1; i <= pasosVisibles; i++) {
      let t = i / pasos;
      let x = bezierPoint(p0.x, p1.x, p2.x, p3.x, t);
      let y = bezierPoint(p0.y, p1.y, p2.y, p3.y, t);
      let actual = createVector(x, y);

      let grosor = map(sin(t * PI), 0, 1, 1, this.grosorMaximo);


      if (this.brillo) {
        stroke(red(this.color), green(this.color), blue(this.color), 40);
        strokeWeight(grosor + 10);
        line(anterior.x, anterior.y, actual.x, actual.y);
      }

      stroke(this.color);
      strokeWeight(grosor);
      line(anterior.x, anterior.y, actual.x, actual.y);
      anterior = actual;
    }
  }
}
