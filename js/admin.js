document.addEventListener('DOMContentLoaded', () => {
    // Simple Auth (Demo purposes only)
    const loginForm = document.getElementById('loginForm');
    const loginScreen = document.getElementById('loginScreen');
    const loginError = document.getElementById('loginError');

    if(sessionStorage.getItem('adminAuth') === 'true') {
        loginScreen.style.display = 'none';
        initAdmin();
    }

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pwd = document.getElementById('adminPassword').value;
        if(pwd === 'admin123') { // Hardcoded for demo
            sessionStorage.setItem('adminAuth', 'true');
            loginScreen.style.display = 'none';
            initAdmin();
        } else {
            loginError.style.display = 'block';
        }
    });

    document.getElementById('logoutBtn').addEventListener('click', () => {
        sessionStorage.removeItem('adminAuth');
        window.location.reload();
    });
});

window.showPanel = function(panelId) {
    document.querySelectorAll('.admin-panel').forEach(p => p.style.display = 'none');
    document.querySelectorAll('.sidebar-menu a').forEach(a => a.classList.remove('active'));

    // Quick hack because dashboard is nested differently
    if(panelId === 'dashboard') {
        document.getElementById('panel-dashboard').style.display = 'block';
    } else {
        document.getElementById('panel-' + panelId).style.display = 'block';
    }

    event.currentTarget.classList.add('active');
}

function initAdmin() {
    const reservations = getReservations();
    const restaurants = getRestaurants();

    // Stats
    document.getElementById('statTotalReservations').textContent = reservations.length;
    document.getElementById('statActiveRestaurants').textContent = restaurants.filter(r => r.isActive).length;

    const today = new Date().toISOString().split('T')[0];
    const todayRes = reservations.filter(r => r.date === today);
    document.getElementById('statTodayReservations').textContent = todayRes.length;

    // Render Recent Reservations (Dashboard)
    const recentTable = document.getElementById('recentReservationsTable');
    const recentRes = [...reservations].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
    renderReservationsToTable(recentRes, recentTable, false);

    // Render All Reservations
    const allResTable = document.getElementById('allReservationsTable');
    renderReservationsToTable(reservations.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)), allResTable, true);

    // Render All Restaurants
    const allRestTable = document.getElementById('allRestaurantsTable');
    restaurants.forEach(r => {
        const tr = document.createElement('tr');
        const status = r.isActive ? '<span class="status-badge status-Confirmada">Activo</span>' : '<span class="status-badge status-Cancelada">Inactivo</span>';
        tr.innerHTML = `
            <td><strong>${r.name}</strong></td>
            <td>${r.zone}</td>
            <td>${r.cuisineType}</td>
            <td>${status}</td>
            <td>
                <button style="padding: 0.3rem 0.5rem; cursor:pointer;"><i class="fa-solid fa-pen"></i> Editar</button>
            </td>
        `;
        allRestTable.appendChild(tr);
    });
}

function renderReservationsToTable(data, tbody, showActions) {
    tbody.innerHTML = '';
    if(data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center;">No hay reservas</td></tr>';
        return;
    }
    data.forEach(res => {
        const tr = document.createElement('tr');

        let actions = '';
        if(showActions) {
            actions = `
                <td>
                    <select onchange="updateResStatus('${res.id}', this.value)" style="padding: 0.3rem;">
                        <option value="Confirmada" ${res.status === 'Confirmada' ? 'selected' : ''}>Confirmada</option>
                        <option value="Cancelada" ${res.status === 'Cancelada' ? 'selected' : ''}>Cancelada</option>
                        <option value="Completada" ${res.status === 'Completada' ? 'selected' : ''}>Completada</option>
                    </select>
                </td>
            `;
        }

        tr.innerHTML = `
            <td><strong>${res.reservationCode}</strong></td>
            <td>${res.customerName}</td>
            <td>${res.restaurantName}</td>
            <td>${res.date} ${res.time}</td>
            <td>${res.partySize}</td>
            <td><span class="status-badge status-${res.status}">${res.status}</span></td>
            ${actions}
        `;
        tbody.appendChild(tr);
    });
}

window.updateResStatus = function(id, newStatus) {
    const reservations = getReservations();
    const index = reservations.findIndex(r => r.id === id);
    if(index > -1) {
        reservations[index].status = newStatus;
        localStorage.setItem('reservations', JSON.stringify(reservations));
        initAdmin(); // reload UI
    }
}

// Restaurant Modal Logic
function openRestaurantModal(id = null) {
    const modal = document.getElementById('restaurantModal');
    const form = document.getElementById('restaurantForm');
    const title = document.getElementById('restaurantModalTitle');

    form.reset();
    document.getElementById('editRestId').value = '';

    if (id) {
        title.textContent = 'Editar Restaurante';
        const rests = getRestaurants();
        const r = rests.find(x => x.id === id);
        if(r) {
            document.getElementById('editRestId').value = r.id;
            document.getElementById('restFormName').value = r.name;
            document.getElementById('restFormDesc').value = r.description;
            document.getElementById('restFormCuisine').value = r.cuisineType;
            document.getElementById('restFormZone').value = r.zone;
            document.getElementById('restFormActive').value = r.isActive.toString();
        }
    } else {
        title.textContent = 'Nuevo Restaurante';
    }

    modal.classList.add('show');
}

function closeRestaurantModal() {
    document.getElementById('restaurantModal').classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to new restaurant button
    const newRestBtn = document.querySelector('#panel-restaurants .btn-primary');
    if (newRestBtn) {
        newRestBtn.addEventListener('click', () => openRestaurantModal());
    }

    // Form submit listener
    const restForm = document.getElementById('restaurantForm');
    if(restForm) {
        restForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('editRestId').value;
            const rests = getRestaurants();

            if (id) {
                // Edit
                const index = rests.findIndex(x => x.id === id);
                if(index > -1) {
                    rests[index].name = document.getElementById('restFormName').value;
                    rests[index].description = document.getElementById('restFormDesc').value;
                    rests[index].cuisineType = document.getElementById('restFormCuisine').value;
                    rests[index].zone = document.getElementById('restFormZone').value;
                    rests[index].isActive = document.getElementById('restFormActive').value === 'true';
                }
            } else {
                // Create
                const newRest = {
                    id: Date.now().toString(),
                    name: document.getElementById('restFormName').value,
                    description: document.getElementById('restFormDesc').value,
                    cuisineType: document.getElementById('restFormCuisine').value,
                    zone: document.getElementById('restFormZone').value,
                    isActive: document.getElementById('restFormActive').value === 'true',
                    priceRange: "Medio",
                    rating: 5.0,
                    address: "Dirección pendiente",
                    openingHours: "12:00 PM - 10:00 PM",
                    amenities: ["WiFi"],
                    highlights: [],
                    images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"]
                };
                rests.push(newRest);
            }

            localStorage.setItem('restaurants', JSON.stringify(rests));
            closeRestaurantModal();
            initAdmin(); // Refresh UI
        });
    }
});

// Update the render logic for restaurants to use the modal
const originalInitAdmin = initAdmin;
initAdmin = function() {
    originalInitAdmin();
    // Overwrite the restaurant rendering from originalInitAdmin since we just appended to it
    const rests = getRestaurants();
    const allRestTable = document.getElementById('allRestaurantsTable');
    allRestTable.innerHTML = '';
    rests.forEach(r => {
        const tr = document.createElement('tr');
        const status = r.isActive ? '<span class="status-badge status-Confirmada">Activo</span>' : '<span class="status-badge status-Cancelada">Inactivo</span>';
        tr.innerHTML = `
            <td><strong>${r.name}</strong></td>
            <td>${r.zone}</td>
            <td>${r.cuisineType}</td>
            <td>${status}</td>
            <td>
                <button onclick="openRestaurantModal('${r.id}')" style="padding: 0.3rem 0.5rem; cursor:pointer;"><i class="fa-solid fa-pen"></i> Editar</button>
            </td>
        `;
        allRestTable.appendChild(tr);
    });
};
