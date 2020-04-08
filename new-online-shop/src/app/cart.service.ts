import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Product } from './product';

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
  /** POST: add a new hero to the server */
  // addToCart(product: Product): Observable<Product> {
  //   return this.http.post<Product>(this.productsUrl, product, this.httpOptions).pipe(
  //     tap((newHero: Product) => 
  //     catchError(this.handleError<Product>('addHero')))
  //   );
  // }

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