

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const slidesContainer = document.querySelector(".slides-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                body.style.background = "black";
                body.style.color = "white";
            } else {
                body.style.background = "rgba(124, 168, 168, 0.712)";
                body.style.color = "black";
            }
        });
    }, { threshold: 0.1 });

    observer.observe(slidesContainer);
});


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, { threshold: 0.65 });

    slides.forEach(slide => observer.observe(slide));
});
