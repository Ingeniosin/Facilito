using Facilito.Models.Enums;
using Microsoft.EntityFrameworkCore;

namespace Facilito.Models; 

public class ApplicationDbContext : DbContext {


    public ApplicationDbContext(DbContextOptions options) : base(options) {
    }
    
    public DbSet<Cuenta> Cuentas { get; set; }
    public DbSet<Categoria> Categorias { get; set; }
    public DbSet<Descuento> Descuentos { get; set; }
    public DbSet<Producto> Productos { get; set; }
    public DbSet<Usuario> Usuarios { get; set; }
    public DbSet<Email> Emails { get; set; }
    public DbSet<TipoEmail> TipoEmails { get; set; }

}