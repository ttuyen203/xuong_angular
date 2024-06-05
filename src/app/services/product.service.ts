import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiURL = 'https://api-xuong-angular.onrender.com/products';

  constructor(private http: HttpClient) {}

  //getAll
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL);
  }
}
