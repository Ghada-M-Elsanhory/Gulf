
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
  