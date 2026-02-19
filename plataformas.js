const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
const slidesToShow = 3; // 👈 cantidad visible
const totalSlides = slides.length;

nextBtn.addEventListener("click", () => {
    if (index < totalSlides - slidesToShow) {
        index++;
        updateSlider();
    }
});

prevBtn.addEventListener("click", () => {
    if (index > 0) {
        index--;
        updateSlider();
    }
});

function updateSlider() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}