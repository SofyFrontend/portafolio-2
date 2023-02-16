
//contenedor de cargar de la web 
// window.onload = function (){
//     var carga = document.querySelector('#back-loade');

//     carga.style.visibility = 'hidden';
//     carga.style.opacity = '0';
// };
window.addEventListener('load', function(){
    document.getElementById('back-loade').classList.toggle('desaparece');
})

//cambio del title de la página 
let titleActual = document.title;
window.addEventListener('blur', () =>{
    titleActual = document.title;
    document.title = '¡Vuelve, por favor!';
});
window.addEventListener('focus', () =>{
    document.title = titleActual;
});
