import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IData, IHotel} from '../data';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  public hotelGlobalData: IHotel[] = [];

  public allHotelInfo: IData[] = [];

  public image: string;

  private starRankingSet: Set<number> = new Set();

  public filter: number;

  public initHotel: IHotel;

  @Input()
  set hotels(hotels: IData[]) {
    this.allHotelInfo = hotels;
    hotels.forEach(
      (hotel: IData) => {
        this.hotelGlobalData.push(hotel.hotel);
        this.starRankingSet.add(hotel.hotel.startCount);
      }
    );
  }

  @Output() sendHotelData: EventEmitter<IData> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
    this.starRankingSet = new Set(Array.from(this.starRankingSet).sort());
    this.image = this.hotelGlobalData[0].img;
    this.getHotel(this.hotelGlobalData[0]);
  }

  getHotel(hotel: IHotel) {
    this.image = hotel.img;
    const findDataForHotel: IData = this.allHotelInfo.filter(
      (h: IData) => {
        return h.hotel === hotel;
      }
    )[0];
    this.sendHotelData.emit(findDataForHotel);
  }

  setFilter(star) {
    this.filter = star;
  }

}
