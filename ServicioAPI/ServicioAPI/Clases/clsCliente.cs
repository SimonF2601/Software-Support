using ServicioAPI.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace ServicioAPI.Clases
{
    public class clsCliente
    {
        private SoporteEntities dbSoporte = new SoporteEntities();

        public Cliente cliente { get; set; }

        public string Insertar()
        {
            try
            {
                dbSoporte.Clientes.Add(cliente);
                dbSoporte.SaveChanges();
                return "Se ingreso el cliente" + cliente.Nombre;
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
                dbSoporte.Clientes.AddOrUpdate(cliente);
                dbSoporte.SaveChanges();
                return "Se actualizaron los datos del cliente" + cliente.Nombre;
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
                Cliente _cliente = Consultar(id);
                dbSoporte.Clientes.Remove(_cliente);
                dbSoporte.SaveChanges();
                return "Se elimino el cliente: " + _cliente.Nombre;
            }
            catch(Exception ex)
            {
                return ex.Message;  
            }
        }

        public Cliente Consultar(int id_cliente)
        {
            return dbSoporte.Clientes.FirstOrDefault(c => c.ID_Cliente == id_cliente);
        }

        public List<Cliente> ConsultarTodos()
        {
            return dbSoporte.Clientes.ToList();
        }
    }
}