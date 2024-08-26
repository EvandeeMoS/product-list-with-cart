import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, CurrencyPipe } from '@angular/common';
import { ProductService } from './product.service';
import { Product } from './product.type';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, CurrencyPipe, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() listTitle: string = '';
  productList: Product[] = [];

  constructor(private productService: ProductService) {
    this.productList = this.productService.getAllProducts();
  }

  @Output() incrementItemCartEmitter = new EventEmitter<number>();

  incrementItemCart() {
    this.incrementItemCartEmitter.emit()
  }
}
