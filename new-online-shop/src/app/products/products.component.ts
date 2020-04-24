import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService} from '../product.service'
import { Location } from '@angular/common';
<<<<<<< HEAD
import { ProductModel } from '../models'
=======
import { ProductModel} from '../models'
>>>>>>> d6b2cf714877b5aa01fd163de151ab053bcebc45

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
<<<<<<< HEAD
  products: ProductModel[] = [];
=======
  products: ProductModel[]=[];
>>>>>>> d6b2cf714877b5aa01fd163de151ab053bcebc45
  constructor(
    private location: Location,
    private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProductofC(id)
      .subscribe(products => this.products = products);
  }
  goBack(): void {
    this.location.back();
  }
  }
  


