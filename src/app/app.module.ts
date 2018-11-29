import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { WeatherComponent } from './weather/weather.component';
import { RatingComponent } from './rating/rating.component';
import { HotelInfoComponent } from './hotel/hotel-info/hotel-info.component';
import { PhonePipePipe } from './hotel/hotel-info/phone-pipe.pipe';
import { HotelFilterPipe } from './hotel/hotel-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    WeatherComponent,
    RatingComponent,
    HotelInfoComponent,
    PhonePipePipe,
    HotelFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
