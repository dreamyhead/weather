import { Component, OnInit, Input } from '@angular/core';
import { WeatherFiveDays } from '../../toolbar/toolbar.service';
@Component({
  selector: 'app-card-five-days',
  templateUrl: './card-five-days.component.html',
  styleUrls: ['./card-five-days.component.scss']
})
export class CardFiveDaysComponent implements OnInit {

  constructor() { }

  @Input() weatherFiveDays: WeatherFiveDays;

  ngOnInit(): void { }
}
