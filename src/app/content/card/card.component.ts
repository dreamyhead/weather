import { Component, Input, OnInit } from '@angular/core';
import { Weather } from '../../toolbar/toolbar.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{

  @Input() weather: Weather;

  ngOnInit() {
    console.log(this.weather.main.temp_max)
  }
}
