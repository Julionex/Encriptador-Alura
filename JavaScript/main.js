//---------------SELECCION DE ELEMENTOS-----------------------//
const btnEncriptar = document.querySelector('.btn-encriptar');
const txtEncriptar = document.querySelector('.encriptar');
const aviso = document.querySelector('.texto-aviso');

//---------------Boton Encriptar-----------------------//
btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#fffff";
        aviso.style.fontWeight = '880';
        aviso.textContent = 'El campo de texto no debe estar vacio';

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#fffff";
        aviso.style.fontWeight = '880';
        aviso.textContent = 'No debe tener acentos y caracteres especiales';

        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }

    
    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0a3871";
        aviso.style.color = "#fffff";
        aviso.style.fontWeight = '880';
        aviso.textContent = 'El campo de texto debe ser todo en minuscula';
    
        setTimeout(()=>{
            aviso.removeAttribute("style");
        },1500);
    }
    
})
