import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service'
import { ProductModel, CategoryModel} from '../models'
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: CategoryModel[]=[];
  public products: ProductModel[]=[];
  public inputText: string = "";
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }
  getCategories(){
    this.productService.getCategory()
      .subscribe(categories => this.categories = categories);
  }
  getProducts(){
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

}
