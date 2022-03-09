import { Component, EventEmitter, Output } from '@angular/core';
import { ToolbarService, Weather } from './toolbar.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})


export class ToolbarComponent{

  city: string;
  weather: Weather;
  @Output() addWeather: EventEmitter<Weather> = new EventEmitter<Weather>();

  constructor(private toolbarService: ToolbarService) {}

  sendRequest(city: string) {

    if (!this.city.trim()) {
      return
    }

    this.toolbarService.sendRequest(city)
        .subscribe(response =>{
          this.weather = response;
          this.addWeather.emit(this.weather);
          this.city = '';
    });
  }

}
