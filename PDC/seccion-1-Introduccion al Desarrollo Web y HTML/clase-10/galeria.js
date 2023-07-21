let images = [
    'imagen1.jpg', 
    'imagen2.jpg', 
    'imagen3.png', 
    'imagen4.jpg'
 ]

let currentImageIndex = 0;

function updateImage() {
    let image = document.getElementById('slider-image');
    image.src = images[currentImageIndex];
}

document.getElementById('btn-anterior').addEventListener('click', function () {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = images.length - 1;
    }
    updateImage();
});

document.getElementById('btn-siguiente').addEventListener('click', function () {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }
    updateImage();
});

let galleryVisible = false;
let toggleButton = document.getElementById('toggle-button');
let sliderContainer = document.querySelector('.slider-container');
let galleryContainer = document.querySelector('.gallery-container');

toggleButton.addEventListener('click', function () {
    if (galleryVisible) {
        toggleButton.textContent = 'Ver vista galería de imágenes';
        sliderContainer.style.display = 'block';
        galleryContainer.style.display = 'none';
    } else {
        toggleButton.textContent = 'Ver vista deslizador de imágenes';
        sliderContainer.style.display = 'none';
        galleryContainer.style.display = 'block';
    }
    galleryVisible = !galleryVisible;
});

updateImage();

