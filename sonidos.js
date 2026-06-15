let graveActivo = false;
let silbido = false;
let chasquidoDetectado = false;
let chasquidoActivo = false;
let durSonido = 0;
let durSilencio = 0;
let graveDetectado = false;
let silbidoDetectado = false;
let empezoSonido = false;
let terminoSonido = false;
let haySonido = false;
let antesHabiaSonido = false;
let aplausoDetectado = false;
let aplausoActivo = false;
let shhhDetectado = false;
let shhhActivo = false;
let marcaInicioSonido = 0;
let marcaFinSonido = 0;



// -------------------
// DETECCION DE GRAVE
// -------------------

function detectarGrave() { 
  graveDetectado = false;

if (
  hayPitch &&
  notaMidi >= 48 &&
  notaMidi <= 53 &&
  intensidad > 0.045
  &&durSonido > 150
)
{

  graveDetectado = true;

  if (!graveActivo) {

    graveActivo = true;

    for (let i = 0; i < 50; i++) {
      agregarLinea();
    }

  }

} else {

  graveActivo = false;

}
}
// -------------------
// DETECCION SILBIDO
// -------------------

function detectarSilbido(){
silbidoDetectado = false;
silbido = false;

if (
  hayPitch &&
  notaMidi >= 87 &&
  notaMidi <= 95 &&
  intensidad > 0.01
) {

  silbidoDetectado = true;
  silbido = true;

}
}
// -------------------
// DETECCION CHASQUIDO
// -------------------
function detectarChasquido(){
if (
  hayPitch &&
  notaMidi >= 74 &&
  notaMidi <= 80
)
{
  chasquidoDetectado = true;

  if (!chasquidoActivo) {

    chasquidoActivo = true;

    for (let i = 0; i < lineas.length; i++) {
      lineas[i].redistribuir();
    }

  }

} else {

  chasquidoDetectado = false;
  chasquidoActivo = false;

}
}
// -------------------
// DETECCION APLAUSO
// -------------------
 function detectarAplauso(){
aplausoDetectado = false;

if (
  !hayPitch &&
  empezoSonido &&
  intensidad > 0.025 &&
  durSonido < 400
){

  aplausoDetectado = true;

  if (!aplausoActivo) {

    aplausoActivo = true;

    let nuevasLineas = [];

    for (let i = 0; i < lineas.length; i++) {

      if (
        lineas[i].tipoCurva != "recta"
      ) {

        nuevasLineas.push(
          lineas[i]
        );

      }

    }

    lineas = nuevasLineas;

  }

} else {

  aplausoActivo = false;

}
 }
// -------------------
// DETECCION SHHH
// -------------------
 function detectarShhh(){
shhhDetectado = false;

if (
  !hayPitch &&
  intensidad > 0.10 &&
  intensidad < 0.90 &&
  durSonido < 1000 &&
  durSonido > 600
) {

  shhhDetectado = true;

  if (!shhhActivo) {

    shhhActivo = true;

    lineas = [];

    obraActual = random(paletas);

    generarFondo();

  }

} else {

  shhhActivo = false;

}
 }
 
 
 
