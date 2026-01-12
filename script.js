const themetoggle = document.querySelector(".theme-toggle");
const hamburger = document.querySelector(".hamburger");
const mobilenav = document.querySelector(".mobilenav");
const hopen = document.querySelector(".h-open");
const hclose = document.querySelector(".h-close");
const projectparent = document.querySelector(".projects-cards-parent");

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
  hclose.classList.toggle("hidden");
  hopen.classList.toggle("hidden");
});

const projects = [
  {
    title: "E-Commerce Dashboard",
    descriptons:
      "A comprehensive dashboard for e-commerce buisnesses with analytics, inventory management, and order tracking features.",
    techstack: ["React", "Chart.js", "Node.js", "MongoDB"],
    images: "./images/1.jpeg",
  },
  {
    title: "Weather Forecast App",
    descriptons:
      "A responsive weather application that provides accurate forecasts using data from a weather API with interactive maps.",
    techstack: ["javascript", "API integration", "CSS Grid", "Local Storage"],
    images: "./images/2.jpeg"
  },
   {
    title: "Task Management App",
    descriptons:
      "A productivity tool that helps users organize tasks, set deadlines, and track progress with drag-drop functionality.",
      techstack: ["React", "Redux", "Firebase", "Material UI"],
      images: "./images/3.jpeg"
  },
];
const allprojects = projects.map(function (projects, index) {
  return(
    ` <div class="projects-cards-parent" id=${index}>
           <div class="projectparents">
          <img
            src= "${projects.images}" class ="for-image"
          />
          <br />
          <h1 class = "projectTitle">${projects.title}</h1>
          <p class="text-p">
            ${projects.descriptons}
          </p>
          <div class="parent">
            ${projects.techstack.map(function (tech) {
              return `
              <div class="skills">${tech}</div> `
            }).join("")}
          </div>
          <button class="for-view">View Project</button>
        </div>
        </div>`
  )
}).join("")
projectparent.innerHTML = allprojects