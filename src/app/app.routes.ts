import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'one', component: OneComponent },
  { path: 'two', component: TwoComponent },
 ];
