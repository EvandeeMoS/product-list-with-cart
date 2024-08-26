import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() imageUrl: string = '';
  @Input()category: string = '';
  @Input()name: string = '';
  @Input()price: number = 0;
  selected: boolean = false;
  quantity: number = 0;

  addItemToCart() {
    if (this.quantity == 0) {
      this.selected = true;
    }
    this.quantity += 1;
  }

  decrementQuantity() {
    this.quantity -= 1;
    if (this.quantity <= 0) {
      this.quantity = 0;
      this.selected = false;
    }
  }
}
