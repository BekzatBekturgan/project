import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Shipping } from '../shipping';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  model = new Shipping('', '', '', '', []);
  
  submitted = false;
  
  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  clearCart(){
    this.items=this.cartService.clearCart();
  }
  purchase(): void {
    this.submitted = true; 
  }
}
