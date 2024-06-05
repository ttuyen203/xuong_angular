import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import { Product } from '../../../../types/product';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  productId!: number;
  product!: Product;

  ngOnInit(): void {
    this.route.params.subscribe(
      (param) => {
        this.productService.getDetail(param['id']).subscribe(
          (data) => {
            this.product = data;
            console.log(data);
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
