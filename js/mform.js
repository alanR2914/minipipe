const focoEnCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "")
        }
    }
}
focoEnCampos()



btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete los datos antes de ENVIAR"
})

document.addEventListener("submit", (e)=> {
    e.preventDefault()
    guardarDatosDeUsr()
    const faltanDatos = (isNaN(parseInt(inputTelefono.value)) || inputNombre.value.trim() == "" || inputEmail.value.trim() == "") 
    if (faltanDatos) {
      Swal.fire({
        title: 'Error!',
        text: "Cargue todos los datos en pantalla.",
        icon: 'error',
        confirmButtonText: 'OK'
      })
    } else {
        
        let nom = inputNombre.value
        let mail = inputEmail.value
        let tel = inputTelefono.value
        let todoOK = faltanDatos.todoOK(nom, mail, tel)
        Swal.fire({
            title: 'Error!',
            text: "dale che.",
            icon: 'error',
            confirmButtonText: 'OK'
          }) 



    }
/*     Swal.fire({
        title: 'Error!',
        text: "Cargue todos los datos en pantalla.",
        icon: 'error',
        confirmButtonText: 'OK'
      }) */

        //alert("Formulario enviado.")
    

})

function guardarDatosDeUsr() {
    debugger
    const datosDeUsr = {nombre: inputNombre.value,
                        telefono: inputTelefono.value,
                        email: inputEmail.value
    } 
    let str = JSON.stringify(datosDeUsr)
    localStorage.setItem("datosDeUsr", str)
}

function recuperoDatosDeUsr() {
    if (miCarrito = JSON.parse(localStorage.getItem("carrito"))) {
        document.querySelector("#productosComprados").innerHTML = `<strong>Mi Compra:</strong> ${miCarrito.join(", ")}`
        if (localStorage.getItem("datosDeUsr")) {
            const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
                  inputNombre.value = datosDeUsr.nombre
                  inputTelefono.value = datosDeUsr.telefono
                  inputEmail.value  = datosDeUsr.email
        }    
    }
}
recuperoDatosDeUsr()