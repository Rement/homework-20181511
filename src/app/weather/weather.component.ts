import {Component, OnInit} from '@angular/core';
import {EventService} from '../app.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.hotel$.subscribe(
      (a) => {
        console.log('a');
        console.log(a);
      }
    );
  }
}
