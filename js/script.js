fetch("../json/magos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("magos", JSON.stringify(datos)));

  document.addEventListener("DOMContentLoaded", () => {
    const gridMagos = document.getElementById("grid-magos");
    const datosMagos = JSON.parse(localStorage.getItem("magos"));
  
    if (datosMagos) {
      datosMagos.magos.forEach((mago) => {
        // Creamos un elemento <div> para cada mago (la tarjeta)
        const magoCard = document.createElement("div");
        magoCard.classList.add("card"); // Agregamos la clase "card" para darle estilo
  
        // Creamos una imagen para la foto del mago
        const imagenMago = document.createElement("img");
        imagenMago.classList.add("img-mago");
        imagenMago.src = mago.img; // Tomamos la URL de la imagen del JSON
  
        // Creamos una etiqueta h4 con el título del mago
        const tituloMago = document.createElement("h4");
        tituloMago.textContent = mago.title;
  
        // Creamos un icono de compra
        const iconoCompra = document.createElement("img");
        iconoCompra.classList.add("carrito");
        iconoCompra.src = "../img/compras.jpg"; // Cambia la ruta según la ubicación de tu imagen de carrito
  
        // Agregamos la imagen, el título y el icono de compra a la tarjeta
        magoCard.appendChild(imagenMago);
        magoCard.appendChild(tituloMago);
        magoCard.appendChild(iconoCompra);
  
        // Agregamos un evento de clic a la tarjeta para mostrar los detalles del mago
        magoCard.addEventListener("click", () => {
          mostrarDetallesMago(mago);
        });
  
        // Agregamos la tarjeta al contenedor gridMagos
        gridMagos.appendChild(magoCard);
      });
    }
  });
  
  function mostrarDetallesMago(mago) {
    // Redireccionar a otra página para mostrar los detalles del mago
    window.location.href = `mago.html?id=${mago.id}`;
  }
  
