import { Component, Input } from '@angular/core';
import { Weather } from '../../toolbar/toolbar.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Input() weather: Weather;

}
