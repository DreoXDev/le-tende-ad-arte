// Inizializza TUTTI gli slider Swiper presenti nella pagina
console.log("SLIDER JS FUNZIONA");

document.querySelectorAll(".mySwiper").forEach((slider, index) => {

    // Aggiungo un ID unico a ogni slider (necessario se ce ne sono più di uno)
    slider.classList.add("swiper-" + index);

    new Swiper(".swiper-" + index, {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: slider.querySelector(".swiper-pagination"),
            clickable: true,
        },
        navigation: {
            nextEl: slider.querySelector(".swiper-button-next"),
            prevEl: slider.querySelector(".swiper-button-prev"),
        },
    });
});


// LIGHTBOX — funziona per tutte le immagini con classe .gallery-img
const images = document.querySelectorAll(".gallery-img");
const lightbox = document.createElement("div");
lightbox.classList.add("lightbox");
document.body.appendChild(lightbox);

images.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        const lightImg = document.createElement("img");
        lightImg.src = img.src;
        lightbox.innerHTML = "";
        lightbox.appendChild(lightImg);
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});
