using ServicioAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServicioAPI.Clases
{
    public class clsCargo
    {
        private SoporteEntities dbSoporte = new SoporteEntities();

        public Cargo cargo { get; set; }

        public List<Cargo> ConsultarCargo()
        {
            return dbSoporte.Cargoes.ToList();
        }
    }
}