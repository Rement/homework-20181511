import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export enum WeatherType {
  FOG = 'FOG',
  SUNNY = 'SUNNY',
  CLOUDY = 'CLOUDY'
}

export interface IHotel {
  img: string;
  address: string;
  phone: number;
  name: string;
}

export interface IWeather {
  temperature: number;
  weatherType: WeatherType;
}

export interface IRating {
  available: boolean;
  startCount: number;
}

export interface IData {
  hotel: IHotel;
  weather: IWeather;
  rating: IRating;
}

const _data: IData[] = [
  {
    hotel: {
      img: 'assets/img/new-york.jpg',
      address: '700 Fifth Avenue at 55th Street, Нью-Йорк, NY 10019, США',
      phone: 12129562888,
      name: 'The Peninsula New York'
    },
    weather: {temperature: 4, weatherType: WeatherType.SUNNY},
    rating: {available: true, startCount: 5}
  },
  {
    hotel: {
      img: 'assets/img/atlantic.jpg',
      address: '100 South North Carolina Avenue, Атлантик-Сити, NJ 08401, США',
      phone: 16094494200,
      name: 'Wyndham Skyline Tower'
    },
    weather: {temperature: 8, weatherType: WeatherType.FOG},
    rating: {available: false, startCount: 3}
  },
  {
    hotel: {
      img: 'assets/img/san-hose.jpg',
      address: '1 Main Street, Los Altos, 94022, США',
      phone: 16509462000,
      name: 'The Peninsula New York'
    },
    weather: {temperature: 20, weatherType: WeatherType.SUNNY},
    rating: {available: true, startCount: 4}
  }
];

export const data: Observable<IData[]> = of(_data)
  .pipe(
    delay(4000)
  );
