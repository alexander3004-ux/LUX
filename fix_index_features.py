import re

with open("index.html", "r") as f:
    content = f.read()

# Insert Quick Search Widget into Hero
hero_search_html = """
        <div class="hero-content" style="max-width: 1000px;">
            <h1>Reserva tu mesa en los mejores restaurantes de <span>Granada, Nicaragua</span></h1>
            <p>Descubre la gastronomía local e internacional en la joya colonial. Confirmación rápida y sin llamadas innecesarias.</p>

            <div class="glass-panel" style="padding: 1.5rem; margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap; text-align: left;">
                <form action="restaurantes.html" method="GET" style="display: flex; width: 100%; gap: 1rem; align-items: flex-end; flex-wrap: wrap;">
                    <div class="form-group" style="flex: 1; min-width: 150px; margin-bottom: 0;">
                        <label style="color: var(--bg-light); font-size: 0.9rem;">Tipo de Comida</label>
                        <select name="cuisine" style="width: 100%; padding: 0.8rem; border-radius: 8px; border: none;">
                            <option value="all">Todas</option>
                            <option value="Nicaragüense">Nicaragüense</option>
                            <option value="Internacional">Internacional</option>
                            <option value="Mariscos">Mariscos</option>
                            <option value="Parrilla">Parrilla</option>
                        </select>
                    </div>
                    <div class="form-group" style="flex: 1; min-width: 150px; margin-bottom: 0;">
                        <label style="color: var(--bg-light); font-size: 0.9rem;">Zona</label>
                        <select name="zone" style="width: 100%; padding: 0.8rem; border-radius: 8px; border: none;">
                            <option value="all">Todas</option>
                            <option value="Centro histórico">Centro histórico</option>
                            <option value="Calle La Calzada">Calle La Calzada</option>
                            <option value="Malecón">Malecón</option>
                        </select>
                    </div>
                    <button type="submit" class="btn-primary" style="padding: 0.8rem 2rem; white-space: nowrap;">Buscar Mesa</button>
                </form>
            </div>
        </div>
"""

content = re.sub(r'<div class="hero-content">.*?</div>', hero_search_html, content, flags=re.DOTALL)

# Insert Featured Restaurants Section before "Cómo funciona"
featured_html = """
    <!-- MAIN CONTENT -->
    <main class="container">

        <!-- RESTAURANTES DESTACADOS -->
        <section class="section-title">
            <h2>Restaurantes Destacados</h2>
            <p>Los favoritos de nuestros comensales</p>
        </section>
        <section class="restaurants-grid" id="featuredContainer" style="margin-bottom: 5rem;">
            <!-- JS -->
        </section>
"""

content = content.replace("    <!-- MAIN CONTENT -->\n    <main class=\"container\">", featured_html)

with open("index.html", "w") as f:
    f.write(content)

with open("index.html", "a") as f:
    f.write("""
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const rests = getRestaurants().filter(r => r.isActive).sort((a,b) => b.rating - a.rating).slice(0, 3);
            const container = document.getElementById('featuredContainer');
            if(container) {
                rests.forEach(r => {
                    const card = document.createElement('article');
                    card.className = 'restaurant-card';
                    card.innerHTML = `
                        <div class="card-img-container">
                            <img src="${r.images[0]}" alt="${r.name}" loading="lazy">
                            <div class="card-badges">
                                <span class="badge"><i class="fa-solid fa-star" style="color: gold;"></i> ${r.rating}</span>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3>${r.name}</h3>
                            <div class="card-info-meta">
                                <span><i class="fa-solid fa-location-dot"></i> ${r.zone}</span>
                                <span>${r.cuisineType}</span>
                            </div>
                            <p class="description" style="margin-bottom: 1rem;">${r.description.substring(0, 80)}...</p>
                            <a href="restaurante.html?id=${r.id}" class="btn-secondary" style="display: block; width: 100%;">Ver Detalles</a>
                        </div>
                    `;
                    container.appendChild(card);
                });
            }
        });
    </script>
""")
