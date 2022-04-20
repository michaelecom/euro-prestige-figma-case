var index = 1;

showSlides(index);

function plusSlides(n) {
    showSlides(index += n);
}

function currentSlide(n) {
    showSlides(index = n);
}

function showSlides(n) {
    var i;

    var slides = document.getElementsByClassName("js__slide_selector");
    var dots = document.getElementsByClassName("js__dot_selector");

    if (n > slides.length) { index = 1 }
    if (n < 1) { index = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active")
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active")
    }

    slides[index - 1].classList.add("active")
    dots[index - 1].classList.add("active")
}