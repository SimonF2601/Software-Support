using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using APIServicio.Clases;
using APIServicio.Models;

namespace APIServicio.Controllers
{
    public class Product_TypesController : ApiController
    {
        // GET api/<controller>
        public List<Product> Get()
        {
            clsProduct _product = new clsProduct();
            return _product.ConsultarTodos();
        }

        // GET api/<controller>/5
        public Product Get(int id)
        {
            clsProduct _product = new clsProduct();
            return _product.Consultar(id);
        }

        // POST api/<controller>
        public string Post([FromBody] string value)
        {
            clsProduct _product = new clsProduct();
            return _product.Insertar();
        }

        // PUT api/<controller>/5
        public string Put([FromBody] string value)
        {
            clsProduct _product = new clsProduct();
            return _product.Actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete(int id)
        {
            clsProduct _product = new clsProduct();
            return _product.Eliminar(id);
        }
    }
}