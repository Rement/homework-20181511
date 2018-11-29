import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {IData} from './data';

@Injectable()
export class EventService {
  private _hotelClicked = new Subject<IData>();

  private _allHotels = new Subject<IData[]>();

  hotel$ = this._hotelClicked.asObservable();
  allHotels$ = this._allHotels.asObservable();

  selectedHotel(hotel: IData) {
    this._hotelClicked.next(hotel);
  }

  setHotels(hotels: IData[]) {
    this._allHotels.next(hotels);
  }
}
