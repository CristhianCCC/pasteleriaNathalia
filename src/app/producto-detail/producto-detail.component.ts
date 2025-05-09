import { Component, OnInit } from '@angular/core';
import { Product } from '../types';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './producto-detail.component.html',
  styleUrl: './producto-detail.component.css'
})
export class ProductoDetailComponent implements OnInit {

  product: Product = {} as Product;
  total: number = 0;

  // Inyectando ActivatedRoute y ProductService
  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  /*definiendo que va a ser lo primero que se va a cargar en el componente*/
  ngOnInit() {
    /*creando una constandte que va a tomar y mapear el id*/
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    /*inyectando el metodo obtenerproductoporid del product service y subscribiendolo a la variable product*/
    this.productService.obtenerProductoPorId(id).subscribe(data => {
      this.product = data;
    });

  }


  /*Definiendo el formulario*/
  pedidoForm= new FormGroup({
    cantidad: new FormControl(0, Validators.required),
    tamaños: new FormControl('', Validators.required),
  })



  totalAPagar() {
    /*encapsulando la cantidad, los tañaos y el precio en variables para hacerlo mas legible*/
    const cantidad = this.pedidoForm.get('cantidad')?.value ?? 0;
    const tamano = this.pedidoForm.get('tamaños')?.value;
    const precioBase = this.product.precio;

    /*validacion para que la cantidad no pueda ser mayor a 3*/
    if (cantidad > 5) {
      alert('La cantidad no puede ser mayor a 5');
      this.total = 0;
      return;
    }
    /*logica para que dependiendo del tamaño, el precio se incremente*/
    let precioFinalUnitario = precioBase;
    switch (tamano) {
      case 'mediano':
        precioFinalUnitario *= 1.25;
        break;
      case 'grande':
        precioFinalUnitario *= 1.5;
        break;
      case 'pequeño':
        // Precio queda igual
        break;
      default:
        alert('Tamaño inválido');
        this.total = 0;
        return;
    }
    this.total = precioFinalUnitario * cantidad;
    // Aplicar descuento si la cantidad es igual o mayor a 3
    if (cantidad >= 3) {
      this.total -= this.total * 0.20; // 20% de descuento
    }
  }
}
