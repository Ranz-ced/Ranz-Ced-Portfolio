// Navigation click event
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll(".content-section");

// Toggle between sections
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("data-section");

    sections.forEach(section => {
      section.classList.remove("active");
    });

    document.getElementById(targetId).classList.add("active");

    // Close mobile menu after click
    document.querySelector(".nav-links").classList.remove("show");
  });
});

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
