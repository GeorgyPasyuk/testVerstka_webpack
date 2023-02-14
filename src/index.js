import "./index.html";
import "./index.scss";

const slider = document.querySelector("#vznosSlider");
const sliders = document.querySelectorAll(".slider");
const items = document.querySelectorAll(".item");
const percent = document.querySelector(".percents");
const item = document.querySelector("#vznos");
const stoimost = document.querySelector("#stoimost");

function formatInputs() {
  items.forEach((item) => {
    item.addEventListener("input", () => {
      if (item.value.length > 19) {
        item.value = item.value.slice(0, 19);
      }
      const inputValue = item.value.replace(/[^\d]/g, "");
      item.value = inputValue.replace(/(\d{3})(?=\d)/g, "$1 ");
    });
  });
}
formatInputs();

function sliderControl() {
  sliders.forEach((slider) => {
    slider.addEventListener("input", (e) => {
      const index = Array.from(sliders).indexOf(slider);
      items[index].value = e.target.value;
    });
  });
}
sliderControl();

function inputControl() {
  items.forEach((item) => {
    item.addEventListener("input", (e) => {
      const index = Array.from(items).indexOf(item);
      sliders[index].value = e.target.value;
    });
  });
}

inputControl();

function percentControl() {
  slider.addEventListener("input", (e) => {
    percent.innerHTML = e.target.value + "%";
  });
}
percentControl();

function vznosControl() {
  slider.addEventListener("input", (e) => {
    const percent = e.target.value;
    const value = (stoimost.value * percent) / 100;
    item.value = value;
  });
}

vznosControl();
