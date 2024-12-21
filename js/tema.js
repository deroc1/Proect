document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.querySelector(".btn-tem");
    themeButton.addEventListener("click", function() {
      document.body.classList.toggle("dark-theme");
    });
  });
  