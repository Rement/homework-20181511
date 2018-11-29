import {Component, OnInit} from '@angular/core';
import {data, IData} from './data';
import {EventService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public hotels$ = data;

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.hotels$.subscribe(
      (hotelData: IData[]) => {
        this.eventService.selectedHotel(hotelData[0]);
        this.eventService.setHotels(hotelData);
      });
  }
}
