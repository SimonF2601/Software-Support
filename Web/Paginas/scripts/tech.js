const container = document.querySelector("#principal-container");
const barra = document.querySelector(".sidebar-nav");
const dvMesagge = document.getElementById("dvMessage")

document.addEventListener("DOMContentLoaded", () => {
  paintProfile()
})

barra.addEventListener("click", (event) => {
  event.preventDefault();

  const validator = event.target.classList;

  if (validator.contains("generator")) {
    paintTechTicketForm();
  }

  if (validator.contains("consultant")) {
    paintTechTicket();
  }

  if (validator.contains("profile")) {
    paintProfile();
  }
});

function paintTechTicket() {
      cleanContainer();
      container.innerHTML = `

      <div class="d-grid gap-4 d-md-block">

      <div class="form-floating mb-2 ">
          <input type="text" class="form-control w-25 " id="floatingInput" placeholder="Searh a technician by id...">
          <label for="floatingInput">Search a technician by id...</label>
      </div>

      <button class="btn btn-primary mb-3 " type="button">Search</button>

       
  </div>

      <div class="container-fluid d-flex flex-wrap gap-5 ">

        <div class="card" style="width: 15rem;">
          <img src="../images/home/image-service2.png" class="card-img-top" style="height: 8rem;" alt="...">
          <div class="card-body">
            <h5 class="card-title">Name</h5>
            <h6>Especialidad</h6>
            <p class="card-text"><strong>Description.</strong><br> Description as hahsd as </p>
            <button  type="button" class="btn btn-primary btn-edit" user-id="" ><i class='bx bxs-pencil pe-none' ></i></button>
            <button  type="button" class="btn btn-danger btn-delete" user-id="" ><i class='bx bxs-trash pe-none' ></i></button>
          </div>
        </div>

      </div>
      `;

      container.addEventListener("click", (event) => {
        //Quitar las acciones por defecto
        event.preventDefault();
        //SI a la etiqueta que se le dió clic contiene la clase btn-delete entonces:
        if (event.target.classList.contains("btn-delete")) {
          //Extraemos el valor del id
          deleteUser(id);
        }
    
        //SI a la etiqueta que se le dió clic contiene la clase btn-edit entonces:
        if (event.target.classList.contains("btn-edit")) {
          const id = event.target.getAttribute("user-id");
          paintTechTicketForm();
          loadInputs(id);
          loadingInfo(id);
        }
      });

    }

function paintTechTicketForm() {
      cleanContainer();
      container.innerHTML += `
      <div class="container-fluid d-flex flex-column gap-5 ">
 
      <form action="">
          <h3>Creation Ticket Form</h3>

          <label for="technician">Technician type</label>
          <select id = "technician" class="form-select form-select-lg  mb-3 fs-6 " aria-label="Large select example">
          <option selected>Choose a technician</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          </select>

          <label for="client">Client type</label>
          <select id = "client" class="form-select form-select-lg  mb-3 fs-6 " aria-label="Large select example">
          <option selected>Choose a client</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          </select>

          <div class="form-floating mb-3">
              <input type="date" class="form-control" id="creation-date" placeholder="Creation Date">
              <label for="creation date">Creation Date</label>
          </div>
    
          <label for="status">Status type</label>
          <select id = "status" class="form-select form-select-lg  mb-3 fs-6 " aria-label="Large select example">
          <option selected>Choose a status</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          </select>
    

          <div class="form-floating my-3">
            <textarea class="form-control" placeholder="Problem Description" id="problem-description"></textarea>
            <label for="problem-description">Problem Description</label>
          </div>
    
          <label for="problem-type">Problem type</label>
          <select id = "problem-type" class="form-select form-select-lg  mb-3 fs-6 " aria-label="Large select example">
              <option selected>Choose a problem type</option>
              <option value="1">Hardware</option>
              <option value="2">Software</option>
              <option value="3">Other</option>
          </select>

          <label for="product">Product</label>
          <select id = "product" class="form-select form-select-lg  mb-3 fs-6 " aria-label="Large select example">
              <option selected>Choose a product</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </select>

          <div class="form-floating">
            <textarea class="form-control" placeholder="solution Description" id="solution-description"></textarea>
            <label for="solution-description">Solution Description</label>
          </div>

          <div class=" my-4  row-cols-auto ">
              <button type="submit" class="btn btn-primary col-2 mx-4 save">Save</button>
              <span class="col-1 "></span>
              <button type="button" class="btn btn-secondary col-2 clear">Clear</button>
          </div>
      </form>
    </div>
    
      `;

      //Llenar Selects
      container.addEventListener("click",(event)=>{
        event.preventDefault();

        const validator = event.target.classList;
      
        if (validator.contains("save")) {
          ejecutarPeticion("POST");
        }
      
        if (validator.contains("clear")) {
          clearInputs();
        }

      })

      //
      async function loadInputs(id){

        const response = await fetch(""+id, {
              
              method: "GET",
              mode: "cors",
              headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();

        const ID_Tecnico = container.querySelector("#technician").value = data.ID_Tecnico;
        const ID_Cliente = container.querySelector("#client").value = data.ID_Cliente;
        const FechaCreacion = container.querySelector("#creation-date").value = data.FechaCreacion;
        const Estado = container.querySelector("#status").value = data.Estado;
        const DescripcionProblema = container.querySelector("#problem-description").value = data.DescripcionProblema;
        const TipoSoporte = container.querySelector("#problem-type").value = data.TipoSoporte;
        const ProductoSoporte = container.querySelector("#product").value = data.ProductoSoporte;
        const DescripcionSolucion = container.querySelector("#solution-description").value = data.DescripcionSolucion;
      }
      //
      function clearInputs(){
        const ID_Tecnico = container.querySelector("#technician").value = "Choose a technician";
        const ID_Cliente = container.querySelector("#client").value = "Choose a client";
        const FechaCreacion = container.querySelector("#creation-date").value = "";
        const Estado = container.querySelector("#status").value = "Choose a status";
        const DescripcionProblema = container.querySelector("#problem-description").value = "";
        const TipoSoporte = container.querySelector("#problem-type").value = "Choose a problem type";
        const ProductoSoporte = container.querySelector("#product").value = "Choose a product";
        const DescripcionSolucion = container.querySelector("#solution-description").value = "";
      }

      async function ejecutarPeticion(comando){
        //Recoleccion de los valores de los inputs
        const ID_Tecnico = container.querySelector("#technician").value;
        const ID_Cliente = container.querySelector("#client").value;
        const FechaCreacion = container.querySelector("#creation-date").value;
        const Estado = container.querySelector("#status").value;
        const DescripcionProblema = container.querySelector("#problem-description").value;
        const TipoSoporte = container.querySelector("#problem-type").value;
        const ProductoSoporte = container.querySelector("#product").value;
        const DescripcionSolucion = container.querySelector("#solution-description").value;
        
        //Creacion del objeto que guarda la informacion de los inputs
        const dataTicket = {
          ID_Tecnico: ID_Tecnico,
          ID_Cliente: ID_Cliente,
          FechaCreacion: FechaCreacion,
          Estado: Estado,
          DescripcionProblema: DescripcionProblema,
          TipoSoporte: TipoSoporte,
          ProductoSoporte: ProductoSoporte,
          DescripcionSolucion: DescripcionSolucion
        }

        console.log(dataTicket);

        //
        try {
          const response = await fetch("http://localhost:58511/api/Empleados",
          {
              method: comando,
              mode: "cors",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(dataTicket)
          });
      //Leer la response del servicio
      const result = await response.json();
      //Presentar a response en el html
      dvMesagge.innerHTML = "";
      dvMesagge.innerHTML = result;
      
          
        } catch (error) {
          
        }

        //

      }


    }


/**
 * Genera la vista del usuario, donde se hara el CRUD
 */
function paintProfile() {
  cleanContainer();
  container.innerHTML += `
    <h1> HOLA ADMIN </h1>
  `;
}

/**
 * Limpia los datos de la tabla
 */
function cleanTbody(tbody) {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }
}

/**
 * Limpia los datos del contenedor
 */
function cleanContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

async function fillSelect(URLService, select){

  //Ir a la base de datos para llenar los selectores con la informacion relacionada
  
  try{

    const response = await fetch(URLService,{
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    //Se vacia el select
    select.innerHTML="";
    //Se recorre con un loop para llenar el select de informacion
    array.forEach(element => {
      select.innerHTML += `<option value= ${element.Codigo} >${element.Nombre} </option>`
      
    });

  }catch (error){
    dvMesagge.innerHTML = error;
  }


}