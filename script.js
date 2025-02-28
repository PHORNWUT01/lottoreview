const navButton = document.querySelector('.nav-button');
const mainNav = document.getElementById('main-nav');

navButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
});

new WOW().init();

// Handle image click events
const imageSlides = document.querySelectorAll('.image-slide');
imageSlides.forEach(slide => {
    slide.addEventListener('click', () => {
        const text = slide.getAttribute('data-text');
        alert(`You clicked a slide with text: ${text}`);
    });
});
