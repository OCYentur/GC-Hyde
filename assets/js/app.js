// function toggleMenu(menuId) {
//    const menu = document.getElementById(menuId);
//    if (!menu) return;
//    menu.classList.toggle("hidden");
// }

function toggleMenu(menuId) {
  const menus = document.querySelectorAll("[data-submenu]");
  menus.forEach(menu => {
    if (menu.id === menuId) {
      menu.classList.toggle("hidden");
    } else {
      menu.classList.add("hidden");
    }
  });
}

// document.addEventListener("DOMContentLoaded", () => {
//   const toggleBtn = document.getElementById("selected-works");
//   const toggleBtn2 = document.getElementById("curatorial-projects");
//   if (toggleBtn) {
//     toggleBtn.addEventListener("click", () => toggleMenu("works-menu"));    
//   }
//   if (toggleBtn2) {
//     toggleBtn2.addEventListener("click", () => toggleMenu("curatorial-menu"));    
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-menu]");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-menu"); 
      toggleMenu(targetId);
    });
  });
});