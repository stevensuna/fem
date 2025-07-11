// Tech Book Club Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for buttons that link to membership section
    const membershipButtons = document.querySelectorAll('.primary-button, .footer-button');
    const membershipSection = document.querySelector('.membership-section');

    membershipButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (membershipSection) {
                membershipSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to subscription buttons
    const subscribeButtons = document.querySelectorAll('.subscribe-button');

    subscribeButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(6, 38, 48, 0.15)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add click handlers for subscription buttons
    subscribeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            const buttonText = this.textContent.trim();

            if (buttonText === 'TALK TO US') {
                // Handle enterprise contact
                alert('Thank you for your interest in our Enterprise plan! We will contact you shortly to discuss your team\'s needs.');
            } else {
                // Handle subscription
                const cardElement = this.closest('.option-card');
                const planName = cardElement.querySelector('h3').textContent;
                const priceElement = cardElement.querySelector('.amount');
                const price = priceElement ? priceElement.textContent : 'Custom';

                alert(`Thank you for choosing the ${planName} plan at ${price}/month! You will be redirected to the payment page.`);
            }
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add animation classes to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        section {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }

        section.animate-in {
            opacity: 1;
            transform: translateY(0);
        }

        .hero-section {
            opacity: 1;
            transform: translateY(0);
        }

        .feature-item {
            transition: all 0.3s ease;
        }

        .feature-item:hover {
            transform: translateX(5px);
        }

        .option-card {
            transition: all 0.3s ease;
        }

        .option-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(6, 38, 48, 0.1);
        }

        .option-card.featured:hover {
            box-shadow: 0 10px 25px rgba(254, 163, 111, 0.2);
        }

        .tech-logo {
            transition: all 0.3s ease;
        }

        .tech-logo:hover {
            transform: scale(1.1);
        }

        .step {
            transition: all 0.3s ease;
        }

        .step:hover .step-number {
            background-color: var(--neutral-900);
            color: var(--neutral-0);
        }

        .testimonial-image {
            transition: all 0.3s ease;
        }

        .testimonial-image:hover {
            transform: scale(1.1);
            z-index: 10;
        }

        .star {
            transition: all 0.3s ease;
        }

        .star:hover {
            transform: scale(1.2);
        }

        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    `;
    document.head.appendChild(style);

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });

        // Set initial opacity for loading effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';

        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Add focus styles for keyboard navigation
    const focusStyle = document.createElement('style');
    focusStyle.textContent = `
        .keyboard-navigation button:focus,
        .keyboard-navigation .option-card:focus {
            outline: 2px solid var(--light-salmon-500);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(focusStyle);

    // Console log for debugging
    console.log('Tech Book Club landing page loaded successfully!');
    console.log('Interactive elements:', {
        membershipButtons: membershipButtons.length,
        subscribeButtons: subscribeButtons.length,
        sections: sections.length,
        images: images.length
    });
});

// Utility function for smooth scrolling
function smoothScrollTo(element, duration = 1000) {
    const targetPosition = element.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Export functions for potential external use
window.TechBookClub = {
    smoothScrollTo: smoothScrollTo
};
