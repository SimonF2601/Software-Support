using ServicioAPI.Clases;
using ServicioAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography.Xml;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ServicioAPI.Controllers
{
    [EnableCors(origins: "http://localhost:50247", headers: "*", methods: "*")]
    public class ClientesController : ApiController
    {
        // GET api/<controller>
        public List<Cliente> Get()
        {
            clsCliente _cliente = new clsCliente();
            return _cliente.ConsultarTodos();
        }

        // GET api/<controller>/5
        public Cliente Get(int id)
        {
            clsCliente _cliente = new clsCliente();

            return _cliente.Consultar(id);

        }

        // POST api/<controller>
        public string Post([FromBody] Cliente cliente)
        {
            clsCliente _cliente = new clsCliente();

            _cliente.cliente = cliente;
            return _cliente.Insertar();
        }

        // PUT api/<controller>/5
        public string Put([FromBody] Cliente cliente)
        {
            clsCliente _cliente = new clsCliente();

            _cliente.cliente = cliente;
            return _cliente.Actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete(int id)
        {
            clsCliente _cliente = new clsCliente();
            return _cliente.Eliminar(id);
        }
    }
}