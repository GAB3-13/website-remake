
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "white";
   
    document.getElementById("gr").style.color = "black";
    document.getElementById("gra").style.color = "black";
    document.getElementById("gras").style.color = "black";
    document.getElementById("grad").style.color = "black";
    document.getElementById("graf").style.color = "black";
    document.getElementById("grag").style.color = "black";
    document.getElementById("grah").style.color = "black";
    document.getElementById("graj").style.color = "black";
    document.getElementById("grak").style.color = "Black";

  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("gr").style.color = "white";
    document.getElementById("gra").style.color = "white";
    document.getElementById("gras").style.color = "white";
    document.getElementById("grad").style.color = "white";
    document.getElementById("graf").style.color = "white";
    document.getElementById("grag").style.color = "white";
    document.getElementById("grah").style.color = "white";
    document.getElementById("graj").style.color = "white";
    document.getElementById("grak").style.color = "white";
   
    
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let slides = document.getElementsByClassName("allguy");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
}
