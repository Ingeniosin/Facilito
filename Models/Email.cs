using Facilito.Models.Enums;

namespace Facilito.Models; 

public class Email {
    public int Id { get; set; }
    
    public virtual Cuenta Cuenta { get; set; }
    public int CuentaId { get; set; }
    
    public virtual TipoEmail TipoEmail { get; set; }
    public int TipoEmailId { get; set; }
    
    public DateTime FechaCreacion { get; set; }
    public DateTime FechaExpiracion { get; set; }
    
    public string Guid { get; set; } = System.Guid.NewGuid().ToString();
}