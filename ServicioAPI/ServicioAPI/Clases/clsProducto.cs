using ServicioAPI.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace ServicioAPI.Clases
{
    public class clsProducto
    {
        private SoporteEntities dbSoporte = new SoporteEntities();


        public Producto producto { get; set; }

        public string Insertar()
        {
            try
            {
                dbSoporte.Productoes.Add(producto);
                dbSoporte.SaveChanges();
                return "Se ingreso el producto: " + producto.Nombre + " con ID: " + producto.ID_Producto; ;
            }
            catch(Exception ex)
            {
                return ex.Message;
            }
        }

        public string Actualizar()
        {
            try
            {
                dbSoporte.Productoes.AddOrUpdate(producto);
                dbSoporte.SaveChanges();
                return "Se actualizaron los datos del producto: " + producto.Descripcion;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public string Eliminar(int id)
        {
            try
            {
                Producto _producto = Consultar(id); 
                dbSoporte.Productoes.Remove(_producto);
                dbSoporte.SaveChanges();
                return "Se eliminaron los datos del producto: " + _producto.Nombre + " ID: " + _producto.ID_Producto;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }

        public Producto Consultar(int id_producto)
        {
            return dbSoporte.Productoes.FirstOrDefault(p => p.ID_Producto == id_producto);
        }

        public List<Producto> ConsultarTodos()
        {
            return dbSoporte.Productoes.ToList();
        }
    }
}