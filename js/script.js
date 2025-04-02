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