// ========== GSAP Animations ==========
gsap.registerPlugin(ScrollTrigger);

const heroTl = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete: () => {
        startFloatingAnimations();
    }
});

heroTl
    // Draw the circle stroke
    .to(".big-circle circle", {
        strokeDashoffset: 0,
        duration: 1.2
    })
    // Fill the circle
    .to(".big-circle circle", {
        fillOpacity: 1,
        duration: 0.6
    })
    // Reveal first image
    .from(".hero-1", {
        x: 100,
        opacity: 0,
        duration: 0.6
    }, "-=0.4")
    // Reveal second image
    .from(".hero-2", {
        x: 120,
        opacity: 0,
        duration: 0.6
    }, "-=0.3");

// Icon bubbles appear
gsap.from(".icon-div", {
    opacity: 0,
    scale: 0.5,
    y: 20,
    stagger: 0.15,
    ease: "back.out(1.7)",
    delay: 1,
    duration: 0.5
});

function startFloatingAnimations() {
    // Background circles float
    gsap.to(".box1, .box2, .box3, .box4, .box5", {
        y: -30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4
    });

    // Icons float
    gsap.to(".icon-div", {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2,
        stagger: 0.3
    });
}

// Form submission handler
document.getElementById('FormBox').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('input');
    const button = this.querySelector('button');

    // Simple animation on submit
    gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            alert('Thanks for signing up! Email: ' + input.value);
            input.value = '';
        }
    });
});



gsap.from(".card", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".cards",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    }
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            boxShadow: "rgba(100, 100, 111, 0.3) 0px 15px 40px 0px",
            duration: 0.3,
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            duration: 0.3,
            ease: "power2.out"
        });
    });
});



gsap.from(".blue-circle", {
    scale: 0,
    duration: 1,
    ease: "back.out(1.5)",
    scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

// Testimonial cards fade and slide in
gsap.from(".testimonial-card", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

// Profile images pop in
gsap.from(".profile-img", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "back.out(1.7)",
    delay: 0.5,
    scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

// Decorative shapes float in
gsap.from(".deco-shape", {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    ease: "back.out(1.5)",
    delay: 0.8,
    scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

// Quote mark fade in
gsap.from(".quote-mark", {
    opacity: 0,
    scale: 0.5,
    duration: 0.6,
    ease: "power2.out",
    delay: 1,
    scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top 70%",
        toggleActions: "play none none reverse"
    }
});

// Continuous floating animations
gsap.to(".deco-pink", {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".deco-cyan", {
    y: -25,
    duration: 3.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    delay: 0.5
});

gsap.to(".quote-mark", {
    y: -15,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Card hover effects
const cardss = document.querySelectorAll('.testimonial-card');
cardss.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
            duration: 0.3
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
            duration: 0.3
        });
    });
});



gsap.from(".footer-cta", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: "footer",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});

// Footer bottom slide up
gsap.from(".footer-bottom", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    delay: 0.3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".footer-bottom",
        start: "top 90%",
        toggleActions: "play none none reverse"
    }
});


// Background circle pulse
gsap.to(".footer-bg-circle", {
    scale: 1.1,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Form submission handler
document.querySelector('.footer-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const input = this.querySelector('input');
    const button = this.querySelector('button');

    gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
            alert('Thanks for subscribing! Email: ' + input.value);
            input.value = '';
        }
    });
});