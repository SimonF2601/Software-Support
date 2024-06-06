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
    public class TechniciansController : ApiController
    {
        // GET api/<controller>
        public List<Technician> Get()
        {
            clsTechnician _technician = new clsTechnician();

            return _technician.ConsultarTodos();
        }

        // GET api/<controller>/5
        public Technician Get(int Technician_ID)
        {
            clsTechnician _technician = new clsTechnician();

            return _technician.Consultar(Technician_ID);
        }

        // POST api/<controller>
        public string Post([FromBody] Technician technician)
        {
            clsTechnician _technician = new clsTechnician();
            _technician.technician = technician;
            return _technician.Insertar();
        }

        // PUT api/<controller>/5
        public string Put([FromBody] Technician technician)
        {
            clsTechnician _technician = new clsTechnician();
            _technician.technician = technician;
            return _technician.Actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete(int Technician_ID)
        {
            clsTechnician _technician = new clsTechnician();
            return _technician.Eliminar(Technician_ID);
        }
    }
}