package com.ccc.pastelerianatalia.service;
import com.ccc.pastelerianatalia.model.Producto;
import java.util.List;
import java.util.Optional;

public interface ProductoService {

 List<Producto> obtenerTodosLosProductos();

 Producto agregarProducto(Producto producto);

 Optional<Producto> obtenerProductoPorId (Long id);

 Producto editarProducto (Long id, Producto producto);

 void eliminarProducto (Long id);

}
