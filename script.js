document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();
        item.classList.toggle('active');
    });
});

document.addEventListener('click', function() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function toggleDropdown(id) {
    const submenu = document.getElementById(id);
    const arrowIcon = document.getElementById('arrow-' + id);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    arrowIcon.src = arrowIcon.src.includes('icon-arrow-down') ? './images/icon-arrow-up.svg' : './images/icon-arrow-down.svg';
}
