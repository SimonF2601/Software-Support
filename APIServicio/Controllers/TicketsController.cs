using APIServicio.Clases;
using APIServicio.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace APIServicio.Controllers
{
    public class TicketsController : ApiController
    {
        public List<Ticket> Get()
        {
            clsTicket _ticket = new clsTicket();

            return _ticket.ConsultarTodos();
        }

        // GET api/<controller>/5
        public Ticket Get(int Ticket_ID)
        {
            clsTicket _ticket = new clsTicket();

            return _ticket.Consultar(Ticket_ID);
        }

        // POST api/<controller>
        public string Post([FromBody] Ticket ticket)
        {
            clsTicket _ticket = new clsTicket();
            _ticket.ticket = ticket;
            return _ticket.Insertar();
        }

        // PUT api/<controller>/5
        public string Put([FromBody] Ticket ticket)
        {
            clsTicket _ticket = new clsTicket();
            _ticket.ticket = ticket;
            return _ticket.Actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete(int Ticket_ID)
        {
            clsTicket _ticket = new clsTicket();
            return _ticket.Eliminar(Ticket_ID);
        }

    }
}