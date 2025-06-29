const cards = document.querySelectorAll('.playlist-card');
const audioPlayer = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');
const currentSong = document.getElementById('currentSong');
const progressBar = document.getElementById('progressBar');
const volumeControl = document.getElementById('volumeControl');

let isPlaying = false;

// Play selected song
cards.forEach(card => {
  card.addEventListener('click', () => {
    const songFile = card.getAttribute('data-song');
    audioPlayer.src = `music/${songFile}`;
    audioPlayer.play();
    currentSong.textContent = `Now Playing: ${card.querySelector('h4').textContent}`;
    playPauseBtn.textContent = '⏸';
    isPlaying = true;
  });
});

// Toggle Play/Pause button
playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶';
  } else {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸';
  }
  isPlaying = !isPlaying;
});

// Update progress bar
audioPlayer.addEventListener('timeupdate', () => {
  const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.style.width = `${percentage}%`;
});

// Volume control
volumeControl.addEventListener('input', () => {
  audioPlayer.volume = volumeControl.value;
});
