import {Pipe, PipeTransform} from '@angular/core';
import {IHotel} from '../data';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  transform(hotelGlobalData: IHotel[], filter: number): IHotel[] {
    if (!hotelGlobalData || !filter) {
      return hotelGlobalData;
    }
    return hotelGlobalData.filter(
      (hotel) => {
        return filter === null ? true : hotel.startCount === filter;
      }
    );
  }

}
