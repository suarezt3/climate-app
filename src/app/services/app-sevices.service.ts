import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppData } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class AppSevicesService {

  public dataForecast: any;

  private apiUrl: string = 'http://api.openweathermap.org/data/2.5/forecast'
  private apiKey: string = 'f4f1982624c619857cfdc260de0fa20e'


  constructor(private http: HttpClient) { }


  getForecast2(city: string) {
    const params = new HttpParams()
    .set('appid', this.apiKey)
    .set('id', '524901')
    .set('lang', 'es')
    .set('units', 'metric')
    .set('q', city)
    return this.http.get(`${this.apiUrl}`, {params}).pipe()
  }






}
