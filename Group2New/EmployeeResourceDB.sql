create database EmployeeResourceDB
USE [EmployeeResourceDB]
GO
/****** Object:  Table [dbo].[TbPayslip]    Script Date: 2/19/2021 6:24:56 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TbPayslip](
	[Id] [varchar](10) NOT NULL,
	[Password] [varchar](30) NULL,
	[Name2] [varchar](50) NULL,
	[Depart3] [varchar](50) NULL,
	[ATM4] [varchar](50) NULL,
	[SalMonth5] [date] NULL,
	[Role6] [bit] NULL,
	[CoefSal7] [varchar](30) NULL,
	[CoefPosis8] [varchar](30) NULL,
	[LiabFac9] [varchar](30) NULL,
	[MarSys10] [varchar](30) NULL,
	[TotalFac11] [varchar](50) NULL,
	[AcWorkDay12] [varchar](30) NULL,
	[BasicSal13] [varchar](30) NULL,
	[OverSal14] [varchar](30) NULL,
	[SupPerDiem15] [varchar](30) NULL,
	[PhoneSup16] [varchar](30) NULL,
	[TradeAllow17] [varchar](30) NULL,
	[SalIncrease18] [varchar](30) NULL,
	[MidSiMeal19] [varchar](30) NULL,
	[BonusTET20] [varchar](30) NULL,
	[TotalIncome21] [varchar](50) NULL,
	[SociInsur22] [varchar](30) NULL,
	[HeathInsur23] [varchar](30) NULL,
	[UnemploInsur24] [varchar](30) NULL,
	[MonthlyUnFe25] [varchar](30) NULL,
	[TotalDeductions26] [varchar](50) NULL,
	[SumReceived27] [varchar](50) NULL,
	[TransATM28] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

INSERT [dbo].[TbPayslip] ([Id], [Password], [Name2], [Depart3], [ATM4], [SalMonth5], [Role6], [CoefSal7], [CoefPosis8], [LiabFac9], [MarSys10], [TotalFac11], [AcWorkDay12], [BasicSal13], [OverSal14], [SupPerDiem15], [PhoneSup16], [TradeAllow17], [SalIncrease18], [MidSiMeal19], [BonusTET20], [TotalIncome21], [SociInsur22], [HeathInsur23], [UnemploInsur24], [MonthlyUnFe25], [TotalDeductions26], [SumReceived27], [TransATM28]) VALUES (N'001', N'123', N'Tran Van M', N'HUM', N'160000000000', CAST(N'2021-01-30' AS Date), 1, N'5,8', N'0,4', N'0,1', N'0,1', N'6.4', N'23', N'7310933', N'300000', N'300000', N'200000', N'5000000', N'300000', N'730000', N'500000', N'9640991', N'584874.64', N'109663.995', N'73109.33', N'200000', N'967647.94', N'8673343', N'8673343')
INSERT [dbo].[TbPayslip] ([Id], [Password], [Name2], [Depart3], [ATM4], [SalMonth5], [Role6], [CoefSal7], [CoefPosis8], [LiabFac9], [MarSys10], [TotalFac11], [AcWorkDay12], [BasicSal13], [OverSal14], [SupPerDiem15], [PhoneSup16], [TradeAllow17], [SalIncrease18], [MidSiMeal19], [BonusTET20], [TotalIncome21], [SociInsur22], [HeathInsur23], [UnemploInsur24], [MonthlyUnFe25], [TotalDeductions26], [SumReceived27], [TransATM28]) VALUES (N'003', N'123', N'Vu Thi T', N'Laundry', N'16000000000', CAST(N'2021-01-30' AS Date), 0, N'5,9', N'0,9', N'0,7', N'0,6', N'8.1', N'23', N'9252901', N'300000', N'300000', N'200000', N'5000000', N'100000', N'200000', N'500000', N'10852960', N'740232.08', N'138793.51499999998', N'92529.01', N'200000', N'1171554.5', N'9681406', N'9681406')
INSERT [dbo].[TbPayslip] ([Id], [Password], [Name2], [Depart3], [ATM4], [SalMonth5], [Role6], [CoefSal7], [CoefPosis8], [LiabFac9], [MarSys10], [TotalFac11], [AcWorkDay12], [BasicSal13], [OverSal14], [SupPerDiem15], [PhoneSup16], [TradeAllow17], [SalIncrease18], [MidSiMeal19], [BonusTET20], [TotalIncome21], [SociInsur22], [HeathInsur23], [UnemploInsur24], [MonthlyUnFe25], [TotalDeductions26], [SumReceived27], [TransATM28]) VALUES (N'01111', N'123', N'Vu Tu Nam', N'Laundry', N'78990', CAST(N'2021-02-21' AS Date), 1, N'6,5', N'0,5', N'0,3', N'0,1', N'7.4', N'26', N'9555867', N'123', N'30000', N'300000', N'4000000', N'200000', N'800000', N'500000', N'11386055', N'764469.36', N'143338.005', N'95558.67', N'200000', N'1203366', N'10182689', N'10182689')
INSERT [dbo].[TbPayslip] ([Id], [Password], [Name2], [Depart3], [ATM4], [SalMonth5], [Role6], [CoefSal7], [CoefPosis8], [LiabFac9], [MarSys10], [TotalFac11], [AcWorkDay12], [BasicSal13], [OverSal14], [SupPerDiem15], [PhoneSup16], [TradeAllow17], [SalIncrease18], [MidSiMeal19], [BonusTET20], [TotalIncome21], [SociInsur22], [HeathInsur23], [UnemploInsur24], [MonthlyUnFe25], [TotalDeductions26], [SumReceived27], [TransATM28]) VALUES (N'088', N'123', N'Vu Tu Nam', N'Laundry', N'160099999999', CAST(N'2021-01-31' AS Date), 0, N'6,5', N'0,5', N'0,3', N'0,1', N'7.4', N'20', N'7350667', N'123', N'300000', N'300000', N'4000000', N'200000', N'800000', N'500000', N'9450855', N'588053.36', N'110260.00499999999', N'73506.67', N'200000', N'971820.06', N'8479035', N'8479035')
GO

CREATE TABLE [dbo].[tbInvoice](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NULL,
	[Consignee] [varchar](30) NULL,
	[Address] [text] NULL,
	[Sdt] [varchar](20) NULL,
	[Description] [text] NULL,
	[Process] [varchar](40) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

CREATE TABLE [dbo].[tbService](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](30) NULL,
	[image] [text] NULL,
	[description] [text] NULL,
	[type] [varchar](30) NULL,
	[price] [float] NULL,
	[rating] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

CREATE TABLE [dbo].[tbUser](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](30) NULL,
	[Password] [varchar](30) NULL,
	[Address] [text] NULL,
	[Telephone] [varchar](30) NULL,
	[Email] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[tbInvoice]  WITH CHECK ADD FOREIGN KEY([UserId])
REFERENCES [dbo].[tbUser] ([Id])
GO

Insert into tbService ([name],[image],[description],[type],price,rating) values
('Dry Cleaning & Ironed Laundry','dry-cleaning.svg','We dry clean or wash your items according to the care label. Clothes are ironed and returned on a hanger.','Piece',15,4),
('Iron Only','ironing.svg','In select locations we offer an iron only service for shirts and blouses. You wash and dry, we iron!','8 KG',20,4),
('Wash, Tumble Dry & Fold','wash.svg','We wash at 30C, tumble dry and then neatly fold your clothes. Perfect for everyday items.','Piece',10,5),
('Expert cleaning','expert-cleaning-teal.svg','We will clean your items at our nearest cleaning partner facility, then return them to you in as little as 48 hours.','8 KG',25,5);
Insert into tbUser (UserName,[Address],Telephone,Email) values
('Tô Nhuoc Nhi','12a Phú Chí Thang','01548121291','ToNhi@gmail.com')