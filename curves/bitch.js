function draw() {
  background(255);
  textAlign(CENTER);

  if (getAudioContext().state !== 'running') {
    text('click to start audio', width/2, height/2);
  } else {
    text('audio is enabled', width/2, height/2);
  }
}

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
  var synth = new p5.MonoSynth();
  synth.play('A4', 0.5, 0, 0.2);
}