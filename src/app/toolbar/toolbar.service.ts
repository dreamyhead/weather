import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Weather {
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
  wind: {
    speed: number;
  }
  name: string;
}

@Injectable()

export class ToolbarService {

  constructor(private http: HttpClient) {}

  sendRequest(city: string): Observable<Weather> {
      return this.http.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4f592b2566721ec99b69bb95df24da9a`)
  };
}
