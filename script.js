// JavaScript for Consumption Book Club

// REPLACE THIS URL with your Google Apps Script web app URL after deployment
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyH4YPqNGVa3tZA5VOQWcDr-mMf49h8QyL0SPTA-3aFqC1FCv6YDYDat8oWmcUvUbGz/exec';

document.addEventListener('DOMContentLoaded', function() {
    const subscribeBtn = document.getElementById('subscribeBtn');
    const emailInput = document.getElementById('emailInput');
    const checkmark = document.getElementById('checkmark');

    subscribeBtn.addEventListener('click', async function() {
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
    });

    // Allow Enter key to submit
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            subscribeBtn.click();
        }
    });
});
