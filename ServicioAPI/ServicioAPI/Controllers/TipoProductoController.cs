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
    public class TipoProductoController : ApiController
    {
        // GET api/<controller>
        public List<Tipo_Producto> Get()
        {
            clsTipoProducto _tipoProducto = new clsTipoProducto();

            return _tipoProducto.ConsultarTipo();
        }
    }
}