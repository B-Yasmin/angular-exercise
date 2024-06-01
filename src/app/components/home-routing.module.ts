import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
   { path: 'home', component: HomeComponent },
   { path: 'one', component: OneComponent },
   { path: 'two', component: TwoComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
