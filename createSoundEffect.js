let createOscillator = (frequency, audioContext) => {
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.value = frequency;
    oscillator.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1); // Stop after 0.5 seconds
    console.log('click event from oscillator')
}

let createSoundEffect = () => {
  const notes = [293.7, 440.0];
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  notes.forEach(frequency => createOscillator(frequency, audioContext))
}

document.addEventListener('click', createSoundEffect)