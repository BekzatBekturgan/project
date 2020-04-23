import { Injectable } from '@angular/core';
import { products } from './products';
import { Products } from './productinterface';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Observable<Products[]>{
    return of (products);
  }
}
