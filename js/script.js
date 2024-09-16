function toggleMenu() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    } else {
        navMenu.classList.add('active');
    }
}