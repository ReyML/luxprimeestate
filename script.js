// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
});

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Sticky Header Effect
const header = document.getElementById('header');
const headerLogoText = document.getElementById('header-logo-text');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Scrolled State: White Background, Dark Text
        header.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-md', 'py-4');
        header.classList.remove('py-6', 'border-transparent');
        
        if (headerLogoText) {
            headerLogoText.classList.remove('text-white');
            headerLogoText.classList.add('text-text-primary');
        }
        
        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-text-primary');
        });
    } else {
        // Top State: Transparent Background, White Text
        header.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-md', 'py-4');
        header.classList.add('py-6', 'border-transparent');
        
        if (headerLogoText) {
            headerLogoText.classList.add('text-white');
            headerLogoText.classList.remove('text-text-primary');
        }
        
        navLinks.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-text-primary');
        });
    }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

function toggleMenu() {
    const isOpen = mobileMenu.style.right === '0px';
    mobileMenu.style.right = isOpen ? '-100%' : '0px';
}

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.right = '0px';
});

closeMenuBtn.addEventListener('click', () => {
    mobileMenu.style.right = '-100%';
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.right = '-100%';
    });
});

// Hero Animations
window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.to('.hero-title', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out'
    })
    .to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8')
    .to('.hero-search', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8');
});

// Parallax Effect for Images
gsap.utils.toArray('.group').forEach(container => {
    const img = container.querySelector('img');
    if (img) {
        gsap.to(img, {
            yPercent: 10,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            } 
        });
    }
});
