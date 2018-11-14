import {Component, OnInit} from '@angular/core';
import {data, IData} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public hotels$ = data;
}
