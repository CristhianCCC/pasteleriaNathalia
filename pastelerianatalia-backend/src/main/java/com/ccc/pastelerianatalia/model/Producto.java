package com.ccc.pastelerianatalia.model;
import com.ccc.pastelerianatalia.model.enums.ProductoTamanos;
import jakarta.persistence.*;

@Entity
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    private String descripcion;

    private Double precio;

    private String imageUrl;

    private String ingredientes;

    private Integer cantidad;

    @Enumerated(EnumType.STRING)
    private ProductoTamanos tamanos;


    public Producto(Long id, String nombre, String descripcion, Double precio, String imageUrl, String ingredientes, ProductoTamanos productoTamanos, Integer cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imageUrl=imageUrl;
        this.ingredientes = ingredientes;
        this.cantidad = cantidad;
        this.tamanos = productoTamanos;
    }

    public Producto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(String ingredientes) {
        this.ingredientes = ingredientes;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public ProductoTamanos getTamanos() {
        return tamanos;
    }

    public void setTamanos(ProductoTamanos tamanos) {
        this.tamanos = tamanos;
    }
}
