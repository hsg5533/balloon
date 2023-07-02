"use strict";
let bgSound = new Audio("./sound/bg.mp3"),
  btnSound = new Audio("./sound/button.wav"),
  popSound = new Audio("./sound/pop.mp3"),
  noSound = new Audio("./sound/no.wav"),
  winSound = new Audio("./sound/win.wav"),
  loseSound = new Audio("./sound/lose.wav");
export function playSound(o) {
  (o.currentTime = 0), o.play();
}
export function stopSound(o) {
  o.pause();
}
export function playBg() {
  (bgSound.volume = 0.4), playSound(bgSound);
}
export function stopBg() {
  stopSound(bgSound);
}
export function playBtn() {
  (btnSound.volume = 0.7), playSound(btnSound);
}
export function playPop() {
  (popSound.volume = 0.25), playSound(popSound);
}
export function playNo() {
  (noSound.volume = 0.5), playSound(noSound);
}
export function playWin() {
  (winSound.volume = 0.3), playSound(winSound);
}
export function playLose() {
  (loseSound.volume = 0.5), playSound(loseSound);
}
