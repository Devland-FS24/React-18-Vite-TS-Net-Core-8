using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebAPIMall.Models;

public partial class MalldbContext : DbContext
{
    public MalldbContext()
    {
    }

    public MalldbContext(DbContextOptions<MalldbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Department> Departments { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Department>(entity =>
        {
            entity.HasKey(e => e.IdDeparment);

            entity.ToTable("Department");

            entity.Property(e => e.IdDeparment).HasColumnName("idDeparment");
            entity.Property(e => e.Description).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
