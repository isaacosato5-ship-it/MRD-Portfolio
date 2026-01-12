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
    Image: "./images/WhatsApp Image 2025-11-19 at 11.00.45 AM.jpeg",
  },
  {
    title: "Weather Forecast App",
    descriptons:
      "A responsive weather application that provides accurate forecasts using data from a weather API with interactive maps",
    techstack: ["javascript", "API integration", "CSS Grid", "Local Storage"],
    Image: "./images/WhatsApp Image 2026-01-11 at 10.42.10 PM.jpeg"
  },
   {
    title: "Task Management App",
    descriptons:
      "A productivity tool that helps users organize tasks, set deadlines, and track progress with drag-drop functionality",
      techstack: ["React", "Redux", "Firebase", "Material UI"],
      images: "./images/WhatsApp Image 2026-01-11 at 10.42.16 PM.jpeg"
  },
];
projects.map(function (projects, index) {
  console.log(projects)
  return(
    ` <div class="projects-cards-parent">
           <div class="projectparents">
          <img
            src="images/WhatsApp Image 2026-01-11 at 10.41.59 PM.jpeg "
            class="for-image"
          />
          <br />
          <span class="for-ecom">E-Commerce Dashboard</span>
          <p class="text-p">
            A comprehensive dashboard for e-commerce buisnesses with analytics,
            inventory management, and order tracking features.
          </p>
          <div class="parent">
            <div class="skills">React</div>
            <div class="skills">Chart.js</div>
            <div class="skills">Node.js</div>
            <div class="skills">MongoDB</div>
          </div>
        </div>
        </div>`
  )
})