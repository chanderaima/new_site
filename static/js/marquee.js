window.addEventListener('DOMContentLoaded', (event) => {
    const marquee = document.querySelector('.logo-marquee-track');
    const clone = marquee.cloneNode(true);
    marquee.appendChild(clone);
  });
  