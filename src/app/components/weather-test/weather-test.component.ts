import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/demo.model';

@Component({
  selector: 'app-weather-test',
  templateUrl: './weather-test.component.html',
  styleUrls: ['./weather-test.component.scss']
})
export class WeatherTestComponent implements OnInit {


  str1: string = "hello this is a string";
  myObj: Person = {
    name: 'person1',
    place: 'India'
  }

  inputPincode: any = "";

  constructor() { }

  ngOnInit() {
  }

  showWeatherDetails() {
    console.log('show weather details : ', this.inputPincode)
  }

}
