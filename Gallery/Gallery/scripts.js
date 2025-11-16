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



document.addEventListener("DOMContentLoaded", function () {
  const dropdownItems = document.querySelectorAll('.navbar ul li');

  dropdownItems.forEach(item => {
    item.addEventListener('click', function (e) {
      // Activate click behavior only for screen width <= 992px (adjust as needed)
      if (window.innerWidth <= 992) {
        const dropdown = this.querySelector('.dropdown-menu');
        if (dropdown) {
          e.preventDefault(); // Stop normal link behavior
          // Toggle dropdown
          dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
        }
      }
    });
  });
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




// Photo Gallery Lightbox with navigation
const galleryImages = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Open lightbox on image click
galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        openLightbox();
    });
});

function openLightbox() {
    lightbox.style.display = 'flex';
    lightboxImg.src = galleryImages[currentIndex].src;
    lightboxImg.alt = galleryImages[currentIndex].alt;
}

// Close lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Navigate images
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    openLightbox();
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            openLightbox();
        } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            openLightbox();
        } else if (e.key === 'Escape') {
            lightbox.style.display = 'none';
        }
    }
});
