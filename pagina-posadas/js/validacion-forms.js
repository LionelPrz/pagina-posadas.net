//Validacion del formulario de cobro y de la tarjeta 


//Generacion de las expresiones regulares

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

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