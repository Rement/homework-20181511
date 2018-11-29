import {Component} from '@angular/core';
import {EventService} from '../app.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor(private eventService: EventService) {
  }
}
