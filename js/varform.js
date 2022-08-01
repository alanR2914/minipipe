const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTelefono")
const inputEmail = document.querySelector("#inputEmail")
const btnSubmit = document.querySelector("#submit")

/* let datosDeInput = "" */
const detalleDOM = document.querySelector("#productosComprados")
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
        /*  location.target = "_self" */
         location.href = "index.html"
      })