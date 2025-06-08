document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuToggle");
    const navMenu = document.getElementById("headerList");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
            console.error("OK");

        });
    } else {
        console.error("Elemento non trovato! Controlla gli ID nel tuo HTML.");
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const introSections = document.querySelectorAll(".Introduzione"); // Seleziona tutti gli elementi

    function handleScroll() {
        introSections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            // Mostra l'elemento appena entra nello schermo
            if (sectionTop < windowHeight - 200 && sectionBottom > 100) {
                section.classList.add("show");
                section.classList.remove("hidden");
            } 
            // Inizia la transizione di uscita prima che scompaia completamente
            else if (sectionBottom < windowHeight * 0.3 || sectionTop > windowHeight * 0.7) {
                section.classList.add("hidden");
                section.classList.remove("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Controllo iniziale
});


document.addEventListener("scroll", function () {
    const videoSection = document.querySelector(".video-container");
    const bgOverlay = document.querySelector(".bg-overlay");


    const sectionPosition = videoSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPosition < screenHeight * 0.60 && sectionPosition > -screenHeight * 0.5) {
        videoSection.classList.add("show");
        videoSection.classList.remove("hidden");
        bgOverlay.classList.add("video-visible");
    } else {
        videoSection.classList.remove("show");
        videoSection.classList.add("hidden");
        bgOverlay.classList.remove("video-visible");
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("#header");

    setTimeout(() => {
        header.classList.add("show");
    }, 200); // Attiva dopo 200ms per un effetto più naturale
});


  


