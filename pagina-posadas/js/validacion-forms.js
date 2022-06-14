    //Validacion del formulario de cobro y de la tarjeta 
const formularioContacto = document.getElementById('formulario-contacto');
const inputs = document.querySelectorAll('#grupo input');

    //Generacion de las expresiones regulares
    const expresiones = {
	    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	    nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
	    apellido: /^[a-zA-ZÀ-ÿ\s]{1,20}$/,
        password: /^.{4,12}$/, // 4 a 12 digitos.
	    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

    //Generacion de los valores de los campos
    const campos = {
        nombre: false,
        apellido: false,
        email: false,
        telefono: false
    }


    //Creacion de funcion para validar Campos
    const validarCampo = (expresion,input,campo)=>{
        if(expresion.test(input.value)){
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            
            //Validacion correcta del formulario
            campos[campo] = true;
        }else{
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        
            //Validacion incorrecta del formulario
            campos[campo] = false;
        }
    }

    //Creacion de funcion para validad formulario
    const validarFormulario = (e)=>{
        switch (e.target.name){
            case "nombre":
                validarCampo(expresiones.nombre,e.target,'nombre');
            break;
            case "apellido":
                validarCampo(expresiones.apellido,e.target,'apellido');
            break;
            case "email":
                validarCampo(expresiones.correo,e.target,'email');
            break;
            case "telefono":
                validarCampo(expresiones.telefono,e.target,'telefono');
            break;
        }
    }


    //Generacion de la comprobacion de completado del formulario
    inputs.forEach((input)=>{
        input.addEventListener('keyup',validarFormulario);
        input.addEventListener('blur',validarFormulario);
    })


    //Generacion de la comprobacion de los campos del formulario
    formularioContacto.addEventListener('submit', (e)=>{
        e.preventDefault();

        if(campos.nombre && campos.apellido && campos.email && campos.telefono){
            Swal.fire({
                icon:'success',
                text:'Has contratado tu plan con exito',
                showConfirmButton: false,
                timer: 2000
              })
              formularioContacto.reset();
            //Limpieza de los iconos del formulario
            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono)=>{
                icono.classList.remove('formulario__grupo-correcto');
            })
        }else{
            document.getElementById('formulario__mensaje').classList.add('formulario-contacto__mensaje-activo');
        }
    });

    // Generacion de meses de manera dinamica
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

    //Creacion de las opciones para poder abonar en efectivo
    
    let lugares = ["Sucursal" ,"Domicilio"];
    for(let i = 0;i<lugares.length;i++){
        let opcion = document.createElement('option');
        opcion.value = lugares[i];
        opcion.innerText = lugares[i];
        lugarAbono.appendChild(opcion);
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