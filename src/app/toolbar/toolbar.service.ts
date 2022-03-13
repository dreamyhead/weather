import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Weather {
  dt: number;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  visibility: number;
  weather: [
    {
      description: string;
    }
  ]
  wind: {
    speed: number;
  }
  name: string;
}

export interface WeatherFiveDays {
    list: [
      {
        dt: number;
        main: {
          temp: number;
          temp_max: number;
          temp_min: number;
          feels_like: number;
          humidity: number;
          pressure: number;
        };
        wind: {
          speed: number;
        };
        visibility: number;
        dt_txt: string;
      }
    ]
}

@Injectable()

export class ToolbarService  {

  constructor(private http: HttpClient) {}

  sendFiveDaysRequest(city: string): Observable<WeatherFiveDays>{
    return this.http.get<WeatherFiveDays>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&appid=4f592b2566721ec99b69bb95df24da9a`)
  };

  sendRequest(city: string): Observable<Weather> {
    return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=4f592b2566721ec99b69bb95df24da9a`)
  };
}
