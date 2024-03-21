document.addEventListener('DOMContentLoaded', function() {

let marcado=document.getElementsByClassName('mark');
let notificaciones = document.getElementsByClassName('not-read');
let numero= document.querySelector('.number'); //importante . 
console.log(numero.textContent) //o innerText
let post=document.querySelectorAll('.post');

post.forEach(pos =>{
    pos.addEventListener('click',()=>{
        pos.querySelector('.status').classList.remove('not-read')
        numero.innerHTML= (numero.textContent>0) ? parseInt(numero.textContent)-1: numero.innerText;   //si es positivo restale 1 sino dejalo igual
    //cada vez que clickee en el post le resta -1 si llega a 0 no sigue disminuyendo
    })
})
//console.log(marcado)
//marcado es una coleccion y esto no funciona con addEventListener
//HTMLCollection [p.mark]0: p.marklength: 1[[Prototype]]: HTMLCollectionitem: ƒ item()length: (…)namedItem: ƒ namedItem()constructor: ƒ HTMLCollection()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "HTMLCollection"get length: ƒ length()[[Prototype]]: Object
//notificaciones tb es una coleccion
 // Iterar sobre todos los botones "Mark all as read" en este caso es 1
for(let i=0;i<marcado.length;i++){
marcado[i].addEventListener('click', ()=>{
    console.log("boton presionado");

// Ocultar todas las notificaciones
//no sirve notificaciones[i].style.display = 'none';
//porque como es 1 mark entonces solo quita la 1era notificacion
//por eso hacer un bucle aparte para todas las notificaciones
//todo esto por suar getElementsByClassName en vez de querySelector
    for (let j = 0; j < notificaciones.length; j++) {
        // Ocultar la notificación correspondiente
        notificaciones[j].style.display = 'none';
    }
    numero.innerHTML='0';  
})
}

});

