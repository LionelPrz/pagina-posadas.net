

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


    //Funcion para Deshabilitar Tarjeta
    //Funcion para Deshabilitar Lugar de pago

    function noMostrarElementos(){
            deshabilitarTarjeta.style.display ="none";
            sitioCobro.style.display ="none";
            planFormulario.style.display="none";
            tipoPago.style.display="none";
        }
    
    function mostrarPago(){
        tipoPago.style.display="block";
        planContrato.style.display="none"

    }
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
            let promo = ["Promocion 1" ,"Promocion 2", "Promocion 3"];
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

    // Generacion de meces de manera dinamica

    for(let i=1;i<=12;i++){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        formulario.selectMes.appendChild(opcion);
    }

    // Generacion de años de manera dinamica
    const yearActual = new Date().getFullYear();

    for(let i = yearActual; i<= yearActual + 8;i++){
        let opcion = document.createElement('option');
            opcion.value= i;
            opcion.innerText= i;
            formulario.selectYear.appendChild(opcion);
    }

    // Validacion del numero de tarjeta
    formulario.inputNumero.addEventListener('keyup',(e)=>{
        let valorInput = e.target.value;

        formulario.inputNumero.value = valorInput

    //Eliminacion de espacios en blanco
    .replace(/\s/g,'')
    //Eliminacion de las letras
    .replace(/\D/g,'')
    //Espaciado cada 4 numeros
    .replace(/([0-9]{4})/g,'$1 ')
    //Eliminacion del ultimo espaciado
    .trim();

    // Agregado de datos a la tarjeta
    numeroTarjeta.textContent = valorInput;

    if(valorInput==''){
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';
    }
    if(valorInput[0]==4){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '../multimedia/logo visa.png';
        logoMarca.appendChild(imagen);
    } else if(valorInput[0]==5){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '../multimedia/logo mastercard.png';
        logoMarca.appendChild(imagen);
    }
    //Funcion para voltear tarjeta
        mostrarFrente();
});

// Validacion del Nombre de la tarjeta

formulario.inputNombre.addEventListener('keyup',(e)=>{
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g,'');

    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = 'Jhon Doe';
    }
    mostrarFrente();
});

// Validacion del mes

formulario.selectMes.addEventListener('change',(e) =>{
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});

    // Validacion del año

formulario.selectYear.addEventListener('change',(e) =>{
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

    //  Validacion del codigo de seguridad

    formulario.inputCCV.addEventListener('keyup', ()=>{
        if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value

    .replace(/\s/g,'')
    .replace(/\D/g,'');

    ccvExpiracion.textContent = formulario.inputCCV.value;
});

    //Validacion del campo de nombre
    nombreFormulario.addEventListener('keyup',(e)=>{
        let valorInput = e.target.value;

        nombreFormulario.value = valorInput.replace(/[0-9]/g,'');
    });

    //Validacion del campo de apellido
    apellidoFormulario.addEventListener('keyup',(e)=>{
        let valorInput = e.target.value;

        apellidoFormulario.value = valorInput.replace(/[0-9]/g,'');
    });
    //Validacion del campo de telefono
    telefonoFormulario.addEventListener('keyup',(e)=>{
        let valorInput = e.target.value;

        telefonoFormulario.value = valorInput.replace(/\D/g,'');
    });
    //Creacion de las opciones para poder abonar en efectivo
    
    let lugares = ["Sucursal" ,"Domicilio"];
    for(let i = 0;i<lugares.length;i++){
        let opcion = document.createElement('option');
        opcion.value = lugares[i];
        opcion.innerText = lugares[i];
        lugarAbono.appendChild(opcion);
    }

