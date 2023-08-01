import { Component, OnInit } from '@angular/core';
import { City } from './../forms/cityForms';
import { CityService } from 'app/service/city-service.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'name_native', 'country', 'continent', 'latitude', 'longitude',
    'population', 'founded', 'landmarks'];
  dataSource = Array<City>();

  constructor(
    private cityService: CityService
  ) { }

  ngOnInit() {
    this.fetchCities()
  }

  fetchCities() {
    this.cityService.fetchAllCities().subscribe(
      (res) => {
        this.dataSource = res["message"]["cities"]
      }
    )
  }



}

