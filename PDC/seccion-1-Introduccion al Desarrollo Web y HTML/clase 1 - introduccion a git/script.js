// Obtener todas las imágenes de la galería
const galleryImages = document.querySelectorAll('.image-grid img');
const modal = document.getElementById('modal');
const imagenAmpliada = document.getElementById('imagen-ampliada');

// Mostrar imagen ampliada en el modal y ajustar tamaño
function mostrarImagenAmpliada(imagenSrc) {
  imagenAmpliada.src = imagenSrc;
  modal.style.display = 'flex'; // Usamos flex en lugar de block para poder centrar verticalmente
  modal.classList.add('imagen-ampliada'); // Agregamos la clase para ajustar el tamaño
}

// Cerrar el modal
function cerrarModal() {
  modal.style.display = 'none';
  modal.classList.remove('imagen-ampliada'); // Removemos la clase para restaurar el tamaño original
}

// Centrar la imagen ampliada en el modal
function centrarImagenAmpliada() {
  const modalHeight = modal.clientHeight;
  const imagenHeight = imagenAmpliada.clientHeight;
  const paddingTop = (modalHeight - imagenHeight) / 2;

  imagenAmpliada.style.paddingTop = `${paddingTop}px`;
}

// Agregar eventos al pasar el cursor por encima de cada imagen
galleryImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    // Aumentar el tamaño de la imagen al 120% utilizando transformación CSS
    image.style.transform = 'scale(1.2)';
  });

  image.addEventListener('mouseleave', () => {
    // Restaurar el tamaño original de la imagen
    image.style.transform = 'scale(1)';
  });

  image.addEventListener('click', () => {
    // Obtener la ruta de la imagen ampliada desde el atributo 'src'
    const imagenSrc = image.src;
    mostrarImagenAmpliada(imagenSrc);
    centrarImagenAmpliada();
  });
});

// Centrar la imagen ampliada cuando se redimensiona la ventana
window.addEventListener('resize', centrarImagenAmpliada);
