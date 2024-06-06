using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using APIServicio.Models;

namespace APIServicio.Clases
{
    public class clsProduct
    {
        private SupportEntities dbSupport = new SupportEntities();

        public Product product { get; set; }

        public string Insertar()
        {
            try
            {
                dbSupport.Products.Add(product);
                dbSupport.SaveChanges();
                return "Se agrego el producto: " + product.Product_Detail + " con ID: " +product.Product_ID;
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
                dbSupport.Products.AddOrUpdate(product);
                dbSupport.SaveChanges();
                return "Se actualizo el producto: " + product.Product_ID;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public Product Consultar(int product_ID)
        {
            return dbSupport.Products.FirstOrDefault(p => p.Product_ID == product_ID);
        }

        public List<Product> ConsultarTodos()
        {
            return dbSupport.Products.ToList();
        }

        public string Eliminar(int product_ID)
        {
            Product _product = Consultar(product_ID);
            dbSupport.Products.Remove(_product);
            dbSupport.SaveChanges();
            return "Se elimino el producto: " + _product.Product_ID;
        }
    }
}