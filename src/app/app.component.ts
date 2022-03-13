import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather, WeatherFiveDays } from './toolbar/toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{

  weather: Weather;
  weatherFiveDays: WeatherFiveDays;

  updateWeather(weather: Weather) {
    this.weather = weather;
  }

  updateWeatherFiveDays(weatherFiveDays: WeatherFiveDays) {
    this.weatherFiveDays = weatherFiveDays;
  }
}
