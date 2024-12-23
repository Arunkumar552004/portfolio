document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('checkoutForm');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Prevent the form from submitting

        // Get form data
        const formData = new FormData(form);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        console.log('Form Data:', formDataObject);
        
        // You can add additional validation and actions here
        let isValid = true;
        let messages = [];
        
        // Example: perform validation and log the messages
        if (!formDataObject.firstname) {
            isValid = false;
            messages.push('Full Name is required.');
        }

        if (isValid) {
            alert('Form submitted successfully (simulated).');
        } else {
            alert(messages.join('\n'));
        }
    });
});
