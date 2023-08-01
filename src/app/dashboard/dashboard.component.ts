import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {MatCardModule} from '@angular/material/card';
import { City } from 'app/forms/cityForms';
import {MatIconModule} from '@angular/material/icon';
import { CityService } from 'app/service/city-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private cityService: CityService) { }
  cityDets = Array<City>();
  ngOnInit() {
    this.fetchCities();
  }
  fetchCities() {
    this.cityService.fetchAllCities().subscribe(
      (res) => {
        this.cityDets = res["message"]["cities"]
      }
    )
  }

}
