import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';
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

  public obtenerProductoPorId(id: Product['id']): Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/producto/${id}`);
  }

  public crearProducto(producto: Product):Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}`, producto);
  }

  public editarProducto(producto: Product): Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}`, producto);
  }

  public eliminarProducto(id: Product['id']): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
