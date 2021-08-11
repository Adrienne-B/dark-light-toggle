var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");
//This is the section with the logos and numbers

var themeSwitchInput = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var h1 = document.querySelector("h1");
var body = document.querySelector("body");
//This is the where things will change in its appearance

fans.addEventListener("mouseover", function () {
  fans.innerText = "102K";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "27K";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "10K";
});
//This is the section with the logos and numbers

themeSwitchInput.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
  //This is the where things will change in its appearance
});
