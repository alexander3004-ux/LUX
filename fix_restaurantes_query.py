with open("restaurantes.html", "r") as f:
    content = f.read()

script_patch = """
        document.addEventListener('DOMContentLoaded', () => {
            // Read query params
            const params = new URLSearchParams(window.location.search);
            const pCuisine = params.get('cuisine');
            const pZone = params.get('zone');

            if(pCuisine) cuisineFilter.value = pCuisine;
            if(pZone) zoneFilter.value = pZone;

            renderRestaurants(getRestaurants());
            filterRestaurants(); // Apply filters immediately based on query

            searchInput.addEventListener('input', filterRestaurants);
            cuisineFilter.addEventListener('change', filterRestaurants);
            priceFilter.addEventListener('change', filterRestaurants);
            zoneFilter.addEventListener('change', filterRestaurants);
        });
"""

# Replace the old DOMContentLoaded listener
import re
content = re.sub(
    r"document\.addEventListener\('DOMContentLoaded', \(\) => {.*?}\);",
    script_patch.strip(),
    content,
    flags=re.DOTALL
)

with open("restaurantes.html", "w") as f:
    f.write(content)
