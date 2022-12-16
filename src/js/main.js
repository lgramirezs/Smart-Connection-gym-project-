// Constants
const menuLinks = document.querySelector("#menu-links");
const menuButton = document.querySelector("#menu-button");
const buttonMore = document.querySelector("#more");
const subMenu = document.querySelector("#sub-menu");
const fullImgBox = document.querySelector('#fullImgBox');
const closeButton = document.querySelector('#close'); 

// AddEventListener
document.addEventListener("DOMContentLoaded", showGallery);

menuButton.addEventListener("click", openSection);

buttonMore.addEventListener("click", more);

closeButton.addEventListener('click', closeImgScreen);

// Functions
function showGallery(){
    // get elements
    const imgGallery = document.querySelectorAll('.gallery-img');
    // addEventListener
    imgGallery.forEach(element => {
      element.addEventListener('click', showImg);
    });

}

function openSection() {
  menuLinks.classList.toggle("d-none");
}

function more(e) {
  e.preventDefault();
  subMenu.classList.toggle("d-none");
  subMenu.classList.toggle("d-flex");
}

function showImg(e) {
  fullImgBox.style.display = 'flex';
  const img = document.createElement('img');
  img.setAttribute("src", e.target.src);
  fullImgBox.appendChild(img); 
}

function closeImgScreen() {
  fullImgBox.style.display = 'none';
  fullImgBox.removeChild(fullImgBox.lastChild);
}
