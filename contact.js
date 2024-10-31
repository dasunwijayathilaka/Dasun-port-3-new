document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Example of a simple validation (optional)
    const messageField = document.getElementById('message');
    if (!messageField.value) {
        alert('Please enter your message.');
        return;
    }

    // Use fetch to send form data
    const formData = new FormData(this);
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Display a success message and the sent message details
            document.getElementById('messageDisplay').innerHTML = `
                <h3>Message Sent!</h3>
                <p><strong>Name:</strong> ${formData.get('fullName')}</p>
                <p><strong>Email:</strong> ${formData.get('email')}</p>
                <p><strong>Phone:</strong> ${formData.get('phone')}</p>
                <p><strong>Subject:</strong> ${formData.get('subject')}</p>
                <p><strong>Message:</strong> ${formData.get('message')}</p>
            `;
            this.reset(); // Clear the form
        } else {
            alert('Oops! There was a problem sending your message.');
        }
    }).catch(error => {
        alert('Oops! There was a problem sending your message.');
    });
});
