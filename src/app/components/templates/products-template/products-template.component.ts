import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-template',
  templateUrl: './products-template.component.html',
  styleUrl: './products-template.component.scss'
})
export class ProductsTemplateComponent {

  selectedProduct: Product | null = null;
  products: Product[] = [];


  constructor(private productService: ProductService, private route: ActivatedRoute) { }


  ngOnInit(): void {

    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId)
        .subscribe(
          res => {
            this.selectedProduct = res;
          },
          err => console.error('Error loading product', err)
        );
    } else {
      console.error('No product ID provided');
    }
  }
}
