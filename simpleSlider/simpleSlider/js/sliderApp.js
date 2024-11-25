const slider = document.querySelector("#slider");
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector("#btnNext");
const btnPrev = document.querySelector("#btnPrev");

sliderItems.forEach((slide, index) => {
    
    if (index !== 0) {
        slide.classList.add("hidden")
    }
    
    slide.dataset.index = index;
    sliderItems[0].setAttribute("data-active", "");

    slide.addEventListener("click", () => {
        
        slide.classList.add("hidden");
        slide.removeAttribute("data-active");

        let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
      
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        nextSlide.classList.remove("hidden");
        nextSlide.setAttribute("data-active", "");
    });
});

btnNext.addEventListener("click", () => {
    const currentSlide = slider.querySelector("[data-active]");
    const currentSlideIndex = +currentSlide.dataset.index;

    currentSlide.classList.add("hidden");
    currentSlide.removeAttribute("data-active");

    let nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
    console.log("Next slide");
})

btnPrev.addEventListener("click", () => {
    const currentSlide = slider.querySelector("[data-active]");
    const currentSlideIndex = +currentSlide.dataset.index;

    currentSlide.classList.add("hidden");
    currentSlide.removeAttribute("data-active");

    let nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
    console.log("Next slide");
})