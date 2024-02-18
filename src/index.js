import homeTab from "./homeTab";
import menuTab from "./menuTab";
import aboutTab from "./aboutTab";

const homeEl = homeTab();
const menuEl = menuTab();
const aboutEl = aboutTab();

const buttons = document.querySelectorAll("button");
const main = document.querySelector("main");

buttons[0].addEventListener("click", (e) => {
  main.innerHTML = "";
  main.appendChild(homeEl);
});

buttons[1].addEventListener("click", (e) => {
  main.innerHTML = "";
  main.appendChild(menuEl);
});

buttons[2].addEventListener("click", (e) => {
  main.innerHTML = "";
  main.appendChild(aboutEl);
});

main.appendChild(homeEl);
