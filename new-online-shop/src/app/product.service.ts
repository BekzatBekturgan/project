import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './products';
import { Product } from './product';
import { Order } from './order'
import { Category } from './category';
import { CATEGORIES } from './categories';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }
  private productsUrl = 'api/products';  
  private categoriesUrl = 'api/categories';  

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      catchError(this.handleError<Product[]>('getProducts', []))
    );
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    ); 
  }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

  getCategories(id: number): Observable<Category> {
    const url = `${this.categoriesUrl}/${id}`;
    return this.http.get<Category>(url).pipe(
    catchError(this.handleError<Category>(`getCategory id=${id}`))
  );
  }
 

  getProductofC(categoryId: number): Observable<Product[]> {
    // return this.http.get<Product[]>(this.productsUrl)
    // .pipe(
    //   catchError(this.handleError<Product[]>(`getProduct id=${categoryId}`))
    // );
    return of(PRODUCTS.filter(product => product.categoryId === categoryId));
  }

  // purchase (order: Order): Observable<Order> {
    
  // }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    console.error(error); 

    return of(result as T);
    };
  }
}

