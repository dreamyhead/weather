import { Component, Input} from '@angular/core';
import { Weather, WeatherFiveDays } from '../toolbar/toolbar.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent{

  @Input() weather: Weather;
  @Input() error: string;
  @Input() weatherFiveDays: WeatherFiveDays;

}
