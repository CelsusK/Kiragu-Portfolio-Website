// Simple animation observer
document.addEventListener('DOMContentLoaded', function() {
    const fadeElems = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    });
    
    fadeElems.forEach(elem => {
        elem.style.opacity = 0;
        elem.style.transition = 'opacity 0.5s ease-in-out';
        observer.observe(elem);
    });
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 25, 47, 0.98)';
            navbar.style.padding = '0.8rem 0';
        } else {
            navbar.style.background = 'rgba(10, 25, 47, 0.95)';
            navbar.style.padding = '1.2rem 0';
        }
    });
});
