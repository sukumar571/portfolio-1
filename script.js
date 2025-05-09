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

// function myFunction() {
//         var x = document.getElementById("navbar");
//         if (x.className === "navbar") {
//           x.className += " responsive";
//         } else {
//           x.className = "navbar";
//         }
//       }

