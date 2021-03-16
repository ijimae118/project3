using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace ServerLaundryOnline.Models
{
    public partial class EmployeeResourceDBContext : DbContext
    {
        public EmployeeResourceDBContext()
        {
        }

        public EmployeeResourceDBContext(DbContextOptions<EmployeeResourceDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TbInvoice> TbInvoices { get; set; }
        public virtual DbSet<TbPayslip> TbPayslips { get; set; }
        public virtual DbSet<TbService> TbServices { get; set; }
        public virtual DbSet<TbUser> TbUsers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(Startup.ConnectionString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TbInvoice>(entity =>
            {
                entity.ToTable("tbInvoice");

                entity.Property(e => e.Address).HasColumnType("text");

                entity.Property(e => e.Consignee)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Description).HasColumnType("text");

                entity.Property(e => e.Process)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Sdt)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.TbInvoices)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__tbInvoice__UserI__60A75C0F");
            });

            modelBuilder.Entity<TbPayslip>(entity =>
            {
                entity.ToTable("TbPayslip");

                entity.Property(e => e.Id)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.AcWorkDay12)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Atm4)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("ATM4");

                entity.Property(e => e.BasicSal13)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.BonusTet20)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("BonusTET20");

                entity.Property(e => e.CoefPosis8)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.CoefSal7)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Depart3)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.HeathInsur23)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.LiabFac9)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.MarSys10)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.MidSiMeal19)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.MonthlyUnFe25)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Name2)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.OverSal14)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.PhoneSup16)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SalIncrease18)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SalMonth5).HasColumnType("date");

                entity.Property(e => e.SociInsur22)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SumReceived27)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.SupPerDiem15)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.TotalDeductions26)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TotalFac11)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TotalIncome21)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.TradeAllow17)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.TransAtm28)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("TransATM28");

                entity.Property(e => e.UnemploInsur24)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TbService>(entity =>
            {
                entity.ToTable("tbService");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .HasColumnName("description");

                entity.Property(e => e.Image)
                    .HasColumnType("text")
                    .HasColumnName("image");

                entity.Property(e => e.Name)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Rating).HasColumnName("rating");

                entity.Property(e => e.Type)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("type");
            });

            modelBuilder.Entity<TbUser>(entity =>
            {
                entity.ToTable("tbUser");

                entity.Property(e => e.Address).HasColumnType("text");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Telephone)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
