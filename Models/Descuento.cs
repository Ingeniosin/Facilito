namespace Facilito.Models; 

public class Descuento {
    
    public int Id { get; set; }
    
    public virtual Producto Producto { get; set; }
    public int ProductoId { get; set; }
    
    public float Porcentaje { get; set; }
    
    public DateTime FechaInicio { get; set; }
    public DateTime FechaFin { get; set; }
    
}