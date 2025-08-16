import { lengthConvertor } from "./script/length.js";
import { temperatureConvertor } from "./script/temperature.js";
import { weightConvertor } from "./script/weight.js";

const nav_list = document.querySelectorAll("nav ul li");

let currentActive = "LENGTH";
let currentContainer = document.querySelector(".length-container");

const containers = {
  LENGTH: document.querySelector(".length-container"),
  WEIGHT: document.querySelector(".weight-container"),
  TEMPERATURE: document.querySelector(".temperature-container"),
};

lengthConvertor();

nav_list.forEach((list) => {
  list.addEventListener("click", (e) => {
    const selected = e.target.innerText.trim().toUpperCase();
    //remove nav-active from alllist  elements
    nav_list.forEach((list) => {
      list.classList.remove("nav-active");
    });

    //remove nav-active to the current
    e.target.classList.add("nav-active");

    //add hide to the currentContainer
    currentContainer.classList.add("hide");
    currentContainer = containers[selected];
    currentContainer.classList.remove("hide");

    if (selected === "LENGTH") lengthConvertor();
    if (selected === "WEIGHT") weightConvertor();
    if (selected === "TEMPERATURE") temperatureConvertor();

    currentActive = selected;
  });
});
