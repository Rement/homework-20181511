import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IHotel} from '../../data';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {

  @Input() hotel: IHotel;

  @Output() sendHotel: EventEmitter<IHotel> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  imageEvent(hotel: IHotel) {
    this.sendHotel.emit(hotel);
  }

}
