import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiURL = 'https://api-xuong-angular.onrender.com/products';

  http = inject(HttpClient);

  getAll() {
    return this.http.get<Product[]>(this.apiURL);
  }

  getDetail(id: number) {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  addProduct(data: Product) {
    return this.http.post<Product>(this.apiURL, data);
  }

  editProduct(id: number, data: Product) {
    return this.http.put<Product>(`${this.apiURL}/${id}`, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.apiURL}/${id}`);
  }
}
