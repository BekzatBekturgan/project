import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../product.service';
import {Product} from '../product';
import { CartService } from '../cart.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../review.service';
import {Review} from '../review/review';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product: Product;
  review: Review;
  share(num) {
    if(num==1){
      window.open("https://telegram.me/share/url?url=http://localhost:4200"+this.location.path()+"&text=<>", "_blank");
    }
    else if(num==2){
      window.open("whatsapp://send?text=http://localhost:4200"+this.location.path()+"");
    }
    
  }
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private reviewService: ReviewService,
  
    ){}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }
  
  goBack(): void {
    this.location.back();
  }



  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  onSend(email, reviewText): void{
    this.review.email = email;
    this.review.reviewText = reviewText;
    this.reviewService.addToReviews(this.review);
    window.alert('Your review has been added to the reviews!');
  }

  

}
