
function toggleMenu(id) {
    const menu = document.getElementById(id);
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
function toggleSubMenu(id) {
    const submenu = document.getElementById(id);
    if (submenu.style.display === "flex") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "flex";
    }
}
