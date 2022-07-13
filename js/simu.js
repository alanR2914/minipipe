const obtengoContenido = (URL)=> {
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=> { 
          contenidoJSON = data
          contenidoJSON.forEach(contenido => {
             cardsAmostrar += retornoCardContenido(contenido)
          })
          contenidoDOM.innerHTML = cardsAmostrar
       })
    .catch((err)=> {
       contenidoDOM.innerHTML = retornoCardError()
       console.error('Se produjo un error:', err)
    })
    .finally(()=> cargandoDOM.innerHTML = "")
}

async function verDetalle(id) {
 detalleJSON = await contenidoJSON.find(item => item.id == id) || "Error"
 localStorage.setItem("contenido", JSON.stringify(detalleJSON))
 detalleJSON != "Error" ?
    location.href = "detalle.html" :
    M.toast({html: "Contenido temporalmente no disponible.", classes: "red darken-3 white-text"})
}
let cardsAmostrar = ""
let contenidoJSON = []

const URL = `js/stok.json`

const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")