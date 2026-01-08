const themetoggle = document.querySelector(".theme-toggle");
const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".mobilenav");
const hopen = document.querySelector(".h-open");
const hclose = document.querySelector(".h-close");

themetoggle.addEventListener("click", function () {
  document.documentElement.classList.toggle("darkTheme");

  if (themetoggle.textContent === "🌙") {
    themetoggle.textContent = "☀️";
  } else {
    themetoggle.textContent = "🌙";
  }
});
hamburger.addEventListener("click", function () {
  mobilenav.classList.toggle("hidden");
  hclose.classList.toggle("hidden")
  hopen.classList.toggle("hidden")
});
