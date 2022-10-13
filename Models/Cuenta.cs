namespace Facilito.Models; 

public class Cuenta {
    
    public int Id { get; set; }
    public string Correo { get; set; }
    public string Contrasena { get; set; }
    public bool EsActivo { get; set; }
    
    public virtual Usuario Usuario { get; set; }
    
}