// MENÚ HAMBURGUESA
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-pill');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('is-active');
        navLinks.classList.remove('active');
    });
});

// MODAL LÓGICA BÁSICA
function abrirModal(tipo) {
    const modal = document.getElementById('modalApp');
    const title = document.getElementById('modalTitle');
    
    if(tipo === 'login') {
        title.innerText = 'Iniciar Sesión';
    } else {
        title.innerText = 'Crea tu Cuenta';
    }
    
    modal.style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modalApp').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modalApp');
    if (event.target === modal) {
        cerrarModal();
    }
}

document.getElementById('modalForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Acción simulada exitosamente.');
    cerrarModal();
    this.reset();
});