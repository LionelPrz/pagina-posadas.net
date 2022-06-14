// Barra de navegacion Responsive

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const footer = document.getElementById('footer');
const menuLinks = document.querySelectorAll('.nav-menu a[href^=\"#\"]');
//Funcion para resolver el problema del nav con el footer

    function agregadoFooter(){
        footer.style.display = "block";
}
    function eliminacionFooter(){
        footer.style.display = "none";
}

//Generacion de menu de hamburguesa
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
}
 else {
    navToggle.setAttribute("aria-label", "Abrir menú");
}
    if(navMenu.classList.contains("nav-menu_visible")){
        eliminacionFooter();
}
    else if(navMenu.classList.contains("nav-menu")){
        agregadoFooter();
    }
});
menuLinks.forEach(menuLink=>{
    menuLink.addEventListener("click",function(){
        navMenu.classList.remove("nav-menu_visible");
    })
})

