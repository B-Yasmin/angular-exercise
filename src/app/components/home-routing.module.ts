import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
   { path: 'home', component: HomeComponent },
   { path: 'one', component: OneComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
