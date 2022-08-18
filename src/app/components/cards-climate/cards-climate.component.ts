import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppSevicesService } from 'src/app/services/app-sevices.service';

@Component({
  selector: 'app-cards-climate',
  templateUrl: './cards-climate.component.html',
  styleUrls: ['./cards-climate.component.css']
})
export class CardsClimateComponent implements OnInit {

  public cities!: any;
  public myForm!: FormGroup


  constructor(private appservice: AppSevicesService, private fb: FormBuilder) {}






  ngOnInit(): void {
    this.myForm = this.fb.group({
      city: ['', []]
    })


  this.appservice.getForecast2('Cali').subscribe((resp)=> {
    console.log("DATA", resp);

    this.cities = resp
  })

  }


  submit() {
    const city = this.myForm.get('city')?.value
    this.appservice.getForecast2(city).subscribe((resp) => {
      this.cities = Object.assign(resp)
      console.log("DATA", resp);

      this.myForm.reset()
    })
}


}
