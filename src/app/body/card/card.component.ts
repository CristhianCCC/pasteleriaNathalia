import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../types';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


/*indicandole a card component que sera lo primero que se va a cargar*/
export class CardComponent implements OnInit{


  /*logica para indicar lo primero que se va a cargar*/
  ngOnInit()
  { this.obtenerProductos(); 

  }

  public productos: Product[] = []  

constructor (private productService: ProductService){}


  public obtenerProductos (): void {
    this.productService.obtenerProductos().subscribe (
      (response: Product[]) => {
        return this.productos = response;
      }, (error: HttpErrorResponse) => {
        alert (error.message);
      }
    )
  }


}
