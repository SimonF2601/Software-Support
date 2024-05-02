CREATE DATABASE Soporte
GO

--USE master
--DROP DATABASE Soporte
USE Soporte


-- Tabla de Cargo
CREATE TABLE Cargo (
    ID_Cargo INT PRIMARY KEY,
    Nombre NVARCHAR(100)
);



-- Tabla de Área
CREATE TABLE Area (
    ID_Area INT PRIMARY KEY,
    Nombre NVARCHAR(100)
);

-- Tabla de Dirección
CREATE TABLE Direccion (
    ID_Direccion INT PRIMARY KEY,
    Direccion NVARCHAR(255)
);


-- Tabla de Tipo_Producto
CREATE TABLE Tipo_Producto (
    ID_Tipo_Producto INT PRIMARY KEY,
    Nombre NVARCHAR(100)
);







-- Tabla de Estado
CREATE TABLE Estado (
    ID_Estado INT PRIMARY KEY,
    Nombre NVARCHAR(100)
);

-- Tabla de Especialidad
CREATE TABLE Especialidad (
    ID_Especialidad INT PRIMARY KEY,
    Nombre NVARCHAR(100),
    Fecha DATE  -- Suponiendo que se almacena la fecha de obtención de la especialidad
);

-- Tabla de Tipo de Soporte
CREATE TABLE Tipo_Soporte (
    ID_Tipo_Soporte INT PRIMARY KEY,
    Tipo NVARCHAR(50)
);

-- Tabla de Marca
CREATE TABLE Marca (
    ID_Marca INT PRIMARY KEY,
    Codigo NVARCHAR(20),
    Nombre NVARCHAR(100)
);




-- Tabla de Cliente
CREATE TABLE Cliente (
	ID_Cliente int PRIMARY KEY,
    Cedula NVARCHAR(20) ,
    Nombre NVARCHAR(100),
    Correo_Electronico NVARCHAR(100),
	Numero_Contacto INT,
    ID_Cargo INT,
    ID_Area INT,
    FOREIGN KEY (ID_Cargo) REFERENCES Cargo(ID_Cargo),
    FOREIGN KEY (ID_Area) REFERENCES Area(ID_Area)
	
);

--Tabla de tipo de numero
CREATE TABLE Tipo_Numero(
ID_Tipo INT PRIMARY KEY,
Tipo NVARCHAR (20)
);
-- Tabla de Numero_Contacto
CREATE TABLE Numero_Contacto (
    ID_Numero_Contacto INT PRIMARY KEY,
    Numero NVARCHAR(20),
    Tipo INT,
	ID_Cliente int,
    FOREIGN KEY (Tipo) REFERENCES Tipo_Numero(ID_Tipo),
	FOREIGN KEY (ID_Cliente) REFERENCES Cliente(ID_Cliente)
);
-- Tabla de Ticket_Cliente
CREATE TABLE Ticket_Cliente (
    ID_Ticket_Cliente INT PRIMARY KEY,
    ID_Cliente INT,
    Descripcion_Problema NVARCHAR(255),
    ID_Estado INT,
    FOREIGN KEY (ID_Cliente) REFERENCES Cliente(ID_Cliente),
    FOREIGN KEY (ID_Estado) REFERENCES Estado(ID_Estado)
);
-- Tabla de Proveedor
CREATE TABLE Proveedor (
    ID_Proveedor INT PRIMARY KEY,
    Nit NVARCHAR(20),
    Nombre NVARCHAR(100),
    Correo_Electronico NVARCHAR(100),
    ID_Direccion INT, -- Referencia a la tabla de Dirección

    FOREIGN KEY (ID_Direccion) REFERENCES Direccion(ID_Direccion)
--	FOREIGN KEY (Numero_Contacto) REFERENCES Numero_Contacto(ID_Numero_Contacto)
);

CREATE TABLE Numero_Provedor (
    ID_Numero_Contacto INT PRIMARY KEY,
	ID_Provedor int ,
    Numero NVARCHAR(20),
    Tipo INT,
	FOREIGN KEY (ID_Provedor) REFERENCES Proveedor(ID_Proveedor),
    FOREIGN KEY (Tipo) REFERENCES Tipo_Numero(ID_Tipo)
);

-- Tabla de Producto
CREATE TABLE Producto (
    ID_Producto INT PRIMARY KEY,
    ID_Tipo_Producto INT,
    ID_Marca INT,
    Serial NVARCHAR(50),
    Caracteristicas NVARCHAR(255),
    ID_Proveedor INT,
    FOREIGN KEY (ID_Tipo_Producto) REFERENCES Tipo_Producto(ID_Tipo_Producto),
    FOREIGN KEY (ID_Marca) REFERENCES Marca(ID_Marca),
    FOREIGN KEY (ID_Proveedor) REFERENCES Proveedor(ID_Proveedor)
);

-- Tabla de Técnico
CREATE TABLE Tecnico (
    ID_Tecnico INT PRIMARY KEY,
    Documento NVARCHAR(20),  -- Suponiendo que Documento es único
    Nombre NVARCHAR(100),
    ID_Especialidad INT,
    FOREIGN KEY (ID_Especialidad) REFERENCES Especialidad(ID_Especialidad)
);

-- Tabla de Ticket_Técnico
CREATE TABLE Ticket_Tecnico (
    ID_Ticket_Tecnico INT PRIMARY KEY,
    ID_Ticket_Cliente INT,
    ID_Tecnico INT,
    ID_Producto INT,
    Estado NVARCHAR(100),
    Fecha_Creacion DATE,
    ID_Tipo_Soporte INT,
    Descripcion_Solucion NVARCHAR(255),
    FOREIGN KEY (ID_Ticket_Cliente) REFERENCES Ticket_Cliente(ID_Ticket_Cliente),
    FOREIGN KEY (ID_Tecnico) REFERENCES Tecnico(ID_Tecnico),
    FOREIGN KEY (ID_Producto) REFERENCES Producto(ID_Producto),
    FOREIGN KEY (ID_Tipo_Soporte) REFERENCES Tipo_Soporte(ID_Tipo_Soporte)
);



