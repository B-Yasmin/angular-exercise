import { Component} from '@angular/core';
import { One1Component } from './one-1/one-1.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-one',
  standalone: true,
  templateUrl: './one.component.html',
  imports: [One1Component, NavbarComponent]
})
export class OneComponent {
  
}
