# Reservas Granada

Reservas Granada es una plataforma profesional y moderna para encontrar y reservar en los mejores restaurantes de la ciudad colonial de Granada, Nicaragua.

Este proyecto fue transformado desde un antiguo e-commerce de ropa para convertirse en un sistema de reservas 100% funcional en el lado del cliente (frontend) usando HTML, CSS, JavaScript y `localStorage` para almacenamiento persistente.

## Características Principales

*   **Página de Inicio:** Búsqueda rápida por zona y tipo de comida, y visualización de restaurantes destacados.
*   **Listado de Restaurantes:** Filtrado dinámico por búsqueda de texto, tipo de comida, precio y zona.
*   **Detalle de Restaurante:** Información completa, servicios, platos destacados y formulario interactivo para crear una reserva.
*   **Sistema de Reservas:** Creación de reservas con generación de código único, guardado en `localStorage`.
*   **Consulta de Reservas:** Los clientes pueden consultar el estado de su reserva ingresando su código generado.
*   **Panel de Administración:** Un panel completo protegido por contraseña simulada para gestionar reservas (cambiar estados a Confirmada, Cancelada, Completada) y gestionar restaurantes (Crear, Leer, Actualizar).
*   **Diseño:** UI/UX elegante, moderno, responsive e inspirado en la estética colonial de Granada.

## Tecnologías Usadas

*   **HTML5**
*   **CSS3** (Variables CSS, Flexbox, Grid)
*   **JavaScript (Vanilla ES6+)**
*   **Almacenamiento:** `localStorage` nativo del navegador.
*   **Iconos:** FontAwesome 6

## Instalación y Ejecución

Al ser un proyecto Frontend estático sin dependencias complejas (no requiere Node.js ni bases de datos SQL), la ejecución es muy sencilla:

1. Clona el repositorio:
   ```bash
   git clone <url_del_repo>
   cd <nombre_de_la_carpeta>
   ```

2. Ejecuta un servidor local:
   Puedes usar Python o cualquier extensión de VSCode (Live Server):
   ```bash
   python3 -m http.server 8000
   ```

3. Abre en tu navegador:
   http://localhost:8000

### Semillas / Datos Demo
La aplicación incluye un archivo `js/data.js` que automáticamente inicializa la base de datos `localStorage` con 8 restaurantes de demostración ubicados en Granada, Nicaragua. Si necesitas resetear los datos, simplemente limpia el almacenamiento local de tu navegador en `Aplicación > Almacenamiento Local`.

## Credenciales Demo para Admin

Para acceder al panel administrativo (`admin.html`):
*   **Contraseña:** `admin123`

## Arquitectura

*   `index.html`, `restaurantes.html`, `restaurante.html`, `mis-reservas.html`, `admin.html`: Vistas principales.
*   `css/style.css`: Toda la estilización centralizada.
*   `js/data.js`: Lógica de inicialización y acceso a `localStorage`. Modela entidades de Restaurante y Reserva.
*   `js/reservations.js`: Lógica específica del formulario de creación de reserva.
*   `js/admin.js`: Lógica del panel de administración (autenticación mock y CRUD de entidades).

## Próximas Mejoras Sugeridas

1.  **Migración a un Backend Real:** Reemplazar `localStorage` con una API REST (Node.js/Express, Python/Django) y una base de datos (PostgreSQL, MongoDB).
2.  **Autenticación Real:** Implementar JWT y sistema de login de usuarios/clientes.
3.  **Integración de Mapas:** Integrar Google Maps API o Leaflet en la página de detalle del restaurante en lugar del placeholder.
4.  **Notificaciones por Email:** Integrar un servicio como SendGrid o Resend para confirmaciones de reserva.
