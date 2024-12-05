document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle the visibility of the navigation menu
    toggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Add active class to clicked link
    const links = document.querySelectorAll('.nav-link.navtextmain');
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(nav => nav.classList.remove('active')); // Remove active class from others
            this.classList.add('active'); // Add active class to the clicked link
        });
    });
});