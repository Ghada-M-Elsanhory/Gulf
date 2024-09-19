// // function toggleMenu() {
// //     var navMenu = document.getElementById('nav-menu');
// //     if (navMenu.classList.contains('active')) {
// //         navMenu.classList.remove('active');
// //     } else {
// //         navMenu.classList.add('active');
// //     }
// // }


// function toggleMenu() {
//     const navMenu = document.getElementById('nav-menu');
//     navMenu.classList.toggle('active');
// }

// script.js
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.querySelector('.overlay');
    
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}
// script.js
function redirectToProjects() {
    window.location.href = 'projects.html';
  }
  