const seedRestaurants = [
    {
        id: "1",
        name: "Restaurante El Patio Granadino",
        slug: "restaurante-el-patio-granadino",
        description: "Auténtica cocina nicaragüense en un patio colonial lleno de historia y encanto.",
        cuisineType: "Nicaragüense",
        priceRange: "Medio",
        address: "Calle Atravesada, Granada, Nicaragua",
        zone: "Centro histórico",
        phone: "+505 8000 0001",
        email: "contacto@elpatiogranadino.ni",
        openingHours: "11:00 AM - 10:00 PM",
        capacity: 60,
        rating: 4.8,
        isActive: true,
        amenities: ["Terraza", "Música en vivo", "Familiar", "WiFi"],
        images: ["https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        highlights: ["Vigorón Gourmet", "Churrasco al estilo Nica"],
        createdAt: new Date().toISOString()
    },
    {
        id: "2",
        name: "Terraza La Calzada",
        slug: "terraza-la-calzada",
        description: "El mejor ambiente nocturno en la famosa Calle La Calzada, con una fusión de comida internacional.",
        cuisineType: "Internacional",
        priceRange: "Medio",
        address: "Calle La Calzada, Granada, Nicaragua",
        zone: "Calle La Calzada",
        phone: "+505 8000 0002",
        email: "reservas@terrazalacalzada.ni",
        openingHours: "4:00 PM - 1:00 AM",
        capacity: 80,
        rating: 4.6,
        isActive: true,
        amenities: ["Terraza", "Aire acondicionado", "Música en vivo", "WiFi"],
        images: ["https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        highlights: ["Ceviche Tropical", "Cócteles de Autor"],
        createdAt: new Date().toISOString()
    },
    {
        id: "3",
        name: "Sabores del Lago",
        slug: "sabores-del-lago",
        description: "Especialistas en mariscos frescos con una vista inigualable al Lago Cocibolca.",
        cuisineType: "Mariscos",
        priceRange: "Premium",
        address: "Centro Turístico de Granada",
        zone: "Malecón",
        phone: "+505 8000 0003",
        email: "hola@saboresdellago.ni",
        openingHours: "12:00 PM - 9:00 PM",
        capacity: 100,
        rating: 4.9,
        isActive: true,
        amenities: ["Vista al lago", "Terraza", "Parqueo", "Familiar", "Pet friendly"],
        images: ["https://images.unsplash.com/photo-1572162522099-7a0c28d7691b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        highlights: ["Pescado a la Tipitapa", "Langosta al Ajillo"],
        createdAt: new Date().toISOString()
    },
    {
        id: "4",
        name: "Café Colonial Granada",
        slug: "cafe-colonial-granada",
        description: "Un espacio acogedor para disfrutar del mejor café nicaragüense y repostería artesanal.",
        cuisineType: "Café",
        priceRange: "Económico",
        address: "Costado Oeste del Parque Central",
        zone: "Cerca del Parque Central",
        phone: "+505 8000 0004",
        email: "info@cafecolonial.ni",
        openingHours: "7:00 AM - 7:00 PM",
        capacity: 40,
        rating: 4.7,
        isActive: true,
        amenities: ["Aire acondicionado", "WiFi", "Familiar"],
        images: ["https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        highlights: ["Café de Especialidad", "Tostadas Francesas"],
        createdAt: new Date().toISOString()
    },
    {
        id: "5",
        name: "Asados Volcán Mombacho",
        slug: "asados-volcan-mombacho",
        description: "Cortes de carne premium preparados a la parrilla con leña local en un ambiente rústico.",
        cuisineType: "Parrilla",
        priceRange: "Premium",
        address: "Carretera a Masaya km 40",
        zone: "Centro histórico",
        phone: "+505 8000 0005",
        email: "reservas@asadosmombacho.ni",
        openingHours: "12:00 PM - 10:00 PM",
        capacity: 120,
        rating: 4.8,
        isActive: true,
        amenities: ["Parqueo", "Terraza", "Música en vivo", "Familiar"],
        images: ["https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        highlights: ["Tomahawk Clásico", "Costillas BBQ"],
        createdAt: new Date().toISOString()
    },
    {
        id: "6",
        name: "Bistro Parque Central",
        slug: "bistro-parque-central",
        description: "Cocina de autor en un ambiente elegante ideal para cenas románticas.",
        cuisineType: "Internacional",
        priceRange: "Medio",
        address: "Frente al Parque Central",
        zone: "Cerca del Parque Central",
        phone: "+505 8000 0006",
        email: "contacto@bistroparque.ni",
        openingHours: "5:00 PM - 11:00 PM",
        capacity: 50,
        rating: 4.5,
        isActive: true,
        amenities: ["Aire acondicionado", "Romántico", "WiFi"],
        images: ["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        highlights: ["Risotto de Hongos", "Carpaccio de Res"],
        createdAt: new Date().toISOString()
    },
    {
        id: "7",
        name: "Mariscos Las Isletas",
        slug: "mariscos-las-isletas",
        description: "Una experiencia gastronómica única navegando por las Isletas de Granada.",
        cuisineType: "Mariscos",
        priceRange: "Premium",
        address: "Puerto Asese, Granada",
        zone: "Isletas",
        phone: "+505 8000 0007",
        email: "tour@mariscoslasisletas.ni",
        openingHours: "10:00 AM - 6:00 PM",
        capacity: 30,
        rating: 4.9,
        isActive: true,
        amenities: ["Vista al lago", "Familiar", "Romántico"],
        images: ["https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        highlights: ["Bandeja de Mariscos", "Pescado Frito"],
        createdAt: new Date().toISOString()
    },
    {
        id: "8",
        name: "Cocina Doña Mercedes",
        slug: "cocina-dona-mercedes",
        description: "La verdadera esencia de la comida casera nicaragüense, recetas pasadas de generación en generación.",
        cuisineType: "Nicaragüense",
        priceRange: "Económico",
        address: "Barrio Jalteva",
        zone: "Centro histórico",
        phone: "+505 8000 0008",
        email: "donamercedes@cocinanica.ni",
        openingHours: "7:00 AM - 4:00 PM",
        capacity: 45,
        rating: 4.8,
        isActive: true,
        amenities: ["Familiar", "Económico"],
        images: ["https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"],
        highlights: ["Indio Viejo", "Nacatamales (Fines de semana)"],
        createdAt: new Date().toISOString()
    }
];

function initializeStorage() {
    if (!localStorage.getItem('restaurants')) {
        localStorage.setItem('restaurants', JSON.stringify(seedRestaurants));
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
