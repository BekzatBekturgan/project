import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviews = [];
  constructor() { }
  addToReviews(review) {
    this.reviews.push(review);
  }
  getReviews() {
    return this.reviews;
  }

  clearReviews() {
    this.reviews = [];
    return this.reviews;
  }

  deleteFromCart(review){
    this.reviews.splice(review,1); 
  }
}
