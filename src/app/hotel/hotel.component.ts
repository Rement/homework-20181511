import {Component, OnInit} from '@angular/core';
import {IData} from '../data';
import {EventService} from '../app.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  public allHotelInfo: IData[] = [];

  public starRankingSet: Set<number> = new Set();

  public filter: number;

  constructor(public eventService: EventService) {
  }

  ngOnInit() {
    this.eventService.allHotels$.subscribe(
      (allHotels: IData[]) => {
        this.allHotelInfo = allHotels;
        allHotels.forEach(
          (hotel: IData) => {
            this.starRankingSet.add(hotel.hotel.startCount);
          }
        );
        this.starRankingSet = new Set(Array.from(this.starRankingSet).sort());
      }
    );
  }

  setFilter(star) {
    this.filter = star;
  }

}
