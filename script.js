document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('soatForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Gather form data
        const formData = new FormData(form);

        // Example: Send form data to API endpoint (replace with actual API URL)
        const apiUrl = 'https://api.companiadeseguros.com/venta-soat';
        fetch(apiUrl, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Handle successful response (e.g., show success message)
            alert('¡Venta de SOAT exitosa!');
            form.reset(); // Reset the form after successful submission
        })
        .catch(error => {
            // Handle error (e.g., show error message)
            console.error('Error:', error);
            alert('Ocurrió un error al procesar la venta de SOAT. Por favor, inténtelo de nuevo.');
        });
    });
});
