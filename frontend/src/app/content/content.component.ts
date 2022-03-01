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

  weather: any;
  city: string = "Moscow";

  ngOnInit() {
    this.contentService.fetchWeather()
        .subscribe(response =>{
          console.log(response);
          this.weather = response;
        })
  };
}
