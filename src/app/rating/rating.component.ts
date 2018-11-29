import {Component, Input} from '@angular/core';
import {IRating} from '../data';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input() rating: IRating;
}
