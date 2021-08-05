import {Component, OnInit} from '@angular/core';
import {GetCarsService} from "../services/get-cars.service";
import {ICar} from "../models/iCar";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: ICar[];

  constructor(private carService: GetCarsService) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(value => {
      console.log(this.cars)
      this.cars = value
  })
}
}
