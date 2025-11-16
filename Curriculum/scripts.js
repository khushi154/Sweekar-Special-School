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

// Photo Gallery Lightbox
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});