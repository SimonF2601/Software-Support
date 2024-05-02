using ServicioAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServicioAPI.Clases
{
    public class clsTipoProducto
    {
        private SoporteEntities dbSoporte = new SoporteEntities();

        public Tipo_Producto tipoProducto { get; set; }

        public List<Tipo_Producto> ConsultarTipo()
        {
            return dbSoporte.Tipo_Producto.ToList();
        }
    }
}