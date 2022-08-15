import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardForecastComponent } from './card-forecast/card-forecast.component';
import { CardCurrentsComponent } from './card-currents/card-currents.component';
import { CardsClimateComponent } from './cards-climate/cards-climate.component';



@NgModule({
  declarations: [
    CardForecastComponent,
    CardCurrentsComponent,
    CardsClimateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardForecastComponent,
    CardCurrentsComponent,
    CardsClimateComponent
  ]
})
export class ComponentsModule { }
