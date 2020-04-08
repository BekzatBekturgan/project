import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../review.service';
import { Review } from './review';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: Review[];
  constructor(
    private reviewService: ReviewService,
  ) { }

  ngOnInit() {
    this.reviews = this.reviewService.getReviews();
  }
  clearReviews(){
    this.reviews=this.reviewService.clearReviews();
  }

}
