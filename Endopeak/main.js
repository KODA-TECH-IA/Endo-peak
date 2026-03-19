document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Reveal Animations
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-up-delayed');
    
    setTimeout(() => {
        revealElements.forEach(el => {
            el.classList.add('active');
        });
    }, 300);

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const headerNav = document.getElementById('header-nav');
    const navLinks = headerNav ? headerNav.querySelectorAll('a') : [];

    if (mobileMenuBtn && headerNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('open');
            headerNav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('open');
                headerNav.classList.remove('active');
            });
        });
    }
});
