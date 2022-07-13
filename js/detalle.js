const detalleDOM = document.querySelector("#detalle")
const trailerDOM = document.querySelector("#trailer")
const btnVolver = document.querySelector("a")

      document.addEventListener("DOMContentLoaded", ()=> {
         contenidoAlmacenado = localStorage.getItem("contenido")
         if (contenidoAlmacenado == "Error") 
            detalleDOM.innerHTML = retornoCardError()
         else {
            contenido = JSON.parse(contenidoAlmacenado)
            detalleDOM.innerHTML = retornoDetalle(contenido)
            contenido.trailer != undefined && contenido.trailer != "" ?
               trailerDOM.innerHTML = retornoTrailer(contenido.trailer) :
               trailerDOM.innerHTML = ""
         }
      })

      btnVolver.addEventListener("click", ()=> {
         localStorage.removeItem("contenido")
         location.target = "_self"
         location.href = "index.html"
      })