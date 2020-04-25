import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService} from '../cart.service'
import { Shipping } from '../shipping';
import { Order, User,ProductModel} from '../models'
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user: User;
  items;
  orderedItems=[]
  
  constructor(
    private cartService: CartService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.getUser();
  }

  clearCart(){
    this.items=this.cartService.clearCart();
    this.orderedItems=this.cartService.clearCart();
  }

  purchase(): void {
    
  }

  getUser(){
    this.productService.getUser()
    .subscribe( user=>this.user=user);
    
  }
  
  getUserOrders(): void{
    this.productService.getUserOrders(this.user.id)
    .subscribe( orderedItems=>{
      for (var value of orderedItems) {
        this.getProduct(value.id);
      }
    });
    
    }
  getProduct(id): void{
    this.productService.getProduct(id).subscribe(product=>{
      this.orderedItems.push(product)
    })
  }
}



