// // script.js

// // Function to toggle the navigation menu and overlay visibility
// function toggleMenu() {
//     const navMenu = document.getElementById('nav-menu');
//     const overlay = document.querySelector('.overlay');
    
//     navMenu.classList.toggle('active');
//     overlay.classList.toggle('active');
// }

// // Function to redirect to the "Projects" page
// function redirectToContact() {
//     window.location.href = 'projects.html';
// }

// // Example JavaScript for interactive circles (if needed)
// // Function to handle click event on circles
// document.querySelectorAll('.circle').forEach(circle => {
//     circle.addEventListener('click', () => {
//         alert('Circle clicked!');
//     });
// });

// script.js

// Function to toggle the navigation menu and overlay visibility
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.querySelector('.overlay');
    
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Function to redirect to the "Projects" page
function redirectToProjects() {
    window.location.href = 'projects.html';
}

// Example JavaScript for interactive circles (if needed)
// Function to handle click event on circles
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const textContent = card.nextElementSibling;
        textContent.classList.toggle('active');
    });
});
