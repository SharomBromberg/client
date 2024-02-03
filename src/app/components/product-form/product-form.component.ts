import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../interfaces/categories';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    category: { _id: '', name: '' },
    price: 0,
    imagesURL: ''

  };
  edit: boolean = false;
  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params['id']) {
      this.productService.getProductById(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.product = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }

    this.productService.getAllCategories().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      (error: any) => console.error('Error al obtener las categorías', error)
    );
  }

  submitProduct() {
    this.productService.createProduct(this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
  }

  updateProduct() {
    if (this.product._id !== undefined) {
      delete this.product.createdAt;
      this.productService.updateProduct(this.product._id, this.product)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/products'])
          },
          err => console.log(err)
        );
    }
    else {
      console.error("Product ID is undefined. Cannot update the product.");
    }
  }
}