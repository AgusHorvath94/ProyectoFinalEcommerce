
        document.addEventListener("DOMContentLoaded", () => {
            const detalleMago = document.querySelector(".mago-details");

            // Obtener el ID del mago de la URL
            const urlParams = new URLSearchParams(window.location.search);
            const idMago = urlParams.get("id");

            // Obtenemos los datos de los magos desde el localStorage
            const datosMagos = JSON.parse(localStorage.getItem("magos"));

            if (datosMagos && datosMagos.magos) {
                // Buscamos el mago por ID
                const magoElegido = datosMagos.magos.find((mago) => mago.id === idMago);

                if (magoElegido) {
                    // Crear un template literal con los detalles del mago
                    const magoTemplate = `
                        <img src="${magoElegido.img}" alt="${magoElegido.alt}">
                        <h2>${magoElegido.title}</h2>
                        <p>${magoElegido.description}</p>
                        <p>Precio: ${magoElegido.precio}</p>
                        <button><a href="index.html">VOLVER A LA PAGINA PRINCIPAL</a></button>
                    `;

                    // Insertar el template literal en la página
                    detalleMago.innerHTML = magoTemplate;
              
                }
            }
        });

