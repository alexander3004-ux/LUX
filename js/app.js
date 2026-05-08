// Mock Data for Restaurants
const restaurants = [
    {
        id: 1,
        name: "El Zaguán Colonial",
        cuisine: "local",
        service: "terrace",
        image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Alta cocina nicaragüense en el corazón de Granada. Disfruta de cortes premium y platillos tradicionales reinventados.",
        mixology: {
            signature: "Macuá Ahumado",
            volume: "8 oz",
            details: "Ron Flor de Caña 12 años, jugo de guayaba, limón, servido con humo de maderas locales."
        }
    },
    {
        id: 2,
        name: "Néctar Fusión",
        cuisine: "international",
        service: "ac",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Una experiencia sensorial que mezcla técnicas vanguardistas con ingredientes frescos del trópico.",
        mixology: {
            signature: "Neón Tonic",
            volume: "10 oz",
            details: "Ginebra artesanal, tónica botánica, infusión de flor de jamaica y polvo de oro comestible."
        }
    },
    {
        id: 3,
        name: "Mombacho Rooftop",
        cuisine: "mediterranean",
        service: "rooftop",
        image: "https://images.unsplash.com/photo-1572162522099-7a0c28d7691b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Vistas panorámicas del volcán y la catedral mientras degustas tapas mediterráneas de autor.",
        mixology: {
            signature: "Volcano Spritz",
            volume: "12 oz",
            details: "Prosecco, licor de naranja amarga, dash de soda y romero quemado."
        }
    },
    {
        id: 4,
        name: "Bistro La Calzada",
        cuisine: "local",
        service: "live_music",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "El ambiente más vibrante de la ciudad. Cocina contemporánea con música en vivo todas las noches.",
        mixology: {
            signature: "Granada Mule",
            volume: "10 oz",
            details: "Vodka premium, cerveza de jengibre local, jugo de lima y bitter de cacao."
        }
    },
    {
        id: 5,
        name: "Sakura Imperial",
        cuisine: "asian",
        service: "ac",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Cocina asiática de precisión. Sushi bar y robata grill en un ambiente íntimo y sofisticado.",
        mixology: {
            signature: "Kyoto Sour",
            volume: "6 oz",
            details: "Whisky japonés, yuzu, clara de huevo y matcha en polvo."
        }
    },
    {
        id: 6,
        name: "Cúpula Dining",
        cuisine: "international",
        service: "terrace",
        image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Gastronomía internacional a la sombra de los campanarios. Una velada romántica inolvidable.",
        mixology: {
            signature: "Colonial Martini",
            volume: "5 oz",
            details: "Ginebra seca, vermut blanco, tintura de cardamomo y aceituna macerada en pisco."
        }
    }
];

// DOM Elements
const restaurantsContainer = document.getElementById('restaurantsContainer');
const searchInput = document.getElementById('searchInput');
const cuisineFilter = document.getElementById('cuisineFilter');
const serviceFilter = document.getElementById('serviceFilter');
const header = document.getElementById('main-header');

const modal = document.getElementById('reservationModal');
const closeModalBtn = document.querySelector('.close-modal');
const reservationForm = document.getElementById('reservationForm');
const modalRestaurantName = document.getElementById('modalRestaurantName');

// State
let currentRestaurant = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderRestaurants(restaurants);
    setupEventListeners();

    // Set min date for reservation to now
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    document.getElementById('resDate').min = now.toISOString().slice(0,16);
});

// Scroll Event for Header
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.add('scrolled'); // keep it dark for now, or handle appropriately
        if(window.scrollY < 10) header.classList.remove('scrolled');
    }
});

function scrollToRestaurants() {
    document.getElementById('filters').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Render Restaurants
function renderRestaurants(data) {
    restaurantsContainer.innerHTML = '';

    if (data.length === 0) {
        restaurantsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-muted);">
                <i class="fa-solid fa-utensils fa-3x" style="margin-bottom: 1rem; color: var(--border-color);"></i>
                <h3>No se encontraron experiencias</h3>
                <p>Intenta ajustar tus filtros de búsqueda.</p>
            </div>
        `;
        return;
    }

    data.forEach(restaurant => {
        const card = document.createElement('article');
        card.className = 'restaurant-card glass-panel';

        const cuisineLabel = getCuisineLabel(restaurant.cuisine);

        card.innerHTML = `
            <div class="card-img-container">
                <img src="${restaurant.image}" alt="${restaurant.name}" loading="lazy">
                <div class="card-badges">
                    <span class="badge">${cuisineLabel}</span>
                </div>
            </div>
            <div class="card-content">
                <h3>${restaurant.name}</h3>
                <p class="description">${restaurant.description}</p>

                <div class="mixology-info">
                    <h4><i class="fa-solid fa-martini-glass-citrus"></i> Mixología Destacada</h4>
                    <p><strong>${restaurant.mixology.signature}</strong> (${restaurant.mixology.volume})<br>
                    ${restaurant.mixology.details}</p>
                </div>

                <button class="btn-reserve" onclick="openReservation(${restaurant.id})">
                    Reservar Experiencia
                </button>
            </div>
        `;

        restaurantsContainer.appendChild(card);
    });
}

// Helpers
function getCuisineLabel(type) {
    const labels = {
        'local': 'Local',
        'international': 'Internacional',
        'mediterranean': 'Mediterránea',
        'asian': 'Asiática'
    };
    return labels[type] || 'Fusión';
}

// Filtering Logic
function filterRestaurants() {
    const searchTerm = searchInput.value.toLowerCase();
    const cuisine = cuisineFilter.value;
    const service = serviceFilter.value;

    const filtered = restaurants.filter(restaurant => {
        const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm) ||
                              restaurant.description.toLowerCase().includes(searchTerm) ||
                              restaurant.mixology.signature.toLowerCase().includes(searchTerm);

        const matchesCuisine = cuisine === 'all' || restaurant.cuisine === cuisine;
        const matchesService = service === 'all' || restaurant.service === service;

        return matchesSearch && matchesCuisine && matchesService;
    });

    renderRestaurants(filtered);
}

// Event Listeners for Filters
function setupEventListeners() {
    searchInput.addEventListener('input', filterRestaurants);
    cuisineFilter.addEventListener('change', filterRestaurants);
    serviceFilter.addEventListener('change', filterRestaurants);

    // Modal events
    closeModalBtn.addEventListener('click', closeReservation);
    window.addEventListener('click', (e) => {
        if (e.target === modal) closeReservation();
    });

    // Form Submit
    reservationForm.addEventListener('submit', handleReservationSubmit);
}

// Modal Logic
window.openReservation = function(id) {
    currentRestaurant = restaurants.find(r => r.id === id);
    if (!currentRestaurant) return;

    modalRestaurantName.textContent = `Reservar en ${currentRestaurant.name}`;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeReservation() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => {
        reservationForm.reset();
        currentRestaurant = null;
    }, 300);
}

function handleReservationSubmit(e) {
    e.preventDefault();

    // Simulate API call
    const btn = reservationForm.querySelector('.btn-submit');
    const originalText = btn.textContent;
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Procesando...';
    btn.disabled = true;

    setTimeout(() => {
        const date = new Date(document.getElementById('resDate').value);
        const formattedDate = date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });

        showToast(`¡Reserva confirmada en ${currentRestaurant.name} para el ${formattedDate}!`, 'success');

        closeReservation();
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1500);
}

// Toast Notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const icon = toast.querySelector('i');

    toastMessage.textContent = message;
    toast.className = 'toast ' + type;

    if (type === 'success') {
        icon.className = 'fas fa-check-circle';
    } else {
        icon.className = 'fas fa-exclamation-circle';
    }

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}
