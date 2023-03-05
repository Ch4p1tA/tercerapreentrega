//Cantidad de articulos ingresados por el usuario
let menosBtn = document.querySelector(".input-menos");
let masBtn = document.querySelector(".input-mas");
let userInput = document.querySelector(".input-numero");
let userInputNumber = 0;

menosBtn.addEventListener("click", ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value=userInputNumber;
});

masBtn.addEventListener("click", ()=>{
    userInputNumber++;
    userInput.value=userInputNumber;
});

//Agregar el total de productos al carrito, cuando se presiona comprar
const agregarBtn = document.querySelector(".detalles-boton");
let carritoNotificacion = document.querySelector(".carrito--notificacion");
let ultimoValor=parseInt(carritoNotificacion.innerText); //tengo q sacar la variable para q sea universal

agregarBtn.addEventListener("click", ()=>{
    ultimoValor=ultimoValor+userInputNumber;
    carritoNotificacion.innerText = ultimoValor;
    carritoNotificacion.style.display="block";
    modalPrecio.innerHTML = `$125.00 x${ultimoValor} <span>$${ultimoValor*125}.00</span>`;
});

//Mostrar el carrito
const carritoIconoBtn = document.querySelector(".carrito");
const carritoModal = document.querySelector(".modal-carrito");

const contenedorProdcuto = document.querySelector(".modal-carrito-contenedor-salida");


let modalPrecio = document.querySelector(".modal-carrito-contenedor-precio");

carritoIconoBtn.addEventListener("click", ()=>{
    carritoModal.classList.toggle("show");
});

//resetear el carrito
const borrarCarritoBtn = document.querySelector(".modal-carrito-borrar");

borrarCarritoBtn.addEventListener("click",()=>{
    contenedorProdcuto.innerText = "El carrito esta vacio.";
    ultimoValor=0;
    carritoNotificacion.innerText = ultimoValor;
})

//HASTA ACA LLEGUE, tengo q hacer q empiece denuevo el programa cuando reseteo el carrito, y q se muevan las imagenes de la galeria.