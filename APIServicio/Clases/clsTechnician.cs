using APIServicio.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace APIServicio.Clases
{
    public class clsTechnician
    {
        private SupportEntities dbSupport = new SupportEntities();

        public Technician technician { get; set; }

        public string Insertar()
        {
            try
            {
                dbSupport.Technicians.Add(technician);
                dbSupport.SaveChanges();
                return "Se agrego el tecnico: " + technician.Name_Technician;
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
                dbSupport.Technicians.AddOrUpdate(technician);
                dbSupport.SaveChanges();
                return "Se actualizo los datos del tecnico: " + technician.Name_Technician;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public Technician Consultar(int Technician_ID)
        {
            return dbSupport.Technicians.FirstOrDefault(t => t.Technician_ID == Technician_ID);
        }

        public List<Technician> ConsultarTodos()
        {
            return dbSupport.Technicians.ToList();
        }

        public string Eliminar(int Technician_ID)
        {
            Technician _technician = Consultar(Technician_ID);
            dbSupport.Technicians.Remove(_technician);
            dbSupport.SaveChanges();
            return "Se elimino el tecnico: " + _technician.Name_Technician;
        }
    }
}