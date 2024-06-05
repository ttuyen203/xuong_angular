import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  //getAll
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }
}
