import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { One1Component } from './one/one-1/one-1.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { Two1Component } from './two/two-1/two-1.component';
import { PageComponentComponent } from './pages/page-component/page-component.component'; 
import { PageServicesComponent } from './pages/page-services/page-services.component'; 
import { PagePipesComponent } from './pages/page-pipes/page-pipes.component'; 
import { PageDirectivesComponent } from './pages/page-directives/page-directives.component'; 
import { PageOthersComponent } from './pages/page-others/page-others.component'; 



@NgModule({
  declarations: [],
  imports: [
    CommonModule, // Importera CommonModule så att ngIf, ngFor och andra vanliga direktiv är tillgängliga
    HomeComponent,
    PageComponentComponent,
    PageDirectivesComponent,
    PageServicesComponent,
    PagePipesComponent,
    PageOthersComponent,
    One1Component, 
    OneComponent, 
    TwoComponent,
    Two1Component

  ],
  exports: [
    HomeComponent,
    PageComponentComponent,
    PageDirectivesComponent,
    PageServicesComponent,
    PagePipesComponent,
    PageOthersComponent,
    One1Component,
    OneComponent, 
    TwoComponent,
    Two1Component
  ]
})
export class SharedModule { }
