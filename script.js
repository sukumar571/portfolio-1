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

///////////////////////////////////////////

// const animatedElements = document.querySelectorAll('.box, .box1, .box2, .row');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('animate');
//         } else {
//             entry.target.classList.remove('animate'); // Allow re-animation
//         }
//     });
// }, {
//     threshold: 0.2
// });

// const radialPaths = document.querySelectorAll('.path');

// const radialObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.transition = 'stroke-dashoffset 1s ease';
//             entry.target.style.strokeDashoffset = '0';
//         } else {
//             const totalLength = entry.target.getTotalLength();
//             entry.target.style.strokeDashoffset = totalLength;
//         }
//     });
// }, {
//     threshold: 0.5
// });

// radialPaths.forEach(path => {
//     const totalLength = path.getTotalLength();
//     path.style.strokeDasharray = totalLength;
//     path.style.strokeDashoffset = totalLength;
//     radialObserver.observe(path);
// });


// const technicalBars = document.querySelectorAll('.Technical-bars');

// const progressObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         const spans = entry.target.querySelectorAll('.progress-line span');
//         if (entry.isIntersecting) {
//             spans.forEach(span => {
//                 span.style.transform = 'scaleX(1)';
//             });
//         } else {
//             spans.forEach(span => {
//                 span.style.transform = 'scaleX(0)';
//             });
//         }
//     });
// }, {
//     threshold: 0.4
// });

// technicalBars.forEach(bar => progressObserver.observe(bar));       