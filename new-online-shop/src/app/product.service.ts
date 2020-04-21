import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './products';
import { Product } from './product';
import { Category } from './category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'http://localhost:8000'
  constructor( private http: HttpClient) { }
  private productsUrl = 'api/products';  
  private categoriesUrl = 'api/categories';  

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>( `${this.BASE_URL}/api/products`)
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/api/products/${id}/`);
  }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>( `${this.BASE_URL}/api/categories`)
  }

  getCategories(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);

  }
 

  getProductofC(categoryId: number): Observable<Product[]> {
    return of(PRODUCTS.filter(product => product.categoryId === categoryId));
    //return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${categoryId}/`);
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

    console.error(error); 

    return of(result as T);
    };
  }
  searchHeroes(term: string): Observable<Product[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productsUrl}/?name=${term}`).pipe(
    catchError(this.handleError<Product[]>('searchProducts', []))
  );
}
}

