const keys = document.querySelectorAll(".key");
const white = document.querySelectorAll(".white");
const black = document.querySelectorAll(".black");
const whiteKeys = ["a", "s", "d", "f", "g", "h", "j"];
const blackKeys = ["w", "e", "t", "y", "u"];

keys.forEach((key) => {
  key.addEventListener("click", () => keyPlay(key));
});

document.addEventListener("keydown", keyboardPlay);
function keyPlay(key) {
  const sound = document.getElementById(key.dataset.note);
  sound.currentTime = 0;
  sound.play();
  key.classList.add("active");
  sound.addEventListener("ended", () => {
    key.classList.remove("active");
  });
}
function keyboardPlay(e) {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = whiteKeys.indexOf(key);
  const blackKeyIndex = blackKeys.indexOf(key);

  if (whiteKeyIndex > -1) keyPlay(white[whiteKeyIndex]);
  if (blackKeyIndex > -1) keyPlay(black[blackKeyIndex]);
}
