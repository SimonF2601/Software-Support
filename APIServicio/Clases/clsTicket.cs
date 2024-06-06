using APIServicio.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace APIServicio.Clases
{
    public class clsTicket
    {
        private SupportEntities dbSupport = new SupportEntities();

        public Ticket ticket { get; set; }

        public string Insertar()
        {
            try
            {
                dbSupport.Tickets.Add(ticket);
                dbSupport.SaveChanges();
                return "Se agregó el ticket: " + ticket.Ticket_ID;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public string Actualizar()
        {
            try
            {
                dbSupport.Tickets.AddOrUpdate(ticket);
                dbSupport.SaveChanges();
                return "Se actualizó el ticket: " + ticket.Ticket_ID;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public Ticket Consultar(int ticket_ID)
        {
            return dbSupport.Tickets.FirstOrDefault(t => t.Ticket_ID == ticket_ID);
        }

        public List<Ticket> ConsultarTodos()
        {
            return dbSupport.Tickets.ToList();
        }

        public string Eliminar(int ticket_ID)
        {
            Ticket _ticket = Consultar(ticket_ID);
            dbSupport.Tickets.Remove(_ticket);
            dbSupport.SaveChanges();
            return "Se eliminó el ticket: " + _ticket.Ticket_ID;
        }



    }
}