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
  startCount: number;
}

export interface IWeather {
  temperature: number;
  weatherType: WeatherType;
}

export interface IRating {
  available: boolean;
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
      name: 'The Peninsula New York',
      startCount: 5
    },
    weather: {temperature: 4, weatherType: WeatherType.SUNNY},
    rating: {available: true}
  },
  {
    hotel: {
      img: 'assets/img/atlantic.jpg',
      address: '100 South North Carolina Avenue, Атлантик-Сити, NJ 08401, США',
      phone: 16094494200,
      name: 'Wyndham Skyline Tower',
      startCount: 3
    },
    weather: {temperature: 8, weatherType: WeatherType.FOG},
    rating: {available: false}
  },
  {
    hotel: {
      img: 'assets/img/new-york-2.jpg',
      address: '129 W 46th St, New York, NY 10036, США',
      phone: 12122212600,
      name: 'Broadway at Times Square Hotel', startCount: 3
    },
    weather: {temperature: 5, weatherType: WeatherType.SUNNY},
    rating: {available: true}
  },
  {
    hotel: {
      img: 'assets/img/san-hose.jpg',
      address: '1 Main Street, Los Altos, 94022, США',
      phone: 16509462000,
      name: 'San Hose Hotel',
      startCount: 4
    },
    weather: {temperature: 20, weatherType: WeatherType.SUNNY},
    rating: {available: true}
  }
];

export const data: Observable<IData[]> = of(_data)
  .pipe(
    delay(5000)
  );
