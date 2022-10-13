namespace Facilito.Models; 

public class Producto {
    
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Descripcion { get; set; }
    public float Valoracion { get; set; }
    public string Imagen { get; set; }
    public double Precio { get; set; }
    
    public virtual List<Categoria> Categorias { get; set; }
    
    public virtual List<Descuento> Descuentos { get; set; }
    

}