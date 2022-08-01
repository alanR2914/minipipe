let stockProductos = []
    //{id: 1, nombre: "Pantalones", tipo: "buzo", desc: "Pantalon nene", precio: 1200, talle: "L", img: '../img/2pantalones.jpeg'},
    //{id: 2, nombre: "Bandana", tipo: "buzo", desc: "Bandana unisex", precio: 1100, talle: "L", img: '/img/Bandana.jpeg'},
    //{id: 3, nombre: "Body nene", tipo: "buzo", desc: "Body animales", precio: 1200, talle: "M", img: '/img/bodyanimales.jpeg'},
    //{id: 4, nombre: "Body nena", tipo: "buzo", desc: "Body flores", precio: 1400, talle: "M", img: '/img/bodynena.jpeg'},
    //{id: 5, nombre: "Conjunto nena", tipo: "buzo", desc: "Conjunto body + pantalon", precio: 1200, talle: "S", img: '/img/bodypantalonnena.jpeg'},
    //{id: 6, nombre: "Caja Regalo", tipo: "buzo", desc: "Caja especial regalo", precio: 1500, talle: "S", img: '/img/caja recien nacido.jpeg'},
    //{id: 7, nombre: "Sonajero", tipo: "remera", desc: "Ideal regalo", precio: 500, talle: "L", img: '/img/caja sonajero.jpeg'},
    //{id: 8, nombre: "Body bordado", tipo: "remera", desc: "Body nena", precio: 500, talle: "L", img: '/img/camiseta nena bordado.jpeg'},
    //{id: 9, nombre: "Campera nubes", tipo: "remera", desc: "Campera nubes", precio: 500, talle: "M", img: '/img/campera nubes.jpeg'},
    //{id: 10, nombre: "Conjunto polar", tipo: "remera", desc: "Conjunto con polar", precio: 700, talle: "M", img: '/img/campera y body.jpeg'},
    //{id: 11, nombre: "Caja Regalo", tipo: "remera", desc: "Ideal regalo", precio: 700, talle: "S", img: '/img/Combo recien nacido.jpeg'},
    //{id: 12, nombre: "Polar nena", tipo: "remera", desc: "Conjunto polar nena", precio: 700, talle: "S", img: '/img/conjunto completo.jpeg'},
    //{id: 13, nombre: "Recien nacido", tipo: "camisa", desc: "Conjunto recien nacido", precio: 900, talle: "S", img: '/img/conjunto con gorro.jpeg'},
    //{id: 14, nombre: "Body C/pantalon", tipo: "camisa", desc: "Body + pantalon nene", precio: 1400, talle: "S", img: '/img/conjunto dinosaurios.jpeg'},
    //{id: 15, nombre: "Body C/pantalon", tipo: "camisa", desc: "Body + pantalon nena", precio: 7000, talle: "S", img: '/img/conjunto nena claro.jpeg'},
    //{id: 16, nombre: "Body nena", tipo: "camisa", desc: "Bodys de nena", precio: 700, talle: "S", img: '/img/conjunto nena.jpeg'},
    //{id: 17, nombre: "Enterito nubes", tipo: "camisa", desc: "Conjunto enterito", precio: 5300, talle: "S", img: '/img/conjunto nubes.jpeg'},
    //{id: 18, nombre: "Enterito jean", tipo: "camisa", desc: "Enterito estilo jean", precio: 1600, talle: "S", img: '/img/enterito mas body.jpeg'},
    //{id: 19, nombre: "Conjunto nena", tipo: "pantalon", desc: "Conjuto para nena", precio: 1600, talle: "L", img: '/img/enterito y camiseta.jpeg'},
    //{id: 20, nombre: "Enterito jean", tipo: "pantalon", desc: "Conjunto nene", precio: 3200, talle: "L", img: '/img/enterito.jpeg'},
    //{id: 21, nombre: "Escarpines", tipo: "pantalon", desc: "Escarpines blancos", precio: 2300, talle: "M", img: '/img/Escarpines.jpeg'},
    //{id: 22, nombre: "Manta de hilo", tipo: "pantalon", desc: "Manta de hilo", precio: 5600, talle: "M", img: '/img/manta.jpeg'},
    //{id: 23, nombre: "Osito", tipo: "pantalon", desc: "Osito clasico mini pipe", precio: 1700, talle: "S", img: '/img/Osito.jpeg'},
    //{id: 24, nombre: "Pantalon", tipo: "pantalon", desc: "Pantalon recien nacido", precio: 800, talle: "S", img: '/img/pantalon gris.jpeg'},

const retornoCardContenido = (contenido)=> {
    const {img, nombre, id, des, precio,talle} = contenido
       let HTMLCard = ""
             HTMLCard += `<div class="col s12 m6 l3">
                            <div class="card z-depth-2">
                               <div class="card-image">
                                  <img src="${img}" with ="400px">
                                  <span class= "card-title">${nombre} </span>
                                  <a id="boton${id}" class="btn-floating halfway-fab waves-effect waves-light "><i class="material-icons">add_shopping_cart</i></a>                       
                                  
                               </div>
                               
                               <div class="card-content blue">
                                  <p class="yellow-text">Descripcion: <span class="white-text">${des}</span></p>
                                  <p class="yellow-text">Descripcion: <span class="white-text">${talle}</span></p>
                                  <p class="yellow-text">Precio: <span class="white-text">$${precio}</span></p>
                               </div>
                            </div>
                         </div>`
                         
  
       return HTMLCard
       


 } 
 
 const retornoCardError = ()=> {
    let HTMLCardError = `<div class="center white-text"> 
                            <br><br> 
                            <br><br> 
                            <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                            <br><br> 
                            <i class="large material-icons">sentiment_very_dissatisfied</i> 
                            <br><br> 
                         </div>`
       return HTMLCardError
 }
 




