
-------------------------------------------------------------------
--RUN ONLY ONCE
--DB CREATION AND TABLE
--------------------------------------------------------------------
--Create Database--
--1. CREATE DATABASE TestDB2; 


--2 .Create Tables--

	USE TestDB2;

	CREATE TABLE tblEmployee (      
	EmployeeId int IDENTITY(1,1) NOT NULL PRIMARY KEY,      
	Name nvarchar(100) NOT NULL ,      
	StreetAddress nvarchar(250) NOT NULL,      
	City nvarchar(100) NOT NULL,
	ZipCode nvarchar(100) NOT NULL,    
	Country nvarchar(250) NOT NULL,        
	Department varchar(20) NOT NULL ,      
	Gender varchar(6) NOT NULL,
	ContactNumber nvarchar(50) NOT NULL,   
	Designation nvarchar(100) NOT NULL,
	DateCreated datetime NULL
	)      
	GO    

	CREATE TABLE tblCustomer (      
	CustomerId int IDENTITY(1,1) NOT NULL PRIMARY KEY,      
	Name nvarchar(100) NOT NULL ,      
	StreetAddress nvarchar(250) NOT NULL,      
	City nvarchar(100) NOT NULL,
	ZipCode nvarchar(100) NOT NULL,    
	Country nvarchar(250) NOT NULL,    
	Gender varchar(6) NOT NULL,
	ContactNumber nvarchar(50) NOT NULL,   
	EmailAddress nvarchar(100) NULL,
	DateCreated datetime  
	)      
	GO


	CREATE TABLE tblDelivery (
	DeliveryId int IDENTITY(1,1) NOT NULL PRIMARY KEY,    
	Destination nvarchar(500) NOT NULL,
	Origin nvarchar(500) NOT NULL,
	CourierId int NULL,
	CourierType nvarchar(150) NOT NULL,
	DeliveryDate datetime NULL,
	ItemDetails nvarchar(MAX) NOT NULL,
	ReceiverId int NULL,
	ReceiverName nvarchar(250) NOT NULL,
	ReceiverAddress nvarchar(250) NOT NULL,
	ReceiverContactNumber nvarchar(50) NOT NULL,
	EmailAddress nvarchar(100) NULL,
	SenderId int NULL,
	SenderName nvarchar(250) NOT NULL,
	SenderAddress nvarchar(250) NOT NULL,
	SenderContactNumber nvarchar(50) NOT NULL,
	Rate nvarchar(100) NULL,
	StaffName nvarchar(250) NOT NULL,
	ContactNumber nvarchar(50) NOT NULL,
	DeliveryStatus nvarchar(50) NULL,
	DateCreated DateTime NULL
	)
	GO

	CREATE TABLE tblCourier (
	CourierID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	CourierType nvarchar(150) NOT NULL,
	Description nvarchar(250) NOT NULL,
	DateCreated DateTime NULL 
	)
	GO

