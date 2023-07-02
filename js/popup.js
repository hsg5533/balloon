"use strict";
import { Reason as e } from "./game.js";
import * as t from "./sound.js";
export default class s {
  constructor() {
    (this.endPopUp = document.querySelector(".game__popup--end")),
      (this.endPopUpText = document.querySelector(".popup__text")),
      (this.levelPopUp = document.querySelector(".game__popup--level")),
      (this.levelPopUpBtn = document.querySelectorAll(".game__level__btn")),
      this.levelPopUpBtn.forEach((s) => {
        s.addEventListener("click", () => {
          t.playBtn(), this.show(e.level);
        });
      });
  }
  show(t) {
    let s;
    switch (t) {
      case e.level:
        s = this.levelPopUp;
        break;
      case e.win:
      case e.lose:
        (s = this.endPopUp), this.setPopUpText(t);
    }
    s.classList.add("visible");
  }
  setPopUpText(s) {
    let l;
    s === e.win
      ? (t.playWin(), (l = "YOU WON"))
      : (t.playLose(), (l = "GAME OVER")),
      (this.endPopUpText.innerText = l);
  }
  hide(e) {
    e.classList.remove("visible");
  }
}
