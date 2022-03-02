import { Component, OnInit} from '@angular/core';
import { ContentServise } from './content.service';
import { Weather } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {



  constructor(private contentService: ContentServise) {}

  weather: Weather;
  city: string = "Moscow";
  sunriseTime: string;
  sunsetTime: string;
  ngOnInit() {
    this.contentService.fetchWeather()
        .subscribe(response =>{
          console.log(response);
          this.weather = response;
          let date = new Date(this.weather.sys.sunrise * 1000);
          this.sunriseTime = date.getHours() + ':' + date.getMinutes();
          date = new Date(this.weather.sys.sunset * 1000);
          this.sunsetTime = date.getHours() + ':' + date.getMinutes();
        })
  };
}
