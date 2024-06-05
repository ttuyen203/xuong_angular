import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  productService = inject(ProductService);
  router = inject(Router);

  addForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl(''),
    show: new FormControl(''),
  });

  handleSubmit() {
    this.productService.addProduct(this.addForm.value).subscribe(
      (data) => {
        window.alert('Thêm sản phẩm thành công');
        this.router.navigate(['/admin/products/list']);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
