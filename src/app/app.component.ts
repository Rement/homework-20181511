import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {data, IData, IRating, IWeather, WeatherType} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  public hotels$ = data;

  public weather: IWeather;

  public rating: IRating;

  constructor(private elementRef: ElementRef) {

  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'black';
  }

  getData(event: IData) {
    this.weather = event.weather;
    this.rating = event.rating;
  }

  backGroundStyle(type: WeatherType): string {
    if (type === WeatherType.SUNNY) {
      return 'sunny';
    } else if (type === WeatherType.CLOUDY) {
      return 'cloudy';
    } else {
      return 'foggy';
    }
  }

}
