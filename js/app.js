const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const auto = true;
const intervalTime = 4000;
let slideInterval;

const nextSlide = () => {
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for the next slide
    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        // add current class to starting slide
        slides[0].classList.add('current');
    }

    setTimeout(() => {
        current.classList.remove('current');
    }, 400);
}

const previousSlide = () => {
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for the next slide
    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        // add current class to last slide
        slides[slides.length -1].classList.add('current');
    }

    setTimeout(() => {
        current.classList.remove('current');
    }, 400);
}

next.addEventListener('click', () => {
    nextSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            nextSlide();
        }, intervalTime);
    }
});

previous.addEventListener('click', () => {
    previousSlide();
    if(auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            nextSlide();
        }, intervalTime);
    }
});

if(auto) {
    slideInterval = setInterval(() => {
        nextSlide();
    }, intervalTime);
}
