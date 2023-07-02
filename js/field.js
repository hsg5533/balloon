"use strict";
import { Level as t } from "./game.js";
export default class e {
  constructor(t, e) {
    (this.balloonSizeX = t),
      (this.balloonSizeY = e),
      (this.balloonCount = 30),
      (this.field = document.querySelector(".game__field")),
      (this.fieldRect = this.field.getBoundingClientRect()),
      (this.currentLevel = "normal"),
      this.field.addEventListener("click", (t) => {
        this.onItemClick(t) && this.onItemClick(t);
      });
  }
  setClickListener(t) {
    this.onItemClick = t;
  }
  initImages() {
    (this.field.innerHTML = ""),
      this.currentLevel === t.easy
        ? (this.balloonCount = 10)
        : this.currentLevel === t.hard
        ? (this.balloonCount = 40)
        : (this.balloonCount = 30),
      this.addItems("balloon", "./img/balloon_", this.balloonCount);
  }
  addItems(t, e, i) {
    let l = this.fieldRect.width,
      n = this.fieldRect.height,
      s = l - this.balloonSizeX,
      o = n - this.balloonSizeY;
    for (let a = i; a > 0; a--) {
      let r = document.createElement("div"),
        h = document.createElement("img"),
        d = document.createElement("span"),
        c = Math.floor(5 * Math.random() + 1);
      r.setAttribute("class", t),
        h.setAttribute("src", `${e + c}.png`),
        h.setAttribute("alt", t),
        (d.innerText = `${a}`);
      let m = Math.random() * s,
        u = Math.random() * o;
      (r.style.top = `${u}px`),
        (r.style.left = `${m}px`),
        r.appendChild(h),
        r.appendChild(d),
        this.field.appendChild(r);
    }
  }
}
