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
    public class SuppliersController : ApiController
    {
        // GET api/<controller>
        public List<Supplier> Get()
        {
            clsSupplier _supplier = new clsSupplier();

            return _supplier.ConsultarTodos();
        }

        // GET api/<controller>/5
        public Supplier Get(int Supplier_ID)
        {
            clsSupplier _supplier = new clsSupplier();

            return _supplier.Consultar(Supplier_ID);
        }

        // POST api/<controller>
        public string Post([FromBody] Supplier supplier)
        {
            clsSupplier _supplier = new clsSupplier();
            _supplier.supplier = supplier;
            return _supplier.Insertar();
            
        }

        // PUT api/<controller>/5
        public string Put([FromBody] Supplier supplier)
        {
            clsSupplier _supplier = new clsSupplier();
            _supplier.supplier = supplier;
            return _supplier.Actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete(int Supplier_ID)
        {
            clsSupplier _supplier = new clsSupplier();
            return _supplier.Eliminar(Supplier_ID);
        }
    }
}