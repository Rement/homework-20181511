import {Component, Input, OnInit} from '@angular/core';
import {IData, IHotel} from '../data';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  public hotelGlobalData: IHotel[];

  @Input()
  set hotels(hotels: IData[]) {
    hotels.forEach(
      (hotel: IData) => {
        this.hotelGlobalData.push(hotel.hotel);
      }
    );
  }

  constructor() {
    this.hotelGlobalData = [];
  }

  ngOnInit() {
    console.log(this.hotelGlobalData);
  }

}
