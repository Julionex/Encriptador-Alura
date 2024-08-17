
//---------------SELECCION DE ELEMENTOS-----------------------//
const btnEncriptar = document.querySelector('.btn-encriptar');
const txtEncriptar = document.querySelector('.encriptar');
const aviso = document.querySelector('.texto-aviso');
const respuesta = document.querySelector('.evaluar');
const contenido = document.querySelector('.tarjeta-contenedor');
const btnCopiar = document.querySelector('.btn-copiar');
const btnDesencriptar = document.querySelector('.btn-desencriptar')
//---------------Boton Encriptar-----------------------//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        swal('Ooops!','Debes ingresar un texto','warning');
        // aviso.style.background = "#0a3871";
        // aviso.style.color = "#fffff";
        // aviso.style.fontWeight = '880';
        // aviso.textContent = 'El campo de texto no debe estar vacio';

        // setTimeout(()=>{
        //     aviso.removeAttribute("style");
        // },1500);
    }

    else if(texto !== txt){
        swal('Ooops!','El texto no debe tener acentos ni caracteres epeciales','warning');
        // aviso.style.background = "#0a3871";
        // aviso.style.color = "#fffff";
        // aviso.style.fontWeight = '880';
        // aviso.textContent = 'No debe tener acentos y caracteres especiales';

        // setTimeout(()=>{
        //     aviso.removeAttribute("style");
        // },1500);
    }

    
    else if(texto !== texto.toLowerCase()){
        swal('Ooops!','El texto debe ser solo en minúsculas','warning');
        // aviso.style.background = "#0a3871";
        // aviso.style.color = "#fffff";
        // aviso.style.fontWeight = '880';
        // aviso.textContent = 'El campo de texto debe ser todo en minuscula';
    
        // setTimeout(()=>{
        //     aviso.removeAttribute("style");
        // },1500);
    }
    
    else{
        texto = texto.replace(/e/mg, 'enter')
                    .replace(/i/mg, 'imes')
                    .replace(/a/mg, 'ai')
                    .replace(/o/mg, 'ober')
                    .replace(/u/mg, 'ufat');

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = 'inherit'
        contenido.remove();

    }
})


//---------------Boton Desencriptar-----------------------//
btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        swal('Ooops!','Debes ingresar un texto','warning');
        // aviso.style.background = "#0a3871";
        // aviso.style.color = "#fffff";
        // aviso.style.fontWeight = '880';
        // aviso.textContent = 'El campo de texto no debe estar vacio';

        // setTimeout(()=>{
        //     aviso.removeAttribute("style");
        // },1500);
    }

    else if(texto !== txt){
        swal('Ooops!','El texto no debe tener acentos ni caracteres epeciales','warning');
        // aviso.style.background = "#0a3871";
        // aviso.style.color = "#fffff";
        // aviso.style.fontWeight = '880';
        // aviso.textContent = 'No debe tener acentos y caracteres especiales';

        // setTimeout(()=>{
        //     aviso.removeAttribute("style");
        // },1500);
    }

    
    else if(texto !== texto.toLowerCase()){
        swal('Ooops!','El texto debe ser solo en minúsculas','warning');
        // aviso.style.background = "#0a3871";
        // aviso.style.color = "#fffff";
        // aviso.style.fontWeight = '880';
        // aviso.textContent = 'El campo de texto debe ser todo en minuscula';
    
        // setTimeout(()=>{
        //     aviso.removeAttribute("style");
        // },1500);
    }
    
    else{
        texto = texto.replace(/enter/mg, 'e')
                    .replace(/imes/mg, 'i')
                    .replace(/ai/mg, 'a')
                    .replace(/ober/mg, 'o')
                    .replace(/ufat/mg, 'u');

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = 'inherit'
        contenido.remove();
    }


})


//---------------Boton copiar-----------------------//
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand('copy');
});