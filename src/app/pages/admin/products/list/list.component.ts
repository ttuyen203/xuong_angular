import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../../../types/product';
import { ProductService } from '../../../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
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

  handleDelete(id: number) {
    if (window.confirm('Xác nhận xóa?')) {
      this.productService.deleteProduct(id).subscribe(
        () => {
          window.alert('Xóa thành công');
          this.loadProducts();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
