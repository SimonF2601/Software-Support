using ServicioAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServicioAPI.Clases
{
    public class clsArea
    {
        private SoporteEntities dbSoporte = new SoporteEntities();

        public Area area { get; set; }

        public List<Area> ConsultarArea()
        {
            return dbSoporte.Areas.ToList();
        }
    }
}