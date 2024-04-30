import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfpostingComponent } from './profposting/profposting.component';
import { ReusableComponent } from './reusable/reusable.component';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';



@NgModule({
  declarations: [
    ProfpostingComponent,
    ReusableComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    ProfpostingComponent,
    ReusableComponent
  ]
})
export class ComponentModule { }
