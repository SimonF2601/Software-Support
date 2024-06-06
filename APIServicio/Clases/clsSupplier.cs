using APIServicio.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace APIServicio.Clases
{
    public class clsSupplier
    {
        private SupportEntities dbSupport = new SupportEntities();

        public Supplier supplier { get; set; }

        public string Insertar()
        {
            try
            {
                dbSupport.Suppliers.Add(supplier);
                dbSupport.SaveChanges();
                return "Se agrego el producto: " + supplier.Name_Supplier;
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
                dbSupport.Suppliers.AddOrUpdate(supplier);
                dbSupport.SaveChanges();
                return "Se actualizo el producto: " + supplier.Name_Supplier;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public Supplier Consultar(int Supplier_ID)
        {
            return dbSupport.Suppliers.FirstOrDefault(s => s.Supplier_ID== Supplier_ID);
        }

        public List<Supplier> ConsultarTodos()
        {
            return dbSupport.Suppliers.ToList();
        }

        public string Eliminar(int Supplier_ID)
        {
            Supplier _supplier = Consultar(Supplier_ID);
            dbSupport.Suppliers.Remove(_supplier);
            dbSupport.SaveChanges();
            return "Se elimino el producto: " + _supplier.Name_Supplier;
        }
    }
}