import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart{
   cartItems = [
    { name: 'Premium Handbag', price: 129.99, quantity: 2, image: 'assets/images/OIP.jpeg', selected: false },
    { name: 'Leather Wallet', price: 59.99, quantity: 1, image: 'https://via.placeholder.com/120', selected: false },
    { name: 'Sneakers', price: 89.50, quantity: 1, image: 'https://via.placeholder.com/120', selected: false }
  ];

  increaseQty(index: number) {
    this.cartItems[index].quantity++;
  }

  decreaseQty(index: number) {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  getTotal() {
    return this.cartItems
      .filter(item => item.selected)
      .reduce((sum, item) => sum + (item.price * item.quantity), 0)
      .toFixed(2);
  }
}
