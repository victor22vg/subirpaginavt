document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('consultaForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // para prevenir que se envíe por defecto

        // Se obtienen los valores del documento mediante su id
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim(); 

        // Validación del nombre (al menos 3 caracteres, comienza con mayúscula)
        const nombreRegex = /^[A-Z][a-zA-Z]{2,}$/; // Comienza con mayúscula y un mínimo de 3 caracteres
        if (!nombreRegex.test(nombre)) {
            alert('Por favor, ingresa un nombre válido (mínimo 3 caracteres y que comience con mayúscula).');
            return;
        }

        // Validación del correo electrónico (acepta @gmail.com y @vallegrande.edu.pe)
        const emailRegex = /^[a-zA-Z0-9_%+-]+@(gmail\.com|vallegrande\.edu\.pe)$/; // Acepta Gmail y Valle Grande
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un correo electrónico válido (Gmail o vallegrande.edu.pe).');
            return;
        }

        // No nos permitira enviar menos de 10 caracteres
        if (mensaje.length < 10) {
            alert('Por favor, ingresa un mensaje de al menos 10 caracteres.');
            return;
        }

        // Si todas las validaciones son correctas nos mostrara:
        alert('¡Envío exitoso! Su consulta ha sido enviada correctamente.');
        
        form.submit(); 
    });
});
