document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  // Generate 800 boxes
  for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    container.appendChild(square);

    // Add hover effect
    square.addEventListener('mouseover', () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      square.style.backgroundColor = randomColor;

      // Remove color after 1 second
      setTimeout(() => {
        square.style.backgroundColor = rgb(221, 221, 221);  // Default color after hover
      }, 1000);
    });
  }
});
