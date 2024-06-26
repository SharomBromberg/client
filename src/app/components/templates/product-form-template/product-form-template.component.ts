import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/categories';
import { ImageFile } from 'src/app/interfaces/files';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form-template',
  templateUrl: './product-form-template.component.html',
  styleUrls: ['./product-form-template.component.scss']
})
export class ProductFormTemplateComponent implements OnInit {
  productForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    category: ['', Validators.required],
    files: [],
  });
  selectedImages: ImageFile[] = [];

  edit: boolean = false;
  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.productService.getProductById(params['id'])
        .subscribe(
          res => {
            console.log(res);
            //this.product = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }

    this.productService.getAllCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      err => console.error('Error al obtener las categorías', err)
    );

  }

  onSubmit(): void {
    const formData = new FormData();
    for (const key of Object.keys(this.productForm.value)) {
      if (key !== 'files') {
        formData.append(key, this.productForm.get(key)?.value || '');
      } else {
        this.selectedImages.forEach((img) => formData.append('files', img.blob, img.filename));
      }
    }
    this.productService.createProduct(formData).subscribe(
      res => {
        console.log('Sucess', res);
        this.resetForm();
      },
      err => {
        console.error('error', err)
      })

  }
  resetForm(): void {
    this.productForm.reset();
    this.selectedImages = [];
  }
  addSelectedImages(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const files = target.files;
      if (files) {
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target) {
              const blob = new Blob([e.target.result as ArrayBuffer], { type: files[i].type });
              this.selectedImages.push({ originalName: files[i].name, filename: files[i].name, blob });
            }
          };
          reader.readAsArrayBuffer(files[i]);
        }
      }
    }
  }
}
// updateProduct() {
//   if (this.product._id !== undefined) {
//     delete this.product.createdAt;
//     this.productService.updateProduct(this.product._id, this.product)
//       .subscribe(
//         res => {
//           console.log(res);
//           this.router.navigate(['/products'])
//         },
//         err => console.log(err)
//       );
//   }
//   else {
//     console.error("Product ID is undefined. Cannot update the product.");
//   }
// }
