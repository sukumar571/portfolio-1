document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    });
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// const mobileMenuBtn = document.getElementById('mobile-menu-btn');
// const mobileMenu = document.getElementById('mobile-menu');

//         mobileMenuBtn.addEventListener('click', () => {
//             mobileMenu.classList.toggle('hidden');
//         });
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconHamburger = document.getElementById('icon-hamburger');
const iconClose = document.getElementById('icon-close');

mobileMenuBtn.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.toggle('hidden');
  mobileMenuBtn.setAttribute('aria-expanded', !isHidden);

  // Toggle icons
  iconHamburger.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
});

// Optional: close menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    iconHamburger.classList.remove('hidden');
    iconClose.classList.add('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  });
});
