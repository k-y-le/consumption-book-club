// JavaScript for Consumption Book Club

// REPLACE THIS URL with your Google Apps Script web app URL after deployment
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyH4YPqNGVa3tZA5VOQWcDr-mMf49h8QyL0SPTA-3aFqC1FCv6YDYDat8oWmcUvUbGz/exec';

document.addEventListener('DOMContentLoaded', function() {
    // Image carousel functionality - separate for mobile and desktop
    function setupCarousel(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const carouselImages = container.querySelectorAll('.carousel-image');
        let currentImageIndex = 0;

        function rotateImages() {
            // Remove active class from current image
            carouselImages[currentImageIndex].classList.remove('active');

            // Move to next image
            currentImageIndex = (currentImageIndex + 1) % carouselImages.length;

            // Add active class to new image
            carouselImages[currentImageIndex].classList.add('active');
        }

        // Rotate images every 1 second (1000ms)
        setInterval(rotateImages, 1000);
    }

    // Setup both carousels
    setupCarousel('.mobile-only.image-carousel');
    setupCarousel('.desktop-only.image-carousel');

    // Responsive title sizing for mobile
    function adjustTitleSize() {
        const title = document.querySelector('.title');
        if (!title) return;

        // Only adjust on mobile
        if (window.innerWidth <= 1024) {
            const container = title.parentElement;
            const containerWidth = container.offsetWidth - 10; // Account for padding

            // Start with a large font size and reduce until it fits
            let fontSize = 20; // Start at 20vw
            title.style.fontSize = fontSize + 'vw';

            while (title.scrollWidth > containerWidth && fontSize > 10) {
                fontSize -= 0.5;
                title.style.fontSize = fontSize + 'vw';
            }
        } else {
            // Reset to CSS default on desktop
            title.style.fontSize = '';
        }
    }

    // Adjust on load and resize
    adjustTitleSize();
    window.addEventListener('resize', adjustTitleSize);

    // Newsletter functionality - function to handle email submission
    async function handleEmailSubmit(emailInput, subscribeBtn, checkmark) {
        const email = emailInput.value.trim();

        if (email && email.includes('@')) {
            // Disable button while submitting
            subscribeBtn.disabled = true;
            subscribeBtn.textContent = 'sending...';

            try {
                // Send email to Google Sheets via Apps Script
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Required for Google Apps Script
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: email })
                });

                // Note: no-cors mode means we can't read the response
                // But the request will still be processed by Google Apps Script
                console.log('Email submitted:', email);

                // Hide button and input, show checkmark
                subscribeBtn.style.display = 'none';
                emailInput.style.display = 'none';
                checkmark.style.display = 'block';

                // Clear the input
                emailInput.value = '';

                // Reset after a few seconds
                setTimeout(() => {
                    subscribeBtn.style.display = 'block';
                    emailInput.style.display = 'block';
                    checkmark.style.display = 'none';
                    subscribeBtn.disabled = false;
                    subscribeBtn.textContent = 'stay tuned';
                }, 3000);

            } catch (error) {
                console.error('Error submitting email:', error);
                alert('There was an error submitting your email. Please try again.');
                subscribeBtn.disabled = false;
                subscribeBtn.textContent = 'stay tuned';
            }
        } else {
            alert('Please enter a valid email address');
        }
    }

    // Mobile newsletter form
    const subscribeBtn = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('emailInput');
    const checkmark = document.getElementById('checkmark');

    if (subscribeBtn && emailInput && checkmark) {
        subscribeBtn.addEventListener('click', async function() {
            await handleEmailSubmit(emailInput, subscribeBtn, checkmark);
        });

        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeBtn.click();
            }
        });
    }

    // Desktop newsletter form
    const subscribeBtn2 = document.getElementById('subscribeBtn2');
    const emailInput2 = document.getElementById('emailInput2');
    const checkmark2 = document.getElementById('checkmark2');

    if (subscribeBtn2 && emailInput2 && checkmark2) {
        subscribeBtn2.addEventListener('click', async function() {
            await handleEmailSubmit(emailInput2, subscribeBtn2, checkmark2);
        });

        emailInput2.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                subscribeBtn2.click();
            }
        });
    }
});
