const seedRestaurants = [
    {
        id: "1",
        name: "The Garden Cafe",
        slug: "the-garden-cafe",
        description: "The Garden Café is a beautiful colonial home turned restaurant. We serve fresh, healthy, and delicious food with a focus on local ingredients and sustainable practices.",
        cuisineType: "Internacional / Saludable",
        priceRange: "Medio",
        address: "Calle Libertad, Granada, Nicaragua",
        zone: "Centro histórico",
        phone: "+505 2552 8582",
        email: "info@gardencafegranada.com",
        openingHours: "7:00 AM - 9:00 PM",
        capacity: 80,
        rating: 4.8,
        isActive: true,
        amenities: ["Patio Colonial", "Tienda de Artesanías", "WiFi", "Vegetariano / Vegano", "Pet friendly"],
        images: [
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        highlights: ["Desayuno Nica Saludable", "Ensalada Garden", "Smoothies Frescos"],
        createdAt: new Date().toISOString()
    },
    {
        id: "2",
        name: "NM Culinary Granada",
        slug: "nm-culinary-granada",
        description: "Experiencia 'Farm to table' en el centro histórico de Granada. También servimos vino, cócteles artesanales y café de especialidad.",
        cuisineType: "Farm to Table",
        priceRange: "Premium",
        address: "Calle Guzmán No.509. Granada, Nicaragua",
        zone: "Centro histórico",
        phone: "+505 8000 0010",
        email: "hola@nmculinarygranada.com",
        openingHours: "12:00 PM - 9:00 PM (Miércoles a Domingo)",
        capacity: 40,
        rating: 4.9,
        isActive: true,
        amenities: ["Cócteles Artesanales", "Vino", "Café de Especialidad", "Romántico"],
        images: [
            "https://images.squarespace-cdn.com/content/v1/63122281bfbb6364add7151f/1dc1c9d1-4827-4b1f-9833-3fccb120c23d/IMG_9370+%281%29.jpg",
            "https://images.unsplash.com/photo-1544025162-81111421550a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        highlights: ["Menú de Temporada", "Ingredientes Locales", "Pesca del Día"],
        createdAt: new Date().toISOString()
    },
    {
        id: "3",
        name: "Restaurante El Zaguán",
        slug: "el-zaguan",
        description: "El mejor asado tradicional en Granada. Disfruta de nuestras carnes a la parrilla, un ambiente folklórico y un sabor que nos distingue por décadas.",
        cuisineType: "Parrilla / Nicaragüense",
        priceRange: "Premium",
        address: "Avenida 14 de Septiembre, detrás de la Catedral, Granada",
        zone: "Cerca de Catedral",
        phone: "+505 2552 2522",
        email: "reservas@elzaguan.com",
        openingHours: "12:00 PM - 10:00 PM",
        capacity: 100,
        rating: 4.7,
        isActive: true,
        amenities: ["Música en Vivo", "Parrilla Abierta", "Aire Acondicionado", "Ideal para Grupos"],
        images: [
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        highlights: ["Churrasco Tradicional", "Gallo Pinto", "Ceviche"],
        createdAt: new Date().toISOString()
    },
    {
        id: "4",
        name: "Pita Pita",
        slug: "pita-pita",
        description: "La mejor comida del Medio Oriente y Mediterránea en Granada. Pizzas en horno de leña, shawarmas, falafel y un ambiente acogedor.",
        cuisineType: "Mediterránea / Medio Oriente",
        priceRange: "Medio",
        address: "Calle La Libertad, Granada, Nicaragua",
        zone: "Centro histórico",
        phone: "+505 2552 8272",
        email: "hola@pitapitagranada.com",
        openingHours: "11:30 AM - 10:00 PM",
        capacity: 60,
        rating: 4.8,
        isActive: true,
        amenities: ["Horno de Leña", "Opciones Veganas", "Mesas al Aire Libre", "WiFi"],
        images: [
            "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        highlights: ["Shawarma de Pollo", "Pizza al Horno de Leña", "Plato de Hummus y Falafel"],
        createdAt: new Date().toISOString()
    },
    {
        id: "5",
        name: "Gaia Forest",
        slug: "gaia-forest",
        description: "Conecta con la naturaleza en nuestro bosque tropical dentro de la ciudad. Comida orgánica, fusión y un ambiente relajante único.",
        cuisineType: "Orgánica / Fusión",
        priceRange: "Medio",
        address: "Granada, Nicaragua",
        zone: "Periferia",
        phone: "+505 8123 4567",
        email: "contact@gaiaforest.com",
        openingHours: "8:00 AM - 8:00 PM",
        capacity: 50,
        rating: 4.9,
        isActive: true,
        amenities: ["Jardín Botánico", "Opciones Saludables", "Pet friendly", "Eventos Especiales"],
        images: [
            "https://images.unsplash.com/photo-1466978913421-bac2e5e4d6c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        ],
        highlights: ["Bowl de la Tierra", "Kombucha Casera", "Tostadas con Aguacate y Semillas"],
        createdAt: new Date().toISOString()
    }
];

function initializeStorage() {
    const currentData = JSON.parse(localStorage.getItem('restaurants'));
    // Check if restaurants are uninitialized or contain old dummy data
    // by comparing the length or checking specific legacy properties
    // For this update, we will assume if the data length is not 5, or if it doesn't have our new seed data signatures, we re-seed.
    // However, to be safe and preserve potential admin edits, we'll check if the dataVersion flag is set.
    const dataVersion = localStorage.getItem('dataVersion');
    if (!currentData || dataVersion !== 'v2') {
        localStorage.setItem('restaurants', JSON.stringify(seedRestaurants));
        localStorage.setItem('dataVersion', 'v2');
    }

    if (!localStorage.getItem('reservations')) {
        localStorage.setItem('reservations', JSON.stringify([]));
    }
}

function getRestaurants() {
    return JSON.parse(localStorage.getItem('restaurants')) || [];
}

function getReservations() {
    return JSON.parse(localStorage.getItem('reservations')) || [];
}

function saveReservation(reservation) {
    const reservations = getReservations();
    reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(reservations));
}

// Inicializar base de datos
initializeStorage();
