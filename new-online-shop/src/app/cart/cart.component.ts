import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service'
import { Order } from '../order';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  order:Order;
  
  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  clearCart(){
    this.items=this.cartService.clearCart();
  }
  purchase(): void {
    
    window.alert('Thanks for your order!!!');
  }

}
