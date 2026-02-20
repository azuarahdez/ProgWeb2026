document.querySelectorAll(".slider-container").forEach(container => {

    const track = container.querySelector(".slider-track");
    const slides = container.querySelectorAll(".slide");
    const nextBtn = container.querySelector(".next");
    const prevBtn = container.querySelector(".prev");

    let index = 0;
    const slidesToShow = 3;
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

});