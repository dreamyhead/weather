import { Component, Input } from '@angular/core';
import { Weather } from '../../toolbar/toolbar.service';

@Component({
  selector: 'app-card-main',
  templateUrl: './card-main.component.html',
  styleUrls: ['./card-main.component.scss']
})

export class CardMainComponent{

  @Input() weather: Weather;

}
