import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IHotel} from '../../data';
import {EventService} from '../../app.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent {

  constructor(private eventService: EventService) {
  }

}
