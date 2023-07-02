"use strict";
import t from "./popup.js";
import e from "./field.js";
import * as i from "./sound.js";
export const Level = Object.freeze({
  easy: "easy",
  normal: "normal",
  hard: "hard",
});
export const Reason = Object.freeze({
  level: "level",
  win: "win",
  lose: "lose",
});
export class GameBuilder {
  gameDuration(t) {
    return (this.gameDuration = t), this;
  }
  balloonSizeX(t) {
    return (this.balloonSizeX = t), this;
  }
  balloonSizeY(t) {
    return (this.balloonSizeY = t), this;
  }
  build() {
    return new Game(this.gameDuration, this.balloonSizeX, this.balloonSizeY);
  }
}
class Game {
  constructor(s, r, o) {
    (this.GAME_DURATION = s),
      (this.gameDuration = s),
      (this.timerValue = void 0),
      (this.countValue = 0),
      (this.started = !1),
      (this.ready = document.querySelector(".game__ready")),
      (this.footer = document.querySelector(".game__footer")),
      (this.count = document.querySelector(".count")),
      (this.timer = document.querySelector(".timer")),
      (this.retryBtn = document.querySelector(".game__retry__btn")),
      (this.startBtn = document.querySelector(".game__start__btn")),
      (this.levelBtns = document.querySelector(".level__container")),
      this.levelBtns.addEventListener("click", (t) => {
        let e = t.target;
        "BUTTON" === e.tagName &&
          (e.matches(".easy")
            ? this.onChangeLevel(Level.easy)
            : e.matches(".hard")
            ? this.onChangeLevel(Level.hard)
            : this.onChangeLevel(Level.normal),
          i.playBtn());
      }),
      this.startBtn.addEventListener("click", () => this.start()),
      this.retryBtn.addEventListener("click", () => this.reStart()),
      (this.popUp = new t()),
      (this.field = new e(r, o)),
      this.field.setClickListener(this.onItemClick);
  }
  onItemClick = (t) => {
    if (!this.started) return;
    let e = t.target.closest(".balloon");
    e &&
      e.matches(".balloon") &&
      (this.countValue + 1 == e.lastChild.innerText
        ? (e.remove(), ++this.countValue, this.clickCount(), i.playPop())
        : i.playNo());
  };
  onChangeLevel(t) {
    let e = document.querySelectorAll(".level");
    e.forEach((e) => (e.innerText = t)),
      (this.field.currentLevel = t),
      this.popUp.hide(this.popUp.levelPopUp);
  }
  start() {
    (this.started = !0),
      i.playBg(),
      this.field.initImages(),
      (this.ready.style.visibility = "hidden"),
      this.footer.classList.add("on"),
      this.startTimer(),
      this.clickCount();
  }
  startTimer() {
    (this.timer.innerText = this.gameDuration),
      (this.timerValue = setInterval(() => {
        (this.timer.innerText = --this.gameDuration),
          this.gameDuration <= 0 && this.stop(Reason.lose);
      }, 1e3));
  }
  clickCount() {
    (this.count.innerText = this.countValue),
      this.field.balloonCount === this.countValue && this.stop(Reason.win);
  }
  stop(t) {
    (this.started = !1), this.stopTimer(), this.popUp.show(t), i.stopBg();
  }
  stopTimer() {
    clearInterval(this.timerValue);
  }
  reStart() {
    (this.countValue = 0),
      (this.gameDuration = this.GAME_DURATION),
      this.popUp.hide(this.popUp.endPopUp),
      this.start();
  }
}
