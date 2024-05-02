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
    public class ProductosController : ApiController
    {
        // GET api/<controller>
        public List<Producto> Get()
        {
            clsProducto _producto = new clsProducto();
            return _producto.ConsultarTodos();
        }

        // GET api/<controller>/5
        public Producto Get(int id)
        {
            clsProducto _producto = new clsProducto();
            return _producto.Consultar(id);
        }

        // POST api/<controller>
        public string Post([FromBody] Producto producto)
        {
            clsProducto _producto = new clsProducto();

            _producto.producto = producto;
            return _producto.Insertar();
        }

        // PUT api/<controller>/5
        public string Put([FromBody] Producto producto)
        {
            clsProducto _producto = new clsProducto();

            _producto.producto = producto;
            return _producto.Actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete(int id)
        {
            clsProducto _producto = new clsProducto();
            return _producto.Eliminar(id);
        }
    }
}