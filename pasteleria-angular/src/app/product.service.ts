import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  baseUrl="http://localhost:8080";

  constructor(private http: HttpClient) { }


  product: Product[] = [];


  public obtenerProductos(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}/producto`)
  }

  public crearProducto(producto: Product):Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}/crear`, producto);
  }

  public editarProducto(producto: Product): Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/editar`, producto);
  }

  public eliminarProducto(id: Product['id']): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/eliminar/${id}`);
  }
}
