document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel').forEach((carouselElement) => {
    const carouselId = carouselElement.getAttribute('id');
    const carouselInner = carouselElement.querySelector('.carousel-inner');
    const indicatorsContainer = carouselElement.querySelector('.carousel-indicators');

    if (!carouselId || !carouselInner || !indicatorsContainer) {
      return;
    }

    const slides = Array.from(carouselInner.querySelectorAll('.carousel-item'));

    if (slides.length === 0) {
      return;
    }

    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === 0);
    });

    indicatorsContainer.innerHTML = '';

    slides.forEach((_, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.setAttribute('data-bs-target', `#${carouselId}`);
      button.setAttribute('data-bs-slide-to', String(index));
      button.setAttribute('aria-label', `Slide ${index + 1}`);

      if (index === 0) {
        button.classList.add('active');
        button.setAttribute('aria-current', 'true');
      }

      indicatorsContainer.appendChild(button);
    });
  });
});
