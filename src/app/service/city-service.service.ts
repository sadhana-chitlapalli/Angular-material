import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  public fetchAllCities() {
    const url = 'http://localhost:3000/api/cities';
    return this.http.get(url);
  }
}


