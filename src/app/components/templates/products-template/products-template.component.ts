import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { Category } from '../../../interfaces/categories';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-template',
  templateUrl: './products-template.component.html',
  styleUrl: './products-template.component.scss'
})
export class ProductsTemplateComponent {


  products: Product[] = []; // Array de productos
  selectedProduct: Product | null = null;

  constructor(private router: Router) { }

  showProductDetails(product: Product) {
    this.selectedProduct = product;
    this.router.navigate(['/product', product._id]);
  }
}
