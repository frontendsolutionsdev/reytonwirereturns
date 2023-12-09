window.addEventListener('resize', updateDots);

function updateDots() {
  const containerWidth = document.querySelector('.row').offsetWidth;
  const pWidth = document.querySelector('#form-item').offsetWidth;

  const dots = document.querySelector('.dots');
  const availableSpace = containerWidth - pWidth;
  const dotsCount = Math.max(0, Math.floor(availableSpace / 4)); // Adjust the number for spacing

  dots.textContent = '.'.repeat(dotsCount);
}

// Call initially and on window resize
updateDots();
