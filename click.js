const clickArea = document.getElementById('click-area');
const timerDisplay = document.getElementById('timer');
const clicksDisplay = document.getElementById('clicks');
const scoreDisplay = document.getElementById('score');
const timeButtons = document.querySelectorAll('.time-btn');

let clicks = 0;
let time = 0;
let duration = 5; // default 5 seconds
let interval = null;
let running = false;

// Time button selection
timeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    timeButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    duration = parseInt(btn.getAttribute('data-time'));
    resetGame();
  });
});

// Click area
clickArea.addEventListener('click', () => {
  if (!running) {
    startGame();
  }
  clicks++;
  clicksDisplay.textContent = clicks;
  scoreDisplay.textContent = (clicks / (time || 1)).toFixed(2);
});

// Start game
function startGame() {
  running = true;
  time = 0;
  clicks = 0;
  clicksDisplay.textContent = clicks;
  timerDisplay.textContent = time;
  scoreDisplay.textContent = 0;

  interval = setInterval(() => {
    time++;
    timerDisplay.textContent = time;
    scoreDisplay.textContent = (clicks / time).toFixed(2);

    if (time >= duration) {
      clearInterval(interval);
      running = false;
      clickArea.textContent = "TIME'S UP! CLICK TO RESTART";
    }
  }, 1000);
}

// Reset game
function resetGame() {
  clearInterval(interval);
  running = false;
  time = 0;
  clicks = 0;
  timerDisplay.textContent = 0;
  clicksDisplay.textContent = 0;
  scoreDisplay.textContent = 0;
  clickArea.textContent = "CLICK HERE TO START PLAYING";
}
