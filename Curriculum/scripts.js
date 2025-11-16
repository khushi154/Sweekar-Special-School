// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        } else {
            window.location.href = href;
        }
    });
});

// Fade-in animation for rectangular cards on scroll
const cards = document.querySelectorAll('.rect-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.3 });

cards.forEach(card => {
    observer.observe(card);
});

// Handle header scrolling behavior
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= headerHeight) {
        header.classList.add('hidden');
        navbar.classList.add('fixed-top');
    } else {
        header.classList.remove('hidden');
        navbar.classList.remove('fixed-top');
    }
});


// Toggle main menu on small screens
const menuButton = document.getElementById('menu-button');
const navLinks = document.getElementById('nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Toggle About Us dropdown in small screens
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
        if (window.innerWidth < 850) {
            e.preventDefault();
            this.parentElement.classList.toggle('open');
        }
    });
});
