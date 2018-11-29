import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IHotel} from '../../data';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent {

  @Input() hotel: IHotel;

  @Output() sendHotel: EventEmitter<IHotel> = new EventEmitter();

  imageEvent(hotel: IHotel) {
    this.sendHotel.emit(hotel);
  }

}
