import {Component, Input} from '@angular/core';
import {IData, IHotel} from '../../data';
import {EventService} from '../../app.service';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent {

  @Input() data: IData;

  constructor(private eventService: EventService) {
  }

}
