
        document.addEventListener("DOMContentLoaded", () => {
            const detalleMago = document.querySelector(".mago-details");

            //* Obtener el ID del mago 

            const urlParams = new URLSearchParams(window.location.search);
            const idMago = urlParams.get("id");

            //* Obtenemos los datos de los magos desde el localStorage

            const datosMagos = JSON.parse(localStorage.getItem("magos"));

            if (datosMagos && datosMagos.magos) {
               
                const magoElegido = datosMagos.magos.find((mago) => mago.id === idMago);

                  
                      if (magoElegido) {

                        //* Template  con los detalles del mago
                        
                        const magoTemplate = `
                         <h1> ${magoElegido.name}</h1><br><br>
                         <div class="container">
                         <div class="mago-img">
                         <img src="${magoElegido.image}" alt="${magoElegido.name}">
                         </div>                         
                         <div class="mago-desc">
                         <p>Especie: ${magoElegido.species}</p>
                         <p>Género: ${magoElegido.gender}</p>
                         <p>Casa: ${magoElegido.house}</p>
                         <p>Año de Nacimiento: ${magoElegido.yearOfBirth}
                         <p>Es mago: ${magoElegido.wizard ? "Sí" : "No"}</p>
                         <p>Linaje: ${magoElegido.ancestry}</p>
                         <p>Color de Ojos: ${magoElegido.eyeColour}</p>
                         <p>Color de Cabello: ${magoElegido.hairColour}</p>
                         <p>Varita: Madera - ${magoElegido.wand.wood},  
                         <p>Longitud - ${magoElegido.wand.length} pulgadas</p>
                         <p>Patronus: ${magoElegido.patronus}</p>
                         <p>Estudiante en Hogwarts: ${magoElegido.hogwartsStudent ? "Sí" : "No"}</p>
                         <p>Personal de Hogwarts: ${magoElegido.hogwartsStaff ? "Sí" : "No"}</p>
                         <p>Actor: ${magoElegido.actor}</p>
                         <p>¿Está vivo?: ${magoElegido.alive ? "Sí" : "No"}</p>
                         </div>

                         
                          
                        `;
                  
                       
                        detalleMago.innerHTML = magoTemplate;
                      }
                    }
                });

                    