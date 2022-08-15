import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppData } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class AppSevicesService {

  public dataForecast: any;

  private apiUrl: string = 'http://api.weatherstack.com/forecast'
  private apiKey: string = 'ab4d5260f593d995b59aacaf93c1dd8e'


  constructor(private http: HttpClient) { }



  getForecast(city: string) {
    const params = new HttpParams()
    .set('access_key', this.apiKey)
    .set('query', city)
    return this.http.get(`${this.apiUrl}`, {params}).pipe()
  }


}
