// Barra de navegacion Responsive

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const footer = document.getElementById('footer');
const menuLinks = document.querySelectorAll('.nav-menu a[href^=\"#\"]');
const carta1 = document.getElementById('card1');
const carta2 = document.getElementById('card2');
const carta3 = document.getElementById('card3');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');


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

//Generacion de catalogo de precios animado

        carta1.addEventListener('click',()=>{
            carta1.classList.toggle('active');
            if(carta1.classList.contains('active')){
                boton1.classList.remove('btn-about');
                boton1.style.display = "none";
                boton1.disabled = true;
            }
            else{
                boton1.classList.add('btn-about');
                boton1.style.display="block"
            }
        });
        carta2.addEventListener('click',()=>{
            carta2.classList.toggle('active');
            if(carta2.classList.contains('active')){
                boton2.classList.remove('btn-about');
                boton2.style.display = "none";
                boton2.disabled = true;
            }
            else{
                boton2.classList.add('btn-about');
                boton2.style.display="block"
            }
        });
        carta3.addEventListener('click',()=>{
            carta3.classList.toggle('active');
            if(carta3.classList.contains('active')){
                boton3.classList.remove('btn-about');
                boton3.style.display = "none";
                boton3.disabled = true;
            }
            else{
                boton3.classList.add('btn-about');
                boton3.style.display="block"
            }
        });
