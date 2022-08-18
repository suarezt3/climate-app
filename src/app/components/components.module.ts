import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardForecastComponent } from './card-forecast/card-forecast.component';
import { CardCurrentsComponent } from './card-currents/card-currents.component';
import { CardsClimateComponent } from './cards-climate/cards-climate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    CardForecastComponent,
    CardCurrentsComponent,
    CardsClimateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNGModule
  ],
  exports: [
    CardForecastComponent,
    CardCurrentsComponent,
    CardsClimateComponent
  ]
})
export class ComponentsModule { }
