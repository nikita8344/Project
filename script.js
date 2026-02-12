// Плавное появление текста

const heroContent = document.querySelector(".hero-content");

window.addEventListener("load", () => {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(30px)";
    heroContent.style.transition = "1s ease";

    setTimeout(() => {
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 300);
});
