// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the nav link for the section currently in view
const links = document.querySelectorAll(".nav nav a");
const sections = [...links].map(a => document.querySelector(a.getAttribute("href")));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(s => s && observer.observe(s));

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

function setMenu(open) {
  menu.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", open);
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuBtn.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
links.forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });