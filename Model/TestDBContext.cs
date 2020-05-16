using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CourierManagementApp.Model
{
    public partial class TestDBContext : DbContext
    {
        public TestDBContext()
        {
        }

        public TestDBContext(DbContextOptions<TestDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblCourier> TblCourier { get; set; }
        public virtual DbSet<TblCustomer> TblCustomer { get; set; }
        public virtual DbSet<TblDelivery> TblDelivery { get; set; }
        public virtual DbSet<TblEmployee> TblEmployee { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                //update connection string below for(Server, User ID and Password).
                optionsBuilder.UseSqlServer("Server=ServerName;Database=TestDB;User ID=youruserid;Password=yourPassword;PersistSecurityInfo=false;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.3-servicing-35854");

            modelBuilder.Entity<TblCourier>(entity =>
            {
                entity.HasKey(e => e.CourierId)
                    .HasName("PK__tblCouri__CDAE76F603034CCF");

                entity.ToTable("tblCourier");

                entity.Property(e => e.CourierId).HasColumnName("CourierID");

                entity.Property(e => e.CourierType)
                    .IsRequired()
                    .HasMaxLength(150);

                entity.Property(e => e.DateCreated).HasColumnType("datetime");

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<TblCustomer>(entity =>
            {
                entity.HasKey(e => e.CustomerId)
                    .HasName("PK__tblCusto__A4AE64D8B35111DC");

                entity.ToTable("tblCustomer");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.ContactNumber)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.DateCreated).HasColumnType("datetime");

                entity.Property(e => e.EmailAddress).HasMaxLength(100);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.StreetAddress)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.ZipCode)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<TblDelivery>(entity =>
            {
                entity.HasKey(e => e.DeliveryId)
                    .HasName("PK__tblDeliv__626D8FCE57C9DD4F");

                entity.ToTable("tblDelivery");

                entity.Property(e => e.ContactNumber)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CourierType)
                    .IsRequired()
                    .HasMaxLength(150);

                entity.Property(e => e.DateCreated).HasColumnType("datetime");

                entity.Property(e => e.DeliveryDate).HasColumnType("datetime");

                entity.Property(e => e.DeliveryStatus).HasMaxLength(50);

                entity.Property(e => e.Destination)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.EmailAddress).HasMaxLength(100);

                entity.Property(e => e.ItemDetails).IsRequired();

                entity.Property(e => e.Origin)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.Rate).HasMaxLength(100);

                entity.Property(e => e.ReceiverAddress)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.ReceiverContactNumber)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ReceiverName)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.SenderAddress)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.SenderContactNumber)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.SenderName)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.StaffName)
                    .IsRequired()
                    .HasMaxLength(250);
            });

            modelBuilder.Entity<TblEmployee>(entity =>
            {
                entity.HasKey(e => e.EmployeeId)
                    .HasName("PK__tblEmplo__7AD04F11DCCAC4D2");

                entity.ToTable("tblEmployee");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.ContactNumber)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.DateCreated).HasColumnType("datetime");

                entity.Property(e => e.Department)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Designation)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Gender)
                    .IsRequired()
                    .HasMaxLength(6)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.StreetAddress)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.ZipCode)
                    .IsRequired()
                    .HasMaxLength(100);
            });
        }
    }
}
