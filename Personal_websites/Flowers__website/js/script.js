let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


/*SLIDER*/



function addSlides(m) {
  let photos = document.querySelectorAll('.photo');
  let leftButton = document.querySelector('.left');
  let rightButton = document.querySelector('.right');

  if (m === 1) {
    photos[0].style.display = 'none';
    photos[1].style.display = 'none';
    photos[2].style.display = 'none';
    photos[3].style.display = 'none';
    photos[4].style.display = 'block';
    photos[5].style.display = 'block';
    photos[6].style.display = 'block';
    photos[7].style.display = 'block';
    leftButton.style.display = 'block';
    rightButton.style.display = 'none';
} else {
    photos[0].style.display = 'block';
    photos[1].style.display = 'block';
    photos[2].style.display = 'block';
    photos[3].style.display = 'block';
    photos[4].style.display = 'none';
    photos[5].style.display = 'none';
    photos[6].style.display = 'none';
    photos[7].style.display = 'none';
    leftButton.style.display = 'none';
    rightButton.style.display = 'block';
}
  }
  
  
