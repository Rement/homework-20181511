import {Component, Input, OnInit} from '@angular/core';
import {IRating} from '../data';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: IRating;

  constructor() {
  }

  ngOnInit() {
  }

}
