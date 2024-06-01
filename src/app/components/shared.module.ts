import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { One1Component } from './one/one-1/one-1.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { Two1Component } from './two/two-1/two-1.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, // Importera CommonModule så att ngIf, ngFor och andra vanliga direktiv är tillgängliga
    HomeComponent,
    One1Component, 
    OneComponent, 
    TwoComponent,
    Two1Component

  ],
  exports: [
    HomeComponent,
    One1Component,
    OneComponent, 
    TwoComponent,
    Two1Component
  ]
})
export class SharedModule { }
