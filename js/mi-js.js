//cambio del title de la página 
let titleActual = document.title;
window.addEventListener('blur', () =>{
    titleActual = document.title;
    document.title = '¡Vuelve, por favor!';
});
window.addEventListener('focus', () =>{
    document.title = titleActual;
});