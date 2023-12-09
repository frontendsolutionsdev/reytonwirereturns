function updateDots() {
  const inputRows = document.querySelectorAll(".input-row");

  inputRows.forEach((row) => {
    const containerWidth = row.offsetWidth;
    const pWidth = row.querySelector(".form-item").offsetWidth;
    const iWidth = row.querySelector("input").offsetWidth;

    const dots = row.querySelector(".dots");
    const availableSpace = containerWidth - pWidth - iWidth - 10; // Adjusted value for more space

    const dotsCount = Math.max(0, Math.floor(availableSpace / 4)); // Adjust the value for desired space

    dots.textContent = ".".repeat(dotsCount);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  updateDots(); // Call the function once the DOM is fully loaded
});

window.addEventListener("resize", updateDots);