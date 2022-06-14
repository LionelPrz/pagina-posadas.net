

const tarjeta = document.querySelector('#tarjeta'),
        btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
        formulario = document.querySelector('#formulario-tarjeta'),
        deshabilitarTarjeta = document.getElementById('derecha'),
        tipoPago = document.getElementById('metodoPago'),
        tipoPlan = document.getElementById('opcionPlan'),
        pagoTarjeta = document.getElementById('pagoTarjeta'),
        pagoEfectivo = document.getElementById('pagoEfectivo'),
        planContrato = document.getElementById('planContrato'),
        lugarAbono = document.getElementById('lugarAbono'),
        sitioCobro = document.getElementById('sitioCobro'),
        planPromo = document.getElementById('planPromocional'),
        planCustom = document.getElementById('planPersonalizado'),
        numeroTarjeta = document.querySelector('#tarjeta .numero'),
        nombreTarjeta = document.querySelector('#tarjeta .nombre'),
        logoMarca = document.querySelector('#logo-marca'),
        firma = document.querySelector('#tarjeta .firma p'),
        mesExpiracion = document.querySelector('#tarjeta .mes'),
        yearExpiracion = document.querySelector('#tarjeta .year'),
        ccvExpiracion = document.querySelector('#tarjeta .CCV'),
        nombreFormulario = document.getElementById('inputNombre'),
        apellidoFormulario = document.getElementById('inputApellido'),
        telefonoFormulario = document.getElementById('inputTelefono'),
        planFormulario = document.getElementById('selectPlan');


    //Funcion para Deshabilitar Tarjeta y Lugar de pago
    function noMostrarElementos(){
            deshabilitarTarjeta.style.display ="none";
            sitioCobro.style.display ="none";
            planFormulario.style.display="none";
            tipoPago.style.display="none";
        }
    
    //Funcion para Agregar Metodo de pago
    function mostrarPago(){
        tipoPago.style.display="block";
        planContrato.style.display="none"

    }

    //Funcion para Agregar Sitio de Cobro
    function mostrarSitioCobro(){
        tipoPago.style.display="none";
        sitioCobro.style.display="block";
    }


    //Funcion para Agregar Tarjeta
    const mostrarTarjeta = () =>{
        deshabilitarTarjeta.style.display ="block";
        pagoEfectivo.style.display = "none";
    }

    // Funcion Para voltear tarjeta
    const mostrarFrente = () =>{
        if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active');
        }
    }

    //Desplegar Planes promocionales cuando se use el boton
      planPromo.addEventListener('click',()=>{
        planFormulario.style.display="block";
            let promo = ["Plan Estudiantil" ,"Plan Familiar", "Plan Empresarial"];
            for(let i = 0;i<promo.length;i++){
            let Promo = document.createElement('option');
                Promo.value = promo[i];
                Promo.innerText = promo[i];
                tipoPlan.appendChild(Promo);
            }
            mostrarPago();
})

    //Desplegar Planes personalizados cuando se use el boton
    planCustom.addEventListener('click',()=>{
        planFormulario.style.display="block";

        for(let i=1;i<=50;i++){
            let custom = document.createElement('option');
            custom.value = i;
            custom.innerText = i + "MB";
            tipoPlan.appendChild(custom);
        }
        mostrarPago();
    })

    //Mostrar Tarjeta cuando se usa su boton
    pagoTarjeta.addEventListener('click',()=>{
        mostrarTarjeta();
    });

    //No mostrar Tarjeta cuando se paga en efectivo
    pagoEfectivo.addEventListener('click',()=>{
        pagoTarjeta.style.display = "none";
        sitioCobro.style.display = "block";
        mostrarSitioCobro();
    });

    // Animacion de tarjeta 
    tarjeta.addEventListener('click', ()=>{
        tarjeta.classList.toggle('active');
        });

    // Boton del Formulario 
    btnAbrirFormulario.addEventListener('click',()=>{
        btnAbrirFormulario.classList.toggle('active');
            formulario.classList.toggle('active');
    });
