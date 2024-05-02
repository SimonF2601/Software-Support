using ServicioAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity.Core.Common.CommandTrees;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace ServicioAPI.Clases
{
    public class clsTicketVistaCliente
    {
        private SoporteEntities dbSoporte = new SoporteEntities();

        public Ticket_Vista_Cliente TicketCliente { get; set; }

        public string Insertar()
        {
            try
            {
                dbSoporte.Ticket_Vista_Cliente.Add(TicketCliente);
                dbSoporte.SaveChanges(); 
                return "Se ingreso un nuevo ticket " + TicketCliente.DescripcionProblema;
            }
            catch(Exception ex)
            {
                return ex.Message;
            }


        }

        public string Actualizar()
        {
            try
            {
                dbSoporte.Ticket_Vista_Cliente.AddOrUpdate(TicketCliente);
                dbSoporte.SaveChanges();
                return "Se Actualziaron los datos del nuevo ticket " + TicketCliente.DescripcionProblema;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public string Eliminar(int id)
        {
            try
            {
                Ticket_Vista_Cliente _ticketCliente = Consultar(id);
                dbSoporte.Ticket_Vista_Cliente.Remove(_ticketCliente);
                dbSoporte.SaveChanges();
                return "Se elimino un ticket del cliente: " + _ticketCliente.DescripcionProblema; 
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public Ticket_Vista_Cliente Consultar(int id_ticketCliente)
        {
            return dbSoporte.Ticket_Vista_Cliente.FirstOrDefault(t => t.ID_Ticket_Vista_Cliente == id_ticketCliente);
        }

        public IQueryable ConsultarTodos()
        {
            return from C in dbSoporte.Set<Cliente>()
                   join TC in dbSoporte.Set<Ticket_Vista_Cliente>()
                   on  C.ID_Cliente equals TC.ID_Cliente 
                   orderby TC.FechaCreacion
                   select new
                   {
                       Id_Cliente = TC.ID_Cliente,
                       Nombre = C.Nombre,
                       Documento = C.Documento,
                       CorreoElectronico = C.CorreoElectronico,
                       FechaCreacion = TC.FechaCreacion,
                       DescripcionProblema = TC.DescripcionProblema,
                   };
        }

        
    }
}