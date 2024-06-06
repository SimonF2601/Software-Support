using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using APIServicio.Models;

namespace APIServicio.Clases
{
    public class clsProduct_Type
    {

        private SupportEntities dbSupport = new SupportEntities();

        public Product_Type product_Type { get; set; }

        public List<Product_Type> ConsultarTipo()
        {
            return dbSupport.Product_Type.ToList();
        }
    }
}