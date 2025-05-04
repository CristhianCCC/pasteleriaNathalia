package com.ccc.pastelerianatalia.service.serviceImpl;
import com.ccc.pastelerianatalia.model.Producto;
import com.ccc.pastelerianatalia.repository.ProductoRepository;
import com.ccc.pastelerianatalia.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoServiceImpl implements ProductoService {

    @Autowired
    private ProductoRepository productoRepository;


    @Override
    public List<Producto> obtenerTodosLosProductos() {
        return productoRepository.findAll();
    }

    @Override
    public Producto agregarProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Optional<Producto> obtenerProductoPorId(Long id) {
        return Optional.ofNullable(productoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("no se encontro el id " + id + "verifique de nuevo")));
    }

    @Override
    public Producto editarProducto(Long id, Producto producto) {
        return productoRepository.findById(id).map(productoEncontrado -> {
            productoEncontrado.setNombre(producto.getNombre());
            productoEncontrado.setDescripcion(producto.getDescripcion());
            productoEncontrado.setPrecio(producto.getPrecio());
            productoEncontrado.setImageUrl(producto.getImageUrl());
            productoEncontrado.setIngredientes(producto.getIngredientes());
            productoEncontrado.setTamanos(producto.getTamanos());
            return productoRepository.save(productoEncontrado);
        }).orElseThrow(() -> new RuntimeException("producto con el id" + id + " no fue encontrado"));
    }

    @Override
    public void eliminarProducto(Long id) {
        productoRepository.deleteById(id);
    }
}
