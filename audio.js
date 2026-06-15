let pitch;
const model_url =
"https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
let frec = 0;
let notaMidi = 0;
let hayPitch = false;
let gestorFrec;
let marcaUltimoPitch = 0;
let timeoutSinPitch = 300;

function startPitch() {
  pitch = ml5.pitchDetection(
    model_url,
    getAudioContext(),
    mic.stream,
    modelLoaded
  );
}

function modelLoaded() {
  console.log("MODELO CARGADO");
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (err) {
      console.error(err);
      setTimeout(
        getPitch,
        100
      );
      return;
    }
    if (frequency) {
      frec = frequency;
      notaMidi =
        freqToMidi(
          frequency
        );
      hayPitch = true;
      marcaUltimoPitch =
        millis();
      gestorFrec.actualizar(
        notaMidi
      );
    } else {
      frec = 0;
      hayPitch =
        millis() -
        marcaUltimoPitch <
        timeoutSinPitch;
    }
    getPitch();
  });
}
