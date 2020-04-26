import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService} from '../cart.service'
import { Shipping } from '../shipping';
import { Order, User,ProductModel} from '../models'
import { Product } from '../product';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  user: User;
  items;
  orderedItems=[]

  cnt: number;
  product: ProductModel
  order: Order
  
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
    this.cnt = this.cartService.getItems().length
    for(let i = 0; i < this.cnt; i++){
      const ord: Order = {
        id: this.items[i].id,
        user: this.user.id,
        items: this.items[i].id
      }
      this.productService.postOrders(this.user.id, ord).subscribe(
        res=>{
          this.order = res
        }
      )
    }
    alert('The products was added the list of orders')
    this.items = this.cartService.clearCart();
  }

  getUser(){
    this.productService.getUser()
    .subscribe( user=>this.user=user);
    
  }
  
  getUserOrders(): void{
    this.orderedItems = this.cartService.clearCart()
    this.productService.getUserOrders(this.user.id)
    .subscribe( orderedItems=>{
      for (var value of orderedItems) {
        this.getProduct(value.items);
      }
    });
    
    }
  getProduct(id): void{
    this.productService.getProduct(id).subscribe(product=>{
      this.orderedItems.push(product)
    })
  }
}



