
const playPauseBtn = document.getElementById('playPauseBtn');
const audio = document.getElementById('my-audio');


playPauseBtn.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "Pause"; 
  } else {
    audio.pause();
    playPauseBtn.textContent = "Play"; 
  }
});
