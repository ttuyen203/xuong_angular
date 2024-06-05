import { Component, inject } from '@angular/core';
import { Product } from '../../../types/product';
import { ProductService } from '../../../services/product.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  products: Product[] = [];

  productService = inject(ProductService);
  router = inject(Router);

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAll().subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
