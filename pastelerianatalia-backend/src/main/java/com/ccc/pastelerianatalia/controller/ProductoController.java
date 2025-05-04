package com.ccc.pastelerianatalia.controller;
import com.ccc.pastelerianatalia.model.Producto;
import com.ccc.pastelerianatalia.service.ProductoService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/producto")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public ResponseEntity<List<Producto>> obtenerTodosLosProductos(){
        List<Producto> productoList = productoService.obtenerTodosLosProductos();
        return ResponseEntity.ok(productoList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Producto>> obtenerProductoPorId(@PathVariable Long id){
            try{
                Optional<Producto> productoOptional = productoService.obtenerProductoPorId(id);
                return ResponseEntity.ok(productoOptional);
            }catch (Exception e){
                return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).build();
            }
    }

    @PostMapping
    public ResponseEntity<Producto> agregarProducto(@RequestBody Producto producto){
        Producto productoCreado = productoService.agregarProducto(producto);
        return ResponseEntity.status(HttpStatus.CREATED).body(productoCreado);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Producto> editarProducto(@PathVariable Long id, @RequestBody Producto producto){
        Producto productoEditado = productoService.editarProducto(id, producto);
        return ResponseEntity.ok(productoEditado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto (@PathVariable Long id){
          productoService.eliminarProducto(id);
          return ResponseEntity.noContent().build();
    }
}
