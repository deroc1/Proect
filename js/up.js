// Отримуємо кнопку
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Показуємо або ховаємо кнопку при прокручуванні
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
};

// Додаємо функціональність для кнопки
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Плавна прокрутка
    });
});
