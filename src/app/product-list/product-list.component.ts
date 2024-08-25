import { Component, Input } from '@angular/core';
import { NgFor, CurrencyPipe } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from './product.type';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ NgFor, CurrencyPipe ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() listTitle: string = '';
  productList: Product[] = [];

  constructor(private productService: ProductService) {
    this.productList = this.productService.getAllProducts();
  }
}
