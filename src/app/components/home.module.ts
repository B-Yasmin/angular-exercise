import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home.component';
import { OneComponent } from './one/one.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'one', component: OneComponent },
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    BrowserModule,
    HomeRoutingModule,
    CommonModule,
    RouterModule.forRoot(routes),
    
  ]
})
export class HomeModule { }
