
// Creacion del Contador de Megas
let contador = 1;
let contador2 = 2115;
let suma = 110;
let resta = 110;

const valor = document.querySelector('#valor');
const valor2= document.querySelector('#valor2');
const botones = document.querySelectorAll('.boton');
const exito = document.getElementById("aceptar");
const body = document.querySelector("body");

function reseteo(){
  contador = 1;
  contador2 = 2115;

      valor.textContent = contador+"MB/PS";
      valor2.textContent = "$"+contador2;
}

function aceptar(){
  Swal.fire({
    title: '<strong>Confirmar Redireccion</strong>',
    icon: 'question',
    html:
    '¿Quiere ser redireccionado a la seccion de pagos?',
    showCloseButton: false,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<a href="/html/form-pago.html" target="_blanck"><b>Confirmar</b></a>',
    cancelButtonText:
      '<b>Cancelar</b>',
  })
    reseteo();
  }
  function aceptar1(){
    Swal.fire({
      icon:'success',
      text:'Has contratado tu plan con exito',
      showConfirmButton: false,
      timer: 2000
    })
    setInterval("location.reload()",2000);
  }

  botones.forEach(boton => {
  boton.addEventListener('click', function(e) {

    body.addEventListener("click", () => {
      navMenu.classList.remove("nav-menu_visible");
    });

    const estilos = e.currentTarget.classList;

    if(estilos.contains('disminuir')) {
      if(contador==1){
        Swal.fire({
          icon:'error',
          text: 'Accion Invalida debe selecionar un plan igual o mayor a 1 MB/PS'
        })
          reseteo();
           }else{
               contador--;
               contador2 = contador2-resta;
           }
    }
    else if(estilos.contains('aumentar')) {
      if(contador==50){
        Swal.fire({
          icon:'info',
          text:'Has llegado al maximo de megas contratables . Seleccione un plan menor o igual a 50 MB'
        })
        reseteo();
      }else{
        contador++;
        contador2 = contador2+suma;
      }
    }
    else if(estilos.contains('resetear')){
      contador = 1;
      contador2 = 2115;
    }
      valor.textContent = contador+" "+"MB/PS";
      valor2.textContent = "$"+" "+contador2;
  })
})
