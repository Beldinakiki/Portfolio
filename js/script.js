function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name.length < 2) {
        alert('Please enter a valid name');
        return false;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (!phone.match(/^\d{10}$/)) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    }

    if (subject.length < 3) {
        alert('Please enter a valid subject');
        return false;
    }

    if (message.length < 10) {
        alert('Please enter a message with at least 10 characters');
        return false;
    }

    return true;
}

// Typing Animation
const typed = new Typed('.multiple-text', {
    strings: ['Data Analyst', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Menu icon functionality
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Close menu when scrolling
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Update active nav link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

// Update active nav link on click
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
}); 