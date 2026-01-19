const startBtn = document.getElementById("start-btn");
const welcome = document.getElementById("welcome-screen");
const main = document.getElementById("main-screen");

startBtn.onclick = () => {
  welcome.style.display = "none";
  main.style.display = "block";
};
