//Principal Selectors
const container = document.querySelector("#principal-container");
const dvMesagge = document.getElementById("dvMessage")
const barra = document.querySelector(".sidebar-nav");

//Loading the administrator view
document.addEventListener("DOMContentLoaded", () => {
    paintProfile()
    
})

//Iterator of the sidebar, which leads to each section.
barra.addEventListener("click", (event) => {
    event.preventDefault();

    const validator = event.target.classList;

    if (validator.contains("product")) {
        paintProductSection();
    }

    if (validator.contains("customer")) {
        paintCustomerSection();
    }

    if (validator.contains("tech")) {
        paintTechnical();
    }

    if (validator.contains("profile")) {
        paintProfile();
        console.log("hola");
    }

    if (validator.contains("ticket")) {
        console.log("join");
        paintClientTicketForm();
    }    
});


/**
 * Generates the user view, where the CRUD will be made.
 */
function paintCustomerSection() {
    cleanContainer();
    container.innerHTML = `
    
    <div class="container-fluid">
        <div class="mb-3">
            <h3 class="fw-bold fs-4 mb-3">Admin Dashboard</h3>

            <div class="row justify-content-evenly">
                <!-- Button trigger modal -->
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary col-3 m-lg-1" data-bs-toggle="modal"
                data-bs-target="#formUser" id ="btnOpenModal">
                Add New Client
            </button>
      
                    <div class="col-6">
                        <div class="form-floating mb-2 ">
                            <input type="text" class="form-control w-75 " id="idUSer" placeholder="Search a client by id...">
                            <label for="idProduct">Search a client by id...</label>
                            </div>
                            <button class="btn btn-primary w-25 search" type="button">Search</button>
                    </div>
                  </div>
      
                <!-- Modal User-->
                <div class="modal fade" id="formUser" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <form class="modal-content" id="form-User">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                    Modal User
                                </h1>
                                <input type="hidden" id="user-id" />
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
      
                                <div class="mb-3 ">
                                    <label for="name-user" class="form-label">Name</label>
                                    <input type="text" id="name-user" class="form-control rounded-5 " />
                                </div>
      
                            
                                <div class="mb-3">
                                    <label for="document-user" class="form-label">Document</label>
                                    <input type="text" id="document-user" class="form-control rounded-5 " />
                                </div>
      
                                <div class="mb-3">
                                    <label for="email-user" class="form-label">Email</label>
                                    <input type="email" id="email-user" class="form-control rounded-5" />
                                </div>
      
                                <div class="mb-3">
                                    <label for="charge-user" class="form-label">Charge</label>
                                    <select class="form-select rounded-5" id = "charge-user" aria-label="Default select example">
                                        <option selected> choose a position </option>
                                        <option value="1">Auxiliar</option>
                                        <option value="2">Asistente</option>
                                        <option value="3">Coordinador</option>
                                        <option value="4">Director</option>
                                        <option value="5">Jefe</option>
                                      </select>
                                </div>
      
                                <div class="mb-3">
                                    <label for="area-user" class="form-label">Area</label>
                                    <select class="form-select rounded-5" id = "area-user" aria-label="Default select example">
                                        <option selected> Choose an area </option>
                                        <option value="1">Contabilidad</option>
                                        <option value="2">Gestion Humana</option>
                                        <option value="3">Logistica</option>
                                        <option value="4">Planeacion</option>
                                        <option value="5">Sistemas</option>
                                      </select>
                                </div>
      
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id= "btnCloseModal">
                                    Close
                                </button>
                                <button type="submit" class="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
      
            <h3 class="fw-bold fs-4 my-3">Users List
            </h3>
            <div class="row justify-content-around ">
                <div class="col-12">
                    <table class="table table-striped">
                        <thead>
                            <tr class="highlight">
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Document</th>
                                <th scope="col">Email</th>
                                <th scope="col">Charge</th>
                                <th scope="col">Area</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
      
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
  `;

    //Selectors
    const tbody = container.querySelector("tbody");
    const userForm = document.querySelector("#form-User");
    const btnSearch = document.querySelector(".search");

    //General Events
    btnSearch.addEventListener("click", (event) => {
        event.preventDefault();
        const idToSearch = document.getElementById("User");
        const id = idToSearch.value

        consultUser(id)

    });

    tbody.addEventListener("click", (event) => {
        //Quitar las acciones por defecto
        event.preventDefault();
        //SI a la etiqueta que se le dió clic contiene la clase btn-delete entonces:
        if (event.target.classList.contains("btn-delete")) {
            //Extraemos el valor del id
            const id = event.target.getAttribute("User-id");
            deleteUser(id);
        }

        //SI a la etiqueta que se le dió clic contiene la clase btn-edit entonces:
        if (event.target.classList.contains("btn-edit")) {
            const id = event.target.getAttribute("User-id");
            loadInfoUser(id)
        }
    });

    userForm.addEventListener("submit", (event) => {

        event.preventDefault()
        const idInput = container.querySelector("#user-id").value;

        if (idInput) { saveUser("PUT"); }
        else { saveUser("POST"); }

        document.getElementById("btnCloseModal").click();
        cleanI

    });


    //Functions
    async function saveUser(comando) {
        //Recoleccion de datos 
        const Nombre = container.querySelector("#name-user").value;
        const Documento = container.querySelector("#document-user").value;
        const CorreoElectronico = container.querySelector("#email-user").value;
        const Cargo_ID = container.querySelector("#document-user").value;
        const Area_ID = container.querySelector("#document-user").value;

        const newUser = {
            Nombre: Nombre,
            Documento: Documento,
            CorreoElectronico: CorreoElectronico,
            Cargo_ID: Cargo_ID,
            Area_ID: Area_ID
        }

        const response = await fetch("http://localhost:58449/api/Clientes",
            {
                method: comando,
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            });

        //Leer la response del servicio
        const result = await response.json();

        //Presentar a response en el html
        dvMesagge.innerHTML = "";
        dvMesagge.innerHTML = result;
    }

    async function consultUser(id) {

        const data = await getUser(id);
        cleanTbody(tbody);

        tbody.innerHTML += `
            <tr>
              <th scope="row">${data.ID_Cliente}</th>
                <td>${data.Nombre}</td>
                <td>${data.Modelo}</td>
                <td>${data.Tipo}</td>
                <td class = "justify-content-around">                        
                <button  type="button" class="btn btn-primary btn-edit" User-id="${data.ID_Cliente}" ><i class= 'bx bxs-pencil pe-none' ></i></button>
                <button  type="button" class="btn btn-danger btn-delete" User-id="${data.ID_Cliente}" ><i class= 'bx bxs-trash pe-none' ></i></button>
                </td>
              </tr>
            `;
    }

    async function getUser(id) {
        const response = await fetch("http://localhost:58449/api/Clientes/id?=" + id, {
            method: "GET",
            mode: "cors",
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();
        return data
    }

    async function deleteUser(id) {

        const data = await getUser(id)

        const response = await fetch("http://localhost:58449/api/Clientes/ID_Cliente?=" + id, {
            method: "DELETE",
            mode: "cors",
            headers: { "Content-Type": "application/json" }
        });

        if (await response) {
            cleanTbody(tbody)
        }

    }

    async function loadInfoUser(id) {
        document.getElementById("btnOpenModal").click()
        const data = await getUser(id)

        //Inserccion de datos 
        container.querySelector("#name-user").value = data.ID_Cliente;
        container.querySelector("#name-user").value = data.Nombre;
        container.querySelector("#document-user").value = data.Documento;
        container.querySelector("#email-user").value = data.CorreoElectronico;
        container.querySelector("#document-user").value = data.Cargo_ID;
        container.querySelector("#document-user").value = data.Area_ID;

       
    }
    
    //funcion para pintar los registros existentes va aqui
    cleanTbody(tbody);
    tbody.innerHTML += `
    <tr>
      <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td class = "justify-content-around">                        
        <button  type="button" class="btn btn-primary btn-edit" user-id="" ><i class='bx bxs-pencil pe-none'></i></button>
        <button  type="button" class="btn btn-danger btn-delete" user-id="" ><i class='bx bxs-trash pe-none'></i></button>
        </td>
    </tr>
  `;
}

/**
 * Generates the product view, where the CRUD will be made.
 */
function paintProductSection() {
    cleanContainer();
    container.innerHTML = `
    <div class="container-fluid">
    <div class="mb-3">
        <h3 class="fw-bold fs-4 mb-3">Admin Dashboard</h3>
    
            <div class="row justify-content-evenly">
            <!-- Button trigger modal -->
                <div class="col-6 d-flex align-content-center ">
                    <button type="button" class="btn btn-primary col-4 h-75" data-bs-toggle="modal"
                    data-bs-target="#formProduct" id ="btnOpenModal">
                    Add New Product
                </button>
                </div>
                <div class="col-6">
                    <div class="form-floating mb-2 ">
                        <input type="text" class="form-control w-75 " id="idProduct" placeholder="Searh a product by id...">
                        <label for="idProduct">Search a product by id...</label>
                    </div>
                     <button class="btn btn-primary w-25 search" type="button">Search</button>
                </div>
              </div>  
        
            <!-- Modal Product-->
            <div class="modal fade" id="formProduct" data-bs-backdrop="static" data-bs-keyboard="false"
                tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <form class="modal-content" id="form-Product">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                Modal Product
                            </h1>
                            <input type="hidden" id="Product-id" />
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
  
                            <div class="mb-3 ">
                                <label for="name-Product" class="form-label">Name</label>
                                <input type="text" id="name-Product" class="form-control rounded-5 " />
                            </div>
  
                        
                            <div class="mb-3">
                                <label for="model-Product" class="form-label">Model</label>
                                <input type="text" id="model-Product" class="form-control rounded-5 " />
                            </div>
  
                            <div class="mb-3">
                                <label for="descripcion-Product" class="form-label">Description</label>
                                <input type="text" id="descripcion-Product" class="form-control rounded-5" />
                            </div>
  
                            <div class="mb-3">
                                <label for="type-Product" class="form-label">Type</label>
                                 <select id = "type-Product" class="form-select form-select-lg  mb-3 fs-6 " aria-label="Large select example">
                                      <option selected>Choose a product</option>
                                      <option value="1">One</option>
                                      <option value="2">Two</option>
                                      <option value="3">Three</option>
                                  </select>
                             
                            </div>
  
  
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id = "btnCloseModal">
                                Close
                            </button>
                            <button type="submit" class="btn btn-primary" id="btn-save">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  
        <h3 class="fw-bold fs-4 my-3">Products List
        </h3>
        <div class="row justify-content-around ">
            <div class="col-12">
                <table class="table table-striped">
                    <thead>
                        <tr class="highlight">
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Model</th>
                            <th scope="col">Type</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
  
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  `;

    //Selectors
    const tbody = container.querySelector("tbody");
    const productForm = document.querySelector("#form-Product");
    const btnSearch = document.querySelector(".search");
    const btnSave = document.querySelector("#btn-save");
    const selectType = document.getElementById("type-Product");

    fillTable("http://localhost:58449/api/Productos", tbody);
    fillSelect("http://localhost:58449/api/", selectType );

    //Events
    btnSearch.addEventListener("click", (event) => {
        event.preventDefault();
        const idToSearch = document.getElementById("idProduct");
        const id = idToSearch.value

        consultProduct(id)

    })

    productForm.addEventListener("submit", (event) => {


        event.preventDefault()

        const idInput = container.querySelector("#Product-id").value;
        console.log(idInput)
        if (idInput) { saveProduct("PUT"); }
        else { saveProduct("POST"); }

        

    })


    tbody.addEventListener("click", (event) => {
        //Quitar las acciones por defecto
        event.preventDefault();
        //SI a la etiqueta que se le dió clic contiene la clase btn-delete entonces:
        if (event.target.classList.contains("btn-delete")) {
            //Extraemos el valor del id
            const id = event.target.getAttribute("Product-id");
            deleteProduct(id);
        }

        //SI a la etiqueta que se le dió clic contiene la clase btn-edit entonces:
        if (event.target.classList.contains("btn-edit")) {
            const id = event.target.getAttribute("Product-id");
            loadInfo(id)
        }
    });

    //Functions
    async function saveProduct(comando) {
        //Recoleccion de datos 
        const ID_Cliente = container.querySelector("#Product-id").value;
        const Nombre = container.querySelector("#name-Product").value;
        const Modelo = container.querySelector("#model-Product").value;
        const Descripcion = container.querySelector("#descripcion-Product").value;
        const Tipo = container.querySelector("#type-Product").value;

        const newProduct = {
            ID_Cliente: ID_Cliente,
            Nombre: Nombre,
            Modelo: Modelo,
            Descripcion: Descripcion,
            Tipo: Tipo
        }

        const response = await fetch("http://localhost:58449/api/Productos",
            {
                method: comando,
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct)
            });

        //Leer la response del servicio
        const result = await response.json();

        //Presentar a response en el html
        dvMesagge.innerHTML = "";
        dvMesagge.innerHTML = result;
        cleanInputs();
        document.getElementById("btnCloseModal").click();

        fillTable("http://localhost:58449/api/Productos", tbody);
    }

    async function consultProduct(id) {
        try {
            const data = await getProduct(id);
            cleanTbody(tbody);

            tbody.innerHTML += `
    <tr>
      <th scope="row">${data.ID_Producto}</th>
        <td>${data.Nombre}</td>
        <td>${data.Modelo}</td>
        <td>${data.Tipo}</td>
        <td class = "justify-content-around">                        
        <button  type="button" class="btn btn-primary btn-edit" Product-id="${data.ID_Producto}" ><i class= 'bx bxs-pencil pe-none' ></i></button>
        <button  type="button" class="btn btn-danger btn-delete" Product-id="${data.ID_Producto}" ><i class= 'bx bxs-trash pe-none' ></i></button>
        </td>
      </tr>

    `;
        } catch (error) {
      
            dvMesagge.innerHTML = error;
        }

    }

    async function getProduct(id) {
        const response = await fetch("http://localhost:58449/api/Productos/id?=" + id, {
            method: "GET",
            mode: "cors",
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();
        return data
    }

    async function deleteProduct(id) {

        const data = await getProduct(id)

        const response = await fetch("http://localhost:58449/api/Productos/ID_Producto?=" + id, {
            method: "DELETE",
            mode: "cors",
            headers: { "Content-Type": "application/json" }
        });

        if (await response) {
            cleanTbody(tbody)
        }

    }

    async function loadInfo(id) {

        const data = await getProduct(id)
        document.getElementById("btnOpenModal").click()
        //Inserccion de datos 
        container.querySelector("#Product-id").value = data.ID_Producto;
        container.querySelector("#name-Product").value = data.Nombre;
        container.querySelector("#model-Product").value = data.Modelo;
        container.querySelector("#descripcion-Product").value = data.Descripcion;
        container.querySelector("#type-Product").value = data.Tipo;

    }
}
async function fillTable(URLService, tbody) {

   /* try {*/

        const response = await fetch(URLService, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        //Se vacia el select
        tbody.innerHTML = "";
        //Se recorre con un loop para llenar el select de informacion
        data.forEach(element => {
            tbody.innerHTML += `
            <tr>
              <th scope="row">${element.ID_Producto}</th>
                <td>${element.Nombre}</td>
                <td>${element.Modelo}</td>
                <td>${element.Tipo}</td>
                <td class = "justify-content-around">                        
                <button  type="button" class="btn btn-primary btn-edit" Product-id="${element.ID_Producto}" ><i class= 'bx bxs-pencil pe-none' ></i></button>
                <button  type="button" class="btn btn-danger btn-delete" Product-id="${element.ID_Producto}" ><i class= 'bx bxs-trash pe-none' ></i></button>
                </td>
              </tr>
    `;
        });

    //} catch (error) {
    //    dvMesagge.innerHTML = error;
    //}

}
function paintClientTicketForm(){
    cleanContainer();
    container.innerHTML += `
    <div class="container-fluid d-flex flex-column gap-5 ">
 
    <form action="" id = "client-ticket-form">
        <h3>Creation Ticket Form</h3>

        <input id= "id-ticket-client" type = "hidden" /> 

        <label for="client">Client type</label>
        <select id = "client" class="form-select form-select-lg  mb-3 fs-6 " aria-label="Large select example">
        <option selected>Choose a client</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>

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

        <button type="submit" class="btn btn-primary h-100 w-25" id="btn-save">Save</button>

    </form>
  </div>
  <br> <br>

  <h3 class="fw-bold fs-4 my-3">Tickets List</h3>
    
    <div class="row justify-content-evenly">
        <div class="col-4">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="inputSearch" placeholder="Search a ticket by id...">
                <label for="inputSearch">Search a ticket by id...</label>
              </div>
        </div>
        <div class="col-4">
            <button class="btn btn-primary w-50 h-75" type="button">Search</button>
        </div>
      </div>

    <div class="row justify-content-around ">
        <div class="col-12">
            <table class="table table-striped">
                <thead>
                    <tr class="highlight">
                        <th scope="col">#</th>
                        <th scope="col">Client</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </div>>
    
      `;

    //Selectors
    const tbody = container.querySelector("tbody");
    const ticketForm = document.querySelector("#client-ticket-form");
    const btnSave = document.querySelector("#btnSave");
    const btnSearch = document.querySelector("#btnSearch")


    //Events 
    ticketForm.addEventListener("submit", (event) => {

        event.preventDefault()
        const idInput = container.querySelector("#id-ticket-client").value;

        if (idInput) { saveTicket("PUT"); }
        else { saveTicket("POST"); }

    })

    btnSearch.addEventListener("click", (event) => {

        event.preventDefault();

        const inputSearch = document.querySelector("#inputSearch").value;

        consultTicket(inputSearch);
    })


    tbody.addEventListener("click", (event) => {
        //Quitar las acciones por defecto
        event.preventDefault();
        //SI a la etiqueta que se le dió clic contiene la clase btn-delete entonces:
        if (event.target.classList.contains("btn-delete")) {
            //Extraemos el valor del id
            const id = event.target.getAttribute("Ticket-id");
            deleteProduct(id);
        }

        //SI a la etiqueta que se le dió clic contiene la clase btn-edit entonces:
        if (event.target.classList.contains("btn-edit")) {
            const id = event.target.getAttribute("Ticket-id");
            loadInfo(id)
        }
    });

    //Functions
    async function saveTicket(comando) {
        //Recoleccion de datos 
        const ID_Ticket_Vista_Cliente = container.querySelector("#id-ticket-client").value;
        const ID_Cliente = container.querySelector("#client").value;
        const FechaCreacion = currentDay();
        const Estado = container.querySelector("#status").value;
        const DescripcionProblema = container.querySelector("#problem-description").value;

        const newProduct = {
            ID_Cliente: ID_Cliente,
            FechaCreacion: FechaCreacion,
            Estado: Estado,
            DescripcionProblema: DescripcionProblema
        }

        const response = await fetch("http://localhost:58449/api/TicketClientes",
            {
                method: comando,
                mode: "cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct)
            });

        //Leer la response del servicio
        const result = await response.json();

        //Presentar a response en el html
        dvMesagge.innerHTML = "";
        dvMesagge.innerHTML = result;
    }

    async function consultTicket(id) {

        const data = await getTicket(id);

        cleanTbody(tbody);

        tbody.innerHTML += `
        <tr>
          <th scope="row">${data.ID_Ticket_Vista_Cliente}</th>
            <td>${data.ID_Cliente}</td>
            <td>${data.FechaCreacion}</td>
            <td>${data.Estado }</td>
            <td class = "justify-content-around">                        
            <button  type="button" class="btn btn-primary btn-edit" Ticket-id="${data.ID_Ticket_Vista_Cliente}" ><i class= 'bx bxs-pencil pe-none' ></i></button>
            <button  type="button" class="btn btn-danger btn-delete" Ticket-id="${data.ID_Ticket_Vista_Cliente}" ><i class= 'bx bxs-trash pe-none' ></i></button>
            </td>
          </tr>
        `;
    }

    async function getTicket(id) {
        const response = await fetch("http://localhost:58449/api/TicketClientes/id?=" + id, {
            method: "GET",
            mode: "cors",
            headers: { "Content-Type": "application/json" }
        });

        const data = await response.json();
        return data
    }

    async function deleteTicket(id) {

        const data = await getTicket(id)

        const response = await fetch("http://localhost:58449/api/TicketClientes/id?=" + id, {
            method: "DELETE",
            mode: "cors",
            headers: { "Content-Type": "application/json" }
        });

        if (await response) {
            cleanTbody(tbody)
        }
        }

    async function loadInfo(id) {

        const data = await getProduct(id)

        //Inserccion de datos 
        const ID_Ticket_Vista_Cliente = container.querySelector("#id-ticket-client").value;
        const ID_Cliente = container.querySelector("#client").value;
        const FechaCreacion = currentDay();
        const Estado = container.querySelector("#status").value;
        const DescripcionProblema = container.querySelector("#problem-description").value;

    }
}

/**
 * Generate the technician's view, where the CRUD will be made.
 */
function paintTechnical() {
    cleanContainer();
    container.innerHTML = `
    <h1>Technical Manager</h1><br>
    <div class="row-cols-4 gap-3 fle ">
      <button class="btn bg-primary-subtle tech-new">Create New Tech</button>
      <button class="btn btn-info tech-avail mx-5">Existing Technicians</button>
    </div>
  <br><hr>
    <div id= "tech-section">
    </div>
  `;

    var section = container.querySelector("#tech-section");

    container.addEventListener("click", (event) => {
        const validator = event.target.classList;

        if (validator.contains("tech-new")) {
            paintTechForm();
        }

        if (validator.contains("tech-avail")) {
            paintTechCard();
        }

        function paintTechCard() {
            section.innerHTML = "";

            section.innerHTML = `
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
        }

        function paintTechForm() {
            section.innerHTML = "";
            section.innerHTML += `
      <div class="container-fluid">
    
      <form action="">
          <h3>Creation Form</h3>
          <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="Document">
              <label for="floatingInput">Document</label>
          </div>
    
          <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Name</label>
          </div>
    
          <div class="form-floating mb-3">
              <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Age</label>
          </div>
    
          <select class="form-select form-select-lg  mb-3 fs-6 " aria-label="Large select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </select>
    
          <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Username</label>
          </div>
    
          <div class="form-floating">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Password</label>
          </div>
          <div class=" my-4  row-cols-auto ">
              <button type="button" class="btn btn-primary col-2 mx-4 ">Save</button>
              <span class="col-1 "></span>
              <button type="button" class="btn btn-secondary col-2">Clear</button>
          </div>
      </form>
    </div>
    
      `;
        }
    });
}

/**
 * Generates the welcome view for the administrator
 */
function paintProfile() {
    cleanContainer();
    container.innerHTML += `
    <h1> HOLA ADMIN </h1>
  `;
}

/**
 * Cleans the table data
 */
function cleanTbody(tbody) {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

/**
 * Clean the container where you load each view
 */
function cleanContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    }
function currentDay() {
    let now = new Date();
    return now.toISOString().split('T')[0];
}

function cleanInputs() {
    const inputs = document.querySelectorAll("input");
    const selects = document.querySelectorAll("select");

    inputs.forEach(element => {
        element.value = ""
    })

    selects.forEach(element => {
        element.value = 0;
    })
}

async function fillSelect(URLService, select) {

    //Ir a la base de datos para llenar los selectores con la informacion relacionada

    try {

        const response = await fetch(URLService, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        //Se vacia el select
        select.innerHTML = "";
        //Se recorre con un loop para llenar el select de informacion
        data.forEach(element => {
          
            select.innerHTML += `<option value= ${element.Codigo} >${element.Nombre} </option>`

        });

    } catch (error) {
        dvMesagge.innerHTML = error;
    }


}

