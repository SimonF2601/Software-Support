CREATE DATABASE Support
GO

USE Support

-- Table: Position
CREATE TABLE Position (
    Position_ID INT IDENTITY (1,1) PRIMARY KEY,
    Name NVARCHAR(100)
);

-- Table: Department
CREATE TABLE Department (
    Department_ID INT IDENTITY (1,1) PRIMARY KEY,
    Name NVARCHAR(100)
);

-- Table: Address
CREATE TABLE Address (
    Address_ID INT IDENTITY (1,1) PRIMARY KEY,
    Address NVARCHAR(255)
);

-- Table: Product_Type
CREATE TABLE Product_Type (
    Product_Type_ID INT IDENTITY (1,1) PRIMARY KEY,
    Name NVARCHAR(100)
);

-- Table: Status
CREATE TABLE Status (
    Status_ID INT IDENTITY (1,1) PRIMARY KEY,
    Name NVARCHAR(100)
);

-- Table: Specialty
CREATE TABLE Specialty (
    Specialty_ID INT IDENTITY (1,1) PRIMARY KEY,
    Name NVARCHAR(100),
    Date DATE  -- Assuming this stores the date the specialty was obtained
);

-- Table: Brand
CREATE TABLE Brand (
    Brand_ID INT IDENTITY (1,1) PRIMARY KEY,
    Code NVARCHAR(20),
    Name NVARCHAR(100)
);

-- Table: Customer
CREATE TABLE Customer (
    Customer_ID INT IDENTITY (1,1) PRIMARY KEY,
    ID_Number NVARCHAR(20),
    Name NVARCHAR(100),
    Email NVARCHAR(100),
    Contact_Number INT,
    Position_ID INT,
    Department_ID INT,
    FOREIGN KEY (Position_ID) REFERENCES Position(Position_ID),
    FOREIGN KEY (Department_ID) REFERENCES Department(Department_ID)
);

-- Table: Number_Type
CREATE TABLE Number_Type (
    Number_Type_ID INT IDENTITY (1,1) PRIMARY KEY,
    Type NVARCHAR(20)
);

-- Table: Contact_Number
CREATE TABLE Contact_Number (
    Contact_Number_ID INT IDENTITY (1,1) PRIMARY KEY,
    Number NVARCHAR(20),
    Type_ID INT,
    Customer_ID INT,
    FOREIGN KEY (Type_ID) REFERENCES Number_Type(Number_Type_ID),
    FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID)
);

-- Table: Supplier
CREATE TABLE Supplier (
    Supplier_ID INT IDENTITY (1,1) PRIMARY KEY,
    Tax_ID NVARCHAR(20),
    Name NVARCHAR(100),
    Email NVARCHAR(100),
    Address_ID INT, -- Reference to the Address table
    FOREIGN KEY (Address_ID) REFERENCES Address(Address_ID)
);

-- Table: Supplier_Contact_Number
CREATE TABLE Supplier_Contact_Number (
    Contact_Number_ID INT IDENTITY (1,1) PRIMARY KEY,
    Supplier_ID INT,
    Number NVARCHAR(20),
    Type_ID INT,
    FOREIGN KEY (Supplier_ID) REFERENCES Supplier(Supplier_ID),
    FOREIGN KEY (Type_ID) REFERENCES Number_Type(Number_Type_ID)
);

-- Table: Product
CREATE TABLE Product (
    Product_ID INT IDENTITY (1,1) PRIMARY KEY,
    Product_Type_ID INT,
    Brand_ID INT,
    Serial NVARCHAR(50),
    Features NVARCHAR(255),
    Supplier_ID INT,
    Price FLOAT,
    FOREIGN KEY (Product_Type_ID) REFERENCES Product_Type(Product_Type_ID),
    FOREIGN KEY (Brand_ID) REFERENCES Brand(Brand_ID),
    FOREIGN KEY (Supplier_ID) REFERENCES Supplier(Supplier_ID)
);

-- Table: Technician
CREATE TABLE Technician (
    Technician_ID INT IDENTITY (1,1) PRIMARY KEY,
    Document NVARCHAR(20),  -- Assuming Document is unique
    Name NVARCHAR(100),
    Specialty_ID INT,
    FOREIGN KEY (Specialty_ID) REFERENCES Specialty(Specialty_ID)
);

-- Table: Support_Type
CREATE TABLE Support_Type (
    Support_Type_ID INT IDENTITY (1,1) PRIMARY KEY,
    Type NVARCHAR(50)
);

-- Table: Ticket
CREATE TABLE Ticket (
    Ticket_ID INT IDENTITY (1,1) PRIMARY KEY,
    Customer_ID INT,
    Status_ID INT,
    Creation_Date DATE,
    Problem_Description NVARCHAR(255),
    FOREIGN KEY (Status_ID) REFERENCES Status(Status_ID),
    FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID)
);

-- Table: Ticket_Detail
CREATE TABLE Ticket_Detail (
    Detail_ID INT IDENTITY (1,1) PRIMARY KEY,
    Ticket_ID INT,
    Technician_ID INT,
    Product_ID INT,
    Support_Type_ID INT,
    Detail NVARCHAR(256),
    FOREIGN KEY (Ticket_ID) REFERENCES Ticket(Ticket_ID),
    FOREIGN KEY (Technician_ID) REFERENCES Technician(Technician_ID),
    FOREIGN KEY (Product_ID) REFERENCES Product(Product_ID),
    FOREIGN KEY (Support_Type_ID) REFERENCES Support_Type(Support_Type_ID)
);

-- Table: Customer_User
CREATE TABLE Customer_User (
    Username NVARCHAR(50),
    Password NVARCHAR(100),
    Customer_ID INT,
    FOREIGN KEY (Customer_ID) REFERENCES Customer(Customer_ID)
);

-- Table: Technician_User
CREATE TABLE Technician_User (
    Username NVARCHAR(50),
    Password NVARCHAR(100),
    Technician_ID INT,
    FOREIGN KEY (Technician_ID) REFERENCES Technician(Technician_ID)
);

-- Table: Product_Detail
CREATE TABLE Product_Detail (
    Detail_ID INT PRIMARY KEY IDENTITY (1,1),
    Product_ID INT,
    Quantity INT,
    FOREIGN KEY (Product_ID) REFERENCES Product(Product_ID)
);

-- Table: Invoice
CREATE TABLE Invoice (
    Invoice_ID INT PRIMARY KEY IDENTITY (1,1),
    Supplier_ID INT,
    Detail_ID INT,
    Date DATE,
    Amount FLOAT,
    FOREIGN KEY (Detail_ID) REFERENCES Product_Detail(Detail_ID),
    FOREIGN KEY (Supplier_ID) REFERENCES Supplier(Supplier_ID)
);
+