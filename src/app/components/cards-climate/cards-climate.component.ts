import { Component, OnInit } from '@angular/core';
import { AppData} from 'src/app/interfaces/data.interface';
import { AppSevicesService } from 'src/app/services/app-sevices.service';

@Component({
  selector: 'app-cards-climate',
  templateUrl: './cards-climate.component.html',
  styleUrls: ['./cards-climate.component.css']
})
export class CardsClimateComponent implements OnInit {

  public cities!: any



  constructor(private appservice: AppSevicesService) {this.cities = this.appservice.dataForecast}



  ngOnInit(): void {
  this.appservice.getForecast('Cali').subscribe((resp)=> {
    console.log("DATA", resp);

    this.cities = Object.assign(resp)
  })

  }

 allData() {
      this.appservice.getForecast('Bogota').subscribe((resp) => {
        this.cities = Object.assign(resp)
      })
  }

  allDatas() {
   this.appservice.getForecast('Medellin').subscribe((resp) => {
    this.cities = Object.assign(resp)
   })
 }

}
