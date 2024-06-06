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
    public class CustomersController : ApiController
    {
        // GET api/<controller>
        public List<Customer> Get()
        {
            clsCustomer _customer = new clsCustomer();

            return _customer.ConsultarTodos();
        }

        // GET api/<controller>/5
        public Customer Get(int id)
        {
            clsCustomer _customer = new clsCustomer();

            return _customer.Consultar(id);
        }

        // POST api/<controller>
        public string Post([FromBody] Customer customer)
        {
            clsCustomer _customer = new clsCustomer();
            _customer.customer = customer;
            return _customer.Insertar();
        }

        // PUT api/<controller>/5
        public string Put([FromBody] Customer customer)
        {
            clsCustomer _customer = new clsCustomer();
            _customer.customer = customer;
            return _customer.Actualizar();
        }

        // DELETE api/<controller>/5
        public string Delete(int id)
        {
            clsCustomer _customer = new clsCustomer();
            return _customer.Eliminar(id);
        }
    }
}