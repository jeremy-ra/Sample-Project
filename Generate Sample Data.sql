-------------------------------------------------
--Sample Data - Generate
-------------------------------------------------

INSERT INTO tblEmployee(Name, StreetAddress, City, ZipCode, Country, Department, Gender, ContactNumber, Designation, DateCreated)
VALUES
('Jeremy RA', '12 street avenue', 'Makati City', '1244', 'Philippines', 'IT', 'Male', '09201234567', 'Staff', GETDATE())

select * from tblEmployee


-------------------------------------------------

INSERT INTO tblCourier(CourierType, Description, DateCreated)
VALUES 
--('Next Day', 'Next Day Delivery', GETDATE())
--('Same Day Express', 'Same day express delivery', GETDATE())
('International', 'International courier', GETDATE())

select * from tblCourier

------------------------------------------------


INSERT INTO tblCustomer(Name, StreetAddress, City, ZipCode, Country, Gender, EmailAddress, ContactNumber, DateCreated)
VALUES
('John Doe', '555 Square avenue', 'Tennesse', '4433', 'USA', 'Male', '', '+09884343232', GETDATE())

select * from tblCustomer

-------------------------------------------------

INSERT INTO tblDelivery(Destination, Origin, CourierId, CourierType, DeliveryDate, ItemDetails, ReceiverName, ReceiverAddress,
ReceiverContactNumber, EmailAddress, SenderName, SenderAddress, SenderContactNumber, Rate, StaffName, ContactNumber, DeliveryStatus, DateCreated)
VALUES
('Australia', 'France', 11, 'International', GETDATE() + 11, 'Balikbayan Box', 'Johnny Bravo', 'Australia', '+99932323', NULL, 'James Bond', '0032 Australia', '+23213214'
, '$340', 'Delivery Man', '+6353525', 'In Placed', GETDATE())


-------------------------------------------------