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
    public class AreaController : ApiController
    {
        // GET api/<controller>
        public List<Area> Get()
        {
            clsArea _area = new clsArea();

            return _area.ConsultarArea();
        }
    }
}