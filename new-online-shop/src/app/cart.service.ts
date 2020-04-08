import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    items = [];
  constructor(private http:HttpClient) {}

  addToCart(product) {
    this.items.push(product);
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  deleteFromCart(product){
    this.items.splice(product,1); 
  }
}