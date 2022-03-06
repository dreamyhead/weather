import { Component, EventEmitter, Output } from '@angular/core';
import { ToolbarService } from './toolbar.service';
import { Weather } from './toolbar.service';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})


export class ToolbarComponent{

  city: string;
  weather: Weather;
  // sunriseTime: string;
  // sunsetTime: string;
  @Output() addWeather: EventEmitter<Weather> = new EventEmitter<Weather>();

  constructor(private toolbarService: ToolbarService) {}

  sendRequest(city: string) {
    this.toolbarService.sendRequest(city)
        .subscribe(response =>{
          console.log(this.city);
          console.log(response);
          this.weather = response;
          this.addWeather.emit(this.weather);
          // let date = new Date(this.weather.sys.sunrise * 1000);
          // this.sunriseTime = date.toLocaleString('ru-RU', {hour: 'numeric', minute: 'numeric'});
          // date = new Date(this.weather.sys.sunset * 1000);
          // this.sunsetTime = date.toLocaleString('ru-RU', {hour: 'numeric', minute: 'numeric'});
    });
  }

}
