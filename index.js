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

// Contact popup functionality
let currentContactData = {
    value: '',
    action: ''
};

function showContactPopup(event, displayValue, action) {
    event.preventDefault();
    
    currentContactData.value = displayValue;
    currentContactData.action = action;
    
    const popup = document.getElementById('contactPopup');
    popup.classList.add('show');
    
    // Add overlay
    let overlay = document.querySelector('.popup-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'popup-overlay show';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', closeContactPopup);
    } else {
        overlay.classList.add('show');
    }
}

function closeContactPopup() {
    const popup = document.getElementById('contactPopup');
    popup.classList.remove('show');
    
    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {
        overlay.classList.remove('show');
    }
}

function handleContactAction(action) {
    if (action === 'open') {
        // Open the link
        if (currentContactData.action.startsWith('mailto:')) {
            window.location.href = currentContactData.action;
        } else if (currentContactData.action.startsWith('tel:')) {
            window.location.href = currentContactData.action;
        }
    } else if (action === 'copy') {
        // Copy to clipboard
        navigator.clipboard.writeText(currentContactData.value).then(() => {
            // Show success feedback
            console.log('Copied to clipboard: ' + currentContactData.value);
            alert('Copied to clipboard: ' + currentContactData.value);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }
    
    closeContactPopup();
}