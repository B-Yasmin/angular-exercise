import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { One1Component } from './one/one-1/one-1.component';
import { OneComponent } from './one/one.component';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, // Importera CommonModule så att ngIf, ngFor och andra vanliga direktiv är tillgängliga
    One1Component, 
    OneComponent, 
    HomeComponent
  ],
  exports: [
    One1Component,
    OneComponent, 
    HomeComponent
  ]
})
export class SharedModule { }
