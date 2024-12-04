document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      navMenu.style.display =
        navMenu.style.display === "block" ? "none" : "block";
    });
  });
  