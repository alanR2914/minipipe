
let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonTerminar = document.getElementById('terminar')
const finCompra = document.getElementById('fin-compra')

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

const selecTalles = document.getElementById('selecTalles')
const buscador = document.getElementById('search')



//filtro
selecTalles.addEventListener('change',()=>{
    console.log(selecTalles.value);
    if(selecTalles.value == 'all'){
        mostrarProductos(stockProductos)
    }else{
        let arrayNuevo = stockProductos.filter(elemento => elemento.talle === selecTalles.value)
        console.log(arrayNuevo);
        mostrarProductos(arrayNuevo)
    }
})

//Buscado

mostrarProductos(stockProductos)

//logica Ecommerce
function mostrarProductos(array){

    contenedorProductos.innerHTML = ""

    array.forEach(el => {
    let div = document.createElement('div')
    // div.className = 'producto'
    // div.setAttribute('class', 'producto')
    div.classList.add('producto')
    div.innerHTML= `<div class="card">
                    <div class="card-image">
                        <img src="${el.img}">
                        <span class="card-title">${el.nombre}</span>
                        <a id="boton${el.id}" class="btn-floating halfway-fab waves-effect waves-light "><i class="material-icons">add_shopping_cart</i></a>
                    </div>
                    <div class="card-content">
                        <p>${el.desc}</p>
                        <p>Talle: ${el.talle}</p>
                        <p> $${el.precio}</p>
                    </div>
                </div> `

    contenedorProductos.appendChild(div)
    
    let btnAgregar = document.getElementById(`boton${el.id}`)
    // console.log(btnAgregar);
    btnAgregar.addEventListener('click',()=>{
        agregarAlCarrito(el.id);
    })

  })


}

function agregarAlCarrito(id) {
    let productoAgregar = stockProductos.find(obj=> obj.id === id)
    carritoDeCompras.push(productoAgregar)
    mostrarCarrito(productoAgregar)
    actualizarCarrito()
}

function mostrarCarrito(productoAgregar) {

   let div = document.createElement('div')
    div.setAttribute('class', 'productoEnCarrito')
    div.innerHTML=`<p>${productoAgregar.nombre}</p>
                    <p>Precio: $${productoAgregar.precio}</p>
                    <button id="eliminar${productoAgregar.id}" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>`
    contenedorCarrito.appendChild(div)

    let btnEliminar = document.getElementById(`eliminar${productoAgregar.id}`)
    btnEliminar.addEventListener('click',()=>{
        btnEliminar.parentElement.remove()
        carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id !== productoAgregar.id)
        console.log(carritoDeCompras);
        actualizarCarrito()
  
    })
    
}


function  actualizarCarrito (){
    contadorCarrito.innerText = carritoDeCompras.length
    precioTotal.innerText = carritoDeCompras.reduce((acc,el)=> acc + el.precio, 0 )   //acumulador     
}                                                          

$(document).ready(function(){
      $('#demo-carousel').carousel();
});
   
function guardoCarrito() {
    if (div.length > 0) {
        localStorage.setItem("modal-Carrito", JSON.stringify(div))
    }
}

function recuperoCarrito() {
    //debugger
    if (miCarrito = JSON.parse(localStorage.getItem("carrito"))) {
        miCarrito.forEach(prod => {
            carrito.push(prod)
            const liNuevoProducto = document.createElement("li")
                  liNuevoProducto.className = "collection-item blue-text"
                  liNuevoProducto.innerText = prod
                  liNuevoProducto.id = prod + "EnCarrito"
                  liNuevoProducto.addEventListener("dblclick", ()=> { removerDelCarrito(`${liNuevoProducto.id}`) }) 
                  listadoCarrito.append(liNuevoProducto)
        });
    }
}

document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
       obtengoContenido(URL)      
    }, 1200);
})