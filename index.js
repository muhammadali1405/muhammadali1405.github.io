// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Handle middle mouse button click for certificate buttons
const certButtons = document.querySelectorAll('.cert-btn');

certButtons.forEach(button => {
    button.addEventListener('mousedown', (e) => {
        // Middle mouse button is button 1
        if (e.button === 1) {
            e.preventDefault();
            const url = button.getAttribute('onclick');
            if (url) {
                // Extract URL from onclick attribute
                const urlMatch = url.match(/'([^']+)'/);
                if (urlMatch && urlMatch[1]) {
                    window.open(urlMatch[1], '_blank');
                }
            }
        }
    });
});