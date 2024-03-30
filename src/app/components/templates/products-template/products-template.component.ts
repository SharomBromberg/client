import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products-template',
  templateUrl: './products-template.component.html',
  styleUrls: ['./products-template.component.scss']
})
export class ProductsTemplateComponent {

  selectedProduct: Product | null = null;
  products: Product[] = [];


  @Input() buttonText: string = '';
  @Input() customStyle: string = '';
  @Output() buttonClick = new EventEmitter<void>();


  constructor(private productService: ProductService, private route: ActivatedRoute, config: NgbCarouselConfig) { }

  // ngAfterViewInit() {
  //   const swiper = new Swiper('.swiper-container', {
  //     loop: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     allowTouchMove: true // Habilitar el deslizamiento táctil
  //   });
  // }

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
