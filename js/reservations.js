document.addEventListener('DOMContentLoaded', () => {
    const reservationForm = document.getElementById('reservationForm');
    if (!reservationForm) return;

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const restaurantId = window.currentRestaurantId;
        const restaurants = getRestaurants();
        const restaurant = restaurants.find(r => r.id === restaurantId);

        const date = document.getElementById('resDate').value;
        const time = document.getElementById('resTime').value;
        const guests = parseInt(document.getElementById('resGuests').value);
        const name = document.getElementById('resName').value;
        const email = document.getElementById('resEmail').value;
        const phone = document.getElementById('resPhone').value;
        const notes = document.getElementById('resNotes').value;

        // Basic validations
        if (!date || !time || !name || !email || !phone) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        const selectedDateTime = new Date(`${date}T${time}`);
        if (selectedDateTime < new Date()) {
            alert("No puedes seleccionar una fecha u hora en el pasado.");
            return;
        }

        // Generate unique code
        const code = generateReservationCode();

        const newReservation = {
            id: Date.now().toString(),
            reservationCode: code,
            restaurantId: restaurantId,
            restaurantName: restaurant.name,
            customerName: name,
            customerEmail: email,
            customerPhone: phone,
            date: date,
            time: time,
            partySize: guests,
            specialRequests: notes,
            status: "Confirmada",
            createdAt: new Date().toISOString()
        };

        // Save to localStorage
        saveReservation(newReservation);

        // Send via WhatsApp
        const phoneNumber = "+50576112663";
        const message = `¡Hola! Tengo una nueva reserva en Reservas Granada.\n\n` +
                        `*Detalles de la Reserva:*\n` +
                        `- Código: ${code}\n` +
                        `- Restaurante: ${restaurant.name}\n` +
                        `- Fecha: ${date}\n` +
                        `- Hora: ${time}\n` +
                        `- Personas: ${guests}\n\n` +
                        `*Datos del Cliente:*\n` +
                        `- Nombre: ${name}\n` +
                        `- Teléfono: ${phone}\n` +
                        `- Email: ${email}\n` +
                        (notes ? `- Notas: ${notes}` : '');

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Show Success Modal
        const successModal = document.getElementById('successModal');
        const codeDisplay = document.getElementById('resCodeDisplay');
        codeDisplay.textContent = code;
        successModal.classList.add('show');

        // Redirect to WhatsApp directly
        window.location.href = whatsappUrl;
    });
});

function generateReservationCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        if(i === 3) code += '-';
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}
