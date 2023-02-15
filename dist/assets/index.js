import "./index.html";
import "./index.scss";
const slider = document.querySelector("#vznosSlider");
const sliders = document.querySelectorAll(".slider");
const items = document.querySelectorAll(".item");
const percent = document.querySelector(".percents");
const item = document.querySelector("#vznos");
const stoimost = document.getElementById("stoimost");
const srok = document.getElementById("srok");
function formatInputs() {
  stoimost.addEventListener("keyup", event => {
    if (stoimost.value <= 1500000 && event.keyCode === 13) {
      stoimost.value = 1500000;
    }
    if (stoimost.value >= 10000000 && event.keyCode === 13) {
      stoimost.value = 10000000;
    }
  });
  srok.addEventListener("keyup", event => {
    if (srok.value <= 6 && event.keyCode === 13) {
      srok.value = 6;
    }
    if (srok.value >= 120 && event.keyCode === 13) {
      srok.value = 120;
    }
  });
}
formatInputs();
function sliderControl() {
  sliders.forEach(slider => {
    slider.addEventListener("input", e => {
      const index = Array.from(sliders).indexOf(slider);
      items[index].value = e.target.value;
    });
  });
}
sliderControl();
function inputControl() {
  items.forEach(item => {
    item.addEventListener("input", e => {
      const index = Array.from(items).indexOf(item);
      sliders[index].value = e.target.value;
    });
  });
}
inputControl();
function percentControl() {
  slider.addEventListener("input", e => {
    percent.innerHTML = e.target.value + "%";
  });
}
percentControl();
function vznosControl() {
  slider.addEventListener("input", e => {
    const percent = e.target.value;
    item.value = Math.round(stoimost.value * percent / 100);
  });
}
vznosControl();