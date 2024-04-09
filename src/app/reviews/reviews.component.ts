import { Component, OnInit } from '@angular/core';
import {Review, reviews} from "../../assets/reviews";


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = reviews;

  constructor() { }

  ngOnInit(): void {
  }

}
