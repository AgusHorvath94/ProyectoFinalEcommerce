fetch("magos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("magos", JSON.stringify(datos)));

  document.addEventListener("DOMContentLoaded", () => {
    const gridMagos = document.getElementById("grid-magos");
    const datosMagos = JSON.parse(localStorage.getItem("magos"));
  
    if (datosMagos) {
      datosMagos.magos.forEach((mago) => {
        //* Creamos un <div> para cada mago 
        const magoCard = document.createElement("div");
        magoCard.classList.add("card"); 
  
        //* Creamos una imagen para la foto del mago
        const imagenMago = document.createElement("img");
        imagenMago.classList.add("img-mago");
        imagenMago.src = mago.image; 
  
        //* Creamos un h4 con el título del mago
        const tituloMago = document.createElement("h4");
        tituloMago.textContent = mago.name;
  
        //* Creamos un icono de compra
        const iconoCompra = document.createElement("p");
        iconoCompra.classList.add("carrito");
        const carritoTemplate = ` <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>`;
        iconoCompra.innerHTML = carritoTemplate 
  
        //* Agregamos la imagen, el título y el icono de compra a la tarjeta
        magoCard.appendChild(imagenMago);
        magoCard.appendChild(tituloMago);
        magoCard.appendChild(iconoCompra);
  
        //* Agregamos un evento de click a la tarjeta para mostrar los detalles del mago
        magoCard.addEventListener("click", () => {
          mostrarDetallesMago(mago);
        });
  
        //* Agregamos la tarjeta al contenedor gridMagos
        gridMagos.appendChild(magoCard);
      });
    }
  });
  
  function mostrarDetallesMago(mago) {
    //* Redireccionamos a otra página para mostrar los detalles del mago
    window.location.href = `mago.html?id=${mago.id}`;
  }
  
  //* Formulario 
  const form = document.querySelector(".contact");
  const errorMessage = document.getElementById("error-message");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;

    
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      errorMessage.textContent = "Todos los campos son obligatorios.";
    } else {

      errorMessage.textContent = "Formulario enviado con éxito.";
      form.reset(); 
    }
  });