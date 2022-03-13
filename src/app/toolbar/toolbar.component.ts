import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ToolbarService, Weather, WeatherFiveDays } from './toolbar.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})


export class ToolbarComponent implements OnInit{

  form: FormGroup;
  weather: Weather;
  weatherFiveDays: WeatherFiveDays;


  @Output() addWeather: EventEmitter<Weather> = new EventEmitter<Weather>();
  @Output() addWeatherFiveDays: EventEmitter<WeatherFiveDays> = new EventEmitter<WeatherFiveDays>();

  constructor(private toolbarService: ToolbarService) {}

  ngOnInit(){
    this.form = new FormGroup({
      city: new FormControl(null,[
          Validators.required,
          Validators.maxLength(20)
        ]
      )
    });
  }


  submit() {

    if (this.form.valid) {
      const formData = {...this.form.value}
      console.log(formData.city)

      if (!formData.city.trim()) {
       return
      }

      this.toolbarService.sendRequest(formData.city.trim())
        .subscribe(response =>{
          this.weather = response;
          console.log(response)
          this.addWeather.emit(this.weather);
        });

      this.toolbarService.sendFiveDaysRequest(formData.city.trim())
        .subscribe(response =>{
          this.weatherFiveDays = response;
          console.log(this.weatherFiveDays);
          this.addWeatherFiveDays.emit(this.weatherFiveDays);
        });

      this.form.reset()
    }
  }

}
