lucide.createIcons();

// Custom Cursor
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");
window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Mobile Menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

const closeMenu = () => {
    mobileMenu.classList.add('-translate-y-full', 'opacity-0');
    // Wait for the transition to finish before hiding it completely
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300); // This should match your transition duration
};

mobileMenuButton.addEventListener('click', () => {
    // This makes the element take up space before animation
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        // A tiny delay to allow the browser to render the element before transitioning it
        setTimeout(() => {
            mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
        }, 20);
    } else {
        closeMenu();
    }
});

// Close menu when a link is clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (!mobileMenu.classList.contains('hidden')) {
            closeMenu();
        }
    });
});

// Typewriter Effect
const typewriterElement = document.getElementById('typewriter');
const roles = ["Web Developer", "App Developer", "Video Editor", "Digital Creator"];
let roleIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 75 : 150;
    
    typewriterElement.textContent = currentRole.substring(0, charIndex);
    typewriterElement.setAttribute('data-text', typewriterElement.textContent);

    if (!isDeleting && charIndex < currentRole.length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    
    const delay = isDeleting ? 1000 : (charIndex === currentRole.length ? 2000 : typeSpeed);
    setTimeout(type, charIndex === currentRole.length ? 2000 : typeSpeed);
}
document.addEventListener('DOMContentLoaded', type);

// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Particles.js Config
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#d946ef" },
    "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
    "opacity": { "value": 0.5, "random": false, "anim": { "enable": false } },
    "size": { "value": 3, "random": true, "anim": { "enable": false } },
    "line_linked": { "enable": true, "distance": 150, "color": "#c026d3", "opacity": 0.4, "width": 1 },
    "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
    "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
  },
  "retina_detect": true
});

// Vanilla-Tilt.js Config
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5
});