import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {IData} from './data';

@Injectable()
export class EventService {
  private _hotelClicked = new Subject<IData>();
  hotel$ = this._hotelClicked.asObservable();

  selectHotel(hotel: IData) {
    this._hotelClicked.next(hotel);
  }
}
