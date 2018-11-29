import {Component} from '@angular/core';
import {EventService} from '../app.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  constructor(private eventService: EventService) {
  }
}
