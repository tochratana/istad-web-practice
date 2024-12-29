const box = document.querySelector(".box");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");

const boxFixed = document.querySelector(".boxFixed");
const boxRelative = document.querySelector(".boxRelative");
const boxAbsolute = document.querySelector(".boxAbsolute");
const boxStatic = document.querySelector(".boxStatic");
const boxSticky = document.querySelector(".boxSticky");

const descript = document.querySelector(".descript");

boxFixed.addEventListener("click", () => {
  box2.className = "fixed box2 box";
  descript.innerHTML = `You are using <span class="mainWord">Fixed</span>, so you look at box 1 when we use fixed make sure the container have position reletive.`;
});
boxRelative.addEventListener("click", () => {
  box2.className = "relative box2 box";
  descript.innerHTML = `You are using <span class="mainWord">Relative</span>, so you look at box 2 when we use relative it meabs that the element is positioned relative to its normal position.`;
});
boxAbsolute.addEventListener("click", () => {
  box2.className = "absolute box2 box";
  descript.innerHTML = `You are using <span class="mainWord">Absolute</span>, so you look at box 2 when we use relative it meabs that the element is positioned relative to its normal position.`;
});
boxStatic.addEventListener("click", () => {
  box2.className = "static box2 box";
  descript.innerHTML = `You are using <span class="mainWord">Static</span>, so you look at box 2 when we use relative it meabs that the element is positioned relative to its normal position.`;
});
boxSticky.addEventListener("click", () => {
  box2.className = "sticky box2 box";
  descript.innerHTML = `You are using <span class="mainWord">Sticky</span>, so you look at box 2 when we use relative it meabs that the element is positioned relative to its normal position.`;
});
