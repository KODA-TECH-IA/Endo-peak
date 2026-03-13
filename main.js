document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal Animations
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-up-delayed');
    
    // Add active class after a small delay for page load
    setTimeout(() => {
        revealElements.forEach(el => {
            el.classList.add('active');
        });
    }, 300);

});
