const slides = document.querySelector(".slider-container")

const images = [
    document.querySelector('.img1'),
    document.querySelector('.img2'),
    document.querySelector('.img3'),
    document.querySelector('.img4'),
    document.querySelector('.img5')
  ];

let index = 0 // 1

const prevButton = document.querySelector(".prev")

const nextButton = document.querySelector(".next")

function showSlide(n) {
  if (n >= images.length) {
    index = 0
  } else if (n < 0) {
    index = images.length - 1;
  } else {
    index = n
  }

  slides.style.transform = `translateX(${-index * 40}%)`;
}

// nextButton 
nextButton.addEventListener('click', () => {
  showSlide(index + 1);
});

prevButton.addEventListener('click', () => {
  showSlide(index - 1);
});

// auto slide
let autoSlide = setInterval(() => {
  showSlide(index + 1);
}, 3000);

// pause on hover
document.querySelector('.slider').addEventListener('mouseover', () => {
  clearInterval(autoSlide);
});

document.querySelector('.slider').addEventListener('mouseout', () => {
  autoSlide = setInterval(() => {
    showSlide(index + 1);
  }, 3000);
});

showSlide(index)