// LÓGICA DEL MENÚ HAMBURGUESA
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-item');

// Abrir/Cerrar menú al hacer clic en las 3 rayas
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

// Cerrar el menú automáticamente al seleccionar un enlace
navItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});

// CONTROL DE LA VENTANA MODAL (ACCESO RÁPIDO)
function abrirModal() {
    const modal = document.getElementById('modalRegistro');
    modal.style.display = 'flex';
}

function cerrarModal() {
    const modal = document.getElementById('modalRegistro');
    modal.style.display = 'none';
}

// CERRAR MODAL HACIENDO CLIC FUERA DE LA CAJA BLANCA
window.onclick = function(event) {
    const modal = document.getElementById('modalRegistro');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// INTERCEPTAR EL ENVÍO DEL FORMULARIO (SIMULACIÓN DE REGISTRO)
document.getElementById('formRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue
    
    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById('nombre').value;
    const perfil = document.getElementById('perfil').value;
    
    // Simular redirección o feedback dinámico interactivo
    alert(`¡Registro exitoso en SmartBudget, ${nombre}! Iniciando tu onboarding adaptado para el perfil de: ${perfil}.`);
    
    cerrarModal();
    document.getElementById('formRegistro').reset(); // Limpia los campos del formulario
});