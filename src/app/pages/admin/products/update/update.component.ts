import { Component, inject } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../../types/product';
import { error } from 'console';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  product!: Product;
  productId!: number;

  ngOnInit(): void {
    this.route.params.subscribe(
      (param) => {
        this.productService.getDetail(param['id']).subscribe(
          (data) => {
            this.productId = param['id'];
            //Hiển thị trong form
            this.updateForm.patchValue(data);
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

  updateForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl(''),
    show: new FormControl(''),
  });

  handleSubmit() {
    this.productService
      .editProduct(this.productId, this.updateForm.value)
      .subscribe(
        (data) => {
          window.alert('Sửa sản phẩm thành công');
          this.router.navigate(['/admin/products/list']);
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
