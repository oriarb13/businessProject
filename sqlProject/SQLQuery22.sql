--create database warehouse2
CREATE TABLE Items (
    Code  varchar(255)  NOT NULL PRIMARY KEY,
    [Desc] varchar(255),
    UnitPrice int,
    Available int,
    Saved int,
	Waiting int,
	Subscript int,
	Freq varchar(255),
	SuppDate date,
	OrderPercnt decimal(5,2) 
);
CREATE TABLE Numbers (
 LastOrder int,
 LastSubsc   int,
 LastStock int,
 LastReciept int,
 LastInvoice int
);


CREATE TABLE Profiles (
 Profile varchar(255)  not null primary key  ,
 [Act]   varchar(255)
);

CREATE TABLE Users (
 UserName varchar(255),
 Profile varchar(255) foreign key references profiles (profile)
);
CREATE TABLE DeliveryFees (
 Delivery varchar(255) not null primary key,
 [Desc] varchar(255),
 DelFee int
);

CREATE TABLE Discounts (
 CustType varchar(255) not null primary key,
 Discnt varchar(255),
);
CREATE TABLE Customers (
 CustID int not null primary key,
 custtype varchar(255) foreign key references Discounts (custtype),
 CustStatus varchar(255) ,
 FreezCode varchar(255),
 OverCount int,
 CustName varchar(255),
 DelivAddrss varchar(255),
 MailAddrss varchar(255),
 CreditCard int
);

CREATE TABLE ExOrders (
    OrderNo int  NOT NULL PRIMARY KEY,
	[Date] date,
	CustID int foreign key references  Customers (CustID),
	Code  varchar(255) foreign key references items (code),
	Quant int,
	Delivery varchar(255) foreign key references DeliveryFees (Delivery),
	Address varchar(255),
	Status varchar(255),
	SuppDate date
);
CREATE TABLE Invoices (
    InvNo int  NOT NULL PRIMARY KEY,
	code  varchar(255) foreign key references items (code),
	[Date] date,
	OrderNo int foreign key references ExOrders (OrderNo),
	UnitDesc varchar(255),
	NoUnits int,
	UnitPrice int,
	TotAmount int
);

CREATE TABLE StockOrder(
 OrderNo int  not null foreign key references ExOrders (OrderNo),
 StockDate date,
 Code  varchar(255) foreign key references items (Code),
 [Descr] varchar(255),
 Quant int
);

CREATE TABLE Receipt(
 RecNo int  not null primary key,
 PymtDate date,
 InvNo int not null foreign key references Invoices (InvNo ),
 OrderNo int not null foreign key references ExOrders (OrderNo),
 PaidAmt int ,
);


CREATE TABLE Accounting(
 [date] date,
 amount int,
 CrdtDebt int,
 InvNo int not null foreign key references Invoices(InvNo),
 OrderNo int not null foreign key references ExOrders (OrderNo),
 RecNo int  not null foreign key references Receipt (RecNo) ,
);


CREATE TABLE Subscription (
    OrderNo int  NOT NULL foreign key references ExOrders (OrderNo) ,
	Status  varchar(255),
	CustID int foreign key references Customers (CustID),
	Code varchar(255) foreign key references items (Code),
	Quant int,
    freq varchar(255),
	Delivery  varchar(255) foreign key references DeliveryFees (Delivery),
	NextOrder date,
	Expiration date
);




INSERT INTO Items 
VALUES
    ('101', 'Office Chair', 100, 50, 10, 5, 20, 30, '2024-08-01', 10),
    ('102', 'Desk Lamp', 200, 30, 15, 10, 25, 40, '2024-08-05', 15),
    ('103', 'Monitor Stand', 150, 20, 5, 2, 10, 20, '2024-08-10', 20),
    ('104', 'Ergonomic Keyboard', 250, 40, 20, 8, 30, 25, '2024-08-15', 25),
    ('105', 'Wireless Mouse', 180, 60, 30, 12, 15, 35, '2024-08-20', 18);


	select *
	from Items




	insert into DeliveryFees
values
('1','slow',20),
('3','fast',100),
('2','normal',50)



	INSERT INTO Profiles([Profile], [Act])
VALUES 
    ('Office', '10 times per day'),
    ('Sales', 'Full access'),
    ('Support', 'Read-only'),
    ('Management', 'Unlimited access')



	insert into Users
  values ('maor smueli' , 'Management'),
  ('aviel moshe', 'Sales')

  insert into Numbers
values(2005,1000,50,4005,3005)

insert into Discounts
values ('1',10)
insert into Discounts
values ('2',25)


alter table Accounting
  alter column CrdtDebt varchar(255)





	INSERT INTO Customers (CustID, CustType, CustStatus, FreezCode, OverCount, CustName, DelivAddrss, MailAddrss, CreditCard)
VALUES
    (1, '1', 'ACT', 'None', 0, 'John Doe', '123 Main St, Springfield', 'john.doe@example.com', 12347890),
    (2, '2', 'FRZ', '1', 2, 'Jane Smith', '456 Elm St, Springfield', 'jane.smith@example.com', 23458901),
    (3, '1', 'DEL', 'None', 0, 'Alice Johnson', '789 Oak St, Springfield', NULL, 34789012),
    (4, '2', 'ACT', '2', 1, 'Bob Brown', '101 Pine St, Springfield', 'bob.brown@example.com', 45789123),
    (5, '1', 'FRZ', '1', 0, 'Charlie White', '202 Cedar St, Springfield', 'charlie.white@example.com', 5681234);



  INSERT INTO Receipt (RecNo, PymtDate, InvNo, OrderNo, PaidAmt) 
VALUES
    (5001, '2024-08-02', 3001, 2001, 200),
    (5002, '2024-08-06', 3002, 2002, 200),
    (5003, '2024-08-11', 3003, 2003, 750),
    (5004, '2024-08-16', 3004, 2004, 750),
    (5005, '2024-08-21', 3005, 2005, 720);



	INSERT INTO Subscription ( OrderNo, CustID, Code, [Status], quant, Freq, Delivery, NextOrder, Expiration)  
VALUES
    (2001, 1, '101', 'Active', 2, 'Monthly', '1', '2024-09-01', '2025-08-01'),
    ( 2002, 2,'102', 'Active', 1, 'Quarterly', '2', '2024-11-05', '2025-11-05'),
    ( 2003, 3, '103', 'Expired', 5, 'Annually', '3', '2024-08-10', '2024-08-10'),
    ( 2004, 4, '104', 'Active', 3, 'Bi-Weekly', '1', '2024-08-16', '2025-08-16'),
    (2005, 5, '105', 'Pending', 4, 'Monthly', '2', '2024-09-20', '2025-09-20');







INSERT INTO Accounting (RecNo, Amount, CrdtDebt, InvNo, OrderNo, [Date])
VALUES
    (5001, 200, 'Credit', 3001, 2001, '2024-08-03'),
    (5002, 200, 'Credit', 3002, 2002, '2024-08-07'),
    (5003, 750, 'Credit', 3003, 2003, '2024-08-12'),
    (5004, 750, 'Credit', 3004, 2004, '2024-08-17'),
    (5005, 720, 'Debit', 3005, 2005, '2024-08-22');




INSERT INTO StockOrder (OrderNo, StockDate, Code, [Descr], Quant)             
VALUES
    (2001, '2024-08-01', '101', 'Initial stock order for new office chairs', 100),
    (2002, '2024-08-05', '102', 'Order of desk lamps for the new office', 50),
    (2003, '2024-08-10', '103', 'Replenishment of monitor stands', 30),
    (2004, '2024-08-15', '104', 'Order of ergonomic keyboards', 40),
    (2005, '2024-08-20', '105', 'Stock up on wireless mice', 60);



	insert into exOrders (OrderNo, [date], CustID, Code, quant, delivery, [address], [status], suppDate)   
values
(2001, '2024-08-01', 1, '101', 2, '1', '123 Main St Springfield', 'Open', '2024-08-01'),
    (2002, '2024-08-05', 2, '102', 1, '2', '456 Elm St Springfield', 'In Progress', '2024-08-05'),
    (2003, '2024-08-10', 3, '103', 5, '3', '789 Oak St Springfield', 'Closed', '2024-08-10'),
    (2004, '2024-08-15', 4, '104', 3, '1', '101 Pine St Springfield', 'Reserved In Progress', '2024-08-15'),
    (2005, '2024-08-20', 5, '105', 4, '3', '202 Cedar St Springfield', 'Not Shipped', '2024-08-20');




	INSERT INTO Invoices (InvNo, OrderNo, [Date], UnitDesc, NoUnits, UnitPrice, TotAmount)
VALUES
    (3001, 2001, '2024-08-02', 'Office Chair', 2, 100, 200),
    (3002, 2002, '2024-08-06', 'Desk Lamp', 1, 200, 200),
    (3003, 2003, '2024-08-11', 'Monitor Stand', 5, 150, 750),
    (3004, 2004, '2024-08-16', 'Ergonomic Keyboard', 3, 250, 750),
    (3005, 2005, '2024-08-21', 'Wireless Mouse', 4, 180, 720);










select *
from Items



	---6.1

	create PROCEDURE specificCode (@code1 varchar(255)) 
	     as
         if @code1 is null
	       select * from Items 
	       order by Code
		 else
		   select * from Items where Code = @code1
	       order by Code
		 go


		 EXEC specificCode @code1= 101


----6.2
    create procedure  getOrders1(@status1 varchar(255),@date1 date,@date2 date, @order1 int)
	  as
	  select E.[date] ,E.code , Quant ,Status,TotAmount
	  from ExOrders e join Invoices i
	  on e.OrderNo = i.OrderNo
	  where Status = @status1 or E.[Date] between @date1 and @date2 or e.OrderNo = @order1
	  order by E.[Date]
	  go


	  EXEC getOrders1 @status1 = 'open' , @date1 ='1995-01-01',@date2=  '2020-01-01' ,@order1= 2001


	  select *
	  from ExOrders


--6.3

create procedure  getcustomerbyid(@custid1 int )
	  as
	  select c.CustID , CustName,Status,OrderNo,CustStatus,code,Quant,freq
	  from Customers c join Subscription s
	  on c.CustID = s.CustID
	  where s.CustID = @custid1
	  go

	  exec getcustomerbyid @custid1=1 
----------------------------------------------------------------------------------------------------
--6.4
CREATE procedure profit2 (@date1 date)  
 as
  SELECT a.OrderNo,RecNo,a.Date,amount,
  CASE WHEN a.CrdtDebt = 'credit' THEN a.Amount ELSE NULL END AS Income,
  CASE WHEN a.CrdtDebt = 'debit' THEN a.Amount ELSE NULL END AS Expense
  FROM Accounting a
  WHERE  a.Date > = @Date1
  ORDER BY a.Date;

  SELECT 
    SUM(CASE WHEN CrdtDebt = 'credit' THEN Amount ELSE 0 END) AS TotalIncome,
    SUM(CASE WHEN CrdtDebt = 'debit' THEN Amount ELSE 0 END) AS TotalExpense,
    SUM(CASE WHEN CrdtDebt = 'credit' THEN Amount ELSE 0 END) 
     - SUM(CASE WHEN CrdtDebt = 'debit' THEN Amount ELSE 0 END) AS Balance
  FROM Accounting
  WHERE Date >= @Date1;
   
 go

exec profit1 @date1 ='2020-01-01'

----------------------------------------------------------------------------------------------------
--6.5
create view  [checkExec2]
	  as
	  select e.date,SuppDate, i.TotAmount ,Status
	  from ExOrders e join Invoices i
	  on e.OrderNo = i.OrderNo
	  where Status = 'not shipped' or  Status = 'not realized'
  
	  select *
	  from checkExec2
	  order by SuppDate
	  