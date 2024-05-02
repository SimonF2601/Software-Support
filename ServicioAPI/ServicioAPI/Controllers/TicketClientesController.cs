using ServicioAPI.Clases;
using ServicioAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ServicioAPI.Controllers
{
    [EnableCors(origins: "http://localhost:50739", headers: "*", methods: "*")]
    public class TicketClientesController : ApiController
    {
        // GET api/<controller>
        public IQueryable Get()
        {
            clsTicketVistaCliente _ticketCliente = new clsTicketVistaCliente();
            return _ticketCliente.ConsultarTodos();
        }

        // GET api/<controller>/5
        public Ticket_Vista_Cliente Get(int id)
        {
            clsTicketVistaCliente _ticketCliente = new clsTicketVistaCliente();
            return _ticketCliente.Consultar(id);
        }

        // POST api/<controller>
        public string Post([FromBody] Ticket_Vista_Cliente ticketCliente)
        {
            clsTicketVistaCliente _ticketCliente = new clsTicketVistaCliente();

            _ticketCliente.TicketCliente = ticketCliente;
            return _ticketCliente.Insertar();
        }

        // PUT api/<controller>/5
        public string Put([FromBody] Ticket_Vista_Cliente ticketCliente)
        {
             clsTicketVistaCliente _ticketCliente = new clsTicketVistaCliente();

            _ticketCliente.TicketCliente = ticketCliente;
            return _ticketCliente.Actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete(int id)
        {
            clsTicketVistaCliente _ticketCliente = new clsTicketVistaCliente();

            
            return _ticketCliente.Eliminar(id);
        }
    }
}