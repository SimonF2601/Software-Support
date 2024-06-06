using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using APIServicio.Models;

namespace APIServicio.Clases
{
    public class clsCustomer
    {
        private SupportEntities dbSupport = new SupportEntities();

        public Customer customer { get; set; }

        public string Insertar()
        {
            try
            {
                dbSupport.Customers.Add(customer);
                dbSupport.SaveChanges();
                return "Se ingreso el cliente: " + customer.Name_Customer;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public string Actualizar()
        {
            try
            {
                dbSupport.Customers.AddOrUpdate(customer);
                dbSupport.SaveChanges();
                return "Se actualizaron los datos del cliente: " + customer.Name_Customer;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public Customer Consultar(int id_customer)
        {
            return dbSupport.Customers.FirstOrDefault(c => c.Customer_ID == id_customer);
        }

        public List<Customer> ConsultarTodos()
        {
            return dbSupport.Customers.ToList();
        }

        public string Eliminar(int id_customer)
        {
            try
            {
                Customer _customer = Consultar(id_customer);
                dbSupport.Customers.Remove(_customer);
                dbSupport.SaveChanges();
                return "Se elimino el cliente: " + _customer.Name_Customer;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}